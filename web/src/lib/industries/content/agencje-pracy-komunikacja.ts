import type { IndustryPageContent } from "../types";

export const agencjePracyKomunikacja: IndustryPageContent = {
  industrySlug: "agencje-pracy",
  subSlug: "komunikacja-z-pracownikami",
  name: "Komunikacja z pracownikami",
  excerpt: "Informacje o grafiku, miejscu pracy, dokumentach i wypłatach w języku pracownika, odpowiedzi na typowe pytania i przekazanie spraw do koordynatora.",
  metaTitle: "Komunikacja z pracownikami tymczasowymi w wielu językach",
  metaDescription:
    "Automatyzujemy komunikację z pracownikami agencji: grafiki, informacje o miejscu pracy, dokumentach i wypłatach w języku pracownika, odpowiedzi na pytania.",
  primaryKeyword: "komunikacja z pracownikami tymczasowymi",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Agencje pracy: komunikacja z pracownikami",
    title: "Pracownicy wiedzą, gdzie i kiedy pracują, bez dzwonienia do koordynatora",
    lead: "Gdzie mam jutro przyjść, o której zaczynam, kiedy będzie wypłata, jaki dokument muszę donieść: koordynator odbiera dziesiątki takich telefonów dziennie, często w kilku językach. Gdy grafik się zmienia, trzeba obdzwonić wszystkich. Automatyzujemy komunikację: pracownicy dostają informacje o grafiku i zmianach w swoim języku, asystent odpowiada na typowe pytania, a sprawy indywidualne trafiają do koordynatora.",
    bullets: [
      "Grafik i zmiany w wiadomości, w języku pracownika",
      "Odpowiedzi na typowe pytania o pracę, dokumenty i wypłaty",
      "Sprawy indywidualne do koordynatora z kontekstem",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje pracy tymczasowej z pracownikami z wielu krajów" },
    { label: "Co automatyzujemy", value: "Grafiki, zmiany, informacje, pytania, przekazanie, ogłoszenia" },
    { label: "Narzędzia", value: "SMS, komunikatory, poczta, model AI na informacjach agencji, n8n" },
    { label: "Zasada", value: "Sprawy indywidualne obsługuje koordynator" },
  ],
  symptoms: {
    title: "Kiedy komunikację warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, koordynator jest infolinią.",
    items: [
      "Koordynator odbiera dziesiątki telefonów o grafik i wypłaty.",
      "Zmiana grafiku oznacza obdzwanianie pracowników.",
      "Pracownicy mówią w kilku językach.",
      "Informacje o pierwszym dniu pracy przekazuje się ustnie.",
      "Pracownicy nie wiedzą, jakie dokumenty muszą donieść.",
      "Komunikacja jest w prywatnych komunikatorach koordynatorów.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja komunikacji",
    paragraphs: [
      "Pracownik ma w bazie przypisany język i preferowany kanał: SMS, komunikator lub mail. Grafik i jego zmiany trafiają do pracownika automatycznie, z adresem miejsca pracy, godziną i osobą kontaktową. Nowy pracownik dostaje informacje na pierwszy dzień: dojazd, wejście, strój, dokumenty.",
      "Asystent odpowiada na typowe pytania pracowników na podstawie informacji agencji: termin wypłaty, procedura zgłoszenia nieobecności, dokumenty, zasady. Odpowiada w języku pracownika. Pytania indywidualne, np. o wysokość konkretnej wypłaty czy problemy w miejscu pracy, trafiają do koordynatora z kontekstem.",
      "Ogłoszenia, np. o zmianach zasad czy nowych zleceniach, można wysłać do wybranych grup pracowników. Komunikacja jest zapisana przy pracowniku, a nie w prywatnym telefonie koordynatora.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja komunikacji",
    lead: "Zakres dopasowujemy do pracowników i kanałów.",
    items: [
      { title: "Język i kanał", body: "Przypisane do pracownika." },
      { title: "Grafik", body: "Informacja o zmianach, miejscu i godzinie." },
      { title: "Pierwszy dzień", body: "Dojazd, wejście, strój, dokumenty." },
      { title: "Asystent", body: "Odpowiedzi na typowe pytania z informacji agencji." },
      { title: "Przekazanie", body: "Sprawy indywidualne do koordynatora z kontekstem." },
      { title: "Ogłoszenia", body: "Do wybranych grup pracowników." },
      { title: "Zgłoszenia nieobecności", body: "Przez wiadomość, z informacją dla koordynatora i klienta." },
      { title: "Historia", body: "Komunikacja przy pracowniku." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zmiany grafiku do informacji dla pracownika.",
    items: [
      {
        title: "Zmiana grafiku",
        trigger: "Klient przesuwa zmianę",
        steps: ["Aktualizacja grafiku", "Wiadomość do pracowników w ich językach", "Lista osób bez potwierdzenia dla koordynatora"],
        result: "Pracownicy wiedzą o zmianie bez telefonów.",
      },
      {
        title: "Pytanie o wypłatę",
        trigger: "Pracownik pyta, kiedy będzie wypłata",
        steps: ["Odpowiedź z informacji agencji w języku pracownika", "Przekazanie do koordynatora, jeśli pytanie dotyczy konkretnej kwoty", "Zapis w historii"],
        result: "Typowe pytania bez angażowania koordynatora.",
      },
    ],
  },
  example: {
    title: "Komunikacja przed i po automatyzacji",
    lead: "Przykład agencji z kilkuset pracownikami z kilku krajów.",
    rows: [
      { label: "Grafik", before: "Telefony.", after: "Wiadomości w języku pracownika." },
      { label: "Pytania", before: "Do koordynatora.", after: "Asystent i przekazanie." },
      { label: "Pierwszy dzień", before: "Ustnie.", after: "Wiadomość z informacjami." },
      { label: "Historia", before: "W prywatnych telefonach.", after: "Przy pracowniku." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od informacji o grafiku.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś komunikujecie się z pracownikami i o co pytają.", fromYou: "Rozmowa z koordynatorami." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy kanały, języki, treści i zasady przekazania.", fromYou: "Akceptacja treści." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Testujemy na grupie pracowników jednego klienta.", fromYou: "Koordynator w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkich pracowników i aktualizujemy informacje.", fromYou: "Informacja o zmianach zasad." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od grafików i informacji na pierwszy dzień.",
    items: [
      { name: "Grafiki", description: "Dla agencji, które chcą skończyć z obdzwanianiem.", includes: ["Grafik", "Zmiany", "Pierwszy dzień", "Lista bez potwierdzenia"] },
      { name: "Asystent", description: "Dla agencji z wieloma pytaniami pracowników.", includes: ["Wszystko z wariantu Grafiki", "Asystent w wielu językach", "Przekazanie do koordynatora", "Zgłoszenia nieobecności"] },
      { name: "Pełna komunikacja", description: "Dla agencji z wieloma klientami i grupami.", includes: ["Wszystko z wariantu Asystent", "Ogłoszenia", "Historia przy pracowniku", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba pracowników i języków,",
      "kanały komunikacji i koszt wiadomości,",
      "zakres informacji dla asystenta,",
      "integracja z grafikami,",
      "zakres opieki.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Pracownik nie odczyta wiadomości o zmianie.", mitigation: "Lista osób bez potwierdzenia dla koordynatora." },
      { risk: "Asystent poda nieaktualną informację.", mitigation: "Informacje są w jednym miejscu i aktualizowane przez agencję." },
      { risk: "Błąd w tłumaczeniu ważnej informacji.", mitigation: "Szablony ważnych wiadomości są sprawdzane przez osobę znającą język." },
      { risk: "Pytanie o sprawę indywidualną do asystenta.", mitigation: "Asystent przekazuje je koordynatorowi z kontekstem." },
    ],
  },
  faq: [
    { question: "W jakich językach może działać komunikacja?", answer: "W językach pracowników agencji. Ważne szablony warto sprawdzić z osobą znającą język." },
    { question: "Jakimi kanałami?", answer: "SMS, komunikatory lub mail, zależnie od tego, z czego korzystają pracownicy i co pozwala na automatyzację." },
    { question: "Czy asystent odpowie na pytanie o wysokość wypłaty?", answer: "Nie. Odpowiada na pytania ogólne, a sprawy indywidualne przekazuje koordynatorowi." },
    { question: "Czy pracownik może zgłosić nieobecność wiadomością?", answer: "Tak, a informacja trafia do koordynatora i, jeśli trzeba, do klienta." },
    { question: "Czy komunikacja będzie zapisana?", answer: "Tak, przy pracowniku, a nie w prywatnych telefonach koordynatorów." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-hr"],
  relatedProcessSlugs: ["onboarding-pracownika"],
  relatedToolSlugs: ["n8n", "chatgpt", "google-workspace"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
