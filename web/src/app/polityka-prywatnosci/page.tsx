import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { getSettings } from "@/lib/airtable";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Polityka prywatności — Automation Minds",
  description: "Polityka prywatności serwisu Automation Minds — RODO.",
  path: "/polityka-prywatnosci",
});

export default async function PrivacyPage() {
  const settings = await getSettings();

  return (
    <SiteLayout>
      <section className="py-24">
        <Container>
          <h1 className="text-4xl font-bold text-dark">Polityka prywatności</h1>
          <div className="prose prose-neutral mt-8 max-w-3xl">
            <p>
              Niniejsza polityka prywatności opisuje zasady przetwarzania danych
              osobowych użytkowników serwisu {settings.siteName} dostępnego pod
              adresem wskazanym w stopce strony.
            </p>
            <h2>Administrator danych</h2>
            <p>
              Administratorem danych osobowych jest {settings.siteName}. Kontakt
              z administratorem: {settings.email}, tel. {settings.phone},{" "}
              {settings.address}.
            </p>
            <h2>Cele i podstawy przetwarzania</h2>
            <p>
              Dane podane w formularzu kontaktowym przetwarzamy w celu
              nawiązania kontaktu, udzielenia odpowiedzi na zapytania oraz
              przygotowania oferty — na podstawie art. 6 ust. 1 lit. b RODO
              (działania przed zawarciem umowy) oraz art. 6 ust. 1 lit. f RODO
              (prawnie uzasadniony interes administratora).
            </p>
            <h2>Okres przechowywania</h2>
            <p>
              Dane przechowujemy przez czas niezbędny do realizacji kontaktu i
              ewentualnego zawarcia umowy, a następnie przez okres wymagany
              przepisami prawa lub do momentu wniesienia skutecznego sprzeciwu.
            </p>
            <h2>Prawa osoby, której dane dotyczą</h2>
            <p>
              Przysługuje Ci prawo dostępu do danych, ich sprostowania,
              usunięcia, ograniczenia przetwarzania, przenoszenia danych oraz
              wniesienia sprzeciwu. Masz także prawo wniesienia skargi do
              Prezesa Urzędu Ochrony Danych Osobowych.
            </p>
            <h2>Pliki cookies i analityka</h2>
            <p>
              Serwis może wykorzystywać pliki cookies oraz narzędzia analityczne
              (np. Google Analytics) w celu pomiaru ruchu i optymalizacji
              kampanii marketingowych. Możesz zarządzać cookies w ustawieniach
              przeglądarki.
            </p>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
}
