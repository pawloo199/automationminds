import { Reveal } from "@/components/about/Reveal";
import { SectionTitle } from "@/components/services/ServiceSections";
import { Container } from "@/components/ui/Container";
import type { IndustryPageContent } from "@/lib/industries";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
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

export type IndustryLinkItem = { href: string; name: string; excerpt: string };

/** Karty stron branżowych, np. w sekcjach „Zobacz też” usług, narzędzi i procesów. */
export function IndustryLinks({ items, title = "Dla branż" }: { items: IndustryLinkItem[]; title?: string }) {
  if (items.length === 0) return null;
  return (
    <>
      <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.2em] text-muted">{title}</h3>
      <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
              <span className="mt-2 text-sm leading-relaxed text-muted">{item.excerpt}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
