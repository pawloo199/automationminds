import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "../forms/ContactForm";

export function ContactSection({
  subtitle,
  title,
  body,
  sourcePage = "/",
}: {
  subtitle?: string;
  title: string;
  body?: string;
  sourcePage?: string;
}) {
  return (
    <section className="py-20 lg:py-28" id="kontakt">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            subtitle={subtitle}
            title={title}
            body={body}
            align="left"
          />
          <div className="rounded-2xl border border-brand/10 bg-white p-8 shadow-lg">
            <ContactForm sourcePage={sourcePage} />
          </div>
        </div>
      </Container>
    </section>
  );
}
