import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "małopolskie", regionCluster: "malopolska" } as const;

export const malopolskieRegion = region({
  slug: "malopolskie",
  intro: [
    "Małopolska łączy dwa światy. Kraków to jedno z największych w Europie centrów usług biznesowych i IT, z uczelniami, parkami technologicznymi i milionami turystów rocznie. Poza nim region jest mozaiką przemysłu, rolnictwa, sadownictwa i turystyki górskiej.",
    "Tarnów to przemysł chemiczny, Nowy Sącz i okolice to przedsiębiorczość rodzinnych firm, które wyrosły na producentów znanych w całej Europie. Oświęcim i Chrzanów mają zakłady chemiczne i przemysłowe, a Bochnia i Brzesko leżą przy autostradzie A4, która przyciąga logistykę.",
    "Na południu Zakopane, Nowy Targ i Podhale żyją z turystyki, a w Beskidach i sądeckim działa wiele pensjonatów, hoteli i wypożyczalni. Ich rytm wyznaczają sezony zimowy i letni.",
    "Z firmami z Małopolski pracujemy zdalnie. Nasza siedziba jest we Wrocławiu, a na miejsce przyjeżdżamy, gdy warsztat z zespołem przyspiesza projekt.",
  ],
  industries: [
    ["Usługi biznesowe i IT", "Obieg zgłoszeń, onboarding, raporty dla klientów i obsługa dokumentów w krakowskich centrach usług."],
    ["Turystyka i hotelarstwo", "Rezerwacje, pytania gości i płatności w Krakowie, Zakopanem i na Podhalu."],
    ["Przemysł chemiczny i produkcja", "Zlecenia, dokumentacja jakości i rozliczenia w zakładach Tarnowa, Oświęcimia i ich dostawców."],
    ["Firmy rodzinne w fazie wzrostu", "Przejście z arkuszy na uporządkowane dane w sądeckich i podhalańskich przedsiębiorstwach."],
    ["Sadownictwo i przetwórstwo", "Skup, przechowywanie i sprzedaż owoców w rejonie Łącka i Limanowej."],
  ],
  faq: [
    ["Czy macie biuro w Krakowie?", "Nie. Nasza siedziba jest we Wrocławiu. Z firmami z Małopolski pracujemy zdalnie, a na warsztat przyjeżdżamy, gdy to przyspiesza projekt."],
    ["Czy automatyzujecie obiekty turystyczne w górach?", "Tak. Rezerwacje z wielu portali, odpowiedzi na pytania gości, zaliczki i przypomnienia to częste wdrożenia w regionie."],
    ["Czy pracujecie z centrami usług biznesowych?", "Tak. Automatyzujemy obieg zgłoszeń, obsługę dokumentów, onboarding i raporty dla klientów."],
    ["Od czego zacząć?", "Od bezpłatnej, 30-minutowej konsultacji, na której wybieramy proces z najszybszym zwrotem."],
  ],
});

