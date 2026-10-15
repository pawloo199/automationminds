import type { CityPageContent } from "../../types";
import { region, town } from "../town";

const base = { voivodeship: "opolskie", regionCluster: "opolskie", updatedAt: "2026-10-15" } as const;

export const opolskieRegion = region({
  slug: "opolskie",
  intro: [
    "Opolszczyzna to najmniejsze województwo w Polsce, ale z wyraźnym profilem przemysłowym. Kędzierzyn-Koźle jest jednym z ważniejszych ośrodków przemysłu chemicznego w kraju, okolice Opola i Strzelec Opolskich słyną z cementowni i wapienników, a w regionie działa też elektroenergetyka i przetwórstwo spożywcze.",
    "Region ma silne związki z Niemcami. Mieszka tu mniejszość niemiecka, wiele rodzin ma krewnych za zachodnią granicą, a firmy często sprzedają do Niemiec lub z nimi współpracują. To oznacza dokumenty i korespondencję w dwóch językach.",
    "Duża część gospodarki to rodzinne firmy produkcyjne, budowlane i handlowe, które rosną, ale wciąż prowadzą zamówienia, zlecenia i faktury w mailach i arkuszach.",
    "Z firmami z Opolszczyzny pracujemy zdalnie. Nasza siedziba jest we Wrocławiu, niecałą godzinę drogi autostradą A4, więc na warsztat z zespołem łatwo nam przyjechać.",
  ],
  industries: [
    ["Przemysł chemiczny", "Dokumentacja jakości, zamówienia surowców i raporty w zakładach Kędzierzyna-Koźla i okolic."],
    ["Cement, wapno i materiały budowlane", "Zamówienia, wydania, dokumenty dostaw i rozliczenia z odbiorcami w rejonie Opola i Strzelec Opolskich."],
    ["Firmy rodzinne i produkcja", "Zlecenia, oferty i faktury w rosnących zakładach, które przerastają arkusze."],
    ["Handel i usługi z Niemcami", "Oferty, zamówienia i korespondencja po polsku i niemiecku."],
    ["Rolnictwo i przetwórstwo", "Dostawy surowca, partie i dokumenty w zakładach na żyznych ziemiach południa regionu."],
  ],
  faq: [
    ["Czy macie biuro w Opolu?", "Nie. Nasza siedziba jest we Wrocławiu, a z firmami z Opolszczyzny pracujemy zdalnie. Na warsztaty na miejscu przyjeżdżamy, gdy przyspieszają projekt."],
    ["Czy automatyzacja obsłuży dokumenty po niemiecku?", "Tak. AI odczytuje zamówienia i faktury po niemiecku, a asystenci odpowiadają klientom w ich języku na podstawie waszych informacji."],
    ["Czy pracujecie z zakładami chemicznymi i cementowniami?", "Tak, w procesach wokół produkcji: zamówienia, dokumentacja jakości, dostawy, utrzymanie ruchu i raporty. Nie ingerujemy w sterowanie instalacjami."],
    ["Od czego zacząć?", "Od bezpłatnej, 30-minutowej konsultacji online, na której wybieramy proces z najszybszym zwrotem."],
  ],
});

