import { z } from "zod";
import { commentSchema, InputSchema } from "./inputSchema";

export const loginSchema = InputSchema.pick({
  email: true,
  password: true,
});

export const signupSchema = loginSchema
  .merge(
    InputSchema.pick({
      nickname: true,
      passwordConfirm: true,
    })
  )
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"], // passwordConfirm 필드에서 오류 발생
  });

export const commentSchemaWithId = z.object({
  inquiry: commentSchema.optional(), // 기존 commentSchema를 'inquiry'라는 키로 포함
  comment: commentSchema.optional(), // 기존 commentSchema를 'content'라는 키로 포함
});

export const articleSchema = InputSchema.pick({
  title: true,
  content: true,
});

export type LoginFormSchema = z.infer<typeof loginSchema>;
export type SignupFormSchema = z.infer<typeof signupSchema>;
export type CommentFormSchema = z.infer<typeof commentSchemaWithId>;
export type ArticleFormSchema = z.infer<typeof articleSchema>;
