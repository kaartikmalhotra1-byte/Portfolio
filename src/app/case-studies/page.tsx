import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/content/case-studies";
import { MediaBlock } from "@/components/MediaBlock";

export const metadata: Metadata = {
  title: "Case Studies — Your Name",
};

export default function CaseStudiesPage() {
  return (
    <section className="wrapper py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Case Studies</h1>
      <p className="mt-3 max-w-xl text-foreground/60">
        Selected projects, process, and outcomes.
      </p>

      <div className="mt-12 grid gap-12 sm:grid-cols-2">
        {caseStudies.map((cs) => (
          <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="group">
            {cs.cover ? <MediaBlock item={cs.cover} aspect="aspect-[4/3]" /> : null}
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h2 className="font-medium transition-colors group-hover:text-foreground/70">
                {cs.title}
              </h2>
              {cs.year ? (
                <span className="text-sm text-foreground/40">{cs.year}</span>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-foreground/50">{cs.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
