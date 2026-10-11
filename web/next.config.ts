import type { NextConfig } from "next";

// Usługi ze starej strony WordPress leżały w katalogu głównym (np. /automatyzacja-dla-hr/).
// Klucz: stary slug, wartość: slug w /uslugi. Reguły muszą stać przed regułą miast —
// inaczej /automatyzacja-:city przekieruje je na nieistniejące /automatyzacja-procesow/... (404).
const LEGACY_WORDPRESS_SERVICES: Record<string, string> = {
  "doradztwo-i-optymalizacja-procesow-biznesowych": "doradztwo-i-optymalizacja-procesow-biznesowych",
  "automatyzacja-dla-sprzedazy-i-marketingu": "automatyzacja-sprzedazy",
  "automatyzacja-dla-hr": "automatyzacja-dla-hr",
  "automatyzacja-dla-ksiegowosci": "automatyzacja-dla-ksiegowosci",
  "automatyzacja-raportow": "automatyzacja-raportow",
  "automatyzacja-w-obsludze-klienta": "automatyzacja-w-obsludze-klienta",
  "automatyzacja-w-produkcji-i-uslugach": "automatyzacja-w-produkcji",
  "automatyzacja-dla-logistyki": "automatyzacja-dla-logistyki",
  "automatyzacja-oraz-ai-w-niestandardowych-procesach":
    "automatyzacja-oraz-ai-w-niestandardowych-procesach",
};

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    // Usługi rozdzielone na osobne strony (patrz SERVICE_REDIRECTS w src/lib/services/catalog.ts).
    return [
      {
        source: "/uslugi/automatyzacja-dla-sprzedazy-i-marketingu",
        destination: "/uslugi/automatyzacja-sprzedazy",
        permanent: true,
      },
      {
        source: "/uslugi/automatyzacja-w-produkcji-i-uslugach",
        destination: "/uslugi/automatyzacja-w-produkcji",
        permanent: true,
      },
      ...Object.entries(LEGACY_WORDPRESS_SERVICES).map(([legacySlug, serviceSlug]) => ({
        source: `/${legacySlug}`,
        destination: `/uslugi/${serviceSlug}`,
        permanent: true,
      })),
      // Strony miast przeniesione z /automatyzacja-{miasto} do silosu /automatyzacja-procesow/{miasto}.
      {
        source: "/automatyzacja-:city((?!procesow)[^/]+)",
        destination: "/automatyzacja-procesow/:city",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "automationminds.net" },
      { protocol: "https", hostname: "v5.airtableusercontent.com" },
      { protocol: "https", hostname: "dl.airtable.com" },
      { protocol: "https", hostname: "**.public.blob.vercel-storage.com" },
    ],
  },
};

export default nextConfig;
