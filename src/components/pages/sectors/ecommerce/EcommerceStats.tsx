import type { Locale } from "@/lib/i18n/types";

const STATS_EN = [
  { value: "≈8.4 Mt", label: "Corrugated and plastic e-commerce packaging placed in the EU each year (last-mile parcels)" },
  { value: "68%", label: "Outbound parcels likely to exceed the 50% Article 24 empty-space ratio at current right-sizing logic" },
  { value: "€0.9-2.4k", label: "Estimated cost-to-grade-up per packaging SKU (carton range, void-fill swap, label re-spec)" },
  { value: "8 weeks", label: "Average time from gap analysis to a signed Declaration of Conformity (Article 39)" },
];

const STATS_FR = [
  { value: "≈8,4 Mt", label: "Emballages e-commerce carton et plastique mis sur le marché de l’UE chaque année (colis dernier kilomètre)" },
  { value: "68 %", label: "Colis sortants susceptibles de dépasser le ratio d’espace vide de 50 % (Art. 24) avec la logique actuelle de right-sizing" },
  { value: "0,9-2,4 k€", label: "Coût estimé pour faire monter un SKU emballage en classe (gamme cartons, calage, re-spec étiquette)" },
  { value: "8 semaines", label: "Délai moyen entre l’analyse des écarts et la signature de la Déclaration de conformité (Art. 39)" },
];

export function EcommerceStats({ locale = "en" }: { locale?: Locale }) {
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
