import { ContactFormStepsLazy } from "@/components/forms/ContactFormStepsLazy";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT_FORM_SERVICE_OPTIONS } from "@/lib/services/catalog";
import { Check } from "lucide-react";

export function ContactSection({
  subtitle,
  title,
  body,
  highlights = [],
  sourcePage = "/",
  redirectOnSuccess = false,
  sectionId = "kontakt",
}: {
  subtitle?: string;
  title: string;
  body?: string;
  highlights?: readonly string[];
  sourcePage?: string;
  redirectOnSuccess?: boolean;
  sectionId?: string;
}) {
  return (
    <section className="scroll-mt-24 py-20 lg:py-28" id={sectionId}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              subtitle={subtitle}
              title={title}
              body={body}
              align="left"
            />
            {highlights.length > 0 ? (
              <ul className="mt-6 max-w-2xl space-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-dark sm:text-base"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="rounded-2xl border border-brand/10 bg-white p-6 shadow-lg sm:p-8">
            <ContactFormStepsLazy
              sourcePage={sourcePage}
              redirectOnSuccess={redirectOnSuccess}
              services={CONTACT_FORM_SERVICE_OPTIONS}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
