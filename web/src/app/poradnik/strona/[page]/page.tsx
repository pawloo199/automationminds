import { SiteLayout } from "@/components/layout/SiteLayout";
import { ArticleCard } from "@/components/guide/ArticleCard";
import {
  GuideCategoryChips,
  GuideCtaBanner,
} from "@/components/guide/GuideNavigation";
import { GuidePagination } from "@/components/guide/GuidePagination";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import {
  getGuideArticles,
  getGuideCategoriesWithCounts,
  guideIndexPagePath,
  paginateGuideArticles,
  parseGuidePage,
} from "@/lib/guide-articles";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 60;

function resolvePage(value: string) {
  const articles = getGuideArticles();
  const { totalPages } = paginateGuideArticles(articles, 1);
  const page = parseGuidePage(value, totalPages);
  if (page === null) return null;
  return { page, articles, ...paginateGuideArticles(articles, page) };
}

export async function generateStaticParams() {
  const { totalPages } = paginateGuideArticles(getGuideArticles(), 1);
  return Array.from({ length: totalPages - 1 }, (_, index) => ({
    page: String(index + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const resolved = resolvePage((await params).page);
  if (!resolved) return {};
  return buildMetadata({
    title: `Poradnik o automatyzacji, strona ${resolved.page} | Automation Minds`,
    description: `Artykuły Poradnika Automation Minds o automatyzacji procesów, danych, integracjach i AI w firmie. Strona ${resolved.page} z ${resolved.totalPages}.`,
    path: guideIndexPagePath(resolved.page),
    ogImage: resolved.items[0]?.imageUrl,
  });
}

export default async function GuideIndexPaged({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const resolved = resolvePage((await params).page);
  if (!resolved) notFound();
  const { page, articles, items, totalPages } = resolved;
  const categories = getGuideCategoriesWithCounts();
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Poradnik", href: "/poradnik" },
    { label: `Strona ${page}` },
  ];

  return (
    <SiteLayout>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs)]} />
      <section className="bg-surface pb-10 pt-10 lg:pb-12 lg:pt-14">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Poradnik · strona {page} z {totalPages}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl">
              Wszystkie artykuły Poradnika
            </h1>
          </div>
          <div className="mt-8">
            <GuideCategoryChips
              categories={categories}
              totalCount={articles.length}
            />
          </div>
        </Container>
      </section>

      <section aria-label={`Artykuły, strona ${page}`} className="py-12 lg:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <GuidePagination
            current={page}
            total={totalPages}
            pathFor={guideIndexPagePath}
          />
          <div className="mt-12">
            <GuideCtaBanner
              title="Wolisz porozmawiać, niż czytać?"
              body="Opowiedz nam, jak dziś pracuje twój zespół. W 30 minut wskażemy procesy, które warto zautomatyzować najpierw."
              location="guide_index_banner"
            />
          </div>
        </Container>
      </section>

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title={CONSULTATION_OFFER.formTitle}
        body={CONSULTATION_OFFER.formBody}
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={guideIndexPagePath(page)}
        redirectOnSuccess
      />
    </SiteLayout>
  );
}
