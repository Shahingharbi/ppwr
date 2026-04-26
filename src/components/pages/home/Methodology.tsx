import { ScanSearch, FileSearch, Recycle, ShieldCheck, Map } from "lucide-react";

const STEPS = [
  {
    day: "Day 1",
    Icon: ScanSearch,
    title: "Scoping & SKU intake",
    body: "NDA signed. Portfolio uploaded. Each packaging unit logged with material, weight and end-use against Article 3 definitions.",
  },
  {
    day: "Day 2",
    Icon: FileSearch,
    title: "Gap analysis",
    body: "Every SKU benchmarked against Articles 5, 6, 7, 24, 25, 29 and 39. Non-conformities flagged with the specific clause breached.",
  },
  {
    day: "Day 3",
    Icon: Recycle,
    title: "Recyclability grading",
    body: "Class A / B / C scoring per the design-for-recycling criteria. SKUs at risk for the 2030 threshold isolated.",
  },
  {
    day: "Day 4",
    Icon: ShieldCheck,
    title: "PFAS & substance review",
    body: "Targeted PFAS analysis at 25 ppb / 250 ppb thresholds. Total fluorine indicator at 50 ppm. Substitution shortlist drafted.",
  },
  {
    day: "Day 5",
    Icon: Map,
    title: "Costed roadmap",
    body: "Owner-by-owner action plan with capex, opex and 2026 / 2030 / 2040 deadlines. Steerco-ready deck delivered.",
  },
];

export function Methodology() {
  return (
    <section
      aria-labelledby="methodology-title"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Our methodology
          </span>
          <h2
            id="methodology-title"
            className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            From scoping to costed roadmap in five working days
          </h2>
          <p
            className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            Fixed scope, fixed price, fixed outcome. The PPWR Gap Analysis is engineered
            to fit a single working week so that compliance never blocks a product launch.
          </p>
        </div>

        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-[6%] right-[6%] top-[42px] h-[2px] bg-gradient-to-r from-[#10b981]/0 via-[#10b981] to-[#10b981]/0"
            />
            <ol className="relative grid grid-cols-5 gap-4">
              {STEPS.map((step, i) => (
                <li key={step.day} className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-full border-4 border-white bg-[#0f1a16] text-[#10b981] shadow-lg">
                    <step.Icon size={28} />
                  </div>
                  <p
                    className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#10b981]"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {step.day}
                  </p>
                  <h3
                    className="mt-2 text-base font-bold leading-snug text-foreground"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-2 max-w-[200px] text-[13px] leading-relaxed text-muted-foreground"
                    style={{ fontFamily: "var(--font-maison-neue)" }}
                  >
                    {step.body}
                  </p>
                  <span
                    className="mt-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#10b981] text-[10px] font-bold text-white"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {i + 1}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <ol className="mt-12 space-y-4 lg:hidden">
          {STEPS.map((step, i) => (
            <li
              key={step.day}
              className="flex gap-5 rounded-3xl border border-border bg-[#f5f7f4] p-5"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f1a16] text-[#10b981]">
                  <step.Icon size={20} />
                </div>
                {i !== STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="mt-2 h-full w-px flex-1 bg-border"
                  />
                )}
              </div>
              <div className="flex-1 pb-2">
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#10b981]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {step.day}
                </p>
                <h3
                  className="mt-1 text-base font-bold leading-snug text-foreground"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-muted-foreground"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
