"use client";

import type { Article, Product, PK } from "@/types";
import { useActionState, useEffect } from "react";
import Textarea from "@/components/input/Textarea";
import Button from "@/components/button/rectangle/ButtonSubmit";
import createArticleCommentAction from "@/lib/actions/comment/create-article-comment.action";
import createProductInquiryAction from "@/lib/actions/comment/create-product-inquiry.action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchemaWithId, CommentFormSchema } from "@/schemas/formSchema";

interface CreateCommentFormProps<T> {
  category: T;
  id: T extends "article" ? PK<Article> : PK<Product>;
}

export default function CreateCommentForm<T extends "article" | "product">({
  category,
  id,
}: CreateCommentFormProps<T>) {
  const isArticle = category === "article";
  const serverAction = isArticle
    ? createArticleCommentAction
    : createProductInquiryAction;
  const name = isArticle ? "comment" : "inquiry";
  const [state, formAction, isPending] = useActionState(serverAction, null);

  const {
    control,
    formState: { isValid },
  } = useForm<CommentFormSchema>({
    resolver: zodResolver(commentSchemaWithId),
    mode: "onChange",
    defaultValues: {
      [name]: "",
    },
  });

  useEffect(() => {
    if (!state) return;

    if (!state.status && state.message !== "") {
      alert(`댓글 작성: ${state.message}`);
    }
  }, [state]);

  return (
    <form action={formAction} className="my-8">
      <input name="id" value={id} hidden readOnly />
      <Textarea name={name} control={control} />
      <div className="flex justify-end mt-4">
        <Button isValid={isValid} disabled={!isValid || isPending}>
          {isPending ? "작성중" : "등록"}
        </Button>
      </div>
    </form>
  );
}
