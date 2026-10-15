import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "warmińsko-mazurskie", regionCluster: "warmia", updatedAt: "2026-10-15" } as const;

const remote = (genitive: string): [string, string] => [
  `Czy pracujecie z firmami z ${genitive}?`,
  "Tak, zdalnie. Pierwsza rozmowa i większość wdrożenia odbywają się online, a na warsztat przyjeżdżamy, gdy przyspiesza projekt.",
];
const start: [string, string] = ["Jak zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces do pierwszego wdrożenia."];

const tourismIndustries: [string, string][] = [
  ["Hotele i pensjonaty", "Rezerwacje z wielu portali, zaliczki i pytania gości."],
  ["Żeglarstwo i wypożyczalnie", "Rezerwacje jachtów, kajaków i sprzętu, umowy i kaucje."],
  ["Gastronomia", "Rezerwacje grup i zamówienia w sezonie."],
];
const tourismProcesses: [string, string][] = [
  ["Jeden kalendarz rezerwacji", "Rezerwacje z kilku portali bez podwójnych rezerwacji."],
  ["Pytania gości", "Asystent AI odpowiada o dojazd, ceny i terminy na podstawie waszej oferty."],
  ["Zaliczki i przypomnienia", "Link do płatności i przypomnienie przed przyjazdem."],
  ["Opinie po pobycie", "Prośba o opinię wysyłana automatycznie po wyjeździe."],
];

export const warminskoMazurskieRegion = region({
  slug: "warminsko-mazurskie",
  intro: [
    "Warmia i Mazury to region jezior, lasów i turystyki, ale też przemysłu. Olsztyn jest ośrodkiem przemysłu oponiarskiego, meblarskiego i spożywczego, Elbląg ma tradycje przemysłu maszynowego i energetycznego, a w całym regionie działają zakłady meblarskie, drzewne i mleczarskie.",
    "Kraina Wielkich Jezior Mazurskich przyciąga turystów i żeglarzy z Polski i zagranicy. Hotele, pensjonaty, przystanie i wypożyczalnie obsługują w sezonie wielokrotnie więcej gości niż zimą.",
    "Region ma też silne rolnictwo i przetwórstwo spożywcze, a w strefach ekonomicznych w Olsztynie, Elblągu, Ełku i Działdowie powstają kolejne zakłady.",
    "Z firmami z Warmii i Mazur pracujemy zdalnie, a na warsztaty przyjeżdżamy, gdy przyspieszają projekt.",
  ],
  industries: [
    ["Turystyka i żeglarstwo", "Rezerwacje, zaliczki, pytania gości i opinie w obiektach nad jeziorami."],
    ["Meble i drewno", "Wyceny, zamówienia, terminy produkcji i dostawy do klientów w kraju i za granicą."],
    ["Przemysł w Olsztynie i Elblągu", "Zamówienia, dokumentacja jakości, zakupy i reklamacje."],
    ["Mleczarstwo i przetwórstwo spożywcze", "Dostawy surowca, partie, dokumenty jakości i zamówienia od sieci."],
    ["Rolnictwo", "Dostawy, umowy i rozliczenia z odbiorcami."],
  ],
  faq: [
    ["Czy macie biuro w Olsztynie?", "Nie. Z firmami z Warmii i Mazur pracujemy zdalnie, a na warsztaty przyjeżdżamy, gdy przyspieszają projekt."],
    ["Czy automatyzujecie obiekty turystyczne przed sezonem?", "Tak. Najlepiej zacząć zimą lub wczesną wiosną, żeby rezerwacje, zaliczki i asystent AI działały przed majówką."],
    ["Czy pracujecie z zakładami meblarskimi i spożywczymi?", "Tak, w procesach wokół produkcji: zamówienia, terminy, dostawy, dokumentacja jakości i reklamacje."],
    ["Od czego zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces z najszybszym zwrotem."],
  ],
});

