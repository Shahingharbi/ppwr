import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  FileSignature,
  Files,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { ComparisonTable } from "@/components/shared/ComparisonTable";
import { FAQ } from "@/components/shared/FAQ";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { Breadcrumb } from "@/components/pages/services/_shared/Breadcrumb";
import { RegulationBlock } from "@/components/pages/services/_shared/RegulationBlock";
import { OperationsImpact } from "@/components/pages/services/_shared/OperationsImpact";
import { DeliverablesGrid } from "@/components/pages/services/_shared/DeliverablesGrid";
import { HowWeWork } from "@/components/pages/services/_shared/HowWeWork";
import {
  JsonLd,
  buildServiceSchema,
  buildFaqSchema,
} from "@/components/pages/services/_shared/JsonLd";
import { isLocale, type Locale } from "@/lib/i18n/types";
import { buildLocalizedMetadata } from "@/lib/seo";

const SERVICE_PATH = "/services/declaration-of-conformity";
const SERVICE_URL_BASE = "https://pactum-advisory.eu";

const SERVICE_NAME_EN = "Declaration of Conformity (Article 39)";
const SERVICE_NAME_FR = "Déclaration de conformité (article 39)";

const META_EN = {
  title: "Declaration of Conformity — Article 39 PPWR | Pactum",
  description:
    "Build audit-ready Declarations of Conformity and ten-year technical files for every packaging unit you place on the EU market under Article 39 PPWR.",
};

const META_FR = {
  title:
    "Déclaration de conformité — article 39 PPWR audit-ready | Pactum",
  description:
    "Construire des Déclarations de conformité (DoC) audit-ready et des dossiers techniques de dix ans pour chaque unité d'emballage placée sur le marché européen au titre de l'article 39 du règlement PPWR.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const meta = rawLocale === "fr" ? META_FR : META_EN;
  return buildLocalizedMetadata({
    title: meta.title,
    description: meta.description,
    path: SERVICE_PATH,
    locale: rawLocale,
  });
}

const FAQ_ITEMS_EN = [
  {
    question: "Who must draw up the Declaration of Conformity?",
    answerText:
      "Article 39 of Regulation (EU) 2025/40 places the duty on the manufacturer of the packaging. Where the manufacturer is established outside the European Union, the duty falls on the importer or on the authorised representative designated under Article 16. The DoC must be drawn up before the packaging is placed on the EU market and made available to market-surveillance authorities on request.",
  },
  {
    question: "What must the Declaration contain?",
    answerText:
      "Article 39 and the model declaration in Annex VII require: identification of the packaging (model, batch or serial number), the name and address of the manufacturer and, where applicable, the authorised representative, a statement that the declaration is issued under the sole responsibility of the manufacturer, the harmonised standards or technical specifications applied, and the date and place of issue plus the signature of the responsible person. The declaration cites Regulation (EU) 2025/40 explicitly.",
  },
  {
    question: "What goes into the technical documentation?",
    answerText:
      "The technical file underpins the DoC. Article 40 lists the minimum content: a general description of the packaging unit, design and manufacturing drawings, descriptions and explanations of those drawings, the harmonised standards applied in full or in part, the results of design calculations and examinations, test reports for Articles 5, 6, 7, 9, 10, 11 and 24 as applicable, and the documents demonstrating compliance with each obligation. The file is retained for ten years from the date of placing on the market.",
  },
  {
    question: "How does Article 39 interact with food-contact regulations?",
    answerText:
      "Article 39 PPWR sits alongside Regulation (EC) 1935/2004 on food-contact materials and Regulation (EU) 10/2011 on plastic materials in food contact. Each regime requires its own declaration, but they share evidence (migration testing, recycled-content certifications, PFAS test results). We design the technical file so a single evidence base feeds both regimes without duplication.",
  },
  {
    question: "How is enforcement organised?",
    answerText:
      "Market surveillance is governed by Regulation (EU) 2019/1020, as amended by the PPWR. Authorities can demand the DoC and the technical file, sample-test the packaging, require corrective action, withdraw or recall non-compliant stock, and impose Article 68 penalties. From 12 August 2026, the Information and Communication System on Market Surveillance (ICSMS) is the primary cross-border enforcement channel for packaging.",
  },
  {
    question: "How does the DoC connect to the gap analysis and recyclability assessment?",
    answerText:
      "The DoC is the closing artefact of every PPWR workstream. The gap analysis defines what evidence is required per SKU; the recyclability assessment generates the Article 6 evidence; the recycled-content roadmap generates the Article 7 evidence; the PFAS programme generates the Article 5 evidence. We assemble all of it into the Article 39 file so each SKU is audit-ready when market surveillance asks.",
  },
];

