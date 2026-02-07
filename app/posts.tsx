import Link from "next/link";
import type { Post } from "./get-posts";

const FEATURED_SLUG = "the-outset-capital-guide-to-hiring-a-chief-of-staff";

export function Posts({ posts }: { posts: Post[] }) {
  const featured = posts.find((p) => p.slug === FEATURED_SLUG) || posts[0];
  const rest = posts.filter((p) => p.slug !== featured.slug);

  return (
    <main className="max-w-2xl m-auto mb-10 text-sm">
      {/* All posts */}
      <ul>
        {rest.map((post) => {
          const year = getYear(post.date);

          return (
            <li key={post.id} className="group">
              <Link href={`/p/${post.slug}`}>
                <span className="flex py-2 items-center transition-transform duration-150 group-hover:translate-x-1">
                  <span className="w-10 md:w-14 inline-block self-start shrink-0 text-stone-400 text-xs dark:text-stone-500 mt-0.5">
                    {year}
                  </span>
                  <span className="grow text-stone-700 dark:text-stone-200">
                    <span className="group-hover:bg-[#B8614A]/10 dark:group-hover:bg-[#6BADA3]/10 transition-all rounded-xl py-0.5 px-1.5">
                      {post.title}
                    </span>
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

      {/* Featured post */}
      {featured && (
        <Link href={`/p/${featured.slug}`} className="block mt-8 group">
          <div className="border border-stone-200 dark:border-stone-700 rounded-lg p-5 transition-all duration-200 hover:border-[#B8614A]/40 dark:hover:border-[#6BADA3]/40 hover:shadow-sm">
            <span className="text-xs text-[#B8614A] dark:text-[#6BADA3] uppercase tracking-wide font-medium">Featured</span>
            <h3 className="text-lg font-semibold mt-1 text-stone-800 dark:text-stone-100 group-hover:text-[#B8614A] dark:group-hover:text-[#6BADA3] transition-colors">
              {featured.title}
            </h3>
            <span className="text-xs text-stone-500 dark:text-stone-400 mt-2 block">
              {getYear(featured.date)} · {featured.readingTime || "3 min read"}
            </span>
          </div>
        </Link>
      )}
    </main>
  );
}

function getYear(date: string) {
  return new Date(date).getFullYear();
}
