import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { GuideArticlesSection } from "@/components/sections/GuideArticlesSection";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { IntroSection } from "@/components/sections/IntroSection";
import { StatsRow } from "@/components/sections/StatsRow";
import { TabbedCases } from "@/components/sections/TabbedCases";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomePageData } from "@/lib/airtable";
import { CONTACT_FORM_SERVICE_OPTIONS } from "@/lib/services/catalog";
import type { HeroSlide } from "@/lib/airtable.types";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { getCityCoverageSearchIndex } from "@/lib/city-pages";
import { faqPageJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const revalidate = 60;

/** Stały hero pod Ads: jeden slajd z CTA konsultacji, bez rotacji obietnic. */
function getStaticHomeHero(slides: HeroSlide[]): HeroSlide[] {
  const conversionSlide =
    slides.find((slide) => slide.buttonOpensModal) ?? slides[0];
  return conversionSlide ? [conversionSlide] : [];
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomePageData();
  return buildMetadata({
    title: "Automation Minds — automatyzacja procesów biznesowych",
    description: data.settings.metaDescription,
  });
}

export default async function HomePage() {
  const [data, searchableCities] = await Promise.all([
    getHomePageData(),
    Promise.resolve(getCityCoverageSearchIndex()),
  ]);
  const heroSlides = getStaticHomeHero(data.heroSlides);

  return (
    <SiteLayout transparentHeader>
      <JsonLd data={faqPageJsonLd(data.faq)} />
      <HeroSlider
        slides={heroSlides}
        phone={data.settings.phone}
        services={CONTACT_FORM_SERVICE_OPTIONS}
      />
      {data.intro ? (
        <IntroSection
          subtitle={data.intro.subtitle}
          title={data.intro.title}
          body={data.intro.body}
          imageUrl={data.intro.imageUrl}
          buttonText={data.intro.buttonText}
          buttonLink={data.intro.buttonLink}
          listItems={data.listItems.slice(0, 4).map((item) => item.text)}
          sourcePage="/"
          services={CONTACT_FORM_SERVICE_OPTIONS}
        />
      ) : null}
      {data.areasHeader ? (
        <FeatureGrid
          subtitle={data.areasHeader.subtitle}
          title={data.areasHeader.title}
          tiles={data.featureTilesAreas}
          buttonText={data.areasHeader.buttonText}
          buttonLink={data.areasHeader.buttonLink}
          sourcePage="/"
          services={CONTACT_FORM_SERVICE_OPTIONS}
        />
      ) : null}
      {data.conversation ? (
        <StatsRow
          section={data.conversation}
          stats={data.stats}
          cities={data.citySilos}
          searchableCities={searchableCities}
          sourcePage="/"
          services={CONTACT_FORM_SERVICE_OPTIONS}
          useModalCta
        />
      ) : null}
      {data.caseStudiesHeader ? (
        <TabbedCases
          subtitle={data.caseStudiesHeader.subtitle}
          title={data.caseStudiesHeader.title}
          cases={data.caseStudies}
        />
      ) : null}
      {data.faqHeader ? (
        <FaqAccordion
          subtitle={data.faqHeader.subtitle}
          title={data.faqHeader.title}
          items={data.faq}
        />
      ) : null}
      {data.guideHeader ? (
        <GuideArticlesSection
          subtitle={data.guideHeader.subtitle}
          title={data.guideHeader.title}
          body={data.guideHeader.body}
          articles={data.guideArticles}
          buttonText={data.guideHeader.buttonText}
          buttonLink={data.guideHeader.buttonLink}
        />
      ) : null}
      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title={CONSULTATION_OFFER.formTitle}
        body={CONSULTATION_OFFER.formBody}
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage="/"
        redirectOnSuccess
        sectionId="formularz"
      />
    </SiteLayout>
  );
}
