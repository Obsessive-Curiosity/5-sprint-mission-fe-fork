import { z } from "zod";

export const InputTextSchema = z.object({
  email: z.string().email("이메일 형식이 올바르지 않습니다."),
  nickname: z.string().max(6, "닉네임은 최대 6자 이하이어야 합니다."),
  password: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
  passwordConfirm: z.string(),
  title: z
    .string()
    .min(2, "제목은 2자 이상이어야 합니다.")
    .max(29, "제목은 30자 미만이어야 합니다."),
});

export type InputTextData = z.infer<typeof InputTextSchema>;
