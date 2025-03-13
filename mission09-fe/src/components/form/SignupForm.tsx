"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormSchema } from "@/schemas/formSchema";
import InputText from "../input/InputText";
import ButtonAuth from "../button/round/ButtonAuth";
import Password from "../input/Password";

export default function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<SignupFormSchema>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = async (data: SignupFormSchema) => {
    console.log("Signup data:", data);
  };

  return (
    <div className="w-full mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputText name="email" control={control} />
        <InputText name="nickname" control={control} />
        <Password name="password" control={control} />
        <Password name="passwordConfirm" control={control} />
        <ButtonAuth isValid={isValid} disabled={!isValid || isSubmitting}>
          {isSubmitting ? "회원가입 중..." : "회원가입"}
        </ButtonAuth>
      </form>
    </div>
  );
}
