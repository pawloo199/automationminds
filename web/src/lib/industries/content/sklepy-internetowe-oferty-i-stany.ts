import type { IndustryPageContent } from "../types";

export const sklepyInternetoweOfertyIStany: IndustryPageContent = {
  industrySlug: "sklepy-internetowe",
  subSlug: "oferty-i-stany",
  name: "Oferty, ceny i stany w wielu kanałach",
  excerpt: "Stany i ceny zsynchronizowane między sklepem, marketplace i magazynem, aktualizacje z plików dostawców i ostrzeżenia przed sprzedażą produktu, którego nie ma.",
  metaTitle: "Synchronizacja stanów i ofert w wielu kanałach",
  metaDescription:
    "Automatyzujemy synchronizację stanów i ofert: sklep, marketplace i magazyn zgodne, aktualizacje z plików dostawców, zasady cen i ostrzeżenia o brakach.",
  primaryKeyword: "synchronizacja stanów magazynowych",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Sklepy internetowe: oferty i stany",
    title: "Ten sam stan i ta sama cena we wszystkich kanałach sprzedaży",
    lead: "Produkt sprzedał się w sklepie, ale na marketplace nadal jest dostępny. Klient kupuje, sklep musi anulować zamówienie, a ocena sprzedawcy spada. Dostawca zmienił ceny, ale w części kanałów zostały stare. Automatyzujemy synchronizację ofert: stany i ceny są aktualizowane we wszystkich kanałach, pliki dostawców trafiają do systemu automatycznie, a zespół dostaje ostrzeżenie, zanim sprzeda produkt, którego nie ma.",
    bullets: [
      "Stany zsynchronizowane między sklepem, marketplace i magazynem",
      "Ceny według zasad sklepu w każdym kanale",
      "Aktualizacje z plików dostawców i ostrzeżenia o brakach",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Sklepy sprzedające w kilku kanałach, także z towarem u dostawców" },
    { label: "Co automatyzujemy", value: "Stany, ceny, pliki dostawców, zasady, ostrzeżenia, raporty" },
    { label: "Narzędzia", value: "Platforma sklepu, marketplace, magazyn, pliki dostawców, n8n" },
    { label: "Zasada", value: "Zasady cen ustala sklep" },
  ],
  symptoms: {
    title: "Kiedy synchronizację warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, sklep traci zamówienia i ocenę sprzedawcy.",
    items: [
      "Zdarzają się zamówienia na produkty, których nie ma.",
      "Ceny różnią się między kanałami bez powodu.",
      "Pliki od dostawców wprowadza się ręcznie.",
      "Aktualizacja cen po zmianie u dostawcy trwa dni.",
      "Nie wiadomo, które produkty są w drodze od dostawcy.",
      "Promocje trzeba ustawiać osobno w każdym kanale.",
    ],
  },
  intro: {
    title: "Jak działa synchronizacja ofert",
    paragraphs: [
      "Źródłem prawdy o stanach jest magazyn lub program magazynowy, a w przypadku towaru u dostawców także ich pliki stanów. System regularnie pobiera stany i aktualizuje je w sklepie i na marketplace. Sprzedaż w jednym kanale zmniejsza stan we wszystkich.",
      "Ceny powstają według zasad sklepu: cena zakupu, marża, prowizja kanału, ceny minimalne i promocje. Zmiana ceny u dostawcy trafia do systemu z pliku, a nowe ceny sprzedaży są wyliczane i, po akceptacji przy większych zmianach, publikowane we wszystkich kanałach.",
      "Gdy stan spada poniżej progu, produkt może być automatycznie ukryty w części kanałów albo oznaczony dłuższym czasem dostawy. Zespół dostaje ostrzeżenia o produktach z rozbieżnościami i błędami synchronizacji.",
    ],
  },
  scope: {
    title: "Co obejmuje synchronizacja",
    lead: "Zakres dopasowujemy do kanałów i źródeł towaru.",
    items: [
      { title: "Stany", body: "Z magazynu i plików dostawców do wszystkich kanałów." },
      { title: "Pliki dostawców", body: "Pobierane automatycznie, w różnych formatach." },
      { title: "Zasady cen", body: "Marża, prowizje kanałów, ceny minimalne." },
      { title: "Akceptacja zmian", body: "Większe zmiany cen do zatwierdzenia." },
      { title: "Promocje", body: "Ustawiane raz, publikowane w kanałach." },
      { title: "Progi stanów", body: "Ukrycie lub dłuższy termin przy niskim stanie." },
      { title: "Ostrzeżenia", body: "Rozbieżności i błędy synchronizacji." },
      { title: "Raport", body: "Produkty bez stanu, z rozbieżnościami, bez sprzedaży." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zmiany stanu lub ceny do wszystkich kanałów.",
    items: [
      {
        title: "Sprzedaż w sklepie",
        trigger: "Klient kupuje ostatnią sztukę",
        steps: ["Aktualizacja stanu w magazynie", "Wycofanie oferty na marketplace", "Informacja o braku dla zakupów"],
        result: "Produkt nie zostanie sprzedany drugi raz.",
      },
      {
        title: "Nowy cennik dostawcy",
        trigger: "Dostawca przysyła plik z nowymi cenami",
        steps: ["Import i porównanie z obecnymi cenami", "Nowe ceny według zasad, większe zmiany do akceptacji", "Publikacja we wszystkich kanałach"],
        result: "Ceny aktualne w dniu zmiany u dostawcy.",
      },
    ],
  },
  example: {
    title: "Oferty przed i po automatyzacji",
    lead: "Przykład sklepu sprzedającego we własnym sklepie i na dwóch marketplace, z częścią towaru u dostawców.",
    rows: [
      { label: "Stany", before: "Rozjeżdżają się.", after: "Zsynchronizowane." },
      { label: "Pliki dostawców", before: "Wprowadzane ręcznie.", after: "Pobierane automatycznie." },
      { label: "Ceny", before: "Różne w kanałach.", after: "Według zasad." },
      { label: "Anulowane zamówienia", before: "Częste.", after: "Rzadkie." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym sklepie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od stanów, potem dokładamy ceny.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy kanały, źródła stanów i zasady cen.", fromYou: "Dostęp do paneli i plików dostawców." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy źródło prawdy, zasady cen i progi.", fromYou: "Akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy synchronizację i testujemy na części produktów.", fromYou: "Osoba sprawdzająca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkie produkty i monitorujemy błędy.", fromYou: "Informacja o nowych kanałach i dostawcach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od synchronizacji stanów.",
    items: [
      { name: "Stany", description: "Dla sklepów, które chcą skończyć z anulowaniem zamówień.", includes: ["Stany we wszystkich kanałach", "Progi stanów", "Ostrzeżenia", "Raport rozbieżności"] },
      { name: "Stany i dostawcy", description: "Dla sklepów z towarem u dostawców.", includes: ["Wszystko z wariantu Stany", "Pliki dostawców", "Aktualizacje cen zakupu", "Dłuższy termin przy braku"] },
      { name: "Pełna synchronizacja", description: "Dla sklepów w wielu kanałach.", includes: ["Wszystko z wariantu Stany i dostawcy", "Zasady cen", "Promocje", "Akceptacja zmian"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba kanałów i produktów,",
      "liczba dostawców i formatów plików,",
      "możliwości integracji platformy, marketplace i magazynu,",
      "złożoność zasad cen,",
      "częstotliwość synchronizacji.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błąd w pliku dostawcy zmieni ceny.", mitigation: "Duże zmiany trafiają do akceptacji, a import sprawdza plik przed aktualizacją." },
      { risk: "Awaria połączenia z kanałem.", mitigation: "Monitoring i powiadomienia, a produkty o niskim stanie są chronione progami." },
      { risk: "Konflikt z narzędziem do obsługi wielu kanałów.", mitigation: "Ustalamy jedno źródło prawdy i nie dublujemy synchronizacji." },
      { risk: "Cena poniżej opłacalności.", mitigation: "Ceny minimalne w zasadach i ostrzeżenia." },
    ],
  },
  faq: [
    { question: "Czy to zastępuje narzędzia do obsługi wielu kanałów?", answer: "Nie musi. Jeśli korzystacie z takiego narzędzia, łączymy się z nim i uzupełniamy to, czego brakuje, np. pliki dostawców i zasady cen." },
    { question: "Jak często aktualizują się stany?", answer: "Zależnie od kanałów i API, zwykle od kilku minut do godziny. Ustalamy to przy wdrożeniu." },
    { question: "Czy obsłużycie dropshipping?", answer: "Tak. Stany i ceny mogą pochodzić z plików dostawców, a zamówienia trafiać do nich automatycznie." },
    { question: "Czy zmiany cen będą automatyczne?", answer: "Według zasad, a większe zmiany do akceptacji." },
    { question: "Czy promocje ustawimy raz dla wszystkich kanałów?", answer: "Tak, jeśli kanały pozwalają na ustawienie promocji przez API." },
  ],
  relatedServiceSlugs: ["integracje-systemow", "automatyzacja-dla-logistyki", "porzadkowanie-i-strukturyzowanie-danych"],
  relatedProcessSlugs: ["przyjmowanie-zamowien"],
  relatedToolSlugs: ["n8n", "make", "airtable"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
