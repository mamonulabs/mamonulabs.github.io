import { defineCollection, z } from 'astro:content';

const pluginsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    platforms: z.array(z.enum(['VST3', 'AU', 'CLAP', 'AAX'])).default(['VST3', 'AU', 'CLAP']),
    features: z.array(z.object({ title: z.string(), description: z.string() })).optional(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date().optional(),
  }),
});

const infobitsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
  }),
});

export const collections = {
  plugins: pluginsCollection,
  articles: articlesCollection,
  infobits: infobitsCollection,
  blog: blogCollection,
};
