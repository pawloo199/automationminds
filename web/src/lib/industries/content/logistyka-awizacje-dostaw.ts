import type { IndustryPageContent } from "../types";

export const logistykaAwizacjeDostaw: IndustryPageContent = {
  industrySlug: "firmy-logistyczne",
  subSlug: "awizacje-dostaw",
  name: "Awizacje i okna rozładunku",
  excerpt: "Prośby o awizację, rezerwacja okien rozładunkowych, potwierdzenia i przypomnienia dla przewoźników i dostawców.",
  metaTitle: "Awizacje dostaw i okna rozładunku: automatyzacja",
  metaDescription:
    "Automatyzujemy awizacje dostaw do magazynu: rezerwacja okien rozładunkowych, potwierdzenia, przypomnienia, wymagane dane i informacja dla magazynu.",
  primaryKeyword: "system awizacji dostaw",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy logistyczne: awizacje",
    title: "Awizacje dostaw bez telefonów: rampa pracuje według planu",
    lead: "Awizacje w wielu magazynach to wciąż telefony, maile i arkusz z grafikiem rampy. Dostawcy przyjeżdżają bez zapowiedzi albo w tym samym czasie, magazyn nie wie, co przyjedzie, a kierowcy czekają w kolejce. Automatyzujemy awizacje: przewoźnicy i dostawcy rezerwują okna według grafiku, podają wymagane dane, dostają potwierdzenie i przypomnienie, a magazyn widzi plan przyjęć z wyprzedzeniem.",
    bullets: [
      "Rezerwacja okien według grafiku rampy",
      "Wymagane dane o dostawie przed przyjazdem",
      "Plan przyjęć dla magazynu z wyprzedzeniem",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Magazyny i centra dystrybucyjne z wieloma dostawami dziennie" },
    { label: "Co automatyzujemy", value: "Rezerwacje okien, dane o dostawach, potwierdzenia, przypomnienia, plan przyjęć" },
    { label: "Narzędzia", value: "Formularz lub portal, kalendarz rampy, WMS, poczta, SMS, n8n" },
    { label: "Zasada", value: "Zmiany i wyjątki zatwierdza magazyn" },
  ],
  symptoms: {
    title: "Kiedy awizacje warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, awizacje kosztują czas biura i magazynu.",
    items: [
      "Awizacje ustala się telefonicznie i mailowo, a grafik rampy jest w arkuszu.",
      "Dostawy przyjeżdżają bez awizacji albo kilka naraz.",
      "Magazyn nie wie z wyprzedzeniem, ile palet i jakiego towaru przyjedzie.",
      "Kierowcy czekają pod rampą, a przewoźnicy narzekają na przestoje.",
      "Brakuje danych o dostawie, np. numeru zamówienia, i przyjęcie się wydłuża.",
      "Nie wiadomo, którzy dostawcy najczęściej się spóźniają.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja awizacji",
    paragraphs: [
      "Przewoźnik lub dostawca rezerwuje okno przez prosty formularz albo portal, w którym widzi wolne terminy według grafiku rampy. Przy rezerwacji podaje wymagane dane: numer zamówienia lub zlecenia, liczbę palet, rodzaj towaru, numer rejestracyjny pojazdu i dane kontaktowe kierowcy. Jeśli woli mail, AI może odczytać prośbę o awizację z wiadomości i zaproponować wolne okna.",
      "Rezerwacja trafia do kalendarza rampy i do WMS, gdzie jest powiązana z oczekiwaną dostawą. Przewoźnik dostaje potwierdzenie, a przed przyjazdem przypomnienie z informacjami o wjeździe na teren magazynu. Magazyn widzi plan przyjęć na kolejne dni i może zaplanować obsadę.",
      "Zmiany terminu i spóźnienia są zgłaszane przez ten sam formularz albo wiadomość. Raport pokazuje wykorzystanie rampy, spóźnienia i dostawy bez awizacji, co pomaga w rozmowach z dostawcami i klientami.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja awizacji",
    lead: "Zakres dopasowujemy do liczby ramp, dostawców i zasad magazynu.",
    items: [
      { title: "Rezerwacja okien", body: "Wolne terminy według grafiku rampy i rodzaju dostawy." },
      { title: "Wymagane dane", body: "Numer zamówienia, palety, towar, pojazd i kierowca podane przy rezerwacji." },
      { title: "Awizacje z maili", body: "Prośby o awizację odczytane przez AI, z propozycją wolnych okien." },
      { title: "Potwierdzenia i przypomnienia", body: "Wiadomości dla przewoźnika mailem lub SMS-em." },
      { title: "Plan przyjęć", body: "Lista dostaw na kolejne dni dla magazynu, powiązana z WMS." },
      { title: "Zmiany i spóźnienia", body: "Zgłoszenia zmian terminu i informacja dla magazynu." },
      { title: "Zasady dla dostawców", body: "Limity okien, minimalne wyprzedzenie, wymagania dla rodzajów towaru." },
      { title: "Raport rampy", body: "Wykorzystanie, spóźnienia i dostawy bez awizacji." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od prośby o termin do rozładunku.",
    items: [
      {
        title: "Rezerwacja okna",
        trigger: "Przewoźnik wybiera termin w formularzu",
        steps: ["Sprawdzenie dostępności rampy i zasad dla towaru", "Zapis w kalendarzu i powiązanie z dostawą w WMS", "Potwierdzenie i przypomnienie przed przyjazdem"],
        result: "Magazyn wie, co i kiedy przyjedzie, a kierowca nie czeka w kolejce.",
      },
      {
        title: "Awizacja mailem",
        trigger: "Mail z prośbą o termin rozładunku",
        steps: ["AI odczytuje dane dostawy", "Propozycja wolnych okien w odpowiedzi", "Rezerwacja po wyborze terminu"],
        result: "Także przewoźnicy, którzy wolą mail, korzystają z grafiku rampy.",
      },
    ],
  },
  example: {
    title: "Awizacje przed i po automatyzacji",
    lead: "Przykład magazynu z kilkoma rampami i kilkudziesięcioma dostawami dziennie.",
    rows: [
      { label: "Rezerwacje", before: "Telefony i maile, grafik w arkuszu.", after: "Formularz z wolnymi oknami." },
      { label: "Dane o dostawie", before: "Często brak numeru zamówienia.", after: "Wymagane przy rezerwacji." },
      { label: "Plan", before: "Magazyn dowiaduje się w dniu dostawy.", after: "Plan przyjęć z wyprzedzeniem." },
      { label: "Kolejki", before: "Kilka aut naraz pod rampą.", after: "Dostawy rozłożone według grafiku." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od zasad i grafiku, a nowy sposób awizacji wprowadzamy stopniowo dla dostawców.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś wyglądają awizacje, grafik rampy i przyjęcia w WMS.", fromYou: "Rozmowa z kierownikiem magazynu i obecny grafik." },
      { title: "Zasady i projekt", duration: "około tygodnia", body: "Ustalamy okna, limity, wymagane dane, treści wiadomości i powiązanie z WMS.", fromYou: "Akceptacja zasad dla dostawców." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy formularz i przepływy, testujemy je z kilkoma przewoźnikami.", fromYou: "Wybór przewoźników do testu." },
      { title: "Start i opieka", duration: "stale", body: "Wprowadzamy awizacje dla wszystkich dostawców i rozwijamy raporty.", fromYou: "Informacja dla dostawców o nowych zasadach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od formularza i kalendarza, a powiązanie z WMS dodać później.",
    items: [
      { name: "Rezerwacja okien", description: "Dla magazynów, które chcą skończyć z telefonami.", includes: ["Formularz z wolnymi oknami", "Wymagane dane o dostawie", "Potwierdzenia i przypomnienia", "Kalendarz rampy"] },
      { name: "Awizacje i magazyn", description: "Dla magazynów, które chcą planować przyjęcia.", includes: ["Wszystko z wariantu Rezerwacja okien", "Powiązanie z dostawami w WMS", "Plan przyjęć", "Zmiany i spóźnienia"] },
      { name: "Pełne awizacje", description: "Dla magazynów z wieloma dostawcami i przewoźnikami.", includes: ["Wszystko z wariantu Awizacje i magazyn", "Awizacje z maili z pomocą AI", "Zasady dla dostawców", "Raport rampy"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba ramp i zasad dla rodzajów dostaw,",
      "liczba dostawców i przewoźników,",
      "powiązanie z WMS,",
      "kanały komunikacji, np. mail, SMS,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Przewoźnicy nie będą korzystać z formularza.", mitigation: "Formularz jest prosty i działa na telefonie, a awizacje z maili też trafiają do grafiku." },
      { risk: "Grafik nie uwzględni realnych możliwości rampy.", mitigation: "Długość okien i limity ustalamy z magazynem i korygujemy po pierwszych tygodniach." },
      { risk: "Dostawa przyjedzie bez awizacji.", mitigation: "Magazyn może dodać dostawę ręcznie, a raport pokazuje, którzy dostawcy nie awizują." },
      { risk: "Pilne dostawy poza grafikiem.", mitigation: "Magazyn może zarezerwować okno awaryjne lub zatwierdzić wyjątek." },
    ],
  },
  faq: [
    { question: "Czy przewoźnicy muszą zakładać konto?", answer: "Nie muszą. Wystarczy prosty formularz z linkiem. Konta i portal przydają się przy stałych dostawcach, którzy awizują często." },
    { question: "Czy awizacje mogą przychodzić mailem?", answer: "Tak. AI odczytuje prośbę o awizację z maila i proponuje wolne okna, a rezerwacja trafia do tego samego grafiku." },
    { question: "Czy to połączy się z naszym WMS?", answer: "Jeśli WMS ma API lub import danych, awizacje mogą być powiązane z oczekiwanymi dostawami. Sprawdzamy to przy przeglądzie." },
    { question: "Czy kierowcy dostaną przypomnienie SMS-em?", answer: "Tak, jeśli korzystacie z bramki SMS. Przypomnienie może zawierać informacje o wjeździe na teren magazynu." },
    { question: "Czy to działa dla wysyłek, a nie tylko dostaw?", answer: "Tak. Okna załadunku dla przewoźników odbierających towar można obsłużyć w ten sam sposób." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-logistyki", "automatyzacja-oraz-ai-w-niestandardowych-procesach", "integracje-systemow"],
  relatedProcessSlugs: ["umawianie-wizyt"],
  relatedToolSlugs: ["n8n", "airtable", "microsoft-365"],
  relatedArticleSlugs: ["airtable-w-praktyce-zastosowania", "gotowa-automatyzacja-czy-budowana-od-zera", "5-procesow-do-automatyzacji-w-malej-firmie"],
};
