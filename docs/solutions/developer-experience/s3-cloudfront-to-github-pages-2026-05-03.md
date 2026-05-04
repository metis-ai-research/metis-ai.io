---
title: Migrate a static site from S3 + CloudFront to GitHub Pages
date: 2026-05-03
category: developer-experience
module: deployment
problem_type: developer_experience
component: tooling
severity: medium
applies_when:
  - Migrating a static site off AWS S3 + CloudFront to a managed host
  - Choosing static hosting when the repo is owned by a GitHub organization
  - Custom domain with DNS hosted by a third party (Vercel DNS, Cloudflare, registrar built-in)
tags: [github-pages, deployment, dns, static-site, vercel-dns, cloudfront, s3-migration]
---

# Migrate a static site from S3 + CloudFront to GitHub Pages

## Context

`metis-ai.io` was hosted on S3 with CloudFront in front of it. AWS deployment ergonomics felt heavy for a static React landing page; the goal was fewer services to manage and to lean on tools already in the stack (auto memory [claude]: "Prefer fewer services and tools already in use" — GitHub already used heavily, AWS felt complicated).

Two false starts before landing on GitHub Pages:

1. **Vercel** — blocked. Vercel Hobby is non-commercial / personal-only, and the repo is owned by a GitHub organization. Org-owned repos require Pro ($20/user/mo).
2. **Cloudflare Pages** — would have worked, but introduced a new vendor dashboard the user didn't otherwise touch.

GitHub Pages was the right fit because GitHub was already in the stack — no new accounts, no new dashboards, no tokens to manage. Catch: Pages is free only on **public** repos. Flipping the repo public was acceptable for a marketing page after a short history audit.

## Guidance

### Pick the host based on repo + stack constraints

| Constraint | Right fit |
|---|---|
| Public repo, GitHub already in stack | **GitHub Pages** (free) |
| Private repo, willing to onboard a new vendor | **Cloudflare Pages** |
| Org-owned repo must stay private, willing to pay | **GitHub Pro** ($4/user/mo) over Vercel Pro ($20) |
| No migration pain tolerance | **Stay on S3** — it works, it's pennies/month |

### Pre-flip git history audit

Before flipping a private repo public, scan history for committed secrets. Even a clean current `.gitignore` doesn't tell you what lived in past commits.

```bash
# .env files ever committed?
git log --all --full-history --name-only -- "*.env*"

# Suspicious filenames?
git log --all --diff-filter=A --name-only --pretty=format: \
  | sort -u | grep -iE "config|secret|credential|key|token|\.pem|id_rsa"

# Inline literal secret assignments (excluding env-var references)?
git log -p --all \
  | grep -iE "(token|password|secret|api_?key|auth)\s*[:=]\s*['\"][^'\"]{8,}" \
  | grep -v "secrets\.\|process\.env\|ENV\["

# 40+ char opaque strings (filtering commit SHAs and integrity hashes)
git log -p --all | grep -E "[a-zA-Z0-9_-]{40,}" \
  | grep -viE "integrity|sha512|sha256|node_modules|package-lock|^\s*[+-]?\s*//"
```

If anything leaks: rotate the keys *first*, then either accept exposure (if commits were ever pushed to a remote) or rewrite history with `git filter-repo`.

### Workflow — no secrets, OIDC auth

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  workflow_dispatch:
  push:
    branches: [master]
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: false
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm install
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Pages auth uses GitHub's built-in OIDC token via `id-token: write`. No `VERCEL_TOKEN`/`AWS_ACCESS_KEY_ID`/etc. needed.

### Custom domain — commit a CNAME file into the build

For a custom apex, commit `public/CNAME` containing the bare domain (`metis-ai.io`) and have the build copy it to `dist/CNAME`. Putting the CNAME in the artifact makes it deploy-stable; the dashboard "Custom domain" field alone can be wiped by certain workflow re-runs.

```js
// webpack.config.js — CopyWebpackPlugin
new CopyWebpackPlugin({
  patterns: [
    { from: "public/images", to: "images" },
    { from: "public/CNAME", to: "CNAME", toType: "file" },
  ],
}),
```

Webpack's default `publicPath` works at the apex; no override needed for `<org>.github.io` either since the CNAME redirects.

### DNS migration gotchas

**Apex ALIAS conflicts with A records.** Vercel DNS (and Route 53, etc.) supports ALIAS/ANAME for the apex. If the previous setup pointed apex at a CDN, you'll see:

> Existing record (...,"ALIAS","dvzycrpt1wode.cloudfront.net.") conflicts with attempted ("","A","185.199.108.153") creation.

Order of operations:

1. Delete the apex ALIAS first.
2. Add the four GitHub Pages A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. Delete any leftover A records on `www`, then add `www CNAME <org>.github.io`. GitHub flags A records on `www` with `InvalidARecordError` — they work today but pin you to specific IPs and break if Pages infrastructure renumbers.

**CAA must allow Let's Encrypt.** Pages issues certs via Let's Encrypt. If CAA records exist, `letsencrypt.org` must be in the `issue` list. Windows `nslookup` and `Resolve-DnsName` can't query CAA — use DNS-over-HTTPS:

```powershell
Invoke-RestMethod `
  -Uri "https://cloudflare-dns.com/dns-query?name=metis-ai.io&type=CAA" `
  -Headers @{Accept="application/dns-json"} `
| ConvertTo-Json -Depth 4
```

CAA `data` fields come back hex-encoded: bytes are `[flags][tag-length][tag-ASCII][value-ASCII]`, e.g. `00 05 69 73 73 75 65 6c 65 74 73 65 6e 63 72 79 70 74 2e 6f 72 67` decodes to `0 issue "letsencrypt.org"`.

### Cert provisioning timing

After DNS verifies, GitHub queues a Let's Encrypt request. Typical wait: 5–15 minutes; rare cases up to 24 hours. The "Enforce HTTPS" checkbox stays grayed out until the cert is issued. If it stalls past ~30 min, **clear the Custom domain field, save, then re-enter and save** to re-queue the request.

### Decommission order — CloudFront before S3

When tearing down the old CloudFront → S3 setup *after* the new site is verified live and DNS has flipped:

1. **Disable** the CloudFront distribution (propagation 10–20 min).
2. Delete the disabled distribution.
3. Empty + delete the S3 bucket.
4. Delete the IAM user behind the deploy keys.
5. Remove `AWS_*` repo secrets.

Disabling CloudFront before deleting the bucket means stale-DNS clients hit a friendly CloudFront 404 instead of a hard origin failure during the propagation window.

## Why This Matters

The hard part of leaving AWS for a static site isn't the destination platform — it's the legacy DNS state and the org-repo eligibility traps that disqualify "free" tiers (Vercel Hobby, GitHub Pages on private repos). Mapping those constraints up front turns a multi-detour migration into a single pass.

Once on GitHub Pages, deploys cost nothing, require no secrets, and live entirely inside one dashboard. The marginal cost of the next static site is now near zero.

## When to Apply

This guidance fits when the site is **fully static**, the repo can be **public** (or the org pays for Pages on private), and **DNS is editable** somewhere you control.

## Related

- `.github/workflows/deploy.yml` — the workflow this guidance produced
- `public/CNAME` — committed apex domain pin
- `webpack.config.js` — CNAME copy pattern
- GitHub Pages custom domain docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
