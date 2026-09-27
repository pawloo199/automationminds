import { SiteLayout } from "@/components/layout/SiteLayout";
import { Container } from "@/components/ui/Container";
import { getSettings } from "@/lib/airtable";
import { buildMetadata, siteUrl } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = buildMetadata({
  title: "Polityka prywatności — Automation Minds",
  description:
    "Polityka prywatności serwisu Automation Minds — zasady przetwarzania danych osobowych, cookies i prawa użytkowników (RODO).",
  path: "/polityka-prywatnosci",
});

function PurposeBlock({
  title,
  purpose,
  basis,
}: {
  title: string;
  purpose: ReactNode;
  basis: ReactNode;
}) {
  return (
    <>
      <h3>{title}</h3>
      <div className="legal-meta">
        <p>
          <span className="legal-meta-label">Cel</span>
          <span>{purpose}</span>
        </p>
        <p>
          <span className="legal-meta-label">Podstawa</span>
          <span>{basis}</span>
        </p>
      </div>
    </>
  );
}

export default async function PrivacyPage() {
  const settings = await getSettings();
  const siteName = settings.siteName || "Automation Minds";
  const email = settings.email || "kontakt@automationminds.net";
  const phone = settings.phone || "";
  const address = settings.address || "Polska";
  const lastUpdated = "27 września 2026 r.";
  const host = siteUrl.replace(/^https?:\/\//, "");

  return (
    <SiteLayout>
      <section className="bg-gradient-to-b from-surface/80 to-white py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              Dokument prawny
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-[2.75rem]">
              Polityka prywatności
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Zasady przetwarzania danych osobowych oraz wykorzystywania plików
              cookies w serwisie {siteName}.
            </p>
            <p className="mt-4 inline-flex rounded-full border border-brand/15 bg-white px-3.5 py-1.5 text-xs font-medium text-muted shadow-sm">
              Ostatnia aktualizacja: {lastUpdated}
            </p>
          </div>

          <article className="legal-doc mx-auto mt-12 max-w-3xl sm:mt-14">
            <p>
              Niniejsza Polityka prywatności określa zasady przetwarzania danych
              osobowych oraz wykorzystywania plików cookies i podobnych
              technologii w serwisie internetowym {siteName} dostępnym pod
              adresem <a href={siteUrl}>{host}</a> („Serwis”).
            </p>
            <p>
              Dbamy o ochronę prywatności osób korzystających z Serwisu.
              Przetwarzamy dane osobowe zgodnie z Rozporządzeniem Parlamentu
              Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r.
              („RODO”), ustawą o ochronie danych osobowych oraz — w zakresie
              cookies i podobnych technologii — z przepisami ustawy Prawo
              telekomunikacyjne / ePrivacy, w brzmieniu obowiązującym.
            </p>

            <h2>1. Administrator danych</h2>
            <p>Administratorem danych osobowych jest:</p>
            <div className="legal-card">
              <p>
                <strong>{siteName}</strong>
              </p>
              <p>Adres korespondencyjny / siedziba: {address}</p>
              <p>
                E-mail: <a href={`mailto:${email}`}>{email}</a>
              </p>
              {phone ? <p>Telefon: {phone}</p> : null}
            </div>
            <p>
              W sprawach związanych z ochroną danych osobowych prosimy o kontakt
              na adres e-mail wskazany powyżej. Odpowiadamy bez zbędnej zwłoki,
              nie później niż w terminie miesiąca od otrzymania żądania — z
              możliwością przedłużenia zgodnie z art. 12 RODO.
            </p>

            <h2>2. Zakres stosowania</h2>
            <p>Polityka dotyczy danych osobowych przetwarzanych w związku z:</p>
            <ul>
              <li>
                korzystaniem z Serwisu (w tym podstron usług, kampanii i miast)
              </li>
              <li>
                wypełnianiem formularzy kontaktowych i umawianiem bezpłatnej
                konsultacji
              </li>
              <li>
                kontaktem telefonicznym lub e-mailowym zainicjowanym przez
                użytkownika
              </li>
              <li>
                pomiarem ruchu, analityką oraz — za zgodą — marketingiem i
                reklamą (w tym Google Ads / Google Tag Manager)
              </li>
              <li>
                zapewnieniem bezpieczeństwa i prawidłowego działania Serwisu
              </li>
            </ul>

            <h2>3. Jakie dane przetwarzamy</h2>
            <h3>3.1. Dane podawane w formularzach</h3>
            <p>
              W zależności od wariantu formularza możemy przetwarzać m.in.:
            </p>
            <ul>
              <li>imię i nazwisko</li>
              <li>adres e-mail</li>
              <li>numer telefonu</li>
              <li>nazwę firmy</li>
              <li>treść wiadomości / opis potrzeb</li>
              <li>
                opcjonalnie: liczbę pracowników, branżę, zainteresowanie
                usługami, dodatkowe uwagi
              </li>
              <li>
                informację o udzieleniu zgody na przetwarzanie danych w celu
                kontaktu
              </li>
            </ul>

            <h3>3.2. Dane techniczne i nawigacyjne</h3>
            <p>
              Przy korzystaniu z Serwisu automatycznie mogą być przetwarzane
              m.in.:
            </p>
            <ul>
              <li>adres IP</li>
              <li>data i czas żądania</li>
              <li>typ i wersja przeglądarki oraz systemu operacyjnego</li>
              <li>rozdzielczość ekranu / informacje o urządzeniu</li>
              <li>
                adres URL odwiedzanej strony oraz strona odsyłająca (referrer)
              </li>
              <li>identyfikatory plików cookies lub podobnych technologii</li>
            </ul>

            <h3>3.3. Dane marketingowe (UTM / kampanie)</h3>
            <p>
              Jeśli trafisz do Serwisu z kampanii reklamowej lub linku
              oznaczonego parametrami UTM, możemy zapisać m.in.:{" "}
              <em>utm_source</em>, <em>utm_medium</em>, <em>utm_campaign</em>,{" "}
              <em>utm_term</em>, <em>utm_content</em> oraz stronę źródłową
              formularza — w celu analizy skuteczności działań marketingowych i
              jakości zapytań.
            </p>

            <h2>4. Cele i podstawy prawne przetwarzania</h2>
            <p>Przetwarzamy dane w następujących celach:</p>

            <PurposeBlock
              title="4.1. Odpowiedź na zapytanie i działania przedumowne"
              purpose="Kontakt zwrotny, umówienie i przeprowadzenie bezpłatnej konsultacji, przygotowanie informacji o ofercie / wyceny."
              basis="Art. 6 ust. 1 lit. b RODO (działania na żądanie osoby, której dane dotyczą, przed zawarciem umowy) oraz — w zakresie niezbędnym — art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora polegający na obsłudze zapytań B2B)."
            />

            <PurposeBlock
              title="4.2. Zgoda na kontakt (jeśli wymagana w formularzu)"
              purpose="Potwierdzenie dobrowolnej zgody na przetwarzanie danych w celu nawiązania kontaktu."
              basis="Art. 6 ust. 1 lit. a RODO. Zgodę można wycofać w dowolnym momencie; wycofanie nie wpływa na zgodność z prawem przetwarzania przed jej wycofaniem."
            />

            <PurposeBlock
              title="4.3. Analityka i ulepszanie Serwisu"
              purpose="Pomiar ruchu, analiza sposobu korzystania z Serwisu, poprawa treści i użyteczności."
              basis="Art. 6 ust. 1 lit. a RODO (zgoda wyrażona poprzez baner cookies / Consent Mode) albo — wyłącznie w zakresie cookies niezbędnych i analogicznych technologii technicznych — art. 6 ust. 1 lit. f RODO."
            />

            <PurposeBlock
              title="4.4. Marketing i reklama (w tym remarketing)"
              purpose="Pomiar skuteczności kampanii, optymalizacja reklam, ewentualne wyświetlanie reklam dopasowanych do zainteresowań (np. poprzez Google Ads / Google Tag Manager), o ile wyrazisz na to zgodę."
              basis="Art. 6 ust. 1 lit. a RODO."
            />

            <PurposeBlock
              title="4.5. Bezpieczeństwo i dochodzenie roszczeń"
              purpose="Zapewnienie bezpieczeństwa Serwisu, zapobieganie nadużyciom, ustalenie, dochodzenie lub obrona roszczeń."
              basis="Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora)."
            />

            <PurposeBlock
              title="4.6. Obowiązki prawne"
              purpose="Wypełnienie obowiązków wynikających z przepisów prawa (np. podatkowych lub rachunkowych), jeżeli dojdzie do zawarcia umowy."
              basis="Art. 6 ust. 1 lit. c RODO."
            />

            <h2>5. Odbiorcy danych</h2>
            <p>
              Dane mogą być przekazywane zaufanym podmiotom przetwarzającym je w
              naszym imieniu na podstawie umów powierzenia (art. 28 RODO) lub —
              w określonych przypadkach — niezależnym administratorom, w
              szczególności:
            </p>
            <ul>
              <li>
                dostawcy hostingu i infrastruktury (m.in. Vercel Inc.) —
                utrzymanie Serwisu
              </li>
              <li>
                dostawcy narzędzi CRM / baz danych (m.in. Airtable) — obsługa
                zapytań z formularzy
              </li>
              <li>
                dostawcy analityki i reklamy (m.in. Google Ireland Limited /
                Google LLC — Google Tag Manager, Google Analytics, Google Ads) —
                wyłącznie w zakresie wynikającym z Twoich zgód cookies
              </li>
              <li>
                dostawcy poczty e-mail / komunikacji i narzędzi biurowych —
                kontakt z klientem
              </li>
              <li>
                podmioty świadczące usługi księgowe, prawne lub IT — w zakresie
                niezbędnym
              </li>
              <li>
                organy państwowe — wyłącznie gdy obowiązek wynika z przepisów
                prawa
              </li>
            </ul>
            <p>
              Nie sprzedajemy danych osobowych. Listę kategorii odbiorców
              aktualizujemy wraz ze zmianą narzędzi wykorzystywanych w Serwisie.
            </p>

            <h2>6. Przekazywanie danych poza EOG</h2>
            <p>
              Część dostawców (w szczególności z grupy Google oraz Vercel) może
              przetwarzać dane na terytorium państw spoza Europejskiego Obszaru
              Gospodarczego (EOG), w tym w Stanach Zjednoczonych. W takich
              przypadkach stosujemy mechanizmy przewidziane w RODO, w
              szczególności:
            </p>
            <ul>
              <li>
                decyzję stwierdzającą odpowiedni stopień ochrony (jeśli
                dotyczy), lub
              </li>
              <li>
                standardowe klauzule umowne (SCC) zatwierdzone przez Komisję
                Europejską oraz dodatkowe środki ochronne wymagane przez
                dostawcę / ocenę transferu
              </li>
            </ul>
            <p>
              Szczegóły transferów opisują także polityki prywatności
              poszczególnych dostawców.
            </p>

            <h2>7. Okres przechowywania danych</h2>
            <p>Dane przechowujemy nie dłużej, niż jest to niezbędne:</p>
            <ul>
              <li>
                <strong>Zapytania z formularzy / konsultacje</strong> — przez
                czas obsługi zapytania oraz do 24 miesięcy od ostatniego
                kontaktu (chyba że wcześniej wniesiesz skuteczny sprzeciw lub
                żądanie usunięcia, a nie zachodzą podstawy do dalszego
                przechowywania), a w razie zawarcia umowy — przez czas trwania
                umowy i okres przedawnienia roszczeń
              </li>
              <li>
                <strong>Dane księgowe / umowne</strong> — przez okres wymagany
                przepisami prawa (zazwyczaj do 5 lat podatkowych, o ile dotyczy)
              </li>
              <li>
                <strong>Dane analityczne i marketingowe z cookies</strong> —
                zgodnie z okresem ważności danej technologii oraz do czasu
                wycofania zgody lub jej wygaśnięcia; szczegóły kategorii cookies
                dostępne są w banerze zgód / panelu preferencji
              </li>
              <li>
                <strong>Logi techniczne bezpieczeństwa</strong> — przez okres
                uzasadniony celem (zwykle do 12 miesięcy), chyba że dłuższy
                okres jest potrzebny do wyjaśnienia incydentu
              </li>
            </ul>

            <h2>8. Prawa osób, których dane dotyczą</h2>
            <p>Przysługują Ci następujące prawa:</p>
            <ul>
              <li>dostęp do danych (art. 15 RODO)</li>
              <li>sprostowanie danych (art. 16 RODO)</li>
              <li>
                usunięcie danych — „prawo do bycia zapomnianym” (art. 17 RODO)
              </li>
              <li>ograniczenie przetwarzania (art. 18 RODO)</li>
              <li>przenoszenie danych (art. 20 RODO) — gdy ma zastosowanie</li>
              <li>
                sprzeciw wobec przetwarzania opartego na art. 6 ust. 1 lit. f
                RODO (art. 21 RODO)
              </li>
              <li>
                wycofanie zgody w dowolnym momencie (art. 7 ust. 3 RODO), gdy
                przetwarzanie odbywa się na podstawie zgody
              </li>
              <li>
                wniesienie skargi do Prezesa Urzędu Ochrony Danych Osobowych
                (ul. Stawki 2, 00-193 Warszawa,{" "}
                <a
                  href="https://uodo.gov.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uodo.gov.pl
                </a>
                )
              </li>
            </ul>
            <p>
              Aby skorzystać z praw, napisz na adres{" "}
              <a href={`mailto:${email}`}>{email}</a>. W celu weryfikacji
              tożsamości możemy poprosić o dodatkowe informacje.
            </p>

            <h2>9. Dobrowolność podania danych</h2>
            <p>
              Podanie danych w formularzu kontaktowym jest dobrowolne, jednak
              niezbędne do obsługi zapytania i umówienia konsultacji. Brak
              podania danych uniemożliwia kontakt zwrotny w sprawach, których
              dotyczy formularz.
            </p>
            <p>
              Korzystanie z Serwisu bez wyrażenia zgód marketingowych /
              analitycznych jest możliwe — wówczas ładujemy wyłącznie
              technologie niezbędne do działania strony (zgodnie z ustawieniami
              Consent Mode / banera zgód).
            </p>

            <h2>10. Pliki cookies i podobne technologie</h2>
            <h3>10.1. Czym są cookies</h3>
            <p>
              Cookies to niewielkie pliki tekstowe zapisywane na urządzeniu
              użytkownika. Wykorzystujemy także technologie pokrewne (np.
              localStorage, piksele, tagi w Google Tag Manager), łącznie zwane
              dalej „cookies”.
            </p>

            <h3>10.2. Rodzaje cookies</h3>
            <ul>
              <li>
                <strong>Niezbędne</strong> — wymagane do działania Serwisu,
                bezpieczeństwa i zapamiętania wyboru zgód
              </li>
              <li>
                <strong>Analityczne / statystyczne</strong> — pomagają zrozumieć,
                jak korzystasz z Serwisu (np. Google Analytics za pośrednictwem
                GTM)
              </li>
              <li>
                <strong>Marketingowe / reklamowe</strong> — służą pomiarowi
                kampanii i (opcjonalnie) personalizacji reklam (np. Google Ads)
              </li>
            </ul>

            <h3>10.3. Zarządzanie zgodami (Consent Mode)</h3>
            <p>
              Przy pierwszej wizycie (oraz przy ponownej zmianie preferencji)
              możesz zarządzać zgodami poprzez baner cookies. Stosujemy
              mechanizm zgodny z Google Consent Mode v2 — tagi Google
              dostosowują zakres działania do Twoich wyborów (m.in.{" "}
              <em>ad_storage</em>, <em>analytics_storage</em>,{" "}
              <em>ad_user_data</em>, <em>ad_personalization</em>).
            </p>
            <p>
              Zgodę możesz zmienić lub wycofać w dowolnym momencie poprzez
              panel preferencji cookies dostępny w Serwisie albo ustawienia
              przeglądarki. Ograniczenie cookies niezbędnych może wpłynąć na
              działanie niektórych funkcji strony.
            </p>

            <h3>10.4. Google Tag Manager i narzędzia Google</h3>
            <p>
              W Serwisie wdrożony jest Google Tag Manager (GTM), który może
              uruchamiać tagi analityczne i reklamowe zgodnie z Twoimi zgodami.
              Szczegóły przetwarzania przez Google opisuje polityka prywatności
              Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                policies.google.com/privacy
              </a>
              .
            </p>

            <h2>11. Profilowanie i zautomatyzowane decyzje</h2>
            <p>
              Nie podejmujemy wobec Ciebie decyzji wywołujących skutki prawne w
              sposób wyłącznie zautomatyzowany (art. 22 RODO). W zakresie
              marketingu — wyłącznie za zgodą — możemy korzystać z narzędzi
              reklamowych, które tworzą segmenty odbiorców lub mierzą konwersje
              (np. wysłanie formularza). Nie służy to scoringowi kredytowemu ani
              automatycznej odmowie świadczenia usług.
            </p>

            <h2>12. Bezpieczeństwo danych</h2>
            <p>
              Stosujemy środki techniczne i organizacyjne adekwatne do ryzyka,
              m.in. szyfrowanie połączeń (HTTPS), ograniczenie dostępu do danych
              do osób upoważnionych, powierzenie przetwarzania sprawdzonym
              dostawcom oraz minimalizację zakresu zbieranych danych.
            </p>
            <p>
              Żaden system nie gwarantuje pełnego bezpieczeństwa. W razie
              naruszenia ochrony danych mogących powodować wysokie ryzyko dla
              praw lub wolności powiadomimy Cię i właściwy organ zgodnie z
              obowiązującymi przepisami.
            </p>

            <h2>13. Linki zewnętrzne</h2>
            <p>
              Serwis może zawierać odnośniki do stron trzecich. Nie odpowiadamy
              za polityki prywatności ani praktyki tych serwisów. Zachęcamy do
              zapoznania się z ich dokumentami przed podaniem danych.
            </p>

            <h2>14. Dzieci</h2>
            <p>
              Serwis jest skierowany do przedsiębiorców i osób pełnoletnich
              działających w imieniu firm. Nie zbieramy świadomie danych dzieci.
              Jeżeli podejrzewasz, że dziecko przekazało nam dane, skontaktuj
              się z nami — niezwłocznie je usuniemy.
            </p>

            <h2>15. Zmiany Polityki prywatności</h2>
            <p>
              Polityka może być aktualizowana m.in. w razie zmiany przepisów,
              narzędzi lub zakresu przetwarzania. Nowa wersja obowiązuje od daty
              publikacji w Serwisie (wskazanej jako „Ostatnia aktualizacja”). W
              przypadku istotnych zmian możemy dodatkowo poinformować
              użytkowników w sposób widoczny w Serwisie.
            </p>

            <h2>16. Kontakt</h2>
            <p>W sprawach prywatności i ochrony danych osobowych:</p>
            <div className="legal-card">
              <p>
                E-mail: <a href={`mailto:${email}`}>{email}</a>
              </p>
              {phone ? <p>Telefon: {phone}</p> : null}
              <p>Adres: {address}</p>
            </div>
          </article>
        </Container>
      </section>
    </SiteLayout>
  );
}
