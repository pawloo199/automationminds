import type { IndustryPageContent } from "../types";

export const firmySerwisoweWyceny: IndustryPageContent = {
  industrySlug: "firmy-serwisowe",
  subSlug: "wyceny-i-oferty",
  name: "Wyceny i oferty montażu",
  excerpt: "Wyceny instalacji i napraw z szablonów i cenników, dane z wizji lokalnej, oferta w kilka minut, przypomnienia o odpowiedzi i zlecenie po akceptacji.",
  metaTitle: "Wyceny instalacji i oferty montażu: automatyzacja",
  metaDescription:
    "Automatyzujemy wyceny w firmach instalacyjnych: dane z wizji lokalnej, oferta z szablonu i cennika, przypomnienia o odpowiedzi i zlecenie po akceptacji.",
  primaryKeyword: "wyceny instalacji automatyzacja",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy serwisowe: wyceny i oferty",
    title: "Oferta montażu w kilka minut po wizji lokalnej, a nie po tygodniu",
    lead: "Klient pyta o montaż klimatyzacji, pompy ciepła albo instalacji fotowoltaicznej. Po wizji lokalnej handlowiec lub technik wraca do biura, liczy materiały, szuka cen i składa ofertę w edytorze tekstu. Zanim ją wyśle, klient ma już dwie inne. Automatyzujemy wyceny: dane z wizji trafiają do formularza, oferta powstaje z szablonu i cennika, a system przypomina o odpowiedzi i zakłada zlecenie po akceptacji.",
    bullets: [
      "Dane z wizji lokalnej w formularzu na telefonie",
      "Oferta z szablonu i cennika w kilka minut",
      "Przypomnienia i zlecenie po akceptacji",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy instalacyjne i montażowe, serwisy oferujące modernizacje" },
    { label: "Co automatyzujemy", value: "Wizja lokalna, wycena, oferta, przypomnienia, zlecenie" },
    { label: "Narzędzia", value: "Formularz, cennik, szablony, CRM, n8n" },
    { label: "Zasada", value: "Cenę i zakres ostatecznie ustala firma" },
  ],
  symptoms: {
    title: "Kiedy wyceny warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, firma traci zlecenia na etapie oferty.",
    items: [
      "Oferta powstaje kilka dni po wizji lokalnej.",
      "Każdą ofertę składa się od zera w edytorze tekstu.",
      "Ceny materiałów w ofertach są nieaktualne.",
      "Notatki z wizji lokalnej są na kartce lub w telefonie technika.",
      "Nikt nie przypomina klientowi o ofercie, na którą nie odpowiedział.",
      "Nie wiadomo, ile ofert kończy się zleceniem.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja wycen",
    paragraphs: [
      "Podczas wizji lokalnej technik wypełnia formularz na telefonie: wymiary, rodzaj budynku, miejsce montażu, trasy instalacji, zdjęcia, uwagi. Formularz podpowiada pytania, o które łatwo zapomnieć.",
      "Na podstawie danych z formularza i cennika system przygotowuje wycenę: urządzenia, materiały, robociznę i warianty. Oferta powstaje z szablonu firmy, z opisem, zdjęciami i warunkami. AI może przygotować szkic opisu dopasowany do sytuacji klienta. Handlowiec sprawdza ofertę i wysyła.",
      "Jeśli klient nie odpowiada, dostaje przypomnienie, a handlowiec zadanie, żeby zadzwonić. Po akceptacji oferty system zakłada zlecenie montażu, zamówienie materiałów i termin w grafiku ekipy.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja wycen",
    lead: "Zakres dopasowujemy do rodzaju instalacji i sposobu sprzedaży.",
    items: [
      { title: "Formularz wizji lokalnej", body: "Wymiary, zdjęcia i uwagi na telefonie." },
      { title: "Cennik", body: "Urządzenia, materiały i robocizna w jednym miejscu." },
      { title: "Kalkulacja", body: "Wycena wariantów na podstawie danych z wizji." },
      { title: "Oferta z szablonu", body: "Opis, zdjęcia, warunki i warianty." },
      { title: "Opis z AI", body: "Szkic dopasowany do sytuacji klienta, do sprawdzenia." },
      { title: "Przypomnienia", body: "Dla klienta i handlowca, gdy brak odpowiedzi." },
      { title: "Zlecenie po akceptacji", body: "Montaż, materiały i termin ekipy." },
      { title: "Raport ofert", body: "Oferty wysłane, zaakceptowane i utracone." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od wizji lokalnej do zlecenia.",
    items: [
      {
        title: "Oferta montażu klimatyzacji",
        trigger: "Technik kończy wizję lokalną",
        steps: ["Formularz z wymiarami i zdjęciami", "Wycena dwóch wariantów z cennika", "Oferta do sprawdzenia i wysyłka tego samego dnia"],
        result: "Klient dostaje ofertę, zanim zdąży zapytać konkurencję.",
      },
      {
        title: "Akceptacja oferty",
        trigger: "Klient akceptuje ofertę",
        steps: ["Zlecenie montażu z danymi z wizji", "Zamówienie materiałów", "Propozycja terminu montażu"],
        result: "Montaż przygotowany bez przepisywania danych.",
      },
    ],
  },
  example: {
    title: "Wyceny przed i po automatyzacji",
    lead: "Przykład firmy montującej klimatyzację i pompy ciepła.",
    rows: [
      { label: "Czas do oferty", before: "Kilka dni.", after: "Ten sam dzień." },
      { label: "Dane z wizji", before: "Kartka i zdjęcia w telefonie.", after: "Formularz przy ofercie." },
      { label: "Ceny", before: "Ręcznie, bywają nieaktualne.", after: "Z aktualnego cennika." },
      { label: "Odpowiedź klienta", before: "Nikt nie przypomina.", after: "Przypomnienia i zadania." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od formularza wizji i szablonu oferty dla najczęstszej instalacji.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś powstają wyceny i skąd pochodzą ceny.", fromYou: "Przykładowe oferty i cennik." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy formularz wizji, zasady kalkulacji i szablon oferty.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływ i testujemy go na nowych wizjach lokalnych.", fromYou: "Handlowiec lub technik oceniający oferty." },
      { title: "Start i opieka", duration: "stale", body: "Dokładamy kolejne rodzaje instalacji i aktualizujemy cennik.", fromYou: "Informacja o zmianach cen." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od szablonu oferty i cennika.",
    items: [
      { name: "Oferta z szablonu", description: "Dla firm, które chcą szybciej wysyłać oferty.", includes: ["Cennik", "Szablon oferty", "Przypomnienia", "Raport ofert"] },
      { name: "Wizja i wycena", description: "Dla firm instalacyjnych z wizjami lokalnymi.", includes: ["Wszystko z wariantu Oferta z szablonu", "Formularz wizji lokalnej", "Kalkulacja wariantów", "Opis z AI"] },
      { name: "Od oferty do montażu", description: "Dla firm, które chcą połączyć sprzedaż z realizacją.", includes: ["Wszystko z wariantu Wizja i wycena", "Zlecenie po akceptacji", "Zamówienie materiałów", "Termin ekipy"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba rodzajów instalacji,",
      "złożoność zasad kalkulacji,",
      "stan cennika i jego aktualizacja,",
      "integracja z CRM i programem do faktur,",
      "zakres wykorzystania AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędna wycena z niepełnych danych.", mitigation: "Formularz wymaga najważniejszych pól, a ofertę sprawdza handlowiec." },
      { risk: "Nieaktualne ceny materiałów.", mitigation: "Cennik jest w jednym miejscu, z datą aktualizacji i przypomnieniem." },
      { risk: "Opis z AI obieca coś, czego firma nie zrobi.", mitigation: "Opis powstaje z danych wizji i wytycznych firmy, a handlowiec go sprawdza." },
      { risk: "Nietypowa instalacja nie pasuje do szablonu.", mitigation: "Handlowiec może zmienić każdą pozycję oferty." },
    ],
  },
  faq: [
    { question: "Czy oferta powstanie bez udziału handlowca?", answer: "Powstaje automatycznie, ale handlowiec ją sprawdza i wysyła." },
    { question: "Czy obsłużycie dofinansowania i programy dotacyjne?", answer: "Możemy dodać do oferty informacje i dokumenty potrzebne do wniosku. Ocena kwalifikowalności należy do firmy lub klienta." },
    { question: "Czy cennik może pochodzić od hurtowni?", answer: "Tak, jeśli hurtownia udostępnia cennik w pliku lub przez API." },
    { question: "Czy klient może zaakceptować ofertę online?", answer: "Tak, przez link w ofercie. Akceptacja uruchamia zlecenie." },
    { question: "Czy zobaczymy, ile ofert wygrywamy?", answer: "Tak, raport pokazuje oferty według statusów, handlowców i rodzajów instalacji." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "ai-w-obsludze-dokumentow", "automatyzacja-dla-firm-uslugowych"],
  relatedProcessSlugs: ["ofertowanie"],
  relatedToolSlugs: ["pipedrive", "google-workspace", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
