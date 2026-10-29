---
target: /experience
total_score: 19
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 3
target_identity: "file:/home/flanagan/workspace/github.com/jose-garzon/portfolio/src/pages/experience.astro"
target_fingerprint: "sha256:33da45dd75568844c8ea699f2955a88c58be23acc181fb690916bc9fa85a7877"
target_path: /home/flanagan/workspace/github.com/jose-garzon/portfolio/src/pages/experience.astro
timestamp: 2026-10-29T00-55-45Z
slug: src-pages-experience-astro
---
# Critique: /experience (src/pages/experience.astro)
Method: dual-agent. Score 19/28 (68%, Acceptable). n/a: 7, 9, 10.
Heuristics: 1=3, 2=3, 3=3, 4=2 (crimson overused, hover lift on non-interactive badges), 5=3, 6=3, 8=2 (3 equal-weight tiers per job, 8 badges).
Detector: 0 findings (page, Layout, Badge, Header). No browser overlay.
## Priority issues
- [P1] No DedSec chrome; generic dot/line timeline (:176-186). Fix: outlined stencil index numerals, Silkscreen period readout, .cut + HUD frame on current role only.
- [P1] Crimson overused + badges look interactive (:57, :134, :168-174, :212, Badge.astro:52-56). Fix: muted stack badges, no hover transform, crimson only on index + current marker.
- [P1] Proof points buried; page ends on oldest job, no CTA (:63). Fix: Signal White lead metric per job, cap ~4 badges with backend first, closing block linking projects/contact.
- [P2] Description vs bullets no hierarchy (:188-210).
- [P3] H1 data-text glitch: .experience-title missing from positioning selectors (global.css:259-261). Verify.
## Minor
Gradient timeline line off-brand; doubled spacing (.job padding + .timeline-item); "Javascript" casing; "microservices" overclaim in meta.
