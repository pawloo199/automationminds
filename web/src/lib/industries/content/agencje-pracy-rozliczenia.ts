import type { IndustryPageContent } from "../types";

export const agencjePracyRozliczenia: IndustryPageContent = {
  industrySlug: "agencje-pracy",
  subSlug: "rozliczenia-i-faktury",
  name: "Rozliczenia i faktury",
  excerpt: "Faktury dla klientów według zaakceptowanych godzin i stawek, dane do wynagrodzeń, marża według klientów i zleceń oraz przypomnienia o płatnościach.",
  metaTitle: "Rozliczenia agencji pracy tymczasowej: faktury i marża",
  metaDescription:
    "Automatyzujemy rozliczenia agencji pracy: faktury według godzin i stawek, KSeF, dane do wynagrodzeń, marża według klientów i przypomnienia o płatności.",
  primaryKeyword: "rozliczenia agencji pracy tymczasowej",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Agencje pracy: rozliczenia",
    title: "Faktury dla klientów i dane do wynagrodzeń z jednych zaakceptowanych godzin",
    lead: "Gdy godziny są zaakceptowane, agencja musi wystawić faktury klientom według stawek z umów, przekazać dane do wynagrodzeń i sprawdzić, na których klientach zarabia. Przy kilkunastu klientach z różnymi stawkami, dodatkami i warunkami to kilka dni pracy w arkuszach. Automatyzujemy rozliczenia: faktury i dane do płac powstają z tej samej ewidencji, a marża jest widoczna według klientów i zleceń.",
    bullets: [
      "Faktury według stawek z umów i KSeF",
      "Dane do wynagrodzeń z tej samej ewidencji",
      "Marża według klientów i przypomnienia o płatnościach",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje pracy tymczasowej rozliczające wielu klientów" },
    { label: "Co automatyzujemy", value: "Faktury, stawki, dodatki, dane do płac, marża, płatności" },
    { label: "Narzędzia", value: "Ewidencja, program do faktur, KSeF, program kadrowo-płacowy, n8n" },
    { label: "Zasada", value: "Faktury i rozliczenia zatwierdza osoba odpowiedzialna" },
  ],
  symptoms: {
    title: "Kiedy rozliczenia warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, koniec miesiąca zabiera kilka dni.",
    items: [
      "Faktury dla klientów liczy się w arkuszu.",
      "Stawki i dodatki różnią się między klientami i rodzajami pracy.",
      "Dane do wynagrodzeń przepisuje się do programu kadrowego.",
      "Faktury wychodzą z opóźnieniem, a płatności przychodzą jeszcze później.",
      "Nie wiadomo, które zlecenia i klienci są rentowni.",
      "Korekty faktur są częste.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja rozliczeń",
    paragraphs: [
      "Zaakceptowane godziny z ewidencji łączą się ze stawkami z umów z klientami: stawka godzinowa według rodzaju pracy, dodatki za noc i nadgodziny, opłaty dodatkowe. System przygotowuje faktury w programie do faktur, a osoba odpowiedzialna je sprawdza i zatwierdza. Faktury trafiają do KSeF i do klientów.",
      "Z tej samej ewidencji powstają dane do wynagrodzeń w formacie, który przyjmuje program kadrowo-płacowy. Agencja nie przepisuje godzin dwa razy, a faktura i wynagrodzenie są oparte na tych samych danych.",
      "Raport marży pokazuje przychód z faktur i koszt wynagrodzeń według klientów, zleceń i rodzajów pracy. Przypomnienia o płatnościach trafiają do klientów według zasad agencji, a zaległości są widoczne na bieżąco.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja rozliczeń",
    lead: "Zakres dopasowujemy do umów z klientami i programów agencji.",
    items: [
      { title: "Stawki z umów", body: "Według klientów, rodzajów pracy i rodzajów godzin." },
      { title: "Faktury", body: "Z zaakceptowanych godzin, do zatwierdzenia." },
      { title: "KSeF", body: "Faktury w programie do faktur i KSeF." },
      { title: "Załączniki", body: "Zestawienie godzin do faktury dla klienta." },
      { title: "Dane do wynagrodzeń", body: "Dla programu kadrowo-płacowego." },
      { title: "Marża", body: "Według klientów, zleceń i rodzajów pracy." },
      { title: "Przypomnienia o płatnościach", body: "Dla klientów według zasad agencji." },
      { title: "Raport należności", body: "Zaległości na bieżąco." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zaakceptowanych godzin do płatności.",
    items: [
      {
        title: "Faktura dla klienta",
        trigger: "Klient zaakceptował godziny",
        steps: ["Faktura według stawek z umowy", "Zatwierdzenie i KSeF", "Wysyłka z zestawieniem godzin"],
        result: "Faktura wychodzi w dniu akceptacji godzin.",
      },
      {
        title: "Wynagrodzenia",
        trigger: "Zamknięcie okresu",
        steps: ["Dane do wynagrodzeń z ewidencji", "Import do programu kadrowo-płacowego", "Raport marży według klientów"],
        result: "Płace i faktury oparte na tych samych danych.",
      },
    ],
  },
  example: {
    title: "Rozliczenia przed i po automatyzacji",
    lead: "Przykład agencji z kilkunastoma klientami i różnymi stawkami.",
    rows: [
      { label: "Faktury", before: "Arkusz i ręczne liczenie.", after: "Z ewidencji i stawek." },
      { label: "Wynagrodzenia", before: "Przepisywanie godzin.", after: "Import do programu." },
      { label: "Korekty", before: "Częste.", after: "Rzadsze." },
      { label: "Marża", before: "Szacowana.", after: "Raport według klientów." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Rozliczenia testujemy na jednym okresie równolegle z obecnym sposobem.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Zbieramy umowy, stawki i sposób rozliczeń.", fromYou: "Umowy i przykładowe faktury." },
      { title: "Zasady", duration: "1–2 tygodnie", body: "Zapisujemy stawki i zasady dla każdego klienta.", fromYou: "Weryfikacja zasad." },
      { title: "Budowa i test", duration: "zwykle 3–4 tygodnie", body: "Porównujemy wyniki z ręcznym rozliczeniem.", fromYou: "Osoba porównująca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Przełączamy rozliczenia i pilnujemy zmian w umowach.", fromYou: "Informacja o nowych umowach i stawkach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od faktur dla klientów.",
    items: [
      { name: "Faktury", description: "Dla agencji, które chcą szybciej fakturować.", includes: ["Stawki z umów", "Faktury", "KSeF", "Załączniki"] },
      { name: "Faktury i płace", description: "Dla agencji, które chcą skończyć z podwójnym przepisywaniem.", includes: ["Wszystko z wariantu Faktury", "Dane do wynagrodzeń", "Import do programu kadrowego", "Kontrola zgodności"] },
      { name: "Pełne rozliczenia", description: "Dla agencji, które chcą znać rentowność.", includes: ["Wszystko z wariantu Faktury i płace", "Marża", "Przypomnienia o płatnościach", "Raport należności"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba klientów i rodzajów stawek,",
      "integracja z programem do faktur i KSeF,",
      "integracja z programem kadrowo-płacowym,",
      "zakres raportów,",
      "zasady przypomnień o płatnościach.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędna stawka na fakturze.", mitigation: "Stawki są zapisane w jednym miejscu z datą obowiązywania, a faktury są zatwierdzane." },
      { risk: "Różnica między fakturą a wynagrodzeniem.", mitigation: "Oba rozliczenia powstają z tej samej ewidencji." },
      { risk: "Przypomnienie do klienta, który zapłacił.", mitigation: "Przed wysyłką system sprawdza wpłaty." },
      { risk: "Zmiana umowy nieuwzględniona.", mitigation: "Zmiany stawek mają datę obowiązywania i są sprawdzane w teście." },
    ],
  },
  faq: [
    { question: "Czy faktury trafią do KSeF?", answer: "Tak, przez program do faktur albo bezpośrednie połączenie." },
    { question: "Czy obsłużycie różne stawki dla rodzajów pracy i dodatki?", answer: "Tak, według zasad zapisanych dla każdego klienta." },
    { question: "Czy dane do płac trafią do naszego programu?", answer: "Tak, w formacie, który program przyjmuje." },
    { question: "Czy zobaczymy marżę według klientów?", answer: "Tak, raport pokazuje przychód i koszt wynagrodzeń według klientów i zleceń." },
    { question: "Czy system sam wyśle przypomnienia o płatności?", answer: "Tak, według zasad agencji, po sprawdzeniu wpłat." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-raportow", "integracje-systemow"],
  relatedProcessSlugs: ["przypomnienia-o-platnosciach", "raporty-finansowe"],
  relatedToolSlugs: ["ksef", "airtable", "n8n"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-agencji-pracy", "integracja-crm-z-fakturowaniem", "jak-mierzyc-roi-automatyzacji"],
};
