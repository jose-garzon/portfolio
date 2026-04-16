---
name: Portfolio Design System
description: Core design tokens, color palette, typography, animation patterns, and signature effects used in the portfolio
type: project
---

The portfolio uses a Watch Dogs 2 / DedSec-inspired dark aesthetic: pure-black backgrounds, vibrant red primary accent, cyan/magenta glitch accents used sparingly.

**Color palette:**
- Background: `#000000` (pure black), Alt: `#0a0a0a`
- Surface: `#121212`, Surface raised: `#1a1a1a`
- Border: `#2a1a1a` (warm red-hint), Border subtle: `#1a1010`
- Text: `#e6edf3`, Muted: `#a0a0a0`, Subtle: `#707070`
- Accent (red): `#ff2d55` — primary accent, all links/dots/CTAs/badges
- Accent warm: `#ff4d6d` — btn hover, tight-contrast text use
- Accent dim: `rgba(255, 45, 85, 0.12)`, Accent glow: `rgba(255, 45, 85, 0.06)`
- Shadow accent: `0 0 24px rgba(255, 45, 85, 0.2)`, Shadow accent-lg: `0 8px 32px rgba(255, 45, 85, 0.3)`
- Glitch cyan: `#00fff9` — used only on hero name glitch pseudo-elements
- Glitch magenta: `#ff006e` — used only on hero name glitch pseudo-elements
- Hack yellow: `#ffbe0b` — reserved, not yet deployed
- Accent green: `#39d353` — kept exclusively for semantic success/availability (eyebrow "available" badge dot)

**Electric blue secondary accent (added):**
- `--color-blue: #2d7fff`, `--color-blue-bright: #3d8fff`, `--color-blue-dark: #1a5fbf`
- `--color-blue-dim: rgba(45, 127, 255, 0.1)`, `--color-blue-glow: rgba(45, 127, 255, 0.08)`
- Used in RGB-split glitch pseudo-elements as the blue offset channel

**Typography:**
- Body: Space Grotesk (300–700 weight) — geometric, technical, has personality
- Display: Chakra Petch (500–700 weight) — applied to `h1, h2, h3, .section-title` via `--font-display` token
- Mono: JetBrains Mono — used for labels, badges, code, logo, dates, section labels
- Loaded from Google Fonts in Layout.astro and global.css

**Animation tokens:**
- `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` — snappy deceleration
- `--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)` — slight overshoot
- `--ease-glitch: cubic-bezier(0.25, 0.46, 0.45, 0.94)` — glitch effect easing
- `--duration-fast: 120ms`, `--duration-normal: 250ms`, `--duration-slow: 400ms`
- `--duration-glitch: 60ms`
- Hero entrance: `hero-in` keyframe (fade + translateY(16px)), staggered 0.07–0.08s per element
- Scroll reveals: CSS `animation-timeline: view()` with `reveal` and `reveal-stagger` classes
- Card hover: `translateY(-5px)` + border color + box-shadow red glow
- `prefers-reduced-motion` guards in global.css, Hero, and all glitch animations

**Signature effects:**
- **CRT overlay** (`Layout.astro` `.crt-overlay`): Fixed, `pointer-events: none`, `z-index: 9999`. Three stacked `background-image` layers: (1) scanlines — `repeating-linear-gradient` at 2px intervals, `rgba(0,0,0,0.18)` on alternate pixels; (2) film grain — inline SVG `feTurbulence` noise at `opacity: 0.04`; (3) vignette — `radial-gradient` darkening edges at 45% opacity. On mobile (≤640px) scanlines are removed, grain opacity 0.03, vignette at 0.3.
- **RGB split glitch on headings**: Global selector `[data-text]:hover::before/::after` in `global.css`. Uses `content: attr(data-text)`, `clip-path: inset()` animation cycling random slices, red channel offset -2px, blue channel offset +2px, `mix-blend-mode: screen`. Duration 200ms, `steps(1)` so it snaps between slices — not smooth. Fires only on `:hover`. Opt-in: add `data-text="same text content"` to any heading. Currently applied to: hero `.name-line` spans (both), `.about-heading`, `#experience .section-title`, `BlogPostLayout .post-title`. `prefers-reduced-motion` disables it entirely.
- **Card signal-loss flicker**: `@keyframes border-flicker` on `.card:hover` and `.blog-card:hover`. 120ms, `steps(1)`, cycles border-color through accent red → blue-bright → accent → blue → accent → accent-dim. Settles at `--color-accent-dim` when hover is held. Enhanced shadow on hover (deeper black spread + red glow). Disabled on mobile (≤640px) and with `prefers-reduced-motion`.
- **Hero name shimmer**: `.name-line--accent` has slow 5s `shimmer` keyframe shifting gradient background-position. Not a glitch — decorative motion on gradient text.
- **Scroll progress bar**: 1px gradient `transparent → accent → transparent` driven by `animation-timeline: scroll(root)`.
- **bg-grid**: CSS grid lines at `rgba(255, 45, 85, 0.025)`, 60px × 60px, radially masked from top.
- **Card glow**: Mouse-tracked `radial-gradient` on `.card-glow` using `--mouse-x`/`--mouse-y` CSS custom properties set via JS `mousemove`.
- **Featured card**: gradient to `#1a0a0e` (deep red-tinted dark).

**Layout:**
- `--max-content: 1100px`, `--max-prose: 65ch`
- `--nav-height: 64px`
- `--space-section: clamp(5rem, 12vw, 9rem)`
- Token scale: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16 (no --space-7 — use --space-8 instead)

**Badge contrast rules:**
- `badge--muted`: background `--color-surface-raised`, text `--color-text-muted` — never use `--color-text-subtle` for small badge text
- `badge--accent`: background `--color-accent-glow`, border `--color-accent-dim`, text `--color-accent`
- `btn--primary`: white text (`#ffffff`) on red — do NOT use dark text; `#ff2d55` on black fails WCAG AA for small text

**Contrast notes:**
- `#ff2d55` on `#000000` = ~4.7:1 — passes AA for large text and UI components, marginal for small body text
- For body-text uses of accent, prefer `--color-accent-warm` (#ff4d6d) — slightly higher perceived readability
- Eyebrow "available" badge keeps green intentionally (semantic: availability signal)

**Why:** User wants Watch Dogs 2 / DedSec / Mr. Robot aesthetic — pure black, red primary, subtle terminal degradation. Moved from GitHub green (#39d353) to WD2 red (#ff2d55) as primary. Space Grotesk preferred over Inter for geometric character.

**Critical constraint:** User explicitly rejected always-on/auto-firing glitch on hero name — called it "awful." All glitch and flicker effects MUST be hover-triggered only, never on page load or on a timer. The CRT scanlines/noise are static (no animation). `prefers-reduced-motion` must disable all flicker/glitch.

**How to apply:** Always reference tokens. Never hardcode color values. Glitch is opt-in via `data-text` attribute. Keep effects restrained — one great effect beats five mediocre ones. No Matrix rain, no typing effects, no continuous loops on visible elements.
