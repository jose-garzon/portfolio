import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    period: z.string(),
    status: z.enum(['shipping', 'in-progress', 'archived']),
    summary: z.string(),
    stack: z.array(z.string()),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    blogSlug: z.string().optional(),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(0),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/now' }),
  schema: z.object({
    updated: z.date(),
  }),
});

const vim = defineCollection({
  loader: glob({
    pattern: ['vim-intro.{md,mdx}', 'vim-level-*.{md,mdx}'],
    base: './src/modules/vim-tutorial/content',
  }),
  schema: z.object({
    title: z.string(),
    level: z.number().optional(),
    summary: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { blog, projects, now, vim };
