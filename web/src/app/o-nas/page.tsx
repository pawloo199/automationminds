import { AboutFlowGraphic } from "@/components/about/AboutFlowGraphic";
import { Reveal } from "@/components/about/Reveal";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  CityCoverageSearch,
  type CityCoverageItem,
} from "@/components/sections/CityCoverageSearch";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { getHomePageData, getSettings } from "@/lib/airtable";
import { getCityCoverageSearchIndex } from "@/lib/city-pages";
import { cn } from "@/lib/cn";
import { COMPANY } from "@/lib/company";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { defaultGuideAuthor } from "@/lib/guide-content/authors";
import { aboutPageJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  Database,
  FileText,
  Layers,
  Plug,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 60;

const FACTS = [
  { label: "Na rynku", value: `od ${COMPANY.foundingYear} r.` },
  { label: "Siedziba", value: COMPANY.city },
  { label: "Zasięg", value: "Cała Polska, zdalnie i hybrydowo" },
  { label: "Dla kogo", value: "Małe i średnie firmy" },
];

const TOOLS = [
  "Airtable",
  "Make",
  "n8n",
  "Zapier",
  "Power Automate",
  "OpenAI",
  "Claude",
  "Google Workspace",
  "Microsoft 365",
  "Pipedrive",
  "HubSpot",
  "Slack",
  "Notion",
  "KSeF",
  "Fakturownia",
  "Looker Studio",
];

const PRINCIPLES = [
  {
    title: "Najpierw proces, potem narzędzie",
    body: "Zanim cokolwiek zbudujemy, rozrysowujemy z zespołem, jak praca wygląda dziś. Narzędzie dobieramy na końcu, do skali firmy, a nie do mody.",
  },
  {
    title: "Porządek w danych przed AI",
    body: "Automatyzacja i AI działają tak dobrze, jak dane, na których pracują. Projektowanie struktury danych to u nas pierwszy krok, a nie dodatek na końcu projektu.",
  },
  {
    title: "Kreatywnie, ale najprostszą drogą",
    body: "Szukamy rozwiązania, które da efekt najmniejszym kosztem. Czasem to integracja kilku systemów, czasem jedna zasada w procesie, a czasem model AI tam, gdzie nikt się go nie spodziewał.",
  },
  {
    title: "Efekt widać w liczbach",
    body: "Mierzymy proces przed wdrożeniem i po nim. Wynik pokazujemy w godzinach, błędach i czasie obsługi klienta, żeby łatwo było ocenić, czy inwestycja się zwróciła.",
  },
  {
    title: "Rozwiązania zostają w firmie",
    body: "Automatyzacje działają na kontach firmy, są opisane i przekazane zespołowi. Klient może je rozwijać z nami albo samodzielnie.",
  },
];

type Capability = {
  title: string;
  body: string;
  href: string;
  cta: string;
  icon: LucideIcon;
  className?: string;
  dark?: boolean;
};

const CAPABILITIES: Capability[] = [
  {
    title: "Automatyzacja procesów",
    body: "Obsługa zapytań, faktury, raporty, onboarding, przypomnienia o terminach. Pracę, którą zespół wykonuje ręcznie, zamieniamy w przepływy działające bez przepisywania danych.",
    href: "/poradnik/kategoria/automatyzacja-procesow",
    cta: "Poradniki o automatyzacji",
    icon: Workflow,
    className: "lg:col-span-2",
  },
  {
    title: "AI w firmie",
    body: "Sortowanie zgłoszeń, odczyt dokumentów, asystenci na firmowej wiedzy. Wdrażamy AI tam, gdzie ma sens, z człowiekiem w pętli.",
    href: "/uslugi/automatyzacja-oraz-ai-w-niestandardowych-procesach",
    cta: "Automatyzacja i AI",
    icon: Sparkles,
  },
  {
    title: "Airtable i bazy danych",
    body: "Projektujemy bazy w Airtable, które zastępują rozproszone arkusze: CRM, bazy zleceń, rejestry terminów, rekrutację. To jedno z narzędzi, które znamy najlepiej, razem z automatyzacjami, które na nim działają.",
    href: "/poradnik/kategoria/airtable",
    cta: "Wszystko o Airtable",
    icon: Database,
    className: "lg:row-span-2",
    dark: true,
  },
  {
    title: "Cyfryzacja i struktura danych",
    body: "Przenosimy wiedzę z papieru, maili i arkuszy do jednej, uporządkowanej bazy, gotowej na automatyzację i AI.",
    href: "/poradnik/kategoria/dane-i-cyfryzacja",
    cta: "Dane i cyfryzacja",
    icon: FileText,
  },
  {
    title: "Integracje systemów",
    body: "Łączymy CRM, programy do faktur, KSeF, pocztę i sklepy tak, żeby dane płynęły same i w obie strony.",
    href: "/poradnik/kategoria/narzedzia-i-integracje",
    cta: "Narzędzia i integracje",
    icon: Plug,
  },
  {
    title: "Audyt i doradztwo",
    body: "Pokazujemy, co w firmie zmienić najpierw, ile to kosztuje i kiedy się zwróci. Bez przywiązania do jednego narzędzia.",
    href: "/uslugi/doradztwo-i-optymalizacja-procesow-biznesowych",
    cta: "Doradztwo i audyt",
    icon: ClipboardCheck,
  },
  {
    title: "Sprawdzone rozwiązania",
    body: "Dla procesów, które powtarzają się w wielu firmach, mamy przetestowane schematy. Wdrażamy je szybciej i taniej niż projekt od zera.",
    href: "/poradnik/gotowa-automatyzacja-czy-budowana-od-zera",
    cta: "Jak to działa",
    icon: Layers,
  },
];

const PROCESS = [
  {
    title: "Rozmowa",
    body: "30 minut, bezpłatnie. Poznajemy firmę i wskazujemy obszary z najszybszym efektem.",
  },
  {
    title: "Audyt i mapa procesów",
    body: "Rozmawiamy z zespołem, rysujemy procesy, sprawdzamy dane i systemy.",
  },
  {
    title: "Pilotaż",
    body: "Jedno rozwiązanie, testy na prawdziwych danych, działanie równoległe do obecnej pracy.",
  },
  {
    title: "Wdrożenie",
    body: "Uruchomienie, dokumentacja i szkolenie. Zespół wie, jak to działa i jak to zmieniać.",
  },
  {
    title: "Opieka i rozwój",
    body: "Pilnujemy, żeby automatyzacje działały, i dokładamy kolejne procesy.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "O nas. Automatyzacja procesów i AI | Automation Minds",
    description:
      "Automation Minds łączy automatyzację procesów, AI i projektowanie danych. Poznaj nasze podejście, kompetencje i sposób pracy z firmami z całej Polski.",
    path: "/o-nas",
  });
}

