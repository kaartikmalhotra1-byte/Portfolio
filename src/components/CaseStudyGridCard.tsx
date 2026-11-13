import Link from "next/link";
import type { CaseStudy } from "@/content/types";
import { CaseStudyMedia } from "./CaseStudyMedia";
import { Button } from "./Button";

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
      <div className="flex items-center gap-10">
        <div className="flex-1 min-w-0">
          <p className="font-medium text-foreground">{caseStudy.title}</p>
          <p className="text-sm text-foreground-tertiary">{caseStudy.tagline}</p>
        </div>
        <Button label="" variant="secondary" iconOnly />
      </div>
    </Link>
  );
}
