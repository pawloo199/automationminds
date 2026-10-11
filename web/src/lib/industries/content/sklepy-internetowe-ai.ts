import type { IndustryPageContent } from "../types";

export const sklepyInternetoweAi: IndustryPageContent = {
  industrySlug: "sklepy-internetowe",
  subSlug: "ai",
  name: "AI w sklepie internetowym",
  excerpt: "AI w sklepie internetowym: opisy i dane produktów, odpowiedzi dla klientów, kategoryzacja zwrotów i reklamacji, tłumaczenia, analiza opinii klientów.",
  metaTitle: "AI w sklepie internetowym: produkty, klienci, zwroty",
  metaDescription:
    "Wdrażamy AI w sklepach internetowych: opisy i dane produktów, odpowiedzi dla klientów, kategoryzacja zwrotów, tłumaczenia i analiza opinii klientów.",
  primaryKeyword: "AI w sklepie internetowym",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Sztuczna inteligencja w e-commerce",
    title: "AI w sklepie internetowym: więcej produktów i klientów bez większego zespołu",
    lead: "Sklep internetowy pracuje na tekstach: opisach produktów, wiadomościach od klientów, zgłoszeniach zwrotów, opiniach, plikach od dostawców. To rodzaj pracy, w którym AI daje dziś wyraźny efekt. Pomagamy sklepom wdrożyć AI tam, gdzie oszczędza czas, z kontrolą nad danymi klientów i jasnym podziałem odpowiedzialności.",
    bullets: [
      "Opisy i atrybuty produktów w stylu sklepu",
      "Odpowiedzi dla klientów z danymi zamówień",
      "Zwroty, reklamacje i opinie uporządkowane automatycznie",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Sklepy internetowe, marki sprzedające online i sprzedawcy na marketplace" },
    { label: "Co robimy", value: "AI w produktach, obsłudze klienta i zwrotach, zasady i szkolenia" },
    { label: "Bezpieczeństwo", value: "Dane w UE, bez trenowania modeli na danych, płatności poza AI" },
    { label: "Zasada", value: "AI przygotowuje, zespół sklepu zatwierdza" },
  ],
  symptoms: {
    title: "Kiedy sklep powinien zająć się AI",
    lead: "Jeśli rozpoznajecie u siebie któreś z tych sytuacji, AI może przejąć sporą część pracy z tekstem.",
    items: [
      "Opisy produktów są kopiowane od producenta i takie same jak u konkurencji.",
      "Atrybuty produktów są niekompletne, więc filtry w sklepie nie działają.",
      "Wiadomości od klientów to w większości te same pytania.",
      "Sprzedajecie za granicą, a tłumaczenia zabierają tygodnie.",
      "Opinie i uwagi klientów są rozproszone i nikt ich nie analizuje.",
      "Zespół korzysta z czatów AI na prywatnych kontach.",
    ],
  },
  intro: {
    title: "AI w sklepie internetowym na trzech poziomach",
    paragraphs: [
      "Pierwszy poziom to narzędzia AI dla zespołu: czat z modelem językowym na koncie firmowym, z zasadami i szkoleniem. Zespół szybciej pisze teksty do newslettera i social mediów, odpowiada na nietypowe wiadomości i przygotowuje opisy kategorii.",
      "Drugi poziom to AI w procesach. Model przygotowuje opisy i atrybuty produktów z danych dostawcy i zdjęć, według wytycznych sklepu. Tłumaczy opisy na języki rynków zagranicznych. Kategoryzuje zgłoszenia zwrotów i reklamacji. Zestawia opinie klientów i wskazuje powtarzające się problemy z produktami.",
      "Trzeci poziom to asystenci i agenci AI. Asystent odpowiada klientom na pytania o zamówienia, dostawę, zwroty i produkty, korzystając z danych sklepu. Przekazuje zespołowi sprawy nietypowe i reklamacje. Decyzje o zwrotach pieniędzy, cenach i trudnych sprawach zawsze należą do ludzi.",
    ],
  },
  scope: {
    title: "Jak AI pomaga w sklepach internetowych",
    lead: "Zastosowania, które wdrażamy najczęściej. Każde działa jako wsparcie, a decyzje należą do zespołu.",
    items: [
      { title: "Opisy produktów", body: "Szkic opisu w stylu sklepu z danych dostawcy i zdjęć." },
      { title: "Atrybuty", body: "Uzupełnienie parametrów potrzebnych do filtrów i porównań." },
      { title: "Tłumaczenia", body: "Opisy i komunikaty na języki rynków zagranicznych, do sprawdzenia." },
      { title: "Asystent dla klientów", body: "Odpowiedzi o zamówienia, dostawę i zwroty z danych sklepu." },
      { title: "Kategoryzacja zgłoszeń", body: "Zwroty, reklamacje i pytania przypisane do kategorii i osób." },
      { title: "Analiza opinii", body: "Powtarzające się uwagi klientów o produktach." },
      { title: "Pliki od dostawców", body: "Dane z cenników i katalogów w różnych formatach." },
      { title: "Zasady i szkolenia", body: "Polityka korzystania z AI i warsztaty dla zespołu." },
    ],
  },
  security: {
    title: "AI a dane klientów",
    lead: "Sklep to dane osobowe, adresy i historia zakupów. Wdrażamy AI tak, żeby były pod kontrolą.",
    items: [
      { title: "Konta firmowe zamiast prywatnych", body: "Zespół korzysta z AI na kontach sklepu, w planach, w których dane nie służą do trenowania modeli." },
      { title: "Minimum danych", body: "Do modelu trafia tylko to, co potrzebne, np. numer zamówienia i status bez pełnych danych klienta." },
      { title: "Płatności poza AI", body: "Dane płatności nie trafiają do modeli." },
      { title: "Dane w UE lub u was", body: "Przepływy z AI mogą działać na serwerze w UE albo w infrastrukturze sklepu." },
      { title: "Jasne zasady", body: "Pisemne zasady korzystania z AI: co wolno przesyłać, jak sprawdzać wyniki, kto odpowiada za treść." },
      { title: "Weryfikacja przez człowieka", body: "Opisy produktów, zwroty pieniędzy i reklamacje zatwierdza człowiek." },
    ],
  },
  comparison: {
    title: "Prywatne konta AI czy AI wdrożone w sklepie",
    lead: "Różnica nie polega na jakości modelu, tylko na kontroli nad danymi i wpływie na procesy.",
    columns: ["AI wdrożone w sklepie", "Prywatne konta zespołu"],
    rows: [
      { label: "Gdzie trafiają dane", values: ["Ustalone miejsce, umowa z dostawcą", "Zależy od ustawień każdego konta"] },
      { label: "Trenowanie modeli na danych", values: ["Wyłączone w planach firmowych", "Często włączone domyślnie w planach prywatnych"] },
      { label: "Opisy produktów", values: ["Z danych produktu, w stylu sklepu, prosto do platformy", "Kopiowane ręcznie z okna czatu"] },
      { label: "Odpowiedzi dla klientów", values: ["Z danymi zamówień", "Bez dostępu do danych sklepu"] },
      { label: "Wpływ na procesy", values: ["AI w produktach, obsłudze klienta, zwrotach", "Tylko praca w oknie czatu"] },
    ],
    note: "Porównanie jest uproszczone. Ustawienia narzędzi AI zmieniają się, dlatego weryfikujemy je przy każdym wdrożeniu.",
  },
  example: {
    title: "Praca z AI przed i po wdrożeniu",
    lead: "Przykład sklepu z kilkoma tysiącami produktów, sprzedającego w Polsce i za granicą.",
    rows: [
      { label: "Opisy", before: "Kopiowane od producenta.", after: "Szkic w stylu sklepu." },
      { label: "Tłumaczenia", before: "Tygodnie.", after: "Dni, ze sprawdzeniem." },
      { label: "Wiadomości", before: "Ręczne odpowiedzi.", after: "Asystent z danymi zamówień." },
      { label: "Opinie", before: "Nikt nie analizuje.", after: "Zestawienie powtarzających się uwag." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym sklepie.",
  },
  implementation: {
    title: "Jak wdrażamy AI w sklepie internetowym",
    lead: "Zaczynamy od zasad i bezpiecznych narzędzi, a potem dokładamy AI do produktów i obsługi klienta.",
    phases: [
      { title: "Przegląd i zasady", duration: "kilka dni", body: "Sprawdzamy, jak zespół korzysta dziś z AI i gdzie traci najwięcej czasu, i przygotowujemy zasady.", fromYou: "Rozmowa z właścicielem i zespołem." },
      { title: "Narzędzia i szkolenie", duration: "1–2 tygodnie", body: "Konfigurujemy konta firmowe i prowadzimy warsztat na prawdziwych zadaniach sklepu.", fromYou: "Udział zespołu w warsztacie." },
      { title: "AI w procesach", duration: "zwykle 3–6 tygodni", body: "Budujemy wybrane zastosowania: opisy produktów, asystenta dla klientów, kategoryzację zwrotów. Testujemy je na części produktów lub zamówień.", fromYou: "Osoby oceniające wyniki i wytyczne sklepu." },
      { title: "Opieka i rozwój", duration: "stale", body: "Pilnujemy jakości i kosztów, aktualizujemy wytyczne i dokładamy kolejne zastosowania.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty wdrożenia AI",
    lead: "Wiele sklepów zaczyna od opisów produktów i po kilku tygodniach dokłada obsługę klienta.",
    items: [
      { name: "Bezpieczny start", description: "Dla sklepów, które chcą uporządkować korzystanie z AI.", includes: ["Zasady korzystania z AI", "Konfiguracja kont firmowych", "Warsztat dla zespołu", "Biblioteka sprawdzonych poleceń"] },
      { name: "AI w produktach", description: "Dla sklepów z dużą liczbą produktów.", includes: ["Wszystko z wariantu Bezpieczny start", "Opisy produktów", "Atrybuty", "Tłumaczenia", "Przepływy działające na serwerze w UE"] },
      { name: "Asystent dla klientów", description: "Dla sklepów z dużą liczbą wiadomości.", includes: ["Asystent z danymi zamówień", "Kategoryzacja zgłoszeń", "Infrastruktura i utrzymanie po naszej stronie", "Monitoring i miesięczny raport"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba produktów i języków,",
      "liczba wiadomości od klientów,",
      "możliwości integracji platformy sklepu,",
      "zakres asystentów i agentów,",
      "zakres szkoleń i opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Granice AI w sklepie internetowym",
    items: [
      { risk: "Opis z AI poda błędne parametry produktu.", mitigation: "Opis powstaje z danych produktu i jest sprawdzany przed publikacją." },
      { risk: "Asystent obieca klientowi coś, czego sklep nie zrobi.", mitigation: "Asystent odpowiada na podstawie regulaminu i danych zamówienia, a sprawy nietypowe przekazuje zespołowi." },
      { risk: "Tłumaczenie zmieni sens opisu.", mitigation: "Tłumaczenia sprawdza osoba znająca język, przynajmniej dla najważniejszych produktów." },
      { risk: "Zmiany w narzędziach AI.", mitigation: "Aktualizujemy zasady i konfigurację, gdy zmieniają się ustawienia narzędzi lub modele." },
    ],
  },
  faq: [
    { question: "Czy AI napisze opisy wszystkich produktów?", answer: "Przygotuje szkice według wytycznych sklepu. Opisy sprawdza zespół, przynajmniej na początku i dla najważniejszych produktów." },
    { question: "Czy opisy z AI zaszkodzą pozycjom w wyszukiwarce?", answer: "Opisy dopracowane przez zespół, własne i zgodne z danymi produktu, są zwykle lepsze niż kopiowane od producenta." },
    { question: "Czy asystent odpowie klientowi o jego zamówieniu?", answer: "Tak, korzystając z danych zamówienia w platformie sklepu. Sprawy nietypowe przekazuje zespołowi." },
    { question: "Czy AI przetłumaczy sklep?", answer: "Może przetłumaczyć opisy i komunikaty. Warto, żeby tłumaczenia najważniejszych treści sprawdziła osoba znająca język." },
    { question: "Czy prowadzicie szkolenia z AI dla zespołów sklepów?", answer: "Tak. Warsztaty prowadzimy na zadaniach z praktyki sklepu: opisy, odpowiedzi klientom, treści marketingowe i bezpieczeństwo danych." },
  ],
  relatedServiceSlugs: ["chatbot-ai-dla-firmy", "agenci-ai", "szkolenia-ai-dla-zespolow", "automatyzacja-marketingu"],
  relatedProcessSlugs: ["obsluga-reklamacji"],
  relatedToolSlugs: ["chatgpt", "claude", "n8n"],
  relatedArticleSlugs: ["ai-w-ecommerce", "dane-produktowe-w-sklepie", "ai-w-codziennej-pracy-zespolu"],
};
