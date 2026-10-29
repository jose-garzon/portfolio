---
target: /projects/entry
total_score: 13
max_score: 28
na_heuristics: 5,9,10
p0_count: 0
p1_count: 3
target_identity: "file:/home/flanagan/workspace/github.com/jose-garzon/portfolio/src/pages/projects/[...slug].astro"
target_fingerprint: "sha256:e47abee97f24612c33d9b0ad825c6bf6c6a18ba0acab42151b3e37019975a7cb"
target_path: /home/flanagan/workspace/github.com/jose-garzon/portfolio/src/pages/projects/[...slug].astro
timestamp: 2026-10-29T01-53-10Z
slug: src-pages-projects-slug-astro
---
Score 13/28 (n/a: 5,9,10). Specificity: half — DedSec header, generic markdown body; behind upgraded blog post layout.
P1 Crimson links/inline code (CaseStudyLayout.astro:302,307,433-440,448) -> cyan links, neutral code; shared prose stylesheet with blog.
P1 No TOC rail / heading anchors / author+CTA panel (parity with BlogPostLayout) -> extract shared components.
P1 Phone screenshots stacked 311x673 (:453-468) bury Architecture/Tradeoffs; ~11k px mobile -> side-by-side figure strip at 48rem, ~480px cap, eager first image.
P2 No highlights/TL;DR for 30-90s skim -> frontmatter highlights in lead panel.
P2 A11y/type: .case-link 18px tall, back-link 39px; 86-91 cpl; line-height 1.9 (:384); eyebrow "> case study" (banned); .case-nav unlabeled; status dot glow (:261,272).
Minor: new-tab cue, orphan pager, medixio no images, dead border-radius, empty <p> image wrappers.
