import type { IndustryPageContent } from "../types";

export const spedycjaStatusyDlaKlientow: IndustryPageContent = {
  industrySlug: "spedycja",
  subSlug: "statusy-dla-klientow",
  name: "Statusy i awizacje",
  excerpt: "Statusy przesyłek z TMS lub od przewoźnika przekazywane klientom automatycznie, awizacje i informacje o opóźnieniach.",
  metaTitle: "Statusy przesyłek dla klientów spedycji: automatyzacja",
  metaDescription:
    "Automatyzujemy informowanie klientów spedycji: statusy z TMS lub od przewoźnika, awizacje, opóźnienia i agent AI odpowiadający na pytania.",
  primaryKeyword: "statusy przesyłek dla klientów spedycji",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Spedycja: statusy i awizacje",
    title: "Statusy dla klientów bez telefonów: klient wie, zanim zapyta",
    lead: "Pytanie „gdzie jest mój ładunek?” zabiera spedytorom sporą część dnia. Żeby na nie odpowiedzieć, trzeba zajrzeć do TMS, systemu GPS albo zadzwonić do kierowcy, a potem odpisać klientowi. Automatyzujemy tę komunikację: statusy z TMS lub od przewoźnika trafiają do klienta same, opóźnienia są zgłaszane od razu, a na pytania o status odpowiada agent AI na podstawie aktualnych danych.",
    bullets: [
      "Statusy wysyłane automatycznie na najważniejszych etapach",
      "Informacja o opóźnieniu, zanim klient zadzwoni",
      "Agent AI odpowiadający na pytania o status",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy spedycyjne, których klienci oczekują bieżącej informacji o przesyłkach" },
    { label: "Co automatyzujemy", value: "Statusy, awizacje, informacje o opóźnieniach, odpowiedzi na pytania" },
    { label: "Narzędzia", value: "TMS, dane GPS lub od przewoźnika, poczta, agent AI, n8n" },
    { label: "Zasada", value: "Problemy na trasie zgłasza klientowi spedytor" },
  ],
  symptoms: {
    title: "Kiedy statusy warto zautomatyzować",
    lead: "Jeśli te sytuacje są codziennością, spedytorzy pracują jako centrum informacji zamiast organizować transport.",
    items: [
      "Klienci dzwonią i piszą z pytaniem o status, a każda odpowiedź wymaga sprawdzenia kilku miejsc.",
      "O opóźnieniu klient dowiaduje się od odbiorcy, a nie od spedycji.",
      "Awizacje u odbiorców ustala się telefonicznie i mailowo, często w ostatniej chwili.",
      "Duzi klienci oczekują regularnych raportów o przesyłkach, które ktoś składa ręcznie.",
      "Statusy w TMS są uzupełniane z opóźnieniem, bo nikt nie ma na to czasu.",
      "Każdy spedytor informuje klientów inaczej.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja statusów",
    paragraphs: [
      "Źródłem statusów jest TMS, system GPS, dane od przewoźnika albo informacje od kierowcy przekazywane prostym formularzem lub wiadomością. Automatyzacja zbiera te dane i na najważniejszych etapach, takich jak załadunek, przekroczenie granicy czy rozładunek, wysyła klientowi informację w ustalonej formie: mailem, w raporcie albo przez portal.",
      "Gdy dane wskazują na opóźnienie, np. auto nie wyjechało z załadunku albo przewidywany czas dostawy przesuwa się poza okno, system informuje spedytora. To spedytor decyduje, co przekazać klientowi i jak rozwiązać problem, ale wie o nim wcześniej.",
      "Na pytania klientów o status może odpowiadać agent AI. Rozpoznaje zlecenie po numerze referencyjnym, sprawdza aktualne dane i odpowiada. Jeśli danych brakuje albo pytanie dotyczy problemu, przekazuje je spedytorowi z pełnym kontekstem.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja statusów",
    lead: "Zakres dopasowujemy do źródeł danych i oczekiwań klientów.",
    items: [
      { title: "Zbieranie statusów", body: "Dane z TMS, GPS lub od przewoźnika w jednym miejscu." },
      { title: "Statusy dla klientów", body: "Informacje na najważniejszych etapach transportu, w ustalonej formie." },
      { title: "Opóźnienia", body: "Informacja dla spedytora o zagrożonych terminach." },
      { title: "Awizacje", body: "Prośby o awizację i potwierdzenia okien dostaw u odbiorców." },
      { title: "Agent AI", body: "Odpowiedzi na pytania o status na podstawie aktualnych danych." },
      { title: "Raporty dla klientów", body: "Zestawienia przesyłek dla stałych klientów, wysyłane regularnie." },
      { title: "Statusy od kierowców", body: "Prosty sposób przekazania statusu i zdjęć dokumentów przez kierowcę." },
      { title: "Uzupełnianie TMS", body: "Statusy zapisywane w TMS bez ręcznego wpisywania." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od danych z trasy do informacji u klienta.",
    items: [
      {
        title: "Najważniejsze etapy",
        trigger: "Załadunek lub rozładunek odnotowany w TMS lub GPS",
        steps: ["Aktualizacja statusu zlecenia", "Informacja dla klienta w ustalonej formie", "Zapis w historii zlecenia"],
        result: "Klient wie o postępie transportu bez pytania spedytora.",
      },
      {
        title: "Zagrożony termin",
        trigger: "Przewidywany czas dostawy wychodzi poza okno",
        steps: ["Informacja dla spedytora z danymi zlecenia", "Szkic wiadomości do klienta do zatwierdzenia", "Aktualizacja awizacji u odbiorcy"],
        result: "Klient dowiaduje się o opóźnieniu od spedycji, a nie od odbiorcy.",
      },
    ],
  },
  example: {
    title: "Statusy przed i po automatyzacji",
    lead: "Przykład firmy obsługującej kilku dużych klientów z regularnymi przewozami.",
    rows: [
      { label: "Pytania o status", before: "Telefon, sprawdzenie, odpowiedź.", after: "Informacja wysłana automatycznie lub odpowiedź agenta." },
      { label: "Opóźnienia", before: "Klient dowiaduje się od odbiorcy.", after: "Spedytor wie wcześniej i informuje klienta." },
      { label: "Raporty", before: "Składane ręcznie raz w tygodniu.", after: "Wysyłane automatycznie." },
      { label: "TMS", before: "Statusy uzupełniane z opóźnieniem.", after: "Statusy zapisywane na bieżąco." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Najpierw ustalamy źródła danych i etapy, potem uruchamiamy informacje dla wybranych klientów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, skąd biorą się statusy, jak wyglądają dziś informacje dla klientów i czego oczekują najwięksi klienci.", fromYou: "Dostęp do informacji o TMS i GPS oraz rozmowa z kierownikiem." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy etapy, treści, formy informacji i zasady zgłaszania opóźnień.", fromYou: "Akceptacja treści i zasad." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływy i agenta, testujemy je z kilkoma klientami.", fromYou: "Klienci do pilotażu i spedytorzy oceniający działanie." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy kolejnych klientów i rozwijamy raporty.", fromYou: "Uwagi klientów i zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od statusów na najważniejszych etapach, a agenta dodać później.",
    items: [
      { name: "Statusy", description: "Dla firm, które chcą informować klientów automatycznie.", includes: ["Zbieranie statusów", "Informacje na najważniejszych etapach", "Zapis w TMS", "Treści ustalone przez firmę"] },
      { name: "Statusy i opóźnienia", description: "Dla firm, które chcą reagować wcześniej.", includes: ["Wszystko z wariantu Statusy", "Wykrywanie zagrożonych terminów", "Awizacje", "Raporty dla klientów"] },
      { name: "Agent AI", description: "Dla firm, które chcą odciążyć spedytorów od pytań o status.", includes: ["Wszystko z wariantu Statusy i opóźnienia", "Agent AI odpowiadający na pytania", "Przekazanie problemów spedytorowi", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "źródła danych o statusach i ich dostępność,",
      "liczba klientów i ich wymagania,",
      "kanały informacji, np. mail, portal, raport,",
      "zakres agenta AI,",
      "integracja z TMS.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Klient dostanie nieaktualny status.", mitigation: "Informacje zawierają czas aktualizacji danych, a przy braku danych agent przekazuje pytanie spedytorowi." },
      { risk: "Automatyczna informacja o problemie zaszkodzi relacji.", mitigation: "Informacje o opóźnieniach i problemach zatwierdza spedytor." },
      { risk: "Brak danych GPS od części przewoźników.", mitigation: "Dla takich zleceń statusy pochodzą od kierowcy lub spedytora, a klient dostaje je w tej samej formie." },
      { risk: "Za dużo wiadomości do klienta.", mitigation: "Etapy i częstotliwość ustalamy z każdym najważniejszym klientem." },
    ],
  },
  faq: [
    { question: "Skąd system bierze statusy?", answer: "Z TMS, systemu GPS, danych od przewoźnika lub od kierowcy. Źródła ustalamy przy przeglądzie, bo różnią się między firmami i przewoźnikami." },
    { question: "Czy klienci mogą sami sprawdzać status?", answer: "Tak, przez prosty portal lub link do zlecenia, jeśli tego chcecie. Częściej zaczynamy od informacji wysyłanych na najważniejszych etapach." },
    { question: "Czy agent AI może rozmawiać z klientami po angielsku lub niemiecku?", answer: "Tak. Agent odpowiada w języku pytania, na podstawie danych z waszych systemów." },
    { question: "Co, jeśli przewoźnik nie udostępnia GPS?", answer: "Statusy mogą pochodzić od kierowcy przez prosty formularz lub wiadomość albo od spedytora. Klient dostaje je w tej samej formie." },
    { question: "Czy to obsłuży raporty dla dużych klientów?", answer: "Tak. Regularne zestawienia przesyłek w formacie klienta mogą wychodzić automatycznie." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "agenci-ai", "automatyzacja-dla-logistyki"],
  relatedProcessSlugs: ["obsluga-reklamacji"],
  relatedToolSlugs: ["n8n", "chatgpt", "microsoft-365"],
  relatedArticleSlugs: ["ai-dla-spedytorow", "tms-a-automatyzacja-spedycji", "co-zautomatyzowac-w-spedycji"],
};
