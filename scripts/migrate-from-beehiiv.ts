/**
 * One-time migration script: fetch all posts from Beehiiv API,
 * convert HTML content to markdown/MDX, write as .mdx files with frontmatter.
 *
 * Usage: npx tsx scripts/migrate-from-beehiiv.ts
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY;
const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID;

if (!BEEHIIV_API_KEY || !BEEHIIV_PUBLICATION_ID) {
  console.error("Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID env vars");
  console.error("Run with: BEEHIIV_API_KEY=... BEEHIIV_PUBLICATION_ID=... npx tsx scripts/migrate-from-beehiiv.ts");
  process.exit(1);
}

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

async function fetchAllPosts(): Promise<BeehiivPost[]> {
  const allPosts: BeehiivPost[] = [];
  let page = 1;

  while (true) {
    const url = `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/posts?status=confirmed&limit=100&expand=free_web_content&page=${page}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${BEEHIIV_API_KEY}` },
    });

    if (!res.ok) {
      console.error(`Failed to fetch page ${page}:`, res.status, await res.text());
      break;
    }

    const data = await res.json();
    const posts = data.data || [];
    if (posts.length === 0) break;

    allPosts.push(...posts);
    console.log(`Fetched page ${page}: ${posts.length} posts (total: ${allPosts.length})`);

    if (posts.length < 100) break;
    page++;
  }

  return allPosts;
}

function htmlToMarkdown(html: string): string {
  let content = html;

  // Extract body content if full HTML document
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (bodyMatch) content = bodyMatch[1];

  // Remove style, script tags
  content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");

  // Remove the web-header div
  content = content.replace(/<div[^>]*id=['"]web-header['"][^>]*>[\s\S]*?<\/div>\s*<\/div>/i, "");

  // Remove h1 (title is in frontmatter)
  content = content.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, "");

  // Remove byline
  content = content.replace(/<div[^>]*class=['"][^'"]*bh__byline[^'"]*['"][^>]*>[\s\S]*?<\/div>/gi, "");

  // Remove social share links
  content = content.replace(/<a[^>]*href=['"][^'"]*twitter\.com\/intent[^'"]*['"][^>]*>[\s\S]*?<\/a>/gi, "");
  content = content.replace(/<a[^>]*href=['"][^'"]*threads\.net\/intent[^'"]*['"][^>]*>[\s\S]*?<\/a>/gi, "");
  content = content.replace(/<a[^>]*href=['"][^'"]*linkedin\.com\/sharing[^'"]*['"][^>]*>[\s\S]*?<\/a>/gi, "");
  content = content.replace(/<div[^>]*class=['"][^'"]*social[^'"]*['"][^>]*>[\s\S]*?<\/div>/gi, "");

  // Remove inline styles and beehiiv classes
  content = content.replace(/\s*style=['"][^'"]*['"]/gi, "");
  content = content.replace(/\s*class=['"][^'"]*['"]/gi, "");

  // Remove empty divs
  content = content.replace(/<div[^>]*>\s*<\/div>/gi, "");

  // Convert headings
  content = content.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, inner) => `## ${stripTags(inner).trim()}\n`);
  content = content.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, inner) => `### ${stripTags(inner).trim()}\n`);
  content = content.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, inner) => `#### ${stripTags(inner).trim()}\n`);

  // Convert bold and italic
  content = content.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**");
  content = content.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, "**$1**");
  content = content.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, "*$1*");
  content = content.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, "*$1*");

  // Convert links
  content = content.replace(/<a[^>]*href=['"]([^'"]*?)['"][^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
    const cleanText = stripTags(text).trim();
    if (!cleanText) return "";
    return `[${cleanText}](${href})`;
  });

  // Convert images
  content = content.replace(/<img[^>]*src=['"]([^'"]*?)['"][^>]*\/?>/gi, (match, src) => {
    const altMatch = match.match(/alt=['"]([^'"]*?)['"]/i);
    const alt = altMatch ? altMatch[1] : "";
    return `![${alt}](${src})`;
  });

  // Convert blockquotes
  content = content.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, inner) => {
    const lines = stripTags(inner).trim().split("\n");
    return lines.map(line => `> ${line.trim()}`).join("\n") + "\n";
  });

  // Convert unordered lists
  content = content.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, inner) => {
    return inner.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, li) => `- ${stripTags(li).trim()}\n`) + "\n";
  });

  // Convert ordered lists
  content = content.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, inner) => {
    let i = 1;
    return inner.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, li) => `${i++}. ${stripTags(li).trim()}\n`) + "\n";
  });

  // Convert code blocks
  content = content.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, code) => {
    return "```\n" + decodeHtmlEntities(code.trim()) + "\n```\n";
  });

  // Convert inline code
  content = content.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, "`$1`");

  // Convert horizontal rules
  content = content.replace(/<hr[^>]*\/?>/gi, "\n---\n");

  // Convert line breaks
  content = content.replace(/<br\s*\/?>/gi, "\n");

  // Convert paragraphs
  content = content.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, inner) => `${inner.trim()}\n\n`);

  // Strip remaining HTML tags (divs, spans, etc.)
  content = content.replace(/<\/?(div|span|section|article|figure|figcaption|header|footer|nav|main|aside)[^>]*>/gi, "");

  // Decode HTML entities
  content = decodeHtmlEntities(content);

  // Clean up excessive whitespace
  content = content.replace(/\n{4,}/g, "\n\n\n");
  content = content.trim();

  return content;
}

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return date.toISOString().split("T")[0]; // YYYY-MM-DD
}

function escapeYaml(str: string): string {
  if (str.includes('"') || str.includes(":") || str.includes("#")) {
    return `"${str.replace(/"/g, '\\"')}"`;
  }
  return `"${str}"`;
}

async function main() {
  console.log("Fetching posts from Beehiiv...");
  const posts = await fetchAllPosts();
  console.log(`\nFetched ${posts.length} posts total\n`);

  const postsDir = join(process.cwd(), "posts");
  mkdirSync(postsDir, { recursive: true });

  for (const post of posts) {
    const dateToUse = post.displayed_date || post.publish_date;
    const date = formatDate(dateToUse);
    const htmlContent = post.content?.free?.web || "";
    const markdown = htmlToMarkdown(htmlContent);

    const frontmatter = [
      "---",
      `title: ${escapeYaml(post.title)}`,
      `date: "${date}"`,
    ];

    if (post.subtitle) {
      frontmatter.push(`subtitle: ${escapeYaml(post.subtitle)}`);
    }
    if (post.thumbnail_url) {
      frontmatter.push(`thumbnail: "${post.thumbnail_url}"`);
    }

    frontmatter.push("---");

    const fileContent = frontmatter.join("\n") + "\n\n" + markdown + "\n";
    const filename = `${post.slug}.mdx`;
    const filepath = join(postsDir, filename);

    writeFileSync(filepath, fileContent, "utf-8");
    console.log(`  Written: ${filename} (${date})`);
  }

  console.log(`\nDone! Migrated ${posts.length} posts to posts/`);
}

main().catch(console.error);
