import type { FaqItem, ProcessStep, Service } from "./airtable.types";

/**
 * Strona usługowa „Wdrożenia n8n” — treść w kodzie (jak poradnik i strony miast),
 * niezależna od Airtable. Trasa statyczna /uslugi/wdrozenia-n8n ma pierwszeństwo
 * przed /uslugi/[slug].
 */
export const N8N_SERVICE_SLUG = "wdrozenia-n8n";
export const N8N_SERVICE_PATH = `/uslugi/${N8N_SERVICE_SLUG}`;

export const n8nService: Service = {
  id: "code-wdrozenia-n8n",
  slug: N8N_SERVICE_SLUG,
  title: "Wdrożenia n8n",
  menuLabel: "Wdrożenia n8n",
  metaTitle: "Wdrożenie n8n w firmie, agenci AI i hosting | Automation Minds",
  metaDescription:
    "Wdrażamy n8n w firmach: workflow na zamówienie, agenci AI, instalacja self-hosted, opieka i migracja z Zapiera lub Make. Bezpłatna konsultacja 30 min.",
  ogImageUrl: "",
  updatedAt: "2026-10-05",
  bannerImageUrl: "/images/migrated/hero-2.jpg",
  bannerTitle: "Wdrożenia n8n",
  introSubtitle: "Automatyzacja w n8n",
  introTitle: "Wdrożenia n8n dla firm, które chcą automatyzacji bez opłat za każdy krok",
  introBody:
    "Projektujemy, budujemy i utrzymujemy workflow w n8n: od integracji systemów po agentów AI i instalację self-hosted.",
  introImageUrl: "",
  introImageAlt: "",
  introButtonText: "",
  introButtonLink: "",
  tabsSubtitle: "",
  tabsTitle: "",
  processSubtitle: "Jak pracujemy",
  processTitle: "Od rozmowy do działającego workflow",
  order: 100,
};

/** Dokleja usługi zdefiniowane w kodzie do listy z CMS (menu, stopka, formularz). */
export function withCodeServices(services: Service[]): Service[] {
  if (services.some((service) => service.slug === n8nService.slug)) {
    return services;
  }
  return [...services, n8nService];
}

export const N8N_HERO = {
  subtitle: "Bezpłatna konsultacja 30 min · Pracujemy zdalnie w całej Polsce",
  title: "Wdrożenie n8n w firmie, od pierwszego workflow po agenta AI",
  imageAlt: "Wdrożenie n8n i automatyzacja procesów w firmie",
} as const;

export const N8N_INTRO_PARAGRAPHS = [
  "n8n to narzędzie do automatyzacji procesów, które można zainstalować na własnym serwerze albo używać w chmurze producenta. Łączy aplikacje przez gotowe integracje i API. Gdy gotowe węzły nie wystarczają, w workflow dopisuje się kod w JavaScripcie lub Pythonie.",
  "Projektujemy, budujemy i utrzymujemy workflow w n8n dla firm z całej Polski. Zaczynamy od rozmowy o procesie, a dopiero potem wybieramy narzędzie. Jeśli n8n nie pasuje do Waszej sytuacji, usłyszycie to na konsultacji.",
  "Po wdrożeniu zostają działające automatyzacje, dokumentacja i zespół, który wie, jak sprawdzić historię wykonań i co zrobić, gdy coś pójdzie nie tak.",
] as const;

export type N8nOfferItem = {
  icon: "workflow" | "bot" | "server" | "wrench" | "migrate" | "training";
  title: string;
  body: string;
};

