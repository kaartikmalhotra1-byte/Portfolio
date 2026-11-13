import Image from "next/image";
import type { MediaItem } from "@/content/types";

export function MediaBlock({
  item,
  aspect = "aspect-[4/3]",
}: {
  item: MediaItem;
  aspect?: string;
}) {
  if (!item.src) {
    return (
      <div
        className={`${aspect} w-full rounded-lg border border-dashed border-foreground/20 bg-foreground/[0.03] flex items-center justify-center`}
      >
        <span className="text-sm text-foreground/40">
          {item.kind === "video" ? "Video placeholder" : "Image placeholder"}
          {item.alt ? ` — ${item.alt}` : ""}
        </span>
      </div>
    );
  }

  return (
    <figure>
      {item.kind === "video" ? (
        <video
          className={`${aspect} w-full rounded-lg object-cover bg-foreground/5`}
          src={item.src}
          controls
          playsInline
        />
      ) : (
        <div className={`${aspect} relative w-full overflow-hidden rounded-lg bg-foreground/5`}>
          <Image
            src={item.src}
            alt={item.alt ?? ""}
            fill
            className="object-cover"
          />
        </div>
      )}
      {item.caption ? (
        <figcaption className="mt-2 text-sm text-foreground/50">
          {item.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