const FAQ_ITEMS_FR = [
  {
    question: "Qui doit établir la Déclaration de conformité ?",
    answerText:
      "L'article 39 du Règlement (UE) 2025/40 fait peser cette obligation sur le fabricant de l'emballage. Lorsque le fabricant est établi en dehors de l'Union européenne, l'obligation incombe à l'importateur ou au mandataire désigné au titre de l'article 16. La DoC doit être établie avant la mise sur le marché européen de l'emballage et mise à la disposition des autorités de surveillance du marché sur demande.",
  },
  {
    question: "Que doit contenir la Déclaration ?",
    answerText:
      "L'article 39 et le modèle de déclaration de l'Annexe VII exigent : l'identification de l'emballage (modèle, numéro de lot ou de série), les nom et adresse du fabricant et, le cas échéant, du mandataire, une mention indiquant que la déclaration est établie sous la seule responsabilité du fabricant, les normes harmonisées ou spécifications techniques appliquées, ainsi que la date et le lieu d'établissement et la signature de la personne responsable. La déclaration cite explicitement le Règlement (UE) 2025/40.",
  },
  {
    question: "Que contient la documentation technique ?",
    answerText:
      "Le dossier technique sous-tend la DoC. L'article 40 en fixe le contenu minimal : une description générale de l'unité d'emballage, les plans de conception et de fabrication, les descriptions et explications de ces plans, les normes harmonisées appliquées en tout ou partie, les résultats des calculs de conception et des examens, les rapports de tests pour les articles 5, 6, 7, 9, 10, 11 et 24 selon le cas, et les documents démontrant la conformité à chaque obligation. Le dossier est conservé pendant dix ans à compter de la date de mise sur le marché.",
  },
  {
    question: "Comment l'article 39 s'articule avec la réglementation contact alimentaire ?",
    answerText:
      "L'article 39 PPWR coexiste avec le Règlement (CE) 1935/2004 sur les matériaux au contact alimentaire et le Règlement (UE) 10/2011 sur les matières plastiques au contact alimentaire. Chaque régime exige sa propre déclaration, mais ils partagent les mêmes preuves (essais de migration, certifications de contenu recyclé, résultats de tests PFAS). Nous concevons le dossier technique pour qu'une base de preuves unique alimente les deux régimes sans doublon.",
  },
  {
    question: "Comment l'application est-elle organisée ?",
    answerText:
      "La surveillance du marché est régie par le Règlement (UE) 2019/1020, modifié par la PPWR. Les autorités peuvent exiger la DoC et le dossier technique, prélever des échantillons, imposer des mesures correctives, retirer ou rappeler les stocks non conformes et imposer les sanctions de l'article 68. À compter du 12 août 2026, le Système d'information et de communication pour la surveillance du marché (ICSMS) est le principal canal d'application transfrontalier pour l'emballage.",
  },
  {
    question: "Comment la DoC se relie à l'analyse des écarts et à l'évaluation de recyclabilité ?",
    answerText:
      "La DoC est l'artefact de clôture de chaque chantier PPWR. L'analyse des écarts définit les preuves requises par SKU ; l'évaluation de recyclabilité génère les preuves de l'article 6 ; la feuille de route contenu recyclé génère celles de l'article 7 ; le programme PFAS génère celles de l'article 5. Nous assemblons l'ensemble dans le dossier de l'article 39 afin que chaque SKU soit audit-ready à la première demande de la surveillance du marché.",
  },
];

const COMPARISON_HEADERS = {
  en: {
    eyebrow: "How we compare",
    title: "Pactum vs. Big-4 vs. sustainability consultancies",
    intro:
      "The Declaration of Conformity is a regulatory engineering problem, not a slide deck. The advisor must read harmonised standards, market surveillance procedures and supplier attestations as primary evidence.",
    big4: "Typical Big-4",
    sustainability: "Sustainability consultancy",
    caption: "Engagement dimension",
  },
  fr: {
    eyebrow: "Comparatif",
    title: "Pactum face aux Big-4 et aux cabinets RSE",
    intro:
      "La Déclaration de conformité est un problème d'ingénierie réglementaire, et non un deck de slides. Le conseil doit lire les normes harmonisées, les procédures de surveillance du marché et les attestations fournisseurs comme preuves primaires.",
    big4: "Big-4 typique",
    sustainability: "Cabinet RSE",
    caption: "Dimension de mission",
  },
} as const;

