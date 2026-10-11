import { defineArticle } from "../define";

export default defineArticle({
  id: "a34",
  slug: "ksef-w-pracy-biura-rachunkowego",
  title: "KSeF w pracy biura rachunkowego: organizacja, uprawnienia i automatyzacja",
  metaTitle: "KSeF a biuro rachunkowe: jak zorganizować pracę",
  metaDescription:
    "Jak biuro rachunkowe może zorganizować pracę z KSeF dla wielu klientów: uprawnienia, pobieranie faktur, dokumenty spoza KSeF, komunikacja i automatyzacja.",
  primaryKeyword: "KSeF a biuro rachunkowe",
  secondaryKeywords: [
    "KSeF dla biur rachunkowych",
    "uprawnienia KSeF biuro rachunkowe",
    "pobieranie faktur z KSeF dla klientów",
  ],
  excerpt:
    "KSeF zmienił sposób, w jaki faktury trafiają do biura, ale nie usunął pracy z dokumentami. Opisujemy, jak zorganizować pracę biura z KSeF dla wielu klientów i które elementy warto zautomatyzować.",
  categories: ["biura-rachunkowe", "narzedzia-i-integracje"],
  publishedAt: "2026-10-11",
  updatedAt: "2026-10-11",
  imageUrl: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?w=1200&q=80",
  imageAlt: "Stos białych dokumentów na biurku",
  summary: [
    "KSeF porządkuje faktury krajowe, ale biuro nadal pracuje także z dokumentami spoza systemu.",
    "Podstawą pracy biura w KSeF są uprawnienia nadane przez klientów. Warto mieć ich listę i pilnować zmian.",
    "Największy problem to rozproszenie: faktury w KSeF, reszta dokumentów w mailach. Dobrze działa jedno zestawienie dokumentów klienta.",
    "Pobieranie faktur, wykrywanie duplikatów i statusy klientów da się zautomatyzować obok programu księgowego.",
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "integracje-systemow", "cyfryzacja-danych-i-dokumentow"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-biurze-rachunkowym", "integracja-crm-z-fakturowaniem", "cyfryzacja-danych-w-firmie"],
  cta: {
    title: "Chcecie uporządkować pracę biura z KSeF?",
    body: "Sprawdzimy, co już robi wasz program księgowy, i wskażemy, co warto zautomatyzować obok niego. Pierwsza rozmowa trwa 30 minut i jest bezpłatna.",
  },
  body: [
    "Krajowy System e-Faktur miał uprościć pracę z fakturami i w wielu miejscach to robi. Faktury krajowe są w jednym systemie, w ustandaryzowanym formacie, bez skanowania i przepisywania. Dla biura rachunkowego, które obsługuje kilkuset klientów, KSeF oznacza jednak także nowe zadania: uprawnienia, pobieranie faktur dla każdego klienta, łączenie ich z dokumentami spoza systemu i odpowiadanie klientom na pytania.",
    "W tym artykule opisujemy, jak zorganizować pracę biura z KSeF i które jej elementy warto zautomatyzować. Nie opisujemy szczegółowo przepisów ani harmonogramu obowiązków, bo te zmieniają się i najlepiej sprawdzać je w aktualnych materiałach Ministerstwa Finansów. Skupiamy się na organizacji pracy.",
    "## Co KSeF zmienia w pracy biura",
    "Przed KSeF faktury trafiały do biura od klientów: mailem, na papierze, przez portale. Teraz faktury krajowe biuro może pobrać bezpośrednio z KSeF, jeśli klient nadał mu uprawnienia. To duża zmiana: biuro nie musi czekać, aż klient prześle fakturę, i ma pewność, że dane są zgodne z tym, co wystawił sprzedawca.",
    "Jednocześnie KSeF nie obejmuje wszystkiego. Do biura nadal trafiają paragony, faktury od zagranicznych dostawców, rachunki, dokumenty kadrowe, wyciągi bankowe i inne dokumenty. Biuro pracuje więc na dwóch strumieniach: fakturach z KSeF i dokumentach spoza systemu. Problem pojawia się, gdy te strumienie żyją w osobnych miejscach.",
    "## Uprawnienia: podstawa pracy biura",
    "Biuro pracuje w KSeF na podstawie uprawnień nadanych przez klientów. W praktyce warto zadbać o kilka rzeczy:",
    "- **Lista uprawnień.** Którzy klienci nadali biuru uprawnienia, w jakim zakresie i od kiedy. Bez takiej listy problemy wychodzą dopiero wtedy, gdy pobieranie faktur przestaje działać.\n- **Instrukcja dla klientów.** Krótki opis, jak nadać biuru uprawnienia, oszczędza wielu telefonów przy nowych klientach.\n- **Zmiany w zespole.** Gdy zmienia się księgowa prowadząca klienta albo ktoś odchodzi z biura, uprawnienia i dostępy trzeba zaktualizować.\n- **Koniec współpracy.** Gdy klient odchodzi, biuro powinno przestać pobierać jego faktury, a dostęp powinien zostać uporządkowany.",
    "Te zadania są proste, ale przy kilkuset klientach łatwo o nich zapomnieć. To dobry kandydat do automatyzacji: system może prowadzić listę klientów i uprawnień oraz informować zespół, gdy pobieranie dla klienta się nie powiodło.",
    "## Procedury w biurze",
    "KSeF dobrze jest opisać w procedurach biura, nawet krótko. Kto odpowiada za uprawnienia klientów, kto sprawdza, czy pobieranie działa, co robić, gdy KSeF jest niedostępny, jak postępować z fakturą, która w KSeF nie występuje, a klient twierdzi, że ją otrzymał. Takie sytuacje zdarzają się rzadko, ale gdy się zdarzają, zespół traci czas na ustalanie, co robić.",
    "Procedury przydają się też przy wdrażaniu nowych osób. Nowa księgowa szybciej odnajdzie się w pracy, jeśli wie, skąd biorą się faktury klientów, gdzie są dokumenty spoza KSeF i jak sprawdzić, czy klient jest kompletny. Jeśli biuro nie ma jeszcze opisanych procesów, dobrym początkiem jest ich rozrysowanie, o czym piszemy w artykule [od czego zacząć mapowanie procesów](/poradnik/od-czego-zaczac-mapowanie-procesow).",
    "## Pobieranie faktur dla wielu klientów",
    "Część programów księgowych pobiera faktury z KSeF dla klientów biura, inne robią to tylko częściowo albo wymagają ręcznego uruchamiania dla każdego klienta. Zanim biuro zacznie budować coś nowego, warto sprawdzić, co dokładnie robi jego program:",
    "- czy pobiera faktury zakupowe i sprzedażowe,\n- czy robi to automatycznie, czy po kliknięciu,\n- czy obsługuje wszystkich klientów, czy tylko wybranych,\n- czy informuje o problemach z pobieraniem.",
    "Jeśli program robi wszystko, czego potrzebujecie, nie ma sensu tego dublować. Jeśli czegoś brakuje, automatyzacja może uzupełnić tylko te elementy. Opisujemy to na stronie [KSeF w biurze rachunkowym](/branze/biura-rachunkowe/ksef).",
    "[[CTA]]",
    "## Jedno zestawienie dokumentów klienta",
    "Najczęstszy problem, który widzimy w biurach po wejściu KSeF, to rozproszenie. Faktury z KSeF są w programie księgowym albo w osobnym folderze, a reszta dokumentów w mailach, komunikatorach i na dysku. Księgowa, żeby ocenić, czy klient jest kompletny za dany miesiąc, musi sprawdzić kilka miejsc.",
    "Dobrze działa jedno zestawienie dokumentów klienta za miesiąc, w którym widać faktury z KSeF i dokumenty przesłane przez klienta. Takie zestawienie może aktualizować się automatycznie: faktury z KSeF dopisują się po pobraniu, dokumenty od klienta po przesłaniu. O zbieraniu dokumentów spoza KSeF piszemy na stronie [dokumenty od klientów biura](/branze/biura-rachunkowe/dokumenty-od-klientow).",
    "## Duplikaty",
    "Klienci przyzwyczajeni do przesyłania faktur do biura często robią to dalej, także z fakturami, które są już w KSeF. Bez kontroli ta sama faktura może trafić do ksiąg dwa razy. Prosty mechanizm porównujący numer faktury, NIP sprzedawcy i kwoty z fakturami z KSeF pozwala oznaczyć duplikaty, zanim ktoś je zaksięguje.",
    "Drugie rozwiązanie to komunikacja z klientami: informacja, których faktur nie trzeba już przesyłać, bo biuro pobiera je z KSeF. Zmniejsza to liczbę duplikatów, ale ich nie eliminuje, więc kontrola i tak jest potrzebna.",
    "## Komunikacja z klientami o KSeF",
    "KSeF zmienił też pytania klientów. Klienci pytają, czy biuro widzi ich faktury, czy muszą jeszcze coś przesyłać, co zrobić z fakturą zagraniczną. Część tych pytań można obsłużyć automatycznie: informacją, jakie faktury biuro pobrało za dany miesiąc, albo krótkim przewodnikiem po tym, które dokumenty klient nadal musi przesłać. O automatyzacji komunikacji piszemy na stronie [komunikacja z klientami](/branze/biura-rachunkowe/komunikacja-z-klientami).",
    "## Faktury sprzedażowe klientów",
    "KSeF daje biuru dostęp nie tylko do faktur zakupowych, ale też sprzedażowych klientów, w zależności od nadanych uprawnień. To ułatwia pracę przy klientach, którzy dotąd przesyłali zestawienia sprzedaży z opóźnieniem. Biuro widzi sprzedaż na bieżąco i może wcześniej zauważyć np. brak faktur w danym miesiącu albo nietypowo wysokie kwoty, które warto omówić z klientem przed zamknięciem.",
    "Takie obserwacje też można zautomatyzować: krótki raport dla księgowej o klientach, u których sprzedaż w KSeF wyraźnie różni się od poprzednich miesięcy, pomaga zadać pytanie klientowi wcześniej, a nie w ostatnim dniu przed terminem. O łączeniu danych o sprzedaży z innymi systemami piszemy w artykule [integracja CRM z fakturowaniem](/poradnik/integracja-crm-z-fakturowaniem).",
    "## Co zautomatyzować w pracy z KSeF",
    "| Zadanie | Ręcznie | Po automatyzacji |\n|---|---|---|\n| Pobieranie faktur | Logowanie dla każdego klienta | Regularnie dla wszystkich klientów z uprawnieniami |\n| Uprawnienia | Sprawdzane, gdy coś nie działa | Lista klientów i informacja o problemach |\n| Dokumenty spoza KSeF | Osobno, w mailach | W jednym zestawieniu z fakturami z KSeF |\n| Duplikaty | Wychodzą przy księgowaniu | Oznaczane przed wprowadzeniem |\n| Pytania klientów | Telefon i sprawdzanie | Informacja o pobranych fakturach |",
    "Większość tych elementów to klasyczna automatyzacja, która działa obok programu księgowego. Jeśli chcecie zobaczyć, jak takie połączenia buduje się technicznie, opisujemy to na stronie [n8n i KSeF](/narzedzia/n8n/ksef), a szerszy przegląd procesów do automatyzacji w biurze znajdziecie w artykule [co zautomatyzować w biurze rachunkowym](/poradnik/co-zautomatyzowac-w-biurze-rachunkowym).",
  ].join("\n\n"),
  faq: [
    {
      question: "Czy biuro rachunkowe może pobierać faktury klientów z KSeF?",
      answer:
        "Tak, na podstawie uprawnień nadanych przez klienta w KSeF. Zakres pracy biura w systemie zależy od tych uprawnień.",
    },
    {
      question: "Czy po wejściu KSeF klienci nadal muszą przesyłać dokumenty do biura?",
      answer:
        "Tak, gdy chodzi o dokumenty spoza KSeF, np. paragonów, faktur zagranicznych, rachunków czy dokumentów kadrowych. Faktur krajowych z KSeF zwykle nie muszą przesyłać.",
    },
    {
      question: "Jak uniknąć podwójnego zaksięgowania faktury?",
      answer:
        "Porównując faktury przesłane przez klienta z fakturami pobranymi z KSeF po numerze, NIP sprzedawcy i kwotach, i oznaczając duplikaty przed księgowaniem.",
    },
    {
      question: "Czy program księgowy wystarczy do pracy z KSeF?",
      answer:
        "Zależy od programu. Część programów pobiera faktury dla wszystkich klientów automatycznie, inne tylko częściowo. Warto sprawdzić, co robi wasz program, i uzupełnić tylko brakujące elementy.",
    },
    {
      question: "Co w pracy biura z KSeF można zautomatyzować?",
      answer:
        "Pobieranie faktur dla wielu klientów, listę uprawnień i informacje o problemach, jedno zestawienie dokumentów klienta, wykrywanie duplikatów i informacje dla klientów o pobranych fakturach.",
    },
  ],
});