export const malopolskieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "krakow",
    name: "Kraków",
    nameGenitive: "Krakowa",
    nameLocative: "Krakowie",
    nearbyCitySlugs: ["wieliczka", "myslenice", "bochnia", "chrzanow", "olkusz", "oswiecim", "tarnow"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Krakowa: centra usług, IT, biura rachunkowe, turystyka, produkcja i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy krakowskim firmom usługowym, technologicznym i turystycznym przejąć powtarzalną pracę z dokumentami, zgłoszeniami i rezerwacjami. Zespół zajmuje się klientami, a nie przepisywaniem.",
    intro: [
      "Kraków jest jednym z najważniejszych w Europie ośrodków usług biznesowych i IT, a jednocześnie jednym z najczęściej odwiedzanych miast w Polsce. Działają tu centra usług wspólnych, software house'y, biura rachunkowe, kancelarie, hotele, a na obrzeżach zakłady produkcyjne i centra logistyczne.",
      "Wspólny mianownik krakowskich firm to praca z dużą liczbą dokumentów, zgłoszeń i klientów. Tam, gdzie zespół codziennie przepisuje dane między mailem, arkuszem i systemem, automatyzacja i AI dają najszybszy efekt.",
    ],
    localContext:
      "Krakowski rynek pracy jest konkurencyjny, a rotacja w zespołach administracyjnych wysoka. Każda nowa osoba musi nauczyć się procesów, które często istnieją tylko w głowach doświadczonych pracowników.",
    whyHere:
      "W Krakowie automatyzacja zmniejsza zależność od ręcznej pracy i wiedzy pojedynczych osób. Procesy są opisane, powtarzalne i działają także wtedy, gdy ktoś odchodzi.",
    economy: {
      title: "Czym żyje krakowski biznes",
      paragraphs: [
        "Centra usług biznesowych, firmy IT i technologiczne zatrudniają w Krakowie dziesiątki tysięcy osób. Wokół nich działa rynek mniejszych firm: biur rachunkowych, agencji, kancelarii, firm szkoleniowych i rekrutacyjnych.",
        "Turystyka to drugi filar gospodarki miasta: hotele, apartamenty na wynajem, restauracje, przewodnicy i biura podróży obsługujące gości z całego świata.",
        "Na obrzeżach, w Nowej Hucie i w specjalnej strefie ekonomicznej działają zakłady produkcyjne, farmaceutyczne i spożywcze, a przy autostradzie A4 i obwodnicy centra logistyczne.",
      ],
    },
    industries: [
      ["Biura rachunkowe i kancelarie", "Zbieranie dokumentów od klientów, odczyt przez AI, przypomnienia o terminach."],
      ["Centra usług i IT", "Obieg zgłoszeń, onboarding, raporty dla klientów i rozliczenia projektów."],
      ["Hotele i najem krótkoterminowy", "Rezerwacje z wielu portali, pytania gości, zameldowania i sprzątanie."],
      ["Produkcja i logistyka", "Zamówienia, stany i dokumenty w zakładach i magazynach wokół miasta."],
    ],
    processes: [
      ["Dokumenty od klientów", "Faktury i dokumenty trafiają w jedno miejsce, AI je opisuje i przenosi do systemu."],
      ["Onboarding pracownika", "Umowy, dostępy, sprzęt i szkolenia uruchamiane z jednej listy zadań."],
      ["Obsługa gości", "Asystent AI odpowiada na pytania gości w kilku językach, a trudne przekazuje dalej."],
      ["Raporty dla klientów", "Raport miesięczny tworzony z danych, które już są, i wysyłany automatycznie."],
    ],
    example: {
      title: "Miesiąc w krakowskim biurze rachunkowym przed i po automatyzacji",
      lead: "Przykład biura obsługującego wiele małych firm. Tak zmienia się zbieranie i księgowanie dokumentów w każdym miesiącu.",
      rows: [
        ["Zbieranie dokumentów", "Klienci wysyłają skany mailem, WhatsAppem i przynoszą papiery.", "Jeden link lub skrzynka dla każdego klienta, dokumenty trafiają w jedno miejsce."],
        ["Opis dokumentów", "Księgowa ręcznie przepisuje dane z faktur.", "AI odczytuje faktury i proponuje dekretację do akceptacji."],
        ["Braki", "Telefony i maile do klientów pod koniec miesiąca.", "Automatyczne przypomnienia o brakujących dokumentach przed terminem."],
        ["Terminy i płatności", "Klienci pytają o kwoty podatków telefonicznie.", "Kwoty i terminy wysyłane klientom automatycznie po zamknięciu miesiąca."],
        ["Raport dla klienta", "Przygotowywany ręcznie na prośbę klienta.", "Krótkie podsumowanie miesiąca generowane i wysyłane automatycznie."],
      ],
    },
    faq: [
      ["Czy macie biuro w Krakowie?", "Nie. Nasza siedziba jest we Wrocławiu. Z firmami z Krakowa pracujemy zdalnie, a gdy warsztat na miejscu przyspiesza projekt, przyjeżdżamy."],
      ["Czy automatyzujecie biura rachunkowe?", "Tak. Zbieranie dokumentów, odczyt faktur przez AI, przypomnienia o brakach i wysyłka kwot do klientów to częste wdrożenia."],
      ["Czy pracujecie z centrami usług biznesowych?", "Tak. Automatyzujemy obieg zgłoszeń, onboarding, raporty i obsługę dokumentów."],
      ["Czy automatyzujecie najem krótkoterminowy?", "Tak. Łączymy portale rezerwacyjne, komunikację z gośćmi, zameldowania i grafik sprzątania."],
      ["Czy AI jest bezpieczne dla danych klientów?", "Dobieramy narzędzia i ustawienia tak, żeby dane były chronione, a dostęp miały tylko uprawnione osoby. Szczegóły omawiamy na konsultacji."],
      ["Czy firma z Krakowa pozna koszt przed rozpoczęciem prac?", "Tak. Zawsze zaczynamy od wyceny pierwszego etapu, więc decyzję podejmujecie, znając kwotę."],
    ],
    services: ["ai-w-obsludze-dokumentow", "automatyzacja-dla-ksiegowosci", "automatyzacja-dla-hr", "asystent-ai-na-firmowej-wiedzy", "automatyzacja-w-obsludze-klienta", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "tarnow",
    name: "Tarnów",
    nameGenitive: "Tarnowa",
    nameLocative: "Tarnowie",
    nearbyCitySlugs: ["brzesko", "bochnia", "dabrowa-tarnowska", "krakow", "nowy-sacz", "gorlice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Tarnowa: przemysł chemiczny i jego dostawcy, produkcja w strefie ekonomicznej, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy tarnowskim podwykonawcom, zakładom i firmom usługowym uporządkować zlecenia, dokumentację i rozliczenia.",
    intro: [
      "Tarnów jest siedzibą jednej z największych grup chemicznych w Polsce, produkującej nawozy i tworzywa. Wokół zakładów działają firmy remontowe, serwisowe, transportowe i dostawcy, a strefa ekonomiczna przyciągnęła zakłady z innych branż.",
      "Miasto leży przy autostradzie A4, co sprzyja produkcji i logistyce. Tarnów jest też zapleczem handlowym i usługowym dla wschodniej Małopolski.",
    ],
    localContext:
      "Tarnowskie firmy usługowe pracują według procedur dużego zakładu chemicznego: pozwolenia, protokoły, uprawnienia pracowników. To dużo dokumentów, które często przygotowuje się ręcznie.",
    whyHere:
      "W Tarnowie automatyzacja skraca rozliczenie prac i pilnuje dokumentacji, której wymagają duzi odbiorcy przemysłowi.",
    economy: {
      title: "Czym żyje tarnowski biznes",
      paragraphs: [
        "Przemysł chemiczny jest największym pracodawcą w mieście. W strefie ekonomicznej działają też producenci z branży metalowej, motoryzacyjnej i materiałów budowlanych.",
        "Tarnów obsługuje handlowo i usługowo kilka powiatów wschodniej Małopolski: działają tu hurtownie, firmy budowlane, biura i usługi dla mieszkańców.",
      ],
    },
    industries: [
      ["Usługi dla przemysłu chemicznego", "Karty pracy, pozwolenia, protokoły i rozliczenia zleceń bez papierowego obiegu."],
      ["Produkcja w strefie ekonomicznej", "Zlecenia, materiały i dokumentacja jakości dla odbiorców z kraju i zagranicy."],
      ["Logistyka przy A4", "Awizacje, statusy dostaw i dokumenty przewozowe na trasie Kraków–Rzeszów."],
      ["Handel hurtowy", "Zamówienia od sklepów wschodniej Małopolski, stany i faktury."],
    ],
    processes: [
      ["Karta pracy z instalacji", "Brygada wpisuje godziny i materiały w telefonie, biuro widzi je od razu."],
      ["Protokół odbioru", "Dokument generowany z danych zlecenia i gotowy do podpisu przez odbiorcę."],
      ["Uprawnienia pracowników", "System przypomina o kończących się szkoleniach i badaniach przed terminem."],
      ["Rozliczenie zlecenia", "Podpisany protokół uruchamia fakturę i zestawienie dla zakładu."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami zakładów chemicznych w Tarnowie?", "Tak. Automatyzujemy karty pracy, protokoły, rozliczenia i pilnowanie uprawnień pracowników, czyli dokumenty, które najbardziej obciążają biuro."],
      ["Czy automatyzujecie zakłady z tarnowskiej strefy ekonomicznej?", "Tak. Zamówienia, raporty produkcji i dokumentacja jakości to typowy zakres."],
      ["Czy pilnujecie terminów szkoleń i badań?", "Tak. System wysyła przypomnienia z wyprzedzeniem, więc nikt nie traci dostępu do zakładu przez przeterminowane uprawnienia."],
      ["Czy musicie przyjeżdżać do Tarnowa?", "Nie. Pracujemy zdalnie, a warsztat na miejscu proponujemy, gdy wyraźnie przyspiesza projekt."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-produkcji", "automatyzacja-dla-hr", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-logistyki"],
  }),

  town({
    ...base,
    slug: "nowy-sacz",
    name: "Nowy Sącz",
    nameGenitive: "Nowego Sącza",
    nameLocative: "Nowym Sączu",
    nearbyCitySlugs: ["limanowa", "gorlice", "nowy-targ", "tarnow", "bochnia", "krakow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Nowego Sącza: producenci, firmy rodzinne, sadownictwo, handel i turystyka. Konsultacja 30 min.",
    heroLead:
      "Pomagamy sądeckim producentom i firmom rodzinnym przejść z arkuszy i maili na uporządkowany przepływ zamówień, produkcji i dokumentów.",
    intro: [
      "Nowy Sącz słynie z przedsiębiorczości. W mieście i okolicy wyrosły firmy rodzinne, które stały się producentami znanymi w całej Europie: pojazdów szynowych, okien dachowych, bram i drzwi. Obok nich działa sieć dostawców i mniejszych zakładów.",
      "Sądecczyzna to też sadownictwo w dolinie Dunajca i turystyka w Beskidzie Sądeckim, z Krynicą-Zdrojem i Muszyną.",
    ],
    localContext:
      "Wiele sądeckich firm urosło szybko, ale wewnętrzne procesy zostały na etapie arkuszy i poczty. Im więcej klientów i zamówień, tym więcej czasu zajmuje przepisywanie danych.",
    whyHere:
      "W Nowym Sączu automatyzacja pomaga firmie, która urosła, uporządkować dane i procesy bez rewolucji w systemach.",
    economy: {
      title: "Czym żyje sądecki biznes",
      paragraphs: [
        "Produkcja jest silną stroną regionu: od pojazdów szynowych, przez stolarkę budowlaną, po meble i przetwórstwo. Duzi producenci korzystają z lokalnych dostawców, którzy muszą nadążać za ich tempem.",
        "Sady w dolinie Dunajca i turystyka w uzdrowiskach Beskidu Sądeckiego tworzą drugą część lokalnej gospodarki.",
      ],
    },
    industries: [
      ["Producenci i ich dostawcy", "Zamówienia, zlecenia i dokumentacja w jednym przepływie."],
      ["Firmy rodzinne w fazie wzrostu", "Z arkuszy do bazy danych z automatycznymi raportami."],
      ["Sadownictwo", "Skup, przechowalnie i sprzedaż owoców."],
      ["Turystyka i uzdrowiska", "Rezerwacje, pytania gości i płatności."],
    ],
    processes: [
      ["Zamówienie do zlecenia", "Zamówienie klienta zamienia się w zlecenie z terminem, materiałami i odpowiedzialną osobą."],
      ["Jedna baza zamiast arkuszy", "Produkty, klienci i zamówienia w jednej bazie z historią zmian."],
      ["Raport dla zarządu", "Sprzedaż, produkcja i należności odświeżane codziennie bez sklejania plików."],
      ["Rezerwacje w uzdrowiskach", "Rezerwacja z potwierdzeniem, zaliczką i przypomnieniem przed przyjazdem."],
    ],
    faq: [
      ["Czy pomagacie sądeckim firmom rodzinnym przejść z arkuszy na bazę danych?", "Tak. Projektujemy bazę na waszych danych, przenosimy je i automatyzujemy to, co dziś robi się ręcznie."],
      ["Czy pracujecie z dostawcami dużych producentów z Sądecczyzny?", "Tak. Automatyzujemy zamówienia, harmonogramy i dokumentację, żeby dostawca nadążał za tempem odbiorcy."],
      ["Czy automatyzujecie pensjonaty w Krynicy i Muszynie?", "Tak. Rezerwacje z kilku portali, pytania gości, zaliczki i przypomnienia."],
      ["Czy musimy spotkać się w Nowym Sączu?", "Nie musimy. Pracujemy zdalnie, a warsztat na miejscu organizujemy, gdy pomaga."],
    ],
    services: ["automatyzacja-w-produkcji", "projektowanie-baz-danych", "porzadkowanie-i-strukturyzowanie-danych", "automatyzacja-raportow", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "wieliczka",
    name: "Wieliczka",
    nameGenitive: "Wieliczki",
    nameLocative: "Wieliczce",
    nearbyCitySlugs: ["krakow", "bochnia", "myslenice", "proszowice", "tarnow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Wieliczki: turystyka, hotele, usługi, logistyka i handel przy Krakowie. Konsultacja 30 min.",
    heroLead:
      "Pomagamy wielickim hotelom, firmom usługowym i handlowym obsłużyć więcej gości i klientów bez ręcznego pilnowania rezerwacji i faktur.",
    intro: [
      "Wieliczka słynie z kopalni soli wpisanej na listę UNESCO, którą co roku odwiedzają rzesze turystów. Miasto jest też przedmieściem Krakowa, z rosnącą liczbą mieszkańców, firm usługowych, handlu i logistyki przy autostradzie A4.",
      "Hotele, restauracje i firmy obsługujące turystów pracują z dużą liczbą rezerwacji i pytań, często w obcych językach.",
    ],
    localContext:
      "Wielickie firmy obsługują turystów z całego świata i mieszkańców przedmieść Krakowa. Obie grupy oczekują szybkiej odpowiedzi i rezerwacji online.",
    whyHere:
      "W Wieliczce automatyzacja pozwala obsłużyć więcej gości i klientów bez nadgodzin: rezerwacje, odpowiedzi i faktury działają same.",
    industries: [
      ["Hotele i gastronomia", "Rezerwacje z wielu portali, pytania gości w obcych językach i płatności."],
      ["Obsługa ruchu turystycznego", "Rezerwacje grup, przewozy i bilety dla zwiedzających kopalnię."],
      ["Usługi dla mieszkańców przedmieść", "Zapisy, przypomnienia o wizytach i płatności online."],
      ["Logistyka i handel przy A4", "Zamówienia, dostawy i dokumenty w firmach obsługujących Kraków."],
    ],
    processes: [
      ["Jeden kalendarz rezerwacji", "Rezerwacje z portali i strony w jednym miejscu, bez podwójnych rezerwacji."],
      ["Pytania gości", "Asystent AI odpowiada w kilku językach o dojazd, ceny i dostępność."],
      ["Rezerwacja grupy", "Zapytanie, oferta, zaliczka i lista uczestników w jednym przepływie."],
      ["Faktura po pobycie", "Faktura wysyłana automatycznie po wymeldowaniu lub usłudze."],
    ],
    faq: [
      ["Czy automatyzujecie hotele i pensjonaty w Wieliczce?", "Tak. Rezerwacje z kilku portali, pytania gości, zaliczki i faktury mogą działać bez udziału recepcji."],
      ["Czy chatbot obsłuży turystów odwiedzających kopalnię soli?", "Tak. Asystent AI odpowiada w kilku językach na podstawie waszych informacji i przekazuje trudniejsze pytania zespołowi."],
      ["Czy pracujecie z firmami obsługującymi grupy zwiedzających?", "Tak. Zapytania, oferty, zaliczki i listy uczestników w jednym przepływie."],
      ["Ile kosztuje wdrożenie w obiekcie z Wieliczki?", "Zależy od zakresu. Wycenę pierwszego etapu przygotowujemy po bezpłatnej konsultacji."],
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "myslenice",
    name: "Myślenice",
    nameGenitive: "Myślenic",
    nameLocative: "Myślenicach",
    nearbyCitySlugs: ["krakow", "wieliczka", "wadowice", "limanowa", "sucha-beskidzka"],
    metaDescription:
      "Automatyzacja procesów dla firm z Myślenic: produkcja, logistyka przy S7, handel, turystyka i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy myślenickim zakładom, firmom handlowym i usługowym uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Myślenice leżą przy drodze S7 z Krakowa do Zakopanego. Działa tu strefa aktywności gospodarczej z zakładami produkcyjnymi, a położenie przy głównej trasie na Podhale sprzyja handlowi, logistyce i usługom.",
      "Firmy z Myślenic obsługują klientów z Krakowa i całej południowej Małopolski. Zamówień przybywa, a zespoły biurowe są małe.",
    ],
    localContext:
      "Myślenickie firmy konkurują o pracowników z Krakowem. Każda zautomatyzowana czynność pozwala zespołowi obsłużyć więcej klientów.",
    whyHere:
      "W Myślenicach automatyzacja przejmuje przepisywanie zamówień i przygotowanie dokumentów.",
    industries: [
      ["Produkcja w strefie aktywności gospodarczej", "Zlecenia, materiały i wysyłki dla klientów z Krakowa i kraju."],
      ["Logistyka przy S7", "Awizacje, dokumenty przewozowe i statusy na trasie Kraków–Zakopane."],
      ["Handel", "Zamówienia, stany i faktury dla sklepów i klientów z południa Małopolski."],
      ["Turystyka i usługi", "Rezerwacje, zapisy i płatności dla gości i mieszkańców."],
    ],
    processes: [
      ["Przyjęcie zamówienia", "AI odczytuje zamówienie z maila i przygotowuje je w systemie do sprawdzenia."],
      ["Zlecenie produkcyjne", "Przyjęte zamówienie zamienia się w zlecenie z terminem i materiałami."],
      ["Dokumenty wysyłki", "Dokumenty przewozowe i faktura tworzone z danych zlecenia."],
      ["Raport dla właściciela", "Sprzedaż, produkcja i należności w jednym widoku."],
    ],
    faq: [
      ["Czy pracujecie z zakładami z Myślenic?", "Tak. Automatyzujemy zamówienia, zlecenia i dokumenty, na systemach, które firma już ma."],
      ["Czy firmy transportowe przy Zakopiance też mogą skorzystać?", "Tak. Zlecenia, dokumenty przewozowe i informowanie klientów o statusie dostawy."],
      ["Myślenicka firma konkuruje o pracowników z Krakowem. Jak pomoże automatyzacja?", "Zdejmuje z zespołu przepisywanie i dokumenty, więc ta sama liczba osób obsłuży więcej klientów."],
      ["Jaki jest pierwszy krok dla firmy z Myślenic?", "Krótka rozmowa online o tym, co zabiera zespołowi najwięcej czasu. Potem przegląd wybranego procesu i wycena."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-sprzedazy", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "chrzanow",
    name: "Chrzanów",
    nameGenitive: "Chrzanowa",
    nameLocative: "Chrzanowie",
    nearbyCitySlugs: ["olkusz", "oswiecim", "krakow", "katowice", "wadowice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Chrzanowa: przemysł i produkcja, logistyka przy A4, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy chrzanowskim zakładom i firmom logistycznym uporządkować zlecenia, dokumenty i raporty.",
    intro: [
      "Chrzanów ma długą tradycję przemysłową, od budowy lokomotyw po produkcję metalową. Położenie przy autostradzie A4, między Krakowem a Katowicami, przyciąga dziś także logistykę i nowe zakłady produkcyjne.",
      "Zakłady i ich dostawcy pracują dla odbiorców z obu aglomeracji. Terminy i dokumentacja są wymagające, a zespoły biurowe niewielkie.",
    ],
    localContext:
      "Chrzanowskie firmy konkurują o pracowników z Krakowem i Śląskiem. Automatyzacja pozwala obsłużyć więcej zleceń bez szukania kolejnych osób do biura.",
    whyHere:
      "W Chrzanowie automatyzacja porządkuje zlecenia i dokumenty, żeby produkcja nie czekała na biuro.",
    industries: [
      ["Przemysł metalowy i maszynowy", "Zlecenia, atesty i dokumenty wysyłkowe dla odbiorców ze Śląska i Krakowa."],
      ["Produkcja", "Zamówienia, materiały i terminy widoczne dla biura i hali."],
      ["Logistyka przy A4", "Awizacje, sloty i dokumenty przewozowe między Krakowem a Katowicami."],
      ["Handel i usługi", "Zamówienia, zapisy klientów i faktury dla mieszkańców powiatu."],
    ],
    processes: [
      ["Zamówienie do systemu", "Zamówienie z maila lub PDF odczytane i przygotowane do akceptacji."],
      ["Atesty i dokumenty", "Dokumenty do wysyłki składane z danych produkcji."],
      ["Awizacja dostawy", "Termin dostawy potwierdzany automatycznie z klientem i przewoźnikiem."],
      ["Faktura po wysyłce", "Wydanie towaru uruchamia fakturę i powiadomienie."],
    ],
    faq: [
      ["Czy pracujecie z zakładami metalowymi z Chrzanowa?", "Tak. Automatyzujemy zamówienia, atesty i dokumenty wysyłkowe, na narzędziach, których już używacie."],
      ["Czy firmy logistyczne przy A4 pod Chrzanowem też z was korzystają?", "Tak. Awizacje, statusy dostaw i dokumenty przewozowe to częste wdrożenia."],
      ["Obsługujemy klientów z Krakowa i Śląska. Jak nadążyć z dokumentami?", "Dokumenty i statusy tworzą się z danych zlecenia, więc klient z każdej aglomeracji dostaje je od razu."],
      ["Ile kosztuje pierwszy etap w Chrzanowie?", "Wycenę przygotowujemy po bezpłatnej konsultacji, zanim zaczniemy pracę."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "olkusz",
    name: "Olkusz",
    nameGenitive: "Olkusza",
    nameLocative: "Olkuszu",
    nearbyCitySlugs: ["chrzanow", "miechow", "krakow", "katowice", "czestochowa"],
    metaDescription:
      "Automatyzacja procesów dla firm z Olkusza: przemysł metalowy, górnictwo, produkcja, handel i turystyka na Jurze. Konsultacja 30 min.",
    heroLead:
      "Pomagamy olkuskim zakładom i firmom usługowym zamienić ręczne zlecenia i dokumenty w przepływy, które działają same.",
    intro: [
      "Olkusz, dawne miasto srebra, przez stulecia żył z wydobycia rud cynku i ołowiu. Dziś lokalną gospodarkę tworzą przemysł metalowy, produkcja, handel i turystyka na Jurze Krakowsko-Częstochowskiej.",
      "Zmiany w górnictwie sprawiają, że wiele lokalnych firm szuka nowych klientów. Porządek w ofertach i dokumentach pomaga w tej zmianie.",
    ],
    localContext:
      "Olkuskie firmy pracują dla odbiorców z Krakowa i Śląska. Szybka oferta i sprawne rozliczenia pomagają zdobyć nowe zlecenia.",
    whyHere:
      "W Olkuszu automatyzacja przyspiesza oferty i rozliczenia, co pomaga firmom zdobywać nowych klientów.",
    industries: [
      ["Przemysł metalowy", "Zlecenia, atesty i wysyłki dla odbiorców z Krakowa i Śląska."],
      ["Usługi dla przemysłu", "Karty pracy, protokoły i rozliczenia zleceń."],
      ["Handel", "Zamówienia od sklepów, stany i faktury."],
      ["Turystyka na Jurze", "Rezerwacje noclegów i atrakcji, zaliczki i pytania gości."],
    ],
    processes: [
      ["Zapytanie ofertowe", "Zapytanie od nowego klienta zamienia się w ofertę z szablonu."],
      ["Zlecenie z oferty", "Zaakceptowana oferta tworzy zlecenie z terminem."],
      ["Rozliczenie", "Zakończone zlecenie uruchamia fakturę i zestawienie dla klienta."],
      ["Rezerwacje na Jurze", "Rezerwacja z potwierdzeniem, zaliczką i przypomnieniem."],
    ],
    faq: [
      ["Olkuskie firmy szukają nowych klientów po zmianach w górnictwie. Jak pomagacie?", "Porządkujemy sprzedaż: zapytania, oferty i przypomnienia, żeby żaden kontakt nie przepadł, a oferta wychodziła szybciej."],
      ["Czy pracujecie z zakładami metalowymi z Olkusza?", "Tak. Zlecenia, atesty i dokumenty wysyłkowe."],
      ["Czy automatyzujecie obiekty turystyczne na Jurze?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."],
      ["Czy współpraca z Olkusza może być zdalna?", "Tak. Cały projekt może odbyć się zdalnie."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "oswiecim",
    name: "Oświęcim",
    nameGenitive: "Oświęcimia",
    nameLocative: "Oświęcimiu",
    nearbyCitySlugs: ["chrzanow", "wadowice", "krakow", "bielsko-biala", "katowice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Oświęcimia: przemysł chemiczny, produkcja, turystyka, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy oświęcimskim podwykonawcom, zakładom i firmom usługowym uporządkować zlecenia, dokumenty i rezerwacje.",
    intro: [
      "Oświęcim to miasto dużych zakładów chemicznych, a jednocześnie miejsce, które co roku odwiedzają rzesze osób z całego świata ze względu na Miejsce Pamięci Auschwitz-Birkenau. Lokalną gospodarkę tworzą przemysł, usługi dla przemysłu, handel oraz obsługa ruchu turystycznego.",
      "Firmy pracujące dla zakładów chemicznych działają według ścisłych procedur, a firmy obsługujące odwiedzających pracują z grupami i rezerwacjami z wyprzedzeniem.",
    ],
    localContext:
      "Oświęcimskie firmy usługowe pracują dla dużego odbiorcy przemysłowego albo dla grup odwiedzających z wielu krajów. W obu przypadkach dokumentów i komunikacji jest dużo.",
    whyHere:
      "W Oświęcimiu automatyzacja porządkuje rozliczenia prac i rezerwacje grupowe, żeby zespół mógł skupić się na realizacji.",
    industries: [
      ["Usługi dla przemysłu chemicznego", "Karty pracy, protokoły i rozliczenia zleceń dla dużych zakładów."],
      ["Produkcja", "Zlecenia, materiały i wysyłki dla odbiorców z kraju."],
      ["Obsługa grup odwiedzających", "Rezerwacje, noclegi, przewozy i płatności dla grup z wielu krajów."],
      ["Handel i usługi", "Zamówienia, zapisy klientów i faktury."],
    ],
    processes: [
      ["Karta pracy", "Dane z prac trafiają do biura bez papieru."],
      ["Protokół i faktura", "Kompletny protokół uruchamia fakturę."],
      ["Rezerwacje grupowe", "Zapytanie, oferta, zaliczka i lista uczestników w jednym przepływie."],
      ["Uprawnienia", "Przypomnienia o ważności szkoleń i badań."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami zakładów chemicznych w Oświęcimiu?", "Tak. Automatyzujemy karty pracy, protokoły, rozliczenia i pilnowanie uprawnień pracowników."],
      ["Czy automatyzujecie obsługę grup odwiedzających Oświęcim?", "Tak. Zapytania, oferty, zaliczki, listy uczestników i komunikację z organizatorami w kilku językach."],
      ["Czy asystent AI odpowie organizatorom z zagranicy?", "Tak. Odpowiada w kilku językach na podstawie waszych informacji, a trudniejsze pytania przekazuje zespołowi."],
      ["Czy małą firmę z Oświęcimia stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność oceniamy razem."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-produkcji", "automatyzacja-dla-hr", "automatyzacja-w-obsludze-klienta"],
  }),

  town({
    ...base,
    slug: "wadowice",
    name: "Wadowice",
    nameGenitive: "Wadowic",
    nameLocative: "Wadowicach",
    nearbyCitySlugs: ["oswiecim", "myslenice", "sucha-beskidzka", "krakow", "bielsko-biala"],
    metaDescription:
      "Automatyzacja procesów dla firm z Wadowic: turystyka pielgrzymkowa, produkcja spożywcza, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy wadowickim firmom turystycznym, produkcyjnym i usługowym obsłużyć rezerwacje, zamówienia i faktury bez ręcznej pracy.",
    intro: [
      "Wadowice, miasto rodzinne Jana Pawła II, przyciągają pielgrzymów i turystów z całego świata. Lokalną gospodarkę tworzą turystyka, gastronomia, produkcja spożywcza, handel i usługi.",
      "Firmy obsługujące turystów pracują z grupami i rezerwacjami, a producenci żywności sprzedają w regionie i przez internet.",
    ],
    localContext:
      "Wadowickie firmy obsługują grupy pielgrzymkowe, turystów indywidualnych i klientów lokalnych. Rezerwacje i zamówienia przychodzą z wielu kanałów.",
    whyHere:
      "W Wadowicach automatyzacja zbiera rezerwacje i zamówienia w jednym miejscu i przyspiesza obsługę.",
    industries: [
      ["Turystyka pielgrzymkowa", "Rezerwacje grup, noclegi, przewodnicy i płatności."],
      ["Gastronomia", "Rezerwacje stolików, zamówienia grupowe i faktury."],
      ["Produkcja spożywcza", "Zamówienia od sklepów i klientów internetowych, partie i wysyłki."],
      ["Handel i usługi", "Zamówienia, zapisy i płatności dla mieszkańców."],
    ],
    processes: [
      ["Rezerwacja grupy pielgrzymkowej", "Zapytanie, oferta, zaliczka i lista uczestników w jednym przepływie."],
      ["Zamówienia grupowe w gastronomii", "Menu, liczba osób i godzina potwierdzane automatycznie."],
      ["Sprzedaż internetowa", "Zamówienie ze sklepu uruchamia etykietę i powiadomienie."],
      ["Faktury", "Faktura tworzona po usłudze lub wysyłce."],
    ],
    faq: [
      ["Czy automatyzujecie obsługę grup pielgrzymkowych w Wadowicach?", "Tak. Zapytania, oferty, zaliczki, listy uczestników i przypomnienia mogą działać w jednym przepływie."],
      ["Czy pracujecie z producentami żywności z Wadowic?", "Tak. Zamówienia od sklepów i klientów internetowych, partie i wysyłki."],
      ["Czy restauracje mogą automatyzować zamówienia grupowe?", "Tak. Formularz z menu i liczbą osób, potwierdzenie i faktura działają bez ręcznej korespondencji."],
      ["Czy spotkania muszą odbywać się w Wadowicach?", "Nie. Pracujemy zdalnie, a na miejsce przyjeżdżamy, gdy warsztat przyspiesza projekt."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-obsludze-klienta", "automatyzacja-sprzedazy", "automatyzacja-w-produkcji"],
  }),

  town({
    ...base,
    slug: "sucha-beskidzka",
    name: "Sucha Beskidzka",
    nameGenitive: "Suchej Beskidzkiej",
    nameLocative: "Suchej Beskidzkiej",
    nearbyCitySlugs: ["wadowice", "myslenice", "nowy-targ", "zakopane", "bielsko-biala"],
    metaDescription:
      "Automatyzacja procesów dla firm z Suchej Beskidzkiej: przemysł drzewny i meblarski, turystyka w Beskidach, handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Suchej Beskidzkiej uporządkować zamówienia, produkcję i rezerwacje.",
    intro: [
      "Sucha Beskidzka leży w Beskidzie Makowskim, u podnóża Babiej Góry. Lokalną gospodarkę tworzą przemysł drzewny i meblarski, handel oraz turystyka, a renesansowy zamek przyciąga zwiedzających.",
      "Zakłady drzewne pracują na zamówieniach z określonymi wymiarami i terminami. Obiekty turystyczne obsługują gości w dwóch sezonach.",
    ],
    localContext:
      "Firmy z powiatu suskiego często łączą produkcję z usługami turystycznymi. Mały zespół obsługuje różne rodzaje klientów.",
    whyHere:
      "W Suchej Beskidzkiej automatyzacja porządkuje zamówienia i rezerwacje w jednym miejscu.",
    industries: [
      ["Przemysł drzewny i meblarski", "Zamówienia z wymiarami, terminy produkcji i wysyłki."],
      ["Turystyka pod Babią Górą", "Rezerwacje noclegów, zaliczki i pytania gości."],
      ["Handel", "Zamówienia od sklepów i klientów, stany i faktury."],
      ["Usługi", "Zapisy, przypomnienia i rozliczenia."],
    ],
    processes: [
      ["Zamówienia na wymiar", "Formularz z wymiarami zamienia się w zlecenie."],
      ["Status zamówienia", "Klient dostaje informację o terminie."],
      ["Rezerwacje", "Rezerwacja z potwierdzeniem i zaliczką."],
      ["Faktury", "Faktura tworzona automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z zakładami meblarskimi z Suchej Beskidzkiej?", "Tak. Zamówienia z wymiarami, zlecenia produkcyjne i wysyłki."],
      ["Czy automatyzujecie pensjonaty pod Babią Górą?", "Tak. Rezerwacje z kilku portali, zaliczki i odpowiedzi na pytania gości."],
      ["Łączymy produkcję i turystykę. Czy da się to obsłużyć w jednym miejscu?", "Tak. Zamówienia i rezerwacje mogą trafiać do jednego systemu z osobnymi widokami dla każdej działalności."],
      ["Czy małą firmę z Suchej Beskidzkiej stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność oceniamy razem."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "bochnia",
    name: "Bochnia",
    nameGenitive: "Bochni",
    nameLocative: "Bochni",
    nearbyCitySlugs: ["wieliczka", "brzesko", "krakow", "tarnow", "limanowa"],
    metaDescription:
      "Automatyzacja procesów dla firm z Bochni: logistyka i produkcja przy A4, turystyka, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy bocheńskim firmom logistycznym, produkcyjnym i turystycznym uporządkować zlecenia, rezerwacje i dokumenty.",
    intro: [
      "Bochnia ma najstarszą w Polsce kopalnię soli, wpisaną na listę UNESCO. Położenie przy autostradzie A4, niedaleko Krakowa, przyciąga dziś zakłady produkcyjne i firmy logistyczne.",
      "Lokalne firmy obsługują turystów, klientów z Krakowa i odbiorców z całej Polski. Każda z tych grup wymaga innego rodzaju obsługi.",
    ],
    localContext:
      "Bocheńskie firmy konkurują o pracowników z Krakowem. Automatyzacja pozwala im obsłużyć więcej zleceń tym samym zespołem.",
    whyHere:
      "W Bochni automatyzacja przejmuje przepisywanie zleceń, dokumenty i rezerwacje.",
    industries: [
      ["Logistyka przy A4", "Awizacje, statusy dostaw i dokumenty przewozowe w magazynach pod Krakowem."],
      ["Produkcja", "Zlecenia, materiały i wysyłki dla odbiorców z kraju."],
      ["Turystyka", "Rezerwacje grup zwiedzających kopalnię soli, noclegi i płatności."],
      ["Handel i usługi", "Zamówienia, zapisy klientów i faktury."],
    ],
    processes: [
      ["Zlecenie z maila", "Zlecenie odczytane automatycznie trafia do planu z terminem."],
      ["Awizacja", "Termin dostawy potwierdzany automatycznie z klientem."],
      ["Rezerwacja grupy", "Zapytanie, oferta i zaliczka w jednym przepływie."],
      ["Faktura", "Faktura tworzona po realizacji zlecenia lub usługi."],
    ],
    faq: [
      ["Czy pracujecie z firmami logistycznymi z Bochni?", "Tak. Awizacje, statusy dostaw i dokumenty przewozowe to częste wdrożenia przy A4."],
      ["Czy automatyzujecie obsługę grup zwiedzających?", "Tak. Oferty, zaliczki, potwierdzenia i listy uczestników."],
      ["Bocheńska firma konkuruje o pracowników z Krakowem. Co zrobić?", "Zautomatyzować przepisywanie danych i dokumenty, żeby ten sam zespół obsłużył więcej zleceń."],
      ["Co firma z Bochni powinna przygotować przed pierwszą rozmową?", "Nic szczególnego. Wystarczy opowiedzieć, jak dziś wygląda praca, i pokazać przykładowe dokumenty lub arkusze."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "brzesko",
    name: "Brzesko",
    nameGenitive: "Brzeska",
    nameLocative: "Brzesku",
    nearbyCitySlugs: ["bochnia", "tarnow", "dabrowa-tarnowska", "krakow", "nowy-sacz"],
    metaDescription:
      "Automatyzacja procesów dla firm z Brzeska: browarnictwo i produkcja spożywcza, logistyka przy A4, handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy brzeskim producentom, firmom logistycznym i handlowym uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Brzesko jest znane z browaru z długą tradycją. Położenie przy autostradzie A4 między Krakowem a Tarnowem sprzyja produkcji spożywczej, logistyce i handlowi.",
      "Producenci i dystrybutorzy z Brzeska obsługują klientów z całej Polski. Zamówienia, dostawy i dokumenty wymagają sprawnej obsługi.",
    ],
    localContext:
      "Brzeskie firmy często pracują jako dostawcy lub przewoźnicy dla większych producentów. Terminy i dokumentacja muszą się zgadzać.",
    whyHere:
      "W Brzesku automatyzacja porządkuje zamówienia i dokumenty, żeby nic nie czekało na biuro.",
    industries: [
      ["Browarnictwo i produkcja spożywcza", "Zamówienia hurtowe, partie i wysyłki do sklepów w całej Polsce."],
      ["Logistyka przy A4", "Awizacje, dokumenty przewozowe i statusy dostaw."],
      ["Handel", "Zamówienia od sklepów, stany i faktury."],
      ["Usługi", "Zapisy, terminy i rozliczenia z klientami."],
    ],
    processes: [
      ["Zamówienie hurtowe", "Zamówienie od odbiorcy trafia do planu wysyłek z terminem."],
      ["Awizacja", "Termin dostawy potwierdzany automatycznie."],
      ["Dokumenty przewozowe", "Dokumenty tworzone z danych zlecenia."],
      ["Faktura po wysyłce", "Wydanie towaru uruchamia fakturę."],
    ],
    faq: [
      ["Czy pracujecie z producentami żywności i napojów z Brzeska?", "Tak. Zamówienia hurtowe, partie i wysyłki."],
      ["Czy pracujecie z przewoźnikami przy A4?", "Tak. Zlecenia, dokumenty przewozowe i rozliczenia kursów."],
      ["Czy łączycie się z systemami dużych producentów?", "Tak, jeśli pozwalają na wymianę danych. Sprawdzamy to na konsultacji."],
      ["Ile kosztuje wdrożenie w Brzesku?", "Wycenę pierwszego etapu dostajecie po bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "dabrowa-tarnowska",
    name: "Dąbrowa Tarnowska",
    nameGenitive: "Dąbrowy Tarnowskiej",
    nameLocative: "Dąbrowie Tarnowskiej",
    nearbyCitySlugs: ["tarnow", "brzesko", "rzeszow", "kielce", "bochnia"],
    metaDescription:
      "Automatyzacja procesów dla firm z Dąbrowy Tarnowskiej: rolnictwo, przetwórstwo, produkcja, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Dąbrowy Tarnowskiej zamienić ręczne zamówienia, rozliczenia i faktury w proste przepływy.",
    intro: [
      "Dąbrowa Tarnowska leży na północ od Tarnowa, w rolniczym Powiślu Dąbrowskim. Lokalną gospodarkę tworzą rolnictwo, przetwórstwo, mniejsze zakłady produkcyjne, handel i usługi.",
      "W małych firmach jedna lub dwie osoby prowadzą sprzedaż, zamówienia i rozliczenia. Każda zautomatyzowana czynność od razu odciąża.",
    ],
    localContext:
      "Dąbrowskie firmy współpracują z odbiorcami z Tarnowa i Krakowa. Zamówienia i dokumenty przychodzą w różnych formach.",
    whyHere:
      "W Dąbrowie Tarnowskiej automatyzacja zbiera zamówienia w jednym miejscu i przygotowuje dokumenty.",
    industries: [
      ["Rolnictwo i przetwórstwo", "Dostawy od gospodarstw, partie i rozliczenia z dostawcami."],
      ["Produkcja", "Zlecenia i wysyłki dla odbiorców z Tarnowa i Krakowa."],
      ["Handel", "Zamówienia z telefonu i maila, stany i faktury."],
      ["Usługi", "Zapisy, przypomnienia i płatności."],
    ],
    processes: [
      ["Zbieranie zamówień", "Zamówienia z różnych kanałów w jednej liście."],
      ["Faktura", "Faktura tworzona z danych zamówienia bez przepisywania."],
      ["Przypomnienia o płatnościach", "Klient dostaje przypomnienie przed terminem."],
      ["Podsumowanie miesiąca", "Sprzedaż i koszty w jednym zestawieniu."],
    ],
    faq: [
      ["Czy automatyzacja ma sens w małej firmie z Dąbrowy Tarnowskiej?", "Tak. W małych zespołach każda zautomatyzowana czynność daje szybko odczuwalną ulgę."],
      ["Czy automatyzujecie firmy rolne i przetwórcze?", "Tak. Dostawy, rozliczenia z dostawcami i sprzedaż."],
      ["Czy firma z Dąbrowy Tarnowskiej musi zmieniać programy?", "Zwykle nie. Łączymy narzędzia, które już macie."],
      ["Czy firma z Dąbrowy Tarnowskiej może zacząć bez spotkania na żywo?", "Tak. Pierwsza rozmowa i cały przegląd procesu odbywają się online. Wystarczy komputer i kilka przykładowych dokumentów."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "automatyzacja-w-produkcji", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "nowy-targ",
    name: "Nowy Targ",
    nameGenitive: "Nowego Targu",
    nameLocative: "Nowym Targu",
    nearbyCitySlugs: ["zakopane", "limanowa", "sucha-beskidzka", "nowy-sacz", "krakow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Nowego Targu: handel, produkcja obuwia i odzieży, turystyka na Podhalu, usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy nowotarskim firmom handlowym, produkcyjnym i turystycznym uporządkować zamówienia, sprzedaż internetową i rezerwacje.",
    intro: [
      "Nowy Targ jest stolicą Podhala i jednym z najważniejszych ośrodków handlowych regionu, znanym z targu i tradycji produkcji obuwia oraz wyrobów skórzanych. Działają tu producenci, hurtownie, sklepy internetowe i firmy turystyczne.",
      "Wiele nowotarskich firm sprzedaje dziś przez internet w całej Polsce i za granicą. Zamówienia z kilku kanałów, wysyłki i zwroty wymagają dużo pracy.",
    ],
    localContext:
      "Nowotarskie firmy handlowe i produkcyjne to często firmy rodzinne, które rozwinęły sprzedaż internetową bez zmiany sposobu pracy w biurze.",
    whyHere:
      "W Nowym Targu automatyzacja łączy sklep, magazyn i wysyłki, żeby sprzedaż internetowa nie zabierała całego dnia.",
    industries: [
      ["Obuwie i wyroby skórzane", "Zamówienia z rozmiarami, stany i wysyłki do klientów i sklepów."],
      ["Sprzedaż internetowa", "Zamówienia z wielu kanałów, zwroty i obsługa klientów."],
      ["Turystyka na Podhalu", "Rezerwacje noclegów, pytania gości i płatności."],
      ["Handel hurtowy", "Zamówienia od sklepów, stany i faktury."],
    ],
    processes: [
      ["Zamówienia z wielu kanałów", "Zamówienia ze sklepu i platform w jednym miejscu ze wspólnym stanem."],
      ["Wysyłki i zwroty", "Etykieta, powiadomienie i korekta faktury bez ręcznej pracy."],
      ["Pytania klientów", "Asystent AI odpowiada o rozmiary, wysyłkę i zwroty."],
      ["Rezerwacje", "Rezerwacja z potwierdzeniem i zaliczką."],
    ],
    faq: [
      ["Czy łączycie sklep internetowy z magazynem?", "Tak. Spinamy sklep, platformy, magazyn i kurierów."],
      ["Czy automatyzujecie obsługę zwrotów?", "Tak. Formularz, etykieta i korekta mogą działać automatycznie."],
      ["Czy przyjeżdżacie do firm w Nowym Targu?", "Pracujemy zdalnie, a na miejsce przyjeżdżamy, gdy warsztat z zespołem przyspiesza projekt."],
      ["Czy małą firmę z Nowego Targu stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność oceniamy razem."],
    ],
    services: ["automatyzacja-sprzedazy", "integracje-systemow", "automatyzacja-w-obsludze-klienta", "chatbot-ai-dla-firmy"],
  }),

  town({
    ...base,
    slug: "zakopane",
    name: "Zakopane",
    nameGenitive: "Zakopanego",
    nameLocative: "Zakopanem",
    nearbyCitySlugs: ["nowy-targ", "limanowa", "sucha-beskidzka", "nowy-sacz", "krakow"],
    metaDescription:
      "Automatyzacja dla firm z Zakopanego: hotele, pensjonaty, apartamenty, wypożyczalnie i gastronomia. Rezerwacje i obsługa gości bez nadgodzin.",
    heroLead:
      "Pomagamy zakopiańskim hotelom, pensjonatom i firmom turystycznym obsłużyć sezon bez nadgodzin: rezerwacje, pytania gości i płatności działają same.",
    intro: [
      "Zakopane jest zimową stolicą Polski i jednym z najczęściej odwiedzanych miast w kraju. Lokalna gospodarka opiera się na turystyce: hotelach, pensjonatach, apartamentach, wypożyczalniach sprzętu, szkołach narciarskich i gastronomii.",
      "W sezonie obiekty obsługują tyle rezerwacji i pytań, że recepcja i właściciele pracują od rana do nocy. Poza sezonem trudno uzasadnić dodatkowe etaty.",
    ],
    localContext:
      "Rezerwacje przychodzą z kilku portali, przez stronę, telefonicznie i przez komunikatory. Goście pytają o te same rzeczy: dojazd, parking, godziny zameldowania, dostępność.",
    whyHere:
      "W Zakopanem automatyzacja przejmuje odpowiedzi na powtarzalne pytania, potwierdzenia i płatności, żeby zespół mógł zająć się gośćmi.",
    industries: [
      ["Hotele i pensjonaty", "Rezerwacje z wielu portali w jednym kalendarzu."],
      ["Apartamenty na wynajem", "Zameldowania, kody dostępu i grafik sprzątania."],
      ["Wypożyczalnie i szkoły narciarskie", "Rezerwacje sprzętu i zajęć z płatnością online."],
      ["Gastronomia", "Rezerwacje stolików i zamówienia grupowe."],
    ],
    processes: [
      ["Pytania gości", "Asystent AI odpowiada o dostępność, dojazd i zasady, także po angielsku."],
      ["Rezerwacja i zaliczka", "Rezerwacja uruchamia potwierdzenie, link do płatności i przypomnienie."],
      ["Zameldowanie", "Gość dostaje instrukcje i kod dostępu automatycznie przed przyjazdem."],
      ["Sprzątanie", "Wymeldowanie uruchamia zadanie dla ekipy sprzątającej."],
    ],
    faq: [
      ["Czy łączycie rezerwacje z kilku portali?", "Tak. Rezerwacje z portali i strony trafiają do jednego kalendarza, co zmniejsza ryzyko podwójnej rezerwacji."],
      ["Czy chatbot odpowie gościom w nocy?", "Tak. Asystent AI odpowiada o każdej porze na podstawie waszych informacji, a trudne pytania zostawia zespołowi."],
      ["Czy automatyzujecie apartamenty bez recepcji?", "Tak. Instrukcje, kody dostępu i grafik sprzątania mogą działać automatycznie."],
      ["Kiedy najlepiej zacząć?", "Przed sezonem, żeby wszystko działało, zanim zaczną się duże obłożenia."],
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "limanowa",
    name: "Limanowa",
    nameGenitive: "Limanowej",
    nameLocative: "Limanowej",
    nearbyCitySlugs: ["nowy-sacz", "nowy-targ", "bochnia", "myslenice", "gorlice"],
    metaDescription:
      "Automatyzacja procesów dla firm z Limanowej: sadownictwo, przemysł drzewny, produkcja, handel i turystyka. Konsultacja 30 min.",
    heroLead:
      "Pomagamy limanowskim sadownikom, zakładom i firmom handlowym uporządkować skup, zamówienia i rozliczenia.",
    intro: [
      "Limanowa leży w Beskidzie Wyspowym, w regionie znanym z sadów. Lokalną gospodarkę tworzą sadownictwo, przemysł drzewny, produkcja, handel i turystyka.",
      "Sadownicy i firmy handlowe pracują w sezonowym rytmie, a zakłady produkcyjne obsługują klientów z całej Polski.",
    ],
    localContext:
      "Limanowskie firmy często łączą kilka rodzajów działalności. Mały zespół prowadzi skup, sprzedaż, produkcję i rozliczenia jednocześnie.",
    whyHere:
      "W Limanowej automatyzacja porządkuje skup, zamówienia i rozliczenia, żeby sezon nie oznaczał chaosu.",
    industries: [
      ["Sadownictwo", "Skup, przechowywanie i sprzedaż owoców z Beskidu Wyspowego."],
      ["Przemysł drzewny", "Zamówienia z wymiarami, terminy produkcji i wysyłki."],
      ["Produkcja", "Zlecenia i wysyłki dla odbiorców z kraju."],
      ["Turystyka", "Rezerwacje noclegów, zaliczki i pytania gości."],
    ],
    processes: [
      ["Przyjęcie owoców", "Dostawa zapisana raz, z ilością i jakością, trafia do rozliczeń."],
      ["Rozliczenie sadownika", "Zestawienie dostaw i kwot do zapłaty tworzone automatycznie."],
      ["Zamówienia odbiorców", "Zamówienia w jednej liście ze statusem i terminem."],
      ["Faktura sprzedaży", "Faktura tworzona z danych wydania."],
    ],
    faq: [
      ["Czy pracujecie ze skupami owoców z okolic Limanowej?", "Tak. Przyjęcie dostaw, rozliczenia z sadownikami i sprzedaż do odbiorców."],
      ["Czy pracujecie z zakładami drzewnymi?", "Tak. Zamówienia z wymiarami, zlecenia i wysyłki."],
      ["Kiedy firma z Limanowej powinna zacząć?", "Przed sezonem zbiorów, żeby zespół zdążył poznać nowy sposób pracy."],
      ["Czy wdrożenie odciągnie zespół z Limanowej od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-w-produkcji", "porzadkowanie-i-strukturyzowanie-danych", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "gorlice",
    name: "Gorlice",
    nameGenitive: "Gorlic",
    nameLocative: "Gorlicach",
    nearbyCitySlugs: ["nowy-sacz", "limanowa", "tarnow", "rzeszow", "krakow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Gorlic: przemysł metalowy i naftowy, produkcja, handel i turystyka w Beskidzie Niskim. Konsultacja 30 min.",
    heroLead:
      "Pomagamy gorlickim zakładom i firmom usługowym zamienić ręczne zlecenia, dokumenty i rozliczenia w przepływy, które działają same.",
    intro: [
      "Gorlice to jedno z miejsc narodzin przemysłu naftowego na świecie. Dziś lokalną gospodarkę tworzą przemysł metalowy, produkcja, handel i turystyka w Beskidzie Niskim.",
      "Zakłady produkcyjne i ich dostawcy pracują dla odbiorców z całej Polski. Dokumentacja, atesty i terminy wymagają porządku.",
    ],
    localContext:
      "Gorlickie firmy konkurują o klientów z dużymi ośrodkami. Szybka oferta i sprawna obsługa pomagają wygrać zlecenia.",
    whyHere:
      "W Gorlicach automatyzacja przyspiesza oferty i rozliczenia, a zespół zyskuje czas na pracę z klientem.",
    industries: [
      ["Przemysł metalowy", "Zlecenia, atesty i wysyłki dla odbiorców z kraju."],
      ["Produkcja", "Zamówienia, materiały i terminy widoczne dla biura."],
      ["Handel", "Zamówienia od sklepów, stany i faktury."],
      ["Turystyka w Beskidzie Niskim", "Rezerwacje noclegów, zaliczki i pytania gości."],
    ],
    processes: [
      ["Oferty", "Zapytanie zamienia się w ofertę z szablonu."],
      ["Zlecenia", "Zaakceptowana oferta zamienia się w zlecenie."],
      ["Atesty", "Dokumenty do wysyłki z danych produkcji."],
      ["Faktury", "Wysyłka uruchamia fakturę."],
    ],
    faq: [
      ["Czy pracujecie z zakładami metalowymi z Gorlic?", "Tak. Zlecenia, atesty i dokumenty wysyłkowe."],
      ["Gorlickie firmy walczą o klientów z dużymi ośrodkami. Jak pomagacie?", "Przyspieszamy ofertowanie i obsługę zamówień, żeby odpowiedź dla klienta wychodziła szybciej niż u konkurencji."],
      ["Czy automatyzujecie obiekty turystyczne w Beskidzie Niskim?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."],
      ["Jak wygląda współpraca na odległość z firmą z Gorlic?", "Procesy poznajemy na wideorozmowach i przykładach dokumentów, a wdrożenie testujemy razem z zespołem na prawdziwych danych."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "proszowice",
    name: "Proszowice",
    nameGenitive: "Proszowic",
    nameLocative: "Proszowicach",
    nearbyCitySlugs: ["krakow", "wieliczka", "miechow", "bochnia", "kielce"],
    metaDescription:
      "Automatyzacja procesów dla firm z Proszowic: rolnictwo i uprawa warzyw, przetwórstwo, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy firmom z Proszowic uporządkować dostawy, sprzedaż i rozliczenia bez ręcznego przepisywania.",
    intro: [
      "Proszowice leżą na urodzajnych ziemiach na północny wschód od Krakowa. Powiat słynie z upraw warzyw, a lokalną gospodarkę tworzą gospodarstwa, przetwórnie, handel i usługi.",
      "Producenci i handlowcy sprzedają warzywa do Krakowa, sieci handlowych i przetwórni. Dostawy i rozliczenia zajmują dużo czasu.",
    ],
    localContext:
      "Proszowickie firmy handlowe skupują od wielu gospodarstw i sprzedają do wielu odbiorców. Ręczne rozliczenia łatwo prowadzą do pomyłek.",
    whyHere:
      "W Proszowicach automatyzacja łączy skup, sprzedaż i rozliczenia w jeden przepływ danych.",
    industries: [
      ["Uprawa warzyw", "Dostawy od gospodarstw, sprzedaż do sieci i przetwórni, rozliczenia."],
      ["Przetwórstwo", "Surowiec, partie i wysyłki do odbiorców."],
      ["Handel hurtowy", "Zamówienia od odbiorców z Krakowa, stany i faktury."],
      ["Usługi", "Zapisy, przypomnienia i płatności."],
    ],
    processes: [
      ["Przyjęcie dostawy", "Ilość i jakość zapisane raz trafiają do rozliczeń."],
      ["Zamówienia odbiorców", "Zamówienia sieci i hurtowni w jednej liście."],
      ["Rozliczenie dostawcy", "Zestawienia dla gospodarstw tworzone automatycznie."],
      ["Faktura sprzedaży", "Faktura z danych wydania."],
    ],
    faq: [
      ["Czy pracujecie z firmami handlującymi warzywami z Proszowic?", "Tak. Skup, sprzedaż do sieci i rozliczenia z gospodarstwami."],
      ["Czy automatyzacja ma sens w małej firmie z Proszowic?", "Tak. W małych zespołach każda zautomatyzowana czynność daje szybko odczuwalną ulgę."],
      ["Czy współpraca z Proszowic może być zdalna?", "Tak, cała współpraca może odbywać się zdalnie."],
      ["Kiedy zacząć?", "Najlepiej przed sezonem."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "automatyzacja-dla-logistyki", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "miechow",
    name: "Miechów",
    nameGenitive: "Miechowa",
    nameLocative: "Miechowie",
    nearbyCitySlugs: ["olkusz", "proszowice", "krakow", "kielce", "czestochowa"],
    metaDescription:
      "Automatyzacja procesów dla firm z Miechowa: rolnictwo, przetwórstwo spożywcze, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy miechowskim firmom zamienić ręczne zamówienia, dostawy i faktury w proste przepływy.",
    intro: [
      "Miechów leży na północy Małopolski, przy drodze z Krakowa do Kielc. Powiat ma rolniczy charakter, a lokalną gospodarkę tworzą przetwórstwo spożywcze, handel i usługi.",
      "W niewielkich firmach z Miechowa zespół jest mały, a obowiązków dużo. Automatyzacja zdejmuje z niego powtarzalną część pracy.",
    ],
    localContext:
      "Miechowskie firmy obsługują gospodarstwa i odbiorców z Krakowa i Kielc. Zamówienia przychodzą telefonicznie i mailowo.",
    whyHere:
      "W Miechowie automatyzacja zbiera zamówienia w jednym miejscu i pilnuje płatności.",
    industries: [
      ["Przetwórstwo spożywcze", "Dostawy od gospodarstw, partie i dokumenty jakości."],
      ["Handel rolny", "Zamówienia środków produkcji i odroczone płatności."],
      ["Produkcja", "Zlecenia i wysyłki dla odbiorców z Krakowa i Kielc."],
      ["Usługi", "Zapisy, przypomnienia i płatności."],
    ],
    processes: [
      ["Zamówienia telefoniczne", "Zamówienie zapisane w formularzu trafia do magazynu i faktury."],
      ["Przyjęcie dostawy", "Dostawa zapisana raz, widoczna w rozliczeniach."],
      ["Faktura", "Faktura tworzona z danych zamówienia."],
      ["Odroczone płatności", "Przypomnienia o płatnościach wysyłane przed terminem."],
    ],
    faq: [
      ["Czy pracujecie z firmami z Miechowa?", "Tak. Pracujemy zdalnie z firmami z całej Małopolski."],
      ["Czy automatyzujecie handel z rolnikami i odroczone płatności?", "Tak. Zamówienia, dostawy i przypomnienia o płatnościach."],
      ["Czy miechowska firma może zacząć od jednego procesu?", "Tak. Tak zaczynamy zawsze."],
      ["Czy małą firmę z Miechowa stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność oceniamy razem."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow"],
  }),
];
