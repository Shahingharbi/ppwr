import { CheckCircle2, FileSearch, ScanLine, Recycle, FlaskConical, ClipboardCheck } from "lucide-react";

export function WorkflowVisual() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f5f7f4] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            The five-day Pactum engagement
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-bold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            From SKU intake to costed PPWR roadmap in five business days
          </h2>
          <p
            className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            Every Pactum gap analysis follows the same fixed-scope, fixed-price structure. We start under
            NDA, work article by article through Regulation (EU) 2025/40, and present a costed action plan
            tied to the 12 August 2026, 1 January 2030 and 1 January 2040 deadlines.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Article-by-article mapping against your packaging portfolio",
              "Recyclability Class A, B or C grading per packaging unit",
              "Article 7 recycled-content quantification and gap to 2030 targets",
              "PFAS targeted analysis and Annex V format-restriction screening",
              "Costed 24-month roadmap with prioritised investments",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-[#10b981]" />
                <span
                  className="text-sm md:text-base text-foreground"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual mockup */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-8 rounded-[48px] bg-gradient-to-br from-[#10b981]/15 via-transparent to-[#10b981]/10 blur-2xl"
          />
          <div className="relative rounded-3xl border border-border bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
              </div>
              <p
                className="text-xs font-semibold text-muted-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                Pactum · PPWR gap analysis · week one
              </p>
            </div>

            <div className="mt-4 space-y-3">
              {[
                {
                  icon: FileSearch,
                  title: "Day 1 — Portfolio scoping",
                  value: "NDA executed · SKU intake · obligated-operator mapping",
                  time: "Mon",
                  tag: "Kick-off",
                  tagColor: "bg-[#d1fae5] text-[#065f46]",
                },
                {
                  icon: ScanLine,
                  title: "Day 2 — Article-by-article gap analysis",
                  value: "Articles 5-13, 24, 29-30, 39, 45 mapped to your portfolio",
                  time: "Tue",
                  tag: "In progress",
                  tagColor: "bg-[#d1fae5] text-[#065f46]",
                },
                {
                  icon: Recycle,
                  title: "Day 3 — Recyclability and recycled content",
                  value: "Class A/B/C grading · Article 7 rPET, rHDPE, rPP quantification",
                  time: "Wed",
                  tag: "In progress",
                  tagColor: "bg-[#d1fae5] text-[#065f46]",
                },
                {
                  icon: FlaskConical,
                  title: "Day 4 — PFAS and Annex V screening",
                  value: "25 ppb / 250 ppb / 50 ppm review · format-ban exposure",
                  time: "Thu",
                  tag: "Scheduled",
                  tagColor: "bg-[#f5f7f4] text-muted-foreground",
                },
                {
                  icon: ClipboardCheck,
                  title: "Day 5 — Costed roadmap presentation",
                  value: "24-month action plan · prioritised CAPEX · DoC technical file outline",
                  time: "Fri",
                  tag: "Scheduled",
                  tagColor: "bg-[#f5f7f4] text-muted-foreground",
                },
              ].map((row) => (
                <div
                  key={row.title}
                  className="flex items-center gap-3 rounded-xl border border-border bg-[#f5f7f4] p-3"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white text-[#10b981]">
                    <row.icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-semibold text-foreground truncate"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {row.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">{row.value}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${row.tagColor}`}
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {row.tag}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{row.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl bg-[#0f1a16] p-3 text-white">
              <p
                className="text-xs font-semibold text-[#10b981]"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                Deliverable handover · Friday 17:00 CET
              </p>
              <p className="mt-1 text-xs text-white/80 leading-relaxed">
                Article-by-article roadmap, recyclability grading and DoC technical file outline issued
                under NDA, with a one-hour readout for the steering committee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
