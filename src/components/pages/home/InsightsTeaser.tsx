import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";

type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
};

type InsightsCopy = {
  chip: string;
  title: string;
  intro: string;
  allLink: string;
  readArticle: string;
  articles: Article[];
};

const COPY: Record<Locale, InsightsCopy> = {
  fr: {
    chip: "Analyses",
    title: "Analyses approfondies de la cellule PPWR",
    intro:
      "Articles pivots, rédigés par les analystes de Pactum. Chaque pièce cite directement EUR-Lex et le CELEX 32025R0040 — sans source secondaire ni baratin marketing.",
    allLink: "Toutes les analyses",
    readArticle: "Lire l'article",
    articles: [
      {
        slug: "ppwr-2025-survival-guide-for-european-brand-owners",
        category: "Pivot",
        title: "PPWR 2025 : le guide de survie pour les metteurs sur le marché européens",
        excerpt:
          "Identité du Règlement (UE) 2025/40, périmètre des entreprises concernées, calendrier des dates clés, huit obligations à opérationnaliser, sept erreurs à éviter et plan d'action 90 jours.",
        readingTime: "12 min de lecture",
      },
      {
        slug: "pfas-food-contact-packaging-ppwr-august-2026-deadline",
        category: "Article 5",
        title: "PFAS dans les emballages au contact alimentaire : l'échéance du 12 août 2026",
        excerpt:
          "Ce qui change le 12 août 2026, seuils précis (25 ppb / 250 ppb / 50 ppm), périmètre Annexe V, méthodes d'analyse, matériaux de substitution et clauses fournisseurs à insérer dès maintenant.",
        readingTime: "9 min de lecture",
      },
      {
        slug: "recycled-content-targets-2030-2040-plastic-packaging-roadmap",
        category: "Article 7",
        title: "Contenu recyclé 2030-2040 : la feuille de route emballages plastiques",
        excerpt:
          "Les quatre catégories d'objectifs expliquées, bilan massique versus attribution libre, certification CEN et ISCC, réalités du sourcing rPET qualité contact alimentaire et plan opérationnel sur 24 mois.",
        readingTime: "11 min de lecture",
      },
    ],
  },
  en: {
    chip: "Insights",
    title: "Long-form analysis from the PPWR desk",
    intro:
      "Pillar articles, written by Pactum analysts. Each piece cites EUR-Lex and CELEX 32025R0040 directly — no second-hand sources, no marketing fluff.",
    allLink: "All insights",
    readArticle: "Read article",
    articles: [
      {
        slug: "ppwr-2025-survival-guide-for-european-brand-owners",
        category: "Pillar",
        title: "PPWR 2025: the survival guide for European brand owners",
        excerpt:
          "Identity of Regulation (EU) 2025/40, who is in scope, the key dates timeline, the eight obligations to operationalise, the seven mistakes to avoid and a 90-day action plan.",
        readingTime: "12 min read",
      },
      {
        slug: "pfas-food-contact-packaging-ppwr-august-2026-deadline",
        category: "Article 5",
        title: "PFAS in food-contact packaging: the 12 August 2026 deadline",
        excerpt:
          "What changes on 12 August 2026, exact thresholds (25 ppb / 250 ppb / 50 ppm), Annex V scope, testing methods, substitution materials and the supplier clauses to insert now.",
        readingTime: "9 min read",
      },
      {
        slug: "recycled-content-targets-2030-2040-plastic-packaging-roadmap",
        category: "Article 7",
        title: "Recycled content 2030-2040: the plastic packaging roadmap",
        excerpt:
          "The four target categories explained, mass balance vs free attribution, CEN and ISCC certification, food-grade rPET sourcing realities and a 24-month operational plan.",
        readingTime: "11 min read",
      },
    ],
  },
};

export function InsightsTeaser({ locale }: { locale: Locale }) {
  const copy = COPY[locale];
  return (
    <section
      aria-labelledby="insights-title"
      className="bg-[#f5f7f4] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span
              className="inline-block rounded-full border border-border bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#10b981]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {copy.chip}
            </span>
            <h2
              id="insights-title"
              className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {copy.title}
            </h2>
            <p
              className="mt-4 text-base leading-relaxed text-muted-foreground"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {copy.intro}
            </p>
          </div>
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#10b981] transition-all hover:gap-2.5"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {copy.allLink}
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {copy.articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${locale}/blog/${article.slug}`}
              className="group flex flex-col rounded-3xl border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#10b981]/40 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span
                  className="inline-flex items-center rounded-lg bg-[#0f1a16] px-2.5 py-1 text-[11px] font-bold tracking-wide text-[#10b981]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {article.category}
                </span>
                <span
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  <Clock size={12} />
                  {article.readingTime}
                </span>
              </div>
              <h3
                className="mt-5 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-[#10b981]"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {article.title}
              </h3>
              <p
                className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                {article.excerpt}
              </p>
              <span
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#10b981] transition-all group-hover:gap-2.5"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {copy.readArticle}
                <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
