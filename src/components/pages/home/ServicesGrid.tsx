import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  Recycle,
  Layers,
  RefreshCw,
  ShieldCheck,
  FileCheck,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site-config";

const ICONS: Record<string, LucideIcon> = {
  "/services/ppwr-gap-analysis": ClipboardList,
  "/services/recyclability-assessment": Recycle,
  "/services/recycled-content-roadmap": Layers,
  "/services/reuse-targets-strategy": RefreshCw,
  "/services/pfas-compliance": ShieldCheck,
  "/services/declaration-of-conformity": FileCheck,
};

export function ServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-[#f5f7f4] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span
              className="inline-block rounded-full border border-border bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#10b981]"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Advisory services
            </span>
            <h2
              id="services-title"
              className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              Six services. One regulation. Article-precise deliverables.
            </h2>
            <p
              className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              Every engagement is scoped to a specific article and a specific applicability
              date. No retainers, no billable-hour drift — fixed scope, fixed price.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#10b981] transition-all hover:gap-2.5"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Our methodology
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = ICONS[s.href] ?? ClipboardList;
            return (
              <Link
                key={s.href}
                href={s.href}
                className="group flex h-[240px] flex-col justify-between rounded-3xl border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#10b981]/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d1fae5] text-[#10b981] transition-colors group-hover:bg-[#10b981] group-hover:text-white">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3
                    className="mt-5 text-lg font-bold leading-snug text-foreground"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {s.label}
                  </h3>
                  <p
                    className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground"
                    style={{ fontFamily: "var(--font-maison-neue)" }}
                  >
                    {s.description}
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#10b981] transition-all group-hover:gap-2.5"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  Explore
                  <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
