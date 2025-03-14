import LoginForm from "@/components/form/auth/LoginForm";
import SNSAuth from "@/components/shared/SNSAuth";
import Link from "next/link";

export default function Page() {
  return (
    <section className="w-full md:w-[640px] flex flex-col gap-6">
      <LoginForm />
      <SNSAuth />
      <p className="text-black font-medium text-sm text-center">
        판다마켓이 처음이신가요?
        <Link href="/auth/signup" className="text-primary-100 hover:underline">
          회원가입
        </Link>
      </p>
    </section>
  );
}