export const warminskoMazurskieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "olsztyn",
    name: "Olsztyn",
    nameGenitive: "Olsztyna",
    nameLocative: "Olsztynie",
    nearbyCitySlugs: ["ostroda", "szczytno", "mragowo", "elblag", "elk", "ketrzyn"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Olsztyna: przemysł, meble, przetwórstwo spożywcze, usługi, IT i turystyka. Konsultacja 30 min.",
    heroLead:
      "Pomagamy olsztyńskim zakładom, firmom usługowym i turystycznym przejąć powtarzalną pracę z dokumentami, zamówieniami i rezerwacjami.",
    intro: [
      "Olsztyn jest stolicą Warmii i Mazur oraz największym ośrodkiem gospodarczym regionu. Działa tu duży zakład oponiarski, zakłady meblarskie i spożywcze, a park naukowo-technologiczny i uniwersytet wspierają firmy IT i usługowe.",
      "Miasto otaczają jeziora i lasy, więc obok przemysłu i usług rozwija się turystyka, a wiele firm obsługuje gości odwiedzających region.",
    ],
    localContext:
      "Olsztyńskie firmy łączą produkcję dla odbiorców w Polsce i za granicą z usługami dla regionu, często z niewielkimi zespołami biurowymi.",
    whyHere:
      "W Olsztynie automatyzacja przyspiesza zamówienia i dokumentację w produkcji, a w usługach i turystyce przejmuje powtarzalne odpowiedzi i rezerwacje.",
    economy: {
      title: "Czym żyje olsztyński biznes",
      paragraphs: [
        "Olsztyn ma silny przemysł oponiarski, meblarski i spożywczy, a w strefie ekonomicznej działają kolejne zakłady. Wokół nich pracują dostawcy, firmy serwisowe i logistyczne.",
        "Uniwersytet i park naukowo-technologiczny tworzą zaplecze dla firm IT, a miasto jest centrum usług, administracji i handlu dla regionu.",
        "Jeziora w granicach miasta i w okolicy sprawiają, że turystyka i usługi dla gości są ważną częścią lokalnej gospodarki.",
      ],
    },
    industries: [
      ["Przemysł i dostawcy", "Zamówienia, dokumentacja jakości, zakupy i reklamacje."],
      ["Meble i drewno", "Wyceny, zamówienia, terminy produkcji i dostawy."],
      ["IT i usługi dla firm", "Zgłoszenia klientów, czas pracy i rozliczenia projektów."],
      ["Turystyka", "Rezerwacje, grupy i pytania gości."],
    ],
    processes: [
      ["Zamówienia od klientów", "Zamówienia z maili i portali odczytane i przekazane do systemu."],
      ["Reklamacje", "Rejestr z danymi partii, terminami i szkicem raportu."],
      ["Obsługa zgłoszeń", "Zgłoszenia z kategorią, priorytetem i terminem odpowiedzi."],
      ["Raport dla zarządu", "Sprzedaż, koszty i należności zebrane automatycznie."],
    ],
    example: {
      title: "Zamówienie od dystrybutora w olsztyńskiej fabryce mebli przed i po automatyzacji",
      lead: "Przykład producenta mebli z okolic Olsztyna, który sprzedaje przez sieć dystrybutorów w Polsce i za granicą. Tak zmienia się obsługa jednego zamówienia.",
      rows: [
        ["Przyjęcie zamówienia", "PDF lub arkusz przepisywany ręcznie do systemu.", "AI odczytuje pozycje i zaznacza różnice względem cennika dystrybutora."],
        ["Termin realizacji", "Handlowiec pyta planistę i odpisuje po kilku dniach.", "Potwierdzenie z terminem z planu produkcji, wysyłane szybko."],
        ["Status dla dystrybutora", "Telefony i maile z pytaniem o termin.", "Informacja o etapie zamówienia wysyłana automatycznie."],
        ["Reklamacja po dostawie", "Zdjęcia w mailu, brak historii.", "Rejestr reklamacji z numerem zamówienia i terminem odpowiedzi."],
      ],
    },
    faq: [
      ["Czy pracujecie z zakładami z Olsztyna?", "Tak, w procesach wokół produkcji: zamówienia, zakupy, dokumentacja jakości, reklamacje i raporty."],
      ["Czy automatyzujecie olsztyńskie firmy usługowe i IT?", "Tak. Zgłoszenia, czas pracy, rozliczenia projektów i onboarding."],
      ["Czy pracujecie zdalnie?", "Tak, a na warsztaty w Olsztynie przyjeżdżamy, gdy przyspieszają projekt."],
      ["Ile trwa pierwsze wdrożenie?", "Zwykle kilka tygodni od konsultacji do działającego procesu."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-firm-uslugowych", "ai-w-obsludze-dokumentow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "elblag",
    name: "Elbląg",
    nameGenitive: "Elbląga",
    nameLocative: "Elblągu",
    nearbyCitySlugs: ["braniewo", "ostroda", "olsztyn", "gdansk", "gdynia"],
    metaDescription:
      "Automatyzacja dla firm z Elbląga: przemysł maszynowy i energetyczny, browarnictwo, port, logistyka i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy elbląskim zakładom, firmom logistycznym i usługowym uporządkować zamówienia, dokumentację i rozliczenia.",
    intro: [
      "Elbląg jest drugim co do wielkości miastem regionu, z długą tradycją przemysłu maszynowego i energetycznego. Działają tu też browar, zakłady spożywcze i produkcyjne w strefie ekonomicznej.",
      "Miasto ma port rzeczny i leży blisko Trójmiasta, a Kanał Elbląski z pochylniami przyciąga turystów.",
    ],
    localContext:
      "Elbląskie firmy często są dostawcami dużych zakładów przemysłowych i odbiorców z Trójmiasta, z ich wymaganiami dotyczącymi dokumentacji i terminów.",
    whyHere:
      "W Elblągu automatyzacja porządkuje dokumentację i zamówienia u dostawców przemysłu, a raporty powstają bez ręcznego składania.",
    economy: {
      title: "Czym żyje elbląski biznes",
      paragraphs: [
        "Elbląg ma tradycje przemysłu maszynowego i energetycznego, w tym produkcji urządzeń dla energetyki. Wokół dużych zakładów działają kooperanci, serwisy i firmy inżynierskie.",
        "Browar, zakłady spożywcze i strefa ekonomiczna uzupełniają przemysłowy profil miasta, a bliskość Trójmiasta i port sprzyjają logistyce.",
      ],
    },
    industries: [
      ["Przemysł maszynowy i energetyczny", "Zapytania ofertowe, dokumentacja techniczna, zakupy i reklamacje."],
      ["Przemysł spożywczy", "Zamówienia od sieci, partie i dokumenty jakości."],
      ["Logistyka i port", "Zlecenia, dokumenty przewozowe i statusy."],
      ["Usługi i turystyka", "Zapytania, rezerwacje i faktury."],
    ],
    processes: [
      ["Dokumentacja techniczna", "Aktualna wersja rysunku przy zleceniu na hali."],
      ["Zakupy materiałów", "Zapytania do dostawców i przypomnienia o potwierdzeniach."],
      ["Reklamacje", "Rejestr z danymi partii i terminami."],
      ["Zlecenia transportowe", "Zlecenia z maili w systemie, statusy dla klientów."],
    ],
    faq: [
      ["Czy pracujecie z zakładami z Elbląga?", "Tak, w procesach wokół produkcji: wyceny, zakupy, dokumentacja, reklamacje i raporty."],
      ["Czy automatyzujecie firmy logistyczne?", "Tak. Zlecenia, dokumenty, statusy i rozliczenia."],
      ["Czy musimy zmieniać ERP?", "Nie. Budujemy obok systemów, których używacie."],
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "elk",
    name: "Ełk",
    nameGenitive: "Ełku",
    nameLocative: "Ełku",
    nearbyCitySlugs: ["olecko", "pisz", "gizycko", "suwalki", "olsztyn"],
    metaDescription:
      "Automatyzacja dla firm z Ełku: produkcja w strefie ekonomicznej, przetwórstwo, handel, usługi i turystyka. Konsultacja 30 min.",
    heroLead:
      "Pomagamy ełckim zakładom, firmom handlowym i usługowym przejąć powtarzalną pracę z zamówieniami i dokumentami.",
    intro: [
      "Ełk jest największym miastem wschodnich Mazur i ich gospodarczym centrum. W podstrefie ekonomicznej działają zakłady produkcyjne, a miasto obsługuje handel i usługi dla całej okolicy.",
      "Jezioro Ełckie i okoliczne lasy przyciągają turystów, a miasto leży na trasie w kierunku Litwy i Białorusi.",
    ],
    localContext:
      "Ełckie firmy obsługują klientów z regionu i całej Polski, a zakłady w strefie ekonomicznej pracują dla odbiorców krajowych i zagranicznych.",
    whyHere:
      "W Ełku automatyzacja przyspiesza zamówienia i dokumentację w produkcji, a w usługach porządkuje obsługę klientów.",
    economy: {
      title: "Czym żyje ełcki biznes",
      paragraphs: [
        "Podstrefa ekonomiczna przyciągnęła do Ełku zakłady produkcyjne różnych branż, które zatrudniają mieszkańców całych wschodnich Mazur.",
        "Miasto jest centrum handlu, usług i edukacji dla okolicznych powiatów, a jezioro i lasy wspierają turystykę.",
      ],
    },
    industries: [
      ["Produkcja w strefie ekonomicznej", "Zamówienia, zakupy, dokumentacja i reklamacje."],
      ["Przetwórstwo", "Zamówienia od sieci i partie."],
      ["Handel i usługi", "Zamówienia, faktury i obsługa klienta."],
      ["Turystyka", "Rezerwacje i pytania gości."],
    ],
    processes: [
      ["Zamówienia z portali klientów", "Pobierane automatycznie i przekazywane do systemu."],
      ["Przeglądy maszyn", "Plan przeglądów z przypomnieniami i protokołami."],
      ["Obsługa zapytań", "Zapytania z formularzy w CRM z przypisanym handlowcem."],
      ["Należności", "Przypomnienia o płatnościach i raport przeterminowanych faktur."],
    ],
    faq: [
      ["Czy pracujecie z zakładami w ełckiej strefie ekonomicznej?", "Tak, w procesach wokół produkcji: zamówienia, zakupy, reklamacje i utrzymanie ruchu."],
      ["Czy automatyzujecie firmy usługowe z Ełku?", "Tak. Zapytania, terminy, faktury i płatności."],
      remote("Ełku"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "integracje-systemow", "automatyzacja-dla-firm-uslugowych"],
  }),
  town({
    ...base,
    slug: "ostroda",
    name: "Ostróda",
    nameGenitive: "Ostródy",
    nameLocative: "Ostródzie",
    nearbyCitySlugs: ["ilawa", "elblag", "olsztyn", "nowe-miasto-lubawskie", "gdansk"],
    metaDescription:
      "Automatyzacja dla firm z Ostródy: produkcja, meble, przetwórstwo, turystyka nad jeziorem Drwęckim i logistyka przy S7. Konsultacja 30 min.",
    heroLead:
      "Pomagamy ostródzkim zakładom i obiektom turystycznym uporządkować zamówienia, dostawy i rezerwacje.",
    intro: [
      "Ostróda leży przy drodze S7, nad jeziorem Drwęckim, na początku Kanału Elbląskiego. Działają tu zakłady produkcyjne, meblarskie i spożywcze, a dobre połączenie z Trójmiastem i Warszawą sprzyja logistyce.",
      "Jeziora i kanał przyciągają turystów, a w mieście odbywają się duże wydarzenia, które ściągają gości z całej Polski.",
    ],
    localContext:
      "Ostródzkie firmy łączą produkcję dla odbiorców krajowych i zagranicznych z obsługą turystów w sezonie.",
    whyHere:
      "W Ostródzie automatyzacja przyspiesza obsługę zamówień w produkcji i porządkuje rezerwacje w turystyce.",
    industries: [
      ["Meble i produkcja", "Zamówienia, terminy i dostawy."],
      ["Przetwórstwo spożywcze", "Zamówienia, partie i dokumenty."],
      ["Logistyka przy S7", "Zlecenia i dokumenty."],
      ["Turystyka i wydarzenia", "Rezerwacje, grupy i pytania gości."],
    ],
    processes: [
      ["Zamówienia od klientów", "Zamówienia z maili odczytane przez AI."],
      ["Terminy realizacji", "Klient dostaje informację o etapie zamówienia."],
      ["Rezerwacje grup", "Zapytanie, oferta i zaliczka w jednym przepływie."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
    ],
    faq: [
      ["Czy pracujecie z zakładami z Ostródy?", "Tak. Zamówienia, terminy, dostawy, reklamacje i raporty."],
      ["Czy automatyzujecie obiekty turystyczne nad jeziorem Drwęckim?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."],
      remote("Ostródy"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-logistyki", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "ilawa",
    name: "Iława",
    nameGenitive: "Iławy",
    nameLocative: "Iławie",
    nearbyCitySlugs: ["ostroda", "nowe-miasto-lubawskie", "olsztyn", "elblag", "torun"],
    metaDescription:
      "Automatyzacja dla firm z Iławy: produkcja, meble, przetwórstwo i turystyka nad Jeziorakiem. Zamówienia i rezerwacje bez przepisywania.",
    heroLead:
      "Pomagamy iławskim zakładom i obiektom turystycznym uporządkować zamówienia, dostawy i rezerwacje.",
    intro: [
      "Iława leży nad Jeziorakiem, najdłuższym jeziorem w Polsce. W mieście i okolicy działają zakłady produkcyjne, meblarskie i spożywcze, a miasto jest też ważnym węzłem kolejowym.",
      "Jeziorak przyciąga żeglarzy i turystów, a sezon letni ożywia hotele, przystanie i gastronomię.",
    ],
    localContext:
      "Iławskie firmy produkują dla klientów w całej Polsce, a obiekty turystyczne mają wyraźny sezon.",
    whyHere:
      "W Iławie automatyzacja przyspiesza zamówienia w produkcji i porządkuje rezerwacje w sezonie.",
    industries: [
      ["Produkcja i meble", "Zamówienia, terminy i dostawy."],
      ["Przetwórstwo spożywcze", "Zamówienia i partie."],
      tourismIndustries[0],
      tourismIndustries[1],
    ],
    processes: [
      ["Zamówienia od klientów", "Zamówienia z maili odczytane przez AI."],
      tourismProcesses[0],
      tourismProcesses[2],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z zakładami z Iławy?", "Tak. Zamówienia, terminy, dostawy i reklamacje."],
      ["Czy automatyzujecie przystanie i wypożyczalnie nad Jeziorakiem?", "Tak. Rezerwacje, umowy, kaucje i przypomnienia."],
      remote("Iławy"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "nowe-miasto-lubawskie",
    name: "Nowe Miasto Lubawskie",
    nameGenitive: "Nowego Miasta Lubawskiego",
    nameLocative: "Nowym Mieście Lubawskim",
    nearbyCitySlugs: ["ilawa", "ostroda", "dzialdowo", "torun", "olsztyn"],
    metaDescription:
      "Automatyzacja dla firm z Nowego Miasta Lubawskiego: produkcja, meble, rolnictwo i handel. Zamówienia i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom z Nowego Miasta Lubawskiego przejąć powtarzalną pracę z zamówieniami i dokumentami.",
    intro: [
      "Nowe Miasto Lubawskie leży nad Drwęcą, w ziemi lubawskiej, znanej z przedsiębiorczości i rodzinnych firm produkcyjnych, w tym meblarskich.",
      "Lokalna gospodarka łączy produkcję, rolnictwo i handel.",
    ],
    localContext:
      "Firmy z ziemi lubawskiej to często rodzinne zakłady, które rosną szybciej niż ich biuro.",
    whyHere:
      "W Nowym Mieście Lubawskim automatyzacja pozwala obsłużyć więcej zamówień bez dokładania etatów w biurze.",
    industries: [
      ["Meble i produkcja", "Zamówienia, terminy i dostawy."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Przyjmowanie zamówień", "Zamówienia z maili w jednym rejestrze."],
      ["Wyceny", "Szkic wyceny z cennika i podobnych zamówień."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Raport sprzedaży", "Sprzedaż według klientów."],
    ],
    faq: [
      ["Czy pracujecie z rodzinnymi zakładami produkcyjnymi?", "Tak. Zamówienia, wyceny, terminy i dostawy to typowe obszary."],
      ["Czy automatyzacja wymaga nowych systemów?", "Zwykle nie. Łączymy te, których używacie."],
      remote("Nowego Miasta Lubawskiego"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "dzialdowo",
    name: "Działdowo",
    nameGenitive: "Działdowa",
    nameLocative: "Działdowie",
    nearbyCitySlugs: ["nidzica", "nowe-miasto-lubawskie", "mlawa", "ciechanow", "olsztyn"],
    metaDescription:
      "Automatyzacja dla firm z Działdowa: produkcja w strefie ekonomicznej, logistyka przy S7 i kolei, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy działdowskim zakładom i firmom logistycznym uporządkować zamówienia, dostawy i dokumentację.",
    intro: [
      "Działdowo leży na granicy Mazur i Mazowsza, przy drodze S7 i ważnej linii kolejowej. W strefie ekonomicznej działają zakłady produkcyjne, które korzystają z dobrego połączenia z Warszawą i Trójmiastem.",
      "Miasto obsługuje powiat jako centrum handlu i usług.",
    ],
    localContext:
      "Działdowskie zakłady produkują dla odbiorców w kraju i za granicą, a firmy transportowe obsługują ruch na trasie S7.",
    whyHere:
      "W Działdowie automatyzacja przyspiesza zamówienia i dokumenty dostaw, a handlowcy znają status bez telefonu.",
    industries: [
      ["Produkcja w strefie ekonomicznej", "Zamówienia, zakupy i dokumentacja."],
      ["Logistyka przy S7", "Zlecenia, awizacje i dokumenty."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Zamówienia z portali klientów", "Pobierane automatycznie i przekazywane do systemu."],
      ["Awizacje dostaw", "Terminy potwierdzane automatycznie z przewoźnikami."],
      ["Rozliczenia z przewoźnikami", "Faktury kosztowe dopasowane do zleceń."],
      ["Raport produkcji", "Wskaźniki zbierane automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z zakładami z Działdowa?", "Tak. Zamówienia, zakupy, reklamacje i raporty."],
      ["Czy automatyzujecie firmy transportowe przy S7?", "Tak. Zlecenia, dokumenty, statusy i rozliczenia."],
      remote("Działdowa"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "nidzica",
    name: "Nidzica",
    nameGenitive: "Nidzicy",
    nameLocative: "Nidzicy",
    nearbyCitySlugs: ["szczytno", "dzialdowo", "olsztyn", "mlawa", "ostroda"],
    metaDescription:
      "Automatyzacja dla firm z Nidzicy: produkcja, logistyka przy S7, rolnictwo i turystyka. Zamówienia i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom z Nidzicy uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Nidzica leży przy drodze S7, z krzyżackim zamkiem górującym nad miastem. W podstrefie ekonomicznej działają zakłady produkcyjne, a położenie przy trasie sprzyja logistyce.",
      "Okolica to rolnictwo, lasy i turystyka.",
    ],
    localContext:
      "Firmy z Nidzicy obsługują odbiorców z Warszawy i Trójmiasta, korzystając z bliskości S7.",
    whyHere:
      "W Nidzicy automatyzacja porządkuje zamówienia i dokumenty w produkcji i transporcie.",
    industries: [
      ["Produkcja", "Zamówienia, zakupy i dokumentacja."],
      ["Transport", "Zlecenia i dokumenty."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Turystyka", "Rezerwacje i pytania gości."],
    ],
    processes: [
      ["Przyjmowanie zamówień", "Zamówienia z maili w jednym rejestrze."],
      ["Status dostawy", "Klient dostaje informację o etapie dostawy automatycznie."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z zakładami z Nidzicy?", "Tak. Zamówienia, zakupy, dostawy i raporty."],
      ["Czy automatyzacja wymaga nowych systemów?", "Zwykle nie. Łączymy te, których używacie."],
      remote("Nidzicy"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "szczytno",
    name: "Szczytno",
    nameGenitive: "Szczytna",
    nameLocative: "Szczytnie",
    nearbyCitySlugs: ["olsztyn", "nidzica", "mragowo", "pisz", "dzialdowo"],
    metaDescription:
      "Automatyzacja dla firm ze Szczytna: produkcja, drewno, usługi, turystyka i firmy przy lotnisku Olsztyn-Mazury. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom ze Szczytna przejąć powtarzalną pracę z zamówieniami, dokumentami i rezerwacjami.",
    intro: [
      "Szczytno leży między jeziorami na skraju Puszczy Piskiej. W pobliżu znajduje się regionalne lotnisko Olsztyn-Mazury, a w mieście działa szkoła policji, która jest ważnym pracodawcą.",
      "Lokalna gospodarka to produkcja, przemysł drzewny, usługi i turystyka.",
    ],
    localContext:
      "Szczycieńskie firmy obsługują mieszkańców, gości i firmy z całego powiatu, często w małych zespołach.",
    whyHere:
      "W Szczytnie automatyzacja odciąża małe zespoły z przepisywania i powtarzalnych odpowiedzi.",
    industries: [
      ["Produkcja i drewno", "Zamówienia, dostawy i faktury."],
      ["Usługi", "Zapytania, terminy i płatności."],
      ["Turystyka", "Rezerwacje i pytania gości."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia z maili", "Zamówienia odczytane przez AI i zapisane w rejestrze."],
      ["Rejestracja wizyt", "Terminy online z przypomnieniem."],
      tourismProcesses[0],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy automatyzacja opłaca się w małej firmie?", "Tak, jeśli zespół traci kilka godzin tygodniowo na powtarzalną pracę."],
      ["Czy automatyzujecie obiekty turystyczne?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."],
      remote("Szczytna"),
      start,
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-obsludze-klienta", "automatyzacja-sprzedazy", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "mragowo",
    name: "Mrągowo",
    nameGenitive: "Mrągowa",
    nameLocative: "Mrągowie",
    nearbyCitySlugs: ["gizycko", "szczytno", "ketrzyn", "pisz", "olsztyn"],
    metaDescription:
      "Automatyzacja dla hoteli, pensjonatów i firm z Mrągowa: rezerwacje, wydarzenia, pytania gości i rozliczenia w sezonie. Konsultacja 30 min.",
    heroLead:
      "Pomagamy mrągowskim hotelom, organizatorom wydarzeń i firmom turystycznym obsłużyć sezon bez przeciążenia recepcji.",
    intro: [
      "Mrągowo jest jednym z najpopularniejszych miast turystycznych na Mazurach. Hotele, ośrodki konferencyjne i pensjonaty nad jeziorem Czos obsługują turystów, grupy firmowe i gości dużych wydarzeń.",
      "Poza sezonem miasto żyje z usług, handlu i małych firm produkcyjnych.",
    ],
    localContext:
      "Mrągowskie hotele obsługują turystów indywidualnych i konferencje firmowe, a to oznacza rezerwacje grupowe, umowy i rozliczenia.",
    whyHere:
      "W Mrągowie automatyzacja porządkuje rezerwacje indywidualne i grupowe, a recepcja nie odpowiada w kółko na te same pytania.",
    industries: [
      tourismIndustries[0],
      ["Konferencje i wydarzenia", "Zapytania firm, oferty, umowy i rozliczenia."],
      tourismIndustries[2],
      ["Usługi i handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Oferty konferencyjne", "Zapytanie firmy w CRM, oferta z szablonu i przypomnienie o kontakcie."],
      tourismProcesses[0],
      tourismProcesses[1],
      tourismProcesses[3],
    ],
    faq: [
      ["Czy automatyzujecie hotele konferencyjne w Mrągowie?", "Tak. Zapytania firm, oferty, umowy, rezerwacje i rozliczenia."],
      ["Czy asystent odpowie gościom w nocy?", "Tak. Odpowiada o każdej porze na podstawie waszych informacji."],
      remote("Mrągowa"),
      start,
    ],
    services: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-sprzedazy", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "gizycko",
    name: "Giżycko",
    nameGenitive: "Giżycka",
    nameLocative: "Giżycku",
    nearbyCitySlugs: ["mragowo", "wegorzewo", "pisz", "elk", "olsztyn"],
    metaDescription:
      "Automatyzacja dla firm z Giżycka: czartery jachtów, hotele, przystanie i turystyka na Wielkich Jeziorach Mazurskich. Konsultacja 30 min.",
    heroLead:
      "Pomagamy giżyckim firmom czarterowym, hotelom i przystaniom obsłużyć sezon żeglarski bez chaosu w rezerwacjach.",
    intro: [
      "Giżycko jest żeglarską stolicą Polski, położoną między jeziorami Niegocin i Kisajno. Czartery jachtów, przystanie, hotele i szkoły żeglarskie obsługują w sezonie tysiące gości.",
      "Twierdza Boyen i jeziora przyciągają turystów także poza sezonem żeglarskim.",
    ],
    localContext:
      "Giżyckie firmy czarterowe obsługują rezerwacje z wielu źródeł, umowy, kaucje i przekazania jachtów w krótkim sezonie.",
    whyHere:
      "W Giżycku automatyzacja porządkuje rezerwacje, umowy i kaucje, a zespół zajmuje się klientami na przystani.",
    industries: [
      ["Czartery jachtów", "Rezerwacje, umowy, kaucje i przekazania."],
      ["Hotele i pensjonaty", "Rezerwacje, zaliczki i pytania gości."],
      ["Szkoły żeglarskie", "Zapisy, płatności i certyfikaty."],
      ["Gastronomia", "Rezerwacje grup i zamówienia."],
    ],
    processes: [
      ["Rezerwacja czarteru", "Rezerwacja, umowa z szablonu i link do zaliczki."],
      ["Kaucje i rozliczenia", "Kaucja i jej zwrot po zdaniu jachtu bez ręcznych przelewów."],
      ["Zapisy na kursy", "Formularz, płatność i potwierdzenie z listą rzeczy do zabrania."],
      tourismProcesses[1],
    ],
    faq: [
      ["Czy automatyzujecie firmy czarterowe w Giżycku?", "Tak. Rezerwacje, umowy, kaucje, przekazania jachtów i opinie."],
      ["Czy połączycie rezerwacje z portali czarterowych?", "Tak, jeśli portale udostępniają dane lub przysyłają rezerwacje mailem."],
      remote("Giżycka"),
      start,
    ],
    services: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "pisz",
    name: "Pisz",
    nameGenitive: "Pisza",
    nameLocative: "Piszu",
    nearbyCitySlugs: ["gizycko", "mragowo", "elk", "szczytno", "olsztyn"],
    metaDescription:
      "Automatyzacja dla firm z Pisza: przemysł drzewny, turystyka w Puszczy Piskiej, spływy i usługi. Zamówienia i rezerwacje bez przepisywania.",
    heroLead:
      "Pomagamy piskim firmom drzewnym i turystycznym uporządkować zamówienia, dostawy i rezerwacje.",
    intro: [
      "Pisz leży nad jeziorem Roś, w sercu Puszczy Piskiej. Przemysł drzewny i usługi leśne od dawna tworzą lokalną gospodarkę.",
      "Rzeka Krutynia i jeziora przyciągają kajakarzy i turystów, którzy w sezonie wypełniają pensjonaty i wypożyczalnie.",
    ],
    localContext:
      "Piskie firmy łączą obsługę przemysłu drzewnego z sezonową turystyką, często w niewielkich zespołach.",
    whyHere:
      "W Piszu automatyzacja porządkuje zamówienia drewna i rezerwacje w sezonie.",
    industries: [
      ["Przemysł drzewny", "Zamówienia, dostawy i faktury."],
      ["Spływy i wypożyczalnie", "Rezerwacje, transport kajaków i płatności."],
      tourismIndustries[0],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Rezerwacje spływów", "Rezerwacja, zaliczka i przypomnienie z miejscem zbiórki."],
      ["Zamówienia drewna", "Zamówienia z maili odczytane i zapisane w rejestrze."],
      tourismProcesses[0],
      ["Faktury", "Faktura po realizacji i przypomnienie o płatności."],
    ],
    faq: [
      ["Czy automatyzujecie wypożyczalnie kajaków?", "Tak. Rezerwacje, zaliczki, transport sprzętu i przypomnienia."],
      ["Czy pracujecie z zakładami drzewnymi?", "Tak. Zamówienia, dostawy i dokumenty."],
      remote("Pisza"),
      start,
    ],
    services: ["automatyzacja-w-obsludze-klienta", "automatyzacja-w-produkcji", "chatbot-ai-dla-firmy", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "ketrzyn",
    name: "Kętrzyn",
    nameGenitive: "Kętrzyna",
    nameLocative: "Kętrzynie",
    nearbyCitySlugs: ["mragowo", "bartoszyce", "gizycko", "wegorzewo", "olsztyn"],
    metaDescription:
      "Automatyzacja dla firm z Kętrzyna: produkcja, przetwórstwo, rolnictwo i turystyka. Zamówienia, rezerwacje i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy kętrzyńskim zakładom i firmom turystycznym uporządkować zamówienia, dokumenty i rezerwacje.",
    intro: [
      "Kętrzyn leży na północy Mazur. Działają tu zakłady produkcyjne i przetwórcze, a okolica słynie z rolnictwa.",
      "W pobliżu znajdują się Wilczy Szaniec i sanktuarium w Świętej Lipce, które przyciągają turystów z Polski i zagranicy.",
    ],
    localContext:
      "Kętrzyńskie firmy obsługują rolnictwo, przemysł i ruch turystyczny, często z niewielkim biurem.",
    whyHere:
      "W Kętrzynie automatyzacja porządkuje zamówienia w produkcji i rezerwacje grup w turystyce.",
    industries: [
      ["Produkcja", "Zamówienia, zakupy i dokumentacja."],
      ["Przetwórstwo i rolnictwo", "Dostawy, partie i rozliczenia."],
      ["Turystyka", "Rezerwacje grup i pytania gości."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia od klientów", "Zamówienia z maili odczytane przez AI."],
      ["Rezerwacje grup", "Zapytanie, oferta i zaliczka w jednym przepływie."],
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z zakładami z Kętrzyna?", "Tak. Zamówienia, zakupy, dokumenty i raporty."],
      ["Czy asystent odpowie turystom z zagranicy?", "Tak, w ich języku, na podstawie waszych informacji."],
      remote("Kętrzyna"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "bartoszyce",
    name: "Bartoszyce",
    nameGenitive: "Bartoszyc",
    nameLocative: "Bartoszycach",
    nearbyCitySlugs: ["lidzbark-warminski", "ketrzyn", "braniewo", "olsztyn", "wegorzewo"],
    metaDescription:
      "Automatyzacja dla firm z Bartoszyc: rolnictwo, przetwórstwo, produkcja i handel. Dostawy, zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Bartoszyc uporządkować dostawy, zamówienia i dokumenty.",
    intro: [
      "Bartoszyce leżą na północy regionu, blisko granicy z obwodem królewieckim. Lokalna gospodarka opiera się na rolnictwie, przetwórstwie i produkcji.",
      "Miasto obsługuje powiat jako centrum handlu i usług.",
    ],
    localContext:
      "Firmy z Bartoszyc obsługują gospodarstwa i odbiorców z regionu, często w małych zespołach.",
    whyHere:
      "W Bartoszycach automatyzacja porządkuje dokumenty dostaw i rozliczenia w firmach rolnych i handlowych.",
    industries: [
      ["Rolnictwo", "Dostawy, umowy i rozliczenia."],
      ["Przetwórstwo", "Zamówienia i partie."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do działów."],
      ["Zamówienia od odbiorców", "Zamówienia z maili w rejestrze."],
      ["Terminy płatności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z firmami rolnymi?", "Tak, w dokumentach, rozliczeniach i raportach."],
      ["Czy automatyzacja działa z telefonu?", "Wiele kroków tak, np. zdjęcie dokumentu dostawy."],
      remote("Bartoszyc"),
      start,
    ],
    services: ["automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "lidzbark-warminski",
    name: "Lidzbark Warmiński",
    nameGenitive: "Lidzbarka Warmińskiego",
    nameLocative: "Lidzbarku Warmińskim",
    nearbyCitySlugs: ["bartoszyce", "braniewo", "olsztyn", "ketrzyn", "elblag"],
    metaDescription:
      "Automatyzacja dla firm z Lidzbarka Warmińskiego: termy, hotele, turystyka, produkcja i usługi. Rezerwacje i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy lidzbarskim obiektom turystycznym i firmom usługowym uporządkować rezerwacje, zamówienia i dokumenty.",
    intro: [
      "Lidzbark Warmiński słynie z zamku biskupów warmińskich i term, które przyciągają gości przez cały rok. Hotele, pensjonaty i gastronomia obsługują turystów i kuracjuszy.",
      "W mieście działają też zakłady produkcyjne i firmy usługowe.",
    ],
    localContext:
      "Lidzbarskie obiekty obsługują gości przez cały rok, nie tylko latem, więc obsługa rezerwacji jest stałym obciążeniem.",
    whyHere:
      "W Lidzbarku Warmińskim automatyzacja porządkuje rezerwacje i pakiety pobytowe, a recepcja zajmuje się gośćmi.",
    industries: [
      tourismIndustries[0],
      ["Termy i rekreacja", "Bilety, pakiety i pytania gości."],
      ["Produkcja", "Zamówienia i dokumenty."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Pakiety pobytowe", "Rezerwacja noclegu z biletami i zabiegami w jednym przepływie."],
      tourismProcesses[1],
      tourismProcesses[2],
      tourismProcesses[3],
    ],
    faq: [
      ["Czy automatyzujecie hotele przy termach?", "Tak. Rezerwacje, pakiety, zaliczki i odpowiedzi na pytania gości."],
      ["Czy pracujecie z firmami produkcyjnymi?", "Tak. Zamówienia, dostawy i dokumenty."],
      remote("Lidzbarka Warmińskiego"),
      start,
    ],
    services: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "braniewo",
    name: "Braniewo",
    nameGenitive: "Braniewa",
    nameLocative: "Braniewie",
    nearbyCitySlugs: ["elblag", "lidzbark-warminski", "bartoszyce", "olsztyn", "gdansk"],
    metaDescription:
      "Automatyzacja dla firm z Braniewa: przetwórstwo, produkcja, rolnictwo i usługi. Zamówienia, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy braniewskim firmom przejąć powtarzalną pracę z zamówieniami, fakturami i dokumentami.",
    intro: [
      "Braniewo leży na północnym krańcu Warmii, blisko Zalewu Wiślanego i granicy z obwodem królewieckim. Działają tu zakłady przetwórcze, produkcyjne i firmy rolnicze.",
      "Miasto ma długą historię jako ośrodek Warmii i obsługuje powiat jako centrum usług.",
    ],
    localContext:
      "Braniewskie firmy współpracują często z odbiorcami z Elbląga i Trójmiasta, w małych zespołach biurowych.",
    whyHere:
      "W Braniewie automatyzacja odciąża biura z przepisywania zamówień i faktur.",
    industries: [
      ["Przetwórstwo", "Zamówienia, partie i dokumenty."],
      ["Produkcja", "Zlecenia i zakupy."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Zamówienia z maili", "Zamówienia odczytane przez AI i zapisane w rejestrze."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zamówień."],
      ["Przypomnienia o płatnościach", "Wysyłane automatycznie po terminie."],
      ["Raport sprzedaży", "Sprzedaż według klientów."],
    ],
    faq: [
      ["Czy automatyzacja opłaca się w małej firmie?", "Tak, jeśli zespół traci kilka godzin tygodniowo na powtarzalną pracę."],
      ["Czy pracujecie z zakładami przetwórczymi?", "Tak. Zamówienia, partie, dokumenty jakości i reklamacje."],
      remote("Braniewa"),
      start,
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "ai-w-obsludze-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "olecko",
    name: "Olecko",
    nameGenitive: "Olecka",
    nameLocative: "Olecku",
    nearbyCitySlugs: ["elk", "goldap", "suwalki", "gizycko", "olsztyn"],
    metaDescription:
      "Automatyzacja dla firm z Olecka: produkcja, przetwórstwo, rolnictwo i turystyka. Zamówienia, rezerwacje i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Olecka uporządkować zamówienia, rezerwacje i dokumenty.",
    intro: [
      "Olecko leży na wschodnich Mazurach, nad jeziorami Oleckie Wielkie i Oleckie Małe. Działają tu zakłady produkcyjne i przetwórcze oraz firmy rolnicze.",
      "Jeziora i lasy przyciągają turystów, a miasto obsługuje powiat jako ośrodek usług.",
    ],
    localContext:
      "Oleckie firmy to w dużej mierze małe przedsiębiorstwa z niewielkimi zespołami.",
    whyHere:
      "W Olecku automatyzacja odciąża małe zespoły z przepisywania i pilnowania terminów.",
    industries: [
      ["Produkcja", "Zlecenia i zakupy."],
      ["Przetwórstwo i rolnictwo", "Dostawy i rozliczenia."],
      ["Turystyka", "Rezerwacje i pytania gości."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Przyjmowanie zamówień", "Zamówienia z maili w jednym rejestrze."],
      tourismProcesses[0],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
    ],
    faq: [
      ["Czy automatyzacja opłaca się w małej firmie?", "Tak, jeśli zespół traci czas na powtarzalną pracę."],
      ["Czy automatyzujecie obiekty turystyczne?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania."],
      remote("Olecka"),
      start,
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "goldap",
    name: "Gołdap",
    nameGenitive: "Gołdapi",
    nameLocative: "Gołdapi",
    nearbyCitySlugs: ["olecko", "wegorzewo", "suwalki", "elk", "olsztyn"],
    metaDescription:
      "Automatyzacja dla uzdrowiska, hoteli i firm z Gołdapi: rezerwacje pobytów, zabiegi, pytania gości i rozliczenia. Konsultacja 30 min.",
    heroLead:
      "Pomagamy gołdapskim obiektom uzdrowiskowym, hotelom i firmom usługowym uporządkować rezerwacje i obsługę gości.",
    intro: [
      "Gołdap jest uzdrowiskiem na pograniczu z obwodem królewieckim, położonym przy Puszczy Rominckiej. Sanatoria i hotele obsługują kuracjuszy i turystów przez cały rok.",
      "W mieście działają też firmy przetwórcze, handlowe i usługowe, a w pobliżu jest stok narciarski.",
    ],
    localContext:
      "Gołdapskie obiekty obsługują kuracjuszy i turystów, którzy mają wiele pytań o pobyty, zabiegi i dojazd.",
    whyHere:
      "W Gołdapi automatyzacja porządkuje rezerwacje i zabiegi, a na typowe pytania odpowiada asystent.",
    industries: [
      ["Uzdrowisko i sanatoria", "Rezerwacje pobytów, zabiegi i rozliczenia."],
      tourismIndustries[0],
      ["Przetwórstwo", "Zamówienia i partie."],
      ["Usługi", "Terminy i płatności."],
    ],
    processes: [
      ["Harmonogram zabiegów", "Zabiegi przypisane do gości automatycznie, z przypomnieniem."],
      tourismProcesses[1],
      tourismProcesses[2],
      tourismProcesses[3],
    ],
    faq: [
      ["Czy automatyzujecie sanatoria w Gołdapi?", "Tak. Rezerwacje, zabiegi, przypomnienia i rozliczenia."],
      ["Czy asystent AI udziela porad medycznych?", "Nie. Odpowiada na pytania organizacyjne, a sprawy medyczne przekazuje personelowi."],
      remote("Gołdapi"),
      start,
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "wegorzewo",
    name: "Węgorzewo",
    nameGenitive: "Węgorzewa",
    nameLocative: "Węgorzewie",
    nearbyCitySlugs: ["gizycko", "goldap", "ketrzyn", "bartoszyce", "olsztyn"],
    metaDescription:
      "Automatyzacja dla firm z Węgorzewa: żeglarstwo, przystanie, hotele i turystyka nad Mamrami. Rezerwacje i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy węgorzewskim przystaniom, firmom czarterowym i hotelom uporządkować rezerwacje w sezonie.",
    intro: [
      "Węgorzewo leży nad jeziorem Mamry, na północnym krańcu szlaku Wielkich Jezior Mazurskich. Przystanie, czartery jachtów i pensjonaty obsługują żeglarzy i turystów.",
      "Poza sezonem miasto żyje z usług, handlu i rolnictwa.",
    ],
    localContext:
      "Węgorzewskie firmy turystyczne mają krótki, intensywny sezon, w którym każda godzina pracy biura jest cenna.",
    whyHere:
      "W Węgorzewie automatyzacja przejmuje rezerwacje i powtarzalne odpowiedzi w sezonie żeglarskim.",
    industries: [
      ["Czartery i przystanie", "Rezerwacje, umowy, kaucje i opłaty portowe."],
      tourismIndustries[0],
      tourismIndustries[2],
      ["Usługi i handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Rezerwacja czarteru", "Rezerwacja, umowa z szablonu i link do zaliczki."],
      ["Opłaty portowe", "Rejestracja jachtów i płatności na przystani."],
      tourismProcesses[0],
      tourismProcesses[1],
    ],
    faq: [
      ["Czy automatyzujecie przystanie i czartery w Węgorzewie?", "Tak. Rezerwacje, umowy, kaucje i opłaty."],
      ["Kiedy zacząć przygotowania do sezonu?", "Najlepiej zimą, żeby wszystko działało przed majówką."],
      remote("Węgorzewa"),
      start,
    ],
    services: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
];
