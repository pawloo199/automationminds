import { ContactFormLazy } from "@/components/forms/ContactFormLazy";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageBanner } from "@/components/sections/PageBanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { getPageSection, getSettings } from "@/lib/airtable";
import { breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { sanitizeSimpleHtml } from "@/lib/sanitize";
import Image from "next/image";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const banner = await getPageSection("kontakt", "banner");

  return buildMetadata({
    title: banner?.metaTitle || "Kontakt — Automation Minds",
    description:
      banner?.metaDescription ||
      "Skontaktuj się z Automation Minds i umów bezpłatną konsultację.",
    path: "/kontakt",
  });
}

export default async function ContactPage() {
  const [banner, sidebar, formHeader, settings] = await Promise.all([
    getPageSection("kontakt", "banner"),
    getPageSection("kontakt", "contact-sidebar"),
    getPageSection("kontakt", "contact-form"),
    getSettings(),
  ]);

  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Kontakt" },
  ];

  const sidebarBody = sidebar?.body
    ? sanitizeSimpleHtml(sidebar.body)
    : `<p>Telefon: ${settings.phone}</p><p>E-mail: ${settings.email}</p><p>${settings.address}</p>`;

  return (
    <SiteLayout>
      <JsonLd
        data={[localBusinessJsonLd(settings), breadcrumbJsonLd(breadcrumbs)]}
      />
      {banner ? (
        <PageBanner title={banner.title} imageUrl={banner.imageUrl} />
      ) : null}
      <section className="py-20">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-0 overflow-hidden rounded-2xl shadow-xl lg:grid-cols-12">
            {sidebar?.imageUrl ? (
              <div className="relative min-h-[300px] lg:col-span-3">
                <Image
                  src={sidebar.imageUrl}
                  alt={sidebar.imageAlt || "Kontakt"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
            ) : null}
            <div className="bg-brand p-8 text-white lg:col-span-4">
              <h2 className="text-2xl font-bold">
                {sidebar?.title || settings.siteName}
              </h2>
              <div
                className="prose prose-invert mt-4 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: sidebarBody }}
              />
            </div>
            <div className="bg-white p-8 lg:col-span-5">
              {formHeader ? (
                <h2 className="mb-6 text-2xl font-bold text-dark">
                  {formHeader.title}
                </h2>
              ) : null}
              <ContactFormLazy sourcePage="/kontakt" />
            </div>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
