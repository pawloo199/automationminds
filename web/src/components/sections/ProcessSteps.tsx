import { Container } from "@/components/ui/Container";
import type { ProcessStep } from "@/lib/airtable.types";

export function ProcessSteps({
  subtitle,
  title,
  steps,
}: {
  subtitle?: string;
  title: string;
  steps: ProcessStep[];
}) {
  return (
    <section className="bg-dark py-20 text-white lg:py-28">
      <Container>
        <div className="mb-12 text-center">
          {subtitle ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-light">
              {subtitle}
            </p>
          ) : null}
          <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <span className="text-4xl font-bold text-brand-light/60">
                {String(step.stepNumber).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
