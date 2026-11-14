import Link from "next/link";
import type { CaseStudy } from "@/content/types";
import { CaseStudyMedia } from "./CaseStudyMedia";
import { asset } from "@/lib/asset";

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
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-foreground">{caseStudy.title}</p>
          <p className="text-sm text-foreground-tertiary">{caseStudy.tagline}</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/arrow-dark.svg")}
          alt=""
          aria-hidden
          className="size-4 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        />
      </div>
    </Link>
  );
}
