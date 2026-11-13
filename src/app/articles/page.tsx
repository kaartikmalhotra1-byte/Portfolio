import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/content/articles";
import { MediaBlock } from "@/components/MediaBlock";

export const metadata: Metadata = {
  title: "Articles — Your Name",
};

export default function ArticlesPage() {
  return (
    <section className="wrapper py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Articles</h1>
      <p className="mt-3 max-w-xl text-foreground/60">
        Writing on product design and process.
      </p>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group"
          >
            {article.cover ? (
              <MediaBlock item={article.cover} aspect="aspect-[16/9]" />
            ) : null}
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h2 className="font-medium transition-colors group-hover:text-foreground/70">
                {article.title}
              </h2>
              {article.date ? (
                <span className="text-sm text-foreground/40">
                  {new Date(article.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                  })}
                </span>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-foreground/50">{article.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
