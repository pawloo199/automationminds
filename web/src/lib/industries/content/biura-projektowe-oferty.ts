import type { IndustryPageContent } from "../types";

export const biuraProjektoweOferty: IndustryPageContent = {
  industrySlug: "biura-projektowe",
  subSlug: "zapytania-i-oferty",
  name: "Zapytania i oferty",
  excerpt: "Zapytania inwestorów w jednym rejestrze, formularz o potrzeby i działkę, oferta z zakresem, etapami i ceną z szablonu i poprzednich projektów, follow-up i statusy.",
  metaTitle: "Oferty biura projektowego: zapytania i wyceny projektów",
  metaDescription:
    "Automatyzujemy oferty w biurze projektowym: rejestr zapytań, formularz potrzeb inwestora, szkic oferty z zakresem, etapami i ceną, follow-up i statusy.",
  primaryKeyword: "oferty biura projektowego",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Biura projektowe: zapytania i oferty",
    title: "Oferta na projekt w dniu zapytania, z jasnym zakresem prac",
    lead: "Inwestor pyta o projekt. Kierownik projektu dzwoni, dopytuje o działkę, potrzeby i budżet, szuka podobnej oferty sprzed roku, przepisuje zakres i liczy cenę. Oferta wychodzi po kilku dniach, a zakres jest za każdym razem opisany trochę inaczej, co rodzi spory przy realizacji. Automatyzujemy oferty: inwestor wypełnia formularz, system przygotowuje szkic oferty z szablonu i poprzednich projektów, a kierownik projektu go dopracowuje.",
    bullets: [
      "Formularz o potrzeby inwestora i dane działki",
      "Szkic oferty z zakresem, etapami i ceną",
      "Follow-up i statusy ofert z powodami",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Pracownie architektoniczne i biura projektowe" },
    { label: "Co automatyzujemy", value: "Zapytania, formularz potrzeb, oferty, follow-up, statusy, umowy" },
    { label: "Narzędzia", value: "Rejestr, formularz, szablony, model AI, n8n" },
    { label: "Zasada", value: "Cenę i zakres zatwierdza kierownik projektu" },
  ],
  symptoms: {
    title: "Kiedy pracę z ofertami warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, biuro traci czas i zlecenia na etapie oferty.",
    items: [
      "Oferta powstaje kilka dni.",
      "Zakres prac w ofertach jest opisywany różnie.",
      "Przy realizacji pojawiają się spory o to, co obejmowała umowa.",
      "Doświadczenia z poprzednich projektów nie są wykorzystywane przy wycenie.",
      "Nikt nie przypomina o kontakcie po wysłaniu oferty.",
      "Nie wiadomo, ile ofert kończy się umową.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja ofert",
    paragraphs: [
      "Zapytanie od inwestora trafia do rejestru, a inwestor dostaje formularz: rodzaj obiektu, lokalizacja i dane działki, powierzchnia, oczekiwany zakres, terminy, budżet. Kierownik projektu widzi zapytanie z kompletem informacji albo listą braków.",
      "Na podstawie formularza i szablonów biura system przygotowuje szkic oferty: zakres prac z listy standardowych pozycji, etapy, terminy, branże, które trzeba zaangażować, i cenę według zasad biura. Szkic korzysta z poprzednich podobnych projektów, np. ich czasu realizacji. AI może przygotować opis zakresu dopasowany do zapytania. Kierownik projektu dopracowuje i wysyła ofertę.",
      "Po wysłaniu system przypomina o kontakcie z inwestorem. Oferta ma status, a przy odrzuceniu powód. Po przyjęciu umowa powstaje z szablonu z zakresem z oferty, a projekt trafia do rejestru z etapami i budżetem godzin.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja ofert",
    lead: "Zakres dopasowujemy do rodzajów projektów.",
    items: [
      { title: "Rejestr zapytań", body: "Wszystkie zapytania w jednym miejscu." },
      { title: "Formularz potrzeb", body: "Obiekt, działka, zakres, terminy, budżet." },
      { title: "Standardowy zakres", body: "Lista pozycji zakresu prac i etapów." },
      { title: "Szkic oferty", body: "Zakres, etapy, terminy, branże i cena." },
      { title: "Poprzednie projekty", body: "Czas realizacji i koszty podobnych projektów." },
      { title: "Follow-up", body: "Przypomnienia o kontakcie po wysłaniu." },
      { title: "Statusy i powody", body: "Przyjęte, odrzucone, z powodami." },
      { title: "Umowa i projekt", body: "Umowa z szablonu i projekt w rejestrze po akceptacji." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zapytania do umowy.",
    items: [
      {
        title: "Zapytanie o projekt",
        trigger: "Inwestor wypełnia formularz na stronie",
        steps: ["Zapytanie w rejestrze z danymi działki", "Szkic oferty z szablonu i podobnych projektów", "Kierownik projektu dopracowuje i wysyła"],
        result: "Oferta w dniu zapytania.",
      },
      {
        title: "Akceptacja oferty",
        trigger: "Inwestor przyjmuje ofertę",
        steps: ["Umowa z szablonu z zakresem z oferty", "Projekt w rejestrze z etapami", "Budżet godzin dla projektu"],
        result: "Zakres z oferty przechodzi do umowy i projektu bez przepisywania.",
      },
    ],
  },
  example: {
    title: "Oferty przed i po automatyzacji",
    lead: "Przykład pracowni projektującej domy jednorodzinne i małe obiekty usługowe.",
    rows: [
      { label: "Czas do oferty", before: "Kilka dni.", after: "Ten sam dzień." },
      { label: "Zakres", before: "Opisywany różnie.", after: "Standardowe pozycje." },
      { label: "Wycena", before: "Z pamięci.", after: "Z danych poprzednich projektów." },
      { label: "Wyniki", before: "Nieznane.", after: "Statusy z powodami." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym biurze.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od standardowego zakresu i szablonu oferty.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Zbieramy przykładowe oferty, umowy i zasady wyceny.", fromYou: "Oferty i umowy." },
      { title: "Szablony", duration: "około tygodnia", body: "Przygotowujemy listę pozycji zakresu, szablon oferty i formularz.", fromYou: "Akceptacja szablonów." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Testujemy na nowych zapytaniach.", fromYou: "Kierownik projektu oceniający szkice." },
      { title: "Start i opieka", duration: "stale", body: "Rozwijamy szablony i dane o poprzednich projektach.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rejestru zapytań i szablonu.",
    items: [
      { name: "Rejestr i szablon", description: "Dla biur, które chcą uporządkować oferty.", includes: ["Rejestr zapytań", "Formularz potrzeb", "Szablon oferty", "Follow-up"] },
      { name: "Oferty z danych", description: "Dla biur, które chcą wyceniać na podstawie doświadczeń.", includes: ["Wszystko z wariantu Rejestr i szablon", "Standardowy zakres", "Poprzednie projekty", "Szkic oferty z AI"] },
      { name: "Od oferty do projektu", description: "Dla biur, które chcą połączyć sprzedaż z realizacją.", includes: ["Wszystko z wariantu Oferty z danych", "Umowa z szablonu", "Projekt w rejestrze", "Raport ofert"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba zapytań i rodzajów projektów,",
      "stan danych o poprzednich projektach,",
      "szablony ofert i umów,",
      "zakres wykorzystania AI,",
      "integracja z CRM.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Szkic oferty z błędnym zakresem lub ceną.", mitigation: "Szkic sprawdza i dopasowuje kierownik projektu." },
      { risk: "Nietypowy projekt nie pasuje do szablonu.", mitigation: "Kierownik może zmienić każdą pozycję i dodać nowe." },
      { risk: "Dane z poprzednich projektów są niekompletne.", mitigation: "Szkic pokazuje, na jakich projektach się opiera." },
      { risk: "Spór o zakres przy realizacji.", mitigation: "Zakres z oferty przechodzi do umowy bez przepisywania." },
    ],
  },
  faq: [
    { question: "Czy oferta powstanie bez udziału kierownika projektu?", answer: "Powstaje szkic, który kierownik dopracowuje i wysyła." },
    { question: "Czy inwestor musi wypełnić formularz?", answer: "Nie musi, ale to skraca przygotowanie oferty. Kierownik może go wypełnić po rozmowie." },
    { question: "Skąd system bierze ceny?", answer: "Z zasad wyceny biura i danych o poprzednich projektach, a nie z ogólnej wiedzy modelu." },
    { question: "Czy umowa powstanie z oferty?", answer: "Tak, z szablonu, z zakresem i etapami z oferty, do sprawdzenia." },
    { question: "Czy zobaczymy, dlaczego tracimy oferty?", answer: "Tak, jeśli oferty dostają status i powód odrzucenia." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "ai-w-obsludze-dokumentow", "automatyzacja-dla-firm-uslugowych"],
  relatedProcessSlugs: ["ofertowanie", "obsluga-zapytan-i-leadow", "obieg-umow"],
  relatedToolSlugs: ["pipedrive", "google-workspace", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
