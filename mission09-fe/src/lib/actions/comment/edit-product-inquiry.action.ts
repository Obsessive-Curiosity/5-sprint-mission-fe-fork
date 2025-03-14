import { patchData } from "@/lib/apis/service.ts";
import type { ProductComment } from "@/types";

export default async function editProductInquiryAction(
  _: unknown,
  formData: FormData
) {
  const originInquiry = formData.get("originContent") as string;
  const content = formData.get("currentContent") as string;
  const commentId = formData.get("commentId") as string;
  const productId = formData.get("id") as string;

  if (content === originInquiry) {
    return {
      status: false,
      message: "변경된 내용이 없습니다.",
    };
  }

  const isSuccess = await patchData<ProductComment>(
    `/product/comment/${commentId}`,
    { content },
    [`product-detail-${productId}`]
  );

  return {
    status: isSuccess,
    message: isSuccess ? "문의가 수정되었습니다." : "문의 수정에 실패했습니다.",
  };
}
