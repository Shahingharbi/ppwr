"use client";

import { ArrowRight, Gauge } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-border px-4 py-3 flex gap-2 shadow-lg">
      <a
        href="/resources/ppwr-readiness-assessment"
        className="flex-1 flex items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-semibold text-foreground"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        <Gauge size={14} /> Readiness check
      </a>
      <a
        href="/contact"
        className="flex-[1.5] flex items-center justify-center gap-1.5 rounded-full bg-[#10b981] py-2.5 text-sm font-semibold text-white hover:bg-[#059669] transition-colors"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        Book working session
        <ArrowRight size={14} />
      </a>
    </div>
  );
}