export default async function AboutPage() {
  const [settings, homeData] = await Promise.all([
    getSettings(),
    getHomePageData(),
  ]);
  const author = defaultGuideAuthor;
  const featuredCities: CityCoverageItem[] = homeData.citySilos.map((city) => ({
    id: city.id,
    name: city.name,
    href: city.href,
  }));
  const searchableCities = getCityCoverageSearchIndex();
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "O nas" },
  ];
  const initials = author.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <SiteLayout>
      <JsonLd
        data={[...aboutPageJsonLd(settings, author), breadcrumbJsonLd(breadcrumbs)]}
      />

      <noscript>
        <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
      </noscript>

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark text-white">
        <div className="about-grid-bg absolute inset-0" aria-hidden />
        <div
          className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-brand/30 blur-[120px]"
          aria-hidden
        />
        <div
          className="absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-light/15 blur-[120px]"
          aria-hidden
        />
        <Container className="relative z-10 pb-12 pt-10 lg:pb-16 lg:pt-14">
          <div className="[&_a]:text-white/70 [&_nav]:mb-10 [&_span]:text-white/90">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="hero-content-enter lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">
                O nas
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Zamieniamy powtarzalną pracę w{" "}
                <span className="about-gradient-text">
                  procesy, które działają same
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Automation Minds łączy automatyzację procesów, sztuczną
                inteligencję i projektowanie danych. Pomagamy małym i średnim
                firmom z całej Polski odzyskać czas zespołu i porządek w
                danych.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#kontakt"
                  data-track="consultation"
                  data-track-location="about_hero"
                  data-track-method="anchor"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
                >
                  {CONSULTATION_OFFER.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="#jak-pracujemy"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Zobacz, jak pracujemy
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <AboutFlowGraphic />
            </div>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 lg:grid-cols-4">
            {FACTS.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-lg font-semibold text-white sm:text-xl">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Narzędzia */}
      <section
        aria-label="Narzędzia, z którymi pracujemy"
        className="about-marquee overflow-hidden border-b border-brand/10 bg-white py-6"
      >
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          Narzędzia, z którymi pracujemy na co dzień
        </p>
        <div className="about-marquee-track">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0 items-center gap-3 pr-3"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {TOOLS.map((tool) => (
                <li
                  key={`${copy}-${tool}`}
                  className="whitespace-nowrap rounded-full border border-brand/15 bg-surface px-5 py-2 text-sm font-semibold text-dark"
                >
                  {tool}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* Kim jesteśmy */}
      <section aria-labelledby="kim-jestesmy" className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                Kim jesteśmy
              </p>
              <h2
                id="kim-jestesmy"
                className="mt-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl"
              >
                Szukamy najprostszego sposobu, żeby praca w firmie działała
                sama.
              </h2>
            </Reveal>
            <Reveal
              delay={120}
              className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-6 lg:col-start-7 lg:pt-10"
            >
              <p>
                W wielu małych i średnich firmach najbardziej doświadczeni
                ludzie spędzają godziny na przepisywaniu danych, pilnowaniu
                terminów i składaniu raportów. Tę pracę da się oddać systemom.
                Warunek jest jeden: ktoś musi najpierw zrozumieć, jak firma
                działa w praktyce, a nie na schemacie.
              </p>
              <p>
                Dlatego łączymy trzy kompetencje, które rzadko idą w parze:{" "}
                <strong className="font-semibold text-dark">
                  analizę procesów, projektowanie danych i wdrożenia
                  technologii
                </strong>
                , od prostych automatyzacji po AI. Zaczynamy od rozmowy z
                ludźmi, którzy wykonują pracę, a kończymy na rozwiązaniu, które
                zespół rozumie i potrafi rozwijać.
              </p>
              <p>
                Siedziba spółki mieści się we Wrocławiu, a z klientami z całej
                Polski pracujemy zdalnie i hybrydowo.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Zasady */}
      <section
        aria-labelledby="jak-myslimy"
        className="relative overflow-hidden bg-dark py-20 text-white lg:py-28"
      >
        <div
          className="absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-brand/20 blur-[120px]"
          aria-hidden
        />
        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-light">
                  Jak myślimy
                </p>
                <h2
                  id="jak-myslimy"
                  className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
                >
                  Pięć zasad, na których opieramy każdy projekt
                </h2>
                <p className="mt-5 text-white/65">
                  Dzięki nim automatyzacje działają także po roku, gdy firma
                  urośnie, a systemy się zmienią.
                </p>
              </div>
            </div>
            <ol className="space-y-4 lg:col-span-7 lg:col-start-6">
              {PRINCIPLES.map((principle, index) => (
                <Reveal
                  as="li"
                  key={principle.title}
                  delay={index * 60}
                  className="group grid gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand-light/40 hover:bg-white/[0.06] sm:grid-cols-[5rem_1fr] sm:p-8"
                >
                  <span className="text-4xl font-bold leading-none text-brand-light/60 transition group-hover:text-brand-light sm:text-5xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold sm:text-2xl">
                      {principle.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-white/70">
                      {principle.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Kompetencje */}
      <section aria-labelledby="co-potrafimy" className="bg-surface py-20 lg:py-28">
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
              Co potrafimy
            </p>
            <h2
              id="co-potrafimy"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl"
            >
              Od pierwszej rozmowy do działającego systemu
            </h2>
            <p className="mt-5 text-lg text-muted">
              Łączymy kompetencje, które zwykle są rozrzucone między kilka
              firm. Dzięki temu jeden zespół widzi cały proces, od danych po
              automatyzację i AI.
            </p>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3">
            {CAPABILITIES.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Reveal
                  as="li"
                  key={capability.title}
                  delay={(index % 3) * 80}
                  className={cn(capability.className)}
                >
                  <Link
                    href={capability.href}
                    className={cn(
                      "group flex h-full flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1 sm:p-8",
                      capability.dark
                        ? "bg-dark text-white shadow-xl shadow-brand/10 hover:shadow-2xl"
                        : "border border-brand/10 bg-white text-dark hover:border-brand/30 hover:shadow-xl",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl",
                        capability.dark
                          ? "bg-brand text-white"
                          : "bg-brand/10 text-brand",
                      )}
                    >
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <h3 className="mt-6 text-xl font-bold sm:text-2xl">
                      {capability.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 flex-1 leading-relaxed",
                        capability.dark ? "text-white/70" : "text-muted",
                      )}
                    >
                      {capability.body}
                    </p>
                    <span
                      className={cn(
                        "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold",
                        capability.dark ? "text-brand-light" : "text-brand",
                      )}
                    >
                      {capability.cta}
                      <ArrowUpRight
                        className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Proces */}
      <section
        id="jak-pracujemy"
        aria-labelledby="jak-pracujemy-tytul"
        className="scroll-mt-24 py-20 lg:py-28"
      >
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
              Jak pracujemy
            </p>
            <h2
              id="jak-pracujemy-tytul"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl"
            >
              Małymi krokami, z efektem po każdym z nich
            </h2>
          </Reveal>
          <ol className="relative mt-14 grid gap-10 lg:grid-cols-5 lg:gap-6">
            <span
              className="absolute left-[1.125rem] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand via-brand/40 to-transparent lg:left-0 lg:top-[1.125rem] lg:h-px lg:w-full lg:bg-gradient-to-r"
              aria-hidden
            />
            {PROCESS.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 90}
                className="relative pl-14 lg:pl-0 lg:pt-14"
              >
                <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white ring-8 ring-white">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-dark">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Ludzie */}
      <section
        aria-labelledby="ludzie"
        className="border-y border-brand/10 bg-surface py-20 lg:py-28"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                Ludzie
              </p>
              <h2
                id="ludzie"
                className="mt-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl"
              >
                Za każdym projektem stoją konkretne osoby
              </h2>
              <p className="mt-5 text-lg text-muted">
                Rozmawiasz z ludźmi, którzy projektują i wdrażają rozwiązania.
                Już na pierwszej rozmowie słyszysz konkret: co jest wykonalne,
                ile może potrwać i ile kosztować.
              </p>
            </Reveal>
            <Reveal
              delay={120}
              className="lg:col-span-6 lg:col-start-7"
            >
              <article className="relative overflow-hidden rounded-3xl bg-dark p-8 text-white shadow-2xl sm:p-10">
                <div
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/30 blur-[80px]"
                  aria-hidden
                />
                <div className="relative flex items-center gap-5">
                  <span
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand text-2xl font-bold"
                    aria-hidden
                  >
                    {initials}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold">{author.name}</h3>
                    <p className="text-brand-light">{author.jobTitle}</p>
                  </div>
                </div>
                <p className="relative mt-6 leading-relaxed text-white/75">
                  {author.bio}
                </p>
                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {[
                    "Automatyzacja procesów",
                    "Wdrożenia AI",
                    "Airtable",
                    "Projektowanie baz danych",
                    "Cyfryzacja danych",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/85"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  <Link
                    href="/poradnik"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light hover:text-white"
                  >
                    Artykuły w Poradniku
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                  {author.linkedinUrl ? (
                    <a
                      href={author.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light hover:text-white"
                    >
                      LinkedIn
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Zasięg */}
      {featuredCities.length > 0 ? (
        <section aria-labelledby="zasieg" className="py-20 lg:py-24">
          <Container>
            <Reveal className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
                Zasięg
              </p>
              <h2
                id="zasieg"
                className="mt-4 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl"
              >
                Wrocław to siedziba. Klienci są w całej Polsce.
              </h2>
              <p className="mt-5 text-lg text-muted">
                Większość projektów prowadzimy zdalnie: warsztaty, wdrożenia i
                szkolenia odbywają się online. Sprawdź, jak pracujemy z firmami
                z twojego miasta.
              </p>
            </Reveal>
            <div className="mt-10">
              <CityCoverageSearch
                featuredCities={featuredCities}
                searchableCities={searchableCities}
              />
            </div>
          </Container>
        </section>
      ) : null}

      <ContactSection
        subtitle={CONSULTATION_OFFER.formSubtitle}
        title="Porozmawiajmy o twojej firmie"
        body="Opowiedz nam, co zabiera zespołowi najwięcej czasu. Na bezpłatnej, 30-minutowej rozmowie wskażemy, od czego zacząć, i powiemy wprost, czy automatyzacja ma sens."
        highlights={CONSULTATION_OFFER.formHighlights}
        sourcePage="/o-nas"
        redirectOnSuccess
      />
    </SiteLayout>
  );
}
