import { getServices } from "@/lib/airtable";
import { siteUrl } from "@/lib/metadata";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const services = await getServices();

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
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
