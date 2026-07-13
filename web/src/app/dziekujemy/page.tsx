import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Dziękujemy — Automation Minds",
  description: "Dziękujemy za przesłanie formularza kontaktowego.",
  path: "/dziekujemy",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <SiteLayout>
      <section className="flex min-h-[50vh] items-center py-24">
        <Container className="text-center">
          <h1 className="text-4xl font-bold text-dark">Dziękujemy!</h1>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Otrzymaliśmy Twoje zgłoszenie. Skontaktujemy się z Tobą telefonicznie
            w ciągu jednego dnia roboczego.
          </p>
          <div className="mt-8">
            <Button href="/">Wróć na stronę główną</Button>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
