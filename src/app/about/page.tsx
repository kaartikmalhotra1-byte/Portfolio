import type { Metadata } from "next";
import { MediaBlock } from "@/components/MediaBlock";

export const metadata: Metadata = {
  title: "About — Your Name",
};

export default function AboutPage() {
  return (
    <section className="wrapper py-20">
      <div className="grid gap-12 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div>
          <MediaBlock
            item={{ kind: "image", alt: "Portrait placeholder" }}
            aspect="aspect-square"
          />
          <a
            href="/resume.pdf"
            className="mt-6 inline-block rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
          >
            Download résumé
          </a>
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight">About</h1>
          <p className="prose-body mt-6">
            Replace this with your real bio: background, what you focus on
            as a designer, and what drives your work.
          </p>
          <p className="prose-body mt-4">
            Add a second paragraph with more detail — companies, notable
            projects, or a point of view on design.
          </p>

          <h2 className="mt-12 text-lg font-semibold tracking-tight">
            Experience
          </h2>
          <ul className="prose-body mt-4 space-y-4">
            <li>
              <p className="font-medium text-foreground">
                [Role] — [Company]
              </p>
              <p className="text-sm text-foreground/50">[Dates]</p>
              <p className="mt-1">[One line on what you did/shipped.]</p>
            </li>
            <li>
              <p className="font-medium text-foreground">
                [Role] — [Company]
              </p>
              <p className="text-sm text-foreground/50">[Dates]</p>
              <p className="mt-1">[One line on what you did/shipped.]</p>
            </li>
          </ul>

          <h2 className="mt-12 text-lg font-semibold tracking-tight">
            Contact
          </h2>
          <p className="prose-body mt-4">
            <a href="mailto:hello@example.com" className="text-foreground underline">
              hello@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
