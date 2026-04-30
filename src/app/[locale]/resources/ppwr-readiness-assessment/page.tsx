import type { Metadata } from "next";
import { ClipboardList, Send, FileText, Mail, ShieldCheck } from "lucide-react";
import { Breadcrumb } from "@/components/pages/services/_shared/Breadcrumb";
import { JsonLd } from "@/components/pages/services/_shared/JsonLd";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { ReadinessQuiz } from "@/components/pages/resources/ReadinessQuiz";

export const metadata: Metadata = {
  title: "Free PPWR readiness check — 10-minute self-assessment with PDF report",
  description:
    "Score your readiness against Regulation (EU) 2025/40 in 10 minutes. 12 article-by-article questions, indicative score, PDF report delivered by email.",
  alternates: { canonical: "/resources/ppwr-readiness-assessment" },
  openGraph: {
    title: "Free PPWR readiness check",
    description:
      "Twelve article-by-article questions, indicative score, PDF report by email. Indicative only — not legal advice.",
    url: "https://pactum-advisory.eu/resources/ppwr-readiness-assessment",
    type: "website",
  },
};

const STEPS = [
  {
    icon: ClipboardList,
    title: "Self-assess",
    body: "12 yes / no / I do not know questions covering Articles 5, 6, 7, 12, 18, 24, 25, 29, 30, 39 and 50.",
  },
  {
    icon: Send,
    title: "Submit",
    body: "Enter your work email. We compute an indicative readiness score and queue the PDF report.",
  },
  {
    icon: FileText,
    title: "Get the PDF",
    body: "A 12-page article-by-article report lands in your inbox within minutes — Track A, B or C with priority articles.",
  },
];

export default function ReadinessPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/ppwr-timeline" },
          { label: "Free PPWR readiness check" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f7f4] to-white pt-12 pb-12 md:pt-16 md:pb-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Lead magnet · Free
          </span>
          <h1
            className="mt-5 text-4xl md:text-6xl font-bold text-foreground leading-[1.05] max-w-4xl"
            style={{ fontFamily: "var(--font-ginto-nord)" }}
          >
            10-minute PPWR readiness check. PDF report by email.
          </h1>
          <p
            className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            Twelve article-by-article questions covering Articles 5, 6, 7, 12, 18, 24, 25, 29, 30, 39
            and 50 of Regulation (EU) 2025/40. Designed for packaging directors, heads of
            sustainability, general counsels and compliance officers at European groups.
          </p>
        </div>
      </section>

      {/* 3-step explainer */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f1a16] text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {i + 1}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d1fae5] text-[#065f46]">
                    <s.icon size={18} />
                  </div>
                </div>
                <h3
                  className="mt-4 text-lg font-bold text-foreground"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-2 text-sm text-muted-foreground leading-relaxed"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz + side info */}
      <section className="bg-[#f5f7f4] py-12 md:py-16">
        <div className="mx-auto max-w-[1120px] px-6 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8">
          <ReadinessQuiz />

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-white p-6 md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d1fae5] text-[#065f46]">
                <Mail size={20} />
              </div>
              <h2
                className="mt-5 text-xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                What is in the PDF report?
              </h2>
              <ul
                className="mt-4 space-y-2.5 text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                <li>· Track A / B / C readiness verdict for your portfolio.</li>
                <li>· Article-by-article gap interpretation for your 12 answers.</li>
                <li>· Priority articles by deadline (12 August 2026 vs 1 January 2030).</li>
                <li>· A sample 24-month roadmap to use as a planning baseline.</li>
                <li>· Links to the relevant Pactum services for each gap.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-white p-6 md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d1fae5] text-[#065f46]">
                <ShieldCheck size={20} />
              </div>
              <h2
                className="mt-5 text-xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                What we do not do
              </h2>
              <p
                className="mt-3 text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                We do not subscribe you to a newsletter. We do not chase you with sales emails. The PDF
                lands once. If you want a deeper read, you book a working session yourself.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a
                  href="/resources/ppwr-timeline"
                  className="text-[#10b981] underline-offset-2 hover:underline"
                >
                  Timeline 2025–2040
                </a>
                <a
                  href="/resources/ppwr-faq"
                  className="text-[#10b981] underline-offset-2 hover:underline"
                >
                  PPWR FAQ
                </a>
                <a
                  href="/services/ppwr-gap-analysis"
                  className="text-[#10b981] underline-offset-2 hover:underline"
                >
                  Gap analysis service
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ContactCTA
        title="Want a portfolio-specific read?"
        description="The 10-minute check is indicative. The five-day Pactum gap analysis runs the same diagnostic against every SKU in your portfolio with a costed roadmap."
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "PPWR readiness assessment",
          url: "https://pactum-advisory.eu/resources/ppwr-readiness-assessment",
          description:
            "Free 10-minute PPWR readiness check. Twelve article-by-article questions on Regulation (EU) 2025/40, indicative score, PDF report by email.",
          isPartOf: {
            "@type": "WebSite",
            name: "Pactum Advisory",
            url: "https://pactum-advisory.eu",
          },
        }}
      />
    </>
  );
}
