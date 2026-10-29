---
target: /blog/entry
total_score: 16
max_score: 28
na_heuristics: 5,9,10
p0_count: 0
p1_count: 2
target_identity: "file:/home/flanagan/workspace/github.com/jose-garzon/portfolio/src/pages/blog/[...slug].astro"
target_fingerprint: "sha256:151acb118c0dfe7b4b6eb3aed67dfa0c605ac9e023ccf63a683426f854beb079"
target_path: /home/flanagan/workspace/github.com/jose-garzon/portfolio/src/pages/blog/[...slug].astro
timestamp: 2026-10-29T01-42-16Z
slug: src-pages-blog-slug-astro
---
Score 16/28 (n/a: 5,9,10). Specificity: half — DedSec chrome stops at H1.
P1 Glitch fires on article H2s: Layout.astro:72-76 excludes `article`, body is div.prose (BlogPostLayout.astro:74). Fix: <article class="prose">.
P1 No conversion moment post-footer (BlogPostLayout.astro:78-125). Add HUD author/lead panel, drop .post-tail.
P2 A11y: back links <44px (footer 134x21, pill 37h); Shiki comment #6a737d/#0d0d0d 4.0:1; ~88ch lines at 1440.
P2 Inline code crimson (:435), li muted (:469), header/prose 65ch mismatch (:163 vs :380).
P3 No TOC rail / heading anchors / code copy.
Minor: pager spans aria-hidden, related label p->h2, back-link hover cyan, no og meta, silent 404 redirect, text-wrap balance/pretty.
