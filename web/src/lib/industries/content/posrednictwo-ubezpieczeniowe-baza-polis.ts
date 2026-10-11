import type { IndustryPageContent } from "../types";

export const posrednictwoUbezpieczenioweBazaPolis: IndustryPageContent = {
  industrySlug: "posrednictwo-ubezpieczeniowe",
  subSlug: "baza-polis",
  name: "Baza polis i klientów",
  excerpt: "Polisy z wielu towarzystw w jednej bazie, z klientem, terminami i historią, jako podstawa odnowień, prowizji, raportów i obsługi klientów.",
  metaTitle: "Baza polis i klientów agencji ubezpieczeniowej",
  metaDescription:
    "Budujemy bazę polis i klientów agencji: polisy z wielu towarzystw w jednym miejscu, terminy, historia klienta, uprawnienia agentów i raporty portfela.",
  primaryKeyword: "baza polis agencji ubezpieczeniowej",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Pośrednictwo ubezpieczeniowe: baza polis",
    title: "Wszystkie polisy i klienci agencji w jednym miejscu",
    lead: "Polisy są w portalach kilkunastu towarzystw, w zestawieniach, w skrzynkach agentów i w arkuszach. Gdy klient dzwoni, agent sprawdza kilka miejsc, żeby zobaczyć, co klient ma. Gdy agent odchodzi, część wiedzy o klientach odchodzi z nim. Budujemy bazę polis i klientów agencji: jedno miejsce, z którego korzystają odnowienia, prowizje, dokumenty i raporty.",
    bullets: [
      "Polisy z wielu towarzystw w jednej bazie",
      "Klient z pełną historią polis i kontaktów",
      "Raporty portfela dla właściciela",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje ubezpieczeniowe, multiagencje i brokerzy" },
    { label: "Co automatyzujemy", value: "Baza polis, import, klienci, uprawnienia, raporty portfela" },
    { label: "Narzędzia", value: "Airtable lub CRM, importy z towarzystw, model AI, n8n" },
    { label: "Zasada", value: "Dane należą do agencji i są pod jej kontrolą" },
  ],
  symptoms: {
    title: "Kiedy warto zbudować bazę polis",
    lead: "Jeśli te sytuacje są wam znane, agencja nie ma pełnego obrazu swojego portfela.",
    items: [
      "Żeby zobaczyć polisy klienta, trzeba sprawdzić kilka portali towarzystw.",
      "Dane klientów są w telefonach i skrzynkach agentów.",
      "Ten sam klient jest zapisany kilka razy.",
      "Nie wiadomo, ilu klientów ma tylko jedną polisę.",
      "Po odejściu agenta trudno przejąć jego klientów.",
      "Raport portfela wymaga składania danych z wielu plików.",
    ],
  },
  intro: {
    title: "Jak budujemy bazę polis",
    paragraphs: [
      "Zaczynamy od struktury: klient, polisa, towarzystwo, rodzaj ubezpieczenia, okres ochrony, składka, agent prowadzący. Klient może mieć wiele polis, a polisa wiele dokumentów. Strukturę dopasowujemy do sposobu pracy agencji, a bazę budujemy w CRM, jeśli to możliwe, albo w elastycznym narzędziu, takim jak Airtable.",
      "Dane trafiają do bazy z importu zestawień, z systemu agencyjnego i z polis odczytanych przez AI. System łączy duplikaty klientów i wskazuje polisy z niekompletnymi danymi. Nowe polisy dopisuje agent przez prosty formularz albo trafiają do bazy automatycznie z zestawień.",
      "Każdy agent widzi swoich klientów, właściciel agencji cały portfel. Na bazie działają kolejne automatyzacje: odnowienia, prowizje, dokumenty, przypomnienia o ratach. Raport portfela pokazuje polisy według towarzystw, produktów i agentów, a także klientów, którym warto zaproponować kolejne ubezpieczenie.",
    ],
  },
  scope: {
    title: "Co obejmuje budowa bazy",
    lead: "Zakres dopasowujemy do wielkości portfela i narzędzi agencji.",
    items: [
      { title: "Struktura danych", body: "Klienci, polisy, towarzystwa, produkty i agenci." },
      { title: "Import zestawień", body: "Polisy z plików towarzystw w jednym formacie." },
      { title: "Odczyt polis z AI", body: "Dane z polis w PDF do sprawdzenia przez agenta." },
      { title: "Łączenie duplikatów", body: "Jeden klient, jeden rekord." },
      { title: "Kontrola kompletności", body: "Polisy bez dat, agenta lub składki wskazane do uzupełnienia." },
      { title: "Uprawnienia", body: "Agent widzi swoich klientów, właściciel całość." },
      { title: "Przejęcie klientów", body: "Klienci odchodzącego agenta przypisani do innego." },
      { title: "Raporty portfela", body: "Polisy według towarzystw, produktów i agentów." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od danych rozproszonych do jednej bazy.",
    items: [
      {
        title: "Nowa polisa",
        trigger: "Agent wystawia polisę w systemie towarzystwa",
        steps: ["Polisa z zestawienia lub formularza w bazie", "Połączenie z klientem i agentem", "Termin odnowienia w kalendarzu"],
        result: "Polisa od razu w bazie, z terminem odnowienia.",
      },
      {
        title: "Klient z polisą z innej agencji",
        trigger: "Klient przynosi polisę w PDF",
        steps: ["Odczyt danych z AI", "Sprawdzenie przez agenta", "Polisa w bazie z terminem końca"],
        result: "Agent wie, kiedy zaproponować ofertę.",
      },
    ],
  },
  example: {
    title: "Portfel przed i po zbudowaniu bazy",
    lead: "Przykład multiagencji z kilkoma agentami i kilkunastoma towarzystwami.",
    rows: [
      { label: "Polisy klienta", before: "W kilku portalach.", after: "W jednym miejscu." },
      { label: "Duplikaty", before: "Ten sam klient kilka razy.", after: "Jeden rekord." },
      { label: "Odejście agenta", before: "Utrata wiedzy o klientach.", after: "Przejęcie z pełną historią." },
      { label: "Raport portfela", before: "Składany ręcznie.", after: "Na bieżąco." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Najwięcej pracy wymaga zebranie i oczyszczenie danych.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, gdzie są dane o polisach i klientach i w jakim są stanie.", fromYou: "Dostęp do zestawień i eksportów." },
      { title: "Struktura i import", duration: "2–3 tygodnie", body: "Projektujemy bazę, importujemy dane, łączymy duplikaty.", fromYou: "Weryfikacja próbki danych." },
      { title: "Uzupełnienie i test", duration: "zwykle 2–3 tygodnie", body: "Uzupełniamy braki, ustawiamy uprawnienia i testujemy codzienną pracę.", fromYou: "Agenci sprawdzający swoje portfele." },
      { title: "Start i opieka", duration: "stale", body: "Pilnujemy aktualności importów i rozwijamy raporty.", fromYou: "Informacja o nowych towarzystwach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od samej bazy, a automatyzacje dokładać później.",
    items: [
      { name: "Baza polis", description: "Dla agencji, które chcą mieć portfel w jednym miejscu.", includes: ["Struktura danych", "Import zestawień", "Łączenie duplikatów", "Uprawnienia"] },
      { name: "Baza z AI", description: "Dla agencji z wieloma polisami w PDF.", includes: ["Wszystko z wariantu Baza polis", "Odczyt polis z AI", "Kontrola kompletności", "Formularz nowej polisy"] },
      { name: "Baza i automatyzacje", description: "Dla agencji, które chcą od razu korzystać z bazy.", includes: ["Wszystko z wariantu Baza z AI", "Odnowienia", "Porównanie z prowizjami", "Raporty portfela"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba polis i klientów,",
      "liczba źródeł danych i ich format,",
      "stan danych i liczba duplikatów,",
      "wybór narzędzia na bazę,",
      "zakres automatyzacji opartych na bazie.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędne połączenie dwóch różnych klientów.", mitigation: "Połączenia niepewne trafiają do sprawdzenia przez człowieka." },
      { risk: "Błędny odczyt danych z polisy.", mitigation: "Odczytane dane sprawdza agent, a wątpliwe pola są oznaczone." },
      { risk: "Dostęp do całego portfela dla każdego.", mitigation: "Uprawnienia według ról w agencji." },
      { risk: "Baza przestanie być aktualna.", mitigation: "Importy działają regularnie, a braki są raportowane." },
    ],
  },
  faq: [
    { question: "W jakim narzędziu powstaje baza?", answer: "W CRM, którego używacie, jeśli na to pozwala, albo w elastycznym narzędziu, takim jak Airtable. Wybór zależy od wielkości portfela i procesów." },
    { question: "Czy przeniesiecie dane z obecnych arkuszy?", answer: "Tak. Import, czyszczenie danych i łączenie duplikatów to część budowy bazy." },
    { question: "Czy baza zastąpi system agencyjny?", answer: "Nie musi. Może działać obok niego i zbierać dane, których system nie łączy, np. polisy z wielu towarzystw." },
    { question: "Do kogo należą dane?", answer: "Do agencji. Baza działa na waszych kontach, a dane są pod waszą kontrolą." },
    { question: "Czy baza pomoże w sprzedaży kolejnych ubezpieczeń?", answer: "Tak. Raport pokazuje klientów z jedną polisą lub bez ubezpieczenia, które zwykle łączy się z ich obecnym. Decyzję o kontakcie podejmuje agent." },
  ],
  relatedServiceSlugs: ["projektowanie-baz-danych", "wdrozenia-airtable", "migracja-danych"],
  relatedProcessSlugs: ["raporty-finansowe"],
  relatedToolSlugs: ["airtable", "pipedrive", "n8n"],
  relatedArticleSlugs: ["odnowienia-polis-jak-nie-tracic-klientow", "porzadek-w-danych-przed-ai-i-automatyzacja", "airtable-w-praktyce-zastosowania"],
};
