import type { IndustryPageContent } from "../types";

export const logistykaRozliczeniaUslug: IndustryPageContent = {
  industrySlug: "firmy-logistyczne",
  subSlug: "rozliczenia-uslug",
  name: "Rozliczenia usług logistycznych",
  excerpt: "Składowanie, operacje magazynowe, transport i usługi dodatkowe rozliczane według cenników klientów, z danych z WMS i TMS.",
  metaTitle: "Rozliczenia usług magazynowych i logistycznych",
  metaDescription:
    "Automatyzujemy rozliczenia usług logistycznych: składowanie, operacje magazynowe, transport i usługi dodatkowe według cenników klientów, faktury i KSeF.",
  primaryKeyword: "rozliczenia usług magazynowych",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy logistyczne: rozliczenia usług",
    title: "Rozliczenia usług logistycznych: każda paleta i operacja na fakturze",
    lead: "Operator logistyczny rozlicza klientów za składowanie, przyjęcia, wydania, kompletację, transport i usługi dodatkowe, każdego według innego cennika. Na koniec miesiąca ktoś zbiera dane z WMS, TMS i notatek magazynu, liczy w arkuszu i wystawia faktury. Łatwo przy tym pominąć usługę albo pomylić stawkę. Automatyzujemy rozliczenia: dane zbierają się z bieżącej pracy, wyliczenia powstają według cenników, a faktury wychodzą po akceptacji.",
    bullets: [
      "Dane o usługach z WMS i TMS bez ręcznego zbierania",
      "Wyliczenia według cennika każdego klienta",
      "Usługi dodatkowe odnotowane i zafakturowane",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Operatorzy logistyczni i magazyny kontraktowe z różnymi cennikami klientów" },
    { label: "Co automatyzujemy", value: "Zbieranie danych, wyliczenia, usługi dodatkowe, faktury, raporty rentowności" },
    { label: "Narzędzia", value: "WMS, TMS, program do faktur, KSeF, n8n" },
    { label: "Zasada", value: "Rozliczenie akceptuje osoba odpowiedzialna przed fakturą" },
  ],
  symptoms: {
    title: "Kiedy rozliczenia usług warto zautomatyzować",
    lead: "Jeśli te sytuacje dotyczą waszej firmy, rozliczenia zabierają czas i mogą ukrywać utracony przychód.",
    items: [
      "Dane do faktur zbiera się z kilku systemów na koniec miesiąca.",
      "Każdy klient ma inny cennik, a wyliczenia są w osobnych arkuszach.",
      "Usługi dodatkowe, np. foliowanie czy etykietowanie, nie zawsze trafiają na fakturę.",
      "Faktury za usługi wychodzą kilka dni po zamknięciu miesiąca.",
      "Klienci kwestionują faktury, a odtworzenie wyliczenia zajmuje czas.",
      "Nie wiadomo, którzy klienci są rentowni, a którzy wymagają więcej pracy niż płacą.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja rozliczeń usług",
    paragraphs: [
      "Cenniki klientów zapisujemy w jednym miejscu: stawki za składowanie, przyjęcia, wydania, kompletację, transport i usługi dodatkowe, minimalne opłaty i wyjątki. Dane o wykonanych usługach są pobierane z WMS i TMS regularnie, np. codziennie, a usługi dodatkowe magazyn odnotowuje w prostym formularzu albo bezpośrednio w WMS.",
      "Na koniec okresu system wylicza kwoty dla każdego klienta według jego cennika i przygotowuje zestawienie z podziałem na usługi. Osoba odpowiedzialna sprawdza je i akceptuje, a w programie do faktur powstają faktury, które trafiają do KSeF i do klientów razem ze szczegółowym zestawieniem.",
      "Ponieważ dane o usługach i przychodach są w jednym miejscu, łatwo zestawić je z kosztami pracy i powierzchni. Raport pokazuje przychód i obciążenie magazynu dla każdego klienta, co pomaga w negocjacjach cenników.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja rozliczeń",
    lead: "Zakres dopasowujemy do cenników i systemów firmy.",
    items: [
      { title: "Cenniki klientów", body: "Stawki, minimalne opłaty i wyjątki w jednym miejscu." },
      { title: "Dane o usługach", body: "Składowanie, operacje i transport pobierane z WMS i TMS." },
      { title: "Usługi dodatkowe", body: "Prosty sposób odnotowania usług, które nie są w WMS." },
      { title: "Wyliczenia", body: "Kwoty według cennika każdego klienta, z podziałem na usługi." },
      { title: "Akceptacja", body: "Zestawienie do sprawdzenia przed wystawieniem faktury." },
      { title: "Faktury i KSeF", body: "Faktury w programie do faktur, wysyłane do KSeF i klientów." },
      { title: "Szczegółowe zestawienia", body: "Załącznik do faktury, który pozwala klientowi sprawdzić wyliczenie." },
      { title: "Rentowność klientów", body: "Przychód i obciążenie magazynu dla każdego klienta." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od operacji na magazynie do faktury.",
    items: [
      {
        title: "Zamknięcie miesiąca",
        trigger: "Koniec okresu rozliczeniowego",
        steps: ["Zebranie danych o usługach z WMS, TMS i formularza", "Wyliczenia według cenników i zestawienia do akceptacji", "Faktury w programie, KSeF i wysyłka z zestawieniem"],
        result: "Faktury wychodzą w pierwszych dniach miesiąca i obejmują wszystkie usługi.",
      },
      {
        title: "Usługa dodatkowa",
        trigger: "Magazyn wykonuje usługę spoza standardu",
        steps: ["Odnotowanie usługi w formularzu lub WMS", "Przypisanie do klienta i zlecenia", "Uwzględnienie w rozliczeniu okresu"],
        result: "Usługi dodatkowe nie giną między magazynem a działem rozliczeń.",
      },
    ],
  },
  example: {
    title: "Rozliczenia przed i po automatyzacji",
    lead: "Przykład magazynu kontraktowego z kilkunastoma klientami i różnymi cennikami.",
    rows: [
      { label: "Dane", before: "Zbierane z kilku systemów na koniec miesiąca.", after: "Pobierane na bieżąco." },
      { label: "Wyliczenia", before: "Arkusz dla każdego klienta.", after: "Według cenników w jednym miejscu." },
      { label: "Usługi dodatkowe", before: "Część nie trafia na fakturę.", after: "Odnotowane i rozliczone." },
      { label: "Pytania klientów", before: "Odtwarzanie wyliczeń.", after: "Szczegółowe zestawienie przy fakturze." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Rozliczenia testujemy na jednym okresie równolegle z obecnym sposobem pracy.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy cenniki, źródła danych i obecny sposób wyliczeń.", fromYou: "Cenniki klientów i rozmowa z osobą od rozliczeń." },
      { title: "Cenniki i projekt", duration: "1–2 tygodnie", body: "Zapisujemy cenniki, ustalamy źródła danych, zasady usług dodatkowych i akceptacji.", fromYou: "Weryfikacja zapisanych cenników." },
      { title: "Budowa i test", duration: "zwykle 3–5 tygodni", body: "Budujemy przepływ i porównujemy wyliczenia z rozliczeniem przygotowanym ręcznie.", fromYou: "Osoba porównująca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Przełączamy rozliczenia i aktualizujemy cenniki przy zmianach umów.", fromYou: "Informacja o zmianach cenników." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od wyliczeń dla największych klientów.",
    items: [
      { name: "Wyliczenia", description: "Dla firm, które chcą skończyć z arkuszami.", includes: ["Cenniki w jednym miejscu", "Dane z WMS i TMS", "Wyliczenia i zestawienia", "Akceptacja"] },
      { name: "Wyliczenia i faktury", description: "Dla firm, które chcą szybciej fakturować.", includes: ["Wszystko z wariantu Wyliczenia", "Usługi dodatkowe", "Faktury i KSeF", "Szczegółowe zestawienia dla klientów"] },
      { name: "Rozliczenia i rentowność", description: "Dla firm, które chcą wiedzieć, na których klientach zarabiają.", includes: ["Wszystko z wariantu Wyliczenia i faktury", "Rentowność klientów", "Raport dla zarządu", "Przypomnienia o płatnościach"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba klientów i złożoność cenników,",
      "dostęp do danych w WMS i TMS,",
      "sposób odnotowywania usług dodatkowych,",
      "integracja z programem do faktur i KSeF,",
      "zakres raportów rentowności.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Błędna stawka w cenniku.", mitigation: "Cenniki weryfikujecie przed startem, a pierwsze rozliczenie porównujemy z ręcznym." },
      { risk: "Niepełne dane z WMS.", mitigation: "Kontrola kompletności danych i informacja o brakach przed wyliczeniem." },
      { risk: "Usługa dodatkowa nie zostanie odnotowana.", mitigation: "Prosty formularz dla magazynu i przypomnienie przy zamknięciu okresu." },
      { risk: "Faktura z błędem trafi do klienta.", mitigation: "Zestawienia akceptuje osoba odpowiedzialna przed wystawieniem faktur." },
    ],
  },
  faq: [
    { question: "Czy obsłużycie nasze cenniki?", answer: "Tak. Zapisujemy stawki, minimalne opłaty, progi i wyjątki dla każdego klienta. Złożone zasady ustalamy przy przeglądzie." },
    { question: "Jak liczone jest składowanie?", answer: "Według zasad z cennika, np. za miejsce paletowe na dzień lub według stanu z końca dnia, na podstawie danych z WMS." },
    { question: "Czy faktury trafią do KSeF?", answer: "Tak. Faktura powstaje w waszym programie do faktur, który wysyła ją do KSeF, albo przez bezpośrednie połączenie z KSeF." },
    { question: "Czy klient dostanie szczegółowe zestawienie?", answer: "Tak, jako załącznik do faktury, z podziałem na usługi i okresy." },
    { question: "Czy nasz WMS nie ma modułu rozliczeń?", answer: "Niektóre WMS mają moduły rozliczeń. Sprawdzamy, co robi wasz, i automatyzujemy to, czego brakuje, np. usługi dodatkowe, transport z TMS czy raporty rentowności." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-raportow", "integracje-systemow"],
  relatedProcessSlugs: ["przypomnienia-o-platnosciach", "raporty-finansowe"],
  relatedToolSlugs: ["ksef", "n8n", "microsoft-365"],
  relatedArticleSlugs: ["kpi-w-logistyce", "wms-a-automatyzacja", "jak-mierzyc-roi-automatyzacji"],
};
