import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "mazowieckie", regionCluster: "mazowsze" } as const;

export const mazowieckieRegion = region({
  slug: "mazowieckie",
  intro: [
    "Mazowsze to najsilniejszy gospodarczo region Polski, ale bardzo niejednolity. Warszawa i jej obwarzanek to centra usług, siedziby firm i zagłębie magazynowe przy autostradzie A2 oraz drogach S2, S7 i S8. Dalej od stolicy dominuje rolnictwo, przetwórstwo i mniejsze ośrodki przemysłowe.",
    "Płock to rafineria i przemysł petrochemiczny, Radom to dawny ośrodek przemysłowy, który rozwija się dziś wokół logistyki i produkcji, a Siedlce i Ostrołęka obsługują wschodnią i północną część regionu. Grójec i okolice to największe zagłębie sadownicze w kraju.",
    "Firmy z Mazowsza często konkurują o pracowników z Warszawą. Dla wielu z nich automatyzacja jest sposobem, żeby obsłużyć więcej zamówień i klientów bez szukania kolejnych osób do pracy biurowej.",
    "Z firmami z całego województwa pracujemy zdalnie. Nasza siedziba jest we Wrocławiu, a na miejsce przyjeżdżamy, gdy warsztat z zespołem wyraźnie przyspiesza projekt.",
  ],
  industries: [
    ["Logistyka i magazyny", "Awizacje, statusy dostaw i dokumenty przewozowe w centrach dystrybucyjnych wokół Warszawy."],
    ["Usługi i biura", "Obieg dokumentów, umów i zgłoszeń w firmach usługowych, kancelariach i biurach rachunkowych."],
    ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości w zakładach mięsnych, mleczarskich i owocowych."],
    ["Sadownictwo i handel owocami", "Skup, przechowalnie, zamówienia eksportowe i rozliczenia z dostawcami w rejonie Grójca."],
    ["Przemysł", "Zlecenia, raporty i dokumentacja w zakładach Płocka, Radomia i stref ekonomicznych."],
  ],
  faq: [
    ["Czy macie biuro w Warszawie?", "Nie. Nasza siedziba jest we Wrocławiu, a z firmami z Mazowsza pracujemy zdalnie. Gdy spotkanie na miejscu przyspiesza projekt, przyjeżdżamy."],
    ["Czy pracujecie z firmami spoza Warszawy?", "Tak. Współpracujemy z firmami z całego województwa, od podwarszawskich centrów logistycznych po zakłady przetwórcze na wschodzie i północy regionu."],
    ["Co najczęściej automatyzują firmy z Mazowsza?", "W obwarzanku warszawskim najczęściej logistykę, zamówienia i obsługę klienta. W mniejszych miastach przyjmowanie dostaw, rozliczenia z dostawcami i dokumenty jakości."],
    ["Ile trwa pierwsze wdrożenie?", "Wąski proces zwykle uruchamiamy w kilka tygodni. Dokładny termin i koszt podajemy po bezpłatnej konsultacji i przeglądzie procesu."],
  ],
});

