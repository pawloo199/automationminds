import type { IndustryPageContent } from "../types";

export const zakladyProdukcyjneDokumentacja: IndustryPageContent = {
  industrySlug: "zaklady-produkcyjne",
  subSlug: "dokumentacja-techniczna",
  name: "Dokumentacja techniczna",
  excerpt: "Rejestr rysunków i instrukcji z wersjami, obieg zmian konstrukcyjnych z akceptacją, aktualna dokumentacja na hali i dokumentacja klientów pod kontrolą.",
  metaTitle: "Dokumentacja techniczna w produkcji: wersje i zmiany",
  metaDescription:
    "Automatyzujemy dokumentację techniczną w zakładzie produkcyjnym: rejestr rysunków i instrukcji z wersjami, zmiany konstrukcyjne i aktualne pliki na hali.",
  primaryKeyword: "dokumentacja techniczna w produkcji",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Zakłady produkcyjne: dokumentacja techniczna",
    title: "Na hali zawsze aktualna wersja rysunku i instrukcji",
    lead: "Klient przysyła nową wersję rysunku mailem. Technolog ją zapisuje, ale na hali wisi wydruk poprzedniej wersji, a zlecenie w ERP odwołuje się do jeszcze innej. Partia zostaje wyprodukowana według starej wersji i wraca jako reklamacja. Automatyzujemy dokumentację techniczną: każdy rysunek i instrukcja mają wersję w rejestrze, zmiana przechodzi przez akceptację, a na halę trafia tylko wersja aktualna.",
    bullets: [
      "Rejestr rysunków i instrukcji z wersjami",
      "Obieg zmian z akceptacją i informacją dla działów",
      "Aktualna dokumentacja na hali i przy zleceniu",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Zakłady produkujące według dokumentacji własnej i klientów" },
    { label: "Co automatyzujemy", value: "Rysunki, instrukcje, wersje, zmiany, dokumentacja na hali" },
    { label: "Narzędzia", value: "Rejestr dokumentów, dysk, ERP, model AI, n8n" },
    { label: "Zasada", value: "Zmiany zatwierdza technolog lub konstruktor" },
  ],
  symptoms: {
    title: "Kiedy dokumentację techniczną warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, ryzyko produkcji według złej wersji jest realne.",
    items: [
      "Nowe wersje rysunków od klientów przychodzą mailem.",
      "Na hali bywa wydruk nieaktualnej wersji.",
      "Nie wiadomo, według której wersji wyprodukowano daną partię.",
      "Zmiana konstrukcyjna nie dociera do zakupów i jakości.",
      "Instrukcje są w różnych folderach i wersjach.",
      "Szukanie dokumentu zabiera technologom sporo czasu.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja dokumentacji",
    paragraphs: [
      "Rysunki, instrukcje i specyfikacje trafiają do rejestru z numerem wyrobu i wersją. Gdy klient przysyła nową wersję, system rozpoznaje wyrób, a AI może przygotować listę różnic z opisu zmian lub tabelki rysunku. Technolog sprawdza i zatwierdza wersję.",
      "Zatwierdzona zmiana uruchamia obieg: informację dla planowania o zleceniach w toku, dla zakupów o zmianie materiału, dla jakości o nowych wymaganiach. Poprzednia wersja dostaje status wycofanej, a zlecenia odwołują się do wersji aktualnej w dniu uruchomienia.",
      "Na hali dokumentacja jest dostępna na tablecie lub przez kod QR przy zleceniu, zawsze w wersji aktualnej. Wydruki mają numer wersji i datę. Przy każdej partii wiadomo, według której wersji powstała.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja dokumentacji",
    lead: "Zakres dopasowujemy do rodzaju dokumentacji i sposobu pracy technologii.",
    items: [
      { title: "Rejestr dokumentów", body: "Rysunki, instrukcje i specyfikacje według wyrobów." },
      { title: "Wersje", body: "Numer, data i status każdej wersji." },
      { title: "Nowe wersje od klientów", body: "Rozpoznanie wyrobu i lista różnic." },
      { title: "Obieg zmian", body: "Akceptacja i informacja dla działów." },
      { title: "Zlecenia", body: "Wersja dokumentacji przy zleceniu i partii." },
      { title: "Dokumentacja na hali", body: "Tablet lub kod QR z aktualną wersją." },
      { title: "Wyszukiwanie", body: "Dokumenty według wyrobu, klienta i maszyny." },
      { title: "Uprawnienia", body: "Dostęp do dokumentacji klientów według ról." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od nowej wersji do hali.",
    items: [
      {
        title: "Nowa wersja rysunku",
        trigger: "Klient przysyła zmieniony rysunek",
        steps: ["Rozpoznanie wyrobu i lista różnic", "Technolog zatwierdza wersję", "Informacja dla planowania, zakupów i jakości"],
        result: "Zmiana dociera do wszystkich działów, a stara wersja jest wycofana.",
      },
      {
        title: "Uruchomienie zlecenia",
        trigger: "Zlecenie trafia na halę",
        steps: ["Wersja dokumentacji przypisana do zlecenia", "Kod QR z dokumentacją przy zleceniu", "Wersja zapisana przy partii"],
        result: "Na hali jest aktualna wersja, a przy partii wiadomo, która.",
      },
    ],
  },
  example: {
    title: "Dokumentacja przed i po automatyzacji",
    lead: "Przykład zakładu produkującego kilkaset wyrobów według dokumentacji klientów.",
    rows: [
      { label: "Nowe wersje", before: "W mailach.", after: "W rejestrze z listą różnic." },
      { label: "Dokumentacja na hali", before: "Wydruki różnych wersji.", after: "Aktualna wersja przez kod QR." },
      { label: "Zmiany", before: "Nie docierają do działów.", after: "Obieg z informacją." },
      { label: "Wersja przy partii", before: "Nieznana.", after: "Zapisana." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym zakładzie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od rejestru i wersji dla wybranych wyrobów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, gdzie jest dokumentacja i jak przechodzą zmiany.", fromYou: "Dostęp do folderów, rozmowa z technologią." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy rejestr, statusy i obieg zmian.", fromYou: "Akceptacja technologii i jakości." },
      { title: "Budowa i test", duration: "zwykle 3–5 tygodni", body: "Testujemy na wybranych wyrobach i jednym wydziale.", fromYou: "Technolog i brygadzista w teście." },
      { title: "Start i opieka", duration: "stale", body: "Przenosimy kolejne wyroby i rozszerzamy na halę.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rejestru i wersji.",
    items: [
      { name: "Rejestr i wersje", description: "Dla zakładów, które chcą uporządkować dokumentację.", includes: ["Rejestr dokumentów", "Wersje i statusy", "Wyszukiwanie"] },
      { name: "Obieg zmian", description: "Dla zakładów z częstymi zmianami od klientów.", includes: ["Wszystko z wariantu Rejestr i wersje", "Nowe wersje od klientów", "Akceptacja zmian", "Informacja dla działów"] },
      { name: "Dokumentacja na hali", description: "Dla zakładów, które chcą skończyć z nieaktualnymi wydrukami.", includes: ["Wszystko z wariantu Obieg zmian", "Dokumentacja przy zleceniu", "Kody QR", "Wersja przy partii"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba wyrobów i dokumentów,",
      "stan obecnej dokumentacji,",
      "integracja z ERP i zleceniami,",
      "dostęp do dokumentacji na hali,",
      "zakres wykorzystania AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Lista różnic z AI pominie zmianę.", mitigation: "Lista to materiał pomocniczy, a technolog porównuje wersje przed zatwierdzeniem." },
      { risk: "Stare wydruki zostaną na hali.", mitigation: "Wydruki mają numer wersji, a przy zmianie brygadzista dostaje zadanie wymiany." },
      { risk: "Dokumentacja klienta trafi do niewłaściwych osób.", mitigation: "Uprawnienia według ról i zapisy z umów z klientami." },
      { risk: "Przeniesienie starej dokumentacji zajmie dużo czasu.", mitigation: "Przenosimy najpierw wyroby w produkcji, resztę stopniowo." },
    ],
  },
  faq: [
    { question: "Czy to zastąpi system PDM?", answer: "W małych i średnich zakładach często wystarcza. Jeśli macie PDM, łączymy się z nim zamiast go zastępować." },
    { question: "Czy AI porówna dwa rysunki?", answer: "Może przygotować listę różnic z tekstu, tabelki i opisu zmian. Porównanie geometrii zostawiamy technologowi." },
    { question: "Czy pracownicy hali potrzebują komputerów?", answer: "Wystarczy tablet na wydziale albo kod QR przy zleceniu." },
    { question: "Czy dokumentacja klientów jest bezpieczna?", answer: "Dostęp ustalamy według ról i umów z klientami, a dokumenty zostają w waszej infrastrukturze lub chmurze." },
    { question: "Czy zobaczymy, według której wersji powstała partia?", answer: "Tak, wersja jest zapisana przy zleceniu i partii." },
  ],
  relatedServiceSlugs: ["cyfryzacja-danych-i-dokumentow", "ai-w-obsludze-dokumentow", "automatyzacja-w-produkcji"],
  relatedProcessSlugs: ["obieg-umow"],
  relatedToolSlugs: ["n8n", "microsoft-365", "google-workspace"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-zakladzie-produkcyjnym", "ai-w-dziale-jakosci", "przeglady-maszyn-w-zakladzie"],
};
