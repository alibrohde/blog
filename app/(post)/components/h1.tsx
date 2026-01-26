import { withHeadingId } from "./utils";

export function H1({ children }) {
  return (
    <h1 className="text-2xl font-bold mb-1 text-stone-800 dark:text-stone-100">
      {withHeadingId(children)}
    </h1>
  );
}
