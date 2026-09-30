import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "cyfryzacja-danych-i-dokumentow",
  metaTitle: "Cyfryzacja dokumentów i danych w firmie | Automation Minds",
  metaDescription:
    "Cyfryzujemy dokumenty i procesy papierowe: skany, formularze, rejestry i archiwa zamieniamy w uporządkowaną bazę, którą da się przeszukać i zautomatyzować.",
  primaryKeyword: "cyfryzacja dokumentów w firmie",
  secondaryKeywords: [
    "digitalizacja dokumentów",
    "cyfryzacja firmy",
    "elektroniczny obieg dokumentów",
    "formularze elektroniczne",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Dane i cyfryzacja",
    title: "Cyfryzacja dokumentów: z segregatorów do bazy, którą da się przeszukać",
    lead: "Papierowe protokoły, karty zleceń, wnioski i archiwa zamieniamy w uporządkowane dane. Nowe dokumenty powstają od razu cyfrowo, a stare trafiają do bazy z opisami, po których łatwo je odnaleźć.",
    outcomes: [
      "Dokumenty dostępne z każdego miejsca, w kilka sekund",
      "Formularze zamiast papierowych kart i ręcznego przepisywania",
      "Dane gotowe do raportów i automatyzacji",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?w=1920&q=80",
    imageAlt: "Kolorowe segregatory ustawione na półkach w biurze",
  },
  problems: {
    title: "Ile kosztuje papier w firmie",
    lead: "Papier nie znika sam. Nawet firmy, które pracują w komputerach, mają procesy, w których dokument trzeba wydrukować, podpisać i przepisać.",
    items: [
      {
        title: "Szukanie w segregatorach",
        body: "Żeby znaleźć protokół sprzed roku, ktoś idzie do archiwum i przegląda teczki.",
      },
      {
        title: "Przepisywanie z kartek",
        body: "Karty pracy, protokoły i wnioski wypełniane ręcznie, a potem przepisywane do systemu.",
      },
      {
        title: "Dokumenty tylko w jednym miejscu",
        body: "Teczka leży w biurze, a osoba, która jej potrzebuje, pracuje zdalnie albo w terenie.",
      },
      {
        title: "Nieczytelne pismo",
        body: "Część danych z ręcznie wypełnionych formularzy trzeba zgadywać albo dopytywać.",
      },
      {
        title: "Brak kopii",
        body: "Zalanie albo pożar biura oznacza utratę dokumentów, których nie da się odtworzyć.",
      },
      {
        title: "Skany bez opisu",
        body: "Dokumenty są zeskanowane, ale leżą w folderze pod nazwami „skan001.pdf”.",
      },
    ],
  },
  scope: {
    title: "Co cyfryzujemy",
    lead: "Skanowanie to mała część cyfryzacji. Najważniejsze jest, żeby nowe dokumenty od razu powstawały cyfrowo.",
    items: [
      {
        title: "Formularze elektroniczne",
        body: "Protokoły, karty pracy, wnioski i checklisty wypełniane na telefonie, tablecie albo komputerze.",
      },
      {
        title: "Podpis elektroniczny",
        body: "Dokumenty podpisywane zdalnie przez klientów i pracowników, bez drukowania.",
      },
      {
        title: "Digitalizacja archiwum",
        body: "Skanowanie i odczyt treści starych dokumentów, z zachowaniem porządku i opisów.",
      },
      {
        title: "Odczyt danych ze skanów",
        body: "AI odczytuje najważniejsze pola z dokumentów, żeby dało się po nich wyszukiwać.",
      },
      {
        title: "Uporządkowane archiwum",
        body: "Jednolite nazwy, foldery i opisy dokumentów. Wyszukiwanie po kliencie, dacie czy numerze.",
      },
      {
        title: "Obieg dokumentów",
        body: "Dokument trafia do akceptacji, podpisu i archiwum automatycznie, bez chodzenia po biurze.",
      },
      {
        title: "Rejestry cyfrowe",
        body: "Rejestry umów, wniosków, szkoleń czy przeglądów w bazie z przypomnieniami o terminach.",
      },
      {
        title: "Kopie i dostęp",
        body: "Kopie zapasowe i uprawnienia, żeby dokumenty były bezpieczne i dostępne dla właściwych osób.",
      },
    ],
  },
  example: {
    title: "Protokół serwisowy przed i po cyfryzacji",
    lead: "Przykład firmy serwisowej, w której technicy wypełniali papierowe protokoły u klientów.",
    rows: [
      {
        label: "Wypełnienie",
        before: "Papierowy protokół wypełniany długopisem u klienta.",
        after: "Formularz na telefonie z listą czynności i zdjęciami.",
      },
      {
        label: "Podpis klienta",
        before: "Podpis na kartce, kopia zostaje u klienta.",
        after: "Podpis na ekranie, klient dostaje PDF mailem.",
      },
      {
        label: "Przekazanie do biura",
        before: "Protokoły zbierane raz w tygodniu i przepisywane.",
        after: "Dane trafiają do systemu od razu po wizycie.",
      },
      {
        label: "Faktura",
        before: "Biuro czeka na protokoły, żeby wystawić faktury.",
        after: "Zakończony protokół uruchamia przygotowanie faktury.",
      },
      {
        label: "Archiwum",
        before: "Segregatory z protokołami według miesięcy.",
        after: "Wyszukiwanie protokołów po kliencie, urządzeniu albo dacie.",
      },
    ],
    note: "Stare archiwum można cyfryzować stopniowo. Najwięcej daje zmiana sposobu tworzenia nowych dokumentów.",
  },
  process: {
    title: "Jak prowadzimy cyfryzację",
    lead: "Zaczynamy od dokumentów, które powstają najczęściej, bo tam cyfryzacja najszybciej oszczędza czas.",
    steps: [
      {
        title: "Przegląd dokumentów",
        body: "Spisujemy dokumenty papierowe, ich obieg i miejsca, w których dane są przepisywane.",
      },
      {
        title: "Projekt formularzy i bazy",
        body: "Projektujemy formularze i bazę, do której trafią dane, razem z opisami i uprawnieniami.",
      },
      {
        title: "Pilotaż",
        body: "Nowe formularze testuje kilka osób. Poprawiamy je według uwag z praktyki.",
      },
      {
        title: "Wdrożenie w zespole",
        body: "Wprowadzamy formularze dla wszystkich i uczymy zespół z nich korzystać.",
      },
      {
        title: "Archiwum",
        body: "Stopniowo cyfryzujemy stare dokumenty, zaczynając od tych, do których sięgacie najczęściej.",
      },
    ],
  },
  tools: {
    title: "Narzędzia",
    lead: "Dobieramy narzędzia do tego, gdzie powstają dokumenty: w biurze, u klienta czy na hali.",
    items: [
      { name: "Airtable, Fillout, Jotform", note: "formularze i bazy dokumentów" },
      { name: "Microsoft Forms, SharePoint", note: "formularze i archiwum w Microsoft 365" },
      { name: "Autenti, DocuSign", note: "podpis elektroniczny" },
      { name: "OCR i AI do dokumentów", note: "odczyt danych ze skanów" },
      { name: "Google Drive, OneDrive", note: "uporządkowane archiwum z kopiami" },
      { name: "Make, n8n, Power Automate", note: "obieg dokumentów i powiadomienia" },
    ],
  },
  faq: [
    {
      question: "Czy musimy zeskanować całe archiwum?",
      answer:
        "Nie. Zwykle zaczynamy od nowych dokumentów, bo to one generują codzienną pracę. Archiwum cyfryzujemy stopniowo, zaczynając od dokumentów, do których sięgacie najczęściej.",
    },
    {
      question: "Czy dokumenty elektroniczne są ważne prawnie?",
      answer:
        "W większości przypadków tak, szczególnie z podpisem elektronicznym. Są jednak dokumenty, które trzeba przechowywać w oryginale. Wskazujemy je i planujemy cyfryzację zgodnie z przepisami.",
    },
    {
      question: "Czy formularze zadziałają bez internetu?",
      answer:
        "Wiele narzędzi pozwala wypełniać formularze offline i wysyła dane po odzyskaniu połączenia. Dobieramy je, gdy zespół pracuje w terenie.",
    },
    {
      question: "Co z odręcznie wypełnionymi dokumentami?",
      answer:
        "AI potrafi odczytać wiele odręcznych wpisów, ale nie wszystkie. Wątpliwe pola oznaczamy do sprawdzenia przez człowieka.",
    },
    {
      question: "Jak zabezpieczyć dokumenty cyfrowe?",
      answer:
        "Ustawiamy uprawnienia, kopie zapasowe i zapis dostępu. Dokumenty z danymi osobowymi przechowujemy zgodnie z RODO.",
    },
  ],
  relatedArticleSlugs: [
    "cyfryzacja-danych-w-firmie",
    "porzadek-w-danych-przed-ai-i-automatyzacja",
    "rodo-a-automatyzacja-procesow",
  ],
  relatedServiceSlugs: [
    "ai-w-obsludze-dokumentow",
    "automatyzacja-dla-firm-uslugowych",
  ],
  contact: {
    title: "Jakie dokumenty wciąż są u ciebie na papierze?",
    body: "Opisz, które dokumenty powstają najczęściej i co się z nimi dzieje. Zaproponujemy, od czego zacząć cyfryzację.",
    highlights: [
      "Przegląd dokumentów i miejsc przepisywania danych",
      "Propozycja formularzy i bazy na start",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
