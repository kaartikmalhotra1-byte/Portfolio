import type { CaseStudy } from "./types";

/**
 * PLACEHOLDER DATA.
 * Replace each entry below with a real case study: swap `summary`,
 * `sections[].body`, and add real `src` paths to `cover`/`media` once
 * assets are in `public/case-studies/<slug>/`. Keep the shape the same
 * and the pages will render automatically.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "case-study-one",
    title: "Case Study One",
    summary: "One-line summary of the problem and the outcome goes here.",
    role: "Product Designer",
    year: "2026",
    tags: ["Placeholder"],
    cover: { kind: "image", alt: "Cover image placeholder" },
    sections: [
      {
        heading: "Overview",
        body: "Replace with the real context: the problem, the team, your role, and the constraints.",
      },
      {
        heading: "Process",
        body: "Replace with research, iterations, and key decisions.",
        media: [{ kind: "image", alt: "Process media placeholder" }],
      },
      {
        heading: "Outcome",
        body: "Replace with the measurable or qualitative result.",
      },
    ],
  },
  {
    slug: "case-study-two",
    title: "Case Study Two",
    summary: "One-line summary of the problem and the outcome goes here.",
    role: "Product Designer",
    year: "2026",
    tags: ["Placeholder"],
    cover: { kind: "image", alt: "Cover image placeholder" },
    sections: [
      {
        heading: "Overview",
        body: "Replace with the real context: the problem, the team, your role, and the constraints.",
      },
      {
        heading: "Process",
        body: "Replace with research, iterations, and key decisions.",
        media: [{ kind: "video", alt: "Process video placeholder" }],
      },
      {
        heading: "Outcome",
        body: "Replace with the measurable or qualitative result.",
      },
    ],
  },
];
