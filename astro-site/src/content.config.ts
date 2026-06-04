import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const imageSchema = z.object({
    src: z.string(),
    alt: z.string(),
    caption: z.string().optional(),
});

const writing = defineCollection({
    loader: glob({ base: "./src/content/writing", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        draft: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
        heroImage: imageSchema.optional(),
        series: z.string().optional(),
        seriesOrder: z.coerce.number().int().positive().optional(),
    }),
});

const projects = defineCollection({
    loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        status: z.string().default("In progress"),
        featured: z.boolean().default(false),
        order: z.number().default(99),
        tags: z.array(z.string()).default([]),
        heroImage: imageSchema.optional(),
        externalUrl: z.string().url().optional(),
    }),
});

const albums = defineCollection({
    loader: glob({ base: "./src/content/albums", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date().optional(),
        location: z.string().optional(),
        featured: z.boolean().default(false),
        cover: imageSchema,
        photos: z.array(imageSchema).default([]),
        tags: z.array(z.string()).default([]),
    }),
});

const tools = defineCollection({
    loader: glob({ base: "./src/content/tools", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        href: z.string(),
        status: z.string().default("Available"),
        icon: z.string().optional(),
        tags: z.array(z.string()).default([]),
    }),
});

const timeline = defineCollection({
    loader: glob({ base: "./src/content/timeline", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        order: z.number().default(99),
        tags: z.array(z.string()).default([]),
    }),
});

export const collections = {
    albums,
    projects,
    timeline,
    tools,
    writing,
};
