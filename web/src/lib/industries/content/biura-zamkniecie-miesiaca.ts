import type { IndustryPageContent } from "../types";

export const biuraZamkniecieMiesiaca: IndustryPageContent = {
  industrySlug: "biura-rachunkowe",
  subSlug: "zamkniecie-miesiaca",
  name: "Terminy i zamknięcie miesiąca",
  excerpt: "Kalendarz obowiązków klientów, status zamknięcia każdego klienta i przypomnienia dla zespołu w jednym miejscu.",
  metaTitle: "Terminy i zamknięcie miesiąca w biurze rachunkowym",
  metaDescription:
    "Automatyzujemy organizację pracy biura rachunkowego: kalendarz obowiązków klientów, status zamknięcia miesiąca, przypomnienia i obciążenie zespołu.",
  primaryKeyword: "organizacja pracy biura rachunkowego",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Biura rachunkowe: terminy i zamknięcie miesiąca",
    title: "Zamknięcie miesiąca pod kontrolą: każdy klient, każdy termin, jeden widok",
    lead: "W biurze, które obsługuje kilkuset klientów, każdy miesiąc to setki obowiązków z różnymi terminami. Często pilnuje się ich w arkuszu, w kalendarzach poszczególnych osób albo w pamięci. Budujemy jedno miejsce, w którym widać status każdego klienta, zbliżające się terminy i obciążenie zespołu, a przypomnienia wysyłają się same.",
    bullets: [
      "Status zamknięcia każdego klienta na bieżąco",
      "Kalendarz obowiązków według rodzaju klienta",
      "Przypomnienia i zastępstwa w zespole",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura rachunkowe z kilkoma lub kilkunastoma księgowymi" },
    { label: "Co automatyzujemy", value: "Kalendarz obowiązków, statusy, przypomnienia, zastępstwa, raporty" },
    { label: "Narzędzia", value: "Airtable lub Microsoft 365, n8n, program księgowy" },
    { label: "Zasada", value: "System pilnuje terminów, księgowy odpowiada za rozliczenie" },
  ],
  symptoms: {
    title: "Kiedy organizację pracy warto zautomatyzować",
    lead: "Jeśli te sytuacje są znajome, biuro zależy od pamięci i arkuszy bardziej, niż powinno.",
    items: [
      "Lista klientów i ich statusów to arkusz, który aktualizuje się ręcznie albo wcale.",
      "Kierownik nie wie bez pytania, ilu klientów jest już zamkniętych w danym miesiącu.",
      "Terminy obowiązków różnią się między klientami, a pilnuje ich każda księgowa osobno.",
      "Nieobecność jednej osoby oznacza, że nikt nie wie, co jest do zrobienia u jej klientów.",
      "Obciążenie zespołu jest nierówne, ale trudno to pokazać na liczbach.",
      "Nowy klient dostaje obowiązki, o których ktoś musi pamiętać przy każdym zamknięciu.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja organizacji pracy",
    paragraphs: [
      "Podstawą jest uporządkowana baza klientów: forma prawna, sposób rozliczenia, obowiązki, księgowa prowadząca i osoba zastępująca. Na jej podstawie system tworzy co miesiąc listę zadań dla każdego klienta, z terminami wynikającymi z jego rodzaju i ustaleń z biurem.",
      "Status zadań aktualizuje się z kilku źródeł: kompletności dokumentów, informacji z programu księgowego i zatwierdzeń księgowych. Kierownik widzi, którzy klienci czekają na dokumenty, którzy są w trakcie, a którzy są już zamknięci. Zbliżający się termin bez zamknięcia uruchamia przypomnienie dla księgowej, a przy nieobecności także dla osoby zastępującej.",
      "Kalendarz obowiązków przygotowujemy razem z biurem, na podstawie tego, jak pracujecie. System pomaga pilnować terminów, ale nie zastępuje wiedzy księgowej o tym, jakie obowiązki ma klient i kiedy.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja organizacji pracy",
    lead: "Zakres dopasowujemy do wielkości biura i narzędzi, których już używa.",
    items: [
      { title: "Baza klientów", body: "Rodzaj klienta, sposób rozliczenia, obowiązki, prowadząca i zastępstwo w jednym miejscu." },
      { title: "Zadania na miesiąc", body: "Lista zadań dla każdego klienta tworzona automatycznie, z terminami." },
      { title: "Status zamknięcia", body: "Dokumenty, księgowanie, zatwierdzenie, wysłanie informacji do klienta." },
      { title: "Przypomnienia", body: "Informacja dla księgowej o zbliżających się terminach i zaległościach." },
      { title: "Zastępstwa", body: "Przy nieobecności zadania i przypomnienia trafiają do osoby zastępującej." },
      { title: "Widok dla kierownika", body: "Postęp zamknięcia miesiąca w całym biurze i u każdej osoby." },
      { title: "Obciążenie zespołu", body: "Liczba klientów, dokumentów i zadań na osobę." },
      { title: "Nowy klient", body: "Obowiązki i zadania nowego klienta tworzone przy jego przyjęciu." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od początku miesiąca do zamknięcia ostatniego klienta.",
    items: [
      {
        title: "Nowy miesiąc",
        trigger: "Pierwszy dzień miesiąca",
        steps: ["Utworzenie zadań dla każdego klienta według jego obowiązków", "Przypisanie do księgowej prowadzącej", "Połączenie zadań ze statusem dokumentów klienta"],
        result: "Każda księgowa ma listę zadań na miesiąc bez przepisywania arkusza.",
      },
      {
        title: "Termin bez zamknięcia",
        trigger: "Kilka dni przed terminem zadanie jest nadal otwarte",
        steps: ["Przypomnienie dla księgowej prowadzącej", "Informacja dla osoby zastępującej przy nieobecności", "Oznaczenie klienta w widoku kierownika"],
        result: "Zaległości są widoczne wcześniej, a nie w dniu terminu.",
      },
    ],
  },
  example: {
    title: "Organizacja pracy przed i po automatyzacji",
    lead: "Przykład biura z kilkunastoma księgowymi i kilkuset klientami.",
    rows: [
      { label: "Lista klientów", before: "Arkusz aktualizowany ręcznie.", after: "Baza z obowiązkami i statusami." },
      { label: "Zadania", before: "Każda księgowa pamięta o swoich klientach.", after: "Zadania tworzone automatycznie co miesiąc." },
      { label: "Postęp", before: "Kierownik pyta zespół.", after: "Widok zamknięcia na bieżąco." },
      { label: "Nieobecności", before: "Trudno ustalić, co jest do zrobienia.", after: "Zadania i przypomnienia u osoby zastępującej." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym biurze.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Najwięcej pracy wymaga uporządkowanie bazy klientów. Resztę budujemy na niej.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak biuro dziś pilnuje terminów i statusów, i jakie dane o klientach są dostępne.", fromYou: "Obecny arkusz lub lista klientów i rozmowa z kierownikiem." },
      { title: "Baza i kalendarz", duration: "1–2 tygodnie", body: "Porządkujemy bazę klientów i razem z wami ustalamy kalendarz obowiązków.", fromYou: "Weryfikacja danych klientów i obowiązków." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy zadania, statusy i przypomnienia, testujemy je przez jedno zamknięcie miesiąca.", fromYou: "Księgowe, które pracują na nowym widoku i zgłaszają uwagi." },
      { title: "Start i opieka", duration: "stale", body: "Przechodzimy w pełni na nowy sposób pracy i rozwijamy raporty.", fromYou: "Aktualizacja obowiązków przy zmianach u klientów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od bazy klientów i statusów, a raporty dodać później.",
    items: [
      { name: "Baza i statusy", description: "Dla biur, które chcą zastąpić arkusz.", includes: ["Uporządkowana baza klientów", "Zadania na miesiąc", "Status zamknięcia", "Widok dla kierownika"] },
      { name: "Terminy i zastępstwa", description: "Dla biur, które chcą pilnować terminów systemowo.", includes: ["Wszystko z wariantu Baza i statusy", "Kalendarz obowiązków", "Przypomnienia", "Zastępstwa przy nieobecności"] },
      { name: "Pełna organizacja", description: "Dla biur, które chcą zarządzać obciążeniem i rozwojem.", includes: ["Wszystko z wariantu Terminy i zastępstwa", "Połączenie ze statusem dokumentów", "Obciążenie zespołu", "Raporty dla właściciela"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "stan danych o klientach i ich obowiązkach,",
      "liczba klientów i księgowych,",
      "połączenie z programem księgowym i zbieraniem dokumentów,",
      "zakres przypomnień i raportów,",
      "narzędzie, na którym budujemy rozwiązanie.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędny kalendarz obowiązków klienta.", mitigation: "Kalendarz ustalamy z biurem i weryfikujemy przy pierwszym zamknięciu. Odpowiedzialność za rozliczenie zostaje u księgowej." },
      { risk: "Statusy nie będą aktualne.", mitigation: "Część statusów aktualizuje się automatycznie, a ręczna zmiana to jedno kliknięcie w miejscu, w którym księgowa i tak pracuje." },
      { risk: "Zespół uzna to za kontrolę.", mitigation: "Widok pokazuje przede wszystkim, kto na co czeka i gdzie potrzebna jest pomoc, a nie tylko wyniki poszczególnych osób." },
      { risk: "Zbyt wiele przypomnień.", mitigation: "Przypomnienia ustawiamy tak, żeby dotyczyły tylko zadań zagrożonych terminem." },
    ],
  },
  faq: [
    { question: "Czy to nie jest funkcja programu księgowego?", answer: "Niektóre programy mają elementy organizacji pracy. Często jednak nie łączą statusu dokumentów, zamknięcia i komunikacji z klientem. Sprawdzamy, co ma wasz program, i budujemy tylko to, czego brakuje." },
    { question: "Na jakim narzędziu budujecie bazę klientów?", answer: "Najczęściej w Airtable albo w Microsoft 365, jeśli biuro już z niego korzysta. Wybór zależy od liczby klientów i tego, jak zespół pracuje." },
    { question: "Kto ustala terminy obowiązków klientów?", answer: "Biuro. Kalendarz przygotowujemy razem z wami na podstawie waszego sposobu pracy, a system pilnuje go co miesiąc." },
    { question: "Czy to pomoże przy rozliczeniach rocznych?", answer: "Tak. Zadania roczne dodajemy do kalendarza, a widok pokazuje postęp rozliczeń w całym biurze." },
    { question: "Czy klienci zobaczą statusy?", answer: "Jeśli chcecie, tak. Informacja o statusie może trafiać do klientów automatycznie, co opisujemy na stronie o komunikacji z klientami." },
  ],
  relatedServiceSlugs: ["automatyzacja-raportow", "projektowanie-baz-danych", "wdrozenia-airtable"],
  relatedProcessSlugs: ["raporty-finansowe"],
  relatedToolSlugs: ["airtable", "microsoft-365", "n8n"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-biurze-rachunkowym", "airtable-czy-excel", "od-czego-zaczac-mapowanie-procesow"],
};
