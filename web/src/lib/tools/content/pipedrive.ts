import type { ToolContent } from "../types";

export const pipedrive: ToolContent = {
  slug: "pipedrive",
  metaTitle: "Wdrożenie Pipedrive i automatyzacja sprzedaży | Automation Minds",
  metaDescription:
    "Wdrażamy Pipedrive i łączymy go z fakturowaniem, formularzami i pocztą. Lejek, który handlowcy używają, i dane bez przepisywania. Konsultacja 30 min.",
  primaryKeyword: "wdrożenie Pipedrive",
  updatedAt: "2026-10-01",
  hero: {
    eyebrow: "CRM i sprzedaż",
    title: "Wdrożenie Pipedrive: lejek sprzedaży, który działa sam",
    lead: "Pipedrive to CRM, który handlowcy lubią, bo jest prosty. Konfigurujemy go pod wasz proces i łączymy z formularzami, pocztą, fakturowaniem i KSeF, żeby dane trafiały tam same, a zespół zajmował się sprzedażą.",
    bullets: [
      "Lejek i etapy dopasowane do waszej sprzedaży",
      "Automatyczne leady, zadania i przypomnienia",
      "Integracja z fakturowaniem i KSeF",
    ],
  },
  intro: {
    title: "Czym jest Pipedrive i dla kogo",
    paragraphs: [
      "Pipedrive to CRM zbudowany wokół lejka sprzedaży. Szanse przesuwa się między etapami, a system pilnuje, żeby przy każdej było zaplanowane kolejne działanie. Dzięki temu handlowiec wie, czym się zająć, a szef widzi, ile jest w lejku i co utknęło.",
      "Pipedrive jest popularny w małych i średnich firmach B2B, bo szybko się go wdraża i nie przytłacza funkcjami. Ma wbudowane proste automatyzacje, integracje z pocztą i kalendarzem oraz otwarte API, przez które łączymy go z resztą systemów.",
      "Najwięcej korzyści daje połączenie Pipedrive z tym, co dzieje się przed i po sprzedaży: z formularzami, z których przychodzą leady, oraz z fakturowaniem i realizacją po wygranej.",
    ],
  },
  useCases: {
    title: "Co robimy w Pipedrive",
    lead: "Konfiguracja, porządki w danych i integracje z systemami wokół sprzedaży.",
    items: [
      { title: "Konfiguracja lejka", body: "Etapy, pola, filtry i widoki, które odpowiadają temu, jak faktycznie sprzedajecie." },
      { title: "Leady bez przepisywania", body: "Zapytania z formularzy, maili i reklam trafiają do Pipedrive z przypisanym handlowcem." },
      { title: "Faktura po wygranej", body: "Wygrana szansa wystawia fakturę w programie księgowym, a faktura trafia do KSeF." },
      { title: "Raporty sprzedaży", body: "Wartość lejka, konwersje między etapami i wyniki handlowców bez ręcznego liczenia." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w Pipedrive",
    lead: "Proste reguły budujemy we wbudowanych automatyzacjach Pipedrive, a integracje z innymi systemami w Make lub n8n.",
    items: [
      {
        title: "Zapytanie ze strony",
        trigger: "Formularz kontaktowy na stronie",
        steps: ["Sprawdzenie, czy firma jest już w Pipedrive", "Utworzenie szansy na pierwszym etapie", "Zadanie dla handlowca na dziś"],
        result: "Żadne zapytanie nie ginie w skrzynce.",
      },
      {
        title: "Oferta wysłana",
        trigger: "Szansa przechodzi na etap oferty",
        steps: ["Wygenerowanie oferty z szablonu", "Wysłanie do klienta", "Przypomnienie o kontakcie po kilku dniach"],
        result: "Handlowiec nie zapomina o follow-upie.",
      },
      {
        title: "Wygrana do faktury",
        trigger: "Szansa oznaczona jako wygrana",
        steps: ["Wystawienie faktury w programie księgowym", "Wysłanie faktury do KSeF", "Zadanie dla działu realizacji"],
        result: "Faktura i realizacja ruszają od razu, bez przekazywania maili.",
      },
    ],
  },
  fit: {
    title: "Kiedy Pipedrive się sprawdzi, a kiedy wybierzemy coś innego",
    good: [
      "Macie zespół sprzedaży B2B i chcecie widzieć lejek.",
      "Zależy wam na prostocie i szybkim wdrożeniu.",
      "Sprzedaż opiera się na kontakcie handlowca z klientem.",
      "Chcecie połączyć CRM z fakturowaniem bez dużego projektu.",
    ],
    limits: [
      "Marketing ma działać w tym samym systemie co sprzedaż. Wtedy HubSpot daje więcej.",
      "Potrzebujecie rozbudowanej obsługi zgłoszeń klientów w CRM.",
      "Proces jest bardzo nietypowy i nie przypomina lejka sprzedaży.",
    ],
  },
  comparison: {
    title: "Pipedrive czy HubSpot",
    lead: "Pipedrive to wybór dla zespołów, które chcą prostego CRM sprzedażowego. HubSpot dla firm, które chcą połączyć sprzedaż z marketingiem.",
    columns: ["Pipedrive", "HubSpot"],
    rows: [
      { label: "Główna siła", values: ["Prosty lejek sprzedaży", "Marketing, sprzedaż i obsługa w jednym"] },
      { label: "Wdrożenie", values: ["Szybkie", "Dłuższe przy wielu Hubach"] },
      { label: "Marketing", values: ["Podstawowy", "Rozbudowany"] },
      { label: "Koszt na start", values: ["Płatne plany od początku", "Darmowy CRM, płatne Huby"] },
      { label: "Dla kogo", values: ["Małe zespoły sprzedaży B2B", "Firmy z marketingiem i dłuższym cyklem sprzedaży"] },
    ],
    note: "Porównanie jest uproszczone. Pomagamy wybrać CRM na podstawie waszego procesu.",
  },
  example: {
    title: "Sprzedaż przed i po wdrożeniu Pipedrive",
    lead: "Przykład firmy usługowej z kilkoma handlowcami, która prowadziła sprzedaż w arkuszach i mailach.",
    rows: [
      { label: "Zapytania", before: "W skrzynce ogólnej, część bez odpowiedzi.", after: "Każde zapytanie to szansa w Pipedrive z właścicielem." },
      { label: "Follow-up", before: "Zależny od pamięci handlowca.", after: "Pipedrive przypomina o kolejnym kroku przy każdej szansie." },
      { label: "Faktura", before: "Handlowiec prosi księgowość mailem.", after: "Wygrana szansa wystawia fakturę automatycznie." },
      { label: "Wiedza szefa", before: "Raport składany ręcznie na koniec miesiąca.", after: "Aktualny lejek i prognoza w każdej chwili." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym procesie.",
  },
  costs: {
    title: "Ile kosztuje Pipedrive",
    paragraphs: [
      "Pipedrive rozlicza się za użytkownika w kilku planach. Wyższe plany dają więcej automatyzacji, raportów i limitów. Dodatki, np. do ofert czy kampanii mailowych, są płatne osobno.",
      "Wdrożenie podstawowe jest zwykle krótkie. Więcej pracy wymagają integracje z fakturowaniem, KSeF i migracja danych. Wycenę przygotowujemy po konsultacji.",
    ],
  },
  faq: [
    { question: "Czy Pipedrive połączy się z polskim programem do faktur?", answer: "Tak, jeśli program ma API. Wygrana szansa może automatycznie wystawiać fakturę i wysyłać ją do KSeF." },
    { question: "Czy przenosicie dane z arkuszy do Pipedrive?", answer: "Tak. Czyścimy dane, usuwamy duplikaty i importujemy kontakty, firmy oraz otwarte szanse." },
    { question: "Czy handlowcy szybko się nauczą Pipedrive?", answer: "Zwykle tak, bo Pipedrive jest prosty. Po konfiguracji robimy krótkie szkolenie na waszych danych." },
    { question: "Pipedrive czy HubSpot dla małej firmy?", answer: "Jeśli chodzi głównie o sprzedaż, Pipedrive bywa prostszy. Jeśli marketing ma działać w tym samym systemie, lepszy będzie HubSpot." },
    { question: "Czy jesteście partnerem Pipedrive?", answer: "Nie. Jesteśmy niezależnymi specjalistami od automatyzacji i dobieramy CRM do procesu klienta." },
    { question: "Czy Pipedrive ma wbudowane automatyzacje?", answer: "Tak, proste reguły typu zadanie po zmianie etapu. Integracje z innymi systemami budujemy w Make lub n8n." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow", "migracja-danych"],
  relatedToolSlugs: ["hubspot", "make", "ksef", "zapier"],
  relatedArticleSlugs: ["integracja-crm-z-fakturowaniem", "automatyzacja-obslugi-leadow-sprzedazowych", "5-procesow-do-automatyzacji-w-malej-firmie"],
};
