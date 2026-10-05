import { LeadHero } from "@/components/city/LeadHero";
import { ArticleCard } from "@/components/guide/ArticleCard";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProcessLinks } from "@/components/processes/ProcessLinks";
import { ProcessCostsAndRisks, ProcessImplementation, ProcessIntro, ProcessVariants } from "@/components/processes/ProcessSections";
import { ContactSection } from "@/components/sections/ContactSection";
import { ServiceCard, ServiceExample, ServiceMidCta, ServiceScope } from "@/components/services/ServiceSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolCard, ToolComparison, ToolFlows } from "@/components/tools/ToolSections";
import { Container } from "@/components/ui/Container";
import { getSettings } from "@/lib/airtable";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import {
  getIndustryEntry,
  getIndustryPage,
  getIndustryRelatedArticles,
  getIndustryRelatedProcesses,
  getIndustryRelatedServices,
  getIndustryRelatedTools,
  getIndustrySubpages,
  industryBreadcrumbs,
  industryLinkItems,
  industryPagePath,
  type IndustryPageContent,
} from "@/lib/industries";
import { breadcrumbJsonLd, guideFaqJsonLd, industryServiceJsonLd } from "@/lib/json-ld";
import { IndustryIntro, IndustryLinks, IndustrySecurity } from "./IndustrySections";

export async function IndustryPage({ page }: { page: IndustryPageContent }) {
  const settings = await getSettings();
  const entry = getIndustryEntry(page.industrySlug)!;
  const breadcrumbs = industryBreadcrumbs(page);
  const path = industryPagePath(page);
  const relatedServices = getIndustryRelatedServices(page);
  const relatedProcesses = getIndustryRelatedProcesses(page);
  const relatedTools = getIndustryRelatedTools(page);
  const relatedArticles = getIndustryRelatedArticles(page);
  const mainPage = getIndustryPage(page.industrySlug);
  const otherPages = industryLinkItems(
    [mainPage, ...getIndustrySubpages(page.industrySlug)].filter(
      (other): other is IndustryPageContent => Boolean(other) && other !== page,
    ),
  );

  return (
    <SiteLayout>
      <JsonLd data={[industryServiceJsonLd(page, entry.name), breadcrumbJsonLd(breadcrumbs), guideFaqJsonLd(page.faq)]} />

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
      <IndustryIntro intro={page.intro} eyebrow={entry.name} />
      <ServiceScope scope={page.scope} />
      {page.flows ? <ToolFlows flows={page.flows} /> : null}
      {page.security ? <IndustrySecurity security={page.security} /> : null}
      {page.comparison ? <ToolComparison comparison={page.comparison} /> : null}
      {page.example ? <ServiceExample example={page.example} /> : null}
      <ProcessImplementation implementation={page.implementation} />

      <ServiceMidCta
        title={entry.cta.midTitle}
        body={entry.cta.midBody}
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

      <section aria-labelledby="powiazane" className="border-t border-brand/10 bg-surface py-20 lg:py-24">
        <Container>
          <h2 id="powiazane" className="text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl">
            Zobacz też
          </h2>
          <IndustryLinks items={otherPages} title={`Więcej dla branży: ${entry.name.toLowerCase()}`} />
          {relatedServices.length > 0 ? (
            <>
              <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-muted">Powiązane usługi</h3>
              <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {relatedServices.map((service) => (
                  <li key={service.slug}>
                    <ServiceCard service={service} headingLevel="h3" showGroup />
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          <ProcessLinks processes={relatedProcesses} title={entry.cta.processesTitle} />
          {relatedTools.length > 0 ? (
            <>
              <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-muted">Narzędzia</h3>
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
        title={entry.cta.formTitle}
        body={entry.cta.formBody}
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={path}
        redirectOnSuccess
        sectionId="formularz"
      />
    </SiteLayout>
  );
}
