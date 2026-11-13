import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/content/articles";
import { MediaBlock } from "@/components/MediaBlock";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return {
    title: article ? `${article.title} — Your Name` : "Article — Your Name",
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <article className="wrapper py-20">
      <header className="max-w-2xl">
        {article.date ? (
          <p className="text-sm text-foreground/50">
            {new Date(article.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        ) : null}
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-foreground/60">{article.summary}</p>
      </header>

      {article.cover ? (
        <div className="mt-10">
          <MediaBlock item={article.cover} aspect="aspect-[16/9]" />
        </div>
      ) : null}

      <div className="mt-16 space-y-16">
        {article.sections.map((section, i) => (
          <section key={i} className="max-w-2xl">
            {section.heading ? (
              <h2 className="text-xl font-semibold tracking-tight">
                {section.heading}
              </h2>
            ) : null}
            {section.body ? (
              <p className="prose-body mt-4">{section.body}</p>
            ) : null}
            {section.media && section.media.length > 0 ? (
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {section.media.map((item, j) => (
                  <MediaBlock key={j} item={item} />
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>
    </article>
  );
}
