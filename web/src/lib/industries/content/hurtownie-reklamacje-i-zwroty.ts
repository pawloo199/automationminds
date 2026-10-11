import type { IndustryPageContent } from "../types";

export const hurtownieReklamacjeIZwroty: IndustryPageContent = {
  industrySlug: "hurtownie-i-dystrybucja",
  subSlug: "reklamacje-i-zwroty",
  name: "Reklamacje i zwroty",
  excerpt: "Jeden rejestr reklamacji i zwrotów od klientów, z dokumentami, terminami, statusami i przekazaniem do dostawcy.",
  metaTitle: "Reklamacje i zwroty w hurtowni: jeden rejestr",
  metaDescription:
    "Automatyzujemy reklamacje i zwroty w hurtowni: zgłoszenia od klientów w jednym rejestrze, dokumenty i zdjęcia, terminy, statusy i reklamacje do dostawców.",
  primaryKeyword: "reklamacje w hurtowni",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Hurtownie: reklamacje i zwroty",
    title: "Reklamacje i zwroty w jednym miejscu, z terminem i statusem",
    lead: "Reklamacje w hurtowni przychodzą mailem do handlowców, telefonicznie do biura, czasem przez kierowcę. Każda wymaga dokumentów, decyzji, często reklamacji do dostawcy i korekty faktury. Gdy nie ma wspólnego rejestru, terminy uciekają, a klient dzwoni z pytaniem o status. Automatyzujemy obsługę reklamacji i zwrotów: zgłoszenia trafiają do jednego rejestru, z dokumentami i terminami, a klient i dostawca dostają informacje na każdym etapie.",
    bullets: [
      "Zgłoszenia z maili, formularza i telefonu w jednym rejestrze",
      "Dokumenty, zdjęcia i historia zamówienia przy zgłoszeniu",
      "Reklamacje do dostawców i korekty bez przepisywania",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Hurtownie i dystrybutorzy z regularnymi reklamacjami i zwrotami" },
    { label: "Co automatyzujemy", value: "Przyjęcie, dokumenty, terminy, statusy, reklamacje do dostawców, korekty" },
    { label: "Narzędzia", value: "Formularz, poczta, ERP, model AI, n8n" },
    { label: "Zasada", value: "Decyzję o uznaniu reklamacji podejmuje człowiek" },
  ],
  symptoms: {
    title: "Kiedy reklamacje warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, reklamacje kosztują czas i zaufanie klientów.",
    items: [
      "Reklamacje trafiają do różnych osób i różnymi kanałami.",
      "Nie ma wspólnego rejestru, a terminy odpowiedzi uciekają.",
      "Klient dzwoni z pytaniem o status, a nikt nie wie od razu, na jakim etapie jest sprawa.",
      "Reklamacje do dostawców przygotowuje się ręcznie i często za późno.",
      "Korekty faktur powstają z opóźnieniem.",
      "Nie wiadomo, które produkty i dostawcy generują najwięcej reklamacji.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja reklamacji",
    paragraphs: [
      "Klient zgłasza reklamację lub zwrot przez formularz albo mailem. Zgłoszenia mailowe AI porządkuje w ten sam sposób co formularz: rozpoznaje klienta, numer zamówienia lub faktury, produkty i opis problemu. Zgłoszenie trafia do rejestru, powiązane z zamówieniem i dokumentami z ERP, a klient dostaje potwierdzenie z numerem i terminem odpowiedzi.",
      "Osoba prowadząca reklamację widzi komplet informacji: historię zamówienia, dokumenty, zdjęcia od klienta, wcześniejsze reklamacje tego produktu. Decyzję o uznaniu podejmuje człowiek. Po decyzji system przygotowuje odpowiedź dla klienta, korektę faktury w ERP i, jeśli dotyczy, reklamację do dostawcy z dokumentami.",
      "Rejestr pilnuje terminów, a klient i dostawca dostają informacje o zmianach statusu. Raport pokazuje liczbę reklamacji, przyczyny, czas rozpatrzenia i produkty lub dostawców, którzy generują najwięcej problemów.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja reklamacji",
    lead: "Zakres dopasowujemy do procedury reklamacyjnej firmy.",
    items: [
      { title: "Przyjęcie zgłoszeń", body: "Formularz i maile w jednym rejestrze, z potwierdzeniem dla klienta." },
      { title: "Powiązanie z zamówieniem", body: "Zamówienie, faktura i dokumenty z ERP przy zgłoszeniu." },
      { title: "Zdjęcia i dokumenty", body: "Materiały od klienta i magazynu w jednym miejscu." },
      { title: "Terminy", body: "Termin odpowiedzi pilnowany automatycznie, z przypomnieniami." },
      { title: "Statusy dla klienta", body: "Informacja o przyjęciu, decyzji i realizacji." },
      { title: "Reklamacje do dostawców", body: "Zgłoszenie do dostawcy z dokumentami i śledzenie odpowiedzi." },
      { title: "Korekty i zwroty", body: "Korekta faktury i przyjęcie zwrotu w ERP po decyzji." },
      { title: "Raport przyczyn", body: "Reklamacje według produktów, dostawców i przyczyn." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zgłoszenia klienta do zamkniętej sprawy.",
    items: [
      {
        title: "Reklamacja klienta",
        trigger: "Klient wysyła maila ze zdjęciem uszkodzonego towaru",
        steps: ["AI porządkuje zgłoszenie i wiąże je z zamówieniem", "Potwierdzenie z numerem i terminem dla klienta", "Zgłoszenie u osoby prowadzącej z kompletem informacji"],
        result: "Reklamacja zaczyna się od kompletu danych, a klient wie, co dalej.",
      },
      {
        title: "Wada produktu od dostawcy",
        trigger: "Reklamacja uznana z powodu wady fabrycznej",
        steps: ["Korekta dla klienta w ERP", "Reklamacja do dostawcy z dokumentami", "Śledzenie odpowiedzi dostawcy i rozliczenia"],
        result: "Koszt wady trafia do dostawcy, a nie zostaje w hurtowni.",
      },
    ],
  },
  example: {
    title: "Reklamacje przed i po automatyzacji",
    lead: "Przykład hurtowni z kilkudziesięcioma reklamacjami miesięcznie.",
    rows: [
      { label: "Zgłoszenia", before: "U różnych osób, różnymi kanałami.", after: "W jednym rejestrze." },
      { label: "Terminy", before: "Pilnowane ręcznie.", after: "Z przypomnieniami." },
      { label: "Dostawcy", before: "Reklamacje zgłaszane za późno lub wcale.", after: "Zgłaszane po decyzji, z dokumentami." },
      { label: "Klient", before: "Dzwoni o status.", after: "Dostaje informacje na każdym etapie." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od opisania procedury, a potem ją automatyzujemy.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś przyjmujecie i rozpatrujecie reklamacje i zwroty.", fromYou: "Rozmowa z osobą od reklamacji i przykładowe sprawy." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy formularz, etapy, terminy, treści wiadomości i powiązanie z ERP.", fromYou: "Akceptacja procedury i treści." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy rejestr i przepływy, testujemy na bieżących reklamacjach.", fromYou: "Osoba prowadząca reklamacje w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy rejestr dla wszystkich klientów i rozwijamy raporty.", fromYou: "Informacja dla klientów o formularzu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rejestru, a reklamacje do dostawców dodać później.",
    items: [
      { name: "Rejestr reklamacji", description: "Dla firm, które chcą panować nad terminami.", includes: ["Formularz i maile w rejestrze", "Powiązanie z zamówieniem", "Terminy i przypomnienia", "Statusy dla klienta"] },
      { name: "Reklamacje i korekty", description: "Dla firm, które chcą szybciej zamykać sprawy.", includes: ["Wszystko z wariantu Rejestr reklamacji", "Korekty i zwroty w ERP", "Odpowiedzi dla klientów", "Raport przyczyn"] },
      { name: "Pełny obieg", description: "Dla firm, które chcą odzyskiwać koszty od dostawców.", includes: ["Wszystko z wariantu Reklamacje i korekty", "Reklamacje do dostawców", "Śledzenie odpowiedzi dostawców", "Ocena dostawców"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba reklamacji i zwrotów miesięcznie,",
      "złożoność procedury i liczba etapów,",
      "integracja z ERP,",
      "zakres reklamacji do dostawców,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Zgłoszenie zostanie źle powiązane z zamówieniem.", mitigation: "Powiązanie opiera się na numerze dokumentu i kliencie, a niepewne przypadki trafiają do sprawdzenia." },
      { risk: "Reklamacja zostanie automatycznie uznana.", mitigation: "Decyzję podejmuje człowiek. System przygotowuje informacje i dokumenty." },
      { risk: "Klient nie skorzysta z formularza.", mitigation: "Zgłoszenia mailowe trafiają do tego samego rejestru." },
      { risk: "Termin dostawcy minie.", mitigation: "Terminy zgłoszeń do dostawców są pilnowane tak samo jak terminy dla klientów." },
    ],
  },
  faq: [
    { question: "Czy klienci muszą korzystać z formularza?", answer: "Nie. Zgłoszenia mailowe AI porządkuje i dodaje do tego samego rejestru." },
    { question: "Czy system sam uzna reklamację?", answer: "Nie. Decyzję podejmuje człowiek, a system przygotowuje informacje, dokumenty i dalsze kroki." },
    { question: "Czy korekta faktury powstanie automatycznie?", answer: "Po decyzji system może przygotować korektę w ERP do zatwierdzenia, zależnie od możliwości systemu." },
    { question: "Czy obsłużycie zwroty bez reklamacji?", answer: "Tak. Zwroty handlowe mogą mieć osobną ścieżkę w tym samym rejestrze." },
    { question: "Czy to pomoże w rozmowach z dostawcami?", answer: "Tak. Raport reklamacji według dostawców i produktów daje konkretne dane do rozmów o jakości." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "ai-w-obsludze-dokumentow", "automatyzacja-raportow"],
  relatedProcessSlugs: ["obsluga-reklamacji"],
  relatedToolSlugs: ["n8n", "chatgpt", "airtable"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "airtable-w-praktyce-zastosowania", "jak-mierzyc-roi-automatyzacji"],
};
