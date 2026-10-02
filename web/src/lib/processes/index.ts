import type { GuideArticle } from "../airtable.types";
import { getGuideArticleBySlug } from "../guide-articles";
import { getServicesBySlugs } from "../services";
import { getToolEntry } from "../tools/catalog";
import { getProcessEntry, PROCESSES_HUB_PATH, processPath } from "./catalog";
import { obiegFakturKosztowych } from "./content/obieg-faktur-kosztowych";
import type { ProcessContent } from "./types";

export * from "./catalog";
export type * from "./types";

const PROCESS_CONTENT: Record<string, ProcessContent> = Object.fromEntries(
  [obiegFakturKosztowych].map((content) => [content.slug, content]),
);

export function getProcessContent(slug: string) {
  return PROCESS_CONTENT[slug];
}

export function getProcessRelatedArticles(content: ProcessContent) {
  return content.relatedArticleSlugs
    .map((slug) => getGuideArticleBySlug(slug))
    .filter((article): article is GuideArticle => Boolean(article));
}

export function getProcessRelatedServices(content: ProcessContent) {
  return getServicesBySlugs(content.relatedServiceSlugs);
}

export function getProcessRelatedTools(content: ProcessContent) {
  return content.relatedToolSlugs.map((slug) => getToolEntry(slug)).filter((tool) => tool !== undefined);
}

export function processBreadcrumbs(name: string, slug: string) {
  return [
    { label: "Strona główna", href: "/" },
    { label: "Procesy", href: PROCESSES_HUB_PATH },
    { label: name, href: processPath(slug) },
  ];
}

if (process.env.NODE_ENV !== "production") {
  for (const content of Object.values(PROCESS_CONTENT)) {
    const entry = getProcessEntry(content.slug);
    if (!entry || entry.status !== "live") throw new Error(`Process ${content.slug}: missing live catalog entry`);
    if (getProcessRelatedServices(content).length !== content.relatedServiceSlugs.length)
      throw new Error(`Process ${content.slug}: unknown related service`);
    if (getProcessRelatedArticles(content).length !== content.relatedArticleSlugs.length)
      throw new Error(`Process ${content.slug}: unknown related article`);
    if (getProcessRelatedTools(content).length !== content.relatedToolSlugs.length)
      throw new Error(`Process ${content.slug}: unknown related tool`);
  }
}

/** Opisane procesy, w których używamy danego narzędzia (linkowanie zwrotne). */
export function getProcessesForTool(toolSlug: string) {
  return Object.values(PROCESS_CONTENT)
    .filter((content) => content.relatedToolSlugs.includes(toolSlug))
    .map((content) => getProcessEntry(content.slug)!)
    .filter((entry) => entry.status === "live");
}

/** Opisane procesy powiązane z usługą (linkowanie zwrotne). */
export function getProcessesForService(serviceSlug: string) {
  return Object.values(PROCESS_CONTENT)
    .filter((content) => content.relatedServiceSlugs.includes(serviceSlug))
    .map((content) => getProcessEntry(content.slug)!)
    .filter((entry) => entry.status === "live");
}
