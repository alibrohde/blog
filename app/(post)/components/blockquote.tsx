import type { ReactNode } from "react";

export function Blockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-5 text-stone-500 pl-3 border-l-4 border-[#B8614A]/30 dark:border-[#6BADA3]/30 dark:text-stone-400">
      {children}
    </blockquote>
  );
}
