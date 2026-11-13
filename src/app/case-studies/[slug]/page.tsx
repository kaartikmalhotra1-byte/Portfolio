import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NavRow } from "@/components/NavRow";
import { Divider } from "@/components/Divider";
import { PageFooter } from "@/components/PageFooter";
import { CaseStudyMedia } from "@/components/CaseStudyMedia";
import { caseStudies } from "@/content/case-studies";

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
            {cs.company} · {cs.tag}
          </p>
          <h1 className="text-[28px] font-semibold text-foreground">{cs.title}</h1>
          <p className="max-w-2xl whitespace-pre-line text-base text-foreground-secondary">{cs.summary}</p>
        </div>

        <div className="w-full max-w-[428px]">
          <CaseStudyMedia caseStudy={cs} />
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
