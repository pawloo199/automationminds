import { ArticleBody } from "@/components/guide/ArticleBody";
import { ArticleCard } from "@/components/guide/ArticleCard";
import { ArticleFaq, ArticleServices } from "@/components/guide/ArticleSections";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { ToolCard } from "@/components/tools/ToolSections";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import {
  GLOSSARY_HUB_PATH,
  getGlossaryCategory,
  getGlossaryTerm,
  getGlossaryTerms,
  getRelatedTerms,
  getTermArticles,
  getTermProcesses,
  getTermServices,
  getTermTools,
  glossaryPath,
} from "@/lib/glossary";
import { breadcrumbJsonLd, glossaryTermJsonLd, guideFaqJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return getGlossaryTerms().map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const term = getGlossaryTerm((await params).slug);
  if (!term) return {};
  return buildMetadata({
    title: term.metaTitle,
    description: term.metaDescription,
    path: glossaryPath(term.slug),
  });
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const term = getGlossaryTerm((await params).slug);
  if (!term) notFound();

  const category = getGlossaryCategory(term.category);
  const relatedTerms = getRelatedTerms(term);
  const services = getTermServices(term);
  const tools = getTermTools(term);
  const processes = getTermProcesses(term);
  const articles = getTermArticles(term);
  const path = glossaryPath(term.slug);
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Słownik", href: GLOSSARY_HUB_PATH },
    { label: term.term },
  ];

  return (
    <SiteLayout>
      <JsonLd
        data={[
          glossaryTermJsonLd(term),
          breadcrumbJsonLd(breadcrumbs),
          ...(term.faq.length > 0 ? [guideFaqJsonLd(term.faq)] : []),
        ]}
      />
      <section className="bg-surface pb-10 pt-10 lg:pb-14 lg:pt-14">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Słownik · {category.name}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl">
              {term.term}
              {term.fullName ? (
                <span className="mt-2 block text-lg font-medium text-muted sm:text-xl">
                  {term.fullName}
                </span>
              ) : null}
            </h1>
            <p className="mt-6 rounded-2xl border-l-4 border-brand bg-white p-5 text-lg leading-relaxed text-dark shadow-sm">
              {term.definition}
            </p>
          </div>
        </Container>
      </section>

      <article className="py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ArticleBody
              body={term.body}
              cta={{
                title: "Chcecie to wykorzystać w swojej firmie?",
                body: "W 30 minut pokażemy, gdzie to pojęcie przekłada się na konkretną oszczędność czasu w waszych procesach.",
              }}
            />

            {relatedTerms.length > 0 ? (
              <section aria-labelledby="powiazane-hasla" className="mt-14">
                <h2 id="powiazane-hasla" className="text-2xl font-bold text-dark">
                  Powiązane hasła
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {relatedTerms.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={glossaryPath(item.slug)}
                        className="group block h-full rounded-2xl border border-brand/10 bg-white p-4 transition hover:border-brand/30 hover:shadow-md"
                      >
                        <span className="font-semibold text-dark group-hover:text-brand">
                          {item.term}
                        </span>
                        <span className="mt-1 block text-sm text-muted">{item.definition}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {processes.length > 0 ? (
              <section aria-labelledby="procesy" className="mt-14">
                <h2 id="procesy" className="text-2xl font-bold text-dark">
                  W jakich procesach to wykorzystujemy
                </h2>
                <ul className="mt-5 space-y-2">
                  {processes.map((process) => (
                    <li key={process.slug}>
                      <Link
                        href={process.href}
                        className="inline-flex items-center gap-2 font-semibold text-brand hover:underline"
                      >
                        {process.name}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <ArticleServices services={services} />
            {term.faq.length > 0 ? <ArticleFaq items={term.faq} /> : null}
          </div>
        </Container>
      </article>

      {tools.length > 0 || articles.length > 0 ? (
        <section className="border-t border-brand/10 bg-surface py-12 lg:py-16">
          <Container>
            {tools.length > 0 ? (
              <>
                <h2 className="text-2xl font-bold text-dark">Narzędzia</h2>
                <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {tools.map((tool) => (
                    <li key={tool.slug}>
                      <ToolCard tool={tool} />
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            {articles.length > 0 ? (
              <>
                <h2 className={tools.length > 0 ? "mt-12 text-2xl font-bold text-dark" : "text-2xl font-bold text-dark"}>
                  Więcej w Poradniku
                </h2>
                <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </>
            ) : null}
            <p className="mt-10">
              <Link
                href={GLOSSARY_HUB_PATH}
                className="inline-flex items-center gap-2 font-semibold text-brand hover:underline"
              >
                Wszystkie hasła słownika
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </p>
          </Container>
        </section>
      ) : null}

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title={CONSULTATION_OFFER.formTitle}
        body={CONSULTATION_OFFER.formBody}
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={path}
        redirectOnSuccess
      />
    </SiteLayout>
  );
}
