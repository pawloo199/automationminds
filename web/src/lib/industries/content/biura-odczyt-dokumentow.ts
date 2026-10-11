import type { IndustryPageContent } from "../types";

export const biuraOdczytDokumentow: IndustryPageContent = {
  industrySlug: "biura-rachunkowe",
  subSlug: "odczyt-dokumentow",
  name: "Odczyt dokumentów z AI",
  excerpt: "Dane z faktur, paragonów i wyciągów odczytane przez AI, z propozycją opisu i przekazaniem do programu księgowego.",
  metaTitle: "Odczyt faktur i dokumentów z AI dla biur rachunkowych",
  metaDescription:
    "AI odczytuje dane z faktur, paragonów i innych dokumentów klientów biura, proponuje opis na podstawie historii i przekazuje dane do programu księgowego.",
  primaryKeyword: "odczyt faktur AI biuro rachunkowe",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Biura rachunkowe: odczyt dokumentów",
    title: "Odczyt faktur i dokumentów z AI: księgowy sprawdza, zamiast przepisywać",
    lead: "KSeF objął dużą część faktur, ale do biura nadal trafiają paragony, faktury zagraniczne, rachunki, umowy i dokumenty w skanach. Przepisywanie ich danych do programu księgowego to praca, którą AI wykonuje dziś dobrze. Budujemy rozwiązania, w których AI odczytuje dane, proponuje opis dokumentu na podstawie historii klienta, a księgowy sprawdza wynik i zatwierdza.",
    bullets: [
      "Paragony, faktury zagraniczne, rachunki i skany",
      "Propozycja opisu na podstawie historii klienta",
      "Dane do programu księgowego po zatwierdzeniu",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura, w których dużo dokumentów spoza KSeF trzeba przepisywać ręcznie" },
    { label: "Co automatyzujemy", value: "Odczyt danych, kontrolę poprawności, propozycje opisu, import do programu" },
    { label: "Narzędzia", value: "Modele AI, n8n, program księgowy z importem lub API" },
    { label: "Zasada", value: "AI proponuje, księgowy zatwierdza" },
  ],
  symptoms: {
    title: "Kiedy odczyt dokumentów z AI ma sens",
    lead: "Jeśli te sytuacje dotyczą waszego biura, przepisywanie danych zabiera czas, który mógłby trafić do klientów.",
    items: [
      "Zespół codziennie przepisuje dane z paragonów, faktur zagranicznych i rachunków.",
      "Te same koszty klienta opisuje się co miesiąc tak samo, ale za każdym razem ręcznie.",
      "Dotychczasowy OCR myli pola i więcej trzeba poprawiać, niż oszczędza.",
      "Dokumenty w językach obcych wymagają dodatkowego czasu na zrozumienie treści.",
      "Na koniec miesiąca przybywa dokumentów do wprowadzenia, a zespół pracuje po godzinach.",
      "Błędy przy przepisywaniu wychodzą dopiero przy uzgadnianiu kont.",
    ],
  },
  intro: {
    title: "Jak działa odczyt dokumentów z AI",
    paragraphs: [
      "Dokument trafia do odczytu z miejsca, w którym biuro go zbiera: ze skrzynki, folderu klienta albo portalu. Model AI odczytuje z niego dane: sprzedawcę, NIP, numer i daty, pozycje, stawki i kwoty VAT, walutę i termin płatności. W przeciwieństwie do klasycznego OCR rozumie układ dokumentu, więc radzi sobie z różnymi wzorami faktur, paragonami i dokumentami w językach obcych.",
      "Odczytane dane przechodzą kontrolę: czy kwoty się sumują, czy NIP ma poprawny format, czy dokument nie był już wprowadzony. Na podstawie historii klienta system proponuje opis kosztu, np. kategorię i konto, a dokumenty, przy których model nie jest pewny odczytu, są wyraźnie oznaczone.",
      "Księgowy widzi dokument obok odczytanych danych i zatwierdza je albo poprawia. Dopiero zatwierdzone dane trafiają do programu księgowego przez import pliku lub API. Poprawki zapisujemy, żeby propozycje opisu były coraz trafniejsze dla danego klienta.",
    ],
  },
  scope: {
    title: "Co obejmuje odczyt dokumentów",
    lead: "Zakres zależy od rodzaju dokumentów i programu księgowego biura.",
    items: [
      { title: "Odczyt danych", body: "Sprzedawca, NIP, numer, daty, pozycje, VAT, waluta i termin płatności." },
      { title: "Różne dokumenty", body: "Faktury spoza KSeF, paragony, rachunki, faktury zagraniczne, noty i skany." },
      { title: "Kontrola poprawności", body: "Sumy, format NIP, duplikaty i zgodność z danymi z KSeF." },
      { title: "Propozycja opisu", body: "Kategoria i konto proponowane na podstawie wcześniejszych dokumentów klienta." },
      { title: "Oznaczanie niepewnych odczytów", body: "Dokumenty wymagające uwagi trafiają na początek kolejki." },
      { title: "Ekran sprawdzenia", body: "Dokument obok danych, zatwierdzenie lub poprawka jednym kliknięciem." },
      { title: "Przekazanie do programu", body: "Import zatwierdzonych danych do programu księgowego." },
      { title: "Wykorzystanie poprawek", body: "Poprawki księgowych są uwzględniane w kolejnych propozycjach opisu dla klienta." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od skanu do danych w programie księgowym.",
    items: [
      {
        title: "Paragon od klienta",
        trigger: "Zdjęcie paragonu w folderze klienta",
        steps: ["AI odczytuje sprzedawcę, datę, kwoty i VAT", "Kontrola sum i duplikatów", "Propozycja kategorii kosztu i przekazanie do sprawdzenia"],
        result: "Księgowy zatwierdza gotowe dane zamiast przepisywać paragon.",
      },
      {
        title: "Faktura zagraniczna",
        trigger: "Faktura w języku obcym od dostawcy z UE",
        steps: ["Odczyt danych i krótkie streszczenie przedmiotu faktury po polsku", "Oznaczenie, że dokument może wymagać szczególnego rozliczenia VAT", "Przekazanie do decyzji księgowego"],
        result: "Księgowy od razu wie, czego dotyczy faktura, a decyzję podatkową podejmuje sam.",
      },
    ],
  },
  example: {
    title: "Wprowadzanie dokumentów przed i po wdrożeniu",
    lead: "Przykład biura, w którym spora część dokumentów klientów to paragony i faktury spoza KSeF.",
    rows: [
      { label: "Dane z dokumentu", before: "Przepisywane ręcznie pole po polu.", after: "Odczytane przez AI, sprawdzane przez księgowego." },
      { label: "Opis kosztu", before: "Za każdym razem od nowa.", after: "Propozycja na podstawie historii klienta." },
      { label: "Duplikaty", before: "Wychodzą przy uzgadnianiu.", after: "Oznaczane przed wprowadzeniem." },
      { label: "Dokumenty obce", before: "Dodatkowy czas na tłumaczenie treści.", after: "Streszczenie po polsku obok danych." },
    ],
    note: "To przykład ilustracyjny. Skuteczność odczytu zależy od jakości dokumentów, dlatego sprawdzamy ją na waszych plikach przed wdrożeniem.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zanim uruchomimy odczyt, sprawdzamy jego jakość na waszych dokumentach.",
    phases: [
      { title: "Próbka dokumentów", duration: "kilka dni", body: "Zbieramy zanonimizowaną próbkę typowych dokumentów i sprawdzamy jakość odczytu.", fromYou: "Kilkadziesiąt przykładowych dokumentów różnych klientów." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy zakres danych, kontrole, zasady propozycji opisu i format przekazania do programu księgowego.", fromYou: "Informacja o programie księgowym i sposobie importu." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływ i ekran sprawdzenia, testujemy go na wybranych klientach.", fromYou: "Księgowa, która porównuje wyniki z ręcznym wprowadzaniem." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy kolejnych klientów i pilnujemy jakości odczytu przy nowych typach dokumentów.", fromYou: "Zgłaszanie dokumentów, z którymi odczyt sobie nie radzi." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od samego odczytu, a propozycje opisu dodać, gdy zbierze się historia.",
    items: [
      { name: "Odczyt danych", description: "Dla biur, które chcą skończyć z przepisywaniem.", includes: ["Odczyt danych z dokumentów", "Kontrola sum i duplikatów", "Ekran sprawdzenia", "Plik do importu"] },
      { name: "Odczyt i opis", description: "Dla biur, które chcą skrócić także opisywanie kosztów.", includes: ["Wszystko z wariantu Odczyt danych", "Propozycje opisu na podstawie historii", "Wykorzystanie poprawek", "Oznaczanie niepewnych odczytów"] },
      { name: "Pełny przepływ", description: "Dla biur, które chcą połączyć zbieranie, odczyt i KSeF.", includes: ["Wszystko z wariantu Odczyt i opis", "Zbieranie dokumentów od klientów", "Łączenie z fakturami z KSeF", "Raport przetworzonych dokumentów"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po teście na waszej próbce. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba i rodzaj dokumentów miesięcznie,",
      "zakres danych do odczytu, np. pozycje dokumentu,",
      "sposób przekazania danych do programu księgowego,",
      "propozycje opisu i liczba klientów z własnymi zasadami,",
      "koszt korzystania z modeli AI, zależny od liczby dokumentów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "AI pomyli kwotę lub stawkę VAT.", mitigation: "Kontrola sum i ekran sprawdzenia przed importem. Do programu księgowego trafiają tylko zatwierdzone dane." },
      { risk: "Propozycja opisu będzie błędna.", mitigation: "Propozycja jest podpowiedzią. Księgowy ją zatwierdza lub poprawia, a poprawka wpływa na kolejne propozycje." },
      { risk: "Dane klientów trafią do modelu, który na nich trenuje.", mitigation: "Korzystamy z modeli w planach bez trenowania na danych i przesyłamy tylko to, co potrzebne do odczytu." },
      { risk: "Słaba jakość skanów i zdjęć.", mitigation: "Nieczytelne dokumenty są oznaczane od razu, a klient dostaje prośbę o lepszą kopię." },
    ],
  },
  faq: [
    { question: "Czym to się różni od OCR w programie księgowym?", answer: "Klasyczny OCR szuka tekstu w określonych miejscach dokumentu. Model AI rozumie układ dokumentu, więc lepiej radzi sobie z nietypowymi wzorami, paragonami i dokumentami w językach obcych, a do tego może proponować opis kosztu." },
    { question: "Czy po wejściu KSeF odczyt dokumentów jest nadal potrzebny?", answer: "W wielu biurach tak. KSeF obejmuje faktury krajowe, ale paragony, faktury zagraniczne, rachunki i inne dokumenty nadal trzeba wprowadzić. To one często zabierają najwięcej czasu." },
    { question: "Czy AI sam zaksięguje dokument?", answer: "Nie. AI odczytuje dane i proponuje opis, a do programu księgowego trafiają one dopiero po zatwierdzeniu przez księgowego." },
    { question: "Z jakimi programami księgowymi to działa?", answer: "Z programami, które pozwalają na import plików lub mają API. Sposób przekazania danych dobieramy po sprawdzeniu waszego programu." },
    { question: "Jak sprawdzicie, czy odczyt jest wystarczająco dobry?", answer: "Przed wdrożeniem testujemy odczyt na próbce waszych dokumentów i pokazujemy wyniki. Dopiero wtedy decydujecie o dalszych krokach." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "automatyzacja-dla-ksiegowosci", "cyfryzacja-danych-i-dokumentow"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych"],
  relatedToolSlugs: ["claude", "chatgpt", "n8n", "ksef"],
  relatedArticleSlugs: ["porzadek-w-danych-przed-ai-i-automatyzacja", "wdrozenie-ai-w-malej-i-sredniej-firmie", "rodo-a-automatyzacja-procesow"],
};
