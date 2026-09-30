import type { CityPageContent } from "../types";

/** Siedziby powiatów ziemskich Podlaskiego oraz Łomża (bez Białegostoku i Suwałk). */
export const podlaskiePowiatCities: CityPageContent[] = [
  {
    slug: "lomza",
    name: "Łomża",
    nameGenitive: "Łomży",
    nameLocative: "Łomży",
    voivodeship: "podlaskie",
    regionCluster: "podlasie",
    metaTitle: "Automatyzacja procesów w Łomży | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Łomży: handel, produkcja, usługi i back-office. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Łomży",
    heroLead:
      "Odciążamy łomżyńskie biura, gdy lokalny handel i produkcja wymagają sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Łomża to ośrodek handlu, produkcji i usług w zachodniej części Podlasia. Automatyzacja procesów w Łomży zwykle dotyczy zamówień, statusów realizacji i faktur.",
      "Współpracujemy zdalnie. Wybieramy jeden proces o wysokim koszcie ręcznej pracy i wdrażamy go etapami.",
    ],
    localContext:
      "Miasto łączy lokalne MŚP z ruchem w stronę Białegostoku i Mazowsza. Typowy ból to ręczne potwierdzenia, rozjazd statusów i faktury doganiające realizację.",
    whyHere:
      "W Łomży automatyzacja skraca czas od zlecenia do faktury i wyrównuje tempo obsługi wobec klientów regionalnych.",
    focusIndustries: [
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla handlu i magazynu.",
      },
      {
        title: "Status realizacji",
        body: "Jedna prawda dla hali, biura i klienta bez telefonów między zmianami.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Raport sprzedaży",
        body: "Dane z CRM i ERP bez ręcznego sklejania.",
      },
    ],
    howWeWork:
      "W Łomży zaczynamy od bezpłatnej konsultacji 30 minut. Potem mapujemy proces o najwyższym koszcie chaosu i wdrażamy zdalnie.",
    faq: [
      {
        id: "lom-1",
        question: "Czy automatyzacja ma sens w średniej firmie z Łomży?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "lom-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "lom-3",
        question: "Od czego zwykle zaczynacie?",
        answer:
          "Od zamówień, faktur albo statusów realizacji, tam gdzie chaos kosztuje najwięcej czasu.",
      },
      {
        id: "lom-4",
        question: "Czy potrzebujemy działu IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["zambrow", "kolno", "wysokie-mazowieckie", "bialystok", "warszawa"],
  },
  {
    slug: "augustow",
    name: "Augustów",
    nameGenitive: "Augustowa",
    nameLocative: "Augustowie",
    voivodeship: "podlaskie",
    regionCluster: "podlasie",
    metaTitle: "Automatyzacja procesów w Augustowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Augustowa: turystyka, handel i usługi Suwalszczyzny. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Augustowie",
    heroLead:
      "Porządkujemy augustowskie procesy, gdy sezon i ruch turystyczny mnożą dokumenty w cienkim biurze.",
    introParagraphs: [
      "Augustów łączy turystykę, handel i usługi na Suwalszczyźnie. Automatyzacja procesów w Augustowie często dotyczy rezerwacji, zapytań, zamówień i faktur.",
      "Pracujemy zdalnie. Prosty zakres dopasowany do małego zespołu i sezonowego ruchu.",
    ],
    localContext:
      "Miasto i powiat mają firmy wrażliwe na sezon. Typowy ból to ginące zapytania, ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Augustowie automatyzacja wyrównuje tempo obsługi w sezonie i chroni jakość kontaktu z gośćmi oraz kontrahentami.",
    focusIndustries: [
      {
        title: "Turystyka i noclegi",
        body: "Rezerwacje, oferty i follow-up w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Handel i usługi lokalne",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Gastronomia i wydarzenia",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zapytanie i rezerwacja",
        body: "Kolejka w CRM z przypomnieniem o follow-upie.",
      },
      {
        title: "Potwierdzenie usługi",
        body: "Status widoczny dla zespołu bez telefonów między osobami.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport sezonowy",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Augustowie startujemy od jednego obiegu, zwykle zapytań lub faktur. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "aug-1",
        question: "Czy automatyzacja ma sens w sezonowej firmie turystycznej?",
        answer:
          "Właśnie wtedy. W szczycie nie macie czasu na ręczne doganianie zapytań.",
      },
      {
        id: "aug-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "aug-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "aug-4",
        question: "Czy musicie być w Augustowie?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["suwalki", "sejny", "grajewo", "bialystok", "olsztyn"],
  },
  {
    slug: "sejny",
    name: "Sejny",
    nameGenitive: "Sejn",
    nameLocative: "Sejnach",
    voivodeship: "podlaskie",
    regionCluster: "podlasie",
    metaTitle: "Automatyzacja procesów w Sejnach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Sejn: handel przygraniczny, turystyka i usługi. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Sejnach",
    heroLead:
      "Spinamy sejneńskie procesy, gdy odległość od Białegostoku nie może spowalniać biura.",
    introParagraphs: [
      "Sejny to handel, turystyka i usługi przy północno-wschodniej granicy. Automatyzacja procesów w Sejnach często dotyczy zamówień, zapytań i faktur.",
      "Współpracujemy zdalnie. Prosty zakres dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat sejneński ma firmy z ograniczonym zapleczem IT. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Sejnach automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych i przygranicznych.",
    focusIndustries: [
      {
        title: "Handel lokalny i przygraniczny",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Turystyka i usługi",
        body: "Rezerwacje, oferty i follow-up w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Administracja",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zapytanie",
        body: "Kolejka zapytań w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Sejnach startujemy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "sej-1",
        question: "Czy automatyzacja ma sens daleko od Białegostoku?",
        answer:
          "Tym bardziej. Klienci i tak oczekują szybkiego statusu niezależnie od odległości od stolicy regionu.",
      },
      {
        id: "sej-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "sej-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "sej-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["suwalki", "augustow", "grajewo", "bialystok", "olsztyn"],
  },
  {
    slug: "grajewo",
    name: "Grajewo",
    nameGenitive: "Grajewa",
    nameLocative: "Grajewie",
    voivodeship: "podlaskie",
    regionCluster: "podlasie",
    metaTitle: "Automatyzacja procesów w Grajewie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Grajewa: produkcja spożywcza, handel i logistyka. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Grajewie",
    heroLead:
      "Porządkujemy grajewskie procesy produkcyjne, gdy dokumenty jakości i zamówienia nie mogą tonąć w mailach.",
    introParagraphs: [
      "Grajewo łączy produkcję, często spożywczą, z handlem i logistyką na północy Podlasia. Automatyzacja procesów w Grajewie zwykle dotyczy partii, zamówień i faktur.",
      "Współpracujemy zdalnie. Zakres pod realne wymagania dokumentacyjne.",
    ],
    localContext:
      "Powiat grajewski ma zakłady i MŚP z presją na jakość danych. Typowy ból to ręczne protokoły i faktury doganiające wysyłkę.",
    whyHere:
      "W Grajewie automatyzacja chroni jakość dokumentacji i skraca cykl od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja spożywcza",
        body: "Partie, protokoły i dokumenty wysyłkowe w przewidywalnym torze.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zamówienia",
        body: "Formularz i potwierdzenie widoczne dla magazynu.",
      },
      {
        title: "Protokół jakości",
        body: "Terminy, role i archiwum zamiast ginących maili.",
      },
      {
        title: "Status produkcji",
        body: "Status widoczny dla handlu bez telefonów na halę.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
    ],
    howWeWork:
      "W Grajewie zaczynamy od procesu dokumentacyjnego lub zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "gra-1",
        question: "Czy automatyzujecie obiegi jakości?",
        answer:
          "W zakresie terminów, ról i archiwum. Nie zastępujemy laboratorium, porządkujemy dokumenty.",
      },
      {
        id: "gra-2",
        question: "Czy to dla średnich zakładów?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "gra-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "gra-4",
        question: "Czy musicie być w Grajewie?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["augustow", "kolno", "suwalki", "lomza", "bialystok"],
  },
  {
    slug: "kolno",
    name: "Kolno",
    nameGenitive: "Kolna",
    nameLocative: "Kolnie",
    voivodeship: "podlaskie",
    regionCluster: "podlasie",
    metaTitle: "Automatyzacja procesów w Kolnie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kolna: handel, produkcja i usługi północno-zachodniego Podlasia. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Kolnie",
    heroLead:
      "Odciążamy kolneńskie biura, gdy lokalne MŚP potrzebują sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Kolno to handel, produkcja i usługi na północnym zachodzie Podlasia. Automatyzacja procesów w Kolnie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat kolneński ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Kolnie automatyzacja skraca czas od zlecenia do faktury.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Status",
        body: "Status widoczny dla biura bez telefonów na halę.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Kolnie zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "kol-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "kol-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "kol-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "kol-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["lomza", "grajewo", "zambrow", "bialystok", "olsztyn"],
  },
  {
    slug: "sokolka",
    name: "Sokółka",
    nameGenitive: "Sokółki",
    nameLocative: "Sokółce",
    voivodeship: "podlaskie",
    regionCluster: "podlasie",
    metaTitle: "Automatyzacja procesów w Sokółce | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Sokółki: produkcja, handel i usługi północnego pierścienia Białegostoku. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Sokółce",
    heroLead:
      "Spinamy sokólskie procesy produkcyjne i handlowe, gdy bliskość Białegostoku podnosi tempo dokumentów.",
    introParagraphs: [
      "Sokółka to produkcja, handel i usługi na północ od Białegostoku. Automatyzacja procesów w Sokółce zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Wąski start, mierzalny efekt.",
    ],
    localContext:
      "Powiat sokólski żyje bliskością Białegostoku i lokalną produkcją. Typowy ból to ręczne potwierdzenia i faktury doganiające wysyłkę.",
    whyHere:
      "W Sokółce automatyzacja wyrównuje tempo obsługi wobec klientów z Białegostoku bez liniowego wzrostu etatów.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla handlu i magazynu.",
      },
      {
        title: "Status realizacji",
        body: "Jedna prawda dla hali, biura i klienta bez telefonów między zmianami.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Sokółce zaczynamy od procesu zamówieniowego lub fakturowego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "sok-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "sok-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "sok-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "sok-4",
        question: "Czy musicie być w Sokółce?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["bialystok", "monki", "augustow", "hajnowka", "suwalki"],
  },
  {
    slug: "monki",
    name: "Mońki",
    nameGenitive: "Moniek",
    nameLocative: "Mońkach",
    voivodeship: "podlaskie",
    regionCluster: "podlasie",
    metaTitle: "Automatyzacja procesów w Mońkach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Moniek: handel, produkcja i usługi północno-zachodniego pierścienia Białegostoku. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Mońkach",
    heroLead:
      "Odciążamy monieckie biura, gdy lokalny rynek wymaga sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Mońki łączą handel, produkcję i usługi na północny zachód od Białegostoku. Automatyzacja procesów w Mońkach często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat moniecki ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Mońkach automatyzacja skraca czas od zlecenia do faktury.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Status",
        body: "Status widoczny dla biura bez telefonów na halę.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Mońkach zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "mon-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "mon-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "mon-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "mon-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["bialystok", "sokolka", "grajewo", "lomza", "wysokie-mazowieckie"],
  },
  {
    slug: "bielsk-podlaski",
    name: "Bielsk Podlaski",
    nameGenitive: "Bielska Podlaskiego",
    nameLocative: "Bielsku Podlaskim",
    voivodeship: "podlaskie",
    regionCluster: "podlasie",
    metaTitle: "Automatyzacja procesów w Bielsku Podlaskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Bielska Podlaskiego: produkcja, handel i usługi południowego pierścienia Białegostoku. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Bielsku Podlaskim",
    heroLead:
      "Porządkujemy bielskie procesy produkcyjne i handlowe, gdy dokumenty muszą nadążyć za operacjami.",
    introParagraphs: [
      "Bielsk Podlaski to produkcja, handel i usługi na południe od Białegostoku. Automatyzacja procesów w Bielsku Podlaskim zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Diagnoza, wąski zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat bielski ma zakłady i MŚP z cienkim back-office. Typowy ból to ręczne statusy i dokumenty wysyłkowe z opóźnieniem.",
    whyHere:
      "W Bielsku Podlaskim automatyzacja broni terminów dostaw i skraca rozliczenia.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla handlu i magazynu.",
      },
      {
        title: "Status produkcji",
        body: "Status widoczny dla handlu bez telefonów na halę.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Bielsku Podlaskim startujemy od procesu zamówieniowego lub produkcyjnego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "bie-1",
        question: "Czy to dla firm produkcyjnych?",
        answer:
          "Tak. Statusy i awizacje to częsty pierwszy etap u firm produkcyjnych.",
      },
      {
        id: "bie-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "bie-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "bie-4",
        question: "Czy musicie być w Bielsku Podlaskim?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["bialystok", "hajnowka", "siemiatycze", "wysokie-mazowieckie", "biala-podlaska"],
  },
  {
    slug: "hajnowka",
    name: "Hajnówka",
    nameGenitive: "Hajnówki",
    nameLocative: "Hajnówce",
    voivodeship: "podlaskie",
    regionCluster: "podlasie",
    metaTitle: "Automatyzacja procesów w Hajnówce | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Hajnówki: przemysł drzewny, produkcja, handel i usługi. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Hajnówce",
    heroLead:
      "Spinamy hajnowskie procesy produkcyjne, gdy specyfikacje zamówień i dokumenty nie mogą ginąć w mailach.",
    introParagraphs: [
      "Hajnówka kojarzy się z przemysłem drzewnym, produkcją i lokalnym handlem. Automatyzacja procesów w Hajnówce zwykle dotyczy zamówień, statusów produkcji i fakturowania.",
      "Współpracujemy zdalnie. Zakres pod realne zlecenia.",
    ],
    localContext:
      "Powiat hajnowski łączy produkcję z handlem B2B. Typowy ból to ręczne przekazywanie specyfikacji i faktury doganiające odbiór.",
    whyHere:
      "W Hajnówce automatyzacja zmniejsza kosztowne błędy w zamówieniach i skraca czas od protokołu do faktury.",
    focusIndustries: [
      {
        title: "Przemysł drzewny i produkcja",
        body: "Specyfikacje zamówień i statusy produkcji w jednym torze.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zamówienia ze specyfikacją",
        body: "Formularz i walidacja zamiast domyślania z maila.",
      },
      {
        title: "Status produkcji",
        body: "Status widoczny dla handlu i klienta bez telefonów na halę.",
      },
      {
        title: "Protokół odbioru",
        body: "Checklist przed fakturą zamiast ginących załączników.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po protokole odbioru, bez ręcznego doganiania.",
      },
    ],
    howWeWork:
      "W Hajnówce zaczynamy od procesu przyjęcia zamówienia. Wdrażamy zdalnie i szkolimy biuro oraz produkcję.",
    faq: [
      {
        id: "haj-1",
        question: "Czy automatyzujecie zamówienia ze specyfikacją?",
        answer:
          "Tak. To częsty pierwszy etap u zakładów produkcyjnych z indywidualnymi zleceniami.",
      },
      {
        id: "haj-2",
        question: "Czy to dla małych zakładów?",
        answer:
          "Tak. Projektujemy pod prostotę utrzymania, także w mniejszym zespole.",
      },
      {
        id: "haj-3",
        question: "Czy musicie być w Hajnówce?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
      {
        id: "haj-4",
        question: "Jak zacząć?",
        answer:
          "Bezpłatna konsultacja 30 minut. Potem mapujemy jeden proces o wysokim koszcie chaosu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["bielsk-podlaski", "bialystok", "sokolka", "siemiatycze", "biala-podlaska"],
  },
  {
    slug: "wysokie-mazowieckie",
    name: "Wysokie Mazowieckie",
    nameGenitive: "Wysokiego Mazowieckiego",
    nameLocative: "Wysokiem Mazowieckim",
    voivodeship: "podlaskie",
    regionCluster: "podlasie",
    metaTitle: "Automatyzacja procesów w Wysokiem Mazowieckim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wysokiego Mazowieckiego: produkcja spożywcza, handel i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Wysokiem Mazowieckim",
    heroLead:
      "Porządkujemy wysokomazowieckie procesy produkcyjne, gdy dokumenty jakości i zamówienia nie mogą tonąć w mailach.",
    introParagraphs: [
      "Wysokie Mazowieckie łączy produkcję, często spożywczą, z handlem i usługami. Automatyzacja procesów w Wysokiem Mazowieckim zwykle dotyczy partii, zamówień i faktur.",
      "Współpracujemy zdalnie. Zakres pod realne wymagania dokumentacyjne.",
    ],
    localContext:
      "Powiat wysokomazowiecki ma zakłady i MŚP z presją na jakość danych. Typowy ból to ręczne protokoły i faktury doganiające wysyłkę.",
    whyHere:
      "W Wysokiem Mazowieckim automatyzacja chroni jakość dokumentacji i skraca cykl od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja spożywcza",
        body: "Partie, protokoły i dokumenty wysyłkowe w przewidywalnym torze.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zamówienia",
        body: "Formularz i potwierdzenie widoczne dla magazynu.",
      },
      {
        title: "Protokół jakości",
        body: "Terminy, role i archiwum zamiast ginących maili.",
      },
      {
        title: "Status produkcji",
        body: "Status widoczny dla handlu bez telefonów na halę.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
    ],
    howWeWork:
      "W Wysokiem Mazowieckim zaczynamy od procesu dokumentacyjnego lub zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "wys-1",
        question: "Czy automatyzujecie obiegi jakości?",
        answer:
          "W zakresie terminów, ról i archiwum. Nie zastępujemy laboratorium, porządkujemy dokumenty.",
      },
      {
        id: "wys-2",
        question: "Czy to dla średnich zakładów?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "wys-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "wys-4",
        question: "Czy musicie być w Wysokiem Mazowieckim?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["zambrow", "lomza", "bialystok", "bielsk-podlaski", "siedlce"],
  },
  {
    slug: "zambrow",
    name: "Zambrów",
    nameGenitive: "Zambrowa",
    nameLocative: "Zambrowie",
    voivodeship: "podlaskie",
    regionCluster: "podlasie",
    metaTitle: "Automatyzacja procesów w Zambrowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Zambrowa: handel, produkcja i usługi między Łomżą a Białymstokiem. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Zambrowie",
    heroLead:
      "Odciążamy zambrowskie biura, gdy lokalny rynek wymaga sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Zambrów łączy handel, produkcję i usługi między Łomżą a Białymstokiem. Automatyzacja procesów w Zambrowie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat zambrowski ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Zambrowie automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę niedomkniętych spraw.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Status",
        body: "Status widoczny dla biura bez telefonów na halę.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Zambrowie zaczynamy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "zam-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "zam-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "zam-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "zam-4",
        question: "Czy musicie być w Zambrowie?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["lomza", "wysokie-mazowieckie", "kolno", "bialystok", "warszawa"],
  },
  {
    slug: "siemiatycze",
    name: "Siemiatycze",
    nameGenitive: "Siemiatycz",
    nameLocative: "Siemiatyczach",
    voivodeship: "podlaskie",
    regionCluster: "podlasie",
    metaTitle: "Automatyzacja procesów w Siemiatyczach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Siemiatycz: handel, produkcja i usługi południowego Podlasia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Siemiatyczach",
    heroLead:
      "Spinamy siemiatyckie procesy, gdy odległość od Białegostoku nie może spowalniać biura.",
    introParagraphs: [
      "Siemiatycze to handel, produkcja i usługi na południu Podlasia. Automatyzacja procesów w Siemiatyczach często dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty zakres dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat siemiatycki ma firmy z ograniczonym zapleczem IT i kontaktami w stronę Białej Podlaskiej. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Siemiatyczach automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia bez ginących maili.",
      },
      {
        title: "Administracja",
        body: "Faktury, akceptacje i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zapytanie",
        body: "Kolejka zapytań w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Siemiatyczach startujemy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "sie-1",
        question: "Czy automatyzacja ma sens daleko od Białegostoku?",
        answer:
          "Tym bardziej. Klienci i tak oczekują szybkiego statusu niezależnie od odległości od stolicy regionu.",
      },
      {
        id: "sie-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "sie-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "sie-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["bielsk-podlaski", "hajnowka", "biala-podlaska", "siedlce", "bialystok"],
  },
];
