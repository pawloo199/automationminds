import type { IndustryPageContent } from "../types";

export const firmyBudowlane: IndustryPageContent = {
  industrySlug: "firmy-budowlane",
  name: "Firmy budowlane",
  excerpt: "Automatyzacja pracy firm budowlanych i wykonawczych: oferty i kosztorysy, raporty z budowy, podwykonawcy, zamówienia materiałów, odbiory i kontrola kosztów.",
  metaTitle: "Automatyzacja firmy budowlanej i wykonawczej",
  metaDescription:
    "Automatyzujemy pracę firm budowlanych: oferty i kosztorysy, raporty z budowy, dokumenty podwykonawców, zamówienia materiałów, odbiory i kontrola kosztów.",
  primaryKeyword: "automatyzacja firmy budowlanej",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Branża: firmy budowlane",
    title: "Automatyzacja firmy budowlanej: kierownik na budowie, nie w papierach",
    lead: "Na budowie liczy się terminowość i koszty, a jedno i drugie zależy od informacji, które docierają na czas. Tymczasem kierownicy budów wieczorami piszą raporty, biuro zbiera dokumenty od podwykonawców, a o przekroczeniu budżetu firma dowiaduje się po zakończeniu etapu. Pomagamy firmom budowlanym zautomatyzować tę pracę na narzędziach, których już używają, z AI tam, gdzie pomaga.",
    bullets: [
      "Raporty z budowy z telefonu, a nie wieczorem przy biurku",
      "Dokumenty podwykonawców i odbiory pod kontrolą",
      "Koszty budowy porównane z budżetem na bieżąco",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Generalni wykonawcy, firmy wykonawcze i remontowe, deweloperzy z własnym wykonawstwem" },
    { label: "Co automatyzujemy", value: "Oferty, raporty, podwykonawcy, materiały, odbiory, koszty" },
    { label: "Jak", value: "Obok programów, których używacie, z AI tam, gdzie ma sens" },
    { label: "Zasada", value: "System przygotowuje, kierownik i biuro decydują" },
  ],
  symptoms: {
    title: "Po czym poznać, że firma budowlana potrzebuje automatyzacji",
    lead: "Jeśli rozpoznajecie u siebie kilka z tych sytuacji, część pracy biura i kierowników da się przenieść na system.",
    items: [
      "Kierownicy budów piszą raporty wieczorem, a zdjęcia są w ich telefonach.",
      "Dokumenty od podwykonawców przychodzą mailem, w różnych formatach i z opóźnieniem.",
      "Zamówienia materiałów składa się telefonicznie, bez wspólnego rejestru.",
      "Usterki z odbiorów są na listach w arkuszach, a ich usunięcie trudno śledzić.",
      "O przekroczeniu budżetu firma dowiaduje się po zakończeniu etapu.",
      "Oferta na nowe zlecenie powstaje tygodniami, bo kosztorys składa się od zera.",
    ],
  },
  intro: {
    title: "Automatyzacja w budownictwie: co zmienia, a czego nie zmienia",
    paragraphs: [
      "Firma budowlana łączy pracę w terenie z dużą ilością dokumentów. Na budowie powstają raporty, zdjęcia, protokoły i zamówienia. W biurze oferty, umowy z podwykonawcami, faktury i rozliczenia. Informacje przechodzą między budową a biurem przez telefony, maile i komunikatory, a część z nich ginie po drodze. To właśnie przekazywanie i przepisywanie informacji automatyzujemy.",
      "Automatyzacja nie zastępuje kierownika budowy ani kosztorysanta. Decyzje techniczne, odbiory, rozmowy z inwestorem i podwykonawcami zostają przy ludziach. System zbiera raporty i zdjęcia z budowy, pilnuje dokumentów podwykonawców, prowadzi rejestr zamówień i usterek, porównuje koszty z budżetem. AI pomaga przy porządkowaniu notatek, odczycie faktur i dokumentów oraz przygotowaniu szkiców raportów dla inwestora.",
      "Nie wymieniamy programów do kosztorysowania ani systemów księgowych. Budujemy obok nich to, czego brakuje: formularze na telefonie, rejestr dokumentów, połączenia z pocztą i programem do faktur, raporty kosztów. Oficjalnej dokumentacji budowy, np. dziennika budowy, nie zastępujemy, tylko pomagamy przygotować dla niej materiał. Połączenia budujemy w n8n, które może działać na serwerze w UE lub w infrastrukturze firmy.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w firmach budowlanych",
    lead: "Od zapytania inwestora do rozliczenia budowy. Zaczynamy od obszaru, który zabiera najwięcej czasu.",
    items: [
      { title: "Oferty i kosztorysy", body: "Zapytania, przedmiary i oferty z szablonów, z kontrolą terminów przetargów." },
      { title: "Raporty z budowy", body: "Raport dzienny z telefonu: prace, ludzie, sprzęt, zdjęcia, problemy." },
      { title: "Podwykonawcy", body: "Umowy, dokumenty, ubezpieczenia, protokoły i faktury w jednym rejestrze." },
      { title: "Zamówienia materiałów", body: "Zapotrzebowanie z budowy, akceptacja, zamówienie i dostawa." },
      { title: "Odbiory i usterki", body: "Protokoły odbioru, lista usterek, terminy usunięcia i gwarancje." },
      { title: "Kontrola kosztów", body: "Faktury przypisane do budów i etapów, porównane z budżetem." },
      { title: "Raporty dla inwestora", body: "Postęp, zdjęcia i problemy w regularnym raporcie." },
      { title: "Wiedza firmy", body: "Asystent przeszukujący specyfikacje, normy firmowe i dokumenty budów." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w firmie budowlanej",
    lead: "Typowe przepływy, które budujemy w firmach budowlanych. Decyzje zostają przy kierownikach i biurze.",
    items: [
      {
        title: "Raport dzienny",
        trigger: "Kierownik kończy dzień na budowie",
        steps: ["Formularz na telefonie: prace, ludzie, sprzęt, zdjęcia, problemy", "Raport w rejestrze budowy, problemy do biura", "Tygodniowe podsumowanie dla inwestora do sprawdzenia"],
        result: "Biuro wie, co dzieje się na budowie, bez telefonów.",
      },
      {
        title: "Faktura podwykonawcy",
        trigger: "Podwykonawca przysyła fakturę",
        steps: ["Odczyt faktury i przypisanie do budowy i umowy", "Sprawdzenie protokołu odbioru i wymaganych dokumentów", "Faktura do akceptacji kierownika i porównanie z budżetem"],
        result: "Faktura bez protokołu nie przejdzie, a koszty są widoczne od razu.",
      },
      {
        title: "Zamówienie materiału",
        trigger: "Kierownik zgłasza zapotrzebowanie",
        steps: ["Zapotrzebowanie z budowy w rejestrze", "Akceptacja i zamówienie u dostawcy", "Potwierdzenie dostawy i przypisanie kosztu do budowy"],
        result: "Zamówienia nie giną w telefonach, a koszt materiałów jest znany na bieżąco.",
      },
    ],
  },
  security: {
    title: "Dokumenty i dane budów",
    lead: "Budowy to umowy, dokumenty podwykonawców, dane pracowników i inwestorów. Wdrożenia projektujemy tak, żeby były pod kontrolą.",
    items: [
      { title: "Dane w UE lub u was", body: "Automatyzacje mogą działać na serwerze w UE albo w infrastrukturze firmy." },
      { title: "AI bez trenowania na danych", body: "Korzystamy z modeli w planach, w których dane nie służą do trenowania, i przesyłamy tylko to, co potrzebne." },
      { title: "Uprawnienia", body: "Kierownik widzi swoje budowy, podwykonawca swoje dokumenty, zarząd całość." },
      { title: "Dane pracowników", body: "Dane osobowe pracowników i podwykonawców tylko tam, gdzie są potrzebne." },
      { title: "Ślad działań", body: "Każda automatyczna operacja jest zapisana, więc wiadomo, co i kiedy zrobił system." },
      { title: "Ludzie decydują", body: "Odbiory, akceptacje faktur i decyzje techniczne podejmują ludzie." },
    ],
  },
  example: {
    title: "Firma budowlana przed i po automatyzacji",
    lead: "Przykład firmy wykonawczej prowadzącej kilka budów jednocześnie.",
    rows: [
      { label: "Raporty", before: "Wieczorem, w różnych formach.", after: "Z telefonu, w jednym rejestrze." },
      { label: "Podwykonawcy", before: "Dokumenty w mailach.", after: "Rejestr z brakami i terminami." },
      { label: "Materiały", before: "Zamówienia telefoniczne.", after: "Rejestr zapotrzebowań i dostaw." },
      { label: "Usterki", before: "Arkusze.", after: "Lista z terminami i statusami." },
      { label: "Koszty", before: "Po zakończeniu etapu.", after: "Na bieżąco, względem budżetu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie w firmie budowlanej",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Pracujemy tak, żeby nie przerywać prac na budowach.",
    phases: [
      { title: "Przegląd firmy", duration: "kilka dni", body: "Rozmawiamy z zarządem, kierownikiem budowy i biurem, przeglądamy dokumenty i narzędzia, wybieramy obszar z największą stratą czasu.", fromYou: "Godzina rozmowy i informacja o używanych narzędziach." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy przepływ, formularze i zasady: co robi system, co robi AI, a co zawsze robi człowiek.", fromYou: "Akceptacja projektu i przykładowe dokumenty." },
      { title: "Budowa i testy", duration: "zwykle 2–4 tygodnie", body: "Budujemy rozwiązanie i testujemy je na jednej budowie.", fromYou: "Kierownik budowy i osoba z biura oceniający testy." },
      { title: "Start i opieka", duration: "stale", body: "Uruchamiamy rozwiązanie na kolejnych budowach, szkolimy i pilnujemy działania.", fromYou: "Uwagi zespołu w pierwszych tygodniach." },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Można zacząć od jednego procesu i rozwijać automatyzację krok po kroku.",
    items: [
      { name: "Jeden proces", description: "Dla firm, które chcą sprawdzić automatyzację na jednym obszarze.", includes: ["Przegląd i wybór procesu", "Automatyzacja jednego obszaru, np. raportów z budowy", "Połączenie z narzędziami firmy", "Szkolenie zespołu"] },
      { name: "Cała firma", description: "Dla firm, które chcą uporządkować przepływ informacji między budową a biurem.", includes: ["Kilka połączonych procesów: raporty, podwykonawcy, materiały, odbiory, koszty", "Raporty dla inwestora", "Integracja z programem do faktur", "Raporty dla zarządu", "Opieka po wdrożeniu"] },
      { name: "Agenci w abonamencie", description: "Dla firm, które nie chcą zajmować się technologią.", includes: ["Agenci AI do konkretnych zadań, np. odczytu faktur", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport", "Stała miesięczna opłata"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Każde wdrożenie wyceniamy po przeglądzie, przed startem. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba procesów i systemów, które łączymy,",
      "liczba budów, kierowników i podwykonawców,",
      "możliwości integracji programów, z których korzystacie,",
      "zakres wykorzystania AI,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy w firmach budowlanych",
    items: [
      { risk: "Kierownicy nie będą wypełniać raportów.", mitigation: "Formularz projektujemy z kierownikami, tak żeby zajmował kilka minut, a dane wracały do nich w użytecznej formie." },
      { risk: "Brak zasięgu na budowie.", mitigation: "Formularze działają bez internetu i wysyłają dane po odzyskaniu połączenia." },
      { risk: "Faktura przypisana do złej budowy.", mitigation: "Przypisanie niepewne trafia do sprawdzenia, a fakturę akceptuje kierownik." },
      { risk: "Raport wewnętrzny pomylony z dokumentacją budowy.", mitigation: "Jasno oddzielamy raporty firmy od oficjalnej dokumentacji, za którą odpowiada kierownik budowy." },
    ],
  },
  faq: [
    { question: "Czy automatyzacja zastąpi dziennik budowy?", answer: "Nie. Dziennik budowy to dokument prowadzony według przepisów. Raporty wewnętrzne mogą być materiałem pomocniczym dla kierownika." },
    { question: "Czy łączycie się z programami do kosztorysowania?", answer: "Tam, gdzie program pozwala na eksport lub import danych. Kosztorysy przygotowują kosztorysanci w ich narzędziach, a my automatyzujemy pracę wokół nich." },
    { question: "Czy kierownicy muszą mieć smartfony?", answer: "Tak, do raportów i zdjęć. Wystarczy przeglądarka, bez instalowania aplikacji." },
    { question: "Czy podwykonawcy muszą korzystać z systemu?", answer: "Wystarczy, że przesyłają dokumenty mailem lub przez prosty formularz. Nie potrzebują konta." },
    { question: "Od czego najlepiej zacząć?", answer: "Najczęściej od raportów z budowy albo dokumentów i faktur podwykonawców. Wskażemy najlepszy obszar na bezpłatnej konsultacji." },
    { question: "Ile trwa wdrożenie?", answer: "Pierwszy proces zwykle kilka tygodni, łącznie z testem na jednej budowie." },
    { question: "Czy pracujecie z firmami remontowymi?", answer: "Tak. U mniejszych firm remontowych częściej zaczynamy od ofert i komunikacji z klientem, a u wykonawców od budów i podwykonawców." },
  ],
  relatedServiceSlugs: ["integracje-systemow", "ai-w-obsludze-dokumentow", "automatyzacja-raportow", "cyfryzacja-danych-i-dokumentow"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych", "obieg-umow", "ofertowanie", "raporty-finansowe"],
  relatedToolSlugs: ["n8n", "airtable", "microsoft-365", "ksef"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-firmie-budowlanej", "kontrola-kosztow-budowy", "cyfryzacja-firmy-budowlanej"],
};
