"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Globe } from "lucide-react";

import {
  type Locale,
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
} from "@/lib/i18n/types";
import { getDict } from "@/lib/i18n/dict";
import { cn } from "@/lib/utils";

type Props = {
  currentLocale: Locale;
  className?: string;
};

/**
 * Tiny inline locale switcher for the chrome (Navbar / mobile panel).
 * Renders both supported locales as pill-style links; the current locale
 * is shown as active (non-link). Swaps the leading /<locale>/ segment of
 * the current pathname when the user picks a different language.
 */
export function LocaleSwitcher({ currentLocale, className }: Props) {
  const pathname = usePathname() ?? "/";
  const dict = getDict(currentLocale);

  function pathFor(target: Locale): string {
    // Replace the first /xx segment if present, otherwise prefix.
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === "fr" || segments[0] === "en") {
      segments[0] = target;
      return "/" + segments.join("/");
    }
    return `/${target}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-border bg-white px-1 py-1",
        className,
      )}
      role="group"
      aria-label={dict.localeSwitcher.label}
    >
      <Globe size={13} className="ml-1.5 text-[#0f1a16]/55" aria-hidden="true" />
      {SUPPORTED_LOCALES.map((loc) => {
        const isActive = loc === currentLocale;
        const label = loc.toUpperCase();
        if (isActive) {
          return (
            <span
              key={loc}
              className="rounded-full bg-[#0f1a16] px-2.5 py-0.5 text-[11px] font-semibold text-white"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              aria-current="true"
              title={LOCALE_LABELS[loc]}
            >
              {label}
            </span>
          );
        }
        return (
          <Link
            key={loc}
            href={pathFor(loc)}
            hrefLang={loc}
            className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-[#0f1a16]/65 hover:text-[#0f1a16] transition-colors"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            title={LOCALE_LABELS[loc]}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
