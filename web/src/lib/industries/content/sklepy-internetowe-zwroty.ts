import type { IndustryPageContent } from "../types";

export const sklepyInternetoweZwroty: IndustryPageContent = {
  industrySlug: "sklepy-internetowe",
  subSlug: "zwroty-i-reklamacje",
  name: "Zwroty i reklamacje",
  excerpt: "Formularz zwrotu i reklamacji, sprawdzenie terminu i warunków, instrukcja dla klienta, rejestr zwrotów, przyjęcie towaru, zwrot pieniędzy do akceptacji i korekta.",
  metaTitle: "Zwroty w sklepie internetowym: formularz i rejestr",
  metaDescription:
    "Automatyzujemy zwroty i reklamacje w sklepie: formularz, sprawdzenie warunków, instrukcja, rejestr, przyjęcie towaru, zwrot pieniędzy i korekta.",
  primaryKeyword: "zwroty w sklepie internetowym",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Sklepy internetowe: zwroty i reklamacje",
    title: "Zwroty bez wymiany maili, reklamacje z terminem i statusem",
    lead: "Klient chce zwrócić towar. Pisze maila, sklep odpisuje z instrukcją, klient pyta o adres, potem o termin zwrotu pieniędzy. Paczka przychodzi, magazyn nie wie, do którego zamówienia należy, a księgowość czeka na informację o korekcie. Automatyzujemy zwroty i reklamacje: klient zgłasza je przez formularz, system sprawdza warunki i prowadzi sprawę do zwrotu pieniędzy, a każda reklamacja ma termin odpowiedzi.",
    bullets: [
      "Formularz zwrotu i reklamacji ze sprawdzeniem warunków",
      "Rejestr ze statusami dla klienta i zespołu",
      "Zwrot pieniędzy do akceptacji i korekta",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Sklepy internetowe z dużą liczbą zwrotów lub reklamacji" },
    { label: "Co automatyzujemy", value: "Formularz, warunki, instrukcje, rejestr, przyjęcie, zwrot pieniędzy, korekta" },
    { label: "Narzędzia", value: "Platforma sklepu, formularz, rejestr, program do faktur, KSeF, n8n" },
    { label: "Zasada", value: "Zwrot pieniędzy i decyzję o reklamacji zatwierdza człowiek" },
  ],
  symptoms: {
    title: "Kiedy zwroty warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, zwroty kosztują więcej, niż powinny.",
    items: [
      "Zwroty i reklamacje zgłaszane są mailem, bez wspólnego rejestru.",
      "Każdemu klientowi trzeba osobno wysyłać instrukcję zwrotu.",
      "Magazyn nie wie, do którego zamówienia należy przesyłka zwrotna.",
      "Zwroty pieniędzy są opóźnione, a klienci dopytują.",
      "Terminy odpowiedzi na reklamacje pilnuje się z pamięci.",
      "Nie wiadomo, które produkty są zwracane najczęściej i dlaczego.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja zwrotów",
    paragraphs: [
      "Klient zgłasza zwrot lub reklamację przez formularz: numer zamówienia, produkty, powód, zdjęcia przy reklamacji. System sprawdza termin i warunki zwrotu, a klient dostaje instrukcję, adres i, jeśli sklep to oferuje, etykietę zwrotną.",
      "Zgłoszenie trafia do rejestru ze statusem. Gdy przesyłka dotrze do magazynu, pracownik skanuje ją lub wybiera zgłoszenie, sprawdza stan towaru i potwierdza przyjęcie. Zwrot pieniędzy trafia do akceptacji, a po zatwierdzeniu powstaje korekta w programie do faktur.",
      "Reklamacje mają termin odpowiedzi wynikający z przepisów i regulaminu, a system przypomina o nim zespołowi. AI może przypisać kategorię i streścić zgłoszenie. Raport pokazuje produkty zwracane najczęściej i powody zwrotów, co pomaga poprawiać opisy i dobór produktów.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zwrotów",
    lead: "Zakres dopasowujemy do regulaminu sklepu i sposobu pracy magazynu.",
    items: [
      { title: "Formularz", body: "Zamówienie, produkty, powód i zdjęcia." },
      { title: "Sprawdzenie warunków", body: "Termin i warunki zwrotu z regulaminu." },
      { title: "Instrukcja dla klienta", body: "Adres, sposób wysyłki, etykieta zwrotna." },
      { title: "Rejestr", body: "Statusy dla zespołu i informacje dla klienta." },
      { title: "Przyjęcie w magazynie", body: "Potwierdzenie i ocena stanu towaru." },
      { title: "Zwrot pieniędzy", body: "Do akceptacji, z informacją dla klienta." },
      { title: "Korekta i KSeF", body: "Dokument korygujący w programie do faktur." },
      { title: "Raport zwrotów", body: "Produkty i powody zwrotów." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zgłoszenia do zwrotu pieniędzy.",
    items: [
      {
        title: "Zwrot w terminie",
        trigger: "Klient zgłasza zwrot przez formularz",
        steps: ["Sprawdzenie terminu i warunków", "Instrukcja i etykieta dla klienta", "Po przyjęciu zwrot pieniędzy do akceptacji i korekta"],
        result: "Klient dostaje pieniądze szybciej, a zespół nie wymienia maili.",
      },
      {
        title: "Reklamacja",
        trigger: "Klient zgłasza wadę produktu ze zdjęciem",
        steps: ["Kategoria i streszczenie zgłoszenia", "Termin odpowiedzi w kalendarzu zespołu", "Decyzja zespołu i informacja dla klienta"],
        result: "Każda reklamacja ma termin i odpowiedź na czas.",
      },
    ],
  },
  example: {
    title: "Zwroty przed i po automatyzacji",
    lead: "Przykład sklepu odzieżowego z dużą liczbą zwrotów.",
    rows: [
      { label: "Zgłoszenia", before: "Maile.", after: "Formularz i rejestr." },
      { label: "Instrukcje", before: "Wysyłane ręcznie.", after: "Automatycznie po zgłoszeniu." },
      { label: "Magazyn", before: "Szuka zamówienia.", after: "Wybiera zgłoszenie." },
      { label: "Zwrot pieniędzy", before: "Z opóźnieniem.", after: "Do akceptacji po przyjęciu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym sklepie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od formularza i rejestru.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy regulamin, obecny proces i dane o zwrotach.", fromYou: "Regulamin i rozmowa z obsługą i magazynem." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy formularz, statusy, treści i zasady akceptacji.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy przepływ i testujemy go na nowych zwrotach.", fromYou: "Obsługa i magazyn w teście." },
      { title: "Start i opieka", duration: "stale", body: "Rozwijamy raporty i dopasowujemy zasady.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od formularza i instrukcji.",
    items: [
      { name: "Formularz zwrotów", description: "Dla sklepów, które chcą skończyć z mailami.", includes: ["Formularz", "Sprawdzenie warunków", "Instrukcja dla klienta", "Rejestr"] },
      { name: "Zwroty z magazynem", description: "Dla sklepów z dużą liczbą zwrotów.", includes: ["Wszystko z wariantu Formularz zwrotów", "Przyjęcie w magazynie", "Zwrot pieniędzy do akceptacji", "Korekta"] },
      { name: "Zwroty i reklamacje", description: "Dla sklepów, które chcą też pilnować reklamacji.", includes: ["Wszystko z wariantu Zwroty z magazynem", "Terminy reklamacji", "Kategoryzacja z AI", "Raport zwrotów"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba zwrotów i reklamacji,",
      "możliwości integracji platformy sklepu,",
      "etykiety zwrotne i przewoźnicy,",
      "integracja z programem do faktur,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Zwrot pieniędzy bez przyjęcia towaru.", mitigation: "Zwrot trafia do akceptacji dopiero po potwierdzeniu w magazynie, chyba że sklep ustali inaczej." },
      { risk: "Błędna ocena warunków zwrotu.", mitigation: "Sprawy nietypowe trafiają do zespołu." },
      { risk: "Przekroczony termin reklamacji.", mitigation: "Przypomnienia przed terminem i lista reklamacji zagrożonych." },
      { risk: "Błędna korekta.", mitigation: "Korekta powstaje z danych zwrotu i jest sprawdzana przed wystawieniem." },
    ],
  },
  faq: [
    { question: "Czy klient może zgłosić zwrot bez konta w sklepie?", answer: "Tak, podając numer zamówienia i adres e-mail." },
    { question: "Czy obsłużycie etykiety zwrotne?", answer: "Tak, jeśli przewoźnik lub narzędzie, z którego korzystacie, na to pozwala." },
    { question: "Czy zwrot pieniędzy będzie automatyczny?", answer: "Zwrot przygotowuje się automatycznie, a zatwierdza go osoba upoważniona." },
    { question: "Czy system pilnuje terminów reklamacji?", answer: "Tak. Każda reklamacja ma termin odpowiedzi i przypomnienia." },
    { question: "Czy zobaczymy, dlaczego klienci zwracają produkty?", answer: "Tak, raport pokazuje produkty i powody zwrotów." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "automatyzacja-dla-ksiegowosci", "automatyzacja-dla-logistyki"],
  relatedProcessSlugs: ["obsluga-reklamacji"],
  relatedToolSlugs: ["n8n", "ksef", "airtable"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
