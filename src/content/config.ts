// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        date: z.string(),
        draft: z.boolean(),
        image: z.string().optional(),
    }),
});

export const collections = {
    blog,
};
