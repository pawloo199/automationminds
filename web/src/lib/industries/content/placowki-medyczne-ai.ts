import type { IndustryPageContent } from "../types";

export const placowkiMedyczneAi: IndustryPageContent = {
  industrySlug: "placowki-medyczne",
  subSlug: "ai",
  name: "AI w przychodni",
  excerpt: "AI w przychodni i gabinecie, w zadaniach organizacyjnych: odpowiedzi na pytania pacjentów o organizację wizyt, porządkowanie wiadomości, treści dla pacjentów, zasady dla zespołu.",
  metaTitle: "AI w przychodni: zadania organizacyjne i zasady",
  metaDescription:
    "Wdrażamy AI w przychodniach w zadaniach organizacyjnych: pytania pacjentów o wizyty, porządkowanie wiadomości, materiały informacyjne i zasady dla zespołu.",
  primaryKeyword: "AI w przychodni",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Sztuczna inteligencja w placówce medycznej",
    title: "AI w przychodni: pomoc w organizacji, bez wchodzenia w sprawy medyczne",
    lead: "W placówce medycznej AI budzi uzasadnioną ostrożność. Dane o zdrowiu są szczególnie chronione, a błąd w sprawach medycznych może mieć poważne skutki. Jednocześnie duża część pracy rejestracji i administracji to praca z tekstem organizacyjnym, w której AI dobrze się sprawdza. Pomagamy placówkom wdrożyć AI tylko tam, gdzie nie dotyka decyzji medycznych ani danych o zdrowiu.",
    bullets: [
      "Odpowiedzi na pytania organizacyjne pacjentów",
      "Porządkowanie wiadomości do rejestracji",
      "Zasady korzystania z AI dla zespołu",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Prywatne przychodnie, gabinety i centra medyczne" },
    { label: "Co robimy", value: "AI w zadaniach organizacyjnych, zasady i szkolenia" },
    { label: "Bezpieczeństwo", value: "Bez danych o zdrowiu w AI, infrastruktura uzgodniona z placówką" },
    { label: "Zasada", value: "AI nie doradza w sprawach zdrowia" },
  ],
  symptoms: {
    title: "Kiedy placówka powinna zająć się AI",
    lead: "Jeśli rozpoznajecie u siebie któreś z tych sytuacji, warto ustalić zasady i wybrać bezpieczne zastosowania.",
    items: [
      "Pacjenci zadają przez telefon i mail te same pytania organizacyjne.",
      "Wiadomości do rejestracji trzeba ręcznie sortować i przekazywać.",
      "Materiały informacyjne dla pacjentów są nieaktualne lub niespójne.",
      "Pracownicy administracji korzystają z czatów AI na prywatnych kontach.",
      "Nie macie spisanych zasad, czego nie wolno wpisywać do narzędzi AI.",
      "Chcecie odciążyć rejestrację bez ryzyka dla danych pacjentów.",
    ],
  },
  intro: {
    title: "AI w placówce medycznej: gdzie tak, gdzie nie",
    paragraphs: [
      "Pierwszy krok to zasady. Pracownicy placówek już korzystają z narzędzi AI, często na prywatnych kontach. Spisane zasady określają, do czego wolno używać AI, a czego nie wolno do niego wpisywać: żadnych danych pacjentów, żadnych informacji o zdrowiu, żadnych fragmentów dokumentacji. Do tego konta firmowe i krótkie szkolenie.",
      "Drugi krok to zadania organizacyjne. AI może odpowiadać pacjentom na pytania o godziny przyjęć, ceny usług, przygotowanie do badań na podstawie instrukcji placówki, dojazd i dokumenty potrzebne na wizytę. Może porządkować wiadomości do rejestracji według tematów: umówienie, zmiana terminu, faktura, pytanie medyczne do przekazania. Może pomagać przy tworzeniu materiałów informacyjnych, które zatwierdza placówka.",
      "Granica jest jasna: AI nie odpowiada na pytania o zdrowie, objawy, leczenie ani wyniki. Takie pytania rozpoznaje i przekazuje personelowi albo kieruje pacjenta do kontaktu z placówką. Nie wdrażamy AI do diagnozowania, interpretacji wyników ani prowadzenia dokumentacji medycznej.",
    ],
  },
  scope: {
    title: "Jak AI pomaga w placówkach medycznych",
    lead: "Zastosowania organizacyjne, które wdrażamy. Żadne z nich nie dotyczy decyzji medycznych.",
    items: [
      { title: "Pytania organizacyjne", body: "Godziny, ceny, przygotowanie do badań według instrukcji placówki, dojazd." },
      { title: "Porządkowanie wiadomości", body: "Tematy wiadomości do rejestracji i przekazanie do właściwej osoby." },
      { title: "Rozpoznanie pytań medycznych", body: "Przekazanie personelowi bez udzielania odpowiedzi." },
      { title: "Materiały dla pacjentów", body: "Szkice informacji organizacyjnych do zatwierdzenia przez placówkę." },
      { title: "Teksty administracyjne", body: "Ogłoszenia, regulaminy, odpowiedzi na maile organizacyjne." },
      { title: "Wiele języków", body: "Informacje organizacyjne dla pacjentów z zagranicy." },
      { title: "Zasady dla zespołu", body: "Co wolno, a czego nie wolno wpisywać do narzędzi AI." },
      { title: "Szkolenia", body: "Warsztaty dla rejestracji i administracji." },
    ],
  },
  security: {
    title: "AI a dane pacjentów",
    lead: "Dane o zdrowiu są szczególnie chronione. Dlatego trzymamy je poza AI.",
    items: [
      { title: "Bez danych o zdrowiu", body: "Do modeli AI nie trafiają informacje o zdrowiu, wyniki ani dokumentacja medyczna." },
      { title: "Bez danych pacjentów w czacie", body: "Asystent odpowiada na pytania organizacyjne bez potrzeby podawania danych osobowych." },
      { title: "Konta firmowe", body: "Zespół korzysta z AI na kontach placówki, w planach, w których dane nie służą do trenowania modeli." },
      { title: "Infrastruktura uzgodniona z placówką", body: "Przepływy mogą działać w infrastrukturze placówki lub na serwerze w UE." },
      { title: "Treści zatwierdzone przez placówkę", body: "Asystent korzysta tylko z informacji zatwierdzonych przez placówkę." },
      { title: "Ślad działań", body: "Rozmowy asystenta są zapisywane, żeby placówka mogła je przeglądać." },
    ],
  },
  comparison: {
    title: "Prywatne konta AI czy AI wdrożone w placówce",
    lead: "W placówce medycznej różnica dotyczy przede wszystkim kontroli nad tym, jakie dane trafiają do AI.",
    columns: ["AI wdrożone w placówce", "Prywatne konta zespołu"],
    rows: [
      { label: "Zasady", values: ["Spisane, z listą danych, których nie wolno wpisywać", "Zależą od każdej osoby"] },
      { label: "Trenowanie modeli na danych", values: ["Wyłączone w planach firmowych", "Często włączone domyślnie w planach prywatnych"] },
      { label: "Odpowiedzi dla pacjentów", values: ["Tylko z informacji zatwierdzonych przez placówkę", "Brak"] },
      { label: "Pytania medyczne", values: ["Rozpoznawane i przekazywane personelowi", "Ryzyko odpowiedzi z ogólnej wiedzy modelu"] },
      { label: "Wpływ na pracę rejestracji", values: ["Mniej powtarzalnych pytań", "Brak"] },
    ],
    note: "Porównanie jest uproszczone. Ustawienia narzędzi AI zmieniają się, dlatego weryfikujemy je przy każdym wdrożeniu.",
  },
  example: {
    title: "Praca z AI przed i po wdrożeniu",
    lead: "Przykład przychodni z kilkunastoma lekarzami i dwuosobową rejestracją.",
    rows: [
      { label: "Pytania organizacyjne", before: "Telefon do rejestracji.", after: "Odpowiedzi z informacji placówki." },
      { label: "Wiadomości", before: "Sortowane ręcznie.", after: "Tematy i przekazanie." },
      { label: "Prywatne konta AI", before: "Bez zasad.", after: "Konta firmowe i zasady." },
      { label: "Materiały", before: "Nieaktualne.", after: "Aktualizowane i zatwierdzane." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej placówce.",
  },
  implementation: {
    title: "Jak wdrażamy AI w placówce medycznej",
    lead: "Zaczynamy od zasad, potem wybieramy bezpieczne zastosowania organizacyjne.",
    phases: [
      { title: "Zasady", duration: "kilka dni", body: "Sprawdzamy, jak zespół korzysta dziś z AI, i przygotowujemy zasady razem z osobą odpowiedzialną za ochronę danych.", fromYou: "Rozmowa z właścicielem i osobą odpowiedzialną za ochronę danych." },
      { title: "Narzędzia i szkolenie", duration: "1–2 tygodnie", body: "Konfigurujemy konta firmowe i prowadzimy warsztat dla rejestracji i administracji.", fromYou: "Udział zespołu w warsztacie." },
      { title: "Zastosowania organizacyjne", duration: "zwykle 3–5 tygodni", body: "Budujemy asystenta odpowiadającego na pytania organizacyjne i porządkowanie wiadomości. Testujemy w trybie podglądu.", fromYou: "Informacje organizacyjne placówki i osoba oceniająca odpowiedzi." },
      { title: "Opieka", duration: "stale", body: "Przeglądamy rozmowy, aktualizujemy informacje i zasady.", fromYou: "Informacja o zmianach w usługach i cenach." },
    ],
  },
  variants: {
    title: "Warianty wdrożenia AI",
    lead: "Wiele placówek zaczyna od samych zasad i szkolenia.",
    items: [
      { name: "Zasady i szkolenie", description: "Dla placówek, które chcą uporządkować korzystanie z AI.", includes: ["Zasady korzystania z AI", "Konfiguracja kont firmowych", "Warsztat dla zespołu", "Lista dozwolonych zastosowań"] },
      { name: "Porządkowanie wiadomości", description: "Dla placówek z dużą liczbą maili i wiadomości.", includes: ["Wszystko z wariantu Zasady i szkolenie", "Tematy wiadomości", "Przekazanie do właściwych osób", "Rozpoznanie pytań medycznych"] },
      { name: "Asystent organizacyjny", description: "Dla placówek, które chcą odciążyć rejestrację.", includes: ["Asystent na stronie lub w wiadomościach", "Odpowiedzi z informacji placówki", "Infrastruktura uzgodniona z placówką", "Przegląd rozmów i miesięczny raport"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba osób korzystających z narzędzi AI,",
      "zakres informacji organizacyjnych,",
      "kanały, w których działa asystent,",
      "wymagania dotyczące infrastruktury,",
      "zakres szkoleń i opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Granice AI w placówce medycznej",
    items: [
      { risk: "Pacjent zapyta asystenta o objawy lub leczenie.", mitigation: "Asystent rozpoznaje pytania medyczne, nie odpowiada na nie i kieruje do personelu lub kontaktu z placówką." },
      { risk: "Pracownik wpisze dane pacjenta do narzędzia AI.", mitigation: "Zasady, szkolenie i konta firmowe, a zastosowania projektujemy tak, żeby dane pacjentów nie były potrzebne." },
      { risk: "Asystent poda nieaktualną informację.", mitigation: "Asystent korzysta tylko z informacji placówki, aktualizowanych w jednym miejscu." },
      { risk: "Pilna sprawa trafi do asystenta.", mitigation: "Asystent informuje o numerze alarmowym i kontakcie z placówką przy sygnałach pilnych." },
    ],
  },
  faq: [
    { question: "Czy AI może odpowiadać pacjentom na pytania o zdrowie?", answer: "Nie wdrażamy takich rozwiązań. Asystent odpowiada tylko na pytania organizacyjne, a pytania medyczne przekazuje personelowi." },
    { question: "Czy AI pomoże w dokumentacji medycznej?", answer: "Nie zajmujemy się dokumentacją medyczną. Skupiamy się na pracy organizacyjnej rejestracji i administracji." },
    { question: "Czy dane pacjentów trafiają do AI?", answer: "Nie. Zastosowania projektujemy tak, żeby nie wymagały danych pacjentów ani informacji o zdrowiu." },
    { question: "Czy pracownicy mogą korzystać z ChatGPT?", answer: "Na kontach firmowych, zgodnie z zasadami placówki i bez wpisywania jakichkolwiek danych pacjentów." },
    { question: "Czy prowadzicie szkolenia z AI dla placówek medycznych?", answer: "Tak, dla rejestracji i administracji, z naciskiem na zasady ochrony danych i granice zastosowań." },
  ],
  relatedServiceSlugs: ["szkolenia-ai-dla-zespolow", "chatbot-ai-dla-firmy", "strategia-wdrozenia-ai", "automatyzacja-w-obsludze-klienta"],
  relatedProcessSlugs: ["umawianie-wizyt"],
  relatedToolSlugs: ["chatgpt", "claude", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
