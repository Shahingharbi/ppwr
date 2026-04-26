"use client";

import { useEffect, useState } from "react";
import { CalendarClock, Recycle, Target, AlertTriangle } from "lucide-react";

const PPWR_GENERAL_APPLICATION = new Date("2026-08-12T00:00:00Z");

function daysUntil(target: Date): number {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

const ITEMS = [
  {
    Icon: CalendarClock,
    eyebrow: "12 Aug 2026",
    title: "General application",
    description:
      "Article 5 PFAS thresholds, Annex V format restrictions and the EU-wide compliance baseline come into force.",
  },
  {
    Icon: Recycle,
    eyebrow: "1 Jan 2030",
    title: "Recyclability + recycled content",
    description:
      "Article 6 design-for-recycling Class A/B/C grading and Article 7 plastic recycled-content targets become binding.",
  },
  {
    Icon: Target,
    eyebrow: "1 Jan 2040",
    title: "Stretch targets",
    description:
      "Recycled-content shares rise to 50% / 25% / 65% / 65%; Class C packaging is banned from 1 January 2038.",
  },
  {
    Icon: AlertTriangle,
    eyebrow: "Up to 4% of turnover",
    title: "Penalty exposure",
    description:
      "Article 68 obliges Member States to set effective, proportionate, dissuasive penalties — including market withdrawal and recall.",
  },
];

export function CountdownStrip() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDays(daysUntil(PPWR_GENERAL_APPLICATION));
    const id = setInterval(
      () => setDays(daysUntil(PPWR_GENERAL_APPLICATION)),
      1000 * 60 * 60,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-labelledby="countdown-title"
      className="bg-[#0f1a16] py-16 md:py-20 text-white"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span
              className="inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#10b981]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              The countdown
            </span>
            <h2
              id="countdown-title"
              className="mt-3 max-w-2xl text-3xl font-bold leading-tight md:text-4xl"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Four dates that decide your packaging compliance
            </h2>
          </div>
          <p
            className="max-w-md text-sm leading-relaxed text-white/70"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {days !== null ? (
              <>
                <span
                  className="text-2xl font-bold text-[#10b981]"
                  style={{ fontFamily: "var(--font-ginto-nord)" }}
                >
                  {days.toLocaleString("en-GB")}
                </span>{" "}
                days remain until general application of Regulation (EU) 2025/40 on
                12 August 2026.
              </>
            ) : (
              <>Calculating days remaining until 12 August 2026…</>
            )}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-[#10b981]/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#10b981]/15 text-[#10b981]">
                <item.Icon size={20} />
              </div>
              <p
                className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-[#10b981]"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {item.eyebrow}
              </p>
              <h3
                className="mt-2 text-lg font-bold leading-tight text-white"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {item.title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed text-white/70"
                style={{ fontFamily: "var(--font-maison-neue)" }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
