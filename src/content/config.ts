import { defineCollection, z } from 'astro:content'

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    author: z.string().optional(),
    color: z.string().default('blue'),
  })
})

export const collections = { docs }