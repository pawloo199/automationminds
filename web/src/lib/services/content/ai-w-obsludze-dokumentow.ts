import type { ServiceContent } from "../types";

const content: ServiceContent = {
  slug: "ai-w-obsludze-dokumentow",
  metaTitle: "AI w obsłudze dokumentów: faktury, umowy | Automation Minds",
  metaDescription:
    "Automatyczne odczytywanie faktur, zamówień, umów i formularzy z pomocą AI. Dane trafiają do systemów bez przepisywania, a człowiek sprawdza tylko wyjątki.",
  primaryKeyword: "automatyczne odczytywanie dokumentów",
  secondaryKeywords: [
    "OCR faktur",
    "AI do dokumentów",
    "automatyzacja obiegu dokumentów",
    "ekstrakcja danych z dokumentów",
  ],
  updatedAt: "2026-09-30",
  hero: {
    eyebrow: "Sztuczna inteligencja",
    title: "AI, które czyta faktury, zamówienia i umowy za twój zespół",
    lead: "Dokumenty przychodzą mailem, jako PDF albo skan. AI odczytuje z nich potrzebne dane, sprawdza je i przekazuje do właściwego systemu. Zespół zajmuje się tylko tym, co wymaga decyzji.",
    outcomes: [
      "Dane z dokumentów w systemie bez ręcznego przepisywania",
      "Automatyczne sprawdzanie zgodności i kompletności",
      "Człowiek zatwierdza tylko wyjątki i wątpliwe przypadki",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1632152133952-98b268dc4b86?w=1920&q=80",
    imageAlt: "Dokumenty i długopis na drewnianym biurku",
  },
  problems: {
    title: "Gdzie dokumenty zabierają najwięcej czasu",
    lead: "Przepisywanie danych z dokumentów to jedna z najbardziej żmudnych prac w biurze. I jedna z tych, w których najłatwiej o pomyłkę.",
    items: [
      {
        title: "Ręczne przepisywanie faktur",
        body: "Numer, kwoty, NIP, pozycje. Każda faktura kosztowa to kilka minut przepisywania i sprawdzania.",
      },
      {
        title: "Zamówienia w różnych formatach",
        body: "Każdy klient przysyła zamówienie po swojemu: PDF, Excel, treść maila. Ktoś musi to ujednolicić.",
      },
      {
        title: "Umowy czytane od deski do deski",
        body: "Żeby znaleźć termin wypowiedzenia albo karę umowną, trzeba przeczytać cały dokument.",
      },
      {
        title: "Błędy w przepisanych danych",
        body: "Literówka w numerze konta albo kwocie wychodzi na jaw dopiero przy płatności albo reklamacji.",
      },
      {
        title: "Dokumenty czekają na osobę",
        body: "Gdy odpowiedzialna osoba jest na urlopie, dokumenty piętrzą się w skrzynce.",
      },
      {
        title: "Brak porządku w archiwum",
        body: "Dokumenty są zapisane pod przypadkowymi nazwami i trudno je potem odnaleźć.",
      },
    ],
  },
  scope: {
    title: "Co automatyzujemy",
    lead: "Zaczynamy od rodzaju dokumentu, którego jest najwięcej. Kolejne dokładamy po sprawdzeniu, że pierwszy działa.",
    items: [
      {
        title: "Zbieranie dokumentów",
        body: "Dokumenty z maili, formularzy, skanera i KSeF trafiają w jedno miejsce automatycznie.",
      },
      {
        title: "Rozpoznanie rodzaju dokumentu",
        body: "AI odróżnia fakturę od zamówienia, umowy czy protokołu i kieruje go dalej.",
      },
      {
        title: "Odczyt danych",
        body: "Z dokumentu wyciągane są potrzebne pola: kontrahent, kwoty, daty, pozycje, warunki.",
      },
      {
        title: "Sprawdzanie danych",
        body: "Automat porównuje dane z zamówieniem, cennikiem albo rejestrem kontrahentów i wyłapuje niezgodności.",
      },
      {
        title: "Przekazanie do systemu",
        body: "Dane trafiają do programu księgowego, ERP, CRM albo bazy w Airtable.",
      },
      {
        title: "Kolejka wyjątków",
        body: "Dokumenty, których AI nie jest pewne, trafiają do człowieka z zaznaczonymi wątpliwościami.",
      },
      {
        title: "Analiza umów",
        body: "AI wyciąga z umów terminy, kary, warunki wypowiedzenia i tworzy przypomnienia.",
      },
      {
        title: "Archiwum z wyszukiwarką",
        body: "Dokumenty zapisują się pod jednolitą nazwą, z opisem, po którym łatwo je znaleźć.",
      },
    ],
  },
  example: {
    title: "Faktura kosztowa przed i po automatyzacji",
    lead: "Przykład firmy, która dostaje faktury od kilkudziesięciu dostawców. Tak zmienia się droga jednej faktury.",
    rows: [
      {
        label: "Wpływ faktury",
        before: "PDF w mailu, ktoś go pobiera i zapisuje w folderze.",
        after: "Faktura z maila i KSeF trafia automatycznie do kolejki.",
      },
      {
        label: "Odczyt danych",
        before: "Ręczne przepisanie numeru, kwot i pozycji.",
        after: "AI odczytuje dane i wypełnia pola w kilka sekund.",
      },
      {
        label: "Sprawdzenie",
        before: "Porównanie z zamówieniem na oko, jeśli ktoś pamięta.",
        after: "Automatyczne porównanie z zamówieniem i oznaczenie różnic.",
      },
      {
        label: "Akceptacja",
        before: "Wydruk krąży po biurze do podpisu.",
        after: "Osoba odpowiedzialna akceptuje fakturę jednym kliknięciem.",
      },
      {
        label: "Księgowanie",
        before: "Paczka faktur trafia do księgowości raz w miesiącu.",
        after: "Zaakceptowane faktury trafiają do programu księgowego na bieżąco.",
      },
    ],
    note: "AI nie działa bezbłędnie. Dlatego zawsze projektujemy kontrolę: człowiek widzi dokumenty, przy których automat ma wątpliwości.",
  },
  process: {
    title: "Jak wdrażamy",
    lead: "Zaczynamy od próbki prawdziwych dokumentów, żeby sprawdzić, jak dobrze AI radzi sobie z waszymi formatami.",
    steps: [
      {
        title: "Przegląd dokumentów",
        body: "Zbieramy przykłady dokumentów i ustalamy, jakie dane trzeba z nich odczytać i dokąd przekazać.",
      },
      {
        title: "Test na próbce",
        body: "Sprawdzamy odczyt na kilkudziesięciu prawdziwych dokumentach i pokazujemy wyniki.",
      },
      {
        title: "Budowa przepływu",
        body: "Łączymy zbieranie, odczyt, sprawdzanie i przekazanie danych w jeden proces.",
      },
      {
        title: "Praca równoległa",
        body: "Przez pierwsze tygodnie automat działa obok ręcznej pracy, żeby porównać wyniki.",
      },
      {
        title: "Przejęcie i rozwój",
        body: "Automat przejmuje codzienną pracę, a my dokładamy kolejne rodzaje dokumentów.",
      },
    ],
  },
  tools: {
    title: "Technologie",
    lead: "Łączymy modele AI do odczytu dokumentów z narzędziami, których używacie w księgowości i sprzedaży.",
    items: [
      { name: "OpenAI, Claude, Gemini", note: "odczyt i rozumienie treści dokumentów" },
      { name: "Azure Document Intelligence", note: "odczyt formularzy i faktur" },
      { name: "KSeF", note: "pobieranie faktur ustrukturyzowanych" },
      { name: "Make, n8n, Power Automate", note: "przepływ dokumentów między systemami" },
      { name: "Airtable", note: "rejestr dokumentów i kolejka wyjątków" },
      { name: "Comarch, enova, Symfonia, Optima", note: "przekazanie danych do systemów księgowych" },
    ],
  },
  faq: [
    {
      question: "Czy AI poradzi sobie ze skanami słabej jakości?",
      answer:
        "Zwykle tak, ale przy bardzo słabych skanach skuteczność spada. Dlatego zaczynamy od testu na waszych dokumentach i ustawiamy kolejkę wyjątków dla przypadków wątpliwych.",
    },
    {
      question: "Co z fakturami z KSeF?",
      answer:
        "Faktury z KSeF mają ustrukturyzowane dane, więc nie trzeba ich odczytywać. Automatyzujemy ich pobieranie, sprawdzanie, akceptację i przekazanie do księgowości.",
    },
    {
      question: "Jakie dokumenty można automatyzować?",
      answer:
        "Faktury, zamówienia, dokumenty dostaw, umowy, protokoły, formularze, CV, wnioski. Najlepiej sprawdzają się dokumenty, które powtarzają się w dużej liczbie.",
    },
    {
      question: "Czy dane z dokumentów są bezpieczne?",
      answer:
        "Korzystamy z usług, w których dane nie służą do trenowania modeli, i ograniczamy dostęp do dokumentów. Projektujemy przepływ zgodnie z RODO.",
    },
    {
      question: "Czy musimy zmieniać program księgowy?",
      answer:
        "Nie. Dane przekazujemy do systemu, którego używacie. Jeśli program nie ma możliwości integracji, szukamy innego sposobu, na przykład importu plików.",
    },
  ],
  relatedArticleSlugs: [
    "integracja-crm-z-fakturowaniem",
    "cyfryzacja-danych-w-firmie",
    "rodo-a-automatyzacja-procesow",
  ],
  relatedServiceSlugs: [
    "automatyzacja-dla-ksiegowosci",
    "cyfryzacja-danych-i-dokumentow",
  ],
  contact: {
    title: "Jakie dokumenty przepisuje twój zespół?",
    body: "Napisz, jakich dokumentów macie najwięcej i dokąd trafiają dane. Sprawdzimy, czy AI poradzi sobie z waszymi formatami.",
    highlights: [
      "Test odczytu na próbce waszych dokumentów",
      "Propozycja przepływu z kontrolą wyjątków",
      "Oddzwonimy w ciągu 1 dnia roboczego",
    ],
  },
};

export default content;
