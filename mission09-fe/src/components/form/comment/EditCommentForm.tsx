import type {
  PK,
  ArticleComment,
  ProductComment,
  Product,
  Article,
} from "@/types";
import { useActionState, useEffect } from "react";
import editArticleCommentAction from "@/lib/actions/comment/edit-article-comment.action";
import Textarea from "@/components/input/Textarea";
import Button from "@/components/button/rectangle/ButtonSubmit";
import editProductInquiryAction from "@/lib/actions/comment/edit-product-inquiry.action";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentFormSchema, commentSchemaWithId } from "@/schemas/formSchema";

interface CommentEditFormProps<T> {
  category: T;
  id: T extends "article" ? PK<Article> : PK<Product>;
  comment: T extends "article" ? ArticleComment : ProductComment;
  onDone: () => void;
}

export default function ArticleCommentEditForm<
  T extends "article" | "product"
>({ category, id, comment, onDone }: CommentEditFormProps<T>) {
  const { id: commentId, content } = comment;
  const isArticle = category === "article";
  const serverAction = isArticle
    ? editArticleCommentAction
    : editProductInquiryAction;
  const name = isArticle ? "comment" : "inquiry";
  const [state, formAction, isPending] = useActionState(serverAction, null);

  const {
    control,
    watch,
    formState: { isValid },
  } = useForm<CommentFormSchema>({
    resolver: zodResolver(commentSchemaWithId),
    mode: "onChange",
    defaultValues: {
      [name]: content,
    },
  });

  useEffect(() => {
    if (!state) return;

    if (!state.status && state.message !== "") {
      alert(`댓글 수정: ${state.message}`);
    }

    if (state.status) {
      onDone(); // 댓글 수정이 성공하면 수정 모드 끄기
    }
  }, [state, onDone]);

  return (
    <form action={formAction} className="my-8">
      <input name="originContent" value={content} hidden readOnly />
      <input name="currentContent" value={watch(name)} hidden readOnly />
      <input name="commentId" value={commentId} hidden readOnly />
      <input name="id" value={id} hidden readOnly />
      <Textarea name={name} control={control} isEditMode={true} />

      {/* 버튼 */}
      <div className="flex gap-6 justify-end mt-4 absolute bottom-6 right-0">
        <button
          type="button"
          className="text-gray-500 font-semibold text-base cursor-pointer"
          onClick={onDone}
        >
          취소
        </button>
        <Button isValid={isValid} disabled={!isValid || isPending}>
          {isPending ? "수정중" : "수정완료"}
        </Button>
      </div>
    </form>
  );
}
