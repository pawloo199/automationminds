import { Reveal } from "@/components/about/Reveal";
import { getIndustriesForCity, industryPath } from "@/lib/industries/catalog";
import { LeadHero } from "@/components/city/LeadHero";
import { ArticleCard } from "@/components/guide/ArticleCard";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  ServiceCard,
  ServiceExample,
  ServiceScope,
} from "@/components/services/ServiceSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import type { BreadcrumbItem } from "@/lib/airtable.types";
import {
  CITY_HUB_PATH,
  cityPath,
  getCityVoivodeship,
  getNearbyCities,
  voivodeshipPath,
} from "@/lib/city-pages";
import { fromCity, inCity, type CityPageContent } from "@/lib/city-pages/types";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { getLatestGuideArticles } from "@/lib/guide-content";
import { HOME_CONTENT } from "@/lib/home-content";
import { breadcrumbJsonLd, cityServiceJsonLd, guideFaqJsonLd } from "@/lib/json-ld";
import { getServicesBySlugs, SERVICES_HUB_PATH } from "@/lib/services";
import { ArrowRight, ArrowUpRight, Building2, MapPin } from "lucide-react";
import Link from "next/link";

export function SectionIntro({
  id,
  eyebrow,
  title,
  lead,
  tone = "light",
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Reveal className="max-w-3xl">
      <p
        className={
          tone === "light"
            ? "text-sm font-semibold uppercase tracking-[0.25em] text-brand"
            : "text-sm font-semibold uppercase tracking-[0.25em] text-brand-light"
        }
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={
          tone === "light"
            ? "mt-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl"
            : "mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
        }
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={
            tone === "light"
              ? "mt-5 text-lg leading-relaxed text-muted"
              : "mt-5 text-lg leading-relaxed text-white/70"
          }
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}

export function CityTemplate({
  city,
  phone,
}: {
  city: CityPageContent;
  phone: string;
}) {
  const voivodeship = getCityVoivodeship(city);
  const path = cityPath(city.slug);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Strona główna", href: "/" },
    { label: "Automatyzacja procesów", href: CITY_HUB_PATH },
    { label: `Województwo ${voivodeship.name}`, href: voivodeshipPath(voivodeship.slug) },
    { label: city.name },
  ];
  const services = getServicesBySlugs(city.relatedServiceSlugs);
  const nearby = getNearbyCities(city);
  const articles = getLatestGuideArticles(3);
  const bullets = [
    CONSULTATION_OFFER.durationLabel,
    "Wycena pierwszego etapu, zanim zaczniemy pracę",
    city.highlight
      ? `${city.highlight.title}, spotkania także na miejscu`
      : "Praca zdalna i hybrydowa, bez kosztów dojazdu",
  ];

  return (
    <>
      <JsonLd
        data={[
          cityServiceJsonLd(city),
          breadcrumbJsonLd(breadcrumbs),
          guideFaqJsonLd(city.faq),
        ]}
      />

      <LeadHero
        breadcrumbs={breadcrumbs}
        eyebrow={`Województwo ${voivodeship.name}`}
        title={city.heroTitle}
        lead={city.heroLead}
        bullets={bullets}
        imageUrl={city.heroImage?.url}
        imageAlt={city.heroImage?.alt}
        phone={phone}
        sourcePage={path}
      />

      {/* Wprowadzenie */}
      <section aria-labelledby="wstep-tytul" className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionIntro
                id="wstep-tytul"
                eyebrow={`Firmy ${fromCity(city)}`}
                title={`Automatyzacja procesów dla firm ${fromCity(city)}`}
              />
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
                {city.introParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
            <Reveal className="lg:col-span-5">
              <div className="h-full rounded-3xl bg-dark p-8 text-white sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand">
                  {city.highlight ? (
                    <Building2 className="h-6 w-6" aria-hidden />
                  ) : (
                    <MapPin className="h-6 w-6" aria-hidden />
                  )}
                </span>
                <h3 className="mt-6 text-2xl font-bold">
                  {city.highlight?.title ?? "Dlaczego to się opłaca"}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/75">
                  {city.highlight?.body ?? city.whyHere}
                </p>
                {city.highlight ? (
                  <p className="mt-4 text-base leading-relaxed text-white/75">{city.whyHere}</p>
                ) : null}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Lokalna gospodarka i branże */}
      <section
        aria-labelledby="branze-tytul"
        className="border-y border-brand/10 bg-surface py-20 lg:py-28"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionIntro
                id="branze-tytul"
                eyebrow="Lokalny rynek"
                title={city.economy?.title ?? `Firmy ${inCity(city)} i okolicy`}
              />
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
                {(city.economy?.paragraphs ?? []).map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
                <p className="rounded-2xl border-l-4 border-brand bg-white p-5 text-dark">
                  {city.localContext}
                </p>
              </div>
            </div>
            <ul className="grid content-start gap-4 sm:grid-cols-2 lg:col-span-7">
              {city.focusIndustries.map((industry, index) => (
                <Reveal
                  as="li"
                  key={industry.title}
                  delay={(index % 2) * 70}
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
          </div>
        </Container>
      </section>

      <ServiceScope
        scope={{
          title: `Procesy, które najczęściej automatyzujemy ${inCity(city)}`,
          lead: "Zaczynamy od procesu, który zabiera zespołowi najwięcej czasu. Kolejne dokładamy, gdy pierwszy działa.",
          items: city.focusProcesses,
        }}
      />

      {city.example ? <ServiceExample example={city.example} /> : null}

      {/* Usługi */}
      {services.length > 0 ? (
        <section
          aria-labelledby="uslugi-tytul"
          className={city.example ? "border-t border-brand/10 bg-surface py-20 lg:py-28" : "py-20 lg:py-28"}
        >
          <Container>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionIntro
                id="uslugi-tytul"
                eyebrow="Usługi"
                title={`Co możemy zrobić dla firm ${fromCity(city)}`}
              />
              <Link
                href={SERVICES_HUB_PATH}
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand lg:self-auto"
              >
                Wszystkie usługi
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Reveal as="li" key={service.slug} delay={(index % 3) * 70}>
                  <ServiceCard service={service} showGroup />
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* Jak pracujemy */}
      <section aria-labelledby="wspolpraca-tytul" className="relative overflow-hidden bg-dark py-20 text-white lg:py-28">
        <div className="about-grid-bg absolute inset-0" aria-hidden />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionIntro
                id="wspolpraca-tytul"
                eyebrow="Współpraca"
                title={`Jak pracujemy z firmami ${fromCity(city)}`}
                tone="dark"
              />
              <p className="mt-6 text-lg leading-relaxed text-white/75">{city.howWeWork}</p>
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

      {/* FAQ */}
      <section aria-label="Najczęstsze pytania" className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">FAQ</p>
              <p className="mt-4 text-2xl font-bold leading-snug text-dark">
                Automatyzacja {inCity(city)}: pytania i odpowiedzi
              </p>
            </div>
            <div className="lg:col-span-8 [&>section]:mt-0">
              <ArticleFaq items={city.faq} />
            </div>
          </div>
        </Container>
      </section>

      {/* Silos: okolica, województwo, Poradnik */}
      <section aria-labelledby="okolica-tytul" className="border-t border-brand/10 bg-surface py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 id="okolica-tytul" className="text-2xl font-bold text-dark sm:text-3xl">
                Automatyzacja w okolicy {city.nameGenitive}
              </h2>
              {nearby.length > 0 ? (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {nearby.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={cityPath(item.slug)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-brand/15 bg-white px-4 py-2 text-sm font-medium text-dark transition hover:border-brand hover:text-brand"
                      >
                        <MapPin className="h-3.5 w-3.5 text-brand/60" aria-hidden />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-8 space-y-3">
                <Link
                  href={voivodeshipPath(voivodeship.slug)}
                  className="flex items-center justify-between gap-3 rounded-2xl bg-white p-5 font-semibold text-dark shadow-sm transition hover:text-brand"
                >
                  Wszystkie miasta: województwo {voivodeship.name}
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                </Link>
                <Link
                  href={CITY_HUB_PATH}
                  className="flex items-center justify-between gap-3 rounded-2xl bg-white p-5 font-semibold text-dark shadow-sm transition hover:text-brand"
                >
                  Automatyzacja procesów w całej Polsce
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                </Link>
                {getIndustriesForCity(city.slug).map((industry) => (
                  <Link
                    key={industry.slug}
                    href={industryPath(industry.slug)}
                    className="flex items-center justify-between gap-3 rounded-2xl bg-white p-5 font-semibold text-dark shadow-sm transition hover:text-brand"
                  >
                    Automatyzacja i AI: {industry.name.toLowerCase()} {inCity(city)}
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                  </Link>
                ))}
              </div>
            </div>
            {articles.length > 0 ? (
              <div className="lg:col-span-7">
                <h2 className="text-2xl font-bold text-dark sm:text-3xl">Z Poradnika</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {articles.slice(0, 2).map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title={`Porozmawiajmy o procesach w twojej firmie ${fromCity(city)}`}
        body="Opowiedz, co zabiera zespołowi najwięcej czasu. W 30 minut wskażemy, od czego zacząć i czy automatyzacja się opłaci."
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage={path}
        redirectOnSuccess
        sectionId="formularz"
      />
    </>
  );
}
