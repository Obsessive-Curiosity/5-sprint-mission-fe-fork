import { z } from "zod";
import { InputTextSchema } from "./inputTextSchema";

export const loginSchema = InputTextSchema.pick({
  email: true,
  password: true,
});

export type LoginFormSchema = z.infer<typeof loginSchema>;
