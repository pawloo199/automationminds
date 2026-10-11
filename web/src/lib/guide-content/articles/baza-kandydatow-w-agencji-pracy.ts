import { defineArticle } from "../define";

export default defineArticle({
  id: "a81",
  slug: "baza-kandydatow-w-agencji-pracy",
  title: "Baza kandydatów w agencji pracy: jak sprawić, żeby pracowała dla agencji",
  metaTitle: "Baza kandydatów w agencji pracy: jak ją uporządkować",
  metaDescription:
    "Jak zbudować i utrzymać bazę kandydatów w agencji pracy: jedno miejsce na aplikacje, dane z CV, duplikaty, dostępność, zgody i wyszukiwanie po wymaganiach.",
  primaryKeyword: "baza kandydatów",
  secondaryKeywords: [
    "baza CV w agencji pracy",
    "zarządzanie bazą kandydatów",
    "porządek w bazie kandydatów",
  ],
  excerpt:
    "Wiele agencji ma bazę z tysiącami kandydatów, a mimo to dla każdego zlecenia publikuje nowe ogłoszenie. Powód jest prosty: bazy nie da się przeszukać. Opisujemy, jak ją uporządkować, utrzymać aktualną i zgodną z zasadami ochrony danych.",
  categories: ["agencje-pracy", "dane-i-cyfryzacja"],
  publishedAt: "2026-08-07",
  updatedAt: "2026-08-07",
  imageUrl: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1200&q=80",
  imageAlt: "Dwie osoby rozmawiają przy stole podczas spotkania rekrutacyjnego",
  summary: [
    "Baza kandydatów ma wartość tylko wtedy, gdy da się ją przeszukać po wymaganiach zleceń.",
    "Podstawą są uporządkowane pola: uprawnienia, języki, lokalizacja, dostępność, doświadczenie.",
    "Aplikacje ze wszystkich kanałów powinny trafiać do jednej bazy, bez duplikatów.",
    "Zgody kandydatów trzeba pilnować z datą, a dane usuwać, gdy agencja nie ma podstawy, żeby je przechowywać.",
  ],
  relatedServiceSlugs: ["porzadkowanie-i-strukturyzowanie-danych", "projektowanie-baz-danych", "automatyzacja-dla-hr"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-agencji-pracy", "obsadzanie-zlecen-w-agencji-pracy", "porzadek-w-danych-przed-ai-i-automatyzacja"],
  cta: {
    title: "Chcecie uporządkować bazę kandydatów?",
    body: "Przejrzymy waszą bazę i kanały aplikacji i zaproponujemy, jak ją uporządkować, żeby rekruterzy mogli szybko znaleźć kandydatów do zleceń.",
  },
  body: [
    "Baza kandydatów to jeden z najcenniejszych zasobów agencji pracy. Każdy kandydat, który kiedyś aplikował, to potencjalny pracownik przy kolejnym zleceniu. Kandydat, który już pracował u klienta agencji, to ktoś, kogo można zaproponować szybciej niż nową osobę z ogłoszenia. Teoretycznie im większa baza, tym szybciej agencja obsadza zlecenia.",
    "W praktyce wiele agencji ma bazę z tysiącami kandydatów, a dla każdego zlecenia i tak publikuje nowe ogłoszenie. Powód jest prosty: bazy nie da się przeszukać. CV są zapisane jako pliki, dane są niekompletne, ten sam kandydat jest zapisany kilka razy, a nikt nie wie, kto jest teraz dostępny. W tym artykule opisujemy, jak to zmienić.",
    "## Jedno miejsce na wszystkie aplikacje",
    "Pierwszy krok to zebranie aplikacji w jednym miejscu. Kandydaci aplikują przez portale, maile, formularz na stronie, komunikatory, czasem przychodzą do biura. Jeśli każdy kanał trafia gdzie indziej, baza zawsze będzie niekompletna. Automatyzacja zbiera aplikacje ze wszystkich kanałów i zapisuje je w bazie, w systemie rekrutacyjnym lub obok niego.",
    "## Pola, po których da się szukać",
    "CV zapisane jako plik jest prawie bezużyteczne do wyszukiwania. Żeby znaleźć kandydatów do zlecenia, baza potrzebuje uporządkowanych pól. W agencji pracy tymczasowej najczęściej są to:",
    "- uprawnienia, np. na wózki widłowe, elektryczne, prawo jazdy,\n- języki i poziom ich znajomości,\n- lokalizacja i gotowość do dojazdu lub przeprowadzki,\n- dostępność: od kiedy, jakie zmiany, na jak długo,\n- doświadczenie w branżach i rodzajach pracy,\n- historia pracy w agencji: u jakich klientów, z jakimi uwagami koordynatora.",
    "Pola warto ustalić z rekruterami. To oni wiedzą, czego szukają przy zleceniach. Pola z listą wartości, np. lista uprawnień, są lepsze niż tekst, bo pozwalają na precyzyjne wyszukiwanie.",
    "## Odczyt danych z CV",
    "Przepisywanie danych z CV do pól bazy to praca, której rekruterzy zwykle nie mają czasu wykonywać. Tu bardzo pomaga AI: odczytuje CV w różnych formatach i językach i uzupełnia pola. Rekruter sprawdza wynik, a wątpliwe pola są oznaczone. AI zapisuje fakty z CV, a nie ocenia kandydata. Opisujemy to na stronie [kandydaci i baza CV](/branze/agencje-pracy/kandydaci), a granice AI w rekrutacji w artykule [AI w rekrutacji](/poradnik/ai-w-rekrutacji).",
    "## Duplikaty",
    "Ten sam kandydat aplikuje kilka razy, z różnych portali, z innym mailem albo numerem telefonu. Bez kontroli duplikatów baza puchnie, a rekruter kontaktuje się z tą samą osobą kilka razy. System porównuje nowe aplikacje z istniejącymi kandydatami i łączy je, aktualizując dane. Połączenia niepewne trafiają do sprawdzenia, żeby nie połączyć dwóch różnych osób.",
    "[[CTA]]",
    "## Dostępność",
    "Najczęstszy problem przy korzystaniu z bazy to nieaktualna dostępność. Kandydat, który rok temu szukał pracy, dziś może już pracować. Dlatego warto regularnie pytać kandydatów o dostępność, np. krótką wiadomością co kilka miesięcy z linkiem do aktualizacji. Kandydaci, którzy odpowiedzą, mają aktualne dane, a ci, którzy nie odpowiadają, mogą być oznaczeni jako nieaktywni.",
    "Szczególnie ważni są pracownicy, którym kończy się przydział u klienta. To osoby, które znają pracę w agencji i są dostępne od razu. System może przypominać rekruterowi o nich i podpowiadać otwarte zlecenia. Opisujemy to w artykule [obsadzanie zleceń w agencji pracy](/poradnik/obsadzanie-zlecen-w-agencji-pracy).",
    "## Zgody i przechowywanie danych",
    "Baza kandydatów to dane osobowe. Agencja może je przechowywać tylko wtedy, gdy ma do tego podstawę, np. zgodę kandydata na udział w przyszłych rekrutacjach. Zgody warto zapisywać przy kandydacie z datą i zakresem. Przed wygaśnięciem zgody kandydat może dostać prośbę o jej odnowienie, a jeśli jej nie odnowi, dane są usuwane według zasad agencji.",
    "Taki porządek chroni agencję przy kontroli i przy pytaniach kandydatów o ich dane. Ogólne zasady opisujemy w artykule [RODO a automatyzacja procesów](/poradnik/rodo-a-automatyzacja-procesow).",
    "## Wyszukiwanie po wymaganiach",
    "Gdy baza ma uporządkowane pola i aktualną dostępność, rekruter może przy nowym zleceniu zacząć od wyszukiwania w bazie. System pokazuje kandydatów spełniających wymagania formalne, a rekruter przegląda listę i wybiera osoby do kontaktu. Do wybranych osób trafia wiadomość z pytaniem o dostępność, w ich języku.",
    "Ważne, żeby wyszukiwanie opierało się na wymaganiach związanych z pracą, ustalonych przez rekrutera, a nie na cechach, które mogą prowadzić do dyskryminacji. Lista to punkt startu, a nie ranking.",
    "## Porównanie: baza dziś i po uporządkowaniu",
    "| Element | Typowo | Po uporządkowaniu |\n|---|---|---|\n| Aplikacje | W kilku kanałach | W jednej bazie |\n| Dane z CV | W plikach | W polach, po których da się szukać |\n| Duplikaty | Częste | Łączone |\n| Dostępność | Nieaktualna | Regularnie aktualizowana |\n| Zgody | Trudne do śledzenia | Z datą i odnowieniem |\n| Zlecenia | Nowe ogłoszenie | Najpierw baza |",
    "## Historia pracy w agencji",
    "Dla agencji pracy tymczasowej szczególnie cenna jest historia pracy kandydata w agencji: u jakich klientów pracował, jak długo, czy klient chciałby go ponownie, czy pracownik chciałby wrócić. Te informacje zapisuje koordynator po zakończeniu przydziału, w kilku polach. Przy kolejnym zleceniu u tego samego klienta rekruter od razu widzi osoby, które klient zna i ceni. To często najszybsza droga do obsadzenia.",
    "Uwagi koordynatorów powinny dotyczyć pracy, a nie cech osobistych. Warto ustalić, jakie informacje są zapisywane, i przeszkolić z tego zespół, żeby baza nie zawierała ocen, które mogłyby być dyskryminujące.",
    "## Komunikacja z bazą",
    "Kandydaci w bazie nie powinni słyszeć od agencji tylko wtedy, gdy jest dla nich zlecenie. Krótka wiadomość co kilka miesięcy, z pytaniem o dostępność i informacją o rodzajach zleceń, które agencja prowadzi, utrzymuje kontakt. Kandydaci, którzy czują się zauważeni, chętniej odpowiadają, gdy pojawi się praca.",
    "Takie wiadomości mogą wychodzić automatycznie, w języku kandydata, a odpowiedzi od razu aktualizują dostępność w bazie. Rekruter nie musi o nich pamiętać.",
    "## Jakość danych w czasie",
    "Nawet uporządkowana baza z czasem się starzeje: kandydaci zmieniają numery telefonów, przeprowadzają się, zdobywają nowe uprawnienia. Prosty raport jakości, pokazujący kandydatów bez aktualnej dostępności, z brakującymi polami albo z wygasającymi zgodami, pozwala utrzymać bazę w dobrym stanie bez dużego wysiłku.",
    "Raport może trafiać do rekrutera raz w miesiącu.",
    "## Narzędzie na bazę",
    "Bazę można prowadzić w systemie rekrutacyjnym, jeśli pozwala na własne pola i wyszukiwanie, albo w elastycznym narzędziu, takim jak [Airtable](/uslugi/wdrozenia-airtable), połączonym z kanałami aplikacji. Wybór zależy od wielkości bazy, liczby rekruterów i tego, z czego agencja już korzysta. Ważniejsze od narzędzia są uporządkowane pola i zasady.",
    "## Od czego zacząć",
    "Od ustalenia pól z rekruterami i zebrania aplikacji z najważniejszych kanałów w jednym miejscu. Potem odczyt CV, kontrola duplikatów i zgody. Na końcu regularne pytania o dostępność i wyszukiwanie przy zleceniach. Pozostałe procesy w agencji opisujemy w artykule [co zautomatyzować w agencji pracy](/poradnik/co-zautomatyzowac-w-agencji-pracy).",
  ].join("\n\n"),
  faq: [
    {
      question: "Jak uporządkować bazę kandydatów?",
      answer:
        "Zebrać aplikacje ze wszystkich kanałów w jednym miejscu, uzupełnić pola z CV, połączyć duplikaty, aktualizować dostępność i pilnować zgód.",
    },
    {
      question: "Jakie pola powinna mieć baza kandydatów?",
      answer:
        "Najczęściej uprawnienia, języki, lokalizację, dostępność, doświadczenie i historię pracy w agencji. Pola warto ustalić z rekruterami.",
    },
    {
      question: "Czy AI może uzupełniać dane z CV?",
      answer:
        "Tak, odczytuje fakty z CV i uzupełnia pola, a rekruter sprawdza wynik. AI nie ocenia kandydata.",
    },
    {
      question: "Jak długo można przechowywać dane kandydatów?",
      answer:
        "Tak długo, jak agencja ma do tego podstawę, np. ważną zgodę. Zasady warto ustalić z osobą odpowiedzialną za ochronę danych.",
    },
    {
      question: "Jak utrzymać aktualną dostępność kandydatów?",
      answer:
        "Regularnie pytać kandydatów krótką wiadomością z linkiem do aktualizacji i oznaczać nieaktywnych.",
    },
  ],
});
