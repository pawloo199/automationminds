import type { GuideArticle } from "../airtable.types";
import { getGuideArticleBySlug } from "../guide-articles";
import { getProcessEntry } from "../processes/catalog";
import { getServicesBySlugs } from "../services";
import { getToolEntry } from "../tools/catalog";
import { getIndustryEntry, INDUSTRIES_HUB_PATH, industryPath } from "./catalog";
import { kancelariePrawne } from "./content/kancelarie-prawne";
import { kancelariePrawneAi } from "./content/kancelarie-prawne-ai";
import type { IndustryPageContent } from "./types";

export * from "./catalog";
export type * from "./types";

/** Strony branż: najpierw strona główna branży, potem jej podstrony w kolejności wyświetlania. */
const INDUSTRY_PAGES: IndustryPageContent[] = [kancelariePrawne, kancelariePrawneAi];

export function industryPagePath(page: IndustryPageContent) {
  return industryPath(page.industrySlug, page.subSlug);
}

export function getIndustryPage(industrySlug: string, subSlug?: string) {
  return INDUSTRY_PAGES.find((page) => page.industrySlug === industrySlug && page.subSlug === subSlug);
}

export function getIndustrySubpages(industrySlug: string) {
  return INDUSTRY_PAGES.filter((page) => page.industrySlug === industrySlug && page.subSlug);
}

export function getAllIndustryPages() {
  return INDUSTRY_PAGES;
}

export function getIndustryRelatedServices(page: IndustryPageContent) {
  return getServicesBySlugs(page.relatedServiceSlugs);
}

export function getIndustryRelatedProcesses(page: IndustryPageContent) {
  return page.relatedProcessSlugs.map((slug) => getProcessEntry(slug)).filter((entry) => entry?.status === "live").map((entry) => entry!);
}

export function getIndustryRelatedTools(page: IndustryPageContent) {
  return page.relatedToolSlugs.map((slug) => getToolEntry(slug)).filter((tool) => tool !== undefined);
}

export function getIndustryRelatedArticles(page: IndustryPageContent) {
  return page.relatedArticleSlugs
    .map((slug) => getGuideArticleBySlug(slug))
    .filter((article): article is GuideArticle => Boolean(article));
}

export function industryBreadcrumbs(page: IndustryPageContent) {
  const entry = getIndustryEntry(page.industrySlug)!;
  const items = [
    { label: "Strona główna", href: "/" },
    { label: "Branże", href: INDUSTRIES_HUB_PATH },
    { label: entry.name, href: industryPath(entry.slug) },
  ];
  if (page.subSlug) items.push({ label: page.name, href: industryPagePath(page) });
  return items;
}

/** Strony branż powiązane z usługą, narzędziem lub procesem (linkowanie zwrotne). */
export function getIndustryPagesFor(kind: "service" | "tool" | "process", slug: string) {
  const key = kind === "service" ? "relatedServiceSlugs" : kind === "tool" ? "relatedToolSlugs" : "relatedProcessSlugs";
  return INDUSTRY_PAGES.filter((page) => page[key].includes(slug));
}

if (process.env.NODE_ENV !== "production") {
  for (const page of INDUSTRY_PAGES) {
    const id = industryPagePath(page);
    const entry = getIndustryEntry(page.industrySlug);
    if (!entry || entry.status !== "live") throw new Error(`Industry page ${id}: missing live catalog entry`);
    if (getIndustryRelatedServices(page).length !== page.relatedServiceSlugs.length) throw new Error(`Industry page ${id}: unknown related service`);
    if (getIndustryRelatedProcesses(page).length !== page.relatedProcessSlugs.length) throw new Error(`Industry page ${id}: unknown related process`);
    if (getIndustryRelatedTools(page).length !== page.relatedToolSlugs.length) throw new Error(`Industry page ${id}: unknown related tool`);
    if (getIndustryRelatedArticles(page).length !== page.relatedArticleSlugs.length) throw new Error(`Industry page ${id}: unknown related article`);
  }
}

/** Pozycje do kart linków (IndustryLinks): nazwa strony głównej branży z dopiskiem. */
export function industryLinkItems(pages: IndustryPageContent[]) {
  return pages.map((page) => {
    const entry = getIndustryEntry(page.industrySlug)!;
    return {
      href: industryPagePath(page),
      name: page.subSlug ? `${entry.name}: ${page.name}` : `${entry.name}: automatyzacja i AI`,
      excerpt: page.excerpt,
    };
  });
}
