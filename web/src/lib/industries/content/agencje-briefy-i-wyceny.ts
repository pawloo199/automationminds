import type { IndustryPageContent } from "../types";

export const agencjeBriefyIWyceny: IndustryPageContent = {
  industrySlug: "agencje-marketingowe",
  subSlug: "briefy-i-wyceny",
  name: "Briefy i wyceny",
  excerpt: "Brief od klienta uporządkowany według szablonu agencji, wycena na podstawie podobnych projektów i oferta gotowa w kilka chwil.",
  metaTitle: "Briefy i wyceny w agencji marketingowej: automatyzacja",
  metaDescription:
    "Automatyzujemy briefy i wyceny w agencji: brief z maila według szablonu, lista braków, wycena na podstawie podobnych projektów, oferta i follow-up.",
  primaryKeyword: "wycena projektów w agencji marketingowej",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Agencje marketingowe: briefy i wyceny",
    title: "Od briefu do oferty bez przepisywania i liczenia od zera",
    lead: "Brief przychodzi mailem, w załączniku albo jako notatka ze spotkania. Account przepisuje go do narzędzia, dopytuje o brakujące informacje, a potem razem z zespołem liczy wycenę od zera, choć podobne projekty były już realizowane. Automatyzujemy tę drogę: brief jest porządkowany według szablonu agencji z listą braków, wycena powstaje na podstawie podobnych projektów, a oferta z szablonu trafia do klienta po akceptacji.",
    bullets: [
      "Brief według szablonu agencji z listą braków",
      "Wycena na podstawie podobnych wcześniejszych projektów",
      "Oferta z szablonu i przypomnienie o odpowiedzi",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje realizujące projekty i kampanie na podstawie briefów" },
    { label: "Co automatyzujemy", value: "Briefy, listy braków, wyceny, oferty, follow-up, start projektu" },
    { label: "Narzędzia", value: "Poczta, formularz, narzędzie projektowe, szablony ofert, model AI, n8n" },
    { label: "Zasada", value: "Wycenę i zakres zatwierdza account lub właściciel" },
  ],
  symptoms: {
    title: "Kiedy briefy i wyceny warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, przygotowanie oferty trwa dłużej, niż powinno.",
    items: [
      "Briefy przychodzą w różnych formach i ktoś je przepisuje.",
      "Brakujące informacje wychodzą dopiero w trakcie projektu.",
      "Wycena powstaje od zera, choć podobne projekty były już realizowane.",
      "Oferty mają różny wygląd w zależności od osoby.",
      "Oferta bez odpowiedzi nie jest przypominana.",
      "Po akceptacji oferty projekt w narzędziu zakłada się ręcznie.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja briefów i wycen",
    paragraphs: [
      "Brief trafia do systemu z maila, formularza lub notatki ze spotkania. AI porządkuje go według szablonu agencji: cel, grupa docelowa, kanały, terminy, budżet, materiały, osoby decyzyjne. Informacje, których brakuje, trafiają na listę pytań do klienta, którą account wysyła jednym mailem.",
      "Na podstawie zakresu system wyszukuje podobne wcześniejsze projekty i pokazuje, ile czasu i budżetu zajęły poszczególne etapy. To punkt wyjścia do wyceny, którą account koryguje razem z zespołem. Oferta powstaje z szablonu agencji, z zakresem, harmonogramem i ceną.",
      "Wysłana oferta jest zapisana w CRM lub narzędziu sprzedażowym, a account dostaje przypomnienie, jeśli klient nie odpowiada. Po akceptacji projekt zakłada się w narzędziu projektowym automatycznie, z zakresem, budżetem godzinowym i zespołem.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja briefów i wycen",
    lead: "Zakres dopasowujemy do sposobu pracy agencji.",
    items: [
      { title: "Formularz briefu", body: "Prosty formularz dla klientów, którzy wolą go od maila." },
      { title: "Porządkowanie briefu", body: "Brief z maila lub notatki według szablonu agencji." },
      { title: "Lista braków", body: "Pytania do klienta o brakujące informacje w jednym mailu." },
      { title: "Podobne projekty", body: "Wcześniejsze projekty o podobnym zakresie z czasem i budżetem." },
      { title: "Wycena", body: "Kalkulacja według etapów i stawek agencji, do korekty." },
      { title: "Oferta z szablonu", body: "Zakres, harmonogram i cena w jednolitym formacie." },
      { title: "Follow-up", body: "Przypomnienie dla accounta o ofercie bez odpowiedzi." },
      { title: "Start projektu", body: "Projekt w narzędziu po akceptacji, z budżetem godzinowym." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od briefu do startu projektu.",
    items: [
      {
        title: "Brief z maila",
        trigger: "Klient przysyła brief w treści maila i załączniku",
        steps: ["AI porządkuje brief według szablonu", "Lista brakujących informacji dla accounta", "Mail do klienta z pytaniami po akceptacji accounta"],
        result: "Zespół zaczyna pracę z kompletnym briefem.",
      },
      {
        title: "Wycena i oferta",
        trigger: "Brief jest kompletny",
        steps: ["Podobne projekty z czasem i budżetem", "Wycena według etapów do korekty", "Oferta z szablonu i przypomnienie o odpowiedzi"],
        result: "Oferta trafia do klienta szybciej i jest spójna z poprzednimi.",
      },
    ],
  },
  example: {
    title: "Briefy i wyceny przed i po automatyzacji",
    lead: "Przykład agencji realizującej kampanie i projekty dla kilkudziesięciu klientów rocznie.",
    rows: [
      { label: "Brief", before: "Przepisywany z maili.", after: "Uporządkowany według szablonu." },
      { label: "Braki", before: "Wychodzą w trakcie projektu.", after: "Lista pytań przed wyceną." },
      { label: "Wycena", before: "Od zera.", after: "Na podstawie podobnych projektów." },
      { label: "Start", before: "Projekt zakładany ręcznie.", after: "Projekt w narzędziu po akceptacji." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Najwięcej daje dobry szablon briefu i uporządkowana historia projektów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy briefy, wyceny i oferty z ostatnich miesięcy oraz dane o czasie pracy.", fromYou: "Przykładowe briefy, wyceny i oferty." },
      { title: "Szablony i projekt", duration: "około tygodnia", body: "Ustalamy szablon briefu, strukturę wyceny, szablon oferty i zasady follow-upu.", fromYou: "Akceptacja szablonów." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływy i testujemy je na nowych briefach.", fromYou: "Accounci testujący rozwiązanie." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy cały zespół i dopracowujemy wyceny wraz z nowymi projektami.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od briefów, a wyceny dodać później.",
    items: [
      { name: "Briefy", description: "Dla agencji, które chcą zaczynać projekty z kompletem informacji.", includes: ["Formularz briefu", "Porządkowanie briefu z AI", "Lista braków", "Brief w narzędziu projektowym"] },
      { name: "Briefy i oferty", description: "Dla agencji, które chcą szybciej wysyłać oferty.", includes: ["Wszystko z wariantu Briefy", "Oferta z szablonu", "Follow-up", "Start projektu po akceptacji"] },
      { name: "Pełny proces", description: "Dla agencji, które chcą wyceniać na podstawie danych.", includes: ["Wszystko z wariantu Briefy i oferty", "Podobne projekty", "Wycena według etapów", "Raport skuteczności ofert"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba rodzajów projektów i szablonów,",
      "dostępność danych o czasie pracy w projektach,",
      "narzędzie projektowe i CRM,",
      "zakres wykorzystania AI,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "AI źle zrozumie brief.", mitigation: "Account sprawdza uporządkowany brief i listę braków przed wysłaniem do klienta." },
      { risk: "Wycena oparta na nietrafionych przykładach.", mitigation: "Podobne projekty to punkt wyjścia, a wycenę koryguje i zatwierdza account." },
      { risk: "Brak danych o czasie pracy w historii.", mitigation: "Na początku wyceny opierają się na stawkach i etapach, a historia rośnie z każdym projektem." },
      { risk: "Klient poczuje, że rozmawia z automatem.", mitigation: "Wszystkie wiadomości wychodzą od accounta, po jego akceptacji." },
    ],
  },
  faq: [
    { question: "Czy klient musi wypełniać formularz?", answer: "Nie. Brief może przyjść mailem lub z notatki ze spotkania. Formularz to opcja dla klientów, którzy go wolą." },
    { question: "Skąd system wie o podobnych projektach?", answer: "Z historii projektów w narzędziu projektowym i danych o czasie pracy. Im lepiej są uporządkowane, tym trafniejsze są przykłady." },
    { question: "Czy AI policzy wycenę?", answer: "Wycenę liczy system według stawek i etapów. AI pomaga uporządkować brief i znaleźć podobne projekty. Wycenę zatwierdza człowiek." },
    { question: "Czy oferty mogą być w obcych językach?", answer: "Tak. Szablony przygotowujemy w językach, w których pracujecie z klientami." },
    { question: "Czy to działa z naszym narzędziem projektowym?", answer: "Pracujemy z popularnymi narzędziami projektowymi i CRM, które udostępniają API. Zakres sprawdzamy przy przeglądzie." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "ai-w-obsludze-dokumentow"],
  relatedProcessSlugs: ["ofertowanie", "obsluga-zapytan-i-leadow"],
  relatedToolSlugs: ["hubspot", "n8n", "google-workspace", "chatgpt"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-agencji-marketingowej", "rentownosc-klientow-agencji", "automatyzacja-obslugi-leadow-sprzedazowych"],
};
