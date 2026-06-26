# Vim: Workflows, Advanced Tips, and Learning Plan

You've covered all the levels. This post brings everything together — practical workflows that combine multiple commands, advanced tricks worth knowing, and a structured learning plan so you actually internalize all of it.

## Common Workflows

### Rename a Variable Across a File

1. Place cursor on the variable
2. `*` — search all occurrences
3. `ciw` — change the first one, type new name, `Esc`
4. `n` — jump to next occurrence
5. `.` — repeat the change
6. Repeat `n` + `.` for each occurrence

### Refactor a Function (Move It)

1. `V` — enter line-wise Visual mode
2. Select the entire function with `j/k`
3. `d` — cut it
4. Navigate to the destination
5. `p` — paste it

### Indent a Block

1. `V` — enter line-wise Visual mode
2. Select the lines with `j/k`
3. `>` to indent, `<` to de-indent
4. `.` to repeat if you need more levels

### Duplicate a Line

```
yy  → yank line
p   → paste below
```

Or faster:
```
Yp  → yank and paste in one motion
```

### Move a Line Up or Down

```
ddkP  → cut line, move up, paste above
ddp   → cut line and paste below
```

---

## Advanced Tips

### Whole-File Operations

```
ggVG  → select entire file (gg + V + G)
ggdG  → delete entire file contents
gg=G  → auto-indent entire file
```

### Increment and Decrement Numbers

```
Ctrl+a  → increment number under cursor
Ctrl+x  → decrement number under cursor
```

In Visual block mode, you can create sequences:
1. `Ctrl+v` — visual block
2. Select a column of numbers
3. `g Ctrl+a` — create an incremental sequence (1, 2, 3...)

### Change Case

```
~    → toggle case of character under cursor
gUiw → uppercase current word
guiw → lowercase current word
g~~  → toggle case of entire line
```

---

## Suggested Learning Plan

Don't try to learn everything at once. Follow this week-by-week progression:

### Week 1: Foundations
- Navigation: `hjkl`, `w/b/e`, `0/$`, `gg/G`
- Insert mode: `i/a/o/O`
- Basic editing: `dd`, `yy`, `p`, `u`, `Ctrl+r`

### Week 2: Text Objects
- `ciw`, `ci"`, `ci(`, `ci{`
- `diw`, `di"`, `di(`, `di{`
- Search: `/`, `*`, `n`, `N`

### Week 3: Visual Mode and Repetition
- `V` + operators (`d`, `y`, `>`, `<`)
- The dot command `.`
- The core workflow: `*` + `ciw` + `n` + `.`

### Week 4: Line Search and Multipliers
- `f/F/t/T` + `;/,`
- Multipliers: `3dd`, `5j`, `2ci"`
- Commenting: `gcc`, `gc{motion}`

### Week 5 and Beyond: Advanced
- Macros: `q{letter}` + actions + `q` + `@{letter}`
- Marks: `m{letter}` + `'{letter}`
- Visual block: `Ctrl+v` + `I`
- Search and replace: `:%s/old/new/gc`

---

## Additional Resources

- `:help {command}` — built-in documentation for any command (e.g., `:help ciw`)
- `vimtutor` — interactive tutorial built into Vim, run it in your terminal
- [Vim Adventures](https://vim-adventures.com/) — game-based Vim practice
- [Vim Cheat Sheet](https://vim.rtorr.com/) — quick reference

---

## Final Notes

1. **Always return to Normal mode with `Esc`** when you're done editing
2. **Think in the grammar**: operator + motion/text object
3. **Use `.` to repeat** — it's one of the most powerful commands in Vim
4. **Learn progressively** — don't try to memorize everything at once
5. **Practice on real code** — that's the fastest way to internalize it

The first two weeks feel slow. By week four, you'll start to notice that you're editing faster than before. By week eight, the grammar becomes instinct and you stop thinking about individual commands.
