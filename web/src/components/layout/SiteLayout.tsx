import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCallFab } from "@/components/layout/MobileCallFab";
import { getServices, getSettings } from "@/lib/airtable";
import { cn } from "@/lib/cn";
import { withCodeServices } from "@/lib/n8n-service";
import type { ReactNode } from "react";

export async function SiteLayout({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  const [settings, cmsServices] = await Promise.all([
    getSettings(),
    getServices(),
  ]);
  const services = withCodeServices(cmsServices);

  return (
    <>
      <Header
        settings={settings}
        services={services}
        transparent={transparentHeader}
      />
      <main className={cn(!transparentHeader && "pt-[72px]")}>{children}</main>
      <MobileCallFab phone={settings.phone} />
      <Footer settings={settings} services={services} />
    </>
  );
}
