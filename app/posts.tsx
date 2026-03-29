import Link from "next/link";
import type { Post } from "./get-posts";

export function Posts({ posts }: { posts: Post[] }) {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main className="max-w-2xl m-auto mb-10 text-sm">
      {/* Featured post */}
      {featured && (
        <Link href={`/p/${featured.slug}`} className="block mb-8 group">
          <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-5 transition-all duration-200 hover:border-[#6366f1]/40 dark:hover:border-[#6BADA3]/40 hover:shadow-md dark:hover:shadow-stone-900/50 border-l-[3px] border-l-[#6366f1]/30 dark:border-l-[#6BADA3]/30 hover:border-l-[#6366f1] dark:hover:border-l-[#6BADA3]">
            <span className="text-xs text-[#6366f1] dark:text-[#6BADA3] uppercase tracking-wide font-medium">Featured</span>
            <h3 className="text-xl font-semibold mt-1 text-stone-800 dark:text-stone-100 group-hover:text-[#6366f1] dark:group-hover:text-[#6BADA3] transition-colors font-serif">
              {featured.title}
            </h3>
            <span className="text-xs text-stone-500 dark:text-stone-400 mt-2 block">
              {getYear(featured.date)} · {featured.readingTime || "3 min read"}
            </span>
          </div>
        </Link>
      )}

      {/* Rest of posts */}
      <ul>
        {rest.map((post) => {
          const year = getYear(post.date);

          return (
            <li key={post.id} className="group border-b border-stone-200/60 dark:border-stone-700/40 last:border-0">
              <Link href={`/p/${post.slug}`}>
                <span className="flex py-3 px-2 -mx-2 items-center transition-all duration-200 rounded-lg group-hover:bg-[#6366f1]/[0.04] dark:group-hover:bg-[#6BADA3]/[0.04]">
                  <span className="w-10 md:w-14 inline-block self-start shrink-0 text-stone-400 text-xs dark:text-stone-500 mt-0.5">
                    {year}
                  </span>
                  <span className="grow text-stone-700 dark:text-stone-200 group-hover:text-stone-900 dark:group-hover:text-stone-50 transition-colors">
                    {post.title}
                  </span>
                  <span className="text-xs text-stone-400 dark:text-stone-500 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {post.readingTime || "3 min"}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

function getYear(date: string) {
  return new Date(date).getFullYear();
}
