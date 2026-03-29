import Image from "next/image";
import Link from "next/link";
import aliPhoto from "../public/images/ali.png";
import { Subscribe } from "./subscribe";
import { FadeIn } from "./fade-in";
import { OrbitRing } from "./orbit-ring";

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
      <FadeIn>
        <div className="block sm:float-right sm:ml-5 sm:mb-5">
          <OrbitRing
            className="w-36 h-36 sm:w-48 sm:h-48 mx-auto sm:mx-0 mt-2 mb-6"
            lightColor="#818cf8"
            duration={5}
          >
            <div className="rounded-full p-[3px] bg-gradient-to-br from-[#6366f1] to-[#4f46e5] dark:from-[#6BADA3] dark:to-[#5C9C94] w-full h-full shadow-lg">
              <Image
                src={aliPhoto}
                alt="Ali Rohde"
                className="rounded-full bg-white dark:bg-stone-900 block w-full h-full object-contain object-bottom"
                unoptimized
                priority
              />
            </div>
          </OrbitRing>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="mb-5">
          I&rsquo;m co-founder and General Partner at{" "}
          <Link href="https://www.outsetcapital.com/" className="text-stone-800 dark:text-stone-200 underline decoration-stone-300 dark:decoration-stone-600 hover:decoration-[#6366f1] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">
            Outset Capital
          </Link>
          , an early-stage firm investing in AI.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="mb-5">
          I run podcast{" "}
          <Link href="/podcast" className="text-stone-800 dark:text-stone-200 underline decoration-stone-300 dark:decoration-stone-600 hover:decoration-[#6366f1] dark:hover:decoration-[#6BADA3] underline-offset-2">
            10 Minutes or Less
          </Link>
          {" "}and write{" "}
          <Link href="https://alirohdejobs.substack.com/" className="text-stone-800 dark:text-stone-200 underline decoration-stone-300 dark:decoration-stone-600 hover:decoration-[#6366f1] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">
            Ali Rohde Jobs
          </Link>
          , a 25K+ subscriber newsletter sharing Chief of Staff, BizOps, and VC openings. I helped build{" "}
          <Link href="https://www.vcsheet.com/" className="text-stone-800 dark:text-stone-200 underline decoration-stone-300 dark:decoration-stone-600 hover:decoration-[#6366f1] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">
            VC Sheet
          </Link>
          {" "}for founders to find the best-fit investors for them.
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="mb-5">
          I&rsquo;m active on{" "}
          <a href="https://x.com/RohdeAli" className="text-stone-800 dark:text-stone-200 underline decoration-stone-300 dark:decoration-stone-600 hover:decoration-[#6366f1] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">
            X
          </a>
          ,{" "}
          <a href="https://www.linkedin.com/in/ali-rohde-90719970/" className="text-stone-800 dark:text-stone-200 underline decoration-stone-300 dark:decoration-stone-600 hover:decoration-[#6366f1] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">
            LinkedIn
          </a>
          , and{" "}
          <a href="https://www.youtube.com/@10minutesorlesswithalirohde" className="text-stone-800 dark:text-stone-200 underline decoration-stone-300 dark:decoration-stone-600 hover:decoration-[#6366f1] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">
            YouTube
          </a>
          .
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <h2 className="text-sm font-medium mt-10 mb-3 text-stone-500 dark:text-stone-400 uppercase tracking-wide">Select Portfolio</h2>

        <div className="flex flex-wrap gap-x-3 gap-y-2 mb-5">
          {companies.map((company) => (
            <Link
              key={company.name}
              href={company.href}
              className="text-stone-800 dark:text-stone-200 underline decoration-stone-300 dark:decoration-stone-600 hover:decoration-[#6366f1] dark:hover:decoration-[#6BADA3] underline-offset-2"
              target="_blank"
            >
              {company.name}
            </Link>
          ))}
        </div>
      </FadeIn>

      <div className="clear-both" />

      <FadeIn delay={0.3}>
        <Subscribe />
      </FadeIn>
    </div>
  );
}
