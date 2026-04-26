const STATS = [
  { value: "≈18 Mt", label: "Transport packaging placed in the EU automotive supply chain each year" },
  { value: "55%", label: "Tier-1 SKUs likely to grade Class C against draft Article 6 design-for-recycling criteria" },
  { value: "€1.6-3.2k", label: "Estimated cost-to-grade-up per ranged transport SKU (tooling, material switch, testing)" },
  { value: "11 weeks", label: "Average time from gap analysis to a signed Declaration of Conformity (Article 39)" },
];

export function AutomotiveStats() {
  return (
    <section className="bg-white border-y border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {STATS.map((s) => (
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
