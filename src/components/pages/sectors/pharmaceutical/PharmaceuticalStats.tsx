const STATS = [
  { value: "≈3.6 Mt", label: "Primary, secondary and tertiary pharmaceutical packaging placed in the EU each year" },
  { value: "47%", label: "Contact-sensitive non-PET plastic SKUs at risk of grading Class C against draft Article 6 criteria" },
  { value: "€3.4-7.2k", label: "Estimated cost-to-grade-up per affected SKU (regulatory variation, MA filing, blister substrate switch)" },
  { value: "14 weeks", label: "Average time from gap analysis to a signed Declaration of Conformity (Article 39)" },
];

export function PharmaceuticalStats() {
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
