import type { IndustryPageContent } from "../types";

export const kancelarieTerminyISprawy: IndustryPageContent = {
  industrySlug: "kancelarie-prawne",
  subSlug: "terminy-i-sprawy",
  name: "Terminy i sprawy",
  excerpt: "Pisma przypisane do spraw, terminy zatwierdzane przez prawnika, przypomnienia i zastępstwa.",
  metaTitle: "Terminy procesowe i sprawy w kancelarii: automatyzacja",
  metaDescription:
    "Automatyzujemy sprawy w kancelarii: pisma przypisane do spraw, terminy proponowane przez system i zatwierdzane przez prawnika, przypomnienia i zastępstwa.",
  primaryKeyword: "terminy procesowe kancelaria",
  updatedAt: "2026-10-05",
  hero: {
    eyebrow: "Kancelarie prawne: terminy i sprawy",
    title: "Terminy i sprawy w kancelarii: żadne pismo nie czeka, żaden termin nie umyka",
    lead: "Pisma przychodzą różnymi kanałami, a od każdego może biec termin. Automatyzujemy drogę od pisma do kalendarza: pismo trafia do właściwej sprawy, system proponuje termin, prawnik go zatwierdza, a przypomnienia i zastępstwa działają same.",
    bullets: [
      "Pisma przypisane do spraw automatycznie",
      "Termin proponowany przez system, zatwierdzany przez prawnika",
      "Przypomnienia, zastępstwa i widok terminów zespołu",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Kancelarie prowadzące sprawy sądowe i administracyjne" },
    { label: "Co automatyzujemy", value: "Przypisanie pism, propozycje terminów, kalendarz, przypomnienia" },
    { label: "Zasada", value: "Każdy termin zatwierdza prawnik" },
    { label: "Narzędzia", value: "Skrzynki kancelarii, system spraw, kalendarze Microsoft 365 lub Google" },
  ],
  symptoms: {
    title: "Kiedy terminy i sprawy warto zautomatyzować",
    lead: "Terminy w kancelarii to obszar, w którym błąd kosztuje najwięcej. Te sygnały oznaczają, że ich bezpieczeństwo zależy od pamięci ludzi.",
    items: [
      "Pisma przychodzą mailem, przez portale i pocztą, a każdy kanał obsługuje się osobno.",
      "Terminy wpisuje się ręcznie do kalendarzy poszczególnych prawników.",
      "Podczas urlopu lub choroby nie wiadomo, jakie terminy ma dana osoba.",
      "Partnerzy nie mają jednego widoku terminów całego zespołu.",
      "Dokumenty sprawy są rozproszone między skrzynkami a dyskiem.",
      "Status sprawy zna tylko prawnik, który ją prowadzi.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja terminów i spraw",
    paragraphs: [
      "Gdy do kancelarii trafia pismo, niezależnie od kanału, system zapisuje je w jednym miejscu i przypisuje do sprawy na podstawie sygnatury, stron lub numeru sprawy. AI streszcza pismo i rozpoznaje jego rodzaj, np. wezwanie do uzupełnienia braków, odpowiedź na pozew czy postanowienie.",
      "Na tej podstawie system proponuje termin i datę, od której biegnie. Prawnik prowadzący dostaje powiadomienie, sprawdza propozycję i zatwierdza ją albo poprawia. Dopiero zatwierdzony termin trafia do kalendarza sprawy, prawnika i osoby zastępującej.",
      "To podejście jest celowo ostrożne. System nigdy samodzielnie nie ustala terminu procesowego, bo odpowiedzialność za jego obliczenie zawsze ponosi pełnomocnik. Automatyzacja ma sprawić, że żadne pismo nie zostanie przeoczone, a termin zostanie sprawdzony od razu.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja",
    lead: "Zakres dopasowujemy do rodzaju spraw i narzędzi kancelarii.",
    items: [
      { title: "Jedno miejsce na pisma", body: "Pisma z maili, skanów i pobrane z portali zapisane w jednym miejscu." },
      { title: "Przypisanie do sprawy", body: "Pismo łączone ze sprawą po sygnaturze, stronach lub numerze wewnętrznym." },
      { title: "Streszczenie pisma", body: "AI rozpoznaje rodzaj pisma i przygotowuje krótkie streszczenie." },
      { title: "Propozycja terminu", body: "Termin i data, od której biegnie, do zatwierdzenia przez prawnika." },
      { title: "Kalendarz i przypomnienia", body: "Zatwierdzone terminy w kalendarzu sprawy i prawnika, z przypomnieniami z wyprzedzeniem." },
      { title: "Zastępstwa", body: "Terminy osoby nieobecnej widoczne i przypominane zastępcy." },
      { title: "Widok zespołu", body: "Terminy i sprawy całego zespołu w jednym zestawieniu dla partnerów." },
      { title: "Status sprawy", body: "Etap sprawy i ostatnie zdarzenia widoczne dla zespołu i gotowe do informacji dla klienta." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od pisma do zatwierdzonego terminu i przypomnienia.",
    items: [
      {
        title: "Nowe pismo z sądu",
        trigger: "Pismo trafia do kancelarii",
        steps: ["Zapis pisma i przypisanie do sprawy", "Streszczenie i propozycja terminu", "Zatwierdzenie przez prawnika i wpis do kalendarza"],
        result: "Pismo jest w sprawie, a termin w kalendarzu tego samego dnia.",
      },
      {
        title: "Zbliżający się termin",
        trigger: "Ustalona liczba dni przed terminem",
        steps: ["Przypomnienie dla prawnika prowadzącego", "Kopia dla osoby zastępującej", "Informacja dla partnera, gdy termin jest bliski, a zadanie otwarte"],
        result: "Termin pilnują system i co najmniej dwie osoby.",
      },
    ],
  },
  example: {
    title: "Terminy przed i po automatyzacji",
    lead: "Przykład kancelarii radcowskiej prowadzącej kilkaset spraw sądowych dla klientów biznesowych.",
    rows: [
      { label: "Pisma", before: "Rozproszone w skrzynkach poszczególnych osób.", after: "W jednym miejscu, przypisane do spraw." },
      { label: "Terminy", before: "Liczone i wpisywane ręcznie.", after: "Proponowane przez system i zatwierdzane przez prawnika." },
      { label: "Urlopy", before: "Zastępca nie wie, jakie terminy ma kolega.", after: "Terminy osoby nieobecnej przypominane zastępcy." },
      { label: "Partnerzy", before: "Brak jednego widoku terminów.", after: "Zestawienie terminów i spraw całego zespołu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej kancelarii.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Wdrażamy etapami i testujemy równolegle z dotychczasowym sposobem pilnowania terminów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, którymi kanałami przychodzą pisma, gdzie są sprawy i jak dziś pilnujecie terminów.", fromYou: "Rozmowa z partnerem i osobą z sekretariatu." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy rodzaje pism, zasady przypisywania do spraw, przypomnienia i zastępstwa.", fromYou: "Lista rodzajów spraw i zasady zastępstw." },
      { title: "Budowa i testy równoległe", duration: "zwykle 3–5 tygodni", body: "Budujemy przepływy i przez kilka tygodni działają równolegle z dotychczasowym sposobem, żeby porównać wyniki.", fromYou: "Osoba porównująca terminy z obu sposobów." },
      { title: "Start i opieka", duration: "stale", body: "Przełączamy kancelarię na nowy sposób pracy i pilnujemy działania.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od pism i przypomnień, a propozycje terminów z AI dodać później.",
    items: [
      { name: "Pisma i przypomnienia", description: "Dla kancelarii, które chcą przede wszystkim uporządkować pisma.", includes: ["Jedno miejsce na pisma", "Przypisanie do spraw", "Przypomnienia o terminach wpisanych przez prawnika", "Zastępstwa"] },
      { name: "Terminy z AI", description: "Dla kancelarii z dużą liczbą spraw sądowych.", includes: ["Wszystko z wariantu Pisma i przypomnienia", "Streszczenia pism", "Propozycje terminów do zatwierdzenia", "Widok terminów zespołu"] },
      { name: "Sprawy i klienci", description: "Dla kancelarii, które chcą informować klientów o postępach.", includes: ["Wszystko z wariantu Terminy z AI", "Status sprawy dla zespołu", "Projekty informacji dla klientów", "Raporty dla partnerów"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba kanałów, którymi przychodzą pisma,",
      "liczba i rodzaje spraw,",
      "integracja z systemem spraw i kalendarzami,",
      "użycie AI do streszczeń i propozycji terminów,",
      "zakres raportów i informacji dla klientów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędnie zaproponowany termin.", mitigation: "System nigdy nie wpisuje terminu sam. Propozycja trafia do prawnika, który ją zatwierdza lub poprawia, a do czasu zatwierdzenia pismo jest oznaczone jako wymagające uwagi." },
      { risk: "Pismo przypisane do złej sprawy.", mitigation: "Niepewne przypisania trafiają do ręcznego sprawdzenia, a każde pismo ma widoczne źródło." },
      { risk: "Pismo z kanału, który nie jest obsłużony.", mitigation: "Na starcie spisujemy wszystkie kanały, a pisma spoza nich można dodać jednym ruchem do tego samego obiegu." },
      { risk: "Awaria systemu w ważnym momencie.", mitigation: "Monitoring, kopie zapasowe i zestawienie terminów dostępne także poza systemem." },
    ],
  },
  faq: [
    { question: "Czy system sam oblicza terminy procesowe?", answer: "System proponuje termin na podstawie rodzaju pisma i daty, ale nigdy nie wpisuje go sam. Każdy termin zatwierdza prawnik, bo to on odpowiada za jego prawidłowe obliczenie." },
    { question: "Czy to działa z pismami z portali sądowych i doręczeń elektronicznych?", answer: "Pisma pobrane z portali i skrzynek doręczeń elektronicznych trafiają do tego samego obiegu co pozostałe. Sposób ich pobierania ustalamy indywidualnie, zależnie od dostępnych możliwości." },
    { question: "Czy zastąpi to system do zarządzania kancelarią?", answer: "Zwykle nie. Jeśli macie system spraw, łączymy się z nim. Jeśli nie, przygotujemy prostą bazę spraw, np. w Airtable lub Microsoft 365." },
    { question: "Co się dzieje, gdy prawnik jest na urlopie?", answer: "Terminy osoby nieobecnej trafiają do zastępcy, a partner widzi zadania, które zbliżają się do terminu i nie zostały zamknięte." },
    { question: "Jak długo trwają testy?", answer: "Zwykle kilka tygodni pracy równoległej z dotychczasowym sposobem. Dopiero gdy wyniki są zgodne, kancelaria przechodzi na nowy sposób." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "cyfryzacja-danych-i-dokumentow", "wdrozenia-airtable"],
  relatedProcessSlugs: ["obieg-umow"],
  relatedToolSlugs: ["microsoft-365", "google-workspace", "n8n"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-kancelarii", "od-czego-zaczac-mapowanie-procesow", "bledy-przy-pierwszym-wdrozeniu-automatyzacji"],
};
