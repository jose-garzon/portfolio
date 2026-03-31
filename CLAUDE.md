# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (http://localhost:4321)
npm run build     # Build for production (output: dist/)
npm run preview   # Preview production build locally
```

Requires Node >= 22.12.0.

## Architecture

This is an [Astro 6](https://astro.build) portfolio site (currently in its initial state from the Astro starter template).

- `src/pages/` — File-based routing. Each `.astro` file becomes a page. `index.astro` is the home page.
- `src/layouts/` — Shared page shells (e.g. `Layout.astro` provides the HTML document wrapper with `<slot />`).
- `src/components/` — Reusable Astro components.
- `src/assets/` — Static assets imported directly in components (processed by Astro's asset pipeline).
- `astro.config.mjs` — Astro configuration (integrations, adapters, etc. go here).

Astro components use a frontmatter fence (`---`) at the top for server-side JS/TS, followed by HTML template with scoped `<style>` blocks.

Do not write comments for every change. 
Do not use inline styles.