import { defineArticle } from "../define";

export default defineArticle({
  id: "a57",
  slug: "odnowienia-polis-jak-nie-tracic-klientow",
  title: "Odnowienia polis: jak nie tracić klientów przy końcu ochrony",
  metaTitle: "Odnowienia polis: jak nie tracić klientów",
  metaDescription:
    "Dlaczego agencje tracą klientów przy odnowieniach polis i jak to zmienić: baza polis, okna odnowień, kontakt z wyprzedzeniem i raport utraconych odnowień.",
  primaryKeyword: "odnowienia polis",
  secondaryKeywords: [
    "jak utrzymać klienta ubezpieczeniowego",
    "przypomnienie o końcu polisy",
    "retencja klientów agencji ubezpieczeniowej",
  ],
  excerpt:
    "Odnowienie to moment, w którym agencja może zatrzymać klienta na kolejny rok albo go stracić. Opisujemy, dlaczego odnowienia umykają, jak zorganizować ten proces i co warto mierzyć, żeby wiedzieć, ile klientów agencja traci i dlaczego.",
  categories: ["posrednictwo-ubezpieczeniowe", "automatyzacja-procesow"],
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  imageUrl: "https://images.unsplash.com/photo-1686771416282-3888ddaf249b?w=1200&q=80",
  imageAlt: "Agent i klientka podają sobie ręce nad laptopem",
  summary: [
    "Odnowienia umykają najczęściej dlatego, że agencja nie ma jednej listy polis kończących się w najbliższych tygodniach.",
    "Różne rodzaje ubezpieczeń wymagają różnego wyprzedzenia: polisy firmowe znacznie większego niż komunikacyjne.",
    "Kontakt z klientem warto zacząć od prośby o aktualne dane, a nie od gotowej oferty.",
    "Raport utraconych odnowień z powodami pokazuje, gdzie agencja traci klientów.",
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "automatyzacja-w-obsludze-klienta", "porzadkowanie-i-strukturyzowanie-danych"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-agencji-ubezpieczeniowej", "porownanie-ofert-ubezpieczen-dla-klienta", "jak-mierzyc-roi-automatyzacji"],
  cta: {
    title: "Chcecie przestać tracić odnowienia?",
    body: "Sprawdzimy, skąd pochodzą dane o waszych polisach, i zaproponujemy, jak zbudować listę odnowień, która nie pozwoli niczego przeoczyć.",
  },
  body: [
    "W agencji ubezpieczeniowej pozyskanie nowego klienta kosztuje dużo więcej niż zatrzymanie obecnego. Klient, który jest zadowolony z obsługi, zwykle zostaje na kolejne lata, kupuje kolejne ubezpieczenia i poleca agencję znajomym. Dlatego odnowienia są dla agencji tak ważne. A jednocześnie to proces, w którym straty są najczęstsze i najmniej widoczne.",
    "Klient, któremu nikt nie zaproponował nowej polisy, nie dzwoni z pretensjami. Po prostu przedłuża ją automatycznie u obecnego ubezpieczyciela, czasem na gorszych warunkach, albo kupuje ofertę, która przyszła od kogoś innego. Agencja dowiaduje się o tym, gdy prowizja nie wpływa, albo wcale.",
    "## Dlaczego odnowienia umykają",
    "Powody są zwykle te same w wielu agencjach:",
    "- **Brak jednej listy.** Polisy są w portalach kilkunastu towarzystw, a żeby zobaczyć, które kończą się w przyszłym miesiącu, trzeba sprawdzić każdy z nich.\n- **Pamięć agenta.** Agent pamięta swoich najważniejszych klientów, ale przy kilkuset polisach coś zawsze umknie.\n- **Za późny kontakt.** Agent dzwoni na tydzień przed końcem ochrony, klient nie ma czasu na rozmowę, a dane do kalkulacji trzeba zbierać w pośpiechu.\n- **Brak danych od klienta.** Agent wysyła prośbę o aktualne dane, klient nie odpowiada, a nikt mu nie przypomina.\n- **Zmiany w zespole.** Agent odchodzi albo jest na urlopie, a jego klienci zostają bez opieki.",
    "Każdy z tych powodów da się usunąć organizacją pracy, a większość także automatyzacją.",
    "## Krok 1. Jedna baza polis",
    "Bez listy polis z datami końca ochrony nie da się pilnować odnowień. Taka lista powinna obejmować polisy ze wszystkich towarzystw, z którymi współpracuje agencja, i być połączona z klientem oraz agentem prowadzącym. Dane mogą pochodzić z systemu agencyjnego, z zestawień prowizyjnych towarzystw albo z importu z portali.",
    "Do bazy warto dopisywać także polisy klientów zawarte w innych agencjach, jeśli klient je pokaże. Każda taka polisa to okazja do oferty przy jej końcu. O budowie bazy piszemy na stronie [baza polis i klientów](/branze/posrednictwo-ubezpieczeniowe/baza-polis).",
    "## Krok 2. Okna odnowień",
    "Różne ubezpieczenia wymagają różnego wyprzedzenia. Przy polisie komunikacyjnej zwykle wystarcza kilka tygodni. Przy ubezpieczeniu majątku firmy, gdzie trzeba zebrać aktualne sumy, informacje o działalności i historię szkód, a potem zapytać kilka towarzystw, warto zacząć dwa lub trzy miesiące wcześniej. Przy ubezpieczeniach grupowych jeszcze wcześniej.",
    "Okna odnowień warto ustalić dla każdego rodzaju ubezpieczenia osobno i zapisać jako zasadę. System codziennie sprawdza, które polisy weszły w okno, i tworzy zadania dla agentów.",
    "## Krok 3. Kontakt z klientem w dobrej kolejności",
    "Pierwszy kontakt z klientem przy odnowieniu nie musi być ofertą. Lepiej zacząć od prośby o potwierdzenie lub aktualizację danych: czy zmienił się samochód, przebieg, adres, zakres działalności firmy. Taka wiadomość może wychodzić automatycznie, w imieniu agenta prowadzącego, z linkiem do prostego formularza.",
    "Gdy dane wrócą, agent przygotowuje kalkulacje i rozmawia z klientem. Jeśli dane nie wróciły po kilku dniach, system przypomina klientowi, a potem agentowi, że warto zadzwonić. Dzięki temu rozmowa o ofercie odbywa się z wyprzedzeniem, a nie w ostatnim tygodniu.",
    "[[CTA]]",
    "## Krok 4. Statusy i powody",
    "Każde odnowienie powinno zakończyć się statusem: odnowione w agencji, przeniesione do innego towarzystwa przez agencję, utracone. Przy utraconych warto zapisać powód: cena, klient sprzedał samochód, klient przeszedł do konkurencji, brak kontaktu. To kilka sekund pracy agenta, a daje agencji wiedzę, której wcześniej nie miała.",
    "## Krok 5. Raport odnowień",
    "Raport odnowień pokazuje, ile polis odnawia się w każdym miesiącu, ile z nich agencja zatrzymuje i dlaczego traci pozostałe. Warto go oglądać według agentów, rodzajów ubezpieczeń i towarzystw. Często okazuje się, że straty skupiają się w jednym miejscu: u jednego agenta, przy jednym rodzaju polis albo przy klientach, z którymi nie było kontaktu.",
    "Taki raport jest też najlepszą miarą efektu automatyzacji. Jak liczyć efekty wdrożeń, opisujemy w artykule [jak mierzyć ROI automatyzacji](/poradnik/jak-mierzyc-roi-automatyzacji).",
    "## Zastępstwa i odejścia agentów",
    "Gdy agent jest na urlopie, jego zadania odnowień powinny trafić do innej osoby. Gdy agent odchodzi z agencji, jego klienci powinni zostać przypisani do kogoś innego z pełną historią: polisami, notatkami, szkodami. Bez bazy i zadań to moment, w którym agencja traci najwięcej klientów naraz.",
    "## Sprawdzanie kompletności bazy",
    "Lista odnowień jest tak dobra jak baza, z której powstaje. Polisa, która nie trafiła do bazy, nie pojawi się na liście. Dobrym sposobem kontroli jest porównanie bazy z zestawieniami prowizji z towarzystw: każda polisa, za którą wpłynęła prowizja, powinna być w bazie. Rozbieżności wskazują polisy do uzupełnienia. Opisujemy to na stronie [prowizje i rozliczenia agentów](/branze/posrednictwo-ubezpieczeniowe/prowizje).",
    "## Co z wiadomościami automatycznymi",
    "Automatyczne wiadomości przy odnowieniu dotyczą terminu i danych. Nie zawierają rekomendacji ani oferty, bo to praca agenta. Ich treść i częstotliwość ustala agencja, a klient powinien móc zrezygnować z takich wiadomości. Kanały kontaktu, np. SMS, wymagają zgody klienta. O zasadach przetwarzania danych piszemy w artykule [RODO a automatyzacja procesów](/poradnik/rodo-a-automatyzacja-procesow).",
    "## Odnowienie jako okazja do rozmowy",
    "Odnowienie jest też naturalnym momentem na rozmowę o sytuacji klienta. Czy kupił mieszkanie, które warto ubezpieczyć? Czy założył firmę? Czy ma dzieci, które zmieniają jego potrzeby w ubezpieczeniach na życie? Agent, który ma przed rozmową historię klienta, jego polisy i notatki z poprzednich spotkań, może takie pytania zadać naturalnie, bez nachalnej sprzedaży.",
    "Baza polis pomaga też wskazać klientów, którzy mają tylko jedno ubezpieczenie w agencji, choć zwykle łączy się je z innymi, np. polisę komunikacyjną bez ubezpieczenia mieszkania. Lista takich klientów przy odnowieniu to dla agenta podpowiedź, o czym warto porozmawiać. Decyzja o kontakcie i jego treści zawsze należy do agenta.",
    "## Porównanie: odnowienia dziś i po zmianie",
    "| Element | Typowo dziś | Po uporządkowaniu |\n|---|---|---|\n| Lista polis | Sprawdzanie portali towarzystw | Jedna baza, lista codziennie |\n| Wyprzedzenie | Tydzień lub dwa | Okna według rodzaju ubezpieczenia |\n| Dane od klienta | Telefon w ostatniej chwili | Prośba z wyprzedzeniem i przypomnienie |\n| Kontrola | Pamięć agenta | Zadania i przypomnienia |\n| Wiedza o stratach | Brak | Raport z powodami |",
    "## Ile to trwa",
    "Zbudowanie listy odnowień na istniejącej bazie polis to zwykle kilka tygodni, łącznie z testem na jednym agencie lub jednym rodzaju ubezpieczeń. Jeśli bazę trzeba dopiero zbudować, dochodzi czas na import danych z kilku źródeł i ich oczyszczenie. Pierwsze efekty widać zwykle w ciągu jednego lub dwóch miesięcy, bo tyle trwa cykl odnowień objętych pierwszymi oknami.",
    "## Od czego zacząć",
    "Jeśli agencja nie ma bazy polis, zaczyna się od niej. Jeśli ma, pierwszym krokiem może być sama lista odnowień z zadaniami dla agentów, a wiadomości do klientów i raport można dołożyć po kilku tygodniach. Szczegóły rozwiązania opisujemy na stronie [odnowienia polis](/branze/posrednictwo-ubezpieczeniowe/odnowienia-polis), a pozostałe procesy, które warto zautomatyzować, w artykule [co zautomatyzować w agencji ubezpieczeniowej](/poradnik/co-zautomatyzowac-w-agencji-ubezpieczeniowej).",
  ].join("\n\n"),
  faq: [
    {
      question: "Jak wcześnie kontaktować się z klientem przed końcem polisy?",
      answer:
        "To zależy od rodzaju ubezpieczenia. Przy polisach komunikacyjnych zwykle kilka tygodni, przy firmowych i grupowych nawet dwa lub trzy miesiące wcześniej.",
    },
    {
      question: "Dlaczego agencje tracą klientów przy odnowieniach?",
      answer:
        "Najczęściej z powodu braku jednej listy polis, za późnego kontaktu, braku danych od klienta i zmian w zespole agentów.",
    },
    {
      question: "Czy przypomnienia o odnowieniu mogą wychodzić automatycznie?",
      answer:
        "Tak, jeśli dotyczą terminu i danych, a klient zgodził się na taki kontakt. Ofertę i rekomendację przygotowuje agent.",
    },
    {
      question: "Jak sprawdzić, ile odnowień traci agencja?",
      answer:
        "Nadając każdemu odnowieniu status i powód utraty, a potem przeglądając raport według agentów, rodzajów ubezpieczeń i towarzystw.",
    },
    {
      question: "Skąd wziąć dane o polisach z wielu towarzystw?",
      answer:
        "Z systemu agencyjnego, zestawień prowizyjnych i importu z portali. Zwykle łączy się kilka źródeł w jednej bazie.",
    },
  ],
});
