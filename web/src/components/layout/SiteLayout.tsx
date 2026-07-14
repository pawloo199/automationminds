import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getServices, getSettings } from "@/lib/airtable";
import { cn } from "@/lib/cn";
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
      <main className={cn(!transparentHeader && "pt-[72px]")}>{children}</main>
      <Footer settings={settings} services={services} />
    </>
  );
}
