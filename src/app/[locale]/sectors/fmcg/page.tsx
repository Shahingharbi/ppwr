import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { FAQ } from "@/components/shared/FAQ";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { siteConfig } from "@/lib/site-config";
import { FmcgStats } from "@/components/pages/sectors/fmcg/FmcgStats";

const PAGE_PATH = "/sectors/fmcg";
const SECTOR_LABEL = "FMCG & food and beverage";

export const metadata: Metadata = {
  title: "PPWR for FMCG — PFAS, recycled content, beverage reuse, single-use bans",
  description:
    "How Regulation (EU) 2025/40 reshapes branded food, beverage, household and personal-care packaging — Article 5 PFAS, Article 7 PET targets, Article 29 reuse and Article 25 single-use bans for FMCG groups.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "article",
    url: `${siteConfig.url}${PAGE_PATH}`,
    title: "PPWR for FMCG — PFAS, recycled content, beverage reuse, single-use bans",
    description:
      "How Regulation (EU) 2025/40 reshapes branded food, beverage, household and personal-care packaging — Article 5 PFAS, Article 7 PET targets, Article 29 reuse and Article 25 single-use bans for FMCG groups.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "PPWR advisory for FMCG — Pactum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPWR for FMCG — Pactum",
    description:
      "Regulation (EU) 2025/40 applied to branded food, beverage, household and personal-care packaging.",
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Sectors", href: "/sectors/fmcg" },
  { label: SECTOR_LABEL },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbItems.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.label,
    ...(it.href ? { item: `${siteConfig.url}${it.href}` } : {}),
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PPWR advisory for FMCG",
  serviceType: "PPWR advisory for FMCG",
  provider: {
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
  },
  areaServed: { "@type": "Place", name: "European Union" },
  description:
    "Pure-play advisory on Regulation (EU) 2025/40 for branded and private-label FMCG groups — PFAS in food contact (Article 5), recycled content in PET and other plastics (Article 7), beverage and HORECA reuse (Article 29), single-use bans (Article 25 / Annex V) and Declaration of Conformity (Article 39).",
  url: `${siteConfig.url}${PAGE_PATH}`,
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "FMCG manufacturers — food, beverage, household care, personal care",
  },
};

const articlesThatBite = [
  {
    article: "Article 5",
    headline:
      "Intentionally added PFAS prohibited in food-contact packaging at 25 ppb / 250 ppb / 50 ppm",
    deadline: "Applies from 12 August 2026",
    action:
      "We audit greaseproof papers, bake-out boards, microwave susceptors and printing inks against the targeted-analysis and total-fluorine indicator thresholds, then run a substitution and supplier-clause programme.",
    serviceHref: "/services/pfas-compliance",
    serviceLabel: "PFAS Compliance",
  },
  {
    article: "Article 7",
    headline:
      "PET bottles 30% recycled content (2030), 65% (2040); other plastics 35% / 65%",
    deadline: "From 1 January 2030, then 1 January 2040",
    action:
      "We model food-grade rPET sourcing, build mass-balance contracts with ISCC PLUS or CEN/TS certification and protect supply ahead of the 2028 price spike.",
    serviceHref: "/services/recycled-content-roadmap",
    serviceLabel: "Recycled Content Roadmap",
  },
  {
    article: "Article 29",
    headline:
      "Beverage reuse 10% by 2030, 40% by 2040 (water, soft drinks, beer, wine, spirits)",
    deadline: "From 1 January 2030, then 1 January 2040",
    action:
      "We design the refillable glass and PET architecture, the deposit interface with national DRS and the unit economics that hold under multi-country SKU portfolios.",
    serviceHref: "/services/reuse-targets-strategy",
    serviceLabel: "Reuse & Refill Strategy",
  },
  {
    article: "Article 25 / Annex V",
    headline:
      "Single-use bans: HORECA on-premise, fruit & veg under 1.5 kg, hotel miniatures, sachets",
    deadline: "Applies from 12 August 2026",
    action:
      "We re-classify every Annex-V exposed SKU, validate exemptions and re-engineer formats — refillable dispensers, primary food-contact carve-outs and reusable HORECA service.",
    serviceHref: "/services/ppwr-gap-analysis",
    serviceLabel: "PPWR Gap Analysis",
  },
  {
    article: "Article 6",
    headline:
      "Recyclable-by-design grading (Class A/B/C) for every packaging unit",
    deadline:
      "Class C minimum from 1 January 2030; Class C banned from 1 January 2038",
    action:
      "We grade flexibles, multi-layer pouches, sleeves and full-shrink labels against the design-for-recycling criteria and engineer Class C SKUs up to B.",
    serviceHref: "/services/recyclability-assessment",
    serviceLabel: "Recyclability Assessment",
  },
];