const CONTINUE_READING = {
  en: "Continue reading:",
  fr: "Pour aller plus loin :",
};

function EnglishVersion({ locale }: { locale: Locale }) {
  const FAQ_ITEMS = FAQ_ITEMS_EN;
  const FAQ_ITEMS_FOR_FAQ = FAQ_ITEMS.map((it) => ({
    question: it.question,
    answer: it.answerText,
  }));
  const SERVICE_URL = `${SERVICE_URL_BASE}/${locale}${SERVICE_PATH}`;
  const h = COMPARISON_HEADERS.en;

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          { label: "Home", href: `/${locale}` },
          { label: "Services", href: `/${locale}/services/ppwr-gap-analysis` },
          { label: "Declaration of Conformity" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 39 · DECLARATION OF CONFORMITY"
        title="Declaration of Conformity — audit-ready, every SKU, every market."
        subtitle="Article 39 puts the manufacturer on the hook for a written DoC and a ten-year technical file before any packaging unit is placed on the EU market. We build the file once, you defend it for the next decade."
        primaryCTA={{ href: `/${locale}/contact`, label: "Book a working session" }}
        secondaryCTA={{
          href: `/${locale}/resources/ppwr-readiness-assessment`,
          label: "Free PPWR readiness check",
        }}
      />

      <RegulationBlock locale={locale} title="What the regulation says">
        <p>
          Article 39 of Regulation (EU) 2025/40 imposes on the manufacturer of
          a packaging unit the duty to draw up a written{" "}
          <em>Declaration of Conformity</em> (DoC) before that unit is placed
          on the EU market. Where the manufacturer is established outside the
          Union, the duty falls on the importer placing the goods on the
          market or on the <em>authorised representative</em> designated under
          Article 16. The DoC follows the model in Annex VII, cites
          Regulation (EU) 2025/40 by name and version, and is issued under the
          sole responsibility of the manufacturer.
        </p>
        <p>
          Article 40 specifies the supporting <em>technical documentation</em>
          : a general description of the packaging unit, design and
          manufacturing drawings, descriptions and explanations, the
          harmonised standards or technical specifications applied (in full or
          in part, with deviations explained), the results of design
          calculations and examinations, the test reports demonstrating
          compliance with the substantive obligations of the Regulation
          (Articles 5, 6, 7, 9, 10, 11, 24 and others as applicable), and any
          other documents proving the unit conforms. The file must be kept
          for <strong>ten years</strong> from the date of placing on the
          market and produced to market-surveillance authorities within the
          deadline they set.
        </p>
        <p>
          Market surveillance is organised under Regulation (EU) 2019/1020 on
          market surveillance and compliance of products, as amended by the
          PPWR. Authorities have wide powers: to demand the DoC and technical
          file, to sample-test the packaging, to issue corrective measures,
          and — under Article 39 read together with Article 68 — to{" "}
          <em>withdraw</em> or <em>recall</em> non-compliant packaging from
          the market and impose penalties Member States must set as
          effective, proportionate and dissuasive. The Information and
          Communication System on Market Surveillance (ICSMS) is the
          cross-border channel from <strong>12 August 2026</strong>.
        </p>
        <p>
          Article 39 reaches every packaging unit, regardless of material —
          plastic, paper and board, glass, metal, wood and composites — and
          every market segment, including B2B transport packaging. It is not
          a sustainability obligation in the soft sense; it is the
          accountability backbone of the Regulation. The CE-marking comparison
          is direct: a packaging unit on the EU market without a DoC behind
          it is, by Article 39 alone, non-compliant.
        </p>
      </RegulationBlock>

      <OperationsImpact
        locale={locale}
        title="What changes for your operations"
        items={[
          {
            title: "Every SKU needs a signed DoC before placing",
            description:
              "Article 39 is a placing-on-the-market gate. Your launch checklist must include the DoC sign-off; without it, packaging cannot lawfully ship. Manufacturer signature, date, harmonised standards cited, model identification — all six fields are mandatory.",
          },
          {
            title: "The technical file becomes a system, not a folder",
            description:
              "Drawings, test reports, supplier declarations and harmonised-standard references must be retrieval-ready for ten years. PDM, document management or a dedicated PPWR file system — pick one, then govern it.",
          },
          {
            title: "Authorised representative coverage by Member State",
            description:
              "Non-EU manufacturers must designate an authorised representative under Article 16 with the documented power to act on the DoC. Importers carry the duty otherwise. The matrix flags each SKU's coverage by Member State.",
          },
          {
            title: "Harmonised standards must be cited explicitly",
            description:
              "EN 13427 (general), EN 13428–13432 (specific) and the new harmonised standards being mandated by the Commission must be cited in full or in part. Deviations need a documented engineering rationale that survives expert challenge.",
          },
          {
            title: "Market surveillance is real and EU-wide",
            description:
              "Reg. (EU) 2019/1020 governs cross-border enforcement. ICSMS connects authorities; an action in one Member State propagates to others. Withdrawal in one country can trigger market-wide action within weeks.",
          },
          {
            title: "Recall and penalty exposure is at packaging level",
            description:
              "Article 68 requires effective, proportionate and dissuasive penalties. Several Member States are signalling fines tied to turnover. Recall and withdrawal cost is the operational risk to budget for, not the fine alone.",
          },
        ]}
      />

      <DeliverablesGrid
        locale={locale}
        title="What you get"
        description="The Article 39 stack you would need to defend at a market-surveillance audit anywhere in the Union — drafted once, governed for the next decade."
        deliverables={[
          {
            icon: FileSignature,
            title: "DoC template per packaging family",
            description:
              "Annex VII-aligned Declaration of Conformity template per packaging family. Manufacturer or authorised-representative variants. Multi-language coverage for the Member States you place into.",
          },
          {
            icon: Files,
            title: "Technical file architecture",
            description:
              "Document map for the ten-year technical file: drawings, test reports, supplier declarations, harmonised-standard references. PDM or DMS integration plan, retention policy and audit trail.",
          },
          {
            icon: ShieldCheck,
            title: "Evidence library and standards crosswalk",
            description:
              "Crosswalk between PPWR articles, applicable harmonised standards (EN 13427 series and new mandates) and the test reports in your supply chain. Gap list per SKU and the test plan to close it.",
          },
          {
            icon: Workflow,
            title: "DoC governance model",
            description:
              "RACI for the manufacturer, the authorised representative, the importer and the distributor. Sign-off workflow into your launch process, change-control procedure and supplier escalation.",
          },
        ]}
        timeToDeliver="3–5 weeks for a typical 100–500 SKU portfolio"
        teamComposition="1 partner, 1 senior regulatory analyst, 1 quality systems lead"
      />

      <HowWeWork
        locale={locale}
        title="How we work — five gates from blank file to audit-ready"
        steps={[
          {
            step: "01",
            title: "NDA, perimeter and obligated-operator map",
            duration: "Week 0",
            description:
              "Mutual NDA. We map every legal entity placing packaging on the EU market, the Member States in scope and the authorised-representative or importer setup per country. SKU master is registered.",
          },
          {
            step: "02",
            title: "Article-by-article evidence assessment",
            duration: "Weeks 1–2",
            description:
              "We test every SKU's existing evidence base against Articles 5, 6, 7, 9, 10, 11 and 24. Gaps, unsubstantiated supplier claims and missing harmonised-standard citations are listed.",
          },
          {
            step: "03",
            title: "DoC drafting and templating",
            duration: "Weeks 2–3",
            description:
              "Annex VII-aligned templates per packaging family, multi-language where needed, with manufacturer or authorised-representative variants. The legal text is reviewed against EU and national obligations.",
          },
          {
            step: "04",
            title: "Technical file architecture and DMS integration",
            duration: "Weeks 3–4",
            description:
              "Document map, retention policy and integration into your PDM or DMS. The retrieval workflow is designed to deliver any SKU's file within 48 hours of a market-surveillance request.",
          },
          {
            step: "05",
            title: "Steering committee and ten-year governance",
            duration: "Weeks 4–5",
            description:
              "We hand over the DoC templates, the technical file architecture, the RACI and the change-control procedure. Quarterly reviews are scheduled; we hand over the calendar of acts that will affect future DoCs.",
          },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2 rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {h.eyebrow}
            </span>
            <h2
              className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {h.title}
            </h2>
            <p
              className="mt-4 text-base leading-relaxed text-muted-foreground"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {h.intro}
            </p>
          </div>

          <div className="mt-10">
            <ComparisonTable
              usLabel="Pactum"
              competitor1Label={h.big4}
              competitor2Label={h.sustainability}
              caption={h.caption}
              rows={[
                {
                  criterion: "Pure-play PPWR specialism",
                  us: { type: "yes", text: "Article 39 every day" },
                  competitor1: { type: "no", text: "One offer in ESG portfolio" },
                  competitor2: { type: "no", text: "Circular-economy generalist" },
                },
                {
                  criterion: "Regulatory horizon scanning",
                  us: { type: "yes", text: "Reg. 2019/1020 and harmonised standards tracked weekly" },
                  competitor1: { type: "mixed", text: "Quarterly briefings" },
                  competitor2: { type: "no", text: "Ad-hoc" },
                },
                {
                  criterion: "Time to first deliverable",
                  us: { type: "yes", text: "DoC stack in 3–5 weeks" },
                  competitor1: { type: "no", text: "10–16 weeks" },
                  competitor2: { type: "no", text: "8–12 weeks" },
                },
                {
                  criterion: "Fixed scope, fixed price",
                  us: { type: "yes", text: "Quoted per SKU band before kick-off" },
                  competitor1: { type: "no", text: "Time-and-materials" },
                  competitor2: { type: "mixed", text: "Sometimes" },
                },
                {
                  criterion: "NDA-first engagement",
                  us: { type: "yes", text: "Signed before any data exchange" },
                  competitor1: { type: "mixed", text: "Standard MSA" },
                  competitor2: { type: "mixed", text: "Standard MSA" },
                },
                {
                  criterion: "EU-wide team",
                  us: { type: "yes", text: "Multi-jurisdiction analysts in EU" },
                  competitor1: { type: "yes", text: "Global, often non-EU lead" },
                  competitor2: { type: "mixed", text: "Single-country lead common" },
                },
              ]}
            />
          </div>
        </div>
      </section>

      <FAQ
        title="Questions on the Article 39 Declaration of Conformity"
        items={FAQ_ITEMS_FOR_FAQ}
      />

      <section className="bg-[#f5f7f4] py-12">
        <div className="mx-auto max-w-[1080px] px-6">
          <p
            className="text-sm text-muted-foreground"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {CONTINUE_READING.en}{" "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/services/ppwr-gap-analysis`}
            >
              PPWR Gap Analysis
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/services/recyclability-assessment`}
            >
              Recyclability assessment (Article 6)
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/services/pfas-compliance`}
            >
              PFAS compliance (Article 5)
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/resources/ppwr-timeline`}
            >
              PPWR Timeline 2025–2040
            </a>
            .
          </p>
        </div>
      </section>

      <ContactCTA
        title="Be audit-ready before 12 August 2026"
        description="Book a 30-minute working session. We confirm the legal entities and the SKU perimeter, sign the NDA, and start the DoC stack within the week."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME_EN,
          description: META_EN.description,
          serviceType: "Article 39 Declaration of Conformity for PPWR",
          url: SERVICE_URL,
        })}
      />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
    </>
  );
}

