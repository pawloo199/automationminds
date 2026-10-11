import type { GuideAuthor } from "@/lib/airtable.types";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import {
  guideCategoryPath,
  type GuideCategoryWithCount,
} from "@/lib/guide-articles";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { GuideCategoryChips as GuideCategoryChipsClient } from "./GuideCategoryChips";

/** Chipy tematów: tematy ogólne widoczne, branżowe pod jednym przyciskiem. */
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
  const toChip = ({ slug, name, count }: GuideCategoryWithCount) => ({
    slug,
    name,
    count,
  });
  return (
    <GuideCategoryChipsClient
      topics={categories.filter((category) => category.inMenu).map(toChip)}
      industries={categories
        .filter((category) => !category.inMenu)
        .map(toChip)}
      activeSlug={activeSlug}
      totalCount={totalCount}
      align={align}
    />
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

/** Kafelki tematów ogólnych i zwarta lista poradników branżowych. */
export function GuideCategoryTiles({
  categories,
}: {
  categories: GuideCategoryWithCount[];
}) {
  const topics = categories.filter((category) => category.inMenu);
  const industries = categories.filter((category) => !category.inMenu);

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((category) => (
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
      {industries.length > 0 ? (
        <div className="mt-10">
          <h3 className="text-lg font-bold text-dark">Poradniki branżowe</h3>
          <p className="mt-1 text-sm text-muted">
            Artykuły o procesach i AI w konkretnych branżach.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((category) => (
              <li key={category.slug}>
                <Link
                  href={guideCategoryPath(category.slug)}
                  className="group flex h-full items-center justify-between gap-3 rounded-xl border border-brand/10 bg-white px-4 py-3 text-sm font-medium text-dark transition hover:border-brand/30 hover:text-brand"
                >
                  <span>{category.name}</span>
                  <span className="shrink-0 text-xs text-muted">
                    {category.count} {articlesLabel(category.count)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
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
