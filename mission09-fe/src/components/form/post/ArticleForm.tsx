"use client";

import Input from "@/components/input/Input";
import Textarea from "@/components/input/Textarea";
import Button from "@/components/button/rectangle/ButtonSubmit";
import createArticleAction from "@/lib/actions/article/create-article.action";
import type { Article } from "@/types";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import editArticleAction from "@/lib/actions/article/edit-article.action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArticleFormSchema, articleSchema } from "@/schemas/formSchema";

interface ArticleFormProps {
  action: "create" | "edit";
  article?: Article;
}

export default function ArticleForm({ action, article }: ArticleFormProps) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const isCreate = action === "create";
  const serverAction = isCreate ? createArticleAction : editArticleAction;
  const [state, formAction, isPending] = useActionState(serverAction, null);
  const { title, content } = article || { title: "", content: "" };

  const {
    control,
    formState: { isValid },
  } = useForm<ArticleFormSchema>({
    resolver: zodResolver(articleSchema),
    mode: "onChange",
    defaultValues: {
      title,
      content,
    },
  });

  useEffect(() => {
    if (!state) return;

    if (state.status) {
      // 게시글 작성 및 수정 성공 시
      queryClient.invalidateQueries({ queryKey: ["articles"] }); // 캐시 초기화 (SWR이라서 캐싱되어 있어서 업데이트가 따로 안됨)
      router.replace("/article"); // 게시글 목록으로 이동 후 뒤로가기 방지가 안되네...? 나중에 다시 보기
    } else {
      // 게시글 작성 실패 시
      alert(`게시글 작성: ${state.message}`);
    }
  }, [state, router, queryClient]);

  return (
    <form action={formAction} className="py-4 px-6 mb-36">
      {article && (
        <input name="article" value={JSON.stringify(article)} hidden readOnly />
      )}

      <section className="w-full flex items-center justify-between mb-8">
        <h1 className="text-gray-800 font-bold text-xl">
          게시글 {isCreate ? "작성" : "수정"}
        </h1>
        <div className="flex justify-end mt-4">
          <Button isValid={isValid} disabled={!isValid || isPending}>
            {isPending ? "작성중" : "등록"}
          </Button>
        </div>
      </section>

      <section className="w-full flex flex-col gap-6">
        <Input name="title" control={control} />
        <Textarea name="content" control={control} />
      </section>
    </form>
  );
}
