---
title: "Learn Vim btw"
summary: "An interactive, level-by-level path to the Vim grammar — practice each concept in a real editor as you read."
---

Watch someone fluent in Vim and it looks like a magic trick. Lines vanish, text rearranges itself, the cursor teleports, and their hands never leave the home row. Here's the secret they won't tell you: they didn't memorize hundreds of shortcuts. They learned a grammar, and the grammar does the rest.

## The Vim Grammar

Vim is a tiny language: `operator` + `motion` (or `text object`). Learn the words once and you stop *recalling* commands. You start *composing* them, mid-thought, for edits you've never made before.

- `d` (delete) + `w` (word) = `dw` — delete a word
- `c` (change) + `i"` (inside quotes) = `ci"` — change the content inside quotes
- `y` (yank/copy) + `ap` (a paragraph) = `yap` — copy an entire paragraph

The operator says *what to do*. The motion says *where*. That's the whole idea. Every other feature in Vim is a variation on this one sentence.

## How This Works

Every level below has a short explanation followed by hands-on exercises. Each exercise ships with a **real Vim editor** right in the page — the same keybindings you'd get in Vim or Neovim. Read the concept, then practice it immediately in the editor below it.

Press `i` to enter Insert mode, `Esc` to return to Normal mode, and experiment freely. Each editor has a **reset** button to restore the starting text.

## The Learning Path

Go in order, one level at a time. The fastest way to quit Vim is to swallow it whole on day one. Don't. Land each level until the keys feel automatic, then move up. Start at Level 0.
