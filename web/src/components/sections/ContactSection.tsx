import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactFormLazy } from "../forms/ContactFormLazy";

export function ContactSection({
  subtitle,
  title,
  body,
  sourcePage = "/",
  redirectOnSuccess = false,
  sectionId = "kontakt",
}: {
  subtitle?: string;
  title: string;
  body?: string;
  sourcePage?: string;
  redirectOnSuccess?: boolean;
  sectionId?: string;
}) {
  return (
    <section className="py-20 lg:py-28" id={sectionId}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            subtitle={subtitle}
            title={title}
            body={body}
            align="left"
          />
          <div className="rounded-2xl border border-brand/10 bg-white p-8 shadow-lg">
            <ContactFormLazy
              sourcePage={sourcePage}
              redirectOnSuccess={redirectOnSuccess}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
