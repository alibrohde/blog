import { A } from "./(post)/components/a";

export function Footer() {
  return (
    <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-stone-500 text-stone-500 font-mono">
      <div className="grow text-left">
        Ali Rohde (
        <A target="_blank" href="https://twitter.com/RohdeAli">
          @RohdeAli
        </A>
        )
      </div>
      <div>
        <A target="_blank" href="https://github.com/alibrohde/blog">
          Source
        </A>
      </div>
    </footer>
  );
}
