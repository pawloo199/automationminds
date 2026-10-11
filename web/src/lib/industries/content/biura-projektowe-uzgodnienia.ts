import type { IndustryPageContent } from "../types";

export const biuraProjektoweUzgodnienia: IndustryPageContent = {
  industrySlug: "biura-projektowe",
  subSlug: "uzgodnienia",
  name: "Uzgodnienia i wnioski",
  excerpt: "Rejestr wniosków do urzędów i gestorów sieci, terminy odpowiedzi, przypomnienia, szkice pism i statusy uzgodnień w harmonogramie projektu.",
  metaTitle: "Uzgodnienia projektowe: rejestr wniosków i terminów",
  metaDescription:
    "Automatyzujemy uzgodnienia w biurze projektowym: rejestr wniosków do urzędów i gestorów sieci, terminy odpowiedzi, przypomnienia, szkice pism i statusy.",
  primaryKeyword: "uzgodnienia projektowe",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Biura projektowe: uzgodnienia",
    title: "Każdy wniosek i uzgodnienie z terminem i statusem, bez szukania w mailach",
    lead: "Warunki przyłączenia, uzgodnienia z gestorami sieci, opinie, decyzje, wnioski o pozwolenia: w jednym projekcie może być ich kilkanaście, każde z innym terminem i inną drogą. Gdy status sprawdza się w mailach i segregatorach, opóźnienie jednego uzgodnienia wychodzi, gdy już blokuje projekt. Automatyzujemy uzgodnienia: każdy wniosek jest w rejestrze z terminem, a przypomnienia i szkice pism powstają automatycznie.",
    bullets: [
      "Rejestr wniosków i uzgodnień z terminami",
      "Przypomnienia i szkice pism ponaglających",
      "Statusy uzgodnień w harmonogramie projektu",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura projektowe i pracownie prowadzące procedury dla inwestorów" },
    { label: "Co automatyzujemy", value: "Wnioski, terminy, przypomnienia, pisma, odpowiedzi, statusy" },
    { label: "Narzędzia", value: "Rejestr, dysk, poczta, model AI, n8n" },
    { label: "Zasada", value: "Treść wniosków i odpowiedzialność należą do projektanta" },
  ],
  symptoms: {
    title: "Kiedy uzgodnienia warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, uzgodnienia blokują projekty bez ostrzeżenia.",
    items: [
      "Status uzgodnień sprawdza się w mailach i segregatorach.",
      "Terminy odpowiedzi urzędów i gestorów nikt nie pilnuje.",
      "Pisma ponaglające pisze się od zera.",
      "Odpowiedzi z warunkami trzeba czytać w całości, żeby znaleźć wymagania.",
      "Ważność warunków i uzgodnień wygasa niezauważona.",
      "Inwestor pyta o postęp procedur.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja uzgodnień",
    paragraphs: [
      "Każdy wniosek w projekcie trafia do rejestru: adresat, rodzaj, data złożenia, sposób złożenia, oczekiwany termin odpowiedzi, osoba odpowiedzialna. Szablon dla rodzaju projektu podpowiada typowe uzgodnienia, które trzeba uzyskać, a kierownik projektu dopasowuje listę.",
      "Przed upływem terminu odpowiedzi projektant dostaje przypomnienie, a po jego upływie szkic pisma ponaglającego do sprawdzenia. Gdy odpowiedź przychodzi, trafia do rejestru, a AI przygotowuje streszczenie: warunki, wymagania, terminy ważności, jako materiał roboczy dla projektanta.",
      "Terminy ważności warunków i uzgodnień trafiają do kalendarza z przypomnieniem. Status uzgodnień jest widoczny w harmonogramie projektu, więc kierownik widzi, które mogą opóźnić etap, a inwestor dostaje informację o postępie procedur.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja uzgodnień",
    lead: "Zakres dopasowujemy do rodzajów projektów i procedur.",
    items: [
      { title: "Rejestr wniosków", body: "Adresat, rodzaj, data, termin, osoba odpowiedzialna." },
      { title: "Typowe uzgodnienia", body: "Lista według rodzaju projektu, do dopasowania." },
      { title: "Przypomnienia", body: "Przed terminem odpowiedzi i po nim." },
      { title: "Pisma ponaglające", body: "Szkic do sprawdzenia przez projektanta." },
      { title: "Odpowiedzi", body: "W rejestrze, przy wniosku." },
      { title: "Streszczenia z AI", body: "Warunki, wymagania i terminy jako materiał roboczy." },
      { title: "Terminy ważności", body: "W kalendarzu z przypomnieniem." },
      { title: "Status w harmonogramie", body: "Uzgodnienia, które mogą opóźnić etap." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od wniosku do uzgodnienia.",
    items: [
      {
        title: "Wniosek do gestora",
        trigger: "Projektant składa wniosek o warunki przyłączenia",
        steps: ["Wniosek w rejestrze z terminem odpowiedzi", "Przypomnienie przed terminem", "Szkic pisma ponaglającego po terminie"],
        result: "Brak odpowiedzi nie zostaje niezauważony.",
      },
      {
        title: "Odpowiedź z warunkami",
        trigger: "Przychodzi odpowiedź gestora",
        steps: ["Dokument w rejestrze przy wniosku", "Streszczenie warunków i terminu ważności", "Termin ważności w kalendarzu"],
        result: "Projektant od razu widzi wymagania i termin.",
      },
    ],
  },
  example: {
    title: "Uzgodnienia przed i po automatyzacji",
    lead: "Przykład biura projektującego sieci i budynki dla inwestorów publicznych i prywatnych.",
    rows: [
      { label: "Status", before: "Maile i segregatory.", after: "Rejestr." },
      { label: "Terminy", before: "Nikt nie pilnuje.", after: "Przypomnienia." },
      { label: "Ponaglenia", before: "Od zera.", after: "Szkic do sprawdzenia." },
      { label: "Ważność", before: "Wygasa niezauważona.", after: "Kalendarz z przypomnieniem." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym biurze.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od rejestru wniosków w trwających projektach.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Spisujemy typowe uzgodnienia i sposób ich prowadzenia.", fromYou: "Rozmowa z projektantami." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy rejestr, szablony list i treści pism.", fromYou: "Akceptacja szablonów." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Uruchamiamy rejestr na kilku projektach.", fromYou: "Projektant w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkie projekty i rozwijamy szablony.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od rejestru i przypomnień.",
    items: [
      { name: "Rejestr", description: "Dla biur, które chcą wiedzieć, co jest w toku.", includes: ["Rejestr wniosków", "Typowe uzgodnienia", "Przypomnienia", "Status w harmonogramie"] },
      { name: "Rejestr i pisma", description: "Dla biur z wieloma procedurami.", includes: ["Wszystko z wariantu Rejestr", "Pisma ponaglające", "Odpowiedzi w rejestrze", "Terminy ważności"] },
      { name: "Uzgodnienia z AI", description: "Dla biur, które chcą szybciej pracować z odpowiedziami.", includes: ["Wszystko z wariantu Rejestr i pisma", "Streszczenia z AI", "Informacja dla inwestora", "Raport uzgodnień"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba projektów i procedur,",
      "rodzaje uzgodnień,",
      "szablony pism,",
      "zakres wykorzystania AI,",
      "integracja z harmonogramem i rejestrem dokumentacji.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Streszczenie pominie warunek.", mitigation: "Streszczenie to materiał roboczy. Projektant czyta odpowiedź przy decyzjach projektowych." },
      { risk: "Błędny termin odpowiedzi w rejestrze.", mitigation: "Termin wpisuje projektant, a system tylko go pilnuje." },
      { risk: "Pismo z AI z błędem formalnym.", mitigation: "Pismo sprawdza i podpisuje projektant." },
      { risk: "Procedura zmieni się w trakcie.", mitigation: "Szablony aktualizuje biuro, a lista w projekcie jest edytowalna." },
    ],
  },
  faq: [
    { question: "Czy złożycie wnioski za nas?", answer: "Nie. Prowadzimy rejestr, przypomnienia i szkice pism. Wnioski składa i odpowiada za nie biuro." },
    { question: "Czy system zna terminy urzędowe?", answer: "Termin odpowiedzi wpisuje projektant przy wniosku, a system go pilnuje." },
    { question: "Czy AI przeczyta odpowiedź gestora?", answer: "Przygotuje streszczenie warunków i terminów jako materiał roboczy. Projektant czyta dokument." },
    { question: "Czy inwestor zobaczy postęp procedur?", answer: "Tak, w formie informacji przygotowanej przez kierownika projektu." },
    { question: "Czy obsłużycie procedury elektroniczne?", answer: "Rejestr obejmuje wnioski składane elektronicznie i papierowo, ze sposobem złożenia." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-firm-uslugowych"],
  relatedProcessSlugs: ["obieg-umow"],
  relatedToolSlugs: ["airtable", "n8n", "claude"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
