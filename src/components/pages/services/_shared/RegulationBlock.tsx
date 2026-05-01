import { BookOpen, ExternalLink } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";

type Props = {
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  /** Where to send the EUR-Lex outbound link. Defaults to the CELEX permanent ELI for Reg. (EU) 2025/40. */
  eurLexHref?: string;
  locale?: Locale;
};

const COPY: Record<Locale, { title: string; eyebrow: string; readMore: string }> = {
  en: {
    title: "What the regulation says",
    eyebrow: "Regulation (EU) 2025/40",
    readMore: "Read the consolidated text on EUR-Lex",
  },
  fr: {
    title: "Ce que dit le règlement",
    eyebrow: "Règlement (UE) 2025/40",
    readMore: "Lire le texte consolidé sur EUR-Lex",
  },
};

/**
 * "What the regulation says" block — direct quote of obligations,
 * article references, and applicable dates.
 */
export function RegulationBlock({
  title,
  eyebrow,
  children,
  eurLexHref = "https://eur-lex.europa.eu/eli/reg/2025/40/oj",
  locale = "en",
}: Props) {
  const t = COPY[locale];
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[920px] px-6">
        <span
          className="inline-flex items-center gap-2 rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          <BookOpen size={12} />
          {eyebrow ?? t.eyebrow}
        </span>
        <h2
          className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          {title ?? t.title}
        </h2>

        <div
          className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground"
          style={{ fontFamily: "var(--font-maison-neue)" }}
        >
          {children}
        </div>

        <a
          href={eurLexHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-[#f5f7f4] px-4 py-2 text-sm font-semibold text-foreground hover:border-[#10b981] hover:text-[#10b981] transition-colors"
          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
        >
          {t.readMore}
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}
