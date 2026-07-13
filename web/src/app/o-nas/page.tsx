import { SiteLayout } from "@/components/layout/SiteLayout";
import { IntroSection } from "@/components/sections/IntroSection";
import { PageBanner } from "@/components/sections/PageBanner";
import { StatsRow } from "@/components/sections/StatsRow";
import {
  getFeatureTiles,
  getListItems,
  getSettings,
  getHomePageData,
} from "@/lib/airtable";
import { getMockPageSection } from "@/lib/airtable-mock";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  title: "O nas — Automation Minds",
  description: "Poznaj zespół Automation Minds i nasze podejście do automatyzacji.",
  path: "/o-nas",
});

export default async function AboutPage() {
  const [homeData, listItems, featureTiles, settings] = await Promise.all([
    getHomePageData(),
    getListItems("o-nas"),
    getFeatureTiles("areas"),
    getSettings(),
  ]);

  const banner = getMockPageSection("o-nas", "banner");

  return (
    <SiteLayout>
      {banner ? (
        <PageBanner title={banner.title} imageUrl={banner.imageUrl} />
      ) : null}
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
        <StatsRow section={homeData.conversation} stats={settings} />
      ) : null}
    </SiteLayout>
  );
}
