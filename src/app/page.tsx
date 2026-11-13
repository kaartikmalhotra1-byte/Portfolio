import Link from "next/link";
import { caseStudies } from "@/content/case-studies";
import { MediaBlock } from "@/components/MediaBlock";

export default function Home() {
  const featured = caseStudies.slice(0, 3);

  return (
    <>
      <section className="wrapper py-24 sm:py-32">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Product Designer building [replace with your positioning line].
        </h1>
        <p className="mt-6 max-w-xl text-lg text-foreground/60">
          Replace this with a short intro: who you are, what you focus on,
          and what kind of problems you like solving.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/case-studies"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            View case studies
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            About me
          </Link>
        </div>
      </section>

      <section className="wrapper pb-24 sm:pb-32">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="text-xl font-semibold tracking-tight">
            Selected work
          </h2>
          <Link
            href="/case-studies"
            className="text-sm text-foreground/50 hover:text-foreground"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cs) => (
            <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="group">
              {cs.cover ? (
                <MediaBlock item={cs.cover} aspect="aspect-[4/3]" />
              ) : null}
              <h3 className="mt-4 font-medium transition-colors group-hover:text-foreground/70">
                {cs.title}
              </h3>
              <p className="mt-1 text-sm text-foreground/50">{cs.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
