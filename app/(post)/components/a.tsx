import Link from "next/link";

export function A({ children, className = "", href, ...props }) {
  if (href[0] === "#") {
    return (
      <a
        href={href}
        className={`border-b text-[#B8614A] border-[#B8614A]/40 transition-[border-color] hover:border-[#B8614A] dark:text-[#6BADA3] dark:border-[#6BADA3]/40 dark:hover:border-[#6BADA3] ${className}`}
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
        className={`border-b text-[#B8614A] border-[#B8614A]/40 transition-[border-color] hover:border-[#B8614A] dark:text-[#6BADA3] dark:border-[#6BADA3]/40 dark:hover:border-[#6BADA3] ${className}`}
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
        className={`border-b text-[#B8614A] border-[#B8614A]/40 transition-[border-color] hover:border-[#B8614A] dark:text-[#6BADA3] dark:border-[#6BADA3]/40 dark:hover:border-[#6BADA3] ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }
}
