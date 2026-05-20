// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://jose-garzon.dev',
  integrations: [react(), mdx()],
});
