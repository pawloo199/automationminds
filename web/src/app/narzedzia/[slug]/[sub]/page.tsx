import { LeadHero } from "@/components/city/LeadHero";
import { ArticleCard } from "@/components/guide/ArticleCard";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProcessCostsAndRisks, ProcessImplementation, ProcessIntro, ProcessVariants } from "@/components/processes/ProcessSections";
import { ContactSection } from "@/components/sections/ContactSection";
import { ServiceCard, ServiceExample, ServiceMidCta, ServiceScope } from "@/components/services/ServiceSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolComparison, ToolSubpageIntro, ToolSubpageLinks } from "@/components/tools/ToolSections";
import { Container } from "@/components/ui/Container";
import { getSettings } from "@/lib/airtable";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { breadcrumbJsonLd, guideFaqJsonLd, toolServiceJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import {
  getToolEntry,
  getToolGroup,
  getToolSubpage,
  getToolSubpageRelatedArticles,
  getToolSubpageRelatedServices,
  getToolSubpages,
  toolSubpageBreadcrumbs,
  toolSubpagePath,
} from "@/lib/tools";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export const dynamicParams = false;

type Params = Promise<{ slug: string; sub: string }>;

export function generateStaticParams() {
  return getToolSubpages().map((page) => ({ slug: page.toolSlug, sub: page.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, sub } = await params;
  const page = getToolSubpage(slug, sub);
  if (!page) return {};
  return buildMetadata({ title: page.metaTitle, description: page.metaDescription, path: toolSubpagePath(slug, sub) });
}

export default async function ToolSubpage({ params }: { params: Params }) {
  const { slug, sub } = await params;
  const entry = getToolEntry(slug);
  const page = getToolSubpage(slug, sub);
  if (!entry || !page) notFound();

  const settings = await getSettings();
  const group = getToolGroup(entry.group);
  const breadcrumbs = toolSubpageBreadcrumbs(entry.name, page);
  const path = toolSubpagePath(slug, sub);
  const relatedServices = getToolSubpageRelatedServices(page);
  const relatedArticles = getToolSubpageRelatedArticles(page);
  const siblings = getToolSubpages(slug).filter((other) => other.slug !== page.slug);

  return (
    <SiteLayout>
      <JsonLd
        data={[
          toolServiceJsonLd(entry, { ...page, useCases: page.scope }, group.name, path),
          breadcrumbJsonLd(breadcrumbs),
          guideFaqJsonLd(page.faq),
        ]}
      />

      <LeadHero
        breadcrumbs={breadcrumbs.map((item, index) => (index === breadcrumbs.length - 1 ? { label: item.label } : item))}
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        lead={page.hero.lead}
        bullets={[CONSULTATION_OFFER.durationLabel, ...page.hero.bullets.slice(0, 2)]}
        phone={settings.phone}
        sourcePage={path}
      />

      <ProcessIntro content={page} />
      <ToolSubpageIntro page={page} toolName={entry.name} />
      <ServiceScope scope={page.scope} />
      {page.comparison ? <ToolComparison comparison={page.comparison} /> : null}
      {page.example ? <ServiceExample example={page.example} /> : null}
      <ProcessImplementation implementation={page.implementation} />

      <ServiceMidCta
        title="Porozmawiajmy o waszym przypadku"
        body="W 30 minut przejdziemy przez to, czego potrzebujecie, i powiemy wprost, który wariant ma sens, a który nie."
        phone={settings.phone}
      />

      <ProcessVariants variants={page.variants} />
      <ProcessCostsAndRisks content={page} />

      <section id="faq" aria-label="Najczęstsze pytania" className="scroll-mt-32 py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">FAQ</p>
              <p className="mt-4 text-2xl font-bold leading-snug text-dark">{page.name}: pytania i odpowiedzi</p>
            </div>
            <div className="lg:col-span-8 [&>section]:mt-0">
              <ArticleFaq items={page.faq} />
            </div>
          </div>
        </Container>
      </section>

      <ToolSubpageLinks toolName={entry.name} pages={siblings} />

      {relatedServices.length > 0 || relatedArticles.length > 0 ? (
        <section aria-labelledby="powiazane" className="py-20 lg:py-24">
          <Container>
            <h2 id="powiazane" className="text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl">
              Zobacz też
            </h2>
            {relatedServices.length > 0 ? (
              <>
                <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-muted">Powiązane usługi</h3>
                <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {relatedServices.map((service) => (
                    <li key={service.slug}>
                      <ServiceCard service={service} headingLevel="h3" showGroup />
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            {relatedArticles.length > 0 ? (
              <>
                <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-muted">Z Poradnika</h3>
                <div className="mt-5 grid gap-6 md:grid-cols-3">
                  {relatedArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              </>
            ) : null}
          </Container>
        </section>
      ) : null}

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title={`Porozmawiajmy: ${page.name}`}
        body="Opowiedz, czego potrzebujecie i jakich narzędzi używacie. W 30 minut wskażemy, od czego zacząć i ile to może kosztować."
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={path}
        redirectOnSuccess
        sectionId="formularz"
      />
    </SiteLayout>
  );
}
