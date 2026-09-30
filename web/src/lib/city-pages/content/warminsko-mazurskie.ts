import type { CityPageContent } from "../types";

/** Siedziby powiatów ziemskich Warmińsko-Mazurskiego oraz Elbląg (bez Olsztyna). */
export const warminskoMazurskiePowiatCities: CityPageContent[] = [
  {
    slug: "elblag",
    name: "Elbląg",
    nameGenitive: "Elbląga",
    nameLocative: "Elblągu",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Elblągu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Elbląga: port, handel, produkcja i logistyka. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Elblągu",
    heroLead:
      "Porządkujemy elbląskie procesy handlowe i produkcyjne, gdy port, magazyn i biuro muszą iść w tym samym tempie.",
    introParagraphs: [
      "Elbląg to ośrodek portowy, handlowy i produkcyjny zachodniej Warmii. Automatyzacja procesów w Elblągu zwykle dotyczy zamówień, awizacji, statusów realizacji i faktur.",
      "Współpracujemy zdalnie. Wybieramy jeden proces o wysokim koszcie ręcznej pracy i wdrażamy go etapami.",
    ],
    localContext:
      "Miasto łączy logistykę, handel B2B i lokalną produkcję. Typowy ból to ręczne potwierdzenia, rozjazd statusów i faktury doganiające wysyłkę.",
    whyHere:
      "W Elblągu automatyzacja broni terminów dostaw i skraca ścieżkę od zamówienia do faktury bez liniowego wzrostu etatów.",
    focusIndustries: [
      {
        title: "Logistyka i port",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń widoczne dla biura i handlu.",
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
        title: "Awizacja",
        body: "Powiadomienia i eskalacje opóźnień zamiast telefonów.",
      },
      {
        title: "Status realizacji",
        body: "Jedna prawda dla hali, biura i klienta bez telefonów między zmianami.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
    ],
    howWeWork:
      "W Elblągu zaczynamy od bezpłatnej konsultacji 30 minut. Potem mapujemy proces o najwyższym koszcie chaosu i wdrażamy zdalnie.",
    faq: [
      {
        id: "elb-1",
        question: "Czy automatyzacja ma sens w firmie logistycznej z Elbląga?",
        answer:
          "Tak. Awizacje i statusy to częsty pierwszy etap z szybkim zwrotem.",
      },
      {
        id: "elb-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "elb-3",
        question: "Od czego zwykle zaczynacie?",
        answer:
          "Od zamówień, faktur albo awizacji, tam gdzie chaos kosztuje najwięcej czasu.",
      },
      {
        id: "elb-4",
        question: "Czy potrzebujemy działu IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["braniewo", "ostroda", "olsztyn", "gdansk", "gdynia"],
  },
  {
    slug: "ostroda",
    name: "Ostróda",
    nameGenitive: "Ostródy",
    nameLocative: "Ostródzie",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Ostródzie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Ostródy: produkcja, handel, turystyka i logistyka. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Ostródzie",
    heroLead:
      "Spinamy ostródzkie procesy produkcyjne i handlowe, gdy lokalny rynek i sezon mnożą dokumenty.",
    introParagraphs: [
      "Ostróda łączy produkcję, handel, turystykę i logistykę na zachodzie regionu. Automatyzacja procesów w Ostródzie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Diagnoza, wąski zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat ostródzki ma zakłady, MŚP i firmy sezonowe. Typowy ból to ręczne potwierdzenia i faktury doganiające realizację.",
    whyHere:
      "W Ostródzie automatyzacja skraca czas od zlecenia do faktury i broni jakości obsługi w sezonie.",
    focusIndustries: [
      {
        title: "Produkcja i meble",
        body: "Statusy zleceń i wyjątki jakościowe widoczne dla biura.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Turystyka i usługi",
        body: "Rezerwacje, oferty i follow-up w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
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
        title: "Zapytanie",
        body: "Kolejka zapytań w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji, bez ręcznego doganiania.",
      },
    ],
    howWeWork:
      "W Ostródzie zaczynamy od procesu o najwyższym koszcie chaosu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "ost-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "ost-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "ost-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "ost-4",
        question: "Czy musicie być w Ostródzie?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["ilawa", "elblag", "olsztyn", "nowe-miasto-lubawskie", "gdansk"],
  },
  {
    slug: "ilawa",
    name: "Iława",
    nameGenitive: "Iławy",
    nameLocative: "Iławie",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Iławie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Iławy: produkcja, handel, turystyka i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Iławie",
    heroLead:
      "Odciążamy iławskie biura, gdy lokalna produkcja i sezon wymagają sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Iława to produkcja, handel, turystyka i usługi nad Jeziorakiem. Automatyzacja procesów w Iławie zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat iławski ma MŚP z cienkim biurem i sezonowym ruchem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Iławie automatyzacja skraca czas od zlecenia do faktury i wyrównuje tempo obsługi w sezonie.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
      },
      {
        title: "Turystyka i usługi",
        body: "Rezerwacje, oferty i follow-up w CRM zamiast ginącej skrzynki.",
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
      "W Iławie zaczynamy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "ila-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "ila-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "ila-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "ila-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["ostroda", "nowe-miasto-lubawskie", "olsztyn", "elblag", "torun"],
  },
  {
    slug: "nowe-miasto-lubawskie",
    name: "Nowe Miasto Lubawskie",
    nameGenitive: "Nowego Miasta Lubawskiego",
    nameLocative: "Nowym Mieście Lubawskim",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Nowym Mieście Lubawskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Nowego Miasta Lubawskiego: handel, produkcja i usługi. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Nowym Mieście Lubawskim",
    heroLead:
      "Pomagamy nowomiejskim firmom uporządkować dokumenty i statusy bez rozrostu biura.",
    introParagraphs: [
      "Nowe Miasto Lubawskie to handel, produkcja i usługi na południowym zachodzie regionu. Automatyzacja procesów w Nowym Mieście Lubawskim często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start.",
    ],
    localContext:
      "Powiat nowomiejski ma MŚP z cienką administracją. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Nowym Mieście Lubawskim automatyzacja skraca czas od zlecenia do faktury.",
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
      "W Nowym Mieście Lubawskim zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "nml-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "nml-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "nml-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "nml-4",
        question: "Czy musicie być w Nowym Mieście Lubawskim?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["ilawa", "ostroda", "dzialdowo", "torun", "olsztyn"],
  },
  {
    slug: "braniewo",
    name: "Braniewo",
    nameGenitive: "Braniewa",
    nameLocative: "Braniewie",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Braniewie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Braniewa: handel przygraniczny, produkcja i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Braniewie",
    heroLead:
      "Spinamy braniewskie procesy, gdy handel przygraniczny i lokalna produkcja wymagają sprawnych dokumentów.",
    introParagraphs: [
      "Braniewo to handel, produkcja i usługi przy północno-zachodniej granicy. Automatyzacja procesów w Braniewie często dotyczy zamówień, awizacji i faktur.",
      "Pracujemy zdalnie. Zakres pod realny wolumen.",
    ],
    localContext:
      "Powiat braniewski ma firmy z cienkim biurem i kontaktami przygranicznymi. Typowy ból to ręczne statusy i dokumenty z opóźnieniem.",
    whyHere:
      "W Braniewie automatyzacja broni tempa obsługi i skraca rozliczenia.",
    focusIndustries: [
      {
        title: "Handel przygraniczny",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń widoczne dla biura i handlu.",
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
        title: "Awizacja",
        body: "Powiadomienia i eskalacje opóźnień zamiast telefonów.",
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
      "W Braniewie startujemy od procesu zamówieniowego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "bra-1",
        question: "Czy automatyzacja ma sens przy handlu przygranicznym?",
        answer:
          "Właśnie wtedy. Status i dokumenty muszą być szybsze niż telefon do biura.",
      },
      {
        id: "bra-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "bra-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "bra-4",
        question: "Czy musicie być w Braniewie?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["elblag", "lidzbark-warminski", "bartoszyce", "olsztyn", "gdansk"],
  },
  {
    slug: "lidzbark-warminski",
    name: "Lidzbark Warmiński",
    nameGenitive: "Lidzbarka Warmińskiego",
    nameLocative: "Lidzbarku Warmińskim",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Lidzbarku Warmińskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Lidzbarka Warmińskiego: handel, produkcja, turystyka i usługi. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Lidzbarku Warmińskim",
    heroLead:
      "Odciążamy lidzbarskie biura, gdy lokalny rynek wymaga sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Lidzbark Warmiński łączy handel, produkcję, turystykę i usługi. Automatyzacja procesów w Lidzbarku Warmińskim zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat lidzbarski ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Lidzbarku Warmińskim automatyzacja skraca czas od zlecenia do faktury.",
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
        title: "Turystyka i usługi",
        body: "Rezerwacje, oferty i follow-up w CRM zamiast ginącej skrzynki.",
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
      "W Lidzbarku Warmińskim zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "lid-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "lid-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "lid-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "lid-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["bartoszyce", "braniewo", "olsztyn", "ketrzyn", "elblag"],
  },
  {
    slug: "bartoszyce",
    name: "Bartoszyce",
    nameGenitive: "Bartoszyc",
    nameLocative: "Bartoszycach",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Bartoszycach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Bartoszyc: handel, produkcja i usługi północnej Warmii. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Bartoszycach",
    heroLead:
      "Spinamy bartoszyckie procesy, gdy odległość od Olsztyna nie może spowalniać biura.",
    introParagraphs: [
      "Bartoszyce to handel, produkcja i usługi na północy Warmii. Automatyzacja procesów w Bartoszycach często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat bartoszycki ma firmy z ograniczonym zapleczem IT. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Bartoszycach automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych.",
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
      "W Bartoszycach startujemy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "bar-1",
        question: "Czy automatyzacja ma sens daleko od Olsztyna?",
        answer:
          "Tym bardziej. Klienci i tak oczekują szybkiego statusu niezależnie od odległości od stolicy regionu.",
      },
      {
        id: "bar-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "bar-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "bar-4",
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
    nearbyCitySlugs: ["lidzbark-warminski", "ketrzyn", "braniewo", "olsztyn", "wegorzewo"],
  },
  {
    slug: "szczytno",
    name: "Szczytno",
    nameGenitive: "Szczytna",
    nameLocative: "Szczytnie",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Szczytnie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Szczytna: produkcja, handel i usługi południowego pierścienia Olsztyna. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Szczytnie",
    heroLead:
      "Porządkujemy szczycieńskie procesy, gdy lokalne MŚP obsługują Olsztyn w jednym tempie dokumentów.",
    introParagraphs: [
      "Szczytno to produkcja, handel i usługi na południe od Olsztyna. Automatyzacja procesów w Szczytnie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Diagnoza, wąski zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat szczycieński żyje bliskością Olsztyna. Typowy ból to ręczne potwierdzenia i faktury doganiające realizację.",
    whyHere:
      "W Szczytnie automatyzacja wyrównuje tempo obsługi wobec klientów z Olsztyna bez liniowego wzrostu etatów.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
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
        title: "Status realizacji",
        body: "Jedna prawda dla hali, biura i klienta bez telefonów między zmianami.",
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
      "W Szczytnie zaczynamy od procesu zamówieniowego lub fakturowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "szc-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "szc-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "szc-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "szc-4",
        question: "Czy musicie być w Szczytnie?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["olsztyn", "nidzica", "mragowo", "pisz", "dzialdowo"],
  },
  {
    slug: "nidzica",
    name: "Nidzica",
    nameGenitive: "Nidzicy",
    nameLocative: "Nidzicy",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Nidzicy | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Nidzicy: handel, produkcja i usługi południowej Warmii. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Nidzicy",
    heroLead:
      "Odciążamy nidzickie biura, gdy lokalny rynek wymaga sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Nidzica łączy handel, produkcję i usługi na południu regionu. Automatyzacja procesów w Nidzicy zwykle dotyczy zamówień, statusów i faktur.",
      "Współpracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat nidzicki ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Nidzicy automatyzacja skraca czas od zlecenia do faktury.",
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
      "W Nidzicy zaczynamy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "nid-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "nid-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "nid-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "nid-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Współpraca zdalna to standard dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["szczytno", "dzialdowo", "olsztyn", "mlawa", "ostroda"],
  },
  {
    slug: "dzialdowo",
    name: "Działdowo",
    nameGenitive: "Działdowa",
    nameLocative: "Działdowie",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Działdowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Działdowa: produkcja, handel i usługi na styku Warmii i Mazowsza. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Działdowie",
    heroLead:
      "Spinamy działdowskie procesy produkcyjne i handlowe, gdy ruch regionalny wymaga sprawnych dokumentów.",
    introParagraphs: [
      "Działdowo to produkcja, handel i usługi na południowym styku regionu z Mazowszem. Automatyzacja procesów w Działdowie często dotyczy zamówień, awizacji i faktur.",
      "Pracujemy zdalnie. Diagnoza, zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat działdowski łączy zakłady z firmami handlowymi. Typowy ból to ręczne statusy i dokumenty wysyłkowe z opóźnieniem.",
    whyHere:
      "W Działdowie automatyzacja broni terminów dostaw i skraca ścieżkę od zamówienia do faktury.",
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
        title: "Awizacja",
        body: "Powiadomienia i eskalacje opóźnień zamiast telefonów.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
      {
        title: "Raport",
        body: "KPI zbierane automatycznie, bez ręcznej tabeli.",
      },
    ],
    howWeWork:
      "W Działdowie zaczynamy od procesu zamówieniowego lub wysyłkowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "dzi-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "dzi-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Integrujemy się z tym, co już macie, jeśli jest bezpieczny dostęp do danych.",
      },
      {
        id: "dzi-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "dzi-4",
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
    nearbyCitySlugs: ["nidzica", "nowe-miasto-lubawskie", "mlawa", "ciechanow", "olsztyn"],
  },
  {
    slug: "mragowo",
    name: "Mrągowo",
    nameGenitive: "Mrągowa",
    nameLocative: "Mrągowie",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Mrągowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Mrągowa: turystyka, handel i usługi Mazur. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Mrągowie",
    heroLead:
      "Porządkujemy mrągowskie procesy, gdy sezon turystyczny mnoży dokumenty w cienkim biurze.",
    introParagraphs: [
      "Mrągowo łączy turystykę, handel i usługi w centrum Mazur. Automatyzacja procesów w Mrągowie często dotyczy rezerwacji, zapytań, zamówień i faktur.",
      "Pracujemy zdalnie. Prosty zakres dopasowany do małego zespołu i sezonowego ruchu.",
    ],
    localContext:
      "Miasto i powiat mają firmy wrażliwe na sezon. Typowy ból to ginące zapytania, ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Mrągowie automatyzacja wyrównuje tempo obsługi w sezonie i chroni jakość kontaktu z gośćmi oraz kontrahentami.",
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
      "W Mrągowie startujemy od jednego obiegu, zwykle zapytań lub faktur. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "mra-1",
        question: "Czy automatyzacja ma sens w sezonowej firmie turystycznej?",
        answer:
          "Właśnie wtedy. W szczycie nie macie czasu na ręczne doganianie zapytań.",
      },
      {
        id: "mra-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "mra-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "mra-4",
        question: "Czy musicie być w Mrągowie?",
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
    nearbyCitySlugs: ["gizycko", "szczytno", "ketrzyn", "pisz", "olsztyn"],
  },
  {
    slug: "ketrzyn",
    name: "Kętrzyn",
    nameGenitive: "Kętrzyna",
    nameLocative: "Kętrzynie",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Kętrzynie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kętrzyna: handel, produkcja i usługi północnego pierścienia Olsztyna. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Kętrzynie",
    heroLead:
      "Odciążamy kętrzyńskie biura, gdy lokalne MŚP potrzebują sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Kętrzyn to handel, produkcja i usługi na północny wschód od Olsztyna. Automatyzacja procesów w Kętrzynie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat kętrzyński ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Kętrzynie automatyzacja skraca czas od zlecenia do faktury.",
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
      "W Kętrzynie zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "ket-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "ket-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "ket-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "ket-4",
        question: "Czy musicie być w Kętrzynie?",
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
    nearbyCitySlugs: ["mragowo", "bartoszyce", "gizycko", "wegorzewo", "olsztyn"],
  },
  {
    slug: "gizycko",
    name: "Giżycko",
    nameGenitive: "Giżycka",
    nameLocative: "Giżycku",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Giżycku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Giżycka: turystyka, żegluga, handel i usługi Mazur. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Giżycku",
    heroLead:
      "Porządkujemy giżyckie procesy, gdy sezon mazurski mnoży zapytania, rezerwacje i dokumenty.",
    introParagraphs: [
      "Giżycko to turystyka, żegluga, handel i usługi w sercu Mazur. Automatyzacja procesów w Giżycku często dotyczy rezerwacji, zapytań, zamówień i faktur.",
      "Pracujemy zdalnie. Prosty zakres dopasowany do małego zespołu i sezonowego ruchu.",
    ],
    localContext:
      "Miasto i powiat mają firmy wrażliwe na sezon. Typowy ból to ginące zapytania, ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Giżycku automatyzacja wyrównuje tempo obsługi w sezonie i chroni jakość kontaktu z gośćmi oraz kontrahentami.",
    focusIndustries: [
      {
        title: "Turystyka i żegluga",
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
      "W Giżycku startujemy od jednego obiegu, zwykle zapytań lub faktur. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "giz-1",
        question: "Czy automatyzacja ma sens w sezonowej firmie turystycznej?",
        answer:
          "Właśnie wtedy. W szczycie nie macie czasu na ręczne doganianie zapytań.",
      },
      {
        id: "giz-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "giz-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "giz-4",
        question: "Czy musicie być w Giżycku?",
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
    nearbyCitySlugs: ["mragowo", "wegorzewo", "pisz", "elk", "olsztyn"],
  },
  {
    slug: "pisz",
    name: "Pisz",
    nameGenitive: "Pisza",
    nameLocative: "Piszu",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Piszu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Pisza: turystyka, handel, produkcja i usługi Mazur. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Piszu",
    heroLead:
      "Spinamy piskie procesy, gdy sezon i lokalny handel wymagają sprawnych dokumentów.",
    introParagraphs: [
      "Pisz łączy turystykę, handel, produkcję i usługi na Mazurach. Automatyzacja procesów w Piszu zwykle dotyczy zamówień, zapytań, statusów i faktur.",
      "Współpracujemy zdalnie. Wąski start, mierzalny efekt.",
    ],
    localContext:
      "Powiat piski ma MŚP z cienkim biurem oraz sezonowym ruchem. Typowy ból to ręczne potwierdzenia i faktury doganiające realizację.",
    whyHere:
      "W Piszu automatyzacja skraca czas od zlecenia do faktury i broni jakości obsługi w sezonie.",
    focusIndustries: [
      {
        title: "Turystyka i usługi",
        body: "Rezerwacje, oferty i follow-up w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia w przewidywalnym obiegu.",
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
      "W Piszu zaczynamy od procesu o najwyższym koszcie chaosu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "pis-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "pis-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "pis-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "pis-4",
        question: "Czy musicie być w Piszu?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["gizycko", "mragowo", "elk", "szczytno", "olsztyn"],
  },
  {
    slug: "elk",
    name: "Ełk",
    nameGenitive: "Ełku",
    nameLocative: "Ełku",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Ełku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Ełku: produkcja, meble, handel i logistyka wschodnich Mazur. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Ełku",
    heroLead:
      "Porządkujemy ełckie procesy produkcyjne, gdy hala, magazyn i biuro muszą mówić tym samym językiem.",
    introParagraphs: [
      "Ełk to silny ośrodek produkcyjny i handlowy wschodnich Mazur z zapleczem meblarskim i logistycznym. Automatyzacja procesów w Ełku zwykle dotyczy statusów zleceń, awizacji i dokumentów między zmianami a biurem.",
      "Współpracujemy zdalnie: mapujemy krytyczny przepływ, wdrażamy wąski zakres i szkolimy osoby odpowiedzialne za wyjątki.",
    ],
    localContext:
      "Region łączy produkcję z lokalnymi MŚP. Typowy ból to rozjazd między raportem zmianowym a tym, co widzi planowanie albo księgowość.",
    whyHere:
      "W Ełku automatyzacja opłaca się, gdy skraca reakcję na odchylenia i daje jeden wiarygodny obraz operacji.",
    focusIndustries: [
      {
        title: "Produkcja i meble",
        body: "Statusy, protokoły i obiegi zatwierdzeń w przewidywalnym torze.",
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
        body: "Status widoczny dla biura i handlu bez telefonów na halę.",
      },
      {
        title: "Awizacja",
        body: "Powiadomienia i eskalacje opóźnień zamiast telefonów.",
      },
      {
        title: "Faktura po wysyłce",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
    ],
    howWeWork:
      "Z firmami z Ełku startujemy od procesu krytycznego dla ciągłości. Wdrażamy zdalnie po konsultacji 30 minut.",
    faq: [
      {
        id: "elk-1",
        question: "Czy automatyzacja ma sens tylko dla dużych zakładów?",
        answer:
          "Nie. Często pracujemy też z mniejszymi dostawcami i firmami usługowymi wokół przemysłu.",
      },
      {
        id: "elk-2",
        question: "Czy musicie być na terenie zakładu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "elk-3",
        question: "Jak łączycie się z ERP?",
        answer:
          "Przez API, pliki wymiany lub integratory, zależnie od Waszego stacku.",
      },
      {
        id: "elk-4",
        question: "Ile trwa pierwszy etap?",
        answer:
          "Prostsze przepływy często w kilka tygodni po krótkiej diagnozie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["olecko", "pisz", "gizycko", "suwalki", "olsztyn"],
  },
  {
    slug: "olecko",
    name: "Olecko",
    nameGenitive: "Olecka",
    nameLocative: "Olecku",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Olecku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Olecka: handel, produkcja i usługi wschodnich Mazur. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Olecku",
    heroLead:
      "Odciążamy oleckie biura, gdy lokalne MŚP potrzebują sprawnych statusów bez rozrostu etatów.",
    introParagraphs: [
      "Olecko łączy handel, produkcję i usługi na wschodzie Mazur. Automatyzacja procesów w Olecku często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat olecki ma MŚP z cienkim biurem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Olecku automatyzacja skraca czas od zlecenia do faktury.",
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
      "W Olecku zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "ole-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "ole-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "ole-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "ole-4",
        question: "Czy musicie być w Olecku?",
        answer:
          "Nie. Standardem jest współpraca zdalna dla całej Polski, także dla Waszego zespołu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["elk", "goldap", "suwalki", "gizycko", "olsztyn"],
  },
  {
    slug: "goldap",
    name: "Gołdap",
    nameGenitive: "Gołdapi",
    nameLocative: "Gołdapi",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Gołdapi | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Gołdapi: handel przygraniczny, turystyka i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Gołdapi",
    heroLead:
      "Spinamy gołdapskie procesy, gdy handel przygraniczny i sezon nie mogą spowalniać biura.",
    introParagraphs: [
      "Gołdap to handel przygraniczny, turystyka i usługi na północno-wschodnim krańcu regionu. Automatyzacja procesów w Gołdapi często dotyczy zamówień, zapytań i faktur.",
      "Pracujemy zdalnie. Prosty zakres dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat gołdapski ma firmy z ograniczonym zapleczem IT. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Gołdapi automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych i przygranicznych.",
    focusIndustries: [
      {
        title: "Handel przygraniczny",
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
      "W Gołdapi startujemy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "gol-1",
        question: "Czy automatyzacja ma sens przy handlu przygranicznym?",
        answer:
          "Właśnie wtedy. Status i dokumenty muszą być szybsze niż telefon do biura.",
      },
      {
        id: "gol-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "gol-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "gol-4",
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
    nearbyCitySlugs: ["olecko", "wegorzewo", "suwalki", "elk", "olsztyn"],
  },
  {
    slug: "wegorzewo",
    name: "Węgorzewo",
    nameGenitive: "Węgorzewa",
    nameLocative: "Węgorzewie",
    voivodeship: "warmińsko-mazurskie",
    regionCluster: "warmia",
    metaTitle: "Automatyzacja procesów w Węgorzewie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Węgorzewa: turystyka, handel i usługi północnych Mazur. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Węgorzewie",
    heroLead:
      "Porządkujemy węgorzewskie procesy, gdy sezon i odległość od Olsztyna nie mogą spowalniać biura.",
    introParagraphs: [
      "Węgorzewo łączy turystykę, handel i usługi na północnych Mazurach. Automatyzacja procesów w Węgorzewie często dotyczy rezerwacji, zapytań, zamówień i faktur.",
      "Pracujemy zdalnie. Prosty zakres dopasowany do małego zespołu i sezonowego ruchu.",
    ],
    localContext:
      "Powiat węgorzewski ma firmy z ograniczonym zapleczem IT i wyraźnym sezonem. Typowy ból to ręczne potwierdzenia, ginące zapytania i faktury z opóźnieniem.",
    whyHere:
      "W Węgorzewie automatyzacja wyrównuje tempo obsługi w sezonie i chroni jakość kontaktu z gośćmi oraz kontrahentami.",
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
      "W Węgorzewie startujemy od jednego obiegu, zwykle zapytań lub faktur. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "weg-1",
        question: "Czy automatyzacja ma sens w sezonowej firmie turystycznej?",
        answer:
          "Właśnie wtedy. W szczycie nie macie czasu na ręczne doganianie zapytań.",
      },
      {
        id: "weg-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "weg-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "weg-4",
        question: "Czy musicie być w Węgorzewie?",
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
    nearbyCitySlugs: ["gizycko", "goldap", "ketrzyn", "bartoszyce", "olsztyn"],
  },
];
