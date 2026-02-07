import Image from "next/image";
import Link from "next/link";
import aliPhoto from "../public/images/ali.png";
import { Subscribe } from "./subscribe";
import { Testimonials } from "./testimonials";

const companies = [
  { name: "Browserbase", href: "https://browserbase.com/" },
  { name: "Datology AI", href: "https://datologyai.com/" },
  { name: "Detail", href: "https://detail.dev/" },
  { name: "Harper Insure", href: "https://harperinsure.com/" },
  { name: "Hedra", href: "https://hedra.com/" },
  { name: "Kindred", href: "https://livekindred.com/" },
  { name: "Medra", href: "https://medra.ai/" },
  { name: "Physical Intelligence", href: "https://physicalintelligence.company/" },
  { name: "Poetiq", href: "https://poetiq.ai/" },
  { name: "Reflex", href: "https://reflex.dev/" },
  { name: "Smithery", href: "https://smithery.ai/" },
  { name: "Tako", href: "https://tako.com/" },
];

export default function Home() {
  return (
    <div className="text-stone-700 dark:text-stone-300">
      <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-2">
        <div className="shrink-0 flex justify-center sm:justify-start sm:order-last">
          <Image
            src={aliPhoto}
            alt="Ali Rohde"
            className="rounded-full bg-stone-100 w-36 h-36 sm:w-40 sm:h-40 object-contain object-bottom shadow-lg ring-4 ring-[#B8614A]/10 dark:ring-[#6BADA3]/10"
            unoptimized
            priority
          />
        </div>

        <div className="flex-grow">
          <p className="text-base leading-relaxed mb-4">
            I&rsquo;m Managing Partner at{" "}
            <Link href="https://www.outsetcapital.com/" className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">
              Outset Capital
            </Link>
            , where we invest in AI, deeptech, and future of work.
            We write small checks and aim to be the most helpful investor per dollar on our founders&rsquo; cap tables.
          </p>

          <p className="text-base leading-relaxed">
            I&rsquo;m an East Coast transplant based in San Francisco, usually found walking Hayes Valley with my dog Theo.
          </p>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-xs font-medium mb-4 text-stone-400 dark:text-stone-500 uppercase tracking-widest">Select Portfolio</h2>

        <div className="flex flex-wrap gap-2">
          {companies.map((company) => (
            <Link
              key={company.name}
              href={company.href}
              className="text-sm px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-[#B8614A]/50 dark:hover:border-[#6BADA3]/50 hover:text-[#B8614A] dark:hover:text-[#6BADA3] transition-colors"
              target="_blank"
            >
              {company.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xs font-medium mb-4 text-stone-400 dark:text-stone-500 uppercase tracking-widest">Side Projects</h2>

        <div className="flex flex-col gap-3">
          <Link
            href="https://alirohdejobs.substack.com/"
            className="group"
            target="_blank"
          >
            <span className="text-sm font-medium text-stone-800 dark:text-stone-100 group-hover:text-[#B8614A] dark:group-hover:text-[#6BADA3] transition-colors">Ali Rohde Jobs</span>
            <p className="text-sm text-stone-500 dark:text-stone-500 leading-relaxed">25K+ subscriber newsletter, weekly, free, helping to share the top Chief of Staff, BizOps and VC roles in tech.</p>
          </Link>
          <Link
            href="https://vcsheet.com/"
            className="group"
            target="_blank"
          >
            <span className="text-sm font-medium text-stone-800 dark:text-stone-100 group-hover:text-[#B8614A] dark:group-hover:text-[#6BADA3] transition-colors">VC Sheet</span>
            <p className="text-sm text-stone-500 dark:text-stone-500 leading-relaxed">Founders: Stop wasting your time on investors that don&rsquo;t invest in your stage, sector, or geography. Find the VCs that are the best fit for you.</p>
          </Link>
        </div>
      </section>

      <Testimonials />

      <Subscribe />
    </div>
  );
}
