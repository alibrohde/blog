import { withHeadingId } from "./utils";

export function H3({ children }) {
  return (
    <h3 className="group font-bold text-lg my-8 relative text-stone-800 dark:text-stone-100">
      {withHeadingId(children)}
    </h3>
  );
}
