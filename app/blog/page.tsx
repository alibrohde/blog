import { Posts } from "../posts";
import { getPosts } from "../get-posts";
import { Subscribe } from "../subscribe";

export const metadata = {
  title: "Blog - Ali Rohde",
  description: "Posts by Ali Rohde",
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <>
      <Subscribe />
      <Posts posts={posts} />
    </>
  );
}