export const N8N_OFFER: N8nOfferItem[] = [
  {
    icon: "workflow",
    title: "Workflow n8n na zamówienie",
    body: "Przenosimy do n8n ręczną pracę: przepisywanie danych między systemami, obsługę zamówień i leadów, powiadomienia, generowanie dokumentów. Każdy workflow dostaje obsługę błędów i alerty, więc awaria nie przechodzi bez echa.",
  },
  {
    icon: "bot",
    title: "Agenci AI w n8n",
    body: "Budujemy agentów, którzy czytają maile, klasyfikują zgłoszenia, wyciągają dane z faktur i PDF-ów albo odpowiadają na pytania na podstawie firmowej bazy wiedzy. Model językowy dobieramy do zadania i budżetu. Decyzje, które wymagają człowieka, trafiają do akceptacji.",
  },
  {
    icon: "server",
    title: "Instalacja, hosting i opieka nad n8n",
    body: "Instalujemy n8n na Waszym serwerze lub w chmurze w regionie UE, z bazą danych, kopiami zapasowymi, HTTPS i kontrolą dostępu. Potem aktualizujemy instancję i monitorujemy wykonania. Gdy zewnętrzne API zmieni format danych, poprawka workflow jest po naszej stronie.",
  },
  {
    icon: "wrench",
    title: "Audyt i naprawa istniejących workflow",
    body: "Przejmujemy workflow zbudowane samodzielnie albo przez poprzedniego wykonawcę. Sprawdzamy, dlaczego przestały działać, poprawiamy błędy, porządkujemy logikę i opisujemy, co robi każdy węzeł.",
  },
  {
    icon: "migrate",
    title: "Migracja z Zapiera i Make do n8n",
    body: "W Zapierze i Make rachunek rośnie z każdym krokiem scenariusza. Przenosimy automatyzacje do n8n, uruchamiamy je równolegle ze starymi i wyłączamy stare dopiero wtedy, gdy wyniki się zgadzają.",
  },
  {
    icon: "training",
    title: "Szkolenia z n8n dla zespołu",
    body: "Uczymy zespół budować i poprawiać proste workflow samodzielnie. Ćwiczymy na procesach z Waszej firmy, nie na przykładach z dokumentacji.",
  },
];

export const N8N_ADVANTAGES = [
  {
    title: "Dane zostają w Waszej infrastrukturze",
    body: "Wersję self-hosted instaluje się na własnym serwerze. Dane klientów, faktury i dokumenty kadrowe nie trafiają do zewnętrznego dostawcy automatyzacji, co ułatwia rozmowę o RODO.",
  },
  {
    title: "Rozliczenie za wykonanie, nie za każdy krok",
    body: "W n8n Cloud liczy się uruchomienie całego workflow, bez względu na liczbę kroków. W wersji self-hosted nie ma opłat za wykonania, płaci się za serwer.",
  },
  {
    title: "Kod, gdy gotowe węzły nie wystarczają",
    body: "Węzeł HTTP Request łączy się z dowolnym API, a w węźle Code można dopisać logikę w JavaScripcie lub Pythonie. Nietypowy proces nie kończy się na ograniczeniach narzędzia.",
  },
  {
    title: "AI w tym samym narzędziu",
    body: "n8n ma wbudowane węzły do budowy agentów AI i obsługuje modele OpenAI, Anthropic, Google oraz modele uruchamiane lokalnie. Agent korzysta z tych samych integracji co reszta workflow.",
  },
] as const;

export const N8N_NOT_A_FIT = {
  title: "Kiedy n8n nie jest najlepszym wyborem",
  body: "Gdy firma ma kilka prostych automatyzacji i nikt nie chce zajmować się serwerem ani logiką workflow, Zapier lub Make mogą wyjść prościej i taniej. Powiemy to wprost na konsultacji.",
} as const;

export const N8N_INTEGRATIONS = [
  "Fakturownia",
  "wFirma",
  "iFirma",
  "inFakt",
  "KSeF",
  "BaseLinker",
  "Allegro",
  "Shoper",
  "WooCommerce",
  "PrestaShop",
  "Pipedrive",
  "HubSpot",
  "Google Workspace",
  "Microsoft 365",
  "Slack",
  "Airtable",
] as const;

export const N8N_INTEGRATIONS_BODY =
  "Dla wielu polskich systemów, jak Fakturownia, BaseLinker czy KSeF, n8n nie ma gotowych węzłów. Łączymy je przez API i webhooki, więc workflow korzysta z narzędzi, których firma już używa.";

export const n8nProcessSteps: ProcessStep[] = [
  {
    title: "Rozmowa i mapa procesu",
    body: "Na bezpłatnej konsultacji (30 min) ustalamy, który proces zabiera zespołowi najwięcej czasu i czy n8n do niego pasuje.",
  },
  {
    title: "Projekt workflow",
    body: "Rozpisujemy kroki, źródła danych, wyjątki i to, co ma się stać przy błędzie. Zakres i koszt znacie przed rozpoczęciem budowy.",
  },
  {
    title: "Instalacja lub konfiguracja n8n",
    body: "Stawiamy instancję self-hosted albo konfigurujemy n8n Cloud. Dostępy do systemów trzymamy w menedżerze poświadczeń n8n, nie w treści workflow.",
  },
  {
    title: "Budowa i testy",
    body: "Testujemy workflow na prawdziwych danych, także na trudnych przypadkach: pustych polach, duplikatach, przerwach w działaniu API.",
  },
  {
    title: "Uruchomienie i szkolenie",
    body: "Włączamy automatyzację, przekazujemy dokumentację i pokazujemy zespołowi, gdzie sprawdzić historię wykonań.",
  },
  {
    title: "Opieka i rozwój",
    body: "Monitorujemy wykonania, aktualizujemy n8n i rozbudowujemy workflow, gdy zmienia się proces.",
  },
].map((step, index) => ({
  id: `n8n-step-${index + 1}`,
  serviceSlug: N8N_SERVICE_SLUG,
  stepNumber: index + 1,
  ...step,
}));

