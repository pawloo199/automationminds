import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { IntroSection } from "@/components/sections/IntroSection";
import { StatsRow } from "@/components/sections/StatsRow";
import { TabbedCases } from "@/components/sections/TabbedCases";
import { ToolsGrid } from "@/components/sections/ToolsGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomePageData } from "@/lib/airtable";
import { faqPageJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePageData();
  return buildMetadata({
    title: "Automation Minds — automatyzacja procesów biznesowych",
    description: data.settings.metaDescription,
  });
}

export default async function HomePage() {
  const data = await getHomePageData();

  return (
    <SiteLayout transparentHeader>
      <JsonLd data={faqPageJsonLd(data.faq)} />
      <HeroSlider slides={data.heroSlides} phone={data.settings.phone} />
      {data.intro ? (
        <IntroSection
          subtitle={data.intro.subtitle}
          title={data.intro.title}
          body={data.intro.body}
          imageUrl={data.intro.imageUrl}
          buttonText={data.intro.buttonText}
          buttonLink={data.intro.buttonLink}
          listItems={data.listItems.map((item) => item.text)}
        />
      ) : null}
      {data.areasHeader ? (
        <FeatureGrid
          subtitle={data.areasHeader.subtitle}
          title={data.areasHeader.title}
          tiles={data.featureTilesAreas}
        />
      ) : null}
      {data.conversation ? (
        <StatsRow section={data.conversation} stats={data.stats} />
      ) : null}
      {data.benefitsHeader ? (
        <>
          <section className="py-12">
            <div className="mx-auto max-w-3xl px-4 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                {data.benefitsHeader.subtitle}
              </p>
              <h2 className="text-3xl font-bold text-dark sm:text-4xl">
                {data.benefitsHeader.title}
              </h2>
              {data.benefitsHeader.body ? (
                <p className="mt-4 text-muted">{data.benefitsHeader.body}</p>
              ) : null}
            </div>
          </section>
          <FeatureGrid
            title=""
            tiles={data.featureTilesBenefits}
            variant="benefits"
          />
        </>
      ) : null}
      {data.caseStudiesHeader ? (
        <TabbedCases
          subtitle={data.caseStudiesHeader.subtitle}
          title={data.caseStudiesHeader.title}
          cases={data.caseStudies}
        />
      ) : null}
      {data.toolsHeader ? (
        <ToolsGrid
          subtitle={data.toolsHeader.subtitle}
          title={data.toolsHeader.title}
          tools={data.tools}
        />
      ) : null}
      {data.faqHeader ? (
        <FaqAccordion
          subtitle={data.faqHeader.subtitle}
          title={data.faqHeader.title}
          items={data.faq}
        />
      ) : null}
      {data.contactCta ? (
        <ContactSection
          subtitle={data.contactCta.subtitle}
          title={data.contactCta.title}
          body={data.contactCta.body}
          sourcePage="/"
        />
      ) : null}
    </SiteLayout>
  );
}
