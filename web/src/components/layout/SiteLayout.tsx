import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCallFab } from "@/components/layout/MobileCallFab";
import { getServices, getSettings } from "@/lib/airtable";
import { getGuideCategoriesWithCounts } from "@/lib/guide-articles";
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

  const guideCategories = getGuideCategoriesWithCounts()
    .filter((category) => category.inMenu)
    .map(({ slug, name }) => ({ slug, name }));

  return (
    <>
      <Header
        settings={settings}
        services={services}
        guideCategories={guideCategories}
        transparent={transparentHeader}
      />
      <main className={cn(!transparentHeader && "pt-[72px]")}>{children}</main>
      <MobileCallFab phone={settings.phone} />
      <Footer
        settings={settings}
        services={services}
        guideCategories={guideCategories}
      />
    </>
  );
}
