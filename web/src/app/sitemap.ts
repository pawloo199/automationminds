import { getLandingPages, getServices } from "@/lib/airtable";
import { siteUrl } from "@/lib/metadata";
import type { MetadataRoute } from "next";

function parseDate(value: string | undefined): Date {
  if (!value) return new Date();
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, landingPages] = await Promise.all([
    getServices(),
    getLandingPages(),
  ]);

  const staticPages = ["", "/o-nas", "/kontakt", "/polityka-prywatnosci"].map(
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

  return [...staticPages, ...servicePages, ...campaignPages];
}
