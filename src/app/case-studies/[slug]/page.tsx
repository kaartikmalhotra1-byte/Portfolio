import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/content/case-studies";
import { MediaBlock } from "@/components/MediaBlock";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  return { title: cs ? `${cs.title} — Your Name` : "Case Study — Your Name" };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <article className="wrapper py-20">
      <header className="max-w-2xl">
        <div className="flex flex-wrap gap-2 text-sm text-foreground/50">
          {cs.role ? <span>{cs.role}</span> : null}
          {cs.role && cs.year ? <span>·</span> : null}
          {cs.year ? <span>{cs.year}</span> : null}
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {cs.title}
        </h1>
        <p className="mt-4 text-lg text-foreground/60">{cs.summary}</p>
      </header>

      {cs.cover ? (
        <div className="mt-10">
          <MediaBlock item={cs.cover} aspect="aspect-[16/9]" />
        </div>
      ) : null}

      <div className="mt-16 space-y-16">
        {cs.sections.map((section, i) => (
          <section key={i} className="max-w-2xl">
            {section.heading ? (
              <h2 className="text-xl font-semibold tracking-tight">
                {section.heading}
              </h2>
            ) : null}
            {section.body ? (
              <p className="prose-body mt-4">{section.body}</p>
            ) : null}
            {section.media && section.media.length > 0 ? (
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {section.media.map((item, j) => (
                  <MediaBlock key={j} item={item} />
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  );
}
