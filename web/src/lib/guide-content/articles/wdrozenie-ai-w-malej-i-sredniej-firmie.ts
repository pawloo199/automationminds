import { defineArticle } from "../define";

export default defineArticle({
  id: "a16",
  slug: "wdrozenie-ai-w-malej-i-sredniej-firmie",
  title: "Wdrożenie AI w małej i średniej firmie. Plan na pierwsze 90 dni",
  metaTitle: "Wdrożenie AI w małej firmie. Plan na 90 dni",
  metaDescription:
    "Jak wdrożyć AI w małej lub średniej firmie w 90 dni: wybór zastosowań, porządek w danych, pilotaż, zasady dla zespołu i pomiar efektów. Plan krok po kroku.",
  primaryKeyword: "wdrożenie AI w firmie",
  secondaryKeywords: [
    "AI dla MŚP",
    "sztuczna inteligencja w małej firmie",
    "jak wdrożyć AI",
    "konsultacje AI dla firm",
  ],
  excerpt:
    "Wdrożenie AI nie musi być wielkim projektem na rok. Pokazujemy plan na trzy miesiące, po których mała lub średnia firma ma pierwsze działające zastosowanie, zasady dla zespołu i twarde dane, czy warto iść dalej.",
  category: "AI",
  publishedAt: "2026-09-07",
  updatedAt: "2026-09-30",
  imageUrl:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
  imageAlt: "Zespół rozmawiający przy stole o planie wdrożenia",
  summary: [
    "Pierwsze 30 dni to diagnoza: gdzie AI może pomóc, jakie dane są dostępne i które zastosowanie wybrać na start.",
    "Dni 31–60 to przygotowanie danych i pilotaż jednego zastosowania obok obecnego procesu, z mierzeniem jakości.",
    "Dni 61–90 to uruchomienie na stałe, zasady dla zespołu, pomiar efektów i decyzja o kolejnych krokach.",
    "Największe ryzyko to nie technologia, tylko wybór złego zastosowania i brak porządku w danych.",
  ],
  relatedServiceSlugs: [
    "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    "doradztwo-i-optymalizacja-procesow-biznesowych",
    "automatyzacja-w-obsludze-klienta",
  ],
  relatedArticleSlugs: [
    "ai-w-codziennej-pracy-zespolu",
    "porzadek-w-danych-przed-ai-i-automatyzacja",
    "audyt-procesow-w-firmie",
  ],
  cta: {
    title: "Chcesz wdrożyć AI w firmie, ale nie wiesz, od czego zacząć?",
    body: "Pomożemy przejść przez te 90 dni: wybierzemy zastosowanie z największym efektem, przygotujemy dane, przeprowadzimy pilotaż i pokażemy wyniki w liczbach. Zacznijmy od 30-minutowej rozmowy.",
  },
  body: [
    "Właściciel firmy produkcyjnej zatrudniającej kilkadziesiąt osób mówi: „Wszyscy mówią o AI, a my dalej nie wiemy, co z tym zrobić. Kilka osób płaci za ChatGPT z własnej kieszeni, jedna próbowała coś zautomatyzować, ale nie wyszło”. To jedno z najczęstszych zdań, jakie słyszymy od małych i średnich firm.",
    "Problem rzadko leży w technologii. Narzędzia AI są dziś dostępne, stosunkowo tanie i coraz łatwiejsze w użyciu. Brakuje planu: od czego zacząć, jak sprawdzić, czy działa, i co zrobić, żeby jeden udany eksperyment zamienił się w coś, z czego korzysta cały zespół.",
    "Poniżej plan na pierwsze 90 dni wdrożenia AI w małej lub średniej firmie. Nie jest to jedyna droga, ale taka, która w praktyce daje wymierny efekt i ogranicza ryzyko.",
    "## Zanim zaczniesz: jeden cel i jedna osoba",
    "Zanim ruszy pierwszy etap, ustal dwie rzeczy. Pierwsza to cel: co ma się zmienić po trzech miesiącach? Nie „wdrożyć AI”, tylko np. „skrócić czas odpowiedzi na zapytania” albo „przestać ręcznie przepisywać zamówienia z maili”. Druga to osoba po stronie firmy, która odpowiada za projekt i ma czas, żeby się nim zajmować kilka godzin w tygodniu.",
    "Bez celu nie da się ocenić, czy wdrożenie się udało. Bez osoby odpowiedzialnej projekt staje przy pierwszej decyzji, którą trzeba podjąć.",
    "## Dni 1–30: diagnoza i wybór zastosowania",
    "Pierwszy miesiąc to rozpoznanie. Zamiast od razu kupować narzędzia, sprawdzasz, gdzie AI może realnie pomóc.",
    "### Przegląd procesów",
    "Rozmowy z osobami z różnych działów: co zabiera im najwięcej czasu, co jest powtarzalne, gdzie czytają i piszą dużo tekstu. AI najlepiej sprawdza się tam, gdzie jest dużo tekstu i powtarzalnych decyzji: maile, dokumenty, zgłoszenia, notatki, opisy. Jak wygląda taki przegląd, opisujemy w artykule [audyt procesów w firmie](/poradnik/audyt-procesow-w-firmie).",
    "### Lista kandydatów",
    "Z przeglądu powstaje lista zastosowań. Typowe dla małych i średnich firm to: sortowanie maili i zgłoszeń, odczyt danych z dokumentów, notatki ze spotkań, szkice odpowiedzi i ofert, asystent odpowiadający na pytania na podstawie firmowych dokumentów, porządkowanie danych w CRM. Każde z nich opisujemy w artykule [AI w codziennej pracy zespołu](/poradnik/ai-w-codziennej-pracy-zespolu).",
    "### Wybór jednego zastosowania",
    "Z listy wybierasz jedno zastosowanie na pilotaż. Dobry kandydat:",
    "- jest częsty, bo przy rzadkich zadaniach efekt będzie niewielki,\n- ma jasno określony wynik, który da się ocenić (dobrze posortowany mail, poprawnie odczytana faktura),\n- nie jest krytyczny, więc błąd w pilotażu nie zaszkodzi klientom,\n- ma dostępne dane, na których da się przetestować rozwiązanie.",
    "### Przegląd danych",
    "Przy wybranym zastosowaniu sprawdzasz dane. Czy maile są w jednej skrzynce, czy w kilku? Czy firmowe procedury są aktualne? Czy klienci w CRM nie są zdublowani? Od tego zależy, ile pracy będzie wymagał kolejny etap. Szerzej piszemy o tym w tekście [dlaczego AI i automatyzacja nie działają na bałaganie w danych](/poradnik/porzadek-w-danych-przed-ai-i-automatyzacja).",
    "## Dni 31–60: przygotowanie danych i pilotaż",
    "Drugi miesiąc to praca na konkretach. Tu powstaje pierwsze działające rozwiązanie.",
    "### Przygotowanie danych",
    "Porządkujesz dane potrzebne do pilotażu, i tylko te. Jeśli AI ma odpowiadać na pytania na podstawie procedur, aktualizujesz procedury. Jeśli ma sortować maile, zbierasz próbkę maili z ostatnich tygodni i oznaczasz, jak powinny zostać posortowane. Ta próbka posłuży później do oceny jakości.",
    "### Budowa przepływu",
    "Rozwiązanie buduje się zwykle jako przepływ: dane wchodzą (mail, dokument, pytanie), model AI coś z nimi robi (klasyfikuje, odczytuje, streszcza), wynik trafia dalej (do CRM, do bazy, do człowieka). Do budowy takich przepływów służą narzędzia typu Make czy n8n, połączone z modelem przez API. Jak wybrać platformę, piszemy w artykule [jak wybrać narzędzie do automatyzacji](/poradnik/jak-wybrac-narzedzie-do-automatyzacji).",
    "### Pilotaż obok obecnego procesu",
    "Rozwiązanie działa równolegle z tym, jak zespół pracuje dziś. Ludzie robią swoje, AI robi swoje, a wyniki są porównywane. Dzięki temu nikt nie ryzykuje, a po kilku tygodniach wiadomo, jak często AI się myli i w jakich sytuacjach.",
    "[[CTA]]",
    "## Dni 61–90: uruchomienie, zasady i pomiar",
    "Trzeci miesiąc to przejście z eksperymentu do codziennej pracy.",
    "### Uruchomienie na stałe",
    "Jeśli wyniki pilotażu są dobre, rozwiązanie zaczyna działać na stałe. Człowiek zostaje w pętli tam, gdzie AI nie jest pewne albo gdzie błąd byłby kosztowny. Reszta przechodzi automatycznie. Pierwsze tygodnie warto uważnie obserwować i poprawiać przepływ na bieżąco.",
    "### Zasady dla zespołu",
    "Równolegle ustalasz zasady korzystania z AI w całej firmie. Nie tylko przy wdrożonym rozwiązaniu, ale ogólnie: z jakich narzędzi wolno korzystać, na jakich kontach, jakich danych nie wolno wklejać, które wyniki zawsze sprawdza człowiek. Krótkie szkolenie z tych zasad zamyka temat prywatnych kont i danych klientów w darmowych czatach. Kwestie ochrony danych opisujemy w artykule [RODO a automatyzacja procesów](/poradnik/rodo-a-automatyzacja-procesow).",
    "### Pomiar efektów",
    "Na koniec trzeciego miesiąca porównujesz wyniki z tym, co było przed startem: czas obsługi, liczbę błędów, czas odpowiedzi, opinie zespołu. Jak policzyć zwrot z wdrożenia, pokazujemy w poradniku [jak mierzyć ROI automatyzacji](/poradnik/jak-mierzyc-roi-automatyzacji).",
    "### Decyzja o kolejnych krokach",
    "Po 90 dniach masz trzy możliwe wnioski. Rozwiązanie działa i warto je rozszerzyć, np. na kolejne działy. Działa, ale trzeba je poprawić. Albo nie działa i lepiej wybrać inne zastosowanie. Każdy z tych wniosków jest wartościowy, bo opiera się na danych, a nie na wrażeniach.",
    "## Przykład: 90 dni z asystentem do obsługi zapytań",
    "Tak mógłby wyglądać ten plan w firmie handlowej, która codziennie dostaje kilkadziesiąt maili z pytaniami o dostępność, ceny i terminy dostaw.",
    "W pierwszym miesiącu okazuje się, że najwięcej czasu zabiera odpowiadanie na powtarzalne pytania, a informacje potrzebne do odpowiedzi są w cenniku, stanach magazynowych i kilku dokumentach z zasadami dostaw. Dokumenty są częściowo nieaktualne. Wybrane zastosowanie: szkice odpowiedzi przygotowywane przez AI na podstawie aktualnych danych.",
    "W drugim miesiącu zespół aktualizuje zasady dostaw i cennik, a przepływ łączy skrzynkę mailową, model AI i dane o stanach. Przez trzy tygodnie AI przygotowuje szkice, ale odpowiedzi wysyłają ludzie po staremu, porównując je ze szkicami.",
    "W trzecim miesiącu szkice pojawiają się bezpośrednio w skrzynce, a pracownik je poprawia i wysyła. Pytania, przy których AI nie ma pewności, trafiają do osoby bez szkicu. Na koniec zespół porównuje czas odpowiedzi i liczbę poprawek ze stanem sprzed startu. To przykład, ale taki schemat pasuje do wielu firm z dużą liczbą podobnych zapytań.",
    "## Plan 90 dni w skrócie",
    "| Okres | Co się dzieje | Wynik |\n|---|---|---|\n| Dni 1–30 | Przegląd procesów, lista zastosowań, wybór jednego, przegląd danych | Wybrane zastosowanie i ocena gotowości danych |\n| Dni 31–60 | Przygotowanie danych, budowa przepływu, pilotaż obok obecnego procesu | Działające rozwiązanie i wyniki porównania |\n| Dni 61–90 | Uruchomienie na stałe, zasady dla zespołu, pomiar efektów | Rozwiązanie w codziennej pracy i decyzja, co dalej |",
    "## Najczęstsze pułapki",
    "- Zaczynanie od narzędzia, a nie od problemu. Firma kupuje licencje dla wszystkich i czeka, aż ludzie sami znajdą zastosowanie.\n- Wybór zbyt ambitnego zastosowania na start, np. pełna automatyzacja obsługi klienta bez udziału człowieka.\n- Pomijanie danych. Asystent podłączony do nieaktualnych procedur podaje nieaktualne odpowiedzi.\n- Brak pomiaru przed startem, przez co po 90 dniach nie wiadomo, czy coś się poprawiło.\n- Brak zasad dla zespołu i dane klientów wklejane do prywatnych kont.",
    "O innych pułapkach pierwszych wdrożeń, nie tylko AI, piszemy w artykule [7 błędów przy pierwszym wdrożeniu automatyzacji](/poradnik/bledy-przy-pierwszym-wdrozeniu-automatyzacji).",
    "> [Z praktyki]\n> Pierwsze zastosowanie AI ma przede wszystkim przekonać zespół. Lepiej wybrać coś mniejszego, co zadziała dobrze i od razu ułatwi ludziom pracę, niż ambitny projekt, który będzie się ciągnął miesiącami.",
    "## Ile to kosztuje",
    "Koszt zależy od zastosowania i tego, ile pracy wymagają dane. Na budżet składają się: diagnoza, przygotowanie danych, budowa przepływu i pilotaż, a potem koszty stałe, czyli opłaty za korzystanie z modelu AI i platformy do automatyzacji oraz utrzymanie. Przy jednym zastosowaniu w małej firmie koszty stałe są zwykle niewielkie. Więcej o tym, z czego składa się wycena, piszemy w artykule [ile kosztuje automatyzacja procesów w małej firmie](/poradnik/ile-kosztuje-automatyzacja-procesow).",
    "## Z kim przejść te 90 dni",
    "Plan da się przeprowadzić samodzielnie, jeśli w firmie jest osoba z czasem i doświadczeniem w automatyzacji. Najczęściej jednak małe i średnie firmy korzystają z pomocy z zewnątrz przy diagnozie i budowie pierwszego rozwiązania, a potem przejmują utrzymanie albo zostają z partnerem na stałe.",
    "Takie wdrożenia prowadzimy od diagnozy po uruchomienie, przy [automatyzacji oraz AI w niestandardowych procesach](/uslugi/automatyzacja-oraz-ai-w-niestandardowych-procesach) i [doradztwie i optymalizacji procesów](/uslugi/doradztwo-i-optymalizacja-procesow-biznesowych). Jeśli pierwszym zastosowaniem ma być obsługa zgłoszeń klientów, zajrzyj też na stronę [automatyzacja w obsłudze klienta](/uslugi/automatyzacja-w-obsludze-klienta).",
  ].join("\n\n"),
  faq: [
    {
      question: "Ile trwa wdrożenie AI w małej firmie?",
      answer:
        "Pierwsze zastosowanie, od diagnozy przez pilotaż do uruchomienia na stałe, zajmuje zwykle około trzech miesięcy. Proste zastosowania, np. notatki ze spotkań, można uruchomić szybciej. Kolejne wdrożenia idą sprawniej, bo firma ma już zasady, dane i doświadczenie.",
    },
    {
      question: "Od czego zacząć wdrażanie AI w firmie?",
      answer:
        "Od celu i przeglądu procesów. Trzeba ustalić, co ma się zmienić, znaleźć częste i powtarzalne zadania z dużą ilością tekstu, wybrać jedno z nich na pilotaż i sprawdzić, czy dane są gotowe. Zakup narzędzi to dopiero kolejny krok.",
    },
    {
      question: "Jakie zastosowania AI są najlepsze na start dla MŚP?",
      answer:
        "Sortowanie maili i zgłoszeń, odczyt danych z dokumentów, notatki ze spotkań, szkice odpowiedzi i ofert oraz asystent odpowiadający na pytania na podstawie firmowych dokumentów. Są częste, mają jasny wynik i nie wymagają oddawania AI ważnych decyzji.",
    },
    {
      question: "Czy do wdrożenia AI potrzebny jest dział IT?",
      answer:
        "Nie. Małe i średnie firmy wdrażają AI najczęściej z pomocą zewnętrznego partnera, który buduje rozwiązanie i uczy zespół z niego korzystać. Po stronie firmy potrzebna jest osoba odpowiedzialna za projekt, która zna procesy i ma czas na decyzje.",
    },
    {
      question: "Jak sprawdzić, czy wdrożenie AI się opłaciło?",
      answer:
        "Przed startem zmierz proces: czas obsługi, liczbę błędów, czas odpowiedzi. Po wdrożeniu porównaj te same wskaźniki i dolicz koszty stałe, takie jak opłaty za model AI i utrzymanie. Pilotaż prowadzony obok obecnego procesu daje wiarygodne dane do takiego porównania.",
    },
    {
      question: "Co zrobić, jeśli pilotaż AI nie przyniesie oczekiwanych wyników?",
      answer:
        "Przeanalizować, dlaczego. Najczęstsze przyczyny to nieuporządkowane dane, źle dobrane zastosowanie albo zbyt ambitny zakres. Czasem wystarczy poprawić dane lub zawęzić zadanie, czasem lepiej wybrać inne zastosowanie z listy. Pilotaż prowadzony obok obecnego procesu sprawia, że taki wynik nie kosztuje firmy wiele.",
    },
  ],
});
