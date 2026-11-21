---
name: Metis AI Research
description: A four-person studio that builds and runs live products with AI employees, shown through the work itself.
colors:
  ground: "#05070f"
  ground-raised: "#0a0e1b"
  panel: "#0d1222"
  panel-high: "#121935"
  hairline: "rgba(148, 163, 214, 0.13)"
  hairline-strong: "rgba(148, 163, 214, 0.24)"
  ink: "#f4f6fb"
  ink-muted: "#b9c0d6"
  ink-quiet: "#8a92ab"
  metis-blue: "#1a3ef3"
  metis-blue-hover: "#3a5ff7"
  metis-blue-soft: "#86a6fb"
  metis-blue-wash: "rgba(26, 62, 243, 0.14)"
  live-green: "#4ed6a0"
typography:
  display:
    fontFamily: "Mona Sans, Murecho, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.75rem, 7.2vw, 5.75rem)"
    fontWeight: 640
    lineHeight: 1
    letterSpacing: "-0.04em"
  display-product:
    fontFamily: "Mona Sans, Murecho, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 5rem)"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Mona Sans, Murecho, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 4rem)"
    fontWeight: 620
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "Mona Sans, Murecho, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.75rem)"
    fontWeight: 560
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Mona Sans, Murecho, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  title-sm:
    fontFamily: "Mona Sans, Murecho, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Mona Sans, Murecho, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Mona Sans, Murecho, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-long:
    fontFamily: "Mona Sans, Murecho, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Mona Sans, Murecho, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
  body-ja:
    fontFamily: "Murecho, Hiragino Kaku Gothic ProN, Yu Gothic, Meiryo, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  mono-product:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    letterSpacing: "0.2em"
    fontFeature: "tnum"
rounded:
  tail: "6px"
  control-sm: "10px"
  control: "12px"
  card: "18px"
  panel: "24px"
  device: "44px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "24px"
  lg: "40px"
  xl: "64px"
  2xl: "96px"
  gutter: "40px"
  gutter-mobile: "20px"
  section: "136px"
  section-tablet: "104px"
  section-mobile: "88px"
  nav-height: "68px"
components:
  button-primary:
    backgroundColor: "{colors.metis-blue}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.metis-blue-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-light:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-nav:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.control-sm}"
    padding: "0 16px"
    height: "40px"
  nav-link:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.control-sm}"
    padding: "0 14px"
    height: "40px"
  fact-chip:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  panel:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
    padding: "40px"
---

# Design System: Metis AI Research

## Overview

**Creative North Star: "The Studio With the Lights On the Work"**

A near-black, blue-tinted room where the only things lit are the type and the products. The page is the category-standard premium tech-studio site, played straight and held to Stripe's craft and motion bar: large, tightly tracked Mona Sans headlines, a single brand blue, hairline-bordered panels that sit on real soft shadows, and live product demos (the arotaro chat, the Blinc tap-to-barcode, the Metis OS approval flow) doing the persuading that adjectives would otherwise do.

Polish comes from type, real product UI and orchestrated motion, not decoration. There is one ambient effect on the whole page: a slow, drifting field of brand-blue light behind the hero. Everything else is flat ground, hairlines and panels. Density is generous: sections breathe at 136px, copy sits in narrow measures, and each section carries one idea. English and Japanese are equal citizens; Japanese headings get their own sizes, line heights and line-breaking rules rather than inheriting the Latin settings.

The system replaced a navy glow-and-gradient-text template, and that is its confirmed anti-reference: no gradient-filled text, no glowing buttons, no neon halos.

**Key Characteristics:**
- Near-black blue ground with ink-white type and Metis blue as the only accent.
- Mona Sans for Latin at heavy-but-not-black weights (560 to 650) with tight negative tracking; Murecho for Japanese; JetBrains Mono only inside product UI.
- Hairline borders plus soft, deep offset shadows; tonal steps rather than color for surfaces.
- One easing curve (`--ease`) and three durations govern nearly all motion.
- Content is visible by default; motion is an enhancement that never hides anything.
- Product demos are the hero material, rendered in the page's own tokens.

## Colors

A cold, nearly monochrome dark palette tinted toward the brand blue, with one saturated accent and one small green reserved for "live".

