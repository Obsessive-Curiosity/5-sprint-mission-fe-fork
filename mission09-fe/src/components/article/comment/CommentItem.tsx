"use client";

import type { ArticleComment } from "@/types";
import iconProfile from "@/assets/icons/ic_profile.png";
import Image from "next/image";
import timeTracker from "@/utils/timeTracker";
import Control from "@/components/shared/Control";
import { useActionState, useEffect, useRef, useState } from "react";
import EditCommentForm from "@/components/form/comment/EditCommentForm";
import deleteArticleCommentAction from "@/lib/actions/comment/delete-article-comment.action";

export default function CommentItem({ comment }: { comment: ArticleComment }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, deleteFormAction] = useActionState(
    deleteArticleCommentAction,
    null
  );
  const { content, author, articleId, updatedAt } = comment;
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => setIsEdit(true);
  const handleDelete = () => formRef.current?.requestSubmit(); // 강제 폼 제출

  useEffect(() => {
    if (!state) return;

    if (!state.status) alert(`댓글(${comment.id}) 삭제: ${state.message}`);
  }, [state, comment]);

  return (
    <>
      {/* 댓글 삭제용 숨김 폼 */}
      <form action={deleteFormAction} ref={formRef} className="hidden">
        <input name="articleId" value={articleId} hidden readOnly />
        <input name="commentId" value={comment.id} hidden readOnly />
      </form>

      <article className="bg-gradient-to-t from-[#FCFCFC] to-white border-b border-gray-200 relative">
        {!isEdit && (
          <section>
            <Control onDelete={handleDelete} onEdit={handleEdit} />
            <p className="text-gray-800 mb-6">{content}</p>
          </section>
        )}

        {/* 댓글 수정용 폼 */}
        {isEdit && (
          <EditCommentForm
            category="article"
            id={articleId}
            comment={comment}
            onDone={() => setIsEdit(false)}
          />
        )}

        <section className="flex items-center gap-2 mb-6">
          <Image src={iconProfile} alt="profile" width={40} height={40} />
          <span className="text-xs font-normal">
            <p className="text-gray-600">{author}</p>
            <p className="text-gray-400">{timeTracker(updatedAt)}</p>
          </span>
        </section>
      </article>
    </>
  );
}
