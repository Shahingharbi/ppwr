import { Check, X } from "lucide-react";

type Cell =
  | { type: "yes"; text?: string }
  | { type: "no"; text?: string }
  | { type: "mixed"; text: string };

export type ComparisonRow = {
  criterion: string;
  us: Cell;
  competitor1: Cell;
  competitor2: Cell;
};

type Props = {
  usLabel?: string;
  competitor1Label: string;
  competitor2Label: string;
  rows: ComparisonRow[];
  caption?: string;
};

function CellContent({ cell }: { cell: Cell }) {
  if (cell.type === "yes") {
    return (
      <div className="flex items-start gap-2">
        <Check size={18} className="mt-0.5 flex-shrink-0 text-[#10b981]" />
        <span>{cell.text ?? "Oui"}</span>
      </div>
    );
  }
  if (cell.type === "no") {
    return (
      <div className="flex items-start gap-2">
        <X size={18} className="mt-0.5 flex-shrink-0 text-red-400" />
        <span className="text-muted-foreground">{cell.text ?? "Non"}</span>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 flex-shrink-0 text-amber-500">~</span>
      <span>{cell.text}</span>
    </div>
  );
}

export function ComparisonTable({ usLabel = "Pactum", competitor1Label, competitor2Label, rows, caption }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-[#f5f7f4]">
          <tr>
            <th
              className="p-4 font-semibold text-foreground w-1/3"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {caption ?? "Critère"}
            </th>
            <th
              className="p-4 font-semibold text-[#10b981] bg-[#d1fae5]/40"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {usLabel}
            </th>
            <th
              className="p-4 font-semibold text-foreground"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {competitor1Label}
            </th>
            <th
              className="p-4 font-semibold text-foreground"
              style={{ fontFamily: "var(--font-maison-neue-extended)" }}
            >
              {competitor2Label}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-border">
              <td className="p-4 font-semibold text-foreground align-top">{r.criterion}</td>
              <td className="p-4 bg-[#d1fae5]/30 align-top">
                <CellContent cell={r.us} />
              </td>
              <td className="p-4 align-top">
                <CellContent cell={r.competitor1} />
              </td>
              <td className="p-4 align-top">
                <CellContent cell={r.competitor2} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
