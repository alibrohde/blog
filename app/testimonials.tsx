const testimonials = [
  {
    name: "Michelle Lee, PhD",
    title: "CEO, Hedra",
    quote: "Ali is a force of nature, delivering the depth and quality of support you'd expect from a full institutional VC team, yet operating as a team of one. She's the kind of partner every founder deserves.",
  },
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
    name: "Alex Rosenberg",
    title: "CEO, Tako",
    quote: "Ali does what most early-stage investors promise but few actually deliver: she adds value. She's smart, hungry, and relentlessly proactive. Don't let her humility fool you: she's special.",
  },
];

export function Testimonials() {
  return (
    <section className="my-14">
      <h2 className="text-xs font-medium mb-6 text-stone-400 dark:text-stone-500 uppercase tracking-widest">What Founders Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-xl border border-stone-200 dark:border-stone-700 p-5 flex flex-col justify-between hover:border-[#B8614A]/40 dark:hover:border-[#6BADA3]/40 transition-colors"
          >
            <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400 mb-4">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="text-sm font-medium text-stone-800 dark:text-stone-100">{t.name}</p>
              <p className="text-xs text-stone-500 dark:text-stone-500">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
