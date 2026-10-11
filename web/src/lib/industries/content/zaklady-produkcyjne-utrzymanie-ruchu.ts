import type { IndustryPageContent } from "../types";

export const zakladyProdukcyjneUtrzymanieRuchu: IndustryPageContent = {
  industrySlug: "zaklady-produkcyjne",
  subSlug: "utrzymanie-ruchu",
  name: "Utrzymanie ruchu",
  excerpt: "Zgłoszenia awarii z hali na telefonie, plan przeglądów maszyn z przypomnieniami, protokoły, części zamienne i historia każdej maszyny w jednym miejscu.",
  metaTitle: "Utrzymanie ruchu w zakładzie: awarie, przeglądy, części",
  metaDescription:
    "Automatyzujemy utrzymanie ruchu w zakładzie produkcyjnym: zgłoszenia awarii, plan przeglądów maszyn, protokoły, części zamienne i historię maszyn.",
  primaryKeyword: "utrzymanie ruchu w zakładzie produkcyjnym",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Zakłady produkcyjne: utrzymanie ruchu",
    title: "Awarie zgłaszane w minutę, przeglądy maszyn w terminie",
    lead: "Operator zgłasza awarię krzykiem przez halę albo telefonem do mechanika. Mechanik naprawia, ale nikt nie zapisuje, co się stało i jakiej części użył. Przeglądy maszyn są w kalendarzu jednej osoby albo w zeszycie, a części zamienne kończą się w chwili, gdy są potrzebne. Automatyzujemy utrzymanie ruchu: zgłoszenie awarii zajmuje chwilę, przeglądy przypominają się same, a każda maszyna ma historię napraw i części.",
    bullets: [
      "Zgłoszenia awarii z telefonu lub tabletu",
      "Plan przeglądów z przypomnieniami i protokołami",
      "Historia maszyn i stany części zamiennych",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Zakłady z parkiem maszyn i własnym utrzymaniem ruchu" },
    { label: "Co automatyzujemy", value: "Awarie, przeglądy, protokoły, części zamienne, historia maszyn" },
    { label: "Narzędzia", value: "Formularz na telefon, rejestr maszyn, ERP, n8n" },
    { label: "Zasada", value: "Decyzje o maszynach i bezpieczeństwie podejmują ludzie" },
  ],
  symptoms: {
    title: "Kiedy utrzymanie ruchu warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, zakład traci czas na awariach, które można było przewidzieć.",
    items: [
      "Awarie zgłasza się ustnie lub telefonicznie.",
      "Nie wiadomo, jak długo maszyna stała i dlaczego.",
      "Przeglądy maszyn są w zeszycie lub kalendarzu jednej osoby.",
      "Części zamienne kończą się w chwili awarii.",
      "Historia napraw maszyny jest w głowie mechanika.",
      "Planowanie nie wie o planowanych postojach z wyprzedzeniem.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja utrzymania ruchu",
    paragraphs: [
      "Operator zgłasza awarię z telefonu lub tabletu przy maszynie: wybiera maszynę, opisuje problem, dodaje zdjęcie. Zgłoszenie trafia do dyżurnego mechanika z priorytetem, a czas postoju liczy się od zgłoszenia. Mechanik zapisuje przyczynę, wykonane czynności i użyte części.",
      "Plan przeglądów powstaje z zaleceń producentów i doświadczenia zakładu. Przed terminem utrzymanie ruchu dostaje zadanie z listą kontrolną, a planowanie informację o planowanym postoju. Protokół z przeglądu trafia do historii maszyny.",
      "Części zamienne mają stany minimalne. Gdy część zostaje użyta, stan się zmniejsza, a poniżej minimum powstaje zapotrzebowanie do zakupów. Historia awarii pokazuje, które maszyny i podzespoły psują się najczęściej, co pomaga planować przeglądy i inwestycje.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja utrzymania ruchu",
    lead: "Zakres dopasowujemy do parku maszyn i organizacji działu.",
    items: [
      { title: "Zgłoszenia awarii", body: "Formularz na telefon lub tablet przy maszynie." },
      { title: "Priorytety i dyżury", body: "Zgłoszenie do właściwej osoby." },
      { title: "Czas postoju", body: "Od zgłoszenia do uruchomienia." },
      { title: "Plan przeglądów", body: "Terminy z zaleceń producentów i praktyki." },
      { title: "Listy kontrolne", body: "Czynności do wykonania przy przeglądzie." },
      { title: "Protokoły", body: "Wynik przeglądu i naprawy w historii maszyny." },
      { title: "Części zamienne", body: "Stany, minima i zapotrzebowania." },
      { title: "Raporty", body: "Awarie, postoje i koszty według maszyn." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zgłoszenia do historii maszyny.",
    items: [
      {
        title: "Awaria",
        trigger: "Operator zgłasza zatrzymanie maszyny",
        steps: ["Zgłoszenie z telefonu ze zdjęciem", "Powiadomienie dyżurnego mechanika", "Przyczyna, czynności i części zapisane po naprawie"],
        result: "Zakład zna czas postoju i przyczynę każdej awarii.",
      },
      {
        title: "Przegląd okresowy",
        trigger: "Zbliża się termin przeglądu prasy",
        steps: ["Zadanie z listą kontrolną dla utrzymania ruchu", "Informacja dla planowania o postoju", "Protokół w historii maszyny"],
        result: "Przegląd w terminie, a plan produkcji go uwzględnia.",
      },
    ],
  },
  example: {
    title: "Utrzymanie ruchu przed i po automatyzacji",
    lead: "Przykład zakładu z kilkudziesięcioma maszynami i kilkuosobowym działem utrzymania ruchu.",
    rows: [
      { label: "Zgłoszenia awarii", before: "Ustnie.", after: "Formularz z czasem i zdjęciem." },
      { label: "Przeglądy", before: "W zeszycie.", after: "Plan z przypomnieniami." },
      { label: "Części zamienne", before: "Kończą się przy awarii.", after: "Minima i zapotrzebowania." },
      { label: "Historia maszyn", before: "U mechanika.", after: "W rejestrze." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym zakładzie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od zgłoszeń awarii i rejestru maszyn.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Spisujemy maszyny, sposób zgłaszania awarii i przeglądów.", fromYou: "Lista maszyn, rozmowa z utrzymaniem ruchu." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy formularze, rejestr maszyn i plan przeglądów.", fromYou: "Akceptacja kierownika utrzymania ruchu." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Testujemy na jednym wydziale lub grupie maszyn.", fromYou: "Operatorzy i mechanicy w teście." },
      { title: "Start i opieka", duration: "stale", body: "Rozszerzamy na cały zakład i dokładamy części zamienne.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od zgłoszeń awarii.",
    items: [
      { name: "Zgłoszenia awarii", description: "Dla zakładów, które chcą wiedzieć, ile tracą na postojach.", includes: ["Formularz zgłoszeń", "Powiadomienia", "Czas postoju", "Rejestr maszyn"] },
      { name: "Awarie i przeglądy", description: "Dla zakładów, które chcą planować przeglądy.", includes: ["Wszystko z wariantu Zgłoszenia awarii", "Plan przeglądów", "Listy kontrolne", "Protokoły"] },
      { name: "Pełne utrzymanie ruchu", description: "Dla zakładów, które chcą połączyć utrzymanie ruchu z zakupami i planowaniem.", includes: ["Wszystko z wariantu Awarie i przeglądy", "Części zamienne", "Informacja dla planowania", "Raporty kosztów"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba maszyn i wydziałów,",
      "liczba użytkowników na hali,",
      "integracja z ERP i planowaniem,",
      "zakres części zamiennych,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Operatorzy nie będą zgłaszać awarii.", mitigation: "Formularz zajmuje chwilę, a test prowadzimy z operatorami." },
      { risk: "Przegląd zostanie pominięty mimo przypomnienia.", mitigation: "Przegląd po terminie trafia do kierownika utrzymania ruchu." },
      { risk: "System podpowie złą naprawę.", mitigation: "System prowadzi rejestr i przypomina, a decyzje o naprawie podejmuje mechanik." },
      { risk: "Wymagania BHP i przepisy dotyczące maszyn.", mitigation: "Terminy przeglądów wymaganych przepisami ustala zakład, a system ich pilnuje." },
    ],
  },
  faq: [
    { question: "Czy potrzebujemy czujników na maszynach?", answer: "Nie. Zaczynamy od zgłoszeń i przeglądów. Dane z maszyn można dołożyć później, jeśli są dostępne." },
    { question: "Czy operator musi mieć telefon służbowy?", answer: "Wystarczy tablet na wydziale albo kod QR na maszynie, który otwiera formularz." },
    { question: "Czy system zastąpi program do utrzymania ruchu?", answer: "W małych i średnich zakładach często wystarcza. Jeśli macie taki program, łączymy się z nim." },
    { question: "Czy pilnujecie przeglądów wymaganych przepisami?", answer: "Terminy ustala zakład, a system przypomina o nich i przechowuje protokoły." },
    { question: "Czy zobaczymy koszty utrzymania maszyn?", answer: "Tak, jeśli zapisujemy czas napraw i użyte części." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-produkcji", "automatyzacja-raportow", "cyfryzacja-danych-i-dokumentow"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych"],
  relatedToolSlugs: ["n8n", "airtable", "microsoft-365"],
  relatedArticleSlugs: ["przeglady-maszyn-w-zakladzie", "co-zautomatyzowac-w-zakladzie-produkcyjnym", "kalkulacja-kosztow-zlecenia-produkcyjnego"],
};
