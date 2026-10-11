import type { IndustryPageContent } from "../types";

export const firmySzkolenioweZapisy: IndustryPageContent = {
  industrySlug: "firmy-szkoleniowe",
  subSlug: "zapisy-i-platnosci",
  name: "Zapisy i płatności",
  excerpt: "Zapisy na szkolenia przez formularz, potwierdzenia, płatności i faktury, lista uczestników i limit miejsc, bez przepisywania zgłoszeń do arkusza.",
  metaTitle: "Zapisy na szkolenia online: płatności i faktury",
  metaDescription:
    "Automatyzujemy zapisy na szkolenia: formularz, potwierdzenie, płatność, faktura i KSeF, lista uczestników, limit miejsc i lista rezerwowa.",
  primaryKeyword: "zapisy na szkolenia online",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy szkoleniowe: zapisy i płatności",
    title: "Zapis, płatność i faktura w jednym przepływie, bez arkusza",
    lead: "Uczestnik wypełnia formularz, ktoś przepisuje zgłoszenie do arkusza, wysyła dane do płatności, sprawdza wpłatę, wystawia fakturę i dopisuje uczestnika do listy. Przy kilkudziesięciu zgłoszeniach na szkolenie to godziny pracy i ryzyko pomyłek. Automatyzujemy zapisy: zgłoszenie, płatność, faktura i lista uczestników działają w jednym przepływie, a zespół zajmuje się wyjątkami.",
    bullets: [
      "Zgłoszenie, potwierdzenie i płatność od razu",
      "Faktura po wpłacie lub dla firmy z terminem",
      "Lista uczestników, limit miejsc i lista rezerwowa",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy szkoleniowe, organizatorzy kursów i konferencji" },
    { label: "Co automatyzujemy", value: "Zapisy, potwierdzenia, płatności, faktury, listy, limity" },
    { label: "Narzędzia", value: "Formularz lub platforma zapisów, płatności, program do faktur, KSeF, n8n" },
    { label: "Zasada", value: "Wyjątki i rabaty zatwierdza zespół" },
  ],
  symptoms: {
    title: "Kiedy zapisy warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, zapisy zabierają więcej czasu niż organizacja szkolenia.",
    items: [
      "Zgłoszenia przepisuje się z formularza do arkusza.",
      "Wpłaty sprawdza się ręcznie na wyciągu.",
      "Faktury wystawia się po kolei, często z opóźnieniem.",
      "Firmy zgłaszają kilku pracowników i proszą o jedną fakturę z terminem.",
      "Zdarzają się zapisy ponad limit miejsc.",
      "Uczestnicy dopytują, czy ich zgłoszenie dotarło.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja zapisów",
    paragraphs: [
      "Uczestnik wypełnia formularz zapisu albo zapisuje się przez platformę, z której korzystacie. Od razu dostaje potwierdzenie z informacją o płatności: link do płatności online albo dane do przelewu. Firma zgłaszająca kilku pracowników może wybrać fakturę z terminem płatności.",
      "Po wpłacie system przypisuje płatność do zgłoszenia, wystawia fakturę w programie do faktur i wysyła ją uczestnikowi lub firmie. Faktura trafia do KSeF. Jeśli wpłata nie wpłynęła w ustalonym czasie, uczestnik dostaje przypomnienie.",
      "Lista uczestników aktualizuje się automatycznie. Gdy miejsca się kończą, kolejne zgłoszenia trafiają na listę rezerwową, a zwolnione miejsca są proponowane osobom z listy. Rabaty, zwolnienia i sprawy nietypowe zatwierdza zespół.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zapisów",
    lead: "Zakres dopasowujemy do rodzaju szkoleń i sposobu sprzedaży.",
    items: [
      { title: "Formularz zapisu", body: "Dane uczestnika i firmy, dane do faktury." },
      { title: "Potwierdzenie", body: "Od razu po zapisie, z informacją o płatności." },
      { title: "Płatności", body: "Online lub przelew, z przypisaniem do zgłoszenia." },
      { title: "Faktury i KSeF", body: "Po wpłacie lub z terminem dla firm." },
      { title: "Zgłoszenia firmowe", body: "Kilku pracowników, jedna faktura." },
      { title: "Limit miejsc", body: "Lista rezerwowa i zwolnione miejsca." },
      { title: "Przypomnienia o płatności", body: "Gdy wpłata nie wpłynęła." },
      { title: "Lista uczestników", body: "Aktualna dla opiekuna i trenera." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zapisu do listy uczestników.",
    items: [
      {
        title: "Zapis indywidualny",
        trigger: "Uczestnik wypełnia formularz",
        steps: ["Potwierdzenie z linkiem do płatności", "Faktura po wpłacie i KSeF", "Uczestnik na liście szkolenia"],
        result: "Zapis bez udziału zespołu.",
      },
      {
        title: "Zapis firmowy",
        trigger: "Firma zgłasza pięć osób",
        steps: ["Potwierdzenie dla osoby zgłaszającej", "Faktura z terminem płatności", "Uczestnicy na liście i przypomnienie o płatności przed terminem"],
        result: "Zgłoszenie firmowe obsłużone jak indywidualne.",
      },
    ],
  },
  example: {
    title: "Zapisy przed i po automatyzacji",
    lead: "Przykład firmy z kilkoma szkoleniami otwartymi w tygodniu.",
    rows: [
      { label: "Zgłoszenia", before: "Przepisywane do arkusza.", after: "Od razu na liście." },
      { label: "Płatności", before: "Sprawdzane na wyciągu.", after: "Przypisane automatycznie." },
      { label: "Faktury", before: "Z opóźnieniem.", after: "Po wpłacie." },
      { label: "Limity", before: "Zapisy ponad limit.", after: "Lista rezerwowa." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od jednego rodzaju szkoleń.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy formularze, płatności i program do faktur.", fromYou: "Dostęp do narzędzi." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy przepływ, treści i zasady faktur.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy przepływ i testujemy na kilku szkoleniach.", fromYou: "Opiekun szkoleń w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkie szkolenia.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od potwierdzeń i listy uczestników.",
    items: [
      { name: "Zapisy", description: "Dla firm, które chcą skończyć z przepisywaniem.", includes: ["Formularz zapisu", "Potwierdzenie", "Lista uczestników", "Limit miejsc"] },
      { name: "Zapisy i płatności", description: "Dla firm z płatnościami online.", includes: ["Wszystko z wariantu Zapisy", "Płatności", "Faktury i KSeF", "Przypomnienia o płatności"] },
      { name: "Zapisy firmowe", description: "Dla firm sprzedających szkolenia firmom.", includes: ["Wszystko z wariantu Zapisy i płatności", "Zgłoszenia firmowe", "Faktury z terminem", "Lista rezerwowa"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba szkoleń i zgłoszeń,",
      "platforma zapisów i operator płatności,",
      "integracja z programem do faktur,",
      "zasady rabatów i zgłoszeń firmowych,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Wpłata przypisana do złego zgłoszenia.", mitigation: "Niejednoznaczne wpłaty trafiają do sprawdzenia." },
      { risk: "Faktura z błędnymi danymi.", mitigation: "Dane do faktury podaje uczestnik, a nietypowe przypadki sprawdza zespół." },
      { risk: "Zapis ponad limit.", mitigation: "Limit jest sprawdzany przy zapisie, a kolejne zgłoszenia trafiają na listę rezerwową." },
      { risk: "Rabat zastosowany bez zgody.", mitigation: "Kody rabatowe według zasad, a rabaty indywidualne zatwierdza zespół." },
    ],
  },
  faq: [
    { question: "Czy możemy zostać przy naszej platformie zapisów?", answer: "Tak, jeśli udostępnia dane. Łączymy ją z płatnościami, fakturami i listami." },
    { question: "Czy faktury trafią do KSeF?", answer: "Tak, przez program do faktur albo bezpośrednie połączenie." },
    { question: "Czy obsłużycie zgłoszenia od firm z kilkoma uczestnikami?", answer: "Tak, z jedną fakturą i terminem płatności." },
    { question: "Co z rezygnacjami i zwrotami?", answer: "Według regulaminu: zwolnione miejsce trafia do listy rezerwowej, a zwrot lub korektę zatwierdza zespół." },
    { question: "Czy uczestnik dostanie przypomnienie o płatności?", answer: "Tak, jeśli wpłata nie wpłynęła w ustalonym czasie." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "automatyzacja-dla-firm-uslugowych"],
  relatedProcessSlugs: ["przypomnienia-o-platnosciach", "przyjmowanie-zamowien"],
  relatedToolSlugs: ["ksef", "n8n", "airtable"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
