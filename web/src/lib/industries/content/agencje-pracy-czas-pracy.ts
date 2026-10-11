import type { IndustryPageContent } from "../types";

export const agencjePracyCzasPracy: IndustryPageContent = {
  industrySlug: "agencje-pracy",
  subSlug: "ewidencja-czasu-pracy",
  name: "Ewidencja czasu pracy",
  excerpt: "Godziny pracowników od klientów w różnych formatach zamienione na jeden, porównane z grafikiem, z rozbieżnościami do wyjaśnienia i akceptacją przed rozliczeniem.",
  metaTitle: "Ewidencja czasu pracy pracowników tymczasowych",
  metaDescription:
    "Automatyzujemy ewidencję czasu pracy w agencji: godziny od klientów w jednym formacie, porównanie z grafikiem, rozbieżności i akceptacja klienta.",
  primaryKeyword: "ewidencja czasu pracy pracowników tymczasowych",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Agencje pracy: ewidencja czasu pracy",
    title: "Godziny od klientów w jednym formacie, bez przepisywania arkuszy",
    lead: "Jeden klient przysyła godziny w arkuszu, drugi w PDF ze skanem listy, trzeci z systemu rejestracji czasu, czwarty mailem w treści wiadomości. Biuro agencji przepisuje to wszystko, porównuje z grafikiem i wyjaśnia rozbieżności przed terminem wypłat. Automatyzujemy ewidencję: godziny od klientów są zamieniane na jeden format, porównywane z grafikiem, a rozbieżności trafiają do wyjaśnienia przed rozliczeniem.",
    bullets: [
      "Godziny od klientów w jednym formacie",
      "Porównanie z grafikiem i lista rozbieżności",
      "Akceptacja klienta i dane do rozliczeń",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje pracy tymczasowej rozliczające godziny z wieloma klientami" },
    { label: "Co automatyzujemy", value: "Import godzin, porównanie, rozbieżności, akceptacje, dane do rozliczeń" },
    { label: "Narzędzia", value: "Pliki klientów, systemy rejestracji czasu, baza, model AI, n8n" },
    { label: "Zasada", value: "Godziny akceptuje klient i agencja" },
  ],
  symptoms: {
    title: "Kiedy ewidencję warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, koniec miesiąca to wyścig z czasem.",
    items: [
      "Każdy klient przysyła godziny w innym formacie.",
      "Biuro przepisuje godziny do arkusza lub programu.",
      "Rozbieżności z grafikiem wychodzą tuż przed wypłatą.",
      "Pracownicy kwestionują liczbę godzin.",
      "Akceptacja godzin przez klienta jest mailowa i trudna do odnalezienia.",
      "Godziny nocne i nadliczbowe liczy się ręcznie.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja ewidencji",
    paragraphs: [
      "Dla każdego klienta przygotowujemy import godzin w formacie, który przysyła: arkusz, plik z systemu rejestracji czasu, PDF ze skanem listy, wiadomość mail. AI pomaga odczytać nietypowe formaty i skany, a wątpliwe pozycje są oznaczone. Wszystkie godziny trafiają do jednej ewidencji: pracownik, dzień, godziny, rodzaj godzin.",
      "System porównuje godziny z grafikiem i umową: brakujące dni, godziny ponad grafik, nocne i nadliczbowe, pracownicy spoza listy. Rozbieżności trafiają do koordynatora, który wyjaśnia je z klientem lub pracownikiem.",
      "Po wyjaśnieniu klient dostaje zestawienie do akceptacji, a zaakceptowane godziny trafiają do rozliczeń: faktury dla klienta i danych do wynagrodzeń. Pracownik może zobaczyć swoje godziny przed wypłatą, co ogranicza spory.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja ewidencji",
    lead: "Zakres dopasowujemy do klientów i formatów.",
    items: [
      { title: "Import od klientów", body: "Arkusze, pliki z systemów, PDF i maile." },
      { title: "Odczyt z AI", body: "Nietypowe formaty i skany, z oznaczeniem wątpliwości." },
      { title: "Jedna ewidencja", body: "Pracownik, dzień, godziny, rodzaj." },
      { title: "Porównanie z grafikiem", body: "Braki, nadwyżki, nocne i nadliczbowe." },
      { title: "Rozbieżności", body: "Lista dla koordynatora do wyjaśnienia." },
      { title: "Akceptacja klienta", body: "Zestawienie do zatwierdzenia." },
      { title: "Godziny dla pracownika", body: "Podgląd przed wypłatą." },
      { title: "Dane do rozliczeń", body: "Faktury i wynagrodzenia." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od pliku klienta do zaakceptowanych godzin.",
    items: [
      {
        title: "Godziny tygodniowe",
        trigger: "Klient przysyła arkusz z godzinami",
        steps: ["Import do wspólnej ewidencji", "Porównanie z grafikiem i lista rozbieżności", "Wyjaśnienie przez koordynatora"],
        result: "Rozbieżności wyjaśniane co tydzień, a nie przed wypłatą.",
      },
      {
        title: "Koniec miesiąca",
        trigger: "Zamknięcie okresu",
        steps: ["Zestawienie do akceptacji klienta", "Podgląd godzin dla pracowników", "Dane do faktur i wynagrodzeń"],
        result: "Rozliczenie na podstawie zaakceptowanych godzin.",
      },
    ],
  },
  example: {
    title: "Ewidencja przed i po automatyzacji",
    lead: "Przykład agencji z kilkunastoma klientami i kilkuset pracownikami.",
    rows: [
      { label: "Formaty", before: "Kilkanaście różnych.", after: "Jeden." },
      { label: "Przepisywanie", before: "Dni pracy.", after: "Import." },
      { label: "Rozbieżności", before: "Przed wypłatą.", after: "Co tydzień." },
      { label: "Spory z pracownikami", before: "Częste.", after: "Rzadsze, dzięki podglądowi." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od klientów z największą liczbą pracowników.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Zbieramy formaty godzin od klientów i zasady rozliczeń.", fromYou: "Przykładowe pliki." },
      { title: "Importy", duration: "1–2 tygodnie", body: "Przygotowujemy importy dla klientów i zasady porównania.", fromYou: "Weryfikacja wyników importu." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Testujemy na jednym okresie równolegle z obecnym sposobem.", fromYou: "Osoba porównująca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Dokładamy kolejnych klientów i pilnujemy zmian formatów.", fromYou: "Informacja o nowych klientach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od importu godzin od kilku klientów.",
    items: [
      { name: "Import godzin", description: "Dla agencji, które chcą skończyć z przepisywaniem.", includes: ["Import od klientów", "Jedna ewidencja", "Odczyt z AI", "Raport godzin"] },
      { name: "Kontrola godzin", description: "Dla agencji z częstymi rozbieżnościami.", includes: ["Wszystko z wariantu Import godzin", "Porównanie z grafikiem", "Rozbieżności", "Akceptacja klienta"] },
      { name: "Pełna ewidencja", description: "Dla agencji, które chcą ograniczyć spory.", includes: ["Wszystko z wariantu Kontrola godzin", "Podgląd dla pracowników", "Dane do rozliczeń", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba klientów i formatów,",
      "liczba pracowników,",
      "zasady godzin nocnych i nadliczbowych,",
      "integracja z programem kadrowo-płacowym,",
      "zakres wykorzystania AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędnie odczytane godziny ze skanu.", mitigation: "Wątpliwe pozycje są oznaczone, a zestawienie akceptuje klient." },
      { risk: "Klient zmieni format pliku.", mitigation: "Import sprawdza strukturę i zatrzymuje się przy zmianach." },
      { risk: "Spór o godziny z pracownikiem.", mitigation: "Pracownik widzi swoje godziny przed wypłatą i może zgłosić uwagę." },
      { risk: "Błąd w zasadach godzin nadliczbowych.", mitigation: "Zasady ustala agencja z kadrami, a wyniki są porównywane w teście." },
    ],
  },
  faq: [
    { question: "Czy obsłużycie skany list obecności?", answer: "Tak, AI odczytuje skany dobrej jakości, a wątpliwe pozycje są oznaczone." },
    { question: "Czy klient musi zmieniać sposób przesyłania godzin?", answer: "Nie. Przygotowujemy import dla formatu, który przysyła." },
    { question: "Czy pracownik zobaczy swoje godziny?", answer: "Tak, przez prosty podgląd lub wiadomość przed wypłatą." },
    { question: "Czy godziny trafią do programu kadrowo-płacowego?", answer: "Tak, w formacie, który program przyjmuje." },
    { question: "Czy rozliczycie godziny nocne i nadliczbowe?", answer: "Tak, według zasad ustalonych przez agencję z kadrami." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-hr", "integracje-systemow", "ai-w-obsludze-dokumentow"],
  relatedProcessSlugs: ["raporty-finansowe"],
  relatedToolSlugs: ["airtable", "n8n", "microsoft-365"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-agencji-pracy", "airtable-czy-excel", "jak-mierzyc-roi-automatyzacji"],
};
