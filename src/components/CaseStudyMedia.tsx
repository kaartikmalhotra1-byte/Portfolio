import type { CaseStudy } from "@/content/types";
import { asset } from "@/lib/asset";

function TagPill({ tag }: { tag: string }) {
  return (
    <span className="absolute right-3 top-3 z-20 rounded-full border border-border bg-white px-2 py-1 text-[9px] leading-[16px] text-foreground">
      {tag}
    </span>
  );
}

/**
 * `backdropAspect`/`coverTopOffset` match Figma exactly: the Home
 * page's featured cards use a 428/272 backdrop with the cover image
 * starting 19.12% down, while the Case studies index grid uses
 * 428/304 with the cover starting 21.05% down — two real, different
 * values in the source file for the same images, not one shared
 * ratio. In both cases the card clips the cover image at its own
 * bottom edge (Figma's `overflow-clip` is literal) — the image does
 * not spill past the card into the page below.
 */
export function CaseStudyMedia({
  caseStudy,
  backdropAspect = "428 / 304",
  coverTopOffset = "21.05%",
}: {
  caseStudy: CaseStudy;
  backdropAspect?: string;
  coverTopOffset?: string;
}) {
  return (
    <div
      className="hover-lift-expressive squircle-tile relative w-full overflow-hidden bg-surface-secondary group-hover:-translate-y-1 group-hover:shadow-[-6px_6px_20px_0px_#c4c4c480]"
      style={{ aspectRatio: backdropAspect }}
    >
      {caseStudy.background ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(caseStudy.background)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
      ) : null}

      <TagPill tag={caseStudy.tag} />

      {caseStudy.mediaStyle === "overflow-phone" && caseStudy.cover?.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={asset(caseStudy.cover.src)}
          alt={caseStudy.cover.alt ?? ""}
          className={`absolute left-1/2 z-10 -translate-x-1/2 ${
            caseStudy.coverFramed ? "rounded-t-2xl border border-black [corner-shape:squircle]" : ""
          }`}
          style={{ top: coverTopOffset, width: caseStudy.coverWidth ?? "56%" }}
        />
      ) : null}
    </div>
  );
}