### Primary
- **Metis Blue** (`metis-blue`): The single accent. Primary buttons, the user's chat bubbles, completed approval-flow markers and rail, the arotaro avatar, text selection. It marks action and completion, nothing else.
- **Metis Blue, Lifted** (`metis-blue-hover`): The hover state of primary buttons only.
- **Metis Blue, Soft** (`metis-blue-soft`): The readable light step of the blue on dark ground: focus rings, the active approval step, founder roles, the mobile sheet's Contact link, and the unlit words in the scroll-brightened statement.
- **Metis Blue Wash** (`metis-blue-wash`): A 14% tint of the blue for quiet blue-tinted fills.

### Secondary
- **Live Green** (`live-green`): A small status dot meaning "running now": the chat's online status, the cleared human gate in the approval flow, and the "open to conversations" line in Contact. Always a 7 to 8px dot, never text or fills.

### Neutral
- **Ground** (`ground`): The page background and the base of every section.
- **Raised Ground** (`ground-raised`): Alternate section bands (How we build, Contact, Footer), separated by hairlines.
- **Panel** (`panel`): Demo and approval-flow surfaces.
- **Panel High** (`panel-high`): The top of the demo panels' vertical gradient (panel-high to panel by 40%).
- **Hairline** (`hairline`): Section dividers, list rules, inner borders.
- **Hairline Strong** (`hairline-strong`): Borders on interactive or framing elements: ghost buttons, chips, the language switcher, demo frames, pillar rules.
- **Ink** (`ink`): Headings and primary text.
- **Ink Muted** (`ink-muted`): Lead and body copy, nav links, the second hero line.
- **Ink Quiet** (`ink-quiet`): Captions, metadata, inactive states. Holds 5.6:1 on Ground, so it is legal for small copy.

### Named Rules
**The One Accent Rule.** Metis Blue is the only hue that carries meaning. Surfaces are differentiated by tonal steps of the blue-black ground, never by a second accent color.

**The Blue Means Done Rule.** Solid Metis Blue marks the primary action or a completed state. Soft blue marks focus and "in progress". Don't use either as decoration.

## Typography

**Display Font:** Mona Sans (variable, 200 to 900, self-hosted woff2; fallback Murecho, system-ui, Segoe UI, sans-serif)
**Body Font:** Mona Sans; Murecho for all Japanese (`html[lang="ja"]`), with Hiragino Kaku Gothic ProN, Yu Gothic, Meiryo fallbacks
**Label/Mono Font:** JetBrains Mono 400, inside product UI only (the Blinc barcode digits)

**Character:** A confident grotesk set heavy and tight for headlines and loose and quiet for copy; the Japanese face is chosen to sit at the same visual weight rather than mimic the Latin tracking.

### Hierarchy
- **Display** (640, clamp 2.75 to 5.75rem, line-height 1, -0.04em): The two-line hero headline only; the second line is set in Ink Muted.
- **Display Product** (650, clamp 3 to 5rem, line-height 1, -0.045em): Product names in the product showcase.
- **Headline** (620, clamp 2.25 to 4rem, line-height 1.04, -0.035em, max 16ch): Every section heading.
- **Statement** (560, clamp 2 to 3.75rem, line-height 1.12, -0.03em, max 22ch): The company statement, brightened word by word on scroll.
- **Title** (600, clamp 1.75 to 2.5rem, line-height 1.12, -0.03em): Principle titles and founder names (620, line-height 1).
- **Title Small** (600, 1.125rem, -0.01em): Pillar titles, the approval-flow label.
- **Lead** (400, 1.1875rem / 1.0625rem under 640px, line-height 1.6, max 60ch): Section subcopy, in Ink Muted.
- **Body** (400, 1rem, 1.6) and **Body Long** (400, 1.0625rem, 1.7, max 58 to 60ch): Running copy.
- **Label** (500, 0.8125rem): Chips, sample badges, language switcher (600), footer base.

### Named Rules
**The Japanese Is Not a Translation Rule.** Under `html[lang="ja"]` every heading drops to letter-spacing 0, weight 600, a smaller clamp and a taller line height (1.2 to 1.5), with `word-break: auto-phrase` and `line-break: strict`. Any new heading style ships with its Japanese override.

**The Mono Lives in the Product Rule.** JetBrains Mono appears only inside product UI renderings. The marketing page itself never uses mono for labels, numbers or decoration.

