import {
  getLandingPages,
  getPublishedCaseStudiesForSitemap,
} from "@/lib/airtable";
import { caseStudyPath } from "@/lib/case-study-icons";
import {
  CITY_HUB_PATH,
  cityPath,
  getAllCityPages,
  voivodeshipPath,
  VOIVODESHIPS,
} from "@/lib/city-pages";
import { getLiveProcesses, PROCESSES_HUB_PATH, processPath } from "@/lib/processes/catalog";
import { getToolPages, TOOLS_HUB_PATH, toolPath } from "@/lib/tools/catalog";
import {
  getGuideArticles,
  getGuideCategoriesWithCounts,
  getGuideCategoryUpdatedAt,
  guideArticlePath,
  guideCategoryPath,
} from "@/lib/guide-articles";
import { siteUrl } from "@/lib/metadata";
import { SERVICE_CONTENT } from "@/lib/services/content";
import { getPublishedServices, servicePath } from "@/lib/services/catalog";
import type { MetadataRoute } from "next";

function parseDate(value: string | undefined): Date {
  if (!value) return new Date();
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

/**
 * Buduje kompletną listę URL-i do /sitemap.xml.
 * Źródła: strony statyczne, Airtable (kampanie, case studies),
 * usługi, poradnik i silosy miast (kod).
 * Wywoływane przy każdym generowaniu mapy oraz przy rewalidacji CMS.
 */
export async function buildSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  const [landingPages, caseStudies, guideArticles, cityPages] =
    await Promise.all([
      getLandingPages(),
      getPublishedCaseStudiesForSitemap(),
      Promise.resolve(getGuideArticles()),
      Promise.resolve(getAllCityPages()),
    ]);

  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/uslugi",
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

  const servicePages: MetadataRoute.Sitemap = getPublishedServices().map((entry) => ({
    url: `${siteUrl}${servicePath(entry.slug)}`,
    lastModified: parseDate(SERVICE_CONTENT[entry.slug]?.updatedAt),
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
    lastModified: parseDate(item.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const guideCategoryPages: MetadataRoute.Sitemap =
    getGuideCategoriesWithCounts().map((category) => ({
      url: `${siteUrl}${guideCategoryPath(category.slug)}`,
      lastModified: parseDate(getGuideCategoryUpdatedAt(category.slug)),
      changeFrequency: "weekly",
      priority: 0.65,
    }));

  const regionPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}${CITY_HUB_PATH}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...VOIVODESHIPS.map((v) => ({
      url: `${siteUrl}${voivodeshipPath(v.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  const processPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}${PROCESSES_HUB_PATH}`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    ...getLiveProcesses().map((process) => ({
      url: `${siteUrl}${processPath(process.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  const toolPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}${TOOLS_HUB_PATH}`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    ...getToolPages().map((tool) => ({
      url: `${siteUrl}${toolPath(tool.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

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
    ...guideCategoryPages,
    ...guidePages,
    ...processPages,
    ...toolPages,
    ...regionPages,
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
