import redis from "./redis";
import commaNumber from "comma-number";

export type Post = {
  id: string;
  slug: string;
  date: string;
  title: string;
  views: number;
  viewsFormatted: string;
  thumbnail?: string;
  subtitle?: string;
};

export type PostWithContent = Post & {
  content: string;
};

// shape of the HSET in redis
type Views = {
  [key: string]: string;
};

type BeehiivPost = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  publish_date: number;
  displayed_date: number | null;
  thumbnail_url: string;
  content?: {
    free?: {
      web?: string;
    };
  };
};

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

async function fetchBeehiivPosts(expand = false): Promise<BeehiivPost[]> {
  const expandParam = expand ? "&expand=free_web_content" : "";
  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/posts?status=confirmed&limit=100${expandParam}`,
    {
      headers: {
        Authorization: `Bearer ${BEEHIIV_API_KEY}`,
      },
      next: { revalidate: 300 },
    }
  );

  if (!res.ok) {
    console.error("Failed to fetch Beehiiv posts:", res.status);
    return [];
  }

  const data = await res.json();
  return data.data || [];
}

function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const getPosts = async (): Promise<Post[]> => {
  const beehiivPosts = await fetchBeehiivPosts();
  const allViews: null | Views = redis ? await redis.hgetall("views") : null;

  const posts = beehiivPosts.map((post): Post => {
    const views = Number(allViews?.[post.slug] ?? 0);
    const dateToUse = post.displayed_date || post.publish_date;
    return {
      id: post.slug,
      slug: post.slug,
      date: formatDate(dateToUse),
      title: post.title,
      subtitle: post.subtitle,
      thumbnail: post.thumbnail_url,
      views,
      viewsFormatted: commaNumber(views),
    };
  });

  return posts;
};

export const getPost = async (slug: string): Promise<PostWithContent | null> => {
  const beehiivPosts = await fetchBeehiivPosts(true);
  const post = beehiivPosts.find((p) => p.slug === slug);

  if (!post) return null;

  const allViews: null | Views = redis ? await redis.hgetall("views") : null;
  const views = Number(allViews?.[post.slug] ?? 0);

  const dateToUse = post.displayed_date || post.publish_date;
  return {
    id: post.slug,
    slug: post.slug,
    date: formatDate(dateToUse),
    title: post.title,
    subtitle: post.subtitle,
    thumbnail: post.thumbnail_url,
    content: post.content?.free?.web || "",
    views,
    viewsFormatted: commaNumber(views),
  };
};
