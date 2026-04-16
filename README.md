# jose-garzon.dev

Personal portfolio site for **Jose Garzon** — Software Engineer focused on AI & Product.

Built with [Astro](https://astro.build), React, and a hacker-inspired green terminal aesthetic.

## Tech Stack

- **Astro 6** — static site generation with file-based routing
- **React 19** — interactive components
- **MDX** — blog posts
- **Biome** — linting & formatting
- **Vitest** — testing
- **Husky + lint-staged** — pre-commit checks

## Getting Started

> Requires Node >= 22.12.0

```bash
bun install
bun dev        # http://localhost:4321
```

## Commands

| Command        | Action                          |
| :------------- | :------------------------------ |
| `bun dev`      | Start dev server                |
| `bun build`    | Production build to `./dist/`   |
| `bun preview`  | Preview production build        |
| `bun test`     | Run tests                       |
| `bun check`    | Lint + format with Biome        |

## Project Structure

```
src/
  pages/          # File-based routing
  modules/        # Feature modules (home, blog, projects)
  shared/         # Reusable components, data, and utilities
  layouts/        # Page shells
```

## License

All rights reserved.
