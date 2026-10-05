import { AutomationFlow } from "@/components/home/AutomationFlow";
import { LiveTicker } from "@/components/home/LiveTicker";
import { TimeCalculator } from "@/components/home/TimeCalculator";
import { LeadHero } from "@/components/city/LeadHero";
import { AgentDemo } from "@/components/agency/AgentDemo";
import { ModelPicker } from "@/components/agency/ModelPicker";
import { Reveal } from "@/components/about/Reveal";
import { ArticleCard } from "@/components/guide/ArticleCard";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { IndustryIntro, IndustryLinks } from "@/components/industries/IndustrySections";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ProcessImplementation, ProcessVariants } from "@/components/processes/ProcessSections";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionTitle, ServiceMidCta, ServiceScope } from "@/components/services/ServiceSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolCard, ToolComparison } from "@/components/tools/ToolSections";
import { Container } from "@/components/ui/Container";
import { AGENCY_CONTENT as C, AGENCY_FLOW, AGENCY_PATH, AGENCY_TICKER, AGENT_DEMO } from "@/lib/agency-content";
import { getSettings } from "@/lib/airtable";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { getGuideArticleBySlug } from "@/lib/guide-articles";
import { getAllIndustryPages, industryLinkItems, INDUSTRIES_HUB_PATH } from "@/lib/industries";
import { agencyJsonLd, breadcrumbJsonLd, guideFaqJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { PROCESSES_HUB_PATH } from "@/lib/processes/catalog";
import { getPublishedServicesByGroup, servicePath } from "@/lib/services";
import { getToolEntry, TOOLS_HUB_PATH, toolPath } from "@/lib/tools/catalog";
import type { GuideArticle } from "@/lib/airtable.types";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ title: C.metaTitle, description: C.metaDescription, path: AGENCY_PATH });
}

const MORE_LINKS = [
  { href: PROCESSES_HUB_PATH, name: "Procesy, które automatyzujemy", excerpt: "Faktury, płatności, oferty, umowy, reklamacje, kadry: jak wygląda automatyzacja krok po kroku." },
  { href: toolPath("n8n"), name: "Wdrożenia n8n", excerpt: "Automatyzacje i agenci AI w n8n, na waszym serwerze lub w chmurze, z opieką i szkoleniami." },
  { href: TOOLS_HUB_PATH, name: "Narzędzia, które wdrażamy", excerpt: "Platformy automatyzacji, CRM, pakiety biurowe, KSeF i modele AI." },
];

