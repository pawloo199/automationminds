import {
  getLandingPages,
  getPublishedCaseStudiesForSitemap,
  getServices,
} from "@/lib/airtable";
import { caseStudyPath } from "@/lib/case-study-icons";
import { cityPath, getAllCityPages } from "@/lib/city-pages";
import { getGuideArticles, guideArticlePath } from "@/lib/guide-articles";
import { siteUrl } from "@/lib/metadata";
import type { MetadataRoute } from "next";

function parseDate(value: string | undefined): Date {
  if (!value) return new Date();
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

/**
 * Buduje kompletną listę URL-i do /sitemap.xml.
 * Źródła: strony statyczne, Airtable (usługi, kampanie, case studies),
 * poradnik (kod) oraz silosy miast (kod).
 * Wywoływane przy każdym generowaniu mapy oraz przy rewalidacji CMS.
 */
export async function buildSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  const [services, landingPages, caseStudies, guideArticles, cityPages] =
    await Promise.all([
      getServices(),
      getLandingPages(),
      getPublishedCaseStudiesForSitemap(),
      Promise.resolve(getGuideArticles()),
      Promise.resolve(getAllCityPages()),
    ]);

  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/o-nas",
    "/poradnik",
    "/kontakt",
    "/polityka-prywatnosci",
  ].map((path) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path === "/kontakt" ? 0.85 : 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/uslugi/${service.slug}`,
    lastModified: parseDate(service.updatedAt),
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  const campaignPages: MetadataRoute.Sitemap = landingPages
    .filter((page) => !page.noIndex)
    .map((page) => ({
      url: `${siteUrl}/kampanie/${page.slug}`,
      lastModified: parseDate(page.updatedAt),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((item) => ({
    url: `${siteUrl}${caseStudyPath(item.slug)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const guidePages: MetadataRoute.Sitemap = guideArticles.map((item) => ({
    url: `${siteUrl}${guideArticlePath(item.slug)}`,
    lastModified: parseDate(item.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const citySeoPages: MetadataRoute.Sitemap = cityPages.map((city) => ({
    url: `${siteUrl}${cityPath(city.slug)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...campaignPages,
    ...caseStudyPages,
    ...guidePages,
    ...citySeoPages,
  ];
}

/** Wszystkie ścieżki (pathname) występujące w mapie witryny — do rewalidacji. */
export async function getSitemapPathnames(): Promise<string[]> {
  const entries = await buildSitemapEntries();
  return entries.map((entry) => {
    try {
      return new URL(entry.url).pathname;
    } catch {
      return "";
    }
  }).filter(Boolean);
}

export const SITEMAP_ROUTE = "/sitemap.xml";
