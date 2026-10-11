import type { IndustryPageContent } from "../types";

export const firmySzkolenioweOferty: IndustryPageContent = {
  industrySlug: "firmy-szkoleniowe",
  subSlug: "oferty-dla-firm",
  name: "Zapytania i oferty dla firm",
  excerpt: "Zapytania o szkolenia zamknięte, formularz analizy potrzeb, szkic oferty z programów i cennika, follow-up i rejestr ofert z wynikami.",
  metaTitle: "Oferta szkoleniowa dla firm: zapytania i szkice ofert",
  metaDescription:
    "Automatyzujemy sprzedaż szkoleń zamkniętych: zapytania od firm, analiza potrzeb, szkic oferty z programów i cennika, follow-up i rejestr ofert.",
  primaryKeyword: "oferta szkoleniowa dla firm",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy szkoleniowe: oferty dla firm",
    title: "Oferta szkolenia zamkniętego w dniu zapytania, a nie po tygodniu",
    lead: "Firma pyta o szkolenie dla zespołu. Opiekun dzwoni, ustala potrzeby, szuka podobnego programu, liczy cenę, składa ofertę w edytorze tekstu i wysyła po kilku dniach. W tym czasie klient dostał już dwie inne oferty. Automatyzujemy pracę z zapytaniami: klient wypełnia analizę potrzeb, system przygotowuje szkic oferty z programów i cennika, a opiekun dopracowuje go i wysyła tego samego dnia.",
    bullets: [
      "Formularz analizy potrzeb dla firm",
      "Szkic oferty z programów i cennika",
      "Follow-up i rejestr ofert z wynikami",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy szkoleniowe sprzedające szkolenia zamknięte i programy rozwojowe" },
    { label: "Co automatyzujemy", value: "Zapytania, analiza potrzeb, oferty, follow-up, rejestr, raporty" },
    { label: "Narzędzia", value: "Formularz, CRM, szablony, model AI, n8n" },
    { label: "Zasada", value: "Ofertę zatwierdza i wysyła opiekun" },
  ],
  symptoms: {
    title: "Kiedy pracę z ofertami warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, firma traci klientów na etapie oferty.",
    items: [
      "Oferta szkolenia zamkniętego powstaje kilka dni.",
      "Analiza potrzeb odbywa się telefonicznie i jest notowana różnie.",
      "Każdą ofertę składa się od zera.",
      "Nikt nie przypomina o kontakcie po wysłaniu oferty.",
      "Zapytania są w skrzynkach różnych osób.",
      "Nie wiadomo, ile ofert kończy się zamówieniem.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja ofert",
    paragraphs: [
      "Zapytanie od firmy, ze strony, maila lub telefonu, trafia do rejestru. Klient dostaje formularz analizy potrzeb: temat, cele, liczba i poziom uczestników, forma, termin, budżet. Opiekun widzi zapytanie z kompletem informacji albo listą braków.",
      "Na podstawie analizy potrzeb, programów firmy i cennika AI przygotowuje szkic oferty: proponowany program, forma, trener, cena, warunki. Opiekun dopracowuje szkic, dopasowuje program i wysyła ofertę. Oferta powstaje w szablonie firmy.",
      "Po wysłaniu system przypomina opiekunowi o kontakcie z klientem. Każda oferta ma status: wysłana, w negocjacjach, przyjęta, odrzucona z powodem. Po przyjęciu szkolenie trafia do rejestru z kompletem danych.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja ofert",
    lead: "Zakres dopasowujemy do sposobu sprzedaży szkoleń.",
    items: [
      { title: "Rejestr zapytań", body: "Wszystkie zapytania od firm w jednym miejscu." },
      { title: "Analiza potrzeb", body: "Formularz dla klienta z listą braków." },
      { title: "Biblioteka programów", body: "Programy i moduły firmy jako źródło ofert." },
      { title: "Szkic oferty z AI", body: "Program, forma, trener i cena z danych firmy." },
      { title: "Szablon oferty", body: "Oferta w stylu firmy." },
      { title: "Follow-up", body: "Przypomnienia o kontakcie po wysłaniu." },
      { title: "Statusy i powody", body: "Przyjęte, odrzucone, z powodami." },
      { title: "Szkolenie po akceptacji", body: "Dane oferty w rejestrze szkoleń." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zapytania do zamówienia.",
    items: [
      {
        title: "Zapytanie ze strony",
        trigger: "Firma pyta o szkolenie z negocjacji",
        steps: ["Formularz analizy potrzeb dla klienta", "Szkic oferty z programów i cennika", "Opiekun dopracowuje i wysyła ofertę tego samego dnia"],
        result: "Klient dostaje ofertę, zanim zapyta konkurencję.",
      },
      {
        title: "Brak odpowiedzi",
        trigger: "Tydzień po wysłaniu oferty",
        steps: ["Przypomnienie dla opiekuna", "Szkic wiadomości do klienta", "Status oferty po kontakcie"],
        result: "Żadna oferta nie zostaje bez kontaktu.",
      },
    ],
  },
  example: {
    title: "Oferty przed i po automatyzacji",
    lead: "Przykład firmy szkoleniowej sprzedającej szkolenia zamknięte dla działów HR i sprzedaży.",
    rows: [
      { label: "Czas do oferty", before: "Kilka dni.", after: "Ten sam dzień." },
      { label: "Analiza potrzeb", before: "Notatki z rozmowy.", after: "Formularz i lista braków." },
      { label: "Follow-up", before: "Z pamięci.", after: "Przypomnienia." },
      { label: "Wyniki", before: "Nieznane.", after: "Raport z powodami." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od biblioteki programów i szablonu oferty.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Zbieramy programy, cennik i przykładowe oferty.", fromYou: "Programy i oferty." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy formularz analizy potrzeb, bibliotekę programów i szablon.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływ i testujemy na nowych zapytaniach.", fromYou: "Opiekun oceniający szkice." },
      { title: "Start i opieka", duration: "stale", body: "Rozwijamy bibliotekę i raporty.", fromYou: "Uwagi opiekunów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rejestru zapytań i analizy potrzeb.",
    items: [
      { name: "Rejestr i analiza", description: "Dla firm, które chcą uporządkować zapytania.", includes: ["Rejestr zapytań", "Analiza potrzeb", "Follow-up", "Statusy"] },
      { name: "Oferty z AI", description: "Dla firm z wieloma zapytaniami.", includes: ["Wszystko z wariantu Rejestr i analiza", "Biblioteka programów", "Szkic oferty z AI", "Szablon oferty"] },
      { name: "Sprzedaż szkoleń", description: "Dla firm, które chcą mierzyć sprzedaż.", includes: ["Wszystko z wariantu Oferty z AI", "Raport ofert", "Powody odrzuceń", "Szkolenie po akceptacji"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba zapytań i ofert,",
      "liczba programów i ich forma,",
      "integracja z CRM,",
      "zakres wykorzystania AI,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Szkic oferty z błędną ceną lub zakresem.", mitigation: "Szkic sprawdza i dopracowuje opiekun przed wysłaniem." },
      { risk: "Oferta zbyt ogólna.", mitigation: "Szkic korzysta z analizy potrzeb i programów firmy, a opiekun dopasowuje szczegóły." },
      { risk: "Klient nie wypełni formularza.", mitigation: "Opiekun może wypełnić go po rozmowie telefonicznej." },
      { risk: "Dane klienta w narzędziach AI.", mitigation: "Do AI trafia analiza potrzeb bez zbędnych danych osobowych." },
    ],
  },
  faq: [
    { question: "Czy AI przygotuje ofertę za opiekuna?", answer: "Przygotuje szkic, który opiekun dopracowuje i wysyła." },
    { question: "Skąd AI bierze programy?", answer: "Z biblioteki programów i modułów firmy, nie z ogólnej wiedzy modelu." },
    { question: "Czy klient musi wypełnić formularz?", answer: "Nie musi, ale to skraca czas przygotowania oferty. Opiekun może go wypełnić po rozmowie." },
    { question: "Czy oferta będzie w naszym wzorze?", answer: "Tak, w szablonie firmy." },
    { question: "Czy zobaczymy, dlaczego tracimy oferty?", answer: "Tak, jeśli oferty dostają status i powód odrzucenia." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "ai-w-obsludze-dokumentow", "automatyzacja-dla-firm-uslugowych"],
  relatedProcessSlugs: ["ofertowanie", "obsluga-zapytan-i-leadow"],
  relatedToolSlugs: ["hubspot", "n8n", "chatgpt"],
  relatedArticleSlugs: ["sprzedaz-szkolen-dla-firm", "ai-w-szkoleniach", "automatyzacja-obslugi-leadow-sprzedazowych"],
};
