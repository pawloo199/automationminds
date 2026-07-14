import { getCaseStudies, getLandingPages, getServices } from "@/lib/airtable";
import { caseStudyPath } from "@/lib/case-study-icons";
import { getGuideArticles, guideArticlePath } from "@/lib/guide-articles";
import { siteUrl } from "@/lib/metadata";
import type { MetadataRoute } from "next";

function parseDate(value: string | undefined): Date {
  if (!value) return new Date();
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, landingPages, caseStudies, guideArticles] = await Promise.all([
    getServices(),
    getLandingPages(),
    getCaseStudies("home"),
    Promise.resolve(getGuideArticles()),
  ]);

  const staticPages = ["", "/o-nas", "/poradnik", "/kontakt", "/polityka-prywatnosci"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const servicePages = services.map((service) => ({
    url: `${siteUrl}/uslugi/${service.slug}`,
    lastModified: parseDate(service.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const campaignPages = landingPages
    .filter((page) => !page.noIndex)
    .map((page) => ({
      url: `${siteUrl}/kampanie/${page.slug}`,
      lastModified: parseDate(page.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }));

  const caseStudyPages = caseStudies.map((item) => ({
    url: `${siteUrl}${caseStudyPath(item.slug)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const guidePages = guideArticles.map((item) => ({
    url: `${siteUrl}${guideArticlePath(item.slug)}`,
    lastModified: new Date(item.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...campaignPages,
    ...caseStudyPages,
    ...guidePages,
  ];
}
