import { siteUrl } from "@/lib/metadata";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dziekujemy"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
