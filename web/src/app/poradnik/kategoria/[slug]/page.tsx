import { SiteLayout } from "@/components/layout/SiteLayout";
import { ArticleCard } from "@/components/guide/ArticleCard";
import {
  ArticleFaq,
  ArticleServices,
} from "@/components/guide/ArticleSections";
import {
  GuideCategoryChips,
  GuideCtaBanner,
} from "@/components/guide/GuideNavigation";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { getServices } from "@/lib/airtable";
import type { Service } from "@/lib/airtable.types";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import {
  getGuideArticles,
  getGuideArticlesByCategory,
  getGuideCategoriesWithCounts,
  getGuideCategory,
  guideCategoryPath,
} from "@/lib/guide-articles";
import {
  breadcrumbJsonLd,
  guideCategoryJsonLd,
  guideFaqJsonLd,
} from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 60;

const BRAND_SUFFIX = " | Automation Minds";
const MAX_TITLE_LENGTH = 60;

export async function generateStaticParams() {
  return getGuideCategoriesWithCounts().map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getGuideCategory(slug);
  if (!category || getGuideArticlesByCategory(slug).length === 0) return {};

  const withBrand = `${category.metaTitle}${BRAND_SUFFIX}`;
  return buildMetadata({
    title:
      withBrand.length <= MAX_TITLE_LENGTH ? withBrand : category.metaTitle,
    description: category.metaDescription,
    path: guideCategoryPath(slug),
    ogImage: getGuideArticlesByCategory(slug)[0]?.imageUrl,
  });
}

export default async function GuideCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getGuideCategory(slug);
  const articles = getGuideArticlesByCategory(slug);
  if (!category || articles.length === 0) notFound();

  const services = await getServices();
  const relatedServices = category.relatedServiceSlugs
    .map((serviceSlug) => services.find((s) => s.slug === serviceSlug))
    .filter((service): service is Service => Boolean(service));
  const categories = getGuideCategoriesWithCounts();
  const [featured, ...rest] = articles;

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Poradnik", href: "/poradnik" },
    { label: category.name },
  ];

  return (
    <SiteLayout>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          guideCategoryJsonLd(category, articles),
          guideFaqJsonLd(category.faq),
        ]}
      />
      <section className="bg-surface pb-12 pt-10 lg:pb-16 lg:pt-14">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Poradnik · {category.name}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl">
              {category.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {category.lead}
            </p>
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

      <section aria-labelledby="artykuly" className="py-12 lg:py-16">
        <Container>
          <h2 id="artykuly" className="sr-only">
            Artykuły: {category.name}
          </h2>
          <ArticleCard article={featured} variant="featured" priority />
          {rest.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      <section className="pb-12 lg:pb-16">
        <Container>
          <GuideCtaBanner
            title={category.cta.title}
            body={category.cta.body}
            location="guide_category_banner"
          />
        </Container>
      </section>

      <section className="border-t border-brand/10 bg-surface py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold leading-tight text-dark sm:text-3xl">
              O tym temacie
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {category.about.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <ArticleFaq items={category.faq} />
            <ArticleServices services={relatedServices} />
          </div>
        </Container>
      </section>

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title={category.cta.title}
        body={category.cta.body}
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={guideCategoryPath(slug)}
        redirectOnSuccess
      />
    </SiteLayout>
  );
}
