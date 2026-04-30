import type { Metadata } from "next";
import { ExternalLink, Hourglass } from "lucide-react";
import { Breadcrumb } from "@/components/pages/services/_shared/Breadcrumb";
import { JsonLd, buildFaqSchema } from "@/components/pages/services/_shared/JsonLd";
import { BigBlogCTA } from "@/components/shared/BigBlogCTA";
import { Timeline } from "@/components/pages/resources/Timeline";

export const metadata: Metadata = {
  title: "PPWR timeline 2025–2040 — every milestone, article and deadline",
  description:
    "PPWR timeline: every Regulation (EU) 2025/40 deadline from 11 February 2025 entry into force to the 2040 reuse and recycled-content stretch targets.",
  alternates: { canonical: "/resources/ppwr-timeline" },
  openGraph: {
    title: "PPWR timeline 2025–2040",
    description:
      "Every PPWR milestone with the article reference, the operational implication and the linked Pactum service.",
    url: "https://pactum-advisory.eu/resources/ppwr-timeline",
    type: "article",
  },
};

const PENDING_ACTS = [
  {
    name: "Design-for-recycling criteria methodology (Art. 6)",
    body: "Implementing act setting the methodology for grading recyclability performance Class A, B or C. Expected by end-2027.",
  },
  {
    name: "Recycled-content calculation and verification (Art. 7)",
    body: "Implementing act on the calculation methodology, mass balance rules and chain-of-custody verification for plastic recyclate. Critical for 2030 target compliance.",
  },
  {
    name: "Sustainability requirements for compostable packaging (Art. 9)",
    body: "Delegated act specifying which packaging categories must be compostable in industrial composting and the testing standards that apply.",
  },
  {
    name: "Empty space ratio measurement (Art. 24)",
    body: "Implementing act on the harmonised method for measuring the empty space ratio in grouped, transport and e-commerce packaging.",
  },
  {
    name: "Reuse system design and labelling (Art. 30)",
    body: "Delegated act specifying the criteria a reuse system must satisfy, the labelling required, and the conditions for Member State derogations from beverage reuse targets.",
  },
  {
    name: "Digital Product Passport detailed specifications (Art. 12)",
    body: "Implementing act on the QR code or digital data carrier format, the data fields, and the access governance.",
  },
  {
    name: "Eco-modulation of EPR fees (Art. 45)",
    body: "Implementing act setting the harmonised parameters for eco-modulation of EPR fees based on recyclability class and recycled content.",
  },
  {
    name: "Single-use plastic beverage bottle DRS reporting (Art. 50)",
    body: "Implementing act on the data Member States must publish to demonstrate progress against the 90% separate-collection target.",
  },
];

const FAQS = [
  {
    question: "When did the PPWR enter into force?",
    answer:
      "Regulation (EU) 2025/40 entered into force on 11 February 2025, the twentieth day after publication in the Official Journal on 22 January 2025.",
  },
  {
    question: "When does the PPWR generally apply?",
    answer:
      "General application is 12 August 2026, eighteen months after entry into force, except for provisions with a different application date — Article 7 recycled-content targets and Article 6 recyclability thresholds apply from 1 January 2030.",
  },
  {
    question: "What changes on 12 August 2026?",
    answer:
      "Article 5 PFAS restrictions in food-contact packaging take effect (25 ppb / 250 ppb / 50 ppm thresholds). Annex V single-use format bans apply (under-1.5 kg fresh produce films, on-premise HORECA single-use, hotel miniature toiletries, condiment sachets, very lightweight carrier bags). HORECA must offer reusable take-away containers.",
  },
  {
    question: "What changes on 1 January 2030?",
    answer:
      "Every packaging unit on the EU market must be at least Class C recyclable (Article 6). Recycled-content targets apply to plastic packaging: 30% contact-sensitive PET, 10% other contact-sensitive plastics, 30% beverage bottles, 35% other plastic (Article 7). Reuse first targets: 40% transport and grouped, 10% beverage (Article 29). Refill stations required at retailers with ≥400 m² surface area selling food or detergents (Article 30).",
  },
  {
    question: "What changes on 1 January 2038?",
    answer:
      "Class C recyclability is no longer permitted. Only Class A (≥95%) and Class B (≥80%) packaging may be placed on the EU market. Class C packaging is withdrawn from the market.",
  },
];

