# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Metis AI Research (metis-ai.io) — a static marketing/landing page for an AI company built with React 18, Webpack 5, and Tailwind CSS 3.

## Commands

- `npm start` — dev server on port 3000
- `npm run build` — production build to `dist/`

No test runner or linter is configured.

## Architecture

Single-page React app with section-based component structure. Each section is a self-contained directory under `src/` with its own `.js` and `.css` files:

- **Ambient** — fixed background blobs + grid
- **Nav** — logo, section links, language switcher, contact CTA
- **Hero** — headline and CTAs
- **WhoWeAre** (`#vision`) — company statement
- **ProductMarquee** (`#product`) — one showcase per product: arotaro, Blinc (`#blinc`)
- **HowWeBuild** (`#how`) — Metis OS, our internal AI-employee platform. It is sign-in only, so it is presented as how we work: no link, no architecture detail
- **Manifesto**, **Founders** (`#team`), **BackedBy**, **Contact**, **Footer**

`src/App.js` composes all sections in page order. Entry point is `src/index.js`. `Header`, `Services`, `Vision`, `Product`, `Solution` and `Badge` are the previous design and are no longer rendered.

All copy lives in `src/locales/en.json` and `src/locales/ja.json` (react-i18next, set up in `src/i18n.js`). Every visible string needs both. Product facts (Blinc store links, claims such as "~60ms tap to barcode") come from the Blinc repo's `store/` listings and `site/index.html`; keep them in sync with those rather than writing new claims here.

## Styling

Components use a mix of Tailwind utility classes (inline) and co-located CSS files. The Inter font is loaded via `@fontsource/inter` and set as the default sans font in `tailwind.config.js`. A custom `float` animation is defined there as well.

## Static Assets

Images live in `public/images/` and are referenced via relative paths (`images/...`) in components. Webpack's `CopyWebpackPlugin` copies them to `dist/images/` at build time.

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys to GitHub Pages on push to `master`: builds the site with `npm run build`, then uploads `dist/` via `actions/upload-pages-artifact` and `actions/deploy-pages`. The custom apex domain `metis-ai.io` is pinned via `public/CNAME`, which webpack copies into `dist/CNAME` at build time. Pages is configured in repo Settings → Pages with source set to "GitHub Actions". No secrets required — uses GitHub's built-in OIDC token.
