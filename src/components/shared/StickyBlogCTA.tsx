import Link from "next/link";
import { ArrowRight, Recycle, ShieldCheck, FileCheck } from "lucide-react";

export function StickyBlogCTA() {
  return (
    <aside className="sticky top-28 space-y-4">
      <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
        <div className="relative h-36 overflow-hidden bg-gradient-to-br from-[#d1fae5] via-white to-[#10b981]/15">
          <div
            aria-hidden
            className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#10b981]/20 blur-2xl"
          />
          <div className="absolute inset-3 rounded-xl border border-border bg-white shadow-md p-3">
            <div className="flex items-center gap-1.5 border-b border-border pb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
              <span
                className="ml-2 text-[9px] font-semibold text-muted-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                Pactum · PPWR readiness
              </span>
            </div>
            <div className="mt-2 space-y-1.5">
              {[
                { Icon: Recycle, label: "Recyclability A/B/C", val: "76%" },
                { Icon: ShieldCheck, label: "PFAS screened", val: "184" },
                { Icon: FileCheck, label: "DoC drafted", val: "12" },
              ].map((r) => (
                <div key={r.label} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#d1fae5] text-[#10b981]">
                    <r.Icon size={10} />
                  </div>
                  <span className="flex-1 text-[10px] text-foreground truncate">{r.label}</span>
                  <span className="rounded bg-[#f5f7f4] px-1.5 py-0.5 text-[10px] font-bold text-[#10b981]">
                    {r.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Pactum
          </p>
          <h3
            className="mt-2 text-lg font-bold text-foreground leading-tight"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            From PPWR worry to PPWR ready
          </h3>
          <p
            className="mt-2 text-sm text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            5-day costed roadmap mapping every SKU against Regulation (EU) 2025/40. NDA-first, no upsell.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#10b981] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#059669]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Book working session
            <ArrowRight size={14} />
          </Link>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-muted-foreground">
            <span>✓ NDA upfront</span>
            <span>✓ EU-wide</span>
            <span>✓ 5-day delivery</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-[#f5f7f4] p-4">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          Share this article
        </p>
        <div className="mt-2 flex gap-2">
          {["LinkedIn", "X", "Email"].map((n) => (
            <span
              key={n}
              className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-foreground"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
