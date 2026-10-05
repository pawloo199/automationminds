import { Reveal } from "@/components/about/Reveal";
import { SectionTitle } from "@/components/services/ServiceSections";
import { Container } from "@/components/ui/Container";
import {
  getToolEntry,
  getToolGroup,
  toolHref,
  toolPath,
  toolSubpagePath,
  type ToolCatalogEntry,
  type ToolContent,
  type ToolSubpageContent,
} from "@/lib/tools";
import { ArrowRight, ArrowUpRight, Check, Minus, Zap } from "lucide-react";
import Link from "next/link";

export function ToolCard({ tool, headingLevel = "h3" }: { tool: ToolCatalogEntry; headingLevel?: "h2" | "h3" }) {
  const group = getToolGroup(tool.group);
  const Icon = group.icon;
  const Heading = headingLevel;
  return (
    <Link
      href={toolHref(tool)}
      className="group flex h-full flex-col rounded-2xl border border-brand/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
    >
      <span className="flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <ArrowUpRight className="h-4 w-4 text-brand/40 transition group-hover:text-brand" aria-hidden />
      </span>
      <Heading className="mt-5 text-xl font-bold text-dark group-hover:text-brand">{tool.name}</Heading>
      <p className="mt-2 text-sm leading-relaxed text-muted">{tool.summary}</p>
      {tool.externalHref ? (
        <span className="mt-auto pt-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand">
          Zobacz usługę
        </span>
      ) : null}
    </Link>
  );
}

