import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBanner } from "@/components/sections/PageBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/airtable";
import { caseStudyPath, getCaseStudyIcon } from "@/lib/case-study-icons";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const cases = await getCaseStudies("home");
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);
  if (!caseStudy) return {};

  const description = caseStudy.body.replace(/\n+/g, " ").trim();

  return buildMetadata({
    title: `${caseStudy.title} — Case study`,
    description,
    path: caseStudyPath(slug),
    ogImage: caseStudy.imageUrl,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [caseStudy, allCases] = await Promise.all([
    getCaseStudyBySlug(slug),
    getCaseStudies("home"),
  ]);

  if (!caseStudy) notFound();

  const Icon = getCaseStudyIcon(caseStudy.icon);
  const paragraphs = caseStudy.body
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const relatedCases = allCases.filter((item) => item.slug !== slug);

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Case studies", href: "/#case-studies" },
    { label: caseStudy.title },
  ];

  return (
    <SiteLayout>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs)]} />
      <PageBanner title={caseStudy.title} imageUrl={caseStudy.imageUrl} />
      <Container className="py-4">
        <Breadcrumbs items={breadcrumbs} />
      </Container>
      <section className="py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-2 text-brand">
              <Icon className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                Case study
              </p>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
      {relatedCases.length > 0 ? (
        <section className="border-t border-brand/10 bg-surface py-12 lg:py-16">
          <Container>
            <h2 className="text-2xl font-bold text-dark">Inne case studies</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {relatedCases.map((item) => {
                const ItemIcon = getCaseStudyIcon(item.icon);
                return (
                  <li key={item.id}>
                    <Link
                      href={caseStudyPath(item.slug)}
                      className="group flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 shadow-sm transition hover:bg-brand/5"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <ItemIcon className="h-5 w-5 shrink-0 text-brand" />
                        <span className="truncate font-medium text-dark">
                          {item.title}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-brand/50 transition group-hover:text-brand" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      ) : null}
      <ContactSection
        subtitle="Skontaktuj się z nami"
        title="Porozmawiajmy o podobnym wdrożeniu"
        body="Opowiedz o swoich procesach — pokażemy, co można zautomatyzować w Twojej firmie."
        sourcePage={caseStudyPath(slug)}
        redirectOnSuccess
      />
    </SiteLayout>
  );
}
