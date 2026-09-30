import type { GuideAuthor } from "@/lib/airtable.types";
import { cn } from "@/lib/cn";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import {
  guideCategoryPath,
  type GuideCategoryWithCount,
} from "@/lib/guide-articles";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

/** Chipy tematów: nawigacja i linkowanie do stron kategorii. */
export function GuideCategoryChips({
  categories,
  activeSlug,
  totalCount,
  align = "center",
}: {
  categories: GuideCategoryWithCount[];
  activeSlug?: string;
  totalCount: number;
  align?: "center" | "left";
}) {
  const chip = (active: boolean) =>
    cn(
      "inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition",
      active
        ? "border-brand bg-brand text-white"
        : "border-brand/15 bg-white text-dark hover:border-brand/40 hover:text-brand",
    );
  const count = (active: boolean) =>
    cn(
      "rounded-full px-1.5 text-xs",
      active ? "bg-white/20" : "bg-surface text-muted",
    );

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
            className={chip(!activeSlug)}
            aria-current={!activeSlug ? "page" : undefined}
          >
            Wszystkie
            <span className={count(!activeSlug)}>{totalCount}</span>
          </Link>
        </li>
        {categories.map((category) => {
          const active = category.slug === activeSlug;
          return (
            <li key={category.slug}>
              <Link
                href={guideCategoryPath(category.slug)}
                className={chip(active)}
                aria-current={active ? "page" : undefined}
              >
                {category.name}
                <span className={count(active)}>{category.count}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function articlesLabel(count: number) {
  if (count === 1) return "artykuł";
  const lastDigit = count % 10;
  const lastTwo = count % 100;
  if (lastDigit >= 2 && lastDigit <= 4 && (lastTwo < 12 || lastTwo > 14)) {
    return "artykuły";
  }
  return "artykułów";
}

/** Kafelki tematów z opisem: huby tematyczne na stronie Poradnika. */
export function GuideCategoryTiles({
  categories,
}: {
  categories: GuideCategoryWithCount[];
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <li key={category.slug}>
          <Link
            href={guideCategoryPath(category.slug)}
            className="group flex h-full flex-col rounded-2xl border border-brand/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-brand">
              {category.count} {articlesLabel(category.count)}
            </span>
            <h3 className="mt-2 text-lg font-bold text-dark group-hover:text-brand">
              {category.name}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {category.shortDescription}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
              Zobacz artykuły
              <ArrowUpRight
                className="h-4 w-4 transition group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Baner z zaproszeniem na konsultację, kotwica do formularza #kontakt. */
export function GuideCtaBanner({
  title,
  body,
  location,
}: {
  title: string;
  body: string;
  location: string;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-dark p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
          {CONSULTATION_OFFER.durationLabel}
        </p>
        <h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
          {title}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/80">{body}</p>
      </div>
      <Link
        href="#kontakt"
        data-track="consultation"
        data-track-location={location}
        data-track-method="anchor"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark"
      >
        {CONSULTATION_OFFER.cta}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}

/** Krótka informacja o autorze Poradnika (E-E-A-T). */
export function GuideAuthorStrip({ author }: { author: GuideAuthor }) {
  const initials = author.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-brand/10 bg-white p-6 sm:flex-row sm:items-center sm:p-8">
      <span
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand text-xl font-bold text-white"
        aria-hidden
      >
        {initials}
      </span>
      <div>
        <h2 className="text-lg font-bold text-dark">Kto pisze Poradnik</h2>
        <p className="mt-2 text-base leading-relaxed text-muted">
          Artykuły przygotowuje {author.name}, {author.jobTitle} w Automation
          Minds. {author.bio.split(". ").slice(1).join(". ")}
        </p>
      </div>
    </div>
  );
}
