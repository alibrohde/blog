const quotes = [
  {
    text: "When I do good, I feel good. When I do bad, I feel bad. And that's my religion.",
    author: "Abraham Lincoln",
  },
];

export function Quotes() {
  return (
    <section className="my-12">
      <h2 className="text-xl font-semibold mb-6 text-stone-800 dark:text-stone-100">Quotes I like</h2>
      <div className="space-y-6">
        {quotes.map((q, i) => (
          <div
            key={i}
            className="relative pl-4 border-l-2 border-[#6366f1]/20 dark:border-[#6BADA3]/20 hover:border-[#6366f1]/50 dark:hover:border-[#6BADA3]/50 transition-colors"
          >
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-2 italic">
              "{q.text}"
            </p>
            <p className="text-sm font-medium text-stone-800 dark:text-stone-100">— {q.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