const sectorRisks = [
  "Multi-country SKU proliferation: a yoghurt range with twelve flavours, three pack sizes and seven national variants generates hundreds of distinct packaging units, each requiring its own Article 39 Declaration of Conformity and Article 6 grading.",
  "Retailer compliance pressure: French, German and Dutch retailers are already running supplier audits ahead of 12 August 2026 and de-listing private-label SKUs that cannot evidence Annex V compliance or PFAS-free food contact.",
  "Branded vs. private-label split responsibility: under Article 3 and Article 4, both the brand owner and the private-label retailer can qualify as obligated economic operators — contract clauses must be re-written to allocate the technical-documentation burden cleanly.",
  "Beverage reuse vs. existing one-way bottling lines: the 10% reuse target by 2030 collides head-on with single-use PET capacity built around hot-fill and aseptic, and the derogation regime under Article 29(8) requires Member State intervention rather than industry self-declaration.",
  "Eco-modulation under Article 45: PRO fees will be modulated by recyclability class and recycled content from 2026 onward — a Class-C SKU can pay 2-4x the Class-A fee in markets like France, Italy and Spain, multiplying the cost of inaction.",
  "Recyclable claim substantiation: under Article 7(7) and Article 12, recycled-content and recyclability claims must be substantiated with documented evidence — generic on-pack claims (“recyclable”, “made from 30% recycled material”) without backing files trigger withdrawal under Article 68.",
];

const sectorFaqs = [
  {
    question:
      "Does the 12 August 2026 PFAS ban cover all food-contact packaging or only specific formats?",
    answer:
      "Article 5 prohibits intentionally added PFAS across all food-contact packaging placed on the EU market from 12 August 2026, regardless of format. The thresholds — 25 ppb for any individual PFAS by targeted analysis, 250 ppb for the sum of PFAS, and 50 ppm of total fluorine as an indicator — apply to the packaging unit as placed on the market. Greaseproof paper, bake-out boards, microwave susceptors, fluoropolymer-coated lids and certain inks are the highest-risk items.",
  },
  {
    question:
      "Are private-label and own-brand packaging treated the same way under the PPWR?",
    answer:
      "Yes. Article 3 and Article 4 do not distinguish between branded and private-label packaging. Both can place packaging on the market through different operators in the chain. In practice, the brand owner — whether a national CPG group or a retailer’s private-label arm — bears the Declaration of Conformity obligation under Article 39 unless contractually re-allocated to a co-manufacturer or importer.",
  },
  {
    question:
      "Do the Article 7 recycled-content targets apply per SKU, per product range or per plant?",
    answer:
      "Article 7 sets the minimum recycled-content share calculated as an average per manufacturing plant and per calendar year, per type of packaging. So a single underperforming SKU can be balanced inside a plant’s annual portfolio, but a plant that misses the average is non-compliant for that year. We build the plant-level model and sourcing plan, not just SKU-level targets.",
  },
  {
    question:
      "What does Annex V mean for HORECA brands and out-of-home formats?",
    answer:
      "Annex V bans single-use plastic packaging used for on-premise consumption in hotels, restaurants and cafés from 12 August 2026, alongside hotel miniature toiletries under 100 ml, single-use condiment sachets and very lightweight plastic carrier bags. Article 29 then requires HORECA take-away to offer a reusable container option. Brands selling into HORECA need a parallel SKU strategy: reusable dispensers, refill formats and bulk-pack alternatives.",
  },
  {
    question:
      "How fast does eco-modulation of EPR fees materialise after 12 August 2026?",
    answer:
      "Article 45 obliges Member States to modulate EPR fees on the basis of recyclability performance class and presence of substances of concern, with the methodology to be set by the Commission and transposed nationally. France (Citeo) and the Netherlands (Verpact) already publish modulated tariffs ahead of the harmonised criteria; Germany (ZSVR) and Italy (CONAI) are aligning their schemes during 2025-2026. Practical impact on Class-C SKUs is felt in 2026-2027, well before the 2030 binding cliff.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sectorFaqs.map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer,
    },
  })),
};

