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
  getGuideArticlesByCategory,
  getGuideCategoriesWithCounts,
  getGuideCategory,
  guideCategoryPagePath,
  guideCategoryPath,
  paginateGuideArticles,
  parseGuidePage,
} from "@/lib/guide-articles";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 60;

function resolve(slug: string, value: string) {
  const category = getGuideCategory(slug);
  if (!category) return null;
  const articles = getGuideArticlesByCategory(slug);
  const { totalPages } = paginateGuideArticles(articles, 1);
  const page = parseGuidePage(value, totalPages);
  if (page === null) return null;
  return { category, page, ...paginateGuideArticles(articles, page) };
}

export async function generateStaticParams() {
  return getGuideCategoriesWithCounts().flatMap((category) => {
    const { totalPages } = paginateGuideArticles(
      getGuideArticlesByCategory(category.slug),
      1,
    );
    return Array.from({ length: totalPages - 1 }, (_, index) => ({
      slug: category.slug,
      page: String(index + 2),
    }));
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; page: string }>;
}): Promise<Metadata> {
  const { slug, page } = await params;
  const resolved = resolve(slug, page);
  if (!resolved) return {};
  const { category } = resolved;
  return buildMetadata({
    title: `${category.name}: artykuły, strona ${resolved.page} | Automation Minds`,
    description: `${category.shortDescription} Strona ${resolved.page} z ${resolved.totalPages}.`,
    path: guideCategoryPagePath(slug, resolved.page),
    ogImage: resolved.items[0]?.imageUrl,
  });
}

export default async function GuideCategoryPaged({
  params,
}: {
  params: Promise<{ slug: string; page: string }>;
}) {
  const { slug, page: pageParam } = await params;
  const resolved = resolve(slug, pageParam);
  if (!resolved) notFound();
  const { category, page, items, totalPages } = resolved;
  const categories = getGuideCategoriesWithCounts();
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Poradnik", href: "/poradnik" },
    { label: category.name, href: guideCategoryPath(slug) },
    { label: `Strona ${page}` },
  ];

  return (
    <SiteLayout>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs)]} />
      <section className="bg-surface pb-10 pt-10 lg:pb-12 lg:pt-14">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Poradnik · strona {page} z {totalPages}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl">
              {category.name}: artykuły
            </h1>
          </div>
          <div className="mt-8">
            <GuideCategoryChips
              categories={categories}
              activeSlug={category.slug}
              totalCount={getGuideArticles().length}
              align="left"
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
            pathFor={(target) => guideCategoryPagePath(slug, target)}
          />
          <div className="mt-12">
            <GuideCtaBanner
              title={category.cta.title}
              body={category.cta.body}
              location="guide_category_banner"
            />
          </div>
        </Container>
      </section>

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title={category.cta.title}
        body={category.cta.body}
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={guideCategoryPagePath(slug, page)}
        redirectOnSuccess
      />
    </SiteLayout>
  );
}
