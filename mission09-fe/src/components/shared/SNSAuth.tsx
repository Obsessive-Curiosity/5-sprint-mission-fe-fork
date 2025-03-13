import Image from "next/image";
import iconGoogle from "@/assets/icons/ic_google_login.png";
import iconKakao from "@/assets/icons/ic_kakako_login.png";

export default function SNSAuth() {
  return (
    <div className="w-full bg-blue-50 rounded-lg py-4 px-6 flex items-center justify-between">
      <h1 className="font-medium text-base">간편 로그인하기</h1>
      <div className="flex items-center gap-4">
        <Image src={iconGoogle} alt="구글 로그인" width={42} height={42} />
        <Image src={iconKakao} alt="카카오 로그인" width={42} height={42} />
      </div>
    </div>
  );
}
