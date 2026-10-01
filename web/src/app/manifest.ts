import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Automation Minds",
    short_name: "Automation Minds",
    description:
      "Automatyzacja procesów biznesowych i rozwiązania AI dla firm.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6d51fd",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
