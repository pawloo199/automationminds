import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getServices, getSettings } from "@/lib/airtable";
import type { ReactNode } from "react";

export async function SiteLayout({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  const [settings, services] = await Promise.all([
    getSettings(),
    getServices(),
  ]);

  return (
    <>
      <Header
        settings={settings}
        services={services}
        transparent={transparentHeader}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
