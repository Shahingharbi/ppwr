import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

import { PageHero } from "@/components/shared/PageHero";
import { FAQ } from "@/components/shared/FAQ";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { siteConfig } from "@/lib/site-config";
import { AutomotiveStats } from "@/components/pages/sectors/automotive/AutomotiveStats";

const PAGE_PATH = "/sectors/automotive";
const SECTOR_LABEL = "Automotive & mobility";

export const metadata: Metadata = {
  title: "PPWR for automotive — Tier-1 packaging, returnables, transport loops",
  description:
    "How Regulation (EU) 2025/40 reshapes Tier-1 inbound packaging, returnable container pools, recycled-content sourcing and Declaration of Conformity for automotive OEMs and suppliers.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "article",
    url: `${siteConfig.url}${PAGE_PATH}`,
    title: "PPWR for automotive — Tier-1 packaging, returnables, transport loops",
    description:
      "How Regulation (EU) 2025/40 reshapes Tier-1 inbound packaging, returnable container pools, recycled-content sourcing and Declaration of Conformity for automotive OEMs and suppliers.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "PPWR advisory for automotive — Pactum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPWR for automotive — Pactum",
    description:
      "Regulation (EU) 2025/40 applied to Tier-1 packaging, returnable pools and inbound logistics.",
  },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Sectors", href: "/sectors/automotive" },
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
  name: "PPWR advisory for automotive",
  serviceType: "PPWR advisory for automotive",
  provider: {
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
  },
  areaServed: { "@type": "Place", name: "European Union" },
  description:
    "Pure-play advisory on Regulation (EU) 2025/40 for automotive OEMs and Tier-1 suppliers — Article 6 recyclability, Article 7 recycled content, Article 24 empty space, Article 29 reuse and Article 39 Declaration of Conformity applied to inbound transport packaging and returnable container pools.",
  url: `${siteConfig.url}${PAGE_PATH}`,
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Automotive OEMs and Tier-1 suppliers",
  },
};

const articlesThatBite = [
  {
    article: "Article 24",
    headline: "Empty space ratio capped at 50% for transport packaging",
    deadline: "Applies from 12 August 2028",
    action:
      "We re-spec returnable totes, dunnage and KLT inserts so each loop sits inside the 50% limit without breaking takt-time at the line.",
    serviceHref: "/services/recyclability-assessment",
    serviceLabel: "Recyclability Assessment",
  },
  {
    article: "Article 29",
    headline: "Reuse targets 40% (2030) and 70% (2040) for transport and grouped packaging",
    deadline: "From 1 January 2030, then 1 January 2040",
    action:
      "We design pooled returnable systems across plants, including legal architecture for cross-border container pools between OEM and Tier-1 sites.",
    serviceHref: "/services/reuse-targets-strategy",
    serviceLabel: "Reuse & Refill Strategy",
  },
  {
    article: "Article 6",
    headline: "Recyclable-by-design grading (Class A/B/C) for every packaging unit",
    deadline:
      "Class C minimum from 1 January 2030; Class C banned from 1 January 2038",
    action:
      "We grade EPS, PP foam, multi-material laminates and printed corrugated against the design-for-recycling criteria and engineer Class C SKUs up to B.",
    serviceHref: "/services/recyclability-assessment",
    serviceLabel: "Recyclability Assessment",
  },
  {
    article: "Article 7",
    headline: "Recycled content thresholds for plastic transport packaging",
    deadline: "From 1 January 2030 (35%), rising to 65% by 1 January 2040",
    action:
      "We model rPP and rABS supply realities, build dual-source contracts with mass-balance certification (CEN/ISCC) and lock in volumes ahead of price spikes.",
    serviceHref: "/services/recycled-content-roadmap",
    serviceLabel: "Recycled Content Roadmap",
  },
  {
    article: "Article 39",
    headline: "Declaration of Conformity required before placing packaging on the market",
    deadline: "From 12 August 2026, retained for 10 years (Article 40)",
    action:
      "We assemble the technical file per packaging unit, draft the DoC and brief market-surveillance enquiries before they hit your Quality team.",
    serviceHref: "/services/declaration-of-conformity",
    serviceLabel: "Declaration of Conformity",
  },
];

const sectorRisks = [
  "Tier-1 supplier transport packaging reuse penalties: a missed Article 29 target on inbound flows can cascade into eco-modulation surcharges across every plant the OEM operates in the EU.",
  "Legal certainty over EU-wide pooled returnable systems: cross-border container pools between France, Germany, Spain, Czechia and Slovakia must be structured to avoid double-counting under Articles 29-30 and to satisfy Member State reporting under Article 56.",
  "JIT and just-in-sequence delivery constraints: 50% empty-space limits under Article 24 collide with mixed-load milk-runs to the line, forcing a re-engineering of dunnage and load-unit modularity.",
  "EUR-pallet vs. custom packaging trade-off: the cost-per-trip economics of custom plastic load carriers shift sharply once Article 7 rPP targets and Article 6 grading apply at 1 January 2030.",
  "Battery, electronics and high-voltage component packaging: contact-sensitive plastic parts and ATEX-rated transport packaging demand a parallel reading of the PPWR alongside Regulation (EU) 2023/1542 on batteries.",
  "Intentionally added PFAS in fluoropolymer-coated release liners and wax papers used inside engine and electronics packaging: the 25 ppb / 250 ppb / 50 ppm thresholds of Article 5 apply from 12 August 2026 wherever the packaging is in food contact, and increasingly to industrial substrates as Member States tighten enforcement.",
];

