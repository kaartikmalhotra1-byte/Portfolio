import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NavRow } from "@/components/NavRow";
import { Divider } from "@/components/Divider";
import { PageFooter } from "@/components/PageFooter";
import { caseStudies } from "@/content/case-studies";
import { formatDate } from "@/lib/date";

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
  return { title: cs ? `${cs.title} — Kaartik Malhotra` : "Case study — Kaartik Malhotra" };
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
    <div className="wrapper flex flex-col gap-16 py-14">
      <NavRow active="case-studies" />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-foreground-tertiary">
            <Link href="/case-studies" className="hover:text-foreground">
              Case studies
            </Link>{" "}
            / <span className="text-foreground">{cs.title}</span>
          </p>
          <h1 className="text-[28px] font-semibold text-foreground">{cs.title}</h1>
          <p className="max-w-2xl text-base text-foreground-secondary">{cs.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-border px-3 py-1 text-sm text-foreground">
              {cs.company}
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-sm text-foreground">
              {cs.tag}
            </span>
          </div>
          <p className="text-sm text-foreground-tertiary">{formatDate(cs.publishedAt)}</p>
        </div>

        <Divider />

        <p className="max-w-2xl text-base text-foreground-secondary">
          The full write-up for this project — process, decisions, and outcome — isn&apos;t
          published yet. Check back soon.
        </p>

        <Divider />

        <PageFooter />
      </div>
    </div>
  );
}
