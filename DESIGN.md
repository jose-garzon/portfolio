---
name: jose-garzon.dev
description: Backend-leaning engineer's portfolio and learning journal. Built by DedSec, worn by nobody.
colors:
  void-black: "#000000"
  bg-alt: "#070707"
  surface: "#0d0d0d"
  surface-raised: "#151515"
  wire: "#2b2b2b"
  wire-subtle: "#1a1a1a"
  signal-white: "#eef2f7"
  text-muted: "#c4c8cc"
  text-subtle: "#a3a8ad"
  dedsec-crimson: "#ff2d55"
  dedsec-crimson-warm: "#ff4d6d"
  corruption-cyan: "#00e5ff"
  corruption-cyan-deep: "#00a8c2"
  sticker-magenta: "#ff2bd6"
  live-green: "#39d353"
  warn-amber: "#ffbe0b"
typography:
  display:
    fontFamily: "Saira Stencil One, IBM Plex Sans Condensed, sans-serif"
    fontSize: "clamp(4.25rem, 17vw, 11.5rem)"
    fontWeight: 400
    lineHeight: 0.82
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Saira Stencil One, IBM Plex Sans Condensed, sans-serif"
    fontSize: "clamp(3rem, 2.5rem + 3vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.01em"
  title:
    fontFamily: "IBM Plex Sans Condensed, IBM Plex Sans, sans-serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.4vw, 1.25rem)"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(0.9375rem, 0.9rem + 0.2vw, 1rem)"
    fontWeight: 400
    lineHeight: 1.6
  prose:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Silkscreen, JetBrains Mono, monospace"
    fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)"
    fontWeight: 400
    letterSpacing: "0.06em"
  data:
    fontFamily: "JetBrains Mono, Fira Code, monospace"
    fontSize: "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)"
    fontWeight: 400
rounded:
  none: "0"
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
  section: "clamp(3rem, 6vw, 5rem)"
  cut: "14px"
components:
  button-primary:
    backgroundColor: "{colors.dedsec-crimson}"
    textColor: "{colors.void-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.corruption-cyan}"
    textColor: "{colors.void-black}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.signal-white}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.25rem"
  button-secondary-hover:
    textColor: "{colors.corruption-cyan}"
  lead-panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "2rem"
  nav-link-active:
    backgroundColor: "{colors.corruption-cyan}"
    textColor: "{colors.void-black}"
    typography: "{typography.label}"
  prose-link:
    textColor: "{colors.corruption-cyan}"
---

# Design System: jose-garzon.dev

## Overview

**Creative North Star: "Built by DedSec"**

The site should feel like DedSec built it for a backend engineer. It borrows Watch Dogs 2's *grammar*, not its costume:
- chamfered panels
- HUD corner brackets
- stencil display type
- pixel-font data labels
- dense readouts
- corruption that sits in the layout at rest

There are no masks, skulls, sigils from the game, or graffiti. The goal is the feeling of a hacker collective's tooling, applied to a hiring-manager audience that still needs to read the content in sixty seconds.

The site has two registers. **Chrome** (nav, hero, section heads, project ledger) is dense, angular and loud. **Reading surfaces** (blog and case-study bodies) are calm, near-white on black, with no effects. Content stays sober inside the loud chrome.

**Key Characteristics:**
- Zero radius everywhere. One chamfer shape (`.cut`, 14px) replaces all rounding.
- Stencil uppercase display (Saira Stencil One) for h1/h2 only, and huge where it appears.
- Pixel labels (Silkscreen) for HUD readouts, nav, buttons and section labels.
- Corruption at rest: a torn hero name, displaced crimson/cyan blocks, outlined numerals.
- Thin 1px wires and corner brackets instead of filled cards with glow.

## Colors

Crimson and cyan on a void. Neutrals are true greys; the warmth comes from crimson alone.

