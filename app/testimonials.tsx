import Link from "next/link";

const testimonials = [
  {
    name: "Michelle Lee, PhD",
    title: "CEO, Medra",
    quote: "Ali is a force of nature, delivering the depth and quality of support you'd expect from a full institutional VC team, yet operating as a team of one. She's the kind of partner every founder deserves.",
  },
  {
    name: "Alex Rosenberg",
    title: "CEO, Tako",
    quote: "Ali does what most early-stage investors promise but few actually deliver: she adds value. She's smart, hungry, and relentlessly proactive. Don't let her humility fool you: she's special.",
  },
  {
    name: "Anirudh Kamath",
    title: "Co-Founder, Smithery",
    quote: "We're incredibly lucky to have Ali and Outset as investors; anytime we ask for absolutely anything, we'll get a response back within minutes with exactly what we need, be it intros to VPs at unicorn companies, other investors, or potential hires. We landed our most experienced engineer via Ali putting us in touch, and we can't thank her enough!",
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
            className="relative pl-4 border-l-2 border-[#6366f1]/20 dark:border-[#6BADA3]/20 hover:border-[#6366f1]/50 dark:hover:border-[#6BADA3]/50 transition-colors"
          >
            <p className="text-sm text-stone-600 dark:text-stone-400 mb-2 italic">
              "{t.quote}"
            </p>
            <p className="text-sm font-medium text-stone-800 dark:text-stone-100">{t.name}</p>
            <p className="text-xs text-stone-500 dark:text-stone-500">{t.title}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link
          href="/testimonials-page"
          className="text-sm text-stone-800 dark:text-stone-200 underline decoration-stone-300 dark:decoration-stone-600 hover:decoration-[#6366f1] dark:hover:decoration-[#6BADA3] underline-offset-2"
        >
          See more
        </Link>
      </div>
    </section>
  );
}
