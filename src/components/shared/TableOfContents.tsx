"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Item = { id: string; text: string };

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 60);
}

export function TableOfContents() {
  const [items, setItems] = useState<Item[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const article = document.querySelector(".prose-article");
    if (!article) return;
    const h2s = Array.from(article.querySelectorAll("h2")) as HTMLHeadingElement[];
    const list: Item[] = h2s.map((h, i) => {
      if (!h.id) h.id = slugify(h.textContent ?? "") || `section-${i}`;
      return { id: h.id, text: h.textContent ?? "" };
    });
    queueMicrotask(() => {
      setItems(list);
      if (list.length) setActiveId(list[0].id);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );
    h2s.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  return (
    <nav className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <p
        className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground mb-4"
        style={{ fontFamily: "var(--font-maison-neue-extended)" }}
      >
        Sommaire
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block border-l-2 py-1.5 pl-3 text-sm leading-snug transition-all",
                activeId === item.id
                  ? "border-[#10b981] font-semibold text-[#0f1a16]"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              )}
              style={{ fontFamily: "var(--font-maison-neue)" }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
