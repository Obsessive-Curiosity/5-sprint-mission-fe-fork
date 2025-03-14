"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormSchema } from "@/schemas/formSchema";
import InputText from "@/components/input/Input";
import ButtonAuth from "@/components/button/round/ButtonAuth";
import Password from "@/components/input/Password";

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormSchema) => {
    console.log("Login data:", data);
  };

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputText name="email" control={control} />
        <Password name="password" control={control} />
        <ButtonAuth isValid={isValid} disabled={!isValid || isSubmitting}>
          {isSubmitting ? "로그인 중..." : "로그인"}
        </ButtonAuth>
      </form>
    </div>
  );
}
