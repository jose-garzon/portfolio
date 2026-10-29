# Product

## Register

brand

## Users

Hiring managers and engineering leads scanning a candidate in the 30-90 second window before they decide whether to keep reading. They arrive from LinkedIn, a referral, or a job application. Their job-to-be-done is fast credibility triage: "Is this person worth a recruiter screen?" Their context is skim-mode on desktop, often with several other tabs open.

Secondary: peer engineers landing on the blog from a link, judging taste and depth before subscribing or sharing.

## Product Purpose

This is Jose Garzón's portfolio and learning journal. Two jobs:

1. **Convert hiring leads.** Establish credibility for a backend / systems-design role transition (from five years of frontend work at Disney and Aeroméxico). Success = recruiter screens and interview requests for backend-leaning positions.
2. **Document the learning publicly.** The blog is a record of the transition itself: backend concepts, systems design, math, what's been gotten wrong and then fixed. Honest, not polished tutorials.

The portfolio carries the conversion. The blog carries the trust signal that backs the conversion.

## Brand Personality

Sharp. Opinionated. In-the-work.

Voice is declarative, occasionally blunt. Has takes, doesn't hedge. Mid-project energy, not mid-pitch energy. First-person allowed but never performative. The site speaks like someone showing you their terminal, not their slide deck.

Emotional read on first glance, before any copy is read: sharp, technical, underground. Reads as someone who ships systems, not someone who poses for portfolios.

## Anti-references

Active refusal list. If a design choice could fit any of these, rework it.

- **Generic SaaS portfolio template.** Hero gradient, three-card "about / work / contact" grid, soft pastel-on-white, Inter everywhere. Default reflex of the category.
- **Awwwards maximalist motion reel.** Cursor trails, scroll-jacking, full-page transitions, draggable everything. Show-off energy that signals designer-trying-hard, not engineer.
- **Designer-portfolio editorial.** Serif display, cream paper, oversized photography. Wrong register; signals designer, not engineer.
- **Crypto / neon-on-black hacker cliché.** Matrix rain, neon green terminal, skull motifs, masks, game logos. The site borrows Watch Dogs 2's DedSec *grammar* (angled cuts, HUD framing, stencil and pixel type, data labels, static corruption), never its iconography.

## Design Principles

1. **Hiring conversion over taste display.** The site exists to land a backend role. Craft proves itself through restraint and clarity; it does not perform. If a visual choice doesn't help conversion or credibility, cut it.
2. **Engineer signal, not designer signal.** Every flourish should read as "this person has taste applied to a system," not "this person is a visual designer." Code-craft visible; visual-designer flourish absent.
3. **Built by DedSec, worn by nobody.** Chrome (nav, hero, section heads, cards) speaks DedSec grammar: chamfered panels, HUD corner brackets, stencil display type, pixel labels, crimson + cyan corruption at rest. Reading surfaces (post and case-study bodies) stay calm and highly legible. Crimson is the brand; cyan owns links, focus, and interaction; magenta is a rare accent.
4. **Blog as proof of work.** Writing is not decoration. The blog earns equal weight to the portfolio because honest learning-in-public is the most efficient trust signal for a transition candidate. Reading experience matters; treat blog post pages as a primary surface.
5. **Corruption is composition, not hover.** Glitch lives in static structure (a torn name, displaced color blocks, outlined numerals) plus one boot tear and one page-in slice. No hover glitches on every heading, no infinite flicker, nothing over prose. Every motion has a reduced-motion off-switch.

## Accessibility & Inclusion

WCAG 2.2 AA across all surfaces, with `prefers-reduced-motion` honored everywhere motion exists. Audit found gaps: touch targets under 44px, an anchor wrapping an article, an unlabeled main `<nav>`, a mobile-only click handler not reachable by keyboard. These are blocking for the AA commitment and should be closed before further visual work.

Higher bar in two specific places, because the audience is engineering-literate and will notice:

- **Body prose** in the blog: aim for AAA contrast (≥7:1) since long-form reading is the primary task there.
- **Keyboard navigation**: full support beyond the spec minimum. No mobile-only interactions, no mouse-only hover-reveals carrying load-bearing content.

No specific assistive-tech user research; build to the spec and the higher bar for prose, and trust that holds.