/** Mazowsze bez Warszawy (Warszawa ma treść poziomu A w tier-a/warszawa.ts). */
export const mazowieckieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "radom",
    name: "Radom",
    nameGenitive: "Radomia",
    nameLocative: "Radomiu",
    nearbyCitySlugs: ["warszawa", "kozienice", "bialobrzegi", "szydlowiec", "kielce"],
    metaDescription:
      "Automatyzacja procesów dla firm z Radomia: produkcja, logistyka przy S7, przetwórstwo, handel i usługi. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy radomskim zakładom, firmom logistycznym i usługowym zamienić ręczne przepisywanie zamówień i raportów w przepływy, które działają same.",
    intro: [
      "Radom ma długą tradycję przemysłową: zbrojeniową, metalową, skórzaną i obuwniczą. Dziś miasto rozwija się dzięki drodze ekspresowej S7, strefie ekonomicznej, lotnisku i niższym kosztom prowadzenia firmy niż w Warszawie.",
      "Wiele radomskich firm obsługuje klientów z całej Polski, a zespoły biurowe są niewielkie. Zamówienia przychodzą mailem, statusy sprawdza się telefonicznie, a raporty składa ręcznie z arkuszy. Automatyzacja zdejmuje tę pracę z ludzi.",
    ],
    localContext:
      "Radomskie firmy często działają jako podwykonawcy albo dostawcy dla odbiorców z Warszawy. Taki klient oczekuje szybkiej odpowiedzi, stałego dostępu do statusu i kompletnych dokumentów.",
    whyHere:
      "W Radomiu automatyzacja pozwala firmie obsłużyć klientów z metropolii w ich tempie, zachowując lokalne koszty i mały zespół.",
    economy: {
      title: "Czym żyje radomski biznes",
      paragraphs: [
        "Przemysł metalowy i zbrojeniowy ma w Radomiu ponad stuletnią historię. Obok niego działają zakłady spożywcze, producenci obuwia i materiałów budowlanych oraz rosnąca grupa firm logistycznych przy S7.",
        "Miasto jest też zapleczem usługowym dla południowego Mazowsza: działają tu biura rachunkowe, firmy budowlane, handel hurtowy i centra obsługi klienta.",
      ],
    },
    industries: [
      ["Produkcja metalowa", "Zlecenia, materiały i dokumentacja jakości w jednym przepływie."],
      ["Logistyka przy S7", "Awizacje, statusy i dokumenty przewozowe generowane automatycznie."],
      ["Handel hurtowy", "Oferty, zamówienia i faktury spięte z magazynem."],
      ["Biura i usługi", "Dokumenty klientów, terminy i rozliczenia bez przepisywania."],
    ],
    processes: [
      ["Przyjęcie zamówienia", "AI odczytuje zamówienie z maila lub PDF i przygotowuje je w systemie."],
      ["Status dla klienta", "Klient widzi postęp zlecenia bez dzwonienia do biura."],
      ["Faktura po realizacji", "Zamknięte zlecenie uruchamia fakturę i dokumenty wysyłkowe."],
      ["Raport dla zarządu", "Sprzedaż, produkcja i należności w jednym zestawieniu."],
    ],
    faq: [
      ["Czy pracujecie z zakładami produkcyjnymi z Radomia?", "Tak. Najczęściej automatyzujemy zamówienia, dokumentację jakości i raporty produkcji, na systemach, które firma już ma."],
      ["Czy przyjeżdżacie do Radomia?", "Pracujemy głównie zdalnie. Na miejsce przyjeżdżamy, gdy warsztat z zespołem przyspiesza projekt."],
      ["Czy automatyzacja wymaga zmiany programu księgowego?", "Nie. Łączymy się z tym, czego używacie, a nowe narzędzia proponujemy tylko wtedy, gdy są potrzebne."],
      ["Od czego firma z Radomia powinna zacząć automatyzację?", "Od bezpłatnej, 30-minutowej konsultacji. Wskazujemy jeden proces z najszybszym zwrotem i przygotowujemy wycenę pierwszego etapu."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow", "automatyzacja-raportow", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "plock",
    name: "Płock",
    nameGenitive: "Płocka",
    nameLocative: "Płocku",
    nearbyCitySlugs: ["warszawa", "gostynin", "sierpc", "sochaczew", "plonsk"],
    metaDescription:
      "Automatyzacja procesów dla firm z Płocka: podwykonawcy przemysłu petrochemicznego, produkcja maszyn, serwis, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy płockim podwykonawcom, firmom serwisowym i produkcyjnym uporządkować zlecenia, protokoły i rozliczenia z dużymi odbiorcami.",
    intro: [
      "Płock jest siedzibą ORLEN i jednym z największych ośrodków przemysłu petrochemicznego w Europie Środkowej. Wokół rafinerii działa sieć firm remontowych, serwisowych, budowlanych i transportowych, a w mieście produkuje się też maszyny rolnicze.",
      "Praca dla dużego zakładu przemysłowego to dużo dokumentów: zlecenia, pozwolenia, protokoły, karty pracy i rozliczenia. W wielu firmach przygotowuje się je ręcznie, a faktura czeka, aż ktoś zbierze dane z brygad.",
    ],
    localContext:
      "Płockie firmy usługowe pracują według ścisłych procedur odbiorcy, często w trybie zmianowym i przy postojach remontowych, kiedy liczba zleceń gwałtownie rośnie.",
    whyHere:
      "W Płocku automatyzacja skraca drogę od wykonanej pracy do faktury i porządkuje dokumentację, której wymagają duzi odbiorcy przemysłowi.",
    economy: {
      title: "Czym żyje płocki biznes",
      paragraphs: [
        "Rafineria i zakłady petrochemiczne są największym pracodawcą w mieście, a wokół nich funkcjonują setki mniejszych firm: od usług remontowych i automatyki przemysłowej po transport i zaopatrzenie.",
        "Drugą ważną gałęzią jest produkcja maszyn rolniczych oraz firmy z Płockiego Parku Przemysłowo-Technologicznego. Miasto obsługuje też handlowo i usługowo północno-zachodnie Mazowsze.",
      ],
    },
    industries: [
      ["Usługi dla przemysłu petrochemicznego", "Zlecenia, protokoły i karty pracy rozliczane bez przepisywania."],
      ["Produkcja maszyn i komponentów", "Zamówienia, materiały i dokumentacja techniczna w jednym przepływie."],
      ["Serwis i automatyka", "Zgłoszenia, przeglądy i historia napraw w jednym miejscu."],
      ["Transport i zaopatrzenie", "Zlecenia, dostawy i dokumenty ze statusem dla klienta."],
    ],
    processes: [
      ["Karta pracy z terenu", "Brygada wypełnia formularz w telefonie, a dane od razu trafiają do biura."],
      ["Protokół odbioru", "Dokument generowany z danych zlecenia, gotowy do podpisu."],
      ["Rozliczenie postoju", "Godziny, materiały i koszty z wielu zleceń zebrane w jednym zestawieniu."],
      ["Terminy i uprawnienia", "Przypomnienia o ważności szkoleń, badań i dokumentów pracowników."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami zakładów w Płocku?", "Tak. Automatyzujemy karty pracy, protokoły i rozliczenia, czyli dokumenty, które najbardziej obciążają biuro takich firm."],
      ["Czy pracownicy w terenie muszą obsługiwać nowy system?", "Wystarczy prosty formularz w telefonie. Projektujemy go tak, żeby wypełnienie zajmowało chwilę."],
      ["Czy pilnujecie terminów uprawnień pracowników?", "Tak, to częsty element wdrożenia. System sam przypomina o kończących się szkoleniach i badaniach."],
      ["Czy wdrożenie odciągnie zespół z Płocka od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "cyfryzacja-danych-i-dokumentow", "automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-dla-hr"],
  }),

  town({
    ...base,
    slug: "siedlce",
    name: "Siedlce",
    nameGenitive: "Siedlec",
    nameLocative: "Siedlcach",
    nearbyCitySlugs: ["minsk-mazowiecki", "sokolow-podlaski", "wegrow", "losice", "warszawa", "lublin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Siedlec: przetwórstwo spożywcze, handel hurtowy, produkcja i usługi na wschodzie Mazowsza. Konsultacja 30 min.",
    heroLead:
      "Pomagamy siedleckim firmom handlowym, przetwórczym i usługowym uporządkować zamówienia, dostawy i faktury, bez rozbudowy biura.",
    intro: [
      "Siedlce są głównym ośrodkiem wschodniego Mazowsza: miastem uniwersyteckim, handlowym i przemysłowym przy trasie z Warszawy na wschód. Działają tu zakłady spożywcze, producenci, hurtownie i firmy usługowe obsługujące kilka powiatów.",
      "Firmy z Siedlec często współpracują z dużą liczbą drobnych dostawców i odbiorców z regionu. Zamówienia i dokumenty przychodzą w różnych formach, a biuro scala je ręcznie.",
    ],
    localContext:
      "Siedleckie hurtownie i zakłady przetwórcze obsługują sklepy i gospodarstwa z całego subregionu. Każdy klient zamawia inaczej, a stany magazynowe i należności trzeba pilnować na bieżąco.",
    whyHere:
      "W Siedlcach automatyzacja zbiera zamówienia z różnych kanałów w jednym miejscu, pilnuje stanów i należności, a zespół zajmuje się klientami.",
    economy: {
      title: "Czym żyje siedlecki biznes",
      paragraphs: [
        "Gospodarka Siedlec opiera się na przetwórstwie spożywczym, handlu hurtowym, produkcji i usługach. Miasto jest też zapleczem edukacyjnym i administracyjnym dla wschodniej części województwa.",
        "Dobre połączenie z Warszawą sprawia, że część siedleckich firm obsługuje klientów ze stolicy, zachowując lokalne koszty.",
      ],
    },
    industries: [
      ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości bez papieru."],
      ["Handel hurtowy", "Zamówienia od sklepów, stany i faktury w jednym widoku."],
      ["Produkcja", "Zlecenia, terminy i wysyłki widoczne dla biura i handlowców."],
      ["Usługi i biura", "Dokumenty klientów, terminy i rozliczenia bez przepisywania."],
    ],
    processes: [
      ["Zamówienia od sklepów", "Zamówienia z maila, telefonu i formularza trafiają do jednej listy."],
      ["Przyjęcie dostawy", "Dostawa zapisana raz trafia do magazynu i rozliczeń z dostawcą."],
      ["Faktury i przypomnienia", "Faktura i przypomnienie o płatności wysyłane automatycznie."],
      ["Raport sprzedaży", "Sprzedaż według klientów i produktów bez ręcznego liczenia."],
    ],
    faq: [
      ["Czy pracujecie z hurtowniami z Siedlec?", "Tak. Automatyzujemy przyjmowanie zamówień, stany magazynowe i przypomnienia o należnościach."],
      ["Czy firma z Siedlec musi wymieniać programy?", "Zwykle nie. Łączymy narzędzia, których już używacie, i dokładamy tylko to, czego brakuje."],
      ["Czy wdrożenie odciągnie nasz zespół w Siedlcach od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
      ["Czy małą firmę z Siedlec stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność oceniamy razem."],
    ],
    services: ["automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "ostroleka",
    name: "Ostrołęka",
    nameGenitive: "Ostrołęki",
    nameLocative: "Ostrołęce",
    nearbyCitySlugs: ["makow-mazowiecki", "ostrow-mazowiecka", "wyszkow", "przasnysz", "warszawa"],
    metaDescription:
      "Automatyzacja procesów dla firm z Ostrołęki: energetyka, przemysł papierniczy, przetwórstwo spożywcze, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy ostrołęckim firmom przemysłowym, przetwórczym i usługowym odejść od ręcznych raportów i przepisywania zamówień.",
    intro: [
      "Ostrołęka jest głównym ośrodkiem północno-wschodniego Mazowsza. Działa tu elektrownia, duży zakład papierniczy produkujący papier na opakowania, zakłady przetwórstwa spożywczego oraz firmy obsługujące te branże.",
      "Mniejsze firmy z regionu często pracują jako dostawcy i podwykonawcy dużych zakładów. Oczekuje się od nich dokumentów, terminowości i szybkiej informacji, a biuro jest niewielkie.",
    ],
    localContext:
      "Ostrołęckie firmy obsługują rozległy, rolniczy region. Klienci i dostawcy są rozproszeni, a zamówienia i dokumenty przychodzą w bardzo różnych formach.",
    whyHere:
      "W Ostrołęce automatyzacja pozwala małemu zespołowi obsłużyć wymagającego odbiorcę przemysłowego i wielu drobnych klientów jednocześnie.",
    economy: {
      title: "Czym żyje ostrołęcki biznes",
      paragraphs: [
        "Energetyka i przemysł papierniczy to największe zakłady w mieście. Wokół nich działają firmy remontowe, transportowe i serwisowe.",
        "Region Kurpiów jest też zagłębiem mleczarskim i rolniczym, więc ważną rolę grają przetwórstwo spożywcze, handel i usługi dla gospodarstw.",
      ],
    },
    industries: [
      ["Usługi dla przemysłu", "Zlecenia, protokoły i karty pracy rozliczane bez przepisywania."],
      ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości w jednym przepływie."],
      ["Handel", "Zamówienia, stany i faktury spięte ze sobą."],
      ["Transport", "Zlecenia przewozowe i statusy dostaw dla klienta."],
    ],
    processes: [
      ["Rozliczenie zlecenia", "Karta pracy i protokół zamieniają się w fakturę bez ręcznego przepisywania."],
      ["Dostawy surowca", "Każda dostawa zapisana raz trafia do magazynu i rozliczeń."],
      ["Zamówienia", "Zamówienia z różnych kanałów w jednej liście ze statusem."],
      ["Raport miesięczny", "Koszty, przychody i należności w jednym zestawieniu."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami zakładów przemysłowych?", "Tak. Automatyzujemy karty pracy, protokoły i rozliczenia."],
      ["Czy pracujecie z zakładami spożywczymi?", "Tak. Porządkujemy przyjęcie surowca, partie i dokumenty jakości."],
      ["Czy musicie przyjechać do Ostrołęki?", "Nie. Projekty prowadzimy zdalnie, a na miejsce przyjeżdżamy, gdy to pomaga."],
      ["Czy firma z Ostrołęki potrzebuje działu IT?", "Nie. Wystarczy osoba, która zna proces. Konfigurację robimy my, a zespół dostaje instrukcję."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "ciechanow",
    name: "Ciechanów",
    nameGenitive: "Ciechanowa",
    nameLocative: "Ciechanowie",
    nearbyCitySlugs: ["mlawa", "plonsk", "pultusk", "warszawa", "zuromin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Ciechanowa: przetwórstwo spożywcze, produkcja, handel i usługi na północnym Mazowszu. Konsultacja 30 min.",
    heroLead:
      "Pomagamy ciechanowskim firmom uporządkować zamówienia, dostawy i dokumenty, żeby biuro nie było wąskim gardłem.",
    intro: [
      "Ciechanów jest ośrodkiem handlowym i usługowym północnego Mazowsza. Lokalna gospodarka opiera się na przetwórstwie spożywczym, produkcji, handlu i usługach dla rolniczego zaplecza.",
      "Firmy z Ciechanowa często obsługują klientów z kilku powiatów. Zamówienia przychodzą telefonicznie i mailowo, a potem trzeba je przepisać do systemu i przygotować dokumenty.",
    ],
    localContext:
      "Ciechanowskie zakłady i hurtownie pracują z wieloma dostawcami rolnymi i odbiorcami. Każda dostawa i każde zamówienie oznacza dokumenty, które ktoś musi uzupełnić.",
    whyHere:
      "W Ciechanowie automatyzacja zamienia ręczne przepisywanie dostaw i zamówień w jeden przepływ, widoczny dla magazynu, handlu i księgowości.",
    industries: [
      ["Przetwórstwo spożywcze", "Dostawy, partie i dokumenty jakości bez papieru."],
      ["Produkcja", "Zlecenia, materiały i wysyłki w jednym widoku."],
      ["Handel hurtowy", "Zamówienia od sklepów i faktury spięte z magazynem."],
      ["Usługi", "Zgłoszenia, terminy i rozliczenia z przypomnieniami."],
    ],
    processes: [
      ["Przyjęcie dostawy", "Dostawa zapisana raz trafia do magazynu i rozliczeń z dostawcą."],
      ["Zamówienia", "Zamówienia z maila i telefonu zebrane w jednej liście."],
      ["Faktury", "Faktura tworzona automatycznie z danych zamówienia."],
      ["Raport stanów", "Aktualny stan magazynu bez ręcznego liczenia."],
    ],
    faq: [
      ["Czy pracujecie z zakładami spożywczymi?", "Tak. Automatyzujemy przyjęcie surowca, dokumenty jakości i rozliczenia z dostawcami."],
      ["Czy automatyzacja ma sens w małej firmie z Ciechanowa?", "Tak. W małych zespołach każda zautomatyzowana czynność daje szybko odczuwalną ulgę."],
      ["Czy wdrożenie odciągnie zespół z Ciechanowa od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
      ["Czy firma z Ciechanowa może zacząć bez spotkania na żywo?", "Tak. Pierwsza rozmowa i cały przegląd procesu odbywają się online. Wystarczy komputer i kilka przykładowych dokumentów."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "cyfryzacja-danych-i-dokumentow"],
  }),

  town({
    ...base,
    slug: "pruszkow",
    name: "Pruszków",
    nameGenitive: "Pruszkowa",
    nameLocative: "Pruszkowie",
    nearbyCitySlugs: ["warszawa", "piaseczno", "grodzisk-mazowiecki", "ozarow-mazowiecki", "zyrardow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Pruszkowa: centra logistyczne przy A2 i S8, dystrybucja, e-commerce, produkcja i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy pruszkowskim firmom logistycznym, dystrybucyjnym i sklepom internetowym obsłużyć więcej zamówień bez dokładania pracy biurowej.",
    intro: [
      "Pruszków leży w zachodnim obwarzanku Warszawy, przy węzłach autostrady A2 i drogi S8. To jedno z największych zagłębi magazynowych w kraju: działają tu centra dystrybucyjne, firmy kurierskie, hurtownie i sklepy internetowe.",
      "W logistyce i e-commerce liczy się tempo. Każde zamówienie to etykieta, status, dokumenty i często pytanie od klienta. Gdy zamówień przybywa, ręczna obsługa szybko przestaje wystarczać.",
    ],
    localContext:
      "Pruszkowskie firmy konkurują o pracowników z całym warszawskim rynkiem. Zatrudnienie kolejnej osoby do obsługi zamówień jest drogie i trudne, więc automatyzacja jest naturalnym kierunkiem.",
    whyHere:
      "W Pruszkowie automatyzacja przejmuje statusy, etykiety, dokumenty i odpowiedzi na typowe pytania. Zespół zajmuje się wyjątkami.",
    industries: [
      ["Magazyny i centra dystrybucyjne", "Awizacje, sloty i dokumenty przewozowe bez ręcznej pracy."],
      ["E-commerce", "Zamówienia z wielu kanałów, wysyłki i zwroty w jednym przepływie."],
      ["Hurtownie", "Zamówienia od klientów, stany i faktury spięte ze sobą."],
      ["Produkcja", "Zlecenia i wysyłki ze statusem dla klienta."],
    ],
    processes: [
      ["Zamówienia z wielu kanałów", "Zamówienia ze sklepu i platform trafiają do jednego miejsca ze wspólnym stanem."],
      ["Etykiety i wysyłka", "Opłacone zamówienie uruchamia etykietę kuriera i powiadomienie."],
      ["Zwroty", "Formularz zwrotu, etykieta i korekta faktury bez ręcznej obsługi."],
      ["Pytania o status", "Asystent AI odpowiada klientom, gdzie jest ich przesyłka."],
    ],
    faq: [
      ["Czy łączycie sklep internetowy z magazynem i kurierami?", "Tak. Spinamy sklep, platformy sprzedażowe, magazyn i kurierów, żeby zamówienia i stany były wszędzie aktualne."],
      ["Czy automatyzujecie obsługę zwrotów?", "Tak. Formularz, etykieta zwrotna i korekta faktury mogą powstawać automatycznie."],
      ["Czy pracujecie z centrami logistycznymi?", "Tak. Automatyzujemy awizacje, statusy i dokumenty przewozowe."],
      ["Czy wdrożenie odciągnie zespół z Pruszkowa od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-sprzedazy", "automatyzacja-w-obsludze-klienta", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "piaseczno",
    name: "Piaseczno",
    nameGenitive: "Piaseczna",
    nameLocative: "Piasecznie",
    nearbyCitySlugs: ["warszawa", "pruszkow", "otwock", "grojec", "grodzisk-mazowiecki"],
    metaDescription:
      "Automatyzacja procesów dla firm z Piaseczna: logistyka i magazyny przy S7, produkcja, usługi i handel na południe od Warszawy. Konsultacja 30 min.",
    heroLead:
      "Pomagamy piaseczyńskim firmom logistycznym, produkcyjnym i usługowym uporządkować zamówienia i dokumenty, żeby rosnąć bez rozbudowy biura.",
    intro: [
      "Piaseczno leży na południe od Warszawy, przy drodze ekspresowej S7. W powiecie działają centra magazynowe, zakłady produkcyjne, hurtownie i wiele firm usługowych obsługujących mieszkańców szybko rosnących przedmieść.",
      "Bliskość stolicy przyciąga klientów, ale też podnosi oczekiwania. Klient chce szybkiej odpowiedzi, potwierdzenia terminu i faktury bez czekania.",
    ],
    localContext:
      "Piaseczyńskie firmy usługowe, od remontów po serwis i opiekę, obsługują coraz więcej klientów z przedmieść. Zapisy, wyceny i przypomnienia często prowadzi się ręcznie w kalendarzu i telefonie.",
    whyHere:
      "W Piasecznie automatyzacja pozwala obsłużyć klienta z metropolii tak, jak tego oczekuje: szybko, z potwierdzeniem i bez telefonów w sprawie statusu.",
    industries: [
      ["Logistyka i magazyny", "Awizacje, statusy dostaw i dokumenty bez ręcznej pracy."],
      ["Produkcja", "Zlecenia, stany i wysyłki w jednym przepływie."],
      ["Usługi dla mieszkańców", "Zapisy, wyceny, przypomnienia i płatności online."],
      ["Budownictwo i remonty", "Wyceny, harmonogramy i rozliczenia zleceń."],
    ],
    processes: [
      ["Wyceny", "Wycena tworzona z szablonu na podstawie formularza klienta."],
      ["Zapisy i przypomnienia", "Klient rezerwuje termin online i dostaje przypomnienie."],
      ["Awizacje dostaw", "Termin dostawy potwierdzany automatycznie z klientem."],
      ["Faktury i płatności", "Faktura z linkiem do płatności i przypomnieniem o terminie."],
    ],
    faq: [
      ["Czy automatyzujecie firmy usługowe?", "Tak. Najczęściej zapisy, wyceny, przypomnienia i faktury."],
      ["Czy pracujecie z magazynami pod Warszawą?", "Tak. Automatyzujemy awizacje, statusy i dokumenty przewozowe."],
      ["Czy lokalizacja w Piasecznie wpływa na tempo projektu?", "Nie. Pracujemy zdalnie, więc zakres i terminy są takie same jak dla firm z dużych miast."],
      ["Który proces w Piasecznie warto zautomatyzować najpierw?", "Ten, który zabiera najwięcej czasu i powtarza się codziennie, najczęściej zamówienia, faktury albo raporty. Wybieramy go razem na konsultacji."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-logistyki", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "legionowo",
    name: "Legionowo",
    nameGenitive: "Legionowa",
    nameLocative: "Legionowie",
    nearbyCitySlugs: ["warszawa", "nowy-dwor-mazowiecki", "wolomin", "pultusk", "minsk-mazowiecki"],
    metaDescription:
      "Automatyzacja procesów dla firm z Legionowa: usługi, handel, budownictwo i biura obsługujące północne przedmieścia Warszawy. Konsultacja 30 min.",
    heroLead:
      "Pomagamy legionowskim firmom usługowym i handlowym zamienić ręczne zapisy, wyceny i faktury w proste przepływy.",
    intro: [
      "Legionowo to miasto na północnych przedmieściach Warszawy, blisko Zalewu Zegrzyńskiego. Większość lokalnych firm to usługi, handel, budownictwo i biura, które obsługują mieszkańców i firmy z okolicy.",
      "W takich firmach zespół jest mały, a klientów dużo. Zapisy, wyceny, przypomnienia i faktury zajmują czas, który można poświęcić na pracę dla klienta.",
    ],
    localContext:
      "Klienci z przedmieść Warszawy są przyzwyczajeni do rezerwacji online, szybkich wycen i płatności przez internet. Firma, która odpowiada po dwóch dniach, traci zlecenie.",
    whyHere:
      "W Legionowie automatyzacja pozwala małej firmie odpowiadać szybko i profesjonalnie, bez siedzenia przy telefonie do wieczora.",
    industries: [
      ["Usługi dla mieszkańców", "Zapisy, przypomnienia i płatności bez ręcznego pilnowania."],
      ["Budownictwo i remonty", "Wyceny, harmonogramy i rozliczenia zleceń."],
      ["Handel", "Zamówienia, stany i faktury w jednym widoku."],
      ["Biura rachunkowe", "Zbieranie dokumentów od klientów i przypomnienia o terminach."],
    ],
    processes: [
      ["Zapytania i wyceny", "Formularz zapytania zamienia się w wycenę z szablonu."],
      ["Rezerwacje", "Termin rezerwowany online z automatycznym przypomnieniem."],
      ["Dokumenty od klientów", "Biuro dostaje dokumenty w jednym miejscu, a AI je wstępnie opisuje."],
      ["Opinie", "Prośba o opinię wysyłana automatycznie po usłudze."],
    ],
    faq: [
      ["Czy mała firma z Legionowa może zacząć od jednego procesu?", "Tak, tak zaczynamy zawsze. Jeden proces, jasny koszt, a kolejne dopiero wtedy, gdy pierwszy działa."],
      ["Czy automatyzujecie biura rachunkowe?", "Tak. Zbieranie dokumentów od klientów, ich odczyt i przypomnienia o terminach to częste wdrożenia."],
      ["Czy obsługa będzie trudna dla zespołu z Legionowa?", "Nie powinna. Projektujemy rozwiązania tak, żeby korzystało się z nich w narzędziach, które zespół już zna."],
      ["Czy musimy spotykać się osobiście, skoro jesteśmy w Legionowie?", "Nie. Większość projektów prowadzimy zdalnie. Warsztat na miejscu proponujemy tylko wtedy, gdy wyraźnie przyspiesza pracę."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-ksiegowosci", "automatyzacja-w-obsludze-klienta", "automatyzacja-marketingu"],
  }),

  town({
    ...base,
    slug: "wolomin",
    name: "Wołomin",
    nameGenitive: "Wołomina",
    nameLocative: "Wołominie",
    nearbyCitySlugs: ["warszawa", "minsk-mazowiecki", "legionowo", "otwock", "wyszkow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Wołomina: produkcja, budownictwo, handel i usługi na wschodnich przedmieściach Warszawy. Konsultacja 30 min.",
    heroLead:
      "Pomagamy wołomińskim firmom produkcyjnym, budowlanym i usługowym odejść od przepisywania zamówień i ręcznego pilnowania terminów.",
    intro: [
      "Wołomin leży na wschodnich przedmieściach Warszawy. W powiecie działają zakłady produkcyjne, firmy budowlane, hurtownie i dużo usług, które obsługują mieszkańców rosnących osiedli.",
      "Wiele wołomińskich firm to firmy rodzinne, w których właściciel sam pilnuje zamówień, ofert i faktur. Automatyzacja przejmuje tę powtarzalną część pracy.",
    ],
    localContext:
      "Firmy z powiatu wołomińskiego obsługują klientów z Warszawy i okolicznych gmin. Zamówienia i zapytania przychodzą telefonicznie, mailowo i przez komunikatory, a potem trzeba je zebrać w jednym miejscu.",
    whyHere:
      "W Wołominie automatyzacja zbiera zapytania i zamówienia z różnych kanałów, żeby nic nie ginęło, a oferty i faktury wychodziły szybciej.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i terminy widoczne dla biura."],
      ["Budownictwo", "Wyceny, harmonogramy i rozliczenia podwykonawców."],
      ["Hurtownie", "Zamówienia, stany i faktury spięte ze sobą."],
      ["Usługi", "Zapisy, przypomnienia i płatności online."],
    ],
    processes: [
      ["Zbieranie zapytań", "Zapytania z maila, formularza i komunikatorów trafiają do jednej listy."],
      ["Oferty", "Oferta tworzona z szablonu i wysyłana do akceptacji."],
      ["Harmonogram prac", "Terminy ekip i dostaw materiałów widoczne w jednym kalendarzu."],
      ["Faktury", "Zakończone zlecenie uruchamia fakturę."],
    ],
    faq: [
      ["Czy pracujecie z firmami budowlanymi?", "Tak. Automatyzujemy wyceny, harmonogramy i rozliczenia zleceń."],
      ["Czy mała firma z Wołomina może zacząć od jednego procesu?", "Tak, tak zaczynamy zawsze. Jeden proces, jasny koszt, a kolejne dopiero wtedy, gdy pierwszy działa."],
      ["Co z naszym programem księgowym i magazynowym w Wołominie?", "Zostaje. Automatyzacja przekazuje do niego dane, zamiast go zastępować. Jeśli program nie pozwala na wymianę danych, szukamy obejścia."],
      ["Jak często będziemy się kontaktować podczas wdrożenia w Wołominie?", "Zwykle raz w tygodniu na krótkim spotkaniu online, a na bieżąco przez maila lub komunikator."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "otwock",
    name: "Otwock",
    nameGenitive: "Otwocka",
    nameLocative: "Otwocku",
    nearbyCitySlugs: ["warszawa", "piaseczno", "minsk-mazowiecki", "garwolin", "wolomin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Otwocka: usługi medyczne, gabinety, handel, budownictwo i biura na przedmieściach Warszawy. Konsultacja 30 min.",
    heroLead:
      "Pomagamy otwockim gabinetom, firmom usługowym i handlowym obsłużyć więcej klientów bez ręcznego pilnowania zapisów i dokumentów.",
    intro: [
      "Otwock, dawne miasto uzdrowiskowe, jest dziś przedmieściem Warszawy z silnym sektorem usług: medycznych, opiekuńczych, edukacyjnych i budowlanych. Działają tu także hurtownie i mniejsze zakłady produkcyjne.",
      "W gabinetach i firmach usługowych dużo czasu zajmują zapisy, przypomnienia, dokumenty i rozliczenia. To dokładnie ta praca, którą można zautomatyzować.",
    ],
    localContext:
      "Otwockie placówki medyczne i usługowe obsługują pacjentów i klientów z całego powiatu. Odwołane wizyty, brak przypomnień i ręczne umawianie terminów kosztują czas i pieniądze.",
    whyHere:
      "W Otwocku automatyzacja przypomina o wizytach, zbiera dokumenty i odpowiada na typowe pytania, żeby recepcja mogła zająć się ludźmi.",
    industries: [
      ["Gabinety i usługi medyczne", "Zapisy online, przypomnienia i dokumenty dla pacjentów."],
      ["Usługi opiekuńcze i edukacyjne", "Zapisy, płatności i komunikacja z rodzinami."],
      ["Budownictwo i remonty", "Wyceny, harmonogramy i rozliczenia."],
      ["Handel", "Zamówienia, stany i faktury w jednym widoku."],
    ],
    processes: [
      ["Przypomnienia o wizytach", "SMS lub mail przed wizytą z możliwością potwierdzenia lub zmiany terminu."],
      ["Zapisy online", "Pacjent lub klient wybiera termin, a kalendarz aktualizuje się sam."],
      ["Dokumenty przed wizytą", "Formularze i zgody zbierane elektronicznie."],
      ["Płatności", "Link do płatności i faktura wysyłane automatycznie."],
    ],
    faq: [
      ["Czy automatyzujecie gabinety medyczne?", "Tak. Zapisy, przypomnienia, formularze i płatności. Pracujemy z danymi pacjentów zgodnie z RODO."],
      ["Czy przypomnienia zmniejszają liczbę nieodwołanych wizyt?", "W praktyce pomagają, bo pacjent może łatwo potwierdzić albo przełożyć termin. Efekt zależy od placówki."],
      ["Jak często będziemy się kontaktować podczas wdrożenia w Otwocku?", "Zwykle raz w tygodniu na krótkim spotkaniu online, a na bieżąco przez maila lub komunikator."],
      ["Czy potrzebny jest nowy system rejestracji?", "Nie zawsze. Często łączymy się z tym, którego już używacie."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "cyfryzacja-danych-i-dokumentow"],
  }),

  town({
    ...base,
    slug: "minsk-mazowiecki",
    name: "Mińsk Mazowiecki",
    nameGenitive: "Mińska Mazowieckiego",
    nameLocative: "Mińsku Mazowieckim",
    nearbyCitySlugs: ["warszawa", "wolomin", "siedlce", "garwolin", "otwock"],
    metaDescription:
      "Automatyzacja procesów dla firm z Mińska Mazowieckiego: produkcja, logistyka przy A2, handel i usługi na wschód od Warszawy. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Mińska Mazowieckiego uporządkować zamówienia, wysyłki i raporty, żeby tempo sprzedaży nie przerastało biura.",
    intro: [
      "Mińsk Mazowiecki leży przy autostradzie A2, na wschód od Warszawy. Dzięki dobremu dojazdowi rozwinęły się tu zakłady produkcyjne, magazyny i firmy transportowe, a miasto obsługuje handlowo cały powiat.",
      "Firmy z Mińska często sprzedają w całej Polsce i za wschodnią granicę. Więcej klientów to więcej zamówień, dokumentów wysyłkowych i faktur do przygotowania.",
    ],
    localContext:
      "Mińskie firmy konkurują o pracowników z Warszawą. Trudniej zatrudnić osobę do biura, więc każdy proces, który działa sam, odciąża zespół.",
    whyHere:
      "W Mińsku Mazowieckim automatyzacja pozwala obsłużyć więcej zamówień i przesyłek bez dokładania etatów w biurze.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki w jednym przepływie."],
      ["Transport i spedycja", "Zlecenia, dokumenty i statusy dla klienta."],
      ["Handel", "Zamówienia, stany i faktury spięte z magazynem."],
      ["Usługi", "Zapisy, terminy i rozliczenia bez przepisywania."],
    ],
    processes: [
      ["Przyjęcie zamówienia", "Zamówienie z maila trafia do systemu po automatycznym odczycie."],
      ["Dokumenty wysyłkowe", "Etykiety i dokumenty przewozowe tworzone z danych zamówienia."],
      ["Status zlecenia", "Klient dostaje informację o statusie bez telefonu."],
      ["Raport sprzedaży", "Sprzedaż i należności w jednym zestawieniu."],
    ],
    faq: [
      ["Czy pracujecie z firmami transportowymi?", "Tak. Automatyzujemy zlecenia, dokumenty i informowanie klientów o statusie."],
      ["Czy łączycie się z naszym ERP?", "Tak, jeśli system pozwala na wymianę danych. Sprawdzamy to na konsultacji."],
      ["Czy wdrożenie odciągnie nasz zespół w Mińsku Mazowieckim od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
      ["Ile trwa pierwsze wdrożenie w firmie z Mińska Mazowieckiego?", "Wąski proces zwykle kilka tygodni. Dokładny termin podajemy po przeglądzie procesu."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "grodzisk-mazowiecki",
    name: "Grodzisk Mazowiecki",
    nameGenitive: "Grodziska Mazowieckiego",
    nameLocative: "Grodzisku Mazowieckim",
    nearbyCitySlugs: ["warszawa", "pruszkow", "zyrardow", "ozarow-mazowiecki", "sochaczew"],
    metaDescription:
      "Automatyzacja procesów dla firm z Grodziska Mazowieckiego: magazyny przy A2, produkcja, handel i usługi. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy grodziskim firmom logistycznym, produkcyjnym i usługowym zamienić ręczne statusy i dokumenty w przepływy, które działają same.",
    intro: [
      "Grodzisk Mazowiecki leży przy autostradzie A2, w zachodniej części aglomeracji warszawskiej. W okolicy powstały centra magazynowe i zakłady produkcyjne, a samo miasto ma silny sektor usług i handlu.",
      "Firmy z Grodziska obsługują klientów z Warszawy i całej Polski. Oczekiwania są wysokie: szybka dostawa, bieżący status i kompletne dokumenty.",
    ],
    localContext:
      "Grodziskie firmy działają w bezpośredniej konkurencji z Warszawą, także o pracowników. Mały zespół musi pracować efektywnie, bez tracenia czasu na przepisywanie.",
    whyHere:
      "W Grodzisku Mazowieckim automatyzacja pozwala utrzymać tempo obsługi klientów z metropolii przy niewielkim zespole.",
    industries: [
      ["Magazyny i dystrybucja", "Awizacje, sloty i dokumenty bez ręcznej pracy."],
      ["Produkcja", "Zlecenia, stany i wysyłki w jednym widoku."],
      ["Handel", "Zamówienia z wielu kanałów i faktury spięte ze sobą."],
      ["Usługi", "Zapisy, wyceny i płatności online."],
    ],
    processes: [
      ["Awizacje", "Termin dostawy potwierdzany automatycznie z klientem i przewoźnikiem."],
      ["Zamówienia", "Zamówienia z maila i platform w jednej liście."],
      ["Dokumenty", "Dokumenty przewozowe i faktury tworzone z danych zlecenia."],
      ["Raporty", "Terminowość i sprzedaż liczone automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z magazynami przy A2?", "Tak. Automatyzujemy awizacje, statusy i dokumenty przewozowe."],
      ["Czy automatyzujecie sprzedaż internetową?", "Tak. Łączymy sklep, platformy, magazyn i kurierów."],
      ["Czy musimy spotykać się osobiście, skoro jesteśmy w Grodzisku Mazowieckim?", "Nie. Większość projektów prowadzimy zdalnie. Warsztat na miejscu proponujemy tylko wtedy, gdy wyraźnie przyspiesza pracę."],
      ["Czy małą firmę z Grodziska Mazowieckiego stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność oceniamy razem."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-sprzedazy", "automatyzacja-w-produkcji", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "nowy-dwor-mazowiecki",
    name: "Nowy Dwór Mazowiecki",
    nameGenitive: "Nowego Dworu Mazowieckiego",
    nameLocative: "Nowym Dworze Mazowieckim",
    nearbyCitySlugs: ["warszawa", "legionowo", "plonsk", "pultusk", "ozarow-mazowiecki"],
    metaDescription:
      "Automatyzacja procesów dla firm z Nowego Dworu Mazowieckiego: logistyka przy lotnisku Modlin, usługi, handel i produkcja. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Nowego Dworu Mazowieckiego uporządkować zamówienia, rezerwacje i dokumenty bez dokładania pracy biurowej.",
    intro: [
      "Nowy Dwór Mazowiecki leży u zbiegu Wisły i Narwi, obok lotniska Warszawa-Modlin i historycznej Twierdzy Modlin. Lokalną gospodarkę tworzą usługi związane z lotniskiem, transport, handel, produkcja i budownictwo.",
      "Firmy obsługujące podróżnych i przewozy działają w rytmie lotów: rezerwacje, transfery, parkingi i zmiany terminów. Obsługiwane ręcznie, szybko przerastają mały zespół.",
    ],
    localContext:
      "Wiele nowodworskich firm obsługuje klientów spoza regionu, często zagranicznych. Zapytania przychodzą o każdej porze i w kilku językach.",
    whyHere:
      "W Nowym Dworze Mazowieckim automatyzacja pozwala obsługiwać rezerwacje i pytania całą dobę, a zespół zajmuje się realizacją.",
    industries: [
      ["Usługi dla podróżnych", "Rezerwacje parkingów, transferów i noclegów z automatycznymi potwierdzeniami."],
      ["Transport", "Zlecenia, statusy i dokumenty dla klientów."],
      ["Budownictwo", "Wyceny, harmonogramy i rozliczenia zleceń."],
      ["Handel i produkcja", "Zamówienia, stany i faktury w jednym przepływie."],
    ],
    processes: [
      ["Rezerwacje online", "Rezerwacja uruchamia potwierdzenie, płatność i przypomnienie."],
      ["Zmiany terminów", "Klient zmienia termin sam, a kalendarz aktualizuje się automatycznie."],
      ["Pytania klientów", "Asystent AI odpowiada o ceny, dojazd i warunki w kilku językach."],
      ["Faktury", "Faktura wysyłana automatycznie po usłudze."],
    ],
    faq: [
      ["Czy automatyzujecie rezerwacje parkingów i transferów?", "Tak. Rezerwacja, płatność, potwierdzenie i przypomnienie mogą działać bez udziału zespołu."],
      ["Czy chatbot obsłuży klientów zagranicznych?", "Tak, asystent AI odpowiada w kilku językach na podstawie waszych informacji."],
      ["Czy wdrożenie odciągnie zespół z Nowego Dworu Mazowieckiego od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
      ["Jaki jest pierwszy krok dla firmy z Nowego Dworu Mazowieckiego?", "Krótka rozmowa online o tym, co zabiera zespołowi najwięcej czasu. Potem przegląd wybranego procesu i wycena."],
    ],
    services: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-logistyki"],
  }),

  town({
    ...base,
    slug: "ozarow-mazowiecki",
    name: "Ożarów Mazowiecki",
    nameGenitive: "Ożarowa Mazowieckiego",
    nameLocative: "Ożarowie Mazowieckim",
    nearbyCitySlugs: ["warszawa", "pruszkow", "grodzisk-mazowiecki", "nowy-dwor-mazowiecki", "sochaczew"],
    metaDescription:
      "Automatyzacja procesów dla firm z Ożarowa Mazowieckiego: centra logistyczne, dystrybucja, e-commerce i produkcja przy A2. Konsultacja 30 min.",
    heroLead:
      "Pomagamy ożarowskim centrom dystrybucyjnym i firmom handlowym obsłużyć więcej przesyłek i zamówień tym samym zespołem.",
    intro: [
      "Ożarów Mazowiecki leży tuż za zachodnią granicą Warszawy, przy autostradzie A2. Gmina jest jednym z głównych zagłębi magazynowych aglomeracji: działają tu centra logistyczne, hurtownie, firmy kurierskie i zakłady produkcyjne.",
      "W takim otoczeniu każda minuta obsługi zamówienia przekłada się na koszty. Ręczne awizacje, przepisywanie danych do portali klientów i telefoniczne statusy spowalniają pracę.",
    ],
    localContext:
      "Ożarowskie firmy logistyczne często obsługują kilku dużych klientów, z których każdy ma własny system i format danych. Zespół przepisuje te same informacje w kilka miejsc.",
    whyHere:
      "W Ożarowie Mazowieckim automatyzacja przenosi dane między systemami klientów, magazynu i przewoźników bez ręcznego przepisywania.",
    industries: [
      ["Centra logistyczne", "Awizacje, sloty i raporty dla klientów bez ręcznej pracy."],
      ["Dystrybucja i hurt", "Zamówienia, stany i faktury spięte ze sobą."],
      ["E-commerce", "Zamówienia, wysyłki i zwroty w jednym przepływie."],
      ["Produkcja", "Zlecenia i wysyłki ze statusem dla odbiorcy."],
    ],
    processes: [
      ["Dane od klientów", "Zamówienia z różnych formatów i portali sprowadzone do jednego."],
      ["Awizacje i sloty", "Rezerwacja okna dostawy i potwierdzenie bez maili."],
      ["Raport dla klienta", "Terminowość, stany i ruchy magazynowe liczone automatycznie."],
      ["Rozliczenia", "Usługi magazynowe fakturowane na podstawie danych z systemu."],
    ],
    faq: [
      ["Czy łączycie się z systemami WMS?", "Tak, jeśli system pozwala na wymianę danych przez API lub pliki. Sprawdzamy to na konsultacji."],
      ["Czy automatyzujecie raporty dla klientów logistycznych?", "Tak. Raporty terminowości i stanów mogą powstawać same i trafiać do klienta według harmonogramu."],
      ["Czy spotykacie się w firmie?", "Pracujemy głównie zdalnie. Przy większym projekcie proponujemy warsztat na miejscu."],
      ["Czy firma z Ożarowa Mazowieckiego potrzebuje działu IT?", "Nie. Wystarczy osoba, która zna proces. Konfigurację robimy my, a zespół dostaje instrukcję."],
    ],
    services: ["automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-raportow", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "zyrardow",
    name: "Żyrardów",
    nameGenitive: "Żyrardowa",
    nameLocative: "Żyrardowie",
    nearbyCitySlugs: ["warszawa", "grodzisk-mazowiecki", "sochaczew", "pruszkow", "grojec"],
    metaDescription:
      "Automatyzacja procesów dla firm z Żyrardowa: produkcja, logistyka, handel i usługi w dawnym mieście lniarskim. Konsultacja 30 min.",
    heroLead:
      "Pomagamy żyrardowskim firmom produkcyjnym i usługowym uporządkować zamówienia, dokumenty i raporty.",
    intro: [
      "Żyrardów wyrósł wokół fabryki wyrobów lnianych, a jego XIX-wieczna osada fabryczna jest dziś jednym z najlepiej zachowanych zespołów tego typu w Europie. Współczesna gospodarka to produkcja, logistyka, handel i usługi, także dla mieszkańców dojeżdżających do Warszawy.",
      "Mniejsze zakłady i firmy usługowe z Żyrardowa często opierają się na arkuszach i poczcie. Gdy zamówień przybywa, zespół zaczyna tonąć w przepisywaniu danych.",
    ],
    localContext:
      "Żyrardowskie firmy obsługują klientów z Warszawy i zachodniego Mazowsza. Klienci oczekują szybkiej odpowiedzi i bieżącego statusu zamówienia.",
    whyHere:
      "W Żyrardowie automatyzacja porządkuje zamówienia i dokumenty, żeby mały zespół nadążał za klientami z metropolii.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i terminy widoczne dla biura."],
      ["Logistyka", "Awizacje, statusy i dokumenty przewozowe."],
      ["Handel", "Zamówienia, stany i faktury spięte ze sobą."],
      ["Usługi", "Zapisy, wyceny i płatności online."],
    ],
    processes: [
      ["Zamówienie do systemu", "Zamówienie z maila odczytane i przygotowane do sprawdzenia."],
      ["Status zamówienia", "Klient i handlowiec widzą postęp bez telefonu."],
      ["Faktury", "Zakończone zlecenie uruchamia fakturę."],
      ["Raport miesięczny", "Sprzedaż i koszty w jednym zestawieniu."],
    ],
    faq: [
      ["Czy automatyzacja ma sens w małej firmie z Żyrardowa?", "Tak. W małych zespołach każda zautomatyzowana czynność daje szybko odczuwalną ulgę."],
      ["Czy firma z Żyrardowa potrzebuje nowego systemu, żeby zacząć?", "Najczęściej nie. Zaczynamy od połączenia poczty, arkuszy i programów, które już macie."],
      ["Jak wygląda współpraca na odległość z firmą z Żyrardowa?", "Procesy poznajemy na wideorozmowach i przykładach dokumentów, a wdrożenie testujemy razem z zespołem na prawdziwych danych."],
      ["Ile trwa pierwsze wdrożenie w firmie z Żyrardowa?", "Wąski proces zwykle kilka tygodni. Dokładny termin podajemy po przeglądzie procesu."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "sochaczew",
    name: "Sochaczew",
    nameGenitive: "Sochaczewa",
    nameLocative: "Sochaczewie",
    nearbyCitySlugs: ["warszawa", "zyrardow", "grodzisk-mazowiecki", "plock", "gostynin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Sochaczewa: przemysł chemiczny, przetwórstwo spożywcze, logistyka przy A2, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy sochaczewskim zakładom i firmom logistycznym uporządkować zamówienia, dostawy i dokumentację.",
    intro: [
      "Sochaczew leży przy autostradzie A2, w połowie drogi między Warszawą a Łodzią. Miasto ma tradycje przemysłu chemicznego, a dziś rozwija się też dzięki przetwórstwu spożywczemu, logistyce i handlowi.",
      "Zakłady produkcyjne i przetwórcze z Sochaczewa pracują z wieloma dostawcami i odbiorcami. Dokumenty dostaw, jakości i wysyłek często przygotowuje się ręcznie.",
    ],
    localContext:
      "Rolnicze zaplecze powiatu sprawia, że sochaczewskie zakłady spożywcze obsługują wielu drobnych dostawców. Każda dostawa wymaga zapisu, kontroli i rozliczenia.",
    whyHere:
      "W Sochaczewie automatyzacja łączy przyjęcie dostawy, kontrolę jakości i rozliczenie w jeden przepływ.",
    industries: [
      ["Przemysł chemiczny", "Zlecenia, dokumentacja jakości i wysyłki bez przepisywania."],
      ["Przetwórstwo spożywcze", "Dostawy surowca, partie i rozliczenia z dostawcami."],
      ["Logistyka przy A2", "Awizacje i dokumenty przewozowe generowane automatycznie."],
      ["Handel", "Zamówienia, stany i faktury spięte ze sobą."],
    ],
    processes: [
      ["Przyjęcie dostawy", "Dostawa zapisana raz trafia do magazynu, jakości i rozliczeń."],
      ["Dokumenty jakości", "Świadectwa i raporty składane z danych kontroli."],
      ["Zamówienia od odbiorców", "Zamówienia z maila i portali trafiają do systemu."],
      ["Rozliczenia z dostawcami", "Zestawienia dostaw i płatności tworzone automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z zakładami przetwórczymi?", "Tak. Automatyzujemy przyjęcie surowca, dokumenty jakości i rozliczenia z dostawcami."],
      ["Czy automatyzujecie dokumentację jakości?", "Tak. Raporty i świadectwa mogą powstawać z danych, które już są zbierane."],
      ["Czy przyjeżdżacie do firm w Sochaczewie?", "Pracujemy zdalnie, a na miejsce przyjeżdżamy, gdy warsztat z zespołem przyspiesza projekt."],
      ["Czy małą firmę z Sochaczewa stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność oceniamy razem."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "grojec",
    name: "Grójec",
    nameGenitive: "Grójca",
    nameLocative: "Grójcu",
    nearbyCitySlugs: ["warszawa", "piaseczno", "bialobrzegi", "radom", "zyrardow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Grójca: sadownictwo, przechowalnie, skup i eksport owoców, przetwórstwo i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy grójeckim sadownikom, grupom producenckim i firmom handlowym uporządkować skup, przechowywanie, zamówienia i rozliczenia.",
    intro: [
      "Grójec jest stolicą największego zagłębia sadowniczego w Polsce, a region słynie z uprawy jabłek. Działają tu gospodarstwa, grupy producenckie, przechowalnie, sortownie, firmy eksportowe i przetwórnie.",
      "Handel owocami to dużo danych: dostawy od sadowników, partie w chłodniach, jakość, zamówienia od sieci handlowych i odbiorców zagranicznych. Gdy wszystko jest w zeszytach i arkuszach, łatwo o błędy w rozliczeniach.",
    ],
    localContext:
      "Grójeckie firmy handlowe skupują owoce od wielu gospodarstw, przechowują je miesiącami i sprzedają w kraju i za granicą. Rozliczenie z każdym dostawcą i każda partia eksportowa wymagają precyzyjnych dokumentów.",
    whyHere:
      "W Grójcu automatyzacja łączy skup, przechowalnię, sprzedaż i rozliczenia z dostawcami w jeden przepływ danych.",
    industries: [
      ["Grupy producenckie i skupy", "Dostawy od sadowników, ważenie i rozliczenia bez papierowych kwitów."],
      ["Przechowalnie i sortownie", "Partie, komory i stany w jednym widoku."],
      ["Eksport owoców", "Zamówienia, dokumenty wysyłkowe i faktury w walucie odbiorcy."],
      ["Przetwórstwo", "Surowiec, produkcja soków i koncentratów oraz wysyłki."],
    ],
    processes: [
      ["Przyjęcie dostawy", "Dane z wagi i jakości zapisane raz, widoczne w rozliczeniach."],
      ["Rozliczenia z sadownikami", "Zestawienia dostaw i płatności tworzone automatycznie."],
      ["Stany w chłodniach", "Aktualne stany partii i odmian bez ręcznego liczenia."],
      ["Dokumenty eksportowe", "Faktury i dokumenty wysyłkowe tworzone z danych zamówienia."],
    ],
    faq: [
      ["Czy pracujecie z grupami producenckimi?", "Tak. Automatyzujemy przyjęcie dostaw, rozliczenia z członkami i raporty."],
      ["Czy automatyzujecie dokumenty eksportowe?", "Tak. Faktury, specyfikacje i dokumenty wysyłkowe mogą powstawać z danych zamówienia."],
      ["Czy łączycie się z systemem wagowym?", "Jeśli system pozwala na eksport danych, tak. Sprawdzamy to na konsultacji."],
      ["Czy musimy spotykać się osobiście, skoro jesteśmy w Grójcu?", "Nie. Większość projektów prowadzimy zdalnie. Warsztat na miejscu proponujemy tylko wtedy, gdy wyraźnie przyspiesza pracę."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci", "porzadkowanie-i-strukturyzowanie-danych", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "garwolin",
    name: "Garwolin",
    nameGenitive: "Garwolina",
    nameLocative: "Garwolinie",
    nearbyCitySlugs: ["warszawa", "minsk-mazowiecki", "otwock", "siedlce", "radom"],
    metaDescription:
      "Automatyzacja procesów dla firm z Garwolina: przetwórstwo spożywcze, produkcja, transport przy S17, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy garwolińskim firmom przetwórczym, transportowym i handlowym uporządkować dostawy, zamówienia i dokumenty.",
    intro: [
      "Garwolin leży przy drodze ekspresowej S17 z Warszawy do Lublina. Lokalną gospodarkę tworzą przetwórstwo spożywcze, produkcja, transport i handel obsługujący rolniczy powiat.",
      "W firmach z Garwolina zespoły biurowe są małe, a obowiązków dużo. Zamówienia, dostawy i faktury przygotowuje się ręcznie, co zajmuje czas i sprzyja pomyłkom.",
    ],
    localContext:
      "Garwolińskie firmy transportowe i handlowe obsługują trasę Warszawa–Lublin. Klienci oczekują bieżącej informacji o dostawie i szybkich dokumentów.",
    whyHere:
      "W Garwolinie automatyzacja pozwala małej firmie obsługiwać dużych klientów bez tonięcia w dokumentach.",
    industries: [
      ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości."],
      ["Transport", "Zlecenia, statusy i dokumenty przewozowe."],
      ["Produkcja", "Zlecenia i wysyłki ze statusem dla klienta."],
      ["Handel", "Zamówienia, stany i faktury spięte ze sobą."],
    ],
    processes: [
      ["Zlecenia transportowe", "Zlecenie z maila trafia do planu z terminem."],
      ["Status dostawy", "Klient dostaje informację o dostawie automatycznie."],
      ["Dokumenty", "Dokumenty przewozowe i faktury z danych zlecenia."],
      ["Rozliczenia", "Zestawienie kursów i kosztów bez ręcznego liczenia."],
    ],
    faq: [
      ["Czy pracujecie z firmami transportowymi?", "Tak. Automatyzujemy zlecenia, statusy i dokumenty."],
      ["Czy mała firma z Garwolina może zacząć od jednego procesu?", "Tak, tak zaczynamy zawsze. Jeden proces, jasny koszt, a kolejne dopiero wtedy, gdy pierwszy działa."],
      ["Czy lokalizacja w Garwolinie wpływa na tempo projektu?", "Nie. Pracujemy zdalnie, więc zakres i terminy są takie same jak dla firm z dużych miast."],
      ["Czy potrzebne jest nowe oprogramowanie?", "Zwykle nie. Łączymy narzędzia, które już macie."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "mlawa",
    name: "Mława",
    nameGenitive: "Mławy",
    nameLocative: "Mławie",
    nearbyCitySlugs: ["ciechanow", "zuromin", "przasnysz", "plonsk", "warszawa"],
    metaDescription:
      "Automatyzacja procesów dla firm z Mławy: produkcja elektroniki i dostawcy, przetwórstwo spożywcze, logistyka przy S7. Konsultacja 30 min.",
    heroLead:
      "Pomagamy mławskim dostawcom, zakładom przetwórczym i firmom logistycznym uporządkować zamówienia, raporty i dokumenty.",
    intro: [
      "Mława leży przy drodze S7 na północnym Mazowszu. W mieście działa strefa przemysłowa z zakładem produkcji elektroniki użytkowej i jego dostawcami, a także zakłady przetwórstwa spożywczego i firmy logistyczne.",
      "Dostawcy dużych zakładów pracują według ścisłych harmonogramów i wymagań jakościowych. Zamówienia, raporty i dokumenty wysyłkowe muszą być gotowe na czas.",
    ],
    localContext:
      "Mławskie firmy często konkurują o pracowników z dużym zakładem w strefie. Trudno o osoby do biura, więc powtarzalną pracę opłaca się automatyzować.",
    whyHere:
      "W Mławie automatyzacja pozwala spełnić wymagania dużych odbiorców i obsłużyć więcej zamówień bez dokładania etatów.",
    industries: [
      ["Dostawcy elektroniki", "Harmonogramy dostaw, raporty jakości i dokumentacja partii."],
      ["Przetwórstwo spożywcze", "Dostawy surowca, produkcja i wysyłki w jednym przepływie."],
      ["Logistyka", "Awizacje, statusy i dokumenty przewozowe."],
      ["Handel i usługi", "Zamówienia, zapisy i faktury obsługiwane sprawnie."],
    ],
    processes: [
      ["Harmonogram dostaw", "Zmiany w harmonogramie odbiorcy aktualizują plan bez przepisywania."],
      ["Raporty jakości", "Wyniki kontroli składane w raport dla odbiorcy automatycznie."],
      ["Dokumenty wysyłkowe", "Dokumenty i etykiety tworzone z danych zlecenia."],
      ["Faktury", "Potwierdzona dostawa uruchamia fakturę."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami zakładów w strefie?", "Tak. Automatyzujemy harmonogramy, raporty jakości i dokumentację dostaw."],
      ["Czy łączycie się z portalami odbiorców?", "Tak, jeśli portal pozwala na wymianę danych. Sprawdzamy to na konsultacji."],
      ["Czy wdrożenie odciągnie zespół z Mławy od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
      ["Jaki jest pierwszy krok dla firmy z Mławy?", "Krótka rozmowa online o tym, co zabiera zespołowi najwięcej czasu. Potem przegląd wybranego procesu i wycena."],
    ],
    services: ["automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow", "automatyzacja-dla-logistyki"],
  }),

  town({
    ...base,
    slug: "plonsk",
    name: "Płońsk",
    nameGenitive: "Płońska",
    nameLocative: "Płońsku",
    nearbyCitySlugs: ["ciechanow", "nowy-dwor-mazowiecki", "plock", "mlawa", "warszawa"],
    metaDescription:
      "Automatyzacja procesów dla firm z Płońska: przetwórstwo, handel rolny, transport przy S7 i usługi. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy płońskim firmom handlowym, przetwórczym i transportowym zamienić ręczne zamówienia i rozliczenia w przepływy, które działają same.",
    intro: [
      "Płońsk leży przy drodze S7, w rolniczej części północnego Mazowsza. Gospodarkę miasta tworzą przetwórstwo spożywcze, handel produktami rolnymi, transport i usługi dla gospodarstw.",
      "Firmy obsługujące rolnictwo pracują z wieloma klientami i dostawcami, a sezon wyznacza rytm pracy. W szczycie zamówień i dostaw ręczna obsługa nie wystarcza.",
    ],
    localContext:
      "Płońskie firmy handlowe sprzedają nawozy, pasze, maszyny i części rolnikom z całego regionu. Zamówienia przychodzą telefonicznie, a terminy płatności są często odroczone.",
    whyHere:
      "W Płońsku automatyzacja zbiera zamówienia, pilnuje terminów płatności i przypomina klientom o należnościach.",
    industries: [
      ["Handel dla rolnictwa", "Zamówienia, dostawy i należności pod kontrolą."],
      ["Przetwórstwo", "Surowiec, partie i wysyłki w jednym przepływie."],
      ["Transport", "Zlecenia, statusy i dokumenty dla klienta."],
      ["Usługi i serwis maszyn", "Zgłoszenia, terminy i historia napraw."],
    ],
    processes: [
      ["Zamówienia telefoniczne", "Zamówienie zapisane w formularzu trafia do magazynu i faktury."],
      ["Należności", "Przypomnienia o płatnościach wysyłane automatycznie."],
      ["Zgłoszenia serwisowe", "Zgłoszenie trafia do serwisanta z terminem i historią maszyny."],
      ["Raport sezonu", "Sprzedaż według klientów i produktów bez ręcznego liczenia."],
    ],
    faq: [
      ["Czy pracujecie z firmami handlującymi z rolnikami?", "Tak. Automatyzujemy zamówienia, należności i obsługę serwisu."],
      ["Czy przypomnienia o płatnościach działają automatycznie?", "Tak. System wysyła przypomnienia według ustalonych terminów, a wy widzicie, kto zapłacił."],
      ["Czy wdrożenie odciągnie nasz zespół w Płońsku od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
      ["Czy firma z Płońska musi wymieniać programy?", "Zwykle nie. Łączymy narzędzia, których już używacie, i dokładamy tylko to, czego brakuje."],
    ],
    services: ["automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych"],
  }),

  town({
    ...base,
    slug: "zuromin",
    name: "Żuromin",
    nameGenitive: "Żuromina",
    nameLocative: "Żurominie",
    nearbyCitySlugs: ["mlawa", "ciechanow", "sierpc", "plonsk", "plock"],
    metaDescription:
      "Automatyzacja procesów dla firm z Żuromina: produkcja drobiu i pasz, przetwórstwo, handel i usługi dla rolnictwa. Konsultacja 30 min.",
    heroLead:
      "Pomagamy żuromińskim firmom rolnym, przetwórczym i handlowym uporządkować dostawy, rozliczenia i dokumenty.",
    intro: [
      "Powiat żuromiński to jeden z najważniejszych w Polsce ośrodków produkcji drobiu. Wokół ferm działają wytwórnie pasz, firmy transportowe, przetwórnie i handel zaopatrzeniem dla rolnictwa.",
      "Produkcja zwierzęca oznacza dużo dokumentów: dostawy pasz, wstawienia, odbiory, rozliczenia z zakładami i wymagania weterynaryjne. W wielu gospodarstwach i firmach wszystko to prowadzi się na papierze.",
    ],
    localContext:
      "Żuromińskie firmy pracują w cyklach produkcyjnych, w których liczy się każdy termin. Opóźniona informacja o odbiorze czy dostawie paszy przekłada się na koszty.",
    whyHere:
      "W Żurominie automatyzacja porządkuje terminy, dostawy i rozliczenia w cyklu produkcji, żeby nic nie umknęło.",
    industries: [
      ["Fermy i produkcja drobiu", "Wstawienia, dostawy pasz i odbiory w jednym kalendarzu."],
      ["Wytwórnie pasz", "Zamówienia od hodowców, produkcja i dostawy."],
      ["Transport", "Zlecenia przewozowe i dokumenty dla klienta."],
      ["Handel zaopatrzeniem", "Zamówienia, stany i należności pod kontrolą."],
    ],
    processes: [
      ["Kalendarz cyklu", "Terminy wstawień, dostaw i odbiorów z automatycznymi przypomnieniami."],
      ["Zamówienia pasz", "Zamówienie od hodowcy trafia do planu produkcji i dostaw."],
      ["Rozliczenia", "Zestawienie dostaw i płatności tworzone automatycznie."],
      ["Dokumenty", "Dokumenty przewozowe i faktury z danych zlecenia."],
    ],
    faq: [
      ["Czy pracujecie z firmami z branży drobiarskiej?", "Tak. Automatyzujemy terminy, zamówienia pasz, dostawy i rozliczenia."],
      ["Czy mała firma z Żuromina może zacząć od jednego procesu?", "Tak, tak zaczynamy zawsze. Jeden proces, jasny koszt, a kolejne dopiero wtedy, gdy pierwszy działa."],
      ["Czy musimy spotykać się osobiście, skoro jesteśmy w Żurominie?", "Nie. Większość projektów prowadzimy zdalnie. Warsztat na miejscu proponujemy tylko wtedy, gdy wyraźnie przyspiesza pracę."],
      ["Czy potrzebny jest komputer w oborze?", "Nie. Wiele rzeczy da się obsłużyć w telefonie, prostym formularzem."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow"],
  }),

  town({
    ...base,
    slug: "pultusk",
    name: "Pułtusk",
    nameGenitive: "Pułtuska",
    nameLocative: "Pułtusku",
    nearbyCitySlugs: ["legionowo", "ciechanow", "makow-mazowiecki", "wyszkow", "warszawa"],
    metaDescription:
      "Automatyzacja procesów dla firm z Pułtuska: turystyka i hotelarstwo nad Narwią, handel, usługi i przetwórstwo. Konsultacja 30 min.",
    heroLead:
      "Pomagamy pułtuskim hotelom, firmom usługowym i handlowym obsłużyć rezerwacje, zamówienia i faktury bez ręcznego pilnowania.",
    intro: [
      "Pułtusk leży nad Narwią, z jednym z najdłuższych rynków w Europie i zamkiem, w którym działa hotel i centrum konferencyjne. Lokalna gospodarka łączy turystykę, organizację wydarzeń, handel i usługi.",
      "Hotele i firmy organizujące wydarzenia obsługują zapytania o wesela, szkolenia i konferencje. Każde zapytanie to wycena, umowa, zaliczka i dopracowanie szczegółów, zwykle w długiej korespondencji mailowej.",
    ],
    localContext:
      "Pułtuskie firmy turystyczne obsługują klientów z Warszawy, dla których to popularne miejsce na wydarzenia firmowe i rodzinne. Szybka i konkretna oferta decyduje o rezerwacji.",
    whyHere:
      "W Pułtusku automatyzacja przyspiesza odpowiedź na zapytanie, wycenę i potwierdzenie rezerwacji.",
    industries: [
      ["Hotele i obiekty konferencyjne", "Zapytania, oferty, umowy i zaliczki w jednym przepływie."],
      ["Organizacja wydarzeń", "Wyceny, harmonogramy i rozliczenia z podwykonawcami."],
      ["Handel", "Zamówienia, stany i faktury spięte ze sobą."],
      ["Usługi", "Zapisy, przypomnienia i płatności online."],
    ],
    processes: [
      ["Zapytanie o wydarzenie", "Formularz zbiera szczegóły, a oferta powstaje z szablonu."],
      ["Umowa i zaliczka", "Akceptacja oferty uruchamia umowę i link do płatności."],
      ["Ustalenia z klientem", "Szczegóły wydarzenia w jednym miejscu, bez długich wątków mailowych."],
      ["Faktura końcowa", "Rozliczenie tworzone z ustaleń i zaliczek."],
    ],
    faq: [
      ["Czy automatyzujecie obsługę zapytań o wesela i konferencje?", "Tak. Formularz, oferta z szablonu, umowa i zaliczka mogą działać w jednym przepływie."],
      ["Czy to zastąpi pracę koordynatora?", "Nie. Odciąża go z powtarzalnych czynności, żeby miał więcej czasu dla klientów."],
      ["Czy firma z Pułtuska może zacząć bez spotkania na żywo?", "Tak. Pierwsza rozmowa i cały przegląd procesu odbywają się online. Wystarczy komputer i kilka przykładowych dokumentów."],
      ["Czy małą firmę z Pułtuska stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność oceniamy razem."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-obsludze-klienta", "automatyzacja-sprzedazy", "chatbot-ai-dla-firmy"],
  }),

  town({
    ...base,
    slug: "przasnysz",
    name: "Przasnysz",
    nameGenitive: "Przasnysza",
    nameLocative: "Przasnyszu",
    nearbyCitySlugs: ["mlawa", "makow-mazowiecki", "ostroleka", "ciechanow", "zuromin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Przasnysza: produkcja w strefie przemysłowej, przetwórstwo, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy przasnyskim zakładom i firmom handlowym uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Przasnysz jest ośrodkiem rolniczego powiatu na północy Mazowsza. W mieście działa strefa przemysłowa z zakładami produkcyjnymi, a także przetwórnie, hurtownie i firmy usługowe.",
      "W mniejszych zakładach i hurtowniach wiele informacji krąży w arkuszach i na papierze. Gdy klientów przybywa, zaczyna brakować czasu na przepisywanie danych.",
    ],
    localContext:
      "Przasnyskie firmy obsługują klientów z kilku powiatów i dużych odbiorców z Warszawy. Muszą szybko odpowiadać i dostarczać dokumenty, choć zespoły są niewielkie.",
    whyHere:
      "W Przasnyszu automatyzacja przejmuje przepisywanie zamówień i przygotowanie dokumentów, żeby mały zespół nadążał za klientami.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki w jednym przepływie."],
      ["Przetwórstwo", "Dostawy, partie i dokumenty jakości."],
      ["Hurtownie", "Zamówienia, stany i faktury spięte ze sobą."],
      ["Usługi", "Zgłoszenia, terminy i rozliczenia."],
    ],
    processes: [
      ["Zamówienia", "Zamówienie z maila trafia do systemu po automatycznym odczycie."],
      ["Stany magazynowe", "Powiadomienie o brakach, zanim zabraknie towaru."],
      ["Faktury", "Zakończone zamówienie uruchamia fakturę."],
      ["Raport", "Sprzedaż i należności w jednym zestawieniu."],
    ],
    faq: [
      ["Czy pracujecie z zakładami ze strefy w Przasnyszu?", "Tak. Automatyzujemy zamówienia, raporty i dokumentację."],
      ["Czy mała hurtownia może zacząć?", "Tak. Zaczynamy od jednego procesu z jasnym kosztem."],
      ["Czy lokalizacja w Przasnyszu wpływa na tempo projektu?", "Nie. Pracujemy zdalnie, więc zakres i terminy są takie same jak dla firm z dużych miast."],
      ["Czy zostajecie z firmą z Przasnysza po wdrożeniu?", "Tak. Pilnujemy, żeby rozwiązanie działało, poprawiamy je i pomagamy dokładać kolejne procesy."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "makow-mazowiecki",
    name: "Maków Mazowiecki",
    nameGenitive: "Makowa Mazowieckiego",
    nameLocative: "Makowie Mazowieckim",
    nearbyCitySlugs: ["pultusk", "przasnysz", "ostroleka", "wyszkow", "ciechanow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Makowa Mazowieckiego: przetwórstwo spożywcze, handel rolny, transport i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Makowa Mazowieckiego zamienić ręczne zamówienia, dostawy i faktury w proste przepływy.",
    intro: [
      "Maków Mazowiecki jest ośrodkiem rolniczego powiatu nad Orzycem. Lokalną gospodarkę tworzą przetwórstwo spożywcze, handel produktami rolnymi, transport i usługi.",
      "W niewielkich firmach właściciel i kilka osób obsługują zamówienia, dostawy, faktury i klientów. Automatyzacja zdejmuje z nich część tej powtarzalnej pracy.",
    ],
    localContext:
      "Makowskie firmy pracują z wieloma gospodarstwami z okolicy. Dostawy i zamówienia przychodzą telefonicznie, a rozliczenia prowadzi się w zeszytach i arkuszach.",
    whyHere:
      "W Makowie Mazowieckim automatyzacja pozwala prowadzić rozliczenia z dostawcami i klientami w jednym miejscu, bez przepisywania.",
    industries: [
      ["Przetwórstwo spożywcze", "Dostawy, partie i dokumenty jakości."],
      ["Handel rolny", "Zamówienia, dostawy i należności."],
      ["Transport", "Zlecenia i dokumenty przewozowe."],
      ["Usługi", "Zapisy, terminy i przypomnienia."],
    ],
    processes: [
      ["Przyjęcie dostawy", "Dostawa zapisana raz trafia do magazynu i rozliczeń."],
      ["Zamówienia", "Zamówienia z telefonu i maila w jednej liście."],
      ["Faktury", "Faktura tworzona z danych zamówienia."],
      ["Należności", "Przypomnienia o płatnościach wysyłane automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z firmami z małych miast?", "Tak. Pracujemy zdalnie, więc lokalizacja nie ma znaczenia."],
      ["Czy firma z Makowa Mazowieckiego musi wymieniać programy?", "Zwykle nie. Łączymy narzędzia, których już używacie, i dokładamy tylko to, czego brakuje."],
      ["Od czego firma z Makowa Mazowieckiego powinna zacząć automatyzację?", "Od bezpłatnej, 30-minutowej konsultacji. Wskazujemy jeden proces z najszybszym zwrotem i przygotowujemy wycenę pierwszego etapu."],
      ["Ile trwa pierwsze wdrożenie w firmie z Makowa Mazowieckiego?", "Wąski proces zwykle kilka tygodni. Dokładny termin podajemy po przeglądzie procesu."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "cyfryzacja-danych-i-dokumentow", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "ostrow-mazowiecka",
    name: "Ostrów Mazowiecka",
    nameGenitive: "Ostrowi Mazowieckiej",
    nameLocative: "Ostrowi Mazowieckiej",
    nearbyCitySlugs: ["ostroleka", "wyszkow", "siedlce", "wegrow", "warszawa"],
    metaDescription:
      "Automatyzacja procesów dla firm z Ostrowi Mazowieckiej: produkcja w strefie ekonomicznej, przetwórstwo, transport przy S8. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Ostrowi Mazowieckiej uporządkować zamówienia, dostawy i dokumenty, żeby produkcja i transport nie czekały na biuro.",
    intro: [
      "Ostrów Mazowiecka leży przy drodze S8 z Warszawy do Białegostoku. W mieście działa podstrefa strefy ekonomicznej z zakładami produkcyjnymi, a także przetwórnie spożywcze i firmy transportowe.",
      "Zakłady i przewoźnicy pracują według harmonogramów odbiorców. Zamówienia, dokumenty i statusy trzeba przekazywać szybko, a zespoły biurowe są niewielkie.",
    ],
    localContext:
      "Ostrowskie firmy transportowe obsługują trasę S8 i przewozy międzynarodowe na wschód. Dokumenty przewozowe i rozliczenia kursów zajmują dużo czasu.",
    whyHere:
      "W Ostrowi Mazowieckiej automatyzacja skraca czas od zlecenia do faktury i przejmuje przygotowanie dokumentów.",
    industries: [
      ["Produkcja w strefie", "Zlecenia, materiały i wysyłki w jednym przepływie."],
      ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości."],
      ["Transport", "Zlecenia, dokumenty i rozliczenia kursów."],
      ["Handel", "Zamówienia i faktury spięte z magazynem."],
    ],
    processes: [
      ["Zlecenie transportowe", "Zlecenie z maila trafia do planu z terminem i kierowcą."],
      ["Dokumenty przewozowe", "Dokumenty tworzone z danych zlecenia."],
      ["Rozliczenie kursu", "Kurs zamknięty w systemie uruchamia fakturę."],
      ["Raport floty", "Kursy, koszty i przychody w jednym zestawieniu."],
    ],
    faq: [
      ["Czy pracujecie z przewoźnikami?", "Tak. Automatyzujemy zlecenia, dokumenty i rozliczenia kursów."],
      ["Czy pracujecie z zakładami ze strefy?", "Tak. Automatyzujemy zamówienia, raporty i dokumentację."],
      ["Czy wdrożenie odciągnie zespół z Ostrowi Mazowieckiej od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
      ["Czy małą firmę z Ostrowi Mazowieckiej stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność oceniamy razem."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "wyszkow",
    name: "Wyszków",
    nameGenitive: "Wyszkowa",
    nameLocative: "Wyszkowie",
    nearbyCitySlugs: ["warszawa", "wolomin", "ostroleka", "pultusk", "ostrow-mazowiecka"],
    metaDescription:
      "Automatyzacja procesów dla firm z Wyszkowa: produkcja, transport przy S8, handel i usługi nad Bugiem. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy wyszkowskim zakładom, przewoźnikom i firmom handlowym odejść od ręcznych zamówień i dokumentów.",
    intro: [
      "Wyszków leży nad Bugiem, przy drodze S8, około godziny od Warszawy. Działają tu zakłady produkcyjne, firmy transportowe, hurtownie i usługi dla mieszkańców powiatu.",
      "Firmy z Wyszkowa coraz częściej obsługują klientów z Warszawy. Muszą odpowiadać szybko i dostarczać dokumenty bez opóźnień, choć zespoły biurowe są małe.",
    ],
    localContext:
      "Wyszkowskie zakłady i przewoźnicy konkurują o pracowników z aglomeracją. Każda godzina oszczędzona w biurze pozwala obsłużyć więcej zleceń.",
    whyHere:
      "W Wyszkowie automatyzacja przejmuje zamówienia, dokumenty i statusy, żeby zespół mógł skupić się na realizacji.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i terminy widoczne dla biura."],
      ["Transport", "Zlecenia, statusy i dokumenty przewozowe."],
      ["Hurtownie", "Zamówienia, stany i faktury spięte ze sobą."],
      ["Usługi", "Zapisy, wyceny i płatności online."],
    ],
    processes: [
      ["Zamówienia", "Zamówienie z maila odczytane i przygotowane do sprawdzenia."],
      ["Status dla klienta", "Klient dostaje informację o statusie automatycznie."],
      ["Dokumenty", "Dokumenty wysyłkowe i faktury z danych zlecenia."],
      ["Raport miesięczny", "Sprzedaż, koszty i należności w jednym widoku."],
    ],
    faq: [
      ["Czy pracujecie z zakładami produkcyjnymi?", "Tak. Automatyzujemy zamówienia, raporty i dokumenty."],
      ["Czy lokalizacja w Wyszkowie wpływa na tempo projektu?", "Nie. Pracujemy zdalnie, więc zakres i terminy są takie same jak dla firm z dużych miast."],
      ["Czy musimy spotykać się osobiście, skoro jesteśmy w Wyszkowie?", "Nie. Większość projektów prowadzimy zdalnie. Warsztat na miejscu proponujemy tylko wtedy, gdy wyraźnie przyspiesza pracę."],
      ["Jaki jest pierwszy krok dla firmy z Wyszkowa?", "Krótka rozmowa online o tym, co zabiera zespołowi najwięcej czasu. Potem przegląd wybranego procesu i wycena."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-sprzedazy", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "sokolow-podlaski",
    name: "Sokołów Podlaski",
    nameGenitive: "Sokołowa Podlaskiego",
    nameLocative: "Sokołowie Podlaskim",
    nearbyCitySlugs: ["siedlce", "wegrow", "losice", "ostrow-mazowiecka", "bialystok"],
    metaDescription:
      "Automatyzacja procesów dla firm z Sokołowa Podlaskiego: przemysł mięsny, dostawcy i hodowcy, transport, handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy sokołowskim hodowcom, dostawcom i firmom obsługującym przemysł mięsny uporządkować dostawy, dokumenty i rozliczenia.",
    intro: [
      "Sokołów Podlaski jest znany w całej Polsce z przemysłu mięsnego. Wokół zakładów działają hodowcy, firmy transportowe, dostawcy pasz i opakowań oraz usługi dla rolnictwa.",
      "Branża mięsna wymaga precyzyjnej dokumentacji: dostawy zwierząt, dokumenty weterynaryjne, partie, identyfikowalność. W mniejszych firmach wiele z tego wciąż robi się ręcznie.",
    ],
    localContext:
      "Sokołowskie firmy transportowe i hodowlane pracują w ścisłym rytmie odbiorów. Informacja o terminie, wadze i dokumentach musi trafić do właściwych osób na czas.",
    whyHere:
      "W Sokołowie Podlaskim automatyzacja porządkuje terminy odbiorów, dokumenty i rozliczenia w jednym przepływie.",
    industries: [
      ["Hodowla", "Terminy odbiorów, dokumenty i rozliczenia z zakładem."],
      ["Transport zwierząt i żywności", "Zlecenia, dokumenty i statusy kursów."],
      ["Dostawcy dla przemysłu", "Zamówienia pasz, opakowań i materiałów."],
      ["Handel i usługi", "Zamówienia, faktury i należności."],
    ],
    processes: [
      ["Harmonogram odbiorów", "Terminy odbiorów z automatycznymi przypomnieniami dla hodowców i kierowców."],
      ["Dokumenty dostawy", "Dokumenty tworzone z danych zlecenia i dostawy."],
      ["Rozliczenia", "Zestawienia dostaw i płatności bez ręcznego liczenia."],
      ["Zamówienia materiałów", "Zamówienie od klienta trafia do planu dostaw."],
    ],
    faq: [
      ["Czy pracujecie z firmami z branży mięsnej?", "Tak, zwłaszcza z dostawcami, przewoźnikami i hodowcami. Automatyzujemy terminy, dokumenty i rozliczenia."],
      ["Czy pomagacie w identyfikowalności partii?", "Tak. Porządkujemy dane tak, żeby każda partia miała komplet informacji w jednym miejscu."],
      ["Czy firma z Sokołowa Podlaskiego może zacząć bez spotkania na żywo?", "Tak. Pierwsza rozmowa i cały przegląd procesu odbywają się online. Wystarczy komputer i kilka przykładowych dokumentów."],
      ["Czy firma z Sokołowa Podlaskiego musi wymieniać programy?", "Zwykle nie. Łączymy narzędzia, których już używacie, i dokładamy tylko to, czego brakuje."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "porzadkowanie-i-strukturyzowanie-danych", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "wegrow",
    name: "Węgrów",
    nameGenitive: "Węgrowa",
    nameLocative: "Węgrowie",
    nearbyCitySlugs: ["siedlce", "sokolow-podlaski", "minsk-mazowiecki", "ostrow-mazowiecka", "losice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Węgrowa: przetwórstwo, handel rolny, produkcja i usługi nad Liwcem. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy węgrowskim firmom uporządkować zamówienia, dostawy i faktury, żeby mały zespół nie tonął w papierach.",
    intro: [
      "Węgrów jest ośrodkiem rolniczego powiatu nad Liwcem. Lokalną gospodarkę tworzą przetwórstwo spożywcze, handel produktami rolnymi, produkcja i usługi.",
      "W niewielkich firmach zamówienia, dostawy i rozliczenia prowadzi się ręcznie. To działa, dopóki klientów jest niewielu. Gdy firma rośnie, zaczyna brakować czasu.",
    ],
    localContext:
      "Węgrowskie firmy obsługują gospodarstwa i odbiorców z kilku powiatów. Zamówienia przychodzą telefonicznie, a terminy płatności trzeba pilnować ręcznie.",
    whyHere:
      "W Węgrowie automatyzacja zbiera zamówienia w jednym miejscu i przypomina o należnościach za zespół.",
    industries: [
      ["Przetwórstwo", "Dostawy, partie i dokumenty jakości."],
      ["Handel rolny", "Zamówienia, dostawy i należności."],
      ["Produkcja", "Zlecenia i wysyłki ze statusem."],
      ["Usługi", "Zapisy i przypomnienia."],
    ],
    processes: [
      ["Zamówienia", "Zamówienia z telefonu i maila w jednej liście."],
      ["Dostawy", "Przyjęcie dostawy zapisane raz, widoczne w rozliczeniach."],
      ["Faktury", "Faktura tworzona automatycznie z danych zamówienia."],
      ["Należności", "Przypomnienia o płatnościach wysyłane automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z firmami z Węgrowa?", "Tak. Pracujemy zdalnie z firmami z całego Mazowsza."],
      ["Czy automatyzacja ma sens w małej firmie z Węgrowa?", "Tak. W małych zespołach każda zautomatyzowana czynność daje szybko odczuwalną ulgę."],
      ["Czy firma z Węgrowa musi wymieniać programy?", "Zwykle nie. Łączymy narzędzia, których już używacie, i dokładamy tylko to, czego brakuje."],
      ["Czy zostajecie z firmą z Węgrowa po wdrożeniu?", "Tak. Pilnujemy, żeby rozwiązanie działało, poprawiamy je i pomagamy dokładać kolejne procesy."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "automatyzacja-w-produkcji", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "losice",
    name: "Łosice",
    nameGenitive: "Łosic",
    nameLocative: "Łosicach",
    nearbyCitySlugs: ["siedlce", "sokolow-podlaski", "bialystok", "lublin", "wegrow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Łosic: rolnictwo, przetwórstwo, handel i usługi na wschodnim Mazowszu. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Łosic i okolic odzyskać czas tracony na ręczne zamówienia, rozliczenia i dokumenty.",
    intro: [
      "Łosice leżą na wschodnim krańcu Mazowsza, blisko Podlasia. Powiat ma rolniczy charakter, a lokalną gospodarkę tworzą gospodarstwa, przetwórstwo, handel i usługi.",
      "Małe firmy z regionu często działają rodzinnie. Jedna lub dwie osoby prowadzą sprzedaż, zamówienia i rozliczenia, więc każda zautomatyzowana czynność od razu odciąża.",
    ],
    localContext:
      "Łosickie firmy sprzedają coraz częściej poza region, także przez internet. Zamówienia z różnych kanałów trzeba zebrać, spakować i rozliczyć.",
    whyHere:
      "W Łosicach automatyzacja pozwala małej firmie sprzedawać szerzej bez zatrudniania dodatkowych osób.",
    industries: [
      ["Rolnictwo", "Rozliczenia, dokumenty i terminy bez zeszytów."],
      ["Przetwórstwo", "Partie, dostawy i sprzedaż w jednym widoku."],
      ["Handel", "Zamówienia z wielu kanałów i faktury."],
      ["Usługi", "Zapisy, terminy i przypomnienia."],
    ],
    processes: [
      ["Zamówienia", "Zamówienia z telefonu, maila i sklepu w jednej liście."],
      ["Wysyłki", "Opłacone zamówienie uruchamia etykietę i powiadomienie."],
      ["Faktury", "Faktura tworzona z danych zamówienia."],
      ["Raport", "Sprzedaż według klientów i produktów."],
    ],
    faq: [
      ["Czy automatyzacja ma sens w małej firmie z Łosic?", "Tak. W małych zespołach każda zautomatyzowana czynność daje szybko odczuwalną ulgę."],
      ["Czy pomagacie w sprzedaży internetowej?", "Tak. Łączymy sklep, kurierów i księgowość."],
      ["Czy wdrożenie odciągnie zespół z Łosic od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
      ["Jaki jest pierwszy krok dla firmy z Łosic?", "Krótka rozmowa online o tym, co zabiera zespołowi najwięcej czasu. Potem przegląd wybranego procesu i wycena."],
    ],
    services: ["automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "doradztwo-i-optymalizacja-procesow-biznesowych", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "gostynin",
    name: "Gostynin",
    nameGenitive: "Gostynina",
    nameLocative: "Gostyninie",
    nearbyCitySlugs: ["plock", "sochaczew", "sierpc", "warszawa", "konin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Gostynina: usługi dla przemysłu płockiego, przetwórstwo, turystyka i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy gostynińskim firmom usługowym, handlowym i turystycznym uporządkować zlecenia, rezerwacje i dokumenty.",
    intro: [
      "Gostynin leży niedaleko Płocka, w otoczeniu lasów i jezior Pojezierza Gostynińskiego. Lokalne firmy obsługują przemysł płocki, rolnictwo, turystykę i mieszkańców powiatu.",
      "Podwykonawcy pracujący dla zakładów w Płocku muszą dostarczać dokumenty i rozliczenia według procedur odbiorcy. Obiekty turystyczne mają z kolei sezonowe szczyty rezerwacji.",
    ],
    localContext:
      "Gostynińskie firmy łączą różne rynki: dużego odbiorcę przemysłowego, klientów lokalnych i turystów. Każdy z nich wymaga innej obsługi, a zespoły są małe.",
    whyHere:
      "W Gostyninie automatyzacja pozwala małej firmie obsłużyć wymagającego odbiorcę i sezonowych klientów bez nadgodzin.",
    industries: [
      ["Usługi dla przemysłu", "Karty pracy, protokoły i rozliczenia zleceń."],
      ["Turystyka i wypoczynek", "Rezerwacje, zapytania i płatności."],
      ["Przetwórstwo", "Dostawy, partie i dokumenty."],
      ["Handel", "Zamówienia, stany i faktury."],
    ],
    processes: [
      ["Karta pracy", "Dane z prac wpisywane w telefonie trafiają do rozliczeń."],
      ["Protokół i faktura", "Kompletny protokół uruchamia fakturę."],
      ["Rezerwacje", "Rezerwacja uruchamia potwierdzenie i link do płatności."],
      ["Przypomnienia", "Terminy, przeglądy i płatności pilnowane automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami zakładów w Płocku?", "Tak. Automatyzujemy karty pracy, protokoły i rozliczenia."],
      ["Czy automatyzujecie rezerwacje?", "Tak. Rezerwacje, potwierdzenia i płatności mogą działać bez udziału zespołu."],
      ["Jak wygląda współpraca na odległość z firmą z Gostynina?", "Procesy poznajemy na wideorozmowach i przykładach dokumentów, a wdrożenie testujemy razem z zespołem na prawdziwych danych."],
      ["Czy małą firmę z Gostynina stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność oceniamy razem."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-obsludze-klienta", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "sierpc",
    name: "Sierpc",
    nameGenitive: "Sierpca",
    nameLocative: "Sierpcu",
    nearbyCitySlugs: ["plock", "gostynin", "zuromin", "mlawa", "ciechanow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Sierpca: przetwórstwo spożywcze, handel rolny, produkcja i usługi. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy sierpeckim firmom przetwórczym i handlowym uporządkować dostawy, zamówienia i rozliczenia.",
    intro: [
      "Sierpc jest ośrodkiem rolniczego powiatu na północnym zachodzie Mazowsza, znanym z Muzeum Wsi Mazowieckiej. Lokalną gospodarkę tworzą przetwórstwo spożywcze, handel, produkcja i usługi.",
      "Zakłady przetwórcze i hurtownie pracują z wieloma dostawcami i odbiorcami. Ręczne zapisywanie dostaw i zamówień zajmuje czas i łatwo prowadzi do pomyłek.",
    ],
    localContext:
      "Sierpeckie firmy obsługują gospodarstwa z okolicy i odbiorców z Płocka i Warszawy. Dostawy surowca i sprzedaż trzeba rozliczać na bieżąco.",
    whyHere:
      "W Sierpcu automatyzacja łączy przyjęcie dostawy, sprzedaż i rozliczenia w jeden przepływ, żeby zespół widział aktualne dane.",
    industries: [
      ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości."],
      ["Handel rolny", "Zamówienia, dostawy i należności."],
      ["Produkcja", "Zlecenia i wysyłki."],
      ["Usługi", "Zapisy, terminy i przypomnienia."],
    ],
    processes: [
      ["Przyjęcie dostawy", "Dostawa zapisana raz trafia do magazynu i rozliczeń."],
      ["Rozliczenia z dostawcami", "Zestawienia i płatności tworzone automatycznie."],
      ["Zamówienia", "Zamówienia z różnych kanałów w jednej liście."],
      ["Faktury", "Faktura tworzona z danych zamówienia."],
    ],
    faq: [
      ["Czy pracujecie z zakładami przetwórczymi?", "Tak. Automatyzujemy przyjęcie surowca, rozliczenia i dokumenty jakości."],
      ["Czy mała firma z Sierpca może zacząć od jednego procesu?", "Tak, tak zaczynamy zawsze. Jeden proces, jasny koszt, a kolejne dopiero wtedy, gdy pierwszy działa."],
      ["Czy lokalizacja w Sierpcu wpływa na tempo projektu?", "Nie. Pracujemy zdalnie, więc zakres i terminy są takie same jak dla firm z dużych miast."],
      ["Co z naszym programem księgowym i magazynowym w Sierpcu?", "Zostaje. Automatyzacja przekazuje do niego dane, zamiast go zastępować. Jeśli program nie pozwala na wymianę danych, szukamy obejścia."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "cyfryzacja-danych-i-dokumentow"],
  }),

  town({
    ...base,
    slug: "kozienice",
    name: "Kozienice",
    nameGenitive: "Kozienic",
    nameLocative: "Kozienicach",
    nearbyCitySlugs: ["radom", "garwolin", "bialobrzegi", "zwolen", "warszawa"],
    metaDescription:
      "Automatyzacja procesów dla firm z Kozienic: usługi dla energetyki, produkcja, przetwórstwo drewna, handel i turystyka. Konsultacja 30 min.",
    heroLead:
      "Pomagamy kozienickim podwykonawcom, zakładom i firmom usługowym uporządkować zlecenia, protokoły i rozliczenia.",
    intro: [
      "Kozienice to miasto jednej z największych elektrowni w Polsce, położone na skraju Puszczy Kozienickiej. Wokół elektrowni działają firmy remontowe, serwisowe, transportowe i budowlane, a w regionie także przetwórstwo drewna i turystyka.",
      "Podwykonawcy dużego zakładu energetycznego pracują według ścisłych procedur. Zlecenia, protokoły, uprawnienia pracowników i rozliczenia wymagają dużo dokumentów.",
    ],
    localContext:
      "Kozienickie firmy usługowe działają w rytmie postojów remontowych, kiedy liczba zleceń gwałtownie rośnie. Wtedy biuro najbardziej odczuwa ręczne rozliczenia.",
    whyHere:
      "W Kozienicach automatyzacja skraca rozliczenie prac i pilnuje uprawnień pracowników, żeby firma mogła od razu brać kolejne zlecenia.",
    industries: [
      ["Usługi dla energetyki", "Zlecenia, karty pracy i protokoły rozliczane bez przepisywania."],
      ["Produkcja i przetwórstwo drewna", "Zamówienia, materiały i wysyłki."],
      ["Budownictwo", "Wyceny, harmonogramy i rozliczenia."],
      ["Turystyka", "Rezerwacje i zapytania obsługiwane automatycznie."],
    ],
    processes: [
      ["Karta pracy", "Dane z prac wpisywane w telefonie trafiają od razu do biura."],
      ["Protokół odbioru", "Dokument generowany z danych zlecenia."],
      ["Uprawnienia pracowników", "Przypomnienia o ważności szkoleń i badań."],
      ["Rozliczenie postoju", "Godziny i koszty z wielu zleceń w jednym zestawieniu."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami elektrowni?", "Tak. Automatyzujemy karty pracy, protokoły, rozliczenia i pilnowanie uprawnień."],
      ["Czy pilnujecie terminów badań i szkoleń?", "Tak. System przypomina o kończących się uprawnieniach z wyprzedzeniem."],
      ["Czy wdrożenie odciągnie zespół z Kozienic od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
      ["Jaki jest pierwszy krok dla firmy z Kozienic?", "Krótka rozmowa online o tym, co zabiera zespołowi najwięcej czasu. Potem przegląd wybranego procesu i wycena."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-hr", "cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "bialobrzegi",
    name: "Białobrzegi",
    nameGenitive: "Białobrzegów",
    nameLocative: "Białobrzegach",
    nearbyCitySlugs: ["radom", "grojec", "kozienice", "przysucha", "warszawa"],
    metaDescription:
      "Automatyzacja procesów dla firm z Białobrzegów: sadownictwo, logistyka przy S7, handel i usługi. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Białobrzegów uporządkować skup, dostawy, zamówienia i rozliczenia, bez ręcznego przepisywania.",
    intro: [
      "Białobrzegi leżą nad Pilicą, przy drodze S7 między Warszawą a Radomiem. Powiat jest częścią zagłębia sadowniczego, a lokalną gospodarkę tworzą gospodarstwa, handel owocami, transport i usługi przy trasie.",
      "Firmy handlujące owocami i obsługujące transport pracują w sezonowym rytmie. W szczycie dostaw i zamówień ręczne zapisy nie nadążają.",
    ],
    localContext:
      "Białobrzeskie firmy skupują i sprzedają owoce, obsługują przewozy i ruch na S7. Rozliczenia z dostawcami i dokumenty wysyłkowe są codziennością.",
    whyHere:
      "W Białobrzegach automatyzacja porządkuje dostawy, rozliczenia i dokumenty, żeby sezon nie oznaczał chaosu.",
    industries: [
      ["Sadownictwo i skup", "Dostawy, ważenie i rozliczenia z producentami."],
      ["Transport", "Zlecenia, statusy i dokumenty przewozowe."],
      ["Handel", "Zamówienia, stany i faktury."],
      ["Usługi przy trasie", "Rezerwacje, zamówienia i płatności."],
    ],
    processes: [
      ["Przyjęcie dostawy", "Dane z wagi zapisane raz trafiają do rozliczeń."],
      ["Rozliczenia z dostawcami", "Zestawienia dostaw i płatności tworzone automatycznie."],
      ["Zamówienia odbiorców", "Zamówienia z maila i telefonu w jednej liście."],
      ["Dokumenty wysyłkowe", "Dokumenty i faktury tworzone z danych zamówienia."],
    ],
    faq: [
      ["Czy pracujecie ze skupami owoców?", "Tak. Automatyzujemy przyjęcie dostaw, rozliczenia i dokumenty sprzedaży."],
      ["Czy musimy spotykać się osobiście, skoro jesteśmy w Białobrzegach?", "Nie. Większość projektów prowadzimy zdalnie. Warsztat na miejscu proponujemy tylko wtedy, gdy wyraźnie przyspiesza pracę."],
      ["Czy musimy spotykać się osobiście, skoro jesteśmy w Białobrzegach?", "Nie. Większość projektów prowadzimy zdalnie. Warsztat na miejscu proponujemy tylko wtedy, gdy wyraźnie przyspiesza pracę."],
      ["Kiedy firma z Białobrzegów zobaczy pierwszy efekt?", "Zwykle po kilku tygodniach, gdy pierwszy proces zaczyna działać na waszych danych."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-dla-logistyki", "automatyzacja-sprzedazy", "porzadkowanie-i-strukturyzowanie-danych"],
  }),

  town({
    ...base,
    slug: "lipsko",
    name: "Lipsko",
    nameGenitive: "Lipska",
    nameLocative: "Lipsku",
    nearbyCitySlugs: ["radom", "zwolen", "szydlowiec", "kozienice", "przysucha"],
    metaDescription:
      "Automatyzacja procesów dla firm z Lipska: rolnictwo, sadownictwo, handel i usługi na południu Mazowsza. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Lipska uporządkować zamówienia, dostawy i faktury, żeby mały zespół miał więcej czasu dla klientów.",
    intro: [
      "Lipsko leży na południowo-wschodnim krańcu Mazowsza, blisko Wisły. Powiat ma rolniczy charakter, z sadownictwem i uprawami, a lokalną gospodarkę uzupełniają handel i usługi.",
      "W małych firmach z regionu jedna osoba często zajmuje się sprzedażą, zamówieniami i rozliczeniami. Automatyzacja przejmuje część tej pracy.",
    ],
    localContext:
      "Lipskie firmy sprzedają produkty rolne odbiorcom z Radomia, Lublina i Warszawy. Zamówienia i dokumenty przychodzą w różnych formach i trzeba je scalać ręcznie.",
    whyHere:
      "W Lipsku automatyzacja zbiera zamówienia w jednym miejscu i przygotowuje dokumenty, żeby nic nie umykało.",
    industries: [
      ["Sadownictwo i uprawy", "Dostawy, sprzedaż i rozliczenia bez zeszytów."],
      ["Handel", "Zamówienia, stany i faktury."],
      ["Usługi", "Zapisy, terminy i przypomnienia."],
      ["Transport", "Zlecenia i dokumenty przewozowe."],
    ],
    processes: [
      ["Zamówienia", "Zamówienia z telefonu i maila w jednej liście."],
      ["Faktury", "Faktura tworzona z danych zamówienia."],
      ["Należności", "Przypomnienia o płatnościach wysyłane automatycznie."],
      ["Raport sprzedaży", "Sprzedaż według odbiorców i produktów."],
    ],
    faq: [
      ["Czy pracujecie z firmami z małych miast?", "Tak. Pracujemy zdalnie z firmami z całego Mazowsza."],
      ["Czy automatyzacja ma sens w małej firmie z Lipska?", "Tak. W małych zespołach każda zautomatyzowana czynność daje szybko odczuwalną ulgę."],
      ["Czy firma z Lipska może zacząć bez spotkania na żywo?", "Tak. Pierwsza rozmowa i cały przegląd procesu odbywają się online. Wystarczy komputer i kilka przykładowych dokumentów."],
      ["Jaki jest pierwszy krok dla firmy z Lipska?", "Krótka rozmowa online o tym, co zabiera zespołowi najwięcej czasu. Potem przegląd wybranego procesu i wycena."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "doradztwo-i-optymalizacja-procesow-biznesowych", "cyfryzacja-danych-i-dokumentow"],
  }),

  town({
    ...base,
    slug: "zwolen",
    name: "Zwoleń",
    nameGenitive: "Zwolenia",
    nameLocative: "Zwoleniu",
    nearbyCitySlugs: ["radom", "kozienice", "lipsko", "szydlowiec", "przysucha"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Zwolenia: uprawy owoców i warzyw, przetwórstwo, handel i usługi pod Radomiem. Konsultacja 30 min.",
    heroLead:
      "Pomagamy zwoleńskim producentom, skupom i firmom handlowym uporządkować dostawy, zamówienia i rozliczenia.",
    intro: [
      "Zwoleń leży na wschód od Radomia, w regionie upraw owoców miękkich i warzyw. Lokalną gospodarkę tworzą gospodarstwa, skupy, przetwórnie, handel i usługi.",
      "Sezonowe skupy i przetwórnie przyjmują w krótkim czasie dużo dostaw od wielu producentów. Ręczne zapisy i rozliczenia są wtedy źródłem pomyłek i sporów.",
    ],
    localContext:
      "Zwoleńskie firmy rozliczają się z wieloma drobnymi dostawcami, często co tydzień. Każde rozliczenie wymaga zebrania danych z kwitów i wag.",
    whyHere:
      "W Zwoleniu automatyzacja zapisuje dostawy raz i tworzy rozliczenia dla dostawców bez ręcznego liczenia.",
    industries: [
      ["Skupy owoców i warzyw", "Dostawy, ważenie i rozliczenia z producentami."],
      ["Przetwórstwo", "Surowiec, partie i wysyłki."],
      ["Handel", "Zamówienia od odbiorców i faktury."],
      ["Usługi", "Zapisy i przypomnienia."],
    ],
    processes: [
      ["Przyjęcie dostawy", "Dane z wagi zapisane raz, widoczne w rozliczeniach."],
      ["Rozliczenie tygodniowe", "Zestawienie dla każdego dostawcy tworzone automatycznie."],
      ["Zamówienia odbiorców", "Zamówienia w jednej liście ze statusem."],
      ["Faktury", "Faktura tworzona z danych sprzedaży."],
    ],
    faq: [
      ["Czy automatyzujecie rozliczenia skupu?", "Tak. Dostawy zapisane raz zamieniają się w zestawienia i płatności dla dostawców."],
      ["Czy to zadziała w sezonie przy dużym ruchu?", "Tak. Właśnie w sezonie automatyzacja daje największą ulgę. Najlepiej wdrożyć ją przed zbiorami."],
      ["Czy lokalizacja w Zwoleniu wpływa na tempo projektu?", "Nie. Pracujemy zdalnie, więc zakres i terminy są takie same jak dla firm z dużych miast."],
      ["Od czego zależy cena wdrożenia w Zwoleniu?", "Od liczby kroków w procesie, systemów do połączenia i ilości danych. Każdy etap wyceniamy osobno, przed startem."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "porzadkowanie-i-strukturyzowanie-danych"],
  }),

  town({
    ...base,
    slug: "szydlowiec",
    name: "Szydłowiec",
    nameGenitive: "Szydłowca",
    nameLocative: "Szydłowcu",
    nearbyCitySlugs: ["radom", "przysucha", "lipsko", "zwolen", "kielce"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Szydłowca: wydobycie i obróbka piaskowca, produkcja, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy szydłowieckim zakładom kamieniarskim, produkcyjnym i handlowym uporządkować zamówienia, wyceny i dokumenty.",
    intro: [
      "Szydłowiec słynie z piaskowca, który wydobywa się i obrabia tu od stuleci. Obok zakładów kamieniarskich działają firmy produkcyjne, handlowe i usługowe z południowego Mazowsza.",
      "Kamieniarstwo to zamówienia na wymiar: wyceny, rysunki, terminy produkcji i transport. Prowadzone ręcznie, zajmują dużo czasu i łatwo o pomyłki.",
    ],
    localContext:
      "Szydłowieckie zakłady sprzedają wyroby z kamienia w całej Polsce, do firm budowlanych, pracowni i klientów indywidualnych. Każde zamówienie jest trochę inne.",
    whyHere:
      "W Szydłowcu automatyzacja przyspiesza wyceny i porządkuje zamówienia na wymiar, żeby nic nie ginęło między biurem a halą.",
    industries: [
      ["Kamieniarstwo", "Wyceny, zamówienia na wymiar i terminy produkcji."],
      ["Produkcja", "Zlecenia, materiały i wysyłki."],
      ["Handel", "Zamówienia, stany i faktury."],
      ["Usługi", "Zapisy, terminy i rozliczenia."],
    ],
    processes: [
      ["Wycena na wymiar", "Wycena liczona z formularza według cennika i wymiarów."],
      ["Zlecenie na halę", "Zaakceptowana wycena zamienia się w zlecenie z terminem."],
      ["Status dla klienta", "Klient dostaje informację o postępie i terminie dostawy."],
      ["Faktura", "Wydane zamówienie uruchamia fakturę."],
    ],
    faq: [
      ["Czy automatyzujecie wyceny na wymiar?", "Tak. Kalkulator oparty na waszym cenniku przygotowuje wycenę do sprawdzenia."],
      ["Czy pracujecie z zakładami kamieniarskimi?", "Tak. Porządkujemy zamówienia, terminy produkcji i komunikację z klientem."],
      ["Czy wdrożenie odciągnie nasz zespół w Szydłowcu od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
      ["Czy firma ze Szydłowca musi wymieniać programy?", "Zwykle nie. Łączymy narzędzia, których już używacie, i dokładamy tylko to, czego brakuje."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-w-obsludze-klienta", "wdrozenia-airtable"],
  }),

  town({
    ...base,
    slug: "przysucha",
    name: "Przysucha",
    nameGenitive: "Przysuchy",
    nameLocative: "Przysusze",
    nearbyCitySlugs: ["radom", "bialobrzegi", "szydlowiec", "kozienice", "grojec"],
    metaDescription:
      "Automatyzacja procesów dla firm z Przysuchy: rolnictwo, przetwórstwo, produkcja, handel i usługi. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Przysuchy i okolic zamienić ręczne zamówienia, faktury i rozliczenia w proste przepływy.",
    intro: [
      "Przysucha leży na południowo-zachodnim Mazowszu, między Radomiem a Opocznem. Powiat ma rolniczy charakter, a lokalną gospodarkę tworzą przetwórstwo, produkcja, handel i usługi.",
      "W małych firmach zespół jest niewielki, a obowiązków dużo. Każda godzina odzyskana z przepisywania danych to więcej czasu dla klientów.",
    ],
    localContext:
      "Firmy z powiatu przysuskiego obsługują klientów z Radomia i okolicznych gmin. Zamówienia przychodzą różnymi kanałami, a dokumenty przygotowuje się ręcznie.",
    whyHere:
      "W Przysusze automatyzacja zbiera zamówienia i zgłoszenia w jednym miejscu i pilnuje terminów za zespół.",
    industries: [
      ["Rolnictwo i przetwórstwo", "Dostawy, partie i rozliczenia."],
      ["Produkcja", "Zlecenia, materiały i wysyłki."],
      ["Handel", "Zamówienia, stany i faktury."],
      ["Usługi", "Zapisy i przypomnienia."],
    ],
    processes: [
      ["Zamówienia", "Zamówienia z telefonu i maila w jednej liście."],
      ["Faktury", "Faktura tworzona z danych zamówienia."],
      ["Należności", "Przypomnienia o płatnościach wysyłane automatycznie."],
      ["Raport miesięczny", "Sprzedaż i koszty w jednym zestawieniu."],
    ],
    faq: [
      ["Czy pracujecie z firmami z Przysuchy?", "Tak. Pracujemy zdalnie z firmami z całego Mazowsza."],
      ["Czy mała firma z Przysuchy może zacząć od jednego procesu?", "Tak, tak zaczynamy zawsze. Jeden proces, jasny koszt, a kolejne dopiero wtedy, gdy pierwszy działa."],
      ["Czy obsługa będzie trudna dla zespołu z Przysuchy?", "Nie powinna. Projektujemy rozwiązania tak, żeby korzystało się z nich w narzędziach, które zespół już zna."],
      ["Czy zostajecie z firmą z Przysuchy po wdrożeniu?", "Tak. Pilnujemy, żeby rozwiązanie działało, poprawiamy je i pomagamy dokładać kolejne procesy."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "automatyzacja-w-produkcji", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),
];
