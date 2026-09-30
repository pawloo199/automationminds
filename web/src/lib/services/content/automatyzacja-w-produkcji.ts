import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "automatyzacja-w-produkcji",
  metaTitle: "Automatyzacja w firmie produkcyjnej | Automation Minds",
  metaDescription:
    "Automatyzujemy procesy biurowe w produkcji: zlecenia, planowanie, raporty zmianowe, stany materiałów i kontrola jakości. Mniej papieru i arkuszy na hali.",
  primaryKeyword: "automatyzacja w produkcji",
  secondaryKeywords: [
    "cyfryzacja produkcji",
    "raporty produkcyjne",
    "planowanie produkcji",
    "zlecenia produkcyjne",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Automatyzacja procesów",
    title: "Automatyzacja w produkcji: zlecenia, raporty i stany bez papierowych kart",
    lead: "Nie automatyzujemy maszyn, tylko pracę wokół nich. Zlecenia trafiają na halę w formie cyfrowej, raporty zmianowe wypełnia się na tablecie, a biuro widzi postęp i stany materiałów bez dzwonienia na produkcję.",
    outcomes: [
      "Zlecenia produkcyjne w cyfrowym obiegu od zamówienia do wysyłki",
      "Raporty zmianowe i przestoje zbierane na bieżąco",
      "Aktualne stany materiałów i sygnał, gdy trzeba zamówić",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1700727448686-b314cb5f9948?w=1920&q=80",
    imageAlt: "Pracownicy przy linii produkcyjnej w zakładzie",
  },
  problems: {
    title: "Gdzie produkcja traci czas poza maszynami",
    lead: "W wielu zakładach maszyny są nowoczesne, a informacja wciąż krąży na kartkach i w arkuszach.",
    items: [
      {
        title: "Papierowe karty zleceń",
        body: "Zlecenie drukowane w biurze, noszone po hali i przepisywane z powrotem do systemu.",
      },
      {
        title: "Raporty zmianowe na kartkach",
        body: "Brygadzista wypełnia raport ręcznie, a ktoś w biurze przepisuje go do arkusza następnego dnia.",
      },
      {
        title: "Nie wiadomo, na jakim etapie jest zlecenie",
        body: "Handlowiec dzwoni na halę, żeby odpowiedzieć klientowi, kiedy zamówienie będzie gotowe.",
      },
      {
        title: "Braki materiałów w ostatniej chwili",
        body: "O braku materiału dowiadujecie się, gdy trzeba zacząć produkcję.",
      },
      {
        title: "Planowanie w arkuszu",
        body: "Plan produkcji w Excelu, który zna jedna osoba. Każda zmiana priorytetu to przebudowa całego pliku.",
      },
      {
        title: "Kontrola jakości bez historii",
        body: "Wyniki kontroli zapisane na kartkach. Trudno znaleźć przyczynę reklamacji sprzed miesięcy.",
      },
    ],
  },
  scope: {
    title: "Co automatyzujemy",
    lead: "Zakres dopasowujemy do wielkości zakładu. Nie zastępujemy systemów MES czy ERP, tylko wypełniamy luki między nimi a codzienną pracą.",
    items: [
      {
        title: "Zlecenia produkcyjne",
        body: "Zamówienie klienta zamienia się w zlecenie z kompletem danych, bez przepisywania.",
      },
      {
        title: "Tablica zleceń",
        body: "Widok zleceń na hali i w biurze: co czeka, co w produkcji, co gotowe do wysyłki.",
      },
      {
        title: "Raporty zmianowe",
        body: "Formularz na tablecie: ilości, braki, przestoje i uwagi. Dane od razu w bazie.",
      },
      {
        title: "Stany materiałów",
        body: "Rejestr zużycia i stanów z sygnałem, gdy materiał spada poniżej ustalonego poziomu.",
      },
      {
        title: "Planowanie",
        body: "Plan produkcji w bazie z priorytetami i terminami, który łatwo zmienić i udostępnić.",
      },
      {
        title: "Kontrola jakości",
        body: "Checklisty kontroli z historią, zdjęciami i powiązaniem ze zleceniem i partią.",
      },
      {
        title: "Informacja dla handlowców",
        body: "Status zlecenia widoczny w CRM, więc handlowiec odpowiada klientowi bez telefonu na halę.",
      },
      {
        title: "Raporty dla kierownictwa",
        body: "Wydajność, przestoje, braki i terminowość w dashboardzie aktualizowanym na bieżąco.",
      },
    ],
  },
  example: {
    title: "Zlecenie produkcyjne przed i po automatyzacji",
    lead: "Przykład zakładu produkującego na zamówienie, w którym zlecenia krążyły na papierze.",
    rows: [
      {
        label: "Utworzenie zlecenia",
        before: "Biuro przepisuje zamówienie klienta na kartę zlecenia.",
        after: "Zlecenie tworzy się z zamówienia z kompletem danych i rysunków.",
      },
      {
        label: "Na hali",
        before: "Wydrukowana karta, uwagi dopisywane długopisem.",
        after: "Zlecenie na tablecie, uwagi i zdjęcia zapisane przy zleceniu.",
      },
      {
        label: "Postęp",
        before: "Handlowiec dzwoni do kierownika zmiany.",
        after: "Status zlecenia widoczny w biurze i w CRM na bieżąco.",
      },
      {
        label: "Raport zmiany",
        before: "Kartka przepisywana następnego dnia do arkusza.",
        after: "Raport wypełniony na koniec zmiany, od razu w bazie.",
      },
      {
        label: "Wysyłka i faktura",
        before: "Biuro dowiaduje się o gotowości z opóźnieniem.",
        after: "Zakończenie zlecenia uruchamia przygotowanie wysyłki i faktury.",
      },
    ],
    note: "Formularze dla hali projektujemy tak, żeby dało się je wypełnić szybko, także w rękawicach i przy słabym zasięgu.",
  },
  process: {
    title: "Jak wdrażamy w produkcji",
    lead: "Zaczynamy od rozmowy z ludźmi na hali. Jeśli rozwiązanie nie będzie wygodne dla nich, nie zadziała.",
    steps: [
      {
        title: "Wizyta i przegląd",
        body: "Poznajemy przepływ zleceń, dokumentów i informacji między biurem a halą.",
      },
      {
        title: "Wybór obszaru",
        body: "Zaczynamy od miejsca, w którym przepisywania i telefonów jest najwięcej.",
      },
      {
        title: "Projekt i prototyp",
        body: "Projektujemy bazę i formularze. Testujemy je z brygadzistami na jednej zmianie.",
      },
      {
        title: "Wdrożenie",
        body: "Rozszerzamy rozwiązanie na cały zakład i szkolimy zespół bezpośrednio na hali.",
      },
      {
        title: "Integracje i raporty",
        body: "Łączymy dane z ERP, CRM i magazynem oraz budujemy raporty dla kierownictwa.",
      },
    ],
  },
  tools: {
    title: "Narzędzia",
    lead: "Łączymy proste narzędzia na hali z systemami, których używa biuro.",
    items: [
      { name: "Airtable", note: "zlecenia, raporty i stany w jednej bazie" },
      { name: "Tablety i telefony", note: "formularze przy maszynach i w biurze" },
      { name: "Kody QR", note: "szybki dostęp do zlecenia i partii" },
      { name: "Comarch, enova, Subiekt", note: "integracja z systemami handlowymi i ERP" },
      { name: "Make, n8n", note: "przepływ danych między halą a biurem" },
      { name: "Power BI, Looker Studio", note: "raporty dla kierownictwa" },
    ],
  },
  faq: [
    {
      question: "Czy automatyzujecie maszyny i linie produkcyjne?",
      answer:
        "Nie. Zajmujemy się procesami wokół produkcji: zleceniami, dokumentami, raportami, stanami i przepływem informacji między halą a biurem.",
    },
    {
      question: "Mamy system ERP. Czy to się z nim połączy?",
      answer:
        "Zwykle tak. Łączymy rozwiązanie z ERP przez API, bazę danych albo import plików, żeby dane nie były wpisywane dwa razy.",
    },
    {
      question: "Czy pracownicy hali poradzą sobie z tabletami?",
      answer:
        "Projektujemy formularze z dużymi przyciskami, listami wyboru i minimum pisania. Testujemy je z pracownikami, zanim trafią na całą halę.",
    },
    {
      question: "Czy to rozwiązanie dla małego zakładu?",
      answer:
        "Tak. W małych zakładach nie ma sensu wdrażać drogiego systemu MES. Prosta baza z formularzami i raportami często wystarcza.",
    },
    {
      question: "Co z zakładem bez dobrego zasięgu internetu?",
      answer:
        "Dobieramy narzędzia, które działają offline i wysyłają dane po odzyskaniu połączenia, albo planujemy punkty z dostępem do sieci.",
    },
  ],
  relatedArticleSlugs: [
    "cyfryzacja-danych-w-firmie",
    "od-czego-zaczac-mapowanie-procesow",
    "jak-mierzyc-roi-automatyzacji",
  ],
  relatedServiceSlugs: ["cyfryzacja-danych-i-dokumentow", "wdrozenia-airtable"],
  contact: {
    title: "Porozmawiajmy o twoim zakładzie",
    body: "Opisz, jak zlecenia i informacje przepływają między biurem a halą. Wskażemy, gdzie cyfryzacja da najszybszy efekt.",
    highlights: [
      "Rozmowa o przepływie informacji w zakładzie",
      "Propozycja pierwszego obszaru do cyfryzacji",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
