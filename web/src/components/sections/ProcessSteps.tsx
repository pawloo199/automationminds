import { Container } from "@/components/ui/Container";
import type { ProcessStep } from "@/lib/airtable.types";
import { cn } from "@/lib/cn";

export function ProcessSteps({
  subtitle,
  title,
  steps,
}: {
  subtitle?: string;
  title: string;
  steps: ProcessStep[];
}) {
  const summary =
    steps.length > 0
      ? `${steps.length} kroków — od diagnozy do wdrożenia.`
      : undefined;

  return (
    <section className="relative overflow-hidden bg-dark py-20 text-white lg:py-28">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/85 to-dark/60" />
        <div className="absolute -left-40 top-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute -right-56 bottom-[-20%] h-[34rem] w-[34rem] rounded-full bg-brand-light/18 blur-3xl" />
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:4.5rem_4.5rem] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]" />
      </div>

      <Container className="relative">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          {subtitle ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-light sm:text-sm">
              {subtitle}
            </p>
          ) : null}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {summary ? (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              {summary}
            </p>
          ) : null}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6",
                "transition-transform duration-300 will-change-transform hover:-translate-y-1",
              )}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(109,81,253,0.22),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(139,116,255,0.16),transparent_55%)]" />
              </div>

              <div className="relative flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
                  Krok {String(step.stepNumber).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-white/10" aria-hidden />
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-light/90">
                  {String(step.stepNumber).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative mt-5 text-lg font-semibold tracking-tight sm:text-xl">
                {step.title}
              </h3>

              <p className="relative mt-2 text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
