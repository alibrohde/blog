export const Callout = ({ emoji = null, text = null, children }) => (
  <div className="bg-[#B8614A]/10 dark:bg-[#6BADA3]/10 dark:text-stone-300 flex items-start p-3 my-6 text-base rounded-md">
    <span className="block w-6 text-center mr-2 scale-[1.2]">{emoji}</span>
    <span className="block grow">{text ?? children}</span>
  </div>
);
