# Portfolio

Product design portfolio. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Structure

- `/` — Home
- `/case-studies`, `/case-studies/[slug]` — Case study index and detail pages
- `/articles`, `/articles/[slug]` — Article index and detail pages
- `/about` — About / résumé / contact

## Content

Case studies and articles are plain TypeScript data files, not a CMS:

- `src/content/case-studies.ts`
- `src/content/articles.ts`

Each entry follows the shape in `src/content/types.ts`. To add a new case
study or article, add an object to the array — the index and detail pages
pick it up automatically via `generateStaticParams`.

Media (`cover`, section `media`) renders a dashed placeholder box until a
real `src` is provided. Drop image/video files into `public/` (e.g.
`public/case-studies/<slug>/...`) and reference them by path.

## Development

```bash
npm install
npm run dev
```
