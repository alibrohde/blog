import { getPosts } from "@/app/get-posts";

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
    <updated>${posts[0]?.date || new Date().toISOString()}</updated>
    <id>https://alirohde.com/</id>
    <author>
      <name>Ali Rohde</name>
    </author>
    ${posts.slice(0, max).reduce((acc, post) => {
      return `${acc}
        <entry>
          <id>${post.id}</id>
          <title>${post.title}</title>
          <link href="https://alirohde.com/p/${post.slug}"/>
          <updated>${post.date}</updated>
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
