"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = { question: string; answer: string };

export function FaqGroup({
  title,
  items,
  defaultOpen = -1,
}: {
  title: string;
  items: FaqItem[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <section className="scroll-mt-28">
      <h2
        className="text-2xl md:text-3xl font-bold text-foreground"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        {title}
      </h2>
      <div className="mt-5 space-y-3">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={cn(
                "rounded-2xl border bg-white transition-all",
                isOpen
                  ? "border-[#10b981] shadow-md"
                  : "border-border hover:border-foreground/20"
              )}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-start justify-between gap-4 p-5 text-left"
              >
                <h3
                  className="text-base md:text-lg font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {it.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={cn(
                    "mt-0.5 flex-shrink-0 text-[#10b981] transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              {isOpen && (
                <div
                  className="px-5 pb-5 text-sm md:text-base leading-relaxed text-muted-foreground"
                  style={{ fontFamily: "var(--font-maison-neue)" }}
                >
                  {it.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
