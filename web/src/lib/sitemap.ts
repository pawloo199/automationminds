import {
  getLandingPages,
  getPublishedCaseStudiesForSitemap,
} from "@/lib/airtable";
import { caseStudyPath } from "@/lib/case-study-icons";
import {
  CITY_HUB_PATH,
  CITY_PAGES_UPDATED_AT,
  cityPath,
  getAllCityPages,
  getCitiesByVoivodeship,
  getCityPageUpdatedAt,
  voivodeshipPath,
  VOIVODESHIPS,
} from "@/lib/city-pages";
import { getProcessContent } from "@/lib/processes";
import { getLiveProcesses, PROCESSES_HUB_PATH, processPath } from "@/lib/processes/catalog";
import { getToolPages, TOOLS_HUB_PATH, toolPath } from "@/lib/tools/catalog";
import {
  getToolContent,
  getToolSubpages,
  getToolSubpagesForToolPage,
  toolSubpagePath,
} from "@/lib/tools";
import { AGENCY_PATH } from "@/lib/agency-content";
import { getAllIndustryPages, INDUSTRIES_HUB_PATH, industryPagePath } from "@/lib/industries";
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

/**
 * Daty ostatniej zmiany treści stron bez własnego pola updatedAt.
 * Zmieniasz treść strony — zaktualizuj datę. Huby biorą też najnowszą datę stron, które listują.
 */
const PAGE_UPDATED_AT = {
  home: "2026-09-30",
  services: "2026-10-05",
  about: "2026-10-05",
  guide: "2026-09-30",
  contact: "2026-09-30",
  privacy: "2026-09-27",
  processes: "2026-10-02",
  tools: "2026-10-01",
  agency: "2026-10-05",
  industries: "2026-10-05",
};

/**
 * Data z treści albo undefined (wtedy bez <lastmod>). Nie podstawiamy daty wygenerowania
 * mapy — zmienia się przy każdej rewalidacji i Google przestaje ufać lastmod.
 */
function parseDate(value: string | undefined): Date | undefined {
  if (!value) return undefined;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

/** Najnowsza z podanych dat (strony-huby zmieniają się razem z listowanymi stronami). */
function latestDate(...values: (string | undefined)[]): Date | undefined {
  const times = values
    .map(parseDate)
    .filter((date): date is Date => date !== undefined)
    .map((date) => date.getTime());
  return times.length > 0 ? new Date(Math.max(...times)) : undefined;
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

  const serviceDates = getPublishedServices().map(
    (entry) => SERVICE_CONTENT[entry.slug]?.updatedAt,
  );

  const staticPages: MetadataRoute.Sitemap = [
    // Strona główna pokazuje najnowsze artykuły Poradnika.
    { path: "", lastModified: latestDate(PAGE_UPDATED_AT.home, ...guideArticles.map((item) => item.publishedAt)) },
    { path: "/uslugi", lastModified: latestDate(PAGE_UPDATED_AT.services, ...serviceDates) },
    { path: "/o-nas", lastModified: parseDate(PAGE_UPDATED_AT.about) },
    { path: "/poradnik", lastModified: latestDate(PAGE_UPDATED_AT.guide, ...guideArticles.map((item) => item.updatedAt)) },
    { path: "/kontakt", lastModified: parseDate(PAGE_UPDATED_AT.contact) },
    { path: "/polityka-prywatnosci", lastModified: parseDate(PAGE_UPDATED_AT.privacy) },
  ].map(({ path, lastModified }) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified,
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

  // Tabela CaseStudies w Airtable nie ma pola z datą zmiany — lepiej bez lastmod niż z fałszywym.
  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((item) => ({
    url: `${siteUrl}${caseStudyPath(item.slug)}`,
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

  const cityDates = cityPages.map(getCityPageUpdatedAt);
  const regionPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}${CITY_HUB_PATH}`,
      lastModified: latestDate(CITY_PAGES_UPDATED_AT, ...cityDates),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...VOIVODESHIPS.map((v) => ({
      url: `${siteUrl}${voivodeshipPath(v.slug)}`,
      lastModified: latestDate(
        CITY_PAGES_UPDATED_AT,
        ...getCitiesByVoivodeship(v.name).map(getCityPageUpdatedAt),
      ),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  const liveProcesses = getLiveProcesses();
  const processDates = liveProcesses.map((process) => getProcessContent(process.slug)?.updatedAt);
  const processPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}${PROCESSES_HUB_PATH}`,
      lastModified: latestDate(PAGE_UPDATED_AT.processes, ...processDates),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...liveProcesses.map((process, index) => ({
      url: `${siteUrl}${processPath(process.slug)}`,
      lastModified: parseDate(processDates[index]),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];

  const tools = getToolPages();
  const toolDates = tools.map((tool) => getToolContent(tool.slug)?.updatedAt);
  const toolSubpages = getToolSubpages();
  const toolPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}${TOOLS_HUB_PATH}`,
      lastModified: latestDate(PAGE_UPDATED_AT.tools, ...toolDates),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...tools.map((tool, index) => ({
      url: `${siteUrl}${toolPath(tool.slug)}`,
      // Strona narzędzia listuje swoje i powiązane podstrony.
      lastModified: latestDate(
        toolDates[index],
        ...getToolSubpagesForToolPage(tool.slug).map((page) => page.updatedAt),
      ),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...toolSubpages.map((page) => ({
      url: `${siteUrl}${toolSubpagePath(page.toolSlug, page.slug)}`,
      lastModified: parseDate(page.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  const agencyPage: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}${AGENCY_PATH}`,
      lastModified: parseDate(PAGE_UPDATED_AT.agency),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const industryPageList = getAllIndustryPages();
  const industryPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}${INDUSTRIES_HUB_PATH}`,
      lastModified: latestDate(
        PAGE_UPDATED_AT.industries,
        ...industryPageList.map((page) => page.updatedAt),
      ),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...industryPageList.map((page) => ({
      url: `${siteUrl}${industryPagePath(page)}`,
      lastModified: parseDate(page.updatedAt),
      changeFrequency: "monthly" as const,
      priority: page.subSlug ? 0.75 : 0.8,
    })),
  ];

  const citySeoPages: MetadataRoute.Sitemap = cityPages.map((city, index) => ({
    url: `${siteUrl}${cityPath(city.slug)}`,
    lastModified: parseDate(cityDates[index]),
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
    ...industryPages,
    ...agencyPage,
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
