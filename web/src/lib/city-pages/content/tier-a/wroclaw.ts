import type { CityPageContent } from "../../types";

export const wroclaw: CityPageContent = {
  slug: "wroclaw",
  name: "Wrocław",
  nameGenitive: "Wrocławia",
  nameLocative: "Wrocławiu",
  voivodeship: "dolnośląskie",
  regionCluster: "dolny-slask",
  tier: "A",
  metaTitle: "Automatyzacja procesów we Wrocławiu | Automation Minds",
  metaDescription:
    "Automatyzacja procesów i wdrożenia AI dla firm z Wrocławia: produkcja, logistyka, usługi i biuro. Siedziba we Wrocławiu, bezpłatna konsultacja 30 min.",
  heroTitle: "Automatyzacja procesów we Wrocławiu",
  heroLead:
    "Pomagamy wrocławskim firmom produkcyjnym, logistycznym i usługowym przejść od arkuszy i telefonów do procesów, które działają same. Mamy siedzibę we Wrocławiu, więc możemy spotkać się także na miejscu.",
  heroImage: {
    url: "https://images.unsplash.com/photo-1721552786123-919ab6707184?w=1920&q=80",
    alt: "Panorama Wrocławia z lotu ptaka z Odrą",
  },
  highlight: {
    title: "Siedziba we Wrocławiu",
    body: "Nasze biuro jest przy ul. Sołtysowickiej. Większość projektów prowadzimy zdalnie, ale z wrocławskimi firmami łatwo nam spotkać się na warsztacie przy linii produkcyjnej, w magazynie albo w biurze.",
  },
  introParagraphs: [
    "Wrocław łączy przemysł, logistykę i nowoczesne usługi. W wielu firmach hala produkcyjna, magazyn i biuro pracują jednak na innych danych: status zlecenia w systemie różni się od tego, co wie handlowiec, a księgowość dowiaduje się o wysyłce z opóźnieniem.",
    "Automatyzacja procesów we Wrocławiu zaczyna się u nas od rozmowy o tym, gdzie informacja utyka. Potem łączymy systemy, których już używacie, porządkujemy dane i wdrażamy AI tam, gdzie przyspiesza pracę z dokumentami.",
  ],
  economy: {
    title: "Czym żyje wrocławski biznes",
    paragraphs: [
      "Wrocław jest jednym z największych w Polsce ośrodków usług biznesowych i IT. Działają tu centra finansowo-księgowe, centra obsługi klienta i firmy technologiczne, które pracują dla klientów z całej Europy.",
      "Wokół miasta, w strefach ekonomicznych w podwrocławskich gminach, pracują zakłady produkcyjne, w tym dostawcy dla motoryzacji oraz producenci elektroniki i AGD. Autostrada A4, obwodnica miasta i droga ekspresowa S8 sprawiły, że powstało tu wiele centrów logistycznych i magazynów.",
      "Obok dużych graczy działa gęsta sieć małych i średnich firm: dostawców dla przemysłu, firm usługowych, handlowych i sklepów internetowych. To one mają zwykle najwięcej ręcznej pracy między systemami i najwięcej zyskują na automatyzacji.",
    ],
  },
  localContext:
    "Wrocławskie firmy najczęściej zgłaszają się z podobnymi kłopotami: statusy zleceń sprawdzane telefonicznie, zamówienia przepisywane z maili do ERP, raporty jakości składane ręcznie dla klientów z Niemiec i Skandynawii, a w centrach usług wiele systemów, między którymi ludzie kopiują dane.",
  whyHere:
    "Rynek pracy we Wrocławiu jest wymagający, a doświadczonych pracowników trudno pozyskać i zatrzymać. Automatyzacja pozwala im zajmować się pracą, która wymaga kompetencji, zamiast przepisywaniem danych, i ułatwia wdrożenie nowych osób.",
  focusIndustries: [
    {
      title: "Produkcja i montaż",
      body: "Statusy zleceń, zgłoszenia z hali i stany materiałów w jednym miejscu, żeby problemy wychodziły na jaw wcześniej niż przy wysyłce.",
    },
    {
      title: "Logistyka i magazyny",
      body: "Awizacje, statusy dostaw, etykiety i powiadomienia dla klientów bez ręcznych maili i przepisywania numerów.",
    },
    {
      title: "Centra usług i IT",
      body: "Obieg zgłoszeń, onboarding pracowników i raporty dla klientów przy pracy w wielu systemach naraz.",
    },
    {
      title: "Handel B2B i e-commerce",
      body: "Zamówienia z wielu kanałów, oferty z cennika i aktualne stany, żeby sprzedaż nie pracowała na wczorajszych danych.",
    },
  ],
  focusProcesses: [
    {
      title: "Status zlecenia produkcyjnego",
      body: "Jedna aktualna informacja o postępie, widoczna dla planowania, sprzedaży i klienta.",
    },
    {
      title: "Reklamacje i jakość",
      body: "Od zgłoszenia po zamknięcie, z dokumentacją i terminami, bez ginących wątków między działami.",
    },
    {
      title: "Zamówienia i dokumenty od klientów",
      body: "AI odczytuje zamówienia i dokumenty, także po niemiecku, a dane trafiają do ERP bez przepisywania.",
    },
    {
      title: "Raporty dla zarządu i klientów",
      body: "Wskaźniki produkcji, jakości i terminowości odświeżane automatycznie, a nie składane ręcznie w piątek.",
    },
  ],
  example: {
    title: "Zlecenie w firmie produkcyjnej spod Wrocławia przed i po automatyzacji",
    lead: "Przykład zakładu, który produkuje na zamówienie dla odbiorców z Polski i Niemiec. Tak zmienia się droga jednego zlecenia.",
    rows: [
      {
        label: "Zamówienie od klienta",
        before: "PDF w mailu, ktoś przepisuje pozycje do ERP.",
        after: "AI odczytuje zamówienie, także po niemiecku, i przygotowuje zlecenie w ERP do sprawdzenia.",
      },
      {
        label: "Status dla handlowca",
        before: "Telefon do kierownika zmiany.",
        after: "Status zlecenia widoczny w CRM na bieżąco.",
      },
      {
        label: "Braki materiałów",
        before: "Wychodzą na jaw w dniu produkcji.",
        after: "Powiadomienie, gdy stan spada poniżej ustalonego poziomu.",
      },
      {
        label: "Raport jakości dla klienta",
        before: "Składany ręcznie z kilku arkuszy.",
        after: "Generowany automatycznie z danych z kontroli jakości.",
      },
      {
        label: "Wysyłka i faktura",
        before: "Biuro dowiaduje się o gotowości z opóźnieniem.",
        after: "Zakończenie zlecenia uruchamia dokumenty wysyłkowe i fakturę.",
      },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym procesie.",
  },
  howWeWork:
    "Z wrocławskimi firmami zaczynamy od bezpłatnej, 30-minutowej rozmowy. Jeśli proces najlepiej zobaczyć na miejscu, umawiamy krótki warsztat w firmie. Potem proponujemy wąski zakres z wyceną, wdrażamy go etapami i uczymy zespół korzystać z rozwiązania.",
  faq: [
    {
      id: "wro-1",
      question: "Czy macie biuro we Wrocławiu?",
      answer:
        "Tak. Siedziba Automation Minds jest we Wrocławiu przy ul. Sołtysowickiej. Większość pracy prowadzimy zdalnie, ale z wrocławskimi firmami chętnie spotykamy się na miejscu, gdy to przyspiesza projekt.",
    },
    {
      id: "wro-2",
      question: "Czy automatyzujecie procesy w firmach produkcyjnych?",
      answer:
        "Tak. Zajmujemy się procesami wokół produkcji: zleceniami, dokumentami, raportami i przepływem informacji między halą a biurem. Nie automatyzujemy maszyn, tylko pracę, która dzieje się między systemami.",
    },
    {
      id: "wro-3",
      question: "Czy łączycie automatyzacje z systemami ERP?",
      answer:
        "Tak, jeśli system udostępnia API, bazę danych albo import plików. Dobieramy sposób połączenia tak, żeby nie zagrażał stabilności produkcji.",
    },
    {
      id: "wro-4",
      question: "Ile kosztuje automatyzacja dla firmy z Wrocławia?",
      answer:
        "Koszt zależy od procesu i liczby systemów, a nie od lokalizacji. Po bezpłatnej konsultacji i przeglądzie procesu dostajecie wycenę pierwszego etapu, zanim zapadnie jakakolwiek decyzja.",
    },
    {
      id: "wro-5",
      question: "Czy pomagacie wdrożyć AI we wrocławskich firmach?",
      answer:
        "Tak. Najczęściej zaczynamy od odczytu dokumentów, asystenta AI na firmowych procedurach albo szkicowania odpowiedzi dla klientów. Zawsze od pilotażu na waszych danych.",
    },
    {
      id: "wro-6",
      question: "Czy pracujecie też z firmami spod Wrocławia?",
      answer:
        "Tak. Zapraszamy do współpracy firmy z całego Dolnego Śląska, w tym z miejscowości wokół Wrocławia, takich jak Oleśnica, Oława, Środa Śląska czy Trzebnica.",
    },
  ],
  relatedServiceSlugs: [
    "automatyzacja-w-produkcji",
    "automatyzacja-dla-logistyki",
    "ai-w-obsludze-dokumentow",
    "integracje-systemow",
    "automatyzacja-raportow",
    "audyt-procesow-biznesowych",
  ],
  nearbyCitySlugs: ["legnica", "walbrzych", "olesnica", "olawa", "trzebnica", "sroda-slaska"],
};
