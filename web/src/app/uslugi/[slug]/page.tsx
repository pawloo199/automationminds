import { ArticleCard } from "@/components/guide/ArticleCard";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  ServiceCard,
  ServiceExample,
  ServiceMidCta,
  ServiceProblems,
  ServiceProcess,
  ServiceScope,
  ServiceSubnav,
  ServiceTools,
} from "@/components/services/ServiceSections";
import { ProcessLinks } from "@/components/processes/ProcessLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProcessesForService } from "@/lib/processes";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { getSettings } from "@/lib/airtable";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import {
  breadcrumbJsonLd,
  guideFaqJsonLd,
  serviceDetailJsonLd,
} from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import {
  getCatalogEntry,
  getPublishedServices,
  getRelatedServices,
  getServiceContent,
  getServiceGroup,
  getServiceRelatedArticles,
  serviceBreadcrumbs,
} from "@/lib/services";
import type { ServiceCatalogEntry, ServiceContent } from "@/lib/services";
import { ArrowRight, Check, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 60;
export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getCatalogEntry(slug);
  if (!entry || entry.status === "planned") return {};

  const content = getServiceContent(slug);
  if (!content) return {};

  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: `/uslugi/${slug}`,
    ogImage: content.hero.imageUrl,
  });
}

const HERO_FACTS = [
  { label: "Dla kogo", value: "Małe i średnie firmy" },
  { label: "Współpraca", value: "Zdalnie, w całej Polsce" },
  { label: "Narzędzia", value: "Te, których już używacie" },
  { label: "Pierwszy krok", value: "Bezpłatna konsultacja 30 min" },
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getCatalogEntry(slug);
  if (!entry || entry.status === "planned") notFound();

  const content = getServiceContent(slug);
  if (!content) notFound();
  return <ServiceTemplate entry={entry} content={content} />;
}

async function ServiceTemplate({
  entry,
  content,
}: {
  entry: ServiceCatalogEntry;
  content: ServiceContent;
}) {
  const settings = await getSettings();
  const group = getServiceGroup(entry.group);
  const GroupIcon = group.icon;
  const breadcrumbs = serviceBreadcrumbs(entry);
  const relatedServices = getRelatedServices(entry.slug, 3);
  const relatedArticles = getServiceRelatedArticles(entry.slug).slice(0, 3);
  const processes = getProcessesForService(entry.slug);
  const phoneHref = `tel:${settings.phone.replace(/\s/g, "")}`;

  return (
    <SiteLayout>
      <JsonLd
        data={[
          serviceDetailJsonLd(entry, content, group.name),
          breadcrumbJsonLd(breadcrumbs.filter((item) => !item.href?.includes("#"))),
          guideFaqJsonLd(content.faq),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark text-white">
        <Image
          src={content.hero.imageUrl}
          alt={content.hero.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/25"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-dark to-transparent"
          aria-hidden
        />
        <Container className="relative z-10 pb-14 pt-10 lg:pb-20 lg:pt-14">
          <div className="[&_a]:text-white/80 [&_nav]:mb-8 [&_span]:text-white/90">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-light backdrop-blur">
                <GroupIcon className="h-4 w-4" aria-hidden />
                {group.name}
              </p>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {content.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                {content.hero.lead}
              </p>
              <ul className="mt-8 space-y-3">
                {content.hero.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-white/90">{outcome}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  data-track="consultation"
                  data-track-location="service_hero"
                  data-track-method="anchor"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
                >
                  {CONSULTATION_OFFER.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={phoneHref}
                  data-track-location="service_hero"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {settings.phone}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-sm">
                {HERO_FACTS.map((fact) => (
                  <div key={fact.label} className="bg-dark/70 p-5 sm:p-6">
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 text-base font-semibold leading-snug text-white">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <ServiceSubnav />
      <ServiceProblems problems={content.problems} />
      <ServiceScope scope={content.scope} />
      <ServiceExample example={content.example} />
      <ServiceProcess process={content.process} />
      <ServiceTools tools={content.tools} />

      <ServiceMidCta
        title="Nie wiesz, od czego zacząć?"
        body="W 30 minut przejdziemy przez wasz proces i wskażemy jeden lub dwa kroki, które najszybciej odciążą zespół. Bez zobowiązań."
        phone={settings.phone}
      />

      <section
        id="faq"
        aria-label="Najczęstsze pytania"
        className="scroll-mt-32 py-20 lg:py-28"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                FAQ
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Nie ma tu twojego pytania? Zadzwoń pod{" "}
                <a
                  href={phoneHref}
                  data-track-location="service_faq"
                  className="font-semibold text-brand hover:underline"
                >
                  {settings.phone}
                </a>{" "}
                albo napisz przez formularz na dole strony.
              </p>
            </div>
            <div className="lg:col-span-8 [&>section]:mt-0">
              <ArticleFaq items={content.faq} />
            </div>
          </div>
        </Container>
      </section>

      {relatedArticles.length > 0 || relatedServices.length > 0 || processes.length > 0 ? (
        <section
          aria-labelledby="powiazane"
          className="border-t border-brand/10 bg-surface py-20 lg:py-24"
        >
          <Container>
            <h2
              id="powiazane"
              className="text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl"
            >
              Zobacz też
            </h2>
            {relatedArticles.length > 0 ? (
              <>
                <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  Z Poradnika
                </h3>
                <div className="mt-5 grid gap-6 md:grid-cols-3">
                  {relatedArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              </>
            ) : null}
            <ProcessLinks processes={processes} title="Jak to wygląda w praktyce" />
            {relatedServices.length > 0 ? (
              <>
                <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                  Powiązane usługi
                </h3>
                <ul className="mt-5 grid gap-5 md:grid-cols-3">
                  {relatedServices.map((service) => (
                    <li key={service.slug}>
                      <ServiceCard service={service} headingLevel="h3" showGroup />
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </Container>
        </section>
      ) : null}

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title={content.contact.title}
        body={content.contact.body}
        highlights={content.contact.highlights}
        sourcePage={`/uslugi/${entry.slug}`}
      />
    </SiteLayout>
  );
}
