"use client";

import { ArrowRight, Gauge } from "lucide-react";

import type { Locale } from "@/lib/i18n/types";
import { getDict } from "@/lib/i18n/dict";
import { localizeHref } from "@/lib/site-config";

type Props = {
  locale?: Locale;
};

export function StickyMobileCTA({ locale }: Props = {}) {
  const effectiveLocale: Locale = locale ?? "en";
  const dict = getDict(effectiveLocale);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-border px-4 py-3 flex gap-2 shadow-lg">
      <a
        href={localizeHref("/resources/ppwr-readiness-assessment", effectiveLocale)}
        className="flex-1 flex items-center justify-center gap-2 rounded-full border border-border py-2.5 text-sm font-semibold text-foreground"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        <Gauge size={14} /> {dict.stickyMobile.readiness}
      </a>
      <a
        href={localizeHref("/contact", effectiveLocale)}
        className="flex-[1.5] flex items-center justify-center gap-1.5 rounded-full bg-[#10b981] py-2.5 text-sm font-semibold text-white hover:bg-[#059669] transition-colors"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        {dict.stickyMobile.book}
        <ArrowRight size={14} />
      </a>
    </div>
  );
}
