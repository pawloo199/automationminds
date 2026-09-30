import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "projektowanie-baz-danych",
  metaTitle: "Projektowanie baz danych dla firm | Automation Minds",
  metaDescription:
    "Projektujemy bazy i struktury danych dla firm: tabele, powiązania, uprawnienia i widoki. Baza, która rośnie razem z firmą, zamiast kolejnych arkuszy.",
  primaryKeyword: "projektowanie baz danych",
  secondaryKeywords: [
    "struktura danych w firmie",
    "model danych",
    "baza danych dla firmy",
    "relacyjna baza danych",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Dane i cyfryzacja",
    title: "Projektowanie baz danych, które rosną razem z firmą",
    lead: "Arkusz działa dobrze, dopóki firma jest mała. Potem pojawiają się kolejne zakładki, kopie i obejścia. Projektujemy bazę danych, w której klienci, zlecenia, produkty i dokumenty są połączone i łatwo je rozbudować.",
    outcomes: [
      "Przemyślana struktura tabel i powiązań między danymi",
      "Widoki i uprawnienia dopasowane do ról w zespole",
      "Baza przygotowana pod automatyzacje, raporty i kolejne moduły",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1573166364266-356ef04ae798?w=1920&q=80",
    imageAlt: "Osoba rysuje schemat na białej tablicy",
  },
  problems: {
    title: "Kiedy arkusz przestaje wystarczać",
    lead: "Większość firm trafia do nas nie dlatego, że chce bazy danych, tylko dlatego, że arkusze zaczęły przeszkadzać w pracy.",
    items: [
      {
        title: "Zakładki się mnożą",
        body: "Klienci, zlecenia, faktury i kontakty w osobnych zakładkach, połączone formułami, których nikt nie rozumie.",
      },
      {
        title: "Te same dane w wielu miejscach",
        body: "Adres klienta wpisany w pięciu arkuszach. Po zmianie trzeba pamiętać, żeby poprawić wszystkie.",
      },
      {
        title: "Jedna osoba rozumie plik",
        body: "Plik zbudował ktoś, kto dziś ma inne obowiązki. Każda zmiana grozi zepsuciem formuł.",
      },
      {
        title: "Brak kontroli dostępu",
        body: "Każdy widzi wszystko albo nic. Nie da się ukryć marż przed jednymi, a pokazać innym.",
      },
      {
        title: "Plik zwalnia",
        body: "Kilka tysięcy wierszy, dziesiątki formuł i plik otwiera się coraz dłużej.",
      },
      {
        title: "Trudno coś podłączyć",
        body: "Automatyzacje i raporty nie działają dobrze na arkuszu, który ciągle zmienia układ.",
      },
    ],
  },
  scope: {
    title: "Co projektujemy",
    lead: "Projekt bazy to przede wszystkim rozmowa o tym, jak działa firma. Technologia jest drugorzędna.",
    items: [
      {
        title: "Model danych",
        body: "Ustalamy, jakie obiekty istnieją w firmie, na przykład klient, zlecenie, produkt, i jak są ze sobą powiązane.",
      },
      {
        title: "Tabele i pola",
        body: "Dla każdego obiektu projektujemy pola, typy danych i zasady ich wypełniania.",
      },
      {
        title: "Powiązania",
        body: "Zlecenie wie, do jakiego klienta należy, a klient widzi wszystkie swoje zlecenia i faktury.",
      },
      {
        title: "Widoki dla ról",
        body: "Handlowiec widzi swoje szanse, magazyn swoje zamówienia, zarząd podsumowania.",
      },
      {
        title: "Uprawnienia",
        body: "Kto może widzieć, edytować i usuwać dane. Wrażliwe informacje dostępne tylko dla wybranych.",
      },
      {
        title: "Formularze wprowadzania",
        body: "Proste formularze, które pozwalają dodać dane bez ryzyka zepsucia struktury.",
      },
      {
        title: "Historia zmian",
        body: "Zapis, kto i kiedy zmienił dane, żeby łatwo wyjaśnić rozbieżności.",
      },
      {
        title: "Przygotowanie pod rozwój",
        body: "Struktura, do której łatwo dołożyć nowe moduły, automatyzacje i raporty.",
      },
    ],
  },
  example: {
    title: "Rejestr zleceń w arkuszu i w bazie danych",
    lead: "Przykład firmy usługowej, która prowadziła zlecenia w dużym arkuszu z wieloma zakładkami.",
    rows: [
      {
        label: "Dane klienta",
        before: "Kopiowane do każdego zlecenia, z literówkami.",
        after: "Zapisane raz i powiązane ze wszystkimi zleceniami.",
      },
      {
        label: "Status zlecenia",
        before: "Kolor komórki, który każdy rozumie inaczej.",
        after: "Lista statusów z datą zmiany i osobą odpowiedzialną.",
      },
      {
        label: "Dostęp",
        before: "Cały zespół widzi ceny zakupu i marże.",
        after: "Marże widzi tylko zarząd, reszta zespołu swoje widoki.",
      },
      {
        label: "Wyszukiwanie",
        before: "Ręczne filtrowanie w kilku zakładkach.",
        after: "Widok wszystkich zleceń klienta jednym kliknięciem.",
      },
      {
        label: "Rozbudowa",
        before: "Każda nowa kolumna psuje formuły.",
        after: "Nowe pola i tabele dodawane bez ryzyka dla istniejących danych.",
      },
    ],
    note: "Baza nie musi być skomplikowana. Dobry projekt często ma mniej tabel, niż się wydaje na początku.",
  },
  process: {
    title: "Jak projektujemy bazę",
    lead: "Zaczynamy od rozmowy o firmie, nie od technologii. Narzędzie wybieramy na końcu, pod projekt.",
    steps: [
      {
        title: "Rozmowa o procesach",
        body: "Poznajemy, jakie informacje zbieracie, kto z nich korzysta i jakie decyzje na nich podejmuje.",
      },
      {
        title: "Model danych",
        body: "Rysujemy schemat obiektów i powiązań. Omawiamy go z zespołem na prostych przykładach.",
      },
      {
        title: "Wybór narzędzia",
        body: "Dobieramy technologię do skali, budżetu i umiejętności zespołu: Airtable, SQL albo inne.",
      },
      {
        title: "Budowa i migracja",
        body: "Budujemy bazę, przenosimy dane z arkuszy i ustawiamy widoki oraz uprawnienia.",
      },
      {
        title: "Wdrożenie i rozwój",
        body: "Uczymy zespół korzystać z bazy i rozbudowujemy ją o automatyzacje i raporty.",
      },
    ],
  },
  tools: {
    title: "Technologie",
    lead: "Wybieramy narzędzie, z którym wasz zespół będzie w stanie pracować na co dzień.",
    items: [
      { name: "Airtable", note: "baza bez kodu, wygodna dla zespołów biznesowych" },
      { name: "PostgreSQL, Supabase", note: "klasyczne bazy relacyjne dla większych zbiorów" },
      { name: "Microsoft Dataverse, SharePoint", note: "bazy w środowisku Microsoft 365" },
      { name: "Softr, Interfaces", note: "aplikacje i portale na bazie danych" },
      { name: "dbdiagram, Miro", note: "schematy modelu danych" },
      { name: "Make, n8n", note: "automatyzacje na bazie danych" },
    ],
  },
  faq: [
    {
      question: "Czy baza danych jest potrzebna małej firmie?",
      answer:
        "Nie zawsze. Jeśli arkusz działa i nikt się z nim nie męczy, nie ma sensu go zmieniać. Baza ma sens, gdy dane są powiązane, kilka osób pracuje na nich jednocześnie i zaczynają się pomyłki.",
    },
    {
      question: "Airtable czy klasyczna baza danych?",
      answer:
        "Airtable sprawdza się, gdy zespół sam chce zarządzać danymi i widokami, a skala nie jest bardzo duża. Klasyczna baza, na przykład PostgreSQL, jest lepsza przy dużych zbiorach danych i złożonych integracjach.",
    },
    {
      question: "Czy przeniesiecie dane z naszych arkuszy?",
      answer:
        "Tak. Migracja danych jest częścią wdrożenia. Przy okazji porządkujemy duplikaty i formaty.",
    },
    {
      question: "Czy zespół poradzi sobie z nową bazą?",
      answer:
        "Projektujemy widoki i formularze tak, żeby praca była prostsza niż w arkuszu. Szkolimy zespół i zostawiamy krótkie instrukcje.",
    },
    {
      question: "Czy będziemy mogli sami rozbudowywać bazę?",
      answer:
        "Tak. Przy Airtable większość zmian można robić samodzielnie. Pokazujemy, jak dodawać pola i widoki bez psucia struktury.",
    },
  ],
  relatedArticleSlugs: [
    "airtable-czy-excel",
    "airtable-w-praktyce-zastosowania",
    "cyfryzacja-danych-w-firmie",
  ],
  relatedServiceSlugs: ["automatyzacja-oraz-ai-w-niestandardowych-procesach"],
  contact: {
    title: "Twój arkusz robi się za duży?",
    body: "Opisz, co trzymacie w arkuszach i co sprawia najwięcej kłopotów. Podpowiemy, czy baza danych ma sens i w jakim narzędziu.",
    highlights: [
      "Rozmowa z osobą, która projektuje bazy dla firm",
      "Wstępny szkic struktury danych",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
