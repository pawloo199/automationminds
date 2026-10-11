import type { IndustryPageContent } from "../types";

export const spedycjaRozliczeniaFrachtu: IndustryPageContent = {
  industrySlug: "spedycja",
  subSlug: "rozliczenia-frachtu",
  name: "Rozliczenia frachtu",
  excerpt: "Faktury dla klientów, faktury przewoźników dopasowane do zleceń, marża na zleceniu i płatności pod kontrolą.",
  metaTitle: "Rozliczenia frachtu w spedycji: faktury i marża",
  metaDescription:
    "Automatyzujemy rozliczenia w spedycji: faktury dla klientów, faktury przewoźników dopasowane do zleceń, marża, KSeF i płatności.",
  primaryKeyword: "rozliczenia frachtu w spedycji",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Spedycja: rozliczenia frachtu",
    title: "Rozliczenia frachtu: faktury, koszty przewoźników i marża bez arkuszy",
    lead: "Każde zlecenie w spedycji ma dwie strony: przychód od klienta i koszt przewoźnika. Rozliczenie ich wymaga dopasowania faktur do zleceń, sprawdzenia kwot i dokumentów, wystawienia faktury klientowi i pilnowania płatności w obie strony. Automatyzujemy tę pracę: faktury powstają po komplecie dokumentów, faktury przewoźników są dopasowywane do zleceń, a marża na każdym zleceniu i kliencie jest widoczna na bieżąco.",
    bullets: [
      "Faktury dla klientów po komplecie dokumentów",
      "Faktury przewoźników dopasowane do zleceń",
      "Marża i należności widoczne na bieżąco",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy spedycyjne z dużą liczbą zleceń i faktur w obie strony" },
    { label: "Co automatyzujemy", value: "Faktury, dopasowanie kosztów, kontrolę kwot, płatności, raporty marży" },
    { label: "Narzędzia", value: "TMS, program do faktur, KSeF, bank, n8n" },
    { label: "Zasada", value: "Rozbieżności i wyjątki zatwierdza człowiek" },
  ],
  symptoms: {
    title: "Kiedy rozliczenia warto zautomatyzować",
    lead: "Jeśli te sytuacje dotyczą waszej firmy, rozliczenia kosztują czas i mogą ukrywać straty.",
    items: [
      "Faktury przewoźników dopasowuje się do zleceń ręcznie.",
      "Kwota na fakturze przewoźnika różni się od zlecenia i nikt tego nie zauważa.",
      "Faktury dla klientów wychodzą z opóźnieniem, bo ktoś musi zebrać dane i dokumenty.",
      "Marża na zleceniach i klientach jest liczona w arkuszu raz w miesiącu.",
      "Koszty dodatkowe, np. postój czy dodatkowy rozładunek, nie zawsze trafiają na fakturę klienta.",
      "Należności od klientów i terminy płatności dla przewoźników są pilnowane ręcznie.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja rozliczeń",
    paragraphs: [
      "Po dostawie i otrzymaniu kompletu dokumentów zlecenie przechodzi do rozliczenia. System przygotowuje dane do faktury dla klienta: frachtu, kosztów dodatkowych ze zlecenia i uzgodnionych zmian. Po sprawdzeniu przez spedytora lub dział rozliczeń faktura powstaje w programie do faktur i trafia do KSeF i do klienta.",
      "Faktury przewoźników są odczytywane, w tym te z KSeF, i dopasowywane do zleceń po numerze zlecenia, przewoźniku i kwocie. Kwota z faktury jest porównywana z ceną w zleceniu, a rozbieżności trafiają do wyjaśnienia. Zgodne faktury przechodzą do płatności zgodnie z terminem i warunkami przewoźnika.",
      "Gdy przychód i koszt są przypisane do zlecenia, marża jest liczona automatycznie. Kierownik widzi marżę na zleceniach, klientach, trasach i spedytorach, a należności i zobowiązania w jednym raporcie.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja rozliczeń",
    lead: "Zakres dopasowujemy do TMS i programu do faktur firmy.",
    items: [
      { title: "Dane do faktury klienta", body: "Fracht, koszty dodatkowe i zmiany ze zlecenia w jednym miejscu." },
      { title: "Faktury i KSeF", body: "Faktura w programie do faktur, wysyłana do KSeF i do klienta z dokumentami." },
      { title: "Faktury przewoźników", body: "Odczyt faktur i dopasowanie do zleceń." },
      { title: "Kontrola kwot", body: "Porównanie faktury przewoźnika z ceną w zleceniu." },
      { title: "Koszty dodatkowe", body: "Postoje i dodatkowe usługi przenoszone na fakturę klienta po zatwierdzeniu." },
      { title: "Płatności", body: "Terminy płatności dla przewoźników i przypomnienia o należnościach od klientów." },
      { title: "Marża", body: "Marża na zleceniu, kliencie, trasie i spedytorze na bieżąco." },
      { title: "Raporty", body: "Należności, zobowiązania, wolumen i rentowność bez składania arkuszy." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zrealizowanego zlecenia do zapłaty w obie strony.",
    items: [
      {
        title: "Faktura dla klienta",
        trigger: "Zlecenie ma komplet dokumentów",
        steps: ["Dane do faktury z frachtu i kosztów dodatkowych", "Sprawdzenie i zatwierdzenie", "Faktura w programie, KSeF i wysyłka z dokumentami"],
        result: "Faktura wychodzi zaraz po dostawie dokumentów, a nie na koniec miesiąca.",
      },
      {
        title: "Faktura przewoźnika",
        trigger: "Faktura przewoźnika w KSeF lub mailu",
        steps: ["Odczyt i dopasowanie do zlecenia", "Porównanie kwoty z ceną w zleceniu", "Płatność w terminie lub przekazanie rozbieżności do wyjaśnienia"],
        result: "Rozbieżności są widoczne od razu, a przewoźnicy dostają płatności na czas.",
      },
    ],
  },
  example: {
    title: "Rozliczenia przed i po automatyzacji",
    lead: "Przykład firmy spedycyjnej z kilkuset zleceniami miesięcznie.",
    rows: [
      { label: "Faktury klientów", before: "Wystawiane zbiorczo z opóźnieniem.", after: "Po komplecie dokumentów, z kosztami dodatkowymi." },
      { label: "Faktury przewoźników", before: "Dopasowywane ręcznie.", after: "Dopasowane automatycznie, rozbieżności oznaczone." },
      { label: "Marża", before: "Liczona w arkuszu raz w miesiącu.", after: "Widoczna na bieżąco dla każdego zlecenia." },
      { label: "Płatności", before: "Terminy pilnowane ręcznie.", after: "Przypomnienia i raport należności i zobowiązań." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Rozliczenia testujemy na jednym okresie równolegle z obecnym sposobem pracy.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś powstają faktury, jak dopasowuje się koszty i skąd pochodzą dane o marży.", fromYou: "Rozmowa z osobą od rozliczeń i dostęp do informacji o TMS i programie do faktur." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy zasady fakturowania, dopasowania, tolerancji kwot i raportów.", fromYou: "Akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 3–5 tygodni", body: "Budujemy przepływy i porównujemy wyniki z rozliczeniem przygotowanym ręcznie.", fromYou: "Osoba porównująca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Przełączamy rozliczenia i rozwijamy raporty.", fromYou: "Uwagi działu rozliczeń." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od faktur przewoźników albo od faktur dla klientów.",
    items: [
      { name: "Koszty przewoźników", description: "Dla firm, które chcą panować nad fakturami przewoźników.", includes: ["Odczyt faktur przewoźników", "Dopasowanie do zleceń", "Kontrola kwot", "Terminy płatności"] },
      { name: "Faktury dla klientów", description: "Dla firm, które chcą szybciej fakturować.", includes: ["Dane do faktury ze zlecenia", "Koszty dodatkowe", "Faktury i KSeF", "Przypomnienia o należnościach"] },
      { name: "Pełne rozliczenia", description: "Dla firm, które chcą widzieć marżę na bieżąco.", includes: ["Koszty przewoźników i faktury dla klientów", "Marża na zleceniach i klientach", "Raport należności i zobowiązań", "Raporty dla zarządu"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba zleceń i faktur miesięcznie,",
      "integracja z TMS, programem do faktur, KSeF i bankiem,",
      "liczba walut i rodzajów kosztów dodatkowych,",
      "zakres raportów,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Faktura przewoźnika zostanie zapłacona mimo rozbieżności.", mitigation: "Faktury z różnicą ponad ustaloną tolerancję trafiają do wyjaśnienia przed płatnością." },
      { risk: "Koszt dodatkowy nie trafi na fakturę klienta.", mitigation: "Koszty dodatkowe ze zlecenia są widoczne przy przygotowaniu faktury i wymagają decyzji." },
      { risk: "Błędne dopasowanie faktury do zlecenia.", mitigation: "Dopasowanie opiera się na kilku cechach, a niepewne przypadki trafiają do sprawdzenia." },
      { risk: "Różne waluty i kursy.", mitigation: "Zasady przeliczeń ustalamy z działem finansów, a obliczenia wykonują systemy, nie model AI." },
    ],
  },
  faq: [
    { question: "Czy faktury dla klientów trafią do KSeF?", answer: "Tak. Faktura powstaje w waszym programie do faktur, który wysyła ją do KSeF, albo przez bezpośrednie połączenie z KSeF." },
    { question: "Czy obsłużycie faktury przewoźników zagranicznych?", answer: "Tak. Faktury spoza KSeF odczytujemy z AI i dopasowujemy do zleceń tak samo jak faktury krajowe." },
    { question: "Jak liczona jest marża?", answer: "Jako różnica między przychodem od klienta a kosztem przewoźnika i kosztami dodatkowymi przypisanymi do zlecenia, według zasad ustalonych z firmą." },
    { question: "Czy płatności dla przewoźników mogą wychodzić automatycznie?", answer: "Możemy przygotować paczkę przelewów do zatwierdzenia w banku. Samo zatwierdzenie płatności zostawiamy osobie upoważnionej." },
    { question: "Czy nasz TMS nie robi tego sam?", answer: "Część TMS ma moduły rozliczeń. Sprawdzamy, co robi wasz, i automatyzujemy brakujące elementy, np. dopasowanie faktur z KSeF czy raporty marży." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-raportow", "integracje-systemow"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych", "przypomnienia-o-platnosciach", "raporty-finansowe"],
  relatedToolSlugs: ["ksef", "n8n", "microsoft-365"],
  relatedArticleSlugs: ["tms-a-automatyzacja-spedycji", "jak-mierzyc-roi-automatyzacji", "integracja-crm-z-fakturowaniem"],
};
