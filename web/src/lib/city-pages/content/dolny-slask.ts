import type { CityPageContent } from "../types";

/** Siedziby powiatów ziemskich Dolnego Śląska (etap 1 ekspansji regionalnej). */
export const dolnySlaskPowiatCities: CityPageContent[] = [
  {
    slug: "glogow",
    name: "Głogów",
    nameGenitive: "Głogowa",
    nameLocative: "Głogowie",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Głogowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Głogowa: przemysł miedziowy, produkcja i logistyka. Zdalne wdrożenia procesów biurowych i operacyjnych. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Głogowie",
    heroLead:
      "Porządkujemy przepływy danych u producentów i dostawców z Głogowa, tam, gdzie hala, magazyn i biuro muszą mówić tym samym językiem.",
    introParagraphs: [
      "Głogów to silny ośrodek przemysłowy Dolnego Śląska z głębokim zapleczem miedziowym, hutniczym i produkcyjnym. Automatyzacja procesów w Głogowie zwykle nie zaczyna się od robotów na linii, lecz od tego, jak zgłoszenia awarii, zamówienia części i statusy zleceń wędrują między zmianami a biurem.",
      "Współpracujemy z głogowskimi firmami zdalnie: mapujemy krytyczny przepływ, wdrażamy wąski zakres z mierzalnym efektem i szkolimy osoby, które realnie zamykają temat w systemie, nie tylko w Excelu na dysku wspólnym.",
    ],
    localContext:
      "W regionie głogowskim dominują procesy ciągłe i wielozmianowe. Biura muszą raportować do centrali, audytorów i klientów B2B, podczas gdy operacje reagują na awarie w czasie rzeczywistym. Typowy ból to rozjazd między raportem zmianowym a tym, co widzi planowanie czy zaopatrzenie.",
    whyHere:
      "W Głogowie każda godzina niejasnego statusu kosztuje przestój albo zbędny zapas. Automatyzacja opłaca się, gdy skraca reakcję na zgłoszenie, porządkuje MRO i daje jeden wiarygodny obraz operacji.",
    focusIndustries: [
      {
        title: "Przemysł miedziowy i hutniczy",
        body: "Spinamy zgłoszenia, części i protokoły z obiegiem zatwierdzeń w biurze.",
      },
      {
        title: "Produkcja komponentów",
        body: "Statusy zleceń i wyjątki jakościowe trafiają do planowania bez telefonów między halami.",
      },
      {
        title: "Logistyka i magazyn",
        body: "Awizacje, sloty i powiadomienia o odchyleniach zamiast ręcznych maili.",
      },
      {
        title: "Dostawcy utrzymania ruchu",
        body: "Harmonogramy serwisów, potwierdzenia i rozliczenia z klientem przemysłowym.",
      },
    ],
    focusProcesses: [
      {
        title: "Zgłoszenia awarii i eskalacje",
        body: "Priorytety, SLA i historia działań zamiast SMS-ów kto pierwszy zobaczy.",
      },
      {
        title: "Zamówienia części MRO",
        body: "Od zapotrzebowania po potwierdzenie dostawy z widocznością dla planowania.",
      },
      {
        title: "Raporty zmianowe",
        body: "Zbieranie danych z formularzy i systemów bez ręcznego składania w piątek.",
      },
      {
        title: "Obieg protokołów jakości",
        body: "Terminy, przypomnienia i archiwum pod audyt klienta.",
      },
    ],
    howWeWork:
      "Z firmami z Głogowa startujemy od procesu krytycznego dla ciągłości. Zwykle zgłoszeń serwisowych albo statusów produkcji. Wdrażamy zdalnie, testujemy na realnych scenariuszach awaryjnych i zostawiamy zespół z jasną instrukcją. Bezpłatna konsultacja 30 minut pozwala ocenić sens startu bez zobowiązań.",
    faq: [
      {
        id: "glo-1",
        question: "Czy automatyzacja w Głogowie ma sens tylko dla dużych zakładów?",
        answer:
          "Nie. Często pracujemy z mniejszymi dostawcami serwisu, logistyki i produkcji, tam, gdzie biuro nie nadąża za tempem hali.",
      },
      {
        id: "glo-2",
        question: "Czy musicie być na terenie zakładu?",
        answer:
          "Standardem jest współpraca zdalna. Wizytę planujemy, gdy realnie pomaga mapowaniu, nie jako domyślny koszt.",
      },
      {
        id: "glo-3",
        question: "Jak łączycie się z ERP?",
        answer:
          "Przez API, pliki wymiany lub integratory, zależnie od tego, co system i IT akceptują.",
      },
      {
        id: "glo-4",
        question: "Ile trwa pierwszy etap?",
        answer:
          "Prostsze przepływy często wdrażamy w kilka tygodni. Zakres ustalamy po krótkiej diagnozie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["lubin", "polkowice", "legnica", "gora", "wolow"],
  },
  {
    slug: "swidnica",
    name: "Świdnica",
    nameGenitive: "Świdnicy",
    nameLocative: "Świdnicy",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Świdnicy | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Świdnicy, produkcja, automotive-adjacent i MŚP. Zdalne wdrożenia HR, logistyki i raportów. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Świdnicy",
    heroLead:
      "Pomagamy świdnickim firmom spiąć produkcję, magazyn i biuro, bez dokładania kolejnych arkuszy na wszelki wypadek.",
    introParagraphs: [
      "Świdnica to jeden z ważniejszych ośrodków przemysłowych południa Dolnego Śląska: produkcja, dostawcy automotive-adjacent i gęsta sieć MŚP. Automatyzacja procesów w Świdnicy często odpowiada na pytanie, dlaczego handlowiec obiecuje termin, którego planowanie już nie widzi.",
      "Pracujemy zdalnie ze świdnickimi zespołami: wybieramy jeden proces o wysokim koszcie ręcznej pracy, wdrażamy przepływ i mierzymy efekt zanim skalujemy kolejne obszary.",
    ],
    localContext:
      "Powiat świdnicki łączy zakłady wielozmianowe z firmami usługowymi obsługującymi przemysł. Typowe wąskie gardła to reklamacje jakości, statusy dostaw podwykonawczych oraz raportowanie KPI dla klientów z Niemiec.",
    whyHere:
      "W Świdnicy automatyzacja chroni marżę: mniej poprawek wynikających z nieaktualnych danych i szybsza reakcja na odchylenia w łańcuchu dostaw.",
    focusIndustries: [
      {
        title: "Produkcja i montaż",
        body: "Statusy zleceń, materiały i wyjątki jakości w jednym przepływie.",
      },
      {
        title: "Dostawcy automotive-adjacent",
        body: "Dokumentacja, terminy i eskalacje bez ginących wątków mailowych.",
      },
      {
        title: "Logistyka lokalna",
        body: "Awizacja, potwierdzenia i powiadomienia klienta B2B.",
      },
      {
        title: "Usługi dla przemysłu",
        body: "Zlecenia serwisowe, rozliczenia i archiwum protokołów.",
      },
    ],
    focusProcesses: [
      {
        title: "Reklamacje i jakość",
        body: "Od zgłoszenia po zamknięcie z dokumentacją dostępną dla audytu.",
      },
      {
        title: "Planowanie vs sprzedaż",
        body: "Wspólny obraz terminów zamiast dwóch prawd w dwóch Excelach.",
      },
      {
        title: "Zatwierdzenia zakupów",
        body: "Limity i ścieżki akceptacji bez podeślij jeszcze raz.",
      },
      {
        title: "Raporty operacyjne",
        body: "KPI z systemów źródłowych, nie składane ręcznie na koniec miesiąca.",
      },
    ],
    howWeWork:
      "Ze Świdnicy startujemy od krótkiej mapy procesu i decyzji o zakresie MVP. Wdrożenie jest zdalne; warsztat na hali planujemy tylko gdy pomaga. Konsultacja 30 minut wystarcza, by ocenić potencjał.",
    faq: [
      {
        id: "swi-1",
        question: "Czy automatyzujecie procesy produkcyjne w Świdnicy?",
        answer:
          "Tak. Szczególnie przepływy danych między halą, planowaniem i biurem, bez wymiany całego MES z marszu.",
      },
      {
        id: "swi-2",
        question: "Czy pracujecie tylko z dużymi fabrykami?",
        answer:
          "Nie. Równie często wspieramy średnie firmy produkcyjne i usługowe z powiatu.",
      },
      {
        id: "swi-3",
        question: "Jak wygląda start?",
        answer:
          "Bezpłatna konsultacja, potem wycena pierwszego etapu z jasnym celem.",
      },
      {
        id: "swi-4",
        question: "Czy integrujecie ERP i arkusze?",
        answer:
          "Tak. Łączymy to, czym już pracujecie, zamiast wymuszać nowy stack.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["walbrzych", "dzierzoniow", "wroclaw", "jawor", "zabkowice-slaskie"],
  },
  {
    slug: "boleslawiec",
    name: "Bolesławiec",
    nameGenitive: "Bolesławca",
    nameLocative: "Bolesławcu",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Bolesławcu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Bolesławca: ceramika, produkcja i eksport. Porządkujemy zamówienia, magazyn i raporty. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Bolesławcu",
    heroLead:
      "Spinamy zamówienia, produkcję i wysyłkę u firm z Bolesławca, szczególnie tam, gdzie sezon i eksport nie wybaczają chaosu w danych.",
    introParagraphs: [
      "Bolesławiec kojarzy się z ceramiką, ale lokalna gospodarka to też produkcja, handel eksportowy i logistyka. Automatyzacja procesów w Bolesławcu często zaczyna się od zamówień: statusy u klienta, w magazynie i u produkcji żyją w trzech miejscach.",
      "Pomagamy bolesławieckim zespołom budować przepływy, które przetrwają szczyt sezonu i wymagania partnerów zagranicznych, zdalnie, bez udawania lokalnego oddziału.",
    ],
    localContext:
      "Firmy z powiatu bolesławieckiego łączą produkcję rzemieślniczą i przemysłową z ekspozycją na eksport. Bólem są ręczne aktualizacje stanów, opóźnione fakturowanie i brak jednej prawdy o realizacji zamówienia.",
    whyHere:
      "W Bolesławcu automatyzacja chroni doświadczenie klienta i cashflow: mniej pomyłek w wysyłce, szybsze potwierdzenia i mniej gaszenia pożarów w biurze.",
    focusIndustries: [
      {
        title: "Ceramika i produkcja użytkowa",
        body: "Zamówienia, partie produkcyjne i wysyłka w jednym łańcuchu informacji.",
      },
      {
        title: "Eksport i handel B2B",
        body: "Ofertowanie, potwierdzenia i dokumenty handlowe bez dublowania danych.",
      },
      {
        title: "Magazyn i fulfillment",
        body: "Statusy kompletacji i awizacje zamiast telefonów czy już poszło.",
      },
      {
        title: "Usługi okołoprodukcyjne",
        body: "Zlecenia, rozliczenia i przypomnienia terminów.",
      },
    ],
    focusProcesses: [
      {
        title: "Od zamówienia do wysyłki",
        body: "Widoczność statusu dla sprzedaży, magazynu i klienta.",
      },
      {
        title: "Stany magazynowe",
        body: "Aktualizacje z operacji zamiast ręcznego przeliczania na koniec dnia.",
      },
      {
        title: "Dokumenty eksportowe",
        body: "Checklista i archiwum pod kontrolę celną lub klienta.",
      },
      {
        title: "Raport sprzedaży",
        body: "Zestawienia z systemów, nie z trzech Exceli.",
      },
    ],
    howWeWork:
      "Z Bolesławcem pracujemy praktycznie: najpierw ścieżka zamówienia, potem magazyn lub raporty. Wdrażamy online, testujemy na realnych zamówieniach i szkolimy osoby z biura. Konsultacja 30 minut bez zobowiązań.",
    faq: [
      {
        id: "bol-1",
        question: "Czy automatyzacja w Bolesławcu ma sens dla mniejszej manufaktury?",
        answer:
          "Tak. Zwłaszcza gdy rośnie liczba kanałów sprzedaży i eksport zaczyna generować chaos w statusach.",
      },
      {
        id: "bol-2",
        question: "Czy integrujecie sklep i magazyn?",
        answer:
          "Tak, jeśli źródła udostępniają API lub pliki; dobieramy prosty, stabilny wariant.",
      },
      {
        id: "bol-3",
        question: "Czy potrzebujecie wizyty na miejscu?",
        answer:
          "Nie jako standard. Spotkanie ustalamy, gdy mapowanie procesu tego wymaga.",
      },
      {
        id: "bol-4",
        question: "Jak szybko widać efekt?",
        answer:
          "Przy wąskim zakresie. Często w ciągu kilku tygodni od startu wdrożenia.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-logistyki",
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["zgorzelec", "luban", "legnica", "lwowek-slaski", "jelenia-gora"],
  },
  {
    slug: "olesnica",
    name: "Oleśnica",
    nameGenitive: "Oleśnicy",
    nameLocative: "Oleśnicy",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Oleśnicy | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Oleśnicy: pierścień Wrocławia, produkcja i usługi B2B. Zdalne wdrożenia procesów. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Oleśnicy",
    heroLead:
      "Wspieramy oleśnickie firmy z pierścienia Wrocławia, gdy tempo aglomeracji wyprzedza ręczne procesy biurowe.",
    introParagraphs: [
      "Oleśnica leży w strefie oddziaływania Wrocławia: produkcja, logistyka i usługi B2B rosną szybciej niż etaty w back-office. Automatyzacja procesów w Oleśnicy to często odpowiedź na przeciążone skrzynki, dublowane Excela i nieaktualne statusy dla klientów z aglomeracji.",
      "Pracujemy zdalnie z lokalnymi zespołami: porządkujemy jeden krytyczny przepływ, wdrażamy go i zostawiamy mierzalny efekt przed kolejnym etapem.",
    ],
    localContext:
      "Powiat oleśnicki łączy lokalnych producentów z firmami usługowymi obsługującymi rynek wrocławski. Typowe problemy: opóźnione potwierdzenia zamówień, ręczne raporty dla centrali i brak śladu decyzji w procesie zakupowym.",
    whyHere:
      "W Oleśnicy automatyzacja pozwala rosnąć bez proporcjonalnego wzrostu chaosu administracyjnego, szczególnie przy obsłudze klientów z większej aglomeracji.",
    focusIndustries: [
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń i jakości widoczne dla sprzedaży i magazynu.",
      },
      {
        title: "Usługi B2B dla Wrocławia",
        body: "Ticketowanie, SLA i raportowanie bez ręcznego składania.",
      },
      {
        title: "Handel i dystrybucja",
        body: "Zamówienia, stany i fakturowanie w spójnym przepływie.",
      },
      {
        title: "Budownictwo i instalacje",
        body: "Zlecenia terenowe, protokoły i rozliczenia.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie i potwierdzenie zamówienia",
        body: "Jedna ścieżka zamiast maili czy dostaliście.",
      },
      {
        title: "Zatwierdzenia kosztów",
        body: "Limity i eskalacje zamiast kontrolek w Excelu.",
      },
      {
        title: "Raporty dla zarządu",
        body: "KPI odświeżane z systemów źródłowych.",
      },
      {
        title: "Obsługa reklamacji",
        body: "Historia sprawy i terminy odpowiedzi.",
      },
    ],
    howWeWork:
      "Z Oleśnicy zaczynamy od procesu, który najbardziej spowalnia obsługę klienta lub produkcję. Wdrożenie jest zdalne; konsultacja 30 minut pomaga wybrać sensowny start.",
    faq: [
      {
        id: "ole-1",
        question: "Czy obsługujecie firmy z Oleśnicy zdalnie?",
        answer:
          "Tak. To standard. Spotkania na miejscu tylko gdy wnoszą wartość.",
      },
      {
        id: "ole-2",
        question: "Czy automatyzacja pomaga firmom podwykonawczym Wrocławia?",
        answer:
          "Tak. Zwłaszcza przy statusach zleceń, protokołach i rozliczeniach.",
      },
      {
        id: "ole-3",
        question: "Jakie systemy łączycie?",
        answer:
          "ERP, CRM, arkusze, formularze i narzędzia biurowe, zależnie od tego, czym już pracujecie.",
      },
      {
        id: "ole-4",
        question: "Czy to tylko dla dużych firm?",
        answer:
          "Nie. Najczęściej pracujemy z MŚP, które urosły szybciej niż procesy.",
      },
    ],
    relatedServiceSlugs: [
      "doradztwo-i-optymalizacja-procesow-biznesowych",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
      "automatyzacja-sprzedazy",
    ],
    nearbyCitySlugs: ["wroclaw", "milicz", "trzebnica", "olawa", "strzelin"],
  },
  {
    slug: "olawa",
    name: "Oława",
    nameGenitive: "Oławy",
    nameLocative: "Oławie",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Oławie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Oławy: produkcja, logistyka i pierścień Wrocławia. Zdalne wdrożenia procesów operacyjnych. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Oławie",
    heroLead:
      "Porządkujemy procesy oławskich firm produkcyjnych i logistycznych, gdy lokalizacja przy Wrocławiu oznacza tempo, którego Excel nie dogania.",
    introParagraphs: [
      "Oława to dynamiczny ośrodek na południowo-wschodnim skraju aglomeracji wrocławskiej: produkcja, magazyny i usługi dla większych odbiorców. Automatyzacja procesów w Oławie często zaczyna się od rozjazdu między planem produkcji a tym, co widzi magazyn lub klient.",
      "Współpracujemy zdalnie: wybieramy wąski zakres, wdrażamy przepływ i mierzymy, czy zespół faktycznie przestaje gonić statusy telefonami.",
    ],
    localContext:
      "Firmy z powiatu oławskiego często pracują w modelu just-in-time wobec odbiorców z Wrocławia i regionu. Bólem są awizacje, zmiany terminów i ręczne raportowanie odchyleń.",
    whyHere:
      "W Oławie automatyzacja skraca czas reakcji na zmiany zamówienia i zmniejsza koszt błędów w kompletacji oraz komunikacji z klientem.",
    focusIndustries: [
      {
        title: "Produkcja i przetwórstwo",
        body: "Statusy zleceń i materiałów w jednym obrazie.",
      },
      {
        title: "Logistyka i magazyny",
        body: "Awizacja, sloty i powiadomienia o opóźnieniach.",
      },
      {
        title: "Dostawcy B2B",
        body: "Potwierdzenia, dokumenty i eskalacje terminów.",
      },
      {
        title: "Usługi techniczne",
        body: "Zlecenia, protokoły i rozliczenia terenowe.",
      },
    ],
    focusProcesses: [
      {
        title: "Zmiana terminu zamówienia",
        body: "Powiadomienia do hali, magazynu i klienta w jednym przepływie.",
      },
      {
        title: "Kompletacja i wysyłka",
        body: "Checklisty i statusy zamiast ustnych ustaleń.",
      },
      {
        title: "Reklamacje dostaw",
        body: "Ślad sprawy i odpowiedzialności.",
      },
      {
        title: "Raporty dziennej produkcji",
        body: "Automatyczne zestawienia zamiast ręcznego przepisywania.",
      },
    ],
    howWeWork:
      "Z Oławy startujemy od procesu, który generuje najwięcej telefonów między działami. Wdrażamy zdalnie i szkolimy właścicieli procesu. Konsultacja 30 minut bez zobowiązań.",
    faq: [
      {
        id: "ola-1",
        question: "Czy automatyzacja w Oławie obejmuje logistykę?",
        answer:
          "Tak. Awizacje, statusy i komunikację z klientem traktujemy jako pełnoprawny proces biznesowy.",
      },
      {
        id: "ola-2",
        question: "Czy potrzebujemy dużego IT?",
        answer:
          "Nie. Dobieramy narzędzia możliwe do utrzymania przez lokalny zespół.",
      },
      {
        id: "ola-3",
        question: "Jak łączycie produkcję z biurem?",
        answer:
          "Przez integracje, formularze i reguły, bez wymiany całego ERP.",
      },
      {
        id: "ola-4",
        question: "Ile kosztuje start?",
        answer:
          "Po konsultacji proponujemy wycenę pierwszego etapu z jasnym zakresem.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["wroclaw", "olesnica", "strzelin", "dzierzoniow", "trzebnica"],
  },
  {
    slug: "dzierzoniow",
    name: "Dzierżoniów",
    nameGenitive: "Dzierżoniowa",
    nameLocative: "Dzierżoniowie",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Dzierżoniowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Dzierżoniowa: produkcja, elektronika i MŚP. Zdalne wdrożenia procesów jakości, HR i raportów.",
    heroTitle: "Automatyzacja procesów w Dzierżoniowie",
    heroLead:
      "Pomagamy dzierżoniowskim zakładom i MŚP domknąć procesy jakości, zleceń i raportowania, bez dokładania kolejnej warstwy Exceli.",
    introParagraphs: [
      "Dzierżoniów i powiat to produkcja, elektronika oraz firmy usługowe obsługujące przemysł południa regionu. Automatyzacja procesów w Dzierżoniowie często dotyczy dokumentacji jakości, statusów naprawy lub montażu i obiegu informacji między zmianami.",
      "Pracujemy zdalnie: najpierw proces o najwyższym ryzyku błędu, potem skalowanie. Bez obietnicy lokalnego biura, z obietnicą działającego przepływu.",
    ],
    localContext:
      "Lokalne firmy łączą wymagania jakościowe klientów przemysłowych z ograniczeniami kadrowymi MŚP. Typowy ból: protokoły w PDF-ach, ręczne śledzenie NCR i raporty składane na wczoraj.",
    whyHere:
      "W Dzierżoniowie automatyzacja obniża koszt braków i audytów: mniej zagubionych dokumentów i szybsze domykanie odchyleń.",
    focusIndustries: [
      {
        title: "Produkcja i elektronika",
        body: "Statusy zleceń, testy i wyjątki jakości w jednym łańcuchu.",
      },
      {
        title: "Usługi dla przemysłu",
        body: "Zlecenia serwisowe i protokoły bez ginących maili.",
      },
      {
        title: "Magazyn części",
        body: "Zapotrzebowania i wydania powiązane z zleceniem.",
      },
      {
        title: "Back-office MŚP",
        body: "HR, faktury kosztowe i zatwierdzenia.",
      },
    ],
    focusProcesses: [
      {
        title: "Obieg NCR i reklamacji jakości",
        body: "Od zgłoszenia po działania korygujące z historią.",
      },
      {
        title: "Zlecenie produkcyjne",
        body: "Status widoczny dla planowania i klienta wewnętrznego.",
      },
      {
        title: "Protokoły odbioru",
        body: "Checklisty, podpisy i archiwum.",
      },
      {
        title: "Raport KPI jakości",
        body: "Automatyczne zestawienia zamiast ręcznego liczenia.",
      },
    ],
    howWeWork:
      "Z Dzierżoniowa zaczynamy od mapy procesu jakości lub zleceń. Wdrażamy zdalnie, testujemy na realnych przypadkach i szkolimy właścicieli procesu. Konsultacja 30 minut.",
    faq: [
      {
        id: "dzi-1",
        question: "Czy automatyzujecie dokumentację jakości w Dzierżoniowie?",
        answer:
          "Tak. To jeden z najczęstszych startów w lokalnych zakładach.",
      },
      {
        id: "dzi-2",
        question: "Czy pracujecie z mniejszymi firmami?",
        answer:
          "Tak. Dostosowujemy zakres do realnych zasobów zespołu.",
      },
      {
        id: "dzi-3",
        question: "Czy trzeba wymieniać systemy?",
        answer:
          "Rzadko. Częściej spinamy to, co już jest.",
      },
      {
        id: "dzi-4",
        question: "Jak wygląda utrzymanie?",
        answer:
          "Przekazujemy dokumentację i szkolenie; dalsze zmiany planujemy etapami.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-raportow",
      "automatyzacja-dla-hr",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["swidnica", "walbrzych", "zabkowice-slaskie", "strzelin", "klodzko"],
  },
  {
    slug: "zgorzelec",
    name: "Zgorzelec",
    nameGenitive: "Zgorzelca",
    nameLocative: "Zgorzelcu",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Zgorzelcu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Zgorzelca, transport cross-border, handel i produkcja. Zdalne wdrożenia logistyki i dokumentów. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Zgorzelcu",
    heroLead:
      "Porządkujemy procesy firm ze Zgorzelca działających na styku Polski i Niemiec, transport, dokumenty i statusy zleceń bez ręcznego chaosu.",
    introParagraphs: [
      "Zgorzelec to ośrodek pogranicza: transport, handel, produkcja i usługi z ekspozycją na klientów po obu stronach Nysy. Automatyzacja procesów w Zgorzelcu często dotyczy dokumentów przewozowych, statusów zleceń i komunikacji z partnerami zagranicznymi.",
      "Współpracujemy zdalnie: budujemy przepływy, które nie giną między skrzynkami a dają dyspozytorowi jeden aktualny obraz.",
    ],
    localContext:
      "Firmy z powiatu zgorzeleckiego żyją terminami granicznymi, awizacjami i dokumentacją. Bólem są ręczne checklisty, brak śladu zmian terminu i dublowanie danych między spedycją a księgowością.",
    whyHere:
      "W Zgorzelcu automatyzacja zmniejsza ryzyko opóźnień i kar umownych: mniej pomyłek w dokumentach i szybsza reakcja na odchylenie trasy lub załadunku.",
    focusIndustries: [
      {
        title: "Transport i spedycja",
        body: "Statusy zleceń, awizacje i powiadomienia klienta.",
      },
      {
        title: "Handel cross-border",
        body: "Dokumenty, potwierdzenia i archiwum pod kontrolę.",
      },
      {
        title: "Produkcja lokalna",
        body: "Zlecenia i wysyłka powiązane ze statusem magazynu.",
      },
      {
        title: "Usługi B2B",
        body: "Ticketowanie i rozliczenia bez gubionych wątków.",
      },
    ],
    focusProcesses: [
      {
        title: "Zlecenie transportowe",
        body: "Od przyjęcia po potwierdzenie dostawy z historią zdarzeń.",
      },
      {
        title: "Checklist dokumentów",
        body: "Wymagane załączniki przed wyjazdem lub przekroczeniem.",
      },
      {
        title: "Zmiana okna załadunku",
        body: "Powiadomienia do kierowcy, magazynu i klienta.",
      },
      {
        title: "Raport realizacji",
        body: "Zestawienia dla zarządu i partnerów bez ręcznego klejenia.",
      },
    ],
    howWeWork:
      "Ze Zgorzelcem startujemy od ścieżki zlecenia transportowego lub dokumentów. Wdrażamy online, testujemy na realnych kursach i szkolimy dyspozycję. Konsultacja 30 minut.",
    faq: [
      {
        id: "zgo-1",
        question: "Czy automatyzacja w Zgorzelcu obejmuje procesy cross-border?",
        answer:
          "Tak. Szczególnie statusy, dokumenty i komunikację z partnerami po obu stronach granicy.",
      },
      {
        id: "zgo-2",
        question: "Czy integrujecie systemy TMS lub ERP?",
        answer:
          "Jeśli udostępniają API lub pliki, tak, w stabilnym, prostym wariancie.",
      },
      {
        id: "zgo-3",
        question: "Czy potrzebna jest obecność na miejscu?",
        answer:
          "Nie jako standard. Model zdalny jest domyślny.",
      },
      {
        id: "zgo-4",
        question: "Dla kogo to ma sens?",
        answer:
          "Dla firm, w których ręczne statusy generują opóźnienia lub reklamacje.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["boleslawiec", "luban", "jelenia-gora", "lwowek-slaski", "kamienna-gora"],
  },
  {
    slug: "klodzko",
    name: "Kłodzko",
    nameGenitive: "Kłodzka",
    nameLocative: "Kłodzku",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Kłodzku | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kłodzka: Kotlina Kłodzka, turystyka, usługi i MŚP. Zdalne wdrożenia rezerwacji, HR i finansów.",
    heroTitle: "Automatyzacja procesów w Kłodzku",
    heroLead:
      "Pomagamy kłodzkim firmom ogarnąć sezonowość Kotliny: rezerwacje, obsługa gości, finanse i zaplecze, bez chaosu w szczycie.",
    introParagraphs: [
      "Kłodzko jest centrum Kotliny Kłodzkiej: turystyka uzdrowiskowa, usługi, handel i lokalna produkcja. Automatyzacja procesów w Kłodzku często oznacza połączenie sezonowych szczytów z ciągłą pracą back-office, które nie mogą się wykluczać.",
      "Pracujemy zdalnie z hotelami, klinikami, MŚP i dostawcami usług: budujemy przepływy, które działają w sezonie i poza nim, bez fałszywej obietnicy stacjonarnego oddziału.",
    ],
    localContext:
      "Powiat kłodzki łączy obiekty turystyczne z firmami usługowymi i rzemiosłem. Typowy ból to ręczne rezerwacje, opóźnione rozliczenia sezonowe i brak jednego obrazu obsadzenia oraz kosztów.",
    whyHere:
      "W Kłodzku automatyzacja chroni marżę sezonu: mniej overbookingu, szybsze rozliczenia i mniej ręcznej pracy w momentach największego ruchu.",
    focusIndustries: [
      {
        title: "Hotele i obiekty uzdrowiskowe",
        body: "Rezerwacje, check-in i komunikacja z gościem.",
      },
      {
        title: "Usługi zdrowotne i spa",
        body: "Terminy, karty pacjentów lub klientów i przypomnienia.",
      },
      {
        title: "Handel lokalny",
        body: "Zamówienia, stany i fakturowanie w sezonie.",
      },
      {
        title: "MŚP produkcyjno-usługowe",
        body: "Zlecenia, protokoły i rozliczenia.",
      },
    ],
    focusProcesses: [
      {
        title: "Rezerwacja i potwierdzenie",
        body: "Jedna ścieżka zamiast telefonów i niespójnych kalendarzy.",
      },
      {
        title: "Rozliczenia sezonowe",
        body: "Zestawienia przychodów i kosztów bez ręcznego klejenia.",
      },
      {
        title: "Obsada i urlopy",
        body: "Widoczność grafiku powiązana z obciążeniem obiektu.",
      },
      {
        title: "Opinie i reklamacje gości",
        body: "Ślad sprawy i czas odpowiedzi.",
      },
    ],
    howWeWork:
      "Z Kłodzka startujemy przed szczytem lub tuż po, mapujemy proces generujący najwięcej ręcznej pracy, wdrażamy zdalnie i testujemy na realnym kalendarzu. Konsultacja 30 minut.",
    faq: [
      {
        id: "klo-1",
        question: "Czy automatyzacja w Kłodzku ma sens poza sezonem?",
        answer:
          "Tak. Poza sezonem budujemy fundament, w sezonie zbieracie efekty.",
      },
      {
        id: "klo-2",
        question: "Czy łączycie systemy hotelowe?",
        answer:
          "Jeśli udostępniają integracje lub eksporty, tak, w prostym wariancie.",
      },
      {
        id: "klo-3",
        question: "Czy to tylko dla hoteli?",
        answer:
          "Nie. Wspieramy też kliniki, handel i lokalne MŚP.",
      },
      {
        id: "klo-4",
        question: "Jak szybko wdrażacie?",
        answer:
          "Wąski zakres często w kilka tygodni; większe integracje planujemy etapami.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-dla-hr",
      "automatyzacja-dla-ksiegowosci",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["zabkowice-slaskie", "dzierzoniow", "walbrzych", "swidnica", "strzelin"],
  },
  {
    slug: "polkowice",
    name: "Polkowice",
    nameGenitive: "Polkowic",
    nameLocative: "Polkowicach",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Polkowicach | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Polkowic: łańcuch produkcyjny, dostawcy i logistyka. Zdalne wdrożenia jakości i raportów. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Polkowicach",
    heroLead:
      "Spinamy procesy dostawców i zakładów z Polkowic, gdy wymagania dużego łańcucha produkcyjnego spotykają ograniczenia MŚP.",
    introParagraphs: [
      "Polkowice to ośrodek mocno związany z produkcją i łańcuchem dostaw dużych inwestorów regionu. Automatyzacja procesów w Polkowicach często dotyczy dokumentacji jakości, statusów dostaw i raportowania, którego oczekuje klient przemysłowy.",
      "Pomagamy lokalnym dostawcom i zakładom budować przepływy, które spełniają oczekiwania odbiorcy bez dokładania etatów do przepisywania danych między systemami.",
    ],
    localContext:
      "Powiat polkowicki żyje rytmem produkcji i logistyki. Typowe problemy: ręczne protokoły, opóźnione ASN, brak śladu NCR i raporty klejone pod audyt w ostatniej chwili.",
    whyHere:
      "W Polkowicach automatyzacja to często warunek utrzymania kontraktu: mniej błędów dokumentacyjnych i szybsza odpowiedź na odchylenia jakości.",
    focusIndustries: [
      {
        title: "Dostawcy przemysłu",
        body: "Dokumentacja, terminy i eskalacje pod wymagania klienta.",
      },
      {
        title: "Produkcja komponentów",
        body: "Statusy zleceń i jakości w jednym przepływie.",
      },
      {
        title: "Logistyka zakładowa",
        body: "Awizacje, sloty i potwierdzenia dostaw.",
      },
      {
        title: "Utrzymanie ruchu u dostawców",
        body: "Zgłoszenia, części i protokoły serwisowe.",
      },
    ],
    focusProcesses: [
      {
        title: "ASN i awizacja",
        body: "Dane dostawy spójne z zamówieniem i magazynem odbiorcy.",
      },
      {
        title: "Obieg NCR",
        body: "Od zgłoszenia po działania korygujące z historią.",
      },
      {
        title: "Raporty dla klienta",
        body: "Zestawienia generowane z danych źródłowych.",
      },
      {
        title: "Zatwierdzenia zmian procesu",
        body: "Ślad decyzji i wersji dokumentów.",
      },
    ],
    howWeWork:
      "Z Polkowic zaczynamy od procesu, który generuje największe ryzyko reklamacji lub audytu. Wdrażamy zdalnie, testujemy na realnych dostawach i szkolimy właścicieli procesu. Konsultacja 30 minut.",
    faq: [
      {
        id: "pol-1",
        question: "Czy automatyzacja w Polkowicach jest tylko dla dużych zakładów?",
        answer:
          "Nie. Często pracujemy z dostawcami MŚP, którzy muszą dogonić wymagania dokumentacyjne klienta.",
      },
      {
        id: "pol-2",
        question: "Czy integrujecie się z systemami odbiorcy?",
        answer:
          "Gdzie to możliwe i bezpieczne, tak; czasem wystarczy uporządkowany eksport i checklisty.",
      },
      {
        id: "pol-3",
        question: "Czy potrzebujecie wizyty na hali?",
        answer:
          "Tylko gdy mapowanie tego wymaga. Standardem jest model zdalny.",
      },
      {
        id: "pol-4",
        question: "Jak mierzycie sukces?",
        answer:
          "Mniej ręcznych poprawek, krótszy czas zamknięcia NCR, wyższa kompletność dokumentów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["lubin", "glogow", "legnica", "zlotoryja", "jawor"],
  },
  {
    slug: "jawor",
    name: "Jawor",
    nameGenitive: "Jawora",
    nameLocative: "Jaworze",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Jaworze | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Jawora: produkcja, okolice Legnicy i MŚP. Zdalne wdrożenia procesów operacyjnych i biurowych.",
    heroTitle: "Automatyzacja procesów w Jaworze",
    heroLead:
      "Wspieramy jaworskie firmy produkcyjne i usługowe, gdy lokalny rynek wymaga tempa Legnicy, a zespół back-office jest ograniczony.",
    introParagraphs: [
      "Jawor leży w przemysłowym pasie między Legnicą a Wałbrzychem: produkcja, usługi dla zakładów i lokalny handel B2B. Automatyzacja procesów w Jaworze często dotyczy statusów zleceń, protokołów i zatwierdzeń, które dziś żyją w skrzynkach mailowych.",
      "Pracujemy zdalnie z lokalnymi MŚP: wybieramy jeden proces, wdrażamy go i mierzymy, zanim idziemy dalej.",
    ],
    localContext:
      "Powiat jaworski łączy mniejsze zakłady z dostawcami większych hubów regionalnych. Bólem są ręczne raporty, brak śladu serwisu oraz opóźnione fakturowanie po zakończeniu zlecenia.",
    whyHere:
      "W Jaworze automatyzacja pozwala konkurować jakością obsługi bez rozbudowy etatów administracyjnych.",
    focusIndustries: [
      {
        title: "Produkcja lokalna",
        body: "Statusy i jakość widoczne dla biura i klienta.",
      },
      {
        title: "Usługi techniczne",
        body: "Zlecenia terenowe, protokoły i rozliczenia.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i stany bez dublowania danych.",
      },
      {
        title: "Budownictwo i instalacje",
        body: "Harmonogramy, odbiory i dokumentacja.",
      },
    ],
    focusProcesses: [
      {
        title: "Zlecenie serwisowe",
        body: "Od przyjęcia po protokół i fakturę.",
      },
      {
        title: "Zatwierdzenia kosztów",
        body: "Limity i ścieżki akceptacji.",
      },
      {
        title: "Raport tygodniowy",
        body: "KPI z systemów zamiast ręcznego składania.",
      },
      {
        title: "Reklamacje",
        body: "Historia sprawy i terminy odpowiedzi.",
      },
    ],
    howWeWork:
      "Z Jaworem startujemy od procesu generującego najwięcej telefonów. Wdrażamy zdalnie i szkolimy właściciela procesu. Konsultacja 30 minut bez zobowiązań.",
    faq: [
      {
        id: "jaw-1",
        question: "Czy automatyzacja w Jaworze ma sens dla małej firmy?",
        answer:
          "Tak. Zwłaszcza gdy właściciel i biuro toną w statusach i dokumentach.",
      },
      {
        id: "jaw-2",
        question: "Czy musicie znać lokalne systemy?",
        answer:
          "Pracujemy z tym, czym już dysponujecie; dobieramy prostą integrację.",
      },
      {
        id: "jaw-3",
        question: "Jak wygląda współpraca zdalna?",
        answer:
          "Warsztaty online, wdrożenie, testy i szkolenie, z jasnym zakresem.",
      },
      {
        id: "jaw-4",
        question: "Ile trwa MVP?",
        answer:
          "Często kilka tygodni przy jednym dobrze wybranym procesie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["legnica", "swidnica", "zlotoryja", "walbrzych", "sroda-slaska"],
  },
  {
    slug: "luban",
    name: "Lubań",
    nameGenitive: "Lubania",
    nameLocative: "Lubaniu",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Lubaniu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Lubania: pogranicze, produkcja i usługi. Zdalne wdrożenia logistyki, sprzedaży i back-office.",
    heroTitle: "Automatyzacja procesów w Lubaniu",
    heroLead:
      "Porządkujemy procesy lubańskich firm na styku produkcji, handlu i pogranicza, mniej ręcznego klejenia statusów, więcej przewidywalności.",
    introParagraphs: [
      "Lubań to ośrodek zachodniego pogranicza Dolnego Śląska: produkcja, handel i usługi z ekspozycją na klientów regionalnych oraz zagranicznych. Automatyzacja procesów w Lubaniu często zaczyna się od zamówień i dokumentów, które giną między działami.",
      "Współpracujemy zdalnie: budujemy wąski, działający przepływ i dopiero potem rozszerzamy zakres.",
    ],
    localContext:
      "Powiat lubański łączy MŚP produkcyjne z firmami usługowymi i handlowymi. Typowy ból to ręczne potwierdzenia, brak jednej prawdy o stanie magazynu i opóźnione rozliczenia.",
    whyHere:
      "W Lubaniu automatyzacja skraca cykl od zamówienia do faktury i zmniejsza liczbę pomyłek w obsłudze klienta.",
    focusIndustries: [
      {
        title: "Produkcja MŚP",
        body: "Statusy zleceń i materiałów w jednym obrazie.",
      },
      {
        title: "Handel i dystrybucja",
        body: "Zamówienia, stany i dokumenty sprzedaży.",
      },
      {
        title: "Usługi B2B",
        body: "Ticketowanie i rozliczenia.",
      },
      {
        title: "Logistyka lokalna",
        body: "Awizacje i potwierdzenia dostaw.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zamówienia",
        body: "Jedna ścieżka zamiast równoległych maili.",
      },
      {
        title: "Wydanie z magazynu",
        body: "Status powiązany z zamówieniem.",
      },
      {
        title: "Fakturowanie po realizacji",
        body: "Mniej ręcznego przepisywania.",
      },
      {
        title: "Raport sprzedaży",
        body: "Zestawienia z danych źródłowych.",
      },
    ],
    howWeWork:
      "Z Lubania startujemy od ścieżki zamówienia lub magazynu. Wdrażamy online, testujemy na realnych dokumentach i szkolimy zespół. Konsultacja 30 minut.",
    faq: [
      {
        id: "lub-1",
        question: "Czy automatyzacja w Lubaniu obejmuje handel cross-border?",
        answer:
          "Tak, jeśli macie dokumenty i statusy, które dziś ogarniacie ręcznie.",
      },
      {
        id: "lub-2",
        question: "Czy potrzebujemy dużego budżetu IT?",
        answer:
          "Nie. Dobieramy prosty zakres możliwy do utrzymania lokalnie.",
      },
      {
        id: "lub-3",
        question: "Czy pracujecie tylko zdalnie?",
        answer:
          "Tak jako standard; wizyty planujemy wyjątkowo.",
      },
      {
        id: "lub-4",
        question: "Jak wybrać pierwszy proces?",
        answer:
          "Na konsultacji wskazujemy ten o najwyższym koszcie ręcznej pracy.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-logistyki",
      "automatyzacja-dla-ksiegowosci",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["zgorzelec", "jelenia-gora", "lwowek-slaski", "boleslawiec", "kamienna-gora"],
  },
  {
    slug: "kamienna-gora",
    name: "Kamienna Góra",
    nameGenitive: "Kamiennej Góry",
    nameLocative: "Kamiennej Górze",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Kamiennej Górze | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Kamiennej Góry: produkcja, tekstylia i Kotlina Jeleniogórska. Zdalne wdrożenia procesów. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Kamiennej Górze",
    heroLead:
      "Pomagamy firmom z Kamiennej Góry spiąć produkcję, magazyn i biuro, gdy tradycyjne branże spotykają nowoczesne wymagania klientów.",
    introParagraphs: [
      "Kamienna Góra to ośrodek z historią tekstylną i produkcyjną, dziś mocno związany też z regionem jeleniogórskim. Automatyzacja procesów w Kamiennej Górze często dotyczy zleceń produkcyjnych, jakości i raportowania, które wciąż żyją w arkuszach.",
      "Pracujemy zdalnie z lokalnymi zakładami i MŚP: porządkujemy krytyczny przepływ i budujemy nawyk pracy na aktualnych danych.",
    ],
    localContext:
      "Powiat kamiennogórski łączy produkcję z usługami i turystyką regionu. Bólem są ręczne statusy partii, opóźnione protokoły i brak wspólnego obrazu dla sprzedaży oraz hali.",
    whyHere:
      "W Kamiennej Górze automatyzacja obniża koszt braków informacyjnych: mniej przestojów wynikających z niejasnego statusu i szybsza reakcja na reklamacje.",
    focusIndustries: [
      {
        title: "Produkcja i tekstylia",
        body: "Partie, statusy i jakość w jednym przepływie.",
      },
      {
        title: "Usługi dla przemysłu",
        body: "Zlecenia serwisowe i protokoły.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i dokumenty bez dublowania.",
      },
      {
        title: "Turystyka regionalna",
        body: "Rezerwacje i rozliczenia sezonowe.",
      },
    ],
    focusProcesses: [
      {
        title: "Zlecenie produkcyjne",
        body: "Status widoczny dla planowania i sprzedaży.",
      },
      {
        title: "Kontrola jakości",
        body: "Checklisty i archiwum wyników.",
      },
      {
        title: "Reklamacje",
        body: "Historia sprawy i działania korygujące.",
      },
      {
        title: "Raport wydajności",
        body: "KPI bez ręcznego przepisywania.",
      },
    ],
    howWeWork:
      "Z Kamiennej Góry zaczynamy od procesu produkcyjnego lub jakości. Wdrażamy zdalnie i szkolimy właścicieli procesu. Konsultacja 30 minut.",
    faq: [
      {
        id: "kam-1",
        question: "Czy automatyzacja w Kamiennej Górze dotyczy tylko dużych fabryk?",
        answer:
          "Nie. Często wspieramy średnie zakłady z ograniczonym back-office.",
      },
      {
        id: "kam-2",
        question: "Czy integrujecie stare systemy?",
        answer:
          "Tam, gdzie da się bezpiecznie, tak; czasem zaczynamy od formularzy i reguł.",
      },
      {
        id: "kam-3",
        question: "Czy potrzebna jest wizyta?",
        answer:
          "Nie jako standard.",
      },
      {
        id: "kam-4",
        question: "Jak wygląda efekt po MVP?",
        answer:
          "Mniej telefonów o status, krótszy czas domknięcia reklamacji, czytelniejsze raporty.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-raportow",
      "automatyzacja-w-obsludze-klienta",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["jelenia-gora", "walbrzych", "lwowek-slaski", "luban", "zgorzelec"],
  },
  {
    slug: "zabkowice-slaskie",
    name: "Ząbkowice Śląskie",
    nameGenitive: "Ząbkowic Śląskich",
    nameLocative: "Ząbkowicach Śląskich",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Ząbkowicach Śląskich | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Ząbkowic Śląskich: produkcja, usługi i południe Dolnego Śląska. Zdalne wdrożenia procesów. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Ząbkowicach Śląskich",
    heroLead:
      "Porządkujemy procesy ząbkowickich MŚP i zakładów, gdy lokalny rynek wymaga dokumentacji i tempa, a zespół jest ograniczony.",
    introParagraphs: [
      "Ząbkowice Śląskie to siedziba powiatu na południu województwa: produkcja, usługi i handel lokalny. Automatyzacja procesów w Ząbkowicach Śląskich często odpowiada na chaos w zleceniach, protokołach i rozliczeniach.",
      "Współpracujemy zdalnie: wybieramy jeden proces o wysokim koszcie ręcznej pracy i wdrażamy go do stanu, w którym zespół przestaje gonić statusy.",
    ],
    localContext:
      "Powiat ząbkowicki łączy mniejsze ośrodki przemysłowe z usługami. Typowy ból to ręczne Excelе, brak archiwum protokołów i opóźnione fakturowanie po zakończeniu prac.",
    whyHere:
      "W Ząbkowicach Śląskich automatyzacja daje przewagę operacyjną: mniej błędów, szybsze domykanie spraw i lepsza obsługa klientów z regionu.",
    focusIndustries: [
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń i materiałów.",
      },
      {
        title: "Usługi techniczne i budowlane",
        body: "Zlecenia terenowe, odbiory, rozliczenia.",
      },
      {
        title: "Handel",
        body: "Zamówienia i stany.",
      },
      {
        title: "Back-office MŚP",
        body: "Zatwierdzenia, HR i raporty.",
      },
    ],
    focusProcesses: [
      {
        title: "Od zlecenia do protokołu",
        body: "Jedna ścieżka z historią działań.",
      },
      {
        title: "Fakturowanie po odbiorze",
        body: "Mniej ręcznego przepisywania.",
      },
      {
        title: "Zatwierdzenia kosztów",
        body: "Limity i eskalacje.",
      },
      {
        title: "Raport miesięczny",
        body: "KPI z danych źródłowych.",
      },
    ],
    howWeWork:
      "Z Ząbkowic Śląskich startujemy od mapy procesu i wyceny MVP. Wdrożenie zdalne, szkolenie właściciela procesu, konsultacja 30 minut na start.",
    faq: [
      {
        id: "zab-1",
        question: "Czy automatyzacja w Ząbkowicach Śląskich ma sens dla małej firmy?",
        answer:
          "Tak. Zwłaszcza gdy właściciel jest jednocześnie biurem i sprzedażą.",
      },
      {
        id: "zab-2",
        question: "Czy trzeba kupować drogi system?",
        answer:
          "Nie. Często spinamy narzędzia, które już macie.",
      },
      {
        id: "zab-3",
        question: "Jak wygląda start współpracy?",
        answer:
          "Konsultacja, zakres, wycena, wdrożenie.",
      },
      {
        id: "zab-4",
        question: "Czy utrzymujecie wdrożenia?",
        answer:
          "Przekazujemy dokumentację; kolejne etapy planujemy wspólnie.",
      },
    ],
    relatedServiceSlugs: [
      "doradztwo-i-optymalizacja-procesow-biznesowych",
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["klodzko", "dzierzoniow", "strzelin", "swidnica", "olawa"],
  },
  {
    slug: "zlotoryja",
    name: "Złotoryja",
    nameGenitive: "Złotoryi",
    nameLocative: "Złotoryi",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Złotoryi | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Złotoryi, okolice Legnicy, produkcja i usługi. Zdalne wdrożenia procesów operacyjnych. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Złotoryi",
    heroLead:
      "Pomagamy złotoryjskim firmom uporządkować zlecenia, dokumenty i raporty, w cieniu dużego hubu legnickiego, bez chaosu w back-office.",
    introParagraphs: [
      "Złotoryja leży w strefie oddziaływania Legnicy i przemysłu miedziowego: lokalna produkcja, usługi i handel B2B. Automatyzacja procesów w Złotoryi często dotyczy obiegu dokumentów i statusów, które dziś giną między telefonami a Excelami.",
      "Pracujemy zdalnie: budujemy prosty, utrzymywalny przepływ i mierzymy efekt zanim skalujemy.",
    ],
    localContext:
      "Powiat złotoryjski łączy MŚP z zapotrzebowaniem większych odbiorców regionalnych. Bólem są ręczne protokoły, opóźnione potwierdzenia i brak wspólnego obrazu realizacji.",
    whyHere:
      "W Złotoryi automatyzacja pozwala dogonić wymagania większych klientów bez rozbudowy administracji.",
    focusIndustries: [
      {
        title: "Usługi dla przemysłu",
        body: "Zlecenia, protokoły, rozliczenia.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy i jakość.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i dokumenty.",
      },
      {
        title: "Rzemiosło i usługi",
        body: "Terminy, potwierdzenia, archiwum.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zlecenia",
        body: "Jedna ścieżka ze statusem.",
      },
      {
        title: "Protokół wykonania",
        body: "Checklisty i archiwum.",
      },
      {
        title: "Fakturowanie",
        body: "Mniej ręcznego przepisywania.",
      },
      {
        title: "Raport realizacji",
        body: "Zestawienia tygodniowe lub miesięczne.",
      },
    ],
    howWeWork:
      "Ze Złotoryją startujemy od procesu, który blokuje cashflow lub generuje reklamacje. Wdrożenie zdalne, konsultacja 30 minut.",
    faq: [
      {
        id: "zlo-1",
        question: "Czy automatyzacja w Złotoryi jest dla małych firm?",
        answer:
          "Tak. To nasz najczęstszy profil w powiecie.",
      },
      {
        id: "zlo-2",
        question: "Czy integrujecie się z systemami klientów?",
        answer:
          "Gdzie to możliwe; czasem wystarczy uporządkowany eksport dokumentów.",
      },
      {
        id: "zlo-3",
        question: "Czy potrzebna jest obecność na miejscu?",
        answer:
          "Nie jako standard.",
      },
      {
        id: "zlo-4",
        question: "Jak szybko widać efekt?",
        answer:
          "Przy wąskim zakresie. Zwykle w kilka tygodni.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["legnica", "jawor", "polkowice", "lubin", "sroda-slaska"],
  },
  {
    slug: "trzebnica",
    name: "Trzebnica",
    nameGenitive: "Trzebnicy",
    nameLocative: "Trzebnicy",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Trzebnicy | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Trzebnicy: pierścień Wrocławia, usługi i handel. Zdalne wdrożenia procesów obsługi i back-office.",
    heroTitle: "Automatyzacja procesów w Trzebnicy",
    heroLead:
      "Wspieramy trzebnickie firmy z północnego pierścienia Wrocławia, gdy rosnący popyt wyprzedza ręczne procesy biurowe.",
    introParagraphs: [
      "Trzebnica to ośrodek usługowo-handlowy w strefie dojazdowej Wrocławia. Automatyzacja procesów w Trzebnicy często zaczyna się od obsługi klienta, grafików i rozliczeń, które w szczytach generują kolejkę maili i telefonów.",
      "Pracujemy zdalnie z lokalnymi MŚP: porządkujemy jeden proces, wdrażamy go i zostawiamy zespół z jasną instrukcją.",
    ],
    localContext:
      "Powiat trzebnicki łączy usługi, handel i firmy pracujące na rynek wrocławski. Typowy ból to ręczne rezerwacje terminów, brak śladu ustaleń i opóźnione fakturowanie.",
    whyHere:
      "W Trzebnicy automatyzacja pozwala obsłużyć więcej zleceń bez proporcjonalnego wzrostu chaosu w biurze.",
    focusIndustries: [
      {
        title: "Usługi lokalne i zdrowotne",
        body: "Terminy, przypomnienia, karty klientów.",
      },
      {
        title: "Handel i e-commerce lokalny",
        body: "Zamówienia, stany, komunikacja.",
      },
      {
        title: "Budownictwo i instalacje",
        body: "Zlecenia terenowe i protokoły.",
      },
      {
        title: "Biura i usługi B2B",
        body: "Ticketowanie i raporty.",
      },
    ],
    focusProcesses: [
      {
        title: "Rezerwacja terminu",
        body: "Jedna prawda o kalendarzu.",
      },
      {
        title: "Potwierdzenie zlecenia",
        body: "Automatyczne powiadomienia zamiast ręcznych SMS-ów.",
      },
      {
        title: "Rozliczenie po usłudze",
        body: "Mniej ręcznego przepisywania do faktury.",
      },
      {
        title: "Raport tygodniowy",
        body: "KPI sprzedaży lub realizacji.",
      },
    ],
    howWeWork:
      "Z Trzebnicy startujemy od procesu, który generuje najwięcej telefonów. Wdrożenie zdalne, konsultacja 30 minut.",
    faq: [
      {
        id: "trz-1",
        question: "Czy automatyzacja w Trzebnicy pomaga firmom usługowym?",
        answer:
          "Tak. To jeden z najczęstszych scenariuszy w powiecie.",
      },
      {
        id: "trz-2",
        question: "Czy łączycie kalendarze i CRM?",
        answer:
          "Tak, jeśli narzędzia na to pozwalają.",
      },
      {
        id: "trz-3",
        question: "Czy to drogie wdrożenie?",
        answer:
          "Zaczynamy od wąskiego zakresu z jasną wyceną.",
      },
      {
        id: "trz-4",
        question: "Czy pracujecie zdalnie z Trzebnicy?",
        answer:
          "Tak. To standard.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-sprzedazy",
      "automatyzacja-dla-ksiegowosci",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["wroclaw", "olesnica", "milicz", "wolow", "olawa"],
  },
  {
    slug: "wolow",
    name: "Wołów",
    nameGenitive: "Wołowa",
    nameLocative: "Wołowie",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Wołowie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Wołowa: produkcja, okolice Odry i MŚP. Zdalne wdrożenia procesów operacyjnych i finansowych.",
    heroTitle: "Automatyzacja procesów w Wołowie",
    heroLead:
      "Porządkujemy procesy wołowskich firm produkcyjnych i usługowych, mniej ręcznego statusowania, więcej kontroli nad realizacją.",
    introParagraphs: [
      "Wołów to siedziba powiatu nad Odrą: produkcja, usługi i firmy pracujące na rynek regionalny oraz wrocławski. Automatyzacja procesów w Wołowie często dotyczy zleceń, magazynu i rozliczeń, które dziś żyją w arkuszach.",
      "Współpracujemy zdalnie: wdrażamy wąski zakres z mierzalnym efektem i szkolimy osoby odpowiedzialne za domykanie spraw.",
    ],
    localContext:
      "Powiat wołowski łączy produkcję z logistyką i usługami. Typowy ból to nieaktualne stany, opóźnione potwierdzenia i brak wspólnego obrazu dla biura oraz hali.",
    whyHere:
      "W Wołowie automatyzacja skraca czas od zlecenia do faktury i zmniejsza liczbę pomyłek magazynowych.",
    focusIndustries: [
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń i materiałów.",
      },
      {
        title: "Logistyka i magazyn",
        body: "Przyjęcia, wydania, awizacje.",
      },
      {
        title: "Usługi techniczne",
        body: "Zlecenia i protokoły.",
      },
      {
        title: "Handel B2B",
        body: "Zamówienia i dokumenty.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zlecenia produkcyjnego",
        body: "Status widoczny dla biura i hali.",
      },
      {
        title: "Ruch magazynowy",
        body: "Powiązanie z zamówieniem.",
      },
      {
        title: "Fakturowanie",
        body: "Mniej ręcznego przepisywania.",
      },
      {
        title: "Raport realizacji",
        body: "Zestawienia tygodniowe.",
      },
    ],
    howWeWork:
      "Z Wołowa zaczynamy od procesu generującego największe straty czasu. Wdrożenie zdalne, konsultacja 30 minut.",
    faq: [
      {
        id: "wol-1",
        question: "Czy automatyzacja w Wołowie obejmuje magazyn?",
        answer:
          "Tak. To częsty punkt startu.",
      },
      {
        id: "wol-2",
        question: "Czy trzeba wymieniać ERP?",
        answer:
          "Nie. Częściej spinamy istniejące narzędzia.",
      },
      {
        id: "wol-3",
        question: "Jak wygląda szkolenie?",
        answer:
          "Krótkie, praktyczne, pod osoby, które realnie pracują w procesie.",
      },
      {
        id: "wol-4",
        question: "Dla kogo to ma sens?",
        answer:
          "Dla firm, w których ręczne statusy spowalniają realizację.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-raportow",
    ],
    nearbyCitySlugs: ["wroclaw", "trzebnica", "gora", "sroda-slaska", "glogow"],
  },
  {
    slug: "strzelin",
    name: "Strzelin",
    nameGenitive: "Strzelina",
    nameLocative: "Strzelinie",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Strzelinie | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Strzelina, kamień, produkcja i południe regionu. Zdalne wdrożenia procesów jakości i logistyki.",
    heroTitle: "Automatyzacja procesów w Strzelinie",
    heroLead:
      "Pomagamy strzelińskim firmom spiąć produkcję, dokumenty i dostawy, gdy branża kamieniarska i lokalny przemysł nie wybaczają chaosu w danych.",
    introParagraphs: [
      "Strzelin kojarzy się z kamieniem i produkcją lokalną, ale to też siedziba powiatu z siecią MŚP usługowych. Automatyzacja procesów w Strzelinie często dotyczy zleceń, protokołów jakości i logistyki dostaw na place lub do klientów B2B.",
      "Pracujemy zdalnie: budujemy przepływ od zapytania do realizacji z historią dokumentów, bez ginących wersji w mailach.",
    ],
    localContext:
      "Powiat strzeliński łączy przemysł kamieniarski z produkcją i usługami. Bólem są ręczne wyceny, statusy zamówień i brak archiwum protokołów odbioru.",
    whyHere:
      "W Strzelinie automatyzacja chroni marżę projektów: mniej pomyłek w specyfikacji, szybsze rozliczenia i czytelniejszy status dla klienta.",
    focusIndustries: [
      {
        title: "Kamień i materiały budowlane",
        body: "Zlecenia, specyfikacje, dostawy.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy i jakość.",
      },
      {
        title: "Transport lokalny",
        body: "Awizacje i potwierdzenia.",
      },
      {
        title: "Usługi budowlane",
        body: "Protokoły i rozliczenia.",
      },
    ],
    focusProcesses: [
      {
        title: "Od wyceny do zamówienia",
        body: "Jedna ścieżka ze statusem.",
      },
      {
        title: "Specyfikacja i zmiany",
        body: "Ślad wersji zamiast ciągów maili.",
      },
      {
        title: "Dostawa i odbiór",
        body: "Checklisty i protokoły.",
      },
      {
        title: "Rozliczenie projektu",
        body: "Mniej ręcznego klejenia kosztów.",
      },
    ],
    howWeWork:
      "Ze Strzelinem startujemy od ścieżki zlecenia lub dokumentów jakości. Wdrożenie zdalne, konsultacja 30 minut.",
    faq: [
      {
        id: "str-1",
        question: "Czy automatyzacja w Strzelinie ma sens w branży kamieniarskiej?",
        answer:
          "Tak. Szczególnie przy wycenach, zmianach specyfikacji i protokołach odbioru.",
      },
      {
        id: "str-2",
        question: "Czy integrujecie magazyn i sprzedaż?",
        answer:
          "Tak, w prostym wariancie dopasowanym do MŚP.",
      },
      {
        id: "str-3",
        question: "Czy potrzebujecie wizyty na zakładzie?",
        answer:
          "Nie jako standard.",
      },
      {
        id: "str-4",
        question: "Jak wybrać pierwszy proces?",
        answer:
          "Na konsultacji wskazujemy ten o najwyższym koszcie błędów.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-dla-logistyki",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["olawa", "zabkowice-slaskie", "dzierzoniow", "wroclaw", "olesnica"],
  },
  {
    slug: "gora",
    name: "Góra",
    nameGenitive: "Góry",
    nameLocative: "Górze",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Górze | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Góry: rolnictwo, usługi i północ Dolnego Śląska. Zdalne wdrożenia procesów back-office i sprzedaży.",
    heroTitle: "Automatyzacja procesów w Górze",
    heroLead:
      "Wspieramy firmy z Góry i powiatu, gdy sezonowość rolnictwa i lokalne usługi wymagają porządku w dokumentach oraz rozliczeniach.",
    introParagraphs: [
      "Góra to siedziba powiatu na północy Dolnego Śląska: rolnictwo, przetwórstwo, handel i usługi lokalne. Automatyzacja procesów w Górze często oznacza połączenie sezonowych szczytów z ciągłą pracą biura, które nie może tonąć w papierach.",
      "Pracujemy zdalnie z lokalnymi MŚP: porządkujemy krytyczny przepływ i budujemy prosty system pracy na aktualnych danych.",
    ],
    localContext:
      "Powiat górowski żyje rytmem sezonu i lokalnego rynku. Typowy ból to ręczne ewidencje, opóźnione faktury i brak jednego obrazu należności oraz stanów.",
    whyHere:
      "W Górze automatyzacja chroni cashflow i spokój właściciela: mniej gubionych dokumentów i szybsze domykanie spraw po sezonie.",
    focusIndustries: [
      {
        title: "Rolnictwo i przetwórstwo",
        body: "Ewidencje, zlecenia, rozliczenia.",
      },
      {
        title: "Handel lokalny",
        body: "Zamówienia i stany.",
      },
      {
        title: "Usługi komunalne i techniczne",
        body: "Zlecenia i protokoły.",
      },
      {
        title: "Back-office MŚP",
        body: "Faktury, zatwierdzenia, raporty.",
      },
    ],
    focusProcesses: [
      {
        title: "Ewidencja zleceń sezonowych",
        body: "Jedna lista zamiast zeszytów i maili.",
      },
      {
        title: "Fakturowanie",
        body: "Mniej ręcznego przepisywania.",
      },
      {
        title: "Należności i przypomnienia",
        body: "Ślad kontaktów z klientem.",
      },
      {
        title: "Raport miesięczny",
        body: "KPI z danych źródłowych.",
      },
    ],
    howWeWork:
      "Z Góry startujemy od procesu, który najbardziej obciąża właściciela lub księgowość. Wdrożenie zdalne, konsultacja 30 minut.",
    faq: [
      {
        id: "gor-1",
        question: "Czy automatyzacja w Górze ma sens dla firm sezonowych?",
        answer:
          "Tak. Poza sezonem budujemy fundament, w sezonie zbieracie efekt.",
      },
      {
        id: "gor-2",
        question: "Czy to tylko dla dużych gospodarstw?",
        answer:
          "Nie. Częściej pracujemy z lokalnymi MŚP i usługami.",
      },
      {
        id: "gor-3",
        question: "Czy potrzebujemy IT na miejscu?",
        answer:
          "Nie. Dobieramy narzędzia możliwe do utrzymania samodzielnie.",
      },
      {
        id: "gor-4",
        question: "Jak wygląda start?",
        answer:
          "Konsultacja, zakres MVP, wycena, wdrożenie.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-ksiegowosci",
      "automatyzacja-sprzedazy",
      "automatyzacja-raportow",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["glogow", "wolow", "milicz", "lubin", "trzebnica"],
  },
  {
    slug: "milicz",
    name: "Milicz",
    nameGenitive: "Milicza",
    nameLocative: "Miliczu",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Miliczu | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Milicza: Stawy Milickie, turystyka i spożywcze. Zdalne wdrożenia rezerwacji, HR i finansów.",
    heroTitle: "Automatyzacja procesów w Miliczu",
    heroLead:
      "Pomagamy milickim firmom ogarnąć sezonowość turystyki i lokalnego biznesu, rezerwacje, obsługa i rozliczenia bez ręcznego chaosu.",
    introParagraphs: [
      "Milicz to serce regionu Stawów Milickich: turystyka, gastronomia, przetwórstwo i lokalne usługi. Automatyzacja procesów w Miliczu często dotyczy rezerwacji, grafików oraz rozliczeń, które w sezonie rosną szybciej niż zespół.",
      "Współpracujemy zdalnie: budujemy przepływy działające w szczycie i poza sezonem, bez udawania lokalnego oddziału.",
    ],
    localContext:
      "Powiat milicki łączy turystykę z lokalną gospodarką spożywczą i usługową. Typowy ból to ręczne kalendarze, opóźnione rozliczenia sezonowe i brak jednego obrazu obsady.",
    whyHere:
      "W Miliczu automatyzacja chroni doświadczenie gościa i marżę sezonu: mniej overbookingu i mniej gaszenia pożarów w biurze.",
    focusIndustries: [
      {
        title: "Turystyka i noclegi",
        body: "Rezerwacje, potwierdzenia, komunikacja.",
      },
      {
        title: "Gastronomia i spożywcze",
        body: "Zamówienia, stany, rozliczenia.",
      },
      {
        title: "Usługi lokalne",
        body: "Terminy i protokoły.",
      },
      {
        title: "MŚP handlowe",
        body: "Sprzedaż i fakturowanie.",
      },
    ],
    focusProcesses: [
      {
        title: "Rezerwacja i depozyt",
        body: "Jedna ścieżka ze statusem płatności.",
      },
      {
        title: "Grafik obsady",
        body: "Widoczność obciążenia w szczycie.",
      },
      {
        title: "Rozliczenie sezonu",
        body: "Zestawienia bez ręcznego klejenia.",
      },
      {
        title: "Opinie i reklamacje",
        body: "Ślad sprawy i czas odpowiedzi.",
      },
    ],
    howWeWork:
      "Z Milicza startujemy przed sezonem lub tuż po. Wdrażamy zdalnie, testujemy na realnym kalendarzu. Konsultacja 30 minut.",
    faq: [
      {
        id: "mil-1",
        question: "Czy automatyzacja w Miliczu jest tylko dla hoteli?",
        answer:
          "Nie. Wspieramy też gastronomię, handel i lokalne usługi.",
      },
      {
        id: "mil-2",
        question: "Czy łączycie systemy rezerwacyjne?",
        answer:
          "Jeśli pozwalają na integrację lub eksport, tak.",
      },
      {
        id: "mil-3",
        question: "Czy warto wdrażać poza sezonem?",
        answer:
          "Tak. Wtedy jest czas na spokojne testy.",
      },
      {
        id: "mil-4",
        question: "Jak szybko widać efekt?",
        answer:
          "Przy wąskim zakresie, jeszcze przed kolejnym szczytem.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-dla-hr",
      "automatyzacja-dla-ksiegowosci",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["olesnica", "trzebnica", "gora", "wroclaw", "wolow"],
  },
  {
    slug: "sroda-slaska",
    name: "Środa Śląska",
    nameGenitive: "Środy Śląskiej",
    nameLocative: "Środzie Śląskiej",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Środzie Śląskiej | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm ze Środy Śląskiej, pierścień Wrocławia, logistyka i MŚP. Zdalne wdrożenia procesów. Konsultacja 30 min.",
    heroTitle: "Automatyzacja procesów w Środzie Śląskiej",
    heroLead:
      "Porządkujemy procesy firm ze Środy Śląskiej, gdy bliskość Wrocławia oznacza tempo logistyki i usług, którego Excel nie dogania.",
    introParagraphs: [
      "Środa Śląska leży w zachodnim pierścieniu Wrocławia: logistyka, produkcja i usługi dla aglomeracji. Automatyzacja procesów w Środzie Śląskiej często dotyczy awizacji, statusów zleceń i komunikacji z klientami z Wrocławia.",
      "Pracujemy zdalnie z lokalnymi MŚP: wdrażamy wąski zakres i mierzymy, czy zespół przestaje gonić statusy telefonami.",
    ],
    localContext:
      "Powiat średzki łączy lokalnych producentów z logistyką i usługami dla rynku wrocławskiego. Bólem są ręczne awizacje, zmiany terminów i brak jednej prawdy o realizacji.",
    whyHere:
      "W Środzie Śląskiej automatyzacja skraca czas reakcji na zmiany zamówienia i zmniejsza koszt błędów w obsłudze klienta z aglomeracji.",
    focusIndustries: [
      {
        title: "Logistyka i magazyny",
        body: "Awizacje, sloty, potwierdzenia.",
      },
      {
        title: "Produkcja lokalna",
        body: "Statusy zleceń i materiałów.",
      },
      {
        title: "Usługi B2B",
        body: "Ticketowanie i rozliczenia.",
      },
      {
        title: "Handel",
        body: "Zamówienia i dokumenty.",
      },
    ],
    focusProcesses: [
      {
        title: "Awizacja dostawy",
        body: "Powiadomienia i statusy w jednym przepływie.",
      },
      {
        title: "Zmiana terminu",
        body: "Eskalacje do hali, magazynu i klienta.",
      },
      {
        title: "Zlecenie usługowe",
        body: "Od przyjęcia po protokół.",
      },
      {
        title: "Raport realizacji",
        body: "KPI bez ręcznego składania.",
      },
    ],
    howWeWork:
      "Ze Środy Śląskiej startujemy od procesu generującego najwięcej telefonów z Wrocławia. Wdrożenie zdalne, konsultacja 30 minut.",
    faq: [
      {
        id: "sro-1",
        question: "Czy automatyzacja w Środzie Śląskiej obejmuje logistykę?",
        answer:
          "Tak. To częsty punkt startu w powiecie.",
      },
      {
        id: "sro-2",
        question: "Czy pracujecie z firmami podwykonawczymi Wrocławia?",
        answer:
          "Tak. Szczególnie przy statusach i dokumentach.",
      },
      {
        id: "sro-3",
        question: "Czy potrzebujemy dużego IT?",
        answer:
          "Nie. Dobieramy prosty, utrzymywalny zakres.",
      },
      {
        id: "sro-4",
        question: "Jak wygląda start?",
        answer:
          "Konsultacja, mapa procesu, wycena MVP.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-dla-logistyki",
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-w-obsludze-klienta",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["wroclaw", "jawor", "wolow", "legnica", "trzebnica"],
  },
  {
    slug: "lwowek-slaski",
    name: "Lwówek Śląski",
    nameGenitive: "Lwówka Śląskiego",
    nameLocative: "Lwówku Śląskim",
    voivodeship: "dolnośląskie",
    regionCluster: "dolny-slask",
    metaTitle: "Automatyzacja procesów w Lwówku Śląskim | Automation Minds",
    metaDescription:
      "Automatyzacja dla firm z Lwówka Śląskiego: Pogórze, kamień, turystyka i MŚP. Zdalne wdrożenia procesów. Umów konsultację.",
    heroTitle: "Automatyzacja procesów w Lwówku Śląskim",
    heroLead:
      "Pomagamy firmom z Lwówka Śląskiego połączyć produkcję, turystykę i usługi, mniej chaosu w dokumentach, więcej kontroli nad sezonem i zleceniami.",
    introParagraphs: [
      "Lwówek Śląski to siedziba powiatu na Pogórzu: kamień, lokalna produkcja, turystyka i usługi. Automatyzacja procesów w Lwówku Śląskim często dotyczy zleceń, rezerwacji i dokumentów, które w sezonie generują przeciążenie biura.",
      "Współpracujemy zdalnie: budujemy prosty przepływ od zapytania do realizacji i szkolimy osoby, które domykają tematy na co dzień.",
    ],
    localContext:
      "Powiat lwówecki łączy przemysł lokalny z turystyką regionu jeleniogórskiego. Typowy ból to ręczne kalendarze, statusy zleceń i brak archiwum protokołów.",
    whyHere:
      "W Lwówku Śląskim automatyzacja chroni marżę sezonu i jakość obsługi klienta B2B: mniej pomyłek i szybsze rozliczenia.",
    focusIndustries: [
      {
        title: "Kamień i produkcja lokalna",
        body: "Zlecenia, specyfikacje, dostawy.",
      },
      {
        title: "Turystyka i noclegi",
        body: "Rezerwacje i komunikacja.",
      },
      {
        title: "Usługi techniczne",
        body: "Protokoły i rozliczenia.",
      },
      {
        title: "Handel lokalny",
        body: "Zamówienia i stany.",
      },
    ],
    focusProcesses: [
      {
        title: "Przyjęcie zapytania ofertowego",
        body: "Ślad i status zamiast ginących maili.",
      },
      {
        title: "Rezerwacja sezonowa",
        body: "Jedna prawda o kalendarzu.",
      },
      {
        title: "Protokół odbioru",
        body: "Checklisty i archiwum.",
      },
      {
        title: "Rozliczenie",
        body: "Mniej ręcznego przepisywania.",
      },
    ],
    howWeWork:
      "Z Lwówka Śląskiego startujemy od procesu najbardziej obciążającego biuro. Wdrożenie zdalne, konsultacja 30 minut.",
    faq: [
      {
        id: "lwo-1",
        question: "Czy automatyzacja w Lwówku Śląskim łączy turystykę i produkcję?",
        answer:
          "Tak. Dobieramy zakres do realnego modelu firmy, bez uniwersalnego szablonu.",
      },
      {
        id: "lwo-2",
        question: "Czy pracujecie z małymi obiektami?",
        answer:
          "Tak. Często zaczynamy od rezerwacji lub zleceń.",
      },
      {
        id: "lwo-3",
        question: "Czy potrzebna jest wizyta?",
        answer:
          "Nie jako standard.",
      },
      {
        id: "lwo-4",
        question: "Jak mierzycie sukces?",
        answer:
          "Mniej telefonów o status, krótszy czas rozliczenia, czytelniejszy kalendarz.",
      },
    ],
    relatedServiceSlugs: [
      "automatyzacja-w-obsludze-klienta",
      "automatyzacja-w-produkcji-i-uslugach",
      "automatyzacja-sprzedazy",
      "doradztwo-i-optymalizacja-procesow-biznesowych",
    ],
    nearbyCitySlugs: ["jelenia-gora", "luban", "boleslawiec", "kamienna-gora", "zgorzelec"],
  }
];
