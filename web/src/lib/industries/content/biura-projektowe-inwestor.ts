import type { IndustryPageContent } from "../types";

export const biuraProjektoweInwestor: IndustryPageContent = {
  industrySlug: "biura-projektowe",
  subSlug: "komunikacja-z-inwestorem",
  name: "Komunikacja z inwestorem",
  excerpt: "Uwagi inwestora w jednym rejestrze, zmiany zakresu z akceptacją, status projektu bez dzwonienia i historia ustaleń dostępna dla zespołu.",
  metaTitle: "Komunikacja z inwestorem w biurze projektowym",
  metaDescription:
    "Automatyzujemy komunikację z inwestorem w biurze projektowym: rejestr uwag, zmiany zakresu z akceptacją, status projektu i historia ustaleń dla zespołu.",
  primaryKeyword: "komunikacja z inwestorem",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Biura projektowe: komunikacja z inwestorem",
    title: "Uwagi, zmiany i akceptacje inwestora w jednym miejscu, a nie w wątkach maili",
    lead: "Inwestor przysyła uwagi do koncepcji w trzech mailach, dzwoni z kolejną prośbą, a po miesiącu pyta, dlaczego jego uwaga nie została uwzględniona. Zmiany zakresu ustalane w rozmowie nie są nigdzie zapisane, a potem trudno je rozliczyć. Automatyzujemy komunikację z inwestorem: uwagi trafiają do rejestru, zmiany zakresu wymagają akceptacji, a inwestor dostaje status projektu bez dzwonienia.",
    bullets: [
      "Uwagi inwestora w rejestrze z odpowiedziami",
      "Zmiany zakresu z akceptacją i wpływem na koszt",
      "Status projektu i historia ustaleń",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Pracownie architektoniczne i biura projektowe pracujące z inwestorami prywatnymi i firmami" },
    { label: "Co automatyzujemy", value: "Uwagi, odpowiedzi, zmiany zakresu, akceptacje, status, historia" },
    { label: "Narzędzia", value: "Rejestr, poczta, formularz, model AI, n8n" },
    { label: "Zasada", value: "Odpowiedzi na uwagi i decyzje projektowe należą do projektanta" },
  ],
  symptoms: {
    title: "Kiedy komunikację z inwestorem warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, ustalenia z inwestorem są źródłem sporów.",
    items: [
      "Uwagi inwestora są rozproszone w mailach i rozmowach.",
      "Inwestor pyta, dlaczego jego uwaga nie została uwzględniona.",
      "Zmiany zakresu ustalane ustnie nie są zapisane.",
      "Prace dodatkowe trudno rozliczyć.",
      "Inwestor dzwoni z pytaniem o status.",
      "Nowa osoba w projekcie nie zna historii ustaleń.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja komunikacji z inwestorem",
    paragraphs: [
      "Uwagi inwestora, z maili, notatek ze spotkań lub formularza, trafiają do rejestru projektu jako osobne pozycje: czego dotyczą, kiedy zgłoszone, kto odpowiada. AI może pomóc wyodrębnić uwagi z długiego maila lub notatki głosowej ze spotkania. Projektant odpowiada na każdą uwagę: uwzględniona, nieuwzględniona z uzasadnieniem, do omówienia.",
      "Gdy prośba inwestora wykracza poza zakres umowy, trafia do rejestru zmian z opisem i wpływem na koszt i termin. Inwestor akceptuje zmianę, a akceptacja jest zapisana. Takie zmiany są podstawą do rozliczenia prac dodatkowych.",
      "Inwestor dostaje regularną informację o statusie projektu: zakończone etapy, najbliższe terminy, uzgodnienia w toku, uwagi do odpowiedzi. Historia ustaleń jest dostępna dla całego zespołu projektu.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja komunikacji",
    lead: "Zakres dopasowujemy do rodzaju inwestorów i projektów.",
    items: [
      { title: "Rejestr uwag", body: "Uwagi jako pozycje z odpowiedzialnym i statusem." },
      { title: "Uwagi z AI", body: "Wyodrębnione z maili i notatek, do sprawdzenia." },
      { title: "Odpowiedzi", body: "Uwzględniona, nieuwzględniona z uzasadnieniem, do omówienia." },
      { title: "Zmiany zakresu", body: "Opis, wpływ na koszt i termin, akceptacja." },
      { title: "Notatki ze spotkań", body: "Ustalenia i zadania wysłane inwestorowi." },
      { title: "Status projektu", body: "Regularna informacja dla inwestora." },
      { title: "Historia", body: "Ustalenia dostępne dla zespołu." },
      { title: "Prace dodatkowe", body: "Zestawienie do rozliczenia." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od uwagi do odpowiedzi.",
    items: [
      {
        title: "Uwagi do koncepcji",
        trigger: "Inwestor przysyła długiego maila z uwagami",
        steps: ["Wyodrębnienie uwag do rejestru", "Projektant odpowiada na każdą", "Zestawienie odpowiedzi dla inwestora"],
        result: "Inwestor widzi, co zostało uwzględnione i dlaczego.",
      },
      {
        title: "Zmiana zakresu",
        trigger: "Inwestor prosi o dodatkowy wariant elewacji",
        steps: ["Zmiana w rejestrze z wpływem na koszt i termin", "Prośba o akceptację", "Akceptacja zapisana, prace dodatkowe w zestawieniu"],
        result: "Zmiana rozliczona, bez sporu po projekcie.",
      },
    ],
  },
  example: {
    title: "Komunikacja przed i po automatyzacji",
    lead: "Przykład pracowni projektującej domy dla inwestorów prywatnych.",
    rows: [
      { label: "Uwagi", before: "W mailach.", after: "W rejestrze z odpowiedziami." },
      { label: "Zmiany", before: "Ustne.", after: "Z akceptacją." },
      { label: "Status", before: "Telefony.", after: "Regularna informacja." },
      { label: "Historia", before: "W głowie projektanta.", after: "Dostępna dla zespołu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym biurze.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od rejestru uwag w kilku projektach.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś zbieracie uwagi i ustalenia.", fromYou: "Rozmowa z projektantami." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy rejestr, zasady zmian i treści informacji.", fromYou: "Akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Uruchamiamy rejestr w kilku projektach.", fromYou: "Projektant w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkie projekty.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rejestru uwag.",
    items: [
      { name: "Rejestr uwag", description: "Dla biur, które chcą uporządkować uwagi.", includes: ["Rejestr uwag", "Odpowiedzi", "Zestawienie dla inwestora", "Historia"] },
      { name: "Uwagi i zmiany", description: "Dla biur, które chcą rozliczać prace dodatkowe.", includes: ["Wszystko z wariantu Rejestr uwag", "Zmiany zakresu", "Akceptacje", "Prace dodatkowe"] },
      { name: "Pełna komunikacja", description: "Dla biur z wymagającymi inwestorami.", includes: ["Wszystko z wariantu Uwagi i zmiany", "Uwagi z AI", "Notatki ze spotkań", "Status projektu"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba projektów i inwestorów,",
      "kanały komunikacji,",
      "zasady zmian zakresu,",
      "zakres wykorzystania AI,",
      "integracja z harmonogramem i czasem pracy.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "AI pominie uwagę z maila.", mitigation: "Wyodrębnione uwagi sprawdza projektant, a mail jest dołączony do rejestru." },
      { risk: "Inwestor nie zaakceptuje zmiany na piśmie.", mitigation: "Przypomnienie i informacja dla kierownika projektu przed rozpoczęciem prac." },
      { risk: "Status przekaże informację, której inwestor nie powinien dostać.", mitigation: "Treść statusu ustala kierownik projektu." },
      { risk: "Zespół nie będzie korzystał z rejestru.", mitigation: "Rejestr jest połączony z pocztą, a dodanie uwagi zajmuje chwilę." },
    ],
  },
  faq: [
    { question: "Czy inwestor musi korzystać z nowego narzędzia?", answer: "Nie. Może pisać maile i dzwonić jak dotąd. Uwagi trafiają do rejestru po stronie biura." },
    { question: "Czy AI wyodrębni uwagi z maila?", answer: "Tak, jako szkic do sprawdzenia przez projektanta." },
    { question: "Czy zmiany zakresu wymagają podpisu?", answer: "Formę akceptacji ustala biuro, np. potwierdzenie mailem lub podpis elektroniczny." },
    { question: "Czy inwestor zobaczy status projektu?", answer: "Tak, w regularnej informacji przygotowanej według zasad biura." },
    { question: "Czy historia ustaleń będzie dostępna po zakończeniu projektu?", answer: "Tak, w archiwum projektu." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "ai-w-obsludze-dokumentow", "automatyzacja-dla-firm-uslugowych"],
  relatedProcessSlugs: ["obsluga-reklamacji", "obieg-umow"],
  relatedToolSlugs: ["microsoft-365", "n8n", "chatgpt"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
