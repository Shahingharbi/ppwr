import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  Recycle,
  ShieldCheck,
  FileCheck,
  Mail,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/types";

type Stat = { value: string; label: string };
type Row = { art: string; label: string; sub: string; tag: string };

type HeroCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  stats: Stat[];
  boardTitle: string;
  liveTag: string;
  rows: Row[];
  statusEyebrow: string;
  statusBody: string;
};

const COPY: Record<Locale, HeroCopy> = {
  fr: {
    eyebrow: "RÈGLEMENT (UE) 2025/40 · APPLICATION GÉNÉRALE 12 AOÛT 2026",
    title: "La conformité PPWR, méthodique. Article par article.",
    subtitle:
      "Pactum traduit le Règlement (UE) 2025/40 en feuille de route audit-ready couvrant la recyclabilité, le contenu recyclé, le réemploi, les PFAS et la Déclaration de conformité — pour les groupes industriels intensifs en emballage opérant dans toute l'Union européenne.",
    primaryCta: "Réserver une session de travail",
    secondaryCta: "Diagnostic PPWR gratuit",
    stats: [
      { value: "30+", label: "Actes délégués suivis" },
      { value: "5 jours", label: "Livraison de la feuille de route" },
      { value: "Art. 5 à 47", label: "Périmètre couvert" },
    ],
    boardTitle: "Pactum · Tableau de conformité PPWR",
    liveTag: "En direct",
    rows: [
      {
        art: "Art. 39",
        label: "Cadrage du portefeuille",
        sub: "184 SKU cartographiés sur 6 sites",
        tag: "Terminé",
      },
      {
        art: "Art. 6",
        label: "Notation de recyclabilité",
        sub: "Classe A 71 % · B 22 % · C 7 % à risque pour 2030",
        tag: "En direct",
      },
      {
        art: "Art. 5",
        label: "Criblage PFAS",
        sub: "12 SKU signalés > 25 ppb · 4 changements de fournisseurs en file",
        tag: "En direct",
      },
      {
        art: "Art. 7",
        label: "Sourcing du contenu recyclé",
        sub: "30 % PET qualité contact alimentaire · plan 18 mois signé",
        tag: "Suivi",
      },
    ],
    statusEyebrow: "Statut conformité · août 2026",
    statusBody:
      "4 actions prioritaires en file pour le prochain comité de pilotage · Propriétaire par propriétaire.",
  },
  en: {
    eyebrow: "Regulation (EU) 2025/40 · Applies 12 Aug 2026",
    title: "PPWR compliance, engineered. Article by article.",
    subtitle:
      "Pactum turns Regulation (EU) 2025/40 into an audit-ready roadmap covering recyclability, recycled content, reuse, PFAS and Declaration of Conformity — for FMCG, automotive, e-commerce and pharma groups operating across the EU.",
    primaryCta: "Book a working session",
    secondaryCta: "Free PPWR readiness check",
    stats: [
      { value: "30+", label: "Delegated acts tracked" },
      { value: "5 days", label: "Roadmap delivery" },
      { value: "Art. 5–47", label: "Coverage" },
    ],
    boardTitle: "Pactum · PPWR readiness board",
    liveTag: "Live",
    rows: [
      {
        art: "Art. 39",
        label: "Portfolio scoping",
        sub: "184 SKUs mapped across 6 plants",
        tag: "Done",
      },
      {
        art: "Art. 6",
        label: "Recyclability grading",
        sub: "Class A 71% · B 22% · C 7% at risk for 2030",
        tag: "Live",
      },
      {
        art: "Art. 5",
        label: "PFAS screening",
        sub: "12 SKUs flagged > 25 ppb · 4 supplier swaps queued",
        tag: "Live",
      },
      {
        art: "Art. 7",
        label: "Recycled content sourcing",
        sub: "30% PET food-grade · 18-month plan signed",
        tag: "Tracking",
      },
    ],
    statusEyebrow: "Compliance status · Aug 2026",
    statusBody: "4 priority actions queued for next steerco · Owner-by-owner.",
  },
};

const ROW_ICONS = [ClipboardCheck, Recycle, ShieldCheck, FileCheck];
const ROW_COLORS = [
  "bg-[#f5f7f4] text-muted-foreground",
  "bg-[#d1fae5] text-[#065f46]",
  "bg-[#d1fae5] text-[#065f46]",
  "bg-amber-100 text-amber-800",
];

export function Hero({ locale }: { locale: Locale }) {
  const copy = COPY[locale];
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-to-b from-[#f5f7f4] to-white pt-14 pb-20 md:pt-20 md:pb-28 md:min-h-[80vh] flex items-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-[#10b981]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#065f46]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-fade-up">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-[#10b981]/30 bg-[#d1fae5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#10b981]" />
            {copy.eyebrow}
          </span>

          <h1
            id="hero-title"
            className="mt-5 text-4xl leading-[1.02] font-bold text-[#0f1a16] md:text-6xl lg:text-[68px]"
            style={{ fontFamily: "var(--font-ginto-nord)" }}
          >
            {copy.title}
          </h1>

          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {copy.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#10b981] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#059669] hover:shadow-md"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {copy.primaryCta}
              <ArrowRight size={16} />
            </Link>
            <Link
              href={`/${locale}/resources/ppwr-readiness-assessment`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-bold text-[#0f1a16] transition-colors hover:bg-[#f5f7f4]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              <Mail size={16} />
              {copy.secondaryCta}
            </Link>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
            {copy.stats.map((stat) => (
              <div key={stat.label}>
                <dt
                  className="text-2xl font-bold text-[#0f1a16] md:text-3xl"
                  style={{ fontFamily: "var(--font-ginto-nord)" }}
                >
                  {stat.value}
                </dt>
                <dd
                  className="mt-1 text-xs leading-snug text-muted-foreground"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: PPWR readiness board mockup */}
        <div className="relative animate-fade-in">
          <div
            aria-hidden
            className="absolute -inset-8 rounded-[48px] bg-gradient-to-br from-[#10b981]/20 via-transparent to-[#065f46]/15 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-border bg-[#0f1a16] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
              <span
                className="ml-3 text-xs font-bold tracking-wide text-white/80"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {copy.boardTitle}
              </span>
              <span
                className="ml-auto rounded-full bg-[#10b981]/20 px-2 py-0.5 text-[10px] font-bold text-[#10b981]"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {copy.liveTag}
              </span>
            </div>

            <div className="space-y-2.5 p-5">
              {copy.rows.map((row, idx) => {
                const Icon = ROW_ICONS[idx];
                const color = ROW_COLORS[idx];
                return (
                  <div
                    key={row.label}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-[#f5f7f4] p-3"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#10b981]">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="rounded bg-white px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-[#065f46]"
                          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                        >
                          {row.art}
                        </span>
                        <p
                          className="truncate text-sm font-bold text-foreground"
                          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                        >
                          {row.label}
                        </p>
                      </div>
                      <p
                        className="mt-0.5 truncate text-[11px] text-muted-foreground"
                        style={{ fontFamily: "var(--font-maison-neue)" }}
                      >
                        {row.sub}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${color}`}
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {row.tag}
                    </span>
                  </div>
                );
              })}

              <div className="mt-3 rounded-2xl bg-[#0f1a16] p-4 text-white">
                <div className="flex items-center justify-between">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#10b981]"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {copy.statusEyebrow}
                  </p>
                  <span
                    className="text-[11px] font-bold text-white"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    76 %
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#10b981]"
                    style={{ width: "76%" }}
                  />
                </div>
                <p
                  className="mt-2 text-[11px] leading-relaxed text-white/80"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {copy.statusBody}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
