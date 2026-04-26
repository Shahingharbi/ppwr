const DEFAULT_LOGOS = [
  "BEVERA Group",
  "Lumière Cosmetics",
  "Tier-1 Automotive · NDA",
  "Northern Foods",
  "Mediterranean Spirits",
  "Pharma Continental",
];

type Props = {
  logos?: string[];
  caption?: string;
};

export function LogosStrip({
  logos = DEFAULT_LOGOS,
  caption = "Trusted by packaging-intensive groups operating across the EU",
}: Props) {
  return (
    <section className="bg-[#f5f7f4] py-14">
      <div className="mx-auto max-w-[1280px] px-6">
        <p
          className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          {caption}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {logos.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
