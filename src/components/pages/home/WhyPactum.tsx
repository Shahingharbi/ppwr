import { Crosshair, FileText, Calendar, Lock } from "lucide-react";

const REASONS = [
  {
    Icon: Crosshair,
    title: "Pure-play PPWR",
    body: "Not sustainability strategy. Not ESG reporting. Regulation (EU) 2025/40, only — every consultant on your case is full-time on the PPWR mandate and the 30+ delegated and implementing acts the Commission must adopt.",
  },
  {
    Icon: FileText,
    title: "Article-precise deliverables",
    body: "Every recommendation cites an article, a recital, an Annex and an applicability date. No abstract maturity grids. Your legal counsel can audit every line back to the Official Journal.",
  },
  {
    Icon: Calendar,
    title: "5-day costed roadmap",
    body: "The standard entry product is fixed scope, fixed price, fixed deadline. You receive a steerco-ready deck and a CFO-ready capex / opex plan in one working week.",
  },
  {
    Icon: Lock,
    title: "NDA-first engagements",
    body: "Your packaging portfolio is competitive intelligence. Every engagement opens with a mutual NDA, and our analysts work in segregated client environments by default.",
  },
];

export function WhyPactum() {
  return (
    <section
      aria-labelledby="why-pactum-title"
      className="bg-[#f5f7f4] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span
              className="inline-block rounded-full border border-border bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#10b981]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Why Pactum
            </span>
            <h2
              id="why-pactum-title"
              className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              The advisory built for one Regulation
            </h2>
            <p
              className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              Generalist consultancies sell PPWR as one slide in a sustainability deck.
              Pactum was founded to do nothing else, with the depth that demands.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {REASONS.map((r) => (
              <article
                key={r.title}
                className="rounded-3xl border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f1a16] text-[#10b981]">
                  <r.Icon size={22} strokeWidth={2} />
                </div>
                <h3
                  className="mt-5 text-xl font-bold leading-snug text-foreground"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {r.title}
                </h3>
                <p
                  className="mt-3 text-[15px] leading-relaxed text-muted-foreground"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {r.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
