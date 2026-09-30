import { ContactFormStepsLazy } from "@/components/forms/ContactFormStepsLazy";
import { ArticleFaq } from "@/components/guide/ArticleSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { getSettings } from "@/lib/airtable";
import {
  CONTACT_FORM_SERVICE_OPTIONS,
  getPublishedServices,
  servicePath,
} from "@/lib/services/catalog";
import type { GuideFaqItem } from "@/lib/airtable.types";
import { COMPANY, COMPANY_ADDRESS_LINE } from "@/lib/company";
import { CONSULTATION_OFFER } from "@/lib/consultation-offer";
import { guideArticlePath } from "@/lib/guide-articles";
import { defaultGuideAuthor } from "@/lib/guide-content/authors";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import {
  ArrowUpRight,
  Building2,
  Check,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?w=1920&q=80";

const STEPS = [
  {
    title: "Wypełniasz krótki formularz",
    body: "Podajesz dane kontaktowe, a w drugim kroku, jeśli chcesz, kilka słów o firmie. Zajmuje to około dwóch minut.",
  },
  {
    title: "Oddzwaniamy w ciągu 1 dnia roboczego",
    body: "Krótko potwierdzamy, czego dotyczy temat, i ustalamy termin rozmowy, który ci pasuje.",
  },
  {
    title: "Rozmawiamy przez 30 minut",
    body: "Pytamy o to, jak dziś pracuje zespół, z jakich systemów korzystacie i co zabiera najwięcej czasu. Rozmowa odbywa się online.",
  },
  {
    title: "Wiesz, od czego zacząć",
    body: "Wskazujemy 1–2 obszary z najszybszym efektem i proponujemy kolejny krok, np. audyt albo pilotaż. Decyzja zawsze należy do ciebie.",
  },
];

const FAQ: GuideFaqItem[] = [
  {
    question: "Czy konsultacja jest płatna?",
    answer:
      "Nie. Pierwsza rozmowa trwa około 30 minut, jest bezpłatna i do niczego nie zobowiązuje. Jej celem jest sprawdzenie, czy i gdzie automatyzacja ma w twojej firmie sens.",
  },
  {
    question: "Czy muszę wiedzieć, co dokładnie chcę zautomatyzować?",
    answer:
      "Nie. Wystarczy, że wiesz, co w firmie zabiera za dużo czasu albo gdzie powstają błędy. Resztę ustalimy w rozmowie. Wiele firm przychodzi z ogólnym poczuciem, że „za dużo rzeczy robimy ręcznie”, i to w zupełności wystarczy.",
  },
  {
    question: "Czy pracujecie tylko z firmami z Wrocławia?",
    answer:
      "Nie. Siedziba spółki jest we Wrocławiu, ale pracujemy zdalnie i hybrydowo z firmami z całej Polski. Konsultacje, warsztaty i odbiory wdrożeń prowadzimy głównie online.",
  },
  {
    question: "Jak przygotować się do rozmowy?",
    answer:
      "Wystarczy krótka lista: z jakich systemów korzysta firma (np. CRM, program do faktur, arkusze), które zadania powtarzają się najczęściej i co najbardziej przeszkadza zespołowi. Nie przygotowujemy prezentacji i nie potrzebujemy dostępu do żadnych systemów.",
  },
  {
    question: "Z jakimi firmami pracujecie?",
    answer:
      "Najczęściej z małymi i średnimi firmami usługowymi, handlowymi i produkcyjnymi, które chcą odciążyć zespół z powtarzalnej pracy: obsługi zapytań, faktur, raportów, onboardingu czy porządkowania danych. Pracujemy też z firmami, które chcą rozsądnie wdrożyć AI.",
  },
  {
    question: "Co dzieje się z danymi z formularza?",
    answer:
      "Wykorzystujemy je wyłącznie do kontaktu w sprawie twojego zapytania. Szczegóły opisuje polityka prywatności. Na etapie rozmowy nie potrzebujemy żadnych danych twoich klientów ani dostępu do systemów firmy.",
  },
];

const BEFORE_CALL = [
  {
    slug: "5-procesow-do-automatyzacji-w-malej-firmie",
    label: "Co zautomatyzować w małej firmie?",
  },
  { slug: "audyt-procesow-w-firmie", label: "Jak wygląda audyt procesów" },
  {
    slug: "ile-kosztuje-automatyzacja-procesow",
    label: "Ile kosztuje automatyzacja procesów",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Kontakt i bezpłatna konsultacja | Automation Minds",
    description:
      "Umów bezpłatną, 30-minutową konsultację o automatyzacji procesów i AI. Oddzwaniamy w ciągu 1 dnia roboczego. Pracujemy z firmami z całej Polski.",
    path: "/kontakt",
    ogImage: HERO_IMAGE,
  });
}

