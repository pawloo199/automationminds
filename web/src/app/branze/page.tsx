import { LeadHero } from "@/components/city/LeadHero";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionTitle } from "@/components/services/ServiceSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { getSettings } from "@/lib/airtable";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { getIndustrySubpages, getLiveIndustries, INDUSTRIES_HUB_PATH, industryPagePath, industryPath } from "@/lib/industries";
import { breadcrumbJsonLd, guideFaqJsonLd, placesCollectionJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;

const TITLE = "Automatyzacja i AI dla branż";
const DESCRIPTION =
  "Automatyzacja procesów i wdrożenia AI dopasowane do branży: procesy, dokumenty, przepisy i narzędzia, z którymi pracuje wasza firma na co dzień.";

const FAQ = [
  {
    question: "Mojej branży nie ma na liście. Czy możecie pomóc?",
    answer:
      "Najprawdopodobniej tak. Opisujemy tu branże, z którymi pracujemy najczęściej, a lista będzie się wydłużać. Na bezpłatnej konsultacji sprawdzimy wasze procesy i powiemy, co da się zautomatyzować.",
  },
  {
    question: "Czym strona branżowa różni się od strony usługi?",
    answer:
      "Strona usługi opisuje, co robimy, np. asystenta AI albo integracje. Strona branżowa pokazuje, jak te usługi wyglądają w konkretnej branży: jej procesy, dokumenty, ryzyka i przykłady.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ title: `${TITLE} | Automation Minds`, description: DESCRIPTION, path: INDUSTRIES_HUB_PATH });
}

export default async function IndustriesHubPage() {
  const settings = await getSettings();
  const industries = getLiveIndustries();

  return (
    <SiteLayout>
      <JsonLd
        data={[
          placesCollectionJsonLd(
            { path: INDUSTRIES_HUB_PATH, name: TITLE, description: DESCRIPTION },
            industries.map((industry) => ({ name: industry.name, path: industryPath(industry.slug) })),
          ),
          breadcrumbJsonLd([{ label: "Strona główna", href: "/" }, { label: "Branże", href: INDUSTRIES_HUB_PATH }]),
          guideFaqJsonLd(FAQ),
        ]}
      />

      <LeadHero
        breadcrumbs={[{ label: "Strona główna", href: "/" }, { label: "Branże" }]}
        eyebrow="Branże"
        title={TITLE}
        lead="Każda branża ma swoje procesy, dokumenty i wymagania. Tu opisujemy, jak automatyzujemy pracę i wdrażamy AI w branżach, w których mamy największe doświadczenie."
        bullets={[CONSULTATION_OFFER.durationLabel, "Procesy i przykłady z danej branży", "Bezpieczeństwo danych dopasowane do branży"]}
        phone={settings.phone}
        sourcePage={INDUSTRIES_HUB_PATH}
      />

      <section aria-labelledby="branze-lista" className="py-20 lg:py-24">
        <Container>
          <SectionTitle id="branze-lista" eyebrow="Branże" title="Branże, w których pracujemy" />
          <ul className="mt-12 grid gap-6 lg:grid-cols-2">
            {industries.map((industry) => {
              const Icon = industry.icon;
              const subpages = getIndustrySubpages(industry.slug);
              return (
                <li key={industry.slug} className="flex flex-col rounded-3xl border border-brand/15 bg-white p-7 shadow-sm">
                  <Link href={industryPath(industry.slug)} className="group">
                    <span className="flex items-start justify-between gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-brand/50 group-hover:text-brand" aria-hidden />
                    </span>
                    <h2 className="mt-5 text-2xl font-bold text-dark group-hover:text-brand">{industry.name}</h2>
                    <p className="mt-2 text-base leading-relaxed text-muted">{industry.summary}</p>
                  </Link>
                  {subpages.length > 0 ? (
                    <ul className="mt-6 flex flex-wrap gap-2 border-t border-brand/10 pt-5">
                      {subpages.map((page) => (
                        <li key={page.subSlug}>
                          <Link
                            href={industryPagePath(page)}
                            className="inline-flex rounded-full border border-brand/15 px-4 py-2 text-sm font-medium text-dark transition hover:border-brand hover:text-brand"
                          >
                            {page.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section aria-label="Najczęstsze pytania" className="border-t border-brand/10 py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">FAQ</p>
              <p className="mt-4 text-2xl font-bold leading-snug text-dark">Branże: pytania i odpowiedzi</p>
            </div>
            <div className="lg:col-span-8 [&>section]:mt-0">
              <ArticleFaq items={FAQ} />
            </div>
          </div>
        </Container>
      </section>

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title="Porozmawiajmy o waszej branży"
        body="Opowiedz, czym zajmuje się firma i co zabiera zespołowi najwięcej czasu. W 30 minut wskażemy, od czego zacząć."
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={INDUSTRIES_HUB_PATH}
        redirectOnSuccess
        sectionId="formularz"
      />
    </SiteLayout>
  );
}
