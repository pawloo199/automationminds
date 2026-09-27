import { ContactSection } from "@/components/sections/ContactSection";
import { CampaignHero } from "@/components/sections/CampaignHero";
import { CityPageBody } from "@/components/sections/CityPageBody";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import {
  getAllCityPages,
  getCityPage,
  getNearbyCities,
} from "@/lib/city-pages";
import { cityPath } from "@/lib/city-pages/types";
import {
  breadcrumbJsonLd,
  cityServiceJsonLd,
  faqPageJsonLd,
} from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;

function citySlugFromParam(param: string): string | null {
  const match = /^automatyzacja-(.+)$/.exec(param);
  return match?.[1] ?? null;
}

export function generateStaticParams() {
  return getAllCityPages().map((city) => ({
    slug: `automatyzacja-${city.slug}`,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const citySlug = citySlugFromParam(slug);
  const city = citySlug ? getCityPage(citySlug) : null;
  if (!city) return {};

  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: cityPath(city.slug),
    ogImage: city.ogImage,
  });
}

export default async function CityAutomationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const citySlug = citySlugFromParam(slug);
  const city = citySlug ? getCityPage(citySlug) : null;
  if (!city) notFound();

  const nearby = getNearbyCities(city);
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: `Automatyzacja — ${city.name}` },
  ];

  const faqItems = city.faq.map((item) => ({
    id: item.id,
    question: item.question,
    answer: item.answer,
    order: 0,
    keywords: "",
  }));

  return (
    <SiteLayout>
      <JsonLd
        data={[
          cityServiceJsonLd(city),
          breadcrumbJsonLd(breadcrumbs),
          faqPageJsonLd(faqItems),
        ]}
      />
      <CampaignHero
        title={city.heroTitle}
        subtitle={city.heroLead}
        imageUrl={city.ogImage || "/images/migrated/hero-1.jpg"}
        imageAlt={`Automatyzacja procesów w ${city.nameLocative}`}
        ctaText="Umów bezpłatną konsultację"
        ctaLink="#formularz"
      />
      <Container className="py-4">
        <Breadcrumbs items={breadcrumbs} />
      </Container>
      <CityPageBody city={city} nearbyNames={nearby} />
      <FaqAccordion
        subtitle="Pytania lokalne"
        title={`FAQ — automatyzacja w ${city.nameLocative}`}
        items={faqItems}
      />
      <ContactSection
        subtitle="Bezpłatna konsultacja"
        title={`Porozmawiajmy o automatyzacji w Twojej firmie z ${city.nameGenitive}`}
        body="Opowiedz o procesach — wskażemy, co warto usprawnić najpierw. Pracujemy zdalnie i hybrydowo z firmami w całej Polsce."
        sourcePage={cityPath(city.slug)}
        redirectOnSuccess
        sectionId="formularz"
      />
    </SiteLayout>
  );
}
