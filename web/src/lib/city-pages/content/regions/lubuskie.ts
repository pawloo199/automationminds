import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "lubuskie", regionCluster: "lubuskie", updatedAt: "2026-10-15" } as const;

export const lubuskieRegion = region({
  slug: "lubuskie",
  intro: [
    "Lubuskie to region przy granicy z Niemcami, z dwiema stolicami: Gorzowem Wielkopolskim i Zieloną Górą. Granica, autostrada A2 i drogi S3 oraz A18 sprawiają, że przez region płynie duży ruch towarów na zachód, a wiele firm sprzedaje do Niemiec albo pracuje dla niemieckich odbiorców.",
    "Gospodarka opiera się na przemyśle drzewnym, meblarskim, motoryzacyjnym i metalowym, a strefy ekonomiczne przyciągnęły zakłady produkcyjne i centra logistyczne. Ponad połowę powierzchni województwa zajmują lasy, co od lat wspiera przetwórstwo drewna.",
    "Dla lubuskich firm codziennością są dokumenty w dwóch językach, rozliczenia w euro i wymagania zagranicznych klientów co do terminów i jakości.",
    "Z firmami z Lubuskiego pracujemy zdalnie z naszej siedziby we Wrocławiu, a na warsztaty przyjeżdżamy, gdy przyspieszają projekt.",
  ],
  industries: [
    ["Przemysł drzewny i meblarski", "Zamówienia, wyceny, terminy produkcji i dostawy do odbiorców w Polsce i Niemczech."],
    ["Motoryzacja i przemysł metalowy", "Zamówienia z portali klientów, dokumentacja jakości, reklamacje i raporty."],
    ["Logistyka przy granicy", "Zlecenia transportowe, dokumenty, awizacje i rozliczenia z przewoźnikami."],
    ["Handel i usługi dla klientów z Niemiec", "Oferty, zamówienia i obsługa klienta po polsku i niemiecku."],
    ["Turystyka i rekreacja", "Rezerwacje i pytania gości w obiektach nad jeziorami i w lasach."],
  ],
  faq: [
    ["Czy macie biuro w Zielonej Górze lub Gorzowie?", "Nie. Pracujemy zdalnie z siedziby we Wrocławiu, a na warsztaty na miejscu przyjeżdżamy, gdy przyspieszają projekt."],
    ["Czy automatyzacja obsłuży niemieckich klientów?", "Tak. AI odczytuje zamówienia i dokumenty po niemiecku, a asystenci odpowiadają w języku klienta na podstawie waszych informacji."],
    ["Czy pracujecie z firmami meblarskimi i drzewnymi?", "Tak. Wyceny, zamówienia, terminy produkcji, dostawy i reklamacje to częste obszary wdrożeń."],
    ["Od czego zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces z najszybszym zwrotem."],
  ],
});

