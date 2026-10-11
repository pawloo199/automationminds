import { defineArticle } from "../define";

export default defineArticle({
  id: "a90",
  slug: "przeglady-maszyn-w-zakladzie",
  title: "Przeglądy maszyn w zakładzie produkcyjnym: jak ich pilnować bez zeszytu",
  metaTitle: "Przeglądy maszyn w zakładzie produkcyjnym",
  metaDescription:
    "Jak zorganizować przeglądy maszyn w zakładzie: plan przeglądów, listy kontrolne, protokoły, zgłoszenia awarii, części zamienne i informacja dla planowania.",
  primaryKeyword: "przeglądy maszyn w zakładzie produkcyjnym",
  secondaryKeywords: [
    "harmonogram przeglądów maszyn",
    "konserwacja maszyn produkcyjnych",
    "zgłaszanie awarii maszyn",
  ],
  excerpt:
    "W wielu zakładach przeglądy maszyn są zapisane w zeszycie albo w kalendarzu jednej osoby, a o awariach wiadomo tylko tyle, że były. Opisujemy, jak zorganizować plan przeglądów, zgłoszenia awarii i historię maszyn tak, żeby przeglądy odbywały się w terminie, a planowanie znało postoje z wyprzedzeniem.",
  categories: ["zaklady-produkcyjne", "automatyzacja-procesow"],
  publishedAt: "2026-10-06",
  updatedAt: "2026-10-06",
  imageUrl: "https://images.unsplash.com/photo-1748255882537-cbe88b145305?w=1200&q=80",
  imageAlt: "Technik wypełniający listę kontrolną przy panelu sterowania urządzenia",
  summary: [
    "Plan przeglądów powinien być w jednym miejscu, z przypomnieniami dla utrzymania ruchu i informacją dla planowania.",
    "Zgłoszenia awarii z telefonu dają wiedzę o postojach, której zeszyt nie daje.",
    "Historia maszyny pomaga dopasować częstotliwość przeglądów i planować części zamienne.",
    "System pilnuje terminów, a decyzje o maszynach i bezpieczeństwie podejmuje utrzymanie ruchu.",
  ],
  relatedServiceSlugs: ["automatyzacja-w-produkcji", "cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-zakladzie-produkcyjnym", "kalkulacja-kosztow-zlecenia-produkcyjnego", "ai-w-dziale-jakosci"],
  cta: {
    title: "Chcecie mieć przeglądy maszyn pod kontrolą?",
    body: "W 30 minut przejdziemy przez to, jak dziś planujecie przeglądy i zgłaszacie awarie, i pokażemy, od czego zacząć. Rozmowa jest bezpłatna.",
  },
  body: [
    "W wielu zakładach utrzymanie ruchu działa dzięki pamięci kilku doświadczonych osób. Mechanik wie, która prasa wymaga wymiany oleju, która sprężarka hałasuje od tygodnia i gdzie leży zapasowe łożysko. Przeglądy są zapisane w zeszycie, kalendarzu albo arkuszu, a awarie zgłasza się ustnie. Tak to działa, dopóki ta osoba jest w pracy, nie ma urlopu i nie przechodzi na emeryturę.",
    "Skutki takiej organizacji widać w kilku miejscach: przeglądy przesuwane, bo akurat była pilna produkcja, awarie, które można było przewidzieć, części zamienne zamawiane w trybie pilnym, planowanie zaskoczone postojem. Do tego zakład nie wie, ile faktycznie kosztują go awarie, bo nikt tego nie zapisuje.",
    "Poniżej opisujemy, jak zorganizować przeglądy maszyn i zgłoszenia awarii tak, żeby nie zależały od zeszytu i pamięci jednej osoby.",
    "## Rejestr maszyn",
    "Wszystko zaczyna się od rejestru maszyn. Dla każdej maszyny warto zapisać podstawowe dane: nazwę, numer, lokalizację, producenta, rok produkcji, dokumentację techniczną i instrukcję, osobę odpowiedzialną. Do rejestru trafiają też urządzenia, które nie produkują, ale od których produkcja zależy: sprężarki, suwnice, wózki widłowe, instalacje.",
    "Rejestr nie musi być rozbudowany na start. Wystarczy lista z najważniejszymi danymi, którą uzupełnia się przy kolejnych przeglądach. Dobrym zwyczajem jest naklejka z kodem QR na każdej maszynie, który otwiera jej kartę w rejestrze.",
    "## Plan przeglądów",
    "Plan przeglądów powstaje z kilku źródeł: zaleceń producenta z instrukcji, wymagań przepisów dla niektórych urządzeń, na przykład podlegających dozorowi technicznemu, oraz doświadczenia zakładu. Dla każdej maszyny warto określić rodzaje przeglądów, ich częstotliwość i listę czynności.",
    "Częstotliwość może wynikać z kalendarza, na przykład co kwartał, albo z pracy maszyny, na przykład co określoną liczbę motogodzin lub cykli. Przeglądy według pracy maszyny są bliższe rzeczywistemu zużyciu, ale wymagają zapisywania licznika, ręcznie przy przeglądzie albo automatycznie, jeśli maszyna na to pozwala.",
    "Terminy przeglądów wymaganych przepisami ustala zakład na podstawie obowiązujących regulacji i zaleceń producenta. System nie zastępuje tej wiedzy, ale pilnuje, żeby żaden termin nie przepadł.",
    "## Przypomnienia i informacja dla planowania",
    "Przed terminem przeglądu utrzymanie ruchu dostaje zadanie z listą kontrolną, a planowanie informację o planowanym postoju maszyny. Wtedy przegląd nie koliduje z pilnym zleceniem, a jeśli koliduje, decyzja o przesunięciu jest świadoma i zapisana. Przegląd po terminie trafia do kierownika utrzymania ruchu, a nie znika w zeszycie.",
    "[[CTA]]",
    "## Listy kontrolne i protokoły",
    "Lista kontrolna przeglądu to zestaw czynności i punktów do sprawdzenia, z miejscem na wynik i uwagi. Mechanik wypełnia ją na telefonie lub tablecie przy maszynie, dodaje zdjęcia i zapisuje wymienione części. Protokół trafia do historii maszyny automatycznie.",
    "Cyfrowe listy kontrolne mają dwie zalety nad papierowymi. Po pierwsze, nie da się pominąć punktu bez zaznaczenia, dlaczego. Po drugie, wyniki z kolejnych przeglądów można porównać: jeśli luz na prowadnicy rośnie z przeglądu na przegląd, widać to na długo przed awarią.",
    "## Zgłoszenia awarii",
    "Awaria powinna być zgłoszona tak szybko, jak to możliwe, i w sposób, który zostawia ślad. Operator skanuje kod QR na maszynie, opisuje problem jednym zdaniem, dodaje zdjęcie i wysyła. Zgłoszenie trafia do dyżurnego mechanika, a czas postoju liczy się od chwili zgłoszenia. Po naprawie mechanik zapisuje przyczynę, wykonane czynności i użyte części.",
    "Po kilku miesiącach zakład ma dane, których wcześniej nie miał: które maszyny stoją najczęściej, ile trwają postoje, jakie są najczęstsze przyczyny i jakie części się zużywają. Szerzej opisujemy to na stronie [utrzymanie ruchu](/branze/zaklady-produkcyjne/utrzymanie-ruchu).",
    "## Części zamienne",
    "Najdroższa część zamienna to ta, której nie ma w magazynie w chwili awarii. Gdy przy każdej naprawie zapisuje się użyte części, rejestr pokazuje, które części schodzą najczęściej i jaki zapas warto trzymać. Stany minimalne pozwalają automatycznie tworzyć zapotrzebowania do zakupów. O obiegu zakupów piszemy na stronie [zakupy i dostawcy](/branze/zaklady-produkcyjne/zakupy-i-dostawcy).",
    "## Przykład: prasa hydrauliczna",
    "To przykład ilustracyjny. Prasa hydrauliczna ma w planie przegląd kwartalny i półroczny według instrukcji producenta. Tydzień przed przeglądem utrzymanie ruchu dostaje zadanie z listą kontrolną, a planista informację o czterogodzinnym postoju. Planista przesuwa jedno zlecenie na inną maszynę. Mechanik wykonuje przegląd z listą na tablecie, zapisuje wymianę filtra i odnotowuje niewielki wyciek na jednym z przyłączy. Uwaga trafia do historii maszyny jako zadanie do obserwacji. Przy kolejnym przeglądzie mechanik widzi tę uwagę i sprawdza przyłącze w pierwszej kolejności.",
    "## Zeszyt czy rejestr",
    "| Zadanie | Zeszyt lub arkusz | Rejestr z przypomnieniami |\n|---|---|---|\n| Termin przeglądu | Trzeba pamiętać | Zadanie z wyprzedzeniem |\n| Informacja dla planowania | Telefon lub brak | Automatyczna |\n| Protokół | Papier w segregatorze | W historii maszyny |\n| Zgłoszenie awarii | Ustnie | Formularz z czasem i zdjęciem |\n| Części zamienne | Z pamięci | Zużycie i stany minimalne |\n| Koszty postojów | Nieznane | Raport według maszyn |",
    "## Kto za co odpowiada",
    "Rejestr i przypomnienia działają tylko wtedy, gdy jasne jest, kto odpowiada za każdy krok. Kierownik utrzymania ruchu ustala plan przeglądów i listy kontrolne. Mechanik wykonuje przegląd i wypełnia protokół. Planista uwzględnia postoje w planie i, jeśli musi przesunąć przegląd, robi to w systemie z podaniem powodu. Operator zgłasza awarie i drobne nieprawidłowości, zanim staną się awarią.",
    "Warto też ustalić, co dzieje się z uwagami z przeglądów. Wyciek, luz czy nietypowy dźwięk zapisany w protokole powinien stać się zadaniem z terminem, a nie tylko wpisem w historii. Inaczej rejestr zamienia się w cyfrowy zeszyt.",
    "## Jak wprowadzić to na hali",
    "Nowe narzędzie na hali przyjmie się, jeśli będzie szybsze niż dotychczasowy sposób. Formularz zgłoszenia awarii powinien mieć kilka pól i działać na telefonie w rękawicach. Lista kontrolna powinna zawierać tylko to, co faktycznie się sprawdza. Najlepiej zaprojektować formularze razem z mechanikami i operatorami, którzy znają maszyny i wiedzą, co sprawdzają na co dzień, przetestować je na jednym wydziale i poprawić po kilku tygodniach, zanim trafią do całego zakładu.",
    "## Jak to połączyć z kosztami",
    "Dane o postojach i naprawach przydają się poza utrzymaniem ruchu. Pokazują, które maszyny warto wymienić, a w kalkulacjach zleceń pomagają ustalić realne stawki maszyn, o czym piszemy w artykule [kalkulacja kosztów zlecenia produkcyjnego](/poradnik/kalkulacja-kosztow-zlecenia-produkcyjnego). Raport kosztów utrzymania ruchu może powstawać automatycznie, o czym piszemy na stronie [automatyzacja raportów](/uslugi/automatyzacja-raportow).",
    "## Od czego zacząć",
    "Najprościej zacząć od rejestru maszyn i zgłoszeń awarii na jednym wydziale. Po kilku tygodniach dołożyć plan przeglądów z przypomnieniami, a potem części zamienne. Czujniki i dane z maszyn można dodać później, jeśli są dostępne, ale do uporządkowania przeglądów nie są potrzebne. Inne procesy, od których zakłady zaczynają, opisujemy w artykule [co zautomatyzować w zakładzie produkcyjnym](/poradnik/co-zautomatyzowac-w-zakladzie-produkcyjnym), a całe podejście na stronie [automatyzacja zakładu produkcyjnego](/branze/zaklady-produkcyjne).",
  ].join("\n\n"),
  faq: [
    {
      question: "Jak często robić przeglądy maszyn?",
      answer:
        "Według zaleceń producenta, wymagań przepisów dla danego urządzenia i doświadczenia zakładu. Historia awarii pomaga dopasować częstotliwość.",
    },
    {
      question: "Czy potrzebujemy programu CMMS?",
      answer:
        "Nie zawsze. W małych i średnich zakładach często wystarcza rejestr maszyn z przypomnieniami i formularzami. Jeśli macie CMMS, łączymy się z nim.",
    },
    {
      question: "Czy potrzebne są czujniki na maszynach?",
      answer:
        "Nie, żeby zacząć. Przeglądy i zgłoszenia awarii działają bez czujników. Dane z maszyn można dodać później.",
    },
    {
      question: "Czy system ustali terminy przeglądów wymaganych przepisami?",
      answer:
        "Nie. Terminy ustala zakład na podstawie przepisów i instrukcji, a system ich pilnuje i przechowuje protokoły.",
    },
  ],
});
