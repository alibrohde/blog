import { Posts } from "../posts";
import { getPosts } from "../get-posts";
import { Subscribe } from "../subscribe";

export const metadata = {
  title: "Blog - Ali Rohde",
  description: "Posts by Ali Rohde",
};

export default async function Blog() {
  const allPosts = await getPosts();

  // Pin the Chief of Staff post as featured
  const featuredSlug = "the-outset-capital-guide-to-hiring-a-chief-of-staff";
  const featuredIndex = allPosts.findIndex(p => p.slug === featuredSlug);

  let posts = allPosts;
  if (featuredIndex > 0) {
    // Move featured post to the front
    const featured = allPosts[featuredIndex];
    posts = [featured, ...allPosts.slice(0, featuredIndex), ...allPosts.slice(featuredIndex + 1)];
  }

  return (
    <>
      <Posts posts={posts} />
      <Subscribe />
    </>
  );
}
