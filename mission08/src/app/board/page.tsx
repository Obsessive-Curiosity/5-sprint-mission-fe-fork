import BestPosts from "@/components/post/best/BestPosts";
import Posts from "@/components/post/list/Posts";
import { fetchData } from "@/lib/apis/service.ts";
import { Post } from "@/types";

export default async function Board() {
  const top3 = await fetchData<Post[]>("/post/best", {
    next: { revalidate: 3 },
  });

  return (
    <>
      <BestPosts top3={top3 || []} />
      <Posts />
    </>
  );
}
