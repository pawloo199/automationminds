import type { IndustryPageContent } from "../types";

export const hurtownieZakupyUDostawcow: IndustryPageContent = {
  industrySlug: "hurtownie-i-dystrybucja",
  subSlug: "zakupy-u-dostawcow",
  name: "Zakupy u dostawców",
  excerpt: "Propozycje zamówień do dostawców, potwierdzenia i terminy dostaw pilnowane automatycznie, faktury zakupowe porównane z zamówieniem.",
  metaTitle: "Zakupy w hurtowni: zamówienia do dostawców i terminy",
  metaDescription:
    "Automatyzujemy zakupy w hurtowni: propozycje zamówień do dostawców, potwierdzenia i terminy dostaw, informacje o opóźnieniach i kontrola faktur zakupowych.",
  primaryKeyword: "zamówienia do dostawców w hurtowni",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Hurtownie: zakupy u dostawców",
    title: "Zakupy u dostawców: towar na czas, terminy pod kontrolą",
    lead: "Dział zakupów w hurtowni pracuje na dziesiątkach dostawców i tysiącach indeksów. Zamówienia przygotowuje się z raportów stanów, potwierdzenia przychodzą mailem w różnych formatach, a terminy dostaw pilnuje się w arkuszu. Gdy dostawca się spóźnia, handlowcy dowiadują się od klientów. Automatyzujemy tę pracę: propozycje zamówień powstają z danych, potwierdzenia są odczytywane, terminy pilnowane, a opóźnienia zgłaszane od razu.",
    bullets: [
      "Propozycje zamówień na podstawie stanów i sprzedaży",
      "Potwierdzenia dostawców odczytane i porównane",
      "Opóźnienia widoczne dla zakupów i handlowców",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Hurtownie i dystrybutorzy z wieloma dostawcami i szerokim asortymentem" },
    { label: "Co automatyzujemy", value: "Propozycje zamówień, wysyłkę, potwierdzenia, terminy, faktury zakupowe" },
    { label: "Narzędzia", value: "ERP, poczta, model AI, KSeF, n8n" },
    { label: "Zasada", value: "Zamówienie do dostawcy zatwierdza osoba z zakupów" },
  ],
  symptoms: {
    title: "Kiedy zakupy warto zautomatyzować",
    lead: "Jeśli te sytuacje są codziennością, zakupy działają reaktywnie, a klienci odczuwają braki.",
    items: [
      "Zamówienia do dostawców przygotowuje się ręcznie z raportów stanów.",
      "Potwierdzenia od dostawców są w mailach, a różnice w ilościach i terminach wychodzą przy dostawie.",
      "Terminy dostaw pilnuje się w arkuszu lub wcale.",
      "Handlowcy nie wiedzą, kiedy dojedzie brakujący towar.",
      "Faktury zakupowe różnią się od zamówień i nikt tego nie zauważa.",
      "Braki towaru zdarzają się mimo nadmiaru innych produktów.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja zakupów",
    paragraphs: [
      "Na podstawie stanów, sprzedaży, zamówień klientów w drodze i minimów magazynowych system przygotowuje propozycje zamówień do dostawców, z uwzględnieniem minimów logistycznych i terminów dostaw. Osoba z zakupów przegląda propozycję, koryguje ją i zatwierdza. Zamówienie trafia do dostawcy w jego formacie.",
      "Potwierdzenia od dostawców są odczytywane, także z PDF z pomocą AI, i porównywane z zamówieniem: ilości, ceny, terminy. Różnice trafiają do osoby z zakupów, a potwierdzone terminy do ERP, gdzie widzą je handlowcy. Gdy termin się zbliża, a dostawy nie ma, system przypomina dostawcy i informuje zakupy i handlowców, których klienci czekają na towar.",
      "Faktury zakupowe, z KSeF i spoza niego, są porównywane z zamówieniem i przyjęciem. Rozbieżności w cenach i ilościach trafiają do wyjaśnienia przed płatnością.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zakupów",
    lead: "Zakres dopasowujemy do dostawców i ERP firmy.",
    items: [
      { title: "Propozycje zamówień", body: "Na podstawie stanów, sprzedaży, minimów i terminów dostaw." },
      { title: "Wysyłka zamówień", body: "Zamówienie do dostawcy w jego formacie, po akceptacji." },
      { title: "Odczyt potwierdzeń", body: "Potwierdzenia z maili i PDF odczytane i porównane z zamówieniem." },
      { title: "Terminy dostaw", body: "Potwierdzone terminy w ERP, widoczne dla handlowców." },
      { title: "Opóźnienia", body: "Przypomnienia dla dostawcy i informacja dla zakupów i handlowców." },
      { title: "Faktury zakupowe", body: "Porównanie z zamówieniem i przyjęciem, z KSeF i spoza niego." },
      { title: "Cenniki dostawców", body: "Zmiany cen odczytane i przekazane do decyzji." },
      { title: "Ocena dostawców", body: "Terminowość, kompletność i zgodność cen w raporcie." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od propozycji zamówienia do zapłaconej faktury.",
    items: [
      {
        title: "Zamówienie do dostawcy",
        trigger: "Stan towaru spada poniżej minimum",
        steps: ["Propozycja zamówienia z uwzględnieniem sprzedaży i terminów", "Akceptacja przez osobę z zakupów", "Wysyłka i oczekiwanie na potwierdzenie"],
        result: "Zamówienia powstają na czas, a nie wtedy, gdy ktoś zauważy brak.",
      },
      {
        title: "Potwierdzenie z różnicą",
        trigger: "Dostawca potwierdza mniejszą ilość lub późniejszy termin",
        steps: ["Odczyt potwierdzenia i porównanie z zamówieniem", "Informacja dla zakupów i handlowców", "Aktualizacja terminu w ERP"],
        result: "Handlowcy wiedzą o opóźnieniu, zanim klient zapyta.",
      },
    ],
  },
  example: {
    title: "Zakupy przed i po automatyzacji",
    lead: "Przykład hurtowni z kilkudziesięcioma dostawcami.",
    rows: [
      { label: "Zamówienia", before: "Przygotowywane z raportów stanów.", after: "Propozycje do akceptacji." },
      { label: "Potwierdzenia", before: "W mailach, bez porównania.", after: "Odczytane i porównane z zamówieniem." },
      { label: "Terminy", before: "W arkuszu.", after: "W ERP, z przypomnieniami." },
      { label: "Faktury", before: "Różnice wychodzą przypadkiem.", after: "Porównane przed płatnością." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od kilku największych dostawców, a potem dodajemy kolejnych.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak powstają zamówienia, jak przychodzą potwierdzenia i jakie dane są w ERP.", fromYou: "Rozmowa z działem zakupów i przykładowe potwierdzenia." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy zasady propozycji zamówień, porównań i przypomnień.", fromYou: "Akceptacja zasad i parametry minimów." },
      { title: "Budowa i test", duration: "zwykle 3–5 tygodni", body: "Budujemy przepływy i testujemy je na wybranych dostawcach.", fromYou: "Osoba z zakupów oceniająca propozycje." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy kolejnych dostawców i dopracowujemy propozycje.", fromYou: "Uwagi działu zakupów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od potwierdzeń i terminów, a propozycje zamówień dodać później.",
    items: [
      { name: "Potwierdzenia i terminy", description: "Dla firm, które chcą panować nad dostawami.", includes: ["Odczyt potwierdzeń", "Porównanie z zamówieniem", "Terminy w ERP", "Informacje o opóźnieniach"] },
      { name: "Zakupy i faktury", description: "Dla firm, które chcą kontrolować koszty zakupu.", includes: ["Wszystko z wariantu Potwierdzenia i terminy", "Porównanie faktur", "Cenniki dostawców", "Ocena dostawców"] },
      { name: "Pełne zakupy", description: "Dla firm, które chcą ograniczyć braki i nadmiary.", includes: ["Wszystko z wariantu Zakupy i faktury", "Propozycje zamówień", "Wysyłka zamówień", "Raport braków i nadmiarów"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba dostawców i formatów potwierdzeń,",
      "jakość danych o stanach i sprzedaży w ERP,",
      "złożoność zasad propozycji zamówień,",
      "integracja z KSeF i obiegiem faktur,",
      "koszt korzystania z modeli AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Propozycja zamówienia nie uwzględni sezonu lub promocji.", mitigation: "Propozycja jest punktem wyjścia, a osoba z zakupów koryguje ją przed zatwierdzeniem." },
      { risk: "Błędny odczyt potwierdzenia.", mitigation: "Różnice trafiają do sprawdzenia, a terminy w ERP aktualizują się po kontroli." },
      { risk: "Za dużo przypomnień do dostawców.", mitigation: "Częstotliwość i treść ustalacie sami, z rozróżnieniem dostawców." },
      { risk: "Słabe dane o minimach magazynowych.", mitigation: "Na początku propozycje obejmują tylko indeksy z uporządkowanymi parametrami." },
    ],
  },
  faq: [
    { question: "Czy system sam zamówi towar?", answer: "Nie. Przygotowuje propozycję, którą osoba z zakupów sprawdza i zatwierdza." },
    { question: "Czy AI odczyta potwierdzenia w PDF?", answer: "Tak, także w różnych układach. Odczytane dane są porównywane z zamówieniem, a różnice trafiają do sprawdzenia." },
    { question: "Czy handlowcy zobaczą terminy dostaw?", answer: "Tak. Potwierdzone terminy trafiają do ERP, a handlowcy mogą je sprawdzić na telefonie." },
    { question: "Czy faktury zakupowe z KSeF zostaną porównane z zamówieniem?", answer: "Tak. Faktury z KSeF i spoza niego są porównywane z zamówieniem i przyjęciem." },
    { question: "Czy nasz ERP nie robi tego sam?", answer: "Część ERP ma moduły zakupów. Sprawdzamy, co robi wasz, i automatyzujemy brakujące elementy, np. odczyt potwierdzeń czy informacje dla handlowców." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych"],
  relatedToolSlugs: ["n8n", "ksef", "microsoft-365"],
  relatedArticleSlugs: ["porzadek-w-danych-przed-ai-i-automatyzacja", "integracja-crm-z-fakturowaniem", "gotowa-automatyzacja-czy-budowana-od-zera"],
};
