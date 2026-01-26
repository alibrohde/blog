import { Posts } from "./posts";
import { getPosts } from "./get-posts";
import { Subscribe } from "./subscribe";

export const revalidate = 300;

export default async function Home() {
  const posts = await getPosts();
  return (
    <>
      <Posts posts={posts} />
      <Subscribe />
    </>
  );
}
