import Link from "next/link";
import type { CaseStudy } from "@/content/types";
import { CaseStudyMedia } from "./CaseStudyMedia";

export function CaseStudyGridCard({
  caseStudy,
  className = "",
  style,
}: {
  caseStudy: CaseStudy;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className={`group flex w-full flex-col gap-3 ${className}`}
      style={style}
    >
      <CaseStudyMedia caseStudy={caseStudy} />
      <div className="flex flex-col gap-1">
        <p className="font-medium text-foreground">{caseStudy.title}</p>
        <p className="text-sm text-foreground-tertiary">{caseStudy.tagline}</p>
      </div>
    </Link>
  );
}
