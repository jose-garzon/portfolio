// @ts-check

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// Drop Shiki's inline background so each surface's own CSS `pre` background applies.
const stripCodeBackground = {
  pre(node) {
    if (typeof node.properties.style === 'string') {
      node.properties.style = node.properties.style
        .replace(/background-color:[^;]*;?/gi, '')
        .replace(/^;+/, '');
    }
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://jose-garzon.dev',
  integrations: [react(), mdx()],
  markdown: {
    shikiConfig: {
      transformers: [stripCodeBackground],
    },
  },
});
