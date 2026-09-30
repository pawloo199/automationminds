import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cityPath, type CityPageContent } from "@/lib/city-pages/types";
import { resolvePublishedService, servicePath } from "@/lib/services/catalog";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";

export function CityPageBody({
  city,
  nearbyNames,
}: {
  city: CityPageContent;
  nearbyNames: { slug: string; name: string }[];
}) {
  return (
    <>
      <section className="py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              {city.voivodeship}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-dark">
              Automatyzacja procesów dla firm z {city.nameGenitive}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {city.introParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <SectionHeading
            subtitle="Lokalny kontekst"
            title={`Rynek i wyzwania w ${city.nameLocative}`}
            className="mb-8"
          />
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted">
            {city.localContext}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted">
            {city.whyHere}
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            subtitle="Branże"
            title="Gdzie automatyzacja daje największy efekt"
            className="mb-10"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {city.focusIndustries.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-brand/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <SectionHeading
            subtitle="Procesy"
            title="Co najczęściej porządkujemy"
            className="mb-10"
          />
          <div className="grid gap-6 md:grid-cols-2">
            {city.focusProcesses.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-brand/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              subtitle="Współpraca"
              title={`Jak pracujemy z firmami z ${city.nameGenitive}`}
              align="left"
              className="mb-6"
            />
            <p className="text-base leading-relaxed text-muted">{city.howWeWork}</p>
          </div>
        </Container>
      </section>

      {city.relatedServiceSlugs.length > 0 ? (
        <section className="bg-surface py-16 lg:py-20">
          <Container>
            <SectionHeading
              subtitle="Usługi"
              title="Powiązane obszary wsparcia"
              className="mb-10"
            />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {city.relatedServiceSlugs
                .map((slug) => resolvePublishedService(slug))
                .filter((service) => service !== undefined)
                .map((service) => (
                <li key={service.slug}>
                  <Link
                    href={servicePath(service.slug)}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-brand/10 bg-white px-5 py-4 text-sm font-medium text-dark shadow-sm transition hover:border-brand/30 hover:text-brand"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-brand/50 transition group-hover:text-brand" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {nearbyNames.length > 0 ? (
        <section className="py-16 lg:py-20">
          <Container>
            <SectionHeading
              subtitle="Region"
              title="Automatyzacja w pobliskich miastach"
              className="mb-8"
            />
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {nearbyNames.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={cityPath(item.slug)}
                    className="group flex items-center gap-2 rounded-xl border border-brand/10 bg-white px-4 py-3 text-sm font-medium text-dark transition hover:border-brand/30 hover:text-brand"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-brand/50" />
                    <span className="truncate">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 text-center">
              <Button
                href="/kontakt"
                variant="secondary"
                data-track="consultation"
                data-track-method="link"
                data-track-location="city_page"
              >
                Porozmawiaj o automatyzacji w Twojej firmie
              </Button>
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
