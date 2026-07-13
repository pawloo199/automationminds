import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Polityka prywatności — Automation Minds",
  description: "Polityka prywatności serwisu Automation Minds.",
  path: "/polityka-prywatnosci",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="py-24">
        <Container>
          <h1 className="text-4xl font-bold text-dark">Polityka prywatności</h1>
          <div className="prose prose-neutral mt-8 max-w-3xl">
            <p>
              Administratorem danych osobowych jest Automation Minds. Dane
              podane w formularzu kontaktowym przetwarzane są w celu
              nawiązania kontaktu i udzielenia odpowiedzi na zapytania.
            </p>
            <p>
              Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia
              lub ograniczenia przetwarzania, a także prawo wniesienia skargi
              do organu nadzorczego.
            </p>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
