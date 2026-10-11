import type { IndustryPageContent } from "../types";

export const logistykaFlotaIKierowcy: IndustryPageContent = {
  industrySlug: "firmy-logistyczne",
  subSlug: "flota-i-kierowcy",
  name: "Flota i kierowcy",
  excerpt: "Terminy badań, uprawnień, przeglądów i ubezpieczeń, zgłoszenia szkód i koszty floty w jednym miejscu, z przypomnieniami.",
  metaTitle: "Dokumenty floty i kierowców: terminy i przypomnienia",
  metaDescription:
    "Automatyzujemy administrację floty: terminy badań i uprawnień kierowców, przeglądy i ubezpieczenia pojazdów, zgłoszenia szkód, dokumenty i koszty floty.",
  primaryKeyword: "dokumenty kierowców i floty",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy logistyczne: flota i kierowcy",
    title: "Flota i kierowcy: żaden termin nie wygasa niezauważony",
    lead: "Firma z własną flotą pilnuje dziesiątek terminów: badań i uprawnień kierowców, przeglądów, ubezpieczeń, legalizacji tachografów. Do tego dochodzą zgłoszenia szkód, faktury za paliwo i serwis, dokumenty od kierowców. Często wszystko to jest w arkuszu i w głowie jednej osoby. Automatyzujemy administrację floty: terminy są pilnowane automatycznie, dokumenty mają jedno miejsce, a szkody i koszty są zgłaszane i zbierane bez przepisywania.",
    bullets: [
      "Terminy kierowców i pojazdów z przypomnieniami",
      "Dokumenty i zgłoszenia szkód z telefonu",
      "Koszty floty z faktur odczytanych przez AI",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy transportowe i logistyczne z własną flotą i kierowcami" },
    { label: "Co automatyzujemy", value: "Terminy, dokumenty, zgłoszenia szkód, koszty, informacje dla kierowców" },
    { label: "Narzędzia", value: "Baza floty, formularz na telefon, poczta, SMS, model AI, n8n" },
    { label: "Zasada", value: "Decyzje o dopuszczeniu kierowcy i pojazdu podejmuje człowiek" },
  ],
  symptoms: {
    title: "Kiedy administrację floty warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, terminy i dokumenty floty zależą od pamięci jednej osoby.",
    items: [
      "Terminy badań, uprawnień i przeglądów są w arkuszu, który aktualizuje jedna osoba.",
      "O wygasłym ubezpieczeniu lub przeglądzie dowiadujecie się za późno.",
      "Kierowcy przesyłają dokumenty i zdjęcia przez komunikatory.",
      "Zgłoszenie szkody to telefon, zdjęcia w telefonie i kilka maili.",
      "Faktury za paliwo, serwis i opłaty drogowe trudno przypisać do pojazdów.",
      "Nie wiadomo bez liczenia, ile kosztuje utrzymanie konkretnego pojazdu.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja administracji floty",
    paragraphs: [
      "Podstawą jest jedna baza floty: pojazdy, kierowcy i ich dokumenty z terminami ważności. Dane z obecnego arkusza porządkujemy i uzupełniamy, a dokumenty, takie jak polisy czy dowody rejestracyjne, mogą zostać odczytane przez AI, które wyciąga z nich terminy i numery.",
      "Na tej podstawie system pilnuje terminów. Przed końcem ważności badań, uprawnień, przeglądu czy polisy wysyła przypomnienie do osoby odpowiedzialnej i do kierowcy, a po terminie oznacza kierowcę lub pojazd jako wymagający uwagi. Decyzję o dopuszczeniu do pracy podejmuje człowiek, ale z pełną informacją.",
      "Kierowcy zgłaszają szkody, usterki i przesyłają dokumenty przez prosty formularz na telefonie, ze zdjęciami. Zgłoszenie trafia do osoby odpowiedzialnej i do bazy floty. Faktury za paliwo, serwis i opłaty są odczytywane i przypisywane do pojazdów, co pozwala zobaczyć koszt utrzymania każdego z nich.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja floty",
    lead: "Zakres dopasowujemy do wielkości floty i sposobu pracy firmy.",
    items: [
      { title: "Baza floty", body: "Pojazdy, kierowcy i dokumenty z terminami w jednym miejscu." },
      { title: "Terminy kierowców", body: "Badania, uprawnienia, szkolenia i inne dokumenty z przypomnieniami." },
      { title: "Terminy pojazdów", body: "Przeglądy, ubezpieczenia, legalizacje i serwisy z przypomnieniami." },
      { title: "Odczyt dokumentów", body: "Terminy i numery z polis i innych dokumentów odczytane przez AI." },
      { title: "Zgłoszenia szkód i usterek", body: "Formularz na telefon ze zdjęciami i lokalizacją." },
      { title: "Koszty floty", body: "Faktury za paliwo, serwis i opłaty przypisane do pojazdów." },
      { title: "Informacje dla kierowców", body: "Przypomnienia i komunikaty mailem lub SMS-em." },
      { title: "Raport floty", body: "Terminy, szkody i koszty utrzymania pojazdów." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od terminu w bazie do działania na czas.",
    items: [
      {
        title: "Zbliżający się termin",
        trigger: "Do końca ważności polisy lub przeglądu zostało kilka tygodni",
        steps: ["Przypomnienie dla osoby odpowiedzialnej", "Przypomnienie dla kierowcy, jeśli dotyczy jego dokumentu", "Oznaczenie w raporcie, gdy termin minie bez aktualizacji"],
        result: "Żaden termin nie wygasa niezauważony.",
      },
      {
        title: "Szkoda na trasie",
        trigger: "Kierowca wypełnia formularz na telefonie",
        steps: ["Zapis zgłoszenia ze zdjęciami i lokalizacją", "Informacja dla osoby odpowiedzialnej za flotę", "Lista dokumentów potrzebnych do zgłoszenia ubezpieczycielowi"],
        result: "Zgłoszenie jest kompletne od początku, a nie składane z kilku wiadomości.",
      },
    ],
  },
  example: {
    title: "Administracja floty przed i po automatyzacji",
    lead: "Przykład firmy transportowej z kilkudziesięcioma pojazdami.",
    rows: [
      { label: "Terminy", before: "Arkusz aktualizowany przez jedną osobę.", after: "Baza z przypomnieniami dla kilku osób." },
      { label: "Dokumenty", before: "W komunikatorach i mailach.", after: "W bazie, przy kierowcy lub pojeździe." },
      { label: "Szkody", before: "Telefon i zdjęcia w kilku wiadomościach.", after: "Jedno zgłoszenie ze zdjęciami." },
      { label: "Koszty", before: "Trudne do przypisania.", after: "Koszt każdego pojazdu w raporcie." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Najwięcej pracy wymaga uporządkowanie danych o flocie. Resztę budujemy na nich.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś pilnujecie terminów, gdzie są dokumenty i jak zgłaszane są szkody.", fromYou: "Obecny arkusz i rozmowa z osobą odpowiedzialną za flotę." },
      { title: "Baza floty", duration: "1–2 tygodnie", body: "Porządkujemy dane pojazdów i kierowców, uzupełniamy terminy z dokumentów.", fromYou: "Dokumenty i weryfikacja danych." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przypomnienia, formularz dla kierowców i przypisanie kosztów.", fromYou: "Kilku kierowców do testu formularza." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy całą flotę i rozwijamy raporty.", fromYou: "Informacja o nowych pojazdach i kierowcach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od terminów, a szkody i koszty dodać później.",
    items: [
      { name: "Terminy", description: "Dla firm, które chcą panować nad terminami.", includes: ["Baza floty", "Terminy kierowców i pojazdów", "Przypomnienia", "Raport terminów"] },
      { name: "Terminy i zgłoszenia", description: "Dla firm, które chcą uporządkować kontakt z kierowcami.", includes: ["Wszystko z wariantu Terminy", "Formularz na telefon", "Zgłoszenia szkód i usterek", "Dokumenty od kierowców"] },
      { name: "Pełna administracja", description: "Dla firm, które chcą znać koszty floty.", includes: ["Wszystko z wariantu Terminy i zgłoszenia", "Odczyt faktur i przypisanie kosztów", "Odczyt dokumentów z AI", "Raport kosztów pojazdów"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "wielkość floty i liczba kierowców,",
      "stan obecnych danych,",
      "liczba rodzajów dokumentów i terminów,",
      "zakres odczytu faktur i przypisania kosztów,",
      "integracja z systemem telematycznym lub TMS.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędny termin w bazie.", mitigation: "Terminy odczytane z dokumentów sprawdza osoba odpowiedzialna, a przypomnienia wychodzą z wyprzedzeniem." },
      { risk: "Kierowcy nie będą korzystać z formularza.", mitigation: "Formularz jest prosty, działa na telefonie i nie wymaga logowania." },
      { risk: "Dane osobowe kierowców w niewłaściwym miejscu.", mitigation: "Dostęp do danych kierowców mają tylko osoby, które ich potrzebują." },
      { risk: "Automatyczne wykluczenie kierowcy z pracy.", mitigation: "System oznacza problem, a decyzję podejmuje człowiek." },
    ],
  },
  faq: [
    { question: "Czy to zastąpi system telematyczny?", answer: "Nie. System telematyczny śledzi pojazdy i jazdę. My porządkujemy administrację floty: terminy, dokumenty, szkody i koszty. Oba mogą być ze sobą połączone." },
    { question: "Czy kierowcy muszą instalować aplikację?", answer: "Nie. Wystarczy formularz otwierany z linku na telefonie." },
    { question: "Na jakim narzędziu budujecie bazę floty?", answer: "Najczęściej w Airtable lub Microsoft 365, jeśli firma już z niego korzysta. Wybór zależy od wielkości floty." },
    { question: "Czy AI odczyta polisę ubezpieczeniową?", answer: "Tak, odczyta numer, okres ubezpieczenia i zakres, które trafiają do bazy do sprawdzenia." },
    { question: "Czy przypomnienia mogą trafiać do kierowców SMS-em?", answer: "Tak, jeśli korzystacie z bramki SMS." },
  ],
  relatedServiceSlugs: ["projektowanie-baz-danych", "wdrozenia-airtable", "automatyzacja-dla-logistyki"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych"],
  relatedToolSlugs: ["airtable", "n8n", "microsoft-365"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-firmie-logistycznej", "airtable-czy-excel", "airtable-w-praktyce-zastosowania"],
};
