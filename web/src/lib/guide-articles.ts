import type { GuideArticle } from "./airtable.types";
import { getLatestGuideArticles, guideArticles } from "./guide-content";

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

/**
 * Powiązane artykuły: najpierw wskazane ręcznie, potem z tej samej
 * kategorii, na końcu najnowsze.
 */
export function getRelatedGuideArticles(
  article: GuideArticle,
  limit = 3,
): GuideArticle[] {
  const others = guideArticles.filter((item) => item.slug !== article.slug);
  const picked = (article.relatedArticleSlugs ?? [])
    .map((slug) => others.find((item) => item.slug === slug))
    .filter((item): item is GuideArticle => Boolean(item));
  const rest = [
    ...others.filter((item) => item.category === article.category),
    ...others,
  ];

  const result: GuideArticle[] = [];
  for (const item of [...picked, ...rest]) {
    if (result.length >= limit) break;
    if (!result.includes(item)) result.push(item);
  }
  return result;
}

export { getLatestGuideArticles };
