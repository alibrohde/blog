"use client";

import { useState } from "react";
import YT from "react-youtube";
import type { Episode } from "./episodes";

export function PodcastEpisode({ episode }: { episode: Episode }) {
  const [playing, setPlaying] = useState(false);

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

      <h3 className="text-base font-medium mb-2 font-serif">{episode.hook}</h3>

      <p className="text-sm text-stone-500 dark:text-stone-400 mb-1">
        {episode.guest}, {episode.role} of{" "}
        <a
          href={episode.guestLinks.company}
          target="_blank"
          className="text-stone-800 dark:text-stone-200 underline decoration-stone-300 dark:decoration-stone-600 hover:decoration-[#6366f1] dark:hover:decoration-[#6BADA3] underline-offset-2"
        >
          {episode.company}
        </a>
      </p>

      <p className="text-sm mb-4">{episode.description}</p>

      <div className="my-4 aspect-video relative">
        {playing ? (
          <YT
            videoId={episode.youtubeId}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: { rel: 0, autoplay: 1 },
            }}
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="relative w-full h-full group cursor-pointer"
          >
            <img
              src={`https://i.ytimg.com/vi/${episode.youtubeId}/maxresdefault.jpg`}
              alt={episode.title}
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center group-hover:bg-[#6366f1]/90 dark:group-hover:bg-[#6BADA3]/90 transition-colors">
                <svg viewBox="0 0 24 24" className="fill-white w-7 h-7 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>

      <div className="flex gap-4 text-xs">
        <a
          href={`https://www.youtube.com/watch?v=${episode.youtubeId}`}
          target="_blank"
          className="text-stone-400 hover:text-[#6366f1] dark:hover:text-[#6BADA3] transition-colors"
        >
          YouTube
        </a>
        <a
          href={episode.substackUrl}
          target="_blank"
          className="text-stone-400 hover:text-[#6366f1] dark:hover:text-[#6BADA3] transition-colors"
        >
          Substack
        </a>
        {episode.guestLinks.x && (
          <a
            href={episode.guestLinks.x}
            target="_blank"
            className="text-stone-400 hover:text-[#6366f1] dark:hover:text-[#6BADA3] transition-colors"
          >
            @{episode.guestLinks.x.split("/").pop()}
          </a>
        )}
      </div>
    </article>
  );
}
