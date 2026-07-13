import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { PageBanner } from "@/components/sections/PageBanner";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { TabbedCases } from "@/components/sections/TabbedCases";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import {
  getCaseStudies,
  getProcessSteps,
  getServiceBySlug,
  getServices,
} from "@/lib/airtable";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle || `${service.title} — Automation Minds`,
    description: service.metaDescription || service.introBody,
    path: `/uslugi/${slug}`,
    ogImage: service.ogImageUrl,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [service, caseStudies, processSteps, allServices] = await Promise.all([
    getServiceBySlug(slug),
    getCaseStudies(slug),
    getProcessSteps(slug),
    getServices(),
  ]);

  if (!service) notFound();

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/o-nas" },
    { label: service.title },
  ];

  return (
    <SiteLayout>
      <JsonLd data={[serviceJsonLd(service), breadcrumbJsonLd(breadcrumbs)]} />
      <PageBanner
        title={service.bannerTitle}
        imageUrl={service.bannerImageUrl}
      />
      <Container className="py-4">
        <Breadcrumbs items={breadcrumbs} />
      </Container>
      <IntroSection
        subtitle={service.introSubtitle}
        title={service.introTitle}
        body={service.introBody}
        imageUrl={service.introImageUrl}
        buttonText={service.introButtonText}
        buttonLink={service.introButtonLink}
      />
      <TabbedCases
        subtitle={service.tabsSubtitle}
        title={service.tabsTitle}
        cases={caseStudies}
      />
      <ProcessSteps
        subtitle={service.processSubtitle}
        title={service.processTitle}
        steps={processSteps}
      />
      <RelatedServices currentSlug={slug} services={allServices} />
      <ContactSection
        subtitle="Skontaktuj się z nami"
        title="Porozmawiajmy o Twoim projekcie"
        body="Wypełnij formularz, a skontaktujemy się z Tobą telefonicznie."
        sourcePage={`/uslugi/${slug}`}
      />
    </SiteLayout>
  );
}
