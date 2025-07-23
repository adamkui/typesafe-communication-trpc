import { z } from "zod";

export const PostSchema = z.object({
  id: z.string(),
  author: z.string(),
  title: z.string(),
  content: z.string(),
});

export type Post = z.infer<typeof PostSchema>;
