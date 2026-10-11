import type { IndustryPageContent } from "../types";

export const placowkiMedyczneFormularze: IndustryPageContent = {
  industrySlug: "placowki-medyczne",
  subSlug: "formularze-przed-wizyta",
  name: "Formularze i zgody przed wizytą",
  excerpt: "Dane pacjenta, zgody i ankiety wypełniane online przed wizytą, przekazywane do systemu placówki, bez papieru w poczekalni i przepisywania w rejestracji.",
  metaTitle: "Formularze dla pacjentów przed wizytą: zgody i ankiety",
  metaDescription:
    "Automatyzujemy formularze w placówce medycznej: dane pacjenta, zgody i ankiety wypełniane online przed wizytą, bez papieru i przepisywania w rejestracji.",
  primaryKeyword: "formularze dla pacjentów przed wizytą",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Placówki medyczne: formularze",
    title: "Formularze i zgody wypełnione przed wizytą, a nie w poczekalni",
    lead: "Nowy pacjent przychodzi kwadrans wcześniej, żeby wypełnić dane, zgody i ankietę na papierze. Rejestracja przepisuje je do systemu, a część pól jest nieczytelna. Automatyzujemy formularze: pacjent dostaje link po umówieniu wizyty, wypełnia dane i zgody online, a placówka ma je w systemie przed jego przyjściem.",
    bullets: [
      "Dane, zgody i ankiety online przed wizytą",
      "Bez papieru w poczekalni i przepisywania",
      "Przypomnienie o niewypełnionym formularzu",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Przychodnie, gabinety, stomatologia, fizjoterapia, medycyna estetyczna" },
    { label: "Co automatyzujemy", value: "Formularze, zgody, ankiety, przypomnienia, przekazanie do systemu" },
    { label: "Narzędzia", value: "Formularz, system gabinetowy, poczta, SMS, n8n" },
    { label: "Zasada", value: "Treść zgód i ankiet ustala placówka" },
  ],
  symptoms: {
    title: "Kiedy formularze warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, papier spowalnia przyjęcia.",
    items: [
      "Nowi pacjenci wypełniają formularze w poczekalni.",
      "Rejestracja przepisuje dane z papieru do systemu.",
      "Część formularzy jest nieczytelna lub niekompletna.",
      "Zgody są przechowywane w segregatorach.",
      "Wizyty zaczynają się z opóźnieniem przez formalności.",
      "Trudno sprawdzić, czy pacjent podpisał aktualną wersję zgody.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja formularzy",
    paragraphs: [
      "Po umówieniu wizyty pacjent dostaje link do formularza odpowiedniego dla usługi: dane osobowe dla nowego pacjenta, zgody wymagane przez placówkę, ankieta przygotowana przez placówkę. Formularz działa na telefonie i komputerze, a pola wymagane są oznaczone.",
      "Wypełniony formularz trafia do systemu placówki lub do bezpiecznego repozytorium uzgodnionego z placówką. Rejestracja widzi, którzy pacjenci wypełnili formularz, a którzy nie. Pacjent, który nie wypełnił, dostaje przypomnienie przed wizytą.",
      "Treść zgód i ankiet przygotowuje placówka, najlepiej z prawnikiem i osobą odpowiedzialną za ochronę danych. Automatyzacja pilnuje, żeby pacjent wypełnił aktualną wersję i żeby dokument trafił we właściwe miejsce. Odpowiedzi z ankiet nie trafiają do AI.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja formularzy",
    lead: "Zakres dopasowujemy do usług i wymagań placówki.",
    items: [
      { title: "Dane pacjenta", body: "Dla nowych pacjentów, bez przepisywania." },
      { title: "Zgody", body: "Wersje zgód wymaganych przez placówkę." },
      { title: "Ankiety", body: "Przygotowane przez placówkę dla wybranych usług." },
      { title: "Formularz według usługi", body: "Pacjent dostaje tylko to, co potrzebne." },
      { title: "Przypomnienia", body: "Dla pacjentów, którzy nie wypełnili." },
      { title: "Przekazanie do systemu", body: "Do systemu placówki lub uzgodnionego repozytorium." },
      { title: "Wersje dokumentów", body: "Pacjent podpisuje aktualną wersję." },
      { title: "Status dla rejestracji", body: "Kto wypełnił, a kto nie." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od umówienia wizyty do formularza w systemie.",
    items: [
      {
        title: "Nowy pacjent",
        trigger: "Pacjent umawia pierwszą wizytę",
        steps: ["Link do formularza danych i zgód", "Przypomnienie, jeśli nie wypełnił", "Dane w systemie przed wizytą"],
        result: "Pacjent nie wypełnia papierów w poczekalni.",
      },
      {
        title: "Zabieg wymagający zgody",
        trigger: "Pacjent umawia zabieg",
        steps: ["Link do zgody i ankiety przygotowanej przez placówkę", "Status widoczny dla rejestracji", "Dokument w systemie placówki"],
        result: "Komplet dokumentów przed zabiegiem.",
      },
    ],
  },
  example: {
    title: "Formularze przed i po automatyzacji",
    lead: "Przykład gabinetu stomatologicznego z kilkoma fotelami.",
    rows: [
      { label: "Wypełnianie", before: "W poczekalni.", after: "Online przed wizytą." },
      { label: "Dane", before: "Przepisywane.", after: "Bez przepisywania." },
      { label: "Zgody", before: "Segregatory.", after: "W systemie, w aktualnej wersji." },
      { label: "Opóźnienia", before: "Przez formalności.", after: "Mniejsze." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej placówce.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od formularza dla nowych pacjentów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Zbieramy obecne formularze, zgody i ankiety i sprawdzamy, gdzie trafiają.", fromYou: "Aktualne wzory dokumentów." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy formularze i zasady przechowywania razem z osobą odpowiedzialną za ochronę danych.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy formularze i testujemy je na nowych pacjentach.", fromYou: "Rejestracja w teście." },
      { title: "Start i opieka", duration: "stale", body: "Dokładamy kolejne usługi i aktualizujemy wersje dokumentów.", fromYou: "Informacja o zmianach we wzorach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od danych nowych pacjentów.",
    items: [
      { name: "Dane pacjenta", description: "Dla placówek, które chcą skończyć z przepisywaniem.", includes: ["Formularz danych", "Przekazanie do systemu", "Przypomnienia", "Status dla rejestracji"] },
      { name: "Dane i zgody", description: "Dla placówek z wieloma zgodami.", includes: ["Wszystko z wariantu Dane pacjenta", "Zgody", "Wersje dokumentów", "Formularz według usługi"] },
      { name: "Pełne formularze", description: "Dla placówek z ankietami przed zabiegami.", includes: ["Wszystko z wariantu Dane i zgody", "Ankiety placówki", "Raport kompletności", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba formularzy i usług,",
      "możliwości integracji systemu gabinetowego,",
      "wymagania dotyczące przechowywania dokumentów,",
      "podpis elektroniczny,",
      "zakres opieki.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Dane z formularza w niewłaściwym miejscu.", mitigation: "Przechowywanie uzgadniamy z placówką, a dostęp jest ograniczony do osób, które go potrzebują." },
      { risk: "Nieaktualna wersja zgody.", mitigation: "Wersje są w jednym miejscu, a zmiana obejmuje wszystkie nowe formularze." },
      { risk: "Pacjent nie wypełni formularza.", mitigation: "Przypomnienie i możliwość wypełnienia w placówce." },
      { risk: "Odpowiedzi z ankiet w narzędziach AI.", mitigation: "Odpowiedzi nie trafiają do AI." },
    ],
  },
  faq: [
    { question: "Kto przygotowuje treść zgód i ankiet?", answer: "Placówka, najlepiej z prawnikiem i osobą odpowiedzialną za ochronę danych. My automatyzujemy ich obieg." },
    { question: "Gdzie trafiają wypełnione formularze?", answer: "Do systemu placówki, jeśli na to pozwala, albo do repozytorium uzgodnionego z placówką." },
    { question: "Czy pacjent może podpisać zgodę online?", answer: "Tak, w formie ustalonej z placówką i jej prawnikiem." },
    { question: "Co z pacjentami, którzy nie korzystają z internetu?", answer: "Mogą wypełnić formularz w placówce, a rejestracja widzi jego status." },
    { question: "Czy odpowiedzi z ankiet analizuje AI?", answer: "Nie. Odpowiedzi trafiają do placówki i personelu." },
  ],
  relatedServiceSlugs: ["cyfryzacja-danych-i-dokumentow", "automatyzacja-w-obsludze-klienta", "integracje-systemow"],
  relatedProcessSlugs: ["umawianie-wizyt", "obieg-umow"],
  relatedToolSlugs: ["n8n", "microsoft-365", "google-workspace"],
  relatedArticleSlugs: ["dane-pacjentow-a-automatyzacja", "jak-odciazyc-rejestracje-w-przychodni", "cyfryzacja-danych-w-firmie"],
};
