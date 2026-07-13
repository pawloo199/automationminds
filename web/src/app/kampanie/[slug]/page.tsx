import { ContactSection } from "@/components/sections/ContactSection";
import { CampaignHero } from "@/components/sections/CampaignHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  getLandingPageBySlug,
  getLandingPages,
  getServiceBySlug,
} from "@/lib/airtable";
import {
  breadcrumbJsonLd,
  landingPageJsonLd,
  serviceJsonLd,
} from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const pages = await getLandingPages();
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getLandingPageBySlug(slug);
  if (!page) return {};

  return buildMetadata({
    title: page.metaTitle || page.heroTitle,
    description: page.metaDescription || page.heroSubtitle,
    path: `/kampanie/${slug}`,
    noIndex: page.noIndex,
    ogImage: page.heroImageUrl,
  });
}

export default async function CampaignPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await getLandingPageBySlug(slug);
  if (!page) notFound();

  const relatedService = page.relatedServiceSlug
    ? await getServiceBySlug(page.relatedServiceSlug)
    : null;

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Kampanie", href: undefined },
    { label: page.heroTitle },
  ];

  const jsonLd = [
    landingPageJsonLd(page),
    breadcrumbJsonLd(breadcrumbs),
    ...(relatedService ? [serviceJsonLd(relatedService)] : []),
  ];

  return (
    <SiteLayout>
      <JsonLd data={jsonLd} />
      <Container className="py-4">
        <Breadcrumbs items={breadcrumbs} />
      </Container>
      <CampaignHero
        title={page.heroTitle}
        subtitle={page.heroSubtitle}
        imageUrl={page.heroImageUrl}
        imageAlt={page.heroImageAlt}
        ctaText={page.primaryCtaText}
        ctaLink={page.primaryCtaLink}
      />
      {page.socialProof ? (
        <section className="border-b border-brand/10 bg-surface py-6">
          <Container>
            <p className="text-center text-sm font-medium text-muted">
              {page.socialProof}
            </p>
          </Container>
        </section>
      ) : null}
      {page.benefits.length > 0 ? (
        <section className="py-16">
          <Container>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {page.benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="rounded-2xl border border-brand/10 bg-white p-6 shadow-sm"
                >
                  <h2 className="text-lg font-semibold text-dark">
                    {benefit.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{benefit.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      {page.sections.map((section) => (
        <section key={section.id} className="py-12">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-dark">{section.title}</h2>
              <p className="mt-4 leading-relaxed text-muted">{section.body}</p>
            </div>
          </Container>
        </section>
      ))}
      {relatedService ? (
        <section className="bg-surface py-12">
          <Container className="text-center">
            <p className="text-sm text-muted">Powiązana usługa</p>
            <h2 className="mt-2 text-xl font-bold text-dark">
              {relatedService.title}
            </h2>
            <div className="mt-6">
              <Button href={`/uslugi/${relatedService.slug}`}>
                Zobacz szczegóły usługi
              </Button>
            </div>
          </Container>
        </section>
      ) : null}
      {page.formEnabled ? (
        <ContactSection
          subtitle="Skontaktuj się z nami"
          title="Umów bezpłatną konsultację 30 min"
          body="Opowiedz o swoich procesach — pokażemy, co można zautomatyzować."
          sourcePage={`/kampanie/${slug}`}
          redirectOnSuccess
          sectionId="formularz"
        />
      ) : (
        <section className="py-16">
          <Container className="text-center">
            <Button href="/kontakt">Skontaktuj się z nami</Button>
            <p className="mt-4">
              <Link href="/polityka-prywatnosci" className="text-sm text-brand underline">
                Polityka prywatności
              </Link>
            </p>
          </Container>
        </section>
      )}
    </SiteLayout>
  );
}
