import { buildSitemapEntries } from "@/lib/sitemap";
import type { MetadataRoute } from "next";

/**
 * Dynamiczna mapa witryny: https://{domena}/sitemap.xml
 * Odświeżana okresowo (ISR) oraz natychmiast po zmianach CMS
 * przez /api/revalidate → revalidatePath('/sitemap.xml').
 */
export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return buildSitemapEntries();
}
