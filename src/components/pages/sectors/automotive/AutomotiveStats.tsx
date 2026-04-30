import type { Locale } from "@/lib/i18n/types";

const STATS_EN = [
  { value: "≈18 Mt", label: "Transport packaging placed in the EU automotive supply chain each year" },
  { value: "55%", label: "Tier-1 SKUs likely to grade Class C against draft Article 6 design-for-recycling criteria" },
  { value: "€1.6-3.2k", label: "Estimated cost-to-grade-up per ranged transport SKU (tooling, material switch, testing)" },
  { value: "11 weeks", label: "Average time from gap analysis to a signed Declaration of Conformity (Article 39)" },
];

const STATS_FR = [
  { value: "≈18 Mt", label: "Emballages de transport mis sur le marché chaque année dans la chaîne automobile européenne" },
  { value: "55 %", label: "SKU de rang 1 susceptibles d’être notés Classe C face aux critères d’éco-conception (Art. 6 — projet)" },
  { value: "1,6-3,2 k€", label: "Coût estimé pour faire passer un SKU transport à la gamme conforme (outillage, changement matière, tests)" },
  { value: "11 semaines", label: "Délai moyen entre l’analyse des écarts et la signature de la Déclaration de conformité (Art. 39)" },
];

export function AutomotiveStats({ locale = "en" }: { locale?: Locale }) {
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
