import type { IndustryPageContent } from "../types";

export const firmySzkolenioweOrganizacja: IndustryPageContent = {
  industrySlug: "firmy-szkoleniowe",
  subSlug: "organizacja-szkolen",
  name: "Organizacja szkoleń",
  excerpt: "Rejestr szkoleń z salami, trenerami, materiałami i cateringiem, przypomnienia i informacje dla uczestników, linki do szkoleń online i lista zadań przed każdym terminem.",
  metaTitle: "Organizacja szkoleń: sale, trenerzy, przypomnienia",
  metaDescription:
    "Automatyzujemy organizację szkoleń: rejestr terminów, sale, trenerzy, materiały i catering, przypomnienia dla uczestników, linki online i lista zadań.",
  primaryKeyword: "organizacja szkoleń",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy szkoleniowe: organizacja",
    title: "Każde szkolenie przygotowane na czas, bez listy zadań w głowie opiekuna",
    lead: "Sala zarezerwowana, trener potwierdzony, materiały wydrukowane, catering zamówiony, uczestnicy poinformowani, link do szkolenia online wysłany. Przy kilku szkoleniach w tygodniu opiekun pilnuje kilkudziesięciu zadań i jedno zapomnienie wystarczy, żeby szkolenie zaczęło się źle. Automatyzujemy organizację: każde szkolenie ma listę zadań z terminami, a przypomnienia i informacje wychodzą automatycznie.",
    bullets: [
      "Lista zadań z terminami dla każdego szkolenia",
      "Przypomnienia i informacje dla uczestników i trenerów",
      "Sale, materiały i linki online pod kontrolą",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy szkoleniowe, organizatorzy kursów, konferencji i warsztatów" },
    { label: "Co automatyzujemy", value: "Rejestr szkoleń, zadania, sale, trenerzy, materiały, przypomnienia" },
    { label: "Narzędzia", value: "Rejestr szkoleń, kalendarze, poczta, SMS, n8n" },
    { label: "Zasada", value: "Opiekun odpowiada za szkolenie, system pilnuje terminów" },
  ],
  symptoms: {
    title: "Kiedy organizację warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, organizacja zależy od pamięci opiekunów.",
    items: [
      "Lista zadań przed szkoleniem jest w głowie opiekuna.",
      "Sale i trenerzy są rezerwowani w różnych kalendarzach.",
      "Materiały drukuje się w ostatniej chwili.",
      "Uczestnicy dopytują o salę, godzinę i dojazd.",
      "Link do szkolenia online trafia do uczestników za późno.",
      "Zmiana terminu oznacza wiele telefonów i maili.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja organizacji",
    paragraphs: [
      "Każde szkolenie ma w rejestrze swoją kartę: termin, sala lub platforma, trener, liczba uczestników, materiały, catering. Na podstawie szablonu dla rodzaju szkolenia powstaje lista zadań z terminami: rezerwacja sali, potwierdzenie trenera, zamówienie cateringu, druk materiałów, wysyłka informacji.",
      "System przypomina opiekunowi o zadaniach przed terminem i pokazuje, które szkolenia mają zaległe zadania. Trener dostaje potwierdzenie z terminem, salą i listą uczestników. Uczestnicy dostają przypomnienie z salą, godziną, dojazdem lub linkiem do szkolenia online i materiałami.",
      "Gdy zmienia się termin lub sala, informacja trafia do wszystkich zainteresowanych automatycznie. Po szkoleniu karta przechodzi do kolejnych kroków: lista obecności, certyfikaty, ankiety, rozliczenie trenera.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja organizacji",
    lead: "Zakres dopasowujemy do rodzajów szkoleń.",
    items: [
      { title: "Rejestr szkoleń", body: "Termin, sala, trener, uczestnicy, materiały." },
      { title: "Szablony zadań", body: "Lista zadań według rodzaju szkolenia." },
      { title: "Przypomnienia dla opiekuna", body: "Zadania przed terminem i zaległości." },
      { title: "Sale i zasoby", body: "Rezerwacje bez konfliktów." },
      { title: "Informacje dla trenera", body: "Potwierdzenie, lista uczestników, materiały." },
      { title: "Informacje dla uczestników", body: "Sala, godzina, dojazd lub link, materiały." },
      { title: "Zmiany", body: "Automatyczna informacja dla wszystkich." },
      { title: "Szkolenia online", body: "Linki i dostęp do platformy w odpowiednim czasie." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zaplanowania do dnia szkolenia.",
    items: [
      {
        title: "Nowe szkolenie stacjonarne",
        trigger: "Opiekun dodaje szkolenie do rejestru",
        steps: ["Lista zadań z szablonu z terminami", "Przypomnienia o rezerwacji sali i cateringu", "Informacja dla uczestników i trenera przed szkoleniem"],
        result: "Szkolenie przygotowane bez pamiętania o wszystkim.",
      },
      {
        title: "Zmiana sali",
        trigger: "Sala niedostępna",
        steps: ["Zmiana w rejestrze", "Informacja dla trenera i uczestników", "Aktualizacja zadań"],
        result: "Wszyscy wiedzą o zmianie od razu.",
      },
    ],
  },
  example: {
    title: "Organizacja przed i po automatyzacji",
    lead: "Przykład firmy prowadzącej szkolenia stacjonarne i online w kilku miastach.",
    rows: [
      { label: "Zadania", before: "W głowie opiekuna.", after: "Lista z terminami." },
      { label: "Uczestnicy", before: "Dopytują.", after: "Dostają informacje." },
      { label: "Zmiany", before: "Telefony i maile.", after: "Automatyczna informacja." },
      { label: "Szkolenia online", before: "Link w ostatniej chwili.", after: "W ustalonym czasie." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od rejestru i szablonów zadań.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Spisujemy zadania przed szkoleniem i sposób pracy opiekunów.", fromYou: "Rozmowa z opiekunami." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy rejestr, szablony i treści wiadomości.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Uruchamiamy rejestr na kilku szkoleniach.", fromYou: "Opiekun w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkie szkolenia.", fromYou: "Uwagi opiekunów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rejestru i informacji dla uczestników.",
    items: [
      { name: "Rejestr i informacje", description: "Dla firm, które chcą odciążyć opiekunów.", includes: ["Rejestr szkoleń", "Informacje dla uczestników", "Informacje dla trenera", "Zmiany"] },
      { name: "Zadania", description: "Dla firm z wieloma szkoleniami.", includes: ["Wszystko z wariantu Rejestr i informacje", "Szablony zadań", "Przypomnienia dla opiekuna", "Sale i zasoby"] },
      { name: "Pełna organizacja", description: "Dla firm z szkoleniami stacjonarnymi i online.", includes: ["Wszystko z wariantu Zadania", "Szkolenia online", "Raport zaległości", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba szkoleń i rodzajów szkoleń,",
      "liczba sal i lokalizacji,",
      "integracja z kalendarzami i platformą online,",
      "kanały komunikacji,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Zadanie umknie mimo przypomnień.", mitigation: "Raport zaległości dla kierownika." },
      { risk: "Uczestnik dostanie nieaktualną informację.", mitigation: "Informacje pochodzą z rejestru, a zmiany wychodzą automatycznie." },
      { risk: "Konflikt sal.", mitigation: "Rezerwacje w jednym miejscu, z kontrolą konfliktów." },
      { risk: "Nietypowe szkolenie nie pasuje do szablonu.", mitigation: "Opiekun może dodać i usunąć zadania." },
    ],
  },
  faq: [
    { question: "Czy rejestr zastąpi nasz kalendarz?", answer: "Może z nim współpracować. Terminy trafiają do kalendarzy opiekunów i trenerów." },
    { question: "Czy uczestnik dostanie informacje automatycznie?", answer: "Tak, w ustalonym czasie przed szkoleniem." },
    { question: "Czy obsłużycie szkolenia online?", answer: "Tak, linki i dostęp do platformy wysyłane w odpowiednim czasie." },
    { question: "Co ze zmianami w ostatniej chwili?", answer: "Zmiana w rejestrze trafia do wszystkich zainteresowanych, a przy szkoleniach stacjonarnych można dodać SMS." },
    { question: "Czy zobaczymy zaległe zadania?", answer: "Tak, raport pokazuje szkolenia z zaległymi zadaniami." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "projektowanie-baz-danych", "automatyzacja-w-obsludze-klienta"],
  relatedProcessSlugs: ["umawianie-wizyt"],
  relatedToolSlugs: ["airtable", "google-workspace", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
