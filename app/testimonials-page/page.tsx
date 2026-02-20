import { Subscribe } from "../subscribe";

export const metadata = {
  title: "What Founders Say - Ali Rohde",
  description: "Testimonials from founders who work with Ali Rohde and Outset Capital",
};

const testimonials = [
  {
    name: "Michelle Lee, PhD",
    title: "CEO, Medra",
    quote: "Ali is a force of nature, delivering the depth and quality of support you'd expect from a full institutional VC team, yet operating as a team of one. She's the kind of partner every founder deserves.",
    context: "Portfolio Founder",
  },
  {
    name: "Dan Robinson",
    title: "CEO, Detail",
    quote: "Most early-stage VCs are not useful. Ali is useful. She will do real work for you. She will send you good candidates, scout good customer intros, draft that blog post for you. And she does everything fast. You should take her money if you have the chance!",
    context: "Portfolio Founder",
  },
  {
    name: "Yonas Beshawred",
    title: "CEO, StarSling",
    quote: "Outset Capital has been our most useful investor. Ali moved quickly and invested with conviction right after we met - no hesitation, just action. What I appreciate most is that she moves like a founder. She hustles on your behalf and always has a strong sense of urgency.",
    context: "Portfolio Founder",
  },
  {
    name: "Alex Rosenberg",
    title: "CEO, Tako",
    quote: "Ali does what most early-stage investors promise but few actually deliver: she adds value. She's smart, hungry, and relentlessly proactive. Don't let her humility fool you: she's special.",
    context: "Portfolio Founder",
  },
  {
    name: "Henry Mao",
    title: "Co-founder, Smithery",
    quote: "Ali is the rare early-stage investor who actually moves the needle for founders. Her biggest impact for us was on the talent side. She helped us source founding engineers, and through her network, we landed our 2nd founding engineer, who has been instrumental in building Smithery. When we need help, Ali is quick to respond and consistently points us to the right people. If you're an early-stage founder, you want Ali on your cap table.",
    context: "Portfolio Founder",
  },
  {
    name: "Anirudh Kamath",
    title: "Co-Founder, Smithery",
    quote: "We're incredibly lucky to have Ali and Outset as investors; anytime we ask for absolutely anything, we'll get a response back within minutes with exactly what we need, be it intros to VPs at unicorn companies, other investors, or potential hires. We landed our most experienced engineer via Ali putting us in touch, and we can't thank her enough!",
    context: "Portfolio Founder",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-100 mb-4">
          What Founders Say
        </h1>
        <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
          We could talk about ourselves, but it&rsquo;s better to hear it from the founders we work with.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-8 md:gap-10 mb-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-stone-900 rounded-lg p-8 shadow-sm border border-stone-200 dark:border-stone-800 hover:shadow-md hover:border-[#B8614A]/30 dark:hover:border-[#6BADA3]/30 transition-all duration-200"
          >
            {/* Quote Mark */}
            <div className="absolute top-6 left-6 text-6xl text-[#B8614A]/10 dark:text-[#6BADA3]/10 font-serif leading-none">
              &ldquo;
            </div>

            {/* Content */}
            <div className="relative pl-8">
              <p className="text-base md:text-lg text-stone-700 dark:text-stone-300 mb-6 italic leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <p className="font-semibold text-stone-900 dark:text-stone-100 text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    {testimonial.title}
                  </p>
                </div>
                <span className="text-xs text-stone-500 dark:text-stone-500 bg-stone-100 dark:bg-stone-800 px-3 py-1 rounded-full">
                  {testimonial.context}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Subscribe />
    </div>
  );
}
