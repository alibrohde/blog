const testimonials = [
  {
    name: "Dan Robinson",
    title: "CEO, Detail",
    quote: "Most early-stage VCs are not useful. Ali is useful. She will do real work for you. She will send you good candidates, scout good customer intros, draft that blog post for you. And she does everything fast. You should take her money if you have the chance!",
  },
  {
    name: "Yonas Beshawred",
    title: "CEO, StarSling",
    quote: "Outset Capital has been our most useful investor. Ali moved quickly and invested with conviction right after we met - no hesitation, just action. What I appreciate most is that she moves like a founder. She hustles on your behalf and always has a strong sense of urgency.",
  },
  {
    name: "Michelle Lee, PhD",
    title: "CEO, Hedra",
    quote: "Ali is a force of nature, delivering the depth and quality of support you'd expect from a full institutional VC team, yet operating as a team of one. She's the kind of partner every founder deserves.",
  },
  {
    name: "Alex Rosenberg",
    title: "CEO, Tako",
    quote: "Ali does what most early-stage investors promise but few actually deliver: she adds value. She's smart, hungry, and relentlessly proactive. Don't let her humility fool you: she's special.",
  },
];

export function Testimonials() {
  return (
    <section className="my-12">
      <h2 className="text-lg font-semibold mb-6 dark:text-gray-100">What founders say</h2>
      <div className="space-y-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative pl-4 border-l-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
          >
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 italic">
              "{t.quote}"
            </p>
            <p className="text-sm font-medium dark:text-gray-100">{t.name}</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-500">{t.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
