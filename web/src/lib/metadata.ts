import type { Metadata } from "next";
import { truncateDescription } from "./truncate";

const CANONICAL_SITE_URL = "https://automationminds.net";

function resolveSiteUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim().replace(/\/$/, "");
  if (!raw) return CANONICAL_SITE_URL;

  try {
    const parsed = new URL(raw);
    // Produkcja i sitemap/canonical nigdy nie powinny wskazywać na *.vercel.app
    // ani localhost — GSC odrzuca obce domeny.
    if (
      parsed.hostname === "automationminds.net" ||
      parsed.hostname === "www.automationminds.net"
    ) {
      return "https://automationminds.net";
    }
    if (
      process.env.VERCEL_ENV === "production" ||
      parsed.hostname.endsWith(".vercel.app") ||
      parsed.hostname === "localhost"
    ) {
      return CANONICAL_SITE_URL;
    }
    return `${parsed.protocol}//${parsed.host}`;
  } catch {
    return CANONICAL_SITE_URL;
  }
}

const siteUrl = resolveSiteUrl();

const defaultOgImage = "/opengraph-image";

export function buildMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  ogImage,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  ogImage?: string;
}): Metadata {
  const canonical = `${siteUrl}${path || "/"}`;
  const shortDescription = truncateDescription(description);
  const image = ogImage || defaultOgImage;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description: shortDescription,
    alternates: { canonical },
    openGraph: {
      title,
      description: shortDescription,
      url: canonical,
      siteName: "Automation Minds",
      locale: "pl_PL",
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: shortDescription,
      images: [imageUrl],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}

export { siteUrl, defaultOgImage };
