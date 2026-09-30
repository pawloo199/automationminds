import type { CityFaq, CityFocusItem } from "./types";
import { CITY_HUB_PATH } from "./types";

export type Voivodeship = {
  slug: string;
  /** Nazwa jak w danych miast, np. „dolnośląskie”. */
  name: string;
  /** Przymiotnik w miejscowniku: „dolnośląskim”. */
  locative: string;
  /** Potoczna nazwa regionu: „Dolny Śląsk”. */
  regionName: string;
  capitalSlugs: string[];
  /** Krótki, sprawdzalny opis gospodarki regionu. */
  description: string;
  relatedServiceSlugs: string[];
  /** Rozbudowana treść (strony województw poziomu A). */
  intro?: string[];
  industries?: CityFocusItem[];
  faq?: CityFaq[];
  heroImage?: { url: string; alt: string };
};

export const VOIVODESHIPS: Voivodeship[] = [
  {
    slug: "dolnoslaskie",
    name: "dolnośląskie",
    locative: "dolnośląskim",
    regionName: "Dolny Śląsk",
    capitalSlugs: ["wroclaw"],
    description:
      "Region produkcji, logistyki i usług biznesowych. Wokół Wrocławia działają zakłady w strefach ekonomicznych i centra logistyczne przy autostradzie A4, a Legnica, Lubin, Głogów i Polkowice tworzą zagłębie miedziowe.",
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "integracje-systemow",
      "automatyzacja-raportow",
    ],
    intro: [
      "Dolny Śląsk to jeden z najbardziej uprzemysłowionych regionów Polski. Wokół Wrocławia działają zakłady produkcyjne w specjalnych strefach ekonomicznych, centra logistyczne przy autostradzie A4 oraz liczne centra usług biznesowych i firmy IT.",
      "Poza stolicą regionu gospodarka ma wyraźnie przemysłowy charakter. Legnica, Lubin, Głogów i Polkowice to zagłębie miedziowe z całą siecią dostawców i firm usługowych. Wałbrzych i Świdnica to produkcja w strefie ekonomicznej, a Jelenia Góra i Kotlina Kłodzka łączą przemysł z turystyką.",
      "Wiele firm z regionu współpracuje z odbiorcami z Niemiec i Czech. Oznacza to zamówienia, dokumenty i raporty w kilku językach i walutach, a do tego wymagania dużych klientów dotyczące terminów i jakości. To właśnie w takich procesach automatyzacja zwraca się najszybciej.",
      "Automation Minds ma siedzibę we Wrocławiu. Z firmami z Dolnego Śląska pracujemy zdalnie, a gdy warsztat na miejscu przyspiesza projekt, łatwo nam przyjechać.",
    ],
    industries: [
      {
        title: "Produkcja i motoryzacja",
        body: "Zlecenia, stany materiałów, raporty zmianowe i kontrola jakości w jednym przepływie zamiast papierowych kart i arkuszy.",
      },
      {
        title: "Logistyka i magazyny",
        body: "Awizacje, statusy dostaw i dokumenty przewozowe generowane automatycznie, bez przepisywania numerów.",
      },
      {
        title: "Centra usług i IT",
        body: "Obieg zgłoszeń, onboarding i raporty dla klientów, szczególnie przy pracy w wielu systemach naraz.",
      },
      {
        title: "Dostawcy dla przemysłu",
        body: "Zamówienia, dokumentacja techniczna i rozliczenia z dużymi odbiorcami, którzy wymagają terminowości.",
      },
      {
        title: "Turystyka i usługi",
        body: "Rezerwacje, płatności i komunikacja z gośćmi w Karkonoszach i Kotlinie Kłodzkiej, zwłaszcza w sezonie.",
      },
    ],
    faq: [
      {
        id: "dsl-1",
        question: "Czy macie biuro na Dolnym Śląsku?",
        answer:
          "Tak. Siedziba Automation Minds jest we Wrocławiu. Większość projektów prowadzimy zdalnie, ale firmom z regionu łatwo zaproponować spotkanie albo warsztat na miejscu.",
      },
      {
        id: "dsl-2",
        question: "Czy przyjeżdżacie do firm spoza Wrocławia?",
        answer:
          "Tak, gdy spotkanie na miejscu realnie pomaga, na przykład przy mapowaniu procesu na hali produkcyjnej albo w magazynie. Termin i zakres wizyty ustalamy po pierwszej rozmowie.",
      },
      {
        id: "dsl-3",
        question: "Czy automatyzacja obsłuży dokumenty po niemiecku?",
        answer:
          "Tak. AI odczytuje faktury, zamówienia i dokumenty dostaw w języku niemieckim, czeskim czy angielskim, a automatyzacja przenosi dane do waszych systemów.",
      },
      {
        id: "dsl-4",
        question: "Od czego zacząć w firmie produkcyjnej?",
        answer:
          "Najczęściej od miejsca, w którym informacja krąży na kartkach albo w telefonach: statusy zleceń, raporty zmianowe, braki materiałów. Na bezpłatnej konsultacji wskażemy, co da najszybszy efekt.",
      },
    ],
    heroImage: {
      url: "https://images.unsplash.com/photo-1721552786145-417854cd020a?w=1920&q=80",
      alt: "Most nad Odrą we Wrocławiu",
    },
  },
  {
    slug: "kujawsko-pomorskie",
    name: "kujawsko-pomorskie",
    locative: "kujawsko-pomorskim",
    regionName: "Kujawy i Pomorze",
    capitalSlugs: ["bydgoszcz", "torun"],
    description:
      "Region dwóch stolic, Bydgoszczy i Torunia, z przemysłem przetwórczym, chemicznym i spożywczym, firmami produkcyjnymi oraz rozwiniętą logistyką w centrum kraju.",
    relatedServiceSlugs: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci"],
  },
  {
    slug: "lubelskie",
    name: "lubelskie",
    locative: "lubelskim",
    regionName: "Lubelszczyzna",
    capitalSlugs: ["lublin"],
    description:
      "Region rolnictwa i przetwórstwa spożywczego, rosnącego sektora IT i usług biznesowych w Lublinie oraz firm handlowych i transportowych przy wschodniej granicy.",
    relatedServiceSlugs: ["automatyzacja-dla-logistyki", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci"],
  },
  {
    slug: "lubuskie",
    name: "lubuskie",
    locative: "lubuskim",
    regionName: "Ziemia Lubuska",
    capitalSlugs: ["zielona-gora", "gorzow-wielkopolski"],
    description:
      "Region przy granicy z Niemcami, z przemysłem drzewnym, meblarskim i motoryzacyjnym oraz firmami logistycznymi obsługującymi ruch towarów na zachód.",
    relatedServiceSlugs: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow"],
  },
  {
    slug: "lodzkie",
    name: "łódzkie",
    locative: "łódzkim",
    regionName: "region łódzki",
    capitalSlugs: ["lodz"],
    description:
      "Centralne położenie i skrzyżowanie autostrad A1 i A2 zrobiły z regionu jedno z głównych zagłębi magazynowych w Polsce. Obok logistyki działają tu firmy produkcyjne, tekstylne i centra usług.",
    relatedServiceSlugs: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "integracje-systemow"],
  },
  {
    slug: "malopolskie",
    name: "małopolskie",
    locative: "małopolskim",
    regionName: "Małopolska",
    capitalSlugs: ["krakow"],
    description:
      "Kraków to jedno z największych w Polsce skupisk centrów usług biznesowych i firm IT, a region uzupełniają przemysł, turystyka i handel.",
    relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "automatyzacja-dla-hr", "automatyzacja-raportow"],
  },
  {
    slug: "mazowieckie",
    name: "mazowieckie",
    locative: "mazowieckim",
    regionName: "Mazowsze",
    capitalSlugs: ["warszawa"],
    description:
      "Najsilniejszy gospodarczo region kraju: siedziby dużych firm, finanse, usługi profesjonalne i handel w Warszawie oraz produkcja i logistyka w Radomiu, Płocku i miastach wokół stolicy.",
    relatedServiceSlugs: ["automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "strategia-wdrozenia-ai"],
  },
  {
    slug: "opolskie",
    name: "opolskie",
    locative: "opolskim",
    regionName: "Opolszczyzna",
    capitalSlugs: ["opole"],
    description:
      "Region z tradycją przemysłu chemicznego, cementowego i spożywczego, silnymi powiązaniami z rynkiem niemieckim i wieloma rodzinnymi firmami produkcyjnymi.",
    relatedServiceSlugs: ["automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "automatyzacja-dla-ksiegowosci"],
  },
  {
    slug: "podkarpackie",
    name: "podkarpackie",
    locative: "podkarpackim",
    regionName: "Podkarpacie",
    capitalSlugs: ["rzeszow"],
    description:
      "Region przemysłu lotniczego i maszynowego skupionego wokół Doliny Lotniczej, z rosnącym sektorem IT w Rzeszowie oraz handlem i transportem przy granicy z Ukrainą.",
    relatedServiceSlugs: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-raportow"],
  },
  {
    slug: "podlaskie",
    name: "podlaskie",
    locative: "podlaskim",
    regionName: "Podlasie",
    capitalSlugs: ["bialystok"],
    description:
      "Region przetwórstwa spożywczego, zwłaszcza mleczarstwa, przemysłu drzewnego i meblarskiego oraz firm handlowych i transportowych przy wschodniej granicy.",
    relatedServiceSlugs: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-sprzedazy"],
  },
  {
    slug: "pomorskie",
    name: "pomorskie",
    locative: "pomorskim",
    regionName: "Pomorze",
    capitalSlugs: ["gdansk"],
    description:
      "Trójmiasto z portami w Gdańsku i Gdyni to centrum logistyki morskiej, przemysłu stoczniowego, IT i usług biznesowych. Region uzupełniają turystyka i przetwórstwo.",
    relatedServiceSlugs: ["automatyzacja-dla-logistyki", "automatyzacja-w-obsludze-klienta", "integracje-systemow"],
  },
  {
    slug: "slaskie",
    name: "śląskie",
    locative: "śląskim",
    regionName: "Śląsk",
    capitalSlugs: ["katowice"],
    description:
      "Najbardziej uprzemysłowiony region Polski: produkcja, motoryzacja, energetyka i hutnictwo, a obok nich rosnący sektor usług biznesowych i IT w aglomeracji katowickiej.",
    relatedServiceSlugs: ["automatyzacja-w-produkcji", "automatyzacja-raportow", "automatyzacja-dla-hr"],
  },
  {
    slug: "swietokrzyskie",
    name: "świętokrzyskie",
    locative: "świętokrzyskim",
    regionName: "region świętokrzyski",
    capitalSlugs: ["kielce"],
    description:
      "Region przemysłu wydobywczego, budowlanego i metalowego oraz targów w Kielcach, z wieloma małymi i średnimi firmami produkcyjnymi i handlowymi.",
    relatedServiceSlugs: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci"],
  },
  {
    slug: "warminsko-mazurskie",
    name: "warmińsko-mazurskie",
    locative: "warmińsko-mazurskim",
    regionName: "Warmia i Mazury",
    capitalSlugs: ["olsztyn"],
    description:
      "Region przemysłu drzewnego, meblarskiego i spożywczego oraz turystyki, w którym dominują małe i średnie przedsiębiorstwa.",
    relatedServiceSlugs: ["automatyzacja-w-produkcji", "automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-ksiegowosci"],
  },
  {
    slug: "wielkopolskie",
    name: "wielkopolskie",
    locative: "wielkopolskim",
    regionName: "Wielkopolska",
    capitalSlugs: ["poznan"],
    description:
      "Jeden z najbardziej przedsiębiorczych regionów kraju: Poznań z handlem, usługami i logistyką, a wokół niego produkcja, przetwórstwo spożywcze i transport.",
    relatedServiceSlugs: ["automatyzacja-sprzedazy", "automatyzacja-dla-logistyki", "automatyzacja-w-produkcji"],
  },
  {
    slug: "zachodniopomorskie",
    name: "zachodniopomorskie",
    locative: "zachodniopomorskim",
    regionName: "Pomorze Zachodnie",
    capitalSlugs: ["szczecin"],
    description:
      "Region portów w Szczecinie i Świnoujściu, logistyki morskiej, przemysłu chemicznego i drzewnego oraz turystyki nadmorskiej.",
    relatedServiceSlugs: ["automatyzacja-dla-logistyki", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  },
];

const byName = new Map(VOIVODESHIPS.map((v) => [v.name, v]));
const bySlug = new Map(VOIVODESHIPS.map((v) => [v.slug, v]));

export function getVoivodeshipByName(name: string) {
  return byName.get(name);
}

export function getVoivodeship(slug: string) {
  return bySlug.get(slug);
}

export function voivodeshipPath(slug: string) {
  return `${CITY_HUB_PATH}/${slug}`;
}

/** „województwo dolnośląskie” */
export function voivodeshipLabel(v: Voivodeship) {
  return `województwo ${v.name}`;
}
