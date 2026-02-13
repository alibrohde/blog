const testimonials = [
  {
    name: "Michelle Lee, PhD",
    title: "CEO, Medra",
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
  {
    name: "Henry Mao",
    title: "Co-founder, Smithery",
    quote: "Ali is the rare early-stage investor who actually moves the needle for founders. Her biggest impact for us was on the talent side. She helped us source founding engineers, and through her network, we landed our 2nd founding engineer, who has been instrumental in building Smithery. When we need help, Ali is quick to respond and consistently points us to the right people. If you're an early-stage founder, you want Ali on your cap table.",
  },
];

export function Testimonials() {
  return (
    <section className="my-12">
      <h2 className="text-xl font-semibold mb-6 text-stone-800 dark:text-stone-100">What founders say</h2>
      <div className="space-y-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative pl-4 border-l-2 border-[#B8614A]/20 dark:border-[#6BADA3]/20 hover:border-[#B8614A]/50 dark:hover:border-[#6BADA3]/50 transition-colors"
          >
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-2 italic">
              "{t.quote}"
            </p>
            <p className="text-sm font-medium text-stone-800 dark:text-stone-100">{t.name}</p>
            <p className="text-xs text-stone-500 dark:text-stone-500">{t.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
