import type { IndustryPageContent } from "../types";

export const zakladyProdukcyjneZakupy: IndustryPageContent = {
  industrySlug: "zaklady-produkcyjne",
  subSlug: "zakupy-i-dostawcy",
  name: "Zakupy i dostawcy",
  excerpt: "Zapotrzebowania na materiały, zapytania do dostawców, porównanie ofert, zamówienia, potwierdzenia i terminy dostaw, świadectwa materiałowe i faktury zakupowe.",
  metaTitle: "Zakupy w zakładzie produkcyjnym: dostawcy i terminy dostaw",
  metaDescription:
    "Automatyzujemy zakupy w zakładzie produkcyjnym: zapotrzebowania, zapytania do dostawców, porównanie ofert, potwierdzenia, terminy dostaw i świadectwa.",
  primaryKeyword: "zakupy w zakładzie produkcyjnym",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Zakłady produkcyjne: zakupy i dostawcy",
    title: "Zakupy, które nie zatrzymują produkcji: potwierdzenia i terminy dostaw pod kontrolą",
    lead: "Planista zgłasza brak materiału mailem, zakupowiec rozsyła zapytania do kilku dostawców, porównuje oferty w arkuszu, zamawia i czeka na potwierdzenie, którego często trzeba się domagać telefonem. O opóźnionej dostawie produkcja dowiaduje się, gdy materiału brakuje na hali. Automatyzujemy zakupy: zapotrzebowania trafiają do zakupów same, oferty dostawców są zestawione obok siebie, a potwierdzenia i terminy dostaw są pilnowane przez system.",
    bullets: [
      "Zapotrzebowania i zapytania do dostawców bez maili",
      "Porównanie ofert i zamówienia z szablonu",
      "Potwierdzenia, terminy dostaw i świadectwa pod kontrolą",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Zakłady produkcyjne kupujące materiały i komponenty" },
    { label: "Co automatyzujemy", value: "Zapotrzebowania, zapytania, porównanie ofert, zamówienia, potwierdzenia, dostawy" },
    { label: "Narzędzia", value: "ERP, poczta, rejestr dostawców, model AI, n8n" },
    { label: "Zasada", value: "Wybór dostawcy i zamówienie zatwierdza zakupowiec" },
  ],
  symptoms: {
    title: "Kiedy zakupy warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, zakupy tracą czas na korespondencję, a produkcja na brakach.",
    items: [
      "Zapotrzebowania przychodzą mailem i telefonem.",
      "Oferty dostawców porównuje się ręcznie w arkuszu.",
      "Potwierdzeń zamówień trzeba domagać się telefonicznie.",
      "O opóźnionej dostawie produkcja dowiaduje się za późno.",
      "Świadectwa materiałowe przychodzą osobno i trzeba ich szukać.",
      "Faktury zakupowe trzeba ręcznie porównywać z zamówieniem i dostawą.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja zakupów",
    paragraphs: [
      "Zapotrzebowanie powstaje z ERP, gdy stan materiału spada poniżej minimum, albo z formularza od planisty. Trafia do zakupowca z informacją, na kiedy materiał jest potrzebny. Zapytania do dostawców wychodzą z szablonu do dostawców przypisanych do danego materiału.",
      "Odpowiedzi dostawców trafiają do rejestru, a AI wyodrębnia z nich cenę, termin i warunki. Zakupowiec widzi oferty obok siebie i wybiera dostawcę. Zamówienie powstaje z szablonu, a system czeka na potwierdzenie i przypomina dostawcy, jeśli go nie ma.",
      "Termin dostawy z potwierdzenia trafia do planowania. Gdy dostawa jest zagrożona albo dostawca przesunie termin, planista dostaje informację od razu. Świadectwo materiałowe jest przypisane do dostawy, a faktura zakupowa porównywana z zamówieniem i przyjęciem.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zakupów",
    lead: "Zakres dopasowujemy do liczby dostawców i materiałów.",
    items: [
      { title: "Zapotrzebowania", body: "Z ERP i od planowania, z terminem potrzeby." },
      { title: "Zapytania do dostawców", body: "Z szablonu do przypisanych dostawców." },
      { title: "Porównanie ofert", body: "Cena, termin i warunki obok siebie." },
      { title: "Zamówienia", body: "Z szablonu, po wyborze dostawcy." },
      { title: "Potwierdzenia", body: "Przypomnienia, gdy dostawca nie potwierdził." },
      { title: "Terminy dostaw", body: "Informacja dla planowania o zmianach." },
      { title: "Świadectwa materiałowe", body: "Przypisane do dostawy i partii." },
      { title: "Faktury zakupowe", body: "Porównanie z zamówieniem i przyjęciem." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zapotrzebowania do dostawy.",
    items: [
      {
        title: "Brak materiału",
        trigger: "Stan materiału spada poniżej minimum",
        steps: ["Zapotrzebowanie z terminem potrzeby", "Zapytania do przypisanych dostawców", "Zestawienie ofert dla zakupowca"],
        result: "Zakupowiec wybiera dostawcę zamiast pisać maile.",
      },
      {
        title: "Brak potwierdzenia",
        trigger: "Dostawca nie potwierdził zamówienia",
        steps: ["Przypomnienie do dostawcy", "Informacja dla zakupowca po kolejnym dniu", "Termin z potwierdzenia do planowania"],
        result: "Planowanie zna termin dostawy, a nie zakłada go.",
      },
    ],
  },
  example: {
    title: "Zakupy przed i po automatyzacji",
    lead: "Przykład zakładu kupującego materiały i komponenty od kilkudziesięciu dostawców.",
    rows: [
      { label: "Zapotrzebowania", before: "Mail i telefon.", after: "Z ERP i formularza." },
      { label: "Porównanie ofert", before: "Arkusz.", after: "Zestawienie z odpowiedzi dostawców." },
      { label: "Potwierdzenia", before: "Telefony.", after: "Przypomnienia automatyczne." },
      { label: "Opóźnienia dostaw", before: "Na hali.", after: "Informacja dla planowania od razu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym zakładzie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od zapotrzebowań i potwierdzeń.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś powstają zapotrzebowania i zamówienia, i jakie dane są w ERP.", fromYou: "Dostęp do ERP, przykładowe zamówienia." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy obieg, szablony i zasady przypomnień.", fromYou: "Akceptacja zakupów i planowania." },
      { title: "Budowa i test", duration: "zwykle 3–5 tygodni", body: "Testujemy na wybranych materiałach i dostawcach.", fromYou: "Zakupowiec oceniający działanie." },
      { title: "Start i opieka", duration: "stale", body: "Rozszerzamy na kolejnych dostawców.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od potwierdzeń i terminów dostaw.",
    items: [
      { name: "Potwierdzenia i terminy", description: "Dla zakładów, które chcą skończyć z brakami.", includes: ["Przypomnienia o potwierdzeniach", "Terminy dostaw dla planowania", "Informacja o zmianach"] },
      { name: "Zapytania i oferty", description: "Dla zakładów z wieloma dostawcami.", includes: ["Wszystko z wariantu Potwierdzenia i terminy", "Zapotrzebowania", "Zapytania do dostawców", "Porównanie ofert"] },
      { name: "Pełny obieg zakupów", description: "Dla zakładów, które chcą połączyć zakupy z jakością i księgowością.", includes: ["Wszystko z wariantu Zapytania i oferty", "Świadectwa materiałowe", "Porównanie faktur z zamówieniem", "Raporty dostawców"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba dostawców i materiałów,",
      "możliwości integracji z ERP,",
      "forma odpowiedzi dostawców,",
      "zakres wykorzystania AI,",
      "integracja z księgowością.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "AI źle odczyta cenę lub termin z oferty.", mitigation: "Zestawienie to materiał roboczy, a zakupowiec sprawdza ofertę przed wyborem." },
      { risk: "Dostawcy nie odpowiadają na automatyczne maile.", mitigation: "Przypomnienia wychodzą z adresu zakupowca, a po terminie sprawa wraca do człowieka." },
      { risk: "Minimum stanu w ERP jest nieaktualne.", mitigation: "Zapotrzebowania sprawdza zakupowiec, a minima przeglądamy przy wdrożeniu." },
      { risk: "Zamówienie wyjdzie bez akceptacji.", mitigation: "Każde zamówienie zatwierdza zakupowiec." },
    ],
  },
  faq: [
    { question: "Czy system sam zamówi materiał?", answer: "Przygotuje zamówienie, ale wysyła je zakupowiec po akceptacji." },
    { question: "Czy AI odczyta oferty dostawców?", answer: "Tak, z maili, PDF-ów i arkuszy. Wynik trafia do zestawienia do sprawdzenia." },
    { question: "Czy to zastąpi moduł zakupów w ERP?", answer: "Nie. Uzupełnia ERP o korespondencję z dostawcami, przypomnienia i zestawienia." },
    { question: "Czy świadectwa materiałowe trafią do partii?", answer: "Tak, świadectwo jest przypisane do dostawy, a przez nią do partii w produkcji." },
    { question: "Czy faktury zakupowe trafią do księgowości?", answer: "Tak, po porównaniu z zamówieniem i przyjęciem. Faktury mogą być pobierane z KSeF." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "integracje-systemow", "automatyzacja-w-produkcji"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych", "przyjmowanie-zamowien"],
  relatedToolSlugs: ["n8n", "ksef", "microsoft-365"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
