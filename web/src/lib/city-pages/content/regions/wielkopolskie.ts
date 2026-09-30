import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "wielkopolskie", regionCluster: "wielkopolska" } as const;

export const wielkopolskieRegion = region({
  slug: "wielkopolskie",
  intro: [
    "Wielkopolska to region o silnej tradycji przedsiębiorczości i jednym z najniższych poziomów bezrobocia w kraju. Poznań jest centrum targów, logistyki, usług biznesowych i produkcji, a wokół niego wyrosły zagłębia magazynowe przy autostradzie A2 i drogach S5 i S11.",
    "Poza Poznaniem region ma wyraźne specjalizacje: fabryki samochodów dostawczych w Poznaniu i Wrześni, przemysł lotniczy i spożywczy w Kaliszu, energetykę i aluminium w Koninie, oświetlenie w Pile, meble w Kępnie, szczotki w Ostrzeszowie, porcelanę w Chodzieży i Kole.",
    "Rolnictwo i przetwórstwo spożywcze są w Wielkopolsce bardzo rozwinięte: cukrownie, mleczarnie, zakłady mięsne i producenci pasz działają w niemal każdym powiecie.",
    "Z firmami z Wielkopolski pracujemy zdalnie. Nasza siedziba jest we Wrocławiu, a na miejsce przyjeżdżamy, gdy warsztat z zespołem przyspiesza projekt.",
  ],
  industries: [
    ["Logistyka i e-commerce", "Zamówienia, wysyłki, zwroty i awizacje w magazynach wokół Poznania."],
    ["Motoryzacja i dostawcy", "Harmonogramy, raporty jakości i dokumentacja dla fabryk w Poznaniu i Wrześni."],
    ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości w cukrowniach, mleczarniach i zakładach mięsnych."],
    ["Meble i produkcja", "Zamówienia, zlecenia i wysyłki w zagłębiu meblowym Kępna i okolic."],
    ["Targi i usługi biznesowe", "Obsługa wystawców, zgłoszeń i dokumentów w firmach obsługujących Poznań."],
  ],
  faq: [
    ["Czy macie biuro w Poznaniu?", "Nie. Nasza siedziba jest we Wrocławiu. Z firmami z Wielkopolski pracujemy zdalnie, a gdy warsztat na miejscu przyspiesza projekt, przyjeżdżamy."],
    ["Czy pracujecie z firmami meblarskimi?", "Tak. Automatyzujemy zamówienia, zlecenia produkcyjne, wysyłki i komunikację z klientami."],
    ["Czy pracujecie z zakładami spożywczymi?", "Tak. Porządkujemy przyjęcie surowca, rozliczenia z dostawcami i dokumenty jakości."],
    ["Od czego zacząć?", "Od bezpłatnej, 30-minutowej konsultacji, na której wybieramy proces z najszybszym zwrotem."],
  ],
});

