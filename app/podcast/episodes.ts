export interface Episode {
  number: number;
  slug: string;
  title: string;
  hook: string;
  guest: string;
  company: string;
  role: string;
  duration: string;
  date: string;
  youtubeId: string;
  substackUrl: string;
  description: string;
  guestLinks: {
    x?: string;
    linkedin?: string;
    website?: string;
    company?: string;
  };
}

export const episodes: Episode[] = [
  {
    number: 1,
    slug: "guillermo-rauch-vercel",
    title: "Anti-1:1s, terminally online, and just getting started | Guillermo Rauch, Vercel",
    hook: "Anti-1:1s, terminally online, and just getting started",
    guest: "Guillermo Rauch",
    company: "Vercel",
    role: "CEO",
    duration: "8 min",
    date: "2026-03-25",
    youtubeId: "HQhU6GuDT7g",
    substackUrl: "https://10minutesorless.substack.com/p/guillermo-rauch-is-terminally-online",
    description:
      "Guillermo Rauch has been building Vercel for more than 10 years. But talk to him and you'd never know it. In 8 minutes, he shares why he's anti-1:1s, how he stays \"terminally online,\" and whether he wants to take Vercel public.",
    guestLinks: {
      x: "https://x.com/rauchg",
      linkedin: "https://www.linkedin.com/in/rauchg",
      website: "https://rauchg.com/about",
      company: "https://vercel.com/",
    },
  },
];
