---
title: "Learn Vim by Doing"
summary: "An interactive, level-by-level path to the Vim grammar — practice each concept in a real editor as you read."
---

If you've ever watched an experienced Vim user edit code, it can look like magic. Lines disappear, text transforms, and the cursor flies around the file with zero mouse usage. The secret isn't memorizing hundreds of shortcuts — it's understanding a simple grammar.

## The Vim Grammar

Vim operates on a composable system: `operator` + `motion` (or `text object`). Once you internalize this grammar, commands stop being things you memorize and start being things you *construct*.

- `d` (delete) + `w` (word) = `dw` — delete a word
- `c` (change) + `i"` (inside quotes) = `ci"` — change the content inside quotes
- `y` (yank/copy) + `ap` (a paragraph) = `yap` — copy an entire paragraph

The operator tells Vim *what to do*. The motion tells it *where to do it*. Everything else in Vim builds on this foundation.

## How This Works

Every level below has a short explanation followed by hands-on exercises. Each exercise ships with a **real Vim editor** right in the page — the same keybindings you'd get in Vim or Neovim. Read the concept, then practice it immediately in the editor below it.

Press `i` to enter Insert mode, `Esc` to return to Normal mode, and experiment freely. Each editor has a **reset** button to restore the starting text.

## The Learning Path

Master each level before moving to the next. Don't try to learn everything at once — that's how people give up. Start with Level 0 and go from there.
