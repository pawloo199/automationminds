import { Reveal } from "@/components/about/Reveal";
import { ContactFormStepsLazy } from "@/components/forms/ContactFormStepsLazy";
import { ArticleCard } from "@/components/guide/ArticleCard";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CityCoverageSearch } from "@/components/sections/CityCoverageSearch";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  ServiceExample,
  ServiceMidCta,
} from "@/components/services/ServiceSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { getSettings } from "@/lib/airtable";
import { cityPath, getCityCoverageSearchIndex, getCityPage } from "@/lib/city-pages";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { defaultGuideAuthor } from "@/lib/guide-content/authors";
import { getLatestGuideArticles } from "@/lib/guide-content";
import { HOME_CONTENT as C } from "@/lib/home-content";
import { guideFaqJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import {
  CONTACT_FORM_SERVICE_OPTIONS,
  getPublishedServicesByGroup,
  servicePath,
  SERVICES_HUB_PATH,
} from "@/lib/services/catalog";
import { ArrowRight, ArrowUpRight, Check, Phone, X } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  title: C.metaTitle,
  description: C.metaDescription,
  ogImage: C.hero.imageUrl,
});

/** Liczba usług pokazywanych na kafelku grupy na stronie głównej. */
const SERVICES_PER_GROUP = 4;