const sectorFaqs = [
  {
    question: "Does the PPWR apply to inbound transport packaging between Tier-1 suppliers and OEM plants?",
    answer:
      "Yes. Article 3 defines transport packaging without carve-outs for B2B inbound flows, and Article 29 sets the 40% (2030) and 70% (2040) reuse targets for transport and grouped packaging. A Tier-1 supplying engine assemblies in returnable steel racks to a Stellantis plant in Hordain or a Volkswagen plant in Wolfsburg falls squarely in scope.",
  },
  {
    question: "How do we treat KLT, totes and rack systems we already share with multiple OEMs?",
    answer:
      "Pooled systems are explicitly contemplated by Articles 29-30. The reuse rate is calculated per economic operator placing the packaging on the market for the first time, so the legal owner of the pool — typically the OEM or a third-party pool operator — bears the reporting obligation. We map ownership of every load carrier so the count is unambiguous and audit-ready.",
  },
  {
    question: "Can we keep our current EPS and PE foam dunnage past 2030?",
    answer:
      "Probably not, at least not unmodified. EPS for engine, gearbox and electronics dunnage grades poorly against the draft Article 6 design-for-recycling criteria and risks a Class C rating, which becomes unmarketable from 1 January 2038. The earlier substitution decision is taken — usually toward thermoformed rPET, recycled PP honeycomb or returnable steel/composite carriers — the lower the tooling write-off.",
  },
  {
    question: "Do EUR-pallets and metal stillages fall under Article 7 recycled content rules?",
    answer:
      "Article 7 applies to plastic packaging only, so wooden EUR-pallets and bare-metal stillages are out of scope of the recycled-content thresholds. They remain in scope of Article 6 recyclability grading where plastic strapping, stretch wrap or composite parts are involved, and of the broader Article 5 substances-of-concern regime.",
  },
  {
    question: "Who signs the Declaration of Conformity for packaging on a multi-plant EU footprint?",
    answer:
      "The manufacturer of the packaging unit signs the DoC under Article 39, or the importer where the manufacturer is established outside the Union. For OEM-owned packaging produced in-house at multiple plants, the DoC is drawn up per packaging unit with the relevant manufacturing site identified in the technical documentation, retained for 10 years per Article 40.",
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

export default function AutomotiveSectorPage() {
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
        title="PPWR for automotive and mobility"
        subtitle="Regulation (EU) 2025/40 reshapes inbound transport packaging, Tier-1 returnable container pools and recycled-content sourcing for engine, body, electronics and battery components. Renault, Stellantis, BMW, Volkswagen and Volvo Trucks operate Tier-1 packaging at scale — every loop matters."
        primaryCTA={{ href: "/contact", label: "Book a working session" }}
        secondaryCTA={{
          href: "/resources/ppwr-readiness-assessment",
          label: "Free PPWR readiness check",
        }}
        imageSrc="https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80&auto=format&fit=crop"
      />

      {/* What PPWR means for automotive */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[920px] px-6">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            What PPWR means for automotive
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            The Regulation lands hardest on inbound packaging, returnables and the rPP supply chain.
          </h2>

          <div
            className="mt-8 space-y-5 text-base md:text-[17px] leading-relaxed text-foreground/85"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <p>
              Regulation (EU) 2025/40, published in OJ L on 22 January 2025 and entered into
              force on 11 February 2025, applies generally from 12 August 2026. For automotive
              and mobility, the centre of gravity is not retail-shelf packaging — it is the
              inbound flow of dunnage, totes, KLTs, racks, stretch wrap and corrugated that
              moves engines, transmissions, wiring harnesses, electronics modules, painted body
              panels and battery cells across hundreds of EU plants every day.
            </p>
            <p>
              Article 24 caps the empty space ratio of grouped, transport and e-commerce
              packaging at 50% from 12 August 2028. For Tier-1 transport packaging engineered
              around fixed steel racks and standardised KLTs, that limit forces a wholesale
              re-design of internal dunnage and modular load-unit configurations. A typical
              engine carrier sized for the largest variant in a model range will, on smaller
              variants, exceed 50% empty space and therefore be non-compliant.
            </p>
            <p>
              Article 29 then sets the operational ceiling: 40% of transport and grouped
              packaging must be reusable from 1 January 2030, rising to 70% from 1 January
              2040. Large household appliances are required to hit 90% transport-packaging
              reuse by 2030, and although automotive is not named as a stand-alone target,
              Tier-1 supply already runs largely on returnables — the question is whether the
              loops are auditable, cross-border-compliant and properly attributed under
              Article 30 (responsibility) and Article 56 (Member State reporting).
            </p>
            <p>
              Article 6 grades every packaging unit for recyclability. From 1 January 2030
              every unit must reach at least Class C (≥70% recyclability); from 1 January 2038
              Class C is banned and only Class A (≥95%) and Class B (≥80%) are placed on the
              market. Multi-material foam dunnage, EPS engine cradles, metallised PE corner
              protectors and printed laminate identification labels are the most exposed
              today. Delegated acts setting the design-for-recycling criteria are expected by
              end-2027, leaving roughly 24 months between final criteria and the 2030 cliff.
            </p>
            <p>
              Article 7 imposes minimum recycled content in plastic packaging from 1 January
              2030 — 35% for &ldquo;other plastic packaging&rdquo;, the bucket that captures most rigid
              automotive transport packaging — rising to 65% by 1 January 2040. The supply
              constraint is real: food-grade and high-spec rPET have priority claims on
              recyclate streams, and the rPP and rABS volumes the automotive sector needs
              must be locked in well before 2030, with mass-balance accounting under the
              implementing act and CEN or ISCC certification of the chain of custody.
            </p>
            <p>
              Underneath all of that sits Article 39 — every packaging unit placed on the EU
              market requires a Declaration of Conformity, supported by a technical file
              retained for 10 years under Article 40. For an OEM operating six or more EU
              assembly plants and tens of thousands of inbound packaging SKUs, the DoC volume
              alone is a workstream. We treat it as the deliverable that closes the loop on
              every other Article. See our{" "}
              <a
                href="/services/ppwr-gap-analysis"
                className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
              >
                PPWR Gap Analysis
              </a>{" "}
              for the article-by-article scoping, the{" "}
              <a
                href="/services/reuse-targets-strategy"
                className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
              >
                Reuse & Refill Strategy
              </a>{" "}
              for the cross-plant pool architecture, and the{" "}
              <a
                href="/services/recycled-content-roadmap"
                className="font-semibold text-[#10b981] underline decoration-[#10b981]/40 underline-offset-2 hover:decoration-[#10b981]"
              >
                Recycled Content Roadmap
              </a>{" "}
              for the rPP and rABS sourcing case.
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
              Five PPWR articles that determine your 2030 readiness.
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
            Where automotive groups underestimate the regulation.
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

      <AutomotiveStats />

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
            How we&apos;d approach a Tier-1 returnables programme.
          </h2>

          <div
            className="mt-8 space-y-5 text-base md:text-[17px] leading-relaxed text-white/85"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <p>
              A European Tier-1 module integrator operating eight plants between France,
              Germany, Spain and Czechia, supplying engine cradles and door modules to four
              OEMs, comes to us six months before the 12 August 2026 general application
              date. Their inbound flow runs on a mix of OEM-owned KLTs, custom welded steel
              racks, single-trip wooden crates from sub-suppliers and increasing volumes of
              corrugated. Their starting position: 1,840 distinct inbound packaging SKUs, no
              consolidated DoC programme, and recycled-content reporting limited to a
              single category of injection-moulded interior trim parts.
            </p>
            <p>
              We open with a 5-day costed roadmap built directly on Articles 5, 6, 7, 24, 29
              and 39. Within the first week we have a Class A/B/C grading on every plastic
              SKU, a heat-map of the 312 SKUs at risk of being Class C in 2030, a quantified
              empty-space exposure on the 87 most-shipped racks, and a mass-balance scenario
              comparing single-source rPP at €1,950/t against a dual-source ISCC-PLUS
              contract. The first deliverable is a 14-page article-by-article briefing
              that the Director of Packaging takes into the next OEM commercial review.
            </p>
            <p>
              From there the engagement runs in three waves over nine months: redesign of
              the 87 highest-volume racks and KLTs to clear the 50% empty-space limit;
              negotiation of a multi-OEM pooled returnable charter aligned with Articles 29
              and 30; and assembly of the technical files plus DoC for every packaging unit
              the integrator places on the EU market. Output at month nine: a signed DoC
              programme, a forecastable rPP volume to 2030, and an audit trail their
              compliance team can hand to a market-surveillance authority without a
              follow-up letter.
            </p>
          </div>
        </div>
      </section>

      <FAQ
        title="Automotive PPWR — frequently asked questions"
        items={sectorFaqs}
        id="faq"
      />

      <ContactCTA
        title="Get your Tier-1 packaging PPWR-ready"
        description="Book a 30-minute working session. We map your inbound packaging portfolio against Regulation (EU) 2025/40 and deliver a costed Article-6, Article-7, Article-24 and Article-29 roadmap within 5 working days."
        id="contact"
      />
    </>
  );
}
