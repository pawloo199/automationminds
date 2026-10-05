import type { ToolSubpageContent } from "../types";

export const n8nOpieka: ToolSubpageContent = {
  toolSlug: "n8n",
  slug: "opieka",
  name: "Opieka i pomoc n8n",
  excerpt: "Audyt, naprawa i stała opieka nad przepływami n8n, które już działają w firmie.",
  metaTitle: "Pomoc n8n: audyt, naprawa i opieka nad przepływami",
  metaDescription:
    "Przejmujemy opiekę nad n8n: audyt instalacji i przepływów, naprawa błędów, porządki, monitoring i rozwój. Pomoc n8n dla firm, także po innych wykonawcach.",
  primaryKeyword: "pomoc n8n",
  updatedAt: "2026-10-05",
  hero: {
    eyebrow: "Wsparcie n8n",
    title: "Pomoc n8n: audyt, naprawa i stała opieka nad przepływami",
    lead: "Macie w firmie n8n, ale przepływy przestają działać, nikt nie wie, jak są zbudowane, albo osoba, która je stworzyła, już u was nie pracuje? Sprawdzamy instalację i przepływy, naprawiamy to, co nie działa, i przejmujemy opiekę, żeby automatyzacje znowu były pewne.",
    bullets: [
      "Audyt instalacji i przepływów",
      "Naprawa błędów i porządki",
      "Stała opieka z monitoringiem",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy, które mają n8n i potrzebują kogoś, kto o nie zadba" },
    { label: "Od czego zaczynamy", value: "Od audytu instalacji i przepływów" },
    { label: "Czas audytu", value: "Zwykle kilka dni roboczych" },
    { label: "Po waszej stronie", value: "Dostęp do n8n i krótka rozmowa o tym, co jest ważne" },
  ],
  symptoms: {
    title: "Kiedy warto poprosić o pomoc z n8n",
    lead: "Jeśli rozpoznajecie u siebie choć jeden z tych sygnałów, przepływy wymagają uwagi, zanim zawiodą w ważnym momencie.",
    items: [
      "Przepływy kończą się błędami, a o problemie dowiadujecie się od klienta lub zespołu.",
      "Osoba, która zbudowała przepływy, odeszła z firmy albo zakończyła współpracę.",
      "Nikt nie wie, które przepływy są ważne, a które to pozostałość po testach.",
      "n8n nie było aktualizowane od dawna, bo wszyscy boją się, że coś przestanie działać.",
      "Przepływy działają coraz wolniej albo serwer co jakiś czas przestaje odpowiadać.",
      "Chcecie rozwijać automatyzacje, ale bez porządku w tym, co już jest, każda zmiana jest ryzykowna.",
    ],
  },
  intro: {
    title: "Na czym polega opieka nad n8n",
    paragraphs: [
      "n8n łatwo zacząć używać. Pierwsze przepływy powstają szybko, często budowane przez jedną osobę w firmie albo zewnętrznego wykonawcę. Problemy pojawiają się później: zmienia się API jakiegoś systemu, wygasa dostęp, przybywa danych, a przepływy zbudowane bez obsługi błędów przestają działać po cichu.",
      "Opieka zaczyna się od audytu. Sprawdzamy instalację, przepływy, dane dostępowe i sposób obsługi błędów. Dostajecie listę tego, co działa, co jest zagrożone i co warto poprawić, z priorytetami.",
      "Potem naprawiamy to, co pilne, porządkujemy resztę i, jeśli chcecie, przejmujemy stałą opiekę: monitoring, aktualizacje, reakcję na błędy i rozwój kolejnych przepływów. Pracujemy na waszej instalacji, niezależnie od tego, kto ją wcześniej zbudował.",
    ],
  },
  scope: {
    title: "Co obejmuje pomoc i opieka",
    lead: "Zakres dobieramy do stanu instalacji i tego, jak ważne są dla was przepływy.",
    items: [
      { title: "Audyt instalacji", body: "Wersja n8n, baza danych, kopie zapasowe, bezpieczeństwo, zasoby serwera." },
      { title: "Audyt przepływów", body: "Lista przepływów z oceną: co jest ważne, co nieużywane, gdzie brakuje obsługi błędów." },
      { title: "Naprawa błędów", body: "Usunięcie przyczyn błędów, a nie tylko ponowne uruchomienie przepływu." },
      { title: "Porządki", body: "Nazwy, opisy, wspólne podprzepływy, usunięcie duplikatów i nieużywanych przepływów." },
      { title: "Obsługa błędów", body: "Przepływy obsługujące błędy, ponawianie i powiadomienia trafiające do właściwej osoby." },
      { title: "Monitoring", body: "Alert o błędzie przepływu lub awarii serwera, zanim zauważy to klient." },
      { title: "Aktualizacje", body: "Regularne aktualizacje n8n po sprawdzeniu zmian i testach." },
      { title: "Rozwój", body: "Nowe przepływy i zmiany w istniejących, budowane według tych samych zasad." },
    ],
  },
  example: {
    title: "Instalacja n8n przed i po przejęciu opieki",
    lead: "Przykład firmy handlowej, w której przepływy zbudował zewnętrzny wykonawca, a współpraca się zakończyła.",
    rows: [
      { label: "Wiedza", before: "Nikt w firmie nie wie, jak działają przepływy.", after: "Lista przepływów z opisem, właścicielem i znaczeniem dla firmy." },
      { label: "Błędy", before: "Wykrywane przez klientów i handlowców.", after: "Alert trafia do opiekuna od razu, z informacją, co się stało." },
      { label: "Aktualizacje", before: "n8n w wersji sprzed wielu miesięcy.", after: "Aktualna wersja, aktualizowana po testach." },
      { label: "Bezpieczeństwo", before: "Wspólne konto administratora i stare dostępy.", after: "Osobne konta, uporządkowane dane dostępowe." },
      { label: "Zmiany", before: "Każda zmiana grozi awarią innego przepływu.", after: "Zmiany testowane przed wdrożeniem, z możliwością powrotu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po audycie waszej instalacji.",
  },
  implementation: {
    title: "Jak przebiega przejęcie opieki",
    lead: "Cztery kroki, po każdym wiecie, co zostało zrobione. Przy każdym piszemy, czego potrzebujemy od was.",
    phases: [
      {
        title: "Rozmowa",
        duration: "30 minut",
        body: "Dowiadujemy się, co działa na n8n, które przepływy są najważniejsze i jakie macie problemy.",
        fromYou: "Krótka rozmowa i informacja, kto w firmie korzysta z przepływów.",
      },
      {
        title: "Audyt",
        duration: "kilka dni",
        body: "Przeglądamy instalację i przepływy. Dostajecie raport z oceną stanu, listą ryzyk i propozycją kolejnych kroków z wyceną.",
        fromYou: "Dostęp do n8n, a przy self-hostingu także do serwera.",
      },
      {
        title: "Naprawa i porządki",
        duration: "zależnie od stanu",
        body: "Naprawiamy to, co pilne, dodajemy obsługę błędów i monitoring, porządkujemy przepływy i dokumentujemy je.",
        fromYou: "Akceptacja zakresu i osoba, która potwierdza, że przepływy działają jak trzeba.",
      },
      {
        title: "Stała opieka",
        duration: "stale",
        body: "Monitorujemy działanie, aktualizujemy n8n, reagujemy na błędy i rozwijamy przepływy w uzgodnionym zakresie.",
        fromYou: "Informacja o zmianach w systemach, z którymi łączy się n8n.",
      },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Możecie zacząć od samego audytu i zdecydować o dalszych krokach po zapoznaniu się z raportem.",
    items: [
      {
        name: "Audyt",
        description: "Dla firm, które chcą wiedzieć, w jakim stanie jest ich n8n.",
        includes: [
          "Przegląd instalacji i bezpieczeństwa",
          "Lista przepływów z oceną",
          "Raport z ryzykami i priorytetami",
          "Wycena naprawy i opieki",
        ],
      },
      {
        name: "Naprawa i porządki",
        description: "Dla firm, w których przepływy już sprawiają problemy.",
        includes: [
          "Wszystko z wariantu Audyt",
          "Naprawa błędów u źródła",
          "Obsługa błędów i powiadomienia",
          "Uporządkowanie i dokumentacja przepływów",
          "Aktualizacja n8n",
        ],
      },
      {
        name: "Stała opieka",
        description: "Dla firm, w których przepływy są ważne dla codziennej pracy.",
        includes: [
          "Monitoring przepływów i serwera",
          "Reakcja na błędy w ustalonym czasie",
          "Regularne aktualizacje i kopie zapasowe",
          "Ustalona pula godzin na zmiany i rozwój",
          "Okresowy przegląd przepływów",
        ],
      },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Audyt wyceniamy przed startem, a naprawę i opiekę po audycie, gdy znamy stan instalacji. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba i złożoność przepływów,",
      "stan instalacji: wersja, baza, kopie, bezpieczeństwo,",
      "liczba systemów, z którymi łączą się przepływy,",
      "oczekiwany czas reakcji na błędy,",
      "zakres zmian i rozwoju przy stałej opiece.",
    ],
  },
  risks: {
    title: "Na co uważamy przy przejęciu",
    items: [
      { risk: "Naprawa jednego przepływu zepsuje inny.", mitigation: "Przed zmianami robimy kopię, a poprawki testujemy na kopii przepływu, zanim trafią do działającej wersji." },
      { risk: "Brakuje dostępów do systemów, z którymi łączą się przepływy.", mitigation: "W audycie sprawdzamy wszystkie dane dostępowe i wskazujemy, które trzeba odnowić lub przenieść na konta firmowe." },
      { risk: "Przepływy przetwarzają dane osobowe bez kontroli.", mitigation: "Sprawdzamy, jakie dane przechodzą przez n8n, gdzie są zapisywane i jak długo, a opiekę opieramy na umowie powierzenia danych." },
      { risk: "Aktualizacja n8n zmieni działanie przepływów.", mitigation: "Czytamy listę zmian, testujemy aktualizację i możemy szybko wrócić do poprzedniej wersji." },
    ],
  },
  faq: [
    { question: "Czy pomożecie z n8n zbudowanym przez kogoś innego?", answer: "Tak, to częsta sytuacja. Zaczynamy od audytu, żeby zrozumieć, jak działają przepływy, a potem naprawiamy, porządkujemy i dokumentujemy to, co jest potrzebne." },
    { question: "Mamy jeden przepływ, który przestał działać. Czy to też do was?", answer: "Tak. Pojedynczy błąd naprawimy bez długiej współpracy. Przy okazji powiemy, czy w instalacji są inne rzeczy, które warto poprawić." },
    { question: "Czy obsługujecie n8n Cloud i wersję na własnym serwerze?", answer: "Tak, obie. Przy n8n Cloud skupiamy się na przepływach, a przy wersji self-hosted także na serwerze, kopiach i aktualizacjach." },
    { question: "Jak szybko reagujecie na błędy?", answer: "Czas reakcji ustalamy w umowie stałej opieki, zależnie od tego, jak ważne są przepływy. Dzięki monitoringowi o błędzie zwykle wiemy, zanim zgłosi go ktoś z firmy." },
    { question: "Czy po audycie musimy podpisać umowę na opiekę?", answer: "Nie. Raport z audytu jest wasz i możecie z nim zrobić, co chcecie, także naprawić wszystko samodzielnie." },
    { question: "Czy możecie przy okazji zbudować nowe przepływy?", answer: "Tak. W stałej opiece jest pula godzin na zmiany i rozwój, a większe projekty wyceniamy osobno." },
    { question: "Czy jesteście partnerem n8n?", answer: "Nie. Jesteśmy niezależnymi specjalistami od automatyzacji i pracujemy w n8n na co dzień." },
  ],
  relatedServiceSlugs: ["automatyzacja-oraz-ai-w-niestandardowych-procesach", "integracje-systemow", "audyt-procesow-biznesowych"],
  relatedArticleSlugs: ["n8n-co-to-jest", "bledy-przy-pierwszym-wdrozeniu-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
