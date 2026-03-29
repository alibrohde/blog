"use client";

import YT from "react-youtube";
import type { Episode } from "./episodes";

export function PodcastEpisode({ episode }: { episode: Episode }) {
  return (
    <article>
      <div className="mb-2 flex items-baseline gap-3">
        <span className="text-xs text-stone-400 dark:text-stone-500 font-mono">
          EP {episode.number}
        </span>
        <span className="text-xs text-stone-400 dark:text-stone-500">
          {episode.duration}
        </span>
      </div>

      <h3 className="text-base font-medium mb-2">{episode.hook}</h3>

      <p className="text-sm text-stone-500 dark:text-stone-400 mb-1">
        {episode.guest}, {episode.role} of{" "}
        <a
          href={episode.guestLinks.company}
          target="_blank"
          className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2"
        >
          {episode.company}
        </a>
      </p>

      <p className="text-sm mb-4">{episode.description}</p>

      <span className="block my-4">
        <YT
          videoId={episode.youtubeId}
          opts={{ width: "100%", playerVars: { rel: 0 } }}
        />
      </span>

      <div className="flex gap-4 text-xs">
        <a
          href={`https://www.youtube.com/watch?v=${episode.youtubeId}`}
          target="_blank"
          className="text-stone-400 hover:text-[#B8614A] dark:hover:text-[#6BADA3] transition-colors"
        >
          YouTube
        </a>
        <a
          href={episode.substackUrl}
          target="_blank"
          className="text-stone-400 hover:text-[#B8614A] dark:hover:text-[#6BADA3] transition-colors"
        >
          Substack
        </a>
        {episode.guestLinks.x && (
          <a
            href={episode.guestLinks.x}
            target="_blank"
            className="text-stone-400 hover:text-[#B8614A] dark:hover:text-[#6BADA3] transition-colors"
          >
            @{episode.guestLinks.x.split("/").pop()}
          </a>
        )}
      </div>
    </article>
  );
}
