import { CityTemplate } from "@/components/city/CityTemplate";
import { VoivodeshipTemplate } from "@/components/city/VoivodeshipTemplate";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getSettings } from "@/lib/airtable";
import {
  cityPath,
  getAllCityPages,
  getCitiesByVoivodeship,
  getCityPage,
  getVoivodeship,
  voivodeshipPath,
  VOIVODESHIPS,
} from "@/lib/city-pages";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...VOIVODESHIPS.map((voivodeship) => ({ slug: voivodeship.slug })),
    ...getAllCityPages().map((city) => ({ slug: city.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const voivodeship = getVoivodeship(slug);
  if (voivodeship) {
    const count = getCitiesByVoivodeship(voivodeship.name).length;
    return buildMetadata({
      title: `Automatyzacja procesów, woj. ${voivodeship.name} | Automation Minds`,
      description: `Automatyzacja procesów i wdrożenia AI dla firm w województwie ${voivodeship.locative}. ${count} miast regionu, praca zdalna i hybrydowa, bezpłatna konsultacja 30 minut.`,
      path: voivodeshipPath(voivodeship.slug),
      ogImage: voivodeship.heroImage?.url,
    });
  }

  const city = getCityPage(slug);
  if (!city) return {};
  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: cityPath(city.slug),
    ogImage: city.heroImage?.url ?? city.ogImage,
  });
}

export default async function LocalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const settings = await getSettings();

  const voivodeship = getVoivodeship(slug);
  if (voivodeship) {
    return (
      <SiteLayout>
        <VoivodeshipTemplate voivodeship={voivodeship} phone={settings.phone} />
      </SiteLayout>
    );
  }

  const city = getCityPage(slug);
  if (!city) notFound();
  return (
    <SiteLayout>
      <CityTemplate city={city} phone={settings.phone} />
    </SiteLayout>
  );
}
