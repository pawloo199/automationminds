import { Reveal } from "@/components/about/Reveal";
import { LeadHero } from "@/components/city/LeadHero";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { ContactSection } from "@/components/sections/ContactSection";
import { ServiceCard } from "@/components/services/ServiceSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import type { BreadcrumbItem } from "@/lib/airtable.types";
import {
  CITY_HUB_PATH,
  cityPath,
  getCitiesByVoivodeship,
  voivodeshipPath,
  VOIVODESHIPS,
} from "@/lib/city-pages";
import type { Voivodeship } from "@/lib/city-pages/voivodeships";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { breadcrumbJsonLd, guideFaqJsonLd, placesCollectionJsonLd } from "@/lib/json-ld";
import { getServicesBySlugs } from "@/lib/services";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import Link from "next/link";

export function voivodeshipTitle(v: Voivodeship) {
  return `Automatyzacja procesów w województwie ${v.locative}`;
}

export function VoivodeshipTemplate({
  voivodeship,
  phone,
}: {
  voivodeship: Voivodeship;
  phone: string;
}) {
  const path = voivodeshipPath(voivodeship.slug);
  const cities = getCitiesByVoivodeship(voivodeship.name);
  const capitals = cities.filter((city) => voivodeship.capitalSlugs.includes(city.slug));
  const others = cities.filter((city) => !voivodeship.capitalSlugs.includes(city.slug));
  const services = getServicesBySlugs(voivodeship.relatedServiceSlugs);
  const title = voivodeshipTitle(voivodeship);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Strona główna", href: "/" },
    { label: "Automatyzacja procesów", href: CITY_HUB_PATH },
    { label: `Województwo ${voivodeship.name}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          placesCollectionJsonLd(
            { path, name: title, description: voivodeship.description },
            cities.map((city) => ({ name: city.name, path: cityPath(city.slug) })),
          ),
          breadcrumbJsonLd(breadcrumbs),
          ...(voivodeship.faq ? [guideFaqJsonLd(voivodeship.faq)] : []),
        ]}
      />

      <LeadHero
        breadcrumbs={breadcrumbs}
        eyebrow={voivodeship.regionName}
        title={title}
        lead={voivodeship.description}
        bullets={[
          CONSULTATION_OFFER.durationLabel,
          `${cities.length} miast regionu z własną stroną`,
          "Praca zdalna i hybrydowa w całym województwie",
        ]}
        imageUrl={voivodeship.heroImage?.url}
        imageAlt={voivodeship.heroImage?.alt}
        phone={phone}
        sourcePage={path}
      />

      {/* Miasta */}
      <section aria-labelledby="miasta-tytul" className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                  {voivodeship.regionName}
                </p>
                <h2
                  id="miasta-tytul"
                  className="mt-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl"
                >
                  Miasta, w których pracujemy
                </h2>
              </Reveal>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
                {(voivodeship.intro ?? [voivodeship.description]).map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              {capitals.length > 0 ? (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {capitals.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={cityPath(city.slug)}
                        className="group flex items-center justify-between gap-3 rounded-2xl bg-dark p-5 text-white transition hover:bg-brand"
                      >
                        <span className="flex items-center gap-3">
                          <Star className="h-4 w-4 text-brand-light group-hover:text-white" aria-hidden />
                          <span>
                            <span className="block text-lg font-semibold">{city.name}</span>
                            <span className="block text-xs text-white/60">Stolica regionu</span>
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3">
                {others.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={cityPath(city.slug)}
                      className="group flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-dark transition hover:bg-surface hover:text-brand"
                    >
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-brand/50" aria-hidden />
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Branże regionu */}
      {voivodeship.industries ? (
        <section aria-labelledby="branze-tytul" className="border-y border-brand/10 bg-surface py-20 lg:py-28">
          <Container>
            <Reveal className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">Branże</p>
              <h2
                id="branze-tytul"
                className="mt-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl"
              >
                Co automatyzują firmy w regionie
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {voivodeship.industries.map((industry, index) => (
                <Reveal
                  as="li"
                  key={industry.title}
                  delay={(index % 3) * 70}
                  className="rounded-2xl border border-brand/10 bg-white p-6"
                >
                  <span className="text-sm font-bold tabular-nums text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-dark">{industry.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{industry.body}</p>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* Usługi */}
      {services.length > 0 ? (
        <section aria-labelledby="uslugi-tytul" className="py-20 lg:py-28">
          <Container>
            <h2 id="uslugi-tytul" className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Usługi, o które najczęściej pytają firmy z regionu
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <ServiceCard service={service} showGroup />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {voivodeship.faq ? (
        <section aria-label="Najczęstsze pytania" className="border-t border-brand/10 py-20 lg:py-28">
          <Container className="max-w-4xl [&>section]:mt-0">
            <ArticleFaq items={voivodeship.faq} />
          </Container>
        </section>
      ) : null}

      {/* Inne województwa */}
      <section aria-labelledby="regiony-tytul" className="border-t border-brand/10 bg-surface py-16 lg:py-20">
        <Container>
          <h2 id="regiony-tytul" className="text-2xl font-bold text-dark">
            Pozostałe województwa
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {VOIVODESHIPS.filter((v) => v.slug !== voivodeship.slug).map((v) => (
              <li key={v.slug}>
                <Link
                  href={voivodeshipPath(v.slug)}
                  className="inline-flex rounded-full border border-brand/15 bg-white px-4 py-2 text-sm font-medium text-dark transition hover:border-brand hover:text-brand"
                >
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title="Porozmawiajmy o procesach w twojej firmie"
        body="Opowiedz, co zabiera zespołowi najwięcej czasu. W 30 minut wskażemy, od czego zacząć i czy automatyzacja się opłaci."
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={path}
        redirectOnSuccess
        sectionId="formularz"
      />
    </>
  );
}
