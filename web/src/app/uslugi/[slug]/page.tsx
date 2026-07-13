import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { PageBanner } from "@/components/sections/PageBanner";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TabbedCases } from "@/components/sections/TabbedCases";
import {
  getCaseStudies,
  getProcessSteps,
  getServiceBySlug,
  getServices,
} from "@/lib/airtable";
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
    title: `${service.title} — Automation Minds`,
    description: service.introBody,
    path: `/uslugi/${slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [service, caseStudies, processSteps] = await Promise.all([
    getServiceBySlug(slug),
    getCaseStudies(slug),
    getProcessSteps(slug),
  ]);

  if (!service) notFound();

  return (
    <SiteLayout>
      <PageBanner
        title={service.bannerTitle}
        imageUrl={service.bannerImageUrl}
      />
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
      <ContactSection
        subtitle="Skontaktuj się z nami"
        title="Porozmawiajmy o Twoim projekcie"
        body="Wypełnij formularz, a skontaktujemy się z Tobą telefonicznie."
        sourcePage={`/uslugi/${slug}`}
      />
    </SiteLayout>
  );
}
