import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/app/get-posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.subtitle || `${post.title} - Ali Rohde`,
    openGraph: {
      title: post.title,
      description: post.subtitle || `${post.title} - Ali Rohde`,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const components = useMDXComponents({});

  return (
    <article className="text-stone-700 dark:text-stone-300 mb-10">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2 text-stone-800 dark:text-stone-100">{post.title}</h1>
        {post.subtitle && (
          <p className="text-stone-600 dark:text-stone-400 mb-2">{post.subtitle}</p>
        )}
        <p className="font-mono text-xs text-stone-500 dark:text-stone-500">
          <a
            href="https://twitter.com/RohdeAli"
            className="hover:text-[#B8614A] dark:hover:text-[#6BADA3]"
            target="_blank"
          >
            @RohdeAli
          </a>
          <span className="mx-2">|</span>
          <span>{post.date}</span>
        </p>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}
