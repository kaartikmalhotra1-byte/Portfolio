import type { Metadata } from "next";
import { NavRow } from "@/components/NavRow";
import { Divider } from "@/components/Divider";
import { PageFooter } from "@/components/PageFooter";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "About — Kaartik Malhotra",
};

const career = [
  { company: "Monotype", role: "Lead Product Designer (Prev. Senior PD)", dates: "Mar 2025 - Present" },
  { company: "Zomato", role: "Senior Product Designer", dates: "Jan 2025 - Mar 2025" },
  { company: "Monotype", role: "Senior Product Designer", dates: "Oct 2024 - Jan 2025" },
  { company: "Spinny", role: "Senior Product Designer (Prev. PD - II)", dates: "Apr 2022 - Oct 2024" },
  { company: "DotPe", role: "UI/UX Designer", dates: "Oct 2021 - Apr 2022" },
  { company: "TOPPEQ", role: "Founding UI/UX Designer", dates: "Sep 2019 - Oct 2021" },
];

const education = [
  { school: "Stanford Graduate School of Business", program: "Executive Program, LEAD", dates: "2026 - 2027" },
  { school: "Vellore Institute of Technology", program: "B. Tech. in Computer Science", dates: "2016 - 2020" },
];

export default function AboutPage() {
  return (
    <div className="wrapper flex flex-col gap-16 py-14">
      <NavRow active="about" />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 animate-expressive-fade-slow">
          <h1 className="text-[28px] font-semibold text-foreground">About me</h1>
          <div className="prose-body max-w-[46.2rem] text-base">
            <p>
              I&apos;m working as Lead Product Designer at Monotype. I lead design for how our
              fonts reach designers, across a desktop app, an Adobe plugin, a Chrome extension and
              an agentic taskbar, and the licensing systems behind them.
            </p>
            <p className="mt-4">
              I studied computer science, then spent my early years designing tools that came down
              to one problem: making processes people can&apos;t see trustworthy.
            </p>
            <p className="mt-4">
              I work on the same problem now, with a model in the loop. I care about where a model
              should act, where it should stay out, and how it tells you when it&apos;s unsure.
            </p>
          </div>
        </div>

        <Divider />

        <div className="flex flex-col gap-6">
          <h2
            className="text-[28px] font-semibold text-foreground animate-expressive-fade-slow"
            style={{ "--stagger": "70ms" } as React.CSSProperties}
          >
            Career
          </h2>
          <div className="flex max-w-2xl flex-col gap-4">
            {career.map((item, i) => (
              <div
                key={i}
                className="animate-expressive-fade-slow"
                style={{ "--stagger": `${120 + i * 40}ms` } as React.CSSProperties}
              >
                <p className="font-semibold text-foreground">{item.company}</p>
                <p className="text-sm text-foreground-tertiary">
                  {item.role} / {item.dates}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div className="flex flex-col gap-6">
          <h2
            className="text-[28px] font-semibold text-foreground animate-expressive-fade-slow"
            style={{ "--stagger": "140ms" } as React.CSSProperties}
          >
            Education
          </h2>
          <div className="flex max-w-2xl flex-col gap-4">
            {education.map((item, i) => (
              <div
                key={i}
                className="animate-expressive-fade-slow"
                style={{ "--stagger": `${190 + i * 40}ms` } as React.CSSProperties}
              >
                <p className="font-semibold text-foreground">{item.program}</p>
                <p className="text-sm text-foreground-tertiary">
                  {item.school} / {item.dates}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div
          className="flex flex-col gap-6 animate-expressive-fade-slow"
          style={{ "--stagger": "210ms" } as React.CSSProperties}
        >
          <h2 className="text-[28px] font-semibold text-foreground">Get in touch</h2>
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-foreground">
            <a href="mailto:kaartikmalhotra1@gmail.com">kaartikmalhotra1@gmail.com</a>
            <span className="size-1 rounded-full bg-border" />
            <a href="https://www.linkedin.com/in/kaartikmalhotra14/" target="_blank" rel="noreferrer" className="underline">
              LinkedIn
            </a>
            <span className="size-1 rounded-full bg-border" />
            <a href={asset("/resume.pdf")} className="underline">
              Download my CV
            </a>
          </div>
        </div>

        <Divider />

        <div className="animate-expressive-fade-slow" style={{ "--stagger": "280ms" } as React.CSSProperties}>
          <PageFooter />
        </div>
      </div>
    </div>
  );
}