export function ToolIntro({ content, related }: { content: ToolContent; related: ToolCatalogEntry[] }) {
  return (
    <section aria-labelledby="o-narzedziu" className="py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionTitle id="o-narzedziu" eyebrow="O narzędziu" title={content.intro.title} />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              {content.intro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-3xl bg-dark p-7 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">W skrócie</p>
              <ul className="mt-5 space-y-3">
                {content.hero.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-white/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" aria-hidden />
                    {bullet}
                  </li>
                ))}
              </ul>
              {related.length > 0 ? (
                <>
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                    Często łączymy z
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {related.map((tool) => (
                      <li key={tool.slug}>
                        <Link
                          href={toolHref(tool)}
                          className="inline-flex rounded-full border border-white/15 px-3.5 py-1.5 text-sm font-medium text-white/90 transition hover:border-brand-light hover:text-white"
                        >
                          {tool.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export function ToolFlows({ flows }: { flows: ToolContent["flows"] }) {
  return (
    <section aria-labelledby="przeplywy-tytul" className="border-b border-brand/10 bg-surface py-20 lg:py-28">
      <Container>
        <SectionTitle id="przeplywy-tytul" eyebrow="Przykładowe przepływy" title={flows.title} lead={flows.lead} />
        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {flows.items.map((flow, index) => (
            <Reveal as="li" key={flow.title} delay={index * 80} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm sm:p-7">
              <h3 className="text-lg font-semibold text-dark">{flow.title}</h3>
              <p className="mt-4 flex items-start gap-2 rounded-xl bg-brand/[0.06] px-4 py-3 text-sm font-medium text-dark">
                <Zap className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                {flow.trigger}
              </p>
              <ol className="mt-4 space-y-3 border-l-2 border-dashed border-brand/20 pl-5">
                {flow.steps.map((step, stepIndex) => (
                  <li key={step} className="relative text-sm leading-relaxed text-muted">
                    <span className="absolute -left-[1.95rem] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">
                      {stepIndex + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-auto flex items-start gap-2 border-t border-brand/10 pt-4 text-sm font-semibold leading-relaxed text-dark">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                {flow.result}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function ToolFit({ fit, name }: { fit: ToolContent["fit"]; name: string }) {
  return (
    <section aria-labelledby="dopasowanie-tytul" className="py-20 lg:py-28">
      <Container>
        <SectionTitle id="dopasowanie-tytul" eyebrow="Uczciwie" title={fit.title} />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-brand/15 bg-white p-7 sm:p-8">
            <h3 className="text-lg font-semibold text-dark">{name} sprawdzi się, gdy</h3>
            <ul className="mt-5 space-y-3">
              {fit.good.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-dark/85">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80} className="rounded-3xl bg-surface p-7 sm:p-8">
            <h3 className="text-lg font-semibold text-dark">Wybierzemy coś innego, gdy</h3>
            <ul className="mt-5 space-y-3">
              {fit.limits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-muted">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-muted">
                    <Minus className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function ToolComparison({ comparison }: { comparison: ToolContent["comparison"] }) {
  return (
    <section aria-labelledby="porownanie-tytul" className="border-y border-brand/10 bg-surface py-20 lg:py-28">
      <Container>
        <SectionTitle id="porownanie-tytul" eyebrow="Porównanie" title={comparison.title} lead={comparison.lead} />
        <Reveal className="mt-12 overflow-x-auto rounded-3xl border border-brand/10 bg-white shadow-xl shadow-brand/5">
          <table className="w-full min-w-[36rem] text-left">
            <caption className="sr-only">{comparison.title}</caption>
            <thead>
              <tr className="border-b border-brand/10">
                <th scope="col" className="w-1/4 px-5 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Kryterium
                </th>
                {comparison.columns.map((column, index) => (
                  <th
                    key={column}
                    scope="col"
                    className={
                      index === 0
                        ? "bg-brand/[0.06] px-5 py-4 text-sm font-bold text-brand"
                        : "px-5 py-4 text-sm font-bold text-dark"
                    }
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label} className="border-b border-brand/10 last:border-b-0">
                  <th scope="row" className="px-5 py-4 align-top text-sm font-semibold text-dark">
                    {row.label}
                  </th>
                  {row.values.map((value, index) => (
                    <td
                      key={`${row.label}-${index}`}
                      className={
                        index === 0
                          ? "bg-brand/[0.04] px-5 py-4 align-top text-sm leading-relaxed text-dark"
                          : "px-5 py-4 align-top text-sm leading-relaxed text-muted"
                      }
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        {comparison.note ? <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">{comparison.note}</p> : null}
      </Container>
    </section>
  );
}

export function ToolCosts({ costs }: { costs: ToolContent["costs"] }) {
  return (
    <section aria-labelledby="koszty-tytul" className="py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionTitle id="koszty-tytul" eyebrow="Koszty" title={costs.title} />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-8">
            {costs.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Karty podstron narzędzia, np. n8n self-hosted, na stronie narzędzia. */
export function ToolSubpageLinks({ toolName, pages }: { toolName: string; pages: ToolSubpageContent[] }) {
  if (pages.length === 0) return null;
  return (
    <section aria-labelledby="podstrony-tytul" className="border-y border-brand/10 bg-surface py-20 lg:py-24">
      <Container>
        <SectionTitle
          id="podstrony-tytul"
          eyebrow={`Więcej o ${toolName}`}
          title={`${toolName}: usługi i tematy szczegółowo`}
          lead={`Każdy z tych tematów opisujemy na osobnej stronie, z zakresem, wariantami i odpowiedziami na częste pytania.`}
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <li key={page.slug}>
              <Link
                href={toolSubpagePath(page.toolSlug, page.slug)}
                className="group flex h-full flex-col rounded-2xl border border-brand/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10"
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="text-lg font-semibold text-dark group-hover:text-brand">{page.name}</span>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-brand/50 group-hover:text-brand" aria-hidden />
                </span>
                <span className="mt-2 text-sm leading-relaxed text-muted">{page.excerpt}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Wstęp podstrony narzędzia: opis tematu i link powrotny do strony narzędzia. */
export function ToolSubpageIntro({ page, toolName }: { page: ToolSubpageContent; toolName: string }) {
  return (
    <section aria-labelledby="o-temacie" className="border-t border-brand/10 py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <SectionTitle id="o-temacie" eyebrow={toolName} title={page.intro.title} />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            {page.intro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {[page.toolSlug, ...(page.alsoForToolSlugs ?? [])].map((slug) => {
              const name = slug === page.toolSlug ? toolName : (getToolEntry(slug)?.name ?? slug);
              return (
                <Link
                  key={slug}
                  href={toolPath(slug)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-dark"
                >
                  Wszystko o wdrożeniach {name}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
