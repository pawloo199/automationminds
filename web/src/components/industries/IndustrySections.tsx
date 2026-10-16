import { Reveal } from "@/components/about/Reveal";
import { SectionTitle } from "@/components/services/ServiceSections";
import { Container } from "@/components/ui/Container";
import type { IndustryPageContent } from "@/lib/industries";
import { ArrowUpRight, ChevronDown, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function IndustryIntro({ intro, eyebrow }: { intro: IndustryPageContent["intro"]; eyebrow: string }) {
  return (
    <section aria-labelledby="o-branzy" className="border-t border-brand/10 py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <SectionTitle id="o-branzy" eyebrow={eyebrow} title={intro.title} />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function IndustrySecurity({ security }: { security: NonNullable<IndustryPageContent["security"]> }) {
  return (
    <section id="bezpieczenstwo" aria-labelledby="bezpieczenstwo-tytul" className="scroll-mt-28 border-y border-brand/10 bg-surface py-20 lg:py-24">
      <Container>
        <SectionTitle id="bezpieczenstwo-tytul" eyebrow="Bezpieczeństwo" title={security.title} lead={security.lead} />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {security.items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={(index % 3) * 70} className="rounded-2xl border border-brand/10 bg-white p-6">
              <ShieldCheck className="h-6 w-6 text-brand" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export type IndustryLinkItem = { href: string; name: string; excerpt: string; industry?: string };

function IndustryCards({ items, spaced, showIndustry = false }: { items: IndustryLinkItem[]; spaced: boolean; showIndustry?: boolean }) {
  return (
    <ul className={spaced ? "mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3" : "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"}>
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="group flex h-full flex-col rounded-2xl border border-brand/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
          >
            <span className="flex items-start justify-between gap-3">
              <span className="text-lg font-semibold text-dark group-hover:text-brand">{item.name}</span>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-brand/50 group-hover:text-brand" aria-hidden />
            </span>
            {showIndustry && item.industry && item.industry !== item.name ? (
              <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand/80">{item.industry}</span>
            ) : null}
            <span className="mt-2 text-sm leading-relaxed text-muted">{item.excerpt}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Karty stron branżowych, np. w sekcjach „Zobacz też” usług, narzędzi i procesów.
 * Z `limit` pokazuje po jednej karcie z różnych branż, a resztę jako zwiniętą listę linków.
 */
export function IndustryLinks({ items, title, limit }: { items: IndustryLinkItem[]; title?: string; limit?: number }) {
  if (items.length === 0) return null;
  const heading = title ? <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-muted">{title}</h3> : null;

  if (!limit || items.length <= limit) {
    return (
      <>
        {heading}
        <IndustryCards items={items} spaced={Boolean(title)} />
      </>
    );
  }

  const seen = new Set<string>();
  const featured: IndustryLinkItem[] = [];
  for (const item of items) {
    const key = item.industry ?? item.href;
    if (featured.length < limit && !seen.has(key)) {
      seen.add(key);
      featured.push(item);
    }
  }
  for (const item of items) {
    if (featured.length >= limit) break;
    if (!featured.includes(item)) featured.push(item);
  }
  const rest = items.filter((item) => !featured.includes(item));
  const groups = new Map<string, IndustryLinkItem[]>();
  for (const item of rest) {
    const key = item.industry ?? "Inne";
    groups.set(key, [...(groups.get(key) ?? []), item]);
  }

  return (
    <>
      {heading}
      <IndustryCards items={featured} spaced={Boolean(title)} showIndustry />
      <details className="group mt-5 rounded-2xl border border-brand/10 bg-white">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-6 py-4 text-sm font-semibold text-brand [&::-webkit-details-marker]:hidden">
          Pozostałe strony branżowe ({rest.length})
          <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden />
        </summary>
        <div className="grid gap-6 border-t border-brand/10 px-6 py-5 sm:grid-cols-2 lg:grid-cols-3">
          {[...groups.entries()].map(([industry, links]) => (
            <div key={industry}>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">{industry}</p>
              <ul className="mt-2 space-y-1.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-dark transition hover:text-brand">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>
    </>
  );
}

/** Sekcja z podstronami rozwiązań na stronie głównej branży. */
export function IndustrySolutions({ items, title, lead }: { items: IndustryLinkItem[]; title: string; lead: string }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="rozwiazania-tytul" className="border-y border-brand/10 bg-surface py-20 lg:py-24">
      <Container>
        <SectionTitle id="rozwiazania-tytul" eyebrow="Rozwiązania" title={title} lead={lead} />
        <IndustryLinks items={items} />
      </Container>
    </section>
  );
}
