import SignupForm from "@/components/form/auth/SignupForm";
import SNSAuth from "@/components/shared/SNSAuth";
import Link from "next/link";

export default function Page() {
  return (
    <section className="w-full md:w-[640px] flex flex-col gap-6">
      <SignupForm />
      <SNSAuth />
      <p className="text-black font-medium text-sm text-center">
        이미 회원이신가요?
        <Link href="/auth/login" className="text-primary-100 hover:underline">
          로그인
        </Link>
      </p>
    </section>
  );
}
