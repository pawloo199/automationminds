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
