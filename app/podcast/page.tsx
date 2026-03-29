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

const subscribeLinks = [
  { name: "YouTube", href: "https://www.youtube.com/@10minutesorlesswithalirohde" },
  { name: "Spotify", href: "https://open.spotify.com/show/5Vyh2yrWGEQlFMNTq5bGtv" },
  { name: "Substack", href: "https://10minutesorless.substack.com" },
];

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

      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-10">
        {subscribeLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            className="text-sm text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2"
          >
            {link.name}
          </a>
        ))}
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
