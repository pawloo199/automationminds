import { cn } from "@/lib/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

/** Numery stron do pokazania: pierwsza, ostatnia i sąsiedzi bieżącej. */
function pageItems(current: number, total: number): (number | "gap")[] {
  const pages = new Set([1, total, current - 1, current, current + 1]);
  const sorted = [...pages]
    .filter((page) => page >= 1 && page <= total)
    .sort((a, b) => a - b);
  const items: (number | "gap")[] = [];
  sorted.forEach((page, index) => {
    if (index > 0 && page - sorted[index - 1] > 1) items.push("gap");
    items.push(page);
  });
  return items;
}

export function GuidePagination({
  current,
  total,
  pathFor,
}: {
  current: number;
  total: number;
  pathFor: (page: number) => string;
}) {
  if (total <= 1) return null;

  const arrow =
    "inline-flex h-10 items-center gap-1 rounded-full border border-brand/15 bg-white px-4 text-sm font-medium text-dark transition hover:border-brand/40 hover:text-brand";

  return (
    <nav
      aria-label="Strony artykułów"
      className="mt-12 flex flex-wrap items-center justify-center gap-2"
    >
      {current > 1 ? (
        <Link href={pathFor(current - 1)} rel="prev" className={arrow}>
          <ChevronLeft className="h-4 w-4" aria-hidden />
          Poprzednia
        </Link>
      ) : null}
      <ul className="flex items-center gap-1">
        {pageItems(current, total).map((item, index) =>
          item === "gap" ? (
            <li key={`gap-${index}`} className="px-1 text-muted" aria-hidden>
              …
            </li>
          ) : (
            <li key={item}>
              <Link
                href={pathFor(item)}
                aria-current={item === current ? "page" : undefined}
                aria-label={`Strona ${item}`}
                className={cn(
                  "inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-medium transition",
                  item === current
                    ? "bg-brand text-white"
                    : "text-dark hover:bg-surface hover:text-brand",
                )}
              >
                {item}
              </Link>
            </li>
          ),
        )}
      </ul>
      {current < total ? (
        <Link href={pathFor(current + 1)} rel="next" className={arrow}>
          Następna
          <ChevronRight className="h-4 w-4" aria-hidden />
        </Link>
      ) : null}
    </nav>
  );
}
