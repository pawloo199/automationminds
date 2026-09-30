import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "zachodniopomorskie", regionCluster: "zachodniopomorskie" } as const;

export const zachodniopomorskieRegion = region({
  slug: "zachodniopomorskie",
  intro: [
    "Pomorze Zachodnie to region portów, przemysłu i turystyki. Zespół portów Szczecin-Świnoujście obsługuje ładunki masowe, kontenery i promy do Skandynawii, a w Świnoujściu działa terminal LNG. Szczecin jest największym miastem regionu i ośrodkiem usług, logistyki i handlu.",
    "Bliskość Niemiec, a zwłaszcza Berlina, sprawia, że wiele firm z regionu pracuje dla klientów zza zachodniej granicy. Przemysł chemiczny w Policach, opony w Stargardzie, płyty drewnopochodne w Szczecinku i park przemysłowy w Goleniowie to ważni pracodawcy.",
    "Wybrzeże od Świnoujścia po Kołobrzeg i Darłowo to jeden z najpopularniejszych regionów turystycznych w Polsce. Hotele, sanatoria, pensjonaty i apartamenty obsługują gości z Polski i Niemiec przez cały rok.",
    "Z firmami z Pomorza Zachodniego pracujemy zdalnie. Nasza siedziba jest we Wrocławiu, a na miejsce przyjeżdżamy, gdy warsztat z zespołem przyspiesza projekt.",
  ],
  industries: [
    ["Porty i logistyka", "Zlecenia, dokumenty przewozowe i celne, statusy ładunków w Szczecinie, Świnoujściu i Policach."],
    ["Handel z Niemcami", "Oferty, faktury w euro i korespondencja po niemiecku bez podwójnej pracy."],
    ["Turystyka i uzdrowiska", "Rezerwacje, pytania gości w kilku językach, zaliczki i płatności na wybrzeżu."],
    ["Przemysł", "Zlecenia, dokumentacja jakości i raporty w zakładach chemicznych, drzewnych i motoryzacyjnych."],
    ["Rolnictwo i przetwórstwo", "Dostawy, partie i rozliczenia z gospodarstwami w południowej części regionu."],
  ],
  faq: [
    ["Czy macie biuro w Szczecinie?", "Nie. Nasza siedziba jest we Wrocławiu, a z firmami z Pomorza Zachodniego pracujemy zdalnie. Gdy warsztat na miejscu przyspiesza projekt, przyjeżdżamy."],
    ["Czy automatyzujecie obsługę klientów z Niemiec?", "Tak. Oferty, faktury, dokumenty i odpowiedzi mogą powstawać po niemiecku, z tych samych danych co dokumenty polskie."],
    ["Czy pracujecie z hotelami i sanatoriami nad morzem?", "Tak. Rezerwacje z wielu portali, pytania gości, zaliczki i przypomnienia to częste wdrożenia przed sezonem."],
    ["Od czego zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces z najszybszym zwrotem."],
  ],
});

