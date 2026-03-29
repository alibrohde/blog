import { SocialIcons } from "./social-icons";

export function Footer() {
  return (
    <footer className="p-6 pt-3 pb-6 flex items-center mt-3 text-stone-500 font-mono text-xs">
      <div className="grow">Ali Rohde</div>
      <SocialIcons />
    </footer>
  );
}
