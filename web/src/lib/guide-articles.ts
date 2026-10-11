import type { GuideArticle } from "./airtable.types";
import { getLatestGuideArticles, guideArticles } from "./guide-content";
import {
  guideCategories,
  guideCategoryPath,
  getGuideCategory,
  type GuideCategory,
} from "./guide-content/categories";

export function guideArticlePath(slug: string): string {
  return `/poradnik/${slug}`;
}

export function formatGuideDate(value: string): string {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export function getGuideArticles(): GuideArticle[] {
  return guideArticles;
}

export function getGuideArticleBySlug(slug: string): GuideArticle | null {
  return guideArticles.find((article) => article.slug === slug) ?? null;
}

/** Artykuły kategorii: najpierw te, dla których jest kategorią główną. */
export function getGuideArticlesByCategory(slug: string): GuideArticle[] {
  const inCategory = guideArticles.filter((article) =>
    article.categorySlugs.includes(slug),
  );
  return [
    ...inCategory.filter((article) => article.categorySlug === slug),
    ...inCategory.filter((article) => article.categorySlug !== slug),
  ];
}

export type GuideCategoryWithCount = GuideCategory & { count: number };

/** Kategorie w kolejności z rejestru, tylko te z artykułami. */
export function getGuideCategoriesWithCounts(): GuideCategoryWithCount[] {
  return guideCategories
    .map((category) => ({
      ...category,
      count: guideArticles.filter((article) =>
        article.categorySlugs.includes(category.slug),
      ).length,
    }))
    .filter((category) => category.count > 0);
}

/** Najświeższa data zmiany wśród artykułów kategorii (sitemap). */
export function getGuideCategoryUpdatedAt(slug: string): string | undefined {
  return getGuideArticlesByCategory(slug)
    .map((article) => article.updatedAt)
    .sort()
    .at(-1);
}

/**
 * Powiązane artykuły: najpierw wskazane ręcznie, potem ze wspólną
 * kategorią (od głównej), na końcu najnowsze.
 */
export function getRelatedGuideArticles(
  article: GuideArticle,
  limit = 3,
): GuideArticle[] {
  const others = guideArticles.filter((item) => item.slug !== article.slug);
  const picked = (article.relatedArticleSlugs ?? [])
    .map((slug) => others.find((item) => item.slug === slug))
    .filter((item): item is GuideArticle => Boolean(item));
  const sameCategory = article.categorySlugs.flatMap((slug) =>
    others.filter((item) => item.categorySlugs.includes(slug)),
  );

  const result: GuideArticle[] = [];
  for (const item of [...picked, ...sameCategory, ...others]) {
    if (result.length >= limit) break;
    if (!result.includes(item)) result.push(item);
  }
  return result;
}

export {
  getLatestGuideArticles,
  guideCategories,
  guideCategoryPath,
  getGuideCategory,
};
export type { GuideCategory };

/** Liczba kart na stronie listy (bez artykułu wyróżnionego). */
export const GUIDE_PAGE_SIZE = 12;

export function guideIndexPagePath(page: number): string {
  return page <= 1 ? "/poradnik" : `/poradnik/strona/${page}`;
}

export function guideCategoryPagePath(slug: string, page: number): string {
  return page <= 1
    ? guideCategoryPath(slug)
    : `${guideCategoryPath(slug)}/strona/${page}`;
}

/** Podział listy na strony: pierwszy element jest wyróżniony tylko na stronie 1. */
export function paginateGuideArticles(articles: GuideArticle[], page: number) {
  const [featured, ...rest] = articles;
  const totalPages = Math.max(1, Math.ceil(rest.length / GUIDE_PAGE_SIZE));
  const items = rest.slice(
    (page - 1) * GUIDE_PAGE_SIZE,
    page * GUIDE_PAGE_SIZE,
  );
  return { featured, items, totalPages };
}

/** Numer strony z segmentu adresu; null, gdy strona nie istnieje. */
export function parseGuidePage(value: string, totalPages: number): number | null {
  if (!/^[0-9]+$/.test(value)) return null;
  const page = Number(value);
  return page >= 2 && page <= totalPages ? page : null;
}
