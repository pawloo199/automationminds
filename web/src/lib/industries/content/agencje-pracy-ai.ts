import type { IndustryPageContent } from "../types";

export const agencjePracyAi: IndustryPageContent = {
  industrySlug: "agencje-pracy",
  subSlug: "ai",
  name: "AI w agencji pracy",
  excerpt: "AI w agencji pracy: porządkowanie CV, wyszukiwanie w bazie kandydatów, ogłoszenia, komunikacja w wielu językach, bez automatycznych decyzji o kandydatach.",
  metaTitle: "AI w agencji pracy: CV, baza kandydatów, komunikacja",
  metaDescription:
    "Wdrażamy AI w agencjach pracy: porządkowanie CV, wyszukiwanie w bazie kandydatów, ogłoszenia, komunikacja w wielu językach, bez decyzji o kandydatach.",
  primaryKeyword: "AI w agencji pracy",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Sztuczna inteligencja w rekrutacji",
    title: "AI w agencji pracy: mniej przepisywania CV, więcej rozmów z kandydatami",
    lead: "Agencja pracy przetwarza setki CV, ogłoszeń i wiadomości w różnych językach. To rodzaj pracy, w którym AI daje dziś wyraźny efekt. Jednocześnie rekrutacja to obszar, w którym AI wymaga szczególnej ostrożności: unijne przepisy zaliczają systemy używane do wyboru kandydatów do kategorii wysokiego ryzyka. Pomagamy agencjom wdrożyć AI tak, żeby porządkowało i przyspieszało pracę, a decyzje o ludziach zostawały przy ludziach.",
    bullets: [
      "CV uporządkowane w bazie bez przepisywania",
      "Wyszukiwanie kandydatów w bazie dla rekrutera",
      "Komunikacja z kandydatami w ich języku",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje pracy tymczasowej i rekrutacyjne" },
    { label: "Co robimy", value: "AI w CV, bazie kandydatów, ogłoszeniach i komunikacji, zasady" },
    { label: "Bezpieczeństwo", value: "Dane w UE, bez trenowania modeli na danych, bez automatycznych decyzji" },
    { label: "Zasada", value: "AI porządkuje, rekruter ocenia i decyduje" },
  ],
  symptoms: {
    title: "Kiedy agencja powinna zająć się AI",
    lead: "Jeśli rozpoznajecie u siebie któreś z tych sytuacji, AI może przejąć sporą część pracy z tekstem.",
    items: [
      "Rekruterzy przepisują dane z CV do bazy.",
      "W bazie są tysiące kandydatów, ale trudno ich przeszukać.",
      "Ogłoszenia pisze się od zera dla każdego zlecenia.",
      "Kandydaci i pracownicy piszą w kilku językach.",
      "Rekruterzy korzystają z czatów AI na prywatnych kontach, wklejając CV.",
      "Chcecie obsłużyć więcej zleceń bez zatrudniania.",
    ],
  },
  intro: {
    title: "AI w agencji pracy: co tak, co nie",
    paragraphs: [
      "Pierwszy krok to zasady. Rekruterzy często już korzystają z AI, np. wklejając CV do czatu, żeby szybciej je streścić. To ryzyko dla danych kandydatów. Spisane zasady, konta firmowe w planach bez trenowania modeli na danych i krótkie szkolenie porządkują to od razu.",
      "Drugi krok to zastosowania, które porządkują i przyspieszają pracę. AI odczytuje CV w różnych formatach i językach i uzupełnia pola w bazie: doświadczenie, uprawnienia, języki, dostępność, lokalizacja. Pomaga rekruterowi przeszukać bazę po wymaganiach zlecenia, pokazując kandydatów spełniających wymagania formalne. Przygotowuje szkice ogłoszeń i wiadomości, także w języku kandydata.",
      "Granica jest jasna: AI nie ocenia kandydatów, nie tworzy rankingów do automatycznych decyzji i nie odrzuca aplikacji. Listę kandydatów przegląda rekruter, który decyduje, z kim rozmawiać i kogo rekomendować klientowi. Takie podejście ogranicza ryzyko dyskryminacji i jest zgodne z kierunkiem unijnych przepisów o AI.",
    ],
  },
  scope: {
    title: "Jak AI pomaga w agencjach pracy",
    lead: "Zastosowania, które wdrażamy. Żadne z nich nie podejmuje decyzji o kandydatach.",
    items: [
      { title: "Odczyt CV", body: "Dane z CV w różnych formatach i językach do pól w bazie." },
      { title: "Wyszukiwanie w bazie", body: "Kandydaci spełniający wymagania formalne zlecenia, do przeglądu przez rekrutera." },
      { title: "Ogłoszenia", body: "Szkice ogłoszeń z wymagań zlecenia, w kilku językach." },
      { title: "Wiadomości do kandydatów", body: "Zaproszenia, pytania o dostępność, informacje, w języku kandydata." },
      { title: "Notatki z rozmów", body: "Podsumowanie rozmowy z kandydatem do sprawdzenia przez rekrutera." },
      { title: "Pytania pracowników", body: "Odpowiedzi organizacyjne o grafiku i dokumentach." },
      { title: "Tłumaczenia", body: "Dokumenty organizacyjne i instrukcje dla pracowników z zagranicy." },
      { title: "Zasady i szkolenia", body: "Polityka korzystania z AI i warsztaty dla rekruterów." },
    ],
  },
  security: {
    title: "AI a dane kandydatów",
    lead: "Rekrutacja to dane osobowe i decyzje o ludziach. Wdrażamy AI tak, żeby jedno i drugie było pod kontrolą.",
    items: [
      { title: "Konta firmowe zamiast prywatnych", body: "Rekruterzy korzystają z AI na kontach agencji, w planach, w których dane nie służą do trenowania modeli." },
      { title: "Bez automatycznych decyzji", body: "AI nie ocenia, nie rankinguje do decyzji i nie odrzuca kandydatów." },
      { title: "Minimum danych", body: "Do modeli nie trafiają dokumenty tożsamości, dane o zdrowiu ani zdjęcia." },
      { title: "Dane w UE lub u was", body: "Przepływy z AI mogą działać na serwerze w UE albo w infrastrukturze agencji." },
      { title: "Przejrzystość", body: "Kandydaci mogą być informowani o wykorzystaniu narzędzi w procesie, zgodnie z zasadami agencji." },
      { title: "Weryfikacja przez człowieka", body: "Dane odczytane z CV i wiadomości do kandydatów sprawdza rekruter." },
    ],
  },
  comparison: {
    title: "Prywatne konta AI czy AI wdrożone w agencji",
    lead: "W rekrutacji różnica dotyczy danych kandydatów i kontroli nad tym, co robi AI.",
    columns: ["AI wdrożone w agencji", "Prywatne konta rekruterów"],
    rows: [
      { label: "Gdzie trafiają CV", values: ["Ustalone miejsce, umowa z dostawcą", "Zależy od ustawień każdego konta"] },
      { label: "Trenowanie modeli na danych", values: ["Wyłączone w planach firmowych", "Często włączone domyślnie w planach prywatnych"] },
      { label: "Rola AI", values: ["Porządkowanie i wyszukiwanie, bez decyzji", "Zależy od tego, o co zapyta rekruter"] },
      { label: "Dane w bazie", values: ["Odczytane z CV do pól bazy", "Zostają w oknie czatu"] },
      { label: "Zgodność z zasadami", values: ["Spisane zasady i szkolenie", "Brak"] },
    ],
    note: "Porównanie jest uproszczone. Ustawienia narzędzi AI zmieniają się, dlatego weryfikujemy je przy każdym wdrożeniu.",
  },
  example: {
    title: "Praca z AI przed i po wdrożeniu",
    lead: "Przykład agencji z bazą kilku tysięcy kandydatów.",
    rows: [
      { label: "CV", before: "Przepisywane ręcznie.", after: "Odczyt do bazy, rekruter sprawdza." },
      { label: "Wyszukiwanie", before: "Po pamięci i pojedynczych słowach.", after: "Po wymaganiach zlecenia." },
      { label: "Ogłoszenia", before: "Od zera.", after: "Szkic z wymagań, w kilku językach." },
      { label: "Prywatne konta AI", before: "CV w czatach.", after: "Konta firmowe i zasady." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak wdrażamy AI w agencji pracy",
    lead: "Zaczynamy od zasad, potem dokładamy AI do CV, bazy i komunikacji.",
    phases: [
      { title: "Przegląd i zasady", duration: "kilka dni", body: "Sprawdzamy, jak rekruterzy korzystają dziś z AI, i przygotowujemy zasady razem z osobą odpowiedzialną za ochronę danych.", fromYou: "Rozmowa z właścicielem i rekruterami." },
      { title: "Narzędzia i szkolenie", duration: "1–2 tygodnie", body: "Konfigurujemy konta firmowe i prowadzimy warsztat dla rekruterów.", fromYou: "Udział zespołu." },
      { title: "AI w procesach", duration: "zwykle 3–6 tygodni", body: "Budujemy odczyt CV, wyszukiwanie w bazie i szablony wiadomości. Testujemy na bieżących zleceniach.", fromYou: "Rekruter oceniający wyniki." },
      { title: "Opieka i rozwój", duration: "stale", body: "Pilnujemy jakości, aktualizujemy zasady i dokładamy kolejne zastosowania.", fromYou: "Uwagi rekruterów." },
    ],
  },
  variants: {
    title: "Warianty wdrożenia AI",
    lead: "Wiele agencji zaczyna od zasad i odczytu CV.",
    items: [
      { name: "Bezpieczny start", description: "Dla agencji, które chcą uporządkować korzystanie z AI.", includes: ["Zasady korzystania z AI", "Konfiguracja kont firmowych", "Warsztat dla rekruterów", "Biblioteka sprawdzonych poleceń"] },
      { name: "AI w bazie kandydatów", description: "Dla agencji z dużą liczbą CV.", includes: ["Wszystko z wariantu Bezpieczny start", "Odczyt CV do bazy", "Wyszukiwanie po wymaganiach", "Przepływy działające na serwerze w UE"] },
      { name: "AI w komunikacji", description: "Dla agencji pracujących z kandydatami z wielu krajów.", includes: ["Ogłoszenia i wiadomości w wielu językach", "Odpowiedzi na pytania pracowników", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba rekruterów korzystających z AI,",
      "liczba CV i wielkość bazy,",
      "możliwości integracji systemu rekrutacyjnego,",
      "liczba języków,",
      "zakres szkoleń i opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Granice AI w agencji pracy",
    items: [
      { risk: "AI wprowadzi stronniczość do wyboru kandydatów.", mitigation: "AI nie ocenia ani nie odrzuca kandydatów, a wyszukiwanie opiera się na wymaganiach formalnych ustalonych przez rekrutera." },
      { risk: "Błędnie odczytane dane z CV.", mitigation: "Rekruter sprawdza dane, a wątpliwe pola są oznaczone." },
      { risk: "Wiadomość do kandydata z błędem w tłumaczeniu.", mitigation: "Szablony wiadomości są sprawdzane, a ważne informacje dodatkowo weryfikowane." },
      { risk: "Zmiany w przepisach i narzędziach.", mitigation: "Aktualizujemy zasady i konfigurację, gdy zmieniają się przepisy, ustawienia narzędzi lub modele." },
    ],
  },
  faq: [
    { question: "Czy AI może oceniać kandydatów?", answer: "Nie wdrażamy takich rozwiązań. AI porządkuje dane i pomaga wyszukiwać, a ocena należy do rekrutera." },
    { question: "Czy AI odczyta CV w innym języku?", answer: "Tak, większość CV w popularnych językach i formatach. Rekruter sprawdza wynik." },
    { question: "Czy można wklejać CV do ChatGPT?", answer: "Tylko na kontach firmowych, zgodnie z zasadami agencji. Lepiej przygotować do tego rozwiązanie z ustalonym przepływem danych." },
    { question: "Jak przepisy o AI wpływają na rekrutację?", answer: "Unijne przepisy zaliczają systemy do wyboru kandydatów do kategorii wysokiego ryzyka. Dlatego projektujemy AI tak, żeby nie podejmowało takich decyzji." },
    { question: "Czy prowadzicie szkolenia z AI dla rekruterów?", answer: "Tak, na zadaniach z praktyki agencji, z naciskiem na ochronę danych i granice zastosowań." },
  ],
  relatedServiceSlugs: ["szkolenia-ai-dla-zespolow", "ai-w-obsludze-dokumentow", "strategia-wdrozenia-ai", "agenci-ai"],
  relatedProcessSlugs: ["onboarding-pracownika"],
  relatedToolSlugs: ["chatgpt", "claude", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
