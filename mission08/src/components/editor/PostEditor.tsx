"use client";

import Button from "@/components/shared/Button";
import { usePathname } from "next/navigation";

export default function PostEditor() {
  const pathName = usePathname();
  const h1Text = pathName === "/board/create" ? "게시글 작성" : "게시글 수정";

  return (
    <section className="w-full flex items-center justify-between mb-8">
      <h1 className="text-gray-800 font-bold text-xl">{h1Text}</h1>
      <Button isActive={false} type="submit">
        등록
      </Button>
    </section>
  );
}
