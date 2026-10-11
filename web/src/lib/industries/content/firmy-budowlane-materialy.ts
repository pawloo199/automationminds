import type { IndustryPageContent } from "../types";

export const firmyBudowlaneMaterialy: IndustryPageContent = {
  industrySlug: "firmy-budowlane",
  subSlug: "zamowienia-materialow",
  name: "Zamówienia materiałów",
  excerpt: "Zapotrzebowanie z budowy przez formularz, akceptacja, zapytania do dostawców, zamówienia, potwierdzenia dostaw i koszt materiałów przypisany do budowy.",
  metaTitle: "Zamówienia materiałów budowlanych: rejestr i akceptacja",
  metaDescription:
    "Automatyzujemy zamówienia materiałów na budowy: zapotrzebowanie z telefonu, akceptacja, zapytania do dostawców, zamówienia, dostawy i koszty budowy.",
  primaryKeyword: "zamówienia materiałów budowlanych",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy budowlane: zamówienia materiałów",
    title: "Materiały na budowie na czas, a ich koszt znany od razu",
    lead: "Kierownik dzwoni do biura, że kończy się beton, biuro dzwoni do dostawcy, dostawca potwierdza mailem, a faktura przychodzi po miesiącu. W międzyczasie nikt nie wie, ile materiałów zamówiono na budowę i za ile. Automatyzujemy zamówienia: kierownik zgłasza zapotrzebowanie na telefonie, biuro akceptuje i zamawia, dostawa jest potwierdzana na budowie, a koszt trafia do budżetu budowy.",
    bullets: [
      "Zapotrzebowanie z budowy przez formularz",
      "Akceptacja i zamówienie w jednym rejestrze",
      "Dostawa potwierdzona na budowie, koszt w budżecie",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy budowlane i wykonawcze z własnym zaopatrzeniem" },
    { label: "Co automatyzujemy", value: "Zapotrzebowania, akceptacje, zapytania, zamówienia, dostawy, koszty" },
    { label: "Narzędzia", value: "Formularz, rejestr, poczta, program do faktur, n8n" },
    { label: "Zasada", value: "Zamówienia akceptuje osoba upoważniona" },
  ],
  symptoms: {
    title: "Kiedy zamówienia warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, materiały kosztują więcej, niż powinny.",
    items: [
      "Zapotrzebowania przychodzą telefonicznie i przez komunikatory.",
      "Nie ma wspólnego rejestru zamówień.",
      "Ceny porównuje się rzadko, bo zapytania zabierają czas.",
      "Dostawa nie jest potwierdzana, a faktura przychodzi po miesiącu.",
      "Koszt materiałów na budowie jest znany dopiero po fakturach.",
      "Materiały zamawia się w pośpiechu, bo zapotrzebowanie przyszło za późno.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja zamówień",
    paragraphs: [
      "Kierownik zgłasza zapotrzebowanie przez formularz na telefonie: materiał, ilość, termin, miejsce dostawy. Zapotrzebowanie trafia do rejestru z budową i pozycją budżetu. Powyżej ustalonej kwoty wymaga akceptacji.",
      "Biuro wysyła zapytania do kilku dostawców z jednego miejsca albo zamawia u stałego dostawcy według ustalonych zasad. Odpowiedzi trafiają do rejestru, a AI pomaga zestawić ceny i terminy z różnych formatów. Po wyborze zamówienie wychodzi do dostawcy, a kierownik dostaje informację o terminie dostawy.",
      "Na budowie kierownik potwierdza dostawę na telefonie, z dokumentem WZ i zdjęciem. Gdy przychodzi faktura, system łączy ją z zamówieniem i dostawą, a koszt trafia do budżetu budowy. Rozbieżności w ilościach lub cenach są widoczne od razu.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zamówień",
    lead: "Zakres dopasowujemy do sposobu zaopatrzenia firmy.",
    items: [
      { title: "Formularz zapotrzebowania", body: "Materiał, ilość, termin i miejsce dostawy." },
      { title: "Akceptacje", body: "Według kwot i budów." },
      { title: "Zapytania do dostawców", body: "Z jednego miejsca, z terminem odpowiedzi." },
      { title: "Zestawienie ofert", body: "Ceny i terminy w jednym porównaniu." },
      { title: "Zamówienie", body: "Do dostawcy, z potwierdzeniem." },
      { title: "Potwierdzenie dostawy", body: "Na budowie, z WZ i zdjęciem." },
      { title: "Faktura", body: "Połączona z zamówieniem i dostawą." },
      { title: "Koszty budowy", body: "Materiały w budżecie na bieżąco." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zapotrzebowania do kosztu w budżecie.",
    items: [
      {
        title: "Zapotrzebowanie",
        trigger: "Kierownik zgłasza potrzebę stali zbrojeniowej",
        steps: ["Rejestr z budową i pozycją budżetu", "Zapytania do trzech dostawców", "Zestawienie ofert dla biura"],
        result: "Zamówienie po porównaniu cen, a nie pod presją czasu.",
      },
      {
        title: "Dostawa i faktura",
        trigger: "Dostawa na budowę",
        steps: ["Potwierdzenie z WZ i zdjęciem", "Faktura połączona z zamówieniem", "Koszt w budżecie, rozbieżności do wyjaśnienia"],
        result: "Koszt materiałów znany od razu, a rozbieżności nie umykają.",
      },
    ],
  },
  example: {
    title: "Zamówienia przed i po automatyzacji",
    lead: "Przykład firmy prowadzącej kilka budów jednocześnie.",
    rows: [
      { label: "Zapotrzebowania", before: "Telefony.", after: "Formularz i rejestr." },
      { label: "Ceny", before: "Rzadko porównywane.", after: "Zestawienie ofert." },
      { label: "Dostawy", before: "Bez potwierdzenia.", after: "WZ i zdjęcie z budowy." },
      { label: "Koszty", before: "Po fakturach.", after: "Na bieżąco." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od formularza zapotrzebowań i rejestru.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś zamawiacie materiały i z kim współpracujecie.", fromYou: "Rozmowa z kierownikiem i zaopatrzeniem." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy formularz, zasady akceptacji i rejestr.", fromYou: "Akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Uruchamiamy rejestr na jednej budowie.", fromYou: "Kierownik i zaopatrzenie w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy kolejne budowy i dostawców.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od zapotrzebowań i rejestru.",
    items: [
      { name: "Rejestr zamówień", description: "Dla firm, które chcą wiedzieć, co zamówiono.", includes: ["Formularz zapotrzebowania", "Akceptacje", "Rejestr zamówień", "Informacje dla kierownika"] },
      { name: "Zamówienia i dostawy", description: "Dla firm, które chcą kontrolować dostawy.", includes: ["Wszystko z wariantu Rejestr zamówień", "Potwierdzenie dostawy", "Faktura z zamówieniem", "Rozbieżności"] },
      { name: "Zakupy i koszty", description: "Dla firm, które chcą obniżyć koszty materiałów.", includes: ["Wszystko z wariantu Zamówienia i dostawy", "Zapytania do dostawców", "Zestawienie ofert", "Koszty w budżecie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba budów i zamówień,",
      "liczba dostawców,",
      "zasady akceptacji,",
      "integracja z programem do faktur,",
      "zakres raportów kosztów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Zamówienie bez akceptacji.", mitigation: "Zasady akceptacji według kwot i budów." },
      { risk: "Błędne zestawienie ofert.", mitigation: "Zestawienie sprawdza osoba z zaopatrzenia, a oryginały są przy nim." },
      { risk: "Dostawa niezgodna z zamówieniem.", mitigation: "Potwierdzenie na budowie i porównanie z fakturą." },
      { risk: "Kierownik zgłosi za późno.", mitigation: "Przypomnienia o planowanych etapach i materiałach." },
    ],
  },
  faq: [
    { question: "Czy kierownik musi mieć aplikację?", answer: "Nie. Formularz działa w przeglądarce telefonu." },
    { question: "Czy obsłużycie stałych dostawców z cennikami?", answer: "Tak. Zamówienia u stałych dostawców mogą wychodzić według cennika bez zapytań." },
    { question: "Czy faktura połączy się z zamówieniem automatycznie?", answer: "Tak, w większości przypadków. Niepewne połączenia trafiają do sprawdzenia." },
    { question: "Czy zobaczymy koszt materiałów na budowie?", answer: "Tak, na bieżąco, według budów i pozycji budżetu." },
    { question: "Czy działa to z magazynem firmy?", answer: "Tak, jeśli macie magazyn, zapotrzebowanie może być najpierw sprawdzane względem stanów." },
  ],
  relatedServiceSlugs: ["integracje-systemow", "automatyzacja-dla-ksiegowosci", "automatyzacja-raportow"],
  relatedProcessSlugs: ["przyjmowanie-zamowien", "obieg-faktur-kosztowych"],
  relatedToolSlugs: ["airtable", "n8n", "ksef"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
