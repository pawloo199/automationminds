import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "automatyzacja-marketingu",
  metaTitle: "Automatyzacja marketingu dla MŚP | Automation Minds",
  metaDescription:
    "Automatyzujemy marketing w małych i średnich firmach: segmentacja kontaktów, kampanie mailowe, raporty z kanałów i przekazanie leadów do sprzedaży.",
  primaryKeyword: "automatyzacja marketingu",
  secondaryKeywords: [
    "marketing automation",
    "automatyzacja e-mail marketingu",
    "segmentacja klientów",
    "raportowanie kampanii",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Automatyzacja procesów",
    title: "Automatyzacja marketingu, która wysyła właściwe treści do właściwych osób",
    lead: "Kontakty z formularzy, webinarów i kampanii trafiają do jednej bazy, dzielą się na grupy i dostają wiadomości dopasowane do tego, czym się interesują. Wyniki z kanałów widzisz w jednym raporcie, a gotowe leady trafiają do sprzedaży.",
    outcomes: [
      "Kontakty z wszystkich kanałów w jednej, uporządkowanej bazie",
      "Kampanie i sekwencje maili uruchamiane automatycznie",
      "Jeden raport wyników zamiast kilku paneli reklamowych",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?w=1920&q=80",
    imageAlt: "Osoba planuje strategię marketingową na kartce przy biurku",
  },
  problems: {
    title: "Gdzie marketing traci czas",
    lead: "Mały zespół marketingu często robi ręcznie to, co w większych firmach dzieje się samo.",
    items: [
      {
        title: "Kontakty w wielu miejscach",
        body: "Lista z webinaru w arkuszu, zapisy z formularza w narzędziu do maili, leady z reklam w panelu Meta.",
      },
      {
        title: "Wszyscy dostają to samo",
        body: "Jeden newsletter do całej bazy. Stały klient dostaje to samo co osoba, która wczoraj pierwszy raz zostawiła maila.",
      },
      {
        title: "Ręczne raporty z kampanii",
        body: "Co miesiąc ktoś zbiera wyniki z Google Ads, Meta, LinkedIn i narzędzia do maili i składa je w arkuszu.",
      },
      {
        title: "Leady giną po drodze do sprzedaży",
        body: "Marketing przekazuje kontakty mailem albo w arkuszu. Sprzedaż nie wie, co ktoś wcześniej oglądał.",
      },
      {
        title: "Nie wiadomo, co działa",
        body: "Trudno powiedzieć, które kanały przynoszą klientów, a które tylko kliknięcia.",
      },
      {
        title: "Powtarzalne zadania",
        body: "Dodawanie kontaktów, tagowanie, wysyłka materiałów po webinarze. Małe zadania zjadają dzień.",
      },
    ],
  },
  scope: {
    title: "Co automatyzujemy w marketingu",
    lead: "Zaczynamy od najbardziej czasochłonnych zadań. Rozbudowane scenariusze dokładamy, gdy podstawy działają.",
    items: [
      {
        title: "Zbieranie kontaktów",
        body: "Formularze, landing page, webinary, reklamy lead ads. Każdy kontakt trafia do jednej bazy ze źródłem.",
      },
      {
        title: "Segmentacja",
        body: "Kontakty dzielą się automatycznie według branży, zainteresowań, etapu i aktywności.",
      },
      {
        title: "Sekwencje maili",
        body: "Wiadomości powitalne, materiały po webinarze, przypomnienia. Wysyłane w odpowiednim momencie.",
      },
      {
        title: "Ocena zaangażowania",
        body: "Punkty za otwarcia, kliknięcia i wizyty na stronie. Najbardziej zainteresowani trafiają do sprzedaży.",
      },
      {
        title: "Przekazanie do sprzedaży",
        body: "Gotowy lead trafia do CRM z historią: co pobrał, na jakim był webinarze, co oglądał.",
      },
      {
        title: "Raport z kanałów",
        body: "Wyniki z reklam, maili i strony w jednym dashboardzie, aktualizowanym automatycznie.",
      },
      {
        title: "Treści z pomocą AI",
        body: "Szkice postów, wariantów maili i opisów na podstawie waszych materiałów, zawsze sprawdzane przez człowieka.",
      },
      {
        title: "Zgody i RODO",
        body: "Zapisywanie zgód marketingowych i automatyczne wypisywanie z list, zgodnie z przepisami.",
      },
    ],
  },
  example: {
    title: "Webinar przed i po automatyzacji",
    lead: "Przykład firmy B2B, która regularnie organizuje webinary dla potencjalnych klientów.",
    rows: [
      {
        label: "Zapisy",
        before: "Lista zapisów eksportowana ręcznie z platformy webinarowej.",
        after: "Każdy zapis od razu trafia do bazy z informacją o temacie webinaru.",
      },
      {
        label: "Przypomnienia",
        before: "Mail przypominający wysyłany ręcznie dzień przed.",
        after: "Automatyczne przypomnienia dzień i godzinę przed startem.",
      },
      {
        label: "Po webinarze",
        before: "Nagranie wysyłane po kilku dniach, jednym mailem do wszystkich.",
        after: "Obecni dostają materiały, nieobecni nagranie, a najbardziej aktywni trafiają do sprzedaży.",
      },
      {
        label: "Przekazanie do sprzedaży",
        before: "Arkusz z listą uczestników wysłany do handlowców.",
        after: "Zadanie w CRM dla handlowca z historią kontaktu.",
      },
      {
        label: "Wyniki",
        before: "Nikt nie wie, ilu uczestników zostało klientami.",
        after: "Raport od zapisu do sprzedaży dla każdego webinaru.",
      },
    ],
    note: "Automatyzacja marketingu działa najlepiej razem z automatyzacją sprzedaży. Wtedy widać drogę klienta od pierwszego kontaktu do faktury.",
  },
  process: {
    title: "Jak wdrażamy automatyzację marketingu",
    lead: "Pracujemy na narzędziach, które macie, i dokładamy nowe tylko wtedy, gdy obecne nie wystarczają.",
    steps: [
      {
        title: "Przegląd kanałów",
        body: "Poznajemy kanały, narzędzia i drogę kontaktu od pierwszego kliknięcia do rozmowy handlowej.",
      },
      {
        title: "Porządek w bazie",
        body: "Łączymy kontakty z różnych źródeł, usuwamy duplikaty i ustalamy segmenty.",
      },
      {
        title: "Pierwsze scenariusze",
        body: "Budujemy sekwencje dla najważniejszych sytuacji, na przykład nowy zapis albo pobrany materiał.",
      },
      {
        title: "Raport",
        body: "Łączymy dane z kanałów w jeden dashboard z definicjami wspólnymi dla marketingu i sprzedaży.",
      },
      {
        title: "Rozwój",
        body: "Na podstawie wyników dopracowujemy segmenty, treści i kolejne scenariusze.",
      },
    ],
  },
  tools: {
    title: "Narzędzia, z którymi pracujemy",
    lead: "Łączymy narzędzia marketingowe z CRM i raportami, żeby dane nie kończyły się na panelu reklamowym.",
    items: [
      { name: "HubSpot", note: "marketing automation i CRM w jednym" },
      { name: "MailerLite, Brevo, GetResponse", note: "kampanie i sekwencje maili" },
      { name: "Meta Ads, Google Ads, LinkedIn", note: "pozyskiwanie leadów z reklam" },
      { name: "Make, Zapier, n8n", note: "łączenie narzędzi i przepływ kontaktów" },
      { name: "Looker Studio, Power BI", note: "raport z wszystkich kanałów" },
      { name: "ChatGPT, Claude", note: "szkice treści i warianty wiadomości" },
    ],
  },
  faq: [
    {
      question: "Czy automatyzacja marketingu ma sens w małej firmie?",
      answer:
        "Tak, szczególnie gdy marketingiem zajmuje się jedna, dwie osoby. Automatyzacja przejmuje powtarzalne zadania i pozwala tym osobom skupić się na treściach i kampaniach.",
    },
    {
      question: "Czy musimy kupić drogie narzędzie?",
      answer:
        "Nie. Wiele scenariuszy da się zbudować na narzędziach, które już macie, i łączyć je przez Make albo n8n. Droższe platformy polecamy dopiero wtedy, gdy są uzasadnione.",
    },
    {
      question: "Jak połączyć marketing ze sprzedażą?",
      answer:
        "Ustalamy wspólną definicję gotowego leada i przekazujemy go do CRM z pełną historią. Dzięki temu handlowiec wie, z kim rozmawia i czym ta osoba się interesowała.",
    },
    {
      question: "Co z RODO i zgodami marketingowymi?",
      answer:
        "Automatyzujemy zapisywanie zgód i wypisywanie z list. Projektujemy przepływy tak, żeby wysyłka trafiała tylko do osób, które się na nią zgodziły.",
    },
    {
      question: "Czy AI będzie pisać nasze treści?",
      answer:
        "AI może przygotować szkice i warianty na podstawie waszych materiałów. Ostateczną wersję zawsze sprawdza i poprawia człowiek, żeby zachować wasz styl.",
    },
  ],
  relatedArticleSlugs: [
    "automatyzacja-obslugi-leadow-sprzedazowych",
    "jak-mierzyc-roi-automatyzacji",
    "rodo-a-automatyzacja-procesow",
  ],
  relatedServiceSlugs: ["automatyzacja-raportow", "chatbot-ai-dla-firmy"],
  contact: {
    title: "Porozmawiajmy o twoim marketingu",
    body: "Opowiedz, skąd przychodzą kontakty i co się z nimi dzieje dalej. Wskażemy, które zadania warto zautomatyzować najpierw.",
    highlights: [
      "Przegląd kanałów i przepływu kontaktów",
      "Propozycja pierwszych scenariuszy na waszych narzędziach",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
