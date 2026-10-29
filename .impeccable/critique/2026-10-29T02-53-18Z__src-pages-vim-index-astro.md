---
target: /vim
total_score: 23
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 2
target_identity: "file:/home/flanagan/workspace/github.com/jose-garzon/portfolio/src/pages/vim/index.astro"
target_fingerprint: "sha256:e857bfaa423d4cebfd8709f0f08a0b59f98d8090e8f6d1f56d0eebab6ba372f2"
target_path: /home/flanagan/workspace/github.com/jose-garzon/portfolio/src/pages/vim/index.astro
timestamp: 2026-10-29T02-53-18Z
slug: src-pages-vim-index-astro
---
# Critique: /vim (src/pages/vim/index.astro + VimLevelLayout, Exercise, VimEditor)
Score 23/40 (Acceptable). P0:1 P1:2 P2:2.
Heuristics: 1=2 no completion/progress; 2=3; 3=3 reset not reachable in-vim; 4=2 crimson links/hover vs cyan rule, editor glow; 5=2; 6=2 cheat-sheets scroll away; 7=2 no keyboard level nav; 8=3 triple back-links; 9=1 no hint/solution/diff; 10=3 no "differs from real vim" note.
Specificity: mostly generic docs pattern; stencil H1 + // kickers only; no chamfer/HUD/pixel labels; editor looks like default CodeMirror embed.
Detector: 2x design-system-color, VimEditor.module.css:2,15 (rgba white borders) - true.
P0 editor a11y: no aria-label (VimEditor.tsx:346), .cm-focused outline:none (VimEditor.tsx:35), weak focus-within border, reset 36px (module.css:68), no exit instruction. -> harden
P1 no completion state/progress persistence. -> onboard/delight
P1 brand grammar missing + token breaks: crimson links (VimLevelLayout:738), glow box-shadow (module.css:5-7,16-18), mono not pixel labels. -> bolder scoped, polish
P2 level nav hidden <1024px (VimLevelLayout:543-551). -> adapt
P2 all editors client:load (Exercise.astro:24). -> optimize
Minor: duplicated kicker/prose CSS; empty pager spans; inline height style (VimEditor.tsx:346, violates CLAUDE.md); orphan vim-tutorial.md/vim-advanced.md; aside wraps unlabelled nav; aria-hidden numerals.
