import type { IndustryPageContent } from "../types";

export const placowkiMedyczneRozliczenia: IndustryPageContent = {
  industrySlug: "placowki-medyczne",
  subSlug: "rozliczenia",
  name: "Rozliczenia i płatności",
  excerpt: "Płatności za wizyty, pakiety i abonamenty firmowe, faktury dla pacjentów i firm, rozliczenia lekarzy według umów i raport przychodów placówki.",
  metaTitle: "Rozliczenia w przychodni: płatności, abonamenty, lekarze",
  metaDescription:
    "Automatyzujemy rozliczenia w placówce medycznej: płatności, pakiety, abonamenty firmowe, faktury i KSeF, rozliczenia lekarzy według umów i przychody.",
  primaryKeyword: "rozliczenia lekarzy w przychodni",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Placówki medyczne: rozliczenia",
    title: "Rozliczenia lekarzy i abonamentów bez arkuszy na koniec miesiąca",
    lead: "Lekarze pracują na różnych umowach: procent od wizyt, stawka godzinowa, ryczałt. Firmy mają abonamenty dla pracowników z różnym zakresem usług. Pacjenci płacą za wizyty, pakiety i badania. Na koniec miesiąca ktoś składa to w arkuszu, żeby rozliczyć lekarzy i wystawić faktury firmom. Automatyzujemy rozliczenia: dane o wizytach i płatnościach trafiają do jednego miejsca, a rozliczenia powstają według umów.",
    bullets: [
      "Rozliczenia lekarzy według umów",
      "Abonamenty firmowe i faktury bez arkuszy",
      "Raport przychodów według lekarzy i usług",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Prywatne przychodnie i centra medyczne z wieloma lekarzami" },
    { label: "Co automatyzujemy", value: "Płatności, pakiety, abonamenty, faktury, rozliczenia lekarzy, raporty" },
    { label: "Narzędzia", value: "System gabinetowy, płatności, program do faktur, KSeF, n8n" },
    { label: "Zasada", value: "Rozliczenia zatwierdza osoba odpowiedzialna" },
  ],
  symptoms: {
    title: "Kiedy rozliczenia warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, koniec miesiąca zabiera kilka dni.",
    items: [
      "Rozliczenia lekarzy liczy się w arkuszu.",
      "Lekarze pytają o swoje rozliczenia i trzeba je sprawdzać.",
      "Faktury dla firm z abonamentami wystawia się ręcznie.",
      "Nie wiadomo, czy pacjent korzystał z usług objętych abonamentem.",
      "Płatności za pakiety trudno powiązać z wizytami.",
      "Raport przychodów powstaje z opóźnieniem.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja rozliczeń",
    paragraphs: [
      "Dane o wizytach i usługach pochodzą z systemu gabinetowego, a płatności z kasy i operatora płatności. System łączy je i przypisuje do lekarzy, usług, pakietów i abonamentów. Dane o zdrowiu nie są do tego potrzebne: wystarczy usługa, lekarz, data i płatnik.",
      "Rozliczenia lekarzy powstają według ich umów: procent od wizyt, stawka godzinowa z grafiku, ryczałt, z uwzględnieniem kosztów, jeśli umowa je przewiduje. Osoba odpowiedzialna zatwierdza rozliczenie, a lekarze dostają zestawienia. Faktury lub rachunki od lekarzy mogą być porównywane z rozliczeniem.",
      "Abonamenty firmowe są rozliczane według umów z firmami: liczba pracowników, wykorzystane usługi, limity. Faktury dla firm i pacjentów powstają w programie do faktur i trafiają do KSeF. Raport przychodów pokazuje wyniki według lekarzy, usług i płatników.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja rozliczeń",
    lead: "Zakres dopasowujemy do modeli umów i płatników.",
    items: [
      { title: "Wizyty i płatności", body: "Połączone dane z systemu i kasy." },
      { title: "Pakiety", body: "Płatności powiązane z wykorzystanymi usługami." },
      { title: "Abonamenty firmowe", body: "Rozliczenia według umów z firmami." },
      { title: "Rozliczenia lekarzy", body: "Według umów, do zatwierdzenia." },
      { title: "Zestawienia dla lekarzy", body: "Wizyty i kwoty w jednym miejscu." },
      { title: "Faktury i KSeF", body: "Dla pacjentów i firm w programie do faktur." },
      { title: "Minimum danych", body: "Bez danych o zdrowiu, tylko usługa, lekarz i płatnik." },
      { title: "Raport przychodów", body: "Według lekarzy, usług i płatników." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od wizyty do rozliczenia.",
    items: [
      {
        title: "Koniec miesiąca",
        trigger: "Zamknięcie okresu",
        steps: ["Zestawienie wizyt według lekarzy", "Rozliczenie według umów, do zatwierdzenia", "Zestawienia dla lekarzy"],
        result: "Lekarze dostają rozliczenia na czas.",
      },
      {
        title: "Abonament firmowy",
        trigger: "Koniec okresu rozliczeniowego",
        steps: ["Zestawienie wykorzystanych usług", "Faktura według umowy z firmą", "Raport dla firmy bez danych o zdrowiu pracowników"],
        result: "Faktura dla firmy bez ręcznego liczenia.",
      },
    ],
  },
  example: {
    title: "Rozliczenia przed i po automatyzacji",
    lead: "Przykład centrum medycznego z lekarzami na różnych umowach i kilkoma firmami z abonamentami.",
    rows: [
      { label: "Lekarze", before: "Arkusz i pytania.", after: "Zestawienia według umów." },
      { label: "Firmy", before: "Faktury ręcznie.", after: "Według umów." },
      { label: "Pakiety", before: "Trudne do powiązania.", after: "Połączone z usługami." },
      { label: "Przychody", before: "Z opóźnieniem.", after: "Raport na bieżąco." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej placówce.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Rozliczenia testujemy na jednym miesiącu równolegle z obecnym sposobem.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy umowy z lekarzami, abonamenty i źródła danych.", fromYou: "Wzory umów i rozmowa z osobą od rozliczeń." },
      { title: "Zasady", duration: "1–2 tygodnie", body: "Zapisujemy zasady rozliczeń dla każdego modelu umowy.", fromYou: "Weryfikacja zasad." },
      { title: "Budowa i test", duration: "zwykle 3–4 tygodnie", body: "Budujemy przepływy i porównujemy wyniki z ręcznym rozliczeniem.", fromYou: "Osoba porównująca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Przełączamy rozliczenia i pilnujemy zmian w umowach.", fromYou: "Informacja o nowych umowach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rozliczeń lekarzy.",
    items: [
      { name: "Rozliczenia lekarzy", description: "Dla placówek z wieloma lekarzami.", includes: ["Wizyty i płatności", "Rozliczenia według umów", "Zestawienia dla lekarzy", "Zatwierdzenie"] },
      { name: "Lekarze i firmy", description: "Dla placówek z abonamentami firmowymi.", includes: ["Wszystko z wariantu Rozliczenia lekarzy", "Abonamenty firmowe", "Faktury i KSeF", "Pakiety"] },
      { name: "Pełne rozliczenia", description: "Dla placówek, które chcą znać wyniki.", includes: ["Wszystko z wariantu Lekarze i firmy", "Raport przychodów", "Raport dla właściciela", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba lekarzy i modeli umów,",
      "liczba firm z abonamentami,",
      "możliwości integracji systemu gabinetowego i kasy,",
      "integracja z programem do faktur,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędne rozliczenie lekarza.", mitigation: "Rozliczenie zatwierdza osoba odpowiedzialna, a lekarz widzi szczegóły." },
      { risk: "Dane o zdrowiu w raporcie dla firmy.", mitigation: "Raporty dla firm nie zawierają danych o zdrowiu pracowników." },
      { risk: "Zmiana umowy nieuwzględniona.", mitigation: "Zasady umów są w jednym miejscu, z datą obowiązywania." },
      { risk: "Różnice z księgowością.", mitigation: "Rozliczenia uzgadnia się z księgowością co miesiąc." },
    ],
  },
  faq: [
    { question: "Czy rozliczenia wymagają danych o zdrowiu?", answer: "Nie. Wystarczą usługa, lekarz, data i płatnik." },
    { question: "Czy obsłużycie różne modele umów z lekarzami?", answer: "Tak, procent od wizyt, stawki godzinowe, ryczałty i ich połączenia." },
    { question: "Czy faktury trafią do KSeF?", answer: "Tak, przez wasz program do faktur albo przez bezpośrednie połączenie." },
    { question: "Czy rozliczycie abonamenty firmowe?", answer: "Tak, według umów z firmami, bez danych o zdrowiu w raportach dla firm." },
    { question: "Czy lekarze zobaczą swoje rozliczenia?", answer: "Tak, w zestawieniu z wizytami i kwotami." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-raportow", "integracje-systemow"],
  relatedProcessSlugs: ["raporty-finansowe", "przypomnienia-o-platnosciach"],
  relatedToolSlugs: ["ksef", "airtable", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
