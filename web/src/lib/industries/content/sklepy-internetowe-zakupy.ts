import type { IndustryPageContent } from "../types";

export const sklepyInternetoweZakupy: IndustryPageContent = {
  industrySlug: "sklepy-internetowe",
  subSlug: "zakupy-u-dostawcow",
  name: "Zakupy u dostawców",
  excerpt: "Podpowiedzi zamówień do dostawców na podstawie sprzedaży, stanów i czasu dostawy, zamówienia do akceptacji, potwierdzenia, dostawy i faktury zakupowe.",
  metaTitle: "Zamówienia do dostawców sklepu: podpowiedzi i kontrola",
  metaDescription:
    "Automatyzujemy zakupy sklepu internetowego: podpowiedzi zamówień na podstawie sprzedaży i stanów, zamówienia do akceptacji, dostawy i faktury zakupowe.",
  primaryKeyword: "zamówienia do dostawców sklepu internetowego",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Sklepy internetowe: zakupy",
    title: "Towar zamówiony, zanim się skończy, a nie gdy klienci już czekają",
    lead: "Bestseller się skończył, a zamówienie do dostawcy wyszło dopiero wtedy. Inny produkt leży w magazynie od roku, bo ktoś zamówił go za dużo. W wielu sklepach zakupy opierają się na intuicji i arkuszu aktualizowanym raz w tygodniu. Automatyzujemy zakupy: system liczy, ile i kiedy zamówić na podstawie sprzedaży, stanów i czasu dostawy, a zespół akceptuje zamówienia jednym kliknięciem.",
    bullets: [
      "Podpowiedzi zamówień z danych o sprzedaży i stanach",
      "Zamówienia do akceptacji i wysyłka do dostawców",
      "Dostawy i faktury zakupowe pod kontrolą",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Sklepy z własnym magazynem i wieloma dostawcami" },
    { label: "Co automatyzujemy", value: "Podpowiedzi, zamówienia, potwierdzenia, dostawy, faktury, raporty" },
    { label: "Narzędzia", value: "Platforma sklepu, magazyn, poczta, program do faktur, KSeF, n8n" },
    { label: "Zasada", value: "Zamówienie akceptuje osoba odpowiedzialna za zakupy" },
  ],
  symptoms: {
    title: "Kiedy zakupy warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, sklep traci sprzedaż i zamraża pieniądze w towarze.",
    items: [
      "Bestsellery kończą się w najgorszym momencie.",
      "Część towaru leży w magazynie miesiącami.",
      "Zamówienia do dostawców przygotowuje się w arkuszu.",
      "Nie wiadomo, które zamówienia są potwierdzone i kiedy przyjdą.",
      "Faktury zakupowe trudno porównać z zamówieniami.",
      "Sezonowość uwzględnia się z pamięci.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja zakupów",
    paragraphs: [
      "System łączy dane o sprzedaży ze wszystkich kanałów, stany magazynowe i towar w drodze. Dla każdego produktu liczy średnią sprzedaż, czas dostawy od dostawcy i zapas bezpieczeństwa ustalony przez sklep. Na tej podstawie podpowiada, które produkty i w jakiej ilości zamówić.",
      "Osoba odpowiedzialna za zakupy przegląda podpowiedzi pogrupowane według dostawców, koryguje je, np. ze względu na promocję lub sezon, i akceptuje. Zamówienie wychodzi do dostawcy mailem lub przez jego system, a potwierdzenie i termin dostawy trafiają do rejestru.",
      "Przy dostawie magazyn potwierdza przyjęcie, a faktura zakupowa, z KSeF lub mailem, jest porównywana z zamówieniem i dostawą. Raport pokazuje produkty, które kończą się zbyt często, i te, które zalegają w magazynie.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zakupów",
    lead: "Zakres dopasowujemy do liczby dostawców i sposobu zamawiania.",
    items: [
      { title: "Dane o sprzedaży", body: "Ze wszystkich kanałów, z sezonowością." },
      { title: "Podpowiedzi zamówień", body: "Ilości na podstawie sprzedaży, stanów i czasu dostawy." },
      { title: "Akceptacja", body: "Zamówienia pogrupowane według dostawców." },
      { title: "Wysyłka do dostawcy", body: "Mailem lub przez system dostawcy." },
      { title: "Potwierdzenia i terminy", body: "Towar w drodze w rejestrze." },
      { title: "Przyjęcie dostawy", body: "Potwierdzenie w magazynie i rozbieżności." },
      { title: "Faktury zakupowe", body: "Porównanie z zamówieniem i dostawą." },
      { title: "Raport zapasów", body: "Produkty kończące się i zalegające." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od podpowiedzi do przyjętej dostawy.",
    items: [
      {
        title: "Cotygodniowe zamówienie",
        trigger: "Poniedziałek rano",
        steps: ["Podpowiedzi zamówień według dostawców", "Korekta i akceptacja przez zakupy", "Zamówienia do dostawców i rejestr towaru w drodze"],
        result: "Zamówienie gotowe w godzinę zamiast dnia w arkuszu.",
      },
      {
        title: "Dostawa",
        trigger: "Towar dotarł do magazynu",
        steps: ["Potwierdzenie przyjęcia i rozbieżności", "Faktura porównana z zamówieniem", "Stany zaktualizowane we wszystkich kanałach"],
        result: "Towar w sprzedaży od razu, a rozbieżności nie umykają.",
      },
    ],
  },
  example: {
    title: "Zakupy przed i po automatyzacji",
    lead: "Przykład sklepu z kilkoma tysiącami produktów i kilkunastoma dostawcami.",
    rows: [
      { label: "Zamówienia", before: "Arkusz raz w tygodniu.", after: "Podpowiedzi do akceptacji." },
      { label: "Braki bestsellerów", before: "Częste.", after: "Rzadkie." },
      { label: "Towar w drodze", before: "Nieznany.", after: "W rejestrze." },
      { label: "Zalegający towar", before: "Widoczny po czasie.", after: "Raport zapasów." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym sklepie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od danych o sprzedaży i podpowiedzi dla kilku dostawców.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy dane o sprzedaży, stanach i dostawcach.", fromYou: "Dostęp do danych i rozmowa z zakupami." },
      { title: "Zasady", duration: "około tygodnia", body: "Ustalamy czasy dostaw, zapasy bezpieczeństwa i sezonowość.", fromYou: "Akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 3–4 tygodnie", body: "Budujemy podpowiedzi i porównujemy je z decyzjami zakupów.", fromYou: "Osoba z zakupów oceniająca podpowiedzi." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy kolejnych dostawców i dopracowujemy zasady.", fromYou: "Informacja o nowych dostawcach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od raportu zapasów i podpowiedzi.",
    items: [
      { name: "Podpowiedzi", description: "Dla sklepów, które chcą zamawiać na danych.", includes: ["Dane o sprzedaży", "Podpowiedzi zamówień", "Raport zapasów", "Akceptacja"] },
      { name: "Zamówienia i dostawy", description: "Dla sklepów z wieloma dostawcami.", includes: ["Wszystko z wariantu Podpowiedzi", "Wysyłka do dostawców", "Potwierdzenia", "Przyjęcie dostawy"] },
      { name: "Pełne zakupy", description: "Dla sklepów, które chcą kontrolować koszty zakupu.", includes: ["Wszystko z wariantu Zamówienia i dostawy", "Faktury zakupowe", "Rozbieżności", "Raport dla właściciela"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba produktów i dostawców,",
      "stan danych o sprzedaży i stanach,",
      "integracja z magazynem i platformą,",
      "sposób zamawiania u dostawców,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Podpowiedź nie uwzględni promocji lub sezonu.", mitigation: "Zakupy korygują podpowiedzi, a sezonowość uwzględniamy w zasadach." },
      { risk: "Zamówienie bez kontroli.", mitigation: "Każde zamówienie wymaga akceptacji." },
      { risk: "Błędne dane o stanach.", mitigation: "Raport rozbieżności i uzgodnienia z magazynem." },
      { risk: "Dostawca nie potwierdzi zamówienia.", mitigation: "Przypomnienia i lista niepotwierdzonych zamówień." },
    ],
  },
  faq: [
    { question: "Czy system sam zamówi towar?", answer: "Przygotuje zamówienie, ale akceptuje je osoba odpowiedzialna za zakupy." },
    { question: "Czy uwzględnicie sezonowość?", answer: "Tak, na podstawie danych z poprzednich lat i zasad ustalonych z zespołem." },
    { question: "Czy potrzebujemy programu magazynowego?", answer: "Nie zawsze. Wystarczą rzetelne dane o stanach z platformy sklepu lub magazynu." },
    { question: "Czy faktury zakupowe trafią z KSeF?", answer: "Tak, faktury z KSeF są porównywane z zamówieniami i dostawami." },
    { question: "Czy zobaczymy zalegający towar?", answer: "Tak, raport pokazuje produkty bez sprzedaży i zbyt duże zapasy." },
  ],
  relatedServiceSlugs: ["automatyzacja-raportow", "integracje-systemow", "automatyzacja-dla-ksiegowosci"],
  relatedProcessSlugs: ["przyjmowanie-zamowien", "obieg-faktur-kosztowych"],
  relatedToolSlugs: ["airtable", "ksef", "n8n"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
