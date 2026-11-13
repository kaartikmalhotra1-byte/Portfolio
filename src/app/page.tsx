import Link from "next/link";
import { NavRow } from "@/components/NavRow";
import { Divider } from "@/components/Divider";
import { PageFooter } from "@/components/PageFooter";
import { Button } from "@/components/Button";
import { CaseStudyMedia } from "@/components/CaseStudyMedia";
import { homeFeatured } from "@/content/case-studies";

const highlights = [
  "Formulated Monotype's AI-native product strategy",
  "Managing a team of 4 designers",
  "Shipped QR order-ready across Zomato's POS restaurants: ~77% adoption, ~30s faster per order",
  "Took a plugin no customer asked for from a contested bet to a company priority",
];

export default function Home() {
  return (
    <div className="wrapper flex flex-col gap-16 py-14">
      <NavRow />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">
          <div className="flex max-w-xl flex-col gap-6">
            <h1 className="text-[28px] font-semibold leading-tight text-foreground">
              I design products where humans and AI share the work.
            </h1>
            <div className="prose-body text-base">
              <p>
                Working as Lead Product Designer at Monotype.
                <br />I lead human-centred AI products and in-workflow typography tools.
              </p>
              <p className="mt-4">
                Before this, I worked at Zomato, Spinny, DotPe, and TOPPEQ.
                <br />My experience spans HAI, enterprise SaaS, consumer tech, fintech, and logistics.
              </p>
            </div>
          </div>
          <div className="flex flex-shrink-0 flex-col items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile.png"
              alt="Kaartik Malhotra"
              className="h-[232px] w-[220px] rounded-2xl object-cover"
            />
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/linkedin.png" alt="LinkedIn" className="size-6" />
              </a>
              <a href="mailto:kaartikmalhotra1@gmail.com">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/envelope.png" alt="Email" className="size-6" />
              </a>
            </div>
          </div>
        </div>

        <Divider />

        <div className="flex flex-col gap-6">
          <h2 className="text-[23px] font-semibold text-foreground">Highlights</h2>
          <div className="flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full bg-surface-secondary px-3 py-2 text-sm text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <Divider />

        <div className="flex flex-col gap-6">
          <h2 className="text-[23px] font-semibold text-foreground">Selected work</h2>
          <div className="flex flex-col gap-10">
            {homeFeatured.map((cs) => (
              <div key={cs.slug} className="flex flex-col items-center gap-10 sm:flex-row">
                <div className="w-full flex-shrink-0 sm:w-[428px]">
                  <CaseStudyMedia caseStudy={cs} />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="text-[19px] font-semibold text-foreground">{cs.title}</h3>
                  <p className="text-sm text-foreground-tertiary">
                    {cs.summary}
                    {cs.status ? <span className="block mt-2">{cs.status}</span> : null}
                  </p>
                  <Link href={`/case-studies/${cs.slug}`} className="w-fit">
                    <Button label="Read more" variant="secondary" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link href="/case-studies" className="mx-auto w-fit">
            <Button label="Read all case studies" variant="primary" />
          </Link>
        </div>

        <Divider />

        <PageFooter />
      </div>
    </div>
  );
}