export default async function HomePage() {
  const settings = await getSettings();
  const phoneHref = `tel:${settings.phone.replace(/\s/g, "")}`;
  const groups = getPublishedServicesByGroup();
  const articles = getLatestGuideArticles(3);
  const author = defaultGuideAuthor;
  const featuredCities = C.cities.featuredSlugs
    .map((slug) => getCityPage(slug))
    .filter((city) => city !== null)
    .map((city) => ({ id: city.slug, name: city.name, href: cityPath(city.slug) }));
  const searchableCities = getCityCoverageSearchIndex();

  return (
    <SiteLayout transparentHeader>
      <JsonLd data={guideFaqJsonLd(C.faq)} />

      {/* Hero z formularzem: kontakt dostępny od pierwszego ekranu (Google Ads) */}
      <section id="hero" className="relative overflow-hidden bg-dark text-white">
        <Image
          src={C.hero.imageUrl}
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/45" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark/75 to-dark/40"
          aria-hidden
        />
        <div
          className="absolute -right-1/4 top-0 h-[70%] w-[55%] bg-[radial-gradient(circle_at_center,rgba(109,81,253,0.28),transparent_68%)]"
          aria-hidden
        />
        <div className="hero-grid" aria-hidden>
          <div className="hero-grid__base" />
          <div className="hero-grid__accent" />
        </div>

        <Container className="relative z-10 pb-14 pt-24 lg:pb-20 lg:pt-36">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0">
            <div className="lg:col-span-7 lg:row-start-1 lg:pt-6">
              <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-light sm:text-sm">
                <span className="h-px w-10 bg-brand" aria-hidden />
                {C.hero.eyebrow}
              </p>
              <h1 className="mt-5 text-[2.1rem] font-bold leading-[1.08] tracking-tight sm:mt-6 sm:text-5xl lg:text-[3.4rem]">
                {C.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                {C.hero.lead}
              </p>
              <ul className="mt-8 space-y-3">
                {C.hero.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-white/90">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#konsultacja"
                  data-track="consultation"
                  data-track-location="hero"
                  data-track-method="anchor"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark lg:hidden"
                >
                  {CONSULTATION_OFFER.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
                <a
                  href={phoneHref}
                  data-track-location="hero"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Zadzwoń: {settings.phone}
                </a>
              </div>
            </div>

            <div
              id="konsultacja"
              className="scroll-mt-24 rounded-2xl bg-white p-6 text-dark shadow-2xl sm:p-8 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {CONSULTATION_OFFER.durationLabel}
              </p>
              <h2 className="mt-2 text-2xl font-bold">{C.hero.formTitle}</h2>
              <p className="mb-6 mt-2 text-sm leading-relaxed text-muted">
                {C.hero.formBody}
              </p>
              <ContactFormStepsLazy
                sourcePage="/"
                redirectOnSuccess
                services={CONTACT_FORM_SERVICE_OPTIONS}
              />
              <p className="mt-5 border-t border-brand/10 pt-4 text-sm text-muted">
                Wolisz zadzwonić?{" "}
                <a
                  href={phoneHref}
                  data-track-location="hero_form"
                  className="font-semibold text-brand hover:underline"
                >
                  {settings.phone}
                </a>
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-8 sm:grid-cols-4 lg:col-span-7 lg:row-start-2 lg:mt-12">
              {C.hero.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-base font-semibold text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Narzędzia */}
      <section
        aria-label="Narzędzia, z którymi pracujemy"
        className="border-b border-brand/10 bg-white py-6"
      >
        <Container className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Pracujemy na narzędziach, które znasz
          </p>
          <ul className="flex flex-wrap justify-center gap-2 lg:justify-start">
            {C.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-brand/15 bg-surface px-3.5 py-1.5 text-sm font-medium text-dark"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Problemy */}
      <section aria-labelledby="problemy-tytul" className="py-20 lg:py-28">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
              Brzmi znajomo?
            </p>
            <h2
              id="problemy-tytul"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl"
            >
              {C.problems.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{C.problems.lead}</p>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {C.problems.items.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(index % 3) * 70}
                className="rounded-2xl border border-brand/10 bg-white p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500">
                  <X className="h-4 w-4" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Usługi */}
      <section
        id="uslugi"
        aria-labelledby="uslugi-tytul"
        className="relative scroll-mt-24 overflow-hidden bg-dark py-20 text-white lg:py-28"
      >
        <div className="about-grid-bg absolute inset-0" aria-hidden />
        <Container className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">
                Usługi
              </p>
              <h2
                id="uslugi-tytul"
                className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
              >
                {C.services.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">{C.services.lead}</p>
            </Reveal>
            <Link
              href={SERVICES_HUB_PATH}
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 lg:self-auto"
            >
              Wszystkie usługi
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {groups.map(({ group, services }, index) => {
              const Icon = group.icon;
              return (
                <Reveal
                  key={group.id}
                  delay={(index % 2) * 80}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold">{group.name}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-6 grid gap-1 sm:grid-cols-2">
                    {services.slice(0, SERVICES_PER_GROUP).map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={servicePath(service.slug)}
                          className="group flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/[0.06] hover:text-white"
                        >
                          {service.name}
                          <ArrowUpRight
                            className="h-4 w-4 shrink-0 text-brand-light/60 transition group-hover:text-brand-light"
                            aria-hidden
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {services.length > SERVICES_PER_GROUP ? (
                    <Link
                      href={`${SERVICES_HUB_PATH}#${group.id}`}
                      className="mt-4 inline-flex items-center gap-1.5 px-3 text-sm font-semibold text-brand-light hover:text-white"
                    >
                      Wszystkie usługi w grupie ({services.length})
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  ) : null}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <ServiceExample example={C.example} />

      {/* Jak zaczynamy */}
      <section
        id="jak-zaczynamy"
        aria-labelledby="jak-zaczynamy-tytul"
        className="scroll-mt-24 border-y border-brand/10 bg-surface py-20 lg:py-28"
      >
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
              Jak pracujemy
            </p>
            <h2
              id="jak-zaczynamy-tytul"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl"
            >
              {C.steps.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{C.steps.lead}</p>
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {C.steps.items.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 70}
                className="relative rounded-2xl bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-base font-bold text-white shadow-lg shadow-brand/25">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-dark">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Zasady i osoba prowadząca */}
      <section aria-labelledby="zasady-tytul" className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                  Współpraca
                </p>
                <h2
                  id="zasady-tytul"
                  className="mt-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl"
                >
                  {C.principles.title}
                </h2>
              </Reveal>
              <ul className="mt-10 grid gap-6 sm:grid-cols-2">
                {C.principles.items.map((item, index) => (
                  <Reveal as="li" key={item.title} delay={(index % 2) * 70}>
                    <span className="text-sm font-bold tabular-nums text-brand">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-dark">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted">{item.body}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
            <Reveal className="lg:col-span-5">
              <div className="h-full rounded-3xl bg-dark p-8 text-white sm:p-10">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-lg font-bold">
                    MW
                  </span>
                  <div>
                    <p className="text-lg font-semibold">{author.name}</p>
                    <p className="text-sm text-white/60">{author.jobTitle}</p>
                  </div>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-white/85">
                  Konsultację przeprowadzi {author.name}. W trakcie rozmowy
                  podpowie, co jest wykonalne, ile może potrwać i ile kosztować.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="#konsultacja"
                    data-track="consultation"
                    data-track-location="home_person"
                    data-track-method="anchor"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
                  >
                    {CONSULTATION_OFFER.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                  <a
                    href={phoneHref}
                    data-track-location="home_person"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    {settings.phone}
                  </a>
                </div>
                <Link
                  href="/o-nas"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light hover:text-white"
                >
                  Poznaj nas bliżej
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ServiceMidCta title={C.midCta.title} body={C.midCta.body} phone={settings.phone} />

      {/* FAQ */}
      <section id="faq" aria-label="Najczęstsze pytania" className="scroll-mt-24 py-20 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                FAQ
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Nie ma tu twojego pytania? Zadzwoń pod{" "}
                <a
                  href={phoneHref}
                  data-track-location="home_faq"
                  className="font-semibold text-brand hover:underline"
                >
                  {settings.phone}
                </a>{" "}
                albo napisz przez formularz.
              </p>
            </div>
            <div className="lg:col-span-8 [&>section]:mt-0">
              <ArticleFaq items={C.faq} />
            </div>
          </div>
        </Container>
      </section>

      {/* Poradnik */}
      {articles.length > 0 ? (
        <section aria-labelledby="poradnik-tytul" className="border-t border-brand/10 bg-surface py-20 lg:py-24">
          <Container>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <h2
                  id="poradnik-tytul"
                  className="text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl"
                >
                  {C.guide.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{C.guide.lead}</p>
              </div>
              <Link
                href="/poradnik"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5"
              >
                Wszystkie artykuły
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Zasięg */}
      {featuredCities.length > 0 ? (
        <section aria-labelledby="zasieg-tytul" className="py-20 lg:py-24">
          <Container>
            <div className="max-w-3xl">
              <h2
                id="zasieg-tytul"
                className="text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl"
              >
                {C.cities.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{C.cities.lead}</p>
            </div>
            <div className="mt-10">
              <CityCoverageSearch
                featuredCities={featuredCities}
                searchableCities={searchableCities}
              />
            </div>
          </Container>
        </section>
      ) : null}

      <div className="border-t border-brand/10 bg-surface">
        <ContactSection
          subtitle={CONSULTATION_OFFER.formSubtitle}
          title={C.contact.title}
          body={C.contact.body}
          highlights={CONSULTATION_OFFER.formHighlights}
          sourcePage="/"
          redirectOnSuccess
          sectionId="formularz"
        />
      </div>
    </SiteLayout>
  );
}
