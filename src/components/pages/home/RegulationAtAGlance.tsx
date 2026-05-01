import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";

type Obligation = {
  article: string;
  headline: string;
  summary: string;
  href: string;
};

type RegulationCopy = {
  chip: string;
  title: string;
  intro: string;
  readMore: string;
  obligations: Obligation[];
};

const COPY: Record<Locale, RegulationCopy> = {
  fr: {
    chip: "Le règlement en un coup d'œil",
    title: "Six obligations qui réécrivent l'emballage en Europe",
    intro:
      "Le Règlement (UE) 2025/40 remplace la Directive 94/62/CE et engage chaque opérateur économique plaçant des emballages sur le marché de l'Union. Voici les six articles qui pèsent pour 90 % du travail de mise en conformité d'ici 2030.",
    readMore: "En savoir plus",
    obligations: [
      {
        article: "Art. 5",
        headline: "PFAS dans les emballages au contact alimentaire",
        summary:
          "Les PFAS intentionnellement ajoutés sont interdits à partir de 25 ppb (substance unique), 250 ppb (somme) ou 50 ppm (fluor total) à compter du 12 août 2026.",
        href: "/services/pfas-compliance",
      },
      {
        article: "Art. 6",
        headline: "Recyclabilité par conception",
        summary:
          "Tous les emballages classés A, B ou C dès le 1er janvier 2030. À partir du 1er janvier 2038, seules les classes A et B subsistent sur le marché européen.",
        href: "/services/recyclability-assessment",
      },
      {
        article: "Art. 7",
        headline: "Contenu recyclé dans les plastiques",
        summary:
          "Seuils de contenu recyclé de 30 % / 10 % / 30 % / 35 % à partir de 2030, montant à 50 % / 25 % / 65 % / 65 % en 2040.",
        href: "/services/recycled-content-roadmap",
      },
      {
        article: "Art. 24",
        headline: "Ratio d'espace vide",
        summary:
          "Maximum 50 % d'espace vide dans les emballages groupés, de transport et e-commerce à partir du 12 août 2028.",
        href: "/services/ppwr-gap-analysis",
      },
      {
        article: "Art. 29",
        headline: "Objectifs de réemploi et de rechargement",
        summary:
          "40 % de réemploi des emballages de transport en 2030, 70 % en 2040 ; 10 % d'emballages de boissons réemployables en 2030, 40 % en 2040.",
        href: "/services/reuse-targets-strategy",
      },
      {
        article: "Art. 39",
        headline: "Déclaration de conformité",
        summary:
          "DoC établie avant la mise sur le marché ; documentation technique conservée 10 ans et produite sur demande des autorités de surveillance.",
        href: "/services/declaration-of-conformity",
      },
    ],
  },
  en: {
    chip: "The regulation at a glance",
    title: "Six obligations that rewrite EU packaging",
    intro:
      "Regulation (EU) 2025/40 replaces Directive 94/62/EC and binds every economic operator placing packaging on the EU market. Below — the six articles that drive 90% of compliance work between now and 2030.",
    readMore: "Read more",
    obligations: [
      {
        article: "Art. 5",
        headline: "PFAS in food-contact packaging",
        summary:
          "Intentionally added PFAS banned at or above 25 ppb (single substance), 250 ppb (sum) or 50 ppm (total fluorine) from 12 August 2026.",
        href: "/services/pfas-compliance",
      },
      {
        article: "Art. 6",
        headline: "Recyclability by design",
        summary:
          "All packaging graded Class A, B or C from 1 January 2030. From 1 January 2038, only A and B remain on the EU market.",
        href: "/services/recyclability-assessment",
      },
      {
        article: "Art. 7",
        headline: "Recycled content in plastics",
        summary:
          "30% / 10% / 30% / 35% recycled content thresholds from 2030, rising to 50% / 25% / 65% / 65% from 2040.",
        href: "/services/recycled-content-roadmap",
      },
      {
        article: "Art. 24",
        headline: "Empty space ratio",
        summary:
          "Maximum 50% empty space in grouped, transport and e-commerce packaging from 12 August 2028.",
        href: "/services/ppwr-gap-analysis",
      },
      {
        article: "Art. 29",
        headline: "Reuse and refill targets",
        summary:
          "40% transport-packaging reuse by 2030, 70% by 2040; 10% reusable beverage packaging by 2030, 40% by 2040.",
        href: "/services/reuse-targets-strategy",
      },
      {
        article: "Art. 39",
        headline: "Declaration of Conformity",
        summary:
          "DoC drawn up before placing on market; technical documentation kept for 10 years and produced on surveillance request.",
        href: "/services/declaration-of-conformity",
      },
    ],
  },
};

export function RegulationAtAGlance({ locale }: { locale: Locale }) {
  const copy = COPY[locale];
  return (
    <section
      aria-labelledby="regulation-title"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {copy.chip}
          </span>
          <h2
            id="regulation-title"
            className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {copy.title}
          </h2>
          <p
            className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {copy.intro}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {copy.obligations.map((o) => (
            <article
              key={o.article}
              className="group flex flex-col rounded-3xl border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#10b981]/40 hover:shadow-lg"
            >
              <span
                className="inline-flex w-fit items-center rounded-lg bg-[#0f1a16] px-2.5 py-1 text-[11px] font-bold tracking-wide text-[#10b981]"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {o.article}
              </span>
              <h3
                className="mt-4 text-xl font-bold leading-snug text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {o.headline}
              </h3>
              <p
                className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                {o.summary}
              </p>
              <Link
                href={`/${locale}${o.href}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#10b981] transition-all group-hover:gap-2.5"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {copy.readMore}
                <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
