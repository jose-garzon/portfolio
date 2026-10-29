---
target: /blog
total_score: 25
max_score: 36
na_heuristics: 10
p0_count: 0
p1_count: 2
target_identity: "file:/home/flanagan/workspace/github.com/jose-garzon/portfolio/src/pages/blog/index.astro"
target_fingerprint: "sha256:980fd30fb2f0d4fe27744dff41404999b92885f3f744504c5d99eb23610bdf6d"
target_path: /home/flanagan/workspace/github.com/jose-garzon/portfolio/src/pages/blog/index.astro
timestamp: 2026-10-29T01-20-43Z
slug: src-pages-blog-index-astro
---
# Critique: /blog (src/modules/blog/blog.page.astro)
Method: dual-agent. Score 25/36 (H10 n/a). Scores: H1 2, H2 3, H3 2, H4 2, H5 3, H6 3, H7 1, H8 3, H9 3.
Specificity: DedSec only in inherited h1/label; feed is generic dev-blog list. Detector: CLI 0; browser: hero-eyebrow-chip (:33, borderline), line-length ~94ch .blog-subtext (:37-40, true).
## Priority Issues
1. [P1] Filter lacks aria-pressed + live count (:58,:64,:384-386,:42-47). harden
2. [P1] .feed-link wraps whole card (:82-103); tag chips ~28px <44px. harden/adapt
3. [P2] Crimson used for interaction (:223,:298,:333,:319) -> cyan. colorize
4. [P2] Feed lacks DedSec chrome (:262,:155,:183,:239); subtext needs 65ch. bolder
5. [P3] No ?tag= URL; meta desc (:28) mismatch; generic empty state (:74); stencil weight 700 (:134). clarify
## Personas
Hiring manager: thin count, no backend signal, no exit CTA. Peer: no tag links/RSS, inert tags. AT user: card link name, no announcements, glitch pseudo text.
## Minor
Leftover wrappers; filter bar at low volume; countdown index; index hidden <640px; no excerpt clamp; BlogCard unused.
