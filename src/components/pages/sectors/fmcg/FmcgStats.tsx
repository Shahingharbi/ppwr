import type { Locale } from "@/lib/i18n/types";

const STATS_EN = [
  { value: "≈79 Mt", label: "Packaging placed annually in the EU FMCG channel (food, beverage, household, personal care)" },
  { value: "62%", label: "Branded plastic SKUs likely to grade Class C against draft Article 6 design-for-recycling criteria today" },
  { value: "€2.1-4.5k", label: "Estimated cost-to-grade-up per affected SKU (artwork, substrate switch, printability, recyclability testing)" },
  { value: "9 weeks", label: "Average time from gap analysis to a signed Declaration of Conformity (Article 39)" },
];

const STATS_FR = [
  { value: "≈79 Mt", label: "Emballages mis sur le marché chaque année dans le canal FMCG de l’UE (alimentaire, boissons, hygiène, soin)" },
  { value: "62 %", label: "SKU plastiques de marque susceptibles d’être notés Classe C face aux critères d’éco-conception (Art. 6 — projet)" },
  { value: "2,1-4,5 k€", label: "Coût estimé pour faire monter un SKU concerné en classe (graphisme, substrat, imprimabilité, tests de recyclabilité)" },
  { value: "9 semaines", label: "Délai moyen entre l’analyse des écarts et la signature de la Déclaration de conformité (Art. 39)" },
];

export function FmcgStats({ locale = "en" }: { locale?: Locale }) {
  const stats = locale === "fr" ? STATS_FR : STATS_EN;
  return (
    <section className="bg-white border-y border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p
                className="text-3xl md:text-4xl font-bold text-[#10b981]"
                style={{ fontFamily: "var(--font-ginto-nord)" }}
              >
                {s.value}
              </p>
              <p
                className="mt-2 text-xs md:text-sm text-muted-foreground leading-snug"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
