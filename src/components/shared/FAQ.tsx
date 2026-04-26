"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQItem = { question: string; answer: React.ReactNode };

const DEFAULT_ITEMS: FAQItem[] = [
  {
    question: "When does the PPWR apply?",
    answer:
      "Regulation (EU) 2025/40 entered into force on 11 February 2025, the twentieth day after publication in OJ L on 22 January 2025. General application is 12 August 2026, eighteen months after entry into force, except where individual articles set a different date (for example, the Article 7 recycled-content targets apply from 1 January 2030).",
  },
  {
    question: "Who is in scope of the Regulation?",
    answer:
      "The PPWR covers all packaging placed on the EU market and all packaging waste generated in the Union, regardless of material — plastic, paper, glass, metal, wood and composites. The obligated economic operators are manufacturers, suppliers of raw materials, importers, distributors, fulfilment service providers and authorised representatives. Non-EU brand owners selling into the Union must designate an authorised representative.",
  },
  {
    question: "What is recyclability Class A, B or C under Article 6?",
    answer:
      "Article 6 grades each packaging unit by recyclability performance. Class A is at least 95%, Class B at least 80%, and Class C at least 70%. From 1 January 2030 every packaging unit must reach at least Class C; from 1 January 2038 only Class A and B are permitted on the EU market and Class C is banned. Delegated acts setting design-for-recycling criteria are expected by end-2027.",
  },
  {
    question: "How is recycled content measured under Article 7?",
    answer:
      "Article 7 sets minimum recycled-content shares per plastic packaging unit, calculated as an average per manufacturing plant and year. From 1 January 2030 the targets are 30% for contact-sensitive PET packaging, 10% for contact-sensitive packaging in other plastics, 30% for single-use plastic beverage bottles, and 35% for other plastic packaging. From 1 January 2040 these rise to 50%, 25%, 65% and 65% respectively. Recyclate must come from post-consumer plastic waste; mass-balance accounting is permitted under conditions to be set by implementing act.",
  },
  {
    question: "What triggers a Declaration of Conformity?",
    answer:
      "Under Articles 39 and 40 the manufacturer — or the importer where the manufacturer is established outside the Union — must draw up a written Declaration of Conformity before placing any packaging unit on the EU market. The DoC must reference Regulation (EU) 2025/40 and the harmonised standards or technical specifications applied. The supporting technical documentation must be retained for ten years and produced to market surveillance authorities on request.",
  },
  {
    question: "What are the PFAS thresholds and when do they apply?",
    answer:
      "Article 5 prohibits food-contact packaging containing intentionally added PFAS from 12 August 2026. The thresholds are 25 ppb for any individual PFAS measured by targeted analysis, 250 ppb for the sum of PFAS measured by targeted analysis, and 50 ppm of total fluorine as an indicator. Substances detected above these limits trigger withdrawal from the market and the penalties Member States set under Article 68.",
  },
];

export function FAQ({
  items = DEFAULT_ITEMS,
  title = "Frequently asked questions about PPWR",
  id = "faq",
}: {
  items?: FAQItem[];
  title?: string;
  id?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={id} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[920px] px-6">
        <div className="text-center">
          <span
            className="inline-block rounded-full bg-[#f5f7f4] border border-border px-3 py-1 text-xs font-semibold text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            FAQ
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {title}
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={cn(
                  "rounded-2xl border bg-white transition-all",
                  isOpen ? "border-[#10b981] shadow-md" : "border-border hover:border-foreground/20"
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <h3
                    className="text-base md:text-lg font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {item.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={cn(
                      "flex-shrink-0 text-[#10b981] transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <div
                    className="px-5 pb-5 text-sm md:text-base leading-relaxed text-muted-foreground"
                    style={{ fontFamily: "var(--font-maison-neue)" }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
