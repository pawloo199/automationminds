import { LeadHero } from "@/components/city/LeadHero";
import { ArticleCard } from "@/components/guide/ArticleCard";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import { ServiceCard, ServiceExample, ServiceMidCta, ServiceScope } from "@/components/services/ServiceSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProcessLinks } from "@/components/processes/ProcessLinks";
import { getProcessesForTool } from "@/lib/processes";
import { ToolCard, ToolComparison, ToolCosts, ToolFit, ToolFlows, ToolIntro } from "@/components/tools/ToolSections";
import { Container } from "@/components/ui/Container";
import { getSettings } from "@/lib/airtable";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { breadcrumbJsonLd, guideFaqJsonLd, toolServiceJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import {
  getRelatedTools,
  getToolContent,
  getToolEntry,
  getToolGroup,
  getToolPages,
  getToolRelatedArticles,
  getToolRelatedServices,
  toolBreadcrumbs,
  toolPath,
} from "@/lib/tools";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return getToolPages().map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = getToolContent(slug);
  if (!content) return {};
  return buildMetadata({ title: content.metaTitle, description: content.metaDescription, path: toolPath(slug) });
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getToolEntry(slug);
  const content = getToolContent(slug);
  if (!entry || !content) notFound();

  const settings = await getSettings();
  const group = getToolGroup(entry.group);
  const breadcrumbs = toolBreadcrumbs(entry.name, entry.slug);
  const relatedTools = getRelatedTools(content);
  const relatedServices = getToolRelatedServices(content);
  const relatedArticles = getToolRelatedArticles(content);
  const path = toolPath(entry.slug);
  const processes = getProcessesForTool(entry.slug);

  return (
    <SiteLayout>
      <JsonLd
        data={[
          toolServiceJsonLd(entry, content, group.name),
          breadcrumbJsonLd(breadcrumbs),
          guideFaqJsonLd(content.faq),
        ]}
      />

      <LeadHero
        breadcrumbs={breadcrumbs.map((item, index) => (index === breadcrumbs.length - 1 ? { label: item.label } : item))}
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        lead={content.hero.lead}
        bullets={[CONSULTATION_OFFER.durationLabel, ...content.hero.bullets.slice(0, 2)]}
        phone={settings.phone}
        sourcePage={path}
      />

      <ToolIntro content={content} related={relatedTools} />
      <ServiceScope scope={content.useCases} />
      <ToolFlows flows={content.flows} />
      <ToolFit fit={content.fit} name={entry.name} />
      <ToolComparison comparison={content.comparison} />
      <ServiceExample example={content.example} />
      <ToolCosts costs={content.costs} />

      <ServiceMidCta
        title={`Zastanawiacie się, czy ${entry.name} to dobry wybór?`}
        body="W 30 minut przejdziemy przez wasz proces i powiemy wprost, które narzędzie sprawdzi się najlepiej, nawet jeśli to nie będzie to, o które pytacie."
        phone={settings.phone}
      />

      <section id="faq" aria-label="Najczęstsze pytania" className="scroll-mt-32 py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">FAQ</p>
              <p className="mt-4 text-2xl font-bold leading-snug text-dark">{entry.name}: pytania i odpowiedzi</p>
            </div>
            <div className="lg:col-span-8 [&>section]:mt-0">
              <ArticleFaq items={content.faq} />
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="powiazane" className="border-t border-brand/10 bg-surface py-20 lg:py-24">
        <Container>
          <h2 id="powiazane" className="text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl">
            Zobacz też
          </h2>
          {relatedServices.length > 0 ? (
            <>
              <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-muted">Usługi z wykorzystaniem {entry.name}</h3>
              <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <ServiceCard service={service} headingLevel="h3" showGroup />
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          <ProcessLinks processes={processes} title={`Procesy z wykorzystaniem ${entry.name}`} />
          {relatedTools.length > 0 ? (
            <>
              <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-muted">Inne narzędzia</h3>
              <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {relatedTools.map((tool) => (
                  <li key={tool.slug}>
                    <ToolCard tool={tool} />
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

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title={`Porozmawiajmy o wdrożeniu ${entry.name}`}
        body="Opowiedz, jak dziś wygląda proces i jakich narzędzi używacie. W 30 minut wskażemy, od czego zacząć i ile to może kosztować."
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={path}
        redirectOnSuccess
        sectionId="formularz"
      />
    </SiteLayout>
  );
}