export default async function AgencyPage() {
  const settings = await getSettings();
  const groups = getPublishedServicesByGroup();
  const tools = C.toolSlugs.map((slug) => getToolEntry(slug)).filter((tool) => tool !== undefined);
  const industries = industryLinkItems(getAllIndustryPages().filter((page) => !page.subSlug));
  const articles = C.articleSlugs
    .map((slug) => getGuideArticleBySlug(slug))
    .filter((article): article is GuideArticle => Boolean(article));
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Agencja AI", href: AGENCY_PATH },
  ];

  return (
    <SiteLayout>
      <JsonLd data={[agencyJsonLd(C, groups.flatMap((entry) => entry.services)), breadcrumbJsonLd(breadcrumbs), guideFaqJsonLd(C.faq)]} />

      <LeadHero
        breadcrumbs={[breadcrumbs[0], { label: "Agencja AI" }]}
        eyebrow={C.hero.eyebrow}
        title={C.hero.title}
        lead={C.hero.lead}
        bullets={[CONSULTATION_OFFER.durationLabel, ...C.hero.bullets.slice(0, 2)]}
        phone={settings.phone}
        sourcePage={AGENCY_PATH}
      />

      <div className="bg-dark">
        <LiveTicker events={AGENCY_TICKER} />
      </div>

      <IndustryIntro intro={C.intro} eyebrow="Kim jesteśmy" />

      <section id="agent-w-akcji" aria-labelledby="agent-tytul" className="scroll-mt-28 border-y border-brand/10 bg-surface py-20 lg:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">Agent AI w akcji</p>
            <h2 id="agent-tytul" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl">
              Zobacz, jak pracuje agent AI, którego budujemy
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Agent odbiera wiadomość, sprawdza dane w systemach firmy i przygotowuje gotowy szkic. Ostatnie słowo zawsze należy do człowieka.
            </p>
          </Reveal>
          <div className="mt-12">
            <AgentDemo scenarios={AGENT_DEMO} />
          </div>
        </Container>
      </section>

      <section aria-labelledby="co-robimy" className="py-20 lg:py-24">
        <Container>
          <SectionTitle
            id="co-robimy"
            eyebrow="Co robimy"
            title="Usługi agencji AI i automatyzacji"
            lead="Cztery obszary, które łączymy w jednym projekcie albo wdrażamy osobno, zależnie od potrzeb firmy."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {groups.map(({ group, services }) => {
              const Icon = group.icon;
              return (
                <div key={group.id} className="rounded-3xl border border-brand/10 bg-white p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-dark">{group.name}</h3>
                      <p className="mt-1 text-sm text-muted">{group.description}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-1.5">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={servicePath(service.slug)}
                          className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium text-dark transition hover:bg-surface hover:text-brand"
                        >
                          {service.name}
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-brand/40 group-hover:text-brand" aria-hidden />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <IndustryLinks items={MORE_LINKS} title="Więcej o tym, co robimy" />
        </Container>
      </section>

      <ServiceScope scope={C.differentiators} />
      <ToolComparison comparison={C.comparison} />
      <ProcessImplementation implementation={C.process} />

      <section id="jak-to-dziala" aria-labelledby="flow-tytul" className="relative scroll-mt-24 overflow-hidden bg-dark py-20 text-white lg:py-28">
        <div className="about-grid-bg absolute inset-0" aria-hidden />
        <div className="home-aurora pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-brand/20 blur-3xl" aria-hidden />
        <Container className="relative">
          <div className="grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">Jak to działa</p>
              <h2 id="flow-tytul" className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {AGENCY_FLOW.title}
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-5 lg:pt-10">
              <p className="text-lg leading-relaxed text-white/70">{AGENCY_FLOW.lead}</p>
            </Reveal>
          </div>
          <div className="mt-10">
            <AutomationFlow scenarios={AGENCY_FLOW.scenarios} />
          </div>
        </Container>
      </section>

      <section id="kalkulator" aria-labelledby="kalkulator-tytul" className="scroll-mt-24 bg-surface py-20 lg:py-28">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">Kalkulator</p>
            <h2 id="kalkulator-tytul" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl">
              Ile czasu oddalibyście agentom AI?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Ustaw trzy wartości i zobacz, ile godzin i pieniędzy zespół przeznacza na powtarzalne zadania. To dobry punkt wyjścia do rozmowy o pierwszym wdrożeniu.
            </p>
          </Reveal>
          <div className="mt-12">
            <TimeCalculator />
          </div>
        </Container>
      </section>

      <ServiceMidCta
        title="Szukacie agencji AI do konkretnego projektu?"
        body="W 30 minut przejdziemy przez wasze procesy i powiemy wprost, co warto zrobić najpierw, ile to może kosztować i czy jesteśmy właściwym wykonawcą."
        phone={settings.phone}
      />

      <ProcessVariants variants={C.models} />

      <section aria-label="Dobór modelu współpracy" className="pb-20 lg:pb-28">
        <Container>
          <Reveal>
            <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.25em] text-brand">
              Nie wiecie, który model wybrać? Odpowiedzcie na trzy pytania
            </p>
            <ModelPicker />
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="technologie" className="border-t border-brand/10 py-20 lg:py-24">
        <Container>
          <SectionTitle
            id="technologie"
            eyebrow="Technologie"
            title="Narzędzia, z którymi pracujemy"
            lead="Dobieramy narzędzia do procesu i do tego, z czego firma już korzysta. Nie jesteśmy związani z jednym producentem."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <ToolCard tool={tool} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="branze" className="border-t border-brand/10 bg-surface py-20 lg:py-24">
        <Container>
          <SectionTitle
            id="branze"
            eyebrow="Branże"
            title="Branże, w których mamy największe doświadczenie"
            lead="Dla wybranych branż przygotowaliśmy osobne rozwiązania, uwzględniające ich procesy, dokumenty i wymagania dotyczące danych."
          />
          <IndustryLinks items={[...industries, { href: INDUSTRIES_HUB_PATH, name: "Wszystkie branże", excerpt: "Zobacz, dla jakich branż przygotowaliśmy rozwiązania." }]} />
        </Container>
      </section>

      <section id="faq" aria-label="Najczęstsze pytania" className="scroll-mt-32 py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">FAQ</p>
              <p className="mt-4 text-2xl font-bold leading-snug text-dark">Agencja AI: pytania i odpowiedzi</p>
            </div>
            <div className="lg:col-span-8 [&>section]:mt-0">
              <ArticleFaq items={C.faq} />
            </div>
          </div>
        </Container>
      </section>

      {articles.length > 0 ? (
        <section aria-labelledby="poradnik" className="border-t border-brand/10 py-20 lg:py-24">
          <Container>
            <h2 id="poradnik" className="text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl">
              Z Poradnika
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title="Porozmawiajmy o waszym projekcie"
        body="Opowiedz, czym zajmuje się firma i co chcecie zautomatyzować lub przyspieszyć dzięki AI. W 30 minut wskażemy, od czego zacząć."
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={AGENCY_PATH}
        redirectOnSuccess
        sectionId="formularz"
      />
    </SiteLayout>
  );
}
