import { IndustryPage } from "@/components/industries/IndustryPage";
import { getAllIndustryPages, getIndustryPage, industryPagePath } from "@/lib/industries";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export const dynamicParams = false;

type Params = Promise<{ slug: string; sub: string }>;

export function generateStaticParams() {
  return getAllIndustryPages()
    .filter((page) => page.subSlug)
    .map((page) => ({ slug: page.industrySlug, sub: page.subSlug! }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, sub } = await params;
  const page = getIndustryPage(slug, sub);
  if (!page) return {};
  return buildMetadata({ title: page.metaTitle, description: page.metaDescription, path: industryPagePath(page) });
}

export default async function IndustrySubpage({ params }: { params: Params }) {
  const { slug, sub } = await params;
  const page = getIndustryPage(slug, sub);
  if (!page) notFound();
  return <IndustryPage page={page} />;
}
