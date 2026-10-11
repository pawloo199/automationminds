import type { IndustryPageContent } from "../types";

export const nieruchomosciUmowyIDokumenty: IndustryPageContent = {
  industrySlug: "nieruchomosci",
  subSlug: "umowy-i-dokumenty",
  name: "Umowy i dokumenty",
  excerpt: "Umowy pośrednictwa i najmu, protokoły zdawczo-odbiorcze i listy dokumentów do transakcji wypełniane danymi z CRM, z podpisem i archiwum.",
  metaTitle: "Umowy najmu i pośrednictwa z szablonów: automatyzacja",
  metaDescription:
    "Automatyzujemy dokumenty w nieruchomościach: umowy pośrednictwa i najmu z szablonów, protokoły zdawczo-odbiorcze, listy dokumentów do transakcji, podpis.",
  primaryKeyword: "umowy najmu z szablonów",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Nieruchomości: umowy i dokumenty",
    title: "Umowy i protokoły bez kopiowania poprzednich wersji",
    lead: "Umowa pośrednictwa, umowa najmu, protokół zdawczo-odbiorczy, aneks: dokumenty w nieruchomościach powtarzają się, ale każdy wymaga wpisania danych stron, nieruchomości i warunków. Kopiowanie poprzedniej wersji to prosta droga do błędu. Automatyzujemy dokumenty: powstają z szablonów biura i danych z CRM, trafiają do podpisu i do archiwum, a terminy z umów są pilnowane automatycznie.",
    bullets: [
      "Umowy i protokoły z szablonów i danych z CRM",
      "Podpis elektroniczny i archiwum",
      "Terminy z umów pilnowane automatycznie",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura nieruchomości i firmy zarządzające najmem" },
    { label: "Co automatyzujemy", value: "Umowy, aneksy, protokoły, listy dokumentów, podpis, terminy" },
    { label: "Narzędzia", value: "Szablony Word, CRM, podpis elektroniczny, dysk, n8n" },
    { label: "Zasada", value: "Treść wzorów ustala firma, a umowę przed podpisem sprawdza człowiek" },
  ],
  symptoms: {
    title: "Kiedy dokumenty warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, przygotowanie dokumentów zabiera czas i rodzi ryzyko błędów.",
    items: [
      "Umowy powstają przez kopiowanie poprzednich i podmianę danych.",
      "W dokumentach zdarzają się dane z poprzedniej umowy.",
      "Protokół zdawczo-odbiorczy spisuje się na papierze, a zdjęcia są w telefonie.",
      "Lista dokumentów potrzebnych do transakcji jest za każdym razem tworzona od nowa.",
      "Terminy z umów najmu, np. waloryzacji czy końca umowy, nikt nie pilnuje.",
      "Podpisane dokumenty są rozproszone między skrzynkami i segregatorami.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja dokumentów",
    paragraphs: [
      "Wzory dokumentów biura zamieniamy w szablony z polami do wypełnienia. Agent lub zarządca wybiera rodzaj dokumentu, a system wypełnia go danymi stron, nieruchomości i warunków z CRM. Brakujące dane są wskazane przed wygenerowaniem dokumentu.",
      "Gotowy dokument trafia do sprawdzenia, a potem do podpisu, także elektronicznego, jeśli z niego korzystacie. Podpisany dokument jest zapisywany w folderze nieruchomości i klienta. Protokół zdawczo-odbiorczy można wypełnić na telefonie ze zdjęciami i stanami liczników.",
      "Terminy z umów, takie jak koniec okresu najmu, waloryzacja czynszu czy termin zwrotu kaucji, trafiają do kalendarza zarządcy z przypomnieniami. AI może też streścić dokumenty otrzymane od drugiej strony, wskazując daty, kwoty i zobowiązania, jako materiał roboczy.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja dokumentów",
    lead: "Zakres dopasowujemy do wzorów i rodzajów transakcji.",
    items: [
      { title: "Szablony umów", body: "Umowy pośrednictwa, najmu i aneksy z polami do wypełnienia." },
      { title: "Dane z CRM", body: "Strony, nieruchomość i warunki bez przepisywania." },
      { title: "Protokoły na telefonie", body: "Stan lokalu, liczniki i zdjęcia w protokole zdawczo-odbiorczym." },
      { title: "Listy dokumentów", body: "Dokumenty potrzebne do transakcji według rodzaju nieruchomości." },
      { title: "Podpis elektroniczny", body: "Dokument do podpisu bez drukowania i skanowania." },
      { title: "Archiwum", body: "Podpisane dokumenty w folderze nieruchomości i klienta." },
      { title: "Terminy z umów", body: "Koniec najmu, waloryzacje i kaucje w kalendarzu z przypomnieniami." },
      { title: "Streszczenia dokumentów", body: "Najważniejsze dane z dokumentów drugiej strony, jako materiał roboczy." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od danych w CRM do podpisanej umowy.",
    items: [
      {
        title: "Nowa umowa najmu",
        trigger: "Najemca zaakceptowany przez właściciela",
        steps: ["Umowa z szablonu wypełniona danymi z CRM", "Sprawdzenie przez zarządcę i podpis", "Archiwum i terminy z umowy w kalendarzu"],
        result: "Umowa gotowa w kilka minut, a terminy nie umykają.",
      },
      {
        title: "Wydanie lokalu",
        trigger: "Dzień przekazania mieszkania najemcy",
        steps: ["Protokół na telefonie ze zdjęciami i stanami liczników", "Podpis obu stron", "Protokół w folderze nieruchomości"],
        result: "Stan lokalu udokumentowany, co ułatwia rozliczenie przy zakończeniu najmu.",
      },
    ],
  },
  example: {
    title: "Dokumenty przed i po automatyzacji",
    lead: "Przykład firmy zarządzającej kilkudziesięcioma mieszkaniami na wynajem.",
    rows: [
      { label: "Umowy", before: "Kopiowane z poprzednich.", after: "Z szablonu i danych z CRM." },
      { label: "Protokoły", before: "Papier i zdjęcia w telefonie.", after: "Formularz ze zdjęciami i podpisem." },
      { label: "Terminy", before: "Pilnowane z pamięci.", after: "Kalendarz z przypomnieniami." },
      { label: "Archiwum", before: "Skrzynki i segregatory.", after: "Folder nieruchomości i klienta." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od najczęściej używanych dokumentów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Zbieramy wzory dokumentów i sprawdzamy, skąd pochodzą dane.", fromYou: "Aktualne wzory dokumentów." },
      { title: "Szablony", duration: "około tygodnia", body: "Zamieniamy wzory w szablony i ustalamy zasady sprawdzania.", fromYou: "Akceptacja szablonów." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy przepływ i testujemy go na nowych umowach.", fromYou: "Osoba sprawdzająca dokumenty testowe." },
      { title: "Start i opieka", duration: "stale", body: "Aktualizujemy szablony przy zmianach wzorów.", fromYou: "Informacja o zmianach we wzorach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od szablonów najważniejszych umów.",
    items: [
      { name: "Szablony", description: "Dla firm, które chcą skończyć z kopiowaniem.", includes: ["Szablony umów i aneksów", "Dane z CRM", "Archiwum", "Kontrola brakujących danych"] },
      { name: "Szablony i podpis", description: "Dla firm, które chcą podpisywać bez papieru.", includes: ["Wszystko z wariantu Szablony", "Podpis elektroniczny", "Protokoły na telefonie", "Listy dokumentów"] },
      { name: "Pełny obieg", description: "Dla firm zarządzających najmem.", includes: ["Wszystko z wariantu Szablony i podpis", "Terminy z umów", "Streszczenia dokumentów", "Raport umów kończących się"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba i złożoność wzorów dokumentów,",
      "CRM i źródła danych,",
      "podpis elektroniczny,",
      "zakres protokołów i terminów,",
      "zakres opieki.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędne dane w umowie.", mitigation: "Dane pochodzą z CRM, brakujące są wskazane, a umowę przed podpisem sprawdza człowiek." },
      { risk: "Nieaktualny wzór.", mitigation: "Wzory są w jednym miejscu, a ich zmiana obejmuje wszystkie nowe dokumenty." },
      { risk: "Streszczenie AI pominie ważny zapis.", mitigation: "Streszczenie to materiał roboczy. Ważne dokumenty zawsze czyta człowiek." },
      { risk: "Dostęp do dokumentów klientów.", mitigation: "Uprawnienia do folderów według ról w firmie." },
    ],
  },
  faq: [
    { question: "Kto przygotowuje treść wzorów umów?", answer: "Firma, najlepiej z prawnikiem. My zamieniamy wzory w szablony i automatyzujemy ich wypełnianie, nie tworzymy treści prawnych." },
    { question: "Czy podpis elektroniczny jest konieczny?", answer: "Nie. Dokumenty mogą być drukowane i podpisywane tradycyjnie. Podpis elektroniczny to opcja, która oszczędza czas." },
    { question: "Czy protokół na telefonie zastąpi papier?", answer: "Tak, jeśli obie strony podpiszą go elektronicznie lub na ekranie. Formularz zawiera zdjęcia i stany liczników." },
    { question: "Czy terminy z umów trafią do kalendarza?", answer: "Tak, z przypomnieniami dla zarządcy, np. przed końcem umowy lub terminem waloryzacji." },
    { question: "Czy AI sprawdzi umowę od drugiej strony?", answer: "AI może przygotować streszczenie i wskazać daty, kwoty i zobowiązania. Ocena prawna zawsze należy do człowieka." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-firm-uslugowych"],
  relatedProcessSlugs: ["obieg-umow"],
  relatedToolSlugs: ["microsoft-365", "google-workspace", "n8n"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-biurze-nieruchomosci", "ai-dla-agentow-nieruchomosci", "rodo-a-automatyzacja-procesow"],
};
