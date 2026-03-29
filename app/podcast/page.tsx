import Link from "next/link";
import { episodes } from "./episodes";
import { PodcastEpisode } from "./podcast-episode";

export const metadata = {
  title: "10 Minutes or Less | Ali Rohde",
  description:
    "Most podcasts are an hour or more. This is 10 Minutes or Less. Short-form interviews with startup CEOs and tech leaders.",
  openGraph: {
    title: "10 Minutes or Less | Ali Rohde",
    description:
      "Most podcasts are an hour or more. This is 10 Minutes or Less. Short-form interviews with startup CEOs and tech leaders.",
  },
};


export default function PodcastPage() {
  return (
    <div className="text-stone-700 dark:text-stone-300">
      <h1 className="text-2xl font-bold mb-3">10 Minutes or Less</h1>

      <p className="mb-4">
        Most podcasts are an hour or more. This is 10 Minutes or Less.
      </p>

      <p className="mb-6">
        Short-form interviews with startup CEOs and tech leaders, hosted by{" "}
        <Link
          href="/"
          className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2"
        >
          Ali Rohde
        </Link>
        .
      </p>

      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-10 items-center">
        <a href="https://www.youtube.com/@10minutesorlesswithalirohde" target="_blank" title="YouTube" className="text-stone-400 hover:text-[#B8614A] dark:hover:text-[#6BADA3] transition-colors">
          <svg viewBox="0 0 24 24" className="fill-current" width={16} height={16}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
        <a href="https://open.spotify.com/show/5Vyh2yrWGEQlFMNTq5bGtv" target="_blank" title="Spotify" className="text-stone-400 hover:text-[#B8614A] dark:hover:text-[#6BADA3] transition-colors">
          <svg viewBox="0 0 24 24" className="fill-current" width={16} height={16}><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
        </a>
        <a href="https://10minutesorless.substack.com" target="_blank" title="Substack" className="text-stone-400 hover:text-[#B8614A] dark:hover:text-[#6BADA3] transition-colors">
          <svg viewBox="0 0 24 24" className="fill-current" width={16} height={16}><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
        </a>
      </div>

      <h2 className="text-sm font-medium mb-6 text-stone-500 dark:text-stone-400 uppercase tracking-wide">
        Episodes
      </h2>

      <div className="space-y-10">
        {episodes.map((ep) => (
          <PodcastEpisode key={ep.number} episode={ep} />
        ))}
      </div>
    </div>
  );
}
