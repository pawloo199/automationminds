import type { IndustryPageContent } from "../types";

export const agencjePracyKandydaci: IndustryPageContent = {
  industrySlug: "agencje-pracy",
  subSlug: "kandydaci",
  name: "Kandydaci i baza CV",
  excerpt: "CV z portali, maili i formularzy w jednej bazie, z danymi uzupełnionymi bez przepisywania, zgodami, dostępnością i historią kontaktu.",
  metaTitle: "Obsługa kandydatów w agencji pracy: baza CV i aplikacje",
  metaDescription:
    "Automatyzujemy obsługę kandydatów w agencji pracy: aplikacje z portali i maili w jednej bazie, odczyt CV, zgody, dostępność i potwierdzenia dla kandydatów.",
  primaryKeyword: "obsługa kandydatów w agencji pracy",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Agencje pracy: kandydaci",
    title: "Każde CV w bazie, uporządkowane, bez przepisywania",
    lead: "Aplikacje przychodzą z kilku portali, maili, formularza na stronie i komunikatorów. Rekruter otwiera każde CV, przepisuje dane do bazy albo zostawia je w skrzynce. Po roku agencja ma tysiące kandydatów, ale znaleźć wśród nich kogoś z uprawnieniami na wózek widłowy w Poznaniu jest trudno. Automatyzujemy obsługę kandydatów: aplikacje trafiają do jednej bazy, dane z CV są odczytane, a kandydat dostaje potwierdzenie.",
    bullets: [
      "Aplikacje ze wszystkich kanałów w jednej bazie",
      "Dane z CV odczytane, rekruter sprawdza",
      "Zgody, dostępność i historia kontaktu przy kandydacie",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje pracy tymczasowej i rekrutacyjne z dużą liczbą aplikacji" },
    { label: "Co automatyzujemy", value: "Aplikacje, odczyt CV, zgody, potwierdzenia, dostępność, duplikaty" },
    { label: "Narzędzia", value: "System rekrutacyjny lub baza, poczta, formularz, model AI, n8n" },
    { label: "Zasada", value: "AI porządkuje dane, nie ocenia kandydatów" },
  ],
  symptoms: {
    title: "Kiedy obsługę kandydatów warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, baza kandydatów nie pracuje dla agencji.",
    items: [
      "Aplikacje są w kilku skrzynkach i portalach.",
      "Dane z CV przepisuje się ręcznie albo wcale.",
      "Ten sam kandydat jest w bazie kilka razy.",
      "Kandydaci nie dostają potwierdzenia aplikacji.",
      "Nie wiadomo, które zgody kandydat wyraził i kiedy wygasają.",
      "Baza jest duża, ale trudno ją przeszukać.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja obsługi kandydatów",
    paragraphs: [
      "Aplikacje z portali, maili, formularza na stronie i komunikatorów trafiają do jednej bazy, w systemie rekrutacyjnym lub obok niego. AI odczytuje dane z CV: doświadczenie, uprawnienia, języki, lokalizację i oczekiwania, i uzupełnia pola w bazie. Rekruter sprawdza dane, a wątpliwe pola są oznaczone.",
      "System wykrywa duplikaty, łączy nowe CV z istniejącym kandydatem i aktualizuje dane. Kandydat dostaje potwierdzenie aplikacji, a jeśli trzeba, krótki formularz z pytaniami o dostępność, uprawnienia czy preferowaną lokalizację, w swoim języku.",
      "Zgody kandydata są zapisane przy jego karcie z datą. Przed wygaśnięciem zgody na przyszłe rekrutacje kandydat dostaje prośbę o jej odnowienie, a jeśli jej nie odnowi, dane są usuwane według zasad agencji.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja",
    lead: "Zakres dopasowujemy do kanałów i systemu rekrutacyjnego.",
    items: [
      { title: "Wszystkie kanały", body: "Portale, maile, formularz i komunikatory w jednej bazie." },
      { title: "Odczyt CV", body: "Dane do pól bazy, do sprawdzenia przez rekrutera." },
      { title: "Duplikaty", body: "Nowe CV połączone z istniejącym kandydatem." },
      { title: "Potwierdzenia", body: "Kandydat wie, że aplikacja dotarła." },
      { title: "Formularz uzupełniający", body: "Dostępność, uprawnienia, lokalizacja, w języku kandydata." },
      { title: "Zgody", body: "Zapisane z datą, z prośbą o odnowienie." },
      { title: "Usuwanie danych", body: "Według zasad i zgód." },
      { title: "Historia kontaktu", body: "Rozmowy, zlecenia i notatki przy kandydacie." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od aplikacji do kandydata w bazie.",
    items: [
      {
        title: "Aplikacja z portalu",
        trigger: "Kandydat aplikuje na ogłoszenie",
        steps: ["CV w bazie z odczytanymi danymi", "Sprawdzenie duplikatu", "Potwierdzenie i formularz uzupełniający dla kandydata"],
        result: "Kandydat w bazie bez przepisywania.",
      },
      {
        title: "Wygasająca zgoda",
        trigger: "Za miesiąc wygasa zgoda na przyszłe rekrutacje",
        steps: ["Prośba o odnowienie zgody", "Przypomnienie po tygodniu", "Usunięcie danych, jeśli zgoda nie została odnowiona"],
        result: "Baza zgodna z zasadami ochrony danych.",
      },
    ],
  },
  example: {
    title: "Kandydaci przed i po automatyzacji",
    lead: "Przykład agencji otrzymującej kilkaset aplikacji miesięcznie.",
    rows: [
      { label: "Aplikacje", before: "W kilku skrzynkach.", after: "W jednej bazie." },
      { label: "Dane z CV", before: "Przepisywane lub brak.", after: "Odczytane i sprawdzone." },
      { label: "Duplikaty", before: "Częste.", after: "Łączone." },
      { label: "Zgody", before: "Trudne do śledzenia.", after: "Z datą i odnowieniem." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od kanałów z największą liczbą aplikacji.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy kanały aplikacji, system rekrutacyjny i zasady zgód.", fromYou: "Dostęp do narzędzi i zasady ochrony danych." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy pola bazy, zasady duplikatów i treści wiadomości.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływ i testujemy na nowych aplikacjach.", fromYou: "Rekruter sprawdzający dane." },
      { title: "Start i opieka", duration: "stale", body: "Dokładamy kolejne kanały i pilnujemy jakości odczytu.", fromYou: "Uwagi rekruterów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od jednego kanału.",
    items: [
      { name: "Jedna baza", description: "Dla agencji, które chcą zebrać aplikacje w jednym miejscu.", includes: ["Wszystkie kanały", "Potwierdzenia", "Duplikaty", "Historia kontaktu"] },
      { name: "Baza z odczytem CV", description: "Dla agencji z dużą liczbą aplikacji.", includes: ["Wszystko z wariantu Jedna baza", "Odczyt CV", "Formularz uzupełniający", "Oznaczenie wątpliwych pól"] },
      { name: "Baza zgodna z zasadami", description: "Dla agencji, które chcą uporządkować zgody.", includes: ["Wszystko z wariantu Baza z odczytem CV", "Zgody z datą", "Odnowienia", "Usuwanie danych"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba aplikacji i kanałów,",
      "system rekrutacyjny i jego możliwości integracji,",
      "liczba języków,",
      "zasady zgód i przechowywania danych,",
      "zakres wykorzystania AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędnie odczytane dane z CV.", mitigation: "Rekruter sprawdza dane, a wątpliwe pola są oznaczone." },
      { risk: "Połączenie dwóch różnych kandydatów.", mitigation: "Niepewne duplikaty trafiają do sprawdzenia." },
      { risk: "Dane przechowywane bez zgody.", mitigation: "Zgody z datą, odnowienia i usuwanie według zasad." },
      { risk: "AI użyte do oceny.", mitigation: "Odczyt CV uzupełnia pola, nie ocenia kandydata." },
    ],
  },
  faq: [
    { question: "Czy AI ocenia kandydatów?", answer: "Nie. Odczytuje dane z CV do pól bazy. Ocena należy do rekrutera." },
    { question: "Czy obsłużycie CV w innych językach?", answer: "Tak, w popularnych językach i formatach." },
    { question: "Czy kandydat musi zakładać konto?", answer: "Nie. Aplikuje przez portal, mail lub formularz." },
    { question: "Jak pilnujecie zgód?", answer: "Zgody są zapisane z datą, a przed wygaśnięciem kandydat dostaje prośbę o odnowienie." },
    { question: "Czy działa to z naszym systemem rekrutacyjnym?", answer: "Tak, jeśli system udostępnia dane. Jeśli nie, budujemy bazę obok niego." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-hr", "porzadkowanie-i-strukturyzowanie-danych", "ai-w-obsludze-dokumentow"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow"],
  relatedToolSlugs: ["airtable", "n8n", "chatgpt"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
