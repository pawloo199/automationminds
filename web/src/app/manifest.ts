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
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
