import { SiteLayout } from "@/components/layout/SiteLayout";
import { ArticleCard } from "@/components/guide/ArticleCard";
import {
  GuideAuthorStrip,
  GuideCategoryChips,
  GuideCategoryTiles,
  GuideCtaBanner,
} from "@/components/guide/GuideNavigation";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import type { GuideArticle } from "@/lib/airtable.types";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import {
  getGuideArticleBySlug,
  getGuideArticles,
  getGuideCategoriesWithCounts,
  guideArticlePath,
} from "@/lib/guide-articles";
import { defaultGuideAuthor } from "@/lib/guide-content/authors";
import { breadcrumbJsonLd, guideIndexJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const revalidate = 60;

/** Ścieżka dla osób, które dopiero zaczynają temat automatyzacji. */
const START_HERE: { slug: string; note: string }[] = [
  {
    slug: "5-procesow-do-automatyzacji-w-malej-firmie",
    note: "Które procesy dają najszybszy efekt i jak wybrać ten pierwszy.",
  },
  {
    slug: "audyt-procesow-w-firmie",
    note: "Jak sprawdzić, co w firmie zmienić najpierw, zanim wydasz pieniądze.",
  },
  {
    slug: "ile-kosztuje-automatyzacja-procesow",
    note: "Z czego składa się wycena i jak porównywać oferty.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Poradnik o automatyzacji procesów w firmie | Automation Minds",
    description:
      "Jak zautomatyzować procesy w firmie, dobrać narzędzia, połączyć systemy i sensownie użyć AI. Praktyczne artykuły z wdrożeń Automation Minds.",
    path: "/poradnik",
    ogImage: getGuideArticles()[0]?.imageUrl,
  });
}

export default async function GuideIndexPage() {
  const articles = getGuideArticles();
  const categories = getGuideCategoriesWithCounts();
  const [featured, ...rest] = articles;
  const startHere = START_HERE.map((item) => ({
    ...item,
    article: getGuideArticleBySlug(item.slug),
  })).filter(
    (item): item is { slug: string; note: string; article: GuideArticle } =>
      Boolean(item.article),
  );
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Poradnik" },
  ];

  return (
    <SiteLayout>
      <JsonLd
        data={[breadcrumbJsonLd(breadcrumbs), guideIndexJsonLd(articles)]}
      />
      <section className="bg-surface pb-12 pt-10 lg:pb-16 lg:pt-14">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Poradnik
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl">
              Poradnik o automatyzacji procesów w firmie
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Piszemy o tym, co widzimy przy wdrożeniach w małych i średnich
              firmach: które procesy zautomatyzować najpierw, jak uporządkować
              dane, jak połączyć systemy, ile to kosztuje i gdzie AI
              rzeczywiście odciąża zespół.
            </p>
          </div>
          <div className="mt-8">
            <GuideCategoryChips
              categories={categories}
              totalCount={articles.length}
            />
          </div>
        </Container>
      </section>

      {featured ? (
        <section aria-labelledby="najnowszy" className="pt-12 lg:pt-16">
          <Container>
            <h2
              id="najnowszy"
              className="mb-6 text-sm font-semibold uppercase tracking-widest text-brand"
            >
              Najnowszy artykuł
            </h2>
            <ArticleCard article={featured} variant="featured" priority />
          </Container>
        </section>
      ) : null}

      {startHere.length > 0 ? (
        <section aria-labelledby="zacznij-tutaj" className="py-12 lg:py-16">
          <Container>
            <h2
              id="zacznij-tutaj"
              className="text-2xl font-bold text-dark sm:text-3xl"
            >
              Dopiero zaczynasz? Przeczytaj w tej kolejności
            </h2>
            <ol className="mt-6 grid gap-4 lg:grid-cols-3">
              {startHere.map((item, index) => (
                <li key={item.slug}>
                  <Link
                    href={guideArticlePath(item.slug)}
                    className="group flex h-full gap-4 rounded-2xl border border-brand/10 bg-white p-5 transition hover:border-brand/30 hover:shadow-md"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span>
                      <span className="block font-semibold leading-snug text-dark group-hover:text-brand">
                        {item.article.title}
                      </span>
                      <span className="mt-1 block text-sm text-muted">
                        {item.note}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      ) : null}

      <section
        aria-labelledby="tematy"
        className="border-y border-brand/10 bg-surface py-12 lg:py-16"
      >
        <Container>
          <h2 id="tematy" className="text-2xl font-bold text-dark sm:text-3xl">
            Tematy Poradnika
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Wybierz obszar, który cię interesuje. Każdy temat zbiera artykuły,
            najczęstsze pytania i usługi, które z nim łączymy.
          </p>
          <div className="mt-6">
            <GuideCategoryTiles categories={categories} />
          </div>
        </Container>
      </section>

      <section aria-labelledby="wszystkie" className="py-12 lg:py-16">
        <Container>
          <h2 id="wszystkie" className="text-2xl font-bold text-dark sm:text-3xl">
            Wszystkie artykuły
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.slice(0, 6).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="my-10">
            <GuideCtaBanner
              title="Wolisz porozmawiać, niż czytać?"
              body="Opowiedz nam, jak dziś pracuje twój zespół. W 30 minut wskażemy procesy, które warto zautomatyzować najpierw, i powiemy, ile pracy to realnie zdejmie."
              location="guide_index_banner"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.slice(6).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="mt-12">
            <GuideAuthorStrip author={defaultGuideAuthor} />
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            Szukasz konkretnego rozwiązania dla swojej firmy?{" "}
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
            >
              Napisz do nas
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </p>
        </Container>
      </section>

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title={CONSULTATION_OFFER.formTitle}
        body={CONSULTATION_OFFER.formBody}
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage="/poradnik"
        redirectOnSuccess
      />
    </SiteLayout>
  );
}