export default function TimelinePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/ppwr-timeline" },
          { label: "PPWR Timeline 2025–2040" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f7f4] to-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Resource · Pillar
          </span>
          <h1
            className="mt-5 text-4xl md:text-6xl font-bold text-foreground leading-[1.05] max-w-4xl"
            style={{ fontFamily: "var(--font-ginto-nord)" }}
          >
            PPWR Timeline 2025–2040 — every milestone, every article, every action.
          </h1>
          <p
            className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            The complete deadline schedule for Regulation (EU) 2025/40, with article references and the
            operational consequence of each milestone for packaging-intensive companies operating in the
            European Union.
          </p>
        </div>
      </section>

      <section className="bg-white pb-12">
        <div className="mx-auto max-w-[1120px] px-6 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
          {/* Side TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <p
                className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground mb-4"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                On this page
              </p>
              <ul className="space-y-1.5 text-sm">
                {[
                  ["intro", "Identity of the Regulation"],
                  ["timeline", "Milestones 2025–2040"],
                  ["read-time", "How to read your remaining time"],
                  ["pending-acts", "Pending Commission acts"],
                  ["faq", "FAQ"],
                ].map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="block border-l-2 border-border py-1.5 pl-3 text-muted-foreground hover:text-foreground hover:border-foreground/30"
                      style={{ fontFamily: "var(--font-maison-neue)" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div>
            <section id="intro">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                Identity of the Regulation
              </h2>
              <p
                className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                Regulation (EU) 2025/40 of the European Parliament and of the Council on packaging and
                packaging waste — CELEX 32025R0040 — replaces Directive 94/62/EC and amends Regulation
                (EU) 2019/1020 and Directive (EU) 2019/904. It is binding in its entirety and directly
                applicable in every Member State. The full text is available on{" "}
                <a
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32025R0040"
                  target="_blank"
                  rel="noopener"
                  className="text-[#10b981] underline-offset-2 hover:underline inline-flex items-center gap-1"
                >
                  EUR-Lex
                  <ExternalLink size={12} />
                </a>
                .
              </p>
              <p
                className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                The schedule below lists the dates that matter operationally, the articles that command
                them, and the action a brand owner, importer, distributor or fulfilment service provider
                must have completed by each. Use it as a planning baseline; pair it with our{" "}
                <a
                  href="/resources/ppwr-readiness-assessment"
                  className="text-[#10b981] underline-offset-2 hover:underline"
                >
                  free readiness assessment
                </a>{" "}
                or the{" "}
                <a
                  href="/services/ppwr-gap-analysis"
                  className="text-[#10b981] underline-offset-2 hover:underline"
                >
                  five-day gap analysis
                </a>{" "}
                for an SKU-level read.
              </p>
            </section>

            {/* Timeline */}
            <section id="timeline" className="mt-14">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                Milestones 2025–2040
              </h2>
              <div className="mt-8">
                <Timeline />
              </div>
            </section>

            {/* How to read remaining time */}
            <section id="read-time" className="mt-16">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                How to read your remaining time
              </h2>
              <div className="mt-5 rounded-3xl border border-border bg-[#f5f7f4] p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#10b981] text-white">
                    <Hourglass size={20} />
                  </div>
                  <div
                    className="space-y-4 text-base leading-relaxed text-muted-foreground"
                    style={{ fontFamily: "var(--font-maison-neue)" }}
                  >
                    <p>
                      Three deadlines drive almost every PPWR programme. Mark them on the same calendar
                      as your CAPEX cycles.
                    </p>
                    <p>
                      <strong className="text-foreground">12 August 2026</strong> is the
                      &ldquo;PFAS, Annex V and HORECA&rdquo; cliff — short lead time, binary
                      enforcement, recall risk under Article 68. Treat it as the deadline behind which
                      nothing can slip.
                    </p>
                    <p>
                      <strong className="text-foreground">1 January 2030</strong> is the
                      &ldquo;recyclability and recycled content&rdquo; cliff — long lead time, requires
                      sourcing contracts and tooling redesign now. Material decisions made in 2026 lock
                      compliance in 2030.
                    </p>
                    <p>
                      <strong className="text-foreground">1 January 2038</strong> is the &ldquo;Class C
                      sunset&rdquo; — the eight years between 2030 and 2038 are your redesign runway.
                      Anything still grading C in late 2029 needs a redesign budget approved.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Pending acts */}
            <section id="pending-acts" className="mt-16">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                Pending Commission delegated and implementing acts
              </h2>
              <p
                className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                The Regulation depends on the Commission adopting more than thirty delegated and
                implementing acts. The eight below are the ones that most often appear in our client
                steering committees because they materially change the cost of compliance.
              </p>
              <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {PENDING_ACTS.map((a) => (
                  <li
                    key={a.name}
                    className="rounded-2xl border border-border bg-white p-5"
                  >
                    <p
                      className="text-sm font-bold text-foreground"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {a.name}
                    </p>
                    <p
                      className="mt-2 text-sm text-muted-foreground leading-relaxed"
                      style={{ fontFamily: "var(--font-maison-neue)" }}
                    >
                      {a.body}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section id="faq" className="mt-16">
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                Frequently asked questions
              </h2>
              <dl className="mt-8 space-y-5">
                {FAQS.map((f) => (
                  <div
                    key={f.question}
                    className="rounded-2xl border border-border bg-white p-5"
                  >
                    <dt
                      className="text-base font-bold text-foreground"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {f.question}
                    </dt>
                    <dd
                      className="mt-2 text-sm md:text-base leading-relaxed text-muted-foreground"
                      style={{ fontFamily: "var(--font-maison-neue)" }}
                    >
                      {f.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </section>

      <BigBlogCTA
        title="Get the article-by-article roadmap"
        description="The five-day Pactum gap analysis maps every SKU in your portfolio against the deadlines on this page and produces a costed, owner-by-owner action plan."
        ctaLabel="Book a working session"
        ctaHref="/services/ppwr-gap-analysis"
      />

      <JsonLd data={buildFaqSchema(FAQS)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "PPWR Timeline 2025–2040",
          description:
            "Every Regulation (EU) 2025/40 deadline with article reference and operational implication.",
          author: {
            "@type": "Organization",
            name: "Pactum Advisory",
            url: "https://pactum-advisory.eu",
          },
          publisher: {
            "@type": "Organization",
            name: "Pactum Advisory",
            url: "https://pactum-advisory.eu",
          },
          datePublished: "2025-02-15",
          dateModified: "2025-02-15",
          mainEntityOfPage: "https://pactum-advisory.eu/resources/ppwr-timeline",
        }}
      />
    </>
  );
}