### Primary
- **DedSec Crimson** (#ff2d55): the brand. Used for the last name in the hero, primary buttons, lead-panel spine, index numbers, and `>` prompts. Text on crimson is always Void Black (5.8:1).

### Secondary
- **Corruption Cyan** (#00e5ff): interaction and corruption. Used for links, focus rings, hover states, the active nav block, HUD brackets, section labels, and the cyan tear layer.
- **Corruption Cyan Deep** (#00a8c2): the secondary cyan, used in the monogram and Vim module.

### Tertiary
- **Sticker Magenta** (#ff2bd6): rare. Used only as the tear layer on the hero last name and the monogram fringe.

### Neutral
- **Void Black** (#000000): the page, nav and overlay background.
- **Surface** (#0d0d0d) and **Surface Raised** (#151515): the lead panel and row hover.
- **Wire** (#2b2b2b) and **Wire Subtle** (#1a1a1a): 1px rules, borders and table lines.
- **Signal White** (#eef2f7): headings and prose.
- **Text Muted** (#c4c8cc): UI copy.
- **Text Subtle** (#a3a8ad): metadata.
- **Live Green** (#39d353) and **Warn Amber** (#ffbe0b): status only.

### Named Rules
**The Fixed Jobs Rule.** Crimson means brand and primary action. Cyan means "you can touch this" or "this is corrupted". Never use cyan for decoration that isn't interactive or corruption, and never use crimson for links.

**The Ink on Signal Rule.** Text on a crimson or cyan fill is always Void Black.

## Typography

**Display Font:** Saira Stencil One
**Body Font:** IBM Plex Sans; IBM Plex Sans Condensed for titles
**Label Font:** Silkscreen
**Data Font:** JetBrains Mono

**Character:** Industrial stencil for the shouts, pixel type for the machine's voice, Plex for the human's.

### Hierarchy
- **Display** (400, up to 11.5rem, 0.82 leading, uppercase): the hero name only. It may run off the left edge.
- **Headline** (400, up to 4.5rem, 0.9 leading, uppercase): section titles and page h1s. Followed by the crimson/cyan corruption bar.
- **Title** (Plex Condensed 600, about 1.25rem): h3, card and ledger names, and prose h2/h3.
- **Body** (Plex 400, 15–16px, 1.6 leading, 60ch measure).
- **Prose** (Plex 400, 17–18px, 1.65 leading, 65ch measure).
- **Label** (Silkscreen, 12–13px, uppercase, +0.06em): nav, buttons, section labels, readouts.
- **Data** (JetBrains Mono, 12–13px): dates, stacks, code.

### Named Rules
**The Stencil Ceiling Rule.** Saira Stencil One is for h1/h2 at 2.5rem and up. Below that, use Plex Condensed. Never set stencil in prose.

**The 12px Floor Rule.** No text below 12px. `font-synthesis: none` is set, so never ask for a bold stencil.

## Layout

A single 1100px column with 1.5rem gutters, and one section rhythm: clamp(3rem, 6vw, 5rem). Text uses two measures, 60ch for UI and 65ch for prose. The hero doesn't take the full viewport. It is a readout bar, the stencil name, then a 7:4 console grid (HUD panel and sigil), then a "last transmission" row. Projects use one featured lead panel, then a dense ledger table. Breakpoints are 860px (grids collapse, sigil hides) and 640px.

## Elevation & Depth

Flat. There are no shadows. Depth comes from tonal steps (Void → Surface → Surface Raised), 1px wires, and the crimson spine on the lead panel.

### Named Rules
**The No Glow Rule.** No colored halos, no glass, no backdrop blur. Hover changes color or background, never adds light.

## Shapes

Zero radius. Panels, buttons and featured cards use the `.cut` chamfer (top-right and bottom-left corners clipped by `--cut`). HUD panels use `.hud`, which draws four 14px cyan corner brackets with background gradients. The nav carries cyan corner ticks at its bottom edge. Index numerals are outlined stencil (1px cyan stroke, transparent fill).

## Components

### Buttons
- **Primary:** crimson fill, black Silkscreen uppercase text, `.cut` with a 10px chamfer, minimum height 44px. Hover turns the fill cyan.
- **Secondary:** 1px wire border, Signal White text. Hover turns the border and text cyan.
- **Focus:** a 2px cyan outline at 3px offset.

### Navigation
- Solid black bar with a 1px wire hairline and cyan corner ticks.
- The logo is set in Silkscreen.
- Links are Silkscreen uppercase. Hover and the current page (`aria-current="page"`) show black text on a cyan block.
- The mobile overlay is solid black, with stencil uppercase links.

### Section Head
- A Silkscreen cyan label with a crimson `>` prompt and a trailing wire rule.
- Then the stencil headline.
- Then the corruption bar: a crimson 3.5rem × 6px block with a cyan block offset 1.25rem right and 6px down.

### Hero (signature)
- A readout bar of real stats in Silkscreen, with a live status in green.
- The stencil name: first name in Signal White, last name in crimson, indented 0.5em.
- Each name line tears at load into a cyan slice and a white or magenta slice, then holds the tear permanently. With reduced motion, the tear is drawn statically.
- Displaced crimson and cyan corruption blocks.
- A `.hud` whoami panel holding the role, tagline and actions, next to the monogram sigil.

### Project Ledger
- **Lead panel:** a `.cut` surface panel with a 6px crimson spine, an outlined stencil index, a stencil title, stack chips and a crimson CTA.
- **Ledger rows:** pixel index, condensed name, two-line description, mono stack, arrow. The whole row is clickable, and hover shows the surface background with a cyan name.

### Prose
- Signal White text at 1.65 leading, 65ch measure.
- Cyan links with an underline.
- Crimson inline code.
- No effects.

## Do's and Don'ts

### Do:
- **Do** use `.cut` and `.hud` instead of radius or shadow to frame things.
- **Do** put real data in readouts: stats, dates, stack, counts. Never placeholder telemetry.
- **Do** keep stencil uppercase at 2.5rem and up, and Plex Condensed below.
- **Do** use black text on crimson and cyan fills.
- **Do** keep corruption static, with at most one boot tear per page and the page-in slice.

### Don't:
- **Don't** use border-radius, pills, glows, glass or backdrop blur.
- **Don't** add hover glitches to headings or infinite flicker loops.
- **Don't** use DedSec or game iconography: masks, skulls, the DedSec logo, graffiti tags.
- **Don't** put any effect inside `.prose`.
- **Don't** set text below 12px or synthesize bold on the stencil face.
