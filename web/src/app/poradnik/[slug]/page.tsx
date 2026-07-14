import { SiteLayout } from "@/components/layout/SiteLayout";
import { ArticleBody } from "@/components/guide/ArticleBody";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBanner } from "@/components/sections/PageBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import {
  formatGuideDate,
  getGuideArticleBySlug,
  getGuideArticles,
  guideArticlePath,
} from "@/lib/guide-articles";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60;

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

  return buildMetadata({
    title: `${article.metaTitle ?? article.title} — Poradnik`,
    description: article.metaDescription ?? article.excerpt,
    path: guideArticlePath(slug),
    ogImage: article.imageUrl,
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

  const allArticles = getGuideArticles();
  const relatedArticles = allArticles
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Poradnik", href: "/poradnik" },
    { label: article.title },
  ];

  return (
    <SiteLayout>
      <JsonLd
        data={[articleJsonLd(article), breadcrumbJsonLd(breadcrumbs)]}
      />
      <PageBanner title={article.title} imageUrl={article.imageUrl} />
      <Container className="py-4">
        <Breadcrumbs items={breadcrumbs} />
      </Container>
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted">
              <span className="rounded-full bg-brand/10 px-3 py-1 font-semibold uppercase tracking-wide text-brand">
                {article.category}
              </span>
              <time dateTime={article.publishedAt}>
                {formatGuideDate(article.publishedAt)}
              </time>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4" aria-hidden />
                {article.readTimeMinutes} min czytania
              </span>
            </div>
            <p className="text-lg font-medium leading-relaxed text-dark sm:text-xl">
              {article.excerpt}
            </p>
            <div className="mt-8 border-t border-brand/10 pt-8">
              <ArticleBody body={article.body} />
            </div>
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
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-brand/50 transition group-hover:text-brand" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
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
        subtitle="Masz pytania?"
        title="Porozmawiajmy o automatyzacji w Twojej firmie"
        body="Opowiedz o swoich procesach — pokażemy, od czego warto zacząć."
        sourcePage={guideArticlePath(slug)}
        redirectOnSuccess
      />
    </SiteLayout>
  );
}