**The Balanced Line Rule.** Headings use `text-wrap: balance` and paragraphs `text-wrap: pretty`.

## Layout

A single centered column: a 1200px container with 40px gutters (20px under 640px). Sections stack vertically at 136px padding (104px under 900px, 88px under 640px); Contact gets extra air (180/168px). The fixed nav is 68px tall and anchor scroll offsets account for it.

Section heads use an asymmetric two-column grid (about 1.2fr / 1fr), heading left and lead pushed to the right edge, aligned to the bottom. Product rows alternate text and demo (5fr / 6fr, 96px gap), each opened by a hairline. Manifesto is 1fr / 2fr with a sticky heading. The team is a typographic roster: one hairline-ruled row per person, not a card grid. Pillars sit on a four-column grid, each headed by a strong hairline.

Spacing steps that recur: 8, 12, 24, 40, 64, 96px.

Breakpoints, all collapsing to a single column: 960px (product and How we build heads and rows stack, pillars go to 2-up), 900px (section padding, manifesto stacks), 860px (nav collapses to the menu sheet, founder rows stack), 760px (approval flow turns vertical, statement body stacks), 640px (mobile gutters, hero and contact buttons go full width and stacked), 560px (pillars 1-up).

## Elevation & Depth

Depth is a hybrid: tonal steps of the ground for structure, plus soft, deep, downward-offset black shadows that let panels and the product screenshot sit above the page. Shadows are always diffuse and negative-spread; never hard-edged, never colored except the faint navy undertone under the hero screenshot.

### Shadow Vocabulary
- **Panel Lift** (`box-shadow: 0 30px 60px -20px rgba(0,0,0,0.7), 0 18px 36px -18px rgba(0,0,0,0.6)`): Demo frames and the approval-flow panel.
- **Card Lift** (`box-shadow: 0 12px 24px -10px rgba(0,0,0,0.6)`): Wallet cards inside the Blinc demo.
- **Hero Shot** (`box-shadow: 0 50px 100px -30px rgba(0,0,0,0.85), 0 30px 60px -30px rgba(10,20,80,0.9)`): The Metis OS screenshot frame only.
- **Button Lift** (`box-shadow: 0 8px 18px -8px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.18)`): Primary buttons; deepens on hover. Ghost and light buttons carry no shadow.

### Named Rules
**The One Light Source Rule.** The drifting blue light field exists behind the hero and nowhere else. Other sections get depth from tone and shadow, not glow.

**The Glass Only When Needed Rule.** Backdrop blur (16px, saturate 140%) appears only on the nav once content scrolls under it or the menu is open, because legibility demands it.

## Shapes

Softly rounded, scaling with size: small controls at 10px, buttons and toggles at 12px, cards and chat bubbles at 18px, framing panels at 20 to 24px, the phone at 44px, and chips and status dots fully round. Chat bubbles square one bottom corner to 6px to show the speaker. Every frame is a 1px hairline; the approval rail is a 2px rounded line. The hero screenshot sits in a 10px-padded bezel with a faint vertical gradient fill.

## Components

### Buttons
Solid, confident and quick to respond.
- **Shape:** Gently rounded (12px), 48px tall, 22px side padding, 600 weight at 0.9375rem, icon gap 10px.
- **Primary:** Metis Blue with white text and Button Lift; lifts to Metis Blue Lifted on hover.
- **Ghost:** Transparent with a Hairline Strong border and Ink text; hover adds an 8% blue-grey fill. The secondary action beside a primary.
- **Light:** Ink fill with Ground text, no shadow; used for the nav Contact (40px tall, 10px radius) so it does not compete with the hero's blue primary.
- **Hover / Active:** Color and shadow ease at 180/450ms; a trailing arrow icon nudges 3px right; press settles 1px down at 0.985 scale.
- **Large:** The contact email and copy buttons are 60px tall with 14px radius; the copy button flips to a green "copied" state with an icon pop.

### Text Links
- **Style:** Ink, 600 weight, 44px tap height, inline icon. The underline is drawn, not toggled: a 1px line grows from 0 to full width over 450ms on hover and focus. External-link icons drift up-right 2px; arrows nudge right 3px. A quiet variant uses Ink Muted at 500.

