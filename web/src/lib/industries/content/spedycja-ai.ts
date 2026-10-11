import type { IndustryPageContent } from "../types";

export const spedycjaAi: IndustryPageContent = {
  industrySlug: "spedycja",
  subSlug: "ai",
  name: "AI w spedycji",
  excerpt: "AI w pracy spedytora: odczyt zapytań i dokumentów, propozycje cen z historii, odpowiedzi o statusy i agenci AI w spedycji.",
  metaTitle: "AI w spedycji: agenci AI i AI dla spedytorów",
  metaDescription:
    "Wdrażamy AI w spedycji: odczyt zapytań i dokumentów przewozowych, propozycje cen z historii tras, agenci AI do statusów i szkolenia.",
  primaryKeyword: "AI w spedycji",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Sztuczna inteligencja w spedycji",
    title: "AI w spedycji: spedytor decyduje, AI przygotowuje resztę",
    lead: "Spedytorzy pracują na mailach, dokumentach i rozmowach w kilku językach. To dokładnie ten rodzaj pracy, w którym AI daje dziś najwięcej: odczytuje zapytania i dokumenty, porządkuje dane, przygotowuje odpowiedzi. Pomagamy firmom spedycyjnym wdrożyć AI tam, gdzie oszczędza czas, z kontrolą nad danymi i z jasnym podziałem: decyzje o cenie i przewoźniku zostają przy spedytorze.",
    bullets: [
      "Odczyt zapytań i dokumentów w wielu językach",
      "Propozycje cen na podstawie historii tras",
      "Agenci AI do statusów i powtarzalnych odpowiedzi",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy spedycyjne, działy spedycji firm transportowych i operatorzy logistyczni" },
    { label: "Co robimy", value: "AI w zapytaniach, dokumentach i komunikacji, agenci AI, szkolenia dla spedytorów" },
    { label: "Bezpieczeństwo", value: "Dane w UE, bez trenowania modeli na danych, TMS jako źródło danych" },
    { label: "Zasada", value: "AI przygotowuje, spedytor zatwierdza cenę, przewoźnika i odpowiedź" },
  ],
  symptoms: {
    title: "Kiedy firma spedycyjna powinna zająć się AI",
    lead: "Jeśli rozpoznajecie u siebie któreś z tych sytuacji, AI może przejąć sporą część pracy spedytorów.",
    items: [
      "Spedytorzy przepisują zapytania z maili, często w obcych językach, do arkusza lub TMS.",
      "Wycena podobnej trasy za każdym razem zaczyna się od szukania w historii zleceń.",
      "CMR, faktury przewoźników i potwierdzenia dostaw ktoś odczytuje i wpisuje ręcznie.",
      "Na pytania klientów o status odpowiada się mailem lub telefonem, każdemu osobno.",
      "Spedytorzy korzystają z czatów AI na prywatnych kontach, bez zasad.",
      "Chcecie obsłużyć więcej zleceń bez zatrudniania kolejnych spedytorów.",
    ],
  },
  intro: {
    title: "AI w spedycji na trzech poziomach",
    paragraphs: [
      "Pierwszy poziom to narzędzia AI dla spedytorów: czat z modelem językowym na koncie firmowym, z zasadami i szkoleniem. Spedytorzy szybciej piszą maile w obcych językach, streszczają długie wątki z klientami i przygotowują odpowiedzi na reklamacje, a firma wie, gdzie trafiają dane.",
      "Drugi poziom to AI w procesach spedycji. Model odczytuje zapytania z maili i wyciąga z nich trasę, ładunek, terminy i wymagania. Odczytuje CMR, faktury przewoźników i inne dokumenty, a na podstawie historii podobnych tras przygotowuje propozycję ceny. Dane trafiają do spedytora do sprawdzenia, a nie bezpośrednio do klienta.",
      "Trzeci poziom to agenci AI. Agent może odpowiadać klientom na pytania o status na podstawie danych z TMS, przypominać przewoźnikom o dokumentach albo przygotowywać szkice odpowiedzi na zapytania. Działa według zasad ustalonych z firmą i przekazuje spedytorowi wszystko, co wymaga decyzji.",
    ],
  },
  scope: {
    title: "Jak AI pomaga w pracy spedytora",
    lead: "Zastosowania, które wdrażamy najczęściej. Każde działa jako wsparcie, a decyzję podejmuje spedytor.",
    items: [
      { title: "Odczyt zapytań", body: "Trasa, ładunek, terminy, wymagania i dane klienta wyciągnięte z maila w dowolnym języku." },
      { title: "Propozycje cen", body: "Cena podobnych tras z historii firmy jako punkt wyjścia do wyceny spedytora." },
      { title: "Odczyt dokumentów", body: "CMR, faktury przewoźników, potwierdzenia dostaw i dokumenty celne odczytane i przypisane do zlecenia." },
      { title: "Statusy dla klientów", body: "Odpowiedzi na pytania o status na podstawie danych z TMS lub od przewoźnika." },
      { title: "Komunikacja w językach obcych", body: "Szkice maili do klientów i przewoźników w ich języku, do sprawdzenia przez spedytora." },
      { title: "Reklamacje i szkody", body: "Streszczenie zgłoszenia, zebranie dokumentów i szkic odpowiedzi." },
      { title: "Wiedza firmy", body: "Asystent odpowiadający na pytania o warunki klientów, procedury i stawki, ze wskazaniem źródła." },
      { title: "Zasady i szkolenia", body: "Polityka korzystania z AI i warsztaty dla spedytorów na prawdziwych zadaniach." },
    ],
  },
  security: {
    title: "AI a dane klientów i przewoźników",
    lead: "Spedycja pracuje na danych handlowych, cenach i danych osobowych kierowców. Wdrażamy AI tak, żeby te dane były pod kontrolą.",
    items: [
      { title: "Konta firmowe zamiast prywatnych", body: "Spedytorzy korzystają z AI na kontach firmy, w planach, w których dane nie służą do trenowania modeli." },
      { title: "Minimum danych", body: "Do modelu trafia tylko to, co potrzebne do zadania, np. treść zapytania bez całej historii klienta." },
      { title: "Dane w UE lub u was", body: "Przepływy z AI mogą działać na serwerze w UE albo w infrastrukturze firmy." },
      { title: "Ceny i marże", body: "Historia cen i marż zostaje w systemach firmy. AI korzysta z niej przy wycenie, ale jej nie udostępnia na zewnątrz." },
      { title: "Jasne zasady", body: "Pisemne zasady korzystania z AI: co wolno przesyłać, jak sprawdzać wyniki, kto odpowiada za odpowiedź do klienta." },
      { title: "Weryfikacja przez spedytora", body: "Wyceny, zlecenia i odpowiedzi na reklamacje zatwierdza człowiek." },
    ],
  },
  comparison: {
    title: "Prywatne konta AI czy AI wdrożone w firmie",
    lead: "Różnica nie polega na jakości modelu, tylko na kontroli nad danymi i wpływie na procesy.",
    columns: ["AI wdrożone w firmie", "Prywatne konta spedytorów"],
    rows: [
      { label: "Gdzie trafiają dane", values: ["Ustalone miejsce, umowa z dostawcą", "Zależy od ustawień każdego konta"] },
      { label: "Trenowanie modeli na danych", values: ["Wyłączone w planach firmowych", "Często włączone domyślnie w planach prywatnych"] },
      { label: "Zapytania i dokumenty", values: ["Odczytywane automatycznie w procesie", "Wklejane ręcznie do czatu"] },
      { label: "Historia cen", values: ["Wykorzystywana przy wycenie", "Niedostępna dla czatu"] },
      { label: "Wpływ na procesy", values: ["AI w zapytaniach, dokumentach, statusach", "Tylko praca w oknie czatu"] },
    ],
    note: "Porównanie jest uproszczone. Ustawienia narzędzi AI zmieniają się, dlatego weryfikujemy je przy każdym wdrożeniu.",
  },
  example: {
    title: "Praca spedytora przed i po wdrożeniu AI",
    lead: "Przykład firmy spedycyjnej obsługującej klientów w Polsce i w kilku krajach UE.",
    rows: [
      { label: "Zapytanie", before: "Przepisywane z maila do arkusza.", after: "Dane odczytane przez AI do sprawdzenia." },
      { label: "Wycena", before: "Szukanie podobnych tras w historii.", after: "Propozycja ceny z historii jako punkt wyjścia." },
      { label: "Dokumenty", before: "CMR i faktury wpisywane ręcznie.", after: "Odczytane i przypisane do zlecenia." },
      { label: "Statusy", before: "Odpowiedzi mailem lub telefonem.", after: "Agent odpowiada na podstawie TMS." },
      { label: "Bezpieczeństwo", before: "Prywatne czaty AI bez zasad.", after: "Konta firmowe, zasady i kontrola nad danymi." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak wdrażamy AI w spedycji",
    lead: "Zaczynamy od zasad i bezpiecznych narzędzi, a potem dokładamy AI do zapytań, dokumentów i komunikacji.",
    phases: [
      {
        title: "Przegląd i zasady",
        duration: "kilka dni",
        body: "Sprawdzamy, jak zespół korzysta dziś z AI, jakie zapytania i dokumenty zabierają najwięcej czasu, i przygotowujemy zasady korzystania z AI.",
        fromYou: "Rozmowa z kierownikiem spedycji i informacja o używanych systemach.",
      },
      {
        title: "Narzędzia i szkolenie",
        duration: "1–2 tygodnie",
        body: "Konfigurujemy konta firmowe i prowadzimy warsztat na prawdziwych zadaniach spedytorów.",
        fromYou: "Udział zespołu w warsztacie i przykładowe, zanonimizowane maile i dokumenty.",
      },
      {
        title: "AI w procesach",
        duration: "zwykle 3–6 tygodni",
        body: "Budujemy wybrane zastosowania: odczyt zapytań, dokumentów, propozycje cen, agenta do statusów. Testujemy je na wybranych klientach.",
        fromYou: "Spedytor oceniający wyniki i dostęp do historii zleceń.",
      },
      {
        title: "Opieka i rozwój",
        duration: "stale",
        body: "Pilnujemy jakości odczytu i kosztów, aktualizujemy zasady i dokładamy kolejne zastosowania.",
        fromYou: "Uwagi zespołu i informacja o nowych potrzebach.",
      },
    ],
  },
  variants: {
    title: "Warianty wdrożenia AI",
    lead: "Wiele firm zaczyna od bezpiecznego startu i po kilku tygodniach dokłada kolejne zastosowania.",
    items: [
      {
        name: "Bezpieczny start",
        description: "Dla firm, które chcą uporządkować korzystanie z AI.",
        includes: [
          "Zasady korzystania z AI",
          "Konfiguracja kont firmowych",
          "Warsztat dla spedytorów na prawdziwych zadaniach",
          "Biblioteka sprawdzonych poleceń",
        ],
      },
      {
        name: "AI w zapytaniach i dokumentach",
        description: "Dla firm z dużą liczbą zapytań i dokumentów.",
        includes: [
          "Wszystko z wariantu Bezpieczny start",
          "Odczyt zapytań z maili",
          "Odczyt CMR i faktur przewoźników",
          "Propozycje cen z historii tras",
          "Przepływy działające na serwerze w UE",
        ],
      },
      {
        name: "Agenci AI w abonamencie",
        description: "Dla firm, które chcą odciążyć spedytorów od powtarzalnej komunikacji.",
        includes: [
          "Agent do statusów dla klientów",
          "Agent przypominający przewoźnikom o dokumentach",
          "Infrastruktura i utrzymanie po naszej stronie",
          "Monitoring i miesięczny raport",
        ],
      },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba spedytorów korzystających z narzędzi AI,",
      "liczba zapytań i dokumentów, które przetwarza AI,",
      "możliwości integracji TMS,",
      "zakres agentów AI i kanałów komunikacji,",
      "zakres szkoleń i opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Granice AI w pracy spedytora",
    items: [
      { risk: "AI źle odczyta datę, adres lub parametry ładunku.", mitigation: "Odczytane dane sprawdza spedytor przed wyceną i zleceniem, a pola z niepewnym odczytem są oznaczone." },
      { risk: "Propozycja ceny nie uwzględni sytuacji na rynku.", mitigation: "Propozycja z historii to punkt wyjścia. Cenę ustala spedytor, który zna bieżące stawki i klienta." },
      { risk: "Agent poda klientowi nieaktualny status.", mitigation: "Agent korzysta z danych z TMS z czasem aktualizacji, a przy braku danych przekazuje pytanie spedytorowi." },
      { risk: "Zmiany w narzędziach AI.", mitigation: "Aktualizujemy zasady i konfigurację, gdy zmieniają się ustawienia narzędzi lub modele." },
    ],
  },
  faq: [
    { question: "Czy AI zastąpi spedytorów?", answer: "Nie. AI przejmuje przepisywanie, odczyt dokumentów i powtarzalną komunikację. Negocjacje, wybór przewoźnika, reakcja na problemy i relacja z klientem zostają przy spedytorze." },
    { question: "Czy AI może samo wyceniać transport?", answer: "AI może przygotować propozycję na podstawie historii podobnych tras. Ostateczną cenę ustala spedytor, bo zna bieżącą sytuację na rynku i warunki klienta." },
    { question: "Czy AI odczyta CMR?", answer: "Tak, także skany i zdjęcia, choć jakość odczytu zależy od jakości dokumentu. Odczytane dane są sprawdzane, a dokumenty nieczytelne oznaczane do ręcznej weryfikacji." },
    { question: "Czy agent AI może odpowiadać klientom?", answer: "Tak, na pytania o status i sprawy powtarzalne, na podstawie danych z TMS. Pytania wymagające decyzji przekazuje spedytorowi." },
    { question: "Czy prowadzicie szkolenia z AI dla spedytorów?", answer: "Tak. Warsztaty prowadzimy na zadaniach z praktyki spedycji: zapytania, maile w obcych językach, reklamacje, bezpieczeństwo danych i sprawdzanie wyników." },
  ],
  relatedServiceSlugs: ["agenci-ai", "ai-w-obsludze-dokumentow", "szkolenia-ai-dla-zespolow", "strategia-wdrozenia-ai"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow"],
  relatedToolSlugs: ["chatgpt", "claude", "n8n", "microsoft-365"],
  relatedArticleSlugs: ["ai-dla-spedytorow", "co-zautomatyzowac-w-spedycji", "ai-w-codziennej-pracy-zespolu"],
};
