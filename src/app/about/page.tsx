import type { Metadata } from "next";
import { Breadcrumb } from "@/components/pages/services/_shared/Breadcrumb";
import { JsonLd } from "@/components/pages/services/_shared/JsonLd";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { WorkflowVisual } from "@/components/shared/WorkflowVisual";
import { CTAButton } from "@/components/shared/CTAButton";
import {
  Scale,
  Languages,
  MapPin,
  CheckCircle2,
  Lock,
  FileBadge,
  AlertOctagon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Pactum — the EU PPWR advisory built for packaging-intensive groups",
  description:
    "Pactum is the pure-play advisory for Regulation (EU) 2025/40. Founded 2025 in Brussels, we turn the PPWR into a costed, audit-ready compliance roadmap.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Pactum — the EU PPWR advisory",
    description:
      "Pure-play PPWR advisory founded 2025 in Brussels. Regulatory lawyers, packaging engineers and supply-chain economists, working article by article.",
    url: "https://pactum-advisory.eu/about",
    type: "website",
  },
};

const VALUES = [
  {
    icon: Scale,
    title: "Article-precise",
    body: "Every recommendation cites the article, recital or Annex of Regulation (EU) 2025/40 it derives from. No abstract advice.",
  },
  {
    icon: Lock,
    title: "NDA-first",
    body: "Engagements open under a mutual non-disclosure agreement. Your packaging portfolio is competitive intelligence; we treat it as such.",
  },
  {
    icon: Languages,
    title: "Plain English",
    body: "We deliver to packaging directors and general counsels, not to other lawyers. The roadmap reads like an operating plan.",
  },
  {
    icon: MapPin,
    title: "EU-wide",
    body: "Brussels base, project teams across DE, FR, NL, IT and ES. We follow Member State transpositions in real time.",
  },
];

const STANDARDS = [
  "ISO 9001 (quality management) — certification programme targeted for 2026.",
  "GDPR-compliant data handling. Client packaging data stored in EU-region encrypted environments.",
  "No client conflict policy: we decline mandates where two direct competitors are active in the same SKU category.",
  "Annual independent review of our methodology against the latest delegated and implementing acts.",
];