export default async function ContactPage() {
  const settings = await getSettings();
  const services = getPublishedServices();
  const author = defaultGuideAuthor;
  const phoneHref = `tel:${settings.phone.replace(/\s/g, "")}`;
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Kontakt" },
  ];

  return (
    <SiteLayout>
      <JsonLd
        data={[
          ...contactPageJsonLd(settings, FAQ),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <section className="relative overflow-hidden bg-dark">
        <Image
          src={HERO_IMAGE}
          alt="Zespół rozmawiający przy stole w jasnym biurze"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/60"
          aria-hidden
        />
        <Container className="relative z-10 py-10 lg:py-16">
          <div className="[&_a]:text-white/80 [&_span]:text-white/90 [&_nav]:mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0">
            <div className="text-white lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:pt-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-light">
                Kontakt
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Umów bezpłatną konsultację o automatyzacji
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                Opowiedz nam, jak dziś pracuje twój zespół. W 30 minut
                wskażemy, co warto zautomatyzować najpierw, i powiemy wprost,
                czy to się opłaci.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-2xl sm:p-8 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1">
              <h2 className="text-xl font-bold text-dark sm:text-2xl">
                {CONSULTATION_OFFER.formTitle}
              </h2>
              <p className="mb-6 mt-2 text-sm text-muted">
                Pola oznaczone gwiazdką są wymagane. Drugi krok formularza jest
                opcjonalny.
              </p>
              <ContactFormStepsLazy
                sourcePage="/kontakt"
                redirectOnSuccess
                services={CONTACT_FORM_SERVICE_OPTIONS}
              />
            </div>
            <div className="text-white lg:col-span-6 lg:col-start-1 lg:row-start-2">
              <ul className="space-y-3 lg:mt-6">
                {CONSULTATION_OFFER.formHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand font-bold text-white"
                  aria-hidden
                >
                  {author.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <p className="text-sm leading-relaxed text-white/85">
                  Konsultację przeprowadzi{" "}
                  <strong className="font-semibold text-white">
                    {author.name}
                  </strong>
                  , {author.jobTitle}. W trakcie rozmowy podpowie, co jest
                  wykonalne, ile może potrwać i ile kosztować.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      <section aria-labelledby="inne-formy-kontaktu" className="border-b border-brand/10 py-10">
        <Container>
          <h2 id="inne-formy-kontaktu" className="sr-only">
            Inne formy kontaktu
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <a
                href={phoneHref}
                data-track-location="contact_page"
                className="group flex h-full items-start gap-4 rounded-2xl border border-brand/10 bg-white p-5 transition hover:border-brand/30 hover:shadow-md"
              >
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <span>
                  <span className="block text-sm text-muted">Wolisz zadzwonić?</span>
                  <span className="block text-lg font-semibold text-dark group-hover:text-brand">
                    {settings.phone}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${settings.email}`}
                className="group flex h-full items-start gap-4 rounded-2xl border border-brand/10 bg-white p-5 transition hover:border-brand/30 hover:shadow-md"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <span className="min-w-0">
                  <span className="block text-sm text-muted">Albo napisać?</span>
                  <span className="block break-words text-lg font-semibold text-dark group-hover:text-brand">
                    {settings.email}
                  </span>
                </span>
              </a>
            </li>
            <li className="sm:col-span-2 lg:col-span-1">
              <div className="flex h-full items-start gap-4 rounded-2xl border border-brand/10 bg-white p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                <span>
                  <span className="block text-sm text-muted">Siedziba we Wrocławiu</span>
                  <span className="block text-base font-semibold text-dark">
                    Pracujemy zdalnie z firmami z całej Polski
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </Container>
      </section>

      <section aria-labelledby="co-dalej" className="py-14 lg:py-20">
        <Container>
          <h2 id="co-dalej" className="text-2xl font-bold text-dark sm:text-3xl">
            Co się dzieje po wysłaniu formularza
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            Bez niespodzianek i bez nachalnej sprzedaży. Tak wygląda pierwszy
            kontakt z nami krok po kroku.
          </p>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-brand/10 bg-surface p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-semibold leading-snug text-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        aria-labelledby="tematy-rozmowy"
        className="border-y border-brand/10 bg-surface py-14 lg:py-20"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2
                id="tematy-rozmowy"
                className="text-2xl font-bold text-dark sm:text-3xl"
              >
                O czym możemy porozmawiać
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={servicePath(service.slug)}
                      className="group flex h-full items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium text-dark shadow-sm transition hover:text-brand"
                    >
                      {service.name}
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-brand/50 transition group-hover:text-brand"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold text-dark sm:text-3xl">
                Zanim zadzwonisz
              </h2>
              <p className="mt-2 text-muted">
                Jeśli chcesz się przygotować, te artykuły z Poradnika odpowiadają
                na najczęstsze pytania przed pierwszą rozmową.
              </p>
              <ul className="mt-6 space-y-3">
                {BEFORE_CALL.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={guideArticlePath(item.slug)}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-brand/10 bg-white px-4 py-3 text-sm font-medium text-dark transition hover:border-brand/30 hover:text-brand"
                    >
                      {item.label}
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-brand/50 transition group-hover:text-brand"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 [&>section]:mt-0">
              <ArticleFaq items={FAQ} />
            </div>
            <aside
              aria-labelledby="dane-firmy"
              className="h-fit rounded-2xl border border-brand/10 bg-white p-6 lg:col-span-4"
            >
              <h2
                id="dane-firmy"
                className="flex items-center gap-2 text-lg font-bold text-dark"
              >
                <Building2 className="h-5 w-5 text-brand" aria-hidden />
                Dane firmy
              </h2>
              <dl className="mt-4 space-y-2 text-sm">
                <div>
                  <dt className="sr-only">Nazwa</dt>
                  <dd className="font-semibold text-dark">{COMPANY.legalName}</dd>
                </div>
                <div>
                  <dt className="sr-only">Adres siedziby</dt>
                  <dd className="text-muted">{COMPANY_ADDRESS_LINE}</dd>
                </div>
                {[
                  ["NIP", COMPANY.nip],
                  ["KRS", COMPANY.krs],
                  ["REGON", COMPANY.regon],
                  ["Kapitał zakładowy", COMPANY.shareCapital],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <dt className="text-muted">{label}</dt>
                    <dd className="font-medium text-dark">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
