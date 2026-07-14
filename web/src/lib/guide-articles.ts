import type { GuideArticle } from "./airtable.types";
import {
  getLatestGuideArticles,
  mockGuideArticles,
} from "./guide-articles-mock";

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
  return mockGuideArticles;
}

export function getGuideArticleBySlug(slug: string): GuideArticle | null {
  return mockGuideArticles.find((article) => article.slug === slug) ?? null;
}

export { getLatestGuideArticles };
