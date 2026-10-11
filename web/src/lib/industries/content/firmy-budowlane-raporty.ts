import type { IndustryPageContent } from "../types";

export const firmyBudowlaneRaporty: IndustryPageContent = {
  industrySlug: "firmy-budowlane",
  subSlug: "raporty-z-budowy",
  name: "Raporty z budowy",
  excerpt: "Raport dzienny z telefonu kierownika: prace, ludzie, sprzęt, zdjęcia i problemy, w jednym rejestrze budowy, z podsumowaniem dla zarządu i inwestora.",
  metaTitle: "Raport dzienny z budowy na telefonie: automatyzacja",
  metaDescription:
    "Automatyzujemy raporty z budowy: formularz na telefonie z pracami, ludźmi, sprzętem, zdjęciami i problemami, rejestr budowy i podsumowanie dla inwestora.",
  primaryKeyword: "raport dzienny z budowy",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy budowlane: raporty z budowy",
    title: "Raport z budowy w kilka minut na telefonie, a nie wieczorem przy biurku",
    lead: "Kierownik budowy przez cały dzień rozwiązuje problemy, a wieczorem pisze raport, wysyła zdjęcia w komunikatorze i odpowiada na pytania biura. Raporty każdego kierownika wyglądają inaczej, zdjęcia giną w telefonach, a zarząd dowiaduje się o opóźnieniu, gdy jest już duże. Automatyzujemy raporty: kierownik wypełnia krótki formularz na telefonie, zdjęcia trafiają do rejestru budowy, a zarząd i inwestor dostają podsumowanie.",
    bullets: [
      "Formularz na telefonie: prace, ludzie, sprzęt, zdjęcia",
      "Problemy od razu do biura i zarządu",
      "Podsumowanie tygodnia dla inwestora",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Generalni wykonawcy i firmy wykonawcze prowadzące kilka budów" },
    { label: "Co automatyzujemy", value: "Raport dzienny, zdjęcia, problemy, podsumowania, raport dla inwestora" },
    { label: "Narzędzia", value: "Formularz mobilny, rejestr budów, dysk, model AI, n8n" },
    { label: "Zasada", value: "Raport zatwierdza kierownik budowy" },
  ],
  symptoms: {
    title: "Kiedy raporty warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, zarząd wie o budowach mniej, niż powinien.",
    items: [
      "Kierownicy piszą raporty wieczorem albo wcale.",
      "Każdy kierownik raportuje inaczej.",
      "Zdjęcia z budowy są w telefonach i komunikatorach.",
      "Zarząd dowiaduje się o problemach z opóźnieniem.",
      "Raport dla inwestora składa się ręcznie co tydzień.",
      "Przy sporze trudno odtworzyć, co działo się na budowie w danym dniu.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja raportów",
    paragraphs: [
      "Kierownik wypełnia na telefonie krótki formularz: wykonane prace, liczba pracowników własnych i podwykonawców, sprzęt, dostawy, pogoda, zdjęcia, problemy. Może też nagrać notatkę głosową, a AI zamieni ją na uporządkowany raport do sprawdzenia. Formularz działa bez zasięgu.",
      "Raport trafia do rejestru budowy razem ze zdjęciami, opisanymi datą i miejscem. Problemy oznaczone przez kierownika, np. brak materiału, kolizja z projektem, opóźnienie podwykonawcy, trafiają od razu do biura i zarządu.",
      "Na koniec tygodnia system przygotowuje podsumowanie dla zarządu i szkic raportu dla inwestora: postęp, zdjęcia, problemy i plan. Kierownik sprawdza szkic, zanim trafi do inwestora. Raporty wewnętrzne nie zastępują dziennika budowy, ale ułatwiają jego prowadzenie.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja raportów",
    lead: "Zakres dopasowujemy do rodzaju budów i oczekiwań inwestorów.",
    items: [
      { title: "Formularz dzienny", body: "Prace, ludzie, sprzęt, dostawy, pogoda i problemy." },
      { title: "Notatka głosowa", body: "Zamieniona na raport do sprawdzenia." },
      { title: "Zdjęcia", body: "Opisane datą i miejscem, w rejestrze budowy." },
      { title: "Problemy", body: "Od razu do biura i zarządu." },
      { title: "Rejestr budowy", body: "Raporty i zdjęcia z całej budowy w jednym miejscu." },
      { title: "Podsumowanie tygodnia", body: "Dla zarządu, z postępem i problemami." },
      { title: "Raport dla inwestora", body: "Szkic do sprawdzenia przez kierownika." },
      { title: "Wyszukiwanie", body: "Co działo się na budowie w danym dniu." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od dnia na budowie do raportu dla inwestora.",
    items: [
      {
        title: "Koniec dnia",
        trigger: "Kierownik kończy pracę",
        steps: ["Formularz lub notatka głosowa", "Raport i zdjęcia w rejestrze", "Problemy do biura"],
        result: "Raport w kilka minut, a biuro wie o problemach od razu.",
      },
      {
        title: "Koniec tygodnia",
        trigger: "Piątek po południu",
        steps: ["Podsumowanie z raportów dziennych", "Szkic raportu dla inwestora", "Sprawdzenie przez kierownika i wysyłka"],
        result: "Inwestor dostaje regularny raport bez dodatkowej pracy.",
      },
    ],
  },
  example: {
    title: "Raporty przed i po automatyzacji",
    lead: "Przykład firmy prowadzącej kilka budów kubaturowych.",
    rows: [
      { label: "Raport dzienny", before: "Wieczorem lub wcale.", after: "Kilka minut na telefonie." },
      { label: "Zdjęcia", before: "W telefonach.", after: "W rejestrze budowy." },
      { label: "Problemy", before: "Telefon do biura.", after: "Od razu do zarządu." },
      { label: "Inwestor", before: "Raport składany ręcznie.", after: "Szkic z raportów dziennych." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Formularz projektujemy z kierownikami budów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś raportują kierownicy i czego potrzebuje zarząd i inwestor.", fromYou: "Rozmowa z kierownikami i zarządem." },
      { title: "Projekt formularza", duration: "około tygodnia", body: "Projektujemy formularz i podsumowania, testujemy z kierownikiem.", fromYou: "Kierownik oceniający formularz." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Uruchamiamy raporty na jednej budowie.", fromYou: "Kierownik i zarząd w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy kolejne budowy i rozwijamy raporty.", fromYou: "Uwagi kierowników." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od raportu dziennego i zdjęć.",
    items: [
      { name: "Raport dzienny", description: "Dla firm, które chcą wiedzieć, co dzieje się na budowach.", includes: ["Formularz dzienny", "Zdjęcia", "Problemy do biura", "Rejestr budowy"] },
      { name: "Raporty z AI", description: "Dla kierowników, którzy wolą mówić niż pisać.", includes: ["Wszystko z wariantu Raport dzienny", "Notatka głosowa", "Podsumowanie tygodnia", "Wyszukiwanie"] },
      { name: "Raporty dla inwestora", description: "Dla firm z wymagającymi inwestorami.", includes: ["Wszystko z wariantu Raporty z AI", "Szkic raportu dla inwestora", "Zestawienia zdjęć", "Raport dla zarządu"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba budów i kierowników,",
      "zakres formularza,",
      "zakres wykorzystania AI,",
      "wymagania inwestorów co do raportów,",
      "integracja z innymi narzędziami firmy.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Kierownicy nie będą wypełniać formularza.", mitigation: "Formularz zajmuje kilka minut, a kierownik dostaje z niego podsumowania, które sam wykorzystuje." },
      { risk: "Raport z AI doda coś, czego kierownik nie powiedział.", mitigation: "Kierownik sprawdza i zatwierdza raport." },
      { risk: "Brak zasięgu na budowie.", mitigation: "Formularz działa bez internetu." },
      { risk: "Raport wewnętrzny pomylony z dziennikiem budowy.", mitigation: "Jasno oddzielamy raporty firmy od oficjalnej dokumentacji." },
    ],
  },
  faq: [
    { question: "Czy to zastępuje dziennik budowy?", answer: "Nie. Dziennik budowy prowadzi się według przepisów. Raporty wewnętrzne mogą ułatwić jego prowadzenie." },
    { question: "Czy kierownik może dyktować raport?", answer: "Tak. Notatka głosowa jest zamieniana na raport, który kierownik sprawdza." },
    { question: "Czy formularz działa bez internetu?", answer: "Tak, dane wysyłają się po odzyskaniu połączenia." },
    { question: "Czy inwestor dostanie raport automatycznie?", answer: "Szkic powstaje automatycznie, a wysyła go kierownik po sprawdzeniu." },
    { question: "Czy zdjęcia będą uporządkowane?", answer: "Tak, w rejestrze budowy, z datą, miejscem i powiązaniem z raportem." },
  ],
  relatedServiceSlugs: ["automatyzacja-raportow", "cyfryzacja-danych-i-dokumentow", "ai-w-obsludze-dokumentow"],
  relatedProcessSlugs: ["raporty-finansowe"],
  relatedToolSlugs: ["airtable", "google-workspace", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