export default function FmcgSectorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1280px] px-6 pt-6"
        style={{ fontFamily: "var(--font-maison-neue)" }}
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {breadcrumbItems.map((it, i) => {
            const isLast = i === breadcrumbItems.length - 1;
            return (
              <li key={`${it.label}-${i}`} className="flex items-center gap-1.5">
                {it.href && !isLast ? (
                  <a href={it.href} className="hover:text-foreground transition-colors">
                    {it.label}
                  </a>
                ) : (
                  <span
                    className={isLast ? "text-foreground font-semibold" : undefined}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {it.label}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight
                    size={14}
                    className="text-muted-foreground/60"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <PageHero
        eyebrow="SECTOR"
        title="PPWR for FMCG and food &amp; beverage"
        subtitle="Regulation (EU) 2025/40 lands across food, beverage, household care and personal care simultaneously — PFAS in food contact from August 2026, PET recycled content from 2030, beverage reuse targets, and Annex V single-use bans. Branded and private-label, every SKU is in scope."
        primaryCTA={{ href: "/contact", label: "Book a working session" }}
        secondaryCTA={{
          href: "/resources/ppwr-readiness-assessment",
          label: "Free PPWR readiness check",
        }}
        imageSrc="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80&auto=format&fit=crop"
      />

      {/* What PPWR means for FMCG */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            What PPWR means for FMCG
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            The Regulation hits FMCG on five fronts at once.
          </h2>

          <div
            className="mt-8 space-y-5 text-base md:text-[17px] leading-relaxed text-foreground/85"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <p>
              Regulation (EU) 2025/40, published in OJ L on 22 January 2025 and entered into
              force on 11 February 2025, applies generally from 12 August 2026. For
              fast-moving consumer goods groups — branded and private-label, across food,
              beverage, household care and personal care — the regulation lands harder than
              for most other sectors because it activates on five different vectors
              simultaneously, with different deadlines and different evidence standards on
              each.
            </p>
            <p>
              The first vector is Article 5: from 12 August 2026 packaging must not contain
              intentionally added PFAS in food contact above 25 ppb for any individual PFAS
              (targeted analysis), 250 ppb for the sum of PFAS, or 50 ppm of total fluorine
              as an indicator. Greaseproof papers, bake-out boards, microwave susceptors,
              moulded-fibre meal trays and fluoropolymer-coated lids are the highest-risk
              substrates. Substitution exists, but qualifying replacement materials for
              barrier and grease performance takes 12-18 months — meaning the work has to
              be running now.
            </p>
            <p>
              The second vector is Article 7. From 1 January 2030, plastic packaging must
              meet minimum recycled-content thresholds: 30% for contact-sensitive PET
              (rising to 50% by 1 January 2040), 30% for single-use plastic beverage bottles
              (rising to 65%), 10% for contact-sensitive packaging in other plastics (rising
              to 25%) and 35% for other plastic packaging (rising to 65%). Food-grade rPET
              supply is the binding constraint, and the brands that lock in long-term
              supply contracts in 2025-2026 will have a structural cost advantage over those
              that buy on the spot market in 2029.
            </p>
            <p>
              The third vector is Article 29 reuse, focused on beverages: 10% of water,
              soft drinks, beer, wine and spirits packaging must be reusable from 1 January
              2030, rising to 40% by 1 January 2040, with Member State derogations possible
              under Article 29(8). HORECA take-away must offer a reusable container option
              from 12 August 2026, and retailers selling food and detergents in stores ≥400
              m² must offer refill from 1 January 2030. For beverage groups built on
              one-way PET, this is a capex-grade decision.
            </p>
            <p>
              The fourth vector is Article 25 and Annex V. From 12 August 2026 the
              regulation bans single-use plastic packaging for fresh fruit and vegetables
              under 1.5 kg, single-use HORECA on-premise packaging, hotel miniature
              toiletries under 100 ml, single-use condiment sachets in HORECA and grouped
              packaging used solely to encourage volume sales. The list is short but
              operationally surgical for branded ranges that lean on multi-pack promotional
              formats.
            </p>
            <p>
              The fifth vector is Article 6 grading and Article 39 Declaration of
              Conformity. Every packaging unit needs a Class A/B/C grade and a signed DoC
              before being placed on the market. For an FMCG group with thousands of
              SKUs across multiple categories, neither is a one-off task — they are
              programmes. We run them in three streams: a{" "}
              <a
                href="/services/ppwr-gap-analysis"
                className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
              >
                PPWR Gap Analysis
              </a>{" "}
              to scope, a{" "}
              <a
                href="/services/recycled-content-roadmap"
                className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
              >
                Recycled Content Roadmap
              </a>{" "}
              to source, and a{" "}
              <a
                href="/services/declaration-of-conformity"
                className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
              >
                Declaration of Conformity
              </a>{" "}
              programme to evidence.
            </p>
          </div>
        </div>
      </section>

      {/* Articles that bite hardest */}
      <section className="bg-[#f5f7f4] py-20 md:py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="max-w-3xl">
            <span
              className="inline-block rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-[#10b981]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Articles that bite hardest
            </span>
            <h2
              className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Five PPWR articles that determine your EU shelf-readiness.
            </h2>
            <p
              className="mt-4 text-base text-muted-foreground leading-relaxed"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              Each card pairs the binding obligation with the specific service we run to
              close it.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {articlesThatBite.map((card) => (
              <li
                key={card.article + card.headline}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
              >
                <span
                  className="inline-flex w-fit items-center rounded-full bg-[#0f1a16] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {card.article}
                </span>
                <h3
                  className="mt-4 text-lg font-semibold text-foreground leading-snug"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {card.headline}
                </h3>
                <p
                  className="mt-2 text-sm font-semibold text-[#065f46]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {card.deadline}
                </p>
                <p
                  className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  <span className="font-semibold text-foreground">What we do about it.</span>{" "}
                  {card.action}
                </p>
                <a
                  href={card.serviceHref}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#10b981] hover:text-[#059669]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  Go to {card.serviceLabel}
                  <ChevronRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sector-specific risks */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Sector-specific risks
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Where FMCG groups underestimate the regulation.
          </h2>

          <ul className="mt-10 space-y-4">
            {sectorRisks.map((risk, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-border bg-[#f5f7f4]/60 p-5"
              >
                <span
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#0f1a16] text-xs font-semibold text-white"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {i + 1}
                </span>
                <p
                  className="text-base leading-relaxed text-foreground/85"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {risk}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FmcgStats />

      {/* Illustrative engagement */}
      <section className="bg-[#0f1a16] py-20 md:py-28 text-white">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-[#10b981]/15 px-3 py-1 text-xs font-semibold text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Illustrative engagement, not a real client
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            How we&apos;d approach a multi-country branded food group.
          </h2>

          <div
            className="mt-8 space-y-5 text-base md:text-[17px] leading-relaxed text-white/85"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <p>
              A €4 bn branded food group with 18 categories sold in 22 EU Member States — a
              mix of chilled dairy, ambient grocery, frozen ready meals and HORECA service
              packs — comes to us nine months before the 12 August 2026 general
              application date. Their starting position: 4,200 active packaging SKUs, three
              regional R&amp;D centres running disconnected substitution programmes, and a
              category management team facing simultaneous private-label de-listing threats
              from two retail customers in France and Germany over PFAS in
              microwave-susceptor trays.
            </p>
            <p>
              We open with a 5-day costed roadmap built on Articles 5, 6, 7, 25 and 39. By
              day three we have a Class A/B/C grading on every plastic SKU, a PFAS exposure
              map across 380 food-contact substrates, an Annex V re-classification of
              promotional formats, and a category-level recycled-content gap to 2030. The
              first deliverable is a 22-page article-by-article briefing the Director of
              Packaging takes into the next category review and the next supplier
              negotiation round.
            </p>
            <p>
              From there the engagement runs in three parallel streams over twelve months:
              a PFAS-out programme (substitution, supplier clauses, COA evidence) closing
              before 12 August 2026; a food-grade rPET sourcing plan with two ISCC-PLUS
              certified suppliers locking 2027-2030 volumes; and a centralised DoC
              programme, with technical files retained for ten years per Article 40, that
              the compliance team can hand to a market-surveillance authority on demand.
              Output at month twelve: zero Annex-V-banned formats on shelf, a forecastable
              rPET path to 30% by 2030, and a defensible position with retail customers
              ahead of their 2026 supplier audits.
            </p>
          </div>
        </div>
      </section>

      <FAQ
        title="FMCG PPWR — frequently asked questions"
        items={sectorFaqs}
        id="faq"
      />

      <ContactCTA
        title="Get your branded portfolio PPWR-ready"
        description="Book a 30-minute working session. We map your packaging portfolio against Regulation (EU) 2025/40 — PFAS, recycled content, beverage reuse, single-use bans and DoC — and deliver a costed roadmap within 5 working days."
        id="contact"
      />
    </>
  );
}
