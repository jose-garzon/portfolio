import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { fullName } from '../shared/data/personal';

export async function GET(context: APIContext) {
  const allPosts = await getCollection('blog');
  const posts = allPosts
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: `${fullName} · Writing`,
    description:
      'Engineering notes on LLMs, backend, systems, and what I am figuring out. Learning in public.',
    site: context.site ?? 'https://jose-garzon.dev',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}
