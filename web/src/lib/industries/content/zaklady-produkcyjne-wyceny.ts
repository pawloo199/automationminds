import type { IndustryPageContent } from "../types";

export const zakladyProdukcyjneWyceny: IndustryPageContent = {
  industrySlug: "zaklady-produkcyjne",
  subSlug: "zapytania-i-wyceny",
  name: "Zapytania ofertowe i wyceny",
  excerpt: "Zapytania ofertowe od klientów w jednym rejestrze, dane z rysunków i załączników bez przepisywania, kalkulacja z czasów i materiałów, oferta z szablonu i follow-up.",
  metaTitle: "Wycena zleceń w zakładzie produkcyjnym: zapytania, oferty",
  metaDescription:
    "Automatyzujemy zapytania ofertowe w zakładzie produkcyjnym: rejestr zapytań, dane z załączników, kalkulacja z czasów i materiałów, oferta i follow-up.",
  primaryKeyword: "wycena zleceń produkcyjnych",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Zakłady produkcyjne: zapytania i wyceny",
    title: "Wycena zapytania w dniu, w którym przyszło, a nie po tygodniu",
    lead: "Klient przysyła zapytanie z rysunkiem, ilościami i terminem. Handlowiec przepisuje dane, przekazuje rysunek technologowi, technolog liczy czasy i materiał między innymi zadaniami, handlowiec składa ofertę. Gdy zapytań jest dużo, część czeka kilka dni, a klient w tym czasie dostaje ofertę od konkurencji. Automatyzujemy wyceny: dane z zapytania trafiają do rejestru same, kalkulacja korzysta z danych technologii, a technolog liczy tylko to, co nowe.",
    bullets: [
      "Zapytania i załączniki w jednym rejestrze",
      "Kalkulacja z czasów, materiałów i stawek",
      "Oferta z szablonu, follow-up i powody przegranych",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Zakłady produkujące na zamówienie dla klientów B2B" },
    { label: "Co automatyzujemy", value: "Zapytania, dane z załączników, kalkulacja, oferta, follow-up, statystyki" },
    { label: "Narzędzia", value: "Rejestr, poczta, ERP, model AI, n8n" },
    { label: "Zasada", value: "Cenę zatwierdza handlowiec lub technolog" },
  ],
  symptoms: {
    title: "Kiedy wyceny warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, zakład traci zlecenia na etapie oferty.",
    items: [
      "Zapytania czekają na wycenę kilka dni.",
      "Dane z zapytań przepisuje się ręcznie do arkusza lub ERP.",
      "Technolog liczy od zera wyroby podobne do tych, które już wyceniał.",
      "Ceny dla tego samego klienta różnią się w zależności od osoby, która liczyła.",
      "Nikt nie przypomina klientowi o ofercie po wysłaniu.",
      "Nie wiadomo, ile ofert wygrywacie i dlaczego przegrywacie.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja wycen",
    paragraphs: [
      "Zapytanie z maila lub formularza trafia do rejestru. AI wyodrębnia z treści i załączników dane: wyrób, materiał, ilości, wymagany termin, wymagania jakościowe, i przypisuje je do zapytania. Handlowiec sprawdza dane i widzi listę braków, o które trzeba dopytać klienta.",
      "Kalkulacja korzysta z danych, które zakład już ma: czasów operacji, cen materiałów, stawek maszyn i narzutów. Dla wyrobów podobnych do wcześniej wycenianych system podpowiada poprzednią kalkulację. Technolog uzupełnia tylko to, czego dane nie obejmują, na przykład nową operację.",
      "Oferta powstaje z szablonu, z warunkami handlowymi klienta. Po wysłaniu system przypomina handlowcowi o kontakcie, a przy przegranej oferta dostaje powód. Przyjęta oferta przechodzi do zamówienia bez przepisywania.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja wycen",
    lead: "Zakres dopasowujemy do rodzajów wyrobów i sposobu kalkulacji.",
    items: [
      { title: "Rejestr zapytań", body: "Wszystkie zapytania z poczty i formularzy w jednym miejscu." },
      { title: "Dane z załączników", body: "Wyrób, materiał, ilości i terminy z dokumentów klienta." },
      { title: "Lista braków", body: "Pytania do klienta, gdy brakuje danych." },
      { title: "Kalkulacja", body: "Czasy, materiały, stawki i narzuty z danych zakładu." },
      { title: "Podobne wyroby", body: "Poprzednie kalkulacje jako punkt wyjścia." },
      { title: "Szkic oferty", body: "Szablon z warunkami handlowymi klienta." },
      { title: "Follow-up", body: "Przypomnienia o kontakcie po wysłaniu." },
      { title: "Statystyki", body: "Wygrane, przegrane i powody." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zapytania do zamówienia.",
    items: [
      {
        title: "Nowe zapytanie",
        trigger: "Klient przysyła maila z rysunkiem i ilościami",
        steps: ["Dane z maila i załączników w rejestrze", "Kalkulacja z podobnego wyrobu i danych zakładu", "Technolog uzupełnia, handlowiec wysyła ofertę"],
        result: "Oferta szybciej, a technolog liczy tylko nowe operacje.",
      },
      {
        title: "Przyjęcie oferty",
        trigger: "Klient potwierdza ofertę",
        steps: ["Zamówienie z danymi z oferty", "Informacja dla planowania", "Potwierdzenie dla klienta"],
        result: "Dane z oferty przechodzą do zamówienia bez przepisywania.",
      },
    ],
  },
  example: {
    title: "Wyceny przed i po automatyzacji",
    lead: "Przykład zakładu obróbki skrawaniem wyceniającego kilkadziesiąt zapytań w miesiącu.",
    rows: [
      { label: "Czas do oferty", before: "Kilka dni.", after: "Często ten sam dzień." },
      { label: "Dane z zapytań", before: "Przepisywane.", after: "Wyodrębnione do sprawdzenia." },
      { label: "Kalkulacja", before: "Od zera.", after: "Z podobnych wyrobów i danych." },
      { label: "Wyniki ofert", before: "Nieznane.", after: "Wygrane i przegrane z powodami." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym zakładzie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od rejestru zapytań i zasad kalkulacji.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Zbieramy przykładowe zapytania, kalkulacje i oferty.", fromYou: "Zapytania, arkusze kalkulacyjne, oferty." },
      { title: "Zasady i szablony", duration: "około tygodnia", body: "Opisujemy zasady kalkulacji, dane wejściowe i szablon oferty.", fromYou: "Technolog i handlowiec." },
      { title: "Budowa i test", duration: "zwykle 3–5 tygodni", body: "Testujemy na prawdziwych zapytaniach obok dotychczasowej pracy.", fromYou: "Osoba porównująca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Rozwijamy kalkulację i dane o wyrobach.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rejestru zapytań i odczytu danych.",
    items: [
      { name: "Rejestr zapytań", description: "Dla zakładów, które chcą uporządkować zapytania.", includes: ["Rejestr z poczty i formularzy", "Odczyt danych z zapytań", "Lista braków", "Follow-up"] },
      { name: "Kalkulacja z danych", description: "Dla zakładów, które chcą wyceniać szybciej.", includes: ["Wszystko z wariantu Rejestr zapytań", "Kalkulacja z czasów i materiałów", "Podobne wyroby", "Szkic oferty"] },
      { name: "Od zapytania do zamówienia", description: "Dla zakładów, które chcą połączyć sprzedaż z produkcją.", includes: ["Wszystko z wariantu Kalkulacja z danych", "Zamówienie z oferty", "Integracja z ERP", "Statystyki ofert"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba zapytań i forma załączników,",
      "złożoność zasad kalkulacji,",
      "stan danych o czasach i materiałach,",
      "integracja z ERP,",
      "zakres wykorzystania AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "AI źle odczyta ilości lub materiał.", mitigation: "Dane to szkic, który handlowiec sprawdza z dokumentem klienta." },
      { risk: "Kalkulacja oparta na nieaktualnych cenach materiałów.", mitigation: "Ceny pobieramy z ERP lub cennika, a kalkulacja pokazuje datę ceny." },
      { risk: "Nietypowy wyrób nie pasuje do zasad.", mitigation: "Technolog może zmienić każdą pozycję kalkulacji." },
      { risk: "Oferta wyjdzie bez sprawdzenia.", mitigation: "Wysłanie oferty zawsze wymaga zatwierdzenia przez handlowca." },
    ],
  },
  faq: [
    { question: "Czy system sam wyceni zapytanie?", answer: "Przygotuje kalkulację z danych zakładu. Cenę sprawdza i zatwierdza handlowiec lub technolog." },
    { question: "Czy AI odczyta zapytania w PDF?", answer: "Tak, tekst z maili, PDF-ów i arkuszy. Dane trafiają do sprawdzenia." },
    { question: "Skąd biorą się czasy operacji?", answer: "Z danych technologii, ERP lub zakończonych zleceń, a nie z ogólnej wiedzy modelu." },
    { question: "Czy łączycie się z ERP?", answer: "Tak, jeśli ERP ma możliwość wymiany danych. Ustalamy to w przeglądzie." },
    { question: "Czy zobaczymy, dlaczego przegrywamy oferty?", answer: "Tak, jeśli oferty dostają status i powód przegranej." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "ai-w-obsludze-dokumentow", "automatyzacja-w-produkcji"],
  relatedProcessSlugs: ["ofertowanie", "obsluga-zapytan-i-leadow"],
  relatedToolSlugs: ["n8n", "airtable", "microsoft-365"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
