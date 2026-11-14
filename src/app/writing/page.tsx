import Link from "next/link";
import type { Metadata } from "next";
import { NavRow } from "@/components/NavRow";
import { Divider } from "@/components/Divider";
import { PageFooter } from "@/components/PageFooter";
import { writingPosts } from "@/content/writing";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Writing — Kaartik Malhotra",
};

export default function WritingPage() {
  return (
    <div className="wrapper flex flex-col gap-16 py-14">
      <NavRow active="writing" />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 animate-expressive-fade-slow">
          <h1 className="text-[28px] font-semibold text-foreground">
            Writing on products, design &amp; AI.
          </h1>
          <p className="text-base text-foreground-secondary">
            Sharing my points of view and things I&apos;ve learned across my 6+ years working in
            the domain.
          </p>
        </div>

        <Divider />

        <div className="flex flex-col gap-8">
          {writingPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group flex w-full items-center gap-3 animate-expressive-fade-slow"
              style={{ "--stagger": `${70 + i * 25}ms` } as React.CSSProperties}
            >
              <div className="flex min-w-0 flex-1 flex-col gap-1">
                <p className="flex items-center gap-2 text-base text-foreground">
                  <span className="relative inline-block min-w-0">
                    {post.title}
                    <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-foreground transition-transform duration-500 group-hover:scale-x-100" />
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset("/images/arrow-dark.svg")}
                    alt=""
                    aria-hidden
                    className="size-4 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </p>
                <p className="text-sm text-foreground-tertiary">{post.topic}</p>
              </div>
            </Link>
          ))}
        </div>

        <Divider />

        <div className="animate-expressive-fade-slow" style={{ "--stagger": "140ms" } as React.CSSProperties}>
          <PageFooter />
        </div>
      </div>
    </div>
  );
}
