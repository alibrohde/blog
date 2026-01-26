import { Logo } from "./logo";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex mb-5 md:mb-10 items-center">
      <Logo />

      <nav className="text-xs grow justify-end items-center flex">
        <Link
          href="/about"
          className="group p-2"
        >
	  <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 rounded-xl py-0.5 px-1.5 inline-flex">
		  About
	  </span>
        </Link>
        <a
          href="https://x.com/RohdeAli"
          target="_blank"
          className="group inline-flex items-center p-2 rounded-sm transition-[background-color] whitespace-nowrap"
        >
	  <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 rounded-xl py-0.5 px-1.5 inline-flex items-center gap-1">
	    <TweetIcon style={{ marginRight: 4 }} />
	    <span>Follow me</span>
	  </span>
        </a>
        <a
          href="https://www.linkedin.com/in/ali-rohde-90719970/"
          target="_blank"
          className="group inline-flex items-center p-2 rounded-sm transition-[background-color] whitespace-nowrap -mr-2"
        >
	  <span className="group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 rounded-xl py-0.5 px-1.5 inline-flex items-center gap-1">
	    <LinkedInIcon />
	  </span>
        </a>
      </nav>
    </header>
  );
}

function TweetIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" className="inline-flex fill-current" width={12} height={12}><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="inline-flex fill-current" width={14} height={14}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  );
}
