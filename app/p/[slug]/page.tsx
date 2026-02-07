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
    <article className="text-gray-800 dark:text-gray-300 mb-10">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-2 dark:text-gray-100">{post.title}</h1>
        {post.subtitle && (
          <p className="text-gray-600 dark:text-gray-400 mb-2">{post.subtitle}</p>
        )}
        <p className="font-mono text-xs text-neutral-500">
          <a
            href="https://twitter.com/RohdeAli"
            className="hover:text-neutral-800 dark:hover:text-neutral-400"
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
