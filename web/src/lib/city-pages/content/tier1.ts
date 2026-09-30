import type { CityPageContent } from "../types";
import { warszawa } from "./tier-a/warszawa";
import { wroclaw } from "./tier-a/wroclaw";

export const tier1Cities: CityPageContent[] = [
  warszawa,
  wroclaw,
  {
    slug: "lodz",
    name: "Łódź",
    nameGenitive: "Łodzi",
    nameLocative: "Łodzi",
    voivodeship: "łódzkie",
    regionCluster: "lodzkie",
    metaTitle: "Automatyzacja procesów w Łodzi | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Łodzi: produkcja, logistyka, e-commerce i biuro. Integracje, AI, bezpłatna konsultacja. Współpraca zdalna w całej Polsce.",
    heroTitle: "Automatyzacja procesów w Łodzi",
    heroLead:
      "Porządkujemy procesy łódzkich firm produkcyjnych, logistycznych i e-commerce: od magazynu po fakturę.",
    introParagraphs: [
      "Łódź odbudowała pozycję jako hub logistyczno-produkcyjny z rosnącym e-commerce. Automatyzacja procesów w Łodzi często dotyczy tego, co dzieje się między WMS, sklepem, kurierem i księgowością. Gdy te ogniwa łączy człowiek z Excelami, każdy wzrost zamówień boli podwójnie.",
      "Dla firm z Łodzi wdrażamy przepływy, które skalują obsługę bez proporcjonalnego wzrostu etatów. Pracujemy zdalnie: szybka diagnoza, konkretny zakres, testy na realnych zamówieniach i dokumentach.",
    ],
    localContext:
      "Lokalne firmy mocno czują sezonowość i presję terminów dostaw. W praktyce widać ręczne przepisywanie SKU, opóźnione faktury do marketplace’ów i chaos w reklamacjach. Do tego dochodzą procesy HR w firmach z wielozmianową produkcją, wnioski i listy obecności rzadko żyją w jednym systemie.",
    whyHere:
      "W Łodzi automatyzacja broni marży przy skokach wolumenu. Zamiast „jakoś dociągniemy sezon”, budujemy procesy, które nie rozsypują się przy piątym kurierze i trzecim kanale sprzedaży.",
    focusIndustries: [
      {
        title: "E-commerce i fulfillment",
        body: "Spinamy statusy zamówień, zwroty i powiadomienia klienta, żeby support nie gonił paczek ręcznie.",
      },
      {
        title: "Produkcja i pakowanie",
        body: "Porządkujemy zlecenia, materiały i raportowanie wydajności między zmianami.",
      },
      {
        title: "Logistyka kontraktowa",
        body: "Automatyzujemy awizacje, wyjątki i komunikację z klientem B2B.",
      },
      {
        title: "Usługi B2B dla sieci",
        body: "Skracamy obiegi umów, rozliczeń i raportów dla większych odbiorców.",
      },
    ],
    focusProcesses: [
      {
        title: "Ścieżka zamówienia end-to-end",
        body: "Od koszyka po fakturę i status u klienta, z mniejszą liczbą ręcznych przepisywań.",
      },
      {
        title: "Reklamacje i zwroty",
        body: "Triaż, terminy i eskalacje w jednym torze zamiast wątków na wielu skrzynkach.",
      },
      {
        title: "Rozliczenia marketplace",
        body: "Mniej ręcznego uzgadniania prowizji, zwrotów i korekt na koniec miesiąca.",
      },
      {
        title: "Obecność i wnioski HR",
        body: "Prostsze ścieżki dla zmian produkcyjnych, bez papieru krążącego między brygadzistami.",
      },
    ],
    howWeWork:
      "Z łódzkimi zespołami zaczynamy od procesu, który najbardziej boli przy wzroście zamówień. Wdrażamy zdalnie, testujemy na próbce realnych danych i dopiero potem rozszerzamy. Bezpłatna konsultacja pomaga ustalić, czy problem jest techniczny, czy najpierw trzeba uprościć sam proces.",
    faq: [
      {
        id: "ldz-1",
        question: "Czy pomagacie firmom e-commerce z Łodzi?",
        answer:
          "Tak. Często zaczynamy od statusów zamówień, zwrotów i integracji z kurierami lub marketplace’ami, tam zwrot z automatyzacji widać najszybciej.",
      },
      {
        id: "ldz-2",
        question: "Czy musicie znać nasz WMS od środka?",
        answer:
          "Wystarczy dostęp do danych i zrozumienie procesu. Dobieramy integrację tak, by nie naruszać stabilności magazynu.",
      },
      {
        id: "ldz-3",
        question: "Jak długo trwa pierwsze wdrożenie?",
        answer:
          "Prostsze przepływy bywają gotowe w kilka tygodni. Przy wielu systemach planujemy etapy, z działającym pierwszym efektem po drodze.",
      },
      {
        id: "ldz-4",
        question: "Czy współpraca z Łodzią wymaga dojazdów?",
        answer:
          "Nie. Obsługujemy firmy z Łodzi zdalnie i hybrydowo. Dojazd ustalamy tylko, gdy realnie przyspiesza wdrożenie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-w-produkcji",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
    ],
    nearbyCitySlugs: [
      "pabianice",
      "zgierz",
      "brzeziny",
      "tomaszow-mazowiecki",
      "piotrkow-trybunalski",
      "skierniewice",
      "kutno",
    ],
  },
  {
    slug: "poznan",
    name: "Poznań",
    nameGenitive: "Poznania",
    nameLocative: "Poznaniu",
    voivodeship: "wielkopolskie",
    regionCluster: "wielkopolska",
    metaTitle: "Automatyzacja procesów w Poznaniu | Automation Minds",
    metaDescription:
      "Automatyzacja procesów dla firm z Poznania: handel, produkcja, finanse i HR. Integracje systemów, AI, konsultacja bez zobowiązań.",
    heroTitle: "Automatyzacja procesów w Poznaniu",
    heroLead:
      "Wspieramy wielkopolskie firmy w porządkowaniu sprzedaży, finansów i operacji, bez rozrastania biurokracji.",
    introParagraphs: [
      "Poznań to rynek firm handlowych, produkcyjnych i usługowych z silną kulturą „musi działać”. Automatyzacja procesów w Poznaniu sprawdza się, gdy zamiast dokładania procedur dokładamy przepływ: dane lecą same, a ludzie zajmują się wyjątkami i decyzjami.",
      "Pracujemy z poznanskimi zespołami zdalnie: od mapy procesu po działające integracje. Unikamy wdrożeń „na pokaz”; liczy się mniej ręcznej pracy w miesiąc i mniej błędów w dokumentach.",
    ],
    localContext:
      "W Wielkopolsce widać dużo firm rodzinnych rosnących do skali wielooddziałowej oraz eksporterów. Typowy obraz: solidny system finansowo-księgowy, CRM „niedokończony” i operacje żyjące w arkuszach. Problemem bywa też rozliczanie przedstawicieli, rabatów i zwrotów, wszystko, co sprzedaż obieca, a finanse muszą domknąć.",
    whyHere:
      "W Poznaniu automatyzacja pomaga rosnąć bez proporcjonalnego wzrostu administracji. To szczególnie ważne przy ekspansji produktowej i nowych kanałach B2B, gdzie ręczny model szybko się wysyca.",
    focusIndustries: [
      {
        title: "Handel B2B i dystrybucja",
        body: "Łączymy zamówienia, limity kredytowe i statusy dostaw widoczne dla handlu i klienta.",
      },
      {
        title: "Produkcja spożywcza i przemysł lekki",
        body: "Porządkujemy zlecenia, partię i dokumentację jakości między zmianami.",
      },
      {
        title: "Usługi i serwis terenowy",
        body: "Automatyzujemy zlecenia wyjazdowe, raporty z wizyt i fakturowanie po domknięciu.",
      },
      {
        title: "Finanse i controlling",
        body: "Skracamy zamknięcie miesiąca i zbieranie danych z oddziałów do jednego obrazu.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie B2B od oferty do FV",
        body: "Mniej ręcznego przepisywania pozycji i statusów między handlem a fakturowaniem.",
      },
      {
        title: "Obieg faktur kosztowych",
        body: "Akceptacje, limity i archiwum zamiast skrzynki „faktury@”.",
      },
      {
        title: "Rozliczenia handlowców",
        body: "Prowizje i cele liczone z danych CRM/ERP, nie z ręcznych tabel na koniec miesiąca.",
      },
      {
        title: "HR operacyjny",
        body: "Wnioski, ewidencja i onboarding w firmach z wieloma lokalizacjami.",
      },
    ],
    howWeWork:
      "W Poznaniu startujemy od konkretnego bólu. Zwykle sprzedaży, finansów albo serwisu. Po konsultacji proponujemy etap, który da mierzalny efekt, i wdrażamy go zdalnie. Rozszerzenia planujemy dopiero, gdy pierwszy przepływ działa stabilnie.",
    faq: [
      {
        id: "poz-1",
        question: "Czy automatyzacja w Poznaniu sprawdzi się w firmie rodzinnej?",
        answer:
          "Tak. Często właśnie tam zwrot jest najszybszy: mniej ręcznej pracy właściciela i biura, więcej porządku przy wzroście.",
      },
      {
        id: "poz-2",
        question: "Czy integrujecie Comarch / Insert / inne systemy PL?",
        answer:
          "Łączymy to, do czego jest bezpieczny dostęp (API, eksporty, webhooki). Dobieramy metodę pod wasz stack, nie pod „modne narzędzie”.",
      },
      {
        id: "poz-3",
        question: "Czy potrzebujemy biura projektu w Poznaniu?",
        answer:
          "Nie. Pracujemy zdalnie i hybrydowo z firmami z całego kraju, w tym z Poznania.",
      },
      {
        id: "poz-4",
        question: "Od czego zwykle zaczynacie?",
        answer:
          "Od procesu z największym chaosem lub kosztem błędów, często obiegu faktur, zamówień B2B albo leadów sprzedażowych.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "automatyzacja-w-produkcji",
    ],
    nearbyCitySlugs: [
      "gniezno",
      "sroda-wielkopolska",
      "wrzesnia",
      "oborniki",
      "szamotuly",
      "kalisz",
      "konin",
    ],
  },
  {
    slug: "gdansk",
    name: "Gdańsk",
    nameGenitive: "Gdańska",
    nameLocative: "Gdańsku",
    voivodeship: "pomorskie",
    regionCluster: "trojmiasto",
    metaTitle: "Automatyzacja procesów w Gdańsku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Gdańska i Trójmiasta: logistyka, IT, e-commerce i obsługa klienta. Zdalne wdrożenia, konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Gdańsku",
    heroLead:
      "Pomagamy firmom z Trójmiasta spiąć logistykę, sprzedaż i support, zanim sezon albo kontrakt wyczerpie zespół.",
    introParagraphs: [
      "Gdańsk i Trójmiasto żyją portem, logistyką, IT i turystyką biznesową. Automatyzacja procesów w Gdańsku zwykle zaczyna się tam, gdzie status przesyłki, zgłoszenia klienta i faktura nie spotykają się w jednym miejscu. Ręczna synchronizacja działa do pierwszego skoku wolumenu.",
      "Wdrażamy automatyzacje dla gdańskich firm zdalnie: mapujemy procesy, łączymy systemy i uczymy zespół obsługi wyjątków. Nie budujemy „oddziału nad Motławą”. Budujemy działające przepływy.",
    ],
    localContext:
      "Lokalny biznes mocno zależy od łańcuchów dostaw i klientów zagranicznych. W praktyce widać ręczne statusy kontenerów/przesyłek, rozproszoną komunikację z agentami oraz support e-commerce pracujący na kilku skrzynkach naraz. Firmy IT z kolei toną w onboardingu kontraktorów i raportowaniu dla klientów.",
    whyHere:
      "W Gdańsku automatyzacja broni terminowości i jakości obsługi przy zmiennym obciążeniu. To różnica między „ogarniemy” a przewidywalnym SLA, gdy ruch rośnie.",
    focusIndustries: [
      {
        title: "Logistyka morska i spedycja",
        body: "Porządkujemy statusy, dokumenty i powiadomienia między operacją a klientem.",
      },
      {
        title: "E-commerce nadmorski i retail",
        body: "Automatyzujemy zamówienia, zwroty i komunikację przy sezonowych szczytach.",
      },
      {
        title: "IT i shared services",
        body: "Upraszczamy tickety, onboarding i raportowanie czasu oraz SLA.",
      },
      {
        title: "Turystyka i MICE",
        body: "Spinamy rezerwacje, płatności i follow-up po wydarzeniach bez ręcznego Excela.",
      },
    ],
    focusProcesses: [
      {
        title: "Status przesyłki / zlecenia",
        body: "Aktualizacje z systemów operacyjnych zamiast ręcznych maili „gdzie jest towar”.",
      },
      {
        title: "Obsługa zgłoszeń klienta",
        body: "Triaż, kolejka i eskalacje z historią sprawy w jednym miejscu.",
      },
      {
        title: "Dokumenty celne i faktury",
        body: "Mniej ręcznego kompletowania zestawów dokumentów przed wysyłką lub rozliczeniem.",
      },
      {
        title: "Lead i oferta B2B",
        body: "Od zapytania po zadanie dla handlowca, z przypomnieniami i czystym CRM.",
      },
    ],
    howWeWork:
      "Z firmami z Gdańska pracujemy online: krótka diagnoza, zakres pierwszego wdrożenia, testy i szkolenie. Jeśli proces jest mocno „terenowy” (magazyn, terminal), zbieramy dane od osób operacyjnych i wdrażamy tak, by nie przeszkadzać pracy zmianowej.",
    faq: [
      {
        id: "gda-1",
        question: "Czy obsługujecie też Gdynię i Sopot w ramach Trójmiasta?",
        answer:
          "Tak. Model jest ten sam: zdalna i hybrydowa współpraca z firmami z całego Trójmiasta. Osobne strony pomagają dopasować kontekst lokalny.",
      },
      {
        id: "gda-2",
        question: "Czy automatyzacja logistyki w Gdańsku wymaga wymiany WMS?",
        answer:
          "Zwykle nie. Najpierw spajamy to, co już działa, i domykamy dziury informacyjne. Wymiana systemu to osobna decyzja.",
      },
      {
        id: "gda-3",
        question: "Jak chronione są dane klientów?",
        answer:
          "Stosujemy dostęp oparty na rolach, minimalizujemy zakres danych i omawiamy wymagania RODO przed wdrożeniem.",
      },
      {
        id: "gda-4",
        question: "Ile trwa konsultacja wstępna?",
        answer:
          "Około 30 minut. Po niej wiecie, czy warto iść dalej, i jakie 1–2 procesy dają najszybszy zwrot.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: [
      "gdynia",
      "sopot",
      "pruszcz-gdanski",
      "wejherowo",
      "tczew",
      "kartuzy",
    ],
  },
  {
    slug: "szczecin",
    name: "Szczecin",
    nameGenitive: "Szczecina",
    nameLocative: "Szczecinie",
    voivodeship: "zachodniopomorskie",
    regionCluster: "zachodniopomorskie",
    metaTitle: "Automatyzacja procesów w Szczecinie | Automation Minds",
    metaDescription:
      "Automatyzacja biznesowa dla firm ze Szczecina: produkcja, handel przygraniczny, logistyka i biuro. Zdalne wdrożenia, bezpłatna konsultacja.",
    heroTitle: "Automatyzacja procesów w Szczecinie",
    heroLead:
      "Porządkujemy operacje firm z Pomorza Zachodniego: od magazynu i produkcji po rozliczenia z partnerami z Niemiec.",
    introParagraphs: [
      "Szczecin żyje przemysłem, portem, handlem przygranicznym i usługami. Automatyzacja procesów w Szczecinie często zamyka problem dwóch światów: polskiego obiegu dokumentów i oczekiwań partnerów z rynku niemieckiego co do statusów, terminów i jakości danych.",
      "Współpracujemy ze szczecińskimi firmami zdalnie. Zaczynamy od procesu, który generuje najwięcej maili „na gwałt”, i budujemy przepływ, który da się utrzymać bez bohaterskiej pracy biura.",
    ],
    localContext:
      "Firmy w regionie często łączą produkcję lub handel z eksportem. Widać ręczne tłumaczenie statusów, rozjazd wersji dokumentów i opóźnienia w fakturowaniu po dostawie. Przy mniejszej puli specjalistów IT automatyzacja musi być prosta w utrzymaniu, nie „projekt dla projektów”.",
    whyHere:
      "W Szczecinie automatyzacja daje przewagę w relacjach eksportowych: szybsza odpowiedź, mniej błędów w dokumentach, lepsza przewidywalność. To argument biznesowy, nie tylko oszczędność godzin.",
    focusIndustries: [
      {
        title: "Produkcja i stoczniowo-przemysłowe łańcuchy",
        body: "Spinamy statusy zleceń, zakupy i komunikację między działami technicznymi a biurem.",
      },
      {
        title: "Handel i eksport",
        body: "Porządkujemy oferty, zamówienia i dokumenty wysyłkowe pod partnerów zagranicznych.",
      },
      {
        title: "Logistyka i magazyny",
        body: "Automatyzujemy awizacje, wyjątki i powiadomienia bez ręcznego telefonowania.",
      },
      {
        title: "Usługi B2B",
        body: "Skracamy ścieżkę od zapytania do faktury i follow-upu po realizacji.",
      },
    ],
    focusProcesses: [
      {
        title: "Dokumenty eksportowe",
        body: "Kompletowanie i statusy zamiast ręcznego zbierania załączników z kilku osób.",
      },
      {
        title: "Zamówienia i potwierdzenia",
        body: "Jedna ścieżka od zapytania po rezerwację zasobów / terminu.",
      },
      {
        title: "Fakturowanie po dostawie",
        body: "Mniej opóźnień wynikających z braku informacji „czy już można wystawić”.",
      },
      {
        title: "Obsługa reklamacji",
        body: "Historia sprawy, terminy i odpowiedzialności w jednym miejscu.",
      },
    ],
    howWeWork:
      "Z firmami ze Szczecina pracujemy praktycznie: najpierw proces, potem narzędzie. Wdrażamy zdalnie, zostawiamy instrukcje po polsku i szkolimy osoby, które realnie będą pilnować wyjątków. Bezpłatna konsultacja pozwala sprawdzić dopasowanie bez zobowiązań.",
    faq: [
      {
        id: "szcz-1",
        question: "Czy automatyzacja w Szczecinie opłaca się mniejszej firmie?",
        answer:
          "Tak. Szczególnie przy eksporcie i rosnącej liczbie dokumentów. Zaczynamy wąsko, żeby zwrot był widoczny szybko.",
      },
      {
        id: "szcz-2",
        question: "Czy potrzebujemy własnego programisty?",
        answer:
          "Nie. Dobieramy narzędzia możliwe do utrzymania przez zespół biznesowy, z jasną dokumentacją.",
      },
      {
        id: "szcz-3",
        question: "Czy pomagacie przy integracji z partnerami z Niemiec?",
        answer:
          "Pomagamy w przepływie danych i statusów po waszej stronie. Format wymiany dopasowujemy do tego, co partner akceptuje.",
      },
      {
        id: "szcz-4",
        question: "Jak wygląda rozliczenie projektu?",
        answer:
          "Po analizie dostajecie wycenę etapu. Nie zaczynamy od otwartego budżetu „na discovery bez końca”.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
    ],
    nearbyCitySlugs: [
      "police",
      "goleniow",
      "gryfino",
      "stargard",
      "swinoujscie",
      "pyrzyce",
    ],
  
  },
];
