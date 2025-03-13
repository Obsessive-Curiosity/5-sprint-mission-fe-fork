import { z } from "zod";

export const textareaSchema = z.object({
  content: z.string().min(1, "내용은 최소 1자 이상이어야 합니다."),
});

export type ArticleFormSchema = z.infer<typeof textareaSchema>;
