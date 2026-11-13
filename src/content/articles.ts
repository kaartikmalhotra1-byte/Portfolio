import type { Article } from "./types";

/**
 * PLACEHOLDER DATA.
 * Replace each entry below with a real article. Keep the shape the
 * same and the pages will render automatically.
 */
export const articles: Article[] = [
  {
    slug: "article-one",
    title: "Article One",
    summary: "One-line summary of what this article is about.",
    date: "2026-01-01",
    tags: ["Placeholder"],
    cover: { kind: "image", alt: "Cover image placeholder" },
    sections: [
      {
        body: "Replace with the real article body.",
      },
    ],
  },
];
