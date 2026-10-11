"use client";

import { cn } from "@/lib/cn";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";

export type GuideChipCategory = { slug: string; name: string; count: number };

const chipBase =
  "inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition";

function chipClass(active: boolean) {
  return cn(
    chipBase,
    active
      ? "border-brand bg-brand text-white"
      : "border-brand/15 bg-white text-dark hover:border-brand/40 hover:text-brand",
  );
}

function countClass(active: boolean) {
  return cn(
    "rounded-full px-1.5 text-xs",
    active ? "bg-white/20" : "bg-surface text-muted",
  );
}

/**
 * Chipy tematów: tematy ogólne zawsze widoczne, tematy branżowe
 * schowane pod jednym przyciskiem, żeby nie zajmowały kilku wierszy.
 */
export function GuideCategoryChips({
  topics,
  industries,
  activeSlug,
  totalCount,
  align = "center",
}: {
  topics: GuideChipCategory[];
  industries: GuideChipCategory[];
  activeSlug?: string;
  totalCount: number;
  align?: "center" | "left";
}) {
  const activeIndustry = industries.find((item) => item.slug === activeSlug);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <nav aria-label="Tematy Poradnika">
      <ul
        className={cn(
          "flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden",
          align === "center" ? "sm:justify-center" : "sm:justify-start",
        )}
      >
        <li>
          <Link
            href="/poradnik"
            className={chipClass(!activeSlug)}
            aria-current={!activeSlug ? "page" : undefined}
          >
            Wszystkie
            <span className={countClass(!activeSlug)}>{totalCount}</span>
          </Link>
        </li>
        {topics.map((category) => {
          const active = category.slug === activeSlug;
          return (
            <li key={category.slug}>
              <Link
                href={`/poradnik/kategoria/${category.slug}`}
                className={chipClass(active)}
                aria-current={active ? "page" : undefined}
              >
                {category.name}
                <span className={countClass(active)}>{category.count}</span>
              </Link>
            </li>
          );
        })}
        {industries.length > 0 ? (
          <li>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls={panelId}
              className={chipClass(Boolean(activeIndustry))}
            >
              {activeIndustry ? `Branża: ${activeIndustry.name}` : "Branże"}
              <span className={countClass(Boolean(activeIndustry))}>
                {activeIndustry ? activeIndustry.count : industries.length}
              </span>
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
                aria-hidden
              />
            </button>
          </li>
        ) : null}
      </ul>
      {industries.length > 0 ? (
        <div
          id={panelId}
          hidden={!open}
          className="mt-3 rounded-2xl border border-brand/10 bg-white p-3 text-left shadow-sm"
        >
          <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-widest text-brand">
            Poradniki branżowe
          </p>
          <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((category) => {
              const active = category.slug === activeSlug;
              return (
                <li key={category.slug}>
                  <Link
                    href={`/poradnik/kategoria/${category.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm transition",
                      active
                        ? "bg-brand/10 font-medium text-brand"
                        : "text-dark hover:bg-surface hover:text-brand",
                    )}
                  >
                    <span>{category.name}</span>
                    <span className="text-xs text-muted">{category.count}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
