import { LeadHero } from "@/components/city/LeadHero";
import { ArticleCard } from "@/components/guide/ArticleCard";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { SiteLayout } from "@/components/layout/SiteLayout";
import {
  ProcessCostsAndRisks,
  ProcessFlow,
  ProcessImplementation,
  ProcessIntro,
  ProcessOutcomes,
  ProcessPrerequisites,
  ProcessVariants,
} from "@/components/processes/ProcessSections";
import { ContactSection } from "@/components/sections/ContactSection";
import { ServiceCard, ServiceExample, ServiceMidCta } from "@/components/services/ServiceSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolCard } from "@/components/tools/ToolSections";
import { Container } from "@/components/ui/Container";
import { getSettings } from "@/lib/airtable";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { breadcrumbJsonLd, guideFaqJsonLd, processServiceJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import {
  getLiveProcesses,
  getProcessArea,
  getProcessContent,
  getProcessEntry,
  getProcessRelatedArticles,
  getProcessRelatedServices,
  getProcessRelatedTools,
  processBreadcrumbs,
  processPath,
} from "@/lib/processes";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export const dynamicParams = false;

const SECTION_NAV = [
  { href: "#mapa-procesu", label: "Mapa procesu" },
  { href: "#wdrozenie", label: "Wdrożenie" },
  { href: "#przygotowanie", label: "Co przygotować" },
  { href: "#faq", label: "FAQ" },
];

export function generateStaticParams() {
  return getLiveProcesses().map((process) => ({ slug: process.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = getProcessContent(slug);
  if (!content) return {};
  return buildMetadata({ title: content.metaTitle, description: content.metaDescription, path: processPath(slug) });
}

export default async function ProcessPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getProcessEntry(slug);
  const content = getProcessContent(slug);
  if (!entry || entry.status !== "live" || !content) notFound();

  const settings = await getSettings();
  const area = getProcessArea(entry.area);
  const breadcrumbs = processBreadcrumbs(entry.name, entry.slug);
  const relatedTools = getProcessRelatedTools(content);
  const relatedServices = getProcessRelatedServices(content);
  const relatedArticles = getProcessRelatedArticles(content);
  const path = processPath(entry.slug);

  return (
    <SiteLayout>
      <JsonLd
        data={[
          processServiceJsonLd(entry.slug, content, area.name),
          breadcrumbJsonLd(breadcrumbs),
          guideFaqJsonLd(content.faq),
        ]}
      />

      <LeadHero
        breadcrumbs={breadcrumbs.map((item, index) => (index === breadcrumbs.length - 1 ? { label: item.label } : item))}
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        lead={content.hero.lead}
        bullets={content.hero.bullets}
        phone={settings.phone}
        sourcePage={path}
      />

      <nav aria-label="Sekcje strony" className="sticky top-[72px] z-30 border-b border-brand/10 bg-white/95 backdrop-blur">
        <Container>
          <ul className="flex gap-2 overflow-x-auto py-3 text-sm font-medium [scrollbar-width:none]">
            {SECTION_NAV.map((item) => (
              <li key={item.href} className="shrink-0">
                <a href={item.href} className="inline-flex rounded-full border border-brand/15 px-4 py-1.5 text-dark transition hover:border-brand hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <ProcessIntro content={content} />
      <ProcessFlow flow={content.flow} />
      <ServiceExample example={content.example} />
      <ProcessOutcomes outcomes={content.outcomes} />
      <ProcessImplementation implementation={content.implementation} />
      <ProcessPrerequisites prerequisites={content.prerequisites} />
      <ProcessVariants variants={content.variants} />
      <ProcessCostsAndRisks content={content} />

      <ServiceMidCta
        title="Chcecie zobaczyć, jak to wyglądałoby u was?"
        body="W 30 minut przejdziemy przez wasz obecny proces i wskażemy wariant, od którego warto zacząć, razem z orientacyjnym kosztem."
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
          {relatedTools.length > 0 ? (
            <>
              <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-muted">Narzędzia w tym procesie</h3>
              <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {relatedTools.map((tool) => (
                  <li key={tool.slug}>
                    <ToolCard tool={tool} />
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          {relatedServices.length > 0 ? (
            <>
              <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-muted">Powiązane usługi</h3>
              <ul className="mt-5 grid gap-5 md:grid-cols-3">
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

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title="Porozmawiajmy o waszym procesie"
        body="Opowiedz, jak dziś wygląda ten proces w firmie. W 30 minut wskażemy, od czego zacząć i ile może kosztować pierwszy etap."
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={path}
        redirectOnSuccess
        sectionId="formularz"
      />
    </SiteLayout>
  );
}
