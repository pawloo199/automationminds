import type { IndustryPageContent } from "../types";

export const posrednictwoUbezpieczenioweAi: IndustryPageContent = {
  industrySlug: "posrednictwo-ubezpieczeniowe",
  subSlug: "ai",
  name: "AI w pośrednictwie ubezpieczeniowym",
  excerpt: "AI w agencji ubezpieczeniowej i u brokera: porządkowanie zapytań, porównanie warunków ubezpieczeń, odczyt polis, asystent wiedzy dla agentów.",
  metaTitle: "AI w pośrednictwie ubezpieczeniowym: agencje i brokerzy",
  metaDescription:
    "Wdrażamy AI w agencjach ubezpieczeniowych i u brokerów: porządkowanie zapytań, odczyt danych z polis, porównanie warunków, asystent wiedzy dla agentów.",
  primaryKeyword: "AI w pośrednictwie ubezpieczeniowym",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Sztuczna inteligencja w ubezpieczeniach",
    title: "AI w pośrednictwie ubezpieczeniowym: mniej czytania, więcej doradzania",
    lead: "Agent ubezpieczeniowy pracuje na dokumentach: polisach, ogólnych warunkach ubezpieczenia, zestawieniach, wiadomościach od klientów. To rodzaj pracy, w którym AI daje dziś wyraźny efekt. Pomagamy agencjom, multiagencjom i brokerom wdrożyć AI tam, gdzie oszczędza czas, z kontrolą nad danymi klientów i jasnym podziałem odpowiedzialności.",
    bullets: [
      "Dane z polis i dokumentów bez przepisywania",
      "Porównanie warunków ubezpieczeń jako materiał dla agenta",
      "Asystent wiedzy o produktach i procedurach",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje ubezpieczeniowe, multiagencje i brokerzy" },
    { label: "Co robimy", value: "AI w zapytaniach, dokumentach i wiedzy agencji, zasady i szkolenia" },
    { label: "Bezpieczeństwo", value: "Dane w UE, bez trenowania modeli na danych, bez danych o zdrowiu" },
    { label: "Zasada", value: "AI przygotowuje materiał, agent doradza i rekomenduje" },
  ],
  symptoms: {
    title: "Kiedy agencja powinna zająć się AI",
    lead: "Jeśli rozpoznajecie u siebie któreś z tych sytuacji, AI może przejąć sporą część pracy z dokumentami.",
    items: [
      "Dane z polis innych towarzystw, przynoszonych przez klientów, przepisuje się ręcznie.",
      "Porównanie warunków ubezpieczeń z kilku towarzystw wymaga czytania długich dokumentów.",
      "Agenci pytają się nawzajem o produkty i procedury, bo trudno znaleźć odpowiedź.",
      "Zapytania klientów są niekompletne i trzeba dopytywać o podstawowe dane.",
      "Zespół korzysta z czatów AI na prywatnych kontach, wklejając dane klientów.",
      "Chcecie obsłużyć więcej klientów bez zatrudniania.",
    ],
  },
  intro: {
    title: "AI w pośrednictwie ubezpieczeniowym na trzech poziomach",
    paragraphs: [
      "Pierwszy poziom to narzędzia AI dla zespołu: czat z modelem językowym na koncie firmowym, z zasadami i szkoleniem. Agenci szybciej piszą wiadomości do klientów, przygotowują podsumowania rozmów i porządkują notatki, a agencja wie, gdzie trafiają dane.",
      "Drugi poziom to AI w procesach. Model odczytuje dane z polis i dokumentów, np. okres ubezpieczenia, sumy i zakres, i wpisuje je do bazy. Porządkuje zapytania klientów i wskazuje brakujące dane. Przygotowuje zestawienie różnic w warunkach ubezpieczeń jako materiał roboczy dla agenta.",
      "Trzeci poziom to asystenci i agenci AI. Asystent wiedzy odpowiada agentom na pytania o produkty i procedury na podstawie dokumentów agencji, ze wskazaniem źródła. Agent AI może prowadzić pierwszy kontakt z klientem i zbierać dane do kalkulacji. Rekomendacja i doradztwo zawsze zostają przy człowieku.",
    ],
  },
  scope: {
    title: "Jak AI pomaga w pośrednictwie ubezpieczeniowym",
    lead: "Zastosowania, które wdrażamy najczęściej. Każde działa jako wsparcie, a decyzje należą do agenta.",
    items: [
      { title: "Odczyt polis", body: "Okres, sumy, zakres i składka z polisy do bazy, do sprawdzenia przez agenta." },
      { title: "Porządkowanie zapytań", body: "Rodzaj ubezpieczenia i dane do kalkulacji z treści wiadomości, z listą braków." },
      { title: "Porównanie warunków", body: "Różnice w ochronie i wyłączeniach z kilku dokumentów, jako materiał roboczy." },
      { title: "Asystent wiedzy", body: "Odpowiedzi o produkty i procedury ze wskazaniem źródła w dokumentach." },
      { title: "Notatki z rozmów", body: "Podsumowanie rozmowy z klientem i lista następnych kroków." },
      { title: "Wiadomości do klientów", body: "Szkice przypomnień, informacji o odnowieniu i odpowiedzi na typowe pytania." },
      { title: "Dokumenty szkodowe", body: "Lista brakujących dokumentów na podstawie opisu zdarzenia." },
      { title: "Zasady i szkolenia", body: "Polityka korzystania z AI i warsztaty dla agentów i biura." },
    ],
  },
  security: {
    title: "AI a dane klientów",
    lead: "Pośrednictwo ubezpieczeniowe to dane osobowe, finansowe, a czasem dane o zdrowiu. Wdrażamy AI tak, żeby były pod kontrolą.",
    items: [
      { title: "Konta firmowe zamiast prywatnych", body: "Zespół korzysta z AI na kontach agencji, w planach, w których dane nie służą do trenowania modeli." },
      { title: "Minimum danych", body: "Do modelu trafia tylko to, co potrzebne do zadania, np. warunki ubezpieczenia bez danych klienta." },
      { title: "Dane o zdrowiu poza AI", body: "Ankiety medyczne i informacje o stanie zdrowia nie trafiają do modeli." },
      { title: "Dane w UE lub u was", body: "Przepływy z AI mogą działać na serwerze w UE albo w infrastrukturze agencji." },
      { title: "Jasne zasady", body: "Pisemne zasady korzystania z AI: co wolno przesyłać, jak sprawdzać wyniki, kto odpowiada za treść." },
      { title: "Weryfikacja przez człowieka", body: "Rekomendacje, porównania przekazywane klientom i dokumenty zatwierdza agent." },
    ],
  },
  comparison: {
    title: "Prywatne konta AI czy AI wdrożone w agencji",
    lead: "Różnica nie polega na jakości modelu, tylko na kontroli nad danymi i wpływie na procesy.",
    columns: ["AI wdrożone w agencji", "Prywatne konta zespołu"],
    rows: [
      { label: "Gdzie trafiają dane", values: ["Ustalone miejsce, umowa z dostawcą", "Zależy od ustawień każdego konta"] },
      { label: "Trenowanie modeli na danych", values: ["Wyłączone w planach firmowych", "Często włączone domyślnie w planach prywatnych"] },
      { label: "Dane z polis", values: ["Trafiają do bazy agencji", "Zostają w oknie czatu"] },
      { label: "Wiedza o produktach", values: ["Z dokumentów agencji, ze źródłem", "Ogólna wiedza modelu, bez źródła"] },
      { label: "Wpływ na procesy", values: ["AI w zapytaniach, odnowieniach, dokumentach", "Tylko praca w oknie czatu"] },
    ],
    note: "Porównanie jest uproszczone. Ustawienia narzędzi AI zmieniają się, dlatego weryfikujemy je przy każdym wdrożeniu.",
  },
  example: {
    title: "Praca z AI przed i po wdrożeniu",
    lead: "Przykład multiagencji z kilkoma agentami i biurem obsługi.",
    rows: [
      { label: "Polisy klientów", before: "Dane przepisywane ręcznie.", after: "Odczyt do bazy, agent sprawdza." },
      { label: "Porównanie warunków", before: "Czytanie kilku dokumentów.", after: "Zestawienie różnic jako punkt wyjścia." },
      { label: "Pytania agentów", before: "Do koleżanki lub do towarzystwa.", after: "Asystent z dokumentami agencji." },
      { label: "Zapytania", before: "Dopytywanie o dane.", after: "Lista braków wysłana od razu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak wdrażamy AI w agencji",
    lead: "Zaczynamy od zasad i bezpiecznych narzędzi, a potem dokładamy AI do zapytań, dokumentów i wiedzy agencji.",
    phases: [
      { title: "Przegląd i zasady", duration: "kilka dni", body: "Sprawdzamy, jak zespół korzysta dziś z AI i gdzie traci najwięcej czasu, i przygotowujemy zasady.", fromYou: "Rozmowa z właścicielem i agentami." },
      { title: "Narzędzia i szkolenie", duration: "1–2 tygodnie", body: "Konfigurujemy konta firmowe i prowadzimy warsztat na prawdziwych zadaniach agentów.", fromYou: "Udział zespołu w warsztacie." },
      { title: "AI w procesach", duration: "zwykle 3–6 tygodni", body: "Budujemy wybrane zastosowania: odczyt polis, porządkowanie zapytań, asystenta wiedzy. Testujemy je na wybranych klientach.", fromYou: "Osoby oceniające wyniki i dokumenty agencji." },
      { title: "Opieka i rozwój", duration: "stale", body: "Pilnujemy jakości i kosztów, aktualizujemy zasady i dokładamy kolejne zastosowania.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty wdrożenia AI",
    lead: "Wiele agencji zaczyna od bezpiecznego startu i po kilku tygodniach dokłada kolejne zastosowania.",
    items: [
      { name: "Bezpieczny start", description: "Dla agencji, które chcą uporządkować korzystanie z AI.", includes: ["Zasady korzystania z AI", "Konfiguracja kont firmowych", "Warsztat dla zespołu", "Biblioteka sprawdzonych poleceń"] },
      { name: "AI w dokumentach i zapytaniach", description: "Dla agencji z dużą liczbą klientów i polis.", includes: ["Wszystko z wariantu Bezpieczny start", "Odczyt danych z polis", "Porządkowanie zapytań", "Porównanie warunków", "Przepływy działające na serwerze w UE"] },
      { name: "Asystenci i agenci", description: "Dla agencji, które chcą odciążyć zespół od powtarzalnych pytań.", includes: ["Asystent wiedzy dla agentów", "Agent zbierający dane od klientów", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba osób korzystających z narzędzi AI,",
      "liczba polis i dokumentów do odczytu,",
      "możliwości integracji CRM lub systemu agencyjnego,",
      "zakres asystentów i agentów,",
      "zakres szkoleń i opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Granice AI w pośrednictwie ubezpieczeniowym",
    items: [
      { risk: "Porównanie warunków pominie ważne wyłączenie.", mitigation: "Porównanie to materiał roboczy. Agent sprawdza dokumenty, zanim przedstawi rekomendację klientowi." },
      { risk: "AI zostanie odebrane przez klienta jako doradca.", mitigation: "AI nie rekomenduje produktów klientom. Rozmowę o wyborze ubezpieczenia prowadzi agent." },
      { risk: "Błędny odczyt danych z polisy.", mitigation: "Odczytane dane sprawdza agent, a wątpliwe pola są oznaczone." },
      { risk: "Zmiany w narzędziach AI.", mitigation: "Aktualizujemy zasady i konfigurację, gdy zmieniają się ustawienia narzędzi lub modele." },
    ],
  },
  faq: [
    { question: "Czy AI może doradzać klientom w wyborze ubezpieczenia?", answer: "Nie wdrażamy takich rozwiązań. AI przygotowuje materiał dla agenta, a rekomendację i rozmowę z klientem prowadzi człowiek." },
    { question: "Czy AI odczyta dane z polis różnych towarzystw?", answer: "Tak, z większości polis w formacie PDF lub ze skanów dobrej jakości. Dane sprawdza agent, a wątpliwe pola są oznaczone." },
    { question: "Czy AI porówna ogólne warunki ubezpieczenia?", answer: "Może przygotować zestawienie różnic w ochronie i wyłączeniach jako punkt wyjścia. Agent weryfikuje je z dokumentami." },
    { question: "Czy można wklejać polisy do ChatGPT?", answer: "Tylko na kontach firmowych, w planach bez trenowania na danych i zgodnie z zasadami agencji. Lepiej przygotować do tego rozwiązanie z ustalonym przepływem danych." },
    { question: "Czy prowadzicie szkolenia z AI dla agentów ubezpieczeniowych?", answer: "Tak. Warsztaty prowadzimy na zadaniach z praktyki agencji: wiadomości do klientów, dokumenty, notatki z rozmów, bezpieczeństwo danych i sprawdzanie wyników." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "asystent-ai-na-firmowej-wiedzy", "szkolenia-ai-dla-zespolow", "agenci-ai"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow"],
  relatedToolSlugs: ["chatgpt", "claude", "n8n"],
  relatedArticleSlugs: ["ai-w-codziennej-pracy-zespolu", "rodo-a-automatyzacja-procesow", "wdrozenie-ai-w-malej-i-sredniej-firmie"],
};
