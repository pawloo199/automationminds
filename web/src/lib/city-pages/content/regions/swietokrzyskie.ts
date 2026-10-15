import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "świętokrzyskie", regionCluster: "swietokrzyskie", updatedAt: "2026-10-15" } as const;

export const swietokrzyskieRegion = region({
  slug: "swietokrzyskie",
  intro: [
    "Świętokrzyskie ma jedną z najstarszych tradycji przemysłowych w Polsce. Staropolski Okręg Przemysłowy dał początek hutnictwu i metalurgii w Ostrowcu Świętokrzyskim, Starachowicach i Skarżysku-Kamiennej, które do dziś są ośrodkami przemysłu metalowego i maszynowego.",
    "Region jest też jednym z najważniejszych w kraju zagłębi surowców skalnych. Wapienie i inne skały z okolic Kielc trafiają do cementowni, wapienników i firm produkujących materiały budowlane.",
    "Kielce są stolicą regionu i ważnym ośrodkiem targowym, a południe województwa to sady wokół Sandomierza, uzdrowiska w Busku-Zdroju i rolnictwo na żyznych ziemiach Ponidzia.",
    "Z firmami ze Świętokrzyskiego pracujemy zdalnie, a na warsztaty przyjeżdżamy, gdy przyspieszają projekt.",
  ],
  industries: [
    ["Przemysł metalowy i maszynowy", "Zapytania ofertowe, zlecenia, dokumentacja techniczna i reklamacje w Ostrowcu, Starachowicach i Skarżysku."],
    ["Surowce skalne i materiały budowlane", "Zamówienia, wydania, dokumenty dostaw i rozliczenia z odbiorcami."],
    ["Targi i usługi dla biznesu", "Rejestracje wystawców, oferty, umowy i rozliczenia w Kielcach."],
    ["Sadownictwo i przetwórstwo", "Dostawy owoców, partie, dokumenty jakości i sprzedaż do sieci w okolicy Sandomierza."],
    ["Uzdrowiska i turystyka", "Rezerwacje pobytów, zabiegi i pytania gości w Busku-Zdroju i Górach Świętokrzyskich."],
  ],
  faq: [
    ["Czy macie biuro w Kielcach?", "Nie. Z firmami ze Świętokrzyskiego pracujemy zdalnie, a na warsztaty na miejscu przyjeżdżamy, gdy przyspieszają projekt."],
    ["Czy pracujecie z zakładami przemysłowymi?", "Tak, w procesach wokół produkcji: wyceny, zamówienia, zakupy, reklamacje, utrzymanie ruchu i dokumentacja. Nie ingerujemy w sterowanie maszynami."],
    ["Czy automatyzujecie sady i firmy przetwórcze?", "Tak. Dostawy, partie, dokumenty jakości i zamówienia od sieci handlowych."],
    ["Od czego zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces z najszybszym zwrotem."],
  ],
});

