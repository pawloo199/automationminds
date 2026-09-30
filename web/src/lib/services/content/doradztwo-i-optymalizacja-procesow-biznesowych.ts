import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "doradztwo-i-optymalizacja-procesow-biznesowych",
  metaTitle: "Mapowanie i optymalizacja procesów | Automation Minds",
  metaDescription:
    "Mapujemy procesy w firmie, usuwamy zbędne kroki i projektujemy nową wersję gotową do automatyzacji. Dla małych i średnich firm. Bezpłatna konsultacja.",
  primaryKeyword: "mapowanie procesów biznesowych",
  secondaryKeywords: [
    "optymalizacja procesów",
    "modelowanie procesów",
    "doradztwo procesowe",
    "projektowanie procesów",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Doradztwo i strategia",
    title: "Mapowanie procesów, zanim cokolwiek zautomatyzujesz",
    lead: "Automatyzacja złego procesu tylko przyspiesza bałagan. Najpierw rozrysowujemy, jak praca przebiega dziś, usuwamy zbędne kroki i projektujemy prostszą wersję, którą da się potem zautomatyzować.",
    outcomes: [
      "Czytelna mapa procesu, którą rozumie cały zespół",
      "Mniej kroków, przekazań i miejsc na pomyłkę",
      "Projekt procesu gotowy do automatyzacji",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1920&q=80",
    imageAlt: "Osoba pracuje nad schematem procesu rozpiętym na tablicy",
  },
  problems: {
    title: "Objawy procesu, który trzeba poukładać",
    lead: "Większość procesów w firmie nie została zaprojektowana. Po prostu narosła z czasem, krok po kroku.",
    items: [
      {
        title: "Każdy robi to trochę inaczej",
        body: "Ta sama czynność wygląda inaczej u każdej osoby. Wyniki są nierówne, a nowa osoba uczy się tygodniami.",
      },
      {
        title: "Sprawy utykają między działami",
        body: "Zlecenie przechodzi ze sprzedaży do realizacji i dalej do faktur. Na każdym przekazaniu coś ginie albo czeka.",
      },
      {
        title: "Za dużo akceptacji",
        body: "Proste decyzje wymagają kilku podpisów. Nikt już nie pamięta, dlaczego ten krok w ogóle powstał.",
      },
      {
        title: "Wyjątki są codziennością",
        body: "Proces działa tylko w idealnym przypadku. Każdy wyjątek rozwiązuje się mailem albo telefonem.",
      },
      {
        title: "Nie widać, na jakim etapie jest sprawa",
        body: "Żeby sprawdzić status zamówienia czy wniosku, trzeba zapytać kilka osób.",
      },
      {
        title: "Automatyzacja nie przyniosła efektu",
        body: "Firma próbowała coś zautomatyzować, ale proces był tak zawiły, że automat trzeba było ciągle poprawiać.",
      },
    ],
  },
  scope: {
    title: "Co robimy",
    lead: "Pracujemy na jednym procesie albo na kilku powiązanych. Wynikiem jest nowa wersja procesu, a nie tylko diagram.",
    items: [
      {
        title: "Mapa stanu obecnego",
        body: "Rozrysowujemy proces tak, jak działa dziś: kroki, osoby, narzędzia, dokumenty i czas oczekiwania.",
      },
      {
        title: "Analiza strat",
        body: "Wskazujemy zbędne kroki, podwójne wpisywanie danych, niepotrzebne akceptacje i miejsca, w których praca czeka.",
      },
      {
        title: "Projekt nowego procesu",
        body: "Proponujemy prostszą wersję: mniej przekazań, jasne role i reguły dla najczęstszych wyjątków.",
      },
      {
        title: "Reguły decyzji",
        body: "Spisujemy zasady w formie „jeśli X, to Y”. Dzięki nim proces da się opisać i zautomatyzować.",
      },
      {
        title: "Role i odpowiedzialności",
        body: "Ustalamy, kto za co odpowiada na każdym etapie, żeby sprawy nie wisiały bez właściciela.",
      },
      {
        title: "Mierniki procesu",
        body: "Wybieramy kilka prostych wskaźników, na przykład czas realizacji, żeby było widać, czy zmiana działa.",
      },
      {
        title: "Instrukcje dla zespołu",
        body: "Przygotowujemy krótkie instrukcje i schematy, które pomagają we wdrożeniu nowych osób.",
      },
      {
        title: "Plan automatyzacji",
        body: "Wskazujemy, które kroki nowego procesu warto zautomatyzować i jakimi narzędziami.",
      },
    ],
  },
  example: {
    title: "Proces obsługi zamówienia przed i po zmianie",
    lead: "Przykład firmy handlowej, w której zamówienie przechodziło przez trzy działy. Tak zmienił się proces po mapowaniu.",
    rows: [
      {
        label: "Przyjęcie zamówienia",
        before: "Zamówienia przychodzą mailem, telefonem i przez handlowców, każdy zapisuje je po swojemu.",
        after: "Jeden formularz i jeden rejestr zamówień z tymi samymi polami dla wszystkich kanałów.",
      },
      {
        label: "Akceptacja",
        before: "Każde zamówienie zatwierdza kierownik, nawet standardowe.",
        after: "Akceptacja tylko przy rabacie powyżej ustalonego progu albo nowym kliencie.",
      },
      {
        label: "Przekazanie do realizacji",
        before: "Mail do magazynu z załącznikiem, który ktoś musi przepisać.",
        after: "Zamówienie trafia do magazynu jako zadanie z kompletem danych.",
      },
      {
        label: "Status dla klienta",
        before: "Klient dzwoni, handlowiec pyta magazyn i oddzwania.",
        after: "Status widoczny w rejestrze, a klient dostaje powiadomienie o wysyłce.",
      },
      {
        label: "Faktura",
        before: "Księgowość dowiaduje się o wysyłce z tygodniowego zestawienia.",
        after: "Wysyłka uruchamia przygotowanie faktury z danymi z zamówienia.",
      },
    ],
    note: "Część zmian to decyzje organizacyjne, bez żadnej technologii. Automatyzacja przychodzi dopiero wtedy, gdy proces jest prosty.",
  },
  process: {
    title: "Jak pracujemy nad procesem",
    lead: "Pracujemy warsztatowo, z osobami, które wykonują proces na co dzień. To one najlepiej wiedzą, co przeszkadza.",
    steps: [
      {
        title: "Wybór procesu",
        body: "Wybieramy proces, który zabiera najwięcej czasu albo generuje najwięcej błędów. Czasem wskazuje go wcześniejszy audyt.",
      },
      {
        title: "Warsztat stanu obecnego",
        body: "Z zespołem rozrysowujemy, jak proces działa dziś, łącznie z wyjątkami i obejściami.",
      },
      {
        title: "Projekt nowej wersji",
        body: "Proponujemy prostszy proces i omawiamy go z zespołem, żeby był wykonalny w praktyce.",
      },
      {
        title: "Test na żywo",
        body: "Nowy proces działa przez kilka tygodni. Zbieramy uwagi i poprawiamy to, co nie działa.",
      },
      {
        title: "Automatyzacja",
        body: "Gdy proces jest stabilny, automatyzujemy wybrane kroki albo przekazujemy wam gotowy plan.",
      },
    ],
  },
  tools: {
    title: "Narzędzia, z których korzystamy",
    lead: "Mapy procesów tworzymy w narzędziach, do których cały zespół ma dostęp i które łatwo aktualizować.",
    items: [
      { name: "Miro, FigJam", note: "warsztaty i mapy procesów online" },
      { name: "BPMN", note: "standard zapisu procesów o wielu wariantach" },
      { name: "Notion, Confluence", note: "instrukcje i opisy procesów" },
      { name: "Airtable", note: "rejestry spraw i statusów w nowym procesie" },
      { name: "Make, Zapier, n8n", note: "automatyzacja kroków po zmianie" },
      { name: "Microsoft Power Automate", note: "automatyzacja w środowisku Microsoft 365" },
    ],
  },
  faq: [
    {
      question: "Czym różni się mapowanie od audytu procesów?",
      answer:
        "Audyt przegląda całą firmę i wskazuje, od czego zacząć. Mapowanie skupia się na jednym procesie albo kilku powiązanych i kończy się projektem nowej wersji, którą można wdrożyć.",
    },
    {
      question: "Czy musimy od razu automatyzować?",
      answer:
        "Nie. Często sama zmiana procesu, na przykład mniej akceptacji albo jeden rejestr zamiast kilku arkuszy, przynosi dużą część efektu. Automatyzację dokładamy wtedy, gdy ma sens.",
    },
    {
      question: "Ile czasu zajmuje zmapowanie procesu?",
      answer:
        "Prosty proces mapujemy w ciągu jednego lub dwóch warsztatów. Proces obejmujący kilka działów wymaga więcej spotkań. Czas ustalamy po wstępnej rozmowie.",
    },
    {
      question: "Kto z naszej strony powinien brać udział?",
      answer:
        "Osoby, które wykonują proces na co dzień, oraz ktoś, kto może podejmować decyzje o zmianach. Bez tych drugich projekt często kończy się na diagramie.",
    },
    {
      question: "W jakiej formie dostajemy wynik?",
      answer:
        "Mapę procesu obecnego i docelowego, spis reguł i ról, krótkie instrukcje oraz plan automatyzacji. Wszystko w narzędziach, do których macie dostęp.",
    },
  ],
  relatedArticleSlugs: [
    "od-czego-zaczac-mapowanie-procesow",
    "audyt-procesow-w-firmie",
    "bledy-przy-pierwszym-wdrozeniu-automatyzacji",
    "gotowa-automatyzacja-czy-budowana-od-zera",
  ],
  relatedServiceSlugs: ["integracje-systemow", "wdrozenia-airtable"],
  contact: {
    title: "Który proces u ciebie najbardziej się ciągnie?",
    body: "Opisz go w kilku zdaniach. Podpowiemy, czy wystarczy go uprościć, czy od razu warto myśleć o automatyzacji.",
    highlights: [
      "Rozmowa o konkretnym procesie, a nie ogólna prezentacja",
      "Propozycja zakresu i formy warsztatów",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
