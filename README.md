# jose-garzon.dev

Personal portfolio and learning journal. Built to document the transition from five years of production frontend work at Disney and Aeroméxico toward backend engineering and systems design.

## What this is

- **Portfolio** — work history, projects, and the stack I'm moving into (Python, FastAPI, PostgreSQL, Docker)
- **Blog** — where I write down what I'm learning: backend concepts, systems design, math, things I get wrong and then fix

The blog is the honest part. Not polished tutorials — a record of someone learning in public, written as I go.

## Stack

- [Astro 6](https://astro.build) — static site, file-based routing
- **React 19** — interactive components
- **TypeScript**
- **CSS Modules** — scoped styles, no utility framework
- **MDX** — blog posts
- **Biome** — linting & formatting
- **Vitest** — testing

## Dev

```bash
bun install
bun dev        # http://localhost:4321
bun build      # output: dist/
bun preview    # preview production build
bun test       # run tests
bun check      # lint + format
```

## Structure

```bash
src/
  pages/          # file-based routes
  layouts/        # shared page shells
  modules/        # page-specific sections (home, blog)
  shared/
    components/   # reusable components
    data/         # content as JSON (hero, about, experience, projects)
    hooks/        # shared React hooks
```

Content lives in `src/shared/data/` as JSON — no CMS, no database.

## License

All rights reserved.
