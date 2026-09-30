import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "audyt-procesow-biznesowych",
  metaTitle: "Audyt procesów biznesowych dla MŚP | Automation Minds",
  metaDescription:
    "Audyt procesów w firmie: sprawdzamy, gdzie zespół traci czas, co warto zautomatyzować i w jakiej kolejności. Raport z planem działań i wyceną. Konsultacja.",
  primaryKeyword: "audyt procesów biznesowych",
  secondaryKeywords: [
    "audyt procesów w firmie",
    "analiza procesów biznesowych",
    "audyt automatyzacji",
    "plan automatyzacji",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Doradztwo i strategia",
    title: "Audyt procesów, po którym wiesz, co zautomatyzować najpierw",
    lead: "Przyglądamy się temu, jak na co dzień pracuje twój zespół: kto co robi, w jakich narzędziach i gdzie dane są przepisywane ręcznie. Na końcu dostajesz listę zmian ułożoną według opłacalności, z wyceną pierwszego kroku.",
    outcomes: [
      "Lista procesów do zmiany, ułożona od najbardziej opłacalnych",
      "Mapa narzędzi i przepływu danych w firmie w jednym miejscu",
      "Plan pierwszego etapu z wyceną, bez zobowiązań",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=1920&q=80",
    imageAlt: "Dwie osoby rozrysowują proces na tablicy",
  },
  problems: {
    title: "Kiedy audyt ma największy sens",
    lead: "Firmy przychodzą do nas zwykle wtedy, gdy czują, że coś zabiera za dużo czasu, ale trudno im wskazać, co dokładnie.",
    items: [
      {
        title: "Wszyscy są zajęci, a efektów nie przybywa",
        body: "Zespół pracuje coraz dłużej, a firma nie rośnie szybciej. Część czasu znika na zadaniach, których nikt nie mierzy.",
      },
      {
        title: "Każdy dział ma swoje arkusze",
        body: "Sprzedaż, biuro i realizacja trzymają dane w osobnych plikach. Te same informacje są wpisywane kilka razy, a liczby się nie zgadzają.",
      },
      {
        title: "Nie wiadomo, od czego zacząć automatyzację",
        body: "Pomysłów jest dużo, budżet jeden. Bez oceny procesów łatwo wydać pieniądze na automatyzację, która niewiele zmienia.",
      },
      {
        title: "Wiedza siedzi w głowach kilku osób",
        body: "Gdy doświadczona osoba idzie na urlop, część spraw staje. Procesy nie są nigdzie opisane, więc trudno je przekazać.",
      },
      {
        title: "Narzędzi przybywa, porządku nie",
        body: "Firma kupiła CRM, program do zadań i kilka dodatków. Każde działa osobno, a zespół i tak wraca do Excela.",
      },
      {
        title: "Planowane jest wdrożenie AI",
        body: "Zarząd chce wykorzystać AI, ale nie wiadomo, gdzie przyniesie realny efekt, a gdzie będzie tylko ciekawostką.",
      },
    ],
  },
  scope: {
    title: "Co obejmuje audyt",
    lead: "Zakres dopasowujemy do wielkości firmy. W małym zespole audyt zajmuje kilka spotkań, w większym obejmuje więcej działów.",
    items: [
      {
        title: "Rozmowy z zespołem",
        body: "Rozmawiamy z osobami, które wykonują pracę na co dzień, a nie tylko z zarządem. To one wiedzą, gdzie tracą czas.",
      },
      {
        title: "Przegląd narzędzi",
        body: "Spisujemy programy, arkusze i skrzynki, z których korzystacie, oraz to, jak dane przechodzą między nimi.",
      },
      {
        title: "Mapa głównych procesów",
        body: "Rozrysowujemy najważniejsze procesy od początku do końca: kto, co, w jakim narzędziu i ile to trwa.",
      },
      {
        title: "Wskazanie wąskich gardeł",
        body: "Zaznaczamy miejsca, w których praca czeka, dane są przepisywane albo łatwo o pomyłkę.",
      },
      {
        title: "Ocena opłacalności",
        body: "Każdą zmianę oceniamy pod kątem czasu, który odzyskacie, kosztu wdrożenia i ryzyka.",
      },
      {
        title: "Ocena danych",
        body: "Sprawdzamy, czy dane są na tyle uporządkowane, żeby automatyzacja albo AI mogły na nich pracować.",
      },
      {
        title: "Plan działań",
        body: "Układamy kolejność zmian: co zrobić od razu, co w kolejnym kwartale, a czego nie warto ruszać.",
      },
      {
        title: "Wycena pierwszego etapu",
        body: "Dla najbardziej opłacalnej zmiany przygotowujemy zakres i wycenę wdrożenia.",
      },
    ],
  },
  example: {
    title: "Co zmienia się po audycie",
    lead: "Przykład firmy usługowej, w której zespół czuł przeciążenie, ale nie potrafił wskazać przyczyny. Tak wygląda sytuacja przed audytem i po nim.",
    rows: [
      {
        label: "Wiedza o procesach",
        before: "Każdy zna swój fragment, nikt nie widzi całości.",
        after: "Jedna mapa procesów, którą rozumie cały zespół i zarząd.",
      },
      {
        label: "Priorytety",
        before: "Decyzje zapadają według tego, kto najgłośniej narzeka.",
        after: "Lista zmian ułożona według czasu do odzyskania i kosztu.",
      },
      {
        label: "Narzędzia",
        before: "Kilka programów, które się ze sobą nie łączą.",
        after: "Jasność, które narzędzia zostają, które połączyć, a z których zrezygnować.",
      },
      {
        label: "Dane",
        before: "Te same informacje w kilku arkuszach, z różnymi wartościami.",
        after: "Wskazane jedno źródło prawdy dla każdego rodzaju danych.",
      },
      {
        label: "Budżet",
        before: "Nie wiadomo, ile kosztowałaby automatyzacja i czy się zwróci.",
        after: "Wycena pierwszego etapu i orientacyjny koszt kolejnych kroków.",
      },
    ],
    note: "Po audycie możecie wdrożyć zmiany z nami albo samodzielnie. Raport i mapa procesów zostają w firmie.",
  },
  process: {
    title: "Jak prowadzimy audyt",
    lead: "Audyt jest krótki i konkretny. Nie zostawiamy po sobie stu stron dokumentacji, której nikt nie przeczyta.",
    steps: [
      {
        title: "Rozmowa wstępna",
        body: "Ustalamy, które obszary firmy przejrzeć i kto z zespołu powinien wziąć udział w rozmowach.",
      },
      {
        title: "Wywiady i obserwacja",
        body: "Rozmawiamy z pracownikami i patrzymy, jak wygląda ich dzień pracy w narzędziach, których używają.",
      },
      {
        title: "Mapa procesów",
        body: "Rozrysowujemy procesy i przepływ danych. Pokazujemy je zespołowi, żeby wyłapać to, co pominęliśmy.",
      },
      {
        title: "Analiza i priorytety",
        body: "Oceniamy każdą zmianę i układamy je w kolejności od najbardziej opłacalnych.",
      },
      {
        title: "Omówienie wyników",
        body: "Przedstawiamy raport na spotkaniu, odpowiadamy na pytania i wspólnie wybieramy pierwszy krok.",
      },
    ],
  },
  tools: {
    title: "Czym się posługujemy",
    lead: "Wynik audytu dostajecie w formie, którą łatwo czytać i aktualizować, bez specjalistycznych programów.",
    items: [
      { name: "Miro, FigJam", note: "mapy procesów, które widzi cały zespół" },
      { name: "BPMN", note: "notacja dla procesów o wielu wariantach" },
      { name: "Airtable", note: "rejestr procesów, narzędzi i planowanych zmian" },
      { name: "Google Workspace, Microsoft 365", note: "raport i plan działań" },
      { name: "Make, Zapier, n8n", note: "ocena, co da się zautomatyzować" },
      { name: "ChatGPT, Claude", note: "ocena zastosowań AI w procesach" },
    ],
  },
  faq: [
    {
      question: "Ile trwa audyt procesów?",
      answer:
        "W małej firmie zwykle kilka spotkań rozłożonych na dwa, trzy tygodnie. W większej, z kilkoma działami, audyt trwa dłużej. Dokładny czas ustalamy po rozmowie wstępnej.",
    },
    {
      question: "Czy audyt zobowiązuje do wdrożenia z wami?",
      answer:
        "Nie. Raport, mapa procesów i plan działań zostają w firmie. Możecie wdrożyć zmiany z nami, z innym wykonawcą albo samodzielnie.",
    },
    {
      question: "Ile czasu musi poświęcić nasz zespół?",
      answer:
        "Najczęściej jedną rozmowę z każdą osobą zaangażowaną w proces i krótkie spotkanie na omówienie wyników. Staramy się nie odciągać zespołu od pracy dłużej, niż to konieczne.",
    },
    {
      question: "Czym audyt różni się od mapowania procesów?",
      answer:
        "Audyt daje szeroki obraz firmy i wskazuje, od czego zacząć. Mapowanie idzie w głąb wybranego procesu i projektuje jego nową wersję. Często mapowanie jest kolejnym krokiem po audycie.",
    },
    {
      question: "Czy w audycie oceniacie też możliwości AI?",
      answer:
        "Tak. Przy każdym procesie sprawdzamy, czy AI może pomóc, na przykład w odczytywaniu dokumentów albo odpowiadaniu na powtarzalne pytania. Wskazujemy też, gdzie AI się nie sprawdzi.",
    },
  ],
  relatedArticleSlugs: [
    "audyt-procesow-w-firmie",
    "od-czego-zaczac-mapowanie-procesow",
    "5-procesow-do-automatyzacji-w-malej-firmie",
    "jak-mierzyc-roi-automatyzacji",
  ],
  relatedServiceSlugs: [
    "porzadkowanie-i-strukturyzowanie-danych",
    "automatyzacja-sprzedazy",
  ],
  contact: {
    title: "Sprawdźmy, gdzie twoja firma traci czas",
    body: "Opowiedz krótko, jak pracuje zespół i co najbardziej przeszkadza. Podpowiemy, czy potrzebny jest pełny audyt, czy wystarczy przyjrzeć się jednemu procesowi.",
    highlights: [
      "Rozmowa z osobą, która prowadzi audyty i wdrożenia",
      "Propozycja zakresu audytu dopasowana do firmy",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
