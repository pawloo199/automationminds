import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "porzadkowanie-i-strukturyzowanie-danych",
  metaTitle: "Porządkowanie i strukturyzowanie danych | Automation Minds",
  metaDescription:
    "Porządkujemy dane w firmie: usuwamy duplikaty, ujednolicamy formaty i tworzymy jedno źródło prawdy zamiast kilku arkuszy. Fundament pod automatyzację i AI.",
  primaryKeyword: "porządkowanie danych w firmie",
  secondaryKeywords: [
    "strukturyzowanie danych",
    "czyszczenie danych",
    "jakość danych",
    "jedno źródło prawdy",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Dane i cyfryzacja",
    title: "Porządek w danych: jedna wersja prawdy zamiast kilku arkuszy",
    lead: "Te same dane klientów, produktów i zamówień żyją w kilku plikach i systemach, każdy w innej wersji. Porządkujemy je, ustalamy jedną strukturę i zasady, które pilnują, żeby bałagan nie wrócił.",
    outcomes: [
      "Jedno źródło danych dla klientów, produktów i zamówień",
      "Bez duplikatów, z jednolitymi formatami i słownikami",
      "Dane gotowe pod raporty, automatyzację i AI",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1783115259399-3a5a3e0e4592?w=1920&q=80",
    imageAlt: "Osoba pracuje na laptopie z arkuszem danych w biurze",
  },
  problems: {
    title: "Jak wygląda bałagan w danych",
    lead: "Bałagan w danych rzadko jest widoczny od razu. Wychodzi na jaw przy raporcie, fakturze albo próbie automatyzacji.",
    items: [
      {
        title: "Ten sam klient kilka razy",
        body: "Jan Kowalski, J. Kowalski i JAN KOWALSKI sp. z o.o. to trzy rekordy z inną historią i innymi danymi.",
      },
      {
        title: "Różne liczby w różnych raportach",
        body: "Sprzedaż mówi jedno, księgowość drugie. Spotkanie zamiast o decyzjach toczy się o to, czyje dane są dobre.",
      },
      {
        title: "Każdy wpisuje po swojemu",
        body: "Daty w trzech formatach, statusy opisane słowami, miasta z literówkami. Filtrowanie nie działa.",
      },
      {
        title: "Arkusze kopiowane w nieskończoność",
        body: "Plik „raport_final_v3_poprawiony” i jego pięć wersji w różnych folderach.",
      },
      {
        title: "Nie wiadomo, skąd pochodzą dane",
        body: "Nikt nie wie, kto i kiedy zmienił wartość ani który system jest źródłem.",
      },
      {
        title: "Automatyzacja się sypie",
        body: "Automat działa na testowych danych, ale na prawdziwych trafia na braki i nietypowe wpisy.",
      },
    ],
  },
  scope: {
    title: "Co robimy",
    lead: "Sprzątanie danych to połowa pracy. Druga połowa to zasady, które sprawiają, że porządek się utrzymuje.",
    items: [
      {
        title: "Inwentaryzacja danych",
        body: "Spisujemy, gdzie są dane, kto z nich korzysta i które źródło jest najbardziej aktualne.",
      },
      {
        title: "Jedna struktura",
        body: "Projektujemy wspólny układ danych: jakie pola, jakie typy, jakie powiązania między tabelami.",
      },
      {
        title: "Usuwanie duplikatów",
        body: "Łączymy powtarzające się rekordy, zachowując historię i najbardziej aktualne informacje.",
      },
      {
        title: "Ujednolicenie formatów",
        body: "Daty, kwoty, adresy, numery telefonów i NIP w jednym formacie we wszystkich miejscach.",
      },
      {
        title: "Słowniki i statusy",
        body: "Zamiast wolnego tekstu listy wyboru: branże, statusy, kategorie produktów, źródła leadów.",
      },
      {
        title: "Uzupełnienie braków",
        body: "Uzupełniamy dane z rejestrów, na przykład dane firm po NIP, i oznaczamy, czego brakuje.",
      },
      {
        title: "Zasady wprowadzania",
        body: "Walidacja pól, obowiązkowe informacje i formularze, które nie pozwalają wpisać bałaganu.",
      },
      {
        title: "Właściciele danych",
        body: "Ustalamy, kto odpowiada za jakie dane i jak sprawdzać ich jakość w przyszłości.",
      },
    ],
  },
  example: {
    title: "Baza klientów przed i po porządkach",
    lead: "Przykład firmy, która prowadziła klientów w CRM, arkuszu handlowców i programie do faktur. Tak zmieniła się jedna baza.",
    rows: [
      {
        label: "Źródło danych",
        before: "Trzy miejsca z różnymi danymi o tym samym kliencie.",
        after: "Jedna baza klientów, z której korzystają pozostałe systemy.",
      },
      {
        label: "Duplikaty",
        before: "Ci sami klienci zapisani kilka razy pod różnymi nazwami.",
        after: "Jeden rekord na klienta z połączoną historią.",
      },
      {
        label: "Formaty",
        before: "Telefony, adresy i daty zapisane na różne sposoby.",
        after: "Jednolite formaty i automatyczna walidacja przy wpisywaniu.",
      },
      {
        label: "Kategorie",
        before: "Branża wpisywana ręcznie, w kilkudziesięciu wariantach.",
        after: "Lista wyboru z kilkunastu branż.",
      },
      {
        label: "Raport sprzedaży",
        before: "Liczby różnią się zależnie od tego, kto przygotował raport.",
        after: "Raport oparty na jednym źródle, z tymi samymi liczbami dla wszystkich.",
      },
    ],
    note: "Porządek w danych rzadko jest potrzebny sam dla siebie. Zwykle to pierwszy krok przed automatyzacją, raportami albo AI.",
  },
  process: {
    title: "Jak porządkujemy dane",
    lead: "Pracujemy na kopii danych, więc codzienna praca zespołu nie jest zagrożona.",
    steps: [
      {
        title: "Przegląd źródeł",
        body: "Sprawdzamy, jakie dane macie, gdzie są i w jakim są stanie.",
      },
      {
        title: "Projekt struktury",
        body: "Proponujemy docelowy układ danych i omawiamy go z osobami, które z nich korzystają.",
      },
      {
        title: "Czyszczenie",
        body: "Na kopii danych usuwamy duplikaty, ujednolicamy formaty i uzupełniamy braki.",
      },
      {
        title: "Weryfikacja",
        body: "Zespół sprawdza wynik na znanych przypadkach. Poprawiamy to, co wymaga decyzji człowieka.",
      },
      {
        title: "Przeniesienie i zasady",
        body: "Uporządkowane dane trafiają do docelowego miejsca, razem z zasadami, które chronią je przed bałaganem.",
      },
    ],
  },
  tools: {
    title: "Narzędzia",
    lead: "Porządkujemy dane tam, gdzie są, albo przenosimy je do narzędzia lepiej dopasowanego do pracy zespołu.",
    items: [
      { name: "Airtable", note: "uporządkowane bazy z walidacją i powiązaniami" },
      { name: "Excel, Google Sheets", note: "punkt wyjścia i czyszczenie danych" },
      { name: "Power Query", note: "przekształcanie i łączenie danych" },
      { name: "Python", note: "czyszczenie dużych i nieregularnych zbiorów" },
      { name: "Make, n8n", note: "automatyczne uzupełnianie i synchronizacja danych" },
      { name: "API rejestrów firm", note: "uzupełnianie danych firm po NIP" },
    ],
  },
  faq: [
    {
      question: "Czy musimy przenosić dane do nowego narzędzia?",
      answer:
        "Nie zawsze. Czasem wystarczy uporządkować dane w obecnym systemie i dodać zasady ich wprowadzania. Zmianę narzędzia proponujemy, gdy obecne nie pozwala utrzymać porządku.",
    },
    {
      question: "Co z danymi, których nie da się automatycznie poprawić?",
      answer:
        "Oznaczamy je i przygotowujemy listę do decyzji zespołu. Na przykład przy łączeniu duplikatów czasem tylko człowiek wie, który rekord jest właściwy.",
    },
    {
      question: "Czy porządkowanie danych zatrzyma pracę firmy?",
      answer:
        "Nie. Pracujemy na kopii, a przeniesienie uporządkowanych danych planujemy tak, żeby zajęło jak najmniej czasu, na przykład w weekend.",
    },
    {
      question: "Jak utrzymać porządek po zakończeniu projektu?",
      answer:
        "Wprowadzamy walidację pól, listy wyboru, obowiązkowe informacje i właścicieli danych. Możemy też ustawić automatyczne sprawdzanie jakości danych.",
    },
    {
      question: "Dlaczego porządek w danych jest ważny przed AI?",
      answer:
        "AI i automatyzacje działają na danych, które dostaną. Jeśli dane są niepełne albo sprzeczne, wyniki też będą. Uporządkowane dane to warunek, żeby te narzędzia działały dobrze.",
    },
  ],
  relatedArticleSlugs: [
    "porzadek-w-danych-przed-ai-i-automatyzacja",
    "cyfryzacja-danych-w-firmie",
    "airtable-czy-excel",
  ],
  relatedServiceSlugs: ["audyt-procesow-biznesowych", "strategia-wdrozenia-ai"],
  contact: {
    title: "Gdzie u ciebie dane się nie zgadzają?",
    body: "Opisz, w ilu miejscach trzymacie te same dane i co sprawia najwięcej kłopotów. Podpowiemy, od czego zacząć porządki.",
    highlights: [
      "Wstępna ocena stanu danych",
      "Propozycja struktury i kolejności prac",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
