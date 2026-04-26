import Link from "next/link";
import { ArrowRight, Car, ShoppingBasket, Truck, Pill, type LucideIcon } from "lucide-react";

const SECTOR_DETAILS: Record<
  string,
  { Icon: LucideIcon; whatChanges: string }
> = {
  "/sectors/automotive": {
    Icon: Car,
    whatChanges:
      "Tier-1 transport packaging falls under the 40% reuse target by 2030 and 70% by 2040 — pooled returnable systems become non-negotiable.",
  },
  "/sectors/fmcg": {
    Icon: ShoppingBasket,
    whatChanges:
      "PET food-contact packaging needs 30% recycled content from 2030 and 50% from 2040, while PFAS thresholds bite from 12 August 2026.",
  },
  "/sectors/ecommerce": {
    Icon: Truck,
    whatChanges:
      "Empty-space ratio capped at 50% under Article 24 from 12 August 2028 — every void-fill, oversized box and air pillow becomes a compliance line item.",
  },
  "/sectors/pharmaceutical": {
    Icon: Pill,
    whatChanges:
      "Contact-sensitive packaging and DPP labelling apply unless a derogation is secured — Declaration of Conformity is mandatory before market placement.",
  },
};

import { sectors } from "@/lib/site-config";

export function SectorsGrid() {
  return (
    <section
      aria-labelledby="sectors-title"
      className="bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-block rounded-full bg-[#d1fae5] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#065f46]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            Sectors we serve
          </span>
          <h2
            id="sectors-title"
            className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            What changes for your sector
          </h2>
          <p
            className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            The PPWR is a horizontal regulation but its bite is sector-specific. Pactum
            tracks four verticals where 2030 obligations rewrite unit economics.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {sectors.map((s) => {
            const detail = SECTOR_DETAILS[s.href];
            const Icon = detail?.Icon ?? Truck;
            return (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-start gap-5 rounded-3xl border border-border bg-[#f5f7f4] p-7 transition-all hover:-translate-y-0.5 hover:border-[#10b981]/40 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-[#10b981] group-hover:bg-[#10b981] group-hover:text-white transition-colors">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold leading-snug text-foreground"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {s.label}
                  </h3>
                  <p
                    className="mt-2 text-[15px] leading-relaxed text-muted-foreground"
                    style={{ fontFamily: "var(--font-maison-neue)" }}
                  >
                    {detail?.whatChanges}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#10b981] transition-all group-hover:gap-2.5"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    See sector brief
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
