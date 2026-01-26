"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Logo() {
  const pathname = usePathname();
  return (
    <span className="text-md md:text-lg whitespace-nowrap font-bold">
      {pathname === "/" ? (
        <span className="cursor-default pr-2">Ali Rohde</span>
      ) : (
        <Link
          href="/"
          className="hover:bg-[#B8614A]/10 dark:hover:bg-[#6BADA3]/10 p-2 rounded-2xl -ml-2 transition-[background-color]"
        >
          Ali Rohde
        </Link>
      )}
    </span>
  );
}