const NEGATIVES = [
  "We do not do PR.",
  "We do not do greenwashing.",
  "We do not do generic ESG reporting.",
  "We do not bill for travel.",
  "We do not gate insights behind paywalls.",
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f5f7f4] to-white pt-12 pb-20 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-[1120px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            About Pactum Advisory
          </span>
          <h1
            className="mt-5 text-4xl md:text-6xl font-bold text-foreground leading-[1.05] max-w-4xl"
            style={{ fontFamily: "var(--font-ginto-nord)" }}
          >
            We are the PPWR specialists you wish your packaging vendor was.
          </h1>
          <p
            className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            Pactum is a pure-play advisory firm working exclusively on Regulation (EU) 2025/40 — the
            Packaging and Packaging Waste Regulation. We turn the text of the Regulation into costed,
            audit-ready operating plans for FMCG, automotive, e-commerce, pharmaceutical and beverage
            groups operating in the European Union.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CTAButton href="/contact">Book a working session</CTAButton>
            <CTAButton href="/resources/ppwr-readiness-assessment" variant="ghost">
              Free PPWR readiness check
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-[#f5f7f4] border border-border px-3 py-1 text-xs font-semibold text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Founding story
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Founded in 2025 in Brussels, on the day the Regulation entered into force.
          </h2>
          <div
            className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <p>
              Pactum Advisory was incorporated in early 2025, weeks after Regulation (EU) 2025/40 was
              published in the Official Journal on 22 January 2025 and entered into force on 11
              February 2025. The decision to base the firm in Brussels was deliberate: proximity to the
              European Commission, the European Parliament and the standardisation bodies that will
              draft the thirty-plus delegated and implementing acts the Regulation depends on.
            </p>
            <p>
              The founding team is interdisciplinary by design. Regulatory lawyers from EU competition
              and product compliance practices, packaging engineers from FMCG, beverage and
              pharmaceutical groups, and supply-chain economists with rPET, paper and aluminium sourcing
              experience. None of us came from the sustainability-consulting circuit; that is a feature,
              not a flaw. The PPWR is not an ESG framework — it is binding product-compliance law with
              fines, recalls and market withdrawals attached.
            </p>
            <p>
              Our first engagements were unannounced. Three European brand owners, mid-size and
              publicly listed, asked the same question: &ldquo;What does this Regulation actually
              require us to do, in order, by when, and what does it cost?&rdquo; The answer became the
              <a href="/services/ppwr-gap-analysis" className="text-[#10b981] underline-offset-2 hover:underline">
                {" "}five-day costed roadmap
              </a>{" "}
              that is now our standard entry product. We held the price flat and the scope fixed because
              packaging directors are time-poor and finance teams need predictable line items.
            </p>
            <p>
              We do not publish a leadership wall of headshots. The client outcome is the article-by-article
              compliance plan, the
              {" "}
              <a href="/services/declaration-of-conformity" className="text-[#10b981] underline-offset-2 hover:underline">
                Declaration of Conformity technical file
              </a>{" "}
              and the
              {" "}
              <a href="/services/recyclability-assessment" className="text-[#10b981] underline-offset-2 hover:underline">
                recyclability grading
              </a>{" "}
              — not a personality. The team is named in writing on every Statement of Work and works
              under the same NDA the client signs.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology — embed WorkflowVisual */}
      <WorkflowVisual />

      <section className="bg-[#f5f7f4] py-16 md:py-20">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Beyond the five days
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Retainer for delegated and implementing acts watch.
          </h2>
          <p
            className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            The five-day roadmap is the entry product. Most clients then move onto a quarterly retainer
            in which we monitor the European Commission&apos;s thirty-plus pending delegated and
            implementing acts — design-for-recycling criteria methodology, recycled content calculation
            and verification, Digital Product Passport specifications, Annex V update mechanics — and
            translate each new draft into a one-page operational impact note for the steering
            committee. Member State transposition (penalties under Article 68, EPR fee structures under
            Article 45, DRS schemes under Article 50) is tracked country by country. When a draft goes
            to public consultation, we file the brand owner&apos;s position. When the final act is
            published, the roadmap is updated within 48 hours.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="text-center">
            <span
              className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              How we work
            </span>
            <h2
              className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Four operating values, applied on every engagement.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-white p-6 transition-all hover:border-[#10b981]/40 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#d1fae5] text-[#065f46]">
                  <v.icon size={20} />
                </div>
                <h3
                  className="mt-5 text-lg font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="mt-2 text-sm text-muted-foreground leading-relaxed"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="bg-[#0f1a16] py-20 md:py-24 text-white">
        <div className="mx-auto max-w-[920px] px-6 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <div>
            <FileBadge size={32} className="text-[#10b981]" />
            <h2
              className="mt-5 text-3xl md:text-4xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Standards we hold ourselves to.
            </h2>
            <p
              className="mt-4 text-base text-white/70 leading-relaxed"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              Pactum is a regulated-firm-grade vendor. We document our processes the way we ask our
              clients to document theirs.
            </p>
          </div>
          <ul className="space-y-4">
            {STANDARDS.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-[#10b981]" />
                <span
                  className="text-base text-white/85 leading-relaxed"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we are not */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-red-50 border border-red-100 px-3 py-1 text-xs font-semibold text-red-700"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Who we are not
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            What you will never see on a Pactum invoice.
          </h2>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {NEGATIVES.map((n) => (
              <li
                key={n}
                className="flex items-start gap-3 rounded-2xl border border-border bg-[#f5f7f4] p-4"
              >
                <AlertOctagon size={18} className="mt-0.5 flex-shrink-0 text-red-500" />
                <span
                  className="text-base font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {n}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            <a
              href="/resources/ppwr-timeline"
              className="text-[#10b981] underline-offset-2 hover:underline"
            >
              See the 2025-2040 timeline
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href="/resources/ppwr-faq"
              className="text-[#10b981] underline-offset-2 hover:underline"
            >
              40+ PPWR FAQs
            </a>
            <span className="text-muted-foreground">·</span>
            <a
              href="/services/ppwr-gap-analysis"
              className="text-[#10b981] underline-offset-2 hover:underline"
            >
              The 5-day gap analysis
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Pactum Advisory",
          url: "https://pactum-advisory.eu/about",
          mainEntity: {
            "@type": "Organization",
            name: "Pactum",
            legalName: "Pactum Advisory",
            url: "https://pactum-advisory.eu",
            email: "advisory@pactum-advisory.eu",
            foundingDate: "2025",
            foundingLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brussels",
                addressCountry: "BE",
              },
            },
            description:
              "Pure-play advisory on Regulation (EU) 2025/40 — Packaging and Packaging Waste Regulation.",
            knowsAbout: [
              "Regulation (EU) 2025/40",
              "Packaging recyclability",
              "Recycled content in plastic packaging",
              "PFAS in food-contact packaging",
              "Declaration of Conformity",
              "Extended Producer Responsibility",
              "Reuse and refill systems",
            ],
            sameAs: ["https://www.linkedin.com/company/pactum-advisory"],
          },
        }}
      />
    </>
  );
}
