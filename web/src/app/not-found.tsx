import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getSettings } from "@/lib/airtable";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Nie znaleziono strony — Automation Minds",
  description: "Strona nie została znaleziona.",
  noIndex: true,
});

export default async function NotFound() {
  const settings = await getSettings();

  return (
    <SiteLayout>
      <section className="flex min-h-[60vh] items-center py-24">
        <Container className="text-center">
          <h1 className="text-5xl font-bold text-dark">404</h1>
          <p className="mt-4 text-muted">Nie znaleziono strony.</p>
          <div className="mt-8">
            <Button href="/">Wróć na stronę główną</Button>
          </div>
          <p className="mt-4">
            <Link href="/kontakt" className="text-brand underline">
              Skontaktuj się z nami
            </Link>
            {settings.phone ? (
              <span className="mt-2 block text-sm text-muted">
                Tel: {settings.phone}
              </span>
            ) : null}
          </p>
        </Container>
      </section>
    </SiteLayout>
  );
}
