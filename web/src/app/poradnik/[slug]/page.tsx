import { SiteLayout } from "@/components/layout/SiteLayout";
import { ArticleBody } from "@/components/guide/ArticleBody";
import {
  ArticleAuthor,
  ArticleFaq,
  ArticleServices,
  ArticleSummary,
  ArticleTocMobile,
  ArticleTocSidebar,
  FAQ_HEADING,
} from "@/components/guide/ArticleSections";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBanner } from "@/components/sections/PageBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { getSettings } from "@/lib/airtable";
import { getServicesBySlugs } from "@/lib/services";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import {
  formatGuideDate,
  getGuideArticleBySlug,
  getGuideArticles,
  getRelatedGuideArticles,
  guideArticlePath,
  guideCategoryPath,
} from "@/lib/guide-articles";
import { extractHeadings } from "@/lib/guide-content/body";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  guideFaqJsonLd,
} from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60;

const BRAND_SUFFIX = " | Automation Minds";
const MAX_TITLE_LENGTH = 60;

const DEFAULT_CTA = {
  title: "Chcesz wiedzieć, co da się zautomatyzować u ciebie?",
  body: "Opowiedz nam, jak dziś wygląda praca w twojej firmie. Na 30-minutowej rozmowie wskażemy procesy, od których warto zacząć, i powiemy, ile pracy to realnie zdejmie z zespołu.",
};

export async function generateStaticParams() {
  const articles = getGuideArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getGuideArticleBySlug(slug);
  if (!article) return {};

  const withBrand = `${article.metaTitle}${BRAND_SUFFIX}`;

  return buildMetadata({
    title:
      withBrand.length <= MAX_TITLE_LENGTH ? withBrand : article.metaTitle,
    description: article.metaDescription,
    path: guideArticlePath(slug),
    ogImage: article.imageUrl,
    article: {
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      section: article.category,
      tags: [article.primaryKeyword, ...(article.secondaryKeywords ?? [])]
        .filter((tag): tag is string => Boolean(tag)),
    },
  });
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getGuideArticleBySlug(slug);
  if (!article) notFound();

  const settings = await getSettings();
  const relatedServices = getServicesBySlugs(article.relatedServiceSlugs ?? []);
  const relatedArticles = getRelatedGuideArticles(article);
  const cta = article.cta ?? DEFAULT_CTA;
  const faq = article.faq ?? [];
  const headings = [
    ...extractHeadings(article.body),
    ...(faq.length > 0 ? [FAQ_HEADING] : []),
  ];
  const isUpdated = article.updatedAt !== article.publishedAt;

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Poradnik", href: "/poradnik" },
    { label: article.category, href: guideCategoryPath(article.categorySlug) },
    { label: article.title },
  ];

  return (
    <SiteLayout>
      <JsonLd
        data={[
          articleJsonLd(article, settings.logoColorUrl),
          breadcrumbJsonLd(breadcrumbs),
          ...(faq.length > 0 ? [guideFaqJsonLd(faq)] : []),
        ]}
      />
      <PageBanner
        title={article.title}
        imageUrl={article.imageUrl}
        imageAlt={article.imageAlt}
      />
      <Container className="py-4">
        <Breadcrumbs items={breadcrumbs} />
      </Container>
      <section className="pb-12 pt-4 lg:pb-16">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
            <article className="min-w-0 max-w-3xl">
              <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
                <Link
                  href={guideCategoryPath(article.categorySlug)}
                  className="rounded-full bg-brand/10 px-3 py-1 font-semibold uppercase tracking-wide text-brand transition hover:bg-brand hover:text-white"
                >
                  {article.category}
                </Link>
                <a href="#autor" className="font-medium text-dark hover:text-brand">
                  {article.author.name}
                </a>
                <span>
                  {isUpdated ? "Aktualizacja: " : null}
                  <time dateTime={isUpdated ? article.updatedAt : article.publishedAt}>
                    {formatGuideDate(
                      isUpdated ? article.updatedAt : article.publishedAt,
                    )}
                  </time>
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" aria-hidden />
                  {article.readTimeMinutes} min czytania
                </span>
              </div>
              <p className="text-lg font-medium leading-relaxed text-dark sm:text-xl">
                {article.excerpt}
              </p>
              <div className="mt-8 space-y-4">
                {article.summary?.length ? (
                  <ArticleSummary items={article.summary} />
                ) : null}
                <ArticleTocMobile headings={headings} />
              </div>
              <div className="mt-10">
                <ArticleBody body={article.body} cta={cta} />
              </div>
              {faq.length > 0 ? <ArticleFaq items={faq} /> : null}
              <ArticleServices services={relatedServices} />
              <ArticleAuthor author={article.author} />
            </article>
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-4">
                <ArticleTocSidebar headings={headings} />
                <div className="rounded-2xl bg-dark p-5 text-white">
                  <p className="text-sm font-semibold leading-snug">
                    {CONSULTATION_OFFER.durationLabel}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    Pokażemy, które procesy w twojej firmie warto zautomatyzować
                    najpierw.
                  </p>
                  <Link
                    href="#kontakt"
                    data-track="consultation"
                    data-track-location="guide_sidebar"
                    data-track-method="anchor"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light hover:text-white"
                  >
                    Umów rozmowę
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
      {relatedArticles.length > 0 ? (
        <section className="border-t border-brand/10 bg-surface py-12 lg:py-16">
          <Container>
            <h2 className="text-2xl font-bold text-dark">Czytaj dalej</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((item) => (
                <li key={item.id}>
                  <Link
                    href={guideArticlePath(item.slug)}
                    className="group flex h-full flex-col justify-between gap-3 rounded-xl bg-white px-4 py-4 shadow-sm transition hover:bg-brand/5"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                        {item.category}
                      </p>
                      <p className="mt-2 font-medium text-dark">{item.title}</p>
                      <p className="mt-2 line-clamp-2 text-sm text-muted">
                        {item.excerpt}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-brand/50 transition group-hover:text-brand" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <Link
                href={guideCategoryPath(article.categorySlug)}
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
              >
                Więcej w temacie: {article.category}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/poradnik"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
              >
                Zobacz wszystkie artykuły
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Container>
        </section>
      ) : null}
      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title={cta.title}
        body={cta.body}
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={guideArticlePath(slug)}
        redirectOnSuccess
      />
    </SiteLayout>
  );
}
