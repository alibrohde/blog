import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

export type Post = {
  id: string;
  slug: string;
  date: string;
  isoDate: string;
  title: string;
  thumbnail?: string;
  subtitle?: string;
  readingTime?: string;
};

export type PostWithContent = Post & {
  content: string;
};

const postsDir = join(process.cwd(), "posts");

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

function readPost(filename: string): PostWithContent {
  const slug = filename.replace(/\.mdx$/, "");
  const filePath = join(postsDir, filename);
  const raw = readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    id: slug,
    slug,
    date: formatDate(data.date),
    isoDate: data.date,
    title: data.title,
    subtitle: data.subtitle || undefined,
    thumbnail: data.thumbnail || undefined,
    readingTime: calculateReadingTime(content),
    content,
  };
}

export const getPosts = async (): Promise<Post[]> => {
  const files = readdirSync(postsDir).filter(f => f.endsWith(".mdx"));
  const posts = files.map(f => {
    const { content, ...meta } = readPost(f);
    return meta;
  });

  posts.sort((a, b) => (a.isoDate > b.isoDate ? -1 : 1));
  return posts;
};

export const getPost = async (slug: string): Promise<PostWithContent | null> => {
  const filename = `${slug}.mdx`;
  const files = readdirSync(postsDir);
  if (!files.includes(filename)) return null;
  return readPost(filename);
};
