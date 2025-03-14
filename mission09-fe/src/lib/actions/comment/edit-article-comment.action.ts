import { patchData } from "@/lib/apis/service.ts";
import type { ArticleComment } from "@/types";

export default async function editArticleCommentAction(
  _: unknown,
  formData: FormData
) {
  const originComment = formData.get("originContent") as string;
  const content = formData.get("currentContent") as string;
  const commentId = formData.get("commentId") as string;
  const articleId = formData.get("id") as string;

  if (content === originComment) {
    return {
      status: false,
      message: "변경된 내용이 없습니다.",
    };
  }

  const isSuccess = await patchData<ArticleComment>(
    `/article/comment/${commentId}`,
    { content },
    [`article-detail-${articleId}`]
  );

  return {
    status: isSuccess,
    message: isSuccess ? "댓글이 수정되었습니다." : "댓글 수정에 실패했습니다.",
  };
}
