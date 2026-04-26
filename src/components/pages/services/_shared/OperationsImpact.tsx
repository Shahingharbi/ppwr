import { Settings2 } from "lucide-react";

type Item = {
  title: string;
  description: string;
};

type Props = {
  title?: string;
  items: Item[];
};

/**
 * "What changes for your operations" — 5–7 specific bullet impacts.
 */
export function OperationsImpact({
  title = "What changes for your operations",
  items,
}: Props) {
  return (
    <section className="bg-[#f5f7f4] py-16 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="max-w-2xl">
          <span
            className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-[#10b981]"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            <Settings2 size={12} />
            Operational impact
          </span>
          <h2
            className="mt-4 text-3xl md:text-4xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-maison-neue-extended)" }}
          >
            {title}
          </h2>
        </div>

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <li
              key={it.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#0f1a16] text-xs font-bold text-white"
                  style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className="text-base font-semibold text-foreground"
                    style={{ fontFamily: "var(--font-maison-neue-extended)" }}
                  >
                    {it.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed text-muted-foreground"
                    style={{ fontFamily: "var(--font-maison-neue)" }}
                  >
                    {it.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