function FrenchVersion({ locale }: { locale: Locale }) {
  const FAQ_ITEMS = FAQ_ITEMS_FR;
  const FAQ_ITEMS_FOR_FAQ = FAQ_ITEMS.map((it) => ({
    question: it.question,
    answer: it.answerText,
  }));
  const SERVICE_URL = `${SERVICE_URL_BASE}/${locale}${SERVICE_PATH}`;
  const h = COMPARISON_HEADERS.fr;

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          { label: "Accueil", href: `/${locale}` },
          { label: "Services", href: `/${locale}/services/ppwr-gap-analysis` },
          { label: "Déclaration de conformité" },
        ]}
      />

      <PageHero
        eyebrow="ARTICLE 39 · DÉCLARATION DE CONFORMITÉ"
        title="Déclaration de conformité — audit-ready, chaque SKU, chaque marché."
        subtitle="L'article 39 met le fabricant en première ligne pour une DoC écrite et un dossier technique de dix ans avant toute mise sur le marché européen d'une unité d'emballage. Nous bâtissons le dossier une fois, vous le défendez pendant la décennie suivante."
        primaryCTA={{ href: `/${locale}/contact`, label: "Réserver une session de travail" }}
        secondaryCTA={{
          href: `/${locale}/resources/ppwr-readiness-assessment`,
          label: "Diagnostic PPWR gratuit",
        }}
      />

      <RegulationBlock locale={locale}>
        <p>
          L&apos;article 39 du Règlement (UE) 2025/40 fait peser sur le
          fabricant d&apos;une unité d&apos;emballage l&apos;obligation
          d&apos;établir une <em>Déclaration de conformité</em> (DoC) écrite
          avant la mise sur le marché européen de cette unité. Lorsque le
          fabricant est établi en dehors de l&apos;Union, l&apos;obligation
          incombe à l&apos;importateur qui place les marchandises sur le
          marché ou au <em>mandataire</em> désigné au titre de l&apos;article
          16. La DoC suit le modèle de l&apos;Annexe VII, cite le Règlement
          (UE) 2025/40 par son nom et sa version, et est établie sous la
          seule responsabilité du fabricant.
        </p>
        <p>
          L&apos;article 40 précise la <em>documentation technique</em> de
          soutien : une description générale de l&apos;unité d&apos;emballage,
          les plans de conception et de fabrication, leurs descriptions et
          explications, les normes harmonisées ou spécifications techniques
          appliquées (en tout ou partie, avec explication des écarts), les
          résultats des calculs de conception et examens, les rapports de
          tests démontrant la conformité aux obligations matérielles du
          règlement (articles 5, 6, 7, 9, 10, 11, 24 et autres selon le cas)
          et tout document prouvant la conformité de l&apos;unité. Le dossier
          doit être conservé pendant <strong>dix ans</strong> à compter de la
          date de mise sur le marché et produit aux autorités de surveillance
          dans le délai qu&apos;elles fixent.
        </p>
        <p>
          La surveillance du marché est organisée par le Règlement (UE)
          2019/1020 relatif à la surveillance du marché et à la conformité
          des produits, modifié par la PPWR. Les autorités disposent de
          pouvoirs étendus : exiger la DoC et le dossier technique, prélever
          des échantillons, ordonner des mesures correctives, et — au titre
          de l&apos;article 39 lu conjointement avec l&apos;article 68 —{" "}
          <em>retirer</em> ou <em>rappeler</em> les emballages non conformes
          du marché et imposer les sanctions effectives, proportionnées et
          dissuasives que les États membres doivent fixer. Le Système
          d&apos;information et de communication pour la surveillance du
          marché (ICSMS) est le canal transfrontalier à compter du{" "}
          <strong>12 août 2026</strong>.
        </p>
        <p>
          L&apos;article 39 atteint chaque unité d&apos;emballage, quel que
          soit le matériau — plastique, papier-carton, verre, métal, bois et
          composites — et chaque segment de marché, y compris l&apos;emballage
          de transport B2B. Ce n&apos;est pas une obligation de durabilité au
          sens souple ; c&apos;est l&apos;épine dorsale de
          l&apos;accountability du règlement. La comparaison avec le marquage
          CE est directe : une unité d&apos;emballage sur le marché européen
          sans DoC est, par le seul article 39, non conforme.
        </p>
      </RegulationBlock>

      <OperationsImpact
        locale={locale}
        items={[
          {
            title: "Chaque SKU a besoin d'une DoC signée avant mise sur le marché",
            description:
              "L'article 39 est un point de passage de mise sur le marché. Votre checklist de lancement doit inclure la validation de la DoC ; sans elle, l'emballage ne peut légalement être expédié. Signature fabricant, date, normes harmonisées citées, identification du modèle — les six champs sont obligatoires.",
          },
          {
            title: "Le dossier technique devient un système, pas un dossier",
            description:
              "Plans, rapports de tests, déclarations fournisseurs et références aux normes harmonisées doivent être consultables pendant dix ans. PDM, GED ou système de dossier PPWR dédié — choisissez-en un, puis gouvernez-le.",
          },
          {
            title: "Couverture mandataire par État membre",
            description:
              "Les fabricants non-UE doivent désigner un mandataire au titre de l'article 16 disposant du pouvoir documenté d'agir sur la DoC. À défaut, l'importateur porte l'obligation. La matrice signale la couverture de chaque SKU par État membre.",
          },
          {
            title: "Les normes harmonisées doivent être citées explicitement",
            description:
              "EN 13427 (général), EN 13428-13432 (spécifiques) et les nouvelles normes harmonisées en cours de mandatement par la Commission doivent être citées en tout ou partie. Tout écart appelle une justification d'ingénierie documentée capable de résister à une contestation d'expert.",
          },
          {
            title: "La surveillance du marché est réelle et couvre toute l'UE",
            description:
              "Le Règlement (UE) 2019/1020 régit l'application transfrontalière. ICSMS relie les autorités ; une action dans un État membre se propage aux autres. Un retrait dans un pays peut déclencher une action sur tout le marché en quelques semaines.",
          },
          {
            title: "L'exposition au rappel et aux sanctions est au niveau emballage",
            description:
              "L'article 68 exige des sanctions effectives, proportionnées et dissuasives. Plusieurs États membres signalent des amendes liées au chiffre d'affaires. Le coût de rappel et de retrait est le risque opérationnel à budgéter, et non la seule amende.",
          },
        ]}
      />

      <DeliverablesGrid
        locale={locale}
        description="L'arsenal article 39 dont vous auriez besoin pour défendre un audit de surveillance du marché n'importe où dans l'Union — rédigé une fois, gouverné pour la décennie à venir."
        deliverables={[
          {
            icon: FileSignature,
            title: "Modèle de DoC par famille d'emballage",
            description:
              "Modèle de Déclaration de conformité aligné sur l'Annexe VII par famille d'emballage. Variantes fabricant ou mandataire. Couverture multilingue pour les États membres dans lesquels vous mettez sur le marché.",
          },
          {
            icon: Files,
            title: "Architecture du dossier technique",
            description:
              "Plan documentaire du dossier technique de dix ans : plans, rapports de tests, déclarations fournisseurs, références aux normes harmonisées. Plan d'intégration PDM ou GED, politique de conservation et piste d'audit.",
          },
          {
            icon: ShieldCheck,
            title: "Bibliothèque de preuves et passerelle normes",
            description:
              "Passerelle entre les articles PPWR, les normes harmonisées applicables (série EN 13427 et nouveaux mandats) et les rapports de tests présents dans votre chaîne d'approvisionnement. Liste des manques par SKU et plan de tests pour les combler.",
          },
          {
            icon: Workflow,
            title: "Modèle de gouvernance DoC",
            description:
              "RACI pour le fabricant, le mandataire, l'importateur et le distributeur. Workflow de validation intégré à votre processus de lancement, procédure de gestion des évolutions et escalade fournisseur.",
          },
        ]}
        timeToDeliver="3 à 5 semaines pour un portefeuille typique de 100 à 500 SKU"
        teamComposition="1 associé, 1 analyste réglementaire senior, 1 lead systèmes qualité"
      />

      <HowWeWork
        locale={locale}
        title="Notre méthode — cinq jalons, du dossier vierge à l'audit-ready"
        steps={[
          {
            step: "01",
            title: "NDA, périmètre et cartographie des opérateurs obligés",
            duration: "Semaine 0",
            description:
              "NDA mutuel. Nous cartographions chaque entité juridique qui place des emballages sur le marché européen, les États membres ciblés et le dispositif mandataire ou importateur par pays. Le maître SKU est enregistré.",
          },
          {
            step: "02",
            title: "Évaluation des preuves article par article",
            duration: "Semaines 1-2",
            description:
              "Nous testons la base de preuves existante de chaque SKU contre les articles 5, 6, 7, 9, 10, 11 et 24. Manques, revendications fournisseurs non étayées et citations de normes harmonisées manquantes sont listés.",
          },
          {
            step: "03",
            title: "Rédaction de la DoC et industrialisation des modèles",
            duration: "Semaines 2-3",
            description:
              "Modèles alignés sur l'Annexe VII par famille d'emballage, multilingues le cas échéant, avec variantes fabricant ou mandataire. Le texte juridique est revu au regard des obligations européennes et nationales.",
          },
          {
            step: "04",
            title: "Architecture du dossier technique et intégration GED",
            duration: "Semaines 3-4",
            description:
              "Plan documentaire, politique de conservation et intégration dans votre PDM ou GED. Le workflow de récupération est conçu pour livrer le dossier de tout SKU dans les 48 heures suivant une demande de surveillance du marché.",
          },
          {
            step: "05",
            title: "Comité de pilotage et gouvernance dix ans",
            duration: "Semaines 4-5",
            description:
              "Nous remettons les modèles de DoC, l'architecture du dossier technique, la RACI et la procédure de gestion des évolutions. Des revues trimestrielles sont planifiées ; nous remettons le calendrier des actes qui affecteront les DoC futures.",
          },
        ]}
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2 rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {h.eyebrow}
            </span>
            <h2
              className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {h.title}
            </h2>
            <p
              className="mt-4 text-base leading-relaxed text-muted-foreground"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {h.intro}
            </p>
          </div>

          <div className="mt-10">
            <ComparisonTable
              usLabel="Pactum"
              competitor1Label={h.big4}
              competitor2Label={h.sustainability}
              caption={h.caption}
              rows={[
                {
                  criterion: "Spécialisation pure-player PPWR",
                  us: { type: "yes", text: "Article 39 au quotidien" },
                  competitor1: { type: "no", text: "Une offre dans un portefeuille RSE" },
                  competitor2: { type: "no", text: "Généraliste économie circulaire" },
                },
                {
                  criterion: "Veille réglementaire",
                  us: { type: "yes", text: "Règlement 2019/1020 et normes harmonisées suivis chaque semaine" },
                  competitor1: { type: "mixed", text: "Briefings trimestriels" },
                  competitor2: { type: "no", text: "Au coup par coup" },
                },
                {
                  criterion: "Délai au premier livrable",
                  us: { type: "yes", text: "Arsenal DoC en 3 à 5 semaines" },
                  competitor1: { type: "no", text: "10 à 16 semaines" },
                  competitor2: { type: "no", text: "8 à 12 semaines" },
                },
                {
                  criterion: "Périmètre fixe, prix fixe",
                  us: { type: "yes", text: "Devis par tranche de SKU avant kick-off" },
                  competitor1: { type: "no", text: "Régie (T&M)" },
                  competitor2: { type: "mixed", text: "Parfois" },
                },
                {
                  criterion: "Engagement NDA en amont",
                  us: { type: "yes", text: "Signé avant tout échange de données" },
                  competitor1: { type: "mixed", text: "MSA standard" },
                  competitor2: { type: "mixed", text: "MSA standard" },
                },
                {
                  criterion: "Équipe couvrant l'UE",
                  us: { type: "yes", text: "Analystes multi-juridictions en UE" },
                  competitor1: { type: "yes", text: "Global, souvent piloté hors UE" },
                  competitor2: { type: "mixed", text: "Pilotage mono-pays fréquent" },
                },
              ]}
            />
          </div>
        </div>
      </section>

      <FAQ
        title="Questions sur la Déclaration de conformité (article 39)"
        items={FAQ_ITEMS_FOR_FAQ}
      />

      <section className="bg-[#f5f7f4] py-12">
        <div className="mx-auto max-w-[1080px] px-6">
          <p
            className="text-sm text-muted-foreground"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {CONTINUE_READING.fr}{" "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/services/ppwr-gap-analysis`}
            >
              Analyse des écarts PPWR
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/services/recyclability-assessment`}
            >
              Évaluation de recyclabilité (article 6)
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/services/pfas-compliance`}
            >
              Conformité PFAS (article 5)
            </a>
            {" · "}
            <a
              className="font-semibold text-foreground hover:text-[#10b981]"
              href={`/${locale}/resources/ppwr-timeline`}
            >
              Calendrier PPWR 2025-2040
            </a>
            .
          </p>
        </div>
      </section>

      <ContactCTA
        title="Soyez audit-ready avant le 12 août 2026"
        description="Réservez une session de travail de 30 minutes. Nous confirmons les entités juridiques et le périmètre SKU, signons le NDA et démarrons la construction de la DoC dans la semaine."
      />

      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME_FR,
          description: META_FR.description,
          serviceType: "Déclaration de conformité (article 39) PPWR",
          url: SERVICE_URL,
        })}
      />
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
    </>
  );
}

export default async function DeclarationOfConformityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  if (locale === "fr") return <FrenchVersion locale={locale} />;
  return <EnglishVersion locale={locale} />;
}
