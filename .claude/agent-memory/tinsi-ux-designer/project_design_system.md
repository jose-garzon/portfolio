---
name: Portfolio Design System
description: Core design tokens, color palette, typography, and animation patterns used in the portfolio
type: project
---

The portfolio uses a dark, terminal/hacker aesthetic with a green accent.

**Color palette:**
- Background: `#080c10` (deep navy-black)
- Alt background: `#0d1117`
- Surface: `#111820`, Surface raised: `#16202c`
- Border: `#1e2d3d`, Border subtle: `#162030`
- Text: `#e6edf3`, Muted: `#8b949e`, Subtle: `#656d76`
- Accent (green): `#39d353` — primary accent, all links/dots/CTAs/badges; matches GitHub contribution graph green
- Accent warm (red-orange): `#f78166` — available, not yet used widely
- Accent dim: `rgba(57, 211, 83, 0.1)`, Accent glow: `rgba(57, 211, 83, 0.06)`
- Shadow accent: `0 0 24px rgba(57, 211, 83, 0.12)`

**Typography:**
- Body: Space Grotesk (300–700 weight) — geometric, technical, has personality
- Mono: JetBrains Mono — used for labels, badges, code, logo, dates, section labels
- Loaded from Google Fonts in Layout.astro and global.css

**Animation tokens:**
- `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` — snappy deceleration
- `--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)` — slight overshoot
- `--duration-fast: 120ms`, `--duration-normal: 250ms`, `--duration-slow: 400ms`
- Hero entrance: `hero-in` keyframe (fade + translateY(16px)), each element staggered by 0.07–0.08s delay
- Scroll reveals: CSS `animation-timeline: view()` with `reveal` and `reveal-stagger` classes
- Card hover: `translateY(-5px)` + border color + box-shadow glow
- `prefers-reduced-motion` guard in global.css and Hero

**Layout:**
- `--max-content: 1100px`, `--max-prose: 65ch`
- `--nav-height: 64px`
- `--space-section: clamp(5rem, 12vw, 9rem)` — section vertical padding
- Token scale: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16 (no --space-7 — use --space-8 instead)

**Background effects:**
- `bg-grid` div in Layout: subtle CSS grid lines using green tint, masked radially from top
- Hero ambient: radial gradient glow behind the hero text (green)
- Featured project card: gradient to `#0d1f12` (deep green-tinted dark)

**Badge contrast rules:**
- `badge--muted`: background `--color-surface-raised`, text `--color-text-muted` — never use `--color-text-subtle` for small badge text
- `badge--accent`: background `--color-accent-glow`, border `--color-accent-dim`, text `--color-accent`

**Why:** User prefers green hacker/terminal aesthetic over blue. Space Grotesk preferred over Inter for its geometric character. Contrast was insufficient on muted/subtle text in badges, job periods, and panel labels — lifted to text-muted minimum.

**How to apply:** Always reference tokens. Never hardcode `rgba(57, 211, 83, ...)` — use the accent token variables. Use Space Grotesk for body, JetBrains Mono for all technical labels/badges/code.
