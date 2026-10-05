import type { ToolSubpageContent } from "../types";

export const n8nSelfHosted: ToolSubpageContent = {
  toolSlug: "n8n",
  slug: "self-hosted",
  name: "n8n self-hosted",
  excerpt: "Instalacja n8n na serwerze w UE, kopie zapasowe, aktualizacje i monitoring w stałej opiece.",
  metaTitle: "n8n self-hosted: instalacja i utrzymanie na serwerze",
  metaDescription:
    "Instalujemy n8n na waszym serwerze lub w chmurze w UE: Docker, PostgreSQL, HTTPS, kopie zapasowe, aktualizacje i monitoring. Bez limitu wykonań przepływów.",
  primaryKeyword: "n8n self-hosted",
  updatedAt: "2026-10-05",
  hero: {
    eyebrow: "n8n na własnym serwerze",
    title: "n8n self-hosted: instalacja, konfiguracja i utrzymanie",
    lead: "Uruchamiamy n8n na serwerze, który należy do was, w centrum danych w UE. Konfigurujemy bazę, szyfrowanie, kopie zapasowe i monitoring, a potem dbamy o aktualizacje, żeby przepływy działały bez przerw.",
    bullets: [
      "Dane zostają na waszym serwerze w UE",
      "Bez opłat za każde wykonanie przepływu",
      "Kopie zapasowe, aktualizacje i monitoring",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy, które chcą mieć kontrolę nad danymi i kosztami automatyzacji" },
    { label: "Gdzie", value: "Wasz serwer, VPS lub chmura w UE, np. Hetzner, OVH, AWS Frankfurt" },
    { label: "Czas uruchomienia", value: "Zwykle kilka dni" },
    { label: "Po waszej stronie", value: "Decyzja o serwerze i dostęp do domeny" },
  ],
  symptoms: {
    title: "Kiedy n8n na własnym serwerze ma sens",
    lead: "Self-hosting to dobry wybór, jeśli rozpoznajecie u siebie przynajmniej jeden z tych powodów.",
    items: [
      "Przepływy przetwarzają dane osobowe, finansowe lub medyczne i nie chcecie, żeby trafiały do zewnętrznej usługi.",
      "Liczba wykonań rośnie i abonament w chmurze zaczyna być droższy niż serwer.",
      "Przepływy muszą łączyć się z systemami w sieci firmowej, np. ERP na lokalnym serwerze.",
      "Dział IT lub audytor wymaga, żeby dane były w konkretnej lokalizacji.",
      "Ktoś zainstalował n8n na próbę, a teraz działa na nim coś ważnego bez kopii zapasowych.",
      "Chcecie używać własnych modeli AI uruchamianych lokalnie.",
    ],
  },
  intro: {
    title: "Czym jest n8n self-hosted",
    paragraphs: [
      "n8n można używać na dwa sposoby: w chmurze producenta (n8n Cloud) albo na własnym serwerze. Wersja instalowana samodzielnie, tzw. self-hosted, daje pełną kontrolę nad tym, gdzie są dane i ile kosztuje działanie przepływów, bo nie płaci się za każde wykonanie.",
      "Instalacja zajmuje kilka minut, jeśli ktoś zna Dockera. Trudniejsze jest to, co dzieje się później: baza danych zamiast domyślnego pliku, szyfrowanie połączeń, bezpieczne przechowywanie kluczy, kopie zapasowe, aktualizacje bez przerywania działających przepływów i powiadomienia, gdy coś przestanie działać.",
      "Tym zajmujemy się na co dzień. Przygotowujemy środowisko, które da się bezpiecznie używać w firmie, i opiekujemy się nim tak długo, jak tego potrzebujecie.",
    ],
  },
  scope: {
    title: "Co obejmuje instalacja i utrzymanie n8n",
    lead: "Od wyboru serwera po stałą opiekę. Zakres dopasowujemy do tego, jak ważne są przepływy, które będą działać na n8n.",
    items: [
      { title: "Serwer i Docker", body: "Dobór serwera w UE, instalacja n8n w Dockerze, domena i certyfikat HTTPS." },
      { title: "Baza i bezpieczeństwo", body: "PostgreSQL zamiast pliku SQLite, klucz szyfrujący dane dostępowe, zapora i ograniczony dostęp do panelu." },
      { title: "Kopie zapasowe", body: "Codzienna kopia bazy i przepływów, przechowywana poza serwerem, z przetestowanym odtworzeniem." },
      { title: "Aktualizacje", body: "Aktualizacje n8n po sprawdzeniu zmian, z możliwością szybkiego powrotu do poprzedniej wersji." },
      { title: "Monitoring i alerty", body: "Powiadomienie, gdy przepływ zakończy się błędem albo serwer przestanie odpowiadać." },
      { title: "Skalowanie", body: "Tryb kolejki (queue mode) i dodatkowe procesy robocze, gdy przepływów i wykonań przybywa." },
      { title: "Przeniesienie przepływów", body: "Migracja z n8n Cloud, z innej instalacji lub z Make i Zapiera." },
      { title: "Dokumentacja", body: "Opis środowiska, dostępów i procedur, żeby nie zależeć od jednej osoby." },
    ],
  },
  comparison: {
    title: "n8n self-hosted czy n8n Cloud",
    lead: "Obie wersje mają te same podstawowe możliwości. Różnią się tym, kto odpowiada za serwer i jak rozlicza się koszty.",
    columns: ["n8n self-hosted", "n8n Cloud"],
    rows: [
      { label: "Gdzie są dane", values: ["Na waszym serwerze, w wybranej lokalizacji", "W chmurze producenta"] },
      { label: "Koszt", values: ["Serwer i opieka, bez opłat za wykonania", "Abonament zależny od liczby wykonań"] },
      { label: "Kto utrzymuje", values: ["Wy albo my, jeśli macie opiekę", "Producent"] },
      { label: "Dostęp do systemów w sieci firmowej", values: ["Tak", "Tylko przez udostępnione połączenia"] },
      { label: "Start", values: ["Kilka dni z konfiguracją", "Od razu"] },
    ],
    note: "Porównanie jest uproszczone. Część funkcji, np. zaawansowane zarządzanie użytkownikami, wymaga płatnej licencji w obu wersjach.",
  },
  example: {
    title: "n8n przed i po uporządkowaniu instalacji",
    lead: "Przykład firmy, w której n8n zainstalował kiedyś jeden z pracowników, a z czasem zaczęły na nim działać ważne przepływy.",
    rows: [
      { label: "Baza", before: "Domyślny plik SQLite na serwerze.", after: "PostgreSQL z codzienną kopią poza serwerem." },
      { label: "Aktualizacje", before: "Wersja sprzed wielu miesięcy, bo nikt nie wie, czy aktualizacja czegoś nie zepsuje.", after: "Regularne aktualizacje po sprawdzeniu zmian." },
      { label: "Błędy", before: "Klient zgłasza, że nie dostał potwierdzenia.", after: "Alert o błędzie przepływu trafia do opiekuna od razu." },
      { label: "Dostęp", before: "Panel dostępny z internetu dla każdego, kto zna adres.", after: "HTTPS, silne hasła i ograniczony dostęp." },
      { label: "Wiedza", before: "Wszystko wie jedna osoba.", after: "Dokumentacja środowiska i procedur." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po przeglądzie waszej instalacji.",
  },
  implementation: {
    title: "Jak przebiega uruchomienie",
    lead: "Cztery kroki, po każdym wiecie, co zostało zrobione. Przy każdym piszemy, czego potrzebujemy od was.",
    phases: [
      {
        title: "Rozmowa i wybór serwera",
        duration: "1 dzień",
        body: "Ustalamy, jakie przepływy będą działać, ile danych przetwarzają i gdzie mają być. Na tej podstawie dobieramy serwer i dostawcę.",
        fromYou: "Krótka rozmowa i decyzja, czy serwer ma być na waszym koncie u dostawcy.",
      },
      {
        title: "Instalacja i konfiguracja",
        duration: "1–3 dni",
        body: "Instalujemy n8n z bazą, HTTPS, kopiami zapasowymi i monitoringiem. Ustawiamy konta użytkowników.",
        fromYou: "Dostęp do serwera i ustawień domeny.",
      },
      {
        title: "Przeniesienie przepływów",
        duration: "zależnie od liczby",
        body: "Jeśli macie przepływy w innej instalacji lub narzędziu, przenosimy je i sprawdzamy na prawdziwych danych.",
        fromYou: "Lista przepływów i dostępy do łączonych systemów.",
      },
      {
        title: "Opieka",
        duration: "stale",
        body: "Pilnujemy aktualizacji, kopii i alertów. Reagujemy na błędy i doradzamy, gdy przepływów przybywa.",
        fromYou: "Informacja o planowanych zmianach w systemach, z którymi łączy się n8n.",
      },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Możecie zacząć od samej instalacji i dobrać opiekę później.",
    items: [
      {
        name: "Instalacja",
        description: "Dla zespołów z własnym IT, które chcą dobrze przygotowanego środowiska na start.",
        includes: [
          "Dobór serwera w UE",
          "n8n w Dockerze z PostgreSQL i HTTPS",
          "Kopie zapasowe i podstawowy monitoring",
          "Dokumentacja i przekazanie dostępów",
        ],
      },
      {
        name: "Instalacja i opieka",
        description: "Dla firm, w których przepływy są ważne, a nie ma osoby, która będzie pilnować serwera.",
        includes: [
          "Wszystko z wariantu Instalacja",
          "Regularne aktualizacje n8n",
          "Alerty o błędach przepływów",
          "Sprawdzanie kopii zapasowych",
          "Pomoc przy problemach z przepływami",
        ],
      },
      {
        name: "Środowisko dla większej skali",
        description: "Dla firm z dużą liczbą wykonań lub wieloma zespołami.",
        includes: [
          "Wszystko z wariantu Instalacja i opieka",
          "Tryb kolejki i dodatkowe procesy robocze",
          "Osobne środowisko testowe",
          "Przepływy w repozytorium Git",
          "Plan odtworzenia po awarii",
        ],
      },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy przed startem. Na koszt wpływa przede wszystkim:",
    items: [
      "wielkość serwera, która zależy od liczby i ciężkości przepływów,",
      "wybrany wariant: sama instalacja czy stała opieka,",
      "liczba przepływów do przeniesienia z innej instalacji lub narzędzia,",
      "wymagania bezpieczeństwa, np. dostęp tylko przez VPN,",
      "ewentualna płatna licencja n8n, jeśli potrzebne są funkcje z wersji Enterprise.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Aktualizacja n8n zmieni działanie przepływów.", mitigation: "Czytamy listę zmian przed aktualizacją, testujemy na kopii i możemy szybko wrócić do poprzedniej wersji." },
      { risk: "Utrata danych przy awarii serwera.", mitigation: "Codzienne kopie poza serwerem i regularnie sprawdzane odtwarzanie." },
      { risk: "Nieuprawniony dostęp do panelu i kluczy.", mitigation: "HTTPS, zapora, ograniczony dostęp, silne hasła i klucz szyfrujący przechowywany osobno." },
      { risk: "Niezgodność z licencją n8n.", mitigation: "Sprawdzamy, czy wasz sposób użycia mieści się w licencji n8n, i mówimy wprost, gdy potrzebna jest licencja płatna." },
    ],
  },
  faq: [
    { question: "Czy n8n self-hosted jest darmowy?", answer: "Wersję community można instalować i używać do wewnętrznych celów firmy bez opłat licencyjnych, na zasadach licencji n8n (Sustainable Use License). Płaci się za serwer i ewentualną opiekę. Część funkcji wymaga płatnej licencji." },
    { question: "Jaki serwer jest potrzebny do n8n?", answer: "Dla większości małych i średnich firm wystarcza niewielki serwer VPS. Większe wolumeny lub przepływy z AI mogą wymagać więcej pamięci albo trybu kolejki. Dobieramy serwer do waszych przepływów." },
    { question: "Gdzie będą przechowywane dane?", answer: "Na serwerze, który wybierzecie, zwykle w centrum danych w UE, np. w Niemczech lub Finlandii. Serwer może być na waszym koncie u dostawcy, więc pozostaje waszą własnością." },
    { question: "Czy możecie przenieść nasze przepływy z n8n Cloud?", answer: "Tak. Eksportujemy przepływy, odtwarzamy dane dostępowe na nowym serwerze i sprawdzamy działanie przed przełączeniem." },
    { question: "Mamy już n8n na serwerze. Czy możecie go przejąć?", answer: "Tak. Zaczynamy od przeglądu instalacji: wersji, bazy, kopii i bezpieczeństwa. Potem porządkujemy to, co wymaga poprawy, i przejmujemy opiekę." },
    { question: "Czy n8n może łączyć się z systemami w naszej sieci?", answer: "Tak, to jedna z głównych zalet self-hostingu. n8n na serwerze w waszej sieci lub połączony przez VPN może korzystać z ERP i baz danych, które nie są dostępne z internetu." },
    { question: "Czy jesteście partnerem n8n?", answer: "Nie. Jesteśmy niezależnymi specjalistami od automatyzacji i wdrażamy n8n tam, gdzie to najlepsze narzędzie dla klienta." },
  ],
  relatedServiceSlugs: ["integracje-systemow", "automatyzacja-oraz-ai-w-niestandardowych-procesach", "migracja-danych"],
  relatedArticleSlugs: ["n8n-co-to-jest", "rodo-a-automatyzacja-procesow", "gotowa-automatyzacja-czy-budowana-od-zera"],
};
