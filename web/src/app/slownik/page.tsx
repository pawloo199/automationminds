import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import {
  GLOSSARY_CATEGORIES,
  GLOSSARY_HUB_PATH,
  getGlossaryCategory,
  getGlossaryIndex,
  getGlossaryTerms,
  glossaryLetter,
} from "@/lib/glossary";
import { breadcrumbJsonLd, glossarySetJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Słownik automatyzacji, AI i danych | Automation Minds",
    description:
      "Pojęcia z automatyzacji, AI i danych wyjaśnione prostym językiem: API, webhook, RPA, RAG, agent AI, ERP, CRM i inne, z przykładami z pracy firmy.",
    path: GLOSSARY_HUB_PATH,
  });
}

export default function GlossaryHubPage() {
  const terms = getGlossaryTerms();
  const index = getGlossaryIndex();
  const letters = [...new Set(index.map((item) => glossaryLetter(item.term)))];
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Słownik" },
  ];

  return (
    <SiteLayout>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), glossarySetJsonLd(terms)]} />
      <section className="bg-surface pb-12 pt-10 lg:pb-16 lg:pt-14">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Słownik
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl">
              Słownik automatyzacji, AI i danych
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Wyjaśniamy pojęcia, które padają przy rozmowach o automatyzacji i
              AI w firmie. Każde hasło ma krótką definicję, przykład z
              codziennej pracy i odnośniki do stron, na których pokazujemy, jak
              to wdrażamy.
            </p>
          </div>
          <nav aria-label="Litery" className="mt-8">
            <ul className="flex flex-wrap justify-center gap-1.5">
              {letters.map((letter) => (
                <li key={letter}>
                  <a
                    href={`#litera-${letter}`}
                    className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-brand/15 bg-white px-2 text-sm font-semibold text-dark transition hover:border-brand hover:text-brand"
                  >
                    {letter}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      <section aria-labelledby="kategorie" className="py-12 lg:py-16">
        <Container>
          <h2 id="kategorie" className="text-2xl font-bold text-dark sm:text-3xl">
            Hasła według tematów
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {GLOSSARY_CATEGORIES.map((category) => {
              const inCategory = terms.filter((term) => term.category === category.id);
              return (
                <div
                  key={category.id}
                  className="rounded-2xl border border-brand/10 bg-white p-6"
                >
                  <h3 className="text-lg font-bold text-dark">{category.name}</h3>
                  <p className="mt-1 text-sm text-muted">{category.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {inCategory.map((term) => (
                      <li key={term.slug}>
                        <Link
                          href={`${GLOSSARY_HUB_PATH}/${term.slug}`}
                          className="inline-flex rounded-full bg-surface px-3 py-1.5 text-sm font-medium text-dark transition hover:bg-brand/10 hover:text-brand"
                        >
                          {term.term}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="a-z"
        className="border-t border-brand/10 bg-surface py-12 lg:py-16"
      >
        <Container>
          <h2 id="a-z" className="text-2xl font-bold text-dark sm:text-3xl">
            Wszystkie hasła od A do Z
          </h2>
          <div className="mt-8 space-y-10">
            {letters.map((letter) => (
              <div key={letter} id={`litera-${letter}`} className="scroll-mt-28">
                <h3 className="text-xl font-bold text-brand">{letter}</h3>
                <ul className="mt-4 grid gap-4 md:grid-cols-2">
                  {index
                    .filter((item) => glossaryLetter(item.term) === letter)
                    .map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="group flex h-full flex-col rounded-2xl border border-brand/10 bg-white p-5 transition hover:border-brand/30 hover:shadow-md"
                        >
                          <span className="flex items-center justify-between gap-3">
                            <span className="font-bold text-dark group-hover:text-brand">
                              {item.term}
                            </span>
                            <span className="shrink-0 text-xs text-muted">
                              {getGlossaryCategory(item.category).name}
                            </span>
                          </span>
                          <span className="mt-2 text-sm leading-relaxed text-muted">
                            {item.definition}
                          </span>
                          {item.external ? (
                            <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                              Opisujemy w osobnym artykule
                              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title={CONSULTATION_OFFER.formTitle}
        body={CONSULTATION_OFFER.formBody}
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={GLOSSARY_HUB_PATH}
        redirectOnSuccess
      />
    </SiteLayout>
  );
}
