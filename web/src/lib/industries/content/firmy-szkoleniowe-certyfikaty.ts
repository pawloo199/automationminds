import type { IndustryPageContent } from "../types";

export const firmySzkolenioweCertyfikaty: IndustryPageContent = {
  industrySlug: "firmy-szkoleniowe",
  subSlug: "certyfikaty-i-ankiety",
  name: "Obecność, certyfikaty i ankiety",
  excerpt: "Lista obecności, certyfikaty generowane z szablonu i wysyłane uczestnikom, ankiety poszkoleniowe i ich podsumowanie dla trenera i opiekuna.",
  metaTitle: "Certyfikaty ukończenia szkolenia i ankiety: automatyzacja",
  metaDescription:
    "Automatyzujemy pracę po szkoleniu: lista obecności, certyfikaty ukończenia z szablonu, ankiety poszkoleniowe i podsumowanie ocen dla trenera.",
  primaryKeyword: "certyfikaty ukończenia szkolenia",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy szkoleniowe: certyfikaty i ankiety",
    title: "Certyfikaty i ankiety tego samego dnia, bez edytora tekstu",
    lead: "Po szkoleniu opiekun przepisuje listę obecności, tworzy certyfikaty w edytorze tekstu, wysyła je jeden po drugim, a potem link do ankiety. Wyniki ankiet trafiają do arkusza, którego nikt nie ma czasu przeanalizować. Automatyzujemy pracę po szkoleniu: lista obecności zamyka szkolenie, certyfikaty powstają z szablonu i trafiają do uczestników, a ankiety są podsumowywane dla trenera.",
    bullets: [
      "Lista obecności na telefonie lub z platformy online",
      "Certyfikaty z szablonu wysyłane automatycznie",
      "Ankiety i podsumowanie ocen dla trenera",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy szkoleniowe, organizatorzy kursów i konferencji" },
    { label: "Co automatyzujemy", value: "Obecność, certyfikaty, ankiety, podsumowania, archiwum" },
    { label: "Narzędzia", value: "Formularz, szablony, poczta, model AI, n8n" },
    { label: "Zasada", value: "Certyfikat tylko dla obecnych według zasad firmy" },
  ],
  symptoms: {
    title: "Kiedy pracę po szkoleniu warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, praca po szkoleniu trwa dłużej niż samo szkolenie.",
    items: [
      "Certyfikaty powstają w edytorze tekstu, jeden po drugim.",
      "Listy obecności są na papierze.",
      "Uczestnicy dopytują o certyfikaty po kilku dniach.",
      "Ankiety są zbierane, ale nikt ich nie analizuje.",
      "Trener nie dostaje informacji zwrotnej.",
      "Trudno odnaleźć certyfikat sprzed roku, gdy uczestnik prosi o duplikat.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja pracy po szkoleniu",
    paragraphs: [
      "Trener lub opiekun potwierdza obecność na telefonie, z listy uczestników. Przy szkoleniach online obecność może pochodzić z platformy. Zamknięcie listy uruchamia kolejne kroki.",
      "Uczestnicy, którzy spełnili warunki, np. obecność na wymaganej części szkolenia, dostają certyfikat wygenerowany z szablonu firmy, z danymi uczestnika, szkolenia, trenera i numerem. Certyfikat trafia do archiwum, więc duplikat można wysłać w kilka sekund.",
      "Wszyscy uczestnicy dostają ankietę. Po zebraniu odpowiedzi AI przygotowuje podsumowanie: średnie oceny, mocne strony, powtarzające się uwagi i cytaty, bez danych osobowych. Trener i opiekun dostają podsumowanie, a wyniki trafiają do raportu ocen szkoleń i trenerów.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja",
    lead: "Zakres dopasowujemy do rodzajów szkoleń.",
    items: [
      { title: "Lista obecności", body: "Na telefonie lub z platformy online." },
      { title: "Warunki certyfikatu", body: "Według zasad firmy." },
      { title: "Certyfikat z szablonu", body: "Dane uczestnika, szkolenia, trenera i numer." },
      { title: "Wysyłka", body: "Do uczestnika po zamknięciu listy." },
      { title: "Archiwum", body: "Certyfikaty i duplikaty w kilka sekund." },
      { title: "Ankieta", body: "Wysyłana po szkoleniu, z przypomnieniem." },
      { title: "Podsumowanie z AI", body: "Oceny, mocne strony i uwagi, bez danych osobowych." },
      { title: "Raport ocen", body: "Według szkoleń i trenerów." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zakończenia szkolenia do podsumowania.",
    items: [
      {
        title: "Koniec szkolenia",
        trigger: "Trener zamyka listę obecności",
        steps: ["Certyfikaty dla uczestników spełniających warunki", "Ankieta dla wszystkich uczestników", "Archiwum certyfikatów"],
        result: "Uczestnicy dostają certyfikaty tego samego dnia.",
      },
      {
        title: "Podsumowanie ankiet",
        trigger: "Kilka dni po szkoleniu",
        steps: ["Przypomnienie dla osób, które nie wypełniły", "Podsumowanie z AI", "Wiadomość dla trenera i opiekuna"],
        result: "Trener dostaje informację zwrotną.",
      },
    ],
  },
  example: {
    title: "Praca po szkoleniu przed i po automatyzacji",
    lead: "Przykład firmy prowadzącej kilkadziesiąt szkoleń miesięcznie.",
    rows: [
      { label: "Certyfikaty", before: "Edytor tekstu.", after: "Szablon i wysyłka." },
      { label: "Obecność", before: "Papier.", after: "Telefon lub platforma." },
      { label: "Ankiety", before: "Nieanalizowane.", after: "Podsumowanie dla trenera." },
      { label: "Duplikaty", before: "Szukanie w folderach.", after: "Archiwum." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od certyfikatów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Zbieramy szablony certyfikatów, ankiety i zasady.", fromYou: "Szablony i zasady." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy listę obecności, szablony i podsumowanie.", fromYou: "Akceptacja projektu." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Testujemy na kilku szkoleniach.", fromYou: "Trener i opiekun w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkie szkolenia.", fromYou: "Uwagi trenerów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od samych certyfikatów.",
    items: [
      { name: "Certyfikaty", description: "Dla firm, które chcą skończyć z edytorem tekstu.", includes: ["Lista obecności", "Certyfikat z szablonu", "Wysyłka", "Archiwum"] },
      { name: "Certyfikaty i ankiety", description: "Dla firm, które chcą zbierać opinie.", includes: ["Wszystko z wariantu Certyfikaty", "Ankieta", "Przypomnienia", "Zestawienie wyników"] },
      { name: "Ankiety z AI", description: "Dla firm, które chcą wyciągać wnioski.", includes: ["Wszystko z wariantu Certyfikaty i ankiety", "Podsumowanie z AI", "Raport ocen", "Wiadomość dla trenera"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba szkoleń i uczestników,",
      "liczba szablonów certyfikatów,",
      "integracja z platformą online,",
      "zakres wykorzystania AI,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Certyfikat dla osoby nieobecnej.", mitigation: "Certyfikaty powstają tylko z zamkniętej listy obecności." },
      { risk: "Błąd w danych na certyfikacie.", mitigation: "Dane pochodzą z zapisu uczestnika, a poprawiony certyfikat można wygenerować ponownie." },
      { risk: "Podsumowanie pominie ważną uwagę.", mitigation: "Podsumowanie zawiera cytaty, a pełne ankiety są dostępne." },
      { risk: "Dane uczestników w AI.", mitigation: "Do podsumowania trafiają odpowiedzi bez danych osobowych." },
    ],
  },
  faq: [
    { question: "Czy certyfikat może być w naszym wzorze?", answer: "Tak. Certyfikat powstaje z waszego szablonu." },
    { question: "Czy certyfikaty mają numery?", answer: "Tak, numeracja według zasad firmy, z archiwum." },
    { question: "Czy obecność na szkoleniu online może być automatyczna?", answer: "Tak, jeśli platforma udostępnia dane o obecności." },
    { question: "Czy AI przeczyta ankiety?", answer: "Przygotuje podsumowanie z ocenami, mocnymi stronami i uwagami, bez danych osobowych." },
    { question: "Czy uczestnik może pobrać duplikat?", answer: "Tak, przez opiekuna lub link, z archiwum." },
  ],
  relatedServiceSlugs: ["cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow", "ai-w-obsludze-dokumentow"],
  relatedProcessSlugs: ["raporty-finansowe"],
  relatedToolSlugs: ["google-workspace", "n8n", "chatgpt"],
  relatedArticleSlugs: ["ankieta-poszkoleniowa", "co-zautomatyzowac-w-firmie-szkoleniowej", "ai-w-szkoleniach"],
};
