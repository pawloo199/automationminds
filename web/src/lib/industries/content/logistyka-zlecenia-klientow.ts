import type { IndustryPageContent } from "../types";

export const logistykaZleceniaKlientow: IndustryPageContent = {
  industrySlug: "firmy-logistyczne",
  subSlug: "zlecenia-klientow",
  name: "Zlecenia od klientów",
  excerpt: "Zamówienia wysyłkowe, przyjęcia i zlecenia transportowe z maili, plików i systemów klientów prosto do WMS lub TMS.",
  metaTitle: "Zlecenia od klientów do WMS i TMS bez przepisywania",
  metaDescription:
    "Automatyzujemy przyjmowanie zleceń od klientów firmy logistycznej: odczyt maili, Excela i PDF z AI, kontrola danych i utworzenie zleceń w WMS lub TMS.",
  primaryKeyword: "przyjmowanie zleceń w firmie logistycznej",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy logistyczne: zlecenia od klientów",
    title: "Zlecenia od klientów prosto do WMS: koniec przepisywania plików",
    lead: "Każdy klient operatora logistycznego przysyła zlecenia inaczej: jeden plikiem Excel, drugi w PDF, trzeci w treści maila, czwarty ze swojego systemu. Biuro obsługi klienta przepisuje je do WMS lub TMS, a każdy błąd wychodzi dopiero na magazynie albo u odbiorcy. Automatyzujemy tę pracę: zlecenia są odczytywane w dowolnym formacie, sprawdzane i tworzone w systemie, a klient dostaje potwierdzenie.",
    bullets: [
      "Zlecenia z maili, Excela, PDF i systemów klientów",
      "Kontrola indeksów, ilości i adresów przed magazynem",
      "Potwierdzenie dla klienta i lista wyjątków dla biura",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Operatorzy logistyczni i magazyny kontraktowe obsługujące wielu klientów" },
    { label: "Co automatyzujemy", value: "Odczyt zleceń, kontrolę danych, tworzenie zleceń, potwierdzenia, wyjątki" },
    { label: "Narzędzia", value: "Poczta, WMS, TMS, model AI, n8n" },
    { label: "Zasada", value: "Zlecenia z wątpliwościami sprawdza człowiek" },
  ],
  symptoms: {
    title: "Kiedy przyjmowanie zleceń warto zautomatyzować",
    lead: "Jeśli te sytuacje są codziennością, biuro obsługi klienta pracuje jako przepisywacz danych.",
    items: [
      "Zlecenia od klientów przepisuje się ręcznie do WMS lub TMS.",
      "Każdy klient ma inny format pliku, a niektórzy zmieniają go bez uprzedzenia.",
      "Błędy w indeksach, ilościach lub adresach wychodzą dopiero na magazynie.",
      "W szczycie zlecenia czekają w skrzynce, a magazyn czeka na zlecenia.",
      "Klient nie wie, czy jego zlecenie zostało przyjęte, i dzwoni, żeby się upewnić.",
      "Nowy klient oznacza dodatkową pracę biura przez pierwsze tygodnie współpracy.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja przyjmowania zleceń",
    paragraphs: [
      "Zlecenia trafiają do systemu tymi kanałami, którymi przychodzą dziś: na wspólny adres mailowy, przez portal albo bezpośrednio z systemu klienta. Dla klientów, którzy przysyłają pliki w stałym formacie, budujemy stałe odczytanie. Dla pozostałych model AI odczytuje zlecenie z maila, Excela lub PDF niezależnie od układu: pozycje, indeksy, ilości, adresy dostawy, terminy i uwagi.",
      "Odczytane dane przechodzą kontrolę: czy indeksy istnieją w WMS, czy jest towar, czy adres jest kompletny, czy zlecenie nie jest duplikatem. Zlecenia bez problemów są tworzone w WMS lub TMS automatycznie, a te z wątpliwościami trafiają na listę wyjątków dla biura, z zaznaczonym problemem.",
      "Klient dostaje potwierdzenie przyjęcia zlecenia, a jeśli czegoś brakuje, prośbę o uzupełnienie. Biuro zajmuje się wyjątkami i kontaktem z klientami, a nie przepisywaniem.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zleceń",
    lead: "Zakres dopasowujemy do klientów, formatów i systemów firmy.",
    items: [
      { title: "Zbieranie zleceń", body: "Zlecenia z poczty, portalu i systemów klientów w jednym miejscu." },
      { title: "Odczyt z AI", body: "Pozycje, indeksy, ilości, adresy i terminy z dowolnego formatu." },
      { title: "Stałe formaty", body: "Stałe odczytanie dla klientów, którzy przysyłają pliki w tym samym układzie." },
      { title: "Kontrola danych", body: "Indeksy, dostępność, adresy i duplikaty sprawdzone przed utworzeniem zlecenia." },
      { title: "Tworzenie zleceń", body: "Zlecenia w WMS lub TMS bez przepisywania." },
      { title: "Lista wyjątków", body: "Zlecenia wymagające sprawdzenia z opisem problemu." },
      { title: "Potwierdzenia", body: "Informacja dla klienta o przyjęciu zlecenia lub brakach." },
      { title: "Raport", body: "Liczba zleceń, wyjątków i czas przyjęcia według klientów." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od pliku klienta do zlecenia na magazynie.",
    items: [
      {
        title: "Plik z zamówieniami",
        trigger: "Mail z plikiem Excel od klienta",
        steps: ["Odczyt pozycji i adresów", "Kontrola indeksów i dostępności w WMS", "Utworzenie zleceń i potwierdzenie dla klienta"],
        result: "Zlecenia są na magazynie kilka minut po wysłaniu pliku przez klienta.",
      },
      {
        title: "Zlecenie z błędem",
        trigger: "Indeks z pliku nie istnieje w WMS",
        steps: ["Zlecenie trafia na listę wyjątków z opisem problemu", "Prośba do klienta o wyjaśnienie", "Po poprawce zlecenie tworzy się automatycznie"],
        result: "Błąd jest wyjaśniony przed kompletacją, a nie po reklamacji odbiorcy.",
      },
    ],
  },
  example: {
    title: "Zlecenia przed i po automatyzacji",
    lead: "Przykład magazynu kontraktowego obsługującego kilkunastu klientów z różnymi formatami zleceń.",
    rows: [
      { label: "Przyjęcie", before: "Przepisywanie plików do WMS.", after: "Odczyt i utworzenie zleceń automatycznie." },
      { label: "Błędy", before: "Wychodzą na magazynie.", after: "Wychwycone przy kontroli danych." },
      { label: "Szczyt", before: "Zlecenia czekają w skrzynce.", after: "Zlecenia na magazynie bez opóźnień." },
      { label: "Klient", before: "Dzwoni, żeby potwierdzić przyjęcie.", after: "Dostaje potwierdzenie automatycznie." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od jednego klienta z dużą liczbą zleceń, a potem dodajemy kolejnych.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy formaty zleceń najważniejszych klientów i możliwości WMS lub TMS.", fromYou: "Przykładowe zlecenia od kilku klientów i informacja o systemach." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy zakres danych, kontrole, zasady wyjątków i treść potwierdzeń.", fromYou: "Akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływ i testujemy go na zleceniach wybranego klienta, równolegle z dotychczasowym sposobem.", fromYou: "Osoba z biura porównująca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy kolejnych klientów i pilnujemy zmian w ich formatach.", fromYou: "Informacja o nowych klientach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od jednego klienta i rozszerzać zakres.",
    items: [
      { name: "Jeden klient", description: "Dla firm, które chcą sprawdzić automatyzację na największym kliencie.", includes: ["Odczyt zleceń jednego klienta", "Kontrola danych", "Tworzenie zleceń w WMS", "Lista wyjątków"] },
      { name: "Wszyscy klienci", description: "Dla firm, które chcą obsłużyć wszystkie formaty.", includes: ["Wszystko z wariantu Jeden klient", "Odczyt z AI dla dowolnych formatów", "Potwierdzenia dla klientów", "Raport zleceń i wyjątków"] },
      { name: "Zlecenia i agent", description: "Dla firm, które chcą odciążyć biuro także od kontaktu z klientami.", includes: ["Wszystko z wariantu Wszyscy klienci", "Agent zbierający brakujące dane od klientów", "Połączenia z systemami największych klientów", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba klientów i formatów zleceń,",
      "liczba zleceń dziennie,",
      "możliwości integracji WMS lub TMS,",
      "zakres kontroli danych,",
      "koszt korzystania z modeli AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "AI źle odczyta ilość lub indeks.", mitigation: "Kontrola z danymi w WMS i oznaczanie pozycji z niepewnym odczytem do sprawdzenia." },
      { risk: "Klient zmieni format pliku.", mitigation: "AI radzi sobie ze zmianami układu, a nietypowe pliki trafiają do wyjątków zamiast do WMS." },
      { risk: "Duplikat zlecenia trafi na magazyn.", mitigation: "Kontrola duplikatów po numerze zlecenia klienta i zawartości." },
      { risk: "Przestój automatyzacji w szczycie.", mitigation: "Monitoring działania i możliwość przejścia na ręczne przyjmowanie bez utraty zleceń." },
    ],
  },
  faq: [
    { question: "Czy AI odczyta zlecenia w PDF?", answer: "Tak, także skany i pliki z nietypowym układem. Dane przed utworzeniem zlecenia przechodzą kontrolę z WMS." },
    { question: "Co z klientami, którzy mają własne systemy?", answer: "Dla największych klientów warto zbudować bezpośrednie połączenie systemów, jeśli ich systemy na to pozwalają. Dla pozostałych wystarcza odczyt z maili i plików." },
    { question: "Czy zlecenia trafią do naszego WMS?", answer: "Tak, przez API lub import plików, zależnie od możliwości systemu. Sprawdzamy to przy przeglądzie." },
    { question: "Co dzieje się ze zleceniem z błędem?", answer: "Trafia na listę wyjątków z opisem problemu, a klient może dostać prośbę o wyjaśnienie. Po poprawce zlecenie tworzy się automatycznie." },
    { question: "Czy to działa dla zleceń transportowych?", answer: "Tak. Zlecenia transportowe mogą trafiać do TMS w ten sam sposób jak zlecenia magazynowe do WMS." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-logistyki", "ai-w-obsludze-dokumentow", "integracje-systemow"],
  relatedProcessSlugs: ["przyjmowanie-zamowien"],
  relatedToolSlugs: ["n8n", "chatgpt", "microsoft-365"],
  relatedArticleSlugs: ["gotowa-automatyzacja-czy-budowana-od-zera", "porzadek-w-danych-przed-ai-i-automatyzacja", "jak-mierzyc-roi-automatyzacji"],
};
