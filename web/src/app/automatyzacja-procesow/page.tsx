import { Reveal } from "@/components/about/Reveal";
import { LeadHero } from "@/components/city/LeadHero";
import { SectionIntro } from "@/components/city/CityTemplate";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CityCoverageSearch } from "@/components/sections/CityCoverageSearch";
import { ContactSection } from "@/components/sections/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import type { BreadcrumbItem } from "@/lib/airtable.types";
import { getSettings } from "@/lib/airtable";
import {
  CITY_HUB_PATH,
  cityPath,
  getAllCityPages,
  getCitiesByVoivodeship,
  getCityCoverageSearchIndex,
  getCityPage,
  voivodeshipPath,
  VOIVODESHIPS,
} from "@/lib/city-pages";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { HOME_CONTENT } from "@/lib/home-content";
import { breadcrumbJsonLd, guideFaqJsonLd, placesCollectionJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { SERVICES_HUB_PATH } from "@/lib/services/catalog";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;

const TITLE = "Automatyzacja procesów dla firm w całej Polsce";
const DESCRIPTION =
  "Automatyzacja procesów i wdrożenia AI dla małych i średnich firm we wszystkich województwach. Pracujemy zdalnie i hybrydowo, zaczynamy od bezpłatnej konsultacji.";

const FAQ = [
  {
    question: "Czy automatyzację da się wdrożyć zdalnie?",
    answer:
      "Tak. Większość naszych projektów prowadzimy w całości zdalnie: rozmowy, przegląd procesów, budowa i testy odbywają się online, na waszych kontach w narzędziach, których już używacie. Na miejsce przyjeżdżamy, gdy warsztat z zespołem wyraźnie przyspiesza pracę.",
  },
  {
    question: "Czy lokalizacja firmy wpływa na cenę?",
    answer:
      "Nie. Wycena zależy od zakresu procesu, liczby systemów do połączenia i ilości danych. Firma z Wrocławia i firma z małego miasta na drugim końcu Polski płacą według tych samych zasad.",
  },
  {
    question: "Gdzie jest wasza siedziba?",
    answer:
      "Automation Minds ma siedzibę we Wrocławiu. Z firmami z Dolnego Śląska spotykamy się na miejscu najłatwiej, ale klientów z innych regionów obsługujemy tak samo sprawnie, zdalnie lub hybrydowo.",
  },
  {
    question: "Od czego zacząć, jeśli nie wiem, co automatyzować?",
    answer:
      "Od bezpłatnej, 30-minutowej konsultacji. Opowiadasz, jak pracuje zespół i co zabiera najwięcej czasu, a my wskazujemy jeden lub dwa procesy, od których warto zacząć, razem z orientacyjnym kosztem.",
  },
  {
    question: "Czy strony miast różnią się ofertą?",
    answer:
      "Zakres usług jest wszędzie ten sam. Strony miast i województw opisują lokalną gospodarkę i branże, z którymi najczęściej pracujemy w danym regionie, żeby łatwiej było ocenić, czy mamy doświadczenie bliskie twojej firmie.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Automatyzacja procesów w całej Polsce | Automation Minds",
    description: DESCRIPTION,
    path: CITY_HUB_PATH,
  });
}

