import { notFound } from "next/navigation";
import { fetchData } from "@/lib/apis/service.ts";
import { PageIdParams, Post } from "@/types";
import EmptyComment from "@/components/post/comment/EmptyComment";
import CommentItem from "@/components/post/comment/CommentItem";
import BackButton from "@/components/post/comment/BackButton";
import { dateFormatter } from "@/utils/dateFormatter";
import Image from "next/image";
import iconProfile from "@/assets/icons/ic_profile.png";
import Like from "@/components/shared/Like";
import CommentForm from "@/components/post/comment/CommentForm";

export default async function Page({ params }: PageIdParams) {
  const { id } = await params;
  const post = await fetchData<Post>(`/post/${id}`);

  if (!post) {
    notFound();
  }

  const { author, title, content, comments, createdAt } = post;
  const isEmpty = comments?.length === 0;

  return (
    <>
      <section className="border-b border-gray-200 mb-4 xl:mb-6">
        <h1 className="font-bold text-xl text-gray-800 whitespace-pre-line">
          {title}
        </h1>
        <div className="my-4 text-sm flex items-center">
          <Image src={iconProfile} alt="profile" width={40} height={40} />
          <span className="ml-4 flex gap-2">
            <p className="text-gray-600">{author}</p>
            <p className="text-gray-400">{dateFormatter(createdAt)}</p>
          </span>
          <div className="h-[34px] w-[1px] bg-gray-200 mx-8"></div>
          <Like likes={post.likes} />
        </div>
      </section>

      <p className="text-gray-800 text-base font-normal whitespace-pre-line">
        {content}
      </p>

      <CommentForm />

      {isEmpty && <EmptyComment />}
      <section className="flex flex-col gap-6">
        {!isEmpty &&
          comments?.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
      </section>

      <BackButton />
    </>
  );
}
