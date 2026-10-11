import type { IndustryPageContent } from "../types";

export const spedycjaDokumentyPrzewozowe: IndustryPageContent = {
  industrySlug: "spedycja",
  subSlug: "dokumenty-przewozowe",
  name: "CMR i dokumenty przewozowe",
  excerpt: "CMR, potwierdzenia dostaw i inne dokumenty odczytane z AI, przypisane do zlecenia i sprawdzone pod kątem kompletności.",
  metaTitle: "CMR i dokumenty przewozowe: odczyt AI i obieg",
  metaDescription:
    "Automatyzujemy obieg dokumentów przewozowych w spedycji: odczyt CMR i potwierdzeń dostaw z AI, przypisanie do zlecenia, kontrola kompletności i archiwum.",
  primaryKeyword: "obieg dokumentów CMR",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Spedycja: dokumenty przewozowe",
    title: "CMR i dokumenty przewozowe przy zleceniu, a nie w skrzynce",
    lead: "Po dostawie zaczyna się szukanie dokumentów. CMR, potwierdzenia dostaw, dowody dostawy i faktury przewoźników przychodzą mailem, zdjęciem z telefonu albo pocztą, a bez nich nie da się zafakturować klienta ani zapłacić przewoźnikowi. Automatyzujemy ten obieg: dokumenty są odczytywane przez AI, przypisywane do zlecenia, sprawdzane pod kątem kompletności i uwag, a brakujące dokumenty są przypominane automatycznie.",
    bullets: [
      "Odczyt CMR i potwierdzeń dostaw z AI",
      "Dokumenty przypisane do zlecenia automatycznie",
      "Przypomnienia o brakujących dokumentach",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy spedycyjne, które czekają na dokumenty od przewoźników przed fakturowaniem" },
    { label: "Co automatyzujemy", value: "Przyjmowanie, odczyt, przypisanie, kontrolę i archiwizację dokumentów" },
    { label: "Narzędzia", value: "Poczta, TMS, model AI, magazyn dokumentów firmy, n8n" },
    { label: "Zasada", value: "Uwagi w dokumentach ocenia spedytor" },
  ],
  symptoms: {
    title: "Kiedy obieg dokumentów warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, dokumenty spowalniają fakturowanie i płatności.",
    items: [
      "CMR i potwierdzenia dostaw przychodzą w różnych formach i ktoś musi je przypisać do zleceń.",
      "Faktura dla klienta czeka, bo brakuje dokumentów od przewoźnika.",
      "Uwagi odbiorcy w CMR, np. o uszkodzeniu, wychodzą dopiero przy reklamacji.",
      "Nie wiadomo bez sprawdzania, dla których zleceń brakuje dokumentów.",
      "Oryginały dokumentów przychodzą pocztą z opóźnieniem i trudno je dopasować.",
      "Archiwum dokumentów to foldery i skrzynki, w których trudno cokolwiek znaleźć.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja dokumentów przewozowych",
    paragraphs: [
      "Dokumenty trafiają do systemu tymi kanałami, którymi dziś przychodzą: mailem od przewoźnika, zdjęciem od kierowcy, skanem oryginału. Model AI rozpoznaje rodzaj dokumentu i odczytuje z niego dane: numer zlecenia lub referencję, miejsca i daty załadunku i rozładunku, podpisy i pieczęcie oraz uwagi wpisane przez odbiorcę.",
      "Na podstawie odczytanych danych dokument jest przypisywany do zlecenia w TMS. System sprawdza, czy zlecenie ma komplet wymaganych dokumentów, i oznacza te z uwagami, np. o uszkodzeniu lub brakach. Uwagi trafiają do spedytora, bo to on ocenia, czy potrzebne są dalsze kroki.",
      "Gdy dokumentów brakuje, system przypomina przewoźnikowi, a zlecenie z kompletem dokumentów może przejść do rozliczenia. Dokumenty trafiają do archiwum z czytelną nazwą i powiązaniem ze zleceniem.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja dokumentów",
    lead: "Zakres dopasowujemy do wymagań klientów i sposobu pracy z przewoźnikami.",
    items: [
      { title: "Przyjmowanie dokumentów", body: "Dokumenty z maila, od kierowcy i ze skanów w jednym miejscu." },
      { title: "Rozpoznanie rodzaju", body: "CMR, potwierdzenie dostawy, faktura, dokument celny, inne." },
      { title: "Odczyt danych z AI", body: "Referencje, daty, miejsca, podpisy i uwagi odbiorcy." },
      { title: "Przypisanie do zlecenia", body: "Dokument przy właściwym zleceniu w TMS lub archiwum." },
      { title: "Kontrola kompletności", body: "Lista zleceń z brakującymi dokumentami." },
      { title: "Uwagi w dokumentach", body: "Oznaczenie uwag o szkodach lub brakach do oceny spedytora." },
      { title: "Przypomnienia", body: "Prośby do przewoźników o brakujące dokumenty." },
      { title: "Archiwum", body: "Dokumenty z czytelnymi nazwami, łatwe do odnalezienia." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od dokumentu przewoźnika do kompletnego zlecenia.",
    items: [
      {
        title: "CMR od przewoźnika",
        trigger: "Mail ze skanem CMR",
        steps: ["Rozpoznanie dokumentu i odczyt danych", "Przypisanie do zlecenia i sprawdzenie uwag", "Oznaczenie zlecenia jako kompletnego lub przekazanie uwag spedytorowi"],
        result: "Zlecenie z kompletem dokumentów może od razu przejść do faktury.",
      },
      {
        title: "Brakujące dokumenty",
        trigger: "Minął ustalony czas od rozładunku",
        steps: ["Sprawdzenie, czy zlecenie ma wymagane dokumenty", "Przypomnienie dla przewoźnika", "Informacja dla spedytora, jeśli braki się utrzymują"],
        result: "Faktura dla klienta wychodzi szybciej, bo braki są widoczne od razu.",
      },
    ],
  },
  example: {
    title: "Dokumenty przed i po automatyzacji",
    lead: "Przykład firmy, w której fakturowanie klientów zależy od dokumentów od przewoźników.",
    rows: [
      { label: "Przyjęcie", before: "Dokumenty w skrzynkach spedytorów.", after: "Wszystkie dokumenty w jednym miejscu." },
      { label: "Przypisanie", before: "Ręczne szukanie zlecenia.", after: "Dokument przy zleceniu automatycznie." },
      { label: "Uwagi", before: "Odkrywane przy reklamacji.", after: "Oznaczone od razu do oceny spedytora." },
      { label: "Braki", before: "Sprawdzane przy fakturowaniu.", after: "Lista braków i przypomnienia." },
    ],
    note: "To przykład ilustracyjny. Skuteczność odczytu zależy od jakości dokumentów, dlatego sprawdzamy ją na waszych plikach przed wdrożeniem.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Jakość odczytu sprawdzamy na waszych dokumentach, zanim rozwiązanie trafi do zespołu.",
    phases: [
      { title: "Próbka dokumentów", duration: "kilka dni", body: "Sprawdzamy odczyt na zanonimizowanej próbce CMR i innych dokumentów.", fromYou: "Kilkadziesiąt przykładowych dokumentów." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy wymagane dokumenty dla klientów, zasady przypisania, kontrole i przypomnienia.", fromYou: "Wymagania klientów dotyczące dokumentów." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływ i testujemy go na bieżących zleceniach.", fromYou: "Osoba sprawdzająca przypisania i odczyt." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy przepływ dla wszystkich zleceń i pilnujemy jakości odczytu.", fromYou: "Zgłaszanie dokumentów, z którymi odczyt sobie nie radzi." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od przypisania i kontroli kompletności, a odczyt uwag dodać później.",
    items: [
      { name: "Porządek w dokumentach", description: "Dla firm, które chcą mieć dokumenty przy zleceniu.", includes: ["Przyjmowanie dokumentów", "Rozpoznanie i przypisanie do zlecenia", "Archiwum", "Lista braków"] },
      { name: "Odczyt i kontrola", description: "Dla firm, które chcą szybciej wykrywać problemy.", includes: ["Wszystko z wariantu Porządek w dokumentach", "Odczyt danych z AI", "Oznaczanie uwag odbiorcy", "Przypomnienia dla przewoźników"] },
      { name: "Dokumenty i rozliczenia", description: "Dla firm, które chcą połączyć dokumenty z fakturowaniem.", includes: ["Wszystko z wariantu Odczyt i kontrola", "Przekazanie kompletnych zleceń do faktury", "Dopasowanie faktur przewoźników", "Raport zleceń czekających na dokumenty"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po teście na waszych dokumentach. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba i rodzaj dokumentów miesięcznie,",
      "jakość skanów i zdjęć,",
      "integracja z TMS i archiwum,",
      "wymagania klientów dotyczące dokumentów,",
      "koszt korzystania z modeli AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Dokument trafi do złego zlecenia.", mitigation: "Przypisanie opiera się na kilku cechach, a dokumenty bez pewnego dopasowania trafiają do sprawdzenia." },
      { risk: "AI nie odczyta odręcznej uwagi.", mitigation: "Dokumenty z odręcznymi wpisami w polu uwag są oznaczane do sprawdzenia przez spedytora." },
      { risk: "Słaba jakość zdjęć od kierowców.", mitigation: "Nieczytelne dokumenty są oznaczane od razu, a przewoźnik dostaje prośbę o lepszą kopię." },
      { risk: "Utrata oryginałów.", mitigation: "Rejestr oryginałów otrzymanych pocztą pozwala sprawdzić, czego jeszcze brakuje." },
    ],
  },
  faq: [
    { question: "Czy AI odczyta zdjęcie CMR zrobione telefonem?", answer: "Zwykle tak, jeśli zdjęcie jest czytelne. Dokumenty słabej jakości są oznaczane do sprawdzenia, a przewoźnik dostaje prośbę o lepszą kopię." },
    { question: "Czy AI odczyta uwagi wpisane ręcznie?", answer: "Często tak, ale pismo odręczne bywa trudne. Dlatego dokumenty z wpisami w polu uwag zawsze oznaczamy do sprawdzenia przez spedytora." },
    { question: "Gdzie przechowywane są dokumenty?", answer: "W TMS lub w magazynie dokumentów, którego używacie, np. w Microsoft 365. Nie przenosimy ich do nowych usług bez potrzeby." },
    { question: "Czy to obsłuży e-CMR?", answer: "Jeśli przewoźnicy korzystają z elektronicznych listów przewozowych, dane mogą trafiać do systemu bezpośrednio. Zakres zależy od używanej usługi." },
    { question: "Czy dokumenty mogą trafiać do klienta automatycznie?", answer: "Tak. Komplet dokumentów może trafić do klienta razem z fakturą lub osobno, w formie, której oczekuje." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-logistyki"],
  relatedProcessSlugs: ["obsluga-reklamacji", "obieg-faktur-kosztowych"],
  relatedToolSlugs: ["chatgpt", "claude", "n8n"],
  relatedArticleSlugs: ["ai-dla-spedytorow", "co-zautomatyzowac-w-spedycji", "cyfryzacja-danych-w-firmie"],
};
