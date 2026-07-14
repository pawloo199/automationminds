import { SiteLayout } from "@/components/layout/SiteLayout";
import { ArticleCard } from "@/components/guide/ArticleCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getGuideArticles } from "@/lib/guide-articles";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Poradnik — automatyzacja procesów biznesowych",
    description:
      "Artykuły o automatyzacji, integracjach, AI i wdrożeniach w firmach. Praktyczna wiedza od zespołu Automation Minds.",
    path: "/poradnik",
  });
}

export default async function GuideIndexPage() {
  const articles = getGuideArticles();
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Poradnik" },
  ];

  return (
    <SiteLayout>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs)]} />
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <SectionHeading
            subtitle="Poradnik"
            title="Wiedza o automatyzacji procesów"
            className="mb-4"
          />
          <p className="mx-auto max-w-2xl text-center text-muted">
            Praktyczne artykuły o wdrożeniach, narzędziach i usprawnianiu
            codziennej pracy zespołu.
          </p>
        </Container>
      </section>
      <section className="pb-20 pt-4 lg:pb-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
