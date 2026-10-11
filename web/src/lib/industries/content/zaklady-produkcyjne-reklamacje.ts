import type { IndustryPageContent } from "../types";

export const zakladyProdukcyjneReklamacje: IndustryPageContent = {
  industrySlug: "zaklady-produkcyjne",
  subSlug: "reklamacje-i-jakosc",
  name: "Reklamacje i dokumentacja jakości",
  excerpt: "Reklamacje klientów i reklamacje do dostawców w jednym rejestrze, terminy odpowiedzi, raporty reklamacyjne, działania korygujące, świadectwa jakości i historia wad.",
  metaTitle: "Reklamacje w zakładzie produkcyjnym: raporty i jakość",
  metaDescription:
    "Automatyzujemy reklamacje i dokumentację jakości w zakładzie produkcyjnym: rejestr reklamacji, terminy, raporty, działania korygujące i świadectwa.",
  primaryKeyword: "reklamacje w zakładzie produkcyjnym",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Zakłady produkcyjne: reklamacje i jakość",
    title: "Reklamacje z terminami i raportami, a nie w mailach i arkuszu",
    lead: "Klient zgłasza wadę partii mailem ze zdjęciami. Dział jakości szuka numeru partii, dokumentów z produkcji i świadectw materiału, pisze raport od zera, a termin odpowiedzi, którego wymaga klient, mija. Działania korygujące z poprzednich reklamacji są w arkuszu, którego nikt nie sprawdza. Automatyzujemy obieg reklamacji: zgłoszenie trafia do rejestru z kompletem danych, terminy są pilnowane, a szkic raportu powstaje z historii partii.",
    bullets: [
      "Rejestr reklamacji klientów i do dostawców",
      "Terminy odpowiedzi i działań korygujących",
      "Szkice raportów i historia wad",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Zakłady produkcyjne z wymaganiami jakościowymi klientów" },
    { label: "Co automatyzujemy", value: "Reklamacje, raporty, działania korygujące, świadectwa, dostawcy" },
    { label: "Narzędzia", value: "Rejestr, poczta, ERP, model AI, n8n" },
    { label: "Zasada", value: "Przyczynę i decyzje ustala dział jakości" },
  ],
  symptoms: {
    title: "Kiedy reklamacje warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, reklamacje zabierają za dużo czasu działu jakości.",
    items: [
      "Reklamacje są w mailach i arkuszu.",
      "Terminy odpowiedzi wymagane przez klientów bywają przekraczane.",
      "Raport reklamacyjny pisze się od zera.",
      "Dane o partii, materiale i produkcji trzeba zbierać z kilku miejsc.",
      "Działania korygujące nie są sprawdzane po zamknięciu reklamacji.",
      "Reklamacje do dostawców prowadzi się osobno i bez terminów.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja reklamacji",
    paragraphs: [
      "Reklamacja z maila lub formularza trafia do rejestru. AI wyodrębnia wyrób, numer partii, opis wady i ilości, a system dołącza dane o partii z ERP: datę produkcji, materiał, świadectwa dostawcy. Dział jakości dostaje zadanie z terminem wynikającym z wymagań klienta.",
      "Szkic raportu reklamacyjnego powstaje z danych w rejestrze, w formacie wymaganym przez klienta, na przykład 8D. Dział jakości ustala przyczynę i działania, a AI pomaga zredagować tekst i odpowiedź dla klienta. Każdy etap ma termin i osobę odpowiedzialną.",
      "Działania korygujące mają termin weryfikacji, a system przypomina o sprawdzeniu ich skuteczności. Reklamacje do dostawców prowadzi się w tym samym rejestrze. Historia wad pokazuje, które wyroby, maszyny i dostawcy powtarzają się w reklamacjach.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja reklamacji",
    lead: "Zakres dopasowujemy do wymagań klientów i systemu jakości zakładu.",
    items: [
      { title: "Rejestr reklamacji", body: "Reklamacje klientów w jednym miejscu." },
      { title: "Dane o partii", body: "Data produkcji, materiał i świadectwa z ERP." },
      { title: "Terminy", body: "Terminy odpowiedzi wymagane przez klientów." },
      { title: "Szkic raportu", body: "Raport w formacie wymaganym przez klienta." },
      { title: "Działania korygujące", body: "Terminy wdrożenia i weryfikacji." },
      { title: "Reklamacje do dostawców", body: "Zgłoszenia, odpowiedzi i obciążenia." },
      { title: "Świadectwa jakości", body: "Dokumenty do wysyłki z partią." },
      { title: "Historia wad", body: "Raporty według wyrobów, maszyn i dostawców." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zgłoszenia do zamknięcia reklamacji.",
    items: [
      {
        title: "Nowa reklamacja",
        trigger: "Klient zgłasza wadę partii ze zdjęciami",
        steps: ["Reklamacja w rejestrze z danymi partii", "Zadanie dla działu jakości z terminem", "Szkic raportu z danymi z produkcji"],
        result: "Dział jakości zaczyna od kompletu danych, a nie od szukania.",
      },
      {
        title: "Działanie korygujące",
        trigger: "Mija termin weryfikacji działania",
        steps: ["Przypomnienie dla osoby odpowiedzialnej", "Wynik weryfikacji w rejestrze", "Zamknięcie lub ponowne działanie"],
        result: "Działania korygujące są sprawdzane, a nie zapominane.",
      },
    ],
  },
  example: {
    title: "Reklamacje przed i po automatyzacji",
    lead: "Przykład zakładu dostarczającego elementy dla przemysłu z wymaganiem raportów 8D.",
    rows: [
      { label: "Zgłoszenia", before: "Mail i arkusz.", after: "Rejestr z danymi partii." },
      { label: "Terminy", before: "Bywają przekraczane.", after: "Przypomnienia z wyprzedzeniem." },
      { label: "Raporty", before: "Od zera.", after: "Szkic z danych." },
      { label: "Działania korygujące", before: "Bez weryfikacji.", after: "Termin i przypomnienie." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym zakładzie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od rejestru reklamacji klientów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Zbieramy przykładowe reklamacje, raporty i wymagania klientów.", fromYou: "Reklamacje, raporty, procedury." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy rejestr, terminy i szablony raportów.", fromYou: "Akceptacja działu jakości." },
      { title: "Budowa i test", duration: "zwykle 3–5 tygodni", body: "Testujemy na bieżących reklamacjach.", fromYou: "Pracownik jakości oceniający szkice." },
      { title: "Start i opieka", duration: "stale", body: "Dokładamy reklamacje do dostawców i raporty.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rejestru i terminów.",
    items: [
      { name: "Rejestr i terminy", description: "Dla zakładów, które chcą uporządkować reklamacje.", includes: ["Rejestr reklamacji", "Terminy odpowiedzi", "Dane o partii", "Przypomnienia"] },
      { name: "Raporty i działania", description: "Dla zakładów z wymaganiami klientów co do raportów.", includes: ["Wszystko z wariantu Rejestr i terminy", "Szkice raportów", "Działania korygujące", "Reklamacje do dostawców"] },
      { name: "Pełny obieg jakości", description: "Dla zakładów, które chcą analizować wady.", includes: ["Wszystko z wariantu Raporty i działania", "Świadectwa jakości", "Historia wad", "Raporty dla kierownictwa"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba reklamacji i klientów,",
      "formaty raportów wymagane przez klientów,",
      "integracja z ERP i danymi o partiach,",
      "zakres wykorzystania AI,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Szkic raportu wskaże błędną przyczynę.", mitigation: "Przyczynę i działania ustala dział jakości. Szkic porządkuje dane i tekst." },
      { risk: "Dane o partii są niekompletne.", mitigation: "Rejestr pokazuje, których danych brakuje, a dział jakości uzupełnia je ręcznie." },
      { risk: "Odpowiedź wyjdzie bez akceptacji.", mitigation: "Odpowiedź do klienta zawsze zatwierdza dział jakości." },
      { risk: "Rejestr rozjedzie się z systemem jakości.", mitigation: "Rejestr projektujemy zgodnie z procedurami zakładu." },
    ],
  },
  faq: [
    { question: "Czy AI ustali przyczynę wady?", answer: "Nie. Przyczynę ustala dział jakości. AI zbiera dane i pomaga zredagować raport." },
    { question: "Czy obsłużycie raporty 8D?", answer: "Tak, szablon raportu przygotowujemy w formacie wymaganym przez klientów." },
    { question: "Czy reklamacje do dostawców też?", answer: "Tak, w tym samym rejestrze, z terminami i odpowiedziami dostawców." },
    { question: "Czy to zastąpi system zarządzania jakością?", answer: "Nie. Porządkuje obieg reklamacji i dokumentów zgodnie z waszymi procedurami." },
    { question: "Czy zobaczymy, które wady się powtarzają?", answer: "Tak, historia wad pokazuje reklamacje według wyrobów, maszyn i dostawców." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "automatyzacja-w-obsludze-klienta", "automatyzacja-raportow"],
  relatedProcessSlugs: ["obsluga-reklamacji"],
  relatedToolSlugs: ["n8n", "airtable", "microsoft-365"],
  relatedArticleSlugs: ["ai-w-dziale-jakosci", "co-zautomatyzowac-w-zakladzie-produkcyjnym", "kalkulacja-kosztow-zlecenia-produkcyjnego"],
};
