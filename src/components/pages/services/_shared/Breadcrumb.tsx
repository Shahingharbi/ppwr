import { ChevronRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";

type Crumb = { label: string; href?: string };

type Props = {
  items: Crumb[];
  locale?: Locale;
};

const ARIA_LABEL: Record<Locale, string> = {
  fr: "Fil d'Ariane",
  en: "Breadcrumb",
};

/**
 * Visual breadcrumb plus inline BreadcrumbList JSON-LD.
 * The trailing item is the current page (no href).
 *
 * `items[].href` should already be locale-prefixed by the caller (e.g.
 * `/fr/services/...`). The JSON-LD `item` URL is built absolute against
 * the canonical site URL.
 */
export function Breadcrumb({ items, locale = "en" }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.href
        ? { item: `https://pactum-advisory.eu${it.href}` }
        : {}),
    })),
  };

  return (
    <nav
      aria-label={ARIA_LABEL[locale]}
      className="mx-auto max-w-[1280px] px-6 pt-6"
      style={{ fontFamily: "var(--font-maison-neue)" }}
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((it, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${it.label}-${i}`} className="flex items-center gap-1.5">
              {it.href && !isLast ? (
                <a
                  href={it.href}
                  className="hover:text-foreground transition-colors"
                >
                  {it.label}
                </a>
              ) : (
                <span
                  className={
                    isLast ? "text-foreground font-semibold" : undefined
                  }
                  aria-current={isLast ? "page" : undefined}
                >
                  {it.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight
                  size={14}
                  className="text-muted-foreground/60"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
