import type { CaseStudy } from "@/content/types";

function TagPill({ tag }: { tag: string }) {
  return (
    <span className="absolute right-3 top-3 rounded-full border border-border bg-white px-2 py-1 text-[9px] text-foreground">
      {tag}
    </span>
  );
}

function Backdrop({ caseStudy, children }: { caseStudy: CaseStudy; children?: React.ReactNode }) {
  return (
    <div
      className="absolute inset-x-0 top-0 overflow-hidden rounded-3xl bg-surface-secondary"
      style={{ aspectRatio: "428 / 304" }}
    >
      {caseStudy.background ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={caseStudy.background}
          alt=""
          className="h-full w-full object-cover opacity-80"
        />
      ) : null}
      <TagPill tag={caseStudy.tag} />
      {children}
    </div>
  );
}

export function CaseStudyMedia({ caseStudy }: { caseStudy: CaseStudy }) {
  if (caseStudy.mediaStyle === "overflow-phone" && caseStudy.cover?.src) {
    return (
      <div className="relative w-full">
        <Backdrop caseStudy={caseStudy} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={caseStudy.cover.src}
          alt={caseStudy.cover.alt ?? ""}
          className="relative z-10 mx-auto block w-[56%]"
        />
      </div>
    );
  }

  if (caseStudy.mediaStyle === "contained" && caseStudy.cover?.src) {
    return (
      <div className="relative w-full" style={{ aspectRatio: "428 / 304" }}>
        <Backdrop caseStudy={caseStudy}>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={caseStudy.cover.src}
              alt={caseStudy.cover.alt ?? ""}
              className="max-h-full max-w-full rounded-lg object-contain"
            />
          </div>
        </Backdrop>
      </div>
    );
  }

  return (
    <div className="relative w-full" style={{ aspectRatio: "428 / 304" }}>
      <Backdrop caseStudy={caseStudy} />
    </div>
  );
}
