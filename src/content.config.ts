import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts live in src/content/blog/*.md. Each post is written in one
// language (`lang`); the page chrome around it stays bilingual.
// Files whose name starts with "_" (e.g. _template.md) are never published.
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.enum(['en', 'zh']).default('en'),
    tags: z.array(z.string()).default([]),
    // Drafts are visible in `npm run dev` but excluded from the production build.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
