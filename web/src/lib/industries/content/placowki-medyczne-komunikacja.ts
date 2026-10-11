import type { IndustryPageContent } from "../types";

export const placowkiMedyczneKomunikacja: IndustryPageContent = {
  industrySlug: "placowki-medyczne",
  subSlug: "komunikacja-z-pacjentami",
  name: "Komunikacja z pacjentami",
  excerpt: "Odpowiedzi na pytania organizacyjne pacjentów, porządkowanie wiadomości do rejestracji, informacje po wizycie i przekazanie spraw medycznych personelowi.",
  metaTitle: "Komunikacja z pacjentami w przychodni: automatyzacja",
  metaDescription:
    "Automatyzujemy komunikację z pacjentami: odpowiedzi na pytania organizacyjne, porządek w wiadomościach i przekazanie spraw medycznych personelowi.",
  primaryKeyword: "komunikacja z pacjentami",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Placówki medyczne: komunikacja",
    title: "Odpowiedzi na pytania organizacyjne od razu, sprawy medyczne do personelu",
    lead: "Ile kosztuje wizyta, jak przygotować się do badania, gdzie zaparkować, czy potrzebne jest skierowanie, kiedy będzie faktura: pacjenci pytają o to telefonicznie i mailem, a rejestracja odpowiada na te same pytania wiele razy dziennie. Automatyzujemy komunikację: odpowiedzi na pytania organizacyjne pochodzą z informacji placówki, wiadomości trafiają do właściwych osób, a sprawy medyczne zawsze do personelu.",
    bullets: [
      "Odpowiedzi na pytania organizacyjne z informacji placówki",
      "Wiadomości do rejestracji uporządkowane według tematów",
      "Sprawy medyczne zawsze do personelu",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Przychodnie, gabinety i centra medyczne" },
    { label: "Co automatyzujemy", value: "Pytania organizacyjne, wiadomości, informacje po wizycie, przekazanie" },
    { label: "Narzędzia", value: "Strona, poczta, formularz, model AI na treściach placówki, n8n" },
    { label: "Zasada", value: "Asystent nie odpowiada na pytania o zdrowie" },
  ],
  symptoms: {
    title: "Kiedy komunikację warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, rejestracja jest infolinią.",
    items: [
      "Rejestracja odpowiada na te same pytania o ceny i przygotowanie.",
      "Maile do placówki trafiają do jednej skrzynki i czekają na sortowanie.",
      "Informacje na stronie są nieaktualne, więc pacjenci dzwonią.",
      "Pacjenci z zagranicy mają trudność z uzyskaniem informacji.",
      "Pytania o faktury i płatności przerywają obsługę pacjentów.",
      "Nie wiadomo, o co pacjenci pytają najczęściej.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja komunikacji",
    paragraphs: [
      "Placówka przygotowuje i zatwierdza informacje organizacyjne: cennik, godziny, przygotowanie do badań według własnych instrukcji, dojazd, dokumenty, zasady płatności i faktur. Asystent na stronie lub w wiadomościach odpowiada na pytania pacjentów wyłącznie na podstawie tych informacji.",
      "Wiadomości mailowe i z formularza są porządkowane według tematów: umówienie, zmiana terminu, faktura, pytanie organizacyjne, pytanie medyczne. Pytania organizacyjne mogą dostać odpowiedź od razu, pozostałe trafiają do właściwej osoby w placówce.",
      "Pytania o zdrowie, objawy, leczenie i wyniki są rozpoznawane i przekazywane personelowi, bez udzielania odpowiedzi. Przy sygnałach pilnych asystent informuje o numerze alarmowym i kontakcie z placówką. Rozmowy są zapisywane, żeby placówka mogła je przeglądać.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja komunikacji",
    lead: "Zakres dopasowujemy do usług i kanałów placówki.",
    items: [
      { title: "Informacje placówki", body: "Ceny, godziny, przygotowanie, dojazd, dokumenty." },
      { title: "Asystent organizacyjny", body: "Na stronie lub w wiadomościach." },
      { title: "Tematy wiadomości", body: "Umówienie, zmiana, faktura, pytanie organizacyjne lub medyczne." },
      { title: "Przekazanie", body: "Do rejestracji, księgowości lub personelu." },
      { title: "Pytania medyczne", body: "Rozpoznane i przekazane bez odpowiedzi." },
      { title: "Sygnały pilne", body: "Informacja o numerze alarmowym." },
      { title: "Wiele języków", body: "Informacje organizacyjne w języku pacjenta." },
      { title: "Raport pytań", body: "Najczęstsze tematy i luki w informacjach." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od pytania do odpowiedzi lub przekazania.",
    items: [
      {
        title: "Pytanie organizacyjne",
        trigger: "Pacjent pyta o przygotowanie do badania",
        steps: ["Odpowiedź z instrukcji placówki", "Link do umówienia wizyty", "Zapis rozmowy"],
        result: "Pacjent dostaje odpowiedź od razu.",
      },
      {
        title: "Pytanie medyczne",
        trigger: "Pacjent opisuje objawy w wiadomości",
        steps: ["Rozpoznanie pytania medycznego", "Przekazanie do personelu, bez odpowiedzi asystenta", "Informacja dla pacjenta o kontakcie z placówką"],
        result: "Sprawa medyczna trafia do człowieka.",
      },
    ],
  },
  example: {
    title: "Komunikacja przed i po automatyzacji",
    lead: "Przykład centrum medycznego z kilkoma specjalnościami i pracownią diagnostyczną.",
    rows: [
      { label: "Pytania organizacyjne", before: "Telefon do rejestracji.", after: "Odpowiedzi z informacji placówki." },
      { label: "Maile", before: "Jedna skrzynka.", after: "Tematy i przekazanie." },
      { label: "Pytania medyczne", before: "Mieszają się z innymi.", after: "Rozpoznane i przekazane." },
      { label: "Wiedza", before: "Brak.", after: "Raport najczęstszych pytań." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej placówce.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od zebrania i uporządkowania informacji placówki.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Analizujemy najczęstsze pytania i zbieramy informacje organizacyjne.", fromYou: "Cennik, instrukcje i zasady placówki." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy zakres odpowiedzi, tematy i zasady przekazania.", fromYou: "Akceptacja zakresu i treści." },
      { title: "Budowa i test", duration: "zwykle 3–4 tygodnie", body: "Budujemy asystenta i porządkowanie wiadomości, testujemy w trybie podglądu.", fromYou: "Osoba oceniająca odpowiedzi." },
      { title: "Start i opieka", duration: "stale", body: "Przeglądamy rozmowy i aktualizujemy informacje.", fromYou: "Informacja o zmianach cen i usług." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od porządkowania wiadomości.",
    items: [
      { name: "Porządkowanie wiadomości", description: "Dla placówek z dużą liczbą maili.", includes: ["Tematy wiadomości", "Przekazanie", "Rozpoznanie pytań medycznych", "Raport pytań"] },
      { name: "Asystent organizacyjny", description: "Dla placówek, które chcą odciążyć telefon.", includes: ["Wszystko z wariantu Porządkowanie wiadomości", "Asystent na stronie", "Informacje placówki", "Sygnały pilne"] },
      { name: "Komunikacja w wielu językach", description: "Dla placówek z pacjentami z zagranicy.", includes: ["Wszystko z wariantu Asystent organizacyjny", "Wiele języków", "Przegląd rozmów", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "zakres informacji organizacyjnych,",
      "kanały komunikacji,",
      "liczba języków,",
      "wymagania dotyczące infrastruktury,",
      "zakres opieki.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Asystent odpowie na pytanie medyczne.", mitigation: "Asystent ma zakaz odpowiadania na pytania o zdrowie i przekazuje je personelowi. Rozmowy są przeglądane." },
      { risk: "Pacjent poda dane o zdrowiu w rozmowie.", mitigation: "Asystent nie prosi o takie dane, a rozmowy są przechowywane zgodnie z zasadami placówki." },
      { risk: "Nieaktualna cena lub informacja.", mitigation: "Informacje są w jednym miejscu i aktualizowane przez placówkę." },
      { risk: "Pilna sytuacja.", mitigation: "Przy sygnałach pilnych asystent informuje o numerze alarmowym i kontakcie z placówką." },
    ],
  },
  faq: [
    { question: "Czy asystent odpowiada na pytania o zdrowie?", answer: "Nie. Odpowiada tylko na pytania organizacyjne, a pytania medyczne przekazuje personelowi." },
    { question: "Skąd asystent bierze informacje?", answer: "Wyłącznie z informacji przygotowanych i zatwierdzonych przez placówkę." },
    { question: "Czy placówka widzi rozmowy?", answer: "Tak, rozmowy są zapisywane, żeby placówka mogła je przeglądać i poprawiać informacje." },
    { question: "Czy asystent może umówić wizytę?", answer: "Może skierować do rejestracji online albo przekazać prośbę do rejestracji." },
    { question: "Czy działa w innych językach?", answer: "Tak, dla informacji organizacyjnych." },
  ],
  relatedServiceSlugs: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "asystent-ai-na-firmowej-wiedzy"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow", "umawianie-wizyt"],
  relatedToolSlugs: ["chatgpt", "n8n", "google-workspace"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