### Chips
- **Style:** Fact pills under product taglines and "sample" badges on demos: Label type in Ink Muted or Ink Quiet, Hairline Strong border, pill radius, no fill.

### Cards / Containers
- **Corner Style:** 18px for cards, 22 to 24px for panels.
- **Background:** Panel, or a vertical gradient from Panel High to Panel.
- **Shadow Strategy:** Panel Lift (see Elevation).
- **Border:** 1px Hairline Strong.
- **Internal Padding:** 40px (28px by 22px on mobile).

### Navigation
- **Style:** Fixed, transparent over the hero; once scrolled it gains an 82% Ground backing, a hairline and backdrop blur. Logo, four section links (0.9375rem, 500, Ink Muted, 10px-radius hover fill), the language switcher and a light Contact button.
- **Mobile (860px and below):** Links and Contact collapse into a 44px bordered toggle that opens a full-height sheet of large links (1.75rem, 600) on hairline rules, each dropping in with a 40ms stagger; Contact closes the list in Soft Blue.

### Language Switcher
A two-option segmented control (EN / 日本語) in a Hairline Strong frame with 12px radius. A translucent blue-grey pill slides between the options over 450ms; the Japanese label is set in Murecho.

### Product Demos (signature)
Live miniatures of the real products, built in the page's own tokens. The arotaro chat plays a scripted conversation: user bubbles in Metis Blue, AI bubbles in a translucent tint with a hairline, typing dots, each bubble scaling in from its speaker's corner. The Blinc phone lists wallet cards; tapping one opens a scan view that grows out of the tapped card's own rectangle by clip-path, then raises a white barcode card with mono digits. Every demo carries a "sample" chip.

### Approval Flow (signature)
The Metis OS human-in-the-loop sequence as a four-step horizontal track (vertical under 760px). A 2px rail fills with Metis Blue as steps complete; completed markers fill blue with a check; the active marker scales to 1.12 with a soft-blue ring pulse; the human gate gets a green dot once cleared. A Replay control re-runs it.

### Motion Grammar
- **Curve:** `--ease` (cubic-bezier(0.16, 1, 0.3, 1)) for nearly everything; `--ease-in-out` only for looping or travelling motion (ambient drift, typing dots, the flow rail).
- **Durations:** 180ms for hover color and press, 450ms for state changes and icon nudges, 900ms for scroll reveals. Entrances that tell a story run longer (hero rise 1100ms, screenshot land 1400ms).
- **Reveal:** Elements are visible by default. Only after JavaScript confirms motion is allowed does the page add `html.motion`, and only then do unrevealed elements start 28px low, transparent and 6px blurred. They reveal once, with per-item stagger delays of 70 to 120ms, and never animate out.
- **Hero choreography:** headline lines rise from a clipped mask (second line 90ms later), subcopy and buttons fade up at 260 and 360ms, then the screenshot lands at 480ms and flattens from a 20-degree tilt as the visitor scrolls.
- **Reduced motion and automated browsers:** Under `prefers-reduced-motion`, or when `navigator.webdriver` is set, every element renders in its settled final state: no reveals, scroll-linked values pinned to complete, demos shown still.

## Do's and Don'ts

### Do:
- **Do** keep Metis Blue the only accent and reserve it for primary actions and completed states.
- **Do** frame surfaces with 1px hairlines and lift them with the soft, negative-spread shadows above.
- **Do** give every new heading a Japanese override (letter-spacing 0, weight 600, taller line height, strict line breaking).
- **Do** use `--ease` with the 180/450/900ms durations; reach for `--ease-in-out` only for loops and travel.
- **Do** keep content visible without JavaScript and under reduced motion; motion only enhances.
- **Do** prove claims with real product UI rendered in the system's tokens, marked as a sample.
- **Do** draw icons from the single authored stroke family (1.75px stroke, round caps, 20px box).

### Don't:
- **Don't** fill text with gradients or add glow halos to buttons and headings; that is the replaced navy template.
- **Don't** add ambient light fields or blobs outside the hero.
- **Don't** introduce a second accent hue; surfaces differ by tone, not color.
- **Don't** use JetBrains Mono on the marketing page outside product renderings.
- **Don't** use hard-edged offset shadows, or tinted shadows anywhere but the hero screenshot's navy undertone.
- **Don't** add exit animations on scroll-back or hide content until a script runs.
