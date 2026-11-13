import Link from "next/link";
import { asset } from "@/lib/asset";

type NavKey = "case-studies" | "writing" | "about";

const links: { key: NavKey; href: string; label: string }[] = [
  { key: "case-studies", href: "/case-studies", label: "Case studies" },
  { key: "writing", href: "/writing", label: "Writing" },
  { key: "about", href: "/about", label: "About" },
];

export function NavRow({ active }: { active?: NavKey }) {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-y-3">
      <Link
        href="/"
        className={`text-base font-medium tracking-tight ${
          active ? "text-foreground-secondary" : "text-foreground"
        }`}
      >
        KAARTIK MALHOTRA
      </Link>
      <div className="flex items-center gap-6 text-sm">
        {links.map((link) => {
          const isActive = link.key === active;
          return (
            <Link
              key={link.key}
              href={link.href}
              className="relative pb-1 uppercase tracking-wide"
            >
              <span className={isActive ? "text-foreground" : "text-foreground-tertiary"}>
                {link.label}
              </span>
              {isActive ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={asset("/images/nav-underline.svg")}
                  alt=""
                  aria-hidden
                  className="absolute left-0 top-full h-[5px] w-full animate-expressive-draw"
                />
              ) : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