export const opolskieCities: CityPageContent[] = [
  town({
    ...base,
    slug: "opole",
    name: "Opole",
    nameGenitive: "Opola",
    nameLocative: "Opolu",
    nearbyCitySlugs: ["brzeg", "strzelce-opolskie", "kedzierzyn-kozle", "nysa", "kluczbork", "namyslow"],
    metaDescription:
      "Automatyzacja procesów i AI dla firm z Opola: produkcja, budownictwo, usługi, handel z Niemcami i administracja. Konsultacja 30 min.",
    heroLead:
      "Pomagamy opolskim firmom produkcyjnym, budowlanym i usługowym przejąć powtarzalną pracę z dokumentami, zamówieniami i raportami.",
    intro: [
      "Opole jest stolicą województwa i jego głównym ośrodkiem usług, administracji i edukacji. Działają tu uczelnie, instytucje wojewódzkie, firmy budowlane, usługowe i handlowe, a w okolicy duże zakłady przemysłowe, w tym cementownie i elektrownia.",
      "Opolskie firmy często łączą pracę dla klientów z regionu z kontraktami w Niemczech i dla dużych zakładów przemysłowych. To dużo dokumentów, wersji ofert i terminów, które zespoły pilnują ręcznie.",
    ],
    localContext:
      "W Opolu wiele firm usługowych i budowlanych pracuje jako podwykonawcy dużych zakładów przemysłowych i inwestycji, z ich wymaganiami dokumentacyjnymi, protokołami i terminami.",
    whyHere:
      "W Opolu automatyzacja porządkuje dokumentację dla wymagających odbiorców, przyspiesza oferty i rozliczenia, a kierownicy przestają składać raporty ręcznie.",
    economy: {
      title: "Czym żyje opolski biznes",
      paragraphs: [
        "Opole jest centrum administracyjnym i akademickim regionu. Uczelnie i instytucje publiczne tworzą zaplecze dla firm usługowych, IT i doradczych.",
        "W okolicy miasta działają cementownie i wapienniki oparte na złożach wapienia oraz elektrownia, a z nimi sieć podwykonawców: firm budowlanych, serwisowych, transportowych i inżynierskich.",
        "Bliskość autostrady A4 i granicy z Niemcami sprzyja logistyce i handlowi, a wiele opolskich firm ma klientów lub partnerów za zachodnią granicą.",
      ],
    },
    industries: [
      ["Podwykonawcy przemysłu", "Protokoły, dokumentacja BHP i jakości, zlecenia i rozliczenia dla dużych zakładów."],
      ["Budownictwo", "Oferty, kosztorysy, raporty z budowy i rozliczenia podwykonawców."],
      ["Usługi profesjonalne", "Zapytania, umowy, czas pracy i faktury w biurach rachunkowych, kancelariach i doradztwie."],
      ["Handel z Niemcami", "Oferty i zamówienia w dwóch językach, dokumenty transportowe i rozliczenia w euro."],
    ],
    processes: [
      ["Dokumentacja dla zleceniodawcy", "Protokoły i raporty z prac zebrane w jednym rejestrze i wysyłane w wymaganym formacie."],
      ["Oferty z kosztorysu", "Szkic oferty powstaje z szablonu i cennika, kierownik tylko go sprawdza."],
      ["Obieg faktur kosztowych", "Faktury z KSeF przypisane do zleceń i budów, z akceptacją kierownika."],
      ["Raport dla zarządu", "Sprzedaż, koszty i należności zebrane automatycznie raz w tygodniu."],
    ],
    example: {
      title: "Zlecenie opolskiej firmy serwisowej dla zakładu przemysłowego przed i po automatyzacji",
      lead: "Przykład firmy wykonującej prace serwisowe i remontowe dla zakładów w okolicy Opola. Tak zmienia się obsługa jednego zlecenia.",
      rows: [
        ["Przyjęcie zlecenia", "Mail od zakładu, kierownik przepisuje zakres do arkusza.", "Zlecenie z maila trafia do rejestru z terminem i zakresem do sprawdzenia."],
        ["Dokumenty przed wejściem na teren", "Listy pracowników i uprawnień kompletowane ręcznie.", "Lista dokumentów generowana z rejestru uprawnień, braki widoczne od razu."],
        ["Protokół z prac", "Pisany wieczorem z notatek i zdjęć.", "Protokół z formularza na telefonie, ze zdjęciami, gotowy do podpisu."],
        ["Rozliczenie", "Godziny i materiały zbierane z kilku miejsc.", "Koszty przypisane do zlecenia na bieżąco, faktura po akceptacji protokołu."],
      ],
    },
    faq: [
      ["Czy pomagacie firmom pracującym dla dużych zakładów w Opolu i okolicy?", "Tak. Porządkujemy zlecenia, dokumentację, protokoły i rozliczenia, tak żeby spełniały wymagania zleceniodawcy bez wieczornego pisania raportów."],
      ["Czy automatyzujecie opolskie biura rachunkowe?", "Tak. Zbieranie dokumentów od klientów, przypomnienia, KSeF i rejestr klientów to częste wdrożenia."],
      ["Czy obsługujecie firmy z Opola sprzedające do Niemiec?", "Tak. Zamówienia i korespondencja po niemiecku, dokumenty transportowe i rozliczenia w euro."],
      ["Ile trwa pierwsze wdrożenie?", "Zwykle kilka tygodni od konsultacji do działającego procesu, łącznie z testem na prawdziwych danych."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "kedzierzyn-kozle",
    name: "Kędzierzyn-Koźle",
    nameGenitive: "Kędzierzyna-Koźla",
    nameLocative: "Kędzierzynie-Koźlu",
    nearbyCitySlugs: ["opole", "strzelce-opolskie", "glubczyce", "prudnik"],
    metaDescription:
      "Automatyzacja dla firm z Kędzierzyna-Koźla: przemysł chemiczny, podwykonawcy, logistyka i usługi. Dokumentacja i zlecenia bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Kędzierzyna-Koźla, które pracują dla przemysłu chemicznego, zapanować nad dokumentacją, zleceniami i rozliczeniami.",
    intro: [
      "Kędzierzyn-Koźle jest jednym z najważniejszych ośrodków przemysłu chemicznego w Polsce. Wokół dużych zakładów działa sieć firm serwisowych, remontowych, transportowych i laboratoryjnych.",
      "Miasto leży nad Odrą i przy Kanale Gliwickim, a port rzeczny i kolej od lat obsługują przemysł. Dla lokalnych firm codziennością są wymagania bezpieczeństwa, dokumentacja i ścisłe terminy.",
    ],
    localContext:
      "Firmy z Kędzierzyna-Koźla pracują dla zakładów, które wymagają szczegółowej dokumentacji: uprawnień pracowników, protokołów, kart charakterystyki i raportów z prac.",
    whyHere:
      "W Kędzierzynie-Koźlu automatyzacja zdejmuje z kierowników kompletowanie dokumentów i protokołów, a zlecenia i rozliczenia przestają ginąć w mailach.",
    industries: [
      ["Przemysł chemiczny", "Dokumentacja jakości, zamówienia surowców i raporty dla działów wsparcia."],
      ["Serwis i remonty przemysłowe", "Zlecenia, uprawnienia pracowników, protokoły i rozliczenia."],
      ["Transport i logistyka", "Zlecenia przewozowe, dokumenty ADR i statusy dostaw."],
      ["Laboratoria i usługi techniczne", "Zlecenia badań, wyniki i raporty dla klientów."],
    ],
    processes: [
      ["Rejestr uprawnień", "Terminy badań i szkoleń pracowników z przypomnieniem przed wygaśnięciem."],
      ["Protokoły z prac", "Formularz na telefonie ze zdjęciami zamiast notatek przepisywanych wieczorem."],
      ["Dokumenty przewozowe", "Dane z dokumentów przewozowych odczytywane przez AI i przypisywane do zleceń."],
      ["Rozliczenie zlecenia", "Godziny i materiały zbierane na bieżąco, faktura po akceptacji protokołu."],
    ],
    faq: [
      ["Czy pracujecie z firmami obsługującymi zakłady chemiczne w Kędzierzynie-Koźlu?", "Tak. Porządkujemy zlecenia, dokumentację, uprawnienia pracowników i rozliczenia."],
      ["Czy automatyzacja dotyka instalacji przemysłowych?", "Nie. Pracujemy wyłącznie w procesach biurowych i dokumentacji wokół produkcji."],
      ["Czy przypomnicie o wygasających uprawnieniach pracowników?", "Tak. Rejestr uprawnień z przypomnieniami to jedno z prostszych i najczęstszych wdrożeń."],
      ["Jak wygląda współpraca z firmą z Kędzierzyna-Koźla?", "Głównie zdalnie, a w razie potrzeby przyjeżdżamy na warsztat. Zaczynamy od bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow"],
  }),
  town({
    ...base,
    slug: "nysa",
    name: "Nysa",
    nameGenitive: "Nysy",
    nameLocative: "Nysie",
    nearbyCitySlugs: ["prudnik", "brzeg", "opole", "glubczyce"],
    metaDescription:
      "Automatyzacja dla firm z Nysy: produkcja, handel, budownictwo i turystyka nad jeziorami. Zamówienia, faktury i rezerwacje bez przepisywania.",
    heroLead:
      "Pomagamy nyskim firmom produkcyjnym, handlowym i turystycznym uporządkować zamówienia, dokumenty i obsługę klientów.",
    intro: [
      "Nysa jest jednym z największych miast Opolszczyzny i ważnym ośrodkiem jej południowej części. Ma tradycje przemysłowe, a dziś działają tu zakłady produkcyjne, firmy budowlane, handlowe i usługowe.",
      "W pobliżu leżą jeziora Nyskie i Otmuchowskie, które przyciągają turystów, a bliskość granicy z Czechami sprzyja handlowi i współpracy transgranicznej.",
    ],
    localContext:
      "Nyskie firmy obsługują klientów z regionu, z Czech i z Niemiec, często z małym zespołem biurowym, który robi wszystko: oferty, zamówienia, faktury i korespondencję.",
    whyHere:
      "W Nysie automatyzacja pozwala małym zespołom obsłużyć więcej zamówień i klientów bez dokładania etatów w biurze.",
    economy: {
      title: "Czym żyje nyski biznes",
      paragraphs: [
        "Nysa ma długą historię przemysłową i nadal jest ważnym ośrodkiem produkcji na południu regionu. Działają tu zakłady metalowe i maszynowe oraz firmy z obszaru strefy ekonomicznej.",
        "Miasto jest też centrum handlu i usług dla okolicznych gmin, a jeziora i zabytki twierdzy przyciągają turystów.",
      ],
    },
    industries: [
      ["Produkcja metalowa i maszynowa", "Zapytania ofertowe, zlecenia, dokumentacja techniczna i reklamacje."],
      ["Handel i hurtownie", "Zamówienia od klientów, stany i faktury."],
      ["Budownictwo", "Oferty, harmonogramy i rozliczenia z podwykonawcami."],
      ["Turystyka nad jeziorami", "Rezerwacje, zaliczki i pytania gości w sezonie."],
    ],
    processes: [
      ["Zapytanie ofertowe", "Dane z maila i rysunku w rejestrze, kalkulacja z podobnych zleceń."],
      ["Przyjmowanie zamówień", "Zamówienia z maili odczytane przez AI i przekazane do systemu."],
      ["Rezerwacje gości", "Potwierdzenie, link do zaliczki i przypomnienie przed przyjazdem."],
      ["Należności", "Przypomnienia o płatnościach wysyłane automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z zakładami produkcyjnymi z Nysy?", "Tak. Wyceny, zamówienia, dokumentacja techniczna, reklamacje i raporty to typowe obszary."],
      ["Czy obsłużycie klientów z Czech?", "Tak. AI odczyta dokumenty po czesku i przygotuje odpowiedzi w języku klienta."],
      ["Czy automatyzujecie obiekty turystyczne nad Jeziorem Nyskim?", "Tak. Rezerwacje z kilku portali, zaliczki i odpowiedzi na pytania gości."],
      ["Od czego zacząć w nyskiej firmie?", "Od bezpłatnej konsultacji, na której wybierzemy proces dający najszybszy efekt."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "brzeg",
    name: "Brzeg",
    nameGenitive: "Brzegu",
    nameLocative: "Brzegu",
    nearbyCitySlugs: ["opole", "namyslow", "nysa", "strzelce-opolskie"],
    metaDescription:
      "Automatyzacja dla firm z Brzegu: produkcja, logistyka przy A4, handel i usługi. Zamówienia, dokumenty i raporty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy brzeskim firmom produkcyjnym, logistycznym i usługowym przejąć powtarzalną pracę biura.",
    intro: [
      "Brzeg leży nad Odrą, między Opolem a Wrocławiem, blisko autostrady A4. To położenie sprzyja produkcji i logistyce, a wiele firm z miasta współpracuje z odbiorcami z obu aglomeracji.",
      "Miasto ma bogatą historię, z zamkiem Piastów Śląskich, a dziś łączy przemysł z handlem i usługami dla powiatu.",
    ],
    localContext:
      "Brzeskie firmy często dostarczają towary i usługi dla klientów z Wrocławia i Opola, więc liczy się szybka odpowiedź na zapytanie i dotrzymywanie terminów.",
    whyHere:
      "W Brzegu automatyzacja przyspiesza oferty i zamówienia, a terminy dostaw są widoczne dla handlowca bez telefonu na halę.",
    industries: [
      ["Produkcja", "Zlecenia, zamówienia materiałów i dokumentacja jakości."],
      ["Logistyka przy A4", "Zlecenia transportowe, awizacje i dokumenty dostaw."],
      ["Handel", "Zamówienia, stany i faktury dla klientów z regionu."],
      ["Usługi dla firm", "Zapytania, umowy i rozliczenia."],
    ],
    processes: [
      ["Status zamówienia", "Handlowiec widzi etap realizacji bez dzwonienia na produkcję."],
      ["Awizacje dostaw", "Terminy dostaw potwierdzane automatycznie z przewoźnikami."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do zleceń i zaakceptowane w jednym obiegu."],
      ["Lejek sprzedaży", "Zapytania z formularza trafiają do CRM z przypisanym handlowcem."],
    ],
    faq: [
      ["Czy pracujecie z firmami z Brzegu?", "Tak, zdalnie. Z Wrocławia mamy do Brzegu blisko, więc na warsztat łatwo przyjechać."],
      ["Czy automatyzujecie firmy transportowe przy A4?", "Tak. Zlecenia, dokumenty przewozowe, statusy i rozliczenia z przewoźnikami."],
      ["Czy połączycie nasz program do faktur z CRM?", "Tak, jeśli oba systemy pozwalają na wymianę danych. Sprawdzamy to na konsultacji."],
      ["Ile kosztuje automatyzacja dla firmy z Brzegu?", "Zależy od procesu i systemów. Wycenę przygotowujemy po krótkim przeglądzie."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-sprzedazy"],
  }),
  town({
    ...base,
    slug: "kluczbork",
    name: "Kluczbork",
    nameGenitive: "Kluczborka",
    nameLocative: "Kluczborku",
    nearbyCitySlugs: ["olesno", "namyslow", "opole"],
    metaDescription:
      "Automatyzacja dla firm z Kluczborka: przemysł maszynowy, produkcja, handel i usługi. Wyceny, zamówienia i dokumentacja bez przepisywania.",
    heroLead:
      "Pomagamy kluczborskim zakładom i firmom handlowym przyspieszyć wyceny, zamówienia i obieg dokumentów.",
    intro: [
      "Kluczbork jest ośrodkiem północnej Opolszczyzny z tradycją przemysłu maszynowego. Działają tu zakłady produkcyjne, firmy budowlane i handlowe obsługujące powiat i sąsiednie regiony.",
      "Miasto jest też węzłem kolejowym, co od lat sprzyja przemysłowi i transportowi towarów.",
    ],
    localContext:
      "Zakłady z Kluczborka produkują często na zamówienie, więc każda oferta wymaga kalkulacji, a każde zlecenie dokumentacji technicznej.",
    whyHere:
      "W Kluczborku automatyzacja skraca czas od zapytania do oferty i porządkuje dokumentację techniczną, która trafia na halę.",
    industries: [
      ["Przemysł maszynowy", "Zapytania ofertowe, dokumentacja techniczna, zamówienia i reklamacje."],
      ["Produkcja na zamówienie", "Kalkulacje, terminy i status zleceń."],
      ["Budownictwo", "Oferty, harmonogramy i rozliczenia."],
      ["Handel", "Zamówienia, stany i faktury."],
    ],
    processes: [
      ["Kalkulacja zlecenia", "Wycena z podobnych wyrobów i aktualnych cen materiałów."],
      ["Wersje rysunków", "Aktualna wersja dokumentacji przy zleceniu na hali."],
      ["Zakupy materiałów", "Zapytania do dostawców i przypomnienia o potwierdzeniach."],
      ["Reklamacje", "Rejestr reklamacji z terminami i szkicem raportu."],
    ],
    faq: [
      ["Czy pomagacie zakładom maszynowym z Kluczborka?", "Tak. Wyceny, dokumentacja techniczna, zakupy i reklamacje to obszary, które porządkujemy najczęściej."],
      ["Czy musimy zmieniać ERP?", "Nie. Budujemy obok systemów, których używacie, i łączymy się z nimi tam, gdzie to możliwe."],
      ["Czy AI odczyta zapytania ofertowe z rysunkami?", "Odczyta dane z treści i tekstu na rysunku. Ocena technologiczna zostaje przy technologu."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji, na której wybierzemy jeden proces do pierwszego wdrożenia."],
    ],
    services: ["automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "cyfryzacja-danych-i-dokumentow", "integracje-systemow"],
  }),
  town({
    ...base,
    slug: "namyslow",
    name: "Namysłów",
    nameGenitive: "Namysłowa",
    nameLocative: "Namysłowie",
    nearbyCitySlugs: ["brzeg", "kluczbork", "opole"],
    metaDescription:
      "Automatyzacja dla firm z Namysłowa: przetwórstwo spożywcze, produkcja, handel i rolnictwo. Zamówienia, dostawy i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Namysłowa uporządkować zamówienia, dostawy i dokumentację w przetwórstwie, produkcji i handlu.",
    intro: [
      "Namysłów jest znany z tradycji browarniczej i przetwórstwa spożywczego. W mieście i okolicy działają też zakłady produkcyjne, firmy handlowe i gospodarstwa rolne.",
      "Leży blisko granicy z Dolnym Śląskiem, więc wiele lokalnych firm współpracuje z klientami i dostawcami z Wrocławia i okolic.",
    ],
    localContext:
      "Firmy z Namysłowa pracują z sieciami handlowymi i hurtowniami, które oczekują terminowych dostaw, poprawnych dokumentów i szybkiej odpowiedzi na zamówienie.",
    whyHere:
      "W Namysłowie automatyzacja porządkuje zamówienia od odbiorców, dokumenty dostaw i partie, a biuro nie przepisuje danych między systemami.",
    industries: [
      ["Przetwórstwo spożywcze", "Zamówienia od sieci i hurtowni, partie i dokumenty jakości."],
      ["Produkcja", "Zlecenia, zakupy materiałów i raporty."],
      ["Handel i dystrybucja", "Zamówienia, trasy dostaw i faktury."],
      ["Rolnictwo", "Dokumenty, dostawy i rozliczenia z odbiorcami."],
    ],
    processes: [
      ["Zamówienia od sieci", "Zamówienia z portali i maili przekazane do systemu bez przepisywania."],
      ["Partie i dokumenty jakości", "Dokumenty przypisane do partii i dostępne przy reklamacji."],
      ["Potwierdzenia dostaw", "Dokumenty dostaw zebrane i przypisane do zamówień."],
      ["Raport sprzedaży", "Sprzedaż według odbiorców i produktów raz w tygodniu, automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z zakładami spożywczymi z Namysłowa?", "Tak, w procesach wokół produkcji: zamówienia, partie, dokumenty jakości, reklamacje i raporty."],
      ["Czy połączycie zamówienia z portali sieci handlowych z naszym systemem?", "Tak, jeśli portal pozwala pobrać zamówienia albo przysyła je mailem."],
      ["Czy automatyzacja wymaga nowego systemu?", "Zwykle nie. Łączymy narzędzia, których już używacie."],
      ["Jak wygląda współpraca?", "Zdalnie, w krótkich etapach. Zaczynamy od bezpłatnej konsultacji."],
    ],
    services: ["automatyzacja-w-produkcji", "automatyzacja-dla-logistyki", "integracje-systemow", "automatyzacja-raportow"],
  }),
  town({
    ...base,
    slug: "strzelce-opolskie",
    name: "Strzelce Opolskie",
    nameGenitive: "Strzelec Opolskich",
    nameLocative: "Strzelcach Opolskich",
    nearbyCitySlugs: ["opole", "kedzierzyn-kozle", "olesno"],
    metaDescription:
      "Automatyzacja dla firm ze Strzelec Opolskich: wapno i kruszywa, produkcja, logistyka przy A4 i usługi. Zamówienia i dokumenty bez przepisywania.",
    heroLead:
      "Pomagamy firmom ze Strzelec Opolskich uporządkować zamówienia, wydania i dokumentację w przemyśle, logistyce i usługach.",
    intro: [
      "Strzelce Opolskie leżą przy autostradzie A4, w rejonie bogatym w złoża wapienia. Działają tu zakłady wapiennicze i kopalnie kruszyw, firmy produkcyjne i transportowe.",
      "W pobliżu jest Góra Świętej Anny, znana z walorów przyrodniczych i historycznych, co przyciąga też turystów i pielgrzymów.",
    ],
    localContext:
      "Firmy z branży materiałów budowlanych i transportu obsługują dziesiątki odbiorców dziennie: zamówienia, wydania, dokumenty dostaw i faktury.",
    whyHere:
      "W Strzelcach Opolskich automatyzacja łączy zamówienia, wydania i faktury, a dyspozytor nie przepisuje dokumentów dostaw ręcznie.",
    industries: [
      ["Wapno, kruszywa i materiały budowlane", "Zamówienia, wydania, dokumenty dostaw i rozliczenia."],
      ["Transport", "Zlecenia, trasy i dokumenty przewozowe."],
      ["Produkcja", "Zlecenia, zakupy i dokumentacja jakości."],
      ["Usługi i turystyka", "Rezerwacje i obsługa gości w okolicy Góry Świętej Anny."],
    ],
    processes: [
      ["Zamówienie i wydanie", "Zamówienie odbiorcy przechodzi w wydanie i dokument dostawy bez przepisywania."],
      ["Dokumenty dostaw", "Zdjęcie podpisanego dokumentu odczytane przez AI i przypisane do zamówienia."],
      ["Faktury dla odbiorców", "Faktura powstaje po potwierdzeniu dostawy."],
      ["Należności", "Przypomnienia o płatnościach i raport przeterminowanych faktur."],
    ],
    faq: [
      ["Czy pracujecie z firmami z branży kruszyw i wapna?", "Tak, w procesach zamówień, wydań, dokumentów dostaw i rozliczeń."],
      ["Czy połączycie wagę lub system wydań z fakturami?", "Jeśli system udostępnia dane, tak. Sprawdzamy to na przeglądzie."],
      ["Czy automatyzujecie firmy transportowe ze Strzelec Opolskich?", "Tak. Zlecenia, dokumenty przewozowe i rozliczenia z przewoźnikami."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-logistyki", "automatyzacja-w-produkcji", "ai-w-obsludze-dokumentow", "automatyzacja-dla-ksiegowosci"],
  }),
  town({
    ...base,
    slug: "prudnik",
    name: "Prudnik",
    nameGenitive: "Prudnika",
    nameLocative: "Prudniku",
    nearbyCitySlugs: ["nysa", "glubczyce", "kedzierzyn-kozle"],
    metaDescription:
      "Automatyzacja dla firm z Prudnika: tekstylia, produkcja, handel transgraniczny i usługi. Zamówienia i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy prudnickim firmom produkcyjnym i handlowym uporządkować zamówienia, dokumenty i współpracę z klientami z Czech.",
    intro: [
      "Prudnik leży przy granicy z Czechami i ma długą tradycję przemysłu włókienniczego. Dziś działają tu firmy produkcyjne, handlowe i usługowe, a granica sprzyja współpracy z czeskimi partnerami.",
      "To mniejsze miasto, w którym firmy prowadzą często całą administrację w kilkuosobowym zespole.",
    ],
    localContext:
      "Prudnickie firmy łączą klientów z Polski i Czech, więc zamówienia, faktury i korespondencja bywają w dwóch językach i walutach.",
    whyHere:
      "W Prudniku automatyzacja pozwala małemu zespołowi obsłużyć zamówienia i dokumenty z obu stron granicy bez nadgodzin.",
    industries: [
      ["Tekstylia i produkcja", "Zamówienia, zlecenia i dokumenty dostaw."],
      ["Handel transgraniczny", "Oferty i faktury w dwóch językach i walutach."],
      ["Usługi lokalne", "Rezerwacje, zapytania i płatności."],
      ["Budownictwo", "Oferty i rozliczenia."],
    ],
    processes: [
      ["Zamówienia z maili", "Zamówienia po polsku i czesku odczytane przez AI."],
      ["Faktury w walutach", "Faktury w euro i koronach przygotowane z jednego rejestru."],
      ["Przypomnienia o płatnościach", "Wysyłane automatycznie w języku klienta."],
      ["Odpowiedzi na pytania", "Szkice odpowiedzi do klientów przygotowane przez AI."],
    ],
    faq: [
      ["Czy obsłużycie dokumenty po czesku?", "Tak. AI odczytuje zamówienia i faktury po czesku i przygotowuje odpowiedzi w języku klienta."],
      ["Czy automatyzacja opłaca się w małej firmie z Prudnika?", "Często tak, bo każda godzina oszczędzona w kilkuosobowym zespole jest odczuwalna."],
      ["Czy musimy kupować nowe programy?", "Zwykle nie. Łączymy te, których już używacie."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "ai-w-obsludze-dokumentow", "automatyzacja-sprzedazy", "automatyzacja-dla-ksiegowosci"],
  }),
  town({
    ...base,
    slug: "glubczyce",
    name: "Głubczyce",
    nameGenitive: "Głubczyc",
    nameLocative: "Głubczycach",
    nearbyCitySlugs: ["kedzierzyn-kozle", "prudnik", "nysa"],
    metaDescription:
      "Automatyzacja dla firm z Głubczyc: rolnictwo, przetwórstwo, handel i usługi przy granicy z Czechami. Dokumenty i rozliczenia bez przepisywania.",
    heroLead:
      "Pomagamy firmom z Głubczyc uporządkować dokumenty, rozliczenia i zamówienia w rolnictwie, przetwórstwie i handlu.",
    intro: [
      "Ziemia głubczycka należy do najżyźniejszych w Polsce, więc rolnictwo i przetwórstwo od zawsze są tu ważne. W mieście działają też firmy handlowe, usługowe i obsługujące gospodarstwa.",
      "Głubczyce leżą przy granicy z Czechami, co sprzyja handlowi i współpracy z czeskimi firmami.",
    ],
    localContext:
      "Duże gospodarstwa i firmy rolne prowadzą dziś dokumentację podobną do przedsiębiorstw: umowy z odbiorcami, dostawy, faktury, wnioski i rozliczenia.",
    whyHere:
      "W Głubczycach automatyzacja porządkuje dokumenty i rozliczenia w firmach rolnych i handlowych, które nie mają dużego biura.",
    industries: [
      ["Rolnictwo", "Umowy z odbiorcami, dostawy, faktury i dokumenty."],
      ["Przetwórstwo", "Dostawy surowca, partie i rozliczenia."],
      ["Handel środkami produkcji", "Zamówienia od gospodarstw, stany i faktury."],
      ["Usługi", "Zapytania, terminy i płatności."],
    ],
    processes: [
      ["Rejestr umów i dostaw", "Umowy z odbiorcami i dostawy w jednym miejscu, z terminami."],
      ["Faktury kosztowe", "Faktury z KSeF przypisane do upraw lub działów."],
      ["Rozliczenia z odbiorcami", "Dostawy porównane z fakturami, rozbieżności oznaczone."],
      ["Terminy i przypomnienia", "Terminy płatności i dokumentów pilnowane automatycznie."],
    ],
    faq: [
      ["Czy pracujecie z gospodarstwami rolnymi?", "Tak, z większymi gospodarstwami i firmami rolnymi, w dokumentach, rozliczeniach i raportach."],
      ["Czy automatyzacja wymaga komputera w każdym miejscu?", "Nie. Wiele rzeczy da się zrobić z telefonu, np. zdjęcie dokumentu dostawy."],
      ["Czy obsłużycie odbiorców z Czech?", "Tak, także w języku czeskim."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow", "ai-w-obsludze-dokumentow"],
  }),
  town({
    ...base,
    slug: "olesno",
    name: "Olesno",
    nameGenitive: "Olesna",
    nameLocative: "Oleśnie",
    nearbyCitySlugs: ["kluczbork", "strzelce-opolskie", "opole"],
    metaDescription:
      "Automatyzacja dla firm z Olesna: produkcja, przetwórstwo drewna, handel i usługi. Zamówienia, faktury i dokumenty bez ręcznego przepisywania.",
    heroLead:
      "Pomagamy oleskim firmom produkcyjnym i handlowym przejąć powtarzalną pracę z zamówieniami i dokumentami.",
    intro: [
      "Olesno jest ośrodkiem powiatu na wschodzie Opolszczyzny, otoczonym lasami. Działają tu firmy produkcyjne, w tym związane z drewnem, zakłady usługowe i handlowe oraz gospodarstwa rolne.",
      "Miasto leży na pograniczu z województwem śląskim, więc wiele firm ma klientów w aglomeracji śląskiej.",
    ],
    localContext:
      "Oleskie firmy to często firmy rodzinne, w których właściciel sam prowadzi oferty, zamówienia i rozliczenia, a biuro liczy kilka osób.",
    whyHere:
      "W Oleśnie automatyzacja odciąża właściciela i biuro z przepisywania zamówień i faktur, a klienci szybciej dostają odpowiedzi.",
    industries: [
      ["Przetwórstwo drewna i meble", "Zamówienia, wyceny, terminy i dostawy."],
      ["Produkcja", "Zlecenia, zakupy i dokumentacja."],
      ["Handel", "Zamówienia, stany i faktury."],
      ["Usługi lokalne", "Zapytania, terminy i płatności."],
    ],
    processes: [
      ["Wycena zamówienia", "Szkic wyceny z cennika i podobnych zleceń."],
      ["Terminy realizacji", "Klient dostaje informację o etapie zamówienia automatycznie."],
      ["Faktury i płatności", "Faktura po realizacji, przypomnienie o płatności po terminie."],
      ["Dokumenty od dostawców", "Faktury i dokumenty dostaw przypisane do zamówień."],
    ],
    faq: [
      ["Czy automatyzacja ma sens w małej firmie z Olesna?", "Tak, jeśli właściciel lub biuro tracą godziny tygodniowo na przepisywanie i pilnowanie terminów."],
      ["Czy pracujecie z producentami mebli?", "Tak. Wyceny, zamówienia, terminy i dostawy to typowe procesy do uporządkowania."],
      ["Czy pracujecie zdalnie?", "Tak. Pierwsza rozmowa i większość wdrożenia odbywają się online."],
      ["Jak zacząć?", "Od bezpłatnej konsultacji online."],
    ],
    services: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-produkcji", "automatyzacja-sprzedazy", "integracje-systemow"],
  }),
];
