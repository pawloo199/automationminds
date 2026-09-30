import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "asystent-ai-na-firmowej-wiedzy",
  metaTitle: "Asystent AI na firmowej wiedzy | Automation Minds",
  metaDescription:
    "Budujemy asystenta AI, który odpowiada na pytania zespołu na podstawie waszych procedur, umów i dokumentów. Ze źródłami odpowiedzi i kontrolą dostępu.",
  primaryKeyword: "asystent AI dla firmy",
  secondaryKeywords: [
    "firmowy chatbot na dokumentach",
    "baza wiedzy AI",
    "AI na dokumentach firmy",
    "wyszukiwanie w dokumentach AI",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Sztuczna inteligencja",
    title: "Asystent AI, który zna procedury, oferty i dokumenty twojej firmy",
    lead: "Zamiast szukać w folderach albo pytać doświadczonych kolegów, zespół pyta asystenta. Odpowiedź przychodzi w kilka sekund, razem z odnośnikiem do dokumentu, z którego pochodzi.",
    outcomes: [
      "Odpowiedzi na pytania zespołu na podstawie waszych dokumentów",
      "Źródło przy każdej odpowiedzi, żeby łatwo ją sprawdzić",
      "Dostęp tylko do tych informacji, które dana osoba może widzieć",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1675285301978-fa577795ce61?w=1920&q=80",
    imageAlt: "Osoba pracuje na laptopie przy biurku",
  },
  problems: {
    title: "Gdzie firma traci czas na szukanie",
    lead: "Wiedza w firmie istnieje, tylko trudno ją znaleźć w odpowiednim momencie.",
    items: [
      {
        title: "Te same pytania co tydzień",
        body: "Nowe osoby pytają o procedury, cenniki i zasady. Doświadczeni pracownicy odpowiadają zamiast pracować.",
      },
      {
        title: "Dokumenty w wielu miejscach",
        body: "Procedury na dysku, oferty w mailach, instrukcje w Notion. Nikt nie wie, która wersja jest aktualna.",
      },
      {
        title: "Wiedza odchodzi z ludźmi",
        body: "Gdy odchodzi doświadczona osoba, razem z nią znika wiedza o wyjątkach i historii klientów.",
      },
      {
        title: "Wdrożenie nowej osoby trwa długo",
        body: "Nowy pracownik tygodniami uczy się, gdzie czego szukać, zanim zacznie samodzielnie pracować.",
      },
      {
        title: "Ogólny czat nie zna firmy",
        body: "ChatGPT odpowiada ogólnie, bo nie zna waszych procedur. Zespół i tak musi sprawdzać w dokumentach.",
      },
      {
        title: "Obawa o poufność",
        body: "Nie chcecie, żeby każdy pracownik miał dostęp do umów zarządu czy danych płacowych.",
      },
    ],
  },
  scope: {
    title: "Co budujemy",
    lead: "Asystent działa tam, gdzie pracuje zespół: w przeglądarce, w Teams, w Slacku albo w firmowym systemie.",
    items: [
      {
        title: "Zebranie źródeł wiedzy",
        body: "Wskazujemy dokumenty, bazy i foldery, z których asystent ma korzystać, i pomijamy nieaktualne wersje.",
      },
      {
        title: "Uporządkowanie dokumentów",
        body: "Porządkujemy strukturę, nazwy i wersje dokumentów, żeby asystent trafiał w właściwe źródła.",
      },
      {
        title: "Wyszukiwanie po znaczeniu",
        body: "Asystent znajduje odpowiedź, nawet gdy pytanie jest sformułowane inaczej niż w dokumencie.",
      },
      {
        title: "Odpowiedzi ze źródłem",
        body: "Każda odpowiedź zawiera odnośnik do dokumentu, żeby można ją było szybko zweryfikować.",
      },
      {
        title: "Uprawnienia",
        body: "Asystent pokazuje tylko te informacje, do których dana osoba ma dostęp.",
      },
      {
        title: "Integracja z narzędziami",
        body: "Asystent w Teams, Slacku, na stronie wewnętrznej albo w CRM, bez przełączania się między programami.",
      },
      {
        title: "Aktualizacja wiedzy",
        body: "Nowe i zmienione dokumenty trafiają do asystenta automatycznie, bez ręcznego wgrywania.",
      },
      {
        title: "Kontrola jakości",
        body: "Sprawdzamy odpowiedzi na zestawie typowych pytań i poprawiamy źródła, gdy asystent się myli.",
      },
    ],
  },
  example: {
    title: "Pytanie nowej osoby przed i po wdrożeniu",
    lead: "Przykład firmy dystrybucyjnej z rozbudowanymi warunkami handlowymi. Tak zmienia się sposób szukania odpowiedzi.",
    rows: [
      {
        label: "Pytanie o warunki",
        before: "Nowa osoba pyta kierownika, jakie rabaty obowiązują dla klienta hurtowego.",
        after: "Asystent odpowiada na podstawie aktualnego regulaminu i podaje link do dokumentu.",
      },
      {
        label: "Procedura reklamacji",
        before: "Szukanie instrukcji w kilku folderach, często w starej wersji.",
        after: "Odpowiedź krok po kroku z aktualnej procedury.",
      },
      {
        label: "Historia klienta",
        before: "Przeglądanie maili i notatek, żeby sprawdzić ustalenia.",
        after: "Streszczenie ustaleń z notatek w CRM, z odnośnikami.",
      },
      {
        label: "Wdrożenie pracownika",
        before: "Kilka tygodni pytań do doświadczonych kolegów.",
        after: "Większość pytań rozwiązuje asystent, a ludzie pomagają w trudniejszych sprawach.",
      },
    ],
    note: "Asystent jest tak dobry, jak dokumenty, na których pracuje. Dlatego porządek w źródłach jest częścią wdrożenia.",
  },
  process: {
    title: "Jak wdrażamy asystenta",
    lead: "Zaczynamy od jednego działu i jednego zestawu dokumentów. Rozszerzamy, gdy asystent odpowiada dobrze.",
    steps: [
      {
        title: "Wybór zakresu",
        body: "Ustalamy, dla kogo jest asystent, na jakie pytania ma odpowiadać i z jakich dokumentów korzystać.",
      },
      {
        title: "Porządek w źródłach",
        body: "Porządkujemy dokumenty, usuwamy duplikaty i ustalamy, kto odpowiada za ich aktualność.",
      },
      {
        title: "Budowa i testy",
        body: "Budujemy asystenta i sprawdzamy go na liście prawdziwych pytań zespołu.",
      },
      {
        title: "Pilotaż",
        body: "Asystent działa w jednym dziale. Zbieramy pytania, na które odpowiedział źle, i poprawiamy.",
      },
      {
        title: "Rozszerzenie i opieka",
        body: "Dodajemy kolejne źródła i działy, a także pilnujemy jakości odpowiedzi.",
      },
    ],
  },
  tools: {
    title: "Technologie",
    lead: "Dobieramy rozwiązanie do skali i wymagań bezpieczeństwa: od gotowych narzędzi po asystenta budowanego od podstaw.",
    items: [
      { name: "OpenAI, Anthropic, Azure OpenAI", note: "modele językowe z ustawieniami ochrony danych" },
      { name: "Microsoft 365, SharePoint", note: "dokumenty jako źródło wiedzy" },
      { name: "Google Drive", note: "foldery i dokumenty firmowe" },
      { name: "Notion, Confluence", note: "bazy wiedzy i procedury" },
      { name: "Teams, Slack", note: "miejsce, w którym zespół zadaje pytania" },
      { name: "n8n, Make", note: "aktualizacja wiedzy i integracje" },
    ],
  },
  faq: [
    {
      question: "Czym asystent różni się od zwykłego ChatGPT?",
      answer:
        "ChatGPT odpowiada na podstawie ogólnej wiedzy. Firmowy asystent korzysta z waszych dokumentów, podaje źródło odpowiedzi i respektuje uprawnienia dostępu.",
    },
    {
      question: "Co jeśli asystent poda błędną odpowiedź?",
      answer:
        "Dlatego każda odpowiedź ma źródło. Asystenta ustawiamy tak, żeby przyznawał, że nie zna odpowiedzi, zamiast zgadywać. Błędne odpowiedzi z pilotażu służą do poprawy źródeł.",
    },
    {
      question: "Czy nasze dokumenty trafią do trenowania modeli?",
      answer:
        "Nie. Korzystamy z usług i ustawień, w których dane firmowe nie są używane do trenowania. Dokumenty zostają w waszym środowisku albo w wybranej chmurze.",
    },
    {
      question: "Ile dokumentów potrzeba, żeby asystent miał sens?",
      answer:
        "Nie chodzi o liczbę, tylko o to, czy zespół często w nich szuka. Nawet kilkadziesiąt dobrze opisanych procedur może zaoszczędzić sporo pytań.",
    },
    {
      question: "Czy asystent może działać w Teams?",
      answer:
        "Tak. Asystent może działać w Teams, Slacku, w przeglądarce albo w systemie, z którego korzysta zespół.",
    },
  ],
  relatedArticleSlugs: [
    "ai-w-codziennej-pracy-zespolu",
    "porzadek-w-danych-przed-ai-i-automatyzacja",
    "wdrozenie-ai-w-malej-i-sredniej-firmie",
  ],
  relatedServiceSlugs: [
    "przygotowanie-danych-pod-ai",
    "szkolenia-ai-dla-zespolow",
  ],
  contact: {
    title: "Na jakie pytania ma odpowiadać twój asystent?",
    body: "Opisz, kto najczęściej szuka informacji i gdzie leżą dokumenty. Podpowiemy, od czego zacząć i jak sprawdzić, czy asystent się sprawdzi.",
    highlights: [
      "Ocena, czy wasze dokumenty nadają się dla asystenta",
      "Propozycja pilotażu w jednym dziale",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
