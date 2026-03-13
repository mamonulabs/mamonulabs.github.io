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
    published: z.boolean().default(true),
  }),
});

const infobitsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    author: z.string().optional(),
    publishedAt: z.date().optional(),
    readingTime: z.number().optional(),
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
  infobits: infobitsCollection,
  blog: blogCollection,
};
