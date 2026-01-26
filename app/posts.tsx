"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Suspense } from "react";
import useSWR from "swr";

type SortSetting = ["date" | "views", "desc" | "asc"];

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function Posts({ posts: initialPosts }) {
  const { data: posts } = useSWR("/api/posts", fetcher, {
    fallbackData: initialPosts,
    refreshInterval: 5000,
  });

  return (
    <Suspense fallback={null}>
      <main className="max-w-2xl m-auto mb-10 text-sm">
        <List posts={posts} />
      </main>
    </Suspense>
  );
}

function List({ posts }) {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div>
      {/* Featured post */}
      {featured && (
        <Link href={`/p/${featured.slug}`} className="block mb-8 group">
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-5 transition-all duration-200 hover:border-neutral-400 dark:hover:border-neutral-500 hover:shadow-sm">
            <span className="text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">Featured</span>
            <h3 className="text-lg font-semibold mt-1 dark:text-gray-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
              {featured.title}
            </h3>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 block">
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
            <li key={post.id} className="group">
              <Link href={`/p/${post.slug}`}>
                <span className="flex py-2 items-center transition-transform duration-150 group-hover:translate-x-1">
                  <span className="w-10 md:w-14 inline-block self-start shrink-0 text-neutral-500 text-xs dark:text-neutral-500 mt-0.5">
                    {year}
                  </span>
                  <span className="grow dark:text-gray-100">
                    <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-all rounded-xl py-0.5 px-1.5">
                      {post.title}
                    </span>
                  </span>
                  <span className="text-xs text-neutral-400 dark:text-neutral-500 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {post.readingTime || "3 min"}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function getYear(date: string) {
  return new Date(date).getFullYear();
}
