import { Posts } from "../posts";
import { getPosts } from "../get-posts";
import { Subscribe } from "../subscribe";

export const revalidate = 300;

export const metadata = {
  title: "Blog - Ali Rohde",
  description: "Posts by Ali Rohde",
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <>
      <Posts posts={posts} />
      <Subscribe />
    </>
  );
}
