import { Reveal } from "@/components/about/Reveal";
import { SectionTitle } from "@/components/services/ServiceSections";
import { Container } from "@/components/ui/Container";
import type { ProcessContent } from "@/lib/processes";
import { cn } from "@/lib/cn";
import { AlertTriangle, Bot, Check, ClipboardCheck, ShieldCheck, User } from "lucide-react";

export function ProcessIntro({ content }: { content: ProcessContent }) {
  return (
    <section aria-labelledby="sygnaly-tytul" className="py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionTitle id="sygnaly-tytul" eyebrow="Czy to wasz przypadek" title={content.symptoms.title} lead={content.symptoms.lead} />
            <ul className="mt-8 space-y-3">
              {content.symptoms.items.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-brand/10 bg-white px-5 py-4 text-base leading-relaxed text-dark/85">
                  <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-3xl bg-dark p-7 text-white sm:p-8 lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">W skrócie</p>
              <dl className="mt-6 space-y-5">
                {content.summary.map((fact) => (
                  <div key={fact.label} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{fact.label}</dt>
                    <dd className="mt-1.5 text-base font-semibold leading-snug text-white">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export function ProcessFlow({ flow }: { flow: ProcessContent["flow"] }) {
  return (
    <section id="mapa-procesu" aria-labelledby="mapa-tytul" className="relative scroll-mt-28 overflow-hidden bg-dark py-20 text-white lg:py-28">
      <div className="about-grid-bg absolute inset-0" aria-hidden />
      <Container className="relative">
        <SectionTitle id="mapa-tytul" eyebrow="Mapa procesu" title={flow.title} lead={flow.lead} tone="dark" />
        <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1.5"><Bot className="h-3.5 w-3.5" aria-hidden />Automatycznie</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1.5"><User className="h-3.5 w-3.5" aria-hidden />Decyzja człowieka</span>
        </div>
        <ol className="relative mt-12 space-y-4 before:absolute before:bottom-6 before:left-5 before:top-6 before:w-px before:bg-white/15 sm:before:left-6">
          {flow.steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={(index % 4) * 60} className="relative flex gap-4 sm:gap-6">
              <span
                className={cn(
                  "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold sm:h-12 sm:w-12",
                  step.automated ? "bg-brand text-white" : "border border-white/30 bg-dark text-white",
                )}
              >
                {index + 1}
              </span>
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]",
                      step.automated ? "bg-brand/25 text-brand-light" : "bg-white/10 text-white/80",
                    )}
                  >
                    {step.automated ? <Bot className="h-3 w-3" aria-hidden /> : <User className="h-3 w-3" aria-hidden />}
                    {step.actor}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">{step.body}</p>
                {step.tool ? <p className="mt-3 text-xs font-medium text-white/45">Narzędzia: {step.tool}</p> : null}
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function ProcessOutcomes({ outcomes }: { outcomes: ProcessContent["outcomes"] }) {
  return (
    <section aria-labelledby="efekty-tytul" className="border-y border-brand/10 bg-surface py-20 lg:py-24">
      <Container>
        <SectionTitle id="efekty-tytul" eyebrow="Efekt" title={outcomes.title} />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.items.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 60} className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
                <Check className="h-4 w-4" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function ProcessImplementation({ implementation }: { implementation: ProcessContent["implementation"] }) {
  return (
    <section id="wdrozenie" aria-labelledby="wdrozenie-tytul" className="scroll-mt-28 py-20 lg:py-28">
      <Container>
        <SectionTitle id="wdrozenie-tytul" eyebrow="Wdrożenie" title={implementation.title} lead={implementation.lead} />
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {implementation.phases.map((phase, index) => (
            <Reveal as="li" key={phase.title} delay={index * 70} className="flex flex-col rounded-3xl border border-brand/10 bg-white p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">{index + 1}</span>
                <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted">{phase.duration}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-dark">{phase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{phase.body}</p>
              <p className="mt-auto pt-5">
                <span className="block rounded-xl bg-brand/[0.06] p-4 text-sm leading-relaxed text-dark">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-brand">Od was</span>
                  {phase.fromYou}
                </span>
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function ProcessPrerequisites({ prerequisites }: { prerequisites: ProcessContent["prerequisites"] }) {
  return (
    <section id="przygotowanie" aria-labelledby="przygotowanie-tytul" className="scroll-mt-28 border-y border-brand/10 bg-surface py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionTitle id="przygotowanie-tytul" eyebrow="Checklista" title={prerequisites.title} lead={prerequisites.lead} />
          </div>
          <ul className="space-y-3 lg:col-span-7">
            {prerequisites.items.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 text-base leading-relaxed text-dark/85 shadow-sm">
                <span className="mt-1 h-4 w-4 shrink-0 rounded border-2 border-brand/40" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function ProcessVariants({ variants }: { variants: ProcessContent["variants"] }) {
  return (
    <section aria-labelledby="warianty-tytul" className="py-20 lg:py-28">
      <Container>
        <SectionTitle id="warianty-tytul" eyebrow="Zakres" title={variants.title} lead={variants.lead} />
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {variants.items.map((variant, index) => (
            <Reveal
              as="li"
              key={variant.name}
              delay={index * 80}
              className={cn(
                "flex flex-col rounded-3xl p-7",
                index === 1 ? "bg-dark text-white shadow-xl shadow-brand/20" : "border border-brand/10 bg-white",
              )}
            >
              <h3 className={cn("text-xl font-bold", index === 1 ? "text-white" : "text-dark")}>{variant.name}</h3>
              <p className={cn("mt-2 text-sm leading-relaxed", index === 1 ? "text-white/70" : "text-muted")}>{variant.description}</p>
              <ul className="mt-6 space-y-2.5">
                {variant.includes.map((item) => (
                  <li key={item} className={cn("flex items-start gap-2.5 text-sm leading-relaxed", index === 1 ? "text-white/90" : "text-dark/85")}>
                    <Check className={cn("mt-0.5 h-4 w-4 shrink-0", index === 1 ? "text-brand-light" : "text-brand")} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function ProcessCostsAndRisks({ content }: { content: ProcessContent }) {
  return (
    <section aria-labelledby="koszty-tytul" className="border-t border-brand/10 py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle id="koszty-tytul" eyebrow="Koszty" title={content.costFactors.title} lead={content.costFactors.lead} />
            <ul className="mt-6 space-y-2.5">
              {content.costFactors.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-dark/85">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle id="ryzyka-tytul" eyebrow="Ryzyka" title={content.risks.title} />
            <ul className="mt-6 space-y-3">
              {content.risks.items.map((item) => (
                <li key={item.risk} className="rounded-2xl border border-brand/10 bg-white p-5">
                  <p className="flex items-start gap-2.5 text-sm font-semibold text-dark">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden />
                    {item.risk}
                  </p>
                  <p className="mt-2 flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                    {item.mitigation}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