export const zachodniopomorskieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "szczecin",
    name: "Szczecin",
    nameGenitive: "Szczecina",
    nameLocative: "Szczecinie",
    nearbyCitySlugs: ["police", "goleniow", "gryfino", "stargard", "swinoujscie", "pyrzyce"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm ze Szczecina: logistyka portowa, handel z Niemcami, usługi biznesowe, produkcja. Konsultacja 30 min.",
    heroLead:
      "Pomagamy szczecińskim firmom logistycznym, handlowym i usługowym obsługiwać klientów z Polski i Niemiec bez podwójnej pracy. Dokumenty, faktury i statusy powstają same.",
    intro: [
      "Szczecin jest największym miastem Pomorza Zachodniego i jednym z najbliżej położonych Berlina dużych miast w Polsce. Port, stocznie, firmy logistyczne, centra usług biznesowych i handel transgraniczny tworzą gospodarkę, w której wiele firm na co dzień pracuje w dwóch językach.",
      "Obsługa klientów z Niemiec oznacza oferty, faktury i korespondencję po niemiecku, często w euro. Gdy wszystko robi się ręcznie, te same dane wpisuje się kilka razy. Automatyzacja łączy to w jeden przepływ.",
    ],
    localContext:
      "Szczecińskie firmy konkurują o pracowników z rynkiem niemieckim, gdzie wynagrodzenia są wyższe. Zatrzymanie i pozyskanie osób do pracy biurowej jest trudne.",
    whyHere:
      "W Szczecinie automatyzacja pozwala obsłużyć klientów z dwóch rynków mniejszym zespołem i zmniejsza zależność od trudnej rekrutacji.",
    economy: {
      title: "Czym żyje szczeciński biznes",
      paragraphs: [
        "Port Szczecin razem ze Świnoujściem tworzy jeden z największych zespołów portowych na Bałtyku. Wokół niego działają spedytorzy, agencje celne, magazyny i firmy obsługujące statki.",
        "Bliskość Berlina sprawia, że Szczecin jest naturalnym zapleczem dla firm z Niemiec: działają tu centra usług, firmy IT, biura rachunkowe obsługujące klientów niemieckich i producenci sprzedający za Odrę.",
        "Przemysł stoczniowy i chemiczny, produkcja w strefach ekonomicznych oraz handel hurtowy uzupełniają gospodarkę miasta.",
      ],
    },
    industries: [
      ["Spedycja i logistyka portowa", "Zlecenia, dokumenty przewozowe i celne, statusy ładunków i rozliczenia."],
      ["Handel z Niemcami", "Oferty, faktury w euro i korespondencja po niemiecku z jednego źródła danych."],
      ["Centra usług i IT", "Obieg zgłoszeń, onboarding i raporty dla klientów z Polski i Niemiec."],
      ["Produkcja i przemysł", "Zlecenia, materiały i dokumentacja jakości dla odbiorców z kraju i zagranicy."],
    ],
    processes: [
      ["Oferta i faktura po niemiecku", "Dokumenty w języku i walucie klienta tworzone z tych samych danych."],
      ["Dokumenty przewozowe", "AI odczytuje dokumenty ładunku i przenosi dane do systemu spedycyjnego."],
      ["Pytania klientów", "Asystent AI odpowiada po polsku i niemiecku, trudne sprawy przekazuje zespołowi."],
      ["Raport dla zarządu", "Sprzedaż według rynków, marża i należności w jednym widoku."],
    ],
    example: {
      title: "Zamówienie od niemieckiego klienta w szczecińskiej firmie przed i po automatyzacji",
      lead: "Przykład hurtowni ze Szczecina sprzedającej do sklepów w Niemczech. Tak zmienia się obsługa jednego zamówienia.",
      rows: [
        ["Zamówienie od klienta", "Mail po niemiecku, handlowiec tłumaczy i przepisuje pozycje.", "AI odczytuje zamówienie w języku niemieckim i przygotowuje je w systemie."],
        ["Potwierdzenie", "Pisane ręcznie po niemiecku, wysyłane następnego dnia.", "Potwierdzenie po niemiecku z terminem dostawy wysyłane automatycznie."],
        ["Faktura", "Wystawiana ręcznie w euro, dane przepisywane z zamówienia.", "Faktura w euro tworzona z danych zamówienia."],
        ["Dokumenty dostawy", "Kompletowane ręcznie dla przewoźnika.", "Dokumenty przewozowe generowane przy wydaniu."],
        ["Pytania o dostawę", "Klient dzwoni, handlowiec sprawdza status u przewoźnika.", "Klient dostaje status przesyłki automatycznie."],
      ],
    },
    faq: [
      ["Czy macie biuro w Szczecinie?", "Nie. Nasza siedziba jest we Wrocławiu. Z firmami ze Szczecina pracujemy zdalnie, a gdy warsztat na miejscu przyspiesza projekt, przyjeżdżamy."],
      ["Czy automatyzujecie obsługę klientów z Niemiec w szczecińskich firmach?", "Tak. Zamówienia, potwierdzenia, faktury w euro i odpowiedzi po niemiecku mogą powstawać automatycznie."],
      ["Czy pracujecie ze spedytorami z portu w Szczecinie?", "Tak. Odczyt dokumentów przez AI, statusy dla klientów i rozliczenia z przewoźnikami."],
      ["Czy obsługujecie biura rachunkowe z klientami z Niemiec?", "Tak. Zbieranie dokumentów, odczyt faktur w kilku językach i przypomnienia o terminach."],
      ["Czy AI odczyta dokumenty po niemiecku?", "Tak. AI odczytuje faktury, zamówienia i dokumenty w języku niemieckim i angielskim."],
      ["Ile kosztuje automatyzacja w firmie ze Szczecina?", "Zależy od procesu i liczby systemów do połączenia. Wycenę pierwszego etapu dostajecie po bezpłatnej konsultacji, zanim zaczniemy pracę."],
    ],
    services: ["ai-w-obsludze-dokumentow", "automatyzacja-dla-logistyki", "automatyzacja-w-obsludze-klienta", "integracje-systemow", "automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "koszalin",
    name: "Koszalin",
    nameGenitive: "Koszalina",
    nameLocative: "Koszalinie",
    nearbyCitySlugs: ["bialogard", "kolobrzeg", "slawno", "szczecinek", "swidwin", "stargard"],
    metaDescription:
      "Automatyzacja procesów dla firm z Koszalina: produkcja, przetwórstwo spożywcze, handel, usługi i turystyka nad morzem. Konsultacja 30 min.",
    heroLead:
      "Pomagamy koszalińskim zakładom, firmom handlowym i usługowym uporządkować zamówienia, dokumenty i raporty.",
    intro: [
      "Koszalin jest największym miastem środkowego Pomorza i zapleczem dla nadmorskich kurortów, takich jak Mielno i Kołobrzeg. Działają tu zakłady produkcyjne i przetwórcze, podstrefa strefy ekonomicznej, handel i usługi.",
      "Koszalińskie firmy obsługują klientów z regionu, z całej Polski i ze Skandynawii. Zamówienia, dokumenty eksportowe i faktury zajmują biurom dużo czasu.",
    ],
    localContext:
      "Koszalin jest oddalony od dużych metropolii, więc lokalne firmy mają mniejszy dostęp do specjalistów i usług IT. Szukają rozwiązań, które działają bez własnego działu IT.",
    whyHere:
      "W Koszalinie automatyzacja pozwala obsłużyć więcej zamówień i klientów tym samym zespołem.",
    economy: {
      title: "Czym żyje koszaliński biznes",
      paragraphs: [
        "Przetwórstwo spożywcze, produkcja drzewna i metalowa oraz handel hurtowy tworzą przemysłowe zaplecze miasta. Część firm eksportuje do Skandynawii i Niemiec.",
        "Bliskość wybrzeża sprawia, że wiele koszalińskich firm obsługuje turystykę: dostawcy dla hoteli, transport, usługi i gastronomia.",
      ],
    },
    industries: [
      ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości dla sieci i eksportu."],
      ["Produkcja drzewna i metalowa", "Zlecenia, materiały i wysyłki dla odbiorców z kraju i Skandynawii."],
      ["Handel hurtowy", "Zamówienia od sklepów i hoteli z wybrzeża, stany i faktury."],
      ["Usługi dla turystyki", "Obsługa dostaw, zamówień i rozliczeń z obiektami nad morzem."],
    ],
    processes: [
      ["Zamówienia od hoteli", "Zamówienia z wybrzeża zbierane w jednej liście z planem dostaw."],
      ["Dokumenty eksportowe", "Faktury i dokumenty w walucie i języku klienta."],
      ["Stany magazynowe", "Powiadomienie o brakach przed szczytem sezonu."],
      ["Raport sprzedaży", "Sprzedaż według klientów i sezonu w jednym widoku."],
    ],
    faq: [
      ["Czy pracujecie z hurtowniami z Koszalina obsługującymi hotele nad morzem?", "Tak. Zamówienia, plan dostaw, stany i faktury w jednym przepływie, także w szczycie sezonu."],
      ["Czy automatyzujecie eksport koszalińskich firm do Skandynawii?", "Tak. Faktury w walucie klienta, dokumenty wysyłkowe i korespondencja po angielsku."],
      ["Czy koszalińska firma potrzebuje własnego działu IT?", "Nie. Konfigurację i opiekę bierzemy na siebie, a zespół dostaje prostą instrukcję."],
      ["Ile kosztuje wdrożenie w Koszalinie?", "Wycenę pierwszego etapu przygotowujemy po bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "stargard",
    name: "Stargard",
    nameGenitive: "Stargardu",
    nameLocative: "Stargardzie",
    nearbyCitySlugs: ["szczecin", "goleniow", "pyrzyce", "choszczno", "gryfino", "police"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Stargardu: produkcja w strefie ekonomicznej, dostawcy przemysłu, logistyka i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy stargardzkim dostawcom, zakładom i firmom logistycznym uporządkować zamówienia, raporty i dokumentację.",
    intro: [
      "Stargard leży kilkadziesiąt kilometrów od Szczecina, przy drodze S10. W podstrefie strefy ekonomicznej działają duzi producenci, w tym fabryka opon, a wokół nich dostawcy, firmy logistyczne i usługowe.",
      "Dostawcy dużych zakładów pracują według harmonogramów i wymagań jakościowych odbiorcy. Raporty, dokumenty i terminy muszą się zgadzać.",
    ],
    localContext:
      "Stargardzkie firmy konkurują o pracowników z dużymi zakładami i Szczecinem. Zespoły biurowe są małe, a wymagania odbiorców rosną.",
    whyHere:
      "W Stargardzie automatyzacja pozwala dostawcom spełnić wymagania dużych odbiorców bez ręcznego przygotowania raportów i dokumentów.",
    economy: {
      title: "Czym żyje stargardzki biznes",
      paragraphs: [
        "Strefa ekonomiczna przyciągnęła do Stargardu producentów opon, komponentów, mebli i opakowań. To oni tworzą trzon lokalnego przemysłu.",
        "Miasto jest też zapleczem handlowym i usługowym dla południowo-wschodniej części województwa.",
      ],
    },
    industries: [
      ["Dostawcy przemysłu", "Harmonogramy, raporty jakości i dokumentacja dostaw dla zakładów ze strefy."],
      ["Produkcja", "Zlecenia, materiały i wysyłki dla odbiorców z Polski i Niemiec."],
      ["Logistyka przy S10", "Awizacje, dokumenty przewozowe i statusy dostaw."],
      ["Handel i usługi", "Zamówienia, zapisy klientów i faktury dla mieszkańców powiatu."],
    ],
    processes: [
      ["Harmonogram od odbiorcy", "Zmiany w planie dostaw trafiają do produkcji bez przepisywania."],
      ["Raport jakości", "Wyniki kontroli składane w raport dla odbiorcy automatycznie."],
      ["Awizacja", "Termin dostawy potwierdzany automatycznie z klientem i przewoźnikiem."],
      ["Faktura po dostawie", "Potwierdzona dostawa uruchamia fakturę."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami zakładów ze strefy w Stargardzie?", "Tak. Harmonogramy, raporty jakości i dokumentacja dostaw to typowy zakres."],
      ["Czy łączycie się z portalami dużych odbiorców?", "Tak, jeśli pozwalają na wymianę danych. Gdy nie, automatyzujemy przynajmniej przygotowanie danych."],
      ["Czy stargardzka firma musi wymieniać system ERP?", "Nie. Budujemy połączenia wokół tego, co już działa."],
      ["Jak wygląda pierwszy krok dla firmy ze Stargardu?", "Bezpłatna rozmowa online, na której wybieramy jeden proces i szacujemy koszt."],
    ],
    services: ["automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-raportow", "automatyzacja-dla-logistyki"],
  }),

  town({
    ...base,
    slug: "swinoujscie",
    name: "Świnoujście",
    nameGenitive: "Świnoujścia",
    nameLocative: "Świnoujściu",
    nearbyCitySlugs: ["police", "kamien-pomorski", "szczecin", "goleniow", "gryfice"],
    metaDescription:
      "Automatyzacja dla firm ze Świnoujścia: hotele i sanatoria, apartamenty, port promowy, logistyka i handel z Niemcami. Konsultacja 30 min.",
    heroLead:
      "Pomagamy świnoujskim hotelom, apartamentom i firmom portowym obsługiwać gości i klientów z Polski i Niemiec bez nadgodzin.",
    intro: [
      "Świnoujście łączy uzdrowisko i kurort nadmorski z portem promowym do Skandynawii i terminalem LNG. Miasto graniczy z niemieckimi kurortami na Uznamie, więc wielu gości i klientów przyjeżdża z Niemiec.",
      "Hotele, sanatoria i apartamenty obsługują gości przez cały rok, a w sezonie letnim ruch rośnie kilkukrotnie. Firmy portowe i logistyczne pracują w rytmie promów i statków.",
    ],
    localContext:
      "Świnoujskie obiekty odpowiadają na zapytania po polsku i niemiecku, przyjmują rezerwacje z kilku portali i rozliczają pobyty uzdrowiskowe. To dużo pracy dla recepcji.",
    whyHere:
      "W Świnoujściu automatyzacja odpowiada gościom w ich języku, przyjmuje rezerwacje i płatności, a zespół zajmuje się obsługą na miejscu.",
    industries: [
      ["Hotele i sanatoria", "Rezerwacje pobytów, zabiegi, pytania gości po polsku i niemiecku."],
      ["Apartamenty na wynajem", "Rezerwacje z wielu portali, zameldowania bez recepcji i sprzątanie."],
      ["Port i logistyka", "Zlecenia, dokumenty przewozowe i statusy ładunków promowych."],
      ["Handel i gastronomia", "Zamówienia, rezerwacje stolików i faktury w sezonie."],
    ],
    processes: [
      ["Pytania gości po niemiecku", "Asystent AI odpowiada w języku gościa o dostępność, zabiegi i dojazd."],
      ["Rezerwacja pobytu", "Rezerwacja uruchamia potwierdzenie, zaliczkę i przypomnienie."],
      ["Zameldowanie w apartamencie", "Instrukcje i kod dostępu wysyłane gościowi przed przyjazdem."],
      ["Dokumenty przewozowe", "Dane ładunku odczytane z dokumentów i przeniesione do systemu."],
    ],
    faq: [
      ["Czy automatyzujecie hotele i sanatoria w Świnoujściu?", "Tak. Rezerwacje pobytów, harmonogram zabiegów, pytania gości i płatności."],
      ["Czy chatbot odpowie gościom z Niemiec?", "Tak. Asystent AI odpowiada po niemiecku na podstawie waszych informacji o obiekcie."],
      ["Czy pracujecie z firmami portowymi ze Świnoujścia?", "Tak. Zlecenia, dokumenty przewozowe i statusy dla klientów."],
      ["Czy świnoujski obiekt może zacząć przed sezonem?", "Tak. Najlepiej kilka tygodni wcześniej, żeby wszystko działało, zanim zacznie się duże obłożenie."],
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-logistyki", "automatyzacja-dla-firm-uslugowych"],
  }),

  town({
    ...base,
    slug: "kolobrzeg",
    name: "Kołobrzeg",
    nameGenitive: "Kołobrzegu",
    nameLocative: "Kołobrzegu",
    nearbyCitySlugs: ["bialogard", "koszalin", "gryfice", "swidwin", "slawno"],
    metaDescription:
      "Automatyzacja dla firm z Kołobrzegu: hotele, sanatoria, apartamenty, gastronomia i usługi turystyczne. Rezerwacje i obsługa gości bez nadgodzin.",
    heroLead:
      "Pomagamy kołobrzeskim hotelom, sanatoriom i apartamentom obsłużyć gości przez cały rok bez przeciążania recepcji.",
    intro: [
      "Kołobrzeg jest jednym z największych uzdrowisk i kurortów nad Bałtykiem. Hotele, sanatoria, apartamenty, restauracje i firmy turystyczne obsługują gości z Polski i Niemiec przez cały rok, nie tylko latem.",
      "Pobyty uzdrowiskowe to rezerwacje, skierowania, harmonogramy zabiegów i rozliczenia. W sezonie dochodzą do tego tłumy turystów i setki zapytań dziennie.",
    ],
    localContext:
      "Kołobrzeskie obiekty obsługują gości z Niemiec, którzy oczekują komunikacji w swoim języku, oraz kuracjuszy z Polski, którzy mają pytania o skierowania i zabiegi.",
    whyHere:
      "W Kołobrzegu automatyzacja odpowiada na powtarzalne pytania w kilku językach, porządkuje rezerwacje i zabiegi, a zespół zajmuje się gośćmi.",
    industries: [
      ["Sanatoria i hotele spa", "Rezerwacje pobytów, harmonogramy zabiegów i rozliczenia."],
      ["Apartamenty na wynajem", "Rezerwacje z wielu portali, zameldowania i sprzątanie."],
      ["Gastronomia", "Rezerwacje stolików, zamówienia grupowe i faktury."],
      ["Usługi turystyczne", "Rezerwacje wycieczek, rejsów i atrakcji."],
    ],
    processes: [
      ["Harmonogram zabiegów", "Zabiegi przypisane do gości automatycznie, z przypomnieniem dzień wcześniej."],
      ["Pytania gości", "Asystent AI odpowiada po polsku i niemiecku o pobyty, zabiegi i dojazd."],
      ["Rezerwacja i zaliczka", "Rezerwacja uruchamia potwierdzenie, link do płatności i przypomnienie."],
      ["Opinie po pobycie", "Prośba o opinię wysyłana automatycznie po wymeldowaniu."],
    ],
    faq: [
      ["Czy automatyzujecie sanatoria w Kołobrzegu?", "Tak. Rezerwacje, harmonogramy zabiegów, przypomnienia dla kuracjuszy i rozliczenia."],
      ["Czy asystent AI odpowie kołobrzeskim gościom z Niemiec?", "Tak. Odpowiada po niemiecku na podstawie waszych informacji o ofercie i zabiegach."],
      ["Czy łączycie rezerwacje z kilku portali w jednym kalendarzu?", "Tak. Zmniejsza to ryzyko podwójnych rezerwacji i ręcznego przepisywania."],
      ["Kiedy kołobrzeski obiekt powinien zacząć przygotowania do sezonu?", "Najlepiej zimą lub wczesną wiosną, żeby wszystko działało przed majówką."],
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "police",
    name: "Police",
    nameGenitive: "Polic",
    nameLocative: "Policach",
    nearbyCitySlugs: ["szczecin", "goleniow", "swinoujscie", "gryfino", "stargard"],
    metaDescription:
      "Automatyzacja procesów dla firm z Polic: podwykonawcy zakładów chemicznych, port, logistyka i usługi pod Szczecinem. Konsultacja 30 min.",
    heroLead:
      "Pomagamy polickim podwykonawcom, firmom logistycznym i usługowym uporządkować zlecenia, protokoły i rozliczenia.",
    intro: [
      "Police leżą nad Odrą, na północ od Szczecina. Działają tu duże zakłady chemiczne produkujące nawozy, z własnym portem, a wokół nich firmy remontowe, transportowe i usługowe.",
      "Podwykonawcy zakładów chemicznych pracują według rygorystycznych procedur: pozwolenia, protokoły, uprawnienia pracowników, dokumentacja bezpieczeństwa. Dokumentów jest dużo.",
    ],
    localContext:
      "Polickie firmy usługowe obsługują postoje remontowe, kiedy liczba zleceń gwałtownie rośnie. Wtedy biuro najbardziej odczuwa ręczne rozliczenia.",
    whyHere:
      "W Policach automatyzacja skraca rozliczenie prac i pilnuje uprawnień pracowników, żeby firma była przygotowana na kolejne zlecenia.",
    industries: [
      ["Usługi dla przemysłu chemicznego", "Karty pracy, pozwolenia, protokoły i rozliczenia zleceń."],
      ["Port i logistyka", "Zlecenia, dokumenty przewozowe i statusy ładunków."],
      ["Budownictwo i instalacje", "Wyceny, harmonogramy i rozliczenia."],
      ["Usługi dla mieszkańców", "Zapisy, przypomnienia i płatności."],
    ],
    processes: [
      ["Karta pracy z postoju", "Godziny i materiały wpisywane w telefonie trafiają od razu do biura."],
      ["Protokół odbioru", "Dokument generowany z danych zlecenia, gotowy do podpisu."],
      ["Uprawnienia pracowników", "Przypomnienia o szkoleniach i badaniach wymaganych przez zakład."],
      ["Rozliczenie postoju", "Godziny i koszty z wielu zleceń zebrane w jednym zestawieniu."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami zakładów chemicznych w Policach?", "Tak. Karty pracy, protokoły, rozliczenia i pilnowanie uprawnień pracowników."],
      ["Czy pilnujecie terminów szkoleń BHP i badań?", "Tak. System przypomina o kończących się uprawnieniach z wyprzedzeniem."],
      ["Czy automatyzujecie firmy logistyczne z polickiego portu?", "Tak. Zlecenia, dokumenty przewozowe i statusy dla klientów."],
      ["Ile kosztuje pierwszy etap w Policach?", "Wycenę przygotowujemy po bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-hr", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-logistyki"],
  }),

  town({
    ...base,
    slug: "goleniow",
    name: "Goleniów",
    nameGenitive: "Goleniowa",
    nameLocative: "Goleniowie",
    nearbyCitySlugs: ["szczecin", "stargard", "police", "lobez", "kamien-pomorski"],
    metaDescription:
      "Automatyzacja procesów dla firm z Goleniowa: park przemysłowy, produkcja, logistyka przy lotnisku i S3. Konsultacja 30 min.",
    heroLead:
      "Pomagamy goleniowskim zakładom i firmom logistycznym uporządkować zamówienia, raporty i dokumenty.",
    intro: [
      "Goleniów leży przy drodze S3 i lotnisku obsługującym Szczecin. Goleniowski Park Przemysłowy przyciągnął producentów z branży drzewnej, metalowej i motoryzacyjnej, w tym firmy z kapitałem zagranicznym.",
      "Zakłady z parku przemysłowego obsługują odbiorców z Polski, Niemiec i Skandynawii. Zamówienia, dokumenty eksportowe i raporty wymagają sprawnej obsługi.",
    ],
    localContext:
      "Goleniowskie firmy konkurują o pracowników ze Szczecinem i innymi zakładami parku. Zespoły biurowe są małe.",
    whyHere:
      "W Goleniowie automatyzacja pozwala obsłużyć więcej zamówień i dokumentów eksportowych bez rozbudowy biura.",
    industries: [
      ["Produkcja w parku przemysłowym", "Zlecenia, materiały i wysyłki dla odbiorców z kraju i zagranicy."],
      ["Przemysł drzewny", "Zamówienia z wymiarami, terminy produkcji i dokumenty eksportowe."],
      ["Logistyka przy S3", "Awizacje, dokumenty przewozowe i statusy dostaw."],
      ["Usługi przy lotnisku", "Rezerwacje parkingów i transferów, płatności i faktury."],
    ],
    processes: [
      ["Zamówienie eksportowe", "Zamówienie od zagranicznego klienta trafia do systemu, faktura powstaje w jego walucie."],
      ["Plan produkcji", "Przyjęte zamówienia grupowane w zlecenia z terminami."],
      ["Dokumenty wysyłki", "Dokumenty przewozowe tworzone przy wydaniu towaru."],
      ["Rezerwacja parkingu", "Rezerwacja, płatność i potwierdzenie bez udziału obsługi."],
    ],
    faq: [
      ["Czy pracujecie z zakładami z Goleniowskiego Parku Przemysłowego?", "Tak. Zamówienia, plan produkcji, dokumenty eksportowe i raporty."],
      ["Czy automatyzujecie usługi przy lotnisku w Goleniowie?", "Tak. Rezerwacje parkingów i transferów, płatności i faktury."],
      ["Czy goleniowska firma musi wymieniać programy?", "Zwykle nie. Łączymy narzędzia, których już używacie."],
      ["Który proces w Goleniowie warto zautomatyzować najpierw?", "Ten, który zabiera najwięcej czasu i powtarza się codziennie, najczęściej zamówienia, faktury albo raporty. Wybieramy go razem na konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "gryfino",
    name: "Gryfino",
    nameGenitive: "Gryfina",
    nameLocative: "Gryfinie",
    nearbyCitySlugs: ["szczecin", "pyrzyce", "mysliborz", "stargard", "police"],
    metaDescription:
      "Automatyzacja procesów dla firm z Gryfina: energetyka i jej podwykonawcy, rolnictwo, handel z Niemcami i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy gryfińskim podwykonawcom, firmom rolnym i handlowym uporządkować zlecenia, rozliczenia i dokumenty.",
    intro: [
      "Gryfino leży nad Odrą, przy granicy z Niemcami i niedaleko Szczecina. W gminie działa duża elektrownia, a lokalną gospodarkę uzupełniają rolnictwo, handel transgraniczny i usługi.",
      "Podwykonawcy elektrowni pracują według procedur dużego zakładu, a firmy handlowe obsługują klientów z obu stron Odry.",
    ],
    localContext:
      "Gryfińskie firmy często łączą różne rynki: dużego odbiorcę przemysłowego, rolników z regionu i klientów z Niemiec.",
    whyHere:
      "W Gryfinie automatyzacja porządkuje rozliczenia z przemysłem i usuwa podwójną pracę przy klientach z Niemiec.",
    industries: [
      ["Usługi dla energetyki", "Karty pracy, protokoły i rozliczenia zleceń."],
      ["Rolnictwo", "Dostawy, rozliczenia i terminy płatności."],
      ["Handel z Niemcami", "Faktury w euro i korespondencja po niemiecku."],
      ["Usługi", "Zapisy, terminy i rozliczenia."],
    ],
    processes: [
      ["Karta pracy", "Dane z prac wpisywane w telefonie trafiają od razu do biura."],
      ["Rozliczenie zlecenia", "Podpisany protokół uruchamia fakturę."],
      ["Faktura w euro", "Faktura w walucie klienta tworzona z danych zamówienia."],
      ["Rozliczenia z gospodarstwami", "Zestawienia dostaw tworzone automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami elektrowni pod Gryfinem?", "Tak. Karty pracy, protokoły i rozliczenia zleceń."],
      ["Czy automatyzujecie obsługę klientów z Niemiec?", "Tak. Faktury w euro i korespondencja po niemiecku z tych samych danych."],
      ["Czy gryfińska firma rolna może zacząć od rozliczeń?", "Tak. Rozliczenia z dostawcami to częsty pierwszy proces."],
      ["Czy musimy spotykać się osobiście, skoro jesteśmy w Gryfinie?", "Nie. Większość projektów prowadzimy zdalnie. Warsztat w Gryfinie proponujemy tylko wtedy, gdy wyraźnie przyspiesza pracę."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-ksiegowosci", "automatyzacja-w-obsludze-klienta", "cyfryzacja-danych-i-dokumentow"],
  }),

  town({
    ...base,
    slug: "pyrzyce",
    name: "Pyrzyce",
    nameGenitive: "Pyrzyc",
    nameLocative: "Pyrzycach",
    nearbyCitySlugs: ["stargard", "gryfino", "mysliborz", "choszczno", "szczecin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Pyrzyc: rolnictwo na żyznych ziemiach, przetwórstwo, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy pyrzyckim firmom rolnym i przetwórczym uporządkować dostawy, sprzedaż i rozliczenia.",
    intro: [
      "Pyrzyce leżą na jednych z najżyźniejszych ziem Pomorza Zachodniego. Lokalną gospodarkę tworzą duże gospodarstwa rolne, skupy, przetwórstwo i handel środkami produkcji. Miasto znane jest też z wykorzystania energii geotermalnej.",
      "Rolnictwo na dużą skalę oznacza duże wolumeny dostaw, umowy z odbiorcami i rozliczenia, które często prowadzi się w arkuszach.",
    ],
    localContext:
      "Pyrzyckie gospodarstwa i skupy pracują z odbiorcami z Polski i Niemiec. Sezon zbiorów to szczyt dostaw i dokumentów.",
    whyHere:
      "W Pyrzycach automatyzacja porządkuje dostawy, umowy i rozliczenia w sezonie zbiorów.",
    industries: [
      ["Duże gospodarstwa rolne", "Umowy z odbiorcami, dostawy i rozliczenia."],
      ["Skupy i handel zbożem", "Przyjęcia, jakość, rozliczenia z dostawcami i sprzedaż."],
      ["Przetwórstwo", "Surowiec, partie i wysyłki."],
      ["Handel środkami produkcji", "Zamówienia nawozów i pasz z odroczonymi płatnościami."],
    ],
    processes: [
      ["Przyjęcie w skupie", "Ważenie i jakość zapisane raz trafiają do rozliczeń."],
      ["Rozliczenie dostawcy", "Zestawienie dostaw i kwot do zapłaty tworzone automatycznie."],
      ["Umowy z odbiorcami", "Ilości, terminy i realizacja umów w jednym widoku."],
      ["Odroczone płatności", "Przypomnienia przed terminem zapłaty."],
    ],
    faq: [
      ["Czy pracujecie ze skupami zboża z okolic Pyrzyc?", "Tak. Przyjęcia, jakość, rozliczenia z dostawcami i sprzedaż."],
      ["Czy automatyzujecie duże gospodarstwa rolne?", "Tak. Umowy z odbiorcami, dostawy i rozliczenia w jednym miejscu."],
      ["Kiedy pyrzycka firma powinna zacząć przed żniwami?", "Najlepiej kilka tygodni wcześniej, żeby zespół zdążył poznać nowy sposób pracy."],
      ["Od czego zależy cena wdrożenia w Pyrzycach?", "Od liczby kroków w procesie, systemów do połączenia i ilości danych. Każdy etap wyceniamy osobno, przed startem."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "porzadkowanie-i-strukturyzowanie-danych", "automatyzacja-sprzedazy", "wdrozenia-airtable"],
  }),

  town({
    ...base,
    slug: "mysliborz",
    name: "Myślibórz",
    nameGenitive: "Myśliborza",
    nameLocative: "Myśliborzu",
    nearbyCitySlugs: ["gryfino", "pyrzyce", "gorzow-wielkopolski", "choszczno", "szczecin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Myśliborza: rolnictwo, przetwórstwo, przemysł drzewny i turystyka nad jeziorami. Konsultacja 30 min.",
    heroLead:
      "Pomagamy myśliborskim firmom zamienić ręczne zamówienia, rozliczenia i rezerwacje w proste przepływy.",
    intro: [
      "Myślibórz leży nad jeziorem, na Pojezierzu Myśliborskim, między Szczecinem a Gorzowem Wielkopolskim. Lokalną gospodarkę tworzą rolnictwo, przetwórstwo, przemysł drzewny i turystyka.",
      "Małe firmy z regionu obsługują odbiorców z Polski i Niemiec przy niewielkich zespołach.",
    ],
    localContext:
      "Myśliborskie firmy często działają rodzinnie. Zamówienia i rozliczenia prowadzi się ręcznie, co przy większej liczbie klientów spowalnia pracę.",
    whyHere:
      "W Myśliborzu automatyzacja zbiera zamówienia i rezerwacje w jednym miejscu i przygotowuje dokumenty.",
    industries: [
      ["Rolnictwo i przetwórstwo", "Dostawy, partie i rozliczenia z gospodarstwami."],
      ["Przemysł drzewny", "Zamówienia z wymiarami, terminy i wysyłki."],
      ["Turystyka nad jeziorami", "Rezerwacje, zaliczki i pytania gości."],
      ["Handel", "Zamówienia i faktury dla klientów z regionu."],
    ],
    processes: [
      ["Zbieranie zamówień", "Zamówienia z telefonu i maila w jednej liście."],
      ["Rozliczenia z dostawcami", "Zestawienia tworzone automatycznie."],
      ["Rezerwacje", "Rezerwacja z zaliczką i przypomnieniem."],
      ["Faktury", "Faktura tworzona z danych zamówienia lub pobytu."],
    ],
    faq: [
      ["Czy pracujecie z firmami rodzinnymi z Myśliborza?", "Tak. Zaczynamy od jednego procesu, żeby szybko odczuć efekt przy niewielkim koszcie."],
      ["Czy automatyzujecie obiekty nad jeziorami Pojezierza Myśliborskiego?", "Tak. Rezerwacje, zaliczki i pytania gości."],
      ["Czy pracujecie z zakładami drzewnymi?", "Tak. Zamówienia z wymiarami, zlecenia i wysyłki."],
      ["Czy firma z Myśliborza może zacząć bez spotkania na żywo?", "Tak. Pierwsza rozmowa i cały przegląd procesu odbywają się online, bez wyjazdu z Myśliborza. Wystarczy komputer i kilka przykładowych dokumentów."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "kamien-pomorski",
    name: "Kamień Pomorski",
    nameGenitive: "Kamienia Pomorskiego",
    nameLocative: "Kamieniu Pomorskim",
    nearbyCitySlugs: ["swinoujscie", "gryfice", "goleniow", "szczecin", "kolobrzeg"],
    metaDescription:
      "Automatyzacja dla firm z Kamienia Pomorskiego: uzdrowisko, pensjonaty, turystyka nad Zalewem Kamieńskim i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy kamieńskim pensjonatom, obiektom uzdrowiskowym i firmom turystycznym obsłużyć sezon bez nadgodzin.",
    intro: [
      "Kamień Pomorski to uzdrowisko nad Zalewem Kamieńskim, blisko morskich plaż w Dziwnowie i Międzywodziu. Lokalną gospodarkę tworzą turystyka, pobyty uzdrowiskowe, gastronomia i usługi.",
      "Obiekty w regionie obsługują gości z Polski i Niemiec, a sezon letni zwiększa ruch kilkukrotnie.",
    ],
    localContext:
      "Kamieńskie pensjonaty i obiekty uzdrowiskowe to często firmy rodzinne. W sezonie właściciele odbierają telefony i maile od rana do nocy.",
    whyHere:
      "W Kamieniu Pomorskim automatyzacja odpowiada na zapytania, przyjmuje rezerwacje i zaliczki, a właściciele mają czas dla gości.",
    industries: [
      ["Uzdrowisko i zabiegi", "Rezerwacje pobytów, zabiegów i przypomnienia dla kuracjuszy."],
      ["Pensjonaty i apartamenty", "Rezerwacje z wielu portali, zaliczki i pytania gości."],
      ["Gastronomia", "Rezerwacje i zamówienia grupowe w sezonie."],
      ["Usługi turystyczne", "Rejsy, wypożyczalnie i atrakcje z płatnością online."],
    ],
    processes: [
      ["Pytania gości", "Asystent AI odpowiada po polsku i niemiecku o dostępność i ceny."],
      ["Rezerwacja i zaliczka", "Rezerwacja uruchamia potwierdzenie i link do płatności."],
      ["Harmonogram zabiegów", "Zabiegi przypisane gościom z przypomnieniem."],
      ["Opinie po pobycie", "Prośba o opinię wysyłana automatycznie."],
    ],
    faq: [
      ["Czy automatyzujecie pensjonaty w Kamieniu Pomorskim i okolicach?", "Tak. Rezerwacje z kilku portali, zaliczki i odpowiedzi na pytania gości."],
      ["Czy obsługujecie obiekty uzdrowiskowe?", "Tak. Rezerwacje pobytów, harmonogramy zabiegów i przypomnienia."],
      ["Czy chatbot odpowie gościom z Niemiec?", "Tak. Asystent AI odpowiada po niemiecku na podstawie waszych informacji."],
      ["Kiedy kamieński obiekt powinien zacząć?", "Najlepiej przed sezonem, zimą lub wczesną wiosną."],
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "gryfice",
    name: "Gryfice",
    nameGenitive: "Gryfic",
    nameLocative: "Gryficach",
    nearbyCitySlugs: ["kamien-pomorski", "kolobrzeg", "lobez", "goleniow", "swidwin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Gryfic: produkcja, przetwórstwo, rolnictwo, handel i turystyka. Konsultacja 30 min.",
    heroLead:
      "Pomagamy gryfickim zakładom i firmom handlowym uporządkować zamówienia, dostawy i faktury.",
    intro: [
      "Gryfice leżą nad Regą, w połowie drogi między Szczecinem a Kołobrzegiem. Lokalną gospodarkę tworzą zakłady produkcyjne, przetwórstwo, rolnictwo i handel, a Nadmorska Kolej Wąskotorowa przyciąga turystów.",
      "Gryfickie firmy obsługują klientów z regionu i wybrzeża, często przy niewielkich zespołach.",
    ],
    localContext:
      "Gryfickie firmy zaopatrują też obiekty nad morzem, więc latem liczba zamówień rośnie.",
    whyHere:
      "W Gryficach automatyzacja pozwala obsłużyć letni wzrost zamówień bez nadgodzin.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki."],
      ["Przetwórstwo", "Dostawy surowca, partie i sprzedaż."],
      ["Zaopatrzenie wybrzeża", "Zamówienia od hoteli i sklepów nad morzem."],
      ["Rolnictwo", "Rozliczenia dostaw i terminy."],
    ],
    processes: [
      ["Zamówienia od obiektów nad morzem", "Zamówienia zebrane w jednej liście z planem dostaw."],
      ["Stany magazynowe", "Powiadomienie o brakach przed szczytem sezonu."],
      ["Faktura", "Faktura tworzona po wydaniu."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z gryfickimi firmami zaopatrującymi wybrzeże?", "Tak. Zamówienia, plan dostaw, stany i faktury."],
      ["Czy pracujecie z zakładami produkcyjnymi z Gryfic?", "Tak. Zamówienia, zlecenia i wysyłki."],
      ["Czy gryficka firma może zacząć od jednego procesu?", "Tak. Zaczynamy od procesu, który zabiera najwięcej czasu."],
      ["Czy małą firmę z Gryfic stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność dla firmy z Gryfic oceniamy razem na konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "lobez",
    name: "Łobez",
    nameGenitive: "Łobza",
    nameLocative: "Łobzie",
    nearbyCitySlugs: ["swidwin", "drawsko-pomorskie", "goleniow", "gryfice", "stargard"],
    metaDescription:
      "Automatyzacja procesów dla firm z Łobza: rolnictwo, przemysł drzewny, przetwórstwo i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy łobeskim firmom uporządkować zamówienia, dostawy i rozliczenia.",
    intro: [
      "Łobez leży w środkowej części Pomorza Zachodniego, w regionie rolniczym i leśnym. Lokalną gospodarkę tworzą rolnictwo, przemysł drzewny, przetwórstwo i handel.",
      "Małe firmy z powiatu łobeskiego obsługują odbiorców ze Szczecina i całego regionu.",
    ],
    localContext:
      "Łobeskie firmy działają z niewielkimi zespołami, często rodzinnie. Zamówienia i rozliczenia prowadzi się ręcznie.",
    whyHere:
      "W Łobzie automatyzacja zbiera zamówienia w jednym miejscu i pilnuje płatności.",
    industries: [
      ["Przemysł drzewny", "Zamówienia z wymiarami, terminy i wysyłki."],
      ["Rolnictwo", "Dostawy, rozliczenia i terminy."],
      ["Przetwórstwo", "Surowiec, partie i sprzedaż."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia", "Zamówienia z różnych kanałów w jednej liście."],
      ["Rozliczenia z dostawcami", "Zestawienia tworzone automatycznie."],
      ["Faktura", "Faktura z danych zamówienia."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z zakładami drzewnymi z okolic Łobza?", "Tak. Zamówienia z wymiarami, zlecenia i wysyłki."],
      ["Czy łobeska firma rodzinna może zacząć małym krokiem?", "Tak. Jeden proces, jasny koszt, szybki efekt."],
      ["Czy automatyzujecie rozliczenia z gospodarstwami?", "Tak. Dostawy zapisane raz zamieniają się w zestawienia i płatności."],
      ["Jak wygląda współpraca na odległość z firmą z Łobza?", "Procesy poznajemy na wideorozmowach i przykładach dokumentów, a wdrożenie testujemy razem z zespołem na prawdziwych danych."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-w-produkcji", "doradztwo-i-optymalizacja-procesow-biznesowych", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "swidwin",
    name: "Świdwin",
    nameGenitive: "Świdwina",
    nameLocative: "Świdwinie",
    nearbyCitySlugs: ["bialogard", "lobez", "drawsko-pomorskie", "kolobrzeg", "koszalin"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Świdwina: rolnictwo, przetwórstwo, produkcja i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy świdwińskim firmom zamienić ręczne zamówienia i rozliczenia w proste przepływy.",
    intro: [
      "Świdwin leży nad Regą, w rolniczej części Pomorza Zachodniego. Lokalną gospodarkę tworzą rolnictwo, przetwórstwo, mniejsze zakłady produkcyjne i handel.",
      "Świdwińskie firmy obsługują odbiorców z Koszalina, Kołobrzegu i całego regionu.",
    ],
    localContext:
      "Świdwińskie firmy są niewielkie, a obowiązków dużo. Każda zautomatyzowana czynność odciąża zespół.",
    whyHere:
      "W Świdwinie automatyzacja porządkuje zamówienia i rozliczenia w jednym miejscu.",
    industries: [
      ["Rolnictwo", "Dostawy, rozliczenia i terminy płatności."],
      ["Przetwórstwo", "Surowiec, partie i sprzedaż do odbiorców."],
      ["Produkcja", "Zlecenia i wysyłki."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Zamówienia", "Zamówienia z telefonu i maila w jednej liście."],
      ["Dostawy", "Przyjęcie dostawy zapisane raz."],
      ["Faktury", "Faktura tworzona automatycznie."],
      ["Należności", "Przypomnienia o płatnościach przed terminem."],
    ],
    faq: [
      ["Czy pracujecie z firmami ze Świdwina?", "Tak. Pracujemy zdalnie z firmami z całego Pomorza Zachodniego."],
      ["Czy automatyzujecie firmy przetwórcze?", "Tak. Dostawy surowca, partie i sprzedaż."],
      ["Czy świdwińska firma musi zmieniać programy?", "Zwykle nie. Łączymy narzędzia, których już używacie."],
      ["Czy firma ze Świdwina pozna koszt przed rozpoczęciem prac?", "Tak. Z każdą firmą ze Świdwina zaczynamy od wyceny pierwszego etapu, więc decyzję podejmujecie, znając kwotę."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow"],
  }),

  town({
    ...base,
    slug: "drawsko-pomorskie",
    name: "Drawsko Pomorskie",
    nameGenitive: "Drawska Pomorskiego",
    nameLocative: "Drawsku Pomorskim",
    nearbyCitySlugs: ["szczecinek", "swidwin", "lobez", "walcz", "choszczno"],
    metaDescription:
      "Automatyzacja procesów dla firm z Drawska Pomorskiego: turystyka na pojezierzu, przemysł drzewny, rolnictwo i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy drawskim firmom turystycznym, drzewnym i handlowym uporządkować rezerwacje, zamówienia i rozliczenia.",
    intro: [
      "Drawsko Pomorskie leży na Pojezierzu Drawskim, jednym z najpiękniejszych pojezierzy w Polsce. Lokalną gospodarkę tworzą turystyka, przemysł drzewny, rolnictwo i handel.",
      "Ośrodki wypoczynkowe, spływy kajakowe i pensjonaty mają wyraźny sezon letni, a zakłady drzewne pracują przez cały rok.",
    ],
    localContext:
      "Drawskie firmy turystyczne obsługują grupy i turystów indywidualnych, często z krótkim wyprzedzeniem. Rezerwacje i płatności wymagają szybkiej reakcji.",
    whyHere:
      "W Drawsku Pomorskim automatyzacja przyjmuje rezerwacje i płatności całą dobę, a zespół zajmuje się gośćmi.",
    industries: [
      ["Turystyka na pojezierzu", "Rezerwacje ośrodków, spływów kajakowych i pensjonatów."],
      ["Przemysł drzewny", "Zamówienia z wymiarami, terminy i wysyłki."],
      ["Rolnictwo", "Dostawy, rozliczenia i terminy."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Rezerwacja spływu", "Termin, liczba kajaków, płatność i potwierdzenie bez telefonu."],
      ["Rezerwacja noclegu", "Rezerwacja z zaliczką i instrukcją dojazdu."],
      ["Zamówienie z wymiarami", "Formularz trafia prosto do planu produkcji."],
      ["Faktury", "Faktura tworzona automatycznie."],
    ],
    faq: [
      ["Czy automatyzujecie wypożyczalnie kajaków na Pojezierzu Drawskim?", "Tak. Rezerwacje terminów i sprzętu, płatności i przypomnienia."],
      ["Czy obsługujecie ośrodki wypoczynkowe z okolic Drawska?", "Tak. Rezerwacje, zaliczki i pytania gości."],
      ["Czy pracujecie z zakładami drzewnymi?", "Tak. Zamówienia, zlecenia i wysyłki."],
      ["Kiedy drawski obiekt powinien zacząć przed sezonem?", "Najlepiej wiosną, zanim ruszą rezerwacje na lato."],
    ],
    services: ["automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-w-produkcji", "automatyzacja-dla-firm-uslugowych"],
  }),

  town({
    ...base,
    slug: "choszczno",
    name: "Choszczno",
    nameGenitive: "Choszczna",
    nameLocative: "Choszcznie",
    nearbyCitySlugs: ["stargard", "pyrzyce", "drawsko-pomorskie", "walcz", "szczecin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Choszczna: rolnictwo, przetwórstwo, produkcja i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy choszczeńskim firmom uporządkować dostawy, zamówienia i faktury.",
    intro: [
      "Choszczno leży nad jeziorem Klukom, w południowo-wschodniej części Pomorza Zachodniego. Lokalną gospodarkę tworzą rolnictwo, przetwórstwo, mniejsze zakłady produkcyjne i handel.",
      "Choszczeńskie firmy współpracują z odbiorcami ze Stargardu i Szczecina przy niewielkich zespołach.",
    ],
    localContext:
      "Firmy z powiatu choszczeńskiego pracują w rytmie sezonów rolniczych, kiedy dostaw i rozliczeń jest najwięcej.",
    whyHere:
      "W Choszcznie automatyzacja porządkuje dostawy i rozliczenia w sezonie.",
    industries: [
      ["Rolnictwo", "Dostawy, rozliczenia i terminy płatności."],
      ["Przetwórstwo", "Surowiec, partie i sprzedaż."],
      ["Produkcja", "Zlecenia i wysyłki dla odbiorców ze Stargardu i Szczecina."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Przyjęcie dostawy", "Ważenie i jakość zapisane raz."],
      ["Rozliczenie dostawcy", "Zestawienia tworzone automatycznie."],
      ["Zamówienia", "Zamówienia w jednej liście ze statusem."],
      ["Faktury", "Faktura z danych wydania."],
    ],
    faq: [
      ["Czy pracujecie z firmami rolnymi z Choszczna?", "Tak. Dostawy, rozliczenia z gospodarstwami i sprzedaż."],
      ["Czy choszczeńska firma może zacząć od jednego procesu?", "Tak, tak zaczynamy zawsze."],
      ["Czy automatyzacja zadziała w sezonie?", "Tak. Najwięcej pomaga właśnie w szczycie. Najlepiej wdrożyć ją przed sezonem."],
      ["Jak często będziemy się kontaktować podczas wdrożenia w Choszcznie?", "Zwykle raz w tygodniu na krótkim spotkaniu online z zespołem w Choszcznie, a na bieżąco przez maila lub komunikator."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "bialogard",
    name: "Białogard",
    nameGenitive: "Białogardu",
    nameLocative: "Białogardzie",
    nearbyCitySlugs: ["koszalin", "kolobrzeg", "swidwin", "szczecinek", "slawno"],
    metaDescription:
      "Automatyzacja procesów dla firm z Białogardu: produkcja, przetwórstwo, handel i usługi dla wybrzeża. Konsultacja 30 min.",
    heroLead:
      "Pomagamy białogardzkim zakładom i firmom handlowym uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Białogard leży między Koszalinem a Kołobrzegiem. Lokalną gospodarkę tworzą zakłady produkcyjne, przetwórstwo, handel i usługi, także dla obiektów turystycznych na wybrzeżu.",
      "Białogardzkie firmy obsługują odbiorców z regionu przy niewielkich zespołach biurowych.",
    ],
    localContext:
      "Białogardzkie firmy zaopatrujące wybrzeże mają latem więcej zamówień niż zimą. Zespół musi poradzić sobie ze szczytem.",
    whyHere:
      "W Białogardzie automatyzacja pozwala obsłużyć letni szczyt zamówień bez nadgodzin.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki."],
      ["Przetwórstwo", "Surowiec, partie i sprzedaż."],
      ["Zaopatrzenie obiektów nad morzem", "Zamówienia od hoteli i restauracji."],
      ["Handel i usługi", "Zamówienia, zapisy i faktury."],
    ],
    processes: [
      ["Zamówienia od hoteli", "Zamówienia z wybrzeża w jednej liście z planem dostaw."],
      ["Zlecenia produkcyjne", "Zamówienie zamienia się w zlecenie z terminem."],
      ["Faktura", "Faktura tworzona po wydaniu."],
      ["Raport sezonu", "Sprzedaż według klientów i miesięcy."],
    ],
    faq: [
      ["Czy pracujecie z białogardzkimi firmami zaopatrującymi hotele?", "Tak. Zamówienia, plan dostaw i faktury."],
      ["Czy pracujecie z zakładami produkcyjnymi z Białogardu?", "Tak. Zamówienia, zlecenia i wysyłki."],
      ["Czy białogardzka firma potrzebuje działu IT?", "Nie. Wystarczy osoba, która zna proces."],
      ["Ile kosztuje automatyzacja w firmie z Białogardu?", "Zależy od procesu i liczby systemów do połączenia. Wycenę pierwszego etapu dostajecie po bezpłatnej konsultacji, zanim zaczniemy pracę."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "slawno",
    name: "Sławno",
    nameGenitive: "Sławna",
    nameLocative: "Sławnie",
    nearbyCitySlugs: ["koszalin", "slupsk", "bialogard", "kolobrzeg", "lebork"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Sławna: rolnictwo, przetwórstwo, turystyka w Darłowie i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy sławieńskim firmom rolnym, przetwórczym i turystycznym uporządkować dostawy, zamówienia i rezerwacje.",
    intro: [
      "Sławno leży niedaleko wybrzeża, w pobliżu Darłowa i Darłówka. Lokalną gospodarkę tworzą rolnictwo, przetwórstwo, handel i turystyka nadmorska.",
      "Firmy z powiatu sławieńskiego łączą pracę dla rolnictwa z obsługą turystów w sezonie.",
    ],
    localContext:
      "Sławieńskie firmy mają dwa szczyty: sezon rolniczy i sezon turystyczny. W obu zespół nie nadąża z ręczną pracą.",
    whyHere:
      "W Sławnie automatyzacja porządkuje dostawy i rezerwacje, żeby oba sezony przebiegały bez chaosu.",
    industries: [
      ["Rolnictwo", "Dostawy, rozliczenia i terminy."],
      ["Przetwórstwo", "Surowiec, partie i sprzedaż."],
      ["Turystyka w Darłowie", "Rezerwacje pensjonatów, zaliczki i pytania gości."],
      ["Handel", "Zamówienia i faktury."],
    ],
    processes: [
      ["Przyjęcie dostawy", "Dostawa zapisana raz, widoczna w rozliczeniach."],
      ["Rozliczenia z dostawcami", "Zestawienia tworzone automatycznie."],
      ["Rezerwacje w sezonie", "Rezerwacja z zaliczką i przypomnieniem."],
      ["Faktury", "Faktura tworzona automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z firmami rolnymi z okolic Sławna?", "Tak. Dostawy, rozliczenia i sprzedaż."],
      ["Czy automatyzujecie pensjonaty w Darłowie i Darłówku?", "Tak. Rezerwacje z kilku portali, zaliczki i pytania gości."],
      ["Czy sławieńska firma może zacząć od jednego procesu?", "Tak. Jeden proces, jasny koszt, szybki efekt."],
      ["Czy lokalizacja w Sławnie wpływa na tempo projektu?", "Nie. Pracujemy zdalnie, więc zakres i terminy dla firmy ze Sławna są takie same jak dla firm z największych miast."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "szczecinek",
    name: "Szczecinek",
    nameGenitive: "Szczecinka",
    nameLocative: "Szczecinku",
    nearbyCitySlugs: ["drawsko-pomorskie", "walcz", "koszalin", "bialogard", "pila"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Szczecinka: przemysł drzewny i płyty meblowe, dostawcy, transport, turystyka. Konsultacja 30 min.",
    heroLead:
      "Pomagamy szczecineckim dostawcom, przewoźnikom i zakładom drzewnym uporządkować zamówienia, dokumenty i rozliczenia.",
    intro: [
      "Szczecinek jest jednym z najważniejszych ośrodków przemysłu drzewnego w Polsce. Działa tu duży producent płyt drewnopochodnych, a wokół niego dostawcy drewna, firmy transportowe, zakłady meblarskie i usługowe.",
      "Miasto leży nad jeziorem Trzesiecko i jest też ośrodkiem turystyki na Pojezierzu Szczecineckim.",
    ],
    localContext:
      "Szczecineckie firmy transportowe i dostawcy drewna pracują w rytmie dużego zakładu. Dokumenty dostaw, ważenia i rozliczenia zajmują dużo czasu.",
    whyHere:
      "W Szczecinku automatyzacja porządkuje dostawy, dokumenty i rozliczenia kursów, żeby firmy nadążały za dużym odbiorcą.",
    industries: [
      ["Przemysł drzewny", "Zamówienia, terminy produkcji i dokumenty dostaw dla producentów płyt i mebli."],
      ["Dostawcy drewna", "Ważenia, dokumenty pochodzenia i rozliczenia dostaw."],
      ["Transport", "Zlecenia, dokumenty przewozowe i rozliczenia kursów."],
      ["Turystyka na pojezierzu", "Rezerwacje, zaliczki i pytania gości."],
    ],
    processes: [
      ["Dokumenty dostawy drewna", "Dane z ważenia i dokumenty pochodzenia zapisane raz."],
      ["Rozliczenie dostaw", "Zestawienie dostaw i kwot tworzone automatycznie."],
      ["Rozliczenie kursu", "Zamknięty kurs uruchamia fakturę."],
      ["Rezerwacje nad jeziorem", "Rezerwacja z zaliczką i przypomnieniem."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami przemysłu drzewnego ze Szczecinka?", "Tak. Dokumenty dostaw, ważenia, rozliczenia i faktury."],
      ["Czy automatyzujecie firmy transportowe wożące drewno?", "Tak. Zlecenia, dokumenty przewozowe i rozliczenia kursów."],
      ["Czy pracujecie z zakładami meblarskimi z okolic Szczecinka?", "Tak. Zamówienia z wariantami, zlecenia i wysyłki."],
      ["Ile kosztuje wdrożenie w Szczecinku?", "Wycenę pierwszego etapu przygotowujemy po bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "walcz",
    name: "Wałcz",
    nameGenitive: "Wałcza",
    nameLocative: "Wałczu",
    nearbyCitySlugs: ["szczecinek", "pila", "drawsko-pomorskie", "choszczno", "poznan"],
    metaDescription:
      "Automatyzacja procesów dla firm z Wałcza: przemysł drzewny i meblarski, produkcja, turystyka nad jeziorami. Konsultacja 30 min.",
    heroLead:
      "Pomagamy wałeckim zakładom drzewnym, meblarskim i firmom turystycznym uporządkować zamówienia i rezerwacje.",
    intro: [
      "Wałcz leży wśród jezior Pojezierza Wałeckiego, na styku Pomorza Zachodniego i Wielkopolski. Lokalną gospodarkę tworzą przemysł drzewny i meblarski, zakłady produkcyjne, handel i turystyka.",
      "Zakłady meblarskie pracują na zamówieniach z wariantami i terminami, a ośrodki nad jeziorami mają wyraźny sezon letni.",
    ],
    localContext:
      "Wałeckie firmy obsługują odbiorców z Piły, Poznania i Pomorza. Zamówienia i dokumenty przychodzą z wielu kierunków.",
    whyHere:
      "W Wałczu automatyzacja porządkuje zamówienia i rezerwacje w jednym miejscu.",
    industries: [
      ["Przemysł meblarski", "Zamówienia z wariantami, zlecenia produkcyjne i wysyłki."],
      ["Przemysł drzewny", "Zamówienia z wymiarami i terminy."],
      ["Produkcja", "Zlecenia i wysyłki dla odbiorców z Wielkopolski i Pomorza."],
      ["Turystyka nad jeziorami", "Rezerwacje, zaliczki i pytania gości."],
    ],
    processes: [
      ["Zamówienie z wariantami", "Zamówienie z kolorem i wymiarem trafia do produkcji bez przepisywania."],
      ["Status dla klienta", "Klient dostaje informację o terminie produkcji i dostawy."],
      ["Rezerwacja ośrodka", "Rezerwacja z zaliczką i przypomnieniem."],
      ["Faktura po wysyłce", "Wydanie towaru uruchamia fakturę."],
    ],
    faq: [
      ["Czy pracujecie z zakładami meblarskimi z Wałcza?", "Tak. Zamówienia z wariantami, zlecenia produkcyjne i wysyłki."],
      ["Czy automatyzujecie ośrodki nad jeziorami Pojezierza Wałeckiego?", "Tak. Rezerwacje, zaliczki i pytania gości."],
      ["Czy wałecka firma musi wymieniać system?", "Zwykle nie. Łączymy to, czego już używacie."],
      ["Co firma z Wałcza powinna przygotować przed pierwszą rozmową?", "Nic szczególnego. Wystarczy opowiedzieć, jak dziś wygląda praca, i pokazać przykładowe dokumenty lub arkusze."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "automatyzacja-sprzedazy", "integracje-systemow"],
  }),
];
