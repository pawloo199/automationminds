import type { IndustryPageContent } from "../types";

export const hurtownieNaleznosciILimity: IndustryPageContent = {
  industrySlug: "hurtownie-i-dystrybucja",
  subSlug: "naleznosci-i-limity",
  name: "Należności i limity kupieckie",
  excerpt: "Przypomnienia o płatnościach, limity kupieckie widoczne przy zamówieniu i informacje dla handlowców o zaległościach ich klientów.",
  metaTitle: "Należności i limity kupieckie w hurtowni: automatyzacja",
  metaDescription:
    "Automatyzujemy należności w hurtowni: przypomnienia o płatnościach, limity kupieckie przy zamówieniach, informacje dla handlowców i raporty należności.",
  primaryKeyword: "limity kupieckie w hurtowni",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Hurtownie: należności i limity",
    title: "Należności i limity kupieckie pod kontrolą, bez psucia relacji",
    lead: "W handlu B2B sprzedaż z odroczonym terminem płatności to standard, a należności to często największe aktywo hurtowni. Gdy przypomnienia wysyła się nieregularnie, a limity kupieckie sprawdza dopiero księgowość, towar trafia do klientów z zaległościami, a handlowiec dowiaduje się o problemie ostatni. Automatyzujemy tę pracę: przypomnienia wychodzą same, limit jest sprawdzany przy zamówieniu, a handlowcy wiedzą o zaległościach swoich klientów.",
    bullets: [
      "Przypomnienia o płatnościach przed terminem i po nim",
      "Limity kupieckie sprawdzane przy każdym zamówieniu",
      "Handlowcy wiedzą o zaległościach swoich klientów",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Hurtownie i dystrybutorzy sprzedający z odroczonym terminem płatności" },
    { label: "Co automatyzujemy", value: "Przypomnienia, kontrolę limitów, informacje dla handlowców, raporty" },
    { label: "Narzędzia", value: "ERP, bank, poczta, SMS, n8n" },
    { label: "Zasada", value: "Wyjątki od limitów zatwierdza osoba odpowiedzialna" },
  ],
  symptoms: {
    title: "Kiedy należności warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, hurtownia kredytuje klientów bardziej, niż zamierzała.",
    items: [
      "Przypomnienia o płatnościach wysyła się nieregularnie albo dopiero po terminie.",
      "Limity kupieckie są w ERP, ale nikt nie sprawdza ich przy zamówieniu.",
      "Handlowiec dowiaduje się o zaległościach klienta od księgowości, po fakcie.",
      "Raport należności powstaje raz w miesiącu w arkuszu.",
      "Rozmowy o płatnościach prowadzi kilka osób, bez wspólnej historii.",
      "Nie wiadomo, którzy klienci regularnie płacą po terminie.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja należności",
    paragraphs: [
      "System pobiera z ERP faktury i płatności, a z banku informacje o wpłatach. Przed terminem płatności wysyła klientowi uprzejme przypomnienie, a po terminie kolejne, według ustalonego harmonogramu i treści. Klienci, z którymi handlowiec chce rozmawiać sam, mogą być wyłączeni z automatycznych przypomnień.",
      "Przy każdym nowym zamówieniu system sprawdza, czy klient nie przekracza limitu kupieckiego i czy nie ma zaległości. Jeśli tak, zamówienie trafia do decyzji osoby odpowiedzialnej, a handlowiec dostaje informację. Wyjątki są zapisywane, więc wiadomo, kto i dlaczego je zatwierdził.",
      "Handlowcy dostają regularnie zestawienie należności swoich klientów, a przed wizytą podsumowanie płatności. Kierownik sprzedaży i dział finansów widzą raport należności i opóźnień na bieżąco, a nie raz w miesiącu.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja należności",
    lead: "Zakres dopasowujemy do zasad kredytowania klientów i ERP.",
    items: [
      { title: "Przypomnienia przed terminem", body: "Uprzejma informacja o zbliżającym się terminie płatności." },
      { title: "Przypomnienia po terminie", body: "Kolejne wiadomości według harmonogramu, z rosnącą stanowczością." },
      { title: "Kontrola limitu", body: "Sprawdzenie limitu kupieckiego i zaległości przy zamówieniu." },
      { title: "Decyzje o wyjątkach", body: "Zamówienia ponad limit do akceptacji, z zapisem decyzji." },
      { title: "Informacje dla handlowców", body: "Zaległości ich klientów regularnie i przed wizytą." },
      { title: "Uzgadnianie wpłat", body: "Wpłaty z banku dopasowane do faktur." },
      { title: "Historia kontaktów", body: "Rozmowy i ustalenia dotyczące płatności w jednym miejscu." },
      { title: "Raport należności", body: "Należności, opóźnienia i klienci płacący po terminie." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od wystawionej faktury do zapłaty i od zamówienia do decyzji o realizacji.",
    items: [
      {
        title: "Przypomnienie o płatności",
        trigger: "Zbliża się lub minął termin płatności faktury",
        steps: ["Sprawdzenie wpłat w banku", "Wiadomość dla klienta według harmonogramu", "Informacja dla handlowca, gdy zaległość rośnie"],
        result: "Klienci płacą terminowo częściej, a handlowiec wie o problemie wcześniej.",
      },
      {
        title: "Zamówienie ponad limit",
        trigger: "Nowe zamówienie przekracza limit kupiecki klienta",
        steps: ["Wstrzymanie zamówienia do decyzji", "Informacja dla handlowca i działu finansów", "Decyzja zapisana przy zamówieniu i dalsza realizacja"],
        result: "Towar nie trafia do klientów z zaległościami bez świadomej decyzji.",
      },
    ],
  },
  example: {
    title: "Należności przed i po automatyzacji",
    lead: "Przykład hurtowni z kilkuset klientami kupującymi z odroczonym terminem.",
    rows: [
      { label: "Przypomnienia", before: "Nieregularne, po terminie.", after: "Przed terminem i według harmonogramu." },
      { label: "Limity", before: "Sprawdzane przez księgowość po fakcie.", after: "Przy każdym zamówieniu." },
      { label: "Handlowcy", before: "Dowiadują się ostatni.", after: "Mają zestawienie swoich klientów." },
      { label: "Raport", before: "Raz w miesiącu w arkuszu.", after: "Na bieżąco." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od przypomnień, a kontrolę limitów dokładamy po ustaleniu zasad.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy zasady kredytowania, dane w ERP i sposób przypominania o płatnościach.", fromYou: "Rozmowa z działem finansów i kierownikiem sprzedaży." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy harmonogram i treści przypomnień, zasady limitów i wyjątków.", fromYou: "Akceptacja treści i zasad." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływy i testujemy je na wybranej grupie klientów.", fromYou: "Wybór klientów do testu." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkich klientów i rozwijamy raporty.", fromYou: "Uwagi działu finansów i handlowców." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od przypomnień i dokładać kolejne elementy.",
    items: [
      { name: "Przypomnienia", description: "Dla firm, które chcą szybciej odzyskiwać należności.", includes: ["Przypomnienia przed i po terminie", "Uzgadnianie wpłat", "Wyłączenia dla wybranych klientów", "Raport należności"] },
      { name: "Przypomnienia i handlowcy", description: "Dla firm, w których handlowcy prowadzą rozmowy o płatnościach.", includes: ["Wszystko z wariantu Przypomnienia", "Zestawienia dla handlowców", "Podsumowanie przed wizytą", "Historia kontaktów"] },
      { name: "Pełna kontrola", description: "Dla firm, które chcą panować nad ryzykiem kredytowym.", includes: ["Wszystko z wariantu Przypomnienia i handlowcy", "Kontrola limitów przy zamówieniach", "Decyzje o wyjątkach", "Raport klientów płacących po terminie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba klientów i faktur,",
      "integracja z ERP i bankiem,",
      "zasady limitów i wyjątków,",
      "kanały komunikacji, np. mail, SMS,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Przypomnienie trafi do klienta, który już zapłacił.", mitigation: "Przed wysyłką system sprawdza wpłaty w banku z ostatnich dni." },
      { risk: "Przypomnienie zaszkodzi relacji.", mitigation: "Treści ustalacie sami, a dla wybranych klientów przypomnienia można wyłączyć." },
      { risk: "Zamówienie dobrego klienta zostanie wstrzymane.", mitigation: "Decyzja o wyjątku zajmuje chwilę, a zasady limitów można dopasować do historii płatności klienta." },
      { risk: "Rozbieżne dane o należnościach.", mitigation: "ERP jest źródłem danych, a uzgadnianie wpłat działa codziennie." },
    ],
  },
  faq: [
    { question: "Czy to jest windykacja?", answer: "Nie. Automatyzujemy przypomnienia i kontrolę limitów w codziennej współpracy. Windykacja trudnych należności to osobny proces, często prowadzony z firmą zewnętrzną." },
    { question: "Czy przypomnienia mogą wychodzić od handlowca?", answer: "Tak. Wiadomości mogą wychodzić z adresu handlowca lub działu finansów, zależnie od tego, co lepiej działa z waszymi klientami." },
    { question: "Skąd system wie o wpłatach?", answer: "Z ERP i z banku, jeśli bank udostępnia dane o wpłatach. Uzgadnianie wpłat z fakturami działa codziennie." },
    { question: "Czy limit kupiecki może się zmieniać automatycznie?", answer: "Może być proponowany na podstawie historii płatności, ale decyzję o zmianie limitu podejmuje osoba odpowiedzialna." },
    { question: "Czy to działa z platformą B2B?", answer: "Tak. Informacja o należnościach i limicie może być widoczna dla klienta w platformie, a kontrola przy zamówieniu działa tak samo." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "automatyzacja-raportow"],
  relatedProcessSlugs: ["przypomnienia-o-platnosciach", "raporty-finansowe"],
  relatedToolSlugs: ["n8n", "microsoft-365", "ksef"],
  relatedArticleSlugs: ["integracja-crm-z-fakturowaniem", "jak-mierzyc-roi-automatyzacji", "5-procesow-do-automatyzacji-w-malej-firmie"],
};
