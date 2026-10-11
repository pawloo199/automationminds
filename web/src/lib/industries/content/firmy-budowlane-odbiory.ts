import type { IndustryPageContent } from "../types";

export const firmyBudowlaneOdbiory: IndustryPageContent = {
  industrySlug: "firmy-budowlane",
  subSlug: "odbiory-i-usterki",
  name: "Odbiory, usterki i gwarancje",
  excerpt: "Protokoły odbioru na telefonie, lista usterek ze zdjęciami, przydział do podwykonawców, terminy usunięcia i zgłoszenia gwarancyjne po zakończeniu budowy.",
  metaTitle: "Protokoły odbioru robót i lista usterek: automatyzacja",
  metaDescription:
    "Automatyzujemy odbiory: protokoły na telefonie, lista usterek ze zdjęciami, przydział do podwykonawców, terminy usunięcia i zgłoszenia gwarancyjne.",
  primaryKeyword: "protokoły odbioru robót",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy budowlane: odbiory i usterki",
    title: "Usterki z odbiorów usunięte na czas, a nie zapomniane w arkuszu",
    lead: "Odbiór kończy się listą usterek. Lista trafia do arkusza, arkusz do podwykonawców, a potem nikt nie wie, co zostało usunięte. Inwestor dzwoni, termin się zbliża, a po roku przychodzą zgłoszenia gwarancyjne, których nikt nie umie przypisać. Automatyzujemy odbiory: protokół i usterki powstają na telefonie ze zdjęciami, każda usterka ma wykonawcę i termin, a zgłoszenia gwarancyjne trafiają do tego samego rejestru.",
    bullets: [
      "Protokół odbioru i usterki na telefonie ze zdjęciami",
      "Przydział usterek do podwykonawców z terminami",
      "Zgłoszenia gwarancyjne w tym samym rejestrze",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Generalni wykonawcy, firmy wykonawcze i deweloperzy" },
    { label: "Co automatyzujemy", value: "Protokoły, usterki, przydział, terminy, gwarancje, raporty" },
    { label: "Narzędzia", value: "Formularz mobilny, rejestr, poczta, n8n" },
    { label: "Zasada", value: "Odbiór i ocenę usunięcia usterki robi człowiek" },
  ],
  symptoms: {
    title: "Kiedy odbiory warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, usterki zabierają więcej czasu, niż powinny.",
    items: [
      "Listy usterek są w arkuszach i notatkach.",
      "Podwykonawcy dostają usterki mailem, bez zdjęć i lokalizacji.",
      "Nie wiadomo, które usterki są usunięte.",
      "Inwestor pyta o postęp, a odpowiedź wymaga obdzwonienia podwykonawców.",
      "Zgłoszenia gwarancyjne przychodzą do różnych osób.",
      "Trudno przypisać usterkę gwarancyjną do podwykonawcy.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja odbiorów",
    paragraphs: [
      "Podczas odbioru kierownik lub inspektor wypełnia formularz na telefonie: element, lokalizacja, opis, zdjęcie. Każda usterka jest osobnym wpisem z przypisaniem do branży i podwykonawcy, który wykonywał prace. Protokół powstaje z listy usterek według wzoru firmy.",
      "Podwykonawca dostaje swoją listę usterek z opisami, zdjęciami i terminem. Po usunięciu zgłasza to przez formularz ze zdjęciem, a kierownik potwierdza. Przed terminem system przypomina, a po terminie informuje kierownika. Inwestor może dostawać zestawienie postępu.",
      "Po przekazaniu budowy zgłoszenia gwarancyjne trafiają do tego samego rejestru, przez formularz dla inwestora lub mieszkańców. System podpowiada podwykonawcę na podstawie branży i lokalizacji, a terminy gwarancji są przy umowach.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja odbiorów",
    lead: "Zakres dopasowujemy do rodzaju budów i wymagań inwestorów.",
    items: [
      { title: "Formularz usterki", body: "Element, lokalizacja, opis i zdjęcie." },
      { title: "Protokół", body: "Z listy usterek według wzoru firmy." },
      { title: "Przydział", body: "Do branży i podwykonawcy." },
      { title: "Terminy", body: "Usunięcia usterek, z przypomnieniami." },
      { title: "Zgłoszenie usunięcia", body: "Przez podwykonawcę, ze zdjęciem." },
      { title: "Potwierdzenie", body: "Przez kierownika." },
      { title: "Zestawienie dla inwestora", body: "Postęp usuwania usterek." },
      { title: "Gwarancje", body: "Zgłoszenia w tym samym rejestrze, z terminami gwarancji." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od odbioru do zamkniętej usterki.",
    items: [
      {
        title: "Odbiór mieszkania",
        trigger: "Odbiór lokalu z nabywcą",
        steps: ["Usterki na telefonie ze zdjęciami", "Protokół z listy według wzoru", "Usterki do podwykonawców z terminami"],
        result: "Nabywca dostaje protokół od razu, a usterki trafiają do właściwych osób.",
      },
      {
        title: "Zgłoszenie gwarancyjne",
        trigger: "Mieszkaniec zgłasza pęknięcie płytek",
        steps: ["Zgłoszenie przez formularz ze zdjęciem", "Podpowiedź podwykonawcy i terminu gwarancji", "Przydział i informacja dla mieszkańca"],
        result: "Zgłoszenie gwarancyjne obsłużone bez szukania dokumentów.",
      },
    ],
  },
  example: {
    title: "Odbiory przed i po automatyzacji",
    lead: "Przykład wykonawcy budynków mieszkalnych.",
    rows: [
      { label: "Usterki", before: "W arkuszach.", after: "Na telefonie ze zdjęciami." },
      { label: "Podwykonawcy", before: "Mail bez zdjęć.", after: "Lista z terminem i zdjęciem." },
      { label: "Postęp", before: "Obdzwanianie.", after: "Statusy na bieżąco." },
      { label: "Gwarancje", before: "Do różnych osób.", after: "Jeden rejestr." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od formularza usterek i jednego odbioru.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy wzory protokołów i sposób pracy z usterkami.", fromYou: "Wzory protokołów." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy formularz, protokół i zasady przydziału.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Uruchamiamy rejestr na jednym odbiorze.", fromYou: "Kierownik i podwykonawcy w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy kolejne budowy i gwarancje.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od formularza usterek i protokołu.",
    items: [
      { name: "Usterki i protokół", description: "Dla firm, które chcą skończyć z arkuszami.", includes: ["Formularz usterki", "Protokół", "Przydział", "Terminy"] },
      { name: "Usterki z podwykonawcami", description: "Dla firm z wieloma podwykonawcami.", includes: ["Wszystko z wariantu Usterki i protokół", "Zgłoszenie usunięcia", "Potwierdzenie", "Zestawienie dla inwestora"] },
      { name: "Odbiory i gwarancje", description: "Dla deweloperów i wykonawców osiedli.", includes: ["Wszystko z wariantu Usterki z podwykonawcami", "Formularz gwarancyjny", "Terminy gwarancji", "Raport usterek"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba budów, lokali i odbiorów,",
      "liczba podwykonawców,",
      "wzory protokołów,",
      "zakres obsługi gwarancji,",
      "integracja z innymi narzędziami.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Usterka przypisana do złego podwykonawcy.", mitigation: "Przydział sprawdza kierownik, a podwykonawca może go zakwestionować." },
      { risk: "Podwykonawca zgłosi usunięcie bez usunięcia.", mitigation: "Potwierdzenie przez kierownika na podstawie zdjęcia lub oględzin." },
      { risk: "Brak zasięgu podczas odbioru.", mitigation: "Formularz działa bez internetu." },
      { risk: "Zgłoszenie gwarancyjne po terminie.", mitigation: "Terminy gwarancji przy umowach, a zgłoszenie trafia do oceny człowieka." },
    ],
  },
  faq: [
    { question: "Czy protokół odbioru może być w naszym wzorze?", answer: "Tak. Protokół powstaje według wzoru firmy lub inwestora." },
    { question: "Czy podwykonawcy muszą mieć konto?", answer: "Nie. Dostają link do swojej listy usterek." },
    { question: "Czy nabywcy mieszkań mogą zgłaszać usterki?", answer: "Tak, przez formularz, bez zakładania konta." },
    { question: "Czy system oceni, czy usterka jest gwarancyjna?", answer: "Nie. Podpowiada termin gwarancji i podwykonawcę, a ocenę robi człowiek." },
    { question: "Czy zobaczymy, który podwykonawca ma najwięcej usterek?", answer: "Tak, raport pokazuje usterki według podwykonawców, branż i budów." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "cyfryzacja-danych-i-dokumentow", "projektowanie-baz-danych"],
  relatedProcessSlugs: ["obsluga-reklamacji"],
  relatedToolSlugs: ["airtable", "n8n", "google-workspace"],
  relatedArticleSlugs: ["cyfryzacja-firmy-budowlanej", "co-zautomatyzowac-w-firmie-budowlanej", "5-procesow-do-automatyzacji-w-malej-firmie"],
};
