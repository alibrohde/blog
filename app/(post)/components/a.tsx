import Link from "next/link";

export function A({ children, className = "", href, ...props }) {
  if (href[0] === "#") {
    return (
      <a
        href={href}
        className={`border-b text-stone-800 dark:text-stone-200 border-stone-300 dark:border-stone-600 transition-[border-color] hover:border-[#6366f1] dark:hover:border-[#6BADA3] ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  } else if (href[0] === "/") {
    // Internal link
    return (
      <Link
        href={href}
        className={`border-b text-stone-800 dark:text-stone-200 border-stone-300 dark:border-stone-600 transition-[border-color] hover:border-[#6366f1] dark:hover:border-[#6BADA3] ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  } else {
    // External link
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`border-b text-stone-800 dark:text-stone-200 border-stone-300 dark:border-stone-600 transition-[border-color] hover:border-[#6366f1] dark:hover:border-[#6BADA3] ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }
}
