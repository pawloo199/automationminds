import type { IndustryPageContent } from "../types";

export const hurtownieOfertyICenniki: IndustryPageContent = {
  industrySlug: "hurtownie-i-dystrybucja",
  subSlug: "oferty-i-cenniki",
  name: "Oferty i cenniki",
  excerpt: "Oferty i cenniki z warunkami klienta generowane z ERP, zmiany cen u dostawców przeniesione do cenników i follow-up ofert.",
  metaTitle: "Oferty i cenniki w hurtowni: automatyzacja z ERP",
  metaDescription:
    "Automatyzujemy oferty i cenniki w hurtowni: oferty z warunkami klienta z ERP, cenniki indywidualne, zmiany cen od dostawców i przypomnienia o ofertach.",
  primaryKeyword: "cenniki dla klientów hurtowni",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Hurtownie: oferty i cenniki",
    title: "Oferty i cenniki klientów w kilka chwil, a nie w godzinę",
    lead: "W hurtowni każdy ważny klient ma swoje warunki: rabaty, ceny specjalne, grupy produktów. Przygotowanie oferty lub cennika oznacza eksport z ERP, arkusz, ręczne wyliczenia i formatowanie. Gdy dostawca podnosi ceny, aktualizacja cenników zajmuje dni. Automatyzujemy tę pracę: oferty i cenniki powstają z ERP z warunkami klienta, zmiany cen od dostawców trafiają do cenników po akceptacji, a oferty bez odpowiedzi nie giną.",
    bullets: [
      "Oferty z warunkami klienta generowane z ERP",
      "Cenniki indywidualne zawsze aktualne",
      "Follow-up ofert bez pamiętania",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Hurtownie i dystrybutorzy z indywidualnymi warunkami dla klientów" },
    { label: "Co automatyzujemy", value: "Oferty, cenniki, aktualizacje cen, wysyłkę i przypomnienia o ofertach" },
    { label: "Narzędzia", value: "ERP, szablony Word lub Excel, CRM, poczta, n8n" },
    { label: "Zasada", value: "Ceny specjalne i zmiany cen zatwierdza człowiek" },
  ],
  symptoms: {
    title: "Kiedy oferty i cenniki warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, handlowcy spędzają czas na arkuszach zamiast u klientów.",
    items: [
      "Przygotowanie oferty dla klienta zajmuje handlowcowi godzinę lub dłużej.",
      "Każdy handlowiec ma własny szablon oferty.",
      "Cenniki indywidualne są w arkuszach, które nie zawsze zgadzają się z ERP.",
      "Zmiana cen u dostawcy oznacza dni pracy przy aktualizacji cenników.",
      "Oferty bez odpowiedzi nikt nie przypomina, bo handlowiec zajmuje się kolejnymi.",
      "Nie wiadomo, ile ofert zamienia się w zamówienia.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja ofert i cenników",
    paragraphs: [
      "Handlowiec wybiera klienta i produkty w prostym formularzu albo w CRM. System pobiera z ERP ceny i rabaty klienta, dostępność i terminy dostaw, a następnie przygotowuje ofertę z szablonu firmy, w odpowiednim języku i formacie. Ceny specjalne spoza warunków klienta wymagają akceptacji przed wysyłką.",
      "Cenniki indywidualne dla klientów powstają w ten sam sposób: z ERP, według warunków klienta, w formacie, którego oczekuje, np. Excel do importu w jego systemie. Gdy dostawca zmienia ceny, system odczytuje nowy cennik, pokazuje wpływ zmian na ceny sprzedaży i marżę, a po akceptacji aktualizuje ERP i przygotowuje nowe cenniki dla klientów.",
      "Wysłana oferta trafia do CRM. Jeśli klient nie odpowiada, handlowiec dostaje przypomnienie, a raport pokazuje, ile ofert zamienia się w zamówienia i w jakim czasie.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja ofert i cenników",
    lead: "Zakres dopasowujemy do sposobu pracy handlowców i ERP.",
    items: [
      { title: "Oferty z ERP", body: "Ceny, rabaty, dostępność i terminy klienta w ofercie z szablonu firmy." },
      { title: "Ceny specjalne", body: "Akceptacja cen poza warunkami klienta przed wysyłką." },
      { title: "Cenniki indywidualne", body: "Cenniki w formacie klienta, generowane z ERP." },
      { title: "Cenniki od dostawców", body: "Odczyt nowych cenników dostawców, także z PDF z pomocą AI." },
      { title: "Wpływ zmian cen", body: "Zestawienie wpływu zmian na ceny sprzedaży i marżę do decyzji." },
      { title: "Aktualizacja cenników", body: "Nowe cenniki dla klientów po zmianach, z informacją dla handlowców." },
      { title: "Follow-up ofert", body: "Przypomnienia o ofertach bez odpowiedzi w CRM." },
      { title: "Raport skuteczności", body: "Oferty, zamówienia i czas decyzji według handlowców i klientów." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od wyboru produktów do zamówienia i od cennika dostawcy do cennika klienta.",
    items: [
      {
        title: "Oferta dla klienta",
        trigger: "Handlowiec wybiera klienta i produkty",
        steps: ["Ceny, rabaty i dostępność z ERP", "Oferta z szablonu, akceptacja cen specjalnych", "Wysyłka, zapis w CRM i przypomnienie po kilku dniach"],
        result: "Oferta gotowa w kilka chwil, a follow-up dzieje się sam.",
      },
      {
        title: "Nowy cennik dostawcy",
        trigger: "Dostawca przysyła nowy cennik",
        steps: ["Odczyt cennika i porównanie z obecnymi cenami", "Zestawienie wpływu na ceny sprzedaży i marżę", "Po akceptacji aktualizacja ERP i cenników klientów"],
        result: "Zmiana cen trafia do cenników w dniu decyzji, a nie po tygodniu.",
      },
    ],
  },
  example: {
    title: "Oferty i cenniki przed i po automatyzacji",
    lead: "Przykład dystrybutora z kilkunastoma handlowcami i kilkuset klientami z indywidualnymi warunkami.",
    rows: [
      { label: "Oferta", before: "Eksport, arkusz, formatowanie.", after: "Gotowa z ERP w kilka chwil." },
      { label: "Cenniki", before: "Arkusze rozjechane z ERP.", after: "Generowane z ERP w formacie klienta." },
      { label: "Zmiany cen", before: "Dni pracy przy aktualizacji.", after: "Zestawienie, decyzja, aktualizacja." },
      { label: "Follow-up", before: "Zależy od pamięci handlowca.", after: "Przypomnienia w CRM." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od ofert, a cenniki i zmiany cen dokładamy w kolejnym kroku.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy szablony ofert, sposób zapisu warunków klientów w ERP i obieg cenników.", fromYou: "Przykładowe oferty i cenniki oraz rozmowa z kierownikiem sprzedaży." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy szablony, zasady akceptacji cen, formaty cenników i follow-up.", fromYou: "Akceptacja szablonów i zasad." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływy i testujemy je z kilkoma handlowcami.", fromYou: "Handlowcy oceniający oferty testowe." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy cały zespół i rozwijamy raporty.", fromYou: "Uwagi handlowców." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od ofert i dokładać kolejne elementy.",
    items: [
      { name: "Oferty", description: "Dla firm, które chcą szybciej przygotowywać oferty.", includes: ["Oferty z ERP", "Szablon firmy", "Akceptacja cen specjalnych", "Zapis w CRM"] },
      { name: "Oferty i cenniki", description: "Dla firm z indywidualnymi cennikami klientów.", includes: ["Wszystko z wariantu Oferty", "Cenniki indywidualne", "Formaty klientów", "Follow-up ofert"] },
      { name: "Pełne zarządzanie cenami", description: "Dla firm, w których zmiany cen dostawców są częste.", includes: ["Wszystko z wariantu Oferty i cenniki", "Odczyt cenników dostawców", "Wpływ zmian na marżę", "Raport skuteczności ofert"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "sposób zapisu warunków klientów w ERP,",
      "liczba szablonów i formatów cenników,",
      "liczba dostawców i formatów ich cenników,",
      "integracja z CRM,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Oferta z błędną ceną.", mitigation: "Ceny pochodzą z ERP, a ceny spoza warunków klienta wymagają akceptacji." },
      { risk: "Błędny odczyt cennika dostawcy.", mitigation: "Zestawienie zmian do akceptacji przed aktualizacją ERP." },
      { risk: "Klient dostanie cennik innego klienta.", mitigation: "Cenniki generowane są per klient, a wysyłka trafia tylko do jego osób kontaktowych." },
      { risk: "Handlowcy wrócą do własnych arkuszy.", mitigation: "Formularz jest prostszy od arkusza, a szablon uwzględnia potrzeby zespołu." },
    ],
  },
  faq: [
    { question: "Czy oferty mogą być w obcych językach?", answer: "Tak. Szablony przygotowujemy w językach, w których pracujecie z klientami." },
    { question: "Czy cenniki mogą trafiać do systemów klientów?", answer: "Tak, w formacie, który klient może zaimportować, np. Excel lub CSV o ustalonym układzie." },
    { question: "Czy AI odczyta cennik dostawcy w PDF?", answer: "Tak. Odczytane ceny trafiają do zestawienia zmian, które zatwierdzacie przed aktualizacją ERP." },
    { question: "Czy to działa z naszym CRM?", answer: "Pracujemy z popularnymi CRM, np. HubSpot i Pipedrive, a także z CRM wbudowanymi w ERP, jeśli udostępniają dane." },
    { question: "Kto decyduje o zmianie cen sprzedaży?", answer: "Zawsze człowiek. System pokazuje wpływ zmian cen zakupu na ceny sprzedaży i marżę, ale decyzję podejmuje osoba odpowiedzialna." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "automatyzacja-oraz-ai-w-niestandardowych-procesach", "integracje-systemow"],
  relatedProcessSlugs: ["ofertowanie"],
  relatedToolSlugs: ["hubspot", "pipedrive", "n8n", "microsoft-365"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-hurtowni", "automatyzacja-obslugi-leadow-sprzedazowych", "integracja-crm-z-fakturowaniem"],
};
