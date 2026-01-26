import Image from "next/image";
import Link from "next/link";
import aliPhoto from "../public/images/ali.png";
import { Subscribe } from "./subscribe";
import { Testimonials } from "./testimonials";

export default function Home() {
  return (
    <div className="text-stone-700 dark:text-stone-300">
      <Link href="https://twitter.com/RohdeAli" target="_blank" className="block sm:float-right sm:ml-5 sm:mb-5">
        <Image
          src={aliPhoto}
          alt="Ali Rohde"
          className="rounded-full bg-stone-100 block mt-2 mb-5 w-48 h-48 mx-auto sm:mx-0 object-contain object-bottom shadow-lg ring-4 ring-[#B8614A]/10 dark:ring-[#6BADA3]/10 hover:ring-[#B8614A]/25 dark:hover:ring-[#6BADA3]/25 transition-all duration-200"
          unoptimized
          priority
        />
      </Link>

      <p className="mb-4">
        I&rsquo;m the Managing Partner at{" "}
        <Link href="https://www.outsetcapital.com/" className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">
          Outset Capital
        </Link>
        , a venture capital firm investing in AI, devtools, robotics, and future of work companies.
        I&rsquo;m based in San Francisco.
      </p>

      <p className="mb-4">
        We describe ourselves as &ldquo;builders backing builders&rdquo; &mdash; our team consists of
        AI practitioners and YC founders who provide hands-on support from those who know
        what you&rsquo;re going through.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-stone-800 dark:text-stone-100">Investment Focus</h2>

      <p className="mb-4">
        At Outset, we write smaller checks rather than leading rounds, aiming to be the
        most helpful investor per dollar. We&rsquo;re here to support founders, but we
        never get in the way.
      </p>

      <p className="mb-4">
        Some of our portfolio companies include{" "}
        <Link href="https://browserbase.com/" className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">Browserbase</Link>,{" "}
        <Link href="https://datologyai.com/" className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">Datology AI</Link>,{" "}
        <Link href="https://hedra.com/" className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">Hedra</Link>, and{" "}
        <Link href="https://physicalintelligence.company/" className="text-[#B8614A] dark:text-[#6BADA3] underline decoration-[#B8614A]/40 dark:decoration-[#6BADA3]/40 hover:decoration-[#B8614A] dark:hover:decoration-[#6BADA3] underline-offset-2" target="_blank">Physical Intelligence</Link>.
      </p>

      <div className="clear-both" />

      <Testimonials />

      <Subscribe />
    </div>
  );
}