export const swietokrzyskieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "kielce",
    name: "Kielce",
    nameGenitive: "Kielc",
    nameLocative: "Kielcach",
    nearbyCitySlugs: ["skarzysko-kamienna", "jedrzejow", "busko-zdroj", "starachowice", "ostrowiec-swietokrzyski", "konskie"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Kielc: targi i usługi, budownictwo, surowce, produkcja i handel. Konsultacja 30 min.",
    heroLead:
      "Pomagamy kieleckim firmom usługowym, budowlanym i produkcyjnym przejąć powtarzalną pracę z dokumentami, ofertami i rozliczeniami.",
    intro: [
      "Kielce są stolicą województwa i jego głównym ośrodkiem usług, handlu i edukacji. Miasto jest znane z jednego z największych w Polsce centrów targowych, które przyciąga wystawców i gości z całego kraju i zagranicy.",
      "W okolicy Kielc wydobywa się surowce skalne, a w mieście działają firmy budowlane, produkcyjne, handlowe i usługowe, które z nich korzystają lub je obsługują.",
    ],
    localContext:
      "Kieleckie firmy często pracują projektowo: targi, budowy, dostawy materiałów, usługi dla dużych klientów. To dużo ofert, umów, terminów i rozliczeń w krótkim czasie.",
    whyHere:
      "W Kielcach automatyzacja przyspiesza oferty i obsługę klientów w szczytach, a rozliczenia projektów nie wymagają składania danych z kilku arkuszy.",
    economy: {
      title: "Czym żyje kielecki biznes",
      paragraphs: [
        "Kielce są ważnym ośrodkiem targowym. Wokół targów działa sieć firm zabudowy stoisk, logistyki, hoteli, gastronomii i organizacji wydarzeń.",
        "Region wokół miasta to zagłębie surowców skalnych, a z nim cementownie, wapienniki, firmy produkujące materiały budowlane i transport.",
        "Miasto jest też centrum usług, administracji i uczelni dla całego województwa, z rosnącą liczbą firm IT i usług dla biznesu.",
      ],
    },
    industries: [
      ["Targi i wydarzenia", "Rejestracje wystawców, oferty zabudowy, umowy, logistyka i rozliczenia."],
      ["Budownictwo i materiały budowlane", "Oferty, kosztorysy, zamówienia materiałów i rozliczenia podwykonawców."],
      ["Usługi dla firm", "Zapytania, umowy, czas pracy i faktury."],
      ["Handel i dystrybucja", "Zamówienia, stany i należności."],
    ],
    processes: [
      ["Obsługa zapytań wystawców", "Zapytania z formularza i maili w CRM, z szablonem oferty."],
      ["Oferty i kosztorysy", "Szkic oferty z cennika i podobnych projektów."],
      ["Rozliczenie projektu", "Koszty i godziny przypisane do projektu na bieżąco."],
      ["Należności", "Przypomnienia o płatnościach i raport przeterminowanych faktur."],
    ],
    example: {
      title: "Obsługa wystawcy w kieleckiej firmie zabudowy targowej przed i po automatyzacji",
      lead: "Przykład firmy, która projektuje i buduje stoiska na targi w Kielcach. Tak zmienia się obsługa jednego wystawcy.",
      rows: [
        ["Zapytanie", "Mail lub telefon, notatka w kalendarzu handlowca.", "Formularz z wymiarami stoiska i terminem, zapytanie w CRM."],
        ["Oferta", "Liczona od zera w arkuszu.", "Szkic oferty z cennika elementów i podobnych stoisk."],
        ["Przygotowanie", "Ustalenia w mailach, lista zadań w głowie kierownika.", "Lista zadań i terminów dla projektanta, magazynu i ekipy."],
        ["Rozliczenie", "Koszty zbierane po targach z kilku miejsc.", "Koszty przypisane do projektu na bieżąco, faktura po odbiorze."],
      ],
    },
    faq: [
      ["Czy pracujecie z firmami obsługującymi targi w Kielcach?", "Tak. Zapytania wystawców, oferty, harmonogramy i rozliczenia projektów to typowe wdrożenia."],
      ["Czy automatyzujecie kieleckie firmy budowlane?", "Tak. Oferty, raporty z budowy, zamówienia materiałów i rozliczenia podwykonawców."],
      ["Czy pracujecie zdalnie?", "Tak, a na warsztat w Kielcach przyjeżdżamy, gdy przyspiesza projekt."],
      ["Ile trwa pierwsze wdrożenie?", "Zwykle kilka tygodni od konsultacji do działającego procesu."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "automatyzacja-raportow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "ostrowiec-swietokrzyski",
    name: "Ostrowiec Świętokrzyski",
    nameGenitive: "Ostrowca Świętokrzyskiego",
    nameLocative: "Ostrowcu Świętokrzyskim",
    nearbyCitySlugs: ["starachowice", "skarzysko-kamienna", "opatow", "sandomierz", "kielce"],
    metaDescription:
      "Automatyzacja dla firm z Ostrowca Świętokrzyskiego: hutnictwo, przemysł metalowy, podwykonawcy i usługi. Dokumentacja i zlecenia bez przepisywania.",
    heroLead:
      "Pomagamy ostrowieckim firmom metalowym i podwykonawcom przemysłu uporządkować zlecenia, dokumentację i rozliczenia.",
    intro: [
      "Ostrowiec Świętokrzyski jest jednym z najstarszych ośrodków hutniczych w Polsce. Huta i zakłady metalowe od pokoleń tworzą lokalną gospodarkę, a wokół nich działają firmy serwisowe, remontowe i transportowe.",
      "To największe miasto wschodniej części regionu i centrum handlu oraz usług dla okolicznych gmin.",
    ],
    localContext:
      "Firmy z Ostrowca pracują często dla dużych zakładów, które wymagają szczegółowej dokumentacji, protokołów i raportów.",
    whyHere:
      "W Ostrowcu automatyzacja zdejmuje z kierowników kompletowanie dokumentacji i protokołów, a rozliczenia zleceń są gotowe szybciej.",
    economy: {
      title: "Czym żyje ostrowiecki biznes",
      paragraphs: [
        "Hutnictwo i przetwórstwo stali to fundament lokalnej gospodarki. Wokół huty działają firmy serwisowe, remontowe, transportowe i produkujące wyroby z metalu.",
        "Miasto jest też ośrodkiem handlu i usług dla wschodniej części województwa.",
      ],
    },
    industries: [
      ["Hutnictwo i metal", "Zapytania ofertowe, zlecenia, świadectwa jakości i reklamacje."],
      ["Serwis i remonty przemysłowe", "Zlecenia, uprawnienia pracowników, protokoły i rozliczenia."],
      ["Transport", "Zlecenia przewozowe, dokumenty i rozliczenia."],
      ["Handel i usługi", "Zamówienia, faktury i należności."],
    ],
    processes: [
      ["Świadectwa jakości", "Dokumenty przypisane do partii i wysyłane z dostawą."],
      ["Rejestr uprawnień", "Terminy badań i szkoleń z przypomnieniem przed wygaśnięciem."],
      ["Protokoły z prac", "Formularz na telefonie ze zdjęciami zamiast notatek."],
      ["Rozliczenia zleceń", "Godziny i materiały przypisane do zlecenia na bieżąco."],
    ],
    faq: [
      ["Czy pracujecie z firmami obsługującymi hutę?", "Tak. Zlecenia, dokumentacja, uprawnienia pracowników i rozliczenia."],
      ["Czy automatyzacja dotyka produkcji?", "Nie. Pracujemy w procesach biurowych i dokumentacji wokół produkcji."],
      ["Czy obsłużycie świadectwa jakości?", "Tak. Rejestr świadectw przypisanych do partii i dostaw."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "ai-w-obsludze-dokumentow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "starachowice",
    name: "Starachowice",
    nameGenitive: "Starachowic",
    nameLocative: "Starachowicach",
    nearbyCitySlugs: ["skarzysko-kamienna", "ostrowiec-swietokrzyski", "kielce", "konskie", "radom"],
    metaDescription:
      "Automatyzacja dla firm ze Starachowic: przemysł motoryzacyjny i maszynowy, dostawcy, logistyka i usługi. Zamówienia i dokumentacja bez przepisywania.",
    heroLead:
      "Pomagamy starachowickim zakładom i ich dostawcom uporządkować zamówienia, dokumentację jakości i rozliczenia.",
    intro: [
      "Starachowice mają długą tradycję przemysłu maszynowego i motoryzacyjnego. Produkcja pojazdów i części od dziesięcioleci tworzy lokalną gospodarkę, a w strefie ekonomicznej działają też inne zakłady.",
      "Wokół dużych producentów działa sieć dostawców, firm serwisowych i logistycznych.",
    ],
    localContext:
      "Dostawcy przemysłu motoryzacyjnego ze Starachowic pracują według wymagań klientów: zamówienia z portali, raporty jakości, reklamacje w formacie 8D.",
    whyHere:
      "W Starachowicach automatyzacja pomaga dostawcom spełniać wymagania odbiorców bez dokładania pracy w biurze i dziale jakości.",
    industries: [
      ["Motoryzacja", "Zamówienia z portali, dokumentacja jakości i reklamacje."],
      ["Przemysł maszynowy", "Zapytania ofertowe, zlecenia i dokumentacja techniczna."],
      ["Logistyka", "Dostawy, awizacje i dokumenty."],
      ["Usługi", "Zapytania, terminy i faktury."],
    ],
    processes: [
      ["Zamówienia z portali klientów", "Pobierane automatycznie i przekazywane do systemu."],
      ["Reklamacje 8D", "Rejestr z danymi partii i szkicem raportu w formacie klienta."],
      ["Przeglądy maszyn", "Plan przeglądów z przypomnieniami i protokołami."],
      ["Raport jakości", "Wskaźniki reklamacji i dostaw zbierane automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z dostawcami branży motoryzacyjnej?", "Tak. Zamówienia z portali, dokumentacja jakości, reklamacje i raporty."],
      ["Czy obsłużycie raporty 8D?", "Tak, w formacie wymaganym przez klientów."],
      ["Czy musimy zmieniać ERP?", "Nie. Budujemy obok systemów, których używacie."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-raportow", "ai-w-obsludze-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "skarzysko-kamienna",
    name: "Skarżysko-Kamienna",
    nameGenitive: "Skarżyska-Kamiennej",
    nameLocative: "Skarżysku-Kamiennej",
    nearbyCitySlugs: ["starachowice", "konskie", "kielce", "radom", "ostrowiec-swietokrzyski"],
    metaDescription:
      "Automatyzacja dla firm ze Skarżyska-Kamiennej: przemysł metalowy i zbrojeniowy, kolej, podwykonawcy i usługi. Dokumentacja bez przepisywania.",
    heroLead:
      "Pomagamy firmom ze Skarżyska-Kamiennej uporządkować zlecenia, dokumentację i rozliczenia w przemyśle i usługach.",
    intro: [
      "Skarżysko-Kamienna ma tradycję przemysłu metalowego i zbrojeniowego, a także jest ważnym węzłem kolejowym. Wokół dużych zakładów działają firmy kooperujące, serwisowe i transportowe.",
      "Miasto obsługuje też powiat jako ośrodek handlu i usług.",
    ],
    localContext:
      "Firmy ze Skarżyska pracują dla zakładów o wysokich wymaganiach dotyczących dokumentacji, kontroli jakości i poufności.",
    whyHere:
      "W Skarżysku-Kamiennej automatyzacja porządkuje dokumentację i zlecenia, z naciskiem na kontrolę dostępu do danych.",
    industries: [
      ["Przemysł metalowy", "Zlecenia, dokumentacja techniczna i jakości."],
      ["Kooperanci przemysłu", "Zamówienia, terminy, protokoły i rozliczenia."],
      ["Kolej i transport", "Zlecenia, dokumenty i harmonogramy."],
      ["Handel i usługi", "Zamówienia i faktury."],
    ],
    processes: [
      ["Dokumentacja techniczna", "Wersje rysunków i instrukcji w rejestrze z uprawnieniami."],
      ["Zlecenia od kooperantów", "Terminy i statusy widoczne bez telefonów."],
      ["Kontrola jakości", "Wyniki pomiarów i protokoły przypisane do partii."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
    ],
    faq: [
      ["Czy dane mogą zostać na naszym serwerze?", "Tak. Automatyzacje mogą działać w infrastrukturze firmy, bez wysyłania danych na zewnątrz."],
      ["Czy pracujecie z kooperantami przemysłu?", "Tak. Zlecenia, dokumentacja, terminy i rozliczenia."],
      ["Czy automatyzacja dotyka produkcji?", "Nie. Pracujemy w procesach biurowych i dokumentacji."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "konskie",
    name: "Końskie",
    nameGenitive: "Końskich",
    nameLocative: "Końskich",
    nearbyCitySlugs: ["skarzysko-kamienna", "wloszczowa", "kielce", "radom", "starachowice"],
    metaDescription:
      "Automatyzacja dla firm z Końskich: ceramika, produkcja, handel i usługi. Zamówienia, dokumenty dostaw i faktury bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy koneckim zakładom i firmom handlowym uporządkować zamówienia, dostawy i dokumenty.",
    intro: [
      "Końskie mają tradycję przemysłu ceramicznego i metalowego. Dziś działają tu zakłady produkcyjne, firmy handlowe i usługowe obsługujące północną część regionu.",
      "Miasto leży między Kielcami a Radomiem i Łodzią, więc wiele firm ma klientów w kilku województwach.",
    ],
    localContext:
      "Koneckie zakłady sprzedają do hurtowni i sieci budowlanych w całej Polsce, z zamówieniami, dostawami i reklamacjami do obsłużenia każdego dnia.",
    whyHere:
      "W Końskich automatyzacja przyspiesza przyjmowanie zamówień i obsługę dostaw, a biuro nie przepisuje danych z maili.",
    industries: [
      ["Ceramika i materiały budowlane", "Zamówienia od hurtowni, dostawy i reklamacje."],
      ["Produkcja metalowa", "Zlecenia, zakupy i dokumentacja."],
      ["Handel", "Zamówienia, stany i faktury."],
      ["Usługi", "Zapytania i terminy."],
    ],
    processes: [
      ["Zamówienia od hurtowni", "Zamówienia z maili i PDF odczytane przez AI i zapisane w systemie."],
      ["Awizacje dostaw", "Terminy dostaw potwierdzane automatycznie."],
      ["Reklamacje transportowe", "Zgłoszenie ze zdjęciami i terminem odpowiedzi."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z producentami ceramiki?", "Tak. Zamówienia, dostawy, reklamacje i raporty sprzedaży."],
      ["Czy AI odczyta zamówienia od hurtowni?", "Tak, z maili, PDF i arkuszy, z kontrolą przez handlowca."],
      ["Czy pracujecie zdalnie?", "Tak, z możliwością warsztatu na miejscu."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "automatyzacja-dla-logistyki", "automatyzacja-sprzedazy"],
  }),
  town({
    ...base,
    slug: "sandomierz",
    name: "Sandomierz",
    nameGenitive: "Sandomierza",
    nameLocative: "Sandomierzu",
    nearbyCitySlugs: ["opatow", "staszow", "ostrowiec-swietokrzyski", "tarnobrzeg", "kielce"],
    metaDescription:
      "Automatyzacja dla firm z Sandomierza: sadownictwo i przetwórstwo, przemysł szklarski, turystyka i usługi. Konsultacja 30 min.",
    heroLead:
      "Pomagamy sandomierskim sadom, zakładom i obiektom turystycznym uporządkować dostawy, zamówienia i rezerwacje.",
    intro: [
      "Sandomierz jest jednym z najpiękniejszych historycznych miast Polski i ważnym ośrodkiem turystyki. Okolice to jedno z największych zagłębi sadowniczych w kraju, z grupami producentów, chłodniami i przetwórniami owoców.",
      "W mieście działa też przemysł, w tym szklarski, a firmy usługowe obsługują turystów i mieszkańców.",
    ],
    localContext:
      "Sandomierskie gospodarstwa sadownicze i grupy producentów sprzedają do sieci handlowych i na eksport, z wymaganiami dotyczącymi partii, dokumentów jakości i terminów dostaw.",
    whyHere:
      "W Sandomierzu automatyzacja porządkuje dostawy owoców, partie i zamówienia od sieci, a obiekty turystyczne obsługują rezerwacje bez ręcznych maili.",
    economy: {
      title: "Czym żyje sandomierski biznes",
      paragraphs: [
        "Sadownictwo jest najważniejszą gałęzią rolnictwa w okolicy. Działają tu grupy producentów, chłodnie, sortownie i przetwórnie, które sprzedają owoce w kraju i za granicą.",
        "Turystyka opiera się na zabytkach starego miasta i Wiśle, a w mieście działa też przemysł szklarski.",
      ],
    },
    industries: [
      ["Sadownictwo i grupy producentów", "Dostawy od sadowników, partie, sortowanie i sprzedaż do sieci."],
      ["Przetwórstwo owoców", "Zamówienia, dokumenty jakości i reklamacje."],
      ["Turystyka i gastronomia", "Rezerwacje, grupy i pytania gości."],
      ["Przemysł", "Zamówienia, zakupy i dokumentacja."],
    ],
    processes: [
      ["Przyjęcie dostaw od sadowników", "Dostawy zapisane z wagą, odmianą i partią, rozliczenie automatyczne."],
      ["Zamówienia od sieci", "Zamówienia z portali przekazane do systemu."],
      ["Dokumenty jakości", "Certyfikaty i wyniki badań przypisane do partii."],
      ["Rezerwacje grup", "Zapytanie, oferta, zaliczka i przypomnienie."],
    ],
    faq: [
      ["Czy pracujecie z grupami producentów owoców?", "Tak. Przyjęcie dostaw, partie, rozliczenia z sadownikami i sprzedaż do sieci."],
      ["Czy automatyzujecie obiekty turystyczne w Sandomierzu?", "Tak. Rezerwacje, grupy, zaliczki i odpowiedzi na pytania gości."],
      ["Czy obsłużycie dokumenty eksportowe?", "Tak, dokumenty i korespondencja w językach odbiorców."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-logistyki", "cyfryzacja-danych-i-dokumentow", "automatyzacja-w-obsludze-klienta", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "busko-zdroj",
    name: "Busko-Zdrój",
    nameGenitive: "Buska-Zdroju",
    nameLocative: "Busku-Zdroju",
    nearbyCitySlugs: ["pinczow", "staszow", "jedrzejow", "kielce", "kazimierza-wielka"],
    metaDescription:
      "Automatyzacja dla uzdrowisk, hoteli i firm z Buska-Zdroju: rezerwacje pobytów, zabiegi, pytania gości i rozliczenia. Konsultacja 30 min.",
    heroLead:
      "Pomagamy buskim sanatoriom, hotelom i gabinetom obsłużyć gości i kuracjuszy bez przeciążania recepcji.",
    intro: [
      "Busko-Zdrój jest jednym z najbardziej znanych uzdrowisk w Polsce, z wodami siarczkowymi i długą tradycją leczenia. Sanatoria, hotele spa, gabinety i pensjonaty obsługują kuracjuszy i turystów przez cały rok.",
      "Pobyty uzdrowiskowe to rezerwacje, skierowania, harmonogramy zabiegów i rozliczenia, a recepcje odpowiadają na wiele powtarzalnych pytań.",
    ],
    localContext:
      "Buskie obiekty obsługują kuracjuszy z różnych części kraju, często starszych, którzy chętnie dzwonią i pytają o szczegóły pobytu i zabiegów.",
    whyHere:
      "W Busku-Zdroju automatyzacja porządkuje rezerwacje i harmonogramy zabiegów, a na typowe pytania odpowiada asystent, zanim gość zadzwoni.",
    industries: [
      ["Sanatoria i uzdrowiska", "Rezerwacje pobytów, skierowania, zabiegi i rozliczenia."],
      ["Hotele spa", "Rezerwacje, pakiety, zabiegi i opinie."],
      ["Gabinety i rehabilitacja", "Rejestracja wizyt i przypomnienia."],
      ["Gastronomia i usługi", "Rezerwacje i zamówienia grupowe."],
    ],
    processes: [
      ["Harmonogram zabiegów", "Zabiegi przypisane do gości automatycznie, z przypomnieniem."],
      ["Pytania gości", "Asystent AI odpowiada o pobyty, zabiegi i dojazd na podstawie waszej oferty."],
      ["Rezerwacja i zaliczka", "Potwierdzenie, link do płatności i przypomnienie przed przyjazdem."],
      ["Opinie po pobycie", "Prośba o opinię wysyłana automatycznie po wyjeździe."],
    ],
    faq: [
      ["Czy automatyzujecie sanatoria w Busku-Zdroju?", "Tak. Rezerwacje, harmonogramy zabiegów, przypomnienia i rozliczenia."],
      ["Czy asystent AI udziela porad medycznych?", "Nie. Odpowiada na pytania organizacyjne na podstawie waszych informacji, a sprawy medyczne przekazuje personelowi."],
      ["Czy dane kuracjuszy są bezpieczne?", "Wdrożenie projektujemy tak, żeby dane były przetwarzane zgodnie z RODO i tylko w potrzebnym zakresie."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["chatbot-ai-dla-firmy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "jedrzejow",
    name: "Jędrzejów",
    nameGenitive: "Jędrzejowa",
    nameLocative: "Jędrzejowie",
    nearbyCitySlugs: ["kielce", "wloszczowa", "pinczow", "busko-zdroj", "krakow"],
    metaDescription:
      "Automatyzacja dla firm z Jędrzejowa: produkcja, rolnictwo, handel i usługi przy S7. Zamówienia, faktury i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy jędrzejowskim firmom przejąć powtarzalną pracę z zamówieniami, fakturami i dokumentami.",
    intro: [
      "Jędrzejów leży przy drodze S7 między Kielcami a Krakowem. Działają tu zakłady produkcyjne, firmy handlowe i usługowe oraz gospodarstwa rolne, a położenie przy trasie sprzyja logistyce.",
      "Miasto ma bogatą historię, z opactwem cystersów i muzeum zegarów, które przyciąga turystów.",
    ],
    localContext:
      "Jędrzejowskie firmy coraz częściej obsługują klientów z Krakowa i Kielc, a dobra komunikacja ułatwia dostawy.",
    whyHere:
      "W Jędrzejowie automatyzacja pozwala obsłużyć więcej zamówień i klientów z większych miast bez rozbudowy biura.",
    industries: [
      ["Produkcja", "Zlecenia, zakupy i dokumentacja."],
      ["Handel i logistyka przy S7", "Zamówienia, dostawy i faktury."],
      ["Rolnictwo", "Dostawy, umowy i rozliczenia."],
      ["Usługi", "Zapytania i terminy."],
    ],
    processes: [
      ["Przyjmowanie zamówień", "Zamówienia z maili w jednym rejestrze."],
      ["Status dostawy", "Klient dostaje informację o etapie dostawy automatycznie."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zamówień."],
      ["Należności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z firmami z Jędrzejowa?", "Tak, zdalnie, z możliwością warsztatu na miejscu."],
      ["Czy automatyzacja wymaga nowych systemów?", "Zwykle nie. Łączymy te, których używacie."],
      ["Czy pomagacie firmom rolnym?", "Tak, w dokumentach, rozliczeniach i raportach."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-sprzedazy", "automatyzacja-dla-logistyki", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "wloszczowa",
    name: "Włoszczowa",
    nameGenitive: "Włoszczowy",
    nameLocative: "Włoszczowie",
    nearbyCitySlugs: ["jedrzejow", "konskie", "kielce", "pinczow", "krakow"],
    metaDescription:
      "Automatyzacja dla firm z Włoszczowy: produkcja, handel, rolnictwo i usługi. Zamówienia, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy włoszczowskim firmom uporządkować zamówienia, faktury i dokumenty.",
    intro: [
      "Włoszczowa leży w zachodniej części regionu, przy linii kolejowej łączącej Warszawę z Krakowem i Katowicami. Działają tu zakłady produkcyjne, firmy handlowe i usługowe oraz gospodarstwa rolne.",
      "Dobre połączenia kolejowe ułatwiają kontakty z większymi ośrodkami, a lokalne firmy obsługują klientów z kilku województw.",
    ],
    localContext:
      "Włoszczowskie firmy to często rodzinne przedsiębiorstwa z kilkuosobowym biurem, które obsługuje zamówienia, faktury i klientów.",
    whyHere:
      "We Włoszczowie automatyzacja odciąża małe biura z przepisywania i pilnowania terminów.",
    industries: [
      ["Produkcja", "Zlecenia, zakupy i dokumenty."],
      ["Handel", "Zamówienia, stany i faktury."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Usługi", "Zapytania, terminy i płatności."],
    ],
    processes: [
      ["Zamówienia z maili", "Zamówienia odczytane przez AI i zapisane w rejestrze."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie po terminie."],
      ["Zakupy", "Zapytania do dostawców i potwierdzenia."],
      ["Raport sprzedaży", "Sprzedaż według klientów co tydzień."],
    ],
    faq: [
      ["Czy automatyzacja opłaca się w małej firmie?", "Tak, jeśli zespół traci kilka godzin tygodniowo na powtarzalną pracę."],
      ["Czy musimy kupować nowe programy?", "Zwykle nie. Łączymy te, których już używacie."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się online."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "pinczow",
    name: "Pińczów",
    nameGenitive: "Pińczowa",
    nameLocative: "Pińczowie",
    nearbyCitySlugs: ["busko-zdroj", "jedrzejow", "kazimierza-wielka", "kielce", "staszow"],
    metaDescription:
      "Automatyzacja dla firm z Pińczowa: kamieniarstwo, rolnictwo, turystyka nad Nidą i usługi. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy pińczowskim firmom kamieniarskim, rolnym i usługowym uporządkować zamówienia i dokumenty.",
    intro: [
      "Pińczów leży nad Nidą, w sercu Ponidzia. Okolica słynie z wydobycia i obróbki kamienia pińczowskiego, a żyzne ziemie sprzyjają rolnictwu.",
      "Dolina Nidy przyciąga turystów, kajakarzy i miłośników przyrody, co wspiera lokalne usługi.",
    ],
    localContext:
      "Firmy kamieniarskie z Pińczowa realizują zamówienia na wymiar, z wyceną, terminem i dostawą, a gospodarstwa prowadzą dokumentację dostaw.",
    whyHere:
      "W Pińczowie automatyzacja przyspiesza wyceny i obsługę zamówień, a dokumenty nie giną w mailach.",
    industries: [
      ["Kamieniarstwo", "Wyceny na wymiar, zamówienia, terminy i dostawy."],
      ["Rolnictwo", "Dostawy, umowy i rozliczenia."],
      ["Turystyka nad Nidą", "Rezerwacje spływów, noclegów i grup."],
      ["Usługi", "Zapytania i płatności."],
    ],
    processes: [
      ["Wycena zamówienia", "Szkic wyceny z cennika i wymiarów podanych w formularzu."],
      ["Terminy realizacji", "Klient dostaje informację o etapie zamówienia."],
      ["Rezerwacje spływów", "Rezerwacja, zaliczka i przypomnienie bez ręcznych maili."],
      ["Faktury", "Faktura po realizacji i przypomnienie o płatności."],
    ],
    faq: [
      ["Czy pracujecie z zakładami kamieniarskimi?", "Tak. Wyceny, zamówienia, terminy i dostawy."],
      ["Czy automatyzujecie wypożyczalnie kajaków i noclegi?", "Tak. Rezerwacje, zaliczki i odpowiedzi na pytania."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się online."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-sprzedazy", "automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "opatow",
    name: "Opatów",
    nameGenitive: "Opatowa",
    nameLocative: "Opatowie",
    nearbyCitySlugs: ["sandomierz", "ostrowiec-swietokrzyski", "staszow", "kielce", "lublin"],
    metaDescription:
      "Automatyzacja dla firm z Opatowa: sadownictwo, rolnictwo, przetwórstwo i handel. Dostawy, zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Opatowa uporządkować dostawy, zamówienia i dokumenty w rolnictwie, przetwórstwie i handlu.",
    intro: [
      "Opatów leży na wschodzie regionu, w krainie sadów i pól. Okolica należy do zagłębia sadowniczego Ziemi Sandomierskiej, a lokalna gospodarka opiera się na rolnictwie, przetwórstwie i handlu.",
      "Miasto ma bogatą historię, z kolegiatą i podziemną trasą turystyczną.",
    ],
    localContext:
      "Gospodarstwa i firmy z Opatowa sprzedają owoce i płody rolne do grup producentów, przetwórni i sieci handlowych.",
    whyHere:
      "W Opatowie automatyzacja porządkuje dokumenty dostaw i rozliczenia, a mały zespół nie przepisuje danych ręcznie.",
    industries: [
      ["Sadownictwo", "Dostawy, partie i rozliczenia z odbiorcami."],
      ["Przetwórstwo", "Zamówienia, dokumenty jakości i reklamacje."],
      ["Handel środkami produkcji", "Zamówienia od gospodarstw, stany i faktury."],
      ["Usługi", "Zapytania i płatności."],
    ],
    processes: [
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
      ["Rozliczenia z odbiorcami", "Dostawy porównane z fakturami."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do działów."],
      ["Terminy płatności", "Przypomnienia o płatnościach."],
    ],
    faq: [
      ["Czy pracujecie z gospodarstwami sadowniczymi?", "Tak, z większymi gospodarstwami i grupami producentów."],
      ["Czy automatyzacja działa z telefonu?", "Wiele kroków tak, np. zdjęcie dokumentu dostawy."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się online."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow", "ai-w-obsludze-dokumentow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "staszow",
    name: "Staszów",
    nameGenitive: "Staszowa",
    nameLocative: "Staszowie",
    nearbyCitySlugs: ["sandomierz", "busko-zdroj", "opatow", "tarnobrzeg", "mielec"],
    metaDescription:
      "Automatyzacja dla firm ze Staszowa: przemysł, energetyka, rolnictwo i usługi. Zlecenia, dokumenty i rozliczenia bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy firmom ze Staszowa uporządkować zlecenia, dokumenty i rozliczenia.",
    intro: [
      "Staszów leży w południowo-wschodniej części regionu. W powiecie działa duża elektrownia w Połańcu, a z nią firmy serwisowe, remontowe i transportowe. Region ma też tradycję wydobycia siarki i rolnictwa.",
      "Miasto jest ośrodkiem handlu i usług dla powiatu.",
    ],
    localContext:
      "Firmy ze Staszowa często pracują jako podwykonawcy dużego zakładu energetycznego, z wymaganiami dotyczącymi dokumentacji, uprawnień i protokołów.",
    whyHere:
      "W Staszowie automatyzacja porządkuje dokumentację i rozliczenia podwykonawców, a kierownicy nie kompletują dokumentów ręcznie.",
    industries: [
      ["Energetyka i podwykonawcy", "Zlecenia, uprawnienia, protokoły i rozliczenia."],
      ["Przemysł", "Zlecenia, zakupy i dokumentacja."],
      ["Rolnictwo", "Dostawy i rozliczenia."],
      ["Usługi", "Zapytania i faktury."],
    ],
    processes: [
      ["Rejestr uprawnień", "Terminy badań i szkoleń z przypomnieniem."],
      ["Protokoły z prac", "Formularz na telefonie ze zdjęciami."],
      ["Rozliczenia zleceń", "Godziny i materiały przypisane do zlecenia."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń."],
    ],
    faq: [
      ["Czy pracujecie z podwykonawcami energetyki?", "Tak. Zlecenia, uprawnienia, protokoły i rozliczenia."],
      ["Czy automatyzacja dotyka instalacji?", "Nie. Pracujemy w procesach biurowych i dokumentacji."],
      ["Czy pracujecie zdalnie?", "Tak, z możliwością warsztatu na miejscu."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "kazimierza-wielka",
    name: "Kazimierza Wielka",
    nameGenitive: "Kazimierzy Wielkiej",
    nameLocative: "Kazimierzy Wielkiej",
    nearbyCitySlugs: ["pinczow", "busko-zdroj", "jedrzejow", "krakow", "kielce"],
    metaDescription:
      "Automatyzacja dla firm z Kazimierzy Wielkiej: rolnictwo, przetwórstwo, handel i usługi. Dostawy, faktury i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Kazimierzy Wielkiej uporządkować dostawy, faktury i dokumenty.",
    intro: [
      "Kazimierza Wielka leży na południu regionu, na żyznych glebach Niecki Nidziańskiej. Rolnictwo, uprawy warzyw i przetwórstwo od lat tworzą lokalną gospodarkę.",
      "Bliskość Krakowa sprawia, że wiele lokalnych firm ma tam klientów i dostawców.",
    ],
    localContext:
      "Gospodarstwa i firmy z Kazimierzy Wielkiej sprzedają płody rolne do przetwórni, hurtowni i na rynki krakowskie.",
    whyHere:
      "W Kazimierzy Wielkiej automatyzacja porządkuje dostawy i rozliczenia, a mały zespół nie przepisuje dokumentów.",
    industries: [
      ["Rolnictwo i warzywnictwo", "Dostawy, umowy i rozliczenia."],
      ["Przetwórstwo", "Zamówienia, partie i dokumenty jakości."],
      ["Handel", "Zamówienia i faktury."],
      ["Usługi", "Zapytania i płatności."],
    ],
    processes: [
      ["Rejestr dostaw", "Dostawy i dokumenty w jednym miejscu."],
      ["Zamówienia od odbiorców", "Zamówienia z maili i telefonów w rejestrze."],
      ["Faktury i płatności", "Faktura po dostawie, przypomnienie po terminie."],
      ["Raport sprzedaży", "Sprzedaż według odbiorców i produktów."],
    ],
    faq: [
      ["Czy pracujecie z gospodarstwami warzywniczymi?", "Tak, z większymi gospodarstwami i firmami rolnymi."],
      ["Czy automatyzacja wymaga komputera w polu?", "Nie. Wiele rzeczy da się zrobić z telefonu."],
      ["Czy pracujecie zdalnie?", "Tak, cała współpraca może odbywać się online."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow", "automatyzacja-sprzedazy"],
  }),
];
