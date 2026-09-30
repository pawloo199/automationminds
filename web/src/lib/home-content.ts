import type { GuideFaqItem } from "./airtable.types";
import type { ServiceContent } from "./services/types";

/**
 * Treść strony głównej. Strona jest też landing page kampanii Google Ads
 * („automatyzacja procesów”), więc H1, meta i pierwsze sekcje trzymają się
 * tej frazy, a kontakt (formularz, telefon) jest dostępny od pierwszego ekranu.
 */
export const HOME_CONTENT = {
  metaTitle: "Automatyzacja procesów biznesowych i AI | Automation Minds",
  metaDescription:
    "Automatyzujemy procesy w małych i średnich firmach: dane, faktury, raporty, obsługa klienta i wdrożenia AI. Bezpłatna konsultacja 30 min. Cała Polska.",
  hero: {
    /** Zdjęcie z dotychczasowego hero (Vercel Blob, stały adres). */
    imageUrl:
      "https://tkwurcvdccuuc86o.public.blob.vercel-storage.com/automatyzacje-procesow-ai.webp",
    eyebrow: "Automatyzacja procesów i AI dla firm",
    title: "Automatyzacja procesów biznesowych i AI, które odciążają twój zespół",
    lead: "Przejmujemy powtarzalną pracę: przepisywanie danych, faktury, raporty i obsługę zapytań. Łączymy narzędzia, których już używacie, i wdrażamy AI tam, gdzie się opłaca.",
    bullets: [
      "Bezpłatna konsultacja 30 min i wskazanie, od czego zacząć",
      "Wycena pierwszego etapu, zanim zaczniemy pracę",
      "Pracujemy na waszych narzędziach, bez zmiany systemów",
    ],
    facts: [
      { label: "Na rynku", value: "od 2022 r." },
      { label: "Siedziba", value: "Wrocław" },
      { label: "Zasięg", value: "Cała Polska, zdalnie" },
      { label: "Odpowiedź", value: "w 1 dzień roboczy" },
    ],
    formTitle: "Umów bezpłatną konsultację",
    formBody: "Zostaw kontakt, a oddzwonimy w ciągu 1 dnia roboczego. Rozmowa trwa około 30 minut i do niczego nie zobowiązuje.",
  },
  tools: [
    "Make",
    "n8n",
    "Zapier",
    "Power Automate",
    "Airtable",
    "HubSpot",
    "Pipedrive",
    "Microsoft 365",
    "Google Workspace",
    "KSeF",
    "ChatGPT",
    "Claude",
  ],
  problems: {
    title: "Gdzie twoja firma traci czas każdego dnia",
    lead: "Rzadko chodzi o jedno duże zadanie. Zwykle to kilkanaście drobnych czynności, które razem zabierają zespołowi całe dni w miesiącu.",
    items: [
      {
        title: "Te same dane wpisywane kilka razy",
        body: "Klient trafia do CRM, potem do arkusza, na fakturę i do raportu. Każde przepisanie to czas i okazja do pomyłki.",
      },
      {
        title: "Zapytania od klientów czekają",
        body: "Wiadomości rozchodzą się po skrzynkach i komunikatorach. Klient czeka na odpowiedź, a część zapytań po prostu ginie.",
      },
      {
        title: "Faktury i dokumenty przepisywane ręcznie",
        body: "Faktury, zamówienia i protokoły trzeba przeczytać, przepisać i odłożyć we właściwe miejsce.",
      },
      {
        title: "Raporty składane ręcznie",
        body: "Co tydzień ktoś zbiera dane z kilku systemów, żeby pokazać wyniki. Zanim raport jest gotowy, liczby są nieaktualne.",
      },
      {
        title: "Wiedza w głowach kilku osób",
        body: "Procedury nie są spisane, więc nowa osoba uczy się tygodniami, a urlop jednej osoby wstrzymuje część spraw.",
      },
      {
        title: "Narzędzia, które się nie łączą",
        body: "Firma ma CRM, program do faktur i kilka aplikacji, ale każda działa osobno. Zespół łata to arkuszami.",
      },
    ],
  },
  services: {
    title: "Co możemy zautomatyzować w twojej firmie",
    lead: "Zaczynamy od diagnozy, a potem wdrażamy rozwiązania w obszarach, które zabierają najwięcej czasu. Każdą usługę opisujemy szczegółowo na osobnej stronie.",
  },
  example: {
    title: "Tydzień w firmie przed automatyzacją i po niej",
    lead: "Przykład małej firmy B2B, która sprzedaje usługi i obsługuje kilkudziesięciu klientów miesięcznie. Tak zmieniają się codzienne zadania biura.",
    rows: [
      {
        label: "Zapytania od klientów",
        before: "Maile w kilku skrzynkach, odpowiedź zależy od tego, kto zauważy wiadomość.",
        after: "Każde zapytanie w CRM, przypisane do osoby, z automatycznym potwierdzeniem dla klienta.",
      },
      {
        label: "Faktury kosztowe",
        before: "Pobieranie PDF-ów z maili i przepisywanie danych do programu.",
        after: "Faktury z KSeF i maili trafiają do akceptacji i księgowości automatycznie.",
      },
      {
        label: "Przypomnienia o płatnościach",
        before: "Wysyłane ręcznie, gdy ktoś znajdzie chwilę.",
        after: "Wysyłane automatycznie przed terminem i po nim.",
      },
      {
        label: "Raport dla zarządu",
        before: "Piątkowe zbieranie danych z CRM, faktur i arkuszy.",
        after: "Dashboard z aktualnymi liczbami, dostępny w każdej chwili.",
      },
      {
        label: "Nowa osoba w zespole",
        before: "Kilka dni czekania na dostępy i ciągłe pytania do kolegów.",
        after: "Lista zadań wdrożeniowych i asystent AI, który zna firmowe procedury.",
      },
    ],
    note: "Nie trzeba zmieniać wszystkiego naraz. Najczęściej zaczynamy od jednego obszaru i dokładamy kolejne, gdy pierwszy działa.",
  } satisfies ServiceContent["example"],
  steps: {
    title: "Jak zaczynamy współpracę",
    lead: "Od pierwszej rozmowy do działającego rozwiązania prowadzimy cię krok po kroku. Na każdym etapie wiesz, ile to kosztuje i co dostaniesz.",
    items: [
      {
        title: "Bezpłatna konsultacja",
        body: "W 30 minut rozmawiamy o tym, jak pracuje zespół, i wskazujemy jeden lub dwa obszary z najszybszym zwrotem.",
      },
      {
        title: "Przegląd procesu i wycena",
        body: "Rozrysowujemy wybrany proces i przygotowujemy wycenę pierwszego etapu. Decyzję podejmujesz, znając koszt.",
      },
      {
        title: "Wdrożenie etapami",
        body: "Budujemy i testujemy rozwiązanie na waszych danych. Zespół dostaje instrukcję i wsparcie na starcie.",
      },
      {
        title: "Opieka i rozwój",
        body: "Pilnujemy, żeby automatyzacje działały, i dokładamy kolejne obszary, gdy pierwszy przynosi efekt.",
      },
    ],
  },
  principles: {
    title: "Czego możesz się po nas spodziewać",
    items: [
      {
        title: "Najpierw proces, potem narzędzie",
        body: "Nie sprzedajemy licencji. Zaczynamy od tego, jak pracuje zespół, i dopiero wtedy dobieramy technologię.",
      },
      {
        title: "Wycena przed startem",
        body: "Każdy etap ma jasny zakres i koszt. Nie ma projektów rozliczanych w ciemno.",
      },
      {
        title: "Rozwiązania, które zostają w firmie",
        body: "Konta zakładamy na firmę, zostawiamy dokumentację i uczymy zespół. Nie jesteście od nas uzależnieni.",
      },
      {
        title: "Porządek w danych jako fundament",
        body: "Projektujemy bazy i struktury danych tak, żeby automatyzacje i AI działały dziś i przy kolejnych wdrożeniach.",
      },
    ],
  },
  midCta: {
    title: "Sprawdźmy, co da się zautomatyzować u ciebie",
    body: "W 30 minut przejdziemy przez wasze procesy i powiemy wprost, co warto zautomatyzować najpierw, a czego nie ruszać.",
  },
  faq: [
    {
      question: "Ile kosztuje automatyzacja procesów w firmie?",
      answer:
        "To zależy od procesu, liczby narzędzi i zakresu. Proste połączenie dwóch aplikacji kosztuje niewiele, a wdrożenie obejmujące kilka działów więcej. Po bezpłatnej konsultacji i przeglądzie procesu dostajesz wycenę konkretnego etapu, zanim zapadnie jakakolwiek decyzja.",
    },
    {
      question: "Od czego zacząć automatyzację w małej firmie?",
      answer:
        "Od jednego powtarzalnego zadania, które zabiera dużo czasu, na przykład obsługi zapytań, faktur albo raportów. Na konsultacji pomagamy wybrać to, które przyniesie najszybszy efekt.",
    },
    {
      question: "Czy musimy zmieniać programy, których używamy?",
      answer:
        "Zwykle nie. Najczęściej łączymy narzędzia, które już macie, na przykład CRM, program do faktur, pocztę i arkusze. Zmianę proponujemy tylko wtedy, gdy obecne narzędzie blokuje pracę.",
    },
    {
      question: "Jak długo trwa wdrożenie automatyzacji?",
      answer:
        "Pierwszy etap zwykle uruchamiamy w ciągu kilku tygodni. Większe projekty dzielimy na etapy, żeby zespół mógł korzystać z pierwszych efektów możliwie szybko.",
    },
    {
      question: "Czy pracujecie z firmami spoza Wrocławia?",
      answer:
        "Tak. Mamy siedzibę we Wrocławiu, ale pracujemy z firmami z całej Polski, głównie zdalnie. Gdy to potrzebne, spotykamy się na miejscu.",
    },
    {
      question: "Jak wygląda bezpłatna konsultacja?",
      answer:
        "To 30-minutowa rozmowa telefoniczna albo online. Pytamy, jak pracuje zespół i gdzie traci najwięcej czasu, a na koniec wskazujemy jeden lub dwa obszary do automatyzacji i kolejny krok. Bez zobowiązań.",
    },
    {
      question: "Czy automatyzacja jest bezpieczna dla danych firmy?",
      answer:
        "Projektujemy przepływy zgodnie z RODO: dane trafiają tylko tam, gdzie są potrzebne, dostęp mają wybrane osoby, a przy AI korzystamy z ustawień, w których dane firmowe nie służą do trenowania modeli.",
    },
  ] satisfies GuideFaqItem[],
  cities: {
    title: "Pracujemy z firmami w całej Polsce",
    lead: "Większość projektów prowadzimy zdalnie, więc lokalizacja nie ma wpływu na zakres ani tempo pracy. Sprawdź, jak pracujemy w twoim mieście.",
    featuredSlugs: [
      "warszawa",
      "krakow",
      "wroclaw",
      "poznan",
      "gdansk",
      "lodz",
      "katowice",
      "szczecin",
      "lublin",
      "bydgoszcz",
      "bialystok",
      "rzeszow",
    ],
  },
  guide: {
    title: "Z Poradnika",
    lead: "Praktyczne artykuły o automatyzacji, AI i porządku w danych, pisane dla właścicieli i kierowników firm.",
  },
  contact: {
    title: "Opowiedz, co zabiera twojemu zespołowi najwięcej czasu",
    body: "Nie musisz wiedzieć, jakiej automatyzacji potrzebujesz. Po krótkiej rozmowie wskażemy, od czego zacząć i czy to się opłaci.",
  },
};
