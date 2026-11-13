import type { Metadata } from "next";
import { NavRow } from "@/components/NavRow";
import { Divider } from "@/components/Divider";
import { PageFooter } from "@/components/PageFooter";
import { CaseStudyGridCard } from "@/components/CaseStudyGridCard";
import { recentWork, earlierWork } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Case studies — Kaartik Malhotra",
};

export default function CaseStudiesPage() {
  return (
    <div className="wrapper flex flex-col gap-16 py-14">
      <NavRow active="case-studies" />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 animate-expressive-fade-slow">
          <h1 className="text-[28px] font-semibold text-foreground">Case studies</h1>
          <p className="text-base text-foreground-secondary">
            Designing for trust; between people and models, and in processes people can&apos;t see.
          </p>
        </div>

        <Divider />

        <div
          className="flex flex-col gap-6 animate-expressive-fade-slow"
          style={{ "--stagger": "70ms" } as React.CSSProperties}
        >
          <div>
            <p className="font-medium text-foreground">Recent work</p>
            <p className="text-sm text-foreground-tertiary">at Monotype</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {recentWork.map((cs) => (
              <CaseStudyGridCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        </div>

        <Divider />

        <div
          className="flex flex-col gap-6 animate-expressive-fade-slow"
          style={{ "--stagger": "140ms" } as React.CSSProperties}
        >
          <div>
            <p className="font-medium text-foreground">Earlier work</p>
            <p className="text-sm text-foreground-tertiary">at Zomato &amp; Spinny</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {earlierWork.map((cs) => (
              <CaseStudyGridCard key={cs.slug} caseStudy={cs} />
            ))}
          </div>
        </div>

        <Divider />

        <div className="animate-expressive-fade-slow" style={{ "--stagger": "210ms" } as React.CSSProperties}>
          <PageFooter />
        </div>
      </div>
    </div>
  );
}
