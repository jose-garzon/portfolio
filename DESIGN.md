---
name: jose-garzon.dev
description: Personal portfolio and learning journal for a backend / systems engineer. Hacker-coded, crimson-restrained.
colors:
  bg: "#000000"
  bg-alt: "#0a0a0a"
  surface: "#121212"
  surface-raised: "#1a1a1a"
  border: "#2a1a1a"
  border-subtle: "#1a1010"
  text: "#eef2f7"
  text-muted: "#c0c0c0"
  text-subtle: "#909090"
  crimson: "#ff2d55"
  crimson-warm: "#ff4d6d"
  signal-green: "#39d353"
  glitch-cyan: "#00fff9"
  glitch-magenta: "#ff006e"
  hack-yellow: "#ffbe0b"
  electric-blue: "#2d7fff"
  electric-blue-bright: "#3d8fff"
typography:
  display:
    fontFamily: "Orbitron, Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(3rem, 2.5rem + 3vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Orbitron, Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 2rem + 2.5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Orbitron, Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.5rem + 1.2vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Space Grotesk, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(0.9375rem, 0.9rem + 0.2vw, 1rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-large:
    fontFamily: "Space Grotesk, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, Fira Code, monospace"
    fontSize: "clamp(0.6875rem, 0.65rem + 0.2vw, 0.75rem)"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  full: "9999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.25rem"
  "6": "1.5rem"
  "8": "2rem"
  "10": "2.5rem"
  "12": "3rem"
  "16": "4rem"
  section: "clamp(5rem, 12vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.crimson}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.crimson-warm}"
    textColor: "#ffffff"
  button-secondary:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.5rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.full}"
    padding: "0.5rem 1rem"
  badge-muted:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.2em 0.75rem"
  badge-accent:
    backgroundColor: "rgba(255, 45, 85, 0.06)"
    textColor: "{colors.crimson}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.2em 0.75rem"
  card-project:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  card-blog:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "1.5rem 2rem"
  icon-link:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.sm}"
    size: "38px"
  section-label:
    backgroundColor: "transparent"
    textColor: "{colors.crimson}"
    typography: "{typography.label}"
---

# Design System: jose-garzon.dev

## 1. Overview

**Creative North Star: "The Quiet Operator"**

Hacker register without cosplay. The interface reads like a terminal someone showed you for thirty seconds before closing it — crimson accents used sparingly, a near-black canvas with warm undertone, mono labels marking instruments, glitch as a fingerprint rather than a theme. The visual vocabulary is borrowed from operations-room HUDs and decommissioned hardware: scanlines, telemetry markers, RGB-split fringe, woven-canvas background texture. Restraint is the load-bearing choice. The crimson does not shout because it does not need to.

This system rejects every flavor of category default. Not generic SaaS-portfolio: no soft gradient hero, no three-card grid, no Inter, no pastel-on-white. Not Awwwards motion reel: no cursor trails, no scroll-jacking, no choreographed entrances. Not designer-editorial: no serif display, no cream paper, no oversized photography. Not crypto / neon-on-black hacker cliché: no Matrix rain, no neon-green terminal, no skull motifs. The fingerprint sits one level upstream of the cliché — hacker-coded, not hacker-cosplay.

Density is medium-low: confident negative space anchors every section. Typographic energy comes from Orbitron's angular display weight against Space Grotesk's calm body and JetBrains Mono's instrumental labels. Crimson appears only at the points where attention is earned: section labels, primary actions, in-prose links, hover states on cards. Everywhere else, the system is neutral.

