import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NavRow } from "@/components/NavRow";
import { Divider } from "@/components/Divider";
import { PageFooter } from "@/components/PageFooter";
import { writingPosts } from "@/content/writing";

export function generateStaticParams() {
  return writingPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = writingPosts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — Kaartik Malhotra` : "Writing — Kaartik Malhotra" };
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = writingPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="wrapper flex flex-col gap-16 py-14">
      <NavRow active="writing" />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-foreground-tertiary">{post.topic}</p>
          <h1 className="max-w-2xl text-[28px] font-semibold text-foreground">{post.title}</h1>
        </div>

        <Divider />

        <p className="max-w-2xl text-base text-foreground-secondary">
          This piece isn&apos;t published yet. Check back soon.
        </p>

        <Divider />

        <PageFooter />
      </div>
    </div>
  );
}
