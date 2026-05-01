import Link from "next/link";
import { ArrowRight, Car, ShoppingBasket, Truck, Pill, type LucideIcon } from "lucide-react";
import { getSectorsNav } from "@/lib/site-config";
import type { Locale } from "@/lib/i18n/types";

const SECTOR_ICONS: Record<string, LucideIcon> = {
  "/sectors/automotive": Car,
  "/sectors/fmcg": ShoppingBasket,
  "/sectors/ecommerce": Truck,
  "/sectors/pharmaceutical": Pill,
};

type SectorsCopy = {
  chip: string;
  title: string;
  intro: string;
  briefLink: string;
  whatChanges: Record<string, string>;
};

const COPY: Record<Locale, SectorsCopy> = {
  fr: {
    chip: "Secteurs servis",
    title: "Ce qui change pour votre secteur",
    intro:
      "La PPWR est un règlement horizontal mais sa portée est sectorielle. Pactum suit quatre verticales où les obligations de 2030 réécrivent l'économie unitaire.",
    briefLink: "Voir la note sectorielle",
    whatChanges: {
      "/sectors/automotive":
        "Les emballages de transport des Tier-1 relèvent de l'objectif de 40 % de réemploi en 2030 et de 70 % en 2040 — les systèmes consignés mutualisés deviennent incontournables.",
      "/sectors/fmcg":
        "Les emballages PET au contact alimentaire doivent contenir 30 % de matière recyclée à partir de 2030 et 50 % en 2040, tandis que les seuils PFAS s'appliquent dès le 12 août 2026.",
      "/sectors/ecommerce":
        "Le ratio d'espace vide est plafonné à 50 % au titre de l'article 24 à compter du 12 août 2028 — chaque calage, chaque carton surdimensionné et chaque coussin d'air devient une ligne de conformité.",
      "/sectors/pharmaceutical":
        "Les emballages sensibles au contact et l'étiquetage Passeport produit numérique s'appliquent sauf dérogation obtenue — la Déclaration de conformité est obligatoire avant la mise sur le marché.",
    },
  },
  en: {
    chip: "Sectors we serve",
    title: "What changes for your sector",
    intro:
      "The PPWR is a horizontal regulation but its bite is sector-specific. Pactum tracks four verticals where 2030 obligations rewrite unit economics.",
    briefLink: "See sector brief",
    whatChanges: {
      "/sectors/automotive":
        "Tier-1 transport packaging falls under the 40% reuse target by 2030 and 70% by 2040 — pooled returnable systems become non-negotiable.",
      "/sectors/fmcg":
        "PET food-contact packaging needs 30% recycled content from 2030 and 50% from 2040, while PFAS thresholds bite from 12 August 2026.",
      "/sectors/ecommerce":
        "Empty-space ratio capped at 50% under Article 24 from 12 August 2028 — every void-fill, oversized box and air pillow becomes a compliance line item.",
      "/sectors/pharmaceutical":
        "Contact-sensitive packaging and DPP labelling apply unless a derogation is secured — Declaration of Conformity is mandatory before market placement.",
    },
  },
};

export function SectorsGrid({ locale }: { locale: Locale }) {
  const copy = COPY[locale];
  const sectors = getSectorsNav(locale);
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
            {copy.chip}
          </span>
          <h2
            id="sectors-title"
            className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {copy.title}
          </h2>
          <p
            className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ fontFamily: "var(--font-maison-neue)" }}
          >
            {copy.intro}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {sectors.map((s) => {
            const Icon = SECTOR_ICONS[s.href] ?? Truck;
            const whatChanges = copy.whatChanges[s.href];
            return (
              <Link
                key={s.href}
                href={`/${locale}${s.href}`}
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
                    {whatChanges}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#10b981] transition-all group-hover:gap-2.5"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {copy.briefLink}
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
