import type { IndustryPageContent } from "../types";

export const nieruchomosciRozliczeniaNajmu: IndustryPageContent = {
  industrySlug: "nieruchomosci",
  subSlug: "rozliczenia-najmu",
  name: "Rozliczenia najmu i raporty dla właścicieli",
  excerpt: "Czynsze, media i kaucje pod kontrolą, przypomnienia o płatnościach, rozliczenia z właścicielami i regularne raporty bez arkuszy.",
  metaTitle: "Rozliczenia najmu i raporty dla właścicieli: automatyzacja",
  metaDescription:
    "Automatyzujemy rozliczenia najmu: czynsze i media, przypomnienia o płatnościach, kaucje, rozliczenia z właścicielami, prowizje i raporty miesięczne.",
  primaryKeyword: "rozliczenia najmu",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Nieruchomości: rozliczenia najmu",
    title: "Rozliczenia najmu i raporty dla właścicieli bez arkuszy",
    lead: "Zarządzanie najmem to co miesiąc dziesiątki wpłat, zaliczek na media, kosztów napraw i rozliczeń z właścicielami. W wielu firmach prowadzi się to w arkuszach, a raport dla właściciela składa się ręcznie. Automatyzujemy rozliczenia: wpłaty są dopasowywane automatycznie, najemcy dostają przypomnienia, a właściciele rozliczenie i raport na czas.",
    bullets: [
      "Wpłaty czynszów dopasowane automatycznie",
      "Przypomnienia o płatnościach dla najemców",
      "Rozliczenia i raporty dla właścicieli",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy zarządzające najmem krótkim i długim, zarządcy wielu lokali" },
    { label: "Co automatyzujemy", value: "Wpłaty, przypomnienia, media, kaucje, rozliczenia, prowizje, raporty" },
    { label: "Narzędzia", value: "Bank, baza lokali, program do faktur, KSeF, n8n" },
    { label: "Zasada", value: "Rozliczenie z właścicielem akceptuje zarządca przed przelewem" },
  ],
  symptoms: {
    title: "Kiedy rozliczenia warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, koniec miesiąca zabiera zarządcom kilka dni.",
    items: [
      "Wpłaty czynszów dopasowuje się do lokali ręcznie, z wyciągu.",
      "Przypomnienia o zaległościach wysyła się nieregularnie.",
      "Rozliczenie mediów z najemcami to osobny arkusz dla każdego lokalu.",
      "Rozliczenie z właścicielem składa się z kilku źródeł danych.",
      "Kaucje i ich zwroty trudno śledzić.",
      "Faktury za usługi zarządzania wystawia się ręcznie.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja rozliczeń",
    paragraphs: [
      "Podstawą jest baza lokali: najemcy, czynsze, zaliczki, kaucje, właściciele i ich warunki współpracy. Wpłaty z banku są codziennie dopasowywane do lokali po tytule przelewu i kwocie, a wpłaty niejednoznaczne trafiają do sprawdzenia.",
      "Najemcy dostają przypomnienie przed terminem płatności, a po terminie kolejne, według ustalonych zasad. Zarządca widzi zaległości na bieżąco. Rozliczenie mediów powstaje na podstawie odczytów liczników i faktur od dostawców.",
      "Na koniec miesiąca system przygotowuje rozliczenie dla każdego właściciela: wpływy, koszty napraw i usług, prowizję firmy i kwotę do przelewu. Zarządca akceptuje rozliczenie, a właściciel dostaje raport i przelew. Faktury za usługi zarządzania powstają w programie do faktur i trafiają do KSeF.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja rozliczeń",
    lead: "Zakres dopasowujemy do modeli najmu i umów z właścicielami.",
    items: [
      { title: "Baza lokali", body: "Najemcy, czynsze, zaliczki, kaucje i warunki właścicieli." },
      { title: "Dopasowanie wpłat", body: "Wpłaty z banku przypisane do lokali codziennie." },
      { title: "Przypomnienia", body: "Przed terminem i po nim, według zasad firmy." },
      { title: "Media", body: "Rozliczenie na podstawie odczytów i faktur dostawców." },
      { title: "Kaucje", body: "Wpłaty, zwroty i potrącenia z historią." },
      { title: "Rozliczenia z właścicielami", body: "Wpływy, koszty, prowizja i kwota do przelewu." },
      { title: "Faktury i KSeF", body: "Faktury za usługi zarządzania w programie do faktur." },
      { title: "Raporty", body: "Raport dla właściciela i zestawienie dla firmy." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od wpłaty najemcy do przelewu dla właściciela.",
    items: [
      {
        title: "Wpłata czynszu",
        trigger: "Nowa wpłata na rachunku",
        steps: ["Dopasowanie do lokalu i okresu", "Aktualizacja salda najemcy", "Przypomnienie, jeśli wpłata jest niepełna"],
        result: "Zarządca widzi saldo każdego najemcy bez sprawdzania wyciągów.",
      },
      {
        title: "Rozliczenie właściciela",
        trigger: "Koniec miesiąca",
        steps: ["Zestawienie wpływów i kosztów lokalu", "Prowizja i kwota do przelewu, akceptacja zarządcy", "Raport, faktura i przelew"],
        result: "Właściciele dostają rozliczenia na czas.",
      },
    ],
  },
  example: {
    title: "Rozliczenia przed i po automatyzacji",
    lead: "Przykład firmy zarządzającej kilkudziesięcioma mieszkaniami kilkunastu właścicieli.",
    rows: [
      { label: "Wpłaty", before: "Dopasowywane ręcznie z wyciągu.", after: "Dopasowane codziennie." },
      { label: "Zaległości", before: "Zauważane na koniec miesiąca.", after: "Widoczne na bieżąco, z przypomnieniami." },
      { label: "Właściciele", before: "Rozliczenia składane ręcznie.", after: "Rozliczenie i raport po akceptacji." },
      { label: "Kaucje", before: "Trudne do śledzenia.", after: "Historia przy lokalu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Rozliczenia testujemy na jednym miesiącu równolegle z obecnym sposobem.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy umowy z właścicielami, sposób rozliczania i dane o lokalach.", fromYou: "Wzory rozliczeń i rozmowa z zarządcą." },
      { title: "Baza i zasady", duration: "1–2 tygodnie", body: "Porządkujemy bazę lokali i ustalamy zasady rozliczeń i przypomnień.", fromYou: "Weryfikacja danych lokali." },
      { title: "Budowa i test", duration: "zwykle 3–4 tygodnie", body: "Budujemy przepływy i porównujemy wyniki z ręcznym rozliczeniem.", fromYou: "Osoba porównująca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Przełączamy rozliczenia i pilnujemy działania.", fromYou: "Informacja o nowych lokalach i właścicielach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od wpłat i przypomnień.",
    items: [
      { name: "Wpłaty i przypomnienia", description: "Dla firm, które chcą panować nad zaległościami.", includes: ["Baza lokali", "Dopasowanie wpłat", "Przypomnienia", "Zestawienie zaległości"] },
      { name: "Rozliczenia z właścicielami", description: "Dla firm, które chcą szybciej rozliczać właścicieli.", includes: ["Wszystko z wariantu Wpłaty i przypomnienia", "Rozliczenia z właścicielami", "Faktury i KSeF", "Raporty dla właścicieli"] },
      { name: "Pełne rozliczenia", description: "Dla firm z mediami i kaucjami po swojej stronie.", includes: ["Wszystko z wariantu Rozliczenia z właścicielami", "Media", "Kaucje", "Raport dla zarządu firmy"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba lokali i właścicieli,",
      "modele umów i prowizji,",
      "integracja z bankiem i programem do faktur,",
      "zakres rozliczeń mediów i kaucji,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Wpłata zostanie przypisana do złego lokalu.", mitigation: "Niejednoznaczne wpłaty trafiają do sprawdzenia, a najemcy dostają stały tytuł przelewu." },
      { risk: "Przypomnienie trafi do najemcy, który zapłacił.", mitigation: "Przed wysyłką system sprawdza wpłaty z ostatnich dni." },
      { risk: "Błędne rozliczenie z właścicielem.", mitigation: "Zarządca akceptuje rozliczenie przed przelewem." },
      { risk: "Przelewy wychodzące bez kontroli.", mitigation: "System przygotowuje paczkę przelewów, a zatwierdza je osoba upoważniona w banku." },
    ],
  },
  faq: [
    { question: "Czy to działa dla najmu krótkoterminowego?", answer: "Tak, choć rozliczenia wyglądają inaczej, bo dochodzą rezerwacje i platformy. Zakres ustalamy po rozmowie." },
    { question: "Skąd system wie o wpłatach?", answer: "Z banku, jeśli udostępnia dane o wpłatach, albo z importu wyciągów." },
    { question: "Czy właściciel może mieć dostęp do raportów online?", answer: "Tak, przez prosty raport lub portal z danymi tylko jego lokali." },
    { question: "Czy faktury za zarządzanie trafią do KSeF?", answer: "Tak. Faktura powstaje w waszym programie do faktur, który wysyła ją do KSeF, albo przez bezpośrednie połączenie." },
    { question: "Kto zatwierdza przelewy do właścicieli?", answer: "Osoba upoważniona w banku. System przygotowuje rozliczenie i paczkę przelewów." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-raportow", "projektowanie-baz-danych"],
  relatedProcessSlugs: ["przypomnienia-o-platnosciach", "raporty-finansowe"],
  relatedToolSlugs: ["airtable", "ksef", "n8n"],
  relatedArticleSlugs: ["integracja-crm-z-fakturowaniem", "airtable-czy-excel", "jak-mierzyc-roi-automatyzacji"],
};
