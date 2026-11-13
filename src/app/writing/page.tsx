import Link from "next/link";
import type { Metadata } from "next";
import { NavRow } from "@/components/NavRow";
import { Divider } from "@/components/Divider";
import { PageFooter } from "@/components/PageFooter";
import { Button } from "@/components/Button";
import { writingPosts } from "@/content/writing";

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

        <div
          className="flex flex-col gap-8 animate-expressive-fade-slow"
          style={{ "--stagger": "70ms" } as React.CSSProperties}
        >
          {writingPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="flex w-full items-center gap-3"
            >
              <div className="min-w-0 flex-1">
                <p className="text-base text-foreground">{post.title}</p>
                <p className="text-sm text-foreground-tertiary">{post.topic}</p>
              </div>
              <Button label="" variant="secondary" iconOnly />
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
