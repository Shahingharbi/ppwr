import type { Metadata } from "next";
import Link from "next/link";

import { BlogLayout } from "@/components/shared/BlogLayout";
import { ArticleSummary } from "@/components/shared/ArticleSummary";
import { InlineCTA } from "@/components/shared/InlineCTA";
import { TipBox } from "@/components/shared/TipBox";
import { getPostBySlug } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

const slug = "recycled-content-targets-2030-2040-plastic-packaging-roadmap";
const post = getPostBySlug(slug)!;
const url = `${siteConfig.url}/blog/${slug}`;

export const metadata: Metadata = {
  title: "Recycled content 2030 / 2040: the plastic roadmap",
  description:
    "Article 7 of Regulation (EU) 2025/40 sets four recycled content targets that escalate from 2030 to 2040. The numbers, certification and a 24-month roadmap.",
  keywords: post.keywords,
  alternates: { canonical: `/blog/${slug}` },
  openGraph: {
    type: "article",
    title: "Recycled content 2030 / 2040: the plastic packaging roadmap",
    description:
      "The four targets, mass balance vs free attribution, certification (CEN/TS 16137, ISCC PLUS) and the 24-month sourcing roadmap.",
    url,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt ?? post.publishedAt,
    authors: [post.author.name],
    images: post.hero ? [{ url: post.hero.src, alt: post.hero.alt }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "Recycled content 2030 / 2040: the plastic packaging roadmap",
    description:
      "Four targets, mass balance, certification (CEN/TS 16137, ISCC PLUS) and the 24-month sourcing roadmap.",
    images: post.hero ? [post.hero.src] : undefined,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  image: post.hero ? [post.hero.src] : [],
  datePublished: post.publishedAt,
  dateModified: post.updatedAt ?? post.publishedAt,
  author: {
    "@type": "Organization",
    name: post.author.name,
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/seo/logo.png`,
    },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
  keywords: post.keywords.join(", "),
  articleSection: post.category,
  inLanguage: "en",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Insights", item: `${siteConfig.url}/blog` },
    { "@type": "ListItem", position: 3, name: post.title, item: url },
  ],
};

export default function RecycledContentRoadmap() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <BlogLayout
        title={post.title}
        description={post.excerpt}
        author={`${post.author.name} · ${post.author.role}`}
        readingTime={post.readTime}
        publishedAt="2 April 2026"
        category={post.category}
        heroImage={post.hero!.src}
        ctaTitle="Build the recycled content roadmap your steerco will sign"
        ctaDescription="Pactum&apos;s Article 7 service maps the gap per packaging-type, per plant, per year, ranks supply options against price and certification risk, and produces the 24-month sourcing roadmap. Five business days, NDA upfront."
      >
        <nav
          aria-label="Breadcrumb"
          className="not-prose mb-6 text-xs text-muted-foreground"
          style={{ fontFamily: "var(--font-maison-neue)" }}
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/blog" className="hover:text-foreground">
                Insights
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground">Recycled content 2030 / 2040</li>
          </ol>
        </nav>

        <ArticleSummary
          items={[
            "From 1 January 2030, plastic packaging placed on the EU market must contain minimum recycled content: 30% (contact-sensitive PET), 10% (other contact-sensitive), 30% (single-use beverage bottles) and 35% (other plastic packaging).",
            "From 1 January 2040, those four targets escalate to 50% / 25% / 65% / 65% — the &ldquo;four numbers everyone needs to remember&rdquo;.",
            "The percentage is calculated per packaging-type per manufacturing plant per year, not per individual unit.",
            "Mass-balance attribution is acceptable when supported by chain-of-custody certification (CEN/TS 16137, ISCC PLUS, RecyClass, EuCertPlast). Paper-only certification will not pass an Article 39 audit.",
            "Food-grade rPET capacity in the EU is short relative to 2030 demand. A make-or-buy decision in 2026 is structurally different from one in 2028.",
          ]}
        />

        <h2 id="tldr">TL;DR — the four numbers</h2>
        <p>
          From <strong>1 January 2030</strong>, Article 7 of{" "}
          <strong>Regulation (EU) 2025/40</strong> — the PPWR — requires plastic
          packaging placed on the EU market to contain minimum recycled content
          measured against four packaging categories. The four numbers are:{" "}
          <strong>30%</strong> for contact-sensitive packaging containing PET as the
          major component, <strong>10%</strong> for contact-sensitive packaging from
          plastics other than PET, <strong>30%</strong> for single-use plastic
          beverage bottles, and <strong>35%</strong> for all other plastic
          packaging. From <strong>1 January 2040</strong>, those four numbers
          escalate to <strong>50% / 25% / 65% / 65%</strong>. The full text is on{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
            target="_blank"
            rel="noreferrer noopener"
          >
            EUR-Lex
          </a>
          .
        </p>
        <p>
          The calculation is per packaging-type per manufacturing plant per year. The
          recycled content must come from <strong>post-consumer</strong> plastic
          waste — not pre-consumer industrial scrap. Certification underpins the
          chain of custody and mass balance is acceptable. The Commission must adopt
          an implementing act on the precise calculation methodology under Article
          7(8); a draft was put out for consultation in late 2025.
        </p>

        <h2 id="four-categories">The four target categories explained</h2>
        <p>
          Article 7 lays down four mutually exclusive packaging buckets. A packaging
          unit falls into exactly one. Misclassification is the most common — and
          most expensive — early error.
        </p>
        <h3 id="cat-1">Contact-sensitive PET-major packaging — 30% by 2030</h3>
        <p>
          Contact-sensitive packaging is defined in Article 3 by reference to
          Regulation (EC) 1935/2004 (food contact), Directive 2001/83/EC (medicinal
          products for human use), Regulation (EU) 2017/745 (medical devices) and
          related uses. Where the packaging contains PET as the major component, the
          recycled content target is 30% from 2030, rising to 50% from 2040. This
          covers the bulk of food-contact PET trays, bottles for sensitive products,
          pharmaceutical PET blister packs and similar.
        </p>
        <h3 id="cat-2">Contact-sensitive other-plastic packaging — 10% by 2030</h3>
        <p>
          Where contact-sensitive packaging is made from plastics other than PET —
          PP, HDPE, LDPE, PS, EVOH, PA — the target is 10% by 2030 and 25% by 2040.
          The lower threshold reflects the supply reality: food-grade recycled PP
          and HDPE capacity at scale is materially smaller than rPET, and the EFSA
          authorisation process for food-grade recycled non-PET resins is
          comparatively recent.
        </p>
        <h3 id="cat-3">Single-use plastic beverage bottles — 30% by 2030</h3>
        <p>
          Single-use plastic beverage bottles up to 3 L — the bottles in scope of the
          Article 50 deposit return scheme architecture — are subject to a 30%
          target by 2030 (already partly enforced by Directive (EU) 2019/904 from
          2025 for PET bottles), rising to 65% by 2040. This is the category where
          rPET demand will dominate. It is also the category where DRS bottle-to-bottle
          collection is the most efficient supply.
        </p>
        <h3 id="cat-4">Other plastic packaging — 35% by 2030</h3>
        <p>
          The catch-all category — non-contact-sensitive, non-beverage-bottle plastic
          packaging — is at 35% from 2030, escalating to 65% from 2040. This bucket
          includes pallet stretch wrap, secondary plastic packaging, e-commerce
          mailers, industrial big bags, FMCG outer packs, transit film and the wide
          population of B2B plastic packaging. The 65% target by 2040 is, in
          practice, the most aggressive of the four because the supply must come
          predominantly from post-consumer mixed plastic waste and currently
          struggles on quality.
        </p>

        <h2 id="numbers-table">The 2030 numbers and the 2040 numbers</h2>
        <p>
          The table below is the consolidated reference. We keep it on the desk
          during every client steerco.
        </p>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>2030 target</th>
              <th>2040 target</th>
              <th>Typical applications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contact-sensitive PET-major</td>
              <td>30%</td>
              <td>50%</td>
              <td>Food-contact PET trays, sensitive bottles, pharmaceutical PET</td>
            </tr>
            <tr>
              <td>Contact-sensitive other plastics</td>
              <td>10%</td>
              <td>25%</td>
              <td>PP / HDPE / LDPE food-contact, EVOH multi-layer, PA</td>
            </tr>
            <tr>
              <td>Single-use plastic beverage bottles</td>
              <td>30%</td>
              <td>65%</td>
              <td>Water, soft drinks, juice, isotonics up to 3 L</td>
            </tr>
            <tr>
              <td>Other plastic packaging</td>
              <td>35%</td>
              <td>65%</td>
              <td>
                Stretch wrap, mailers, transit film, FMCG outer, industrial big bags
              </td>
            </tr>
          </tbody>
        </table>

        <TipBox variant="info" label="What this is not">
          Article 7 does not apply to paper, glass, metal or wood packaging. Those
          materials have their own recyclability and EPR regimes. Article 7 is a
          plastic-only rule. The recycled content for paper-based packaging is
          governed by national EPR fee modulation, not by an EU mandatory minimum.
        </TipBox>

        <h2 id="calculation">How recycled content is measured</h2>
        <p>
          Article 7(8) sets the calculation principle: the recycled content
          percentage is computed as an{" "}
          <strong>average per packaging-type per manufacturing plant per year</strong>.
          That single sentence drives the operational discipline.
        </p>
        <ul>
          <li>
            <strong>Per packaging-type</strong> — the targets attach to the
            packaging category (e.g. all PET food trays placed on the EU market by a
            given operator), not to an individual SKU. Internal averaging across
            SKUs within a packaging type is permitted.
          </li>
          <li>
            <strong>Per manufacturing plant</strong> — averaging is done at the
            plant level. A converter cannot average across multiple plants; each
            plant must hit the target on its own. Multi-site producers must manage
            recycled-content procurement plant by plant.
          </li>
          <li>
            <strong>Per calendar year</strong> — the rolling computation period is
            the calendar year. Q4 catch-up purchasing of rPET to lift an annual
            average is allowed; quarterly compliance is not required.
          </li>
        </ul>
        <p>
          The Commission&apos;s implementing act on the calculation methodology is
          expected by Q3 2026, with verification rules following. Until adopted, the
          mainstream technical reference is{" "}
          <strong>CEN/TS 16137</strong> on plastic recycled content determination,
          combined with EuCertPlast certification or equivalent. Recital 70 of the
          PPWR makes clear that mass-balance attribution with certified
          chain-of-custody is acceptable, including for chemically recycled inputs.
        </p>

        <h2 id="mass-balance">Mass balance vs free attribution</h2>
        <p>
          Two attribution models compete in current practice. The choice between
          them matters.
        </p>
        <h3 id="ma-mass">Mass balance with certified chain of custody</h3>
        <p>
          Mass balance allows a producer to acquire a defined quantity of recycled
          material into a process and to attribute the recycled content to a
          corresponding quantity of output, even if the recycled and virgin inputs
          are physically blended at the molecular level (typical for chemically
          recycled feedstocks routed through a steam cracker). Mass-balance is
          credible <em>only</em> when verified end-to-end by a certifier using a
          robust scheme. The mainstream certified mass-balance schemes are{" "}
          <strong>ISCC PLUS</strong> (the most widely used in EU plastics today)
          and <strong>RedCert²</strong>. Both are recognised by major resin
          producers.
        </p>
        <h3 id="ma-free">Free attribution — to be avoided</h3>
        <p>
          Free attribution allocates recycled content claims to outputs without
          rigorous physical or volumetric coupling. It is not robust, will not pass
          an Article 39 Declaration of Conformity audit and is increasingly rejected
          by national EPR schemes during fee modulation reviews. Avoid suppliers
          who cannot describe their attribution model in writing.
        </p>

        <h2 id="certification">Certification — what passes audit</h2>
        <p>
          The certification landscape consolidates rapidly. Five frameworks matter
          for an Article 7 compliance file in 2026.
        </p>
        <table>
          <thead>
            <tr>
              <th>Scheme</th>
              <th>Owner</th>
              <th>Best for</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CEN/TS 16137</td>
              <td>CEN</td>
              <td>
                Determination of recycled content in plastics — technical specification
              </td>
              <td>The reference standard for measurement methodology.</td>
            </tr>
            <tr>
              <td>ISCC PLUS</td>
              <td>ISCC</td>
              <td>Mass-balance certification of feedstock chain of custody</td>
              <td>Dominant in EU chemically recycled and bio-circular plastics.</td>
            </tr>
            <tr>
              <td>RecyClass</td>
              <td>Plastics Recyclers Europe</td>
              <td>
                Recyclability and traceability of mechanically recycled plastics
              </td>
              <td>Provides traceability audits at the converter level.</td>
            </tr>
            <tr>
              <td>EuCertPlast</td>
              <td>EuCertPlast / Cyclos-HTP</td>
              <td>
                Recyclers&apos; certification — origin, traceability, audit of
                recyclate
              </td>
              <td>Required by several EPR PROs for fee modulation evidence.</td>
            </tr>
            <tr>
              <td>RedCert²</td>
              <td>Redcert GmbH</td>
              <td>Mass-balance certification (renewable raw materials)</td>
              <td>Less common in plastics; used in feed and bio-energy chains.</td>
            </tr>
          </tbody>
        </table>
        <p>
          The defensible Article 39 Declaration of Conformity references{" "}
          <strong>CEN/TS 16137</strong> for measurement, plus the chain-of-custody
          certification (ISCC PLUS for mass-balance feedstock or EuCertPlast for
          mechanical recyclate), plus the converter&apos;s site certification (e.g.
          RecyClass).
        </p>

        <TipBox variant="warning" label="Paper-only certification will not pass">
          A &ldquo;certificate of recycled origin&rdquo; from a trader, with no
          chain-of-custody audit and no scheme accreditation, is not evidence under
          Article 7. We see this regularly in spot-purchase rPET supply. National
          EPR PROs are already rejecting these on fee verification. The Article 39
          DoC must reference an accredited scheme, not a trader letterhead.
        </TipBox>

        <h2 id="supply-problem">The supply problem</h2>
        <p>
          The 2030 demand for food-grade rPET, mechanically recycled food-grade PP /
          HDPE and EFSA-authorised chemically recycled feedstock will materially
          exceed installed EU capacity. This is the operational reality the
          regulation collides with.
        </p>
        <p>
          Plastics Recyclers Europe&apos;s capacity tracking placed installed EU
          mechanical PET recycling capacity at around 2.4 million tonnes at end-2024
          with food-grade authorisation on roughly 1.5 million tonnes. EU PET
          packaging demand approaches 5 million tonnes per year. At a 30% target on
          contact-sensitive PET-major plus the 30% on single-use beverage bottles,
          unconstrained demand for food-grade rPET sits near 1.6 million tonnes a
          year — already above food-grade authorised supply, before counting export
          competition from the US under the IRA and from major UK producers
          rebuilding capacity.
        </p>
        <p>
          Three structural risks:
        </p>
        <ul>
          <li>
            <strong>Contamination of rPET feedstock</strong> — collected PET bottles
            increasingly contain non-PET sleeves, opaque PET, multi-layer PET / EVOH
            and CMR-pigment colourants that degrade output yield.
          </li>
          <li>
            <strong>Price volatility</strong> — rPET pricing decoupled from virgin
            PET in 2024, hit a premium of 35-60% over virgin in early 2025, and is
            now structurally tied to feedstock collection economics.
          </li>
          <li>
            <strong>Geopolitical and trade exposure</strong> — feedstock waste
            export rules tightened in 2024-2025 and US IRA-driven demand pulls EU
            recyclate westwards. The 2030 EU compliance run risks coinciding with
            the largest North American re-shoring of recycled plastic in history.
          </li>
        </ul>

        <InlineCTA
          title="Source rPET like a regulated input, not a commodity."
          description="Pactum&apos;s 5-day Article 7 service produces a sourcing matrix per packaging-type per plant, with certified mass-balance offers, traceability data and price-volatility hedging structures."
          ctaLabel="Build the sourcing matrix"
          ctaHref="/services/recycled-content-roadmap"
          imageSrc="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80&auto=format&fit=crop"
          variant="dark"
        />

        <TipBox variant="tip" label="The 2034 mid-curve">
          The implicit annual ramp from 30% in 2030 to 50% in 2040 on contact-sensitive
          PET-major is +2 percentage points per year. The implicit ramp on
          beverage bottles from 30% to 65% is +3.5 points per year — that is the
          steepest curve in the four buckets. Treasury and procurement build
          internal milestones in 2034 and 2037 to avoid the cliff.
        </TipBox>

        <h2 id="make-or-buy">Make or buy — the strategic decision</h2>
        <p>
          The major brand-owner archetype going into 2026 falls into one of three
          camps. Most clients are mid-way through a switch from camp A to camp C.
        </p>
        <h3 id="mob-a">A — Spot buy on the open market</h3>
        <p>
          Buy rPET on quarterly contracts from generalist resin traders at spot
          plus negotiated premium. Maximum flexibility; minimum certainty. Workable
          for low-volume and low-criticality packaging; insufficient for the
          contact-sensitive PET-major and beverage-bottle categories from 2028
          onwards.
        </p>
        <h3 id="mob-b">B — Long-term offtake with certified recyclers</h3>
        <p>
          Sign 3-7 year offtake agreements with certified mechanical recyclers
          (Plastipak Recycling, Indorama, ALPLA recycling JVs, Veolia plastics,
          PETCO). Secures volume and audit-grade chain of custody. Fixed-price
          components hedge volatility. Capacity-rights clauses lock priority during
          shortages. The dominant operating model for Tier-1 brand owners
          today.
        </p>
        <h3 id="mob-c">C — Backward integration / joint venture into recycling</h3>
        <p>
          Take an equity stake or build a JV recycling site with a converter and a
          waste-management operator. Examples: Coca-Cola&apos;s European PET JVs,
          Unilever Indonesia&apos;s recycler partnership, L&apos;Oréal&apos;s
          chemically recycled JV. High capex, structurally below market price on
          rPET in the long run, and aligns with national EPR eco-modulation
          incentives. Used by the largest packaging-intensive brand owners with
          1m+ tonnes of plastic packaging exposure.
        </p>
        <p>
          The decision factors are: total annual plastic packaging tonnage,
          food-grade share, existing converter relationships, balance sheet capacity
          and the timeline to 2030. Below 50 000 tonnes per year, camp C rarely
          pays back. Above 250 000 tonnes per year, camp A is no longer credible.
        </p>

        <h2 id="roadmap">The 24-month sourcing roadmap</h2>
        <p>
          Twenty-four months from steerco approval to a fully certified,
          contractually locked supply chain is the typical engagement window we run
          with clients. The table below is the standard plan.
        </p>
        <table>
          <thead>
            <tr>
              <th>Quarter</th>
              <th>Workstream</th>
              <th>Outcome</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>Article 7 baseline calculation per plant per packaging-type</td>
              <td>Current % vs 2030 target; tonnage gap quantified.</td>
            </tr>
            <tr>
              <td>Q1</td>
              <td>Make-or-buy strategic decision</td>
              <td>Camp A / B / C selected and approved by the steerco.</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>RFI / RFP to certified recyclers and resin producers</td>
              <td>Shortlist of three offtake partners per packaging-type.</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>Converter requalification trials</td>
              <td>Validated rPET / r-resin substitution on production lines.</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>Long-term offtake negotiation</td>
              <td>3-7 year contracts; ISCC PLUS / EuCertPlast obligations.</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>Article 39 DoC structure for Article 7 compliance</td>
              <td>Calculation methodology and certification matrix locked.</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>Volume ramp on offtake contracts</td>
              <td>30-50% of 2030 target volume secured.</td>
            </tr>
            <tr>
              <td>Y2 Q1</td>
              <td>Backward-integration evaluation (camp C only)</td>
              <td>JV scoping, capex model, waste-management partner due diligence.</td>
            </tr>
            <tr>
              <td>Y2 Q2</td>
              <td>EPR fee modulation engagement per Member State</td>
              <td>Article 47 fee discounts evidenced and applied.</td>
            </tr>
            <tr>
              <td>Y2 Q3</td>
              <td>Certified mass-balance audit (full year of operation)</td>
              <td>External auditor sign-off on the chain of custody.</td>
            </tr>
            <tr>
              <td>Y2 Q4</td>
              <td>2030 readiness rehearsal</td>
              <td>Full Article 7 + Article 39 simulation on a representative plant.</td>
            </tr>
          </tbody>
        </table>

        <h2 id="contractual">Contractual architecture for the supply chain</h2>
        <p>
          The Article 7 compliance file rests on a chain of contracts that must be
          aligned. We structure the contractual architecture around four
          interlocking instruments.
        </p>
        <p>
          <strong>The Master Recycled Content Supply Agreement.</strong> A 3-7 year
          umbrella contract between the brand owner and a certified resin producer
          or recycler. It locks tonnage, recycled content percentage by packaging
          type, certification scope (ISCC PLUS or EuCertPlast), price-formula and
          force-majeure carve-outs. Annual minimum tonnage commitments — typically
          70 to 85% of forecast demand — preserve flexibility for the residual spot
          market.
        </p>
        <p>
          <strong>The Traceability Data Annex.</strong> A schedule to the Master
          Agreement specifying the data the supplier must deliver per shipment:
          batch identifier, mass-balance allocation, conversion factor, audit period
          covered, certifier reference. Without this annex the brand owner cannot
          assemble the Article 39 Declaration of Conformity at year-end.
        </p>
        <p>
          <strong>The Converter Pass-Through Clause.</strong> When the brand owner
          buys finished packaging from a converter rather than resin from a producer,
          the recycled content obligation must pass through the converter. The
          clause requires the converter to evidence that the input resin meets the
          contracted recycled content percentage and to deliver the same traceability
          data to the brand owner.
        </p>
        <p>
          <strong>The Audit Right.</strong> A standard 60-day notice clause giving
          the brand owner — or a third-party auditor on its behalf — access to the
          supplier&apos;s certification records, mass-balance ledgers and chain-of-custody
          documentation. We see suppliers resisting full audit rights and accepting
          paper attestations only; in our experience the audit right has been used
          twice in the last 24 months and saved both clients material exposure on
          fee verification.
        </p>
        <p>
          The four instruments work together. A Master Agreement without a
          Traceability Data Annex is unenforceable; a converter contract without a
          pass-through clause shifts liability inwards; an audit right without a
          notice mechanism is theoretical. Procurement, Legal and Compliance jointly
          own this architecture in Pactum engagements.
        </p>

        <h2 id="mistakes">Mistakes to avoid</h2>

        <h3 id="m-1">1. Accepting paper-only certification</h3>
        <p>
          A trader certificate without scheme audit will not pass an Article 39 DoC
          review and may be challenged by EPR PROs during fee modulation. Insist on
          scheme-audited mass balance (ISCC PLUS) or scheme-audited mechanical
          recyclate (EuCertPlast / RecyClass), and verify the certificate against
          the certifier&apos;s public register.
        </p>

        <h3 id="m-2">2. Failing to contract for traceability data</h3>
        <p>
          The DoC needs traceability data — input feedstock origin, conversion
          ratio, mass-balance allocation, audit period. If your supplier contract
          does not require traceability data delivery monthly or quarterly, you will
          be reconstructing the file under enforcement pressure in 2030.
        </p>

        <h3 id="m-3">3. Ignoring the 2040 cliff</h3>
        <p>
          The jump from 30% to 50% on contact-sensitive PET-major, and from 30% to
          65% on beverage bottles, is materially harder than the 2030 entry. The
          supply that fills the 2030 target is not a linear extension to 2040. A
          2030-only plan will need a second wave of investment in 2034-2036 — and
          the make-or-buy decision is different at 65% than at 30%.
        </p>

        <h3 id="m-4">4. Treating each plant as an island</h3>
        <p>
          Article 7 forbids cross-plant averaging, but it does not forbid corporate
          treasury-level rPET procurement that feeds multiple plants. Centralising
          procurement while respecting per-plant calculation is a 5-15% saving that
          most clients miss in their first plan.
        </p>

        <h3 id="m-5">5. Forgetting EFSA authorisation for non-PET food-grade</h3>
        <p>
          Food-grade authorisation under EFSA&apos;s recycling process opinions is
          species-specific, technology-specific and supplier-specific. A new
          mechanical PP recycling line for food contact requires individual EFSA
          authorisation that takes 18-30 months. Plan EFSA dossier work into the
          roadmap — a long-term contract on unauthorised supply does not solve
          Article 7.
        </p>

        <h2 id="faq">Frequently asked questions</h2>

        <h3 id="faq-1">Does Article 7 apply to paper or glass packaging?</h3>
        <p>
          No. Article 7 is plastic-only. Paper, glass, metal and wood packaging are
          subject to Articles 6 (recyclability), 10 (minimisation), 12 (labelling)
          and 45 (EPR), but not the recycled content quotas of Article 7.
        </p>

        <h3 id="faq-2">Is industrial pre-consumer scrap recycled content?</h3>
        <p>
          No. Article 7 requires post-consumer plastic waste — the material that
          has reached the end-user and been collected for recycling. Industrial
          pre-consumer scrap and production waste do not qualify, by design.
        </p>

        <h3 id="faq-3">Is chemically recycled content allowed?</h3>
        <p>
          Yes. Recital 70 explicitly recognises chemically recycled feedstock with
          mass-balance attribution and certified chain of custody as eligible
          recycled content under Article 7. ISCC PLUS is the dominant scheme.
        </p>

        <h3 id="faq-4">How is the percentage calculated for multi-layer plastic packaging?</h3>
        <p>
          By weight of all plastic in the packaging unit, averaged across the
          packaging-type at the plant level. Layers other than plastic (paper, EVOH
          if classified as plastic, metallised film) are treated according to the
          implementing act&apos;s methodology — currently in draft.
        </p>

        <h3 id="faq-5">What about bio-based plastic?</h3>
        <p>
          Bio-based content is not recycled content. A bio-based PE bottle made
          from sugar-cane ethanol is virgin plastic by feedstock, with carbon
          benefits but zero contribution to Article 7. The two regimes do not
          interchange.
        </p>

        <h3 id="faq-6">Are there derogations for SMEs?</h3>
        <p>
          The Regulation does not exempt SMEs from Article 7. SMEs benefit from
          simplified Article 39 documentation and from Member State support
          schemes, but the 30% / 10% / 30% / 35% targets apply to all plastic
          packaging placed on the EU market regardless of producer size.
        </p>

        <h3 id="faq-7">What if my plant cannot hit the target in 2030?</h3>
        <p>
          The packaging unit cannot be lawfully placed on the EU market in
          non-compliance. The DoC must attest compliance. The brand owner must
          either (i) hit the target through procurement, (ii) reduce plastic
          packaging volume in that bucket, (iii) switch material category — for
          example, replacing a PP food-contact tray with a fibre tray, which moves
          out of Article 7 entirely — or (iv) face Article 68 penalties and
          (EU) 2019/1020 enforcement.
        </p>

        <h3 id="faq-8">Does Member State derogation apply?</h3>
        <p>
          No. Article 7 targets are harmonised. Unlike Article 29 reuse targets,
          which permit Member State derogations under conditions, the recycled
          content targets are EU-wide and uniform.
        </p>

        <h3 id="faq-9">How does Article 7 interact with Article 47 EPR fees?</h3>
        <p>
          EPR fees must be eco-modulated on the basis of recycled content (Article
          47). Higher recycled content reduces fees in most national schemes. The
          incentive structure usually moves the brand-owner economics ahead of the
          regulatory deadline.
        </p>

        <h3 id="faq-10">When will the calculation methodology be finalised?</h3>
        <p>
          The Commission must adopt the implementing act under Article 7(8). The
          public consultation closed in late 2025; adoption is targeted for Q3
          2026. The consultation draft tracked CEN/TS 16137 as the measurement
          basis and accepted ISCC PLUS-style mass balance.
        </p>

        <p>
          For the full obligation map across the eight PPWR themes, see{" "}
          <Link href="/blog/ppwr-2025-survival-guide-for-european-brand-owners">
            the PPWR survival guide
          </Link>
          ; for the August 2026 PFAS deadline, see{" "}
          <Link href="/blog/pfas-food-contact-packaging-ppwr-august-2026-deadline">
            the dedicated PFAS briefing
          </Link>
          . The recycled content service is at{" "}
          <Link href="/services/recycled-content-roadmap">
            /services/recycled-content-roadmap
          </Link>
          ; the recyclability service at{" "}
          <Link href="/services/recyclability-assessment">
            /services/recyclability-assessment
          </Link>
          ; the consolidated timeline at{" "}
          <Link href="/resources/ppwr-timeline">
            /resources/ppwr-timeline
          </Link>
          ; the running FAQ at{" "}
          <Link href="/resources/ppwr-faq">
            /resources/ppwr-faq
          </Link>
          . The Regulation text is on{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2025/40/oj"
            target="_blank"
            rel="noreferrer noopener"
          >
            EUR-Lex
          </a>
          ; the European Commission&apos;s policy page sits at{" "}
          <a
            href="https://environment.ec.europa.eu/topics/waste-and-recycling/packaging-waste_en"
            target="_blank"
            rel="noreferrer noopener"
          >
            environment.ec.europa.eu
          </a>
          .
        </p>
      </BlogLayout>
    </>
  );
}
