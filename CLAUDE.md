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

- **Header** — logo + contact nav
- **Services** — hero section
- **Vision** — company vision
- **Product** — product showcase
- **Solution** — solutions overview
- **Footer** — footer links

`src/App.js` composes all sections in page order. Entry point is `src/index.js`.

## Styling

Components use a mix of Tailwind utility classes (inline) and co-located CSS files. The Inter font is loaded via `@fontsource/inter` and set as the default sans font in `tailwind.config.js`. A custom `float` animation is defined there as well.

## Static Assets

Images live in `public/images/` and are referenced via relative paths (`images/...`) in components. Webpack's `CopyWebpackPlugin` copies them to `dist/images/` at build time.

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds on push to `master` and syncs `dist/` to an S3 bucket (`s3://metis-ai.io`). AWS credentials are stored as repository secrets.
