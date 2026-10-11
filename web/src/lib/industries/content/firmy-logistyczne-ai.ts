import type { IndustryPageContent } from "../types";

export const firmyLogistyczneAi: IndustryPageContent = {
  industrySlug: "firmy-logistyczne",
  subSlug: "ai",
  name: "AI dla firm logistycznych",
  excerpt: "AI w firmie logistycznej: odczyt zleceń i dokumentów, odpowiedzi dla klientów, analiza danych operacyjnych i agenci AI.",
  metaTitle: "AI dla firm logistycznych: zlecenia, dokumenty, agenci AI",
  metaDescription:
    "Wdrażamy AI w firmach logistycznych i magazynach: odczyt zleceń i dokumentów, odpowiedzi na pytania klientów, analiza danych operacyjnych i agenci AI.",
  primaryKeyword: "AI dla firm logistycznych",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Sztuczna inteligencja w logistyce",
    title: "AI dla firm logistycznych: mniej pracy biurowej wokół operacji",
    lead: "W logistyce dane operacyjne są zwykle w WMS i TMS, ale zlecenia, dokumenty i pytania klientów przychodzą w formie, której systemy nie rozumieją: maili, plików, skanów. Tu AI daje dziś największy efekt. Pomagamy firmom logistycznym wdrożyć AI w obsłudze zleceń, dokumentów i klientów, z kontrolą nad danymi i bez ingerencji w pracę magazynu.",
    bullets: [
      "Zlecenia i dokumenty odczytane w dowolnym formacie",
      "Odpowiedzi dla klientów na podstawie danych z WMS i TMS",
      "Agenci AI do powtarzalnej pracy biura",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Operatorzy logistyczni, magazyny, centra dystrybucyjne i firmy transportowe" },
    { label: "Co robimy", value: "AI w zleceniach, dokumentach i obsłudze klientów, agenci AI, szkolenia" },
    { label: "Bezpieczeństwo", value: "Dane w UE, bez trenowania modeli na danych, WMS i TMS jako źródło danych" },
    { label: "Zasada", value: "AI przygotowuje, ludzie sprawdzają wyjątki" },
  ],
  symptoms: {
    title: "Kiedy firma logistyczna powinna zająć się AI",
    lead: "Jeśli rozpoznajecie u siebie któreś z tych sytuacji, AI może przejąć sporą część pracy biura.",
    items: [
      "Zlecenia od klientów przychodzą w różnych formatach i ktoś przepisuje je do WMS.",
      "Dokumenty dostaw, listy przewozowe i potwierdzenia trzeba czytać i wpisywać ręcznie.",
      "Biuro obsługi klienta odpowiada na te same pytania o stany i statusy.",
      "Dane operacyjne są w systemach, ale nikt nie ma czasu ich analizować.",
      "Pracownicy korzystają z czatów AI na prywatnych kontach, bez zasad.",
      "Chcecie obsłużyć nowych klientów bez rozbudowy biura.",
    ],
  },
  intro: {
    title: "AI w firmie logistycznej na trzech poziomach",
    paragraphs: [
      "Pierwszy poziom to narzędzia AI dla zespołu: czat z modelem językowym na koncie firmowym, z zasadami i szkoleniem. Pracownicy biura szybciej piszą maile do klientów i przewoźników, także w obcych językach, przygotowują instrukcje i streszczają długie wątki, a firma wie, gdzie trafiają dane.",
      "Drugi poziom to AI w procesach. Model odczytuje zlecenia z maili, plików Excel i PDF, dokumenty dostaw i listy przewozowe, a dane trafiają do WMS lub TMS po kontroli. AI pomaga też w analizie danych operacyjnych: wskazuje nietypowe wartości, przygotowuje komentarz do raportu dla klienta, podsumowuje przyczyny reklamacji.",
      "Trzeci poziom to agenci AI. Agent może odpowiadać klientom na pytania o stany i statusy na podstawie danych z systemów, zbierać brakujące informacje do zleceń albo przygotowywać zgłoszenia reklamacyjne. Działa według zasad ustalonych z firmą i przekazuje ludziom wszystko, co wymaga decyzji.",
    ],
  },
  scope: {
    title: "Jak AI pomaga w firmie logistycznej",
    lead: "Zastosowania, które wdrażamy najczęściej. Każde działa jako wsparcie, a wyjątki sprawdza człowiek.",
    items: [
      { title: "Odczyt zleceń", body: "Zamówienia, przyjęcia i zlecenia transportowe z maili, Excela i PDF w dowolnym układzie." },
      { title: "Odczyt dokumentów", body: "Dokumenty dostaw, listy przewozowe, potwierdzenia i faktury przypisane do zleceń." },
      { title: "Odpowiedzi dla klientów", body: "Stany, statusy i dokumenty na podstawie danych z WMS i TMS." },
      { title: "Reklamacje", body: "Opis zgłoszenia, zdjęcia i dokumenty zebrane w jednym miejscu, z propozycją kategorii." },
      { title: "Analiza danych", body: "Nietypowe wartości, trendy i komentarze do raportów dla klientów i zarządu." },
      { title: "Komunikacja w językach obcych", body: "Maile do klientów, przewoźników i dostawców w ich języku, do sprawdzenia." },
      { title: "Wiedza firmy", body: "Asystent odpowiadający na pytania o procedury, warunki klientów i instrukcje." },
      { title: "Zasady i szkolenia", body: "Polityka korzystania z AI i warsztaty na zadaniach z pracy biura." },
    ],
  },
  security: {
    title: "AI a dane klientów i operacje",
    lead: "Firma logistyczna pracuje na danych wielu klientów naraz. Wdrażamy AI tak, żeby te dane były rozdzielone i pod kontrolą.",
    items: [
      { title: "Konta firmowe zamiast prywatnych", body: "Zespół korzysta z AI na kontach firmy, w planach, w których dane nie służą do trenowania modeli." },
      { title: "Minimum danych", body: "Do modelu trafia tylko to, co potrzebne do zadania, np. treść zlecenia bez historii klienta." },
      { title: "Rozdzielenie klientów", body: "Agent odpowiadający klientom widzi tylko dane klienta, który pyta." },
      { title: "Dane w UE lub u was", body: "Przepływy z AI mogą działać na serwerze w UE albo w infrastrukturze firmy." },
      { title: "Bez ingerencji w operacje", body: "AI nie steruje magazynem. Przygotowuje dane, które przechodzą kontrolę przed trafieniem do WMS." },
      { title: "Weryfikacja wyjątków", body: "Zlecenia z niepewnym odczytem, reklamacje i nietypowe sytuacje sprawdza człowiek." },
    ],
  },
  comparison: {
    title: "Prywatne konta AI czy AI wdrożone w firmie",
    lead: "Różnica nie polega na jakości modelu, tylko na kontroli nad danymi i wpływie na procesy.",
    columns: ["AI wdrożone w firmie", "Prywatne konta pracowników"],
    rows: [
      { label: "Gdzie trafiają dane", values: ["Ustalone miejsce, umowa z dostawcą", "Zależy od ustawień każdego konta"] },
      { label: "Trenowanie modeli na danych", values: ["Wyłączone w planach firmowych", "Często włączone domyślnie w planach prywatnych"] },
      { label: "Zlecenia i dokumenty", values: ["Odczytywane automatycznie w procesie", "Wklejane ręcznie do czatu"] },
      { label: "Dane z WMS i TMS", values: ["Wykorzystywane w odpowiedziach i raportach", "Niedostępne dla czatu"] },
      { label: "Wpływ na procesy", values: ["AI w zleceniach, dokumentach, obsłudze klientów", "Tylko praca w oknie czatu"] },
    ],
    note: "Porównanie jest uproszczone. Ustawienia narzędzi AI zmieniają się, dlatego weryfikujemy je przy każdym wdrożeniu.",
  },
  example: {
    title: "Praca biura przed i po wdrożeniu AI",
    lead: "Przykład operatora logistycznego obsługującego kilkunastu klientów z różnych branż.",
    rows: [
      { label: "Zlecenia", before: "Przepisywane z plików klientów do WMS.", after: "Odczytane przez AI i utworzone po kontroli." },
      { label: "Dokumenty", before: "Czytane i wpisywane ręcznie.", after: "Odczytane i przypisane do zleceń." },
      { label: "Pytania klientów", before: "Sprawdzanie stanów i statusów w systemach.", after: "Agent odpowiada na podstawie WMS i TMS." },
      { label: "Raporty", before: "Liczby bez komentarza.", after: "Komentarz do nietypowych wartości do sprawdzenia." },
      { label: "Bezpieczeństwo", before: "Prywatne czaty AI bez zasad.", after: "Konta firmowe, zasady i kontrola nad danymi." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak wdrażamy AI w firmie logistycznej",
    lead: "Zaczynamy od zasad i bezpiecznych narzędzi, a potem dokładamy AI do zleceń, dokumentów i obsługi klientów.",
    phases: [
      {
        title: "Przegląd i zasady",
        duration: "kilka dni",
        body: "Sprawdzamy, jak zespół korzysta dziś z AI, jakie zlecenia i dokumenty zabierają najwięcej czasu, i przygotowujemy zasady.",
        fromYou: "Rozmowa z kierownikiem operacji i obsługi klienta oraz informacja o systemach.",
      },
      {
        title: "Narzędzia i szkolenie",
        duration: "1–2 tygodnie",
        body: "Konfigurujemy konta firmowe i prowadzimy warsztat na prawdziwych zadaniach biura.",
        fromYou: "Udział zespołu w warsztacie i przykładowe, zanonimizowane zlecenia i dokumenty.",
      },
      {
        title: "AI w procesach",
        duration: "zwykle 3–6 tygodni",
        body: "Budujemy wybrane zastosowania: odczyt zleceń, dokumentów, agenta dla klientów. Testujemy na wybranym kliencie.",
        fromYou: "Osoba oceniająca wyniki i dostęp do danych testowych.",
      },
      {
        title: "Opieka i rozwój",
        duration: "stale",
        body: "Pilnujemy jakości odczytu i kosztów, aktualizujemy zasady i dokładamy kolejne zastosowania.",
        fromYou: "Uwagi zespołu i informacja o nowych klientach i formatach.",
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
          "Warsztat dla zespołu na prawdziwych zadaniach",
          "Biblioteka sprawdzonych poleceń",
        ],
      },
      {
        name: "AI w zleceniach i dokumentach",
        description: "Dla firm, które dostają zlecenia i dokumenty w wielu formatach.",
        includes: [
          "Wszystko z wariantu Bezpieczny start",
          "Odczyt zleceń z maili i plików",
          "Odczyt dokumentów i przypisanie do zleceń",
          "Kontrola danych przed WMS i TMS",
          "Przepływy działające na serwerze w UE",
        ],
      },
      {
        name: "Agenci AI w abonamencie",
        description: "Dla firm, które chcą odciążyć biuro obsługi klienta.",
        includes: [
          "Agent odpowiadający klientom o stany i statusy",
          "Agent zbierający brakujące dane do zleceń",
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
      "liczba klientów i formatów zleceń,",
      "liczba zleceń i dokumentów, które przetwarza AI,",
      "możliwości integracji WMS i TMS,",
      "zakres agentów AI i kanałów komunikacji,",
      "zakres szkoleń i opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Granice AI w logistyce",
    items: [
      { risk: "AI źle odczyta indeks, ilość lub adres.", mitigation: "Kontrola danych z WMS przed utworzeniem zlecenia, a niepewne pozycje trafiają do sprawdzenia." },
      { risk: "Agent poda klientowi nieaktualny stan.", mitigation: "Agent korzysta z bieżących danych z WMS z czasem aktualizacji, a przy braku danych przekazuje pytanie zespołowi." },
      { risk: "Klient zobaczy dane innego klienta.", mitigation: "Agent rozpoznaje klienta i ma dostęp wyłącznie do jego danych." },
      { risk: "Zmiany w narzędziach AI.", mitigation: "Aktualizujemy zasady i konfigurację, gdy zmieniają się ustawienia narzędzi lub modele." },
    ],
  },
  faq: [
    { question: "Czy AI może sterować magazynem?", answer: "Nie w naszych wdrożeniach. AI przygotowuje dane i odpowiedzi, które przechodzą kontrolę. Operacjami magazynu zarządza WMS i ludzie." },
    { question: "Czy AI odczyta zlecenia z plików Excel klientów?", answer: "Tak, także gdy każdy klient ma inny układ pliku. Dla największych klientów warto dodatkowo ustalić stały format lub połączenie systemów." },
    { question: "Czy agent może odpowiadać klientom o stany magazynowe?", answer: "Tak, na podstawie bieżących danych z WMS. Agent widzi tylko dane klienta, który pyta, a pytania wymagające decyzji przekazuje zespołowi." },
    { question: "Czy AI pomoże w analizie danych operacyjnych?", answer: "Tak, jako wsparcie: wskazuje nietypowe wartości i przygotowuje komentarz do raportu. Obliczenia wykonują systemy, a wnioski sprawdzają ludzie." },
    { question: "Czy prowadzicie szkolenia z AI dla pracowników logistyki?", answer: "Tak. Warsztaty prowadzimy na zadaniach z praktyki biura: zlecenia, maile w obcych językach, reklamacje, raporty i bezpieczeństwo danych." },
  ],
  relatedServiceSlugs: ["agenci-ai", "ai-w-obsludze-dokumentow", "szkolenia-ai-dla-zespolow", "strategia-wdrozenia-ai"],
  relatedProcessSlugs: ["przyjmowanie-zamowien"],
  relatedToolSlugs: ["chatgpt", "claude", "n8n", "microsoft-365"],
  relatedArticleSlugs: ["ai-w-codziennej-pracy-zespolu", "wdrozenie-ai-w-malej-i-sredniej-firmie", "rodo-a-automatyzacja-procesow"],
};
