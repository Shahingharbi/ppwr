import { Package, Clock, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Deliverable = {
  icon?: LucideIcon;
  title: string;
  description: string;
};

type Props = {
  title?: string;
  description?: string;
  deliverables: Deliverable[];
  timeToDeliver: string;
  teamComposition: string;
};

/**
 * "What you get" — 4-card deliverables grid + meta strip with
 * suggested time-to-deliver and team composition.
 */
export function DeliverablesGrid({
  title = "What you get",
  description,
  deliverables,
  timeToDeliver,
  teamComposition,
}: Props) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl">
          <span
            className="inline-flex items-center gap-2 rounded-full bg-[#d1fae5] px-3 py-1 text-xs font-semibold text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            <Package size={12} />
            Deliverables
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {title}
          </h2>
          {description && (
            <p
              className="mt-4 text-base leading-relaxed text-muted-foreground"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {description}
            </p>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {deliverables.map((d, i) => {
            const Icon = d.icon ?? Package;
            return (
              <article
                key={d.title}
                className="rounded-2xl border border-border bg-[#f5f7f4] p-6 hover:border-[#10b981] transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#10b981] shadow-sm">
                  <Icon size={18} />
                </div>
                <p
                  className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#10b981]"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {String(i + 1).padStart(2, "0")} · Deliverable
                </p>
                <h3
                  className="mt-2 text-base font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {d.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-muted-foreground"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {d.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-[#0f1a16] p-6 text-white">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#10b981]/20 text-[#10b981]">
              <Clock size={18} />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[#10b981]"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                Time to deliver
              </p>
              <p
                className="mt-1 text-base font-semibold"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {timeToDeliver}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#d1fae5] text-[#065f46]">
              <Users size={18} />
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[#10b981]"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                Team composition
              </p>
              <p
                className="mt-1 text-base font-semibold text-foreground"
                style={{ fontFamily: "var(--font-maison-neue-extended)" }}
              >
                {teamComposition}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
