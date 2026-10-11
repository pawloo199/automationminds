import type { IndustryPageContent } from "../types";

export const firmySzkolenioweAi: IndustryPageContent = {
  industrySlug: "firmy-szkoleniowe",
  subSlug: "ai",
  name: "AI w firmie szkoleniowej",
  excerpt: "AI w firmie szkoleniowej: oferty dla firm, opisy szkoleń, podsumowania ankiet, materiały i quizy, odpowiedzi dla uczestników, z kontrolą jakości i danych.",
  metaTitle: "AI w firmie szkoleniowej: oferty, ankiety, materiały",
  metaDescription:
    "Wdrażamy AI w firmach szkoleniowych: oferty dla firm, opisy szkoleń, podsumowania ankiet, materiały i quizy, odpowiedzi dla uczestników i zasady.",
  primaryKeyword: "AI w firmie szkoleniowej",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Sztuczna inteligencja w szkoleniach",
    title: "AI w firmie szkoleniowej: szybsze oferty i materiały, lepsze wnioski z ankiet",
    lead: "Firma szkoleniowa pracuje na tekstach: programy, opisy szkoleń, oferty dla firm, materiały, ćwiczenia, ankiety, wiadomości do uczestników. To rodzaj pracy, w którym AI daje dziś wyraźny efekt. Pomagamy firmom szkoleniowym wdrożyć AI tam, gdzie oszczędza czas, z kontrolą nad jakością treści i danymi uczestników.",
    bullets: [
      "Szkice ofert dla firm na podstawie analizy potrzeb",
      "Podsumowania ankiet z wnioskami dla trenerów",
      "Materiały, ćwiczenia i quizy do dopracowania",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy szkoleniowe, organizatorzy kursów, szkoły językowe" },
    { label: "Co robimy", value: "AI w ofertach, materiałach, ankietach i obsłudze uczestników, zasady" },
    { label: "Bezpieczeństwo", value: "Dane w UE, bez trenowania modeli na danych, uprawnienia" },
    { label: "Zasada", value: "AI przygotowuje, trener i opiekun zatwierdzają" },
  ],
  symptoms: {
    title: "Kiedy firma szkoleniowa powinna zająć się AI",
    lead: "Jeśli rozpoznajecie u siebie któreś z tych sytuacji, AI może przejąć sporą część pracy z tekstem.",
    items: [
      "Oferty szkoleń zamkniętych powstają kilka dni.",
      "Opisy szkoleń na stronie są nierówne i nieaktualne.",
      "Ankiety są zbierane, ale nikt nie ma czasu ich przeanalizować.",
      "Trenerzy przygotowują ćwiczenia i quizy od zera.",
      "Uczestnicy zadają te same pytania o organizację.",
      "Zespół korzysta z czatów AI na prywatnych kontach.",
    ],
  },
  intro: {
    title: "AI w firmie szkoleniowej na trzech poziomach",
    paragraphs: [
      "Pierwszy poziom to narzędzia AI dla zespołu i trenerów: czat z modelem językowym na koncie firmowym, z zasadami i szkoleniem. Zespół szybciej pisze opisy szkoleń i wiadomości, trenerzy przygotowują przykłady i ćwiczenia, a firma wie, gdzie trafiają dane.",
      "Drugi poziom to AI w procesach. Model przygotowuje szkic oferty szkolenia zamkniętego na podstawie analizy potrzeb klienta i programów firmy. Podsumowuje ankiety poszkoleniowe, wskazując mocne strony i uwagi powtarzające się w wielu odpowiedziach. Przygotowuje szkice quizów i ćwiczeń z materiałów trenera.",
      "Trzeci poziom to asystenci i agenci AI. Asystent odpowiada uczestnikom na pytania organizacyjne na podstawie informacji o szkoleniu. Asystent wiedzy dla zespołu przeszukuje programy, materiały i oferty firmy. Program szkolenia, prowadzenie zajęć i decyzje o ofercie zawsze należą do ludzi.",
    ],
  },
  scope: {
    title: "Jak AI pomaga w firmach szkoleniowych",
    lead: "Zastosowania, które wdrażamy najczęściej. Każde działa jako wsparcie, a decyzje należą do zespołu.",
    items: [
      { title: "Oferty dla firm", body: "Szkic oferty z analizy potrzeb, programów i cennika." },
      { title: "Opisy szkoleń", body: "Opisy na stronę i do katalogu w stylu firmy." },
      { title: "Podsumowania ankiet", body: "Mocne strony, uwagi i wnioski dla trenera." },
      { title: "Materiały i ćwiczenia", body: "Szkice ćwiczeń, przykładów i studiów przypadku." },
      { title: "Quizy i testy", body: "Pytania sprawdzające z materiałów, do weryfikacji przez trenera." },
      { title: "Odpowiedzi dla uczestników", body: "Pytania organizacyjne z informacji o szkoleniu." },
      { title: "Asystent wiedzy", body: "Programy, materiały i oferty firmy w jednym miejscu." },
      { title: "Zasady i szkolenia", body: "Polityka korzystania z AI i warsztaty dla zespołu i trenerów." },
    ],
  },
  security: {
    title: "AI a dane uczestników i materiały",
    lead: "Szkolenia to dane uczestników i materiały, które są własnością firmy lub trenerów. Wdrażamy AI tak, żeby były pod kontrolą.",
    items: [
      { title: "Konta firmowe zamiast prywatnych", body: "Zespół i trenerzy korzystają z AI na kontach firmy, w planach, w których dane nie służą do trenowania modeli." },
      { title: "Minimum danych", body: "Podsumowania ankiet bez danych osobowych uczestników." },
      { title: "Materiały firmy", body: "Programy i materiały przetwarzane tylko w ustalonych narzędziach." },
      { title: "Dane w UE lub u was", body: "Przepływy z AI mogą działać na serwerze w UE albo w infrastrukturze firmy." },
      { title: "Jasne zasady", body: "Pisemne zasady korzystania z AI: co wolno przesyłać, jak sprawdzać wyniki, kto odpowiada za treść." },
      { title: "Weryfikacja przez człowieka", body: "Oferty, materiały i quizy sprawdza trener lub opiekun." },
    ],
  },
  comparison: {
    title: "Prywatne konta AI czy AI wdrożone w firmie",
    lead: "Różnica nie polega na jakości modelu, tylko na kontroli nad danymi i wpływie na procesy.",
    columns: ["AI wdrożone w firmie", "Prywatne konta zespołu"],
    rows: [
      { label: "Gdzie trafiają dane", values: ["Ustalone miejsce, umowa z dostawcą", "Zależy od ustawień każdego konta"] },
      { label: "Trenowanie modeli na danych", values: ["Wyłączone w planach firmowych", "Często włączone domyślnie w planach prywatnych"] },
      { label: "Oferty dla firm", values: ["Z programów i cennika firmy", "Ogólne, wpisywane ręcznie"] },
      { label: "Ankiety", values: ["Podsumowane automatycznie po szkoleniu", "Wklejane do czatu albo nieanalizowane"] },
      { label: "Wpływ na procesy", values: ["AI w ofertach, ankietach, materiałach", "Tylko praca w oknie czatu"] },
    ],
    note: "Porównanie jest uproszczone. Ustawienia narzędzi AI zmieniają się, dlatego weryfikujemy je przy każdym wdrożeniu.",
  },
  example: {
    title: "Praca z AI przed i po wdrożeniu",
    lead: "Przykład firmy szkoleniowej z kilkunastoma trenerami współpracującymi.",
    rows: [
      { label: "Oferty", before: "Kilka dni.", after: "Szkic w dniu zapytania." },
      { label: "Ankiety", before: "Nieanalizowane.", after: "Podsumowanie dla trenera." },
      { label: "Ćwiczenia", before: "Od zera.", after: "Szkic do dopracowania." },
      { label: "Pytania uczestników", before: "Do opiekuna.", after: "Asystent z informacjami o szkoleniu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak wdrażamy AI w firmie szkoleniowej",
    lead: "Zaczynamy od zasad i bezpiecznych narzędzi, a potem dokładamy AI do ofert, ankiet i materiałów.",
    phases: [
      { title: "Przegląd i zasady", duration: "kilka dni", body: "Sprawdzamy, jak zespół i trenerzy korzystają dziś z AI, i przygotowujemy zasady.", fromYou: "Rozmowa z właścicielem i opiekunami." },
      { title: "Narzędzia i szkolenie", duration: "1–2 tygodnie", body: "Konfigurujemy konta firmowe i prowadzimy warsztat na prawdziwych zadaniach.", fromYou: "Udział zespołu i trenerów." },
      { title: "AI w procesach", duration: "zwykle 3–6 tygodni", body: "Budujemy wybrane zastosowania: oferty, podsumowania ankiet, materiały. Testujemy na kilku szkoleniach.", fromYou: "Programy, materiały i osoby oceniające wyniki." },
      { title: "Opieka i rozwój", duration: "stale", body: "Pilnujemy jakości i kosztów, dokładamy kolejne zastosowania.", fromYou: "Uwagi zespołu i trenerów." },
    ],
  },
  variants: {
    title: "Warianty wdrożenia AI",
    lead: "Wiele firm zaczyna od bezpiecznego startu i podsumowań ankiet.",
    items: [
      { name: "Bezpieczny start", description: "Dla firm, które chcą uporządkować korzystanie z AI.", includes: ["Zasady korzystania z AI", "Konfiguracja kont firmowych", "Warsztat dla zespołu i trenerów", "Biblioteka sprawdzonych poleceń"] },
      { name: "AI w ofertach i ankietach", description: "Dla firm z dużą liczbą szkoleń zamkniętych.", includes: ["Wszystko z wariantu Bezpieczny start", "Szkice ofert", "Podsumowania ankiet", "Opisy szkoleń", "Przepływy działające na serwerze w UE"] },
      { name: "Asystenci", description: "Dla firm, które chcą odciążyć opiekunów.", includes: ["Asystent dla uczestników", "Asystent wiedzy dla zespołu", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba osób korzystających z narzędzi AI,",
      "liczba szkoleń, ofert i ankiet,",
      "ilość programów i materiałów,",
      "zakres asystentów i agentów,",
      "zakres szkoleń i opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Granice AI w firmie szkoleniowej",
    items: [
      { risk: "Oferta z AI obieca zakres, którego firma nie realizuje.", mitigation: "Oferta powstaje z programów firmy i jest sprawdzana przez opiekuna." },
      { risk: "Quiz z AI zawiera błędną odpowiedź.", mitigation: "Quizy i ćwiczenia sprawdza trener przed użyciem." },
      { risk: "Podsumowanie ankiet pominie ważną uwagę.", mitigation: "Podsumowanie zawiera cytaty uwag, a pełne ankiety są dostępne dla trenera." },
      { risk: "Zmiany w narzędziach AI.", mitigation: "Aktualizujemy zasady i konfigurację, gdy zmieniają się ustawienia narzędzi lub modele." },
    ],
  },
  faq: [
    { question: "Czy AI przygotuje program szkolenia?", answer: "Może przygotować szkic na podstawie wytycznych, ale program przygotowuje i odpowiada za niego trener lub firma." },
    { question: "Czy AI przeanalizuje ankiety?", answer: "Tak, przygotuje podsumowanie z mocnymi stronami, uwagami i cytatami. Wnioski wyciąga trener i opiekun." },
    { question: "Czy trenerzy mogą korzystać z ChatGPT?", answer: "Tak, na kontach firmowych i zgodnie z zasadami, bez wpisywania danych uczestników." },
    { question: "Czy AI przygotuje quizy?", answer: "Przygotuje szkice pytań z materiałów. Trener sprawdza je przed użyciem." },
    { question: "Czy prowadzicie szkolenia z AI dla firm szkoleniowych?", answer: "Tak. Warsztaty dla zespołu i trenerów na zadaniach z praktyki firmy." },
  ],
  relatedServiceSlugs: ["szkolenia-ai-dla-zespolow", "asystent-ai-na-firmowej-wiedzy", "ai-w-obsludze-dokumentow", "agenci-ai"],
  relatedProcessSlugs: ["ofertowanie"],
  relatedToolSlugs: ["chatgpt", "claude", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
