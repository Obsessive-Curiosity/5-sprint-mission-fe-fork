"use client";

import iconBack from "@/assets/icons/ic_back.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="w-60 flex items-center justify-center gap-2 py-3 bg-primary-100 rounded-3xl text-white mx-auto mt-10 md:mt-12 xl:mt-16"
    >
      <p>목록으로 돌아가기</p>
      <Image src={iconBack} alt="목록으로 돌아가기" width={24} height={24} />
    </button>
  );
}
