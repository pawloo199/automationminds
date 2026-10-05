import type { ToolSubpageContent } from "../types";

export const n8nKsef: ToolSubpageContent = {
  toolSlug: "n8n",
  slug: "ksef",
  alsoForToolSlugs: ["ksef"],
  name: "n8n i KSeF",
  excerpt: "Integracja n8n z KSeF: pobieranie faktur kosztowych, wysyłka faktur sprzedażowych i obieg dokumentów.",
  metaTitle: "n8n i KSeF: integracja i automatyzacja e-faktur",
  metaDescription:
    "Łączymy n8n z KSeF przez API: pobieranie faktur kosztowych, wysyłka faktur sprzedażowych, akceptacje, księgowość i raporty. Dane na waszym serwerze w UE.",
  primaryKeyword: "n8n KSeF",
  updatedAt: "2026-10-05",
  hero: {
    eyebrow: "n8n i e-faktury",
    title: "n8n i KSeF: automatyczny obieg e-faktur w waszej firmie",
    lead: "Łączymy n8n bezpośrednio z API KSeF. Faktury kosztowe same trafiają do akceptacji i księgowości, faktury sprzedażowe wychodzą do KSeF z CRM lub sklepu, a numer KSeF i potwierdzenie wracają do waszych systemów. Na serwerze w UE, z pełną kontrolą nad danymi finansowymi.",
    bullets: [
      "Bezpośrednie połączenie z API KSeF",
      "Faktury kosztowe i sprzedażowe w jednym obiegu",
      "Dane finansowe na waszym serwerze",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy i biura rachunkowe, które chcą zautomatyzować pracę z KSeF" },
    { label: "Jak", value: "n8n połączone z API KSeF, programem księgowym, CRM i obiegiem akceptacji" },
    { label: "Czas wdrożenia", value: "Zwykle kilka tygodni, zależnie od zakresu" },
    { label: "Po waszej stronie", value: "Uprawnienia do KSeF i osoba z finansów" },
  ],
  symptoms: {
    title: "Kiedy n8n i KSeF to dobre połączenie",
    lead: "Integracja n8n z KSeF ma sens, gdy program do faktur nie daje wam tego, czego potrzebujecie.",
    items: [
      "Ktoś codziennie loguje się do KSeF lub programu i ręcznie pobiera faktury kosztowe.",
      "Faktury z KSeF trzeba rozesłać do kierowników do akceptacji i opisu.",
      "Faktury sprzedażowe powstają w CRM, sklepie lub systemie branżowym, który nie łączy się z KSeF.",
      "Biuro rachunkowe obsługuje wielu klientów i chce zbierać ich faktury automatycznie.",
      "Program księgowy ma integrację z KSeF, ale nie obsługuje waszego obiegu akceptacji.",
      "Chcecie mieć dane z faktur w raportach i bazie, a nie tylko w programie księgowym.",
    ],
  },
  intro: {
    title: "Jak n8n łączy się z KSeF",
    paragraphs: [
      "KSeF udostępnia API, przez które systemy mogą wysyłać i pobierać faktury ustrukturyzowane. Programy księgowe korzystają z niego w swoich integracjach, ale ich możliwości są ograniczone do tego, co przewidział producent. n8n pozwala zbudować dokładnie taki obieg, jakiego potrzebuje firma.",
      "Przepływ w n8n uwierzytelnia się w KSeF uprawnieniami nadanymi przez osobę uprawnioną w firmie, pobiera nowe faktury, odczytuje dane z pliku XML i przekazuje je dalej: do akceptacji, do programu księgowego, do bazy kosztów. W drugą stronę n8n przygotowuje fakturę sprzedażową z danych z CRM lub sklepu, wysyła ją do KSeF i zapisuje nadany numer.",
      "Ponieważ faktury z KSeF mają ustrukturyzowaną postać, nie trzeba ich odczytywać z PDF. AI przydaje się dopiero przy fakturach spoza KSeF, np. od zagranicznych dostawców, które trafiają do tego samego obiegu. Szerzej o samym KSeF piszemy na stronie poświęconej automatyzacji KSeF.",
    ],
  },
  scope: {
    title: "Co budujemy w n8n wokół KSeF",
    lead: "Zakres dobieramy do tego, co już robi wasz program księgowy, żeby nie dublować funkcji.",
    items: [
      { title: "Pobieranie faktur kosztowych", body: "Regularne pobieranie nowych faktur zakupowych z KSeF, z kontrolą duplikatów." },
      { title: "Odczyt danych z XML", body: "Dostawca, pozycje, kwoty, terminy i rachunek zapisane w strukturze gotowej do dalszej pracy." },
      { title: "Akceptacje i opis kosztów", body: "Faktura trafia do właściwej osoby w Teams lub mailu, z propozycją MPK i kategorii." },
      { title: "Przekazanie do księgowości", body: "Zaakceptowane faktury trafiają do programu księgowego lub biura rachunkowego z opisem." },
      { title: "Wysyłka faktur sprzedażowych", body: "Faktura z CRM, sklepu lub systemu branżowego wysyłana do KSeF, z zapisem numeru KSeF." },
      { title: "Kontrola i powiadomienia", body: "Sprawdzanie statusu wysyłki, obsługa odrzuceń i powiadomienia o problemach." },
      { title: "Biała lista VAT", body: "Sprawdzenie rachunku dostawcy przed przygotowaniem płatności." },
      { title: "Raporty", body: "Koszty i sprzedaż z KSeF w bazie danych lub arkuszu, gotowe do raportów." },
    ],
  },
  comparison: {
    title: "Integracja KSeF w programie czy w n8n",
    lead: "Integracja w programie księgowym wystarcza wielu firmom. n8n dodaje to, czego program nie obsługuje.",
    columns: ["n8n z API KSeF", "Integracja w programie księgowym"],
    rows: [
      { label: "Pobieranie i wysyłka faktur", values: ["Tak", "Tak"] },
      { label: "Własny obieg akceptacji", values: ["Dowolny, w Teams, mailu lub aplikacji", "Zależnie od programu, zwykle ograniczony"] },
      { label: "Wysyłka z CRM, sklepu i systemów branżowych", values: ["Tak", "Zwykle przez import lub ręcznie"] },
      { label: "Dane w raportach i innych systemach", values: ["Tak, w dowolnym miejscu", "Głównie w programie"] },
      { label: "Utrzymanie", values: ["Po waszej stronie lub w opiece", "Po stronie producenta programu"] },
    ],
    note: "Porównanie jest uproszczone. Często najlepiej działa połączenie: program księgowy do księgowania, n8n do obiegu i integracji wokół niego.",
  },
  example: {
    title: "Faktury kosztowe przed i po integracji n8n z KSeF",
    lead: "Przykład firmy usługowej z kilkoma działami, która księguje w zewnętrznym biurze rachunkowym.",
    rows: [
      { label: "Pobieranie", before: "Księgowa loguje się do KSeF i pobiera faktury ręcznie.", after: "n8n pobiera nowe faktury automatycznie kilka razy dziennie." },
      { label: "Akceptacja", before: "Faktury rozsyłane mailem do kierowników.", after: "Karta akceptacji w Teams z propozycją opisu kosztu." },
      { label: "Biuro rachunkowe", before: "Paczka faktur i arkusz z opisami raz w miesiącu.", after: "Opisane faktury trafiają do biura na bieżąco." },
      { label: "Płatności", before: "Terminy sprawdzane ręcznie.", after: "Zestawienie płatności z terminami i sprawdzonym rachunkiem." },
      { label: "Raport kosztów", before: "Składany z programu na prośbę zarządu.", after: "Aktualny raport kosztów według działów." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym procesie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Przy każdym piszemy, czego potrzebujemy od was.",
    phases: [
      {
        title: "Przegląd procesu",
        duration: "kilka dni",
        body: "Sprawdzamy, co dziś robi wasz program księgowy z KSeF, jak wygląda obieg faktur i czego brakuje.",
        fromYou: "Rozmowa z osobą z finansów i informacja o programie księgowym.",
      },
      {
        title: "Uprawnienia i środowisko",
        duration: "kilka dni",
        body: "Przygotowujemy n8n, najczęściej na serwerze w UE, i konfigurujemy dostęp do KSeF zgodnie z jego zasadami.",
        fromYou: "Nadanie uprawnień do KSeF przez osobę uprawnioną w firmie.",
      },
      {
        title: "Budowa i testy",
        duration: "zwykle 2–4 tygodnie",
        body: "Budujemy przepływy i testujemy je na prawdziwych fakturach, równolegle z dotychczasowym sposobem pracy.",
        fromYou: "Osoba, która sprawdza wyniki testów.",
      },
      {
        title: "Start i opieka",
        duration: "stale",
        body: "Przełączamy obieg, pilnujemy działania i reagujemy na zmiany w KSeF i systemach, z którymi łączy się n8n.",
        fromYou: "Zgłaszanie uwag w pierwszych tygodniach.",
      },
    ],
  },
  variants: {
    title: "Warianty integracji",
    lead: "Można zacząć od faktur kosztowych i dodać sprzedaż w kolejnym kroku.",
    items: [
      {
        name: "Faktury kosztowe",
        description: "Dla firm, które chcą przede wszystkim uporządkować obieg kosztów.",
        includes: [
          "Pobieranie faktur zakupowych z KSeF",
          "Akceptacja w Teams lub mailu",
          "Przekazanie do księgowości",
          "Powiadomienia o błędach",
        ],
      },
      {
        name: "Koszty i sprzedaż",
        description: "Dla firm, które wystawiają faktury poza programem księgowym.",
        includes: [
          "Wszystko z wariantu Faktury kosztowe",
          "Wysyłka faktur z CRM, sklepu lub systemu branżowego",
          "Zapis numeru KSeF i obsługa odrzuceń",
          "Faktury spoza KSeF odczytywane przez AI",
          "Biała lista VAT i zestawienie płatności",
        ],
      },
      {
        name: "Dla biur rachunkowych",
        description: "Dla biur, które obsługują faktury wielu klientów.",
        includes: [
          "Pobieranie faktur dla wielu podmiotów",
          "Rozdzielenie dokumentów według klientów",
          "Przekazanie do programu księgowego biura",
          "Raport kompletności dokumentów",
          "Uprawnienia zgodne z pełnomocnictwami",
        ],
      },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie procesu. Na koszt wpływa przede wszystkim:",
    items: [
      "zakres: tylko faktury kosztowe czy także sprzedażowe,",
      "liczba systemów, z którymi łączy się n8n,",
      "sposób przekazania danych do programu księgowego: plik importu czy API,",
      "liczba podmiotów, np. w biurze rachunkowym,",
      "środowisko: serwer w UE lub wasza infrastruktura, oraz zakres opieki.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Zmiany w API lub strukturze faktur KSeF.", mitigation: "Śledzimy komunikaty Ministerstwa Finansów i aktualizujemy przepływy podczas opieki." },
      { risk: "Niedostępność KSeF.", mitigation: "Przepływy ponawiają próby, a o dłuższych problemach informują osobę odpowiedzialną. Procedury awaryjne ustalamy z księgowością." },
      { risk: "Zbyt szerokie uprawnienia do KSeF.", mitigation: "Integracja dostaje tylko uprawnienia potrzebne do swoich zadań, a dane dostępowe są zaszyfrowane." },
      { risk: "Duplikaty faktur w księgowości.", mitigation: "Każda faktura jest identyfikowana numerem KSeF, a przed przekazaniem sprawdzamy, czy nie była już przetworzona." },
    ],
  },
  faq: [
    { question: "Czy n8n ma gotową integrację z KSeF?", answer: "n8n łączy się z KSeF przez API KSeF. Budujemy to połączenie w przepływach n8n, zamiast polegać na nieoficjalnych dodatkach, żeby mieć pełną kontrolę nad uwierzytelnianiem i obsługą błędów." },
    { question: "Czy integracja n8n z KSeF zastąpi program księgowy?", answer: "Nie. Program księgowy zostaje. n8n zajmuje się tym, co dzieje się wokół faktur: pobieraniem, akceptacją, opisem, wysyłką z innych systemów i raportami." },
    { question: "Jakie uprawnienia do KSeF są potrzebne?", answer: "Takie, które pozwalają integracji pobierać lub wysyłać faktury w imieniu firmy. Nadaje je osoba uprawniona w firmie. Pomagamy ustalić minimalny potrzebny zakres." },
    { question: "Czy dane z faktur są bezpieczne?", answer: "n8n może działać na serwerze w UE, który należy do was, więc dane finansowe nie trafiają do zewnętrznej usługi automatyzacji. Dane dostępowe do KSeF są zaszyfrowane." },
    { question: "Czy obsłużycie biuro rachunkowe z wieloma klientami?", answer: "Tak. Budujemy przepływy, które pobierają faktury dla wielu podmiotów zgodnie z nadanymi uprawnieniami i przekazują je do programu biura." },
    { question: "Co z fakturami spoza KSeF?", answer: "Faktury od zagranicznych dostawców i inne dokumenty spoza KSeF trafiają do tego samego obiegu. Dane z PDF odczytuje AI, a dalsze kroki są takie same." },
    { question: "Czy można zacząć od samych faktur kosztowych?", answer: "Tak, to najczęstszy pierwszy krok. Wysyłkę faktur sprzedażowych można dodać później na tym samym środowisku." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "integracje-systemow", "ai-w-obsludze-dokumentow"],
  relatedArticleSlugs: ["integracja-crm-z-fakturowaniem", "n8n-co-to-jest", "jak-zainstalowac-n8n"],
};
