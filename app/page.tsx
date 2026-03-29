import Image from "next/image";
import Link from "next/link";
import aliPhoto from "../public/images/ali.png";
import { Subscribe } from "./subscribe";

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
      <div className="block sm:float-right sm:ml-5 sm:mb-5">
        <Image
          src={aliPhoto}
          alt="Ali Rohde"
          className="rounded-full bg-stone-100 block mt-2 mb-5 w-48 h-48 mx-auto sm:mx-0 object-contain object-bottom shadow-lg ring-4 ring-[#B8614A]/10 dark:ring-[#6BADA3]/10"
          unoptimized
          priority
        />
      </div>

      <p className="mb-4">
        I&rsquo;m co-founder and General Partner at{" "}
        <Link href="https://www.outsetcapital.com/" className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">
          Outset Capital
        </Link>
        , an early-stage firm investing in AI.
      </p>

      <p className="mb-4">
        I run podcast{" "}
        <Link href="/podcast" className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2">
          10 Minutes or Less
        </Link>
        {" "}and write{" "}
        <Link href="https://alirohdejobs.substack.com/" className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">
          Ali Rohde Jobs
        </Link>
        , a 25K+ subscriber newsletter sharing Chief of Staff, BizOps, and VC openings. I helped build{" "}
        <Link href="https://www.vcsheet.com/" className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">
          VC Sheet
        </Link>
        {" "}for founders to find the best-fit investors for them.
      </p>

      <p className="mb-4">
        I&rsquo;m active on{" "}
        <a href="https://x.com/RohdeAli" className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">
          X
        </a>
        ,{" "}
        <a href="https://www.linkedin.com/in/ali-rohde-90719970/" className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">
          LinkedIn
        </a>
        , and{" "}
        <a href="https://www.youtube.com/@10minutesorlesswithalirohde" className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">
          YouTube
        </a>
        .
      </p>

      <h2 className="text-sm font-medium mt-8 mb-3 text-stone-500 dark:text-stone-400 uppercase tracking-wide">Select Portfolio</h2>

      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
        {companies.map((company) => (
          <Link
            key={company.name}
            href={company.href}
            className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2"
            target="_blank"
          >
            {company.name}
          </Link>
        ))}
      </div>

      <div className="clear-both" />

      <Subscribe />
    </div>
  );
}
