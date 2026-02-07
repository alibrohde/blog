import { Subscribe } from "../subscribe";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="text-stone-700 dark:text-stone-300 mb-10">
      {children}
      <Subscribe />
    </article>
  );
}
