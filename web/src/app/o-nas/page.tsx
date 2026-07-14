import { SiteLayout } from "@/components/layout/SiteLayout";
import { IntroSection } from "@/components/sections/IntroSection";
import { PageBanner } from "@/components/sections/PageBanner";
import { StatsRow } from "@/components/sections/StatsRow";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import {
  getFeatureTiles,
  getHomePageData,
  getListItems,
  getPageSection,
  getSettings,
} from "@/lib/airtable";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const banner = await getPageSection("o-nas", "banner");
  return buildMetadata({
    title: banner?.metaTitle || "O nas — Automation Minds",
    description:
      banner?.metaDescription ||
      "Poznaj zespół Automation Minds i nasze podejście do automatyzacji.",
    path: "/o-nas",
  });
}

export default async function AboutPage() {
  const [homeData, listItems, featureTiles, settings, banner] = await Promise.all([
    getHomePageData(),
    getListItems("o-nas"),
    getFeatureTiles(),
    getSettings(),
    getPageSection("o-nas", "banner"),
  ]);

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "O nas" },
  ];

  return (
    <SiteLayout>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      {banner ? (
        <PageBanner title={banner.title} imageUrl={banner.imageUrl} />
      ) : null}
      <Container className="py-4">
        <Breadcrumbs items={breadcrumbs} />
      </Container>
      {homeData.intro ? (
        <IntroSection
          subtitle={homeData.intro.subtitle}
          title={homeData.intro.title}
          body={homeData.intro.body}
          imageUrl={homeData.intro.imageUrl}
          buttonText={homeData.intro.buttonText}
          buttonLink={homeData.intro.buttonLink}
          listItems={listItems.map((item) => item.text)}
        />
      ) : null}
      {homeData.areasHeader ? (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                {homeData.areasHeader.subtitle}
              </p>
              <h2 className="text-3xl font-bold text-dark">
                {homeData.areasHeader.title}
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featureTiles.map((tile) => (
                <div key={tile.id} className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-dark">{tile.title}</h3>
                  <p className="mt-2 text-sm text-muted">{tile.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      {homeData.conversation ? (
        <StatsRow
          section={homeData.conversation}
          stats={settings}
          cities={homeData.citySilos}
        />
      ) : null}
    </SiteLayout>
  );
}
