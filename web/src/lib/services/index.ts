import { getGuideArticleBySlug } from "../guide-articles";
import type { GuideArticle } from "../airtable.types";
import {
  getCatalogEntry,
  getPublishedServices,
  getServiceGroup,
} from "./catalog";
import { SERVICE_CONTENT } from "./content";
import type { ServiceCatalogEntry } from "./types";

export * from "./catalog";
export type * from "./types";

export function getServiceContent(slug: string) {
  const entry = getCatalogEntry(slug);
  if (entry?.status !== "live") return undefined;
  return SERVICE_CONTENT[slug];
}

/** Usługi powiązane: wskazane ręcznie i z tej samej grupy, bez bieżącej. */
export function getRelatedServices(slug: string, limit = 4) {
  const entry = getCatalogEntry(slug);
  if (!entry) return [];
  const manual = SERVICE_CONTENT[slug]?.relatedServiceSlugs ?? [];
  const published = getPublishedServices();
  const sameGroup = published.filter(
    (service) => service.group === entry.group && service.slug !== slug,
  );
  // Najpierw usługi wskazane ręcznie (często z innych grup), potem z tej samej grupy.
  const picked = [
    ...manual
      .map((related) => published.find((service) => service.slug === related))
      .filter((service): service is ServiceCatalogEntry => Boolean(service)),
    ...sameGroup,
  ];
  const unique = picked.filter(
    (service, index) =>
      picked.findIndex((other) => other.slug === service.slug) === index,
  );
  return unique.slice(0, limit);
}

export function getServiceRelatedArticles(slug: string) {
  return (SERVICE_CONTENT[slug]?.relatedArticleSlugs ?? [])
    .map((articleSlug) => getGuideArticleBySlug(articleSlug))
    .filter((article): article is GuideArticle => Boolean(article));
}

/** Pozycje katalogu dla listy slugów (np. relatedServiceSlugs w artykułach). */
export function getServicesBySlugs(slugs: readonly string[]) {
  const published = getPublishedServices();
  return slugs
    .map((slug) => published.find((service) => service.slug === slug))
    .filter((service): service is ServiceCatalogEntry => Boolean(service));
}

export function serviceBreadcrumbs(entry: ServiceCatalogEntry) {
  const group = getServiceGroup(entry.group);
  return [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: group.name, href: `/uslugi#${group.id}` },
    { label: entry.name },
  ];
}
