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
      <h1 className="text-2xl font-bold mb-1 text-stone-800 dark:text-stone-100">
        {post.title}
      </h1>

      <p className="font-mono flex text-xs text-stone-500 dark:text-stone-500">
        <span className="flex-grow">
          <span className="hidden md:inline">
            <a
              href="https://twitter.com/RohdeAli"
              className="hover:text-[#B8614A] dark:hover:text-[#6BADA3]"
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
