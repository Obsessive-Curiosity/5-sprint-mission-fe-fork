import { z } from "zod";
import { InputTextSchema } from "./inputTextSchema";

export const loginSchema = InputTextSchema.pick({
  email: true,
  password: true,
});

export const signupSchema = loginSchema
  .merge(
    InputTextSchema.pick({
      nickname: true,
      passwordConfirm: true,
    })
  )
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"], // passwordConfirm 필드에서 오류 발생
  });

export type LoginFormSchema = z.infer<typeof loginSchema>;
export type SignupFormSchema = z.infer<typeof signupSchema>;
