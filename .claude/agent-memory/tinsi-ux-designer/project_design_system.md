---
name: Portfolio Design System
description: Core design tokens, color palette, typography, and animation patterns used in the portfolio
type: project
---

The portfolio uses a dark, technical aesthetic inspired by GitHub's dark theme with a blue accent.

**Color palette:**
- Background: `#080c10` (deep navy-black)
- Alt background: `#0d1117`
- Surface: `#111820`, Surface raised: `#16202c`
- Border: `#1e2d3d`, Border subtle: `#162030`
- Text: `#e6edf3`, Muted: `#7d8590`, Subtle: `#484f58`
- Accent (blue): `#58a6ff` — primary accent, used for links, dots, CTAs
- Accent warm (red-orange): `#f78166` — available, not yet used widely
- Accent green: `#3fb950` — used for "available" status badge in Hero

**Typography:**
- Body: Inter (variable, 14..32 optical sizing)
- Mono: JetBrains Mono — used for labels, badges, code, logo, dates
- Loaded from Google Fonts in Layout.astro

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

**Background effects:**
- `bg-grid` div in Layout: subtle CSS grid lines, masked radially from top
- Hero ambient: radial gradient glow behind the hero text

**Why:** The palette changed from green (`#7ee8a2`) to blue (`#58a6ff`) to feel more professional and GitHub-aligned. Old tokens are no longer in use.

**How to apply:** Always reference these tokens. When adding new components, match the surface/border/accent pattern. Use Inter for body, JetBrains Mono for all code/technical labels.
