# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: businesses weighing a partnership with Metis. That could mean integrating or distributing one of our products (for example a retailer or loyalty program and Blinc), co-building, or another commercial tie-up. They arrive from an intro, an email signature or a search, decide within seconds whether this is a serious, capable team, and then either reach out or leave.

Secondary: people looking up the company behind arotaro or Blinc, potential hires, and the curious. Both English- and Japanese-speaking visitors are expected.

## Product Purpose

metis-ai.io is the public face of Metis AI Research, a small Vancouver studio that builds and runs its own AI-powered consumer products. The site makes a visitor believe that this small team ships real, polished software and operates it with AI, and it gives a partner one obvious way to start a conversation (info@metis-ai.io). Success means a partner leaves impressed and either emails, or remembers Metis as the team that had its act together.

## Positioning

A team of four ships and runs more than one live product because the company itself runs on AI. Metis OS is an internal system where AI employees work alongside people: they write reports, triage feedback, propose roadmaps, and run each product's operations. Metis builds with AI and also operates by AI. The proof is the products: arotaro and Blinc are live, and Metis OS is in daily use.

## Operating Context

- Static marketing site: React 18, Webpack 5, Tailwind 3, deployed to GitHub Pages at the apex domain metis-ai.io.
- All copy is in `src/locales/en.json` and `src/locales/ja.json` and must exist in both. The language is detected from the URL hash, then localStorage, then the browser.
- Contact is by email only (info@metis-ai.io). There are no forms and no backend.

## Capabilities and Constraints

- Products (live):
  - **arotaro** (arotaro.ai): a mental-wellness companion offering tarot, astrology and fortune telling, available 24/7.
  - **Blinc** (blinc.metis-ai.io): a loyalty-card wallet for iOS and Android. It works offline, needs no account, and keeps cards on the device. Product facts such as "~60ms tap to barcode" and the store links come from the Blinc repo's `store/` listings and `site/index.html`.
- **Metis OS**: internal and sign-in only. Present it as how Metis works: no link, no architecture detail. Its pillars are AI employees, trustworthy reports, roadmaps planned together, and one door to every product.
- Metis does not sell client services. Do not present services, pricing, case studies or client logos.
- All current sections stay in some form: products, how we build (Metis OS), principles, team, and contact. The "Backed by Microsoft for Startups" band and its mentions are dropped.

## Brand Commitments

- Name: Metis AI Research, written "metis ai" in the wordmark.
- Keep the logo (the three-bar M mark plus the "metis ai" wordmark, `src/Logo/Logo.js`) and a blue brand identity.
- Bilingual: English and Japanese, with a visible language switcher.
- Voice: calm and confident, with no hype. The "quietly delivered" and "inevitable, not impressive" stance is the company's own.
- Standing visual preference (chosen 2026-11-21): the category-standard premium tech-studio site, played straight and executed at full craft. The craft and motion bar is Stripe. Dark theme.

## Evidence on Hand

- Metis OS screenshot: `public/images/metis-os.png` (1492×897).
- Blinc icon: `public/images/blinc-icon.png`.
- Live product URLs and the Blinc App Store and Google Play links (currently in `src/ProductMarquee/ProductMarquee.js`).
- Team: Sarah (Design, co-founder, ex-Microsoft), Riku (Engineering, co-founder, ex-Microsoft), Jason (Quality, co-founder, SET at GitLab, Broadcom), Alice (Growth & Data). There are no photos, so initials stand in for them.
- Missing, and must not be invented: customer counts, user numbers, revenue, testimonials, partner logos, press, funding amounts. There is no arotaro screenshot or real app imagery in the repo yet.

## Product Principles

1. Prove it, don't claim it: show the products and Metis OS working instead of adjectives.
2. Small and serious: the craft should make a four-person team read as a capable partner.
3. One door: every path ends at a single, easy way to start a conversation.
4. Both languages are first-class: Japanese is never an afterthought in layout or type.

## Accessibility & Inclusion

WCAG 2.2 AA. All motion must respect `prefers-reduced-motion`, keeping content and state visible without the animation.