**Key Characteristics:**
- Near-black canvas (`#000` and oxide-tinted neutrals), crimson accent ≤10% of any screen
- Three-font system: Orbitron display, Space Grotesk body, JetBrains Mono instruments
- Scanlines and CRT noise as ambient atmosphere, not decoration
- RGB-split glitch is opt-in (`data-text` attribute), hover-triggered, reduced-motion respected
- Telemetry-style markers (// comments, `→` indicators, scroll progress bar) signal that the page is running, not just rendered
- Flat-by-default surfaces with tonal layering (`bg → bg-alt → surface → surface-raised`) for depth
- Motion is restrained: state transitions, no choreography

## 2. Colors: The Operator's Palette

The palette is one saturated crimson against a layered set of near-black neutrals. Two secondary signal colors (electric blue, signal green) appear in rare, specific places. Cyan and magenta exist only as glitch-fringe artifacts on the RGB-split effect; they are never used as primary surface colors.

### Primary
- **Operator Crimson** (`#ff2d55`): The one voice. Used for primary buttons, section labels, in-prose links, blog-post tags, the accent half of the name in the hero, hover-state borders on cards, the eyebrow dot on the hero status pill. Never used for body text. Never used on more than 10% of any single screen.
- **Crimson Warm** (`#ff4d6d`): Lifted variant for primary-button hover state only. Not a second accent.

### Secondary
- **Signal Green** (`#39d353`): Used exclusively for the "Open to opportunities" status pill in the hero. Active-status signaling, nothing else. Borrowed from GitHub's contribution-graph green; reads as system-state, not decoration.
- **Electric Blue** (`#2d7fff` / bright `#3d8fff`): Used only as the asymmetric counter-shadow on the hero's "latest post" card (crimson glow on the left, blue glow on the right) and as the cyan-shifted half of the RGB-split glitch. Distinctive accent that prevents the crimson from becoming monochromatic-monotone.

### Tertiary (glitch-fringe only)
- **Glitch Cyan** (`#00fff9`): The RGB-split overlay color on hovered titles (alongside crimson). Animation lasts 200ms, then disappears.
- **Glitch Magenta** (`#ff006e`): Reserved for future glitch variants; not currently mapped. Token exists for parity.
- **Hack Yellow** (`#ffbe0b`): Reserved; unused in current production. Available for warnings / dev-only HUD if the site ever needs them.

### Neutral
- **Operator Black** (`#000000`): The page background. Pure black today; target is oxide-tinted (`oklch(0 0.005 25)`) so neutrals carry a faint crimson temperature. See Do's.
- **Bg Alt** (`#0a0a0a`): One step lifted from the page bg. Used rarely; mostly for icon-button interior backgrounds inside cards.
- **Surface** (`#121212`): Card and panel default. The plane on which most content sits.
- **Surface Raised** (`#1a1a1a`): Hovered-card / active-card state. Tonal lift, not shadow.
- **Border Crimson** (`#2a1a1a`): Subtle warm-shifted border. Reads as a divider, not a frame. Sits between surface and accent.
- **Border Subtle** (`#1a1010`): Quieter divider for tertiary separations.
- **Text** (`#eef2f7`): Primary body text. ~17.5:1 against `#000`. Passes AAA.
- **Text Muted** (`#c0c0c0`): Secondary text, descriptions, paragraph body in non-prose surfaces. ~10:1 against `#000`. Passes AAA.
- **Text Subtle** (`#909090`): Tertiary metadata (dates, copyright, separators). ~5.4:1 against `#000`. Passes AA, fails AAA. Reserve for non-essential context only.

### Named Rules

**The One Voice Rule.** Crimson is the only accent that touches body content. Blue, green, and yellow are role-locked: blue is the latest-post shadow + glitch, green is status, yellow is reserved. Mixing two accents in the same component is forbidden.

**The Tinted Neutral Rule.** Neutrals should carry a faint crimson temperature (chroma ~0.005 toward hue 25), not be pure black or pure cool-gray. Current tokens are pure neutral hex; the migration target is OKLCH with brand-hue chroma. Until the migration lands, prefer adding warm-shifted borders (`border-crimson`) over neutral ones when accenting layered surfaces.

**The Crimson Ceiling Rule.** Crimson covers ≤10% of any rendered viewport. If a screen requires more crimson, the screen is wrong — reduce by removing, not by re-toning.

## 3. Typography

**Display Font:** Orbitron (Space Grotesk fallback)
**Body Font:** Space Grotesk (system-ui fallback)
**Label / Mono Font:** JetBrains Mono (Fira Code fallback)

**Character:** Orbitron is angular, geometric, slightly mechanical — chosen for the hero name, section titles, and post titles. Space Grotesk is calm and contemporary — carries all body, descriptions, and navigation labels. JetBrains Mono carries every instrument: section labels (`// projects`), dates, reading time, badges, the `_` separator in the logo. The three fonts map cleanly onto three roles: display = identity, body = content, mono = telemetry.

Inter is explicitly absent. So is every editorial serif. So is every script display.

### Hierarchy

- **Display** (Orbitron 700, `clamp(3rem, 2.5rem + 3vw, 4.5rem)`, line-height 1, letter-spacing -0.04em): Hero name. The single largest type on the site. Used only on `/`. The crimson half of the name carries the most-restrained gradient (see Do's: gradient text is restricted to this single element after the audit).
- **Headline** (Orbitron 700, `clamp(2.5rem, 2rem + 2.5vw, 3.5rem)`, line-height 1.1, letter-spacing -0.03em): Blog page title, blog post title. The biggest type on inner pages.
- **Title** (Orbitron 700, `clamp(1.75rem, 1.5rem + 1.2vw, 2rem)`, line-height 1.15, letter-spacing -0.01em): Section titles (`Work History`, `Things I've Built`). Always paired with a preceding mono section-label.
- **Card Title** (Space Grotesk 600, `clamp(1.1875rem, 1.1rem + 0.4vw, 1.25rem)`, line-height 1.3): Blog card titles, project card titles. Drops to body sans because the volume is repeated; Orbitron at this size becomes visual noise.
- **Body Large** (Space Grotesk 400, `clamp(1.0625rem, 1rem + 0.3vw, 1.125rem)`, line-height 1.7): Hero tagline, blog subtext, about paragraphs, post description. Used when prose needs presence.
- **Body** (Space Grotesk 400, `clamp(0.9375rem, 0.9rem + 0.2vw, 1rem)`, line-height 1.6): Default text everywhere else.
- **Prose Body** (Space Grotesk 400, `var(--text-lg)`, line-height 1.9, max-width `65ch`): Long-form blog content. Higher line-height than non-prose body because reading dwell is the primary task on `/blog/[slug]`.
- **Label** (JetBrains Mono 400, `clamp(0.6875rem, 0.65rem + 0.2vw, 0.75rem)`, letter-spacing 0.12em, uppercase / mixed): Section labels, dates, reading time, footer copy, tag badges. All telemetry-style metadata. Letter-spacing is intentionally wide; reads as instrumental.

### Named Rules

**The Three-Font Rule.** Orbitron for identity, Space Grotesk for content, JetBrains Mono for telemetry. A fourth font is prohibited. Inter is explicitly banned.

**The Mono-as-Instrument Rule.** Mono is never used for prose. Mono labels mark sections, dates, tags, telemetry — anything the system measures or names. Replacing mono with sans for these elements strips the instrumental read and softens the register.

**The Section-Label Pair Rule.** Every Title is preceded by a mono section-label (`// experience`, `// projects`). The pair is a fingerprint of the system; do not use a Title without one, or a section-label without a Title.

## 4. Elevation

The system is **flat by default** with **tonal layering** for depth. Surfaces lift through brightness (`bg → surface → surface-raised`), not through cast shadow. Shadows exist but appear only in response to state: card hover, button hover, focus rings. Ambient shadow on resting surfaces is forbidden.

The exception is the hero "latest post" element, which carries an intentionally asymmetric ambient shadow (crimson glow on the left, electric blue glow on the right). That asymmetry is the signature; do not normalize it.

### Shadow Vocabulary

- **`shadow-sm`** (`0 1px 3px rgba(0, 0, 0, 0.6)`): Dropdown panels, popovers. Currently not in heavy use.
- **`shadow-md`** (`0 4px 16px rgba(0, 0, 0, 0.7)`): Lifted cards on hover.
- **`shadow-lg`** (`0 12px 40px rgba(0, 0, 0, 0.8)`): Modal / dialog backdrop accents.
- **`shadow-accent`** (`0 0 24px rgba(255, 45, 85, 0.2)`): Crimson ambient glow on timeline-item hover, primary button hover.
- **`shadow-accent-lg`** (`0 8px 32px rgba(255, 45, 85, 0.3)`): Bolder crimson glow under primary button on hover.
- **`shadow-glow-cyan`** (`0 0 20px rgba(0, 255, 249, 0.25)`): Reserved for cyan glitch artifacts; currently unused as a standalone shadow.

### Named Rules

**The Flat-at-Rest Rule.** Cards, panels, badges, and surfaces sit flat. Depth only appears when the user reaches toward an element — hover, focus, active. A page with shadows visible at idle is incorrect.

**The Asymmetric Glow Rule.** The hero "latest post" card carries crimson + electric-blue shadow as its signature. Symmetric glow on both sides flattens the effect; preserve the left-crimson / right-blue split.

## 5. Components

### Buttons

- **Shape:** Pill (radius `9999px` / `{rounded.full}`).
- **Primary:** Crimson fill (`{colors.crimson}`), white text (`#ffffff`), padding `0.75rem 1.5rem` (`var(--space-3) var(--space-6)`), Space Grotesk 600, label-sized.
- **Primary Hover:** Lift `-2px` translate, background shifts to `{colors.crimson-warm}`, ambient `shadow-accent-lg` appears. Easing: ease-out-quart (NOT spring; bounce is banned per the Motion rules below).
- **Primary Active:** Returns to rest position with a slight scale-down (`scale(0.98)`).
- **Secondary:** `{colors.surface-raised}` fill, `{colors.text}` foreground, 1px `{colors.border}` border. Hover lifts and shifts border to `{colors.text-muted}`.
- **Ghost:** Transparent fill, `{colors.text-muted}` foreground, no border, reduced padding (`0.5rem 1rem`). Hover shifts foreground to `{colors.text}` and adds `{colors.surface}` background.

### Badges (Chips)

- **Style:** Mono-typed pill (`{typography.label}`). Two variants: muted and accent.
- **Muted:** `{colors.surface-raised}` fill, `{colors.border}` border, `{colors.text-muted}` text. Used for tools/technologies in the about panel.
- **Accent:** `rgba(255, 45, 85, 0.06)` fill, `rgba(255, 45, 85, 0.12)` border, `{colors.crimson}` text. Used for project stack and blog post tags.
- **Hover:** Both variants lift `-1px`. Muted brightens toward crimson; accent saturates fill toward `rgba(255, 45, 85, 0.12)` and full crimson border.
- **Pill modifier:** `{rounded.full}` instead of `{rounded.sm}` for tag-shaped variants (blog tags).

### Cards

- **Project Card:** Radius `{rounded.lg}` (16px). Background `{colors.surface}`. Border 1px `{colors.border}`. Internal padding `1.5rem`. Distinctive: a mouse-tracking radial glow (`--mouse-x` / `--mouse-y` CSS vars) appears on hover, plus the border shifts to `rgba(255, 45, 85, 0.12)` and the card lifts `-5px`. Featured cards take a diagonal crimson-tinted gradient background.
- **Blog Card:** Radius `{rounded.lg}`. Background `{colors.surface}`. Padding `1.5rem 2rem` (more horizontal generosity than project cards because content density is lower). Hover lifts `-3px`, border shifts to crimson, title shifts to crimson, "Read article →" arrow gap widens.
- **Shadow Strategy:** Flat at rest. Hover composes three shadows: a dark drop, a 1px crimson outline glow (`0 0 0 1px rgba(255, 45, 85, 0.06)`), and a soft crimson ambient (`0 0 24px rgba(255, 45, 85, 0.12)`).
- **Nested cards are forbidden** (per shared design laws).

### Section Label (Signature)

The mono label that precedes every section title. Format: `// section-name` (the `//` is implied by visual style, not literal — current implementation uses lowercase mono text + a `::after` pseudo-element gradient line). Crimson foreground (`{colors.crimson}`), JetBrains Mono, `0.75rem`, letter-spacing `0.12em`, uppercase styling via spacing rather than `text-transform`. Followed by a `1px` gradient horizontal rule that fades from crimson to transparent. Inseparable from the section title that follows.

### Timeline Item (Signature)

The work-history pattern. A 12px crimson-bordered dot on a 1px vertical gradient line (border → transparent), to the left of each role card. On hover: the dot fills crimson, gains a 4px crimson dim outer ring, scales `1.2x`. The card to the right lifts its border to crimson and tints its background toward `{colors.surface-raised}`. Distinct from project/blog cards: timeline is the only place a card hover affects an external indicator.

### Icon Link

Square 38×38px button with 1px border, used for hero social links and similar. Radius `{rounded.sm}`. Foreground `{colors.text-muted}` shifts to `{colors.text}` on hover, border shifts to `{colors.text-muted}`, background fills to `{colors.surface}`, element lifts `-2px`. **Note: current 38px size fails WCAG 2.5.5 target-size minimum; target is 44×44px (see Do's).**

### Navigation

Fixed top header, 64px tall, transparent at scroll position 0. Above 20px scroll, it gains a 1px `{colors.border}` bottom border and a `rgba(0, 0, 0, 0.7)` background with `backdrop-filter: blur(12px) saturate(1.2)`. The logo is `firstname_lastname` in lowercase JetBrains Mono with a crimson `_` separator. Desktop links sit on the right; mobile (≤640px) collapses to a hamburger that opens a full-screen `Dialog.Popup` overlay with staggered link entrances, indexed (`01`, `02`, `03`) in crimson mono.

### Inputs / Fields

Not currently in use. When introduced: 1px `{colors.border}`, `{colors.surface}` fill, radius `{rounded.sm}`, focus ring `2px solid {colors.crimson}` with `3px` offset (matching the global `:focus-visible` rule). No floating labels. No filled-with-line variants. Labels above the field, mono, label-sized.

### Glitch Text (Signature behavior)

Hover-triggered RGB-split on any element marked with the `data-text` attribute. Uses two pseudo-elements (`::before` crimson, `::after` cyan-bright) clipped via `clip-path` animation over 200ms with `steps(1)` for digital chunkiness. Disabled entirely under `prefers-reduced-motion: reduce`. Currently applied to hero name, about heading, section titles, blog titles, post titles, project card titles. Restraint is mandatory: not every interactive element should glitch.

## 6. Do's and Don'ts

### Do:

- **Do** lead every section with a mono section-label paired with an Orbitron Title. The pair is the system's fingerprint.
- **Do** keep crimson on ≤10% of any rendered viewport. The Crimson Ceiling Rule is enforceable; count occurrences if uncertain.
- **Do** lift surfaces tonally (`bg → surface → surface-raised`) instead of casting ambient shadow.
- **Do** use JetBrains Mono only for telemetry: labels, dates, tags, copyright, the logo separator.
- **Do** preserve the asymmetric crimson + electric-blue glow on the hero "latest post" card. Symmetry destroys the signature.
- **Do** make every effect opt-in. Glitch via `data-text`, scanlines via `.scanlines` class, CRT noise as a single Layout-level overlay. Defaults should be silent.
- **Do** honor `prefers-reduced-motion: reduce` everywhere motion exists. Glitch, hero entrance, scroll reveals, pulse-dot, shimmer.
- **Do** target 44×44px minimum for touch targets (icon-link, mobile menu trigger, card-link). The audit flagged the current 36–38px sizes as WCAG 2.5.5 failures.
- **Do** migrate neutrals from pure hex to OKLCH with brand-hue chroma (`oklch(L 0.005 25)`) so the canvas carries a faint crimson temperature.
- **Do** use ease-out exponential curves (ease-out-quart, quint, expo) for motion. State changes feel like deceleration, not bounce.

### Don't:

- **Don't** use gradient text (`background-clip: text` + linear-gradient) anywhere. The current hero name and about-heading `em` violate this. Use a single solid `{colors.crimson}` and emphasize via weight or size instead. *(The absolute-bans list of the shared design laws covers this; the audit flagged both instances.)*
- **Don't** use elastic / overshoot easing (`cubic-bezier(0.34, 1.56, 0.64, 1)`). The current `--ease-spring` token bounces and is forbidden. Replace with `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart).
- **Don't** ship the hero-metric template (big number + small label + supporting stats + divider). The current `.hero-stats` is a SaaS cliché. Inline the same information as terminal-style prose or remove.
- **Don't** add a fourth font. Three is the system. Inter is explicitly banned.
- **Don't** use side-stripe borders (`border-left` or `border-right` greater than 1px as a colored accent on cards or callouts). The blockquote 2px crimson-left in prose is the only intentional exception, and it is semantic.
- **Don't** nest cards. The shared design laws ban this absolutely.
- **Don't** introduce identical card grids (icon + heading + text repeated endlessly). The project-card grid is the maximum; do not replicate the pattern for "services," "values," or any inflated content.
- **Don't** rely on `backdrop-filter` blur for decoration. The header scroll-state blur is purposeful (signals lifted nav); the mobile-menu dialog backdrop is at the edge of acceptable; anything beyond those is forbidden.
- **Don't** use neon green, Matrix rain, skull motifs, or any crypto-hacker cliché. The register is hacker-coded, not hacker-cosplay. The signal-green pill is the only green permitted, and it is GitHub-state-green, not neon.
- **Don't** use Inter, serif display, cream backgrounds, or any pastel-on-white pattern. These are the generic SaaS / designer-editorial reflexes that PRODUCT.md explicitly anti-references.
- **Don't** use em dashes. Use commas, colons, semicolons, periods, parentheses, or restructure the sentence.
- **Don't** add motion that animates layout properties (width, height, top, left, margin). Animate transform and opacity only.
- **Don't** introduce hard-coded color literals in component CSS. Use tokens. The audit found `#1a0a0e`, `#ffffff`, multiple `rgba(0, 0, 0, ...)` and `rgba(255, 45, 85, ...)` literals leaking through; extract to `--color-*-rgb` channel tokens.
