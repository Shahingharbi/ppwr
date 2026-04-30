"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import type { Locale } from "@/lib/i18n/types";
import { getDict } from "@/lib/i18n/dict";

const STORAGE_KEY = "pactum-topbanner-dismissed";
const PPWR_GENERAL_APPLICATION = new Date("2026-08-12T00:00:00Z");

type TopBannerProps = {
  /** REQUIRED — the chrome must always be invoked from a locale-aware layout. */
  locale: Locale;
};

export function TopBanner({ locale }: TopBannerProps) {
  const dict = getDict(locale);
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    if (typeof window !== "undefined") {
      const isDismissed = window.localStorage.getItem(STORAGE_KEY) === "1";
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDismissed(isDismissed);
    }

    const now = new Date();
    const diffMs = PPWR_GENERAL_APPLICATION.getTime() - now.getTime();
    const diffDays = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDaysLeft(diffDays);
  }, []);

  function handleDismiss() {
    setDismissed(true);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "1");
    }
  }

  if (mounted && dismissed) return null;

  const daysLabel = daysLeft === null ? "—" : dict.topBanner.daysLeft(daysLeft);

  return (
    <div
      className="w-full bg-[#0f1a16] text-white h-8 flex items-center"
      role="region"
      aria-label="PPWR regulatory countdown"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <span
            className="hidden sm:inline-flex items-center rounded-full border border-[#10b981]/40 bg-[#10b981]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {dict.topBanner.chip}
          </span>
          <p
            className="truncate text-[12px] sm:text-[13px] leading-none text-white/90"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            <span className="font-semibold text-white">{dict.topBanner.label}</span>{" "}
            <span className="hidden sm:inline">{dict.topBanner.application} — </span>
            <span className="text-[#10b981] font-semibold">{daysLabel}</span>
          </p>
        </div>
        <button
          type="button"
          onClick={handleDismiss}
          className="flex-shrink-0 text-white/70 hover:text-white transition-colors"
          aria-label={dict.topBanner.dismiss}
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
