import { ArrowDown } from "lucide-react";
import type { Locale } from "@/lib/i18n/types";

export type WorkStep = {
  step: string;
  title: string;
  description: string;
  duration?: string;
};

type Props = {
  title?: string;
  steps: WorkStep[];
  locale?: Locale;
};

const COPY: Record<Locale, { title: string; eyebrow: string }> = {
  en: {
    title: "How we work",
    eyebrow: "Methodology",
  },
  fr: {
    title: "Notre méthode",
    eyebrow: "Méthodologie",
  },
};

/**
 * "How we work" — vertical 5-step custom timeline used across service pages.
 */
export function HowWeWork({ title, steps, locale = "en" }: Props) {
  const t = COPY[locale];
  return (
    <section className="bg-gradient-to-b from-white to-[#f5f7f4] py-16 md:py-24">
      <div className="mx-auto max-w-[960px] px-6">
        <div className="max-w-2xl">
          <span
            className="inline-flex items-center gap-2 rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {t.eyebrow}
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {title ?? t.title}
          </h2>
        </div>

        <ol className="mt-12 space-y-4">
          {steps.map((s, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li key={s.step} className="relative">
                <div className="grid grid-cols-[auto_1fr] gap-5 rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f1a16] text-white text-sm font-bold"
                      style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                    >
                      {s.step}
                    </div>
                    {!isLast && (
                      <div
                        aria-hidden="true"
                        className="mt-2 h-full w-px bg-border"
                      />
                    )}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3
                        className="text-lg font-semibold text-foreground"
                        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                      >
                        {s.title}
                      </h3>
                      {s.duration && (
                        <span
                          className="rounded-full bg-[#f5f7f4] px-2.5 py-0.5 text-xs font-semibold text-muted-foreground"
                          style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                        >
                          {s.duration}
                        </span>
                      )}
                    </div>
                    <p
                      className="mt-2 text-sm leading-relaxed text-muted-foreground"
                      style={{ fontFamily: "var(--font-maison-neue)" }}
                    >
                      {s.description}
                    </p>
                  </div>
                </div>
                {!isLast && (
                  <div className="my-2 flex justify-start pl-[34px]">
                    <ArrowDown
                      size={16}
                      className="text-[#10b981]"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