export const wielkopolskieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "poznan",
    name: "Poznań",
    nameGenitive: "Poznania",
    nameLocative: "Poznaniu",
    nearbyCitySlugs: ["gniezno", "sroda-wielkopolska", "wrzesnia", "oborniki", "szamotuly", "kalisz", "konin"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Poznania: e-commerce, logistyka, produkcja, targi i usługi biznesowe. Bezpłatna konsultacja 30 min.",
    heroLead:
      "Pomagamy poznańskim firmom handlowym, logistycznym i usługowym obsłużyć więcej zamówień i klientów tym samym zespołem. Zamówienia, dokumenty i raporty obsługują się same.",
    intro: [
      "Poznań to jedno z najważniejszych centrów gospodarczych Polski: miasto targów, logistyki, e-commerce, produkcji i usług biznesowych. Wokół miasta, przy autostradzie A2 i drogach S5 i S11, powstały jedne z największych w kraju centrów magazynowych.",
      "Poznańskie firmy słyną z gospodarności i porządku, ale szybki wzrost sprzedaży często wyprzedza procesy w biurze. Zamówienia z wielu kanałów, dokumenty od dostawców i raporty dla zarządu zaczynają zabierać zespołowi coraz więcej czasu.",
    ],
    localContext:
      "Bezrobocie w Wielkopolsce należy do najniższych w kraju, więc zatrudnienie kolejnych osób do pracy biurowej jest trudne i drogie. Firmy szukają sposobów, żeby rosnąć bez rozbudowy administracji.",
    whyHere:
      "W Poznaniu automatyzacja jest odpowiedzią na brak rąk do pracy: przejmuje przepisywanie, statusy i raporty, a ludzie zajmują się tym, czego nie da się zautomatyzować.",
    economy: {
      title: "Czym żyje poznański biznes",
      paragraphs: [
        "Międzynarodowe Targi Poznańskie od stu lat przyciągają wystawców i gości z całego świata, a wokół nich działa rynek organizatorów wydarzeń, wykonawców stoisk, hoteli i usług.",
        "Fabryka samochodów dostawczych, zakłady spożywcze i producenci z wielu branż tworzą silne zaplecze przemysłowe. Obok nich rośnie sektor centrów usług biznesowych i firm IT.",
        "Położenie w połowie drogi między Berlinem a Warszawą uczyniło z okolic Poznania zagłębie logistyczne i jedno z centrów polskiego e-commerce.",
      ],
    },
    industries: [
      ["E-commerce i hurt", "Zamówienia z wielu kanałów, wspólne stany, wysyłki i zwroty."],
      ["Logistyka i magazyny", "Awizacje, sloty, raporty dla klientów i rozliczenia usług magazynowych."],
      ["Produkcja", "Zlecenia, materiały, raporty zmianowe i dokumentacja jakości."],
      ["Targi i wydarzenia", "Zgłoszenia wystawców, oferty, umowy i rozliczenia."],
    ],
    processes: [
      ["Zamówienia z wielu kanałów", "Sklep, platformy i zamówienia B2B w jednym miejscu ze wspólnym stanem."],
      ["Faktury od dostawców", "AI odczytuje faktury i przenosi dane do systemu księgowego do akceptacji."],
      ["Obsługa zwrotów", "Formularz, etykieta zwrotna i korekta faktury bez ręcznej pracy."],
      ["Raport dla zarządu", "Sprzedaż, marża i stany odświeżane codziennie w jednym widoku."],
    ],
    example: {
      title: "Zamówienie w poznańskim sklepie internetowym przed i po automatyzacji",
      lead: "Przykład firmy sprzedającej przez własny sklep i dwie platformy, z magazynem pod Poznaniem. Tak zmienia się obsługa jednego zamówienia.",
      rows: [
        ["Nowe zamówienie", "Obsługa sprawdza trzy panele i przepisuje zamówienia do systemu magazynowego.", "Zamówienia ze wszystkich kanałów trafiają automatycznie do jednego systemu."],
        ["Stany magazynowe", "Aktualizowane ręcznie, zdarza się sprzedaż towaru, którego nie ma.", "Wspólny stan aktualizowany po każdej sprzedaży we wszystkich kanałach."],
        ["Wysyłka", "Etykiety generowane ręcznie w panelu kuriera.", "Etykieta i numer przesyłki tworzone przy pakowaniu, klient dostaje powiadomienie."],
        ["Pytanie o przesyłkę", "Klient pisze maila, obsługa sprawdza status i odpowiada.", "Asystent AI podaje status przesyłki od razu."],
        ["Faktura i księgowość", "Faktury wystawiane i przesyłane do biura rachunkowego ręcznie.", "Faktura tworzona automatycznie i trafia do księgowości bez udziału zespołu."],
      ],
    },
    faq: [
      ["Czy macie biuro w Poznaniu?", "Nie. Nasza siedziba jest we Wrocławiu. Z firmami z Poznania pracujemy zdalnie, a gdy warsztat na miejscu przyspiesza projekt, przyjeżdżamy."],
      ["Czy łączycie sklep internetowy z platformami i magazynem?", "Tak. Spinamy sklep, platformy sprzedażowe, magazyn, kurierów i księgowość, żeby zamówienia i stany były wszędzie aktualne."],
      ["Czy automatyzujecie centra logistyczne?", "Tak. Awizacje, raporty dla klientów i rozliczenia usług magazynowych to częste wdrożenia."],
      ["Czy pracujecie z firmami obsługującymi targi?", "Tak. Automatyzujemy zgłoszenia wystawców, oferty, umowy i rozliczenia."],
      ["Czy AI odczyta faktury od dostawców?", "Tak. AI odczytuje faktury i dokumenty, a automatyzacja przenosi dane do systemu. Człowiek zatwierdza tylko wyjątki."],
      ["Czy firma z Poznania pozna koszt przed rozpoczęciem prac?", "Tak. Zawsze zaczynamy od wyceny pierwszego etapu, więc decyzję podejmujecie, znając kwotę."],
    ],
    services: ["automatyzacja-sprzedazy", "automatyzacja-dla-logistyki", "integracje-systemow", "ai-w-obsludze-dokumentow", "automatyzacja-raportow", "automatyzacja-w-obsludze-klienta"],
  }),

  town({
    ...base,
    slug: "kalisz",
    name: "Kalisz",
    nameGenitive: "Kalisza",
    nameLocative: "Kaliszu",
    nearbyCitySlugs: ["ostrow-wielkopolski", "pleszew", "jarocin", "krotoszyn", "konin", "poznan"],
    metaDescription:
      "Automatyzacja procesów dla firm z Kalisza: przemysł lotniczy, przetwórstwo spożywcze, produkcja w strefie ekonomicznej, handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy kaliskim dostawcom, zakładom produkcyjnym i firmom handlowym uporządkować zamówienia, dokumentację i raporty.",
    intro: [
      "Kalisz, jedno z najstarszych miast w Polsce, jest dziś ważnym ośrodkiem przemysłowym południowej Wielkopolski. Działają tu zakłady przemysłu lotniczego, duże zakłady spożywcze, producenci w podstrefie strefy ekonomicznej oraz ich dostawcy.",
      "Przemysł lotniczy i spożywczy wymagają precyzyjnej dokumentacji i identyfikowalności. Dostawcy muszą dostarczać atesty, raporty i dokumenty partii na czas.",
    ],
    localContext:
      "Kaliskie firmy, razem z sąsiednim Ostrowem Wielkopolskim, tworzą silny ośrodek przemysłowy. Konkurencja o pracowników jest duża, a zespoły biurowe małe.",
    whyHere:
      "W Kaliszu automatyzacja pozwala dostawcom spełnić wymagania dużych odbiorców bez ręcznego przygotowywania dokumentów.",
    economy: {
      title: "Czym żyje kaliski biznes",
      paragraphs: [
        "Przemysł lotniczy i spożywczy to najbardziej znane gałęzie kaliskiej gospodarki. W strefie ekonomicznej działają też producenci z branży metalowej i tworzyw.",
        "Kalisz ma tradycje włókiennicze i koronkarskie, a dziś jest zapleczem handlowym i usługowym dla kilku powiatów.",
      ],
    },
    industries: [
      ["Dostawcy przemysłu lotniczego", "Dokumentacja techniczna, atesty i numery partii zebrane dla każdego zlecenia w jednym miejscu."],
      ["Przetwórstwo spożywcze", "Przyjęcie surowca, partie produkcyjne i dokumenty jakości bez papierowych kart i arkuszy."],
      ["Produkcja w strefie ekonomicznej", "Zlecenia, stany materiałów i terminy wysyłek widoczne dla biura, hali i handlowców."],
      ["Handel hurtowy", "Zamówienia od sklepów z południowej Wielkopolski, stany i faktury spięte z magazynem."],
    ],
    processes: [
      ["Dokumentacja partii", "Atesty, protokoły i dane partii składane automatycznie, gotowe do wysyłki z towarem."],
      ["Zamówienia od odbiorców", "Zamówienia z portali i maili dużych klientów trafiają do systemu bez przepisywania."],
      ["Raport jakości dla klienta", "Wyniki kontroli zebrane z produkcji i przesłane odbiorcy w uzgodnionym formacie."],
      ["Faktura po wysyłce", "Potwierdzone wydanie uruchamia fakturę i powiadomienie dla klienta."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami kaliskiego przemysłu lotniczego?", "Tak. Porządkujemy dokumentację techniczną, atesty i identyfikowalność partii, tak żeby komplet dokumentów dla odbiorcy powstawał z danych, które już są w systemach."],
      ["Czy automatyzacja sprawdzi się w kaliskim zakładzie spożywczym?", "Tak. Przyjęcie surowca, partie produkcyjne, dokumenty jakości i zamówienia od sieci to procesy, które w przetwórstwie automatyzuje się najczęściej."],
      ["Mamy zakład w Kaliszu i drugi w Ostrowie. Czy da się połączyć dane?", "Tak. Zbieramy dane z obu lokalizacji w jednym miejscu, żeby stany, zamówienia i raporty były wspólne i aktualne."],
      ["Jak wygląda pierwszy krok dla firmy z Kalisza?", "Bezpłatna, 30-minutowa rozmowa online. Wybieramy jeden proces i przygotowujemy wycenę pierwszego etapu, zanim cokolwiek zaczniemy."],
    ],
    services: ["automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "porzadkowanie-i-strukturyzowanie-danych", "automatyzacja-raportow", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "konin",
    name: "Konin",
    nameGenitive: "Konina",
    nameLocative: "Koninie",
    nearbyCitySlugs: ["slupca", "kolo", "turek", "wrzesnia", "kalisz", "poznan"],
    metaDescription:
      "Automatyzacja procesów dla firm z Konina: energetyka w transformacji, przemysł aluminiowy, logistyka przy A2, handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy konińskim zakładom i firmom usługowym uporządkować zlecenia, dokumenty i rozliczenia w czasie zmian w regionie.",
    intro: [
      "Konin przez dekady był miastem energetyki opartej na węglu brunatnym i przemysłu aluminiowego. Dziś region przechodzi transformację energetyczną, a miasto rozwija logistykę przy autostradzie A2, produkcję i usługi.",
      "Firmy, które przez lata pracowały dla energetyki, szukają nowych klientów. Sprawne oferty, rozliczenia i dokumentacja pomagają w tej zmianie.",
    ],
    localContext:
      "Konińskie firmy usługowe i produkcyjne wchodzą na nowe rynki. Więcej klientów oznacza więcej ofert i dokumentów przy tym samym zespole.",
    whyHere:
      "W Koninie automatyzacja pomaga firmom obsłużyć nowych klientów bez rozbudowy biura, co w czasie transformacji regionu bardzo się przydaje.",
    economy: {
      title: "Czym żyje koniński biznes",
      paragraphs: [
        "Energetyka i przemysł aluminiowy wciąż są ważnymi pracodawcami, ale region inwestuje w nowe źródła energii, produkcję i logistykę.",
        "Położenie przy A2, w połowie drogi między Poznaniem a Łodzią, przyciąga magazyny i firmy transportowe.",
      ],
    },
    industries: [
      ["Usługi dla energetyki", "Karty pracy, protokoły odbioru i rozliczenia zleceń prowadzone bez papieru."],
      ["Przemysł aluminiowy i metalowy", "Zlecenia, atesty i dokumenty wysyłkowe tworzone z danych produkcji."],
      ["Logistyka przy A2", "Awizacje, sloty i dokumenty przewozowe w magazynach między Poznaniem a Łodzią."],
      ["Handel i usługi", "Zamówienia, zapisy klientów i faktury dla mieszkańców wschodniej Wielkopolski."],
    ],
    processes: [
      ["Oferta dla nowego klienta", "Zapytanie z formularza zamienia się w ofertę z szablonu w kilka minut."],
      ["Karta pracy z terenu", "Brygada wpisuje godziny i materiały w telefonie, a biuro widzi je od razu."],
      ["Rozliczenie zlecenia", "Podpisany protokół uruchamia fakturę i zestawienie dla klienta."],
      ["Przychody według klientów", "Raport pokazuje, którzy nowi klienci już przynoszą zysk."],
    ],
    faq: [
      ["Nasza firma z Konina pracowała głównie dla energetyki. Jak automatyzacja pomoże w zmianie?", "Przy nowych klientach rośnie liczba zapytań, ofert i dokumentów. Automatyzujemy ofertowanie, rozliczenia i przypomnienia, żeby obsłużyć więcej klientów tym samym zespołem."],
      ["Czy pracujecie z zakładami przemysłu aluminiowego i metalowego z Konina?", "Tak. Zlecenia, atesty, dokumenty wysyłkowe i raporty produkcji to typowy zakres."],
      ["Czy firmy logistyczne przy A2 pod Koninem też z was korzystają?", "Tak. Awizacje, statusy dostaw i dokumenty przewozowe to częste wdrożenia w logistyce."],
      ["Czy lokalizacja w Koninie wpływa na tempo projektu?", "Nie. Pracujemy zdalnie, więc zakres i terminy są takie same jak dla firm z dużych miast."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "automatyzacja-w-produkcji", "automatyzacja-dla-logistyki"],
  }),

  town({
    ...base,
    slug: "ostrow-wielkopolski",
    name: "Ostrów Wielkopolski",
    nameGenitive: "Ostrowa Wielkopolskiego",
    nameLocative: "Ostrowie Wielkopolskim",
    nearbyCitySlugs: ["kalisz", "kepno", "ostrzeszow", "krotoszyn", "pleszew", "konin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Ostrowa Wielkopolskiego: produkcja, logistyka przy S8 i S11, przetwórstwo i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy ostrowskim zakładom, przewoźnikom i firmom handlowym uporządkować zamówienia, dokumenty i raporty.",
    intro: [
      "Ostrów Wielkopolski leży na skrzyżowaniu dróg S8 i S11 i jest ważnym węzłem kolejowym. Razem z Kaliszem tworzy silny ośrodek przemysłowy, w którym działają zakłady produkcyjne, przetwórnie, firmy transportowe i logistyczne.",
      "Ostrowskie firmy często obsługują odbiorców z całej Polski, a położenie przy dwóch ekspresówkach sprzyja transportowi.",
    ],
    localContext:
      "W regionie działa dużo firm produkcyjnych i transportowych, które konkurują o pracowników. Zespoły biurowe są małe, a zleceń przybywa.",
    whyHere:
      "W Ostrowie Wielkopolskim automatyzacja pozwala obsłużyć więcej zleceń tym samym zespołem.",
    economy: {
      title: "Czym żyje ostrowski biznes",
      paragraphs: [
        "Produkcja metalowa, meblarska i spożywcza oraz transport to najważniejsze gałęzie gospodarki miasta.",
        "Bliskość zagłębia meblowego Kępna i Ostrzeszowa sprawia, że działa tu też wielu dostawców i przewoźników obsługujących tę branżę.",
      ],
    },
    industries: [
      ["Produkcja metalowa i meblarska", "Zamówienia, zlecenia i wysyłki w jednym przepływie, bez przepisywania między mailem a arkuszem."],
      ["Transport i spedycja", "Zlecenia, dokumenty przewozowe i rozliczenia kursów przy węźle S8 i S11."],
      ["Przetwórstwo spożywcze", "Przyjęcie surowca, partie i dokumenty jakości dla odbiorców z sieci."],
      ["Handel hurtowy", "Zamówienia od sklepów, stany i faktury spięte z magazynem."],
    ],
    processes: [
      ["Przyjęcie zamówienia", "AI odczytuje zamówienie z maila lub PDF i przygotowuje je w systemie do sprawdzenia."],
      ["Planowanie kursów", "Zlecenia transportowe trafiają do planu z terminem, kierowcą i pojazdem."],
      ["Dokumenty przewozowe", "Listy przewozowe i dokumenty dla odbiorcy tworzone z danych zlecenia."],
      ["Rozliczenie kursu", "Zamknięty kurs uruchamia fakturę i trafia do raportu floty."],
    ],
    faq: [
      ["Czy pracujecie z przewoźnikami z Ostrowa Wielkopolskiego?", "Tak. Automatyzujemy zlecenia transportowe, dokumenty przewozowe i rozliczenia kursów, tak żeby zamknięty kurs od razu uruchamiał fakturę."],
      ["Czy obsługujecie dostawców branży meblarskiej z okolic Ostrowa i Kępna?", "Tak. Zamówienia od fabryk mebli, terminy dostaw i dokumenty wysyłkowe to częsty zakres."],
      ["Czy łączycie się z ERP w zakładzie produkcyjnym?", "Tak, jeśli system pozwala na wymianę danych. Sprawdzamy to na konsultacji i nie wymieniamy tego, co działa."],
      ["Czy musimy spotykać się osobiście, skoro jesteśmy w Ostrowie Wielkopolskim?", "Nie. Większość projektów prowadzimy zdalnie. Warsztat na miejscu proponujemy tylko wtedy, gdy wyraźnie przyspiesza pracę."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "pila",
    name: "Piła",
    nameGenitive: "Piły",
    nameLocative: "Pile",
    nearbyCitySlugs: ["chodziez", "czarnkow", "wagrowiec", "zlotow", "poznan", "koszalin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Piły: produkcja oświetlenia i elektroniki, strefa ekonomiczna, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy pilskim zakładom, dostawcom i firmom usługowym uporządkować zamówienia, dokumentację i raporty.",
    intro: [
      "Piła jest głównym ośrodkiem północnej Wielkopolski. Miasto słynie z produkcji źródeł światła, a w podstrefie strefy ekonomicznej działają zakłady z branży elektronicznej, metalowej i drzewnej.",
      "Piła obsługuje handlowo i usługowo kilka powiatów, od Chodzieży po Złotów.",
    ],
    localContext:
      "Pilskie firmy często pracują jako dostawcy dużych zakładów. Terminy, jakość i dokumentacja muszą się zgadzać, a zespoły są niewielkie.",
    whyHere:
      "W Pile automatyzacja pozwala dostawcom szybciej przygotować dokumenty i raporty, a biuru nadążyć za produkcją.",
    economy: {
      title: "Czym żyje pilski biznes",
      paragraphs: [
        "Produkcja oświetlenia i elektroniki ma w Pile długą tradycję. Strefa ekonomiczna przyciągnęła też zakłady z innych branż.",
        "Miasto jest zapleczem handlowym, edukacyjnym i medycznym dla północnej Wielkopolski.",
      ],
    },
    industries: [
      ["Oświetlenie i elektronika", "Zlecenia, raporty jakości i dokumentacja dostaw dla dużych zakładów produkcyjnych."],
      ["Produkcja w strefie ekonomicznej", "Zamówienia, stany materiałów i terminy wysyłek w jednym przepływie."],
      ["Przemysł drzewny", "Zamówienia z wymiarami, terminy produkcji i wysyłki do odbiorców w kraju."],
      ["Handel i usługi", "Zamówienia, zapisy klientów i faktury dla firm z północnej Wielkopolski."],
    ],
    processes: [
      ["Zamówienia od odbiorców", "Zamówienie z maila lub portalu trafia do systemu po automatycznym odczycie."],
      ["Raport jakości", "Wyniki kontroli z hali składane w raport dla odbiorcy bez ręcznego liczenia."],
      ["Wysyłka i dokumenty", "Zakończone zlecenie uruchamia dokumenty wysyłkowe i fakturę."],
      ["Wykonanie planu", "Codzienny raport produkcji pokazuje, co jest zrobione, a co się opóźnia."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami zakładów produkujących oświetlenie w Pile?", "Tak. Zamówienia, raporty jakości i dokumentacja dostaw to procesy, które automatyzujemy u dostawców dużych zakładów."],
      ["Czy firmy ze strefy ekonomicznej w Pile mogą zacząć od jednego procesu?", "Tak, tak zaczynamy zawsze. Jeden proces, jasny koszt, a kolejne dopiero wtedy, gdy pierwszy działa."],
      ["Czy automatyzujecie handel i usługi w północnej Wielkopolsce?", "Tak. Zamówienia, zapisy klientów, faktury i przypomnienia o płatnościach."],
      ["Czy wdrożenie odciągnie zespół z Piły od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-raportow", "integracje-systemow", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "leszno",
    name: "Leszno",
    nameGenitive: "Leszna",
    nameLocative: "Lesznie",
    nearbyCitySlugs: ["koscian", "gostyn", "rawicz", "wolsztyn", "poznan", "grodzisk-wielkopolski"],
    metaDescription:
      "Automatyzacja procesów dla firm z Leszna: produkcja, logistyka przy S5, przetwórstwo, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy leszczyńskim zakładom, przewoźnikom i firmom handlowym zamienić ręczne zamówienia i dokumenty w przepływy, które działają same.",
    intro: [
      "Leszno leży przy drodze S5 między Poznaniem a Wrocławiem. Jest ośrodkiem produkcji, przetwórstwa, handlu i usług dla południowo-zachodniej Wielkopolski, a także jednym z najbardziej znanych w Europie ośrodków szybownictwa.",
      "Dobra komunikacja z dwoma metropoliami przyciąga zakłady produkcyjne i firmy logistyczne.",
    ],
    localContext:
      "Leszczyńskie firmy obsługują klientów z Poznania i Wrocławia. Muszą odpowiadać szybko i dostarczać dokumenty na czas.",
    whyHere:
      "W Lesznie automatyzacja przejmuje przepisywanie zamówień i przygotowanie dokumentów.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki dla odbiorców z Poznania, Wrocławia i zagranicy."],
      ["Logistyka przy S5", "Awizacje, statusy dostaw i dokumenty przewozowe w firmach transportowych."],
      ["Przetwórstwo spożywcze", "Dostawy od gospodarstw z regionu, partie i dokumenty jakości."],
      ["Handel i usługi", "Zamówienia, zapisy klientów i faktury dla mieszkańców południowo-zachodniej Wielkopolski."],
    ],
    processes: [
      ["Przyjęcie zamówienia", "Zamówienie z maila odczytane przez AI i przygotowane w systemie do akceptacji."],
      ["Status dla klienta", "Klient dostaje informację o realizacji i terminie dostawy bez dzwonienia."],
      ["Dokumenty wysyłki", "Dokumenty przewozowe i faktura tworzone z danych zlecenia."],
      ["Raport należności", "Lista zaległych płatności z automatycznymi przypomnieniami dla klientów."],
    ],
    faq: [
      ["Czy pracujecie z zakładami z Leszna obsługującymi klientów z Poznania i Wrocławia?", "Tak. Automatyzujemy zamówienia, statusy i dokumenty, żeby klient z metropolii dostawał odpowiedź tak szybko, jak oczekuje."],
      ["Czy firmy logistyczne przy S5 mogą z was skorzystać?", "Tak. Awizacje, dokumenty przewozowe i informowanie klientów o statusie dostawy."],
      ["Czy przyjeżdżacie do Leszna?", "Tak, jeśli to potrzebne. Z Wrocławia to około godziny drogi. Większość pracy prowadzimy zdalnie."],
      ["Ile kosztuje pierwszy etap w firmie z Leszna?", "Zależy od procesu. Wycenę przygotowujemy po bezpłatnej konsultacji, zanim zaczniemy pracę."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "gniezno",
    name: "Gniezno",
    nameGenitive: "Gniezna",
    nameLocative: "Gnieźnie",
    nearbyCitySlugs: ["poznan", "wrzesnia", "wagrowiec", "sroda-wielkopolska", "konin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Gniezna: produkcja, logistyka przy S5, turystyka, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy gnieźnieńskim zakładom, firmom handlowym i turystycznym uporządkować zamówienia, rezerwacje i dokumenty.",
    intro: [
      "Gniezno, pierwsza stolica Polski, przyciąga turystów historią i katedrą. Współczesna gospodarka miasta to produkcja, logistyka przy drodze S5, przetwórstwo, handel i usługi.",
      "Bliskość Poznania i Wrześni sprawia, że wiele gnieźnieńskich firm pracuje jako dostawcy dla większych zakładów.",
    ],
    localContext:
      "Gnieźnieńskie firmy konkurują o pracowników z Poznaniem i Wrześnią. Automatyzacja pozwala im obsłużyć więcej zamówień bez dokładania etatów.",
    whyHere:
      "W Gnieźnie automatyzacja przejmuje powtarzalną pracę biurową, a zespół zajmuje się klientami.",
    industries: [
      ["Dostawcy przemysłu", "Zamówienia i dokumentacja dla zakładów z Poznania i Wrześni."],
      ["Logistyka przy S5", "Awizacje, statusy i dokumenty przewozowe w magazynach wokół miasta."],
      ["Turystyka historyczna", "Rezerwacje grup, przewodników i noclegów w pierwszej stolicy Polski."],
      ["Handel", "Zamówienia od sklepów i klientów, stany magazynowe i faktury."],
    ],
    processes: [
      ["Harmonogram od odbiorcy", "Zmiany w planie dostaw klienta trafiają do produkcji bez przepisywania."],
      ["Rezerwacja grupy", "Zapytanie, oferta, zaliczka i lista uczestników w jednym przepływie."],
      ["Dokumenty wysyłkowe", "Etykiety i dokumenty tworzone z danych zamówienia."],
      ["Faktura i przypomnienie", "Faktura po wydaniu, przypomnienie o płatności przed terminem."],
    ],
    faq: [
      ["Czy pracujecie z gnieźnieńskimi dostawcami zakładów z Poznania i Wrześni?", "Tak. Harmonogramy, zamówienia i dokumentacja dla odbiorców to częste wdrożenia u dostawców."],
      ["Czy automatyzujecie obsługę grup zwiedzających Gniezno?", "Tak. Zapytania, oferty, zaliczki i listy uczestników mogą działać w jednym przepływie."],
      ["Czy firma z Gniezna musi zmieniać programy?", "Zwykle nie. Łączymy narzędzia, które już macie, i dokładamy tylko brakujące elementy."],
      ["Jaki jest pierwszy krok dla firmy z Gniezna?", "Krótka rozmowa online o tym, co zabiera zespołowi najwięcej czasu. Potem przegląd wybranego procesu i wycena."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "wrzesnia",
    name: "Września",
    nameGenitive: "Wrześni",
    nameLocative: "Wrześni",
    nearbyCitySlugs: ["poznan", "gniezno", "sroda-wielkopolska", "slupca", "konin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Wrześni: dostawcy fabryki samochodów dostawczych, logistyka przy A2, produkcja. Konsultacja 30 min.",
    heroLead:
      "Pomagamy wrzesińskim dostawcom, przewoźnikom i firmom usługowym sprostać wymaganiom dużego odbiorcy bez ręcznej pracy nad dokumentami.",
    intro: [
      "Września zmieniła się, odkąd powstała tu fabryka samochodów dostawczych Volkswagena. Za nią przyszli dostawcy, firmy logistyczne i usługowe, a miasto zyskało nowe miejsca pracy przy autostradzie A2.",
      "Współpraca z producentem samochodów oznacza precyzyjne harmonogramy, raporty jakości i dokumentację dostaw.",
    ],
    localContext:
      "Wrzesińskie firmy rosną szybciej niż ich biura. Zatrudnić kolejne osoby jest trudno, bo fabryka i jej dostawcy konkurują o pracowników.",
    whyHere:
      "We Wrześni automatyzacja pozwala obsłużyć rosnącą liczbę zamówień i wymagania odbiorcy bez rozbudowy biura.",
    industries: [
      ["Dostawcy motoryzacji", "Harmonogramy dostaw, raporty jakości i dokumentacja partii dla fabryki samochodów."],
      ["Logistyka przy A2", "Awizacje, sloty i dokumenty przewozowe w magazynach obsługujących przemysł."],
      ["Usługi dla przemysłu", "Zlecenia serwisowe, protokoły i rozliczenia z dużym odbiorcą."],
      ["Handel i usługi lokalne", "Zamówienia, zapisy klientów i faktury dla rosnącej liczby mieszkańców."],
    ],
    processes: [
      ["Harmonogram dostaw", "Zmiany od odbiorcy aktualizują plan bez przepisywania."],
      ["Raport jakości", "Wyniki kontroli składane w raport."],
      ["Dokumenty dostaw", "Zakończona wysyłka uruchamia dokumenty i fakturę."],
      ["Zgłoszenia serwisowe", "Zgłoszenie trafia do właściwej osoby z terminem."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami fabryki samochodów dostawczych we Wrześni?", "Tak. Harmonogramy dostaw, raporty jakości i dokumentacja partii to typowy zakres dla dostawców motoryzacji."],
      ["Czy łączycie się z portalami i systemami odbiorców?", "Tak, jeśli pozwalają na wymianę danych przez API lub pliki. Gdy nie, automatyzujemy przynajmniej przygotowanie danych."],
      ["Nasza firma z Wrześni szybko rośnie. Jak nie rozbudowywać biura?", "Automatyzujemy przepisywanie zamówień, dokumenty i raporty, czyli pracę, która rośnie razem ze sprzedażą."],
      ["Czy przyjeżdżacie do Wrześni?", "Pracujemy zdalnie, a przy większych projektach organizujemy warsztat na miejscu."],
    ],
    services: ["automatyzacja-w-produkcji", "integracje-systemow", "automatyzacja-dla-logistyki", "automatyzacja-raportow"],
  }),

  town({
    ...base,
    slug: "sroda-wielkopolska",
    name: "Środa Wielkopolska",
    nameGenitive: "Środy Wielkopolskiej",
    nameLocative: "Środzie Wielkopolskiej",
    nearbyCitySlugs: ["poznan", "srem", "jarocin", "wrzesnia", "gniezno"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Środy Wielkopolskiej: cukrownia i przetwórstwo, rolnictwo, logistyka przy A2. Konsultacja 30 min.",
    heroLead:
      "Pomagamy średzkim firmom przetwórczym, rolnym i logistycznym uporządkować dostawy, rozliczenia i dokumenty.",
    intro: [
      "Środa Wielkopolska leży przy autostradzie A2, na wschód od Poznania. Miasto ma cukrownię, a lokalną gospodarkę tworzą rolnictwo, przetwórstwo, logistyka i usługi.",
      "Kampania cukrownicza i sezon rolniczy oznaczają okresy intensywnych dostaw i rozliczeń z wieloma plantatorami i przewoźnikami.",
    ],
    localContext:
      "Średzkie firmy rozliczają się z wieloma dostawcami. W sezonie ręczne zapisy i zestawienia są źródłem pomyłek.",
    whyHere:
      "W Środzie Wielkopolskiej automatyzacja porządkuje dostawy i rozliczenia, żeby sezon przebiegał bez chaosu.",
    industries: [
      ["Cukrownictwo i przetwórstwo", "Dostawy buraków, harmonogramy odbiorów i rozliczenia z plantatorami."],
      ["Gospodarstwa rolne", "Zamówienia środków produkcji, dostawy i terminy płatności."],
      ["Logistyka przy A2", "Awizacje i dokumenty przewozowe dla firm transportowych."],
      ["Handel i usługi", "Zamówienia, zapisy i faktury dla mieszkańców powiatu średzkiego."],
    ],
    processes: [
      ["Harmonogram odbiorów", "Terminy dostaw dla plantatorów i przewoźników z automatycznymi przypomnieniami."],
      ["Przyjęcie dostawy", "Ważenie i jakość zapisane raz trafiają prosto do rozliczeń."],
      ["Rozliczenie dostawcy", "Zestawienie dostaw i kwot do zapłaty przygotowane automatycznie."],
      ["Faktura sprzedaży", "Faktura tworzona z danych wydania lub dostawy."],
    ],
    faq: [
      ["Czy pracujecie z firmami obsługującymi kampanię cukrowniczą w Środzie Wielkopolskiej?", "Tak. Harmonogramy dostaw, przyjęcia i rozliczenia z plantatorami i przewoźnikami dobrze się automatyzują."],
      ["Czy automatyzacja pomoże w szczycie sezonu?", "Tak. Właśnie wtedy daje najwięcej, bo zdejmuje z zespołu ręczne zestawienia. Najlepiej wdrożyć ją przed sezonem."],
      ["Czy firmy logistyczne przy A2 pod Środą też mogą skorzystać?", "Tak. Awizacje, statusy i dokumenty przewozowe."],
      ["Czy wdrożenie odciągnie zespół ze Środy Wielkopolskiej od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "porzadkowanie-i-strukturyzowanie-danych"],
  }),

  town({
    ...base,
    slug: "srem",
    name: "Śrem",
    nameGenitive: "Śremu",
    nameLocative: "Śremie",
    nearbyCitySlugs: ["poznan", "sroda-wielkopolska", "koscian", "gostyn", "jarocin"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Śremu: produkcja, przetwórstwo, handel i usługi nad Wartą pod Poznaniem. Konsultacja 30 min.",
    heroLead:
      "Pomagamy śremskim zakładom i firmom handlowym uporządkować zamówienia, dostawy i faktury.",
    intro: [
      "Śrem leży nad Wartą, na południe od Poznania. Lokalną gospodarkę tworzą zakłady produkcyjne, przetwórstwo, handel i usługi dla mieszkańców powiatu.",
      "Firmy ze Śremu obsługują klientów z Poznania i całej Wielkopolski. Zamówienia przychodzą różnymi kanałami.",
    ],
    localContext:
      "Śremskie firmy konkurują o pracowników z Poznaniem. Automatyzacja pozwala małemu zespołowi obsłużyć więcej klientów.",
    whyHere:
      "W Śremie automatyzacja zbiera zamówienia w jednym miejscu i przygotowuje dokumenty.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki dla klientów z Poznania i całej Wielkopolski."],
      ["Przetwórstwo", "Dostawy surowca, partie i dokumenty jakości bez papierowych kart."],
      ["Handel", "Zamówienia od sklepów, stany i faktury spięte z magazynem."],
      ["Usługi dla mieszkańców", "Zapisy, przypomnienia o wizytach i płatności online."],
    ],
    processes: [
      ["Zamówienia od klientów z Poznania", "Zamówienia z maila i formularza trafiają do jednej listy z terminem realizacji."],
      ["Zlecenie na produkcję", "Przyjęte zamówienie zamienia się w zlecenie z materiałami, bez przepisywania."],
      ["Faktura po wydaniu", "Wydanie towaru uruchamia fakturę i wysyłkę do klienta."],
      ["Tygodniowe podsumowanie", "Sprzedaż, zaległe płatności i zlecenia w toku w jednym mailu dla właściciela."],
    ],
    faq: [
      ["Jak często będziemy się kontaktować podczas wdrożenia w Śremie?", "Zwykle raz w tygodniu na krótkim spotkaniu online, a na bieżąco przez maila lub komunikator."],
      ["Mamy mały zespół i dużo klientów z Poznania. Co zautomatyzować najpierw?", "Zwykle przyjmowanie zamówień i fakturowanie, bo tam zespół traci najwięcej czasu na przepisywanie."],
      ["Czy śremska firma musi kupić nowy program?", "Najczęściej nie. Łączymy narzędzia, których już używacie, np. pocztę, arkusze i program do faktur."],
      ["Kiedy firma ze Śremu zobaczy pierwszy efekt?", "Zwykle po kilku tygodniach, gdy pierwszy proces zaczyna działać na waszych danych."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "oborniki",
    name: "Oborniki",
    nameGenitive: "Obornik",
    nameLocative: "Obornikach",
    nearbyCitySlugs: ["poznan", "szamotuly", "wagrowiec", "czarnkow", "gniezno"],
    metaDescription:
      "Automatyzacja procesów dla firm z Obornik: produkcja, przetwórstwo spożywcze, logistyka przy S11, handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy obornickim zakładom i firmom handlowym zamienić ręczne zamówienia i dokumenty w proste przepływy.",
    intro: [
      "Oborniki leżą nad Wartą, przy drodze S11 na północ od Poznania. Lokalną gospodarkę tworzą produkcja, przetwórstwo spożywcze, logistyka i handel.",
      "Położenie przy ekspresówce przyciąga firmy, które obsługują klientów z Poznania i północnej Wielkopolski.",
    ],
    localContext:
      "Obornickie firmy pracują z niewielkimi zespołami biurowymi. Zamówienia i dokumenty przygotowuje się ręcznie.",
    whyHere:
      "W Obornikach automatyzacja przejmuje przepisywanie zamówień i przygotowanie dokumentów.",
    industries: [
      ["Produkcja", "Zlecenia i wysyłki dla klientów z Poznania i północnej Wielkopolski."],
      ["Przetwórstwo spożywcze", "Przyjęcie surowca, partie i dokumenty jakości w jednym przepływie."],
      ["Transport przy S11", "Zlecenia, dokumenty przewozowe i statusy dostaw dla klientów."],
      ["Handel", "Zamówienia, stany magazynowe i faktury bez przepisywania."],
    ],
    processes: [
      ["Zamówienia z północy regionu", "Zamówienia od klientów z Obornik, Poznania i okolic zebrane w jednym widoku."],
      ["Awizacja dostawy", "Klient dostaje termin dostawy i przypomnienie bez telefonu do biura."],
      ["Dostawy surowca", "Każda dostawa zapisana raz trafia do magazynu i rozliczeń z dostawcą."],
      ["Faktura i przypomnienie o płatności", "Faktura wychodzi po dostawie, a przypomnienie przed terminem płatności."],
    ],
    faq: [
      ["Czy pracujecie z firmami spod Poznania, takimi jak nasza w Obornikach?", "Tak. Pracujemy z firmami z całej Wielkopolski, głównie zdalnie."],
      ["Czy automatyzujecie zakłady spożywcze w Obornikach?", "Tak. Najczęściej przyjęcie surowca, rozliczenia z dostawcami, partie i dokumenty jakości."],
      ["Czy firmy transportowe przy S11 też mogą skorzystać?", "Tak. Zlecenia, dokumenty przewozowe i informowanie klientów o statusie."],
      ["Jak firma z Obornik może zacząć?", "Umówcie bezpłatną konsultację. Wskażemy proces z najszybszym zwrotem i przygotujemy wycenę pierwszego etapu."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "szamotuly",
    name: "Szamotuły",
    nameGenitive: "Szamotuł",
    nameLocative: "Szamotułach",
    nearbyCitySlugs: ["poznan", "oborniki", "nowy-tomysl", "miedzychod", "wolsztyn"],
    metaDescription:
      "Automatyzacja procesów dla firm z Szamotuł: produkcja, przetwórstwo, rolnictwo, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy szamotulskim firmom uporządkować zamówienia, dostawy i rozliczenia.",
    intro: [
      "Szamotuły leżą na północny zachód od Poznania. Lokalną gospodarkę tworzą zakłady produkcyjne, przetwórstwo spożywcze, rolnictwo, handel i usługi.",
      "Wiele firm z Szamotuł obsługuje klientów z Poznania. Zamówienia i dokumenty wymagają sprawnej obsługi przy małym zespole.",
    ],
    localContext:
      "Szamotulskie firmy konkurują o pracowników z Poznaniem. Każda zautomatyzowana czynność odciąża zespół.",
    whyHere:
      "W Szamotułach automatyzacja zbiera zamówienia i dostawy w jednym miejscu.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki dla odbiorców z Poznania i kraju."],
      ["Przetwórstwo spożywcze", "Dostawy od rolników, partie i dokumenty jakości."],
      ["Skup i handel rolny", "Rozliczenia z dostawcami, sprzedaż i terminy płatności."],
      ["Handel i usługi", "Zamówienia, zapisy klientów i faktury dla mieszkańców powiatu."],
    ],
    processes: [
      ["Skup i dostawy od rolników", "Dostawy zapisane raz, z ilością i jakością, widoczne w rozliczeniach."],
      ["Rozliczenie dostawcy", "Zestawienie dostaw i kwoty do zapłaty przygotowane automatycznie."],
      ["Zamówienia od odbiorców", "Zamówienia z maila i telefonu w jednej liście ze statusem."],
      ["Raport miesięczny", "Zakupy, sprzedaż i marża bez ręcznego liczenia w arkuszu."],
    ],
    faq: [
      ["Czy pracujecie z firmami rolnymi z powiatu szamotulskiego?", "Tak. Automatyzujemy skup, rozliczenia z dostawcami i sprzedaż, czyli to, co w sezonie zajmuje najwięcej czasu."],
      ["Prowadzimy rozliczenia w zeszycie i arkuszu. Od czego zacząć?", "Od przeniesienia zapisów dostaw do jednej prostej bazy. To podstawa, na której automatyczne rozliczenia działają bez pomyłek."],
      ["Czy pracownicy z Szamotuł poradzą sobie z nowym sposobem pracy?", "Tak. Formularze projektujemy tak, żeby wpisanie dostawy zajmowało chwilę, także w telefonie."],
      ["Czy wdrożenie odciągnie nasz zespół w Szamotułach od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "nowy-tomysl",
    name: "Nowy Tomyśl",
    nameGenitive: "Nowego Tomyśla",
    nameLocative: "Nowym Tomyślu",
    nearbyCitySlugs: ["poznan", "grodzisk-wielkopolski", "wolsztyn", "szamotuly", "leszno"],
    metaDescription:
      "Automatyzacja procesów dla firm z Nowego Tomyśla: wikliniarstwo, produkcja, logistyka przy A2, handel i eksport. Konsultacja 30 min.",
    heroLead:
      "Pomagamy nowotomyskim producentom i firmom handlowym uporządkować zamówienia, wysyłki i sprzedaż zagraniczną.",
    intro: [
      "Nowy Tomyśl słynie z wikliniarstwa i chmielarstwa. Położenie przy autostradzie A2, między Poznaniem a granicą z Niemcami, przyciągnęło też zakłady produkcyjne i firmy logistyczne.",
      "Producenci wyrobów z wikliny i inne firmy z regionu sprzedają w Polsce i za granicą, często przez internet.",
    ],
    localContext:
      "Nowotomyskie firmy obsługują klientów z Niemiec i całej Europy. Zamówienia, faktury i dokumenty wysyłkowe w kilku językach zajmują dużo czasu.",
    whyHere:
      "W Nowym Tomyślu automatyzacja porządkuje sprzedaż zagraniczną i wysyłki.",
    industries: [
      ["Wikliniarstwo i rękodzieło", "Zamówienia z kraju i zagranicy, sprzedaż internetowa i wysyłki."],
      ["Produkcja", "Zlecenia, materiały i wysyłki dla odbiorców z Polski i Niemiec."],
      ["Logistyka przy A2", "Awizacje, dokumenty przewozowe i statusy dostaw na trasie do granicy."],
      ["Handel", "Zamówienia, stany magazynowe i faktury w kilku walutach."],
    ],
    processes: [
      ["Zamówienia z wielu kanałów", "Zamówienia ze sklepu, platform i od hurtowni w jednym miejscu ze wspólnym stanem."],
      ["Faktury eksportowe", "Faktury w walucie i języku klienta tworzone z danych zamówienia."],
      ["Wysyłki zagraniczne", "Etykieta kuriera i dokumenty tworzone przy pakowaniu."],
      ["Pytania klientów", "Asystent AI odpowiada po niemiecku i angielsku o dostępność i wysyłkę."],
    ],
    faq: [
      ["Czy automatyzujecie sprzedaż wyrobów z wikliny za granicę?", "Tak. Zamówienia z kilku kanałów, faktury w walucie klienta i dokumenty wysyłkowe mogą powstawać automatycznie."],
      ["Czy łączycie sklep internetowy z platformami sprzedażowymi?", "Tak. Zamówienia i stany są wtedy wspólne dla wszystkich kanałów."],
      ["Czy firmy logistyczne przy A2 pod Nowym Tomyślem też mogą skorzystać?", "Tak. Awizacje, dokumenty przewozowe i statusy dla klientów."],
      ["Czy asystent AI odpowie klientom z Niemiec?", "Tak. Odpowiada w kilku językach na podstawie waszych informacji, a trudniejsze pytania przekazuje do zespołu."],
    ],
    services: ["automatyzacja-sprzedazy", "integracje-systemow", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-logistyki"],
  }),

  town({
    ...base,
    slug: "grodzisk-wielkopolski",
    name: "Grodzisk Wielkopolski",
    nameGenitive: "Grodziska Wielkopolskiego",
    nameLocative: "Grodzisku Wielkopolskim",
    nearbyCitySlugs: ["poznan", "nowy-tomysl", "wolsztyn", "koscian", "leszno"],
    metaDescription:
      "Automatyzacja procesów dla firm z Grodziska Wielkopolskiego: browarnictwo, przetwórstwo, produkcja, rolnictwo. Konsultacja 30 min.",
    heroLead:
      "Pomagamy grodziskim producentom i firmom handlowym uporządkować zamówienia, partie i wysyłki.",
    intro: [
      "Grodzisk Wielkopolski słynie z tradycyjnego piwa grodziskiego. Lokalną gospodarkę tworzą browarnictwo, przetwórstwo spożywcze, produkcja i rolnictwo.",
      "Producenci żywności i napojów sprzedają w całej Polsce, a wymagania dotyczące partii i dokumentów są wysokie.",
    ],
    localContext:
      "Grodziskie firmy to często małe zakłady z ambicjami sprzedaży ogólnopolskiej. Zamówienia hurtowe i sprzedaż internetowa wymagają porządku.",
    whyHere:
      "W Grodzisku Wielkopolskim automatyzacja łączy zamówienia, partie i wysyłki w jeden przepływ.",
    industries: [
      ["Browarnictwo", "Zamówienia hurtowe, partie i wysyłki do sklepów i restauracji w całej Polsce."],
      ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości bez papierowych kart."],
      ["Produkcja", "Zlecenia, materiały i wysyłki widoczne dla biura i handlowców."],
      ["Gospodarstwa rolne", "Rozliczenia dostaw, dokumenty i terminy w jednym miejscu."],
    ],
    processes: [
      ["Zamówienia hurtowe", "Zamówienie trafia do planu produkcji i wysyłki."],
      ["Partie", "Dane każdej partii w jednym miejscu."],
      ["Wysyłki", "Dokumenty i etykiety z danych zamówienia."],
      ["Faktury", "Faktura tworzona automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z browarami rzemieślniczymi?", "Tak. Zamówienia hurtowe, partie, stany i wysyłki do sklepów i lokali to typowy zakres."],
      ["Czy automatyzacja pomoże w identyfikowalności partii?", "Tak. Układamy dane tak, żeby każda partia miała komplet informacji: surowce, datę produkcji i odbiorców."],
      ["Sprzedajemy z Grodziska w całej Polsce. Jak ogarnąć zamówienia?", "Zbieramy zamówienia z maila, sklepu i od hurtowni w jednym miejscu, a stany aktualizują się automatycznie."],
      ["Czy lokalizacja w Grodzisku Wielkopolskim wpływa na tempo projektu?", "Nie. Pracujemy zdalnie, więc zakres i terminy są takie same jak dla firm z dużych miast."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "porzadkowanie-i-strukturyzowanie-danych", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "wolsztyn",
    name: "Wolsztyn",
    nameGenitive: "Wolsztyna",
    nameLocative: "Wolsztynie",
    nearbyCitySlugs: ["nowy-tomysl", "grodzisk-wielkopolski", "leszno", "szamotuly", "poznan"],
    metaDescription:
      "Automatyzacja procesów dla firm z Wolsztyna: produkcja, przetwórstwo, rolnictwo i turystyka. Konsultacja 30 min.",
    heroLead:
      "Pomagamy wolsztyńskim zakładom, firmom rolnym i turystycznym uporządkować zamówienia, rozliczenia i rezerwacje.",
    intro: [
      "Wolsztyn słynie z parowozowni, jedynej w Europie, która przez lata prowadziła regularne kursy parowozów. Lokalną gospodarkę tworzą produkcja, przetwórstwo, rolnictwo i turystyka nad jeziorami.",
      "W małych firmach zespół jest niewielki, a obowiązków dużo. Automatyzacja zdejmuje z niego powtarzalną część pracy.",
    ],
    localContext:
      "Wolsztyńskie firmy obsługują gospodarstwa, klientów z Poznania i turystów. Każda grupa wymaga innej obsługi.",
    whyHere:
      "W Wolsztynie automatyzacja porządkuje zamówienia, rozliczenia i rezerwacje w jednym miejscu.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki dla klientów z Poznania i regionu."],
      ["Przetwórstwo spożywcze", "Dostawy od gospodarstw, partie i dokumenty jakości."],
      ["Rolnictwo", "Rozliczenia dostaw, zamówienia środków produkcji i terminy płatności."],
      ["Turystyka nad jeziorami", "Rezerwacje noclegów, zaliczki i pytania gości w sezonie."],
    ],
    processes: [
      ["Zamówienia od stałych odbiorców", "Powtarzalne zamówienia przygotowywane automatycznie do potwierdzenia."],
      ["Rozliczenia z gospodarstwami", "Dostawy i płatności zestawione dla każdego dostawcy bez ręcznego liczenia."],
      ["Rezerwacje w sezonie", "Rezerwacja noclegu uruchamia potwierdzenie, zaliczkę i przypomnienie."],
      ["Faktury", "Faktura tworzona z danych zamówienia lub pobytu."],
    ],
    faq: [
      ["Czy automatyzujecie obiekty noclegowe nad jeziorami wokół Wolsztyna?", "Tak. Rezerwacje z kilku portali, zaliczki, przypomnienia i odpowiedzi na typowe pytania gości."],
      ["Czy pracujecie z zakładami produkcyjnymi z Wolsztyna?", "Tak. Porządkujemy zamówienia, zlecenia i wysyłki, na narzędziach, których już używacie."],
      ["Czy firma z Wolsztyna może zacząć bez spotkania na żywo?", "Tak. Pierwsza rozmowa i cały przegląd procesu odbywają się online. Wystarczy komputer i kilka przykładowych dokumentów."],
      ["Czy małą firmę z Wolsztyna stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność oceniamy razem."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "automatyzacja-dla-firm-uslugowych", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "miedzychod",
    name: "Międzychód",
    nameGenitive: "Międzychodu",
    nameLocative: "Międzychodzie",
    nearbyCitySlugs: ["szamotuly", "nowy-tomysl", "pila", "poznan", "wolsztyn"],
    metaDescription:
      "Automatyzacja procesów dla firm z Międzychodu: przemysł drzewny, produkcja, turystyka nad jeziorami, handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy międzychodzkim zakładom i firmom turystycznym uporządkować zamówienia i rezerwacje.",
    intro: [
      "Międzychód leży nad Wartą, w otoczeniu lasów i jezior Pojezierza Międzychodzko-Sierakowskiego. Lokalną gospodarkę tworzą przemysł drzewny, produkcja, handel i turystyka.",
      "Zakłady drzewne pracują na zamówieniach z terminami, a obiekty turystyczne mają sezonowe szczyty.",
    ],
    localContext:
      "Międzychodzkie firmy łączą produkcję i turystykę. Mały zespół obsługuje różne rodzaje klientów.",
    whyHere:
      "W Międzychodzie automatyzacja porządkuje zamówienia i rezerwacje.",
    industries: [
      ["Przemysł drzewny", "Zamówienia tarcicy i wyrobów z wymiarami, terminy produkcji i wysyłki."],
      ["Produkcja", "Zlecenia i wysyłki dla odbiorców z regionu i kraju."],
      ["Turystyka na pojezierzu", "Rezerwacje ośrodków, zaliczki i pytania gości."],
      ["Handel", "Zamówienia, stany i faktury dla mieszkańców powiatu."],
    ],
    processes: [
      ["Zamówienie tarcicy i wyrobów", "Zamówienie z wymiarami i ilością trafia prosto do planu produkcji."],
      ["Termin dla klienta", "Klient dostaje potwierdzenie terminu i informację o wysyłce."],
      ["Rezerwacje nad jeziorami", "Rezerwacja z zaliczką i przypomnieniem, bez ręcznego pilnowania kalendarza."],
      ["Faktury", "Faktura tworzona automatycznie po wydaniu lub pobycie."],
    ],
    faq: [
      ["Czy pracujecie z zakładami przemysłu drzewnego z Międzychodu?", "Tak. Automatyzujemy zamówienia z wymiarami, zlecenia produkcyjne i dokumenty wysyłkowe."],
      ["Czy automatyzujecie ośrodki na Pojezierzu Międzychodzko-Sierakowskim?", "Tak. Rezerwacje, zaliczki, pytania gości i przypomnienia mogą działać bez udziału zespołu."],
      ["Czy to się opłaca przy sezonowym ruchu turystycznym?", "Często tak, bo automatyzacja najbardziej pomaga w szczycie, gdy brakuje rąk. Opłacalność oceniamy razem na konsultacji."],
      ["Czy przyjeżdżacie do firm w Międzychodzie?", "Pracujemy zdalnie, a na miejsce przyjeżdżamy, gdy warsztat z zespołem przyspiesza projekt."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-ksiegowosci", "chatbot-ai-dla-firmy"],
  }),

  town({
    ...base,
    slug: "koscian",
    name: "Kościan",
    nameGenitive: "Kościana",
    nameLocative: "Kościanie",
    nearbyCitySlugs: ["leszno", "srem", "gostyn", "poznan", "grodzisk-wielkopolski"],
    metaDescription:
      "Automatyzacja procesów dla firm z Kościana: cukrownia i przetwórstwo, rolnictwo, produkcja, logistyka przy S5. Konsultacja 30 min.",
    heroLead:
      "Pomagamy kościańskim firmom przetwórczym, rolnym i produkcyjnym uporządkować dostawy, rozliczenia i dokumenty.",
    intro: [
      "Kościan leży przy drodze S5 między Poznaniem a Lesznem. Miasto ma cukrownię, a lokalną gospodarkę tworzą rolnictwo, przetwórstwo, produkcja i logistyka.",
      "Kampania cukrownicza i sezon rolniczy oznaczają intensywne dostawy i rozliczenia z wieloma plantatorami.",
    ],
    localContext:
      "Kościańskie firmy rozliczają się z wieloma dostawcami i przewoźnikami. W sezonie ręczne zestawienia nie nadążają.",
    whyHere:
      "W Kościanie automatyzacja porządkuje dostawy i rozliczenia w sezonie.",
    industries: [
      ["Cukrownictwo i przetwórstwo", "Dostawy buraków, harmonogramy odbiorów i rozliczenia z plantatorami."],
      ["Rolnictwo", "Zamówienia środków produkcji, dostawy i terminy płatności."],
      ["Produkcja", "Zlecenia i wysyłki dla odbiorców z Poznania i Leszna."],
      ["Logistyka przy S5", "Awizacje i dokumenty przewozowe na trasie Poznań–Wrocław."],
    ],
    processes: [
      ["Harmonogram dostaw buraków", "Terminy dostaw dla plantatorów i przewoźników z automatycznymi przypomnieniami."],
      ["Przyjęcie i ważenie", "Dane z przyjęcia zapisane raz trafiają do rozliczeń."],
      ["Rozliczenie plantatora", "Zestawienie dostaw i należności przygotowane automatycznie."],
      ["Zamówienia odbiorców", "Zamówienia i wysyłki poza kampanią w jednym widoku."],
    ],
    faq: [
      ["Czy pracujecie z firmami obsługującymi kampanię cukrowniczą w Kościanie?", "Tak. Harmonogramy dostaw, przyjęcia i rozliczenia z plantatorami i przewoźnikami to procesy, które dobrze się automatyzują."],
      ["Czy pracujecie z producentami i przewoźnikami przy S5?", "Tak. Zamówienia, awizacje i dokumenty przewozowe."],
      ["Kiedy firma z Kościana powinna zacząć, żeby zdążyć przed sezonem?", "Najlepiej kilka tygodni przed kampanią, żeby zespół zdążył poznać nowy sposób pracy."],
      ["Czy przyjeżdżacie do Kościana?", "Z Wrocławia mamy niedaleko, ale większość pracy robimy zdalnie."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "porzadkowanie-i-strukturyzowanie-danych"],
  }),

  town({
    ...base,
    slug: "gostyn",
    name: "Gostyń",
    nameGenitive: "Gostynia",
    nameLocative: "Gostyniu",
    nearbyCitySlugs: ["leszno", "koscian", "rawicz", "jarocin", "srem"],
    metaDescription:
      "Automatyzacja procesów dla firm z Gostynia: mleczarstwo i przetwórstwo, rolnictwo, produkcja i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy gostyńskim firmom przetwórczym i rolnym uporządkować dostawy, rozliczenia i zamówienia.",
    intro: [
      "Gostyń leży w rolniczej części południowej Wielkopolski. Lokalną gospodarkę tworzą mleczarstwo, przetwórstwo spożywcze, produkcja i handel.",
      "Zakłady przetwórcze codziennie przyjmują dostawy od wielu rolników i rozliczają się z nimi według ilości i jakości.",
    ],
    localContext:
      "Gostyńskie firmy rozliczają się z wieloma dostawcami. Ręczne zestawienia są pracochłonne i łatwo o błąd.",
    whyHere:
      "W Gostyniu automatyzacja łączy dostawy, jakość i rozliczenia w jeden przepływ.",
    industries: [
      ["Mleczarstwo", "Odbiory mleka, wyniki jakości i rozliczenia z gospodarstwami."],
      ["Przetwórstwo spożywcze", "Partie, zamówienia sieci i wysyłki."],
      ["Rolnictwo", "Dokumenty, terminy i rozliczenia dostaw."],
      ["Handel", "Zamówienia od sklepów i hurtowni, stany i faktury."],
    ],
    processes: [
      ["Odbiór mleka od dostawców", "Ilości i wyniki jakości zapisane raz, widoczne w rozliczeniach."],
      ["Rozliczenie dostawcy", "Miesięczne zestawienie dla każdego gospodarstwa przygotowane automatycznie."],
      ["Zamówienia sklepów i hurtowni", "Zamówienia odbiorców w jednej liście z planem dostaw."],
      ["Dokumenty jakości", "Wyniki badań zebrane w raporty dla odbiorców i kontroli."],
    ],
    faq: [
      ["Czy pracujecie z mleczarniami z okolic Gostynia?", "Tak. Odbiory mleka, wyniki jakości, rozliczenia z dostawcami i dokumenty jakości to typowy zakres."],
      ["Czy rolnicy dostarczający do zakładu muszą używać nowej aplikacji?", "Nie muszą. Mogą dostawać zestawienia mailem lub SMS-em, a dane wprowadza zakład."],
      ["Czy łączycie rozliczenia z systemem księgowym?", "Tak, jeśli system pozwala na wymianę danych. Sprawdzamy to na konsultacji."],
      ["Ile trwa wdrożenie w zakładzie z Gostynia?", "Pierwszy proces zwykle kilka tygodni. Dokładny termin podajemy po przeglądzie procesu."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-w-produkcji", "porzadkowanie-i-strukturyzowanie-danych", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "rawicz",
    name: "Rawicz",
    nameGenitive: "Rawicza",
    nameLocative: "Rawiczu",
    nearbyCitySlugs: ["leszno", "gostyn", "krotoszyn", "jarocin", "wroclaw"],
    metaDescription:
      "Automatyzacja procesów dla firm z Rawicza: przetwórstwo mięsne i spożywcze, produkcja, logistyka przy S5. Konsultacja 30 min.",
    heroLead:
      "Pomagamy rawickim zakładom i firmom handlowym uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Rawicz leży przy drodze S5, na granicy z Dolnym Śląskiem. Lokalną gospodarkę tworzą przetwórstwo mięsne i spożywcze, produkcja, logistyka i rolnictwo.",
      "Bliskość Wrocławia i Poznania sprawia, że rawickie firmy obsługują klientów z obu metropolii.",
    ],
    localContext:
      "Rawickie zakłady przetwórcze pracują z wieloma dostawcami i odbiorcami. Dokumentacja i rozliczenia zajmują dużo czasu.",
    whyHere:
      "W Rawiczu automatyzacja porządkuje dostawy, zamówienia i dokumenty.",
    industries: [
      ["Przetwórstwo mięsne", "Przyjęcia, partie, dokumenty weterynaryjne i zamówienia sieci."],
      ["Produkcja", "Zlecenia i wysyłki dla odbiorców z Wrocławia i Poznania."],
      ["Logistyka przy S5", "Awizacje i dokumenty przewozowe."],
      ["Rolnictwo", "Rozliczenia dostaw i terminy płatności."],
    ],
    processes: [
      ["Przyjęcie żywca i surowca", "Dane z przyjęcia zapisane raz, z dokumentami i numerami partii."],
      ["Identyfikowalność partii", "Każda partia ma komplet informacji: dostawca, przyjęcie, produkcja, odbiorca."],
      ["Zamówienia sieci i hurtowni", "Zamówienia z plików i portali trafiają do systemu bez przepisywania."],
      ["Dokumenty wysyłkowe", "Dokumenty i faktura tworzone z danych zamówienia."],
    ],
    faq: [
      ["Czy pracujecie z zakładami mięsnymi z Rawicza?", "Tak. Porządkujemy przyjęcia, partie, zamówienia odbiorców i dokumenty wysyłkowe."],
      ["Czy pomagacie w identyfikowalności partii?", "Tak. Układamy dane tak, żeby każda partia miała komplet informacji w jednym miejscu, na wypadek kontroli."],
      ["Czy przyjeżdżacie do Rawicza?", "Z Wrocławia mamy blisko, więc warsztat na miejscu organizujemy bez problemu. Większość pracy robimy zdalnie."],
      ["Ile kosztuje wdrożenie w zakładzie z Rawicza?", "Wycenę pierwszego etapu dostajecie po bezpłatnej konsultacji, zanim zaczniemy pracę."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci", "porzadkowanie-i-strukturyzowanie-danych"],
  }),

  town({
    ...base,
    slug: "jarocin",
    name: "Jarocin",
    nameGenitive: "Jarocina",
    nameLocative: "Jarocinie",
    nearbyCitySlugs: ["sroda-wielkopolska", "gostyn", "krotoszyn", "pleszew", "kalisz"],
    metaDescription:
      "Automatyzacja procesów dla firm z Jarocina: produkcja, przetwórstwo, organizacja wydarzeń, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy jarocińskim zakładom i firmom usługowym uporządkować zamówienia, dokumenty i rozliczenia.",
    intro: [
      "Jarocin jest znany w całej Polsce z festiwalu muzycznego. Lokalną gospodarkę tworzą zakłady produkcyjne, przetwórstwo spożywcze, handel i usługi.",
      "Firmy produkcyjne z Jarocina obsługują odbiorców z całej Wielkopolski i kraju.",
    ],
    localContext:
      "Jarocińskie firmy pracują z niewielkimi zespołami biurowymi. Zamówienia i dokumenty przygotowuje się ręcznie.",
    whyHere:
      "W Jarocinie automatyzacja przejmuje przepisywanie zamówień i przygotowanie dokumentów.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki dla odbiorców z całej Polski."],
      ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości."],
      ["Organizacja wydarzeń", "Zgłoszenia wykonawców, bilety, umowy i rozliczenia."],
      ["Handel", "Zamówienia, stany i faktury dla sklepów z regionu."],
    ],
    processes: [
      ["Zamówienia od odbiorców", "Zamówienie z maila odczytane i przygotowane w systemie do akceptacji."],
      ["Plan produkcji", "Przyjęte zamówienia trafiają do planu z terminami i materiałami."],
      ["Obsługa wydarzeń", "Zgłoszenia wykonawców i dostawców, umowy i rozliczenia w jednym miejscu."],
      ["Faktury", "Wydanie towaru uruchamia fakturę."],
    ],
    faq: [
      ["Czy pracujecie z zakładami produkcyjnymi z Jarocina?", "Tak. Automatyzujemy zamówienia, plan produkcji i dokumenty wysyłkowe."],
      ["Czy automatyzujecie organizację wydarzeń, takich jak festiwale?", "Tak. Zgłoszenia wykonawców, umowy, grafiki i rozliczenia mogą działać w jednym przepływie."],
      ["Czy jarocińska firma musi zmieniać system ERP?", "Nie. Budujemy połączenia wokół tego, co już działa."],
      ["Od czego firma z Jarocina powinna zacząć automatyzację?", "Od bezpłatnej, 30-minutowej konsultacji. Wskazujemy jeden proces z najszybszym zwrotem i przygotowujemy wycenę pierwszego etapu."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "krotoszyn",
    name: "Krotoszyn",
    nameGenitive: "Krotoszyna",
    nameLocative: "Krotoszynie",
    nearbyCitySlugs: ["jarocin", "rawicz", "ostrow-wielkopolski", "pleszew", "kalisz"],
    metaDescription:
      "Automatyzacja procesów dla firm z Krotoszyna: produkcja, przetwórstwo, handel i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy krotoszyńskim zakładom i firmom handlowym zamienić ręczne zamówienia i dokumenty w proste przepływy.",
    intro: [
      "Krotoszyn jest ośrodkiem produkcji i handlu w południowej Wielkopolsce. Działają tu zakłady produkcyjne, przetwórnie i firmy usługowe.",
      "Wiele krotoszyńskich firm to dostawcy dla większych zakładów z regionu.",
    ],
    localContext:
      "Krotoszyńskie firmy konkurują o pracowników z Ostrowem i Kaliszem. Automatyzacja pozwala obsłużyć więcej zamówień.",
    whyHere:
      "W Krotoszynie automatyzacja porządkuje zamówienia i dokumenty.",
    industries: [
      ["Produkcja dla większych zakładów", "Harmonogramy, zamówienia i dokumentacja dla odbiorców z regionu."],
      ["Przetwórstwo", "Dostawy surowca, partie i dokumenty jakości."],
      ["Handel", "Zamówienia od sklepów, stany i faktury."],
      ["Usługi", "Zgłoszenia, terminy i rozliczenia z klientami."],
    ],
    processes: [
      ["Zamówienia od większych zakładów", "Harmonogramy i zamówienia odbiorców trafiają do systemu automatycznie."],
      ["Zlecenie produkcyjne", "Zamówienie zamienia się w zlecenie z terminem i materiałami."],
      ["Dokumenty dla odbiorcy", "Protokoły i raporty jakości składane z danych produkcji."],
      ["Raport dla właściciela", "Sprzedaż, produkcja i należności w jednym widoku."],
    ],
    faq: [
      ["Czy pracujecie z krotoszyńskimi dostawcami większych zakładów z regionu?", "Tak. Harmonogramy, zamówienia i dokumentacja dla odbiorców to częste wdrożenia u dostawców."],
      ["Mamy w firmie kilka arkuszy, które się nie zgadzają. Co z tym zrobić?", "Łączymy je w jedną bazę danych, z której korzystają wszyscy. Wtedy automatyzacje działają na tych samych liczbach."],
      ["Czy przyjeżdżacie do Krotoszyna?", "Z Wrocławia mamy niedaleko, więc gdy trzeba, przyjeżdżamy. Większość pracy robimy zdalnie."],
      ["Czy małą firmę z Krotoszyna stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność oceniamy razem."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "automatyzacja-raportow", "integracje-systemow"],
  }),

  town({
    ...base,
    slug: "pleszew",
    name: "Pleszew",
    nameGenitive: "Pleszewa",
    nameLocative: "Pleszewie",
    nearbyCitySlugs: ["kalisz", "jarocin", "krotoszyn", "ostrow-wielkopolski", "konin"],
    metaDescription:
      "Automatyzacja procesów dla firm z Pleszewa: produkcja, rolnictwo, przetwórstwo i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy pleszewskim firmom uporządkować zamówienia, dostawy i rozliczenia.",
    intro: [
      "Pleszew leży między Kaliszem a Jarocinem. Lokalną gospodarkę tworzą zakłady produkcyjne, rolnictwo, przetwórstwo i handel.",
      "Małe i średnie firmy z Pleszewa obsługują odbiorców z całego regionu przy niewielkich zespołach.",
    ],
    localContext:
      "Pleszewskie firmy często działają rodzinnie. Automatyzacja zdejmuje z właściciela część pracy biurowej.",
    whyHere:
      "W Pleszewie automatyzacja zbiera zamówienia i dostawy w jednym miejscu.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki w firmach rodzinnych."],
      ["Rolnictwo", "Rozliczenia dostaw, dokumenty i terminy płatności."],
      ["Przetwórstwo", "Dostawy surowca, partie i sprzedaż do sklepów."],
      ["Handel", "Zamówienia z telefonu i maila, stany i faktury."],
    ],
    processes: [
      ["Zamówienia w firmie rodzinnej", "Zamówienia z telefonu, maila i komunikatorów w jednej liście."],
      ["Dostawy i skup", "Przyjęcie dostawy zapisane raz, widoczne w magazynie i rozliczeniach."],
      ["Faktury i należności", "Faktura po wydaniu, przypomnienie o płatności przed terminem."],
      ["Podsumowanie tygodnia", "Sprzedaż i zaległości w jednym mailu dla właściciela."],
    ],
    faq: [
      ["Prowadzimy firmę rodzinną w Pleszewie. Czy automatyzacja jest dla nas?", "Tak. W małych firmach, gdzie właściciel robi wszystko, każda zautomatyzowana czynność daje najwięcej ulgi."],
      ["Co pleszewska firma powinna zautomatyzować najpierw?", "Najczęściej zbieranie zamówień i przypomnienia o płatnościach. Na konsultacji sprawdzamy, co u was zajmuje najwięcej czasu."],
      ["Czy firma z Pleszewa potrzebuje działu IT?", "Nie. Wystarczy osoba, która zna proces. Konfigurację robimy my, a zespół dostaje instrukcję."],
      ["Czy współpraca z Pleszewa może być w pełni zdalna?", "Tak, cała współpraca może odbywać się zdalnie."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "kepno",
    name: "Kępno",
    nameGenitive: "Kępna",
    nameLocative: "Kępnie",
    nearbyCitySlugs: ["ostrow-wielkopolski", "ostrzeszow", "kalisz", "krotoszyn", "wroclaw"],
    metaDescription:
      "Automatyzacja procesów dla firm z Kępna: zagłębie meblowe, producenci i dostawcy, transport przy S8, handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy kępińskim producentom mebli, ich dostawcom i przewoźnikom uporządkować zamówienia, produkcję i wysyłki.",
    intro: [
      "Kępno jest jednym z największych w Polsce ośrodków produkcji mebli. W mieście i okolicy działają dziesiątki fabryk mebli tapicerowanych i skrzyniowych, a także dostawcy tkanin, pianek, okuć i firmy transportowe.",
      "Producenci mebli sprzedają w Polsce i za granicą, często przez sieci handlowe i sklepy internetowe. Zamówienia z wieloma wariantami tkanin i wymiarów łatwo pomylić przy ręcznej obsłudze.",
    ],
    localContext:
      "Kępińskie fabryki mebli obsługują zamówienia z wieloma wariantami: kolorami, tkaninami, wymiarami. Każda pomyłka w zamówieniu to reklamacja i koszt.",
    whyHere:
      "W Kępnie automatyzacja przenosi zamówienia z wariantami prosto do produkcji, bez przepisywania i pomyłek.",
    industries: [
      ["Producenci mebli", "Zamówienia z wariantami, zlecenia produkcyjne i wysyłki."],
      ["Dostawcy tkanin i komponentów", "Zamówienia od fabryk i terminy dostaw."],
      ["Transport mebli", "Trasy, dokumenty i statusy dostaw."],
      ["Sprzedaż internetowa", "Zamówienia, pytania klientów i reklamacje."],
    ],
    processes: [
      ["Zamówienie z wariantami", "Zamówienie ze sklepu lub od sieci trafia do produkcji z kompletem parametrów."],
      ["Status dla klienta", "Klient dostaje informację o terminie produkcji i dostawy."],
      ["Reklamacje", "Zgłoszenie ze zdjęciami trafia do właściwej osoby z historią zamówienia."],
      ["Planowanie transportu", "Gotowe zamówienia grupowane w dostawy według tras."],
    ],
    faq: [
      ["Czy pracujecie z fabrykami mebli?", "Tak. Automatyzujemy zamówienia z wariantami, zlecenia produkcyjne, reklamacje i wysyłki."],
      ["Czy łączycie się z platformami sprzedażowymi?", "Tak. Zamówienia z platform i sklepu trafiają do jednego systemu."],
      ["Czy przyjeżdżacie do Kępna?", "Z Wrocławia mamy blisko. Większość pracy robimy zdalnie, ale warsztat na miejscu to żaden problem."],
      ["Czy małą firmę z Kępna stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność oceniamy razem."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-w-obsludze-klienta", "integracje-systemow", "automatyzacja-dla-logistyki"],
  }),

  town({
    ...base,
    slug: "ostrzeszow",
    name: "Ostrzeszów",
    nameGenitive: "Ostrzeszowa",
    nameLocative: "Ostrzeszowie",
    nearbyCitySlugs: ["kepno", "ostrow-wielkopolski", "kalisz", "krotoszyn", "leszno"],
    metaDescription:
      "Automatyzacja procesów dla firm z Ostrzeszowa: produkcja szczotek i pędzli, meble, handel i eksport. Konsultacja 30 min.",
    heroLead:
      "Pomagamy ostrzeszowskim producentom uporządkować zamówienia, produkcję i sprzedaż krajową oraz zagraniczną.",
    intro: [
      "Ostrzeszów jest znany jako polskie zagłębie szczotkarskie: działają tu liczni producenci szczotek, pędzli i akcesoriów. Region jest też częścią zagłębia meblowego razem z pobliskim Kępnem.",
      "Wiele ostrzeszowskich firm eksportuje swoje wyroby. Zamówienia z wieloma pozycjami, dokumenty i faktury w kilku walutach to codzienność.",
    ],
    localContext:
      "Ostrzeszowscy producenci obsługują sieci handlowe i hurtownie z wieloma indeksami produktów. Ręczna obsługa zamówień jest pracochłonna.",
    whyHere:
      "W Ostrzeszowie automatyzacja przenosi zamówienia z wieloma pozycjami do systemu i przygotowuje dokumenty eksportowe.",
    industries: [
      ["Szczotki i pędzle", "Zamówienia z wieloma indeksami, stany i wysyłki do sieci i hurtowni."],
      ["Meble", "Zamówienia z wariantami, zlecenia produkcyjne i wysyłki."],
      ["Eksport", "Faktury i dokumenty wysyłkowe w walucie i języku klienta."],
      ["Handel", "Zamówienia od sklepów i stany magazynowe."],
    ],
    processes: [
      ["Zamówienia od sieci", "Zamówienie z pliku lub portalu trafia do systemu z pełną listą indeksów."],
      ["Faktury eksportowe", "Faktury w walucie klienta tworzone z danych zamówienia."],
      ["Stany indeksów", "Powiadomienie, gdy kończy się popularny produkt."],
      ["Wysyłki", "Dokumenty i etykiety tworzone przy pakowaniu."],
    ],
    faq: [
      ["Czy pracujecie z producentami szczotek i pędzli z Ostrzeszowa?", "Tak. Zamówienia z wieloma indeksami, stany, faktury eksportowe i wysyłki to typowy zakres."],
      ["Czy łączycie się z portalami sieci handlowych?", "Tak, jeśli pozwalają na wymianę danych przez API lub pliki. Sprawdzamy to na konsultacji."],
      ["Czy faktury eksportowe mogą powstawać automatycznie?", "Tak. Faktura w walucie i języku klienta tworzy się z danych zamówienia."],
      ["Czy przyjeżdżacie do Ostrzeszowa?", "Z Wrocławia mamy blisko. Większość pracy robimy zdalnie, a warsztat na miejscu organizujemy, gdy pomaga."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "integracje-systemow", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "kolo",
    name: "Koło",
    nameGenitive: "Koła",
    nameLocative: "Kole",
    nearbyCitySlugs: ["konin", "turek", "slupca", "kalisz", "lodz"],
    metaDescription:
      "Automatyzacja procesów dla firm z Koła: produkcja ceramiki, przetwórstwo, logistyka przy A2, handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy kolskim zakładom i firmom handlowym uporządkować zamówienia, produkcję i wysyłki.",
    intro: [
      "Koło leży nad Wartą, przy autostradzie A2. Miasto ma tradycje produkcji porcelany i ceramiki, a dziś lokalną gospodarkę tworzą produkcja, przetwórstwo, logistyka i handel.",
      "Położenie przy A2 sprzyja firmom, które obsługują klientów z Poznania, Łodzi i Warszawy.",
    ],
    localContext:
      "Kolskie firmy pracują z niewielkimi zespołami biurowymi, a zamówień i dokumentów przybywa.",
    whyHere:
      "W Kole automatyzacja przejmuje przepisywanie zamówień i przygotowanie dokumentów.",
    industries: [
      ["Ceramika i porcelana", "Zamówienia z wieloma pozycjami, produkcja i wysyłki."],
      ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości."],
      ["Logistyka przy A2", "Awizacje, dokumenty przewozowe i statusy dostaw."],
      ["Handel", "Zamówienia, stany i faktury dla klientów z regionu."],
    ],
    processes: [
      ["Zamówienia hurtowe na ceramikę", "Zamówienia z wieloma pozycjami trafiają do systemu bez przepisywania."],
      ["Plan produkcji", "Zamówienia grupowane w zlecenia według wzorów i terminów."],
      ["Wysyłki przy A2", "Dokumenty i etykiety tworzone przy pakowaniu."],
      ["Faktury", "Wysyłka uruchamia fakturę dla klienta."],
    ],
    faq: [
      ["Czy pracujecie z producentami ceramiki z Koła?", "Tak. Zamówienia z wieloma pozycjami, plan produkcji i wysyłki to procesy, które dobrze się automatyzują."],
      ["Czy firmy logistyczne przy A2 pod Kołem też z was korzystają?", "Tak. Awizacje, statusy i dokumenty przewozowe."],
      ["Czy firma z Koła musi zmieniać programy?", "Zwykle nie. Łączymy narzędzia, których już używacie."],
      ["Jaki jest pierwszy krok dla firmy z Koła?", "Krótka rozmowa online o tym, co zabiera zespołowi najwięcej czasu. Potem przegląd wybranego procesu i wycena."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "slupca",
    name: "Słupca",
    nameGenitive: "Słupcy",
    nameLocative: "Słupcy",
    nearbyCitySlugs: ["konin", "wrzesnia", "gniezno", "kolo", "poznan"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Słupcy: rolnictwo, przetwórstwo, produkcja i logistyka przy A2. Konsultacja 30 min.",
    heroLead:
      "Pomagamy słupeckim firmom uporządkować zamówienia, dostawy i rozliczenia.",
    intro: [
      "Słupca leży przy autostradzie A2, między Wrześnią a Koninem. Lokalną gospodarkę tworzą rolnictwo, przetwórstwo, produkcja i logistyka.",
      "Bliskość Wrześni sprawia, że część firm działa jako dostawcy i usługodawcy dla tamtejszego przemysłu.",
    ],
    localContext:
      "Słupeckie firmy są niewielkie, a klientów i dokumentów przybywa. Automatyzacja odciąża zespół.",
    whyHere:
      "W Słupcy automatyzacja zbiera zamówienia i dostawy w jednym miejscu.",
    industries: [
      ["Dostawcy przemysłu", "Zlecenia i dokumentacja dla zakładów z Wrześni i Konina."],
      ["Rolnictwo", "Rozliczenia dostaw, dokumenty i terminy płatności."],
      ["Przetwórstwo", "Dostawy surowca, partie i sprzedaż."],
      ["Logistyka przy A2", "Awizacje i dokumenty przewozowe."],
    ],
    processes: [
      ["Zlecenia od zakładów z Wrześni", "Zlecenia i harmonogramy odbiorcy trafiają do planu bez przepisywania."],
      ["Dostawy od gospodarstw", "Przyjęcia zapisane raz, z ilością i jakością."],
      ["Rozliczenia", "Zestawienia dla dostawców i odbiorców przygotowane automatycznie."],
      ["Przypomnienia o płatnościach", "Klienci dostają przypomnienie przed terminem."],
    ],
    faq: [
      ["Czy pracujecie ze słupeckimi firmami obsługującymi zakłady we Wrześni?", "Tak. Harmonogramy, zlecenia i dokumentacja dla odbiorców to częste wdrożenia."],
      ["Czy automatyzujecie firmy rolne z powiatu słupeckiego?", "Tak. Skup, rozliczenia z dostawcami i sprzedaż."],
      ["Czy automatyzacja ma sens w małej firmie ze Słupcy?", "Tak. W małych zespołach każda zautomatyzowana czynność daje szybko odczuwalną ulgę."],
      ["Czy wdrożenie odciągnie nasz zespół w Słupcy od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "turek",
    name: "Turek",
    nameGenitive: "Turku",
    nameLocative: "Turku",
    nearbyCitySlugs: ["konin", "kolo", "kalisz", "lodz", "slupca"],
    metaDescription:
      "Automatyzacja procesów dla firm z Turku: produkcja, tradycje włókiennicze, energetyka i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy tureckim zakładom i firmom usługowym uporządkować zamówienia, dokumenty i rozliczenia.",
    intro: [
      "Turek ma tradycje tkackie i włókiennicze, a region był związany z wydobyciem węgla brunatnego. Dziś lokalną gospodarkę tworzą produkcja, przetwórstwo, usługi i handel.",
      "Tureckie firmy szukają nowych klientów i rynków. Sprawna obsługa ofert i dokumentów pomaga w tej zmianie.",
    ],
    localContext:
      "Tureckie firmy pracują z małymi zespołami biurowymi. Każda zautomatyzowana czynność odciąża.",
    whyHere:
      "W Turku automatyzacja przyspiesza oferty i rozliczenia.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki dla odbiorców z kraju."],
      ["Włókiennictwo", "Zamówienia z rozmiarami i kolorami, terminy i wysyłki."],
      ["Usługi dla energetyki", "Karty pracy, protokoły i rozliczenia zleceń."],
      ["Handel", "Zamówienia, stany i faktury dla sklepów z regionu."],
    ],
    processes: [
      ["Zapytania od nowych klientów", "Zapytanie zamienia się w ofertę z szablonu w kilka minut."],
      ["Zamówienia tekstyliów", "Zamówienia z rozmiarami i kolorami trafiają do produkcji bez pomyłek."],
      ["Rozliczenie zlecenia", "Zakończone zlecenie uruchamia fakturę."],
      ["Raport przychodów", "Przychody według klientów, żeby widzieć, kto przynosi zysk."],
    ],
    faq: [
      ["Firmy z Turku szukają nowych klientów. Jak pomaga automatyzacja?", "Porządkuje sprzedaż: zapytania, oferty i przypomnienia, żeby żaden kontakt nie przepadł, a oferta wychodziła szybciej."],
      ["Czy pracujecie z firmami włókienniczymi?", "Tak. Zamówienia z rozmiarami i kolorami, zlecenia i wysyłki."],
      ["Czy firma z Turku musi zmieniać system?", "Zwykle nie. Łączymy to, czego już używacie."],
      ["Ile kosztuje automatyzacja w firmie z Turku?", "Zależy od procesu i liczby systemów do połączenia. Wycenę pierwszego etapu dostajecie po bezpłatnej konsultacji, zanim zaczniemy pracę."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-firm-uslugowych", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "chodziez",
    name: "Chodzież",
    nameGenitive: "Chodzieży",
    nameLocative: "Chodzieży",
    nearbyCitySlugs: ["pila", "czarnkow", "wagrowiec", "oborniki", "poznan"],
    metaDescription:
      "Automatyzacja procesów dla firm z Chodzieży: produkcja porcelany, przetwórstwo, handel i turystyka. Konsultacja 30 min.",
    heroLead:
      "Pomagamy chodzieskim producentom i firmom handlowym uporządkować zamówienia, produkcję i wysyłki.",
    intro: [
      "Chodzież jest znana z produkcji porcelany z długą tradycją. Lokalną gospodarkę tworzą też przetwórstwo, handel i turystyka w okolicy jezior i lasów.",
      "Producenci porcelany sprzedają w kraju i za granicą, obsługując hurtownie, sieci i klientów internetowych.",
    ],
    localContext:
      "Chodzieskie firmy obsługują zamówienia z wieloma wzorami i pozycjami. Ręczna obsługa jest pracochłonna.",
    whyHere:
      "W Chodzieży automatyzacja porządkuje zamówienia i wysyłki.",
    industries: [
      ["Porcelana", "Zamówienia z wieloma wzorami, produkcja, sprzedaż internetowa i eksport."],
      ["Przetwórstwo", "Dostawy surowca, partie i dokumenty jakości."],
      ["Handel", "Zamówienia od sklepów i hurtowni, stany i faktury."],
      ["Turystyka", "Rezerwacje noclegów i pytania gości w sezonie."],
    ],
    processes: [
      ["Zamówienia z wieloma wzorami", "Zamówienia hurtowni i sieci trafiają do systemu z pełną listą pozycji."],
      ["Stany wzorów", "Powiadomienie, gdy kończy się popularny wzór."],
      ["Sprzedaż internetowa", "Zamówienia ze sklepu, etykiety i powiadomienia dla klientów."],
      ["Faktury eksportowe", "Faktura w walucie klienta tworzona z danych zamówienia."],
    ],
    faq: [
      ["Czy pracujecie z producentami porcelany z Chodzieży?", "Tak. Zamówienia z wieloma pozycjami, stany wzorów, sprzedaż internetowa i eksport."],
      ["Czy łączycie sklep internetowy z magazynem?", "Tak. Stany są wtedy aktualne we wszystkich kanałach sprzedaży."],
      ["Czy automatyzujecie obiekty turystyczne w okolicach Chodzieży?", "Tak. Rezerwacje, zaliczki i pytania gości."],
      ["Czy wdrożenie odciągnie zespół z Chodzieży od codziennej pracy?", "Staramy się, żeby nie odciągało. Spotkania są krótkie i online, a większość pracy wykonujemy po naszej stronie."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "integracje-systemow", "automatyzacja-dla-ksiegowosci"],
  }),

  town({
    ...base,
    slug: "czarnkow",
    name: "Czarnków",
    nameGenitive: "Czarnkowa",
    nameLocative: "Czarnkowie",
    nearbyCitySlugs: ["pila", "chodziez", "szamotuly", "oborniki", "zlotow"],
    metaDescription:
      "Automatyzacja procesów dla firm z Czarnkowa: rolnictwo, przetwórstwo, produkcja i handel nad Notecią. Konsultacja 30 min.",
    heroLead:
      "Pomagamy czarnkowskim firmom uporządkować zamówienia, dostawy i faktury.",
    intro: [
      "Czarnków leży nad Notecią, w północnej Wielkopolsce. Lokalną gospodarkę tworzą rolnictwo, przetwórstwo, produkcja i handel.",
      "Małe firmy z regionu obsługują gospodarstwa i odbiorców z Piły i Poznania.",
    ],
    localContext:
      "Czarnkowskie firmy działają z niewielkimi zespołami. Zamówienia przychodzą telefonicznie i mailowo.",
    whyHere:
      "W Czarnkowie automatyzacja zbiera zamówienia w jednym miejscu i pilnuje płatności.",
    industries: [
      ["Handel dla rolnictwa", "Zamówienia pasz, nawozów i części z odroczonymi płatnościami."],
      ["Przetwórstwo", "Dostawy surowca, partie i sprzedaż."],
      ["Produkcja", "Zlecenia i wysyłki dla odbiorców z Piły i Poznania."],
      ["Usługi", "Zapisy, terminy i przypomnienia dla klientów."],
    ],
    processes: [
      ["Zamówienia od gospodarstw", "Zamówienia pasz, nawozów czy części zebrane w jednej liście."],
      ["Terminy płatności", "Przypomnienia o płatnościach odroczonych wysyłane automatycznie."],
      ["Dostawy", "Przyjęcie dostawy zapisane raz, widoczne w magazynie."],
      ["Faktury", "Faktura tworzona z danych zamówienia."],
    ],
    faq: [
      ["Czy pracujecie z firmami z Czarnkowa obsługującymi rolników?", "Tak. Zamówienia, dostawy i pilnowanie odroczonych płatności to typowy zakres."],
      ["Czy klienci muszą składać zamówienia przez internet?", "Nie muszą. Zamówienie przyjęte telefonicznie zapisujecie w prostym formularzu, a reszta dzieje się sama."],
      ["Czy łączycie się z programem do faktur, którego używamy?", "Tak, jeśli pozwala na wymianę danych. Sprawdzamy to na konsultacji."],
      ["Ile kosztuje wdrożenie w Czarnkowie?", "Wycenę pierwszego etapu przygotowujemy po bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "automatyzacja-w-produkcji", "doradztwo-i-optymalizacja-procesow-biznesowych"],
  }),

  town({
    ...base,
    slug: "wagrowiec",
    name: "Wągrowiec",
    nameGenitive: "Wągrowca",
    nameLocative: "Wągrowcu",
    nearbyCitySlugs: ["gniezno", "chodziez", "oborniki", "pila", "poznan"],
    metaDescription:
      "Automatyzacja procesów dla firm z Wągrowca: produkcja, przetwórstwo, turystyka nad jeziorami i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy wągrowieckim zakładom i firmom turystycznym uporządkować zamówienia i rezerwacje.",
    intro: [
      "Wągrowiec leży nad jeziorami, na północ od Poznania. Lokalną gospodarkę tworzą zakłady produkcyjne, przetwórstwo, handel i turystyka.",
      "Firmy z Wągrowca obsługują klientów z Poznania i całej Wielkopolski.",
    ],
    localContext:
      "Wągrowieckie firmy działają z małymi zespołami, a w sezonie turystycznym rośnie liczba rezerwacji.",
    whyHere:
      "W Wągrowcu automatyzacja porządkuje zamówienia i rezerwacje.",
    industries: [
      ["Produkcja", "Zlecenia, materiały i wysyłki dla klientów z Poznania i regionu."],
      ["Przetwórstwo spożywcze", "Dostawy surowca, partie i dokumenty jakości."],
      ["Turystyka nad jeziorami", "Rezerwacje ośrodków, zaliczki i pytania gości."],
      ["Handel", "Zamówienia, stany i faktury."],
    ],
    processes: [
      ["Zamówienia", "Zamówienie z maila odczytane i przygotowane do akceptacji."],
      ["Zlecenia produkcyjne", "Zamówienie zamienia się w zlecenie z terminem."],
      ["Rezerwacje nad jeziorami", "Rezerwacja z potwierdzeniem i zaliczką."],
      ["Raport sprzedaży", "Sprzedaż i należności w jednym zestawieniu."],
    ],
    faq: [
      ["Czy pracujecie z zakładami z Wągrowca?", "Tak. Automatyzujemy zamówienia, zlecenia i dokumenty, na narzędziach, których już używacie."],
      ["Czy automatyzujecie ośrodki wypoczynkowe nad jeziorami Wągrowca?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania gości."],
      ["Czy firma z Wągrowca może współpracować z wami całkowicie zdalnie?", "Tak. Rozmowy, przegląd procesu i wdrożenie prowadzimy online, na waszych kontach w narzędziach, których już używacie."],
      ["Jaki jest pierwszy krok dla firmy z Wągrowca?", "Krótka rozmowa online o tym, co zabiera zespołowi najwięcej czasu. Potem przegląd wybranego procesu i wycena."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy"],
  }),

  town({
    ...base,
    slug: "zlotow",
    name: "Złotów",
    nameGenitive: "Złotowa",
    nameLocative: "Złotowie",
    nearbyCitySlugs: ["pila", "czarnkow", "chodziez", "szczecin", "koszalin"],
    metaDescription:
      "Automatyzacja procesów dla firm ze Złotowa: rolnictwo, przetwórstwo, przemysł drzewny i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy złotowskim firmom zamienić ręczne zamówienia, dostawy i faktury w proste przepływy.",
    intro: [
      "Złotów leży na północnym krańcu Wielkopolski, w otoczeniu lasów i jezior. Lokalną gospodarkę tworzą rolnictwo, przetwórstwo, przemysł drzewny i handel.",
      "Małe firmy z regionu obsługują klientów z Piły i Pomorza przy niewielkich zespołach.",
    ],
    localContext:
      "Złotowskie firmy często działają rodzinnie. Zamówienia i rozliczenia prowadzi się ręcznie.",
    whyHere:
      "W Złotowie automatyzacja zbiera zamówienia w jednym miejscu i przygotowuje dokumenty.",
    industries: [
      ["Przemysł drzewny", "Zamówienia z wymiarami, terminy produkcji i wysyłki."],
      ["Rolnictwo", "Rozliczenia dostaw, zamówienia i terminy płatności."],
      ["Przetwórstwo", "Dostawy surowca, partie i sprzedaż do sklepów."],
      ["Handel", "Zamówienia i faktury dla klientów z Piły i Pomorza."],
    ],
    processes: [
      ["Zamówienia drewna i wyrobów", "Zamówienia z wymiarami trafiają do planu produkcji."],
      ["Dostawy surowca", "Przyjęcie zapisane raz, widoczne w magazynie i rozliczeniach."],
      ["Faktury", "Faktura tworzona po wydaniu."],
      ["Należności", "Przypomnienia o płatnościach przed terminem."],
    ],
    faq: [
      ["Czy pracujecie z zakładami drzewnymi z okolic Złotowa?", "Tak. Zamówienia z wymiarami, zlecenia i wysyłki."],
      ["Czy firma rodzinna ze Złotowa może zacząć małym krokiem?", "Tak. Zaczynamy od jednego procesu, żeby szybko odczuć efekt przy niewielkim koszcie."],
      ["Czy firma ze Złotowa może zacząć bez spotkania na żywo?", "Tak. Pierwsza rozmowa i cały przegląd procesu odbywają się online. Wystarczy komputer i kilka przykładowych dokumentów."],
      ["Czy małą firmę ze Złotowa stać na automatyzację?", "Zaczynamy od jednego, wąskiego procesu, więc pierwszy etap jest zwykle niewielkim wydatkiem. Opłacalność oceniamy razem."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "automatyzacja-sprzedazy", "automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow"],
  }),
];
