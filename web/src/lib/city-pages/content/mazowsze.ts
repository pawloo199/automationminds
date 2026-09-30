import type { CityPageContent } from "../types";

/** Siedziby powiatów ziemskich Mazowsza (bez Warszawy, Radomia i Płocka). */
export const mazowszePowiatCities: CityPageContent[] = [
  {
    slug: "pruszkow",
    name: "Pruszków",
    nameGenitive: "Pruszkowa",
    nameLocative: "Pruszkowie",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Pruszkowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Pruszkowa: produkcja, logistyka i usługi blisko Warszawy. Zdalne wdrożenia, konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Pruszkowie",
    heroLead:
      "Porządkujemy procesy pruszkowskich firm produkcyjnych i usługowych, gdy dojazd do Warszawy nie wystarcza, by dogonić tempo klientów.",
    introParagraphs: [
      "Pruszków leży w bezpośrednim zapleczu stolicy: produkcja, magazyny i firmy usługowe obsługujące warszawski rynek B2B. Automatyzacja procesów w Pruszkowie zwykle dotyczy tego, jak zamówienia, faktury i statusy zleceń żyją między halą a biurem, które i tak jest cieńsze niż u klienta z Mokotowa.",
      "Współpracujemy z pruszkowskimi zespołami zdalnie. Wybieramy jeden proces o wysokim koszcie ręcznej pracy, wdrażamy wąski zakres i mierzymy efekt zanim skalujemy kolejne obszary.",
    ],
    localContext:
      "Powiat pruszkowski łączy zakłady produkcyjne z firmami logistycznymi i usługami dla Warszawy. Typowy ból to ręczne potwierdzenia terminów, opóźnione fakturowanie po wysyłce i Excel jako jedyne źródło prawdy o stanie magazynu.",
    whyHere:
      "W Pruszkowie automatyzacja wyrównuje szanse operacyjne wobec klientów ze stolicy: szybsza reakcja, mniej błędów w dokumentach, mniej godzin na pilne maile.",
    focusIndustries: [
      {
        title: "Produkcja i montaż",
        body: "Statusy zleceń i wyjątki jakości bez telefonów między zmianami.",
      },
      {
        title: "Logistyka i magazyny",
        body: "Awizacje, sloty i powiadomienia zamiast ręcznych SMS-ów.",
      },
      {
        title: "Usługi B2B dla Warszawy",
        body: "Od zapytania po fakturę z follow-upem w CRM.",
      },
      {
        title: "Back-office MŚP",
        body: "Obieg faktur i wniosków przy małym zespole administracyjnym.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie B2B",
        body: "Od oferty po potwierdzenie i rezerwację zasobów.",
      },
      {
        title: "Fakturowanie po dostawie",
        body: "Mniej opóźnień wynikających z braku informacji, czy już można wystawić.",
      },
      {
        title: "Status magazynu",
        body: "Jedna prawda o stanach widoczna dla sprzedaży i produkcji.",
      },
      {
        title: "Raport tygodniowy",
        body: "Dane z systemów źródłowych zamiast ręcznego składania Excela.",
      },
    ],
    howWeWork:
      "Z firmami z Pruszkowa zaczynamy od bezpłatnej konsultacji 30 minut. Potem mapujemy proces o najwyższym koszcie chaosu i wdrażamy zdalnie, z testami na waszych danych.",
    faq: [
      {
        id: "pru-1",
        question: "Czy automatyzacja w Pruszkowie ma sens przy bliskości Warszawy?",
        answer:
          "Właśnie wtedy. Klienci oczekują tempa stolicy, a zespół biurowy nie rośnie liniowo z obrotem.",
      },
      {
        id: "pru-2",
        question: "Czy musicie być na miejscu w Pruszkowie?",
        answer:
          "Standardem jest współpraca zdalna. Warsztat stacjonarny planujemy tylko gdy realnie pomaga.",
      },
      {
        id: "pru-3",
        question: "Od czego zwykle zaczynacie?",
        answer:
          "Od zamówień, faktur albo statusów magazynowych. Tam zwrot widać najszybciej.",
      },
      {
        id: "pru-4",
        question: "Czy potrzebujemy własnego IT?",
        answer:
          "Nie do startu. Wdrażamy i szkolimy zespół; Wasze IT może nadzorować dostępy.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["warszawa", "piaseczno", "grodzisk-mazowiecki", "ozarow-mazowiecki", "zyrardow"],
  },
  {
    slug: "piaseczno",
    name: "Piaseczno",
    nameGenitive: "Piaseczna",
    nameLocative: "Piasecznie",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Piasecznie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Piaseczna: handel, logistyka, usługi i budownictwo. Zdalne wdrożenia procesów. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Piasecznie",
    heroLead:
      "Spinamy procesy firm z Piaseczna i południowego pierścienia Warszawy, gdy biuro tonie w mailach, a klienci czekają na status.",
    introParagraphs: [
      "Piaseczno to gęsty rynek handlu, usług, logistyki i firm budowlanych zorientowanych na aglomerację. Automatyzacja procesów w Piasecznie często zaczyna się od pytania, dlaczego handlowiec obiecuje termin, którego magazyn już nie potwierdza.",
      "Pracujemy zdalnie z piaseczyńskimi zespołami: diagnoza wąskiego gardła, wdrożenie w krótkich iteracjach, szkolenie osób odpowiedzialnych za wyjątki.",
    ],
    localContext:
      "Powiat piaseczyński żyje bliskością stolicy i rosnącym zapotrzebowaniem na szybką obsługę B2B. Widać ręczne awizacje, rozproszone skrzynki supportu i faktury, które czekają na kogoś z biura dłużej niż towar na rampie.",
    whyHere:
      "W Piasecznie automatyzacja broni marży przy krótkich terminach i dużej liczbie drobnych zleceń. Mniej ręcznego klepania, więcej czasu na klienta.",
    focusIndustries: [
      {
        title: "Handel i dystrybucja",
        body: "Zamówienia, limity i statusy dostaw w jednym torze.",
      },
      {
        title: "Logistyka ostatniej mili",
        body: "Awizacje i wyjątki bez wieczornych telefonów.",
      },
      {
        title: "Budownictwo i instalacje",
        body: "Zlecenia terenowe, protokoły i fakturowanie po domknięciu.",
      },
      {
        title: "Usługi lokalne B2B",
        body: "Lead, oferta i follow-up bez ginących maili.",
      },
    ],
    focusProcesses: [
      {
        title: "Ścieżka zamówienia",
        body: "Od koszyka lub maila po fakturę z mniejszą liczbą przepisywań.",
      },
      {
        title: "Obsługa reklamacji",
        body: "Triaż, terminy i historia sprawy w jednym miejscu.",
      },
      {
        title: "Protokół z budowy",
        body: "Zdjęcia, checklisty i rozliczenie bez papieru w aucie.",
      },
      {
        title: "Obieg faktur kosztowych",
        body: "Akceptacje i limity zamiast skrzynki faktury@.",
      },
    ],
    howWeWork:
      "W Piasecznie startujemy od procesu, który generuje najwięcej pilnych maili. Wdrażamy zdalnie i mierzymy efekt w dniach roboczych, nie w slajdach.",
    faq: [
      {
        id: "pia-1",
        question: "Czy automatyzacja sprawdzi się w małej firmie z Piaseczna?",
        answer:
          "Tak. Często właśnie tam każdy zaoszczędzony dzień biura widać od razu na wyniku.",
      },
      {
        id: "pia-2",
        question: "Czy integrujecie sklep, WMS i księgowość?",
        answer:
          "Gdy dane są dostępne cyfrowo, tak. Dobieramy metodę do waszego stacku.",
      },
      {
        id: "pia-3",
        question: "Ile trwa pierwszy etap?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni. Zakres ustalamy po konsultacji.",
      },
      {
        id: "pia-4",
        question: "Czy wymagacie biura w Piasecznie?",
        answer:
          "Nie. Pracujemy zdalnie z firmami z całego powiatu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["warszawa", "pruszkow", "otwock", "grojec", "grodzisk-mazowiecki"],
  },
  {
    slug: "legionowo",
    name: "Legionowo",
    nameGenitive: "Legionowa",
    nameLocative: "Legionowie",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Legionowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Legionowa: usługi, handel i logistyka północnego pierścienia Warszawy. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Legionowie",
    heroLead:
      "Odciążamy legionowskie biura i firmy usługowe, gdy dojazd do klienta w stolicy jest szybki, a papierowa robota wciąż nie.",
    introParagraphs: [
      "Legionowo to północne zaplecze Warszawy: handel, usługi, logistyka i firmy, które żyją rytmem aglomeracji. Automatyzacja procesów w Legionowie najczęściej porządkuje obiegi dokumentów, CRM i obsługę zleceń, zanim zespół zacznie dokładać etaty do ogarniania.",
      "Współpracujemy zdalnie. Najpierw mapa procesu, potem wąskie wdrożenie z mierzalnym efektem i instrukcją po polsku.",
    ],
    localContext:
      "W powiecie legionowskim widać dużo MŚP z cienkim back-office i wysokimi oczekiwaniami klientów warszawskich. Typowe wąskie gardła to ręczne leady, opóźnione faktury i brak jednego statusu zlecenia.",
    whyHere:
      "W Legionowie automatyzacja pozwala rosnąć bez proporcjonalnego wzrostu administracji. To ważne, gdy konkurujecie ceną czasu reakcji, nie tylko stawką godzinową.",
    focusIndustries: [
      {
        title: "Usługi i serwis terenowy",
        body: "Zlecenia, raporty z wizyt i fakturowanie po domknięciu.",
      },
      {
        title: "Handel B2B",
        body: "Oferty, potwierdzenia i limity kredytowe w CRM.",
      },
      {
        title: "Logistyka lokalna",
        body: "Statusy dostaw i powiadomienia bez ręcznych maili.",
      },
      {
        title: "HR w rosnących MŚP",
        body: "Onboarding i wnioski bez papieru między lokalizacjami.",
      },
    ],
    focusProcesses: [
      {
        title: "Lead do handlowca",
        body: "Przypisanie, przypomnienia i czysty CRM.",
      },
      {
        title: "Domknięcie zlecenia",
        body: "Checklist przed fakturą zamiast pamięci biura.",
      },
      {
        title: "Obieg faktur",
        body: "Akceptacje z limitem i archiwum.",
      },
      {
        title: "Raport dla właściciela",
        body: "Sprzedaż i należności bez cotygodniowego składania tabel.",
      },
    ],
    howWeWork:
      "Z legionowskimi firmami zaczynamy od bezpłatnej konsultacji. Wybieramy proces o największym chaosie i wdrażamy go zdalnie, etapami.",
    faq: [
      {
        id: "leg-1",
        question: "Czy automatyzacja w Legionowie jest tylko dla firm z IT?",
        answer:
          "Nie. Najczęściej pracujemy z handlem, usługami i logistyką.",
      },
      {
        id: "leg-2",
        question: "Czy musicie znać nasz system od środka?",
        answer:
          "Wystarczy dostęp do danych i opis procesu. Dobieramy integrację bezpiecznie.",
      },
      {
        id: "leg-3",
        question: "Jak wygląda wycena?",
        answer:
          "Po analizie dostajecie zakres pierwszego etapu i koszt. Bez otwartego budżetu na discovery bez końca.",
      },
      {
        id: "leg-4",
        question: "Czy dojazd do Legionowa jest konieczny?",
        answer:
          "Nie. Model zdalny i hybrydowy to standard.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["warszawa", "nowy-dwor-mazowiecki", "wolomin", "pultusk", "minsk-mazowiecki"],
  },
  {
    slug: "wolomin",
    name: "Wołomin",
    nameGenitive: "Wołomina",
    nameLocative: "Wołominie",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Wołominie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wołomina: produkcja, handel i logistyka wschodniego pierścienia Warszawy. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Wołominie",
    heroLead:
      "Pomagamy wołomińskim zakładom i dystrybutorom spiąć magazyn z biurem, zanim sezon lub kontrakt wyczerpie zespół.",
    introParagraphs: [
      "Wołomin i okolice to produkcja, handel materiałami oraz logistyka zorientowana na Warszawę i wschód Mazowsza. Automatyzacja procesów w Wołominie często zamyka rozjazd między tym, co obiecał handlowiec, a tym, co realnie wyjedzie z magazynu.",
      "Pracujemy zdalnie: krótka diagnoza, konkretny zakres, testy na realnych zamówieniach.",
    ],
    localContext:
      "Powiat wołomiński łączy firmy produkcyjne z rosnącym handlem B2B. W praktyce widać ręczne przepisywanie SKU, opóźnione potwierdzenia dostaw i faktury, które doganiają wysyłkę tydzień później.",
    whyHere:
      "W Wołominie automatyzacja broni terminowości wobec klientów ze stolicy i obniża koszt błędów w dokumentach przy rosnącym wolumenie.",
    focusIndustries: [
      {
        title: "Produkcja lokalna",
        body: "Statusy, materiały i wyjątki jakości w jednym przepływie.",
      },
      {
        title: "Handel materiałami",
        body: "Zamówienia, stany i limity bez trzech wersji Excela.",
      },
      {
        title: "Magazyn i wysyłka",
        body: "Awizacje i statusy widoczne dla klienta B2B.",
      },
      {
        title: "Usługi dla budownictwa",
        body: "Zlecenia, protokoły i rozliczenia po realizacji.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zamówienia",
        body: "Formularz i reguły zamiast wątku na pięć skrzynek.",
      },
      {
        title: "Kompletacja dokumentów",
        body: "Przed fakturą, nie tydzień po wysyłce.",
      },
      {
        title: "Reklamacja jakości",
        body: "Historia sprawy i terminy w jednym torze.",
      },
      {
        title: "Raport sprzedaży",
        body: "Dane z CRM lub ERP odświeżane automatycznie.",
      },
    ],
    howWeWork:
      "W Wołominie zaczynamy od procesu wysyłkowego lub fakturowego. Wdrażamy zdalnie i zostawiamy instrukcję dla magazynu oraz biura.",
    faq: [
      {
        id: "wol-1",
        question: "Czy automatyzacja ma sens przy sezonowych skokach zamówień?",
        answer:
          "Tak. Właśnie wtedy ręczne procesy pękają najszybciej.",
      },
      {
        id: "wol-2",
        question: "Czy wymieniacie nasz WMS?",
        answer:
          "Zwykle nie. Najpierw spajamy to, co już działa.",
      },
      {
        id: "wol-3",
        question: "Jak szybko widać efekt?",
        answer:
          "Przy wąskim zakresie często w ciągu kilku tygodni od startu wdrożenia.",
      },
      {
        id: "wol-4",
        question: "Czy pracujecie z mniejszymi hurtowniami?",
        answer:
          "Tak. To częsty profil klienta w powiecie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["warszawa", "minsk-mazowiecki", "legionowo", "otwock", "wyszkow"],
  },
  {
    slug: "otwock",
    name: "Otwock",
    nameGenitive: "Otwocka",
    nameLocative: "Otwocku",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Otwocku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Otwocka: usługi, handel, zdrowie i logistyka. Zdalne wdrożenia procesów biurowych. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Otwocku",
    heroLead:
      "Porządkujemy otwockie biura usługowe i handlowe, gdy kalendarz wizyt, faktury i maile nie mieszczą się w jednym dniu pracy.",
    introParagraphs: [
      "Otwock to usługi, handel, placówki i firmy zorientowane na południowo-wschodni pierścień Warszawy. Automatyzacja procesów w Otwocku często dotyczy rezerwacji, obiegu dokumentów i follow-upu po wizycie lub dostawie.",
      "Współpracujemy zdalnie. Skupiamy się na przepływach, które da się utrzymać bez osobnego działu IT.",
    ],
    localContext:
      "W powiecie otwockim widać dużo firm usługowych z cienką administracją i rosnącym wolumenem kontaktów. Typowy ból to ręczne przypomnienia, faktury wystawiane gdy zostanie czas i brak wspólnego statusu sprawy.",
    whyHere:
      "W Otwocku automatyzacja zwraca się, gdy skraca czas od zlecenia do faktury i zmniejsza liczbę niedomkniętych wątków w skrzynce.",
    focusIndustries: [
      {
        title: "Usługi i gabinety",
        body: "Rezerwacje, przypomnienia i dokumenty po wizycie.",
      },
      {
        title: "Handel lokalny B2B",
        body: "Zamówienia i statusy bez ręcznego przepisywania.",
      },
      {
        title: "Logistyka i dostawy",
        body: "Awizacje oraz powiadomienia klienta.",
      },
      {
        title: "Administracja MŚP",
        body: "Faktury, wnioski i archiwum w jednym torze.",
      },
    ],
    focusProcesses: [
      {
        title: "Przypomnienie o terminie",
        body: "Automatyczne, z historią kontaktu.",
      },
      {
        title: "Faktura po usłudze",
        body: "Trigger po domknięciu sprawy, nie po pamięci.",
      },
      {
        title: "Lead i oferta",
        body: "CRM z przypomnieniami zamiast notesu.",
      },
      {
        title: "Obieg dokumentów",
        body: "Akceptacje z limitem i jasną odpowiedzialnością.",
      },
    ],
    howWeWork:
      "Z firmami z Otwocka zaczynamy od konsultacji i jednego procesu o największym bólu. Wdrażamy zdalnie, testujemy i szkolimy zespół.",
    faq: [
      {
        id: "otw-1",
        question: "Czy automatyzujecie rezerwacje i przypomnienia?",
        answer:
          "Tak, gdy dane są w systemie lub da się je spiąć bez chaosu.",
      },
      {
        id: "otw-2",
        question: "Czy to tylko dla dużych placówek?",
        answer:
          "Nie. Często startujemy u małych zespołów usługowych.",
      },
      {
        id: "otw-3",
        question: "Czy musicie być w Otwocku?",
        answer:
          "Nie. Współpraca zdalna to standard.",
      },
      {
        id: "otw-4",
        question: "Jak chronione są dane klientów?",
        answer:
          "Omawiamy zakres, role i wymagania RODO przed wdrożeniem.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["warszawa", "piaseczno", "minsk-mazowiecki", "garwolin", "wolomin"],
  },
  {
    slug: "minsk-mazowiecki",
    name: "Mińsk Mazowiecki",
    nameGenitive: "Mińska Mazowieckiego",
    nameLocative: "Mińsku Mazowieckim",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Mińsku Mazowieckim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Mińska Mazowieckiego: produkcja, handel i logistyka. Zdalne wdrożenia, bezpłatna konsultacja.",
    heroTitle: "Automatyzacja procesów w Mińsku Mazowieckim",
    heroLead:
      "Wspieramy mińskie firmy przemysłowe i handlowe, gdy wschód Mazowsza rośnie szybciej niż biuro.",
    introParagraphs: [
      "Mińsk Mazowiecki to ważny ośrodek wschodniego pierścienia: produkcja, handel i logistyka między Warszawą a Siedlcami. Automatyzacja procesów w Mińsku Mazowieckim zwykle dotyczy mostu między magazynem, sprzedażą i księgowością.",
      "Pracujemy zdalnie z mińskimi zespołami. Najpierw proces, potem narzędzie, z mierzalnym efektem po pierwszym etapie.",
    ],
    localContext:
      "Powiat miński łączy zakłady produkcyjne z firmami dystrybucyjnymi. Widać ręczne statusy zamówień, opóźnione faktury i raporty dla właściciela składane z trzech źródeł.",
    whyHere:
      "W Mińsku Mazowieckim automatyzacja pozwala utrzymać tempo dostaw do Warszawy i regionu bez dokładania etatów administracyjnych przy każdym skoku wolumenu.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i komunikacja między zmianami a biurem.",
      },
      {
        title: "Dystrybucja B2B",
        body: "Zamówienia, limity i awizacje w jednym przepływie.",
      },
      {
        title: "Logistyka",
        body: "Sloty, wyjątki i powiadomienia klienta.",
      },
      {
        title: "Back-office",
        body: "Faktury i raporty bez cotygodniowego maratonu Excela.",
      },
    ],
    focusProcesses: [
      {
        title: "Potwierdzenie zamówienia",
        body: "Reguły i limity zamiast ręcznego maila.",
      },
      {
        title: "Wysyłka i dokumenty",
        body: "Komplet przed wystawieniem faktury.",
      },
      {
        title: "Reklamacje",
        body: "Numer sprawy, terminy, odpowiedzialności.",
      },
      {
        title: "KPI operacyjne",
        body: "Automatyczne odświeżanie z systemów źródłowych.",
      },
    ],
    howWeWork:
      "W Mińsku Mazowieckim startujemy od procesu, który najczęściej generuje telefony pilne. Mapujemy zdalnie i wdrażamy etapami.",
    faq: [
      {
        id: "min-1",
        question: "Czy automatyzacja ma sens dla średniego zakładu z Mińska?",
        answer:
          "Tak. Zaczynamy od jednego obiegu z szybkim zwrotem.",
      },
      {
        id: "min-2",
        question: "Czy integrujecie ERP lokalnych dostawców?",
        answer:
          "Łączymy to, do czego jest bezpieczny dostęp: API, eksporty, webhooki.",
      },
      {
        id: "min-3",
        question: "Czy wymagacie IT na miejscu?",
        answer:
          "Nie. Dokumentujemy i szkolimy zespół biznesowy.",
      },
      {
        id: "min-4",
        question: "Jak zacząć?",
        answer:
          "Bezpłatna konsultacja 30 minut, potem propozycja zakresu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["warszawa", "wolomin", "siedlce", "garwolin", "otwock"],
  },
  {
    slug: "grodzisk-mazowiecki",
    name: "Grodzisk Mazowiecki",
    nameGenitive: "Grodziska Mazowieckiego",
    nameLocative: "Grodzisku Mazowieckim",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Grodzisku Mazowieckim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Grodziska Mazowieckiego: produkcja, usługi i logistyka zachodniego pierścienia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Grodzisku Mazowieckim",
    heroLead:
      "Porządkujemy grodziskie operacje produkcyjne i usługowe, gdy bliskość Warszawy podnosi oczekiwania, a biuro zostaje w tyle.",
    introParagraphs: [
      "Grodzisk Mazowiecki łączy produkcję, logistykę i firmy usługowe z zachodniego pierścienia stolicy. Automatyzacja procesów w Grodzisku Mazowieckim często odpowiada na chaos w statusach zleceń, fakturach i komunikacji z klientem warszawskim.",
      "Współpracujemy zdalnie: mapa procesu, wdrożenie MVP, pomiar efektu, dopiero potem kolejne obszary.",
    ],
    localContext:
      "Powiat grodziski ma dużo firm, które rosną wraz z aglomeracją. Typowe problemy to ręczne raporty zmianowe, opóźnione akceptacje zakupów i brak jednego obrazu należności.",
    whyHere:
      "W Grodzisku Mazowieckim automatyzacja chroni marżę przy rosnących kosztach pracy i krótkich SLA wobec klientów ze stolicy.",
    focusIndustries: [
      {
        title: "Produkcja i montaż",
        body: "Statusy i wyjątki jakości widoczne dla planowania.",
      },
      {
        title: "Usługi przemysłowe",
        body: "Zlecenia serwisowe i protokoły w jednym torze.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i powiadomienia bez ręcznego telefonowania.",
      },
      {
        title: "Handel B2B",
        body: "Oferty, limity i follow-up w CRM.",
      },
    ],
    focusProcesses: [
      {
        title: "Zatwierdzenie zakupu",
        body: "Limity i ścieżki akceptacji zamiast podeślij jeszcze raz.",
      },
      {
        title: "Status zlecenia",
        body: "Jedna prawda dla hali, biura i klienta.",
      },
      {
        title: "Faktura po realizacji",
        body: "Mniej opóźnień na koniec miesiąca.",
      },
      {
        title: "Onboarding pracownika",
        body: "Checklisty dostępów spięte z HR.",
      },
    ],
    howWeWork:
      "Z grodziskimi firmami zaczynamy od konsultacji i procesu o najwyższym koszcie błędów. Wdrażamy zdalnie, z krótkimi iteracjami.",
    faq: [
      {
        id: "gro-1",
        question: "Czy pracujecie z zakładami wielozmianowymi?",
        answer:
          "Tak. Projektujemy przepływy pod realny rytm zmian, nie pod slajd.",
      },
      {
        id: "gro-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Rzadko na starcie. Najpierw spajamy to, czym już pracujecie.",
      },
      {
        id: "gro-3",
        question: "Ile kosztuje pierwszy etap?",
        answer:
          "Zależy od integracji. Po analizie dostajecie jasną wycenę.",
      },
      {
        id: "gro-4",
        question: "Czy musicie być w Grodzisku?",
        answer:
          "Nie. Standard to model zdalny.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["warszawa", "pruszkow", "zyrardow", "ozarow-mazowiecki", "sochaczew"],
  },
  {
    slug: "nowy-dwor-mazowiecki",
    name: "Nowy Dwór Mazowiecki",
    nameGenitive: "Nowego Dworu Mazowieckiego",
    nameLocative: "Nowym Dworze Mazowieckim",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Nowym Dworze Mazowieckim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Nowego Dworu Mazowieckiego: logistyka, produkcja i usługi przy Modlinie. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Nowym Dworze Mazowieckim",
    heroLead:
      "Spinamy procesy firm z Nowego Dworu Mazowieckiego, gdy lotnisko, magazyny i biuro muszą mówić tym samym językiem o statusie.",
    introParagraphs: [
      "Nowy Dwór Mazowiecki żyje logistyką, produkcją i usługami wokół Modlina oraz północnego pierścienia Warszawy. Automatyzacja procesów w Nowym Dworze Mazowieckim często dotyczy awizacji, dokumentów i statusów, które dziś giną między zmianami a mailem.",
      "Pracujemy zdalnie. Zaczynamy od procesu krytycznego dla terminu dostawy lub rozliczenia.",
    ],
    localContext:
      "Powiat nowodworski mocno zależy od przepływu towarów i ludzi. Typowy ból to ręczne checklisty przy awizacji, rozjazd wersji dokumentów i opóźnione fakturowanie po obsłudze zlecenia.",
    whyHere:
      "W Nowym Dworze Mazowieckim automatyzacja broni terminów wobec klientów, dla których spóźniony status oznacza przestój lub karę umowną.",
    focusIndustries: [
      {
        title: "Logistyka i magazyny",
        body: "Awizacje, sloty i wyjątki w jednym przepływie.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń między halą a biurem.",
      },
      {
        title: "Usługi okołolotniskowe",
        body: "Zlecenia, protokoły i rozliczenia.",
      },
      {
        title: "Handel B2B",
        body: "Potwierdzenia zamówień i follow-up.",
      },
    ],
    focusProcesses: [
      {
        title: "Awizacja dostawy",
        body: "Potwierdzenia i powiadomienia bez ręcznych SMS-ów.",
      },
      {
        title: "Dokumenty wysyłkowe",
        body: "Kompletowanie zamiast zbierania załączników z kilku osób.",
      },
      {
        title: "Fakturowanie po usłudze",
        body: "Trigger po domknięciu, nie po pamięci.",
      },
      {
        title: "Raport operacyjny",
        body: "Dane źródłowe zamiast ręcznego piątku.",
      },
    ],
    howWeWork:
      "W Nowym Dworze Mazowieckim startujemy od ścieżki awizacji lub dokumentów. Wdrażamy zdalnie, angażując dyspozytora i biuro w krótkie testy.",
    faq: [
      {
        id: "ndm-1",
        question: "Czy automatyzujecie procesy magazynowe przy Modlinie?",
        answer:
          "Tak, w zakresie danych i powiadomień. Nie ruszamy stabilności operacji bez planu.",
      },
      {
        id: "ndm-2",
        question: "Czy to tylko dla dużych operatorów?",
        answer:
          "Nie. Często wspieramy mniejsze firmy usługowe i produkcyjne z powiatu.",
      },
      {
        id: "ndm-3",
        question: "Jak wygląda start?",
        answer:
          "Konsultacja, mapa procesu, wycena etapu pierwszego.",
      },
      {
        id: "ndm-4",
        question: "Czy wymagacie obecności na miejscu?",
        answer:
          "Tylko gdy realnie pomaga mapowaniu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["warszawa", "legionowo", "plonsk", "pultusk", "ozarow-mazowiecki"],
  },
  {
    slug: "ozarow-mazowiecki",
    name: "Ożarów Mazowiecki",
    nameGenitive: "Ożarowa Mazowieckiego",
    nameLocative: "Ożarowie Mazowieckim",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Ożarowie Mazowieckim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Ożarowa Mazowieckiego: produkcja, logistyka i usługi powiatu warszawskiego zachodniego. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Ożarowie Mazowieckim",
    heroLead:
      "Pomagamy ożarowskim firmom spiąć produkcję i back-office, gdy zachodni pierścień Warszawy nie wybacza opóźnień w danych.",
    introParagraphs: [
      "Ożarów Mazowiecki jest siedzibą powiatu warszawskiego zachodniego: produkcja, magazyny i usługi tuż za granicą stolicy. Automatyzacja procesów w Ożarowie Mazowieckim zwykle dotyczy synchronizacji między ERP, arkuszami i skrzynką mailową.",
      "Współpracujemy zdalnie. Wąski zakres, szybki efekt, dokumentacja po polsku.",
    ],
    localContext:
      "Firmy w powiecie warszawskim zachodnim często mają klientów korporacyjnych z Warszawy i cienkie biura lokalne. Typowe wąskie gardła to ręczne raporty, opóźnione akceptacje i brak śladu, kto zatwierdził zmianę terminu.",
    whyHere:
      "W Ożarowie Mazowieckim automatyzacja obniża koszt koordynacji z klientem ze stolicy i zmniejsza ryzyko błędów w dokumentach przy audycie lub SLA.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i wyjątki jakości w przewidywalnym torze.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i statusy dostaw dla klienta B2B.",
      },
      {
        title: "Usługi dla korporacji",
        body: "Obiegi umów, rozliczeń i raportów.",
      },
      {
        title: "HR operacyjny",
        body: "Wnioski i onboarding przy rotacji.",
      },
    ],
    focusProcesses: [
      {
        title: "Akceptacja dokumentu",
        body: "Limity, role i archiwum decyzji.",
      },
      {
        title: "Status zlecenia",
        body: "Widoczny dla sprzedaży i operacji.",
      },
      {
        title: "Raport dla klienta",
        body: "Budowany z danych źródłowych, nie ze slajdów.",
      },
      {
        title: "Zamówienie wewnętrzne",
        body: "Ścieżka zatwierdzeń zamiast wątku mailowego.",
      },
    ],
    howWeWork:
      "Z ożarowskimi firmami zaczynamy od procesu, który najbardziej psuje relację z klientem warszawskim. Wdrażamy zdalnie i etapami.",
    faq: [
      {
        id: "oza-1",
        question: "Czy automatyzacja spełni oczekiwania klientów z Warszawy?",
        answer:
          "Pomagamy domknąć statusy, terminy i ślad decyzji. To często właśnie tego brakuje.",
      },
      {
        id: "oza-2",
        question: "Czy potrzebujemy SSC?",
        answer:
          "Nie. Projektujemy pod skalę MŚP i średnich zakładów.",
      },
      {
        id: "oza-3",
        question: "Ile trwa wdrożenie?",
        answer:
          "Prostsze obiegi: kilka tygodni. Szersze dzielimy na etapy.",
      },
      {
        id: "oza-4",
        question: "Czy jesteście lokalnie?",
        answer:
          "Pracujemy zdalnie; lokalny kontekst jest w procesie, nie w adresie biura.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["warszawa", "pruszkow", "grodzisk-mazowiecki", "nowy-dwor-mazowiecki", "sochaczew"],
  },
  {
    slug: "zyrardow",
    name: "Żyrardów",
    nameGenitive: "Żyrardowa",
    nameLocative: "Żyrardowie",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Żyrardowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Żyrardowa: produkcja, handel i usługi. Zdalne wdrożenia procesów. Bezpłatna konsultacja.",
    heroTitle: "Automatyzacja procesów w Żyrardowie",
    heroLead:
      "Odciążamy żyrardowskie zakłady i firmy usługowe, gdy historia przemysłowa miasta spotyka współczesny chaos w Excelu.",
    introParagraphs: [
      "Żyrardów ma przemysłowe korzenie i rosnącą sieć MŚP usługowych oraz handlowych. Automatyzacja procesów w Żyrardowie często zaczyna się od statusów produkcji, zamówień i faktur, które nadal wędrują mailem między działami.",
      "Pracujemy zdalnie: wybieramy proces o najwyższym koszcie ręcznej pracy i wdrażamy go tak, by dało się utrzymać po projekcie.",
    ],
    localContext:
      "Powiat żyrardowski łączy produkcję z firmami obsługującymi Warszawę i zachodnie Mazowsze. Widać ręczne raporty zmianowe, opóźnione reklamacje jakości i brak jednego obrazu należności.",
    whyHere:
      "W Żyrardowie automatyzacja chroni ciągłość: mniej przestojów wynikających z braku informacji i szybsze domknięcie miesiąca w biurze.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy, materiały i wyjątki między zmianami.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i limity w CRM.",
      },
      {
        title: "Usługi przemysłowe",
        body: "Zlecenia serwisowe i protokoły.",
      },
      {
        title: "Back-office",
        body: "Faktury, HR i raporty dla właściciela.",
      },
    ],
    focusProcesses: [
      {
        title: "Raport zmianowy",
        body: "Zbierany z formularzy, nie z pamięci brygadzisty.",
      },
      {
        title: "Reklamacja",
        body: "Od zgłoszenia po zamknięcie z dokumentacją.",
      },
      {
        title: "Faktura kosztowa",
        body: "Akceptacje z limitem i terminem.",
      },
      {
        title: "Lead sprzedażowy",
        body: "Przypisanie i przypomnienia w CRM.",
      },
    ],
    howWeWork:
      "W Żyrardowie startujemy od konsultacji i procesu, który najbardziej spowalnia produkcję lub sprzedaż. Wdrażamy zdalnie.",
    faq: [
      {
        id: "zyr-1",
        question: "Czy automatyzujecie procesy na hali?",
        answer:
          "Spinamy dane między halą a biurem. Nie wymieniamy MES z marszu.",
      },
      {
        id: "zyr-2",
        question: "Czy to dla małych zakładów?",
        answer:
          "Tak. Często właśnie tam biuro nie nadąża za tempem hali.",
      },
      {
        id: "zyr-3",
        question: "Jak wygląda szkolenie?",
        answer:
          "Szkolimy osoby odpowiedzialne za wyjątki i zostawiamy instrukcję.",
      },
      {
        id: "zyr-4",
        question: "Czy musicie być w Żyrardowie?",
        answer:
          "Nie jako standard.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["warszawa", "grodzisk-mazowiecki", "sochaczew", "pruszkow", "grojec"],
  },
  {
    slug: "sochaczew",
    name: "Sochaczew",
    nameGenitive: "Sochaczewa",
    nameLocative: "Sochaczewie",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Sochaczewie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Sochaczewa: produkcja, handel i logistyka na zachodzie Mazowsza. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Sochaczewie",
    heroLead:
      "Wspieramy sochaczewskie firmy, gdy trasa na Warszawę i Łódź generuje wolumen, a biuro nadal klepie statusy ręcznie.",
    introParagraphs: [
      "Sochaczew leży na zachodnim szlaku Mazowsza: produkcja, handel i logistyka między Warszawą a Łodzią. Automatyzacja procesów w Sochaczewie często dotyczy zamówień, awizacji i faktur, które nie nadążają za ruchem towaru.",
      "Pracujemy zdalnie. Najpierw jeden proces z mierzalnym efektem, potem rozszerzenia.",
    ],
    localContext:
      "Powiat sochaczewski łączy zakłady produkcyjne z firmami spedycyjnymi i handlowymi. Typowy ból to ręczne potwierdzenia, rozjazd stanów i opóźnione rozliczenia po dostawie.",
    whyHere:
      "W Sochaczewie automatyzacja skraca czas od zamówienia do faktury i zmniejsza liczbę błędów przy rosnącym ruchu B2B.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i wyjątki między halą a planowaniem.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i powiadomienia klienta.",
      },
      {
        title: "Handel B2B",
        body: "Oferty, limity i follow-up.",
      },
      {
        title: "Back-office",
        body: "Faktury i raporty należności.",
      },
    ],
    focusProcesses: [
      {
        title: "Potwierdzenie zamówienia",
        body: "Reguły zamiast ręcznego maila.",
      },
      {
        title: "Awizacja",
        body: "Sloty i wyjątki w jednym torze.",
      },
      {
        title: "Faktura po dostawie",
        body: "Mniej tygodniowych pościgów za dokumentami.",
      },
      {
        title: "Raport sprzedaży",
        body: "Automatycznie z CRM lub ERP.",
      },
    ],
    howWeWork:
      "W Sochaczewie zaczynamy od procesu wysyłkowego lub fakturowego. Wdrażamy zdalnie, z testami na realnych zleceniach.",
    faq: [
      {
        id: "soc-1",
        question: "Czy automatyzacja pomoże firmie spedycyjnej z Sochaczewa?",
        answer:
          "Tak. Awizacje i statusy to częsty pierwszy etap.",
      },
      {
        id: "soc-2",
        question: "Czy musicie znać nasz TMS?",
        answer:
          "Wystarczy dostęp do danych. Dobieramy metodę integracji.",
      },
      {
        id: "soc-3",
        question: "Jak szybko widać efekt?",
        answer:
          "Przy wąskim zakresie często w kilka tygodni.",
      },
      {
        id: "soc-4",
        question: "Czy pracujecie zdalnie?",
        answer:
          "Tak. To standard.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["warszawa", "zyrardow", "grodzisk-mazowiecki", "plock", "gostynin"],
  },
  {
    slug: "grojec",
    name: "Grójec",
    nameGenitive: "Grójca",
    nameLocative: "Grójcu",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Grójcu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Grójca: sadownictwo, przetwórstwo, handel i logistyka. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Grójcu",
    heroLead:
      "Porządkujemy grójeckie procesy sezonowe, gdy zbiory i wysyłki mnożą dokumenty, a biuro nie rośnie z sezonem.",
    introParagraphs: [
      "Grójec kojarzy się z sadami, ale to też przetwórstwo, handel i logistyka sezonowa. Automatyzacja procesów w Grójcu często dotyczy zamówień, śledzenia partii i fakturowania w szczycie, gdy Excel przestaje wystarczać.",
      "Współpracujemy zdalnie. Idealnie mapujemy procesy poza sezonem, a wdrażamy tak, by szczyt nie wypalił zespołu.",
    ],
    localContext:
      "Powiat grójecki żyje sezonowością i wieloma kanałami sprzedaży. Typowy ból to ręczne ewidencje partii, opóźnione faktury po wysyłce i brak jednego obrazu należności po sezonie.",
    whyHere:
      "W Grójcu automatyzacja sprawia, że sezon nie kończy się tygodniem domykania Excela. Potwierdzenia i raporty powstają w trakcie roku.",
    focusIndustries: [
      {
        title: "Sadownictwo i handel",
        body: "Zamówienia, terminy i statusy dostaw.",
      },
      {
        title: "Przetwórstwo",
        body: "Partie, protokoły i rozliczenia.",
      },
      {
        title: "Logistyka chłodnicza",
        body: "Awizacje i wyjątki temperatur lub terminów.",
      },
      {
        title: "Usługi dla rolnictwa",
        body: "Zlecenia i faktury po realizacji.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zamówienia sezonowego",
        body: "Formularz i limity zamiast telefonów o 5 rano.",
      },
      {
        title: "Śledzenie partii",
        body: "Numer i historia bez ginących kartek.",
      },
      {
        title: "Fakturowanie po wysyłce",
        body: "Komplet dokumentów tego samego dnia.",
      },
      {
        title: "Raport po sezonie",
        body: "Dane zbierane na bieżąco, nie w marcu.",
      },
    ],
    howWeWork:
      "W Grójcu najlepiej zacząć poza szczytem. Konsultacja, mapa procesu, wdrożenie przed kolejnym sezonem.",
    faq: [
      {
        id: "grj-1",
        question: "Czy automatyzacja ma sens tylko w sezonie?",
        answer:
          "Procesy biurowe pracują cały rok. Sezon tylko pokazuje, gdzie brakuje automatyzacji.",
      },
      {
        id: "grj-2",
        question: "Czy integrujecie systemy wag i magazynów?",
        answer:
          "Gdy dane da się odczytać cyfrowo, tak. Najpierw sprawdzamy realne możliwości.",
      },
      {
        id: "grj-3",
        question: "Czy to dla małych gospodarstw handlowych?",
        answer:
          "Tak, jeśli wolumen dokumentów już boli.",
      },
      {
        id: "grj-4",
        question: "Czy musicie być w Grójcu?",
        answer:
          "Nie. Pracujemy zdalnie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["warszawa", "piaseczno", "bialobrzegi", "radom", "zyrardow"],
  },
  {
    slug: "garwolin",
    name: "Garwolin",
    nameGenitive: "Garwolina",
    nameLocative: "Garwolinie",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Garwolinie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Garwolina: produkcja, handel i logistyka południowo-wschodniego Mazowsza. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Garwolinie",
    heroLead:
      "Pomagamy garwolińskim firmom domknąć zamówienia i dokumenty, gdy trasa na Lublin i Warszawę nie wybacza chaosu w biurze.",
    introParagraphs: [
      "Garwolin to produkcja, handel i logistyka na południowo-wschodnim szlaku Mazowsza. Automatyzacja procesów w Garwolinie zwykle dotyczy potwierdzeń zamówień, statusów produkcji i faktur, które dziś żyją w mailach.",
      "Pracujemy zdalnie z garwolińskimi zespołami. Wąski start, mierzalny efekt, potem kolejne moduły.",
    ],
    localContext:
      "Powiat garwoliński łączy zakłady produkcyjne z firmami handlowymi. Widać ręczne statusy, opóźnione reklamacje i raporty dla właściciela klejone z kilku arkuszy.",
    whyHere:
      "W Garwolinie automatyzacja obniża koszt błędów przy rosnącym B2B i skraca czas reakcji na klienta z Warszawy lub Lublina.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i jakość między zmianami.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity i follow-up.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i dokumenty wysyłkowe.",
      },
      {
        title: "Usługi lokalne",
        body: "Zlecenia i rozliczenia po domknięciu.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie do produkcji",
        body: "Jedna ścieżka zamiast trzech wersji maila.",
      },
      {
        title: "Dokumenty wysyłkowe",
        body: "Komplet przed wyjazdem.",
      },
      {
        title: "Reklamacja",
        body: "Historia i terminy w jednym miejscu.",
      },
      {
        title: "Raport należności",
        body: "Bez ręcznego ścigania faktur.",
      },
    ],
    howWeWork:
      "W Garwolinie zaczynamy od procesu zamówieniowego lub fakturowego. Wdrażamy zdalnie i szkolimy biuro oraz magazyn.",
    faq: [
      {
        id: "gar-1",
        question: "Czy automatyzacja sprawdzi się w średniej firmie z Garwolina?",
        answer:
          "Tak. Startujemy od jednego obiegu.",
      },
      {
        id: "gar-2",
        question: "Czy wymieniacie ERP?",
        answer:
          "Nie na siłę. Spinamy to, czym już pracujecie.",
      },
      {
        id: "gar-3",
        question: "Jak wygląda wycena?",
        answer:
          "Po analizie: zakres etapu i koszt.",
      },
      {
        id: "gar-4",
        question: "Czy wymagacie wizyt?",
        answer:
          "Tylko gdy pomagają mapowaniu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["warszawa", "minsk-mazowiecki", "otwock", "siedlce", "radom"],
  },
  {
    slug: "ciechanow",
    name: "Ciechanów",
    nameGenitive: "Ciechanowa",
    nameLocative: "Ciechanowie",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Ciechanowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Ciechanowa: przemysł spożywczy, produkcja i usługi. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Ciechanowie",
    heroLead:
      "Porządkujemy ciechanowskie procesy produkcyjne i biurowe, gdy północ Mazowsza potrzebuje porządku w danych, nie kolejnego etatu.",
    introParagraphs: [
      "Ciechanów to ośrodek przemysłowy i usługowy północy Mazowsza, z silnym zapleczem spożywczym i produkcyjnym. Automatyzacja procesów w Ciechanowie często dotyczy statusów zleceń, jakości i obiegu faktur między halą a księgowością.",
      "Współpracujemy zdalnie. Mapujemy krytyczny przepływ i wdrażamy go tak, by przetrwał urlopy osób od Excela.",
    ],
    localContext:
      "Powiat ciechanowski łączy zakłady przetwórcze z firmami B2B. Typowy ból to ręczne raporty zmianowe, opóźnione reklamacje i brak wspólnego obrazu stanów.",
    whyHere:
      "W Ciechanowie automatyzacja chroni marżę przy zmiennych wolumenach i zmniejsza ryzyko błędów w dokumentacji jakości.",
    focusIndustries: [
      {
        title: "Przemysł spożywczy",
        body: "Partie, protokoły i statusy produkcji.",
      },
      {
        title: "Produkcja komponentów",
        body: "Zlecenia i wyjątki jakości.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i limity.",
      },
      {
        title: "HR przy rotacji",
        body: "Onboarding i ewidencja wniosków.",
      },
    ],
    focusProcesses: [
      {
        title: "Raport z linii",
        body: "Dane zbierane automatycznie, nie w piątek.",
      },
      {
        title: "Reklamacja jakości",
        body: "Od zgłoszenia po zamknięcie.",
      },
      {
        title: "Obieg faktur",
        body: "Akceptacje z limitem.",
      },
      {
        title: "Zamówienie B2B",
        body: "Potwierdzenie i rezerwacja zasobów.",
      },
    ],
    howWeWork:
      "W Ciechanowie startujemy od procesu jakości lub zamówień. Wdrażamy zdalnie, z testami na realnych partiach lub zleceniach.",
    faq: [
      {
        id: "cie-1",
        question: "Czy automatyzujecie dokumentację jakości?",
        answer:
          "W zakresie obiegu, terminów i archiwum. Nie zastępujemy specjalistycznych systemów bez analizy.",
      },
      {
        id: "cie-2",
        question: "Czy to dla średnich zakładów?",
        answer:
          "Tak. To częsty profil.",
      },
      {
        id: "cie-3",
        question: "Czy musicie być na hali?",
        answer:
          "Warsztat planujemy tylko gdy pomaga.",
      },
      {
        id: "cie-4",
        question: "Jak zacząć?",
        answer:
          "Bezpłatna konsultacja 30 minut.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["mlawa", "plonsk", "pultusk", "warszawa", "zuromin"],
  },
  {
    slug: "mlawa",
    name: "Mława",
    nameGenitive: "Mławy",
    nameLocative: "Mławie",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Mławie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Mławy: produkcja, logistyka i handel na północy Mazowsza. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Mławie",
    heroLead:
      "Wspieramy mławskie zakłady i dystrybutorów, gdy odległość od Warszawy nie może oznaczać wolniejszego biura.",
    introParagraphs: [
      "Mława to produkcja, handel i logistyka na północnym krańcu Mazowsza. Automatyzacja procesów w Mławie zwykle dotyczy synchronizacji zamówień, magazynu i fakturowania, gdy ręczne procesy już nie nadążają.",
      "Pracujemy zdalnie. Krótka diagnoza, wąski zakres, mierzalny efekt.",
    ],
    localContext:
      "Powiat mławski ma firmy, które muszą konkurować tempem z aglomeracją mimo mniejszego zaplecza IT. Typowy ból to ręczne statusy, opóźnione faktury i brak jednego raportu dla właściciela.",
    whyHere:
      "W Mławie automatyzacja wyrównuje szanse operacyjne: szybsza odpowiedź klientowi i mniej godzin na poprawki dokumentów.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i materiały między zmianami.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i dokumenty wysyłkowe.",
      },
      {
        title: "Handel",
        body: "Zamówienia B2B i follow-up.",
      },
      {
        title: "Back-office",
        body: "Faktury, HR, raporty.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zamówienia",
        body: "Formularz i reguły.",
      },
      {
        title: "Wysyłka",
        body: "Statusy widoczne dla klienta.",
      },
      {
        title: "Faktura",
        body: "Po komplecie dokumentów.",
      },
      {
        title: "Raport tygodniowy",
        body: "Bez ręcznego składania.",
      },
    ],
    howWeWork:
      "W Mławie zaczynamy od procesu, który generuje najwięcej telefonów. Wdrażamy zdalnie i szkolimy zespół.",
    faq: [
      {
        id: "mla-1",
        question: "Czy automatyzacja ma sens daleko od Warszawy?",
        answer:
          "Tym bardziej. Klienci i tak oczekują szybkiego statusu.",
      },
      {
        id: "mla-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie. Dobieramy narzędzia możliwe do utrzymania przez zespół biznesowy.",
      },
      {
        id: "mla-3",
        question: "Ile trwa etap?",
        answer:
          "Prostsze przepływy: kilka tygodni.",
      },
      {
        id: "mla-4",
        question: "Czy pracujecie zdalnie?",
        answer:
          "Tak.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["ciechanow", "zuromin", "przasnysz", "plonsk", "warszawa"],
  },
  {
    slug: "plonsk",
    name: "Płońsk",
    nameGenitive: "Płońska",
    nameLocative: "Płońsku",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Płońsku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Płońska: produkcja, handel i usługi między Warszawą a Ciechanowem. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Płońsku",
    heroLead:
      "Spinamy płońskie procesy produkcyjne i handlowe, gdy biuro nadal jest wąskim gardłem między magazynem a klientem.",
    introParagraphs: [
      "Płońsk leży na szlaku północnego Mazowsza: produkcja, handel i usługi. Automatyzacja procesów w Płońsku często zamyka lukę między potwierdzeniem zamówienia a realnym statusem w magazynie.",
      "Współpracujemy zdalnie. Najpierw proces o najwyższym koszcie chaosu.",
    ],
    localContext:
      "Powiat płoński łączy MŚP produkcyjne z firmami handlowymi. Widać ręczne limity kredytowe, opóźnione faktury i raporty klejone z maili.",
    whyHere:
      "W Płońsku automatyzacja skraca ścieżkę od zapytania do faktury i zmniejsza liczbę błędów przy obsłudze stałych odbiorców.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń i wyjątki.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia, limity, follow-up.",
      },
      {
        title: "Usługi",
        body: "Zlecenia i rozliczenia.",
      },
      {
        title: "Administracja",
        body: "Faktury i wnioski HR.",
      },
    ],
    focusProcesses: [
      {
        title: "Limit kredytowy",
        body: "Reguły zamiast pamięci księgowej.",
      },
      {
        title: "Potwierdzenie zamówienia",
        body: "Jedna ścieżka.",
      },
      {
        title: "Faktura",
        body: "Po statusie realizacji.",
      },
      {
        title: "Onboarding",
        body: "Checklisty dostępów.",
      },
    ],
    howWeWork:
      "W Płońsku startujemy od konsultacji i jednego obiegu. Wdrażamy zdalnie, etapami.",
    faq: [
      {
        id: "plo-1",
        question: "Czy to dla firm rodzinnych?",
        answer:
          "Tak. Często tam zwrot jest najszybszy.",
      },
      {
        id: "plo-2",
        question: "Czy integrujecie Comarch lub Insert?",
        answer:
          "Gdy jest bezpieczny dostęp do danych, tak.",
      },
      {
        id: "plo-3",
        question: "Jak zacząć?",
        answer:
          "Bezpłatna konsultacja.",
      },
      {
        id: "plo-4",
        question: "Czy musicie być w Płońsku?",
        answer:
          "Nie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["ciechanow", "nowy-dwor-mazowiecki", "plock", "mlawa", "warszawa"],
  },
  {
    slug: "zuromin",
    name: "Żuromin",
    nameGenitive: "Żuromina",
    nameLocative: "Żurominie",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Żurominie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Żuromina: rolnictwo, przetwórstwo i handel. Zdalne wdrożenia procesów. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Żurominie",
    heroLead:
      "Porządkujemy żuromińskie dokumenty i rozliczenia, gdy sezon i lokalny handel nie mogą tonąć w papierach.",
    introParagraphs: [
      "Żuromin to siedziba powiatu na północno-zachodnim krańcu Mazowsza: rolnictwo, przetwórstwo, handel i usługi lokalne. Automatyzacja procesów w Żurominie często oznacza połączenie sezonowych szczytów z ciągłą pracą biura.",
      "Pracujemy zdalnie. Budujemy przepływy, które da się utrzymać małym zespołem.",
    ],
    localContext:
      "Powiat żuromiński żyje rytmem sezonu i lokalnego rynku. Typowy ból to ręczne ewidencje, opóźnione faktury i brak jednego obrazu należności oraz stanów.",
    whyHere:
      "W Żurominie automatyzacja pozwala przejść sezon bez proporcjonalnego dokładania etatów administracyjnych.",
    focusIndustries: [
      {
        title: "Przetwórstwo i handel rolny",
        body: "Zamówienia, partie, faktury.",
      },
      {
        title: "Usługi lokalne",
        body: "Zlecenia i rozliczenia.",
      },
      {
        title: "Transport",
        body: "Awizacje i dokumenty.",
      },
      {
        title: "Back-office",
        body: "Obieg faktur i raporty.",
      },
    ],
    focusProcesses: [
      {
        title: "Ewidencja dostawy",
        body: "Formularz zamiast kartki.",
      },
      {
        title: "Faktura po odbiorze",
        body: "Tego samego dnia, nie tydzień później.",
      },
      {
        title: "Przypomnienie o płatności",
        body: "Automatyczne, z historią.",
      },
      {
        title: "Raport sezonowy",
        body: "Dane zbierane na bieżąco.",
      },
    ],
    howWeWork:
      "W Żurominie najlepiej zacząć poza szczytem. Konsultacja, mapa, wdrożenie przed kolejnym sezonem.",
    faq: [
      {
        id: "zur-1",
        question: "Czy automatyzacja ma sens w małym powiecie?",
        answer:
          "Tak, jeśli dokumenty już bolą. Skala wdrożenia dopasowujemy do zespołu.",
      },
      {
        id: "zur-2",
        question: "Czy to drogie?",
        answer:
          "Zaczynamy od wąskiego zakresu z jasną wyceną.",
      },
      {
        id: "zur-3",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu.",
      },
      {
        id: "zur-4",
        question: "Czy pracujecie zdalnie?",
        answer:
          "Tak.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["mlawa", "ciechanow", "sierpc", "plonsk", "plock"],
  },
  {
    slug: "pultusk",
    name: "Pułtusk",
    nameGenitive: "Pułtuska",
    nameLocative: "Pułtusku",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Pułtusku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Pułtuska: turystyka, usługi, handel i produkcja. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Pułtusku",
    heroLead:
      "Odciążamy pułtuskie firmy usługowe i handlowe, gdy sezon turystyczny i lokalny B2B mnożą maile.",
    introParagraphs: [
      "Pułtusk łączy turystykę, usługi, handel i lokalną produkcję. Automatyzacja procesów w Pułtusku często dotyczy rezerwacji, faktur i follow-upu, gdy te same osoby ogarniają biuro i szczyt ruchu.",
      "Współpracujemy zdalnie. Poza sezonem mapujemy, przed sezonem wdrażamy.",
    ],
    localContext:
      "Powiat pułtuski ma firmy z silną sezonowością i cienkim back-office. Typowy ból to ręczne potwierdzenia, rozproszone kanały zapytań i faktury doganiające sezon z opóźnieniem.",
    whyHere:
      "W Pułtusku automatyzacja sprawia, że sezon nie wypala zespołu. Potwierdzenia i proste raporty dzieją się same.",
    focusIndustries: [
      {
        title: "Turystyka i hospitality",
        body: "Rezerwacje, zaliczki, przypomnienia.",
      },
      {
        title: "Handel i usługi",
        body: "Zlecenia i faktury.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy i dokumenty.",
      },
      {
        title: "Administracja",
        body: "Obieg faktur i wniosków.",
      },
    ],
    focusProcesses: [
      {
        title: "Rezerwacja",
        body: "Potwierdzenie i przypomnienie.",
      },
      {
        title: "Faktura zaliczkowa",
        body: "Po statusie płatności.",
      },
      {
        title: "Zapytanie ofertowe",
        body: "Kolejka i przypisanie.",
      },
      {
        title: "Raport obłożenia",
        body: "Z kilku źródeł bez ręcznego składania.",
      },
    ],
    howWeWork:
      "W Pułtusku zaczynamy od procesu, który w sezonie generuje najwięcej nocnych maili. Wdrażamy zdalnie.",
    faq: [
      {
        id: "pul-1",
        question: "Czy automatyzacja pomoże pensjonatowi lub firmie usługowej?",
        answer:
          "Tak. Rezerwacje i dokumenty to częsty start.",
      },
      {
        id: "pul-2",
        question: "Czy integrujecie systemy rezerwacyjne?",
        answer:
          "Gdy API lub eksport na to pozwala.",
      },
      {
        id: "pul-3",
        question: "Kiedy najlepiej zacząć?",
        answer:
          "Kilka miesięcy przed sezonem, ale mały proces można ruszyć też w trakcie roku.",
      },
      {
        id: "pul-4",
        question: "Czy musicie być w Pułtusku?",
        answer:
          "Nie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    ],
    nearbyCitySlugs: ["legionowo", "ciechanow", "makow-mazowiecki", "wyszkow", "warszawa"],
  },
  {
    slug: "przasnysz",
    name: "Przasnysz",
    nameGenitive: "Przasnysza",
    nameLocative: "Przasnyszu",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Przasnyszu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Przasnysza: produkcja, handel i usługi północnego Mazowsza. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Przasnyszu",
    heroLead:
      "Pomagamy przasnyskim firmom uporządkować zamówienia i dokumenty, gdy odległość od stolicy nie usprawiedliwia chaosu w biurze.",
    introParagraphs: [
      "Przasnysz to produkcja, handel i usługi na północy Mazowsza. Automatyzacja procesów w Przasnyszu zwykle dotyczy potwierdzeń zamówień, statusów realizacji i faktur.",
      "Pracujemy zdalnie. Wąski start, jasna instrukcja, utrzymanie po stronie zespołu biznesowego.",
    ],
    localContext:
      "Powiat przasnyski ma MŚP z ograniczonym zapleczem administracyjnym. Typowy ból to ręczne maile statusowe, opóźnione faktury i brak raportu dla właściciela bez składania Excela.",
    whyHere:
      "W Przasnyszu automatyzacja zwraca czas właścicielowi i biuru: mniej poprawiania, więcej domkniętych spraw.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i wyjątki.",
      },
      {
        title: "Handel",
        body: "Zamówienia B2B.",
      },
      {
        title: "Usługi terenowe",
        body: "Zlecenia i protokoły.",
      },
      {
        title: "Back-office",
        body: "Faktury i HR.",
      },
    ],
    focusProcesses: [
      {
        title: "Potwierdzenie zamówienia",
        body: "Jedna ścieżka.",
      },
      {
        title: "Status realizacji",
        body: "Widoczny dla klienta.",
      },
      {
        title: "Faktura",
        body: "Po domknięciu.",
      },
      {
        title: "Raport tygodniowy",
        body: "Automatyczny.",
      },
    ],
    howWeWork:
      "W Przasnyszu startujemy od konsultacji i procesu o największym chaosie. Wdrażamy zdalnie.",
    faq: [
      {
        id: "prz-1",
        question: "Czy mała firma z Przasnysza może zacząć?",
        answer:
          "Tak. Od jednego obiegu.",
      },
      {
        id: "prz-2",
        question: "Czy potrzebujemy dużego budżetu IT?",
        answer:
          "Nie. Dobieramy zakres do realnych kosztów.",
      },
      {
        id: "prz-3",
        question: "Jak wygląda utrzymanie?",
        answer:
          "Szkolimy zespół i zostawiamy dokumentację.",
      },
      {
        id: "prz-4",
        question: "Czy pracujecie zdalnie?",
        answer:
          "Tak.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["mlawa", "makow-mazowiecki", "ostroleka", "ciechanow", "zuromin"],
  },
  {
    slug: "makow-mazowiecki",
    name: "Maków Mazowiecki",
    nameGenitive: "Makowa Mazowieckiego",
    nameLocative: "Makowie Mazowieckim",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Makowie Mazowieckim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Makowa Mazowieckiego: handel, produkcja i usługi. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Makowie Mazowieckim",
    heroLead:
      "Porządkujemy makowskie procesy biurowe i handlowe, gdy lokalny rynek wymaga tempa, a zespół ma kilka osób na wszystko.",
    introParagraphs: [
      "Maków Mazowiecki obsługuje lokalny handel, produkcję i usługi w powiecie makowskim. Automatyzacja procesów w Makowie Mazowieckim często dotyczy zamówień, faktur i follow-upu, gdy właściciel jest jednocześnie biurem.",
      "Współpracujemy zdalnie. Prosty zakres, szybki efekt, bez wielkiego programu transformacji.",
    ],
    localContext:
      "W powiecie makowskim widać firmy, w których te same osoby ogarniają sprzedaż, magazyn i księgowość. Typowy ból to ginące wątki mailowe i faktury wystawiane z opóźnieniem.",
    whyHere:
      "W Makowie Mazowieckim automatyzacja oddaje właścicielowi godziny tygodnia i zmniejsza ryzyko niedomkniętych spraw.",
    focusIndustries: [
      {
        title: "Handel lokalny",
        body: "Zamówienia i statusy.",
      },
      {
        title: "Produkcja małoseryjna",
        body: "Zlecenia i dokumenty.",
      },
      {
        title: "Usługi",
        body: "Kalendarz i faktury.",
      },
      {
        title: "Administracja",
        body: "Obieg faktur kosztowych.",
      },
    ],
    focusProcesses: [
      {
        title: "Zapytanie do oferty",
        body: "Kolejka i przypomnienie.",
      },
      {
        title: "Faktura",
        body: "Po statusie realizacji.",
      },
      {
        title: "Przypomnienie płatności",
        body: "Automatyczne.",
      },
      {
        title: "Raport sprzedaży",
        body: "Bez ręcznej tabeli.",
      },
    ],
    howWeWork:
      "W Makowie Mazowieckim zaczynamy od jednego procesu, który najbardziej zabiera czas właściciela. Wdrażamy zdalnie.",
    faq: [
      {
        id: "mak-1",
        question: "Czy automatyzacja ma sens przy kilkuosobowym zespole?",
        answer:
          "Szczególnie wtedy. Każda zaoszczędzona godzina widać od razu.",
      },
      {
        id: "mak-2",
        question: "Czy to skomplikowane w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę i szkolimy wasz zespół.",
      },
      {
        id: "mak-3",
        question: "Ile trwa start?",
        answer:
          "Prostsze przepływy: kilka tygodni.",
      },
      {
        id: "mak-4",
        question: "Czy musicie być na miejscu?",
        answer:
          "Nie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["pultusk", "przasnysz", "ostroleka", "wyszkow", "ciechanow"],
  },
  {
    slug: "ostroleka",
    name: "Ostrołęka",
    nameGenitive: "Ostrołęki",
    nameLocative: "Ostrołęce",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Ostrołęce | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Ostrołęki: przemysł, energetyka, IT i usługi. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Ostrołęce",
    heroLead:
      "Porządkujemy ostrołęckie procesy przemysłowe i biurowe, gdy północno-wschodnie Mazowsze wymaga śladu audytowego, a nie kolejnego Excela.",
    introParagraphs: [
      "Ostrołęka to przemysł, energetyka, usługi i rosnące firmy B2B na północnym wschodzie Mazowsza. Automatyzacja procesów w Ostrołęce często dotyczy raportowania, obiegów dokumentów i synchronizacji między produkcją a biurem.",
      "Pracujemy zdalnie. Dobieramy zakres pod wymagania jakości i terminów, nie pod wielki program transformacji.",
    ],
    localContext:
      "Lokalny rynek łączy duże organizacje przemysłowe z siecią mniejszych dostawców. Widać ręczne raporty, rozproszone akceptacje i presję na audytowalność bez dokładania etatów.",
    whyHere:
      "W Ostrołęce automatyzacja chroni terminowość i ślad decyzji przy kontraktach, gdzie błąd w danych kosztuje więcej niż godzina pracy biura.",
    focusIndustries: [
      {
        title: "Przemysł i energetyka",
        body: "Raporty, protokoły i obiegi zatwierdzeń.",
      },
      {
        title: "Dostawcy przemysłowi",
        body: "Zlecenia, części, rozliczenia.",
      },
      {
        title: "Usługi B2B",
        body: "CRM, oferty, follow-up.",
      },
      {
        title: "HR i back-office",
        body: "Onboarding, wnioski, faktury.",
      },
    ],
    focusProcesses: [
      {
        title: "Raport operacyjny",
        body: "Z systemów źródłowych, nie z ręcznego piątku.",
      },
      {
        title: "Obieg protokołów",
        body: "Terminy i archiwum pod audyt.",
      },
      {
        title: "Zamówienie MRO",
        body: "Od zapotrzebowania po potwierdzenie.",
      },
      {
        title: "Lead B2B",
        body: "Przypisanie i przypomnienia.",
      },
    ],
    howWeWork:
      "W Ostrołęce zaczynamy od procesu o najwyższym ryzyku opóźnienia lub braku śladu. Wdrażamy zdalnie, etapami.",
    faq: [
      {
        id: "ost-1",
        question: "Czy automatyzacja ma sens w branży przemysłowej w Ostrołęce?",
        answer:
          "Tak. W obiegach, powiadomieniach i raportach, które da się opisać.",
      },
      {
        id: "ost-2",
        question: "Czy wymagacie lokalnego IT?",
        answer:
          "Nie do startu. Wasze IT może nadzorować dostępy.",
      },
      {
        id: "ost-3",
        question: "Jak dbacie o bezpieczeństwo?",
        answer:
          "Minimalizujemy zakres danych i omawiamy wymagania przed wdrożeniem.",
      },
      {
        id: "ost-4",
        question: "Ile trwa pierwszy etap?",
        answer:
          "Prostsze przepływy: kilka tygodni.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["makow-mazowiecki", "ostrow-mazowiecka", "wyszkow", "przasnysz", "warszawa"],
  },
  {
    slug: "ostrow-mazowiecka",
    name: "Ostrów Mazowiecka",
    nameGenitive: "Ostrowi Mazowieckiej",
    nameLocative: "Ostrowi Mazowieckiej",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Ostrowi Mazowieckiej | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Ostrowi Mazowieckiej: produkcja, handel i logistyka. Zdalne wdrożenia procesów.",
    heroTitle: "Automatyzacja procesów w Ostrowi Mazowieckiej",
    heroLead:
      "Wspieramy ostrowskie firmy, gdy szlak na Białystok i Warszawę wymaga sprawnych dokumentów, a nie bohaterskiego biura.",
    introParagraphs: [
      "Ostrów Mazowiecka to produkcja, handel i logistyka na wschodnim szlaku Mazowsza. Automatyzacja procesów w Ostrowi Mazowieckiej zwykle dotyczy zamówień, wysyłek i faktur.",
      "Współpracujemy zdalnie. Wąski start, mierzalny efekt.",
    ],
    localContext:
      "Powiat ostrowski łączy zakłady i firmy handlowe obsługujące ruch regionalny. Typowy ból to ręczne statusy, opóźnione dokumenty wysyłkowe i brak jednego raportu należności.",
    whyHere:
      "W Ostrowi Mazowieckiej automatyzacja skraca czas od zamówienia do wysyłki z kompletem dokumentów i mniej błędów w B2B.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i wyjątki.",
      },
      {
        title: "Handel",
        body: "Zamówienia i limity.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i dokumenty.",
      },
      {
        title: "Back-office",
        body: "Faktury i raporty.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie i rezerwacja.",
      },
      {
        title: "Dokumenty wysyłkowe",
        body: "Komplet przed wyjazdem.",
      },
      {
        title: "Faktura",
        body: "Po statusie dostawy.",
      },
      {
        title: "Raport",
        body: "Automatyczny z danych źródłowych.",
      },
    ],
    howWeWork:
      "W Ostrowi Mazowieckiej startujemy od procesu wysyłkowego. Wdrażamy zdalnie, z testami na realnych zleceniach.",
    faq: [
      {
        id: "osm-1",
        question: "Czy automatyzacja pomoże średniej firmie handlowej?",
        answer:
          "Tak. Zamówienia i dokumenty to częsty start.",
      },
      {
        id: "osm-2",
        question: "Czy wymieniacie systemy?",
        answer:
          "Nie na siłę.",
      },
      {
        id: "osm-3",
        question: "Czy musicie być na miejscu?",
        answer:
          "Nie.",
      },
      {
        id: "osm-4",
        question: "Jak zacząć?",
        answer:
          "Konsultacja 30 minut.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["ostroleka", "wyszkow", "siedlce", "wegrow", "warszawa"],
  },
  {
    slug: "wyszkow",
    name: "Wyszków",
    nameGenitive: "Wyszkowa",
    nameLocative: "Wyszkowie",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Wyszkowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wyszkowa: produkcja, logistyka i handel między Warszawą a Ostrołęką. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Wyszkowie",
    heroLead:
      "Spinamy wyszkowskie procesy magazynowe i handlowe, gdy bliskość Warszawy podnosi tempo, a Excel nie nadąża.",
    introParagraphs: [
      "Wyszków leży między Warszawą a północno-wschodnim Mazowszem: produkcja, logistyka, handel. Automatyzacja procesów w Wyszkowie często dotyczy awizacji, statusów zamówień i fakturowania.",
      "Pracujemy zdalnie. Najpierw proces krytyczny dla terminu dostawy.",
    ],
    localContext:
      "Powiat wyszkowski ma firmy rosnące wraz z ruchem na trasie do stolicy. Typowy ból to ręczne potwierdzenia, rozjazd stanów i opóźnione faktury.",
    whyHere:
      "W Wyszkowie automatyzacja broni terminów wobec klientów warszawskich i zmniejsza koszt ręcznej koordynacji.",
    focusIndustries: [
      {
        title: "Logistyka",
        body: "Awizacje i wyjątki.",
      },
      {
        title: "Produkcja",
        body: "Statusy zleceń.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i follow-up.",
      },
      {
        title: "Usługi",
        body: "Zlecenia i rozliczenia.",
      },
    ],
    focusProcesses: [
      {
        title: "Awizacja",
        body: "Potwierdzenia bez SMS-ów.",
      },
      {
        title: "Status magazynu",
        body: "Jedna prawda.",
      },
      {
        title: "Faktura",
        body: "Po wysyłce z kompletem.",
      },
      {
        title: "CRM",
        body: "Lead do handlowca.",
      },
    ],
    howWeWork:
      "W Wyszkowie zaczynamy od awizacji lub zamówień. Wdrażamy zdalnie.",
    faq: [
      {
        id: "wys-1",
        question: "Czy pracujecie z magazynami?",
        answer:
          "Tak. Statusy i dokumenty to częsty zakres.",
      },
      {
        id: "wys-2",
        question: "Czy potrzebujemy WMS klasy enterprise?",
        answer:
          "Nie. Często wystarczy warstwa obok obecnych narzędzi.",
      },
      {
        id: "wys-3",
        question: "Ile trwa wdrożenie?",
        answer:
          "Kilka tygodni przy wąskim zakresie.",
      },
      {
        id: "wys-4",
        question: "Czy zdalnie?",
        answer:
          "Tak.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["warszawa", "wolomin", "ostroleka", "pultusk", "ostrow-mazowiecka"],
  },
  {
    slug: "siedlce",
    name: "Siedlce",
    nameGenitive: "Siedlec",
    nameLocative: "Siedlcach",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Siedlcach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Siedlec: przemysł, edukacja, handel i usługi. Zdalne wdrożenia. Bezpłatna konsultacja.",
    heroTitle: "Automatyzacja procesów w Siedlcach",
    heroLead:
      "Porządkujemy siedleckie procesy B2B i biurowe, gdy wschodnie Mazowsze potrzebuje tempa bez proporcjonalnego wzrostu administracji.",
    introParagraphs: [
      "Siedlce to ośrodek przemysłowy, edukacyjny i usługowy wschodniego Mazowsza. Automatyzacja procesów w Siedlcach często dotyczy sprzedaży, HR, faktur i raportów, obszarów, które przy skali wciąż żyją w mailach.",
      "Współpracujemy zdalnie. Diagnoza, zakres, wdrożenie iteracyjne, szkolenie zespołu.",
    ],
    localContext:
      "Lokalny biznes łączy produkcję, handel i usługi z rosnącymi oczekiwaniami klientów regionalnych. Typowy ból to ręczne leady, onboarding rozciągnięty w czasie i raporty składane z kilku Exceli.",
    whyHere:
      "W Siedlcach automatyzacja pozwala skalować obsługę i projekty bez liniowego wzrostu etatów biurowych.",
    focusIndustries: [
      {
        title: "Produkcja i przemysł",
        body: "Statusy, jakość, dokumenty.",
      },
      {
        title: "Handel i dystrybucja",
        body: "Zamówienia i limity.",
      },
      {
        title: "Edukacja i usługi",
        body: "Zapisy, płatności, komunikacja.",
      },
      {
        title: "HR i finanse",
        body: "Wnioski, faktury, zamknięcie miesiąca.",
      },
    ],
    focusProcesses: [
      {
        title: "Lejek leadów",
        body: "Od formularza po zadanie w CRM.",
      },
      {
        title: "Onboarding",
        body: "Checklisty dostępów.",
      },
      {
        title: "Obieg faktur",
        body: "Akceptacje i archiwum.",
      },
      {
        title: "Raport zarządczy",
        body: "Automatycznie z danych źródłowych.",
      },
    ],
    howWeWork:
      "W Siedlcach zaczynamy od bezpłatnej konsultacji i procesu o najwyższym koszcie chaosu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "sie-1",
        question: "Czy automatyzacja w Siedlcach jest tylko dla dużych firm?",
        answer:
          "Nie. Często startujemy u rosnących MŚP.",
      },
      {
        id: "sie-2",
        question: "Czy musicie być na miejscu?",
        answer:
          "Nie. Model zdalny i hybrydowy.",
      },
      {
        id: "sie-3",
        question: "Czy integrujecie CRM i ERP?",
        answer:
          "Tak, gdy jest bezpieczny dostęp do danych.",
      },
      {
        id: "sie-4",
        question: "Od czego zacząć?",
        answer:
          "Od leadów, faktur albo onboardingu.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["minsk-mazowiecki", "sokolow-podlaski", "wegrow", "losice", "warszawa", "lublin"],
  },
  {
    slug: "sokolow-podlaski",
    name: "Sokołów Podlaski",
    nameGenitive: "Sokołowa Podlaskiego",
    nameLocative: "Sokołowie Podlaskim",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Sokołowie Podlaskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Sokołowa Podlaskiego: spożywcze, produkcja i handel. Zdalne wdrożenia procesów.",
    heroTitle: "Automatyzacja procesów w Sokołowie Podlaskim",
    heroLead:
      "Pomagamy sokołowskim firmom spiąć produkcję i dokumenty, gdy wymagania jakościowe nie idą w parze z cienkim biurem.",
    introParagraphs: [
      "Sokołów Podlaski kojarzy się z przemysłem spożywczym i siecią dostawców. Automatyzacja procesów w Sokołowie Podlaskim często dotyczy partii, protokołów, zamówień i rozliczeń z odbiorcami.",
      "Pracujemy zdalnie. Zakres pod realne wymagania dokumentacyjne, nie pod slajd digitalizacji.",
    ],
    localContext:
      "Powiat sokołowski łączy przetwórstwo z lokalnym handlem i logistyką. Typowy ból to ręczne protokoły, opóźnione ASN i raporty klejone pod audyt w ostatniej chwili.",
    whyHere:
      "W Sokołowie Podlaskim automatyzacja chroni jakość danych przy audycie i skraca czas od zlecenia do kompletnego rozliczenia.",
    focusIndustries: [
      {
        title: "Przetwórstwo spożywcze",
        body: "Partie, protokoły, statusy.",
      },
      {
        title: "Dostawcy",
        body: "Zamówienia i dokumenty.",
      },
      {
        title: "Logistyka",
        body: "Awizacje i wyjątki.",
      },
      {
        title: "Back-office",
        body: "Faktury i raporty.",
      },
    ],
    focusProcesses: [
      {
        title: "Protokół jakości",
        body: "Termin i archiwum.",
      },
      {
        title: "Zamówienie surowca",
        body: "Potwierdzenie i ślad.",
      },
      {
        title: "Wysyłka",
        body: "Dokumenty kompletne przed wyjazdem.",
      },
      {
        title: "Rozliczenie",
        body: "Po statusie odbioru.",
      },
    ],
    howWeWork:
      "W Sokołowie Podlaskim startujemy od procesu dokumentacyjnego o najwyższym ryzyku. Wdrażamy zdalnie.",
    faq: [
      {
        id: "sok-1",
        question: "Czy automatyzujecie obiegi pod audyt?",
        answer:
          "Tak. Terminy, role i archiwum.",
      },
      {
        id: "sok-2",
        question: "Czy to tylko dla dużych zakładów?",
        answer:
          "Nie. Wspieramy też mniejszych dostawców.",
      },
      {
        id: "sok-3",
        question: "Czy wymagacie IT?",
        answer:
          "Nie do startu.",
      },
      {
        id: "sok-4",
        question: "Czy zdalnie?",
        answer:
          "Tak.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["siedlce", "wegrow", "losice", "ostrow-mazowiecka", "bialystok"],
  },
  {
    slug: "wegrow",
    name: "Węgrów",
    nameGenitive: "Węgrowa",
    nameLocative: "Węgrowie",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Węgrowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Węgrowa: handel, produkcja i usługi wschodniego Mazowsza. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Węgrowie",
    heroLead:
      "Porządkujemy węgrowskie procesy handlowe i produkcyjne, gdy lokalny rynek wymaga porządku bez rozbudowy biura.",
    introParagraphs: [
      "Węgrów to handel, produkcja i usługi w powiecie węgrowskim. Automatyzacja procesów w Węgrowie zwykle dotyczy zamówień, faktur i statusów realizacji.",
      "Współpracujemy zdalnie. Prosty start, szybki zwrot.",
    ],
    localContext:
      "Powiat węgrowski ma MŚP z cienką administracją. Typowy ból to ręczne maile, opóźnione faktury i brak wspólnego statusu zlecenia.",
    whyHere:
      "W Węgrowie automatyzacja oddaje czas biuru i zmniejsza liczbę niedomkniętych spraw przy stałych odbiorcach.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia i limity.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń.",
      },
      {
        title: "Usługi",
        body: "Zlecenia i rozliczenia.",
      },
      {
        title: "Administracja",
        body: "Faktury i przypomnienia.",
      },
    ],
    focusProcesses: [
      {
        title: "Oferta do zamówienia",
        body: "Jedna ścieżka.",
      },
      {
        title: "Faktura",
        body: "Po realizacji.",
      },
      {
        title: "Przypomnienie płatności",
        body: "Automatyczne.",
      },
      {
        title: "Raport sprzedaży",
        body: "Bez ręcznej tabeli.",
      },
    ],
    howWeWork:
      "W Węgrowie zaczynamy od procesu, który najbardziej zabiera czas właściciela. Wdrażamy zdalnie.",
    faq: [
      {
        id: "weg-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak. Od jednego obiegu.",
      },
      {
        id: "weg-2",
        question: "Czy to trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę.",
      },
      {
        id: "weg-3",
        question: "Jak wyceniacie?",
        answer:
          "Po analizie: jasny zakres etapu.",
      },
      {
        id: "weg-4",
        question: "Czy musicie być w Węgrowie?",
        answer:
          "Nie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["siedlce", "sokolow-podlaski", "minsk-mazowiecki", "ostrow-mazowiecka", "losice"],
  },
  {
    slug: "losice",
    name: "Łosice",
    nameGenitive: "Łosic",
    nameLocative: "Łosicach",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Łosicach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Łosic: handel przygraniczny, produkcja i usługi. Zdalne wdrożenia procesów.",
    heroTitle: "Automatyzacja procesów w Łosicach",
    heroLead:
      "Wspieramy łosickie firmy, gdy dokumenty, faktury i statusy muszą nadążyć za handlem regionalnym.",
    introParagraphs: [
      "Łosice to siedziba powiatu przy wschodniej granicy Mazowsza: handel, produkcja, usługi. Automatyzacja procesów w Łosicach często dotyczy dokumentów, zamówień i rozliczeń.",
      "Pracujemy zdalnie. Zakres dopasowany do małego zespołu.",
    ],
    localContext:
      "Powiat łosicki ma firmy wrażliwe na terminowość dokumentów i koszty administracji. Typowy ból to ręczne faktury, ginące załączniki i brak jednego obrazu należności.",
    whyHere:
      "W Łosicach automatyzacja broni terminowości rozliczeń i zmniejsza koszt ręcznej pracy przy rosnącym ruchu B2B.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia i dokumenty.",
      },
      {
        title: "Produkcja",
        body: "Statusy i protokoły.",
      },
      {
        title: "Transport",
        body: "Awizacje.",
      },
      {
        title: "Back-office",
        body: "Faktury i raporty.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie.",
      },
      {
        title: "Dokumenty",
        body: "Komplet przed wysyłką.",
      },
      {
        title: "Faktura",
        body: "Po statusie.",
      },
      {
        title: "Należności",
        body: "Przypomnienia automatyczne.",
      },
    ],
    howWeWork:
      "W Łosicach startujemy od faktur lub zamówień. Wdrażamy zdalnie.",
    faq: [
      {
        id: "los-1",
        question: "Czy automatyzacja ma sens w małym powiecie?",
        answer:
          "Tak, jeśli dokumenty już generują opóźnienia.",
      },
      {
        id: "los-2",
        question: "Czy potrzebujemy dużego systemu?",
        answer:
          "Nie. Często wystarczy spięcie tego, co macie.",
      },
      {
        id: "los-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy prostym zakresie.",
      },
      {
        id: "los-4",
        question: "Czy zdalnie?",
        answer:
          "Tak.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["siedlce", "sokolow-podlaski", "bialystok", "lublin", "wegrow"],
  },
  {
    slug: "gostynin",
    name: "Gostynin",
    nameGenitive: "Gostynina",
    nameLocative: "Gostyninie",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Gostyninie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Gostynina: produkcja, handel i usługi między Płockiem a Kutnem. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Gostyninie",
    heroLead:
      "Porządkujemy gostynińskie procesy, gdy lokalny przemysł i handel potrzebują sprawnego biura bez dokładania etatów.",
    introParagraphs: [
      "Gostynin leży między Płockiem a Kutnem: produkcja, handel, usługi. Automatyzacja procesów w Gostyninie zwykle dotyczy zamówień, magazynu i faktur.",
      "Współpracujemy zdalnie. Wąski zakres, mierzalny efekt.",
    ],
    localContext:
      "Powiat gostyniński łączy MŚP produkcyjne z handlem regionalnym. Typowy ból to ręczne statusy, opóźnione faktury i brak raportu dla właściciela bez składania Excela.",
    whyHere:
      "W Gostyninie automatyzacja skraca ścieżkę od zamówienia do rozliczenia i zmniejsza liczbę błędów przy stałych odbiorcach.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy zleceń.",
      },
      {
        title: "Handel",
        body: "Zamówienia B2B.",
      },
      {
        title: "Logistyka",
        body: "Awizacje.",
      },
      {
        title: "Back-office",
        body: "Faktury i HR.",
      },
    ],
    focusProcesses: [
      {
        title: "Potwierdzenie zamówienia",
        body: "Reguły.",
      },
      {
        title: "Status magazynu",
        body: "Jedna prawda.",
      },
      {
        title: "Faktura",
        body: "Po wysyłce.",
      },
      {
        title: "Raport tygodniowy",
        body: "Automatyczny.",
      },
    ],
    howWeWork:
      "W Gostyninie zaczynamy od procesu zamówieniowego lub fakturowego. Wdrażamy zdalnie.",
    faq: [
      {
        id: "gos-1",
        question: "Czy automatyzacja pomoże średniej firmie z Gostynina?",
        answer:
          "Tak. Start od jednego obiegu.",
      },
      {
        id: "gos-2",
        question: "Czy musicie znać nasz ERP?",
        answer:
          "Wystarczy dostęp do danych.",
      },
      {
        id: "gos-3",
        question: "Czy zdalnie?",
        answer:
          "Tak.",
      },
      {
        id: "gos-4",
        question: "Jak zacząć?",
        answer:
          "Bezpłatna konsultacja.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["plock", "sochaczew", "sierpc", "warszawa", "konin"],
  },
  {
    slug: "sierpc",
    name: "Sierpc",
    nameGenitive: "Sierpca",
    nameLocative: "Sierpcu",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Sierpcu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Sierpca: produkcja, handel i usługi północno-zachodniego Mazowsza. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Sierpcu",
    heroLead:
      "Pomagamy sierpeckim firmom domknąć dokumenty i statusy, gdy odległość od dużych ośrodków nie może spowalniać biura.",
    introParagraphs: [
      "Sierpc to produkcja, handel i usługi w powiecie sierpeckim. Automatyzacja procesów w Sierpcu często dotyczy zamówień, faktur i raportów dla właściciela.",
      "Pracujemy zdalnie. Prosty start bez wielkiego programu IT.",
    ],
    localContext:
      "Powiat sierpecki ma firmy z ograniczonym zapleczem administracyjnym. Typowy ból to ręczne maile statusowe i faktury wystawiane z opóźnieniem.",
    whyHere:
      "W Sierpcu automatyzacja oddaje czas małemu zespołowi i zmniejsza ryzyko niedomkniętych spraw.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy i dokumenty.",
      },
      {
        title: "Handel",
        body: "Zamówienia.",
      },
      {
        title: "Usługi",
        body: "Zlecenia i faktury.",
      },
      {
        title: "Administracja",
        body: "Obieg faktur.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie.",
      },
      {
        title: "Realizacja",
        body: "Status widoczny.",
      },
      {
        title: "Faktura",
        body: "Po domknięciu.",
      },
      {
        title: "Raport",
        body: "Bez ręcznej tabeli.",
      },
    ],
    howWeWork:
      "W Sierpcu startujemy od procesu, który najbardziej zabiera czas biura. Wdrażamy zdalnie.",
    faq: [
      {
        id: "sir-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak.",
      },
      {
        id: "sir-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu.",
      },
      {
        id: "sir-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni przy prostym zakresie.",
      },
      {
        id: "sir-4",
        question: "Czy musicie być w Sierpcu?",
        answer:
          "Nie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["plock", "gostynin", "zuromin", "mlawa", "ciechanow"],
  },
  {
    slug: "kozienice",
    name: "Kozienice",
    nameGenitive: "Kozienic",
    nameLocative: "Kozienicach",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Kozienicach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kozienic: energetyka, przemysł, handel i usługi. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Kozienicach",
    heroLead:
      "Porządkujemy kozienickie procesy przemysłowe i biurowe, gdy dokumenty i raporty muszą nadążyć za wymaganiami kontraktów.",
    introParagraphs: [
      "Kozienice łączą energetykę, przemysł i lokalne MŚP. Automatyzacja procesów w Kozienicach często dotyczy obiegu dokumentów, raportów i współpracy między dostawcami a biurem.",
      "Współpracujemy zdalnie. Zakres pod audytowalność i terminy.",
    ],
    localContext:
      "Powiat kozienicki ma firmy pracujące w reżimie dokumentów i terminów. Typowy ból to ręczne protokoły, opóźnione akceptacje i raporty składane po fakcie.",
    whyHere:
      "W Kozienicach automatyzacja chroni ślad decyzji i skraca czas reakcji na odchylenia w procesie.",
    focusIndustries: [
      {
        title: "Przemysł i energetyka",
        body: "Protokoły, raporty, zatwierdzenia.",
      },
      {
        title: "Dostawcy",
        body: "Zlecenia i rozliczenia.",
      },
      {
        title: "Handel",
        body: "Zamówienia B2B.",
      },
      {
        title: "HR",
        body: "Wnioski i onboarding.",
      },
    ],
    focusProcesses: [
      {
        title: "Obieg protokołu",
        body: "Termin i archiwum.",
      },
      {
        title: "Zatwierdzenie",
        body: "Limity i role.",
      },
      {
        title: "Raport",
        body: "Z danych źródłowych.",
      },
      {
        title: "Zamówienie",
        body: "Potwierdzenie i ślad.",
      },
    ],
    howWeWork:
      "W Kozienicach zaczynamy od procesu dokumentacyjnego o najwyższym ryzyku. Wdrażamy zdalnie.",
    faq: [
      {
        id: "koz-1",
        question: "Czy automatyzacja spełni wymogi dokumentacyjne?",
        answer:
          "Budujemy ślad, terminy i role. Zakres omawiamy przed startem.",
      },
      {
        id: "koz-2",
        question: "Czy to tylko dla dużych podmiotów?",
        answer:
          "Nie. Wspieramy też dostawców MŚP.",
      },
      {
        id: "koz-3",
        question: "Czy zdalnie?",
        answer:
          "Tak.",
      },
      {
        id: "koz-4",
        question: "Jak zacząć?",
        answer:
          "Konsultacja 30 minut.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["radom", "garwolin", "bialobrzegi", "zwolen", "warszawa"],
  },
  {
    slug: "bialobrzegi",
    name: "Białobrzegi",
    nameGenitive: "Białobrzegów",
    nameLocative: "Białobrzegach",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Białobrzegach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Białobrzegów: produkcja, handel i usługi między Radomiem a Grójcem. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Białobrzegach",
    heroLead:
      "Spinamy białobrzeskie procesy produkcyjne i handlowe, gdy lokalny rynek wymaga sprawnych dokumentów bez rozbudowy biura.",
    introParagraphs: [
      "Białobrzegi to siedziba powiatu między Radomiem a Grójcem: produkcja, handel, usługi. Automatyzacja procesów w Białobrzegach zwykle dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start, jasny efekt.",
    ],
    localContext:
      "Powiat białobrzeski ma MŚP z cienkim back-office. Typowy ból to ręczne potwierdzenia i faktury doganiające realizację.",
    whyHere:
      "W Białobrzegach automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę błędów przy stałych odbiorcach.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy.",
      },
      {
        title: "Handel",
        body: "Zamówienia.",
      },
      {
        title: "Usługi",
        body: "Zlecenia.",
      },
      {
        title: "Administracja",
        body: "Faktury.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie.",
      },
      {
        title: "Realizacja",
        body: "Status.",
      },
      {
        title: "Faktura",
        body: "Po domknięciu.",
      },
      {
        title: "Raport",
        body: "Automatyczny.",
      },
    ],
    howWeWork:
      "W Białobrzegach startujemy od procesu o największym chaosie. Wdrażamy zdalnie.",
    faq: [
      {
        id: "bia-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak.",
      },
      {
        id: "bia-2",
        question: "Czy potrzebujemy IT?",
        answer:
          "Nie do startu.",
      },
      {
        id: "bia-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni.",
      },
      {
        id: "bia-4",
        question: "Czy zdalnie?",
        answer:
          "Tak.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["radom", "grojec", "kozienice", "przysucha", "warszawa"],
  },
  {
    slug: "lipsko",
    name: "Lipsko",
    nameGenitive: "Lipska",
    nameLocative: "Lipsku",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Lipsku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Lipska: handel, produkcja i usługi południowego Mazowsza. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Lipsku",
    heroLead:
      "Pomagamy lipskim firmom uporządkować dokumenty i rozliczenia, gdy mały zespół ogarnia sprzedaż i biuro jednocześnie.",
    introParagraphs: [
      "Lipsko to najmniejsza siedziba powiatu na Mazowszu, z lokalnym handlem, produkcją i usługami. Automatyzacja procesów w Lipsku ma sens, gdy te same osoby toną w mailach i fakturach.",
      "Współpracujemy zdalnie. Prosty zakres dopasowany do kilkuosobowego zespołu.",
    ],
    localContext:
      "Powiat lipski ma firmy, w których właściciel często jest też biurem. Typowy ból to ginące wątki i faktury wystawiane z opóźnieniem.",
    whyHere:
      "W Lipsku automatyzacja oddaje właścicielowi godziny tygodnia i zmniejsza ryzyko niedomkniętych spraw.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia.",
      },
      {
        title: "Produkcja małoseryjna",
        body: "Zlecenia.",
      },
      {
        title: "Usługi",
        body: "Kalendarz i faktury.",
      },
      {
        title: "Administracja",
        body: "Obieg faktur.",
      },
    ],
    focusProcesses: [
      {
        title: "Zapytanie",
        body: "Kolejka.",
      },
      {
        title: "Faktura",
        body: "Po realizacji.",
      },
      {
        title: "Płatność",
        body: "Przypomnienie.",
      },
      {
        title: "Raport",
        body: "Prosty, automatyczny.",
      },
    ],
    howWeWork:
      "W Lipsku zaczynamy od jednego procesu, który najbardziej zabiera czas. Wdrażamy zdalnie.",
    faq: [
      {
        id: "lip-1",
        question: "Czy automatyzacja ma sens w tak małym mieście?",
        answer:
          "Jeśli dokumenty bolą, tak. Skala jest dopasowana.",
      },
      {
        id: "lip-2",
        question: "Czy to drogie?",
        answer:
          "Startujemy wąsko, z jasną wyceną.",
      },
      {
        id: "lip-3",
        question: "Czy trudne w utrzymaniu?",
        answer:
          "Projektujemy pod prostotę.",
      },
      {
        id: "lip-4",
        question: "Czy musicie być w Lipsku?",
        answer:
          "Nie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["radom", "zwolen", "szydlowiec", "kozienice", "przysucha"],
  },
  {
    slug: "zwolen",
    name: "Zwoleń",
    nameGenitive: "Zwolenia",
    nameLocative: "Zwoleniu",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Zwoleniu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Zwolenia: handel, produkcja i usługi. Zdalne wdrożenia procesów. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Zwoleniu",
    heroLead:
      "Porządkujemy zwoleńskie procesy handlowe i produkcyjne, gdy lokalne B2B wymaga tempa bez rozrostu administracji.",
    introParagraphs: [
      "Zwoleń to handel, produkcja i usługi w powiecie zwoleńskim. Automatyzacja procesów w Zwoleniu często dotyczy zamówień, statusów i faktur.",
      "Pracujemy zdalnie. Wąski start, szybki zwrot.",
    ],
    localContext:
      "Powiat zwoleński ma MŚP z ograniczonym biurem. Typowy ból to ręczne potwierdzenia i brak wspólnego statusu zlecenia.",
    whyHere:
      "W Zwoleniu automatyzacja zmniejsza liczbę niedomkniętych spraw i skraca czas do faktury.",
    focusIndustries: [
      {
        title: "Handel",
        body: "Zamówienia.",
      },
      {
        title: "Produkcja",
        body: "Statusy.",
      },
      {
        title: "Usługi",
        body: "Zlecenia.",
      },
      {
        title: "Back-office",
        body: "Faktury.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie.",
      },
      {
        title: "Status",
        body: "Widoczny.",
      },
      {
        title: "Faktura",
        body: "Po realizacji.",
      },
      {
        title: "Raport",
        body: "Automatyczny.",
      },
    ],
    howWeWork:
      "W Zwoleniu startujemy od konsultacji i jednego obiegu. Wdrażamy zdalnie.",
    faq: [
      {
        id: "zwo-1",
        question: "Czy mała firma może zacząć?",
        answer:
          "Tak.",
      },
      {
        id: "zwo-2",
        question: "Czy potrzebujemy programisty?",
        answer:
          "Nie.",
      },
      {
        id: "zwo-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni.",
      },
      {
        id: "zwo-4",
        question: "Czy zdalnie?",
        answer:
          "Tak.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["radom", "kozienice", "lipsko", "szydlowiec", "przysucha"],
  },
  {
    slug: "szydlowiec",
    name: "Szydłowiec",
    nameGenitive: "Szydłowca",
    nameLocative: "Szydłowcu",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Szydłowcu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Szydłowca: produkcja kamienia, handel i usługi. Zdalne wdrożenia.",
    heroTitle: "Automatyzacja procesów w Szydłowcu",
    heroLead:
      "Wspieramy szydłowieckie firmy produkcyjne i handlowe, gdy specyfikacje zamówień i dokumenty nie mogą tonąć w mailach.",
    introParagraphs: [
      "Szydłowiec kojarzy się z kamieniem i lokalną produkcją, ale to też handel i usługi powiatowe. Automatyzacja procesów w Szydłowcu często dotyczy konfiguracji zamówień, protokołów i fakturowania.",
      "Współpracujemy zdalnie. Zakres pod realne zlecenia, nie pod teorię.",
    ],
    localContext:
      "Powiat szydłowiecki łączy produkcję z handlem B2B. Typowy ból to ręczne przekazywanie wymiarów i specyfikacji, opóźnione protokoły i faktury po odbiorze.",
    whyHere:
      "W Szydłowcu automatyzacja zmniejsza kosztowne błędy w zamówieniach i skraca czas od protokołu do faktury.",
    focusIndustries: [
      {
        title: "Produkcja i kamień",
        body: "Specyfikacje, statusy, protokoły.",
      },
      {
        title: "Handel",
        body: "Zamówienia B2B.",
      },
      {
        title: "Transport",
        body: "Awizacje.",
      },
      {
        title: "Back-office",
        body: "Faktury i rozliczenia.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zamówienia",
        body: "Formularz ze specyfikacją.",
      },
      {
        title: "Protokół odbioru",
        body: "Zdjęcia i checklista.",
      },
      {
        title: "Faktura",
        body: "Po protokole.",
      },
      {
        title: "Reklamacja",
        body: "Historia sprawy.",
      },
    ],
    howWeWork:
      "W Szydłowcu zaczynamy od procesu przyjęcia zamówienia. Wdrażamy zdalnie, angażując biuro i produkcję w krótkie sesje.",
    faq: [
      {
        id: "szy-1",
        question: "Czy automatyzujecie zamówienia ze specyfikacją?",
        answer:
          "Tak. Formularze i reguły zamiast ginących maili.",
      },
      {
        id: "szy-2",
        question: "Czy to dla małych zakładów?",
        answer:
          "Tak.",
      },
      {
        id: "szy-3",
        question: "Czy zdalnie?",
        answer:
          "Tak.",
      },
      {
        id: "szy-4",
        question: "Jak zacząć?",
        answer:
          "Konsultacja 30 minut.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["radom", "przysucha", "lipsko", "zwolen", "kielce"],
  },
  {
    slug: "przysucha",
    name: "Przysucha",
    nameGenitive: "Przysuchy",
    nameLocative: "Przysusze",
    voivodeship: "mazowieckie",
    regionCluster: "mazowsze",
    metaTitle: "Automatyzacja procesów w Przysusze | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Przysuchy: produkcja, handel i usługi południowego Mazowsza. Zdalne wdrożenia. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Przysusze",
    heroLead:
      "Porządkujemy przysuskie procesy biurowe i produkcyjne, gdy mały powiat nie może tracić czasu na ręczne statusy.",
    introParagraphs: [
      "Przysucha to siedziba powiatu na południu Mazowsza: produkcja, handel, usługi. Automatyzacja procesów w Przysusze zwykle dotyczy zamówień, faktur i prostych raportów.",
      "Pracujemy zdalnie. Prosty zakres, utrzymanie po stronie zespołu.",
    ],
    localContext:
      "Powiat przysuski ma firmy z cienką administracją. Typowy ból to ręczne maile i faktury wystawiane gdy zostanie czas.",
    whyHere:
      "W Przysusze automatyzacja oddaje czas małemu zespołowi i zmniejsza liczbę niedomkniętych spraw.",
    focusIndustries: [
      {
        title: "Produkcja",
        body: "Statusy.",
      },
      {
        title: "Handel",
        body: "Zamówienia.",
      },
      {
        title: "Usługi",
        body: "Zlecenia.",
      },
      {
        title: "Administracja",
        body: "Faktury.",
      },
    ],
    focusProcesses: [
      {
        title: "Zamówienie",
        body: "Potwierdzenie.",
      },
      {
        title: "Realizacja",
        body: "Status.",
      },
      {
        title: "Faktura",
        body: "Po domknięciu.",
      },
      {
        title: "Raport",
        body: "Prosty, automatyczny.",
      },
    ],
    howWeWork:
      "W Przysusze zaczynamy od procesu, który najbardziej spowalnia biuro. Wdrażamy zdalnie.",
    faq: [
      {
        id: "pry-1",
        question: "Czy automatyzacja ma sens w małym powiecie?",
        answer:
          "Tak, jeśli dokumenty już bolą.",
      },
      {
        id: "pry-2",
        question: "Czy trudno utrzymać?",
        answer:
          "Projektujemy pod prostotę i szkolimy zespół.",
      },
      {
        id: "pry-3",
        question: "Ile trwa?",
        answer:
          "Kilka tygodni.",
      },
      {
        id: "pry-4",
        question: "Czy musicie być w Przysusze?",
        answer:
          "Nie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["radom", "bialobrzegi", "szydlowiec", "kozienice", "grojec"],
  },
];
