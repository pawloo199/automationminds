import type { IndustryPageContent } from "../types";

export const nieruchomosciAsystentNajemcy: IndustryPageContent = {
  industrySlug: "nieruchomosci",
  subSlug: "komunikacja-z-najemcami",
  name: "Komunikacja z najemcami i właścicielami",
  excerpt: "Asystent AI odpowiadający najemcom na typowe pytania, komunikaty do mieszkańców i stały kontakt z właścicielami bez telefonów.",
  metaTitle: "Komunikacja z najemcami: asystent AI i komunikaty",
  metaDescription:
    "Automatyzujemy komunikację z najemcami: asystent AI na dokumentach firmy, komunikaty do mieszkańców, pakiet dla nowego najemcy i raporty dla właścicieli.",
  primaryKeyword: "komunikacja z najemcami",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Nieruchomości: komunikacja z najemcami",
    title: "Najemcy dostają odpowiedzi od razu, zarządca ma czas na ważne sprawy",
    lead: "Jak zapłacić za media, gdzie jest śmietnik, kiedy przyjdzie rozliczenie, jak wypowiedzieć umowę: najemcy pytają o te same rzeczy, a każde pytanie to telefon lub wiadomość do zarządcy. Automatyzujemy komunikację: asystent AI odpowiada na typowe pytania na podstawie dokumentów firmy, nowy najemca dostaje komplet informacji na start, a komunikaty do mieszkańców i właścicieli wychodzą z jednego miejsca.",
    bullets: [
      "Asystent AI na regulaminach i instrukcjach firmy",
      "Pakiet informacji dla nowego najemcy",
      "Komunikaty do mieszkańców i właścicieli z jednego miejsca",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy zarządzające najmem, zarządcy budynków i najmu instytucjonalnego" },
    { label: "Co automatyzujemy", value: "Odpowiedzi na pytania, onboarding najemcy, komunikaty, kontakt z właścicielami" },
    { label: "Narzędzia", value: "Asystent AI, formularz lub czat, poczta, SMS, n8n" },
    { label: "Zasada", value: "Sprawy sporne i prawne zawsze trafiają do zarządcy" },
  ],
  symptoms: {
    title: "Kiedy komunikację warto zautomatyzować",
    lead: "Jeśli te sytuacje są codziennością, zarządca pracuje głównie jako infolinia.",
    items: [
      "Najemcy zadają te same pytania o płatności, media i zasady budynku.",
      "Nowy najemca dzwoni kilka razy w pierwszym tygodniu.",
      "Komunikaty o przeglądach czy wyłączeniach wody wysyła się ręcznie.",
      "Właściciele pytają o swoje lokale, a odpowiedź wymaga sprawdzenia kilku miejsc.",
      "Wiadomości od najemców giną w prywatnych telefonach zarządców.",
      "Najemcy z zagranicy potrzebują informacji w innym języku.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja komunikacji",
    paragraphs: [
      "Asystent AI korzysta z dokumentów firmy: regulaminów budynków, instrukcji, zasad płatności i rozliczeń, często zadawanych pytań. Najemca pyta przez formularz, czat lub wiadomość, a asystent odpowiada ze wskazaniem źródła, w języku pytania. Pytania o sprawy sporne, prawne lub dotyczące konkretnych rozliczeń trafiają do zarządcy z pełnym kontekstem.",
      "Nowy najemca dostaje pakiet startowy: instrukcje, kontakty, zasady płatności, link do zgłaszania usterek. Kolejne informacje, np. o pierwszym rozliczeniu mediów, wychodzą w odpowiednim momencie. Komunikaty do mieszkańców, np. o przeglądach czy wyłączeniach wody, wychodzą z jednego miejsca do właściwych lokali.",
      "Właściciele dostają regularny raport o swoich lokalach, a na pytania o status mogą sprawdzić dane w prostym portalu. Zarządca rozmawia z nimi o sprawach ważnych, a nie o tym, czy czynsz wpłynął.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja komunikacji",
    lead: "Zakres dopasowujemy do rodzaju najmu i liczby lokali.",
    items: [
      { title: "Asystent AI", body: "Odpowiedzi na podstawie dokumentów firmy, ze wskazaniem źródła." },
      { title: "Wiele języków", body: "Odpowiedzi w języku pytania najemcy." },
      { title: "Przekazanie do zarządcy", body: "Sprawy sporne i prawne z kontekstem rozmowy." },
      { title: "Pakiet startowy", body: "Instrukcje, kontakty i zasady dla nowego najemcy." },
      { title: "Komunikaty", body: "Informacje o przeglądach, awariach i zmianach do właściwych lokali." },
      { title: "Koniec najmu", body: "Informacje o wyprowadzce, protokole i zwrocie kaucji." },
      { title: "Portal właściciela", body: "Dane o lokalach, wpłatach i zgłoszeniach." },
      { title: "Historia kontaktu", body: "Rozmowy z najemcą w jednym miejscu, dostępne dla zespołu." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od pytania najemcy do odpowiedzi.",
    items: [
      {
        title: "Pytanie najemcy",
        trigger: "Najemca pyta, jak rozliczane są media",
        steps: ["Asystent odpowiada na podstawie zasad firmy", "Wskazanie źródła i dalszych kroków", "Przekazanie do zarządcy, jeśli pytanie dotyczy konkretnej kwoty"],
        result: "Najemca dostaje odpowiedź od razu, a zarządca zajmuje się tylko sprawami indywidualnymi.",
      },
      {
        title: "Nowy najemca",
        trigger: "Podpisanie umowy najmu",
        steps: ["Pakiet startowy z instrukcjami", "Przypomnienie o pierwszej płatności", "Informacja o pierwszym rozliczeniu mediów"],
        result: "Najemca ma komplet informacji, a zarządca mniej telefonów.",
      },
    ],
  },
  example: {
    title: "Komunikacja przed i po automatyzacji",
    lead: "Przykład firmy zarządzającej najmem w kilku budynkach.",
    rows: [
      { label: "Pytania", before: "Telefony do zarządcy.", after: "Asystent z dokumentami firmy." },
      { label: "Nowi najemcy", before: "Kilka telefonów w pierwszym tygodniu.", after: "Pakiet startowy i kolejne informacje." },
      { label: "Komunikaty", before: "Wysyłane ręcznie.", after: "Z jednego miejsca do właściwych lokali." },
      { label: "Właściciele", before: "Dzwonią z pytaniami.", after: "Portal i raporty." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Najwięcej daje uporządkowanie dokumentów, z których korzysta asystent.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Zbieramy regulaminy, instrukcje i najczęstsze pytania najemców.", fromYou: "Dokumenty i lista najczęstszych pytań." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy zakres asystenta, zasady przekazywania spraw i treści pakietu.", fromYou: "Akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy asystenta i przepływy, testujemy je z wybranymi najemcami.", fromYou: "Zarządca oceniający odpowiedzi." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkich najemców i aktualizujemy dokumenty.", fromYou: "Informacja o zmianach w zasadach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od pakietu startowego i komunikatów.",
    items: [
      { name: "Komunikaty", description: "Dla firm, które chcą uporządkować informacje dla najemców.", includes: ["Pakiet startowy", "Komunikaty do lokali", "Koniec najmu", "Historia kontaktu"] },
      { name: "Asystent AI", description: "Dla firm z wieloma pytaniami od najemców.", includes: ["Wszystko z wariantu Komunikaty", "Asystent na dokumentach firmy", "Wiele języków", "Przekazanie do zarządcy"] },
      { name: "Najemcy i właściciele", description: "Dla firm, które chcą odciążyć zarządców także od właścicieli.", includes: ["Wszystko z wariantu Asystent AI", "Portal właściciela", "Raporty dla właścicieli", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba lokali i najemców,",
      "stan dokumentów firmy,",
      "kanały komunikacji,",
      "zakres asystenta i języków,",
      "portal dla właścicieli.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Asystent poda nieaktualne informacje.", mitigation: "Asystent korzysta tylko z aktualnych dokumentów firmy i wskazuje źródło. Dokumenty aktualizujecie w jednym miejscu." },
      { risk: "Asystent udzieli porady prawnej.", mitigation: "Pytania prawne i sporne zawsze trafiają do zarządcy." },
      { risk: "Najemca zobaczy dane innego najemcy.", mitigation: "Asystent nie ma dostępu do danych innych najemców." },
      { risk: "Najemcy poczują się obsłużeni przez automat.", mitigation: "Każdy najemca może poprosić o kontakt z zarządcą." },
    ],
  },
  faq: [
    { question: "Na jakie pytania odpowiada asystent?", answer: "Na pytania ogólne i organizacyjne, na podstawie dokumentów firmy: płatności, media, zasady budynku, procedury. Sprawy indywidualne i sporne trafiają do zarządcy." },
    { question: "Czy asystent może działać w kilku językach?", answer: "Tak. Odpowiada w języku pytania, na podstawie tych samych dokumentów." },
    { question: "Gdzie najemca zadaje pytania?", answer: "Przez formularz, czat na stronie lub wiadomość, zależnie od tego, co jest wygodne dla waszych najemców." },
    { question: "Czy właściciele mogą mieć dostęp do danych online?", answer: "Tak, przez prosty portal z danymi tylko ich lokali." },
    { question: "Czy to działa dla wspólnot mieszkaniowych?", answer: "Tak. Komunikaty i odpowiedzi na pytania mieszkańców działają w ten sam sposób." },
  ],
  relatedServiceSlugs: ["chatbot-ai-dla-firmy", "asystent-ai-na-firmowej-wiedzy", "automatyzacja-w-obsludze-klienta"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow"],
  relatedToolSlugs: ["chatgpt", "claude", "n8n"],
  relatedArticleSlugs: ["ai-w-codziennej-pracy-zespolu", "rodo-a-automatyzacja-procesow", "wdrozenie-ai-w-malej-i-sredniej-firmie"],
};
