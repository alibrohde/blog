import Image from "next/image";
import Link from "next/link";
import aliPhoto from "../public/images/ali.png";
import { Subscribe } from "./subscribe";
import { Testimonials } from "./testimonials";

export default function Home() {
  return (
    <div className="text-gray-800 dark:text-gray-300">
      <Link href="https://twitter.com/RohdeAli" target="_blank" className="block sm:float-right sm:ml-5 sm:mb-5">
        <Image
          src={aliPhoto}
          alt="Ali Rohde"
          className="rounded-full bg-gray-100 block mt-2 mb-5 w-48 h-48 mx-auto sm:mx-0 object-contain object-bottom shadow-lg ring-4 ring-neutral-100 dark:ring-neutral-800 hover:ring-neutral-200 dark:hover:ring-neutral-700 transition-all duration-200"
          unoptimized
          priority
        />
      </Link>

      <p className="mb-4">
        I&rsquo;m the Managing Partner at{" "}
        <Link href="https://www.outsetcapital.com/" className="underline decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-500 dark:hover:decoration-neutral-400 underline-offset-2" target="_blank">
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

      <h2 className="text-xl font-semibold mt-8 mb-4 dark:text-gray-100">Investment Focus</h2>

      <p className="mb-4">
        At Outset, we write smaller checks rather than leading rounds, aiming to be the
        most helpful investor per dollar. We&rsquo;re here to support founders, but we
        never get in the way.
      </p>

      <p className="mb-4">
        Some of our portfolio companies include{" "}
        <Link href="https://browserbase.com/" className="underline decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-500 dark:hover:decoration-neutral-400 underline-offset-2" target="_blank">Browserbase</Link>,{" "}
        <Link href="https://datologyai.com/" className="underline decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-500 dark:hover:decoration-neutral-400 underline-offset-2" target="_blank">Datology AI</Link>,{" "}
        <Link href="https://hedra.com/" className="underline decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-500 dark:hover:decoration-neutral-400 underline-offset-2" target="_blank">Hedra</Link>, and{" "}
        <Link href="https://physicalintelligence.company/" className="underline decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-500 dark:hover:decoration-neutral-400 underline-offset-2" target="_blank">Physical Intelligence</Link>.
      </p>

      <div className="clear-both" />

      <Testimonials />

      <Subscribe />
    </div>
  );
}