export const lubuskieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "zielona-gora",
    name: "Zielona Góra",
    nameGenitive: "Zielonej Góry",
    nameLocative: "Zielonej Górze",
    nearbyCitySlugs: ["nowa-sol", "zary", "swiebodzin", "gorzow-wielkopolski", "wroclaw", "leszno"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Zielonej Góry: produkcja, IT, handel z Niemcami, logistyka i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy zielonogórskim firmom produkcyjnym, technologicznym i handlowym przejąć powtarzalną pracę z dokumentami, zamówieniami i obsługą klientów.",
    intro: [
      "Zielona Góra jest siedzibą władz samorządowych województwa i jego największym ośrodkiem akademickim. Działa tu uniwersytet, park technologiczny i rosnąca grupa firm IT, a w okolicy zakłady produkcyjne w strefach ekonomicznych.",
      "Miasto słynie z tradycji winiarskich i Winobrania, a w regionie powstają kolejne winnice. Biznes łączy tu przemysł, usługi i handel z partnerami z Niemiec.",
    ],
    localContext:
      "Zielonogórskie firmy często pracują dla odbiorców z Niemiec, z umowami, zamówieniami i korespondencją w dwóch językach, a do tego z polskimi wymaganiami księgowymi.",
    whyHere:
      "W Zielonej Górze automatyzacja przyspiesza obsługę zamówień i dokumentów w dwóch językach, a zespoły mogą rosnąć bez dokładania pracy w biurze.",
    economy: {
      title: "Czym żyje zielonogórski biznes",
      paragraphs: [
        "Zielona Góra jest centrum akademickim i administracyjnym regionu. Uniwersytet i park naukowo-technologiczny tworzą zaplecze dla firm IT i inżynierskich.",
        "W strefach ekonomicznych w mieście i okolicy działają zakłady produkcyjne, m.in. z branży motoryzacyjnej, elektronicznej i metalowej, a wokół nich firmy logistyczne i usługowe.",
        "Bliskość granicy i drogi S3 sprawia, że handel z Niemcami i logistyka są ważną częścią lokalnej gospodarki, a tradycje winiarskie przyciągają turystów.",
      ],
    },
    industries: [
      ["Produkcja w strefach ekonomicznych", "Zamówienia z portali klientów, dokumentacja jakości, zakupy i reklamacje."],
      ["IT i usługi technologiczne", "Zgłoszenia klientów, czas pracy, rozliczenia projektów i onboarding."],
      ["Handel z Niemcami", "Oferty i zamówienia po niemiecku, dokumenty transportowe i rozliczenia w euro."],
      ["Winiarstwo i turystyka", "Rezerwacje degustacji, sprzedaż i pytania gości."],
    ],
    processes: [
      ["Zamówienia z portali klientów", "Zamówienia pobierane automatycznie i przekazywane do systemu."],
      ["Dokumentacja jakości", "Świadectwa i raporty przypisane do partii, gotowe przy reklamacji."],
      ["Obsługa klienta w dwóch językach", "Szkice odpowiedzi po polsku i niemiecku przygotowane przez AI."],
      ["Raporty dla zarządu", "Sprzedaż, koszty i należności zebrane automatycznie."],
    ],
    example: {
      title: "Zamówienie od niemieckiego klienta w zielonogórskiej firmie przed i po automatyzacji",
      lead: "Przykład producenta z okolic Zielonej Góry, który dostarcza komponenty odbiorcom w Niemczech. Tak zmienia się obsługa jednego zamówienia.",
      rows: [
        ["Przyjęcie zamówienia", "PDF po niemiecku przepisywany ręcznie do systemu.", "AI odczytuje pozycje i zaznacza różnice względem oferty."],
        ["Potwierdzenie", "Wysyłane po kilku dniach, po uzgodnieniu terminu.", "Potwierdzenie z terminem z planowania, w języku klienta."],
        ["Dokumenty wysyłkowe", "Kompletowane ręcznie z kilku miejsc.", "Przygotowane z zamówienia, z listą braków do uzupełnienia."],
        ["Faktura w euro", "Wystawiana ręcznie po wysyłce.", "Tworzona automatycznie po potwierdzeniu wysyłki."],
      ],
    },
    faq: [
      ["Czy pracujecie z firmami z Zielonej Góry?", "Tak, zdalnie, a w razie potrzeby przyjeżdżamy na warsztat. Zaczynamy od bezpłatnej konsultacji."],
      ["Czy automatyzujecie zamówienia od niemieckich klientów?", "Tak. Odczyt zamówień po niemiecku, potwierdzenia, dokumenty wysyłkowe i faktury w euro."],
      ["Czy pomagacie zielonogórskim firmom IT?", "Tak. Zgłoszenia klientów, ewidencja czasu, rozliczenia projektów i onboarding pracowników."],
      ["Ile trwa pierwsze wdrożenie?", "Zwykle kilka tygodni, łącznie z testem na prawdziwych danych."],
    ],
    services: ["automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "automatyzacja-sprzedazy", "automatyzacja-dla-firm-uslugowych"],
  }),
  town({
    ...base,
    slug: "gorzow-wielkopolski",
    name: "Gorzów Wielkopolski",
    nameGenitive: "Gorzowa Wielkopolskiego",
    nameLocative: "Gorzowie Wielkopolskim",
    nearbyCitySlugs: ["miedzyrzecz", "slubice", "strzelce-krajenskie", "zielona-gora", "szczecin", "poznan"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Gorzowa Wielkopolskiego: produkcja, motoryzacja, logistyka i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy gorzowskim zakładom, firmom logistycznym i usługowym przejąć powtarzalną pracę biura i działów wsparcia.",
    intro: [
      "Gorzów Wielkopolski jest siedzibą wojewody i największym miastem północnej części regionu. Ma silną tradycję przemysłową, a strefa ekonomiczna przyciągnęła zakłady z branży motoryzacyjnej, elektronicznej i chemicznej.",
      "Miasto leży nad Wartą, blisko drogi S3 i niedaleko granicy z Niemcami, co sprzyja logistyce i współpracy z zachodnimi odbiorcami.",
    ],
    localContext:
      "W Gorzowie wiele firm to dostawcy dużych zakładów produkcyjnych, z ich wymaganiami dotyczącymi dokumentacji, terminów i raportów jakości.",
    whyHere:
      "W Gorzowie automatyzacja porządkuje zamówienia, dokumentację i rozliczenia u dostawców przemysłu, a raporty powstają bez ręcznego składania.",
    economy: {
      title: "Czym żyje gorzowski biznes",
      paragraphs: [
        "Gorzów ma długą tradycję przemysłową. Dziś w strefie ekonomicznej działają zakłady motoryzacyjne, elektroniczne i chemiczne, a wokół nich dostawcy, firmy serwisowe i logistyczne.",
        "Miasto jest też ośrodkiem usług i administracji dla północnej części województwa, z rosnącą liczbą firm usługowych.",
      ],
    },
    industries: [
      ["Motoryzacja i elektronika", "Zamówienia, dokumentacja jakości, reklamacje i raporty dla klientów."],
      ["Dostawcy i serwis przemysłowy", "Zlecenia, protokoły, uprawnienia pracowników i rozliczenia."],
      ["Logistyka", "Zlecenia transportowe, awizacje i dokumenty."],
      ["Usługi dla firm", "Zapytania, umowy, czas pracy i faktury."],
    ],
    processes: [
      ["Reklamacje klientów", "Rejestr z terminami i szkicem raportu w formacie klienta."],
      ["Protokoły serwisowe", "Formularz na telefonie zamiast notatek przepisywanych wieczorem."],
      ["Obieg faktur kosztowych", "Faktury z KSeF przypisane do zleceń i zaakceptowane w jednym obiegu."],
      ["Raport jakości", "Wskaźniki reklamacji i dostaw zbierane automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami zakładów w gorzowskiej strefie?", "Tak. Zamówienia, dokumentacja jakości, reklamacje i raporty to częste wdrożenia."],
      ["Czy obsługujecie raporty reklamacyjne w formacie klienta?", "Tak. Szablony raportów przygotowujemy w formacie wymaganym przez odbiorców, np. 8D."],
      ["Czy automatyzujecie gorzowskie firmy usługowe?", "Tak. Zapytania, umowy, czas pracy i faktury."],
      ["Jak wygląda współpraca?", "Zdalnie, w krótkich etapach. Zaczynamy od bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-raportow", "automatyzacja-dla-logistyki", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "slubice",
    name: "Słubice",
    nameGenitive: "Słubic",
    nameLocative: "Słubicach",
    nearbyCitySlugs: ["gorzow-wielkopolski", "krosno-odrzanskie", "sulecin", "szczecin", "zielona-gora"],
    metaDescription:
      "Automatyzacja dla firm ze Słubic: handel i usługi dla klientów z Niemiec, logistyka przy A2 i produkcja. Dokumenty w dwóch językach bez przepisywania.",
    heroLead:
      "Pomagamy słubickim firmom obsługiwać klientów z Polski i Niemiec bez ręcznego przepisywania dokumentów i tłumaczenia korespondencji.",
    intro: [
      "Słubice leżą nad Odrą, naprzeciwko Frankfurtu nad Odrą, przy autostradzie A2. Wspólna granica i most łączący miasta sprawiają, że duża część klientów lokalnych firm przyjeżdża z Niemiec.",
      "W mieście działa Collegium Polonicum, a strefa ekonomiczna i przejście graniczne przyciągają firmy logistyczne i produkcyjne.",
    ],
    localContext:
      "Słubickie firmy obsługują klientów niemieckojęzycznych na co dzień: w handlu, usługach, logistyce i rzemiośle.",
    whyHere:
      "W Słubicach automatyzacja i AI pozwalają obsługiwać klientów po niemiecku bez dodatkowych osób w biurze i bez ręcznego tłumaczenia dokumentów.",
    industries: [
      ["Handel i usługi dla klientów z Niemiec", "Rezerwacje, zapytania, oferty i faktury w dwóch językach."],
      ["Logistyka przy A2", "Zlecenia, dokumenty przewozowe, awizacje i statusy."],
      ["Produkcja w strefie ekonomicznej", "Zamówienia, dokumentacja i reklamacje."],
      ["Usługi medyczne i kosmetyczne", "Rejestracja wizyt, przypomnienia i pytania pacjentów z Niemiec."],
    ],
    processes: [
      ["Asystent po niemiecku", "Odpowiedzi na typowe pytania klientów na podstawie waszej oferty."],
      ["Rejestracja wizyt", "Terminy online z przypomnieniem w języku klienta."],
      ["Faktury w euro", "Faktura przygotowana z rejestru zamówień w odpowiedniej walucie."],
      ["Dokumenty przewozowe", "Dane z dokumentów odczytane przez AI i przypisane do zleceń."],
    ],
    faq: [
      ["Czy asystent AI odpowie klientom ze Słubic i Frankfurtu po niemiecku?", "Tak, na podstawie waszych informacji o ofercie, cenach i terminach."],
      ["Czy przypomnienia o wizytach mogą iść w dwóch językach?", "Tak. Język wiadomości zależy od ustawień klienta."],
      ["Czy automatyzujecie firmy transportowe przy A2?", "Tak. Zlecenia, dokumenty przewozowe, statusy i rozliczenia."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow"],
  }),
  town({
    ...base,
    slug: "nowa-sol",
    name: "Nowa Sól",
    nameGenitive: "Nowej Soli",
    nameLocative: "Nowej Soli",
    nearbyCitySlugs: ["zielona-gora", "wschowa", "zagan", "zary", "leszno"],
    metaDescription:
      "Automatyzacja dla firm z Nowej Soli: produkcja w strefie ekonomicznej, metal, logistyka i usługi. Zamówienia i dokumentacja bez przepisywania.",
    heroLead:
      "Pomagamy nowosolskim zakładom i firmom usługowym przejąć powtarzalną pracę z zamówieniami, dokumentacją i rozliczeniami.",
    intro: [
      "Nowa Sól leży nad Odrą, w pobliżu Zielonej Góry. Miasto ma tradycję przemysłu metalowego i włókienniczego, a dziś w podstrefie ekonomicznej działają zakłady produkcyjne z różnych branż.",
      "Port rzeczny i bulwary nad Odrą przypominają o handlowej historii miasta, która zaczęła się od soli.",
    ],
    localContext:
      "Nowosolskie zakłady produkują często dla klientów zagranicznych, z wymaganiami dotyczącymi dokumentacji, terminów i jakości.",
    whyHere:
      "W Nowej Soli automatyzacja przyspiesza obsługę zamówień i dokumentacji, a działy wsparcia nie przepisują danych między systemami.",
    industries: [
      ["Produkcja metalowa", "Zapytania ofertowe, zlecenia, dokumentacja i reklamacje."],
      ["Zakłady w strefie ekonomicznej", "Zamówienia z portali, dostawy i raporty."],
      ["Logistyka", "Zlecenia transportowe i dokumenty dostaw."],
      ["Usługi", "Zapytania, terminy i faktury."],
    ],
    processes: [
      ["Wyceny zleceń", "Kalkulacja z podobnych wyrobów i aktualnych cen."],
      ["Zakupy materiałów", "Zapytania do dostawców i przypomnienia o potwierdzeniach."],
      ["Przeglądy maszyn", "Plan przeglądów z przypomnieniami i protokołami."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
    ],
    faq: [
      ["Czy pracujecie z zakładami z Nowej Soli?", "Tak, w procesach wokół produkcji: wyceny, zamówienia, zakupy, reklamacje i utrzymanie ruchu."],
      ["Czy musimy zmieniać ERP?", "Nie. Automatyzację budujemy obok ERP i łączymy się z nim tam, gdzie to możliwe."],
      ["Czy pracujecie zdalnie?", "Tak, a na warsztat w razie potrzeby przyjeżdżamy."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow", "ai-w-obsludze-dokumentow"],
  }),
  town({
    ...base,
    slug: "zary",
    name: "Żary",
    nameGenitive: "Żar",
    nameLocative: "Żarach",
    nearbyCitySlugs: ["zagan", "zielona-gora", "krosno-odrzanskie", "boleslawiec", "zgorzelec"],
    metaDescription:
      "Automatyzacja dla firm z Żar: produkcja, przemysł spożywczy, handel i logistyka przy A18. Zamówienia i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy żarskim firmom produkcyjnym, handlowym i logistycznym uporządkować zamówienia i dokumenty.",
    intro: [
      "Żary są jednym z większych miast południa regionu, z tradycją przemysłu włókienniczego. Dziś w strefie ekonomicznej działają zakłady produkcyjne, w tym spożywcze, a miasto jest ośrodkiem handlu i usług dla okolicy.",
      "Bliskość autostrady A18 i granicy z Niemcami sprzyja logistyce i handlowi z zachodnimi partnerami.",
    ],
    localContext:
      "Żarskie firmy obsługują odbiorców z Polski i Niemiec, a zakłady pracują dla sieci handlowych z ich wymaganiami dotyczącymi zamówień i dokumentów.",
    whyHere:
      "W Żarach automatyzacja pozwala obsłużyć zamówienia i dokumenty dostaw bez przepisywania, nawet gdy zamówień przybywa.",
    industries: [
      ["Przemysł spożywczy", "Zamówienia od sieci, partie i dokumenty jakości."],
      ["Produkcja", "Zlecenia, zakupy i reklamacje."],
      ["Logistyka przy A18", "Zlecenia transportowe i statusy dostaw."],
      ["Handel", "Zamówienia, stany i faktury."],
    ],
    processes: [
      ["Zamówienia od sieci handlowych", "Zamówienia z portali i maili przekazane do systemu."],
      ["Reklamacje", "Rejestr reklamacji z danymi partii i terminami."],
      ["Status dostawy", "Klient dostaje informację o etapie dostawy automatycznie."],
      ["Należności", "Przypomnienia o płatnościach i raport przeterminowanych faktur."],
    ],
    faq: [
      ["Czy pracujecie z zakładami spożywczymi z Żar?", "Tak, w zamówieniach, dokumentach jakości, reklamacjach i raportach."],
      ["Czy obsłużycie klientów z Niemiec?", "Tak, także w języku niemieckim."],
      ["Czy automatyzacja wymaga nowych systemów?", "Zwykle nie. Łączymy te, których używacie."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-dla-ksiegowosci"],
  }),
  town({
    ...base,
    slug: "zagan",
    name: "Żagań",
    nameGenitive: "Żagania",
    nameLocative: "Żaganiu",
    nearbyCitySlugs: ["zary", "nowa-sol", "zielona-gora", "boleslawiec", "legnica"],
    metaDescription:
      "Automatyzacja dla firm z Żagania: produkcja, handel, usługi i turystyka. Zamówienia, faktury i rezerwacje bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy żagańskim firmom handlowym, produkcyjnym i usługowym przejąć powtarzalną pracę biura.",
    intro: [
      "Żagań leży nad Bobrem, w południowej części regionu. Miasto słynie z pałacu i zespołu poaugustiańskiego, a także z dużego garnizonu wojskowego, który wpływa na lokalny handel i usługi.",
      "Działają tu firmy produkcyjne, handlowe i usługowe obsługujące powiat, a turystyka opiera się na zabytkach i okolicznych lasach.",
    ],
    localContext:
      "Żagańskie firmy to często małe i średnie przedsiębiorstwa, w których kilka osób obsługuje zamówienia, faktury i klientów.",
    whyHere:
      "W Żaganiu automatyzacja odciąża małe zespoły z przepisywania i pilnowania terminów, a klienci szybciej dostają odpowiedzi.",
    industries: [
      ["Handel i dystrybucja", "Zamówienia, stany i faktury."],
      ["Produkcja", "Zlecenia, zakupy i dokumentacja."],
      ["Usługi dla mieszkańców", "Rejestracja wizyt, przypomnienia i płatności."],
      ["Turystyka", "Rezerwacje i pytania gości."],
    ],
    processes: [
      ["Przyjmowanie zamówień", "Zamówienia z maili i telefonów w jednym rejestrze."],
      ["Rejestracja wizyt", "Terminy online z przypomnieniem dzień wcześniej."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie o płatności po terminie."],
      ["Opinie klientów", "Prośba o opinię wysyłana automatycznie po usłudze."],
    ],
    faq: [
      ["Czy automatyzacja opłaca się w małej firmie z Żagania?", "Tak, jeśli zespół traci kilka godzin tygodniowo na przepisywanie i przypomnienia."],
      ["Czy pomagacie gabinetom i firmom usługowym?", "Tak. Rejestracja wizyt, przypomnienia i płatności to proste i szybkie wdrożenia."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się online."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-obsludze-klienta", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci"],
  }),
  town({
    ...base,
    slug: "swiebodzin",
    name: "Świebodzin",
    nameGenitive: "Świebodzina",
    nameLocative: "Świebodzinie",
    nearbyCitySlugs: ["zielona-gora", "gorzow-wielkopolski", "miedzyrzecz", "krosno-odrzanskie", "sulecin"],
    metaDescription:
      "Automatyzacja dla firm ze Świebodzina: produkcja, logistyka przy A2 i S3, handel i turystyka. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy świebodzińskim firmom wykorzystać położenie na skrzyżowaniu A2 i S3 bez rozrastania pracy w biurze.",
    intro: [
      "Świebodzin leży przy skrzyżowaniu autostrady A2 i drogi S3, w jednym z najlepiej skomunikowanych miejsc w regionie. To przyciąga zakłady produkcyjne, firmy transportowe i centra dystrybucyjne.",
      "Miasto jest znane z pomnika Chrystusa Króla, który przyciąga turystów i pielgrzymów, a w okolicy są jeziora i lasy.",
    ],
    localContext:
      "Świebodzińskie firmy obsługują klientów w całej Polsce i w Niemczech, więc szybkość obsługi zamówień i dokumentów jest dla nich przewagą.",
    whyHere:
      "W Świebodzinie automatyzacja skraca czas od zamówienia do wysyłki i porządkuje dokumenty przewozowe.",
    industries: [
      ["Produkcja", "Zamówienia, zakupy, dokumentacja i reklamacje."],
      ["Transport i dystrybucja", "Zlecenia, awizacje, dokumenty i statusy."],
      ["Handel", "Zamówienia, stany i faktury."],
      ["Turystyka i gastronomia", "Rezerwacje grup i pytania gości."],
    ],
    processes: [
      ["Zlecenia transportowe", "Zlecenia z maili w systemie, statusy dla klientów automatycznie."],
      ["Potwierdzenia zamówień", "Potwierdzenie z terminem wysyłane szybko i bez przepisywania."],
      ["Rozliczenia z przewoźnikami", "Faktury kosztowe dopasowane do zleceń."],
      ["Rezerwacje grupowe", "Zapytania grup, oferty i zaliczki w jednym rejestrze."],
    ],
    faq: [
      ["Czy automatyzujecie firmy transportowe ze Świebodzina?", "Tak. Zlecenia, dokumenty, statusy i rozliczenia z przewoźnikami."],
      ["Czy pracujecie z zakładami produkcyjnymi?", "Tak, w procesach wokół produkcji: zamówienia, zakupy, reklamacje, raporty."],
      ["Czy obsłużycie zamówienia po niemiecku?", "Tak. AI odczyta zamówienia po niemiecku i przygotuje potwierdzenia."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "integracje-systemow", "ai-w-obsludze-dokumentow"],
  }),
  town({
    ...base,
    slug: "miedzyrzecz",
    name: "Międzyrzecz",
    nameGenitive: "Międzyrzecza",
    nameLocative: "Międzyrzeczu",
    nearbyCitySlugs: ["gorzow-wielkopolski", "swiebodzin", "sulecin", "zielona-gora", "poznan"],
    metaDescription:
      "Automatyzacja dla firm z Międzyrzecza: przemysł drzewny, produkcja, turystyka i usługi. Zamówienia, rezerwacje i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy międzyrzeckim firmom drzewnym, produkcyjnym i turystycznym uporządkować zamówienia, rezerwacje i dokumenty.",
    intro: [
      "Międzyrzecz leży przy drodze S3, wśród lasów i jezior. W okolicy działają zakłady drzewne i produkcyjne, a turystów przyciąga Międzyrzecki Rejon Umocniony z podziemnymi trasami.",
      "Miasto obsługuje powiat jako ośrodek handlu i usług.",
    ],
    localContext:
      "Firmy z Międzyrzecza to często zakłady drzewne i rodzinne firmy produkcyjne oraz obiekty turystyczne, które w sezonie obsługują wiele rezerwacji.",
    whyHere:
      "W Międzyrzeczu automatyzacja porządkuje zamówienia i dostawy w produkcji, a w turystyce rezerwacje i pytania gości.",
    industries: [
      ["Przemysł drzewny", "Zamówienia, wyceny, dostawy i dokumenty."],
      ["Produkcja", "Zlecenia, zakupy i reklamacje."],
      ["Turystyka", "Rezerwacje zwiedzania, noclegi i grupy."],
      ["Usługi", "Zapytania, terminy i faktury."],
    ],
    processes: [
      ["Wyceny zamówień", "Szkic wyceny z cennika i podobnych zamówień."],
      ["Rezerwacje grup", "Zapytanie, oferta, zaliczka i przypomnienie w jednym przepływie."],
      ["Dokumenty dostaw", "Dokumenty przypisane do zamówień i faktur."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z zakładami drzewnymi?", "Tak. Wyceny, zamówienia, dostawy i dokumenty to typowe obszary."],
      ["Czy automatyzujecie obiekty turystyczne?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."],
      ["Czy pracujecie zdalnie?", "Tak, z możliwością warsztatu na miejscu."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "krosno-odrzanskie",
    name: "Krosno Odrzańskie",
    nameGenitive: "Krosna Odrzańskiego",
    nameLocative: "Krośnie Odrzańskim",
    nearbyCitySlugs: ["zielona-gora", "swiebodzin", "slubice", "zary", "gorzow-wielkopolski"],
    metaDescription:
      "Automatyzacja dla firm z Krosna Odrzańskiego: produkcja, przetwórstwo, handel i usługi. Zamówienia, faktury i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Krosna Odrzańskiego przejąć powtarzalną pracę z zamówieniami, fakturami i dokumentami.",
    intro: [
      "Krosno Odrzańskie leży nad Odrą i Bobrem, między Zieloną Górą a granicą z Niemcami. Działają tu małe i średnie firmy produkcyjne, handlowe i usługowe oraz gospodarstwa rolne.",
      "Miasto ma długą historię i zamek nad Odrą, a położenie przy granicy sprzyja współpracy z niemieckimi partnerami.",
    ],
    localContext:
      "Firmy z Krosna Odrzańskiego prowadzą często całą administrację w kilkuosobowych zespołach, obsługując klientów z Polski i Niemiec.",
    whyHere:
      "W Krośnie Odrzańskim automatyzacja pozwala małym zespołom obsłużyć więcej zamówień bez nadgodzin.",
    industries: [
      ["Produkcja", "Zlecenia, zakupy i dokumenty dostaw."],
      ["Przetwórstwo i rolnictwo", "Dostawy, partie i rozliczenia."],
      ["Handel", "Zamówienia, faktury i płatności."],
      ["Usługi", "Zapytania i terminy."],
    ],
    processes: [
      ["Zamówienia z maili", "Zamówienia odczytane przez AI i zapisane w rejestrze."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zamówień."],
      ["Przypomnienia o płatnościach", "Wysyłane automatycznie po terminie."],
      ["Korespondencja po niemiecku", "Szkice odpowiedzi do klientów przygotowane przez AI."],
    ],
    faq: [
      ["Czy pracujecie z małymi firmami?", "Tak. W małym zespole każda zaoszczędzona godzina jest szczególnie odczuwalna."],
      ["Czy obsłużycie klientów z Niemiec?", "Tak, także w języku niemieckim."],
      ["Czy musimy kupować nowe programy?", "Zwykle nie. Łączymy te, których już używacie."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "ai-w-obsludze-dokumentow", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "sulecin",
    name: "Sulęcin",
    nameGenitive: "Sulęcina",
    nameLocative: "Sulęcinie",
    nearbyCitySlugs: ["slubice", "miedzyrzecz", "swiebodzin", "gorzow-wielkopolski", "zielona-gora"],
    metaDescription:
      "Automatyzacja dla firm z Sulęcina: przemysł drzewny, leśnictwo, turystyka i usługi. Zamówienia, rezerwacje i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Sulęcina uporządkować zamówienia, rezerwacje i dokumenty w przemyśle drzewnym, usługach i turystyce.",
    intro: [
      "Sulęcin jest najmniejszym miastem powiatowym regionu, otoczonym rozległymi lasami. W okolicy działają firmy związane z drewnem i leśnictwem, a jeziora i lasy przyciągają turystów i myśliwych.",
      "Lokalne firmy to przede wszystkim małe przedsiębiorstwa usługowe, handlowe i rodzinne zakłady.",
    ],
    localContext:
      "Firmy z Sulęcina często prowadzi właściciel z niewielkim zespołem, który robi wszystko: oferty, zamówienia, faktury i obsługę gości.",
    whyHere:
      "W Sulęcinie automatyzacja odciąża właściciela z pracy biurowej, a goście i klienci szybciej dostają odpowiedzi.",
    industries: [
      ["Drewno i usługi leśne", "Zamówienia, dostawy i rozliczenia."],
      ["Turystyka i agroturystyka", "Rezerwacje, zaliczki i pytania gości."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi lokalne", "Terminy i płatności."],
    ],
    processes: [
      ["Rezerwacje z kilku portali", "Jeden kalendarz bez podwójnych rezerwacji."],
      ["Potwierdzenia i zaliczki", "Potwierdzenie z linkiem do płatności i przypomnienie przed przyjazdem."],
      ["Zamówienia i faktury", "Faktura po realizacji, bez przepisywania danych."],
      ["Odpowiedzi na pytania", "Asystent AI odpowiada gościom o dojazd, ceny i terminy."],
    ],
    faq: [
      ["Czy automatyzujecie małe obiekty noclegowe?", "Tak. Rezerwacje, zaliczki, przypomnienia i odpowiedzi na pytania gości."],
      ["Czy automatyzacja ma sens w jednoosobowej firmie?", "Często tak, jeśli właściciel traci czas na powtarzalne odpowiedzi i przepisywanie."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się online."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "strzelce-krajenskie",
    name: "Strzelce Krajeńskie",
    nameGenitive: "Strzelec Krajeńskich",
    nameLocative: "Strzelcach Krajeńskich",
    nearbyCitySlugs: ["gorzow-wielkopolski", "miedzyrzecz", "szczecin", "pila", "zielona-gora"],
    metaDescription:
      "Automatyzacja dla firm ze Strzelec Krajeńskich: rolnictwo, przetwórstwo, drewno i usługi. Dokumenty, zamówienia i rozliczenia bez przepisywania.",
    heroLead:
      "Pomagamy firmom ze Strzelec Krajeńskich uporządkować dokumenty, zamówienia i rozliczenia.",
    intro: [
      "Strzelce Krajeńskie leżą na północy regionu, niedaleko Gorzowa, w okolicy pełnej lasów i Drawieńskiego Parku Narodowego. Lokalna gospodarka to rolnictwo, przetwórstwo, przemysł drzewny i usługi.",
      "Miasto zachowało średniowieczne mury obronne, a okolica przyciąga turystów i miłośników przyrody.",
    ],
    localContext:
      "Firmy ze Strzelec Krajeńskich współpracują często z odbiorcami z Gorzowa i Szczecina, a gospodarstwa i zakłady przetwórcze prowadzą rozbudowaną dokumentację dostaw.",
    whyHere:
      "W Strzelcach Krajeńskich automatyzacja porządkuje dokumenty dostaw i rozliczenia, a mały zespół nie przepisuje danych między programami.",
    industries: [
      ["Rolnictwo i przetwórstwo", "Dostawy, partie, umowy z odbiorcami i rozliczenia."],
      ["Przemysł drzewny", "Zamówienia, dostawy i faktury."],
      ["Turystyka", "Rezerwacje i pytania gości."],
      ["Usługi", "Zapytania, terminy i płatności."],
    ],
    processes: [
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu, z terminami płatności."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do działów lub upraw."],
      ["Rozliczenia z odbiorcami", "Dostawy porównane z fakturami, rozbieżności oznaczone."],
      ["Rezerwacje", "Potwierdzenia i zaliczki bez ręcznych maili."],
    ],
    faq: [
      ["Czy pracujecie z gospodarstwami i firmami rolnymi?", "Tak, w dokumentach, rozliczeniach i raportach."],
      ["Czy automatyzacja działa z telefonu?", "Wiele kroków tak, np. zdjęcie dokumentu dostawy wysłane z telefonu."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się online."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow", "ai-w-obsludze-dokumentow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "wschowa",
    name: "Wschowa",
    nameGenitive: "Wschowy",
    nameLocative: "Wschowie",
    nearbyCitySlugs: ["nowa-sol", "zielona-gora", "leszno", "glogow", "wolsztyn"],
    metaDescription:
      "Automatyzacja dla firm ze Wschowy: produkcja, rolnictwo, handel i usługi. Zamówienia, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy wschowskim firmom przejąć powtarzalną pracę z zamówieniami, fakturami i dokumentami.",
    intro: [
      "Wschowa leży na pograniczu Lubuskiego, Wielkopolski i Dolnego Śląska, blisko Leszna i Głogowa. Ma historię miasta królewskiego, a dziś działają tu firmy produkcyjne, handlowe i rolnicze.",
      "Położenie między trzema regionami sprawia, że wiele lokalnych firm ma klientów i dostawców w Wielkopolsce i na Dolnym Śląsku.",
    ],
    localContext:
      "Wschowskie firmy obsługują odbiorców z kilku województw, często w kilkuosobowym zespole biurowym.",
    whyHere:
      "We Wschowie automatyzacja pozwala obsłużyć zamówienia z kilku regionów bez dokładania etatów w biurze.",
    industries: [
      ["Produkcja", "Zlecenia, zakupy i dokumenty."],
      ["Rolnictwo", "Dostawy, umowy i rozliczenia."],
      ["Handel", "Zamówienia, stany i faktury."],
      ["Usługi", "Zapytania i terminy."],
    ],
    processes: [
      ["Przyjmowanie zamówień", "Zamówienia z maili i telefonów w jednym rejestrze."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Zakupy", "Zapytania do dostawców i przypomnienia o potwierdzeniach."],
      ["Raport sprzedaży", "Sprzedaż według klientów co tydzień, automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z firmami ze Wschowy?", "Tak, zdalnie. Z Wrocławia mamy niedaleko, więc warsztat na miejscu też jest możliwy."],
      ["Czy automatyzacja wymaga nowych systemów?", "Zwykle nie. Łączymy te, których używacie."],
      ["Czy pomagacie firmom rolnym?", "Tak, w dokumentach, rozliczeniach i raportach."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow", "automatyzacja-raportow"],
  }),
];
