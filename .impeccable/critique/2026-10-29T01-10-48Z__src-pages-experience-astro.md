---
target: /experience
total_score: 19
max_score: 28
na_heuristics: 5,9,10
p0_count: 0
p1_count: 2
target_identity: "file:/home/flanagan/workspace/github.com/jose-garzon/portfolio/src/pages/experience.astro"
target_fingerprint: "sha256:c1646bd03d1d8b14f77dd6f186e360adf6f63d4927d8c6116c367da3c33a0162"
target_path: /home/flanagan/workspace/github.com/jose-garzon/portfolio/src/pages/experience.astro
timestamp: 2026-10-29T01-10-48Z
slug: src-pages-experience-astro
---
# Critique v3: /experience
Dual-agent, rendered 1280/390. 19/28 (n/a 5,9,10). H: 1=3 2=3 3=3 4=2 6=3 7=2 8=3. Detector 0 findings / 6 files.
FPs dropped: cyan numerals (DESIGN.md:191), 6px crimson spine (DESIGN.md:219 lead panel spec).
## Priority
- [P1] Role titles ("Frontend Developer" x3) are loudest text; fight "software engineer" positioning. Option: company line larger, role smaller (experience.astro:38-39,135-149).
- [P1] Metrics inside grey prose; set numbers as mono highlights or make metric bullet lead.
- [P2] Description and lead bullet both full white; compete. Description -> muted or lead bullet only white.
- [P2] Past-date `>` in --color-border (#2b2b2b) invisible; delete or commit. CSS content may be read aloud: use `content: "> " / ""`.
- [P3] Two CTAs in sequence (projects button + ContactClose) dilute; repeated TypeScript/React badges noise.