export default async function LocalHubPage() {
  const settings = await getSettings();
  const cityCount = getAllCityPages().length;
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Strona główna", href: "/" },
    { label: "Automatyzacja procesów" },
  ];
  const featuredCities = HOME_CONTENT.cities.featuredSlugs
    .map((slug) => getCityPage(slug))
    .filter((city) => city !== null)
    .map((city) => ({ id: city.slug, name: city.name, href: cityPath(city.slug) }));
  const searchableCities = getCityCoverageSearchIndex();

  return (
    <SiteLayout>
      <JsonLd
        data={[
          placesCollectionJsonLd(
            { path: CITY_HUB_PATH, name: TITLE, description: DESCRIPTION },
            VOIVODESHIPS.map((v) => ({
              name: `Województwo ${v.name}`,
              path: voivodeshipPath(v.slug),
            })),
          ),
          breadcrumbJsonLd(breadcrumbs),
          guideFaqJsonLd(FAQ),
        ]}
      />

      <LeadHero
        breadcrumbs={breadcrumbs}
        eyebrow="Cała Polska"
        title={TITLE}
        lead="Porządkujemy i automatyzujemy powtarzalną pracę w małych i średnich firmach: dokumenty, raporty, obieg zamówień i komunikację z klientami. Pracujemy zdalnie, więc odległość nie wpływa na zakres ani tempo projektu."
        bullets={[
          CONSULTATION_OFFER.durationLabel,
          `16 województw i ${cityCount} miast z własną stroną`,
          "Siedziba we Wrocławiu, praca zdalna i hybrydowa",
        ]}
        phone={settings.phone}
        sourcePage={CITY_HUB_PATH}
      />

      {/* Województwa */}
      <section aria-labelledby="wojewodztwa-tytul" className="py-20 lg:py-28">
        <Container>
          <SectionIntro
            id="wojewodztwa-tytul"
            eyebrow="Regiony"
            title="Wybierz województwo"
            lead="Każdy region ma inną strukturę gospodarki. Na stronach województw opisujemy lokalne branże i procesy, które firmy z danego regionu automatyzują najczęściej."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VOIVODESHIPS.map((v, index) => {
              const count = getCitiesByVoivodeship(v.name).length;
              const capitals = v.capitalSlugs
                .map((slug) => getCityPage(slug)?.name)
                .filter(Boolean)
                .join(", ");
              return (
                <Reveal as="li" key={v.slug} delay={(index % 4) * 60}>
                  <Link
                    href={voivodeshipPath(v.slug)}
                    className="group flex h-full flex-col rounded-2xl border border-brand/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="text-lg font-semibold capitalize text-dark group-hover:text-brand">
                        {v.name}
                      </span>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-brand/40 transition group-hover:text-brand" aria-hidden />
                    </span>
                    <span className="mt-1 text-sm text-muted">{capitals}</span>
                    <span className="mt-auto pt-5 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                      {count} {count === 1 ? "miasto" : count % 10 >= 2 && count % 10 <= 4 && !(count % 100 >= 12 && count % 100 <= 14) ? "miasta" : "miast"}
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Jak pracujemy zdalnie */}
      <section aria-labelledby="wspolpraca-tytul" className="relative overflow-hidden bg-dark py-20 text-white lg:py-28">
        <div className="about-grid-bg absolute inset-0" aria-hidden />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionIntro
                id="wspolpraca-tytul"
                eyebrow="Współpraca"
                title="Jak pracujemy z firmami spoza Wrocławia"
                tone="dark"
              />
              <p className="mt-6 text-lg leading-relaxed text-white/75">
                Automatyzacja nie wymaga obecności na miejscu. Procesy poznajemy na
                wideorozmowach i na przykładach dokumentów, a rozwiązania budujemy
                na waszych kontach w narzędziach, których już używacie. Gdy
                projekt obejmuje kilka działów albo zmianę sposobu pracy całego
                zespołu, proponujemy warsztat na miejscu.
              </p>
              <Link
                href={SERVICES_HUB_PATH}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-light hover:text-white"
              >
                Zobacz wszystkie usługi
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {HOME_CONTENT.steps.items.map((step, index) => (
                <Reveal
                  as="li"
                  key={step.title}
                  delay={index * 70}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{step.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Miasta */}
      <section aria-labelledby="miasta-tytul" className="py-20 lg:py-28">
        <Container>
          <SectionIntro
            id="miasta-tytul"
            eyebrow="Miasta"
            title="Znajdź swoje miasto"
            lead={`Mamy strony dla ${cityCount} miast. Wpisz nazwę, żeby zobaczyć, jak pracujemy z firmami w twojej okolicy.`}
          />
          <div className="mt-10">
            <CityCoverageSearch
              featuredCities={featuredCities}
              searchableCities={searchableCities}
            />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section aria-label="Najczęstsze pytania" className="border-t border-brand/10 bg-surface py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">FAQ</p>
              <p className="mt-4 text-2xl font-bold leading-snug text-dark">
                Współpraca w całej Polsce: pytania i odpowiedzi
              </p>
            </div>
            <div className="lg:col-span-8 [&>section]:mt-0">
              <ArticleFaq items={FAQ} />
            </div>
          </div>
        </Container>
      </section>

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title="Porozmawiajmy o procesach w twojej firmie"
        body="Opowiedz, co zabiera zespołowi najwięcej czasu. W 30 minut wskażemy, od czego zacząć i czy automatyzacja się opłaci."
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={CITY_HUB_PATH}
        redirectOnSuccess
        sectionId="formularz"
      />
    </SiteLayout>
  );
}
