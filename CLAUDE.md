# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Metis AI Research (metis-ai.io) — a static marketing/landing page for an AI company built with React 18, Webpack 5, and Tailwind CSS 3.

## Commands

- `npm start`: dev server on port 3000
- `npm run build`: production build to `dist/` (content-hashed JS and CSS, with CSS extracted to its own file)

No test runner or linter is configured.

## Architecture

Single-page React app with section-based component structure. Each section is a self-contained directory under `src/` with its own `.js` and `.css` files. Page order (`src/App.js`):

- **Nav**: logo, section links, language switcher, Contact. Below 860px the links move into a menu sheet.
- **Hero** (`#top`): headline and CTAs. The Metis OS screenshot flattens from a tilt as you scroll.
- **ProductMarquee** (`#product`): arotaro (a chat that plays in) and Blinc (`#blinc`, a tap-a-card barcode demo).
- **WhoWeAre** (`#vision`): the vision statement, which brightens word by word on scroll.
- **HowWeBuild** (`#how`): Metis OS, our internal AI-employee platform, with an animated approval flow. It is sign-in only, so it is presented as how we work: no link, no architecture detail.
- **Manifesto**, **Founders** (`#team`), **Contact** (`#contact`, with copy-to-clipboard), **Footer**.

`src/motion.js` holds the shared motion hooks (`useRevealAll` for `.reveal` elements, `useInView`, `useScrollProgress`, `useReducedMotion`). Content is visible by default: motion only hides elements once JS confirms it may animate. Reduced motion and automated browsers (`navigator.webdriver`) get the settled final state. `src/Icons.js` is the only icon set (SVG, 1.75px stroke).

All copy lives in `src/locales/en.json` and `src/locales/ja.json` (react-i18next, set up in `src/i18n.js`). Every visible string needs both. Language comes from `#en`/`#ja`, then `?lang=`, then localStorage, then the browser. Product facts (Blinc store links, claims such as "~60ms tap to barcode") come from the Blinc repo's `store/` listings and `site/index.html`; keep them in sync with those rather than writing new claims here.

## Styling

Design tokens (colors, the `--ease` curve, durations) are CSS custom properties in `src/index.css`. Component styles sit beside each component. Tailwind supplies only the preflight reset. Fonts: Mona Sans (self-hosted variable woff2 in `src/fonts/`) for Latin, Murecho for Japanese, JetBrains Mono only inside product UI. Product context is in `PRODUCT.md`; the page's design direction is in `.impeccable/surfaces/src-app-js.md`.

## Static Assets

Images live in `public/images/` and are referenced via relative paths (`images/...`) in components. Webpack's `CopyWebpackPlugin` copies them to `dist/images/` at build time.

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys to GitHub Pages on push to `master`: builds the site with `npm run build`, then uploads `dist/` via `actions/upload-pages-artifact` and `actions/deploy-pages`. The custom apex domain `metis-ai.io` is pinned via `public/CNAME`, which webpack copies into `dist/CNAME` at build time. Pages is configured in repo Settings → Pages with source set to "GitHub Actions". No secrets required — uses GitHub's built-in OIDC token.
