import { SiteLayout } from "@/components/layout/SiteLayout";
import { CampaignHero } from "@/components/sections/CampaignHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  serviceJsonLd,
} from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import {
  N8N_ADVANTAGES,
  N8N_HERO,
  N8N_INTEGRATIONS,
  N8N_INTEGRATIONS_BODY,
  N8N_INTRO_PARAGRAPHS,
  N8N_NOT_A_FIT,
  N8N_OFFER,
  N8N_RELATED_SERVICES,
  N8N_SERVICE_PATH,
  N8N_TRADEMARK_NOTE,
  n8nFaq,
  n8nProcessSteps,
  n8nService,
  type N8nOfferItem,
} from "@/lib/n8n-service";
import {
  ArrowLeftRight,
  ArrowUpRight,
  Bot,
  GraduationCap,
  Server,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;

const OFFER_ICONS: Record<N8nOfferItem["icon"], LucideIcon> = {
  workflow: Workflow,
  bot: Bot,
  server: Server,
  wrench: Wrench,
  migrate: ArrowLeftRight,
  training: GraduationCap,
};

export const metadata: Metadata = buildMetadata({
  title: n8nService.metaTitle,
  description: n8nService.metaDescription,
  path: N8N_SERVICE_PATH,
});

export default function N8nServicePage() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/o-nas" },
    { label: n8nService.title },
  ];

  return (
    <SiteLayout>
      <JsonLd
        data={[
          serviceJsonLd(n8nService),
          breadcrumbJsonLd(breadcrumbs),
          faqPageJsonLd(n8nFaq),
        ]}
      />
      <CampaignHero
        title={N8N_HERO.title}
        subtitle={N8N_HERO.subtitle}
        imageUrl={n8nService.bannerImageUrl}
        imageAlt={N8N_HERO.imageAlt}
        ctaText={CONSULTATION_OFFER.cta}
        ctaLink="#formularz"
      />
      <Container className="py-4">
        <Breadcrumbs items={breadcrumbs} />
      </Container>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              {n8nService.introSubtitle}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark">
              {n8nService.introTitle}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {N8N_INTRO_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <SectionHeading
            subtitle="Zakres usług"
            title="Co robimy w n8n"
            className="mb-10"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {N8N_OFFER.map((item) => {
              const Icon = OFFER_ICONS[item.icon];
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-brand/10 bg-white p-6 shadow-sm"
                >
                  <Icon className="h-6 w-6 text-brand" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            subtitle="Dlaczego n8n"
            title="Kiedy n8n ma przewagę nad Zapierem i Make"
            className="mb-10"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {N8N_ADVANTAGES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-brand/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-dashed border-brand/30 p-6">
            <h3 className="text-base font-semibold text-dark">
              {N8N_NOT_A_FIT.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {N8N_NOT_A_FIT.body}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <SectionHeading
            subtitle="Integracje"
            title="n8n i polskie narzędzia"
            className="mb-6"
          />
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-muted">
            {N8N_INTEGRATIONS_BODY}
          </p>
          <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {N8N_INTEGRATIONS.map((name) => (
              <li
                key={name}
                className="rounded-full border border-brand/15 bg-white px-4 py-2 text-sm font-medium text-dark"
              >
                {name}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ProcessSteps
        subtitle={n8nService.processSubtitle}
        title={n8nService.processTitle}
        steps={n8nProcessSteps}
      />

      <FaqAccordion
        subtitle="Pytania o n8n"
        title="FAQ: wdrożenie n8n w firmie"
        items={n8nFaq}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            subtitle="Usługi"
            title="Gdzie n8n wykorzystujemy najczęściej"
            className="mb-10"
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {N8N_RELATED_SERVICES.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/uslugi/${item.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-brand/10 bg-white px-5 py-4 text-sm font-medium text-dark shadow-sm transition hover:border-brand/30 hover:text-brand"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-brand/50 transition group-hover:text-brand" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button
              href="#formularz"
              data-track="consultation"
              data-track-method="anchor"
              data-track-location="n8n_service"
            >
              {CONSULTATION_OFFER.cta}
            </Button>
          </div>
        </Container>
      </section>

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title="Porozmawiajmy o wdrożeniu n8n w Twojej firmie"
        body="Opisz proces, który chcesz przenieść do n8n, albo workflow, który sprawia problemy. Wskażemy, od czego zacząć."
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={N8N_SERVICE_PATH}
        redirectOnSuccess
        sectionId="formularz"
      />

      <Container className="pb-10">
        <p className="text-center text-xs text-muted">{N8N_TRADEMARK_NOTE}</p>
      </Container>
    </SiteLayout>
  );
}
