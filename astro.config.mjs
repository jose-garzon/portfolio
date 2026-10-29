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
  // github-dark comments (#6A737D) sit at 4.0:1 on the surface; lift them past 4.5:1.
  span(node) {
    if (typeof node.properties.style === 'string') {
      node.properties.style = node.properties.style.replace(/#6A737D/gi, '#8B949E');
    }
  },
};

const isWhitespace = (n) => n.type === 'text' && !n.value.trim();
const isImage = (n) => n.type === 'element' && n.tagName === 'img';

const toFigure = (img) => ({
  type: 'element',
  tagName: 'figure',
  properties: { className: ['shot'] },
  children: [
    img,
    ...(img.properties.alt
      ? [
          {
            type: 'element',
            tagName: 'figcaption',
            properties: {},
            children: [{ type: 'text', value: String(img.properties.alt) }],
          },
        ]
      : []),
  ],
});

const imageOnlyChildren = (node) => {
  if (node.type !== 'element' || node.tagName !== 'p') return null;
  const imgs = node.children.filter((c) => !isWhitespace(c));
  return imgs.length > 0 && imgs.every(isImage) ? imgs : null;
};

// Image-only paragraphs become captioned figures; consecutive ones share a strip.
function rehypeShots() {
  return (tree) => {
    const visit = (parent) => {
      if (!parent.children) return;
      const out = [];
      for (const node of parent.children) {
        const imgs = imageOnlyChildren(node);
        if (!imgs) {
          visit(node);
          out.push(node);
          continue;
        }
        const figures = imgs.map(toFigure);
        const prev = out.filter((n) => !isWhitespace(n)).at(-1);
        if (prev?.properties?.className?.includes('shots')) prev.children.push(...figures);
        else
          out.push({
            type: 'element',
            tagName: 'div',
            properties: { className: ['shots'] },
            children: figures,
          });
      }
      parent.children = out;
    };
    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://jose-garzon.dev',
  integrations: [react(), mdx()],
  markdown: {
    rehypePlugins: [rehypeShots],
    shikiConfig: {
      transformers: [stripCodeBackground],
    },
  },
});
