import { IndustryPage } from "@/components/industries/IndustryPage";
import { getAllIndustryPages, getIndustryPage, industryPagePath } from "@/lib/industries";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllIndustryPages()
    .filter((page) => !page.subSlug)
    .map((page) => ({ slug: page.industrySlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) return {};
  return buildMetadata({ title: page.metaTitle, description: page.metaDescription, path: industryPagePath(page) });
}

export default async function IndustryMainPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) notFound();
  return <IndustryPage page={page} />;
}
