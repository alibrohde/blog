import { getPosts } from "./get-posts";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();

  const blogEntries = posts.map((post) => ({
    url: `https://alirohde.com/blog/${post.slug}`,
    lastModified: new Date(post.isoDate),
  }));

  return [
    { url: "https://alirohde.com", lastModified: new Date() },
    { url: "https://alirohde.com/blog", lastModified: new Date() },
    { url: "https://alirohde.com/podcast", lastModified: new Date() },
    ...blogEntries,
  ];
}
