import type { IndustryPageContent } from "../types";

export const agencjePracyDokumenty: IndustryPageContent = {
  industrySlug: "agencje-pracy",
  subSlug: "dokumenty-pracownikow",
  name: "Dokumenty pracowników",
  excerpt: "Umowy, badania lekarskie, szkolenia BHP, uprawnienia i dokumenty pobytowe pracowników z terminami ważności, przypomnieniami i listą braków przed rozpoczęciem pracy.",
  metaTitle: "Dokumenty pracowników tymczasowych: terminy i braki",
  metaDescription:
    "Automatyzujemy dokumenty pracowników agencji: umowy, badania, BHP, uprawnienia i dokumenty pobytowe z terminami, przypomnieniami i listą braków.",
  primaryKeyword: "dokumenty pracowników tymczasowych",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Agencje pracy: dokumenty pracowników",
    title: "Terminy badań, szkoleń i dokumentów pobytowych pod kontrolą",
    lead: "Pracownik nie może zacząć pracy bez badań i szkolenia BHP. Cudzoziemiec nie może pracować po wygaśnięciu dokumentu pobytowego. Przy kilkuset pracownikach terminy są w arkuszu, a przeoczenie jednego oznacza pracownika odesłanego z zakładu albo problem przy kontroli. Automatyzujemy dokumenty: każdy pracownik ma listę wymaganych dokumentów z terminami, a przypomnienia trafiają do koordynatora i pracownika z wyprzedzeniem.",
    bullets: [
      "Lista wymaganych dokumentów dla każdego pracownika",
      "Przypomnienia o terminach z wyprzedzeniem",
      "Braki widoczne przed rozpoczęciem pracy",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Agencje pracy tymczasowej, w tym zatrudniające cudzoziemców" },
    { label: "Co automatyzujemy", value: "Umowy, badania, BHP, uprawnienia, dokumenty pobytowe, terminy" },
    { label: "Narzędzia", value: "Baza pracowników, dysk, poczta, SMS, n8n" },
    { label: "Zasada", value: "Wymagania dokumentów określa agencja i jej doradcy" },
  ],
  symptoms: {
    title: "Kiedy dokumenty warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, terminy dokumentów są ryzykiem dla agencji.",
    items: [
      "Terminy badań i dokumentów są w arkuszu.",
      "Pracownik trafia do klienta bez kompletu dokumentów.",
      "Dokumenty pobytowe wygasają niezauważone.",
      "Skany dokumentów są w skrzynkach koordynatorów.",
      "Przed kontrolą trzeba zbierać dokumenty z wielu miejsc.",
      "Pracownicy nie wiedzą, że muszą odnowić dokument.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja dokumentów",
    paragraphs: [
      "Dla każdego rodzaju pracy i pracownika agencja ustala listę wymaganych dokumentów: umowa, badania lekarskie, szkolenie BHP, uprawnienia, a dla cudzoziemców dokumenty pobytowe i dotyczące legalności pracy, według listy przygotowanej przez agencję i jej doradców. Każdy pracownik ma w bazie kartę z dokumentami, datami i terminami ważności.",
      "Przed rozpoczęciem pracy system pokazuje braki, a pracownik bez kompletu nie trafia na listę do przydziału. Dokumenty przesłane przez pracownika, np. zdjęciem w telefonie, trafiają do karty. Dane z dokumentów, np. daty ważności, mogą być odczytane i sprawdzone przez koordynatora. Dane o zdrowiu z badań nie są do tego potrzebne: wystarczy informacja o zdolności do pracy i dacie.",
      "Przed upływem terminu koordynator i pracownik dostają przypomnienie, w języku pracownika. Lista dokumentów kończących się w najbliższych tygodniach pozwala zaplanować badania i szkolenia. Przy kontroli dokumenty są w jednym miejscu.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja dokumentów",
    lead: "Zakres dopasowujemy do rodzajów pracy i pracowników.",
    items: [
      { title: "Lista wymaganych dokumentów", body: "Według rodzaju pracy i pracownika." },
      { title: "Karta pracownika", body: "Dokumenty, daty i terminy ważności." },
      { title: "Przesyłanie dokumentów", body: "Zdjęcie w telefonie lub formularz." },
      { title: "Odczyt dat", body: "Daty ważności odczytane i sprawdzone przez koordynatora." },
      { title: "Braki przed pracą", body: "Pracownik bez kompletu nie trafia do przydziału." },
      { title: "Przypomnienia", body: "Dla koordynatora i pracownika, w języku pracownika." },
      { title: "Lista kończących się", body: "Dokumenty wygasające w najbliższych tygodniach." },
      { title: "Archiwum", body: "Dokumenty w jednym miejscu na potrzeby kontroli." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zatrudnienia do odnowienia dokumentu.",
    items: [
      {
        title: "Nowy pracownik",
        trigger: "Pracownik przyjęty do pracy",
        steps: ["Lista wymaganych dokumentów", "Prośba o przesłanie dokumentów i termin badań", "Informacja dla koordynatora, gdy komplet jest gotowy"],
        result: "Pracownik zaczyna pracę z kompletem dokumentów.",
      },
      {
        title: "Wygasający dokument",
        trigger: "Za sześć tygodni kończy się dokument pobytowy",
        steps: ["Przypomnienie dla koordynatora", "Wiadomość do pracownika w jego języku", "Lista do kontroli co tydzień"],
        result: "Termin nie umyka, a agencja ma czas na działanie.",
      },
    ],
  },
  example: {
    title: "Dokumenty przed i po automatyzacji",
    lead: "Przykład agencji zatrudniającej kilkuset pracowników tymczasowych, w tym cudzoziemców.",
    rows: [
      { label: "Terminy", before: "Arkusz.", after: "Karta pracownika i przypomnienia." },
      { label: "Braki", before: "Wychodzą u klienta.", after: "Widoczne przed pracą." },
      { label: "Pracownicy", before: "Nie wiedzą o terminach.", after: "Dostają przypomnienia." },
      { label: "Kontrola", before: "Zbieranie dokumentów.", after: "Archiwum." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej agencji.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Najwięcej pracy wymaga przeniesienie dokumentów obecnych pracowników.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Spisujemy wymagane dokumenty i sprawdzamy, gdzie są dziś.", fromYou: "Lista wymagań i dostęp do arkuszy." },
      { title: "Baza i import", duration: "1–3 tygodnie", body: "Budujemy karty pracowników i przenosimy dokumenty i daty.", fromYou: "Weryfikacja danych." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Testujemy przypomnienia i listy braków na grupie pracowników.", fromYou: "Koordynator w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkich pracowników i aktualizujemy wymagania.", fromYou: "Informacja o zmianach wymagań." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od terminów najważniejszych dokumentów.",
    items: [
      { name: "Terminy", description: "Dla agencji, które chcą, żeby nic nie wygasło.", includes: ["Karta pracownika", "Terminy ważności", "Przypomnienia dla koordynatora", "Lista kończących się"] },
      { name: "Dokumenty i pracownicy", description: "Dla agencji z dużą liczbą pracowników.", includes: ["Wszystko z wariantu Terminy", "Przesyłanie dokumentów", "Przypomnienia dla pracowników", "Braki przed pracą"] },
      { name: "Pełna dokumentacja", description: "Dla agencji zatrudniających cudzoziemców.", includes: ["Wszystko z wariantu Dokumenty i pracownicy", "Odczyt dat", "Wiele języków", "Archiwum na potrzeby kontroli"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba pracowników i rodzajów dokumentów,",
      "przeniesienie obecnych dokumentów,",
      "integracja z programem kadrowym,",
      "liczba języków,",
      "kanały komunikacji.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędnie odczytana data ważności.", mitigation: "Odczyt sprawdza koordynator, a ważne dokumenty mają podwójną kontrolę." },
      { risk: "Dane o zdrowiu w bazie.", mitigation: "Zapisujemy tylko informację o zdolności do pracy i dacie, bez szczegółów badania." },
      { risk: "Wymagania prawne się zmienią.", mitigation: "Listy wymagań są w jednym miejscu i aktualizowane przez agencję." },
      { risk: "Dostęp do dokumentów tożsamości.", mitigation: "Uprawnienia tylko dla osób, które ich potrzebują." },
    ],
  },
  faq: [
    { question: "Czy system oceni legalność zatrudnienia?", answer: "Nie. Pilnuje dokumentów i terminów według listy wymagań przekazanej przez agencję. Ocena prawna należy do agencji i jej doradców." },
    { question: "Czy pracownik może przesłać dokument zdjęciem?", answer: "Tak, przez telefon, a dokument trafia do jego karty." },
    { question: "Czy przypomnienia będą w języku pracownika?", answer: "Tak, w języku ustalonym przy karcie pracownika." },
    { question: "Czy zapisujecie wyniki badań?", answer: "Nie. Wystarczy informacja o zdolności do pracy i dacie ważności." },
    { question: "Czy przeniesiecie dokumenty z obecnych arkuszy?", answer: "Tak. Import danych i dokumentów to część wdrożenia." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-hr", "cyfryzacja-danych-i-dokumentow", "ai-w-obsludze-dokumentow"],
  relatedProcessSlugs: ["onboarding-pracownika", "obieg-umow"],
  relatedToolSlugs: ["airtable", "n8n", "microsoft-365"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
