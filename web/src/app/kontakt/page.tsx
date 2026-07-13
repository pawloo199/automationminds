import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageBanner } from "@/components/sections/PageBanner";
import { Container } from "@/components/ui/Container";
import { getMockPageSection } from "@/lib/airtable-mock";
import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  title: "Kontakt — Automation Minds",
  description: "Skontaktuj się z Automation Minds i umów bezpłatną konsultację.",
  path: "/kontakt",
});

export default function ContactPage() {
  const banner = getMockPageSection("kontakt", "banner");
  const sidebar = getMockPageSection("kontakt", "contact-sidebar");
  const formHeader = getMockPageSection("kontakt", "contact-form");

  return (
    <SiteLayout>
      {banner ? (
        <PageBanner title={banner.title} imageUrl={banner.imageUrl} />
      ) : null}
      <section className="py-20">
        <Container>
          <div className="grid gap-0 overflow-hidden rounded-2xl shadow-xl lg:grid-cols-12">
            {sidebar?.imageUrl ? (
              <div className="relative min-h-[300px] lg:col-span-3">
                <Image
                  src={sidebar.imageUrl}
                  alt="Kontakt"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
            ) : null}
            {sidebar ? (
              <div className="bg-brand p-8 text-white lg:col-span-4">
                <h2 className="text-2xl font-bold">{sidebar.title}</h2>
                <div
                  className="prose prose-invert mt-4 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: sidebar.body }}
                />
              </div>
            ) : null}
            <div className="bg-white p-8 lg:col-span-5">
              {formHeader ? (
                <h2 className="mb-6 text-2xl font-bold text-dark">
                  {formHeader.title}
                </h2>
              ) : null}
              <ContactForm sourcePage="/kontakt" />
            </div>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
