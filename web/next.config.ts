import type { NextConfig } from "next";

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
