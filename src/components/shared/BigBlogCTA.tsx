import { ArrowRight, FileCheck, ClipboardCheck, Recycle, ShieldCheck, Mail } from "lucide-react";

type Props = {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function BigBlogCTA({
  title,
  description,
  ctaLabel = "Book a working session",
  ctaHref = "/contact",
}: Props) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] overflow-hidden rounded-3xl border border-border shadow-2xl">
          {/* Left: copy */}
          <div className="bg-[#0f1a16] p-8 md:p-12 flex flex-col justify-center">
            <p
              className="text-xs font-bold uppercase tracking-[0.14em] text-[#10b981]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Ready for PPWR?
            </p>
            <h3
              className="mt-3 text-3xl md:text-4xl font-bold text-white leading-[1.1]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {title}
            </h3>
            <p
              className="mt-4 text-base md:text-lg text-white/80 leading-relaxed"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={ctaHref}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#10b981] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#059669]"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {ctaLabel}
                <ArrowRight size={14} />
              </a>
              <a
                href="/resources/ppwr-readiness-assessment"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                <Mail size={14} />
                Free readiness check
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/60">
              <span>✓ NDA on request</span>
              <span>✓ 5-day roadmap delivery</span>
              <span>✓ EU-wide team</span>
            </div>
          </div>

          {/* Right: mockup */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#d1fae5]/70 via-white to-[#10b981]/20 p-6 md:p-10 flex items-center justify-center">
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#10b981]/20 blur-3xl"
            />
            <div className="relative w-full max-w-md rounded-2xl border border-border bg-white shadow-2xl overflow-hidden">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
                <span
                  className="ml-3 text-xs font-semibold text-muted-foreground"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  Pactum · PPWR readiness board
                </span>
              </div>
              <div className="p-4 space-y-2.5">
                {[
                  { Icon: ClipboardCheck, label: "Portfolio scoping", sub: "184 SKUs mapped", tag: "Done", color: "bg-[#f5f7f4] text-muted-foreground" },
                  { Icon: Recycle, label: "Recyclability grading", sub: "Class A/B/C · 38 SKUs at risk", tag: "Live", color: "bg-[#d1fae5] text-[#065f46]" },
                  { Icon: ShieldCheck, label: "PFAS screening", sub: "12 SKUs flagged > 25 ppb", tag: "Live", color: "bg-[#d1fae5] text-[#065f46]" },
                  { Icon: FileCheck, label: "Declaration of Conformity", sub: "Drafted · Art. 39 ready", tag: "Done", color: "bg-[#f5f7f4] text-muted-foreground" },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-[#f5f7f4] p-2.5"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white text-[#10b981]">
                      <r.Icon size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-xs font-semibold text-foreground truncate"
                        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                      >
                        {r.label}
                      </p>
                      <p className="text-[10px] text-muted-foreground truncate">{r.sub}</p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${r.color}`}
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {r.tag}
                    </span>
                  </div>
                ))}
              </div>
              <div className="m-4 mt-2 rounded-xl bg-[#0f1a16] p-3 text-white">
                <p
                  className="text-[10px] font-bold uppercase tracking-wider text-[#10b981]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  Compliance status · Aug 2026
                </p>
                <p className="mt-1 text-[11px] text-white/80 leading-relaxed">
                  76% portfolio compliant · 4 priority actions queued for steerco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
