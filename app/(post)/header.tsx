"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import { ago } from "time-ago";
import type { Post } from "@/app/get-posts";

export function Header({ posts }: { posts: Post[] }) {
  const segments = useSelectedLayoutSegments();
  const post = posts.find(
    post => post.id === segments[segments.length - 1]
  );

  if (post == null) return <></>;

  return (
    <>
      <h1 className="text-2xl font-bold mb-1 dark:text-gray-100">
        {post.title}
      </h1>

      <p className="font-mono flex text-xs text-neutral-500 dark:text-neutral-500">
        <span className="flex-grow">
          <span className="hidden md:inline">
            <a
              href="https://twitter.com/RohdeAli"
              className="hover:text-neutral-800 dark:hover:text-neutral-400"
              target="_blank"
            >
              @RohdeAli
            </a>
            <span className="mx-2">|</span>
          </span>

          <span suppressHydrationWarning={true}>
            {post.date} ({ago(post.date, true)} ago)
          </span>
        </span>
      </p>
    </>
  );
}
