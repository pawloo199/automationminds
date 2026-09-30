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
];
