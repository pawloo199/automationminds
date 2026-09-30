import type { CityPageContent } from "../types";

/** Siedziby powiatów ziemskich Pomorskiego oraz Sopot i Słupsk (bez Gdańska i Gdyni). */
export const pomorskiePowiatCities: CityPageContent[] = [
  {
    slug: "sopot",
    name: "Sopot",
    nameGenitive: "Sopotu",
    nameLocative: "Sopotcie",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Sopotcie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Sopotu: usługi, turystyka, handel i B2B w Trójmieście. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Sopotcie",
    heroLead:
      "Porządkujemy sopockie procesy usługowe i handlowe, gdy sezon i klienci z Trójmiasta nie czekają na biuro.",
    introParagraphs: [
      "Sopot to usługi, turystyka, handel i firmy B2B w sercu Trójmiasta. Automatyzacja procesów w Sopocie zwykle dotyczy rezerwacji, zapytań, faktur i follow-upu, tam gdzie sezonowy skok wolumenu wykańcza ręczny model.",
      "Współpracujemy zdalnie. Wybieramy jeden proces o wysokim koszcie chaosu i wdrażamy go etapami, z instrukcją dla zespołu.",
    ],
    localContext:
      "Sopot żyje sezonem i bliskością Gdańska oraz Gdyni. Typowy ból to ręczne potwierdzenia rezerwacji, rozproszone skrzynki i faktury, które doganiają realizację dopiero po szczycie.",
    whyHere:
      "W Sopocie automatyzacja broni jakości obsługi przy skokach wolumenu, bez liniowego wzrostu etatów biurowych.",
    focusIndustries: [
      {
        title: "Turystyka i hospitality",
        body: "Rezerwacje, potwierdzenia i dokumenty dla gości.",
      },
      {
        title: "Usługi lokalne B2B",
        body: "Lead, oferta i follow-up bez ginących maili.",
      },
      {
        title: "Handel i retail",
        body: "Zamówienia, stany i statusy dostaw.",
      },
      {
        title: "Back-office",
        body: "Faktury, akceptacje i archiwum w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zapytania",
        body: "Kolejka w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Rezerwacja i potwierdzenie",
        body: "Automatyczne powiadomienia i checklista.",
      },
      {
        title: "Faktura po realizacji",
        body: "Trigger po kompletnym statusie w przewidywalnym obiegu.",
      },
      {
        title: "Przypomnienie follow-upu",
        body: "Reguły zamiast pamięci handlowca w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Sopocie zaczynamy od bezpłatnej konsultacji 30 minut. Potem mapujemy proces sezonowy lub fakturowy i wdrażamy zdalnie.",
    faq: [
      {
        id: "sop-1",
        question: "Czy automatyzacja ma sens przy sezonowości?",
        answer:
          "Właśnie wtedy. Skok wolumenu najszybciej demaskuje ręczny model.",
      },
      {
        id: "sop-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy tylko gdy realnie pomaga mapowaniu.",
      },
      {
        id: "sop-3",
        question: "Od czego zaczynacie?",
        answer:
          "Od rezerwacji, zapytań albo obiegu faktur, tam gdzie chaos kosztuje najwięcej czasu.",
      },
      {
        id: "sop-4",
        question: "Czy potrzebujemy działu IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["gdansk", "gdynia", "pruszcz-gdanski", "wejherowo", "kartuzy"],
  },
  {
    slug: "pruszcz-gdanski",
    name: "Pruszcz Gdański",
    nameGenitive: "Pruszcza Gdańskiego",
    nameLocative: "Pruszczu Gdańskim",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Pruszczu Gdańskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Pruszcza Gdańskiego: logistyka, produkcja i handel w pierścieniu Gdańska. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Pruszczu Gdańskim",
    heroLead:
      "Spinamy procesy firm z Pruszcza Gdańskiego, gdy bliskość portu i Trójmiasta podnosi tempo zamówień.",
    introParagraphs: [
      "Pruszcz Gdański jest siedzibą powiatu gdańskiego: produkcja, logistyka, handel i usługi w południowym pierścieniu Trójmiasta. Automatyzacja procesów w Pruszczu Gdańskim często dotyczy awizacji, statusów magazynowych i faktur.",
      "Pracujemy zdalnie. Wąski start, mierzalny efekt, jasna instrukcja.",
    ],
    localContext:
      "Powiat gdański żyje ruchem towarowym i firmami obsługującymi Trójmiasto. Typowy ból to ręczne awizacje, rozjazd statusów i faktury doganiające wysyłkę.",
    whyHere:
      "W Pruszczu Gdańskim automatyzacja broni terminów dostaw i skraca czas od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Logistyka i magazyn",
        body: "Awizacje, sloty i powiadomienia o odchyleniach.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw.",
      },
      {
        title: "Back-office",
        body: "Faktury i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Awizacja dostawy",
        body: "Powiadomienia i eskalacje opóźnień.",
      },
      {
        title: "Status magazynu",
        body: "Jedna prawda dla operacji i biura w przewidywalnym obiegu.",
      },
      {
        title: "Zamówienie B2B",
        body: "Potwierdzenie bez ręcznego przepisywania.",
      },
      {
        title: "Fakturowanie po wysyłce",
        body: "Trigger, gdy dokumenty są kompletne.",
      },
    ],
    howWeWork:
      "W Pruszczu Gdańskim startujemy od procesu wysyłkowego lub zamówieniowego. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "prg-1",
        question: "Czy to dla firm logistycznych przy Gdańsku?",
        answer:
          "Tak. Awizacje i statusy to częsty pierwszy etap.",
      },
      {
        id: "prg-2",
        question: "Czy wymieniacie WMS?",
        answer:
          "Zwykle nie. Integrujemy się z tym, co już macie.",
      },
      {
        id: "prg-3",
        question: "Ile trwa etap?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "prg-4",
        question: "Czy pracujecie zdalnie?",
        answer:
          "Tak. To standard naszego modelu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["gdansk", "tczew", "sopot", "starogard-gdanski", "gdynia"],
  },
  {
    slug: "kartuzy",
    name: "Kartuzy",
    nameGenitive: "Kartuz",
    nameLocative: "Kartuzach",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Kartuzach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kartuz: handel, usługi, produkcja i turystyka kaszubska. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Kartuzach",
    heroLead:
      "Pomagamy kartuskim firmom uporządkować dokumenty i statusy, gdy Kaszuby łączą lokalny rynek z klientami z Trójmiasta.",
    introParagraphs: [
      "Kartuzy to handel, usługi, produkcja i turystyka w sercu Kaszub. Automatyzacja procesów w Kartuzach zwykle dotyczy zamówień, zapytań, faktur i follow-upu.",
      "Współpracujemy zdalnie. Prosty zakres dopasowany do małego i średniego zespołu.",
    ],
    localContext:
      "Powiat kartuski ma MŚP z cienkim biurem i sezonowym ruchem. Typowy ból to ręczne potwierdzenia, ginące maile i faktury z opóźnieniem.",
    whyHere:
      "W Kartuzach automatyzacja oddaje czas zespołowi i wyrównuje tempo obsługi wobec klientów z Trójmiasta.",
    focusIndustries: [
      {
        title: "Handel i usługi lokalne",
        body: "Zamówienia, oferty i follow-up w przewidywalnym obiegu.",
      },
      {
        title: "Turystyka i gastronomia",
        body: "Rezerwacje i dokumenty sezonowe w przewidywalnym obiegu.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń widoczne dla biura w przewidywalnym obiegu.",
      },
      {
        title: "Administracja",
        body: "Faktury i zamknięcie miesiąca w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Zapytanie ofertowe",
        body: "Kolejka w CRM zamiast skrzynki zbiorczej.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Po domknięciu realizacji w przewidywalnym obiegu.",
      },
      {
        title: "Raport sprzedaży",
        body: "Bez ręcznego sklejania Excela w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Kartuzach zaczynamy od jednego obiegu o największym chaosie. Wdrażamy zdalnie.",
    faq: [
      {
        id: "kar-1",
        question: "Czy mała firma kaszubska może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu.",
      },
      {
        id: "kar-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zespół dostaje jasną instrukcję wyjątków.",
      },
      {
        id: "kar-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "kar-4",
        question: "Czy musicie być w Kartuzach?",
        answer:
          "Nie. Standardem jest praca zdalna. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["gdansk", "koscierzyna", "wejherowo", "sopot", "gdynia"],
  },
  {
    slug: "wejherowo",
    name: "Wejherowo",
    nameGenitive: "Wejherowa",
    nameLocative: "Wejherowie",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Wejherowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wejherowa: produkcja, handel, logistyka i usługi północnego pierścienia Trójmiasta. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Wejherowie",
    heroLead:
      "Porządkujemy wejherowskie procesy produkcyjne i handlowe, gdy bliskość Trójmiasta podnosi oczekiwania klientów.",
    introParagraphs: [
      "Wejherowo łączy produkcję, handel, logistykę i usługi w północnym pierścieniu Trójmiasta. Automatyzacja procesów w Wejherowie często dotyczy zamówień, statusów realizacji i faktur.",
      "Pracujemy zdalnie. Diagnoza, wąski zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat wejherowski ma firmy rosnące wraz z aglomeracją. Typowy ból to ręczne potwierdzenia, brak jednego statusu zlecenia i opóźnione faktury.",
    whyHere:
      "W Wejherowie automatyzacja wyrównuje tempo obsługi wobec klientów z Gdyni i Gdańska bez rozrostu administracji.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i powiadomienia w przewidywalnym obiegu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia, protokoły i rozliczenia w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie widoczne dla magazynu.",
      },
      {
        title: "Status realizacji",
        body: "Jedna prawda dla hali i biura w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Po kompletnym statusie w przewidywalnym obiegu.",
      },
      {
        title: "Raport operacyjny",
        body: "KPI bez ręcznego składania w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Wejherowie startujemy od procesu zamówieniowego lub fakturowego. Wdrażamy zdalnie po konsultacji 30 minut.",
    faq: [
      {
        id: "wej-1",
        question: "Czy automatyzacja ma sens blisko Gdyni?",
        answer:
          "Właśnie wtedy. Klienci oczekują tempa Trójmiasta.",
      },
      {
        id: "wej-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "wej-3",
        question: "Ile trwa wdrożenie?",
        answer:
          "Prostsze przepływy często w kilka tygodni.",
      },
      {
        id: "wej-4",
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
    nearbyCitySlugs: ["gdynia", "puck", "gdansk", "kartuzy", "sopot"],
  },
  {
    slug: "puck",
    name: "Puck",
    nameGenitive: "Pucka",
    nameLocative: "Pucku",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Pucku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Pucka: turystyka, handel, usługi i logistyka nadmorska. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Pucku",
    heroLead:
      "Odciążamy puckie biura i firmy usługowe, gdy sezon nadmorski mnoży zapytania szybciej niż etaty.",
    introParagraphs: [
      "Puck to turystyka, handel, usługi i lokalna logistyka na Półwyspie Helskim i w powiecie puckim. Automatyzacja procesów w Pucku zwykle dotyczy rezerwacji, zapytań, statusów zleceń i faktur.",
      "Współpracujemy zdalnie. Zakres pod realny sezon, nie pod prezentację.",
    ],
    localContext:
      "Powiat pucki żyje sezonowością i klientami z Trójmiasta. Typowy ból to ręczne potwierdzenia, rozproszone skrzynki i dokumenty rozliczeniowe po szczycie.",
    whyHere:
      "W Pucku automatyzacja chroni jakość obsługi w sezonie i skraca czas rozliczeń poza nim.",
    focusIndustries: [
      {
        title: "Turystyka i hospitality",
        body: "Rezerwacje i potwierdzenia bez mailowego chaosu.",
      },
      {
        title: "Handel i usługi",
        body: "Zapytania, oferty i follow-up w przewidywalnym obiegu.",
      },
      {
        title: "Logistyka lokalna",
        body: "Awizacje i statusy dostaw w przewidywalnym obiegu.",
      },
      {
        title: "Back-office",
        body: "Faktury i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Rezerwacja",
        body: "Potwierdzenie i checklista dokumentów.",
      },
      {
        title: "Kolejka zapytań",
        body: "CRM zamiast ginących wątków w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Po statusie realizacji w przewidywalnym obiegu.",
      },
      {
        title: "Raport sezonowy",
        body: "Dane na bieżąco, nie po sezonie w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Pucku zaczynamy od procesu rezerwacyjnego lub obsługowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "puc-1",
        question: "Czy automatyzacja pomoże firmie sezonowej?",
        answer:
          "Tak. Skok wolumenu to właśnie moment, w którym ręczny model się wysyca.",
      },
      {
        id: "puc-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "puc-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy prostym zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "puc-4",
        question: "Czy musicie być w Pucku?",
        answer:
          "Nie. Pracujemy zdalnie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["wejherowo", "gdynia", "gdansk", "lebork", "sopot"],
  },
  {
    slug: "koscierzyna",
    name: "Kościerzyna",
    nameGenitive: "Kościerzyny",
    nameLocative: "Kościerzynie",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Kościerzynie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kościerzyny: produkcja, handel i usługi kaszubskie. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Kościerzynie",
    heroLead:
      "Spinamy kościerskie procesy produkcyjne i handlowe, gdy lokalne MŚP muszą doganiać tempo klientów z Trójmiasta.",
    introParagraphs: [
      "Kościerzyna to produkcja, handel i usługi w centralnych Kaszubach. Automatyzacja procesów w Kościerzynie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty start, mierzalny efekt.",
    ],
    localContext:
      "Powiat kościerski ma firmy z cienką administracją. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Kościerzynie automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas do faktury.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy widoczne dla handlu w przewidywalnym obiegu.",
      },
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia bez mailowego chaosu.",
      },
      {
        title: "Usługi",
        body: "Zlecenia i rozliczenia w przewidywalnym obiegu.",
      },
      {
        title: "Back-office",
        body: "Faktury i raporty bez ręcznego zbierania danych.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status w przewidywalnym obiegu.",
      },
      {
        title: "Status zlecenia",
        body: "Jedna prawda dla zespołu w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Kościerzynie startujemy od jednego obiegu. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "kos-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Często właśnie tam zwrot jest najszybszy.",
      },
      {
        id: "kos-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "kos-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "kos-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["kartuzy", "starogard-gdanski", "bytow", "gdansk", "chojnice"],
  },
  {
    slug: "starogard-gdanski",
    name: "Starogard Gdański",
    nameGenitive: "Starogardu Gdańskiego",
    nameLocative: "Starogardzie Gdańskim",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Starogardzie Gdańskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Starogardu Gdańskiego: produkcja spożywcza, handel i logistyka. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Starogardzie Gdańskim",
    heroLead:
      "Porządkujemy starogardzkie procesy produkcyjne, gdy dokumenty jakości i zamówienia nie mogą tonąć w mailach.",
    introParagraphs: [
      "Starogard Gdański łączy produkcję, często spożywczą, z handlem i logistyką. Automatyzacja procesów w Starogardzie Gdańskim zwykle dotyczy partii, statusów produkcji, awizacji i faktur.",
      "Współpracujemy zdalnie. Zakres pod realne wymagania dokumentacyjne.",
    ],
    localContext:
      "Powiat starogardzki ma zakłady z presją na jakość danych i terminy. Typowy ból to ręczne protokoły, statusy zmianowe i faktury doganiające wysyłkę.",
    whyHere:
      "W Starogardzie Gdańskim automatyzacja chroni jakość dokumentacji i skraca cykl od zamówienia do faktury.",
    focusIndustries: [
      {
        title: "Produkcja spożywcza",
        body: "Partie, protokoły i dokumenty wysyłkowe.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i wyjątki w przewidywalnym obiegu.",
      },
      {
        title: "Administracja",
        body: "Faktury i archiwum pod audyt w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zamówienia",
        body: "Formularz i potwierdzenie w przewidywalnym obiegu.",
      },
      {
        title: "Protokół jakości",
        body: "Terminy, role i archiwum w przewidywalnym obiegu.",
      },
      {
        title: "Awizacja",
        body: "Powiadomienia przed załadunkiem w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Po kompletnym statusie w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Starogardzie Gdańskim zaczynamy od procesu dokumentacyjnego lub zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "stg-1",
        question: "Czy automatyzujecie obiegi jakości?",
        answer:
          "W zakresie terminów, ról i archiwum. Nie zastępujemy laboratorium, porządkujemy dokumenty.",
      },
      {
        id: "stg-2",
        question: "Czy to dla średnich zakładów?",
        answer:
          "Tak. Zaczynamy od jednego toru dokumentów.",
      },
      {
        id: "stg-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często w kilka tygodni.",
      },
      {
        id: "stg-4",
        question: "Czy musicie być na hali?",
        answer:
          "Tylko gdy realnie pomaga mapowaniu. Standardem jest praca zdalna.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["tczew", "koscierzyna", "pruszcz-gdanski", "kwidzyn", "gdansk"],
  },
  {
    slug: "tczew",
    name: "Tczew",
    nameGenitive: "Tczewa",
    nameLocative: "Tczewie",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Tczewie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Tczewa: produkcja, logistyka i handel przy węźle komunikacyjnym. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Tczewie",
    heroLead:
      "Pomagamy tczewskim zakładom i firmom logistycznym spiąć statusy, gdy ruch regionalny nie wybacza chaosu w biurze.",
    introParagraphs: [
      "Tczew to produkcja, logistyka i handel przy ważnym węźle między Trójmiastem a południem regionu. Automatyzacja procesów w Tczewie często dotyczy awizacji, statusów zleceń i fakturowania.",
      "Pracujemy zdalnie. Najpierw proces krytyczny dla terminu.",
    ],
    localContext:
      "Powiat tczewski łączy zakłady z firmami obsługującymi ruch towarowy. Typowy ból to ręczne statusy, dokumenty wysyłkowe i opóźnione faktury.",
    whyHere:
      "W Tczewie automatyzacja broni terminów dostaw i skraca ścieżkę od zamówienia do rozliczenia.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i gotowość wysyłki w przewidywalnym obiegu.",
      },
      {
        title: "Logistyka",
        body: "Awizacje, sloty i wyjątki w przewidywalnym obiegu.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i potwierdzenia bez mailowego chaosu.",
      },
      {
        title: "Back-office",
        body: "Faktury po kompletnym statusie w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Awizacja wysyłki",
        body: "Dane transportowe przed załadunkiem.",
      },
      {
        title: "Status zamówienia",
        body: "Jedna prawda dla magazynu i klienta.",
      },
      {
        title: "Dokumenty WZ",
        body: "Kompletność przed fakturą w przewidywalnym obiegu.",
      },
      {
        title: "Raport KPI",
        body: "Z systemów źródłowych w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Tczewie startujemy od procesu wysyłkowego. Wdrażamy zdalnie i mierzymy efekt w dniach roboczych.",
    faq: [
      {
        id: "tcz-1",
        question: "Czy to dla firm przy węźle logistycznym?",
        answer:
          "Tak. Statusy i awizacje to częsty pierwszy etap.",
      },
      {
        id: "tcz-2",
        question: "Czy wymieniacie WMS lub ERP?",
        answer:
          "Zwykle nie. Budujemy warstwę obok. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "tcz-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "tcz-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["pruszcz-gdanski", "starogard-gdanski", "malbork", "gdansk", "kwidzyn"],
  },
  {
    slug: "malbork",
    name: "Malbork",
    nameGenitive: "Malborka",
    nameLocative: "Malborku",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Malborku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Malborka: produkcja, handel, turystyka i usługi. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Malborku",
    heroLead:
      "Porządkujemy malborskie procesy produkcyjne i usługowe, gdy lokalny rynek i ruch turystyczny mnożą dokumenty.",
    introParagraphs: [
      "Malbork łączy produkcję, handel, usługi i turystykę na Żuławach. Automatyzacja procesów w Malborku zwykle dotyczy zamówień, zapytań, statusów i faktur.",
      "Współpracujemy zdalnie. Wąski start, jasna instrukcja.",
    ],
    localContext:
      "Powiat malborski ma MŚP z cienkim biurem i sezonowym ruchem. Typowy ból to ręczne potwierdzenia i faktury doganiające realizację.",
    whyHere:
      "W Malborku automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę błędów w B2B.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń widoczne dla biura i handlu.",
      },
      {
        title: "Handel",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Turystyka i usługi",
        body: "Rezerwacje i follow-up w przewidywalnym obiegu.",
      },
      {
        title: "Administracja",
        body: "Faktury i archiwum zamiast skrzynki zbiorczej.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie i status widoczny dla handlu i magazynu.",
      },
      {
        title: "Status realizacji",
        body: "Widoczny dla biura i klienta w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Dane zbierane automatycznie, bez ręcznej tabeli.",
      },
    ],
    howWeWork:
      "W Malborku zaczynamy od procesu o największym chaosie. Wdrażamy zdalnie.",
    faq: [
      {
        id: "mal-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "mal-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "mal-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "mal-4",
        question: "Czy musicie być w Malborku?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["tczew", "nowy-dwor-gdanski", "sztum", "kwidzyn", "gdansk"],
  },
  {
    slug: "nowy-dwor-gdanski",
    name: "Nowy Dwór Gdański",
    nameGenitive: "Nowego Dworu Gdańskiego",
    nameLocative: "Nowym Dworze Gdańskim",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Nowym Dworze Gdańskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Nowego Dworu Gdańskiego: produkcja spożywcza, handel i logistyka na Żuławach. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Nowym Dworze Gdańskim",
    heroLead:
      "Spinamy nowodworskie procesy, gdy produkcja i handel na Żuławach wymagają sprawnych dokumentów.",
    introParagraphs: [
      "Nowy Dwór Gdański to produkcja, często spożywcza i rolnicza, handel i logistyka na Żuławach. Automatyzacja procesów w Nowym Dworze Gdańskim często dotyczy partii, zamówień i faktur.",
      "Pracujemy zdalnie. Zakres pod realne zlecenia.",
    ],
    localContext:
      "Powiat nowodworski ma firmy z cienkim back-office i presją na terminy dostaw. Typowy ból to ręczne statusy i opóźnione dokumenty.",
    whyHere:
      "W Nowym Dworze Gdańskim automatyzacja chroni terminowość i skraca rozliczenia.",
    focusIndustries: [
      {
        title: "Produkcja spożywcza i rolno-spożywcza",
        body: "Partie, protokoły i dokumenty wysyłkowe.",
      },
      {
        title: "Handel",
        body: "Zamówienia i potwierdzenia bez mailowego chaosu.",
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
        body: "Potwierdzenie widoczne dla magazynu.",
      },
      {
        title: "Protokół",
        body: "Terminy, role i archiwum pod audyt.",
      },
      {
        title: "Wysyłka",
        body: "Komplet dokumentów wysyłkowych przed fakturą.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po kompletnym statusie realizacji.",
      },
    ],
    howWeWork:
      "W Nowym Dworze Gdańskim startujemy od procesu zamówieniowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "ndg-1",
        question: "Czy automatyzujecie dokumenty partii?",
        answer:
          "W zakresie terminów, ról i archiwum dokumentów.",
      },
      {
        id: "ndg-2",
        question: "Czy to dla MŚP?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "ndg-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy prostym zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "ndg-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["malbork", "gdansk", "tczew", "sztum", "olsztyn"],
  },
  {
    slug: "kwidzyn",
    name: "Kwidzyn",
    nameGenitive: "Kwidzyna",
    nameLocative: "Kwidzynie",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Kwidzynie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kwidzyna: produkcja papiernicza, przemysł i handel. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Kwidzynie",
    heroLead:
      "Porządkujemy kwidzyńskie procesy przemysłowe, gdy hala, magazyn i biuro muszą mówić tym samym językiem.",
    introParagraphs: [
      "Kwidzyn to silny ośrodek produkcyjny wschodniego Pomorza, z zapleczem przemysłowym i handlowym. Automatyzacja procesów w Kwidzynie zwykle dotyczy statusów zleceń, zgłoszeń, awizacji i dokumentów między zmianami a biurem.",
      "Współpracujemy zdalnie: mapujemy krytyczny przepływ, wdrażamy wąski zakres i szkolimy osoby odpowiedzialne za wyjątki.",
    ],
    localContext:
      "Region łączy produkcję wielozmianową z dostawcami i logistyką. Typowy ból to rozjazd między raportem zmianowym a tym, co widzi planowanie albo księgowość.",
    whyHere:
      "W Kwidzynie automatyzacja opłaca się, gdy skraca reakcję na odchylenia i daje jeden wiarygodny obraz operacji.",
    focusIndustries: [
      {
        title: "Produkcja przemysłowa",
        body: "Statusy, wyjątki i protokoły jakości.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i powiadomienia w przewidywalnym obiegu.",
      },
      {
        title: "Dostawcy i utrzymanie ruchu",
        body: "Zgłoszenia, części i rozliczenia w przewidywalnym obiegu.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i statusy dostaw w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Zgłoszenia i eskalacje",
        body: "Priorytety i historia działań w przewidywalnym obiegu.",
      },
      {
        title: "Status produkcji",
        body: "Widoczny dla biura i handlu w przewidywalnym obiegu.",
      },
      {
        title: "Raport zmianowy",
        body: "Bez ręcznego składania w piątek w przewidywalnym obiegu.",
      },
      {
        title: "Faktura po wysyłce",
        body: "Po kompletnym statusie w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "Z firmami z Kwidzyna startujemy od procesu krytycznego dla ciągłości. Wdrażamy zdalnie.",
    faq: [
      {
        id: "kwi-1",
        question: "Czy automatyzacja ma sens tylko dla dużych zakładów?",
        answer:
          "Nie. Często pracujemy też z mniejszymi dostawcami i firmami usługowymi wokół przemysłu.",
      },
      {
        id: "kwi-2",
        question: "Czy musicie być na terenie zakładu?",
        answer:
          "Standardem jest współpraca zdalna. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "kwi-3",
        question: "Jak łączycie się z ERP?",
        answer:
          "Przez API, pliki wymiany lub integratory, zależnie od Waszego stacku.",
      },
      {
        id: "kwi-4",
        question: "Ile trwa pierwszy etap?",
        answer:
          "Prostsze przepływy często w kilka tygodni po diagnozie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["sztum", "malbork", "starogard-gdanski", "tczew", "olsztyn"],
  },
  {
    slug: "sztum",
    name: "Sztum",
    nameGenitive: "Sztumu",
    nameLocative: "Sztumie",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Sztumie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Sztumu: produkcja, handel i usługi wschodniego Pomorza. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Sztumie",
    heroLead:
      "Pomagamy sztumskim firmom uporządkować zamówienia i dokumenty bez dokładania etatów.",
    introParagraphs: [
      "Sztum to produkcja, handel i usługi we wschodniej części województwa pomorskiego. Automatyzacja procesów w Sztumie często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres.",
    ],
    localContext:
      "Powiat sztumski ma MŚP z ograniczonym zapleczem administracyjnym. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Sztumie automatyzacja skraca czas od zlecenia do faktury.",
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
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Sztumie zaczynamy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "szt-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "szt-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "szt-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "szt-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["kwidzyn", "malbork", "nowy-dwor-gdanski", "olsztyn", "tczew"],
  },
  {
    slug: "slupsk",
    name: "Słupsk",
    nameGenitive: "Słupska",
    nameLocative: "Słupsku",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Słupsku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Słupska: produkcja, handel, logistyka i usługi zachodniego Pomorza. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Słupsku",
    heroLead:
      "Wspieramy słupskie firmy w porządkowaniu sprzedaży, produkcji i finansów, bez rozrastania biurokracji.",
    introParagraphs: [
      "Słupsk to ośrodek produkcyjny, handlowy i usługowy zachodniego Pomorza. Automatyzacja procesów w Słupsku sprawdza się, gdy zamówienia, statusy i faktury nie mogą żyć w trzech osobnych Excelach.",
      "Pracujemy zdalnie: od mapy procesu po działające integracje. Liczy się mniej ręcznej pracy i mniej błędów w dokumentach.",
    ],
    localContext:
      "Region łączy produkcję, handel B2B i firmy obsługujące wybrzeże. Typowy obraz: solidny system księgowy, CRM niedokończony i operacje w arkuszach.",
    whyHere:
      "W Słupsku automatyzacja pomaga rosnąć bez proporcjonalnego wzrostu administracji, także wobec klientów z Trójmiasta i Koszalina.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i jakość w przewidywalnym obiegu.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i dostawy w przewidywalnym obiegu.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i wyjątki w przewidywalnym obiegu.",
      },
      {
        title: "Usługi i finanse",
        body: "Faktury, HR i zamknięcie miesiąca w przewidywalnym obiegu.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie od oferty do FV",
        body: "Mniej ręcznego przepisywania w przewidywalnym obiegu.",
      },
      {
        title: "Status realizacji",
        body: "Jedna prawda dla hali i biura w przewidywalnym obiegu.",
      },
      {
        title: "Obieg faktur",
        body: "Akceptacje i archiwum w przewidywalnym obiegu.",
      },
      {
        title: "Lejek sprzedaży",
        body: "CRM z przypomnieniami w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Słupsku startujemy od konkretnego bólu, zwykle zamówień, faktur albo statusów produkcji. Wdrażamy zdalnie po konsultacji.",
    faq: [
      {
        id: "slu-1",
        question: "Czy automatyzacja sprawdzi się w firmie rodzinnej?",
        answer:
          "Tak. Często właśnie tam zwrot jest najszybszy.",
      },
      {
        id: "slu-2",
        question: "Czy integrujecie polskie systemy księgowe i CRM?",
        answer:
          "Łączymy to, do czego jest bezpieczny dostęp. Dobieramy metodę pod Wasz stack.",
      },
      {
        id: "slu-3",
        question: "Czy potrzebujemy biura projektu w Słupsku?",
        answer:
          "Nie. Pracujemy zdalnie i hybrydowo. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "slu-4",
        question: "Od czego zwykle zaczynacie?",
        answer:
          "Od procesu z największym chaosem: faktury, zamówienia albo statusy.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["lebork", "bytow", "koszalin", "gdansk", "czluchow"],
  },
  {
    slug: "lebork",
    name: "Lębork",
    nameGenitive: "Lęborka",
    nameLocative: "Lęborku",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Lęborku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Lęborka: handel, usługi, produkcja i turystyka wybrzeża. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Lęborku",
    heroLead:
      "Odciążamy lęborskie biura, gdy sezon i lokalny handel mnożą zapytania oraz dokumenty.",
    introParagraphs: [
      "Lębork łączy handel, usługi, produkcję i zaplecze turystyczne zachodniego wybrzeża. Automatyzacja procesów w Lęborku często dotyczy zapytań, zamówień, rezerwacji i faktur.",
      "Współpracujemy zdalnie. Prosty zakres pod mały zespół.",
    ],
    localContext:
      "Powiat lęborski ma MŚP z sezonowym ruchem. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Lęborku automatyzacja broni jakości obsługi w sezonie i skraca rozliczenia poza nim.",
    focusIndustries: [
      {
        title: "Handel i usługi",
        body: "Zapytania, oferty i follow-up w przewidywalnym obiegu.",
      },
      {
        title: "Turystyka",
        body: "Rezerwacje i potwierdzenia w przewidywalnym obiegu.",
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
        title: "Zapytanie",
        body: "Kolejka zapytań w CRM zamiast ginącej skrzynki.",
      },
      {
        title: "Rezerwacja",
        body: "Automatyczne potwierdzenie z checklistą dokumentów.",
      },
      {
        title: "Zamówienie",
        body: "Status widoczny dla handlu i magazynu.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji.",
      },
    ],
    howWeWork:
      "W Lęborku zaczynamy od procesu obsługowego lub fakturowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "leb-1",
        question: "Czy pomoże firmie sezonowej?",
        answer:
          "Tak. Skok wolumenu najszybciej psuje ręczny model.",
      },
      {
        id: "leb-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu. Wystarczy osoba biznesowa i dostęp do danych procesu.",
      },
      {
        id: "leb-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "leb-4",
        question: "Czy musicie być w Lęborku?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["slupsk", "puck", "wejherowo", "bytow", "gdansk"],
  },
  {
    slug: "bytow",
    name: "Bytów",
    nameGenitive: "Bytowa",
    nameLocative: "Bytowie",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Bytowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Bytowa: produkcja, handel i usługi na Kaszubach zachodnich. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Bytowie",
    heroLead:
      "Spinamy bytowskie procesy, gdy lokalne MŚP potrzebują sprawnego biura bez dokładania etatów.",
    introParagraphs: [
      "Bytów to produkcja, handel i usługi na zachodnich Kaszubach. Automatyzacja procesów w Bytowie zwykle dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start.",
    ],
    localContext:
      "Powiat bytowski ma firmy z cienkim back-office. Typowy ból to ręczne potwierdzenia i brak wspólnego statusu zlecenia.",
    whyHere:
      "W Bytowie automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas do faktury.",
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
        body: "Jedna prawda dla hali, biura i klienta.",
      },
      {
        title: "Faktura",
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Bytowie startujemy od jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "byt-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
      {
        id: "byt-2",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "byt-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "byt-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["slupsk", "koscierzyna", "lebork", "chojnice", "czluchow"],
  },
  {
    slug: "chojnice",
    name: "Chojnice",
    nameGenitive: "Chojnic",
    nameLocative: "Chojnicach",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Chojnicach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Chojnic: produkcja, handel i logistyka południowego Pomorza. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Chojnicach",
    heroLead:
      "Porządkujemy chojnickie procesy produkcyjne i handlowe, gdy region między Pomorzem a Kujawami wymaga sprawnych dokumentów.",
    introParagraphs: [
      "Chojnice to produkcja, handel i logistyka na południu województwa pomorskiego. Automatyzacja procesów w Chojnicach często dotyczy zamówień, awizacji i faktur.",
      "Współpracujemy zdalnie. Diagnoza, zakres, wdrożenie iteracyjne.",
    ],
    localContext:
      "Powiat chojnicki łączy zakłady z firmami handlowymi. Typowy ból to ręczne statusy i opóźnione dokumenty wysyłkowe.",
    whyHere:
      "W Chojnicach automatyzacja broni terminów i skraca rozliczenia.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki jakościowe w jednym torze.",
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
        body: "Potwierdzenie widoczne dla magazynu.",
      },
      {
        title: "Awizacja",
        body: "Powiadomienia o odchyleniach w przewidywalnym obiegu.",
      },
      {
        title: "Faktura",
        body: "Po statusie wysyłki w przewidywalnym obiegu.",
      },
      {
        title: "Raport",
        body: "KPI bez ręcznego Excela w przewidywalnym obiegu.",
      },
    ],
    howWeWork:
      "W Chojnicach zaczynamy od procesu zamówieniowego lub wysyłkowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "cho-1",
        question: "Czy średnia firma może zacząć?",
        answer:
          "Tak. Zaczynamy od jednego procesu. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "cho-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę. Najczęściej budujemy warstwę obok istniejącego systemu.",
      },
      {
        id: "cho-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy wąskim zakresie. Zakres ustalamy po krótkiej diagnozie Waszego procesu.",
      },
      {
        id: "cho-4",
        question: "Czy musicie być w Chojnicach?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["czluchow", "bytow", "koscierzyna", "bydgoszcz", "slupsk"],
  },
  {
    slug: "czluchow",
    name: "Człuchów",
    nameGenitive: "Człuchowa",
    nameLocative: "Człuchowie",
    voivodeship: "pomorskie",
    regionCluster: "pomorskie",
    metaTitle: "Automatyzacja procesów w Człuchowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Człuchowa: produkcja, handel i usługi południowo-zachodniego Pomorza. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Człuchowie",
    heroLead:
      "Pomagamy człuchowskim firmom spiąć zamówienia z fakturami, gdy lokalny rynek nie wybacza chaosu w biurze.",
    introParagraphs: [
      "Człuchów to produkcja, handel i usługi w południowo-zachodniej części Pomorskiego. Automatyzacja procesów w Człuchowie zwykle dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Prosty zakres dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat człuchowski ma MŚP z ograniczonym zapleczem IT. Typowy ból to ręczne potwierdzenia i faktury z opóźnieniem.",
    whyHere:
      "W Człuchowie automatyzacja wyrównuje tempo obsługi wobec klientów regionalnych.",
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
        body: "Wystawienie po domknięciu realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny zbiór danych zamiast ręcznego Excela.",
      },
    ],
    howWeWork:
      "W Człuchowie zaczynamy od jednego obiegu. Wdrażamy zdalnie po konsultacji 30 minut.",
    faq: [
      {
        id: "czl-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Zaczynamy od procesu o wysokim koszcie chaosu.",
      },
      {
        id: "czl-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Projektujemy tak, żeby zespół biznesowy utrzymywał przepływ z dokumentacją.",
      },
      {
        id: "czl-3",
        question: "Ile trwa?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni po krótkiej diagnozie.",
      },
      {
        id: "czl-4",
        question: "Czy zdalnie?",
        answer:
          "Tak. Zaczynamy od jednego procesu o wysokim koszcie chaosu, bez wymiany całych systemów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["chojnice", "bytow", "slupsk", "koszalin", "bydgoszcz"],
  },
];