export const n8nFaq: FaqItem[] = [
  {
    question: "Ile kosztuje wdrożenie n8n?",
    answer:
      "Koszt zależy od liczby workflow, liczby łączonych systemów i tego, czy potrzebny jest agent AI. Prosty workflow między dwoma narzędziami to inna skala niż obieg dokumentów w kilku działach. Wycenę podajemy po konsultacji i analizie procesu, przed rozpoczęciem prac. Do tego dochodzi licencja n8n Cloud albo koszt serwera przy wersji self-hosted.",
  },
  {
    question: "n8n Cloud czy self-hosted, co wybrać?",
    answer:
      "n8n Cloud to szybszy start bez utrzymywania serwera. Wersja self-hosted daje pełną kontrolę nad danymi i nie ma w niej opłat za wykonania, ale ktoś musi pilnować aktualizacji i kopii zapasowych. Tę część możemy wziąć na siebie.",
  },
  {
    question: "Czy n8n jest darmowy?",
    answer:
      "Wersję Community można bezpłatnie zainstalować na własnym serwerze i używać do automatyzacji procesów wewnątrz firmy. Licencja n8n (Sustainable Use License) ogranicza za to np. odsprzedaż n8n jako usługi. n8n Cloud i plany Enterprise są płatne. Aktualne warunki są na stronie producenta.",
  },
  {
    question: "Czy n8n jest zgodny z RODO?",
    answer:
      "O zgodności decyduje konfiguracja, nie samo narzędzie. Przy instalacji self-hosted w UE dane osobowe nie trafiają do zewnętrznego dostawcy automatyzacji. Ustalamy też, jakie dane przetwarza workflow, jak długo n8n przechowuje historię wykonań i kto ma do niej dostęp.",
  },
  {
    question: "Czy przejmiecie workflow zbudowane przez kogoś innego?",
    answer:
      "Tak. Zaczynamy od audytu: sprawdzamy, co działa, co jest zbędne i gdzie workflow może się wysypać. Potem naprawiamy błędy i opisujemy całość, żeby kolejna zmiana nie wymagała zgadywania.",
  },
  {
    question: "Jak wygląda migracja z Zapiera lub Make?",
    answer:
      "Spisujemy istniejące scenariusze, odtwarzamy je w n8n i przez pewien czas uruchamiamy obie wersje równolegle. Stare automatyzacje wyłączamy, gdy wyniki się zgadzają.",
  },
  {
    question: "Ile trwa wdrożenie n8n?",
    answer:
      "Prostsze automatyzacje, np. jeden przepływ między dwoma narzędziami, często uruchamiamy w kilka tygodni. Większe projekty dzielimy na etapy, a pierwsze workflow działa, zanim skończymy całość.",
  },
  {
    question: "Czy pracujecie zdalnie?",
    answer:
      "Tak, z firmami w całej Polsce. Konsultacja, warsztaty i szkolenia odbywają się online. Dostęp do serwera lub konta n8n dostajemy na czas prac, na zasadach ustalonych z Wami.",
  },
].map((item, index) => ({
  id: `n8n-faq-${index + 1}`,
  order: index + 1,
  keywords: "n8n",
  ...item,
}));

export const N8N_RELATED_SERVICES = [
  {
    slug: "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    label: "Automatyzacja i AI w niestandardowych procesach",
  },
  {
    slug: "automatyzacja-dla-sprzedazy-i-marketingu",
    label: "Automatyzacja sprzedaży i marketingu",
  },
  { slug: "automatyzacja-dla-ksiegowosci", label: "Automatyzacja księgowości" },
  {
    slug: "automatyzacja-w-obsludze-klienta",
    label: "Automatyzacja obsługi klienta",
  },
] as const;

export const N8N_TRADEMARK_NOTE =
  "n8n jest znakiem towarowym n8n GmbH. Automation Minds jest niezależną firmą wdrożeniową i nie jest powiązane z n8n GmbH.";
