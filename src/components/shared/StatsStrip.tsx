type Stat = { value: string; label: string };

const DEFAULT_STATS: Stat[] = [
  { value: "12 Aug 2026", label: "PPWR general application date" },
  { value: "5 days", label: "From NDA to costed roadmap" },
  { value: "27 + EEA", label: "Member States covered by every engagement" },
  { value: "Up to 4%", label: "Of turnover at penalty risk under Art. 68" },
];

type Props = {
  items?: Stat[];
};

export function StatsStrip({ items = DEFAULT_STATS }: Props) {
  return (
    <section className="bg-white border-y border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {items.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p
                className="text-3xl md:text-4xl font-bold text-[#10b981]"
                style={{ fontFamily: "var(--font-ginto-nord)" }}
              >
                {s.value}
              </p>
              <p
                className="mt-1 text-xs md:text-sm text-muted-foreground leading-snug"
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
