import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/app/get-posts";

export const revalidate = 300;

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

function cleanBeehiivContent(html: string): string {
  let content = html;

  // Extract just the body content if it's a full HTML document
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) {
    content = bodyMatch[1];
  }

  // Remove style tags first
  content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");

  // Remove script tags
  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");

  // Remove the web-header div (contains title, author, date, social share)
  content = content.replace(/<div[^>]*id=['"]web-header['"][^>]*>[\s\S]*?<\/div>\s*<\/div>/i, "");

  // Remove any remaining h1 tags (title)
  content = content.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, "");

  // Remove byline wrapper if it exists outside header
  content = content.replace(/<div[^>]*class=['"][^'"]*bh__byline[^'"]*['"][^>]*>[\s\S]*?<\/div>/gi, "");

  // Remove social share links (Twitter, Threads, LinkedIn intent links)
  content = content.replace(/<a[^>]*href=['"][^'"]*twitter\.com\/intent[^'"]*['"][^>]*>[\s\S]*?<\/a>/gi, "");
  content = content.replace(/<a[^>]*href=['"][^'"]*threads\.net\/intent[^'"]*['"][^>]*>[\s\S]*?<\/a>/gi, "");
  content = content.replace(/<a[^>]*href=['"][^'"]*linkedin\.com\/sharing[^'"]*['"][^>]*>[\s\S]*?<\/a>/gi, "");

  // Remove social share sections by class
  content = content.replace(/<div[^>]*class=['"][^'"]*social[^'"]*['"][^>]*>[\s\S]*?<\/div>/gi, "");

  // Remove inline styles from all elements
  content = content.replace(/\s*style=['"][^'"]*['"]/gi, "");

  // Remove beehiiv-specific classes
  content = content.replace(/\s*class=['"][^'"]*wt-[^'"]*['"]/gi, "");
  content = content.replace(/\s*class=['"][^'"]*bg-wt[^'"]*['"]/gi, "");

  // Remove empty divs left behind (with only whitespace)
  content = content.replace(/<div[^>]*>\s*<\/div>/gi, "");

  return content.trim();
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const content = cleanBeehiivContent(post.content);

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

      <div
        className="beehiiv-content prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
