// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      cover: image(),
      audio: z.string(),
      description: z.string(),
    //   pubDate: z.date(),
    //   author: z.string(),
    //   image: z.object({
    //     url: z.string(),
    //     alt: z.string()
    //   }),
    //   tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};