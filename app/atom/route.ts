import { getPosts } from "@/app/get-posts";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = await getPosts();
  const max = 100;
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Ali Rohde</title>
    <subtitle>Blog</subtitle>
    <link href="https://alirohde.com/atom" rel="self"/>
    <link href="https://alirohde.com/"/>
    <updated>${posts[0]?.isoDate ? new Date(posts[0].isoDate).toISOString() : new Date().toISOString()}</updated>
    <id>https://alirohde.com/</id>
    <author>
      <name>Ali Rohde</name>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
      const isoDate = new Date(post.isoDate).toISOString();
      return `${acc}
        <entry>
          <id>${escapeXml(post.id)}</id>
          <title>${escapeXml(post.title)}</title>
          <link href="https://alirohde.com/p/${escapeXml(post.slug)}"/>
          <updated>${isoDate}</updated>
        </entry>`;
    }, "")}
  </feed>`,
    {
      headers: {
        "Content-Type": "application/atom+xml; charset=utf-8",
      },
    }
  );
}
