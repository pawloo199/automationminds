import type { IndustryPageContent } from "../types";

export const firmySerwisowePlanowanieWizyt: IndustryPageContent = {
  industrySlug: "firmy-serwisowe",
  subSlug: "planowanie-wizyt",
  name: "Planowanie wizyt serwisantów",
  excerpt: "Grafik serwisantów według pilności, umiejętności i lokalizacji, propozycje terminów dla klientów, zmiany w ciągu dnia i informacje dla klientów.",
  metaTitle: "Planowanie pracy serwisantów: grafik i terminy wizyt",
  metaDescription:
    "Automatyzujemy planowanie pracy serwisantów: grafik według umiejętności i lokalizacji, propozycje terminów, potwierdzenia, zmiany w ciągu dnia.",
  primaryKeyword: "planowanie pracy serwisantów",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Firmy serwisowe: planowanie wizyt",
    title: "Grafik serwisantów, który nie rozpada się po pierwszej awarii",
    lead: "Rano grafik jest gotowy, o dziesiątej przychodzi pilna awaria, o jedenastej klient odwołuje wizytę, a serwisant utknął w korku. Dyspozytor przestawia wszystko ręcznie i dzwoni do klientów. Automatyzujemy planowanie wizyt: system podpowiada terminy według pilności, umiejętności i lokalizacji serwisantów, klienci potwierdzają wizyty sami, a zmiany trafiają do wszystkich zainteresowanych.",
    bullets: [
      "Propozycje terminów według pilności, umiejętności i lokalizacji",
      "Potwierdzenia i przypomnienia dla klientów",
      "Zmiany w ciągu dnia bez dzwonienia do wszystkich",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy serwisowe i instalacyjne z kilkoma lub kilkudziesięcioma serwisantami" },
    { label: "Co automatyzujemy", value: "Grafik, terminy, potwierdzenia, przypomnienia, zmiany, informacje" },
    { label: "Narzędzia", value: "Kalendarze, baza zleceń, SMS, mapy, n8n" },
    { label: "Zasada", value: "Ostateczny grafik ustala dyspozytor" },
  ],
  symptoms: {
    title: "Kiedy planowanie warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, dyspozytor gasi pożary zamiast planować.",
    items: [
      "Grafik powstaje w arkuszu lub na tablicy i zmienia się kilka razy dziennie.",
      "Serwisanci jeżdżą przez całe miasto między wizytami.",
      "Do zlecenia jedzie serwisant bez potrzebnych uprawnień lub doświadczenia.",
      "Klienci nie są w domu, bo zapomnieli o wizycie.",
      "Każdą zmianę trzeba przekazać telefonicznie serwisantowi i klientowi.",
      "Nie wiadomo, ile zleceń realnie wykonuje serwisant dziennie.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja planowania",
    paragraphs: [
      "Każdy serwisant ma w systemie swoje umiejętności, uprawnienia, obszar pracy i kalendarz. Każde zlecenie ma pilność, przewidywany czas, wymagane umiejętności i adres. Na tej podstawie system podpowiada dyspozytorowi, kto i kiedy może pojechać, uwzględniając odległości między wizytami.",
      "Klient dostaje propozycję terminów i potwierdza jeden z nich, a dzień wcześniej przypomnienie z informacją, kto przyjedzie. Rano serwisant ma listę zleceń z adresami, danymi urządzeń i historią.",
      "Gdy pojawia się pilna awaria albo klient odwołuje wizytę, system podpowiada zmiany, a po akceptacji dyspozytora informuje serwisanta i klientów, których zmiana dotyczy. Ostateczny grafik zawsze ustala dyspozytor.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja planowania",
    lead: "Zakres dopasowujemy do liczby serwisantów i rodzaju zleceń.",
    items: [
      { title: "Profile serwisantów", body: "Umiejętności, uprawnienia, obszar i kalendarz." },
      { title: "Podpowiedzi terminów", body: "Według pilności, umiejętności i odległości." },
      { title: "Wybór terminu przez klienta", body: "Klient potwierdza jeden z proponowanych terminów." },
      { title: "Przypomnienia", body: "Dzień wcześniej, z informacją, kto przyjedzie." },
      { title: "Plan dnia serwisanta", body: "Lista zleceń z adresami, urządzeniami i historią." },
      { title: "Zmiany w ciągu dnia", body: "Podpowiedzi przy awariach i odwołaniach." },
      { title: "Informacje o spóźnieniu", body: "Klient dostaje wiadomość, gdy serwisant się spóźnia." },
      { title: "Raport wykorzystania", body: "Zlecenia i czas pracy według serwisantów." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od zlecenia do wizyty.",
    items: [
      {
        title: "Nowe zlecenie",
        trigger: "Zgłoszenie gotowe do zaplanowania",
        steps: ["Podpowiedź serwisantów z umiejętnościami i wolnym czasem w okolicy", "Propozycja terminów dla klienta", "Potwierdzenie i wizyta w kalendarzu serwisanta"],
        result: "Termin ustalony bez kilku telefonów.",
      },
      {
        title: "Pilna awaria w ciągu dnia",
        trigger: "Zgłoszenie oznaczone jako pilne",
        steps: ["Podpowiedź najbliższego serwisanta z umiejętnościami", "Akceptacja dyspozytora", "Informacja dla klientów przesuniętych wizyt"],
        result: "Zmiana w grafiku bez dzwonienia do wszystkich.",
      },
    ],
  },
  example: {
    title: "Planowanie przed i po automatyzacji",
    lead: "Przykład firmy z kilkunastoma serwisantami w jednym województwie.",
    rows: [
      { label: "Grafik", before: "Arkusz i telefony.", after: "Podpowiedzi i akceptacja dyspozytora." },
      { label: "Dojazdy", before: "Przez całe miasto.", after: "Wizyty pogrupowane według okolicy." },
      { label: "Klienci", before: "Zapominają o wizycie.", after: "Potwierdzenie i przypomnienie." },
      { label: "Zmiany", before: "Telefon do każdego.", after: "Automatyczne informacje po akceptacji." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od profili serwisantów i przypomnień dla klientów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś powstaje grafik i jakie zasady stosuje dyspozytor.", fromYou: "Rozmowa z dyspozytorem." },
      { title: "Dane i zasady", duration: "1–2 tygodnie", body: "Przygotowujemy profile serwisantów i zasady planowania.", fromYou: "Weryfikacja profili." },
      { title: "Budowa i test", duration: "zwykle 3–4 tygodnie", body: "Budujemy podpowiedzi i powiadomienia, testujemy je z częścią zespołu.", fromYou: "Dyspozytor i serwisanci w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy cały zespół i dopracowujemy zasady.", fromYou: "Uwagi dyspozytora." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od potwierdzeń i przypomnień.",
    items: [
      { name: "Potwierdzenia", description: "Dla firm, które chcą ograniczyć nieudane wizyty.", includes: ["Propozycje terminów dla klienta", "Potwierdzenia", "Przypomnienia", "Plan dnia serwisanta"] },
      { name: "Planowanie", description: "Dla firm z wieloma serwisantami.", includes: ["Wszystko z wariantu Potwierdzenia", "Profile serwisantów", "Podpowiedzi terminów", "Grupowanie według okolicy"] },
      { name: "Planowanie na bieżąco", description: "Dla firm z dużą liczbą pilnych zleceń.", includes: ["Wszystko z wariantu Planowanie", "Zmiany w ciągu dnia", "Informacje o spóźnieniu", "Raport wykorzystania"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba serwisantów i zleceń,",
      "złożoność zasad planowania,",
      "integracja z kalendarzami i programem serwisowym,",
      "kanały powiadomień,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Podpowiedź pominie ważną okoliczność.", mitigation: "Ostateczny grafik ustala dyspozytor, który zna sytuację." },
      { risk: "Klient nie potwierdzi terminu.", mitigation: "Przypomnienie, a potem telefon dyspozytora." },
      { risk: "Serwisanci poczują się kontrolowani.", mitigation: "Zasady i zakres danych ustalamy z zespołem, a lokalizacji nie śledzimy bez potrzeby i zgody." },
      { risk: "Zbyt optymistyczne czasy wizyt.", mitigation: "Czasy uczymy się na podstawie protokołów i korygujemy." },
    ],
  },
  faq: [
    { question: "Czy system sam ułoży grafik?", answer: "Podpowiada terminy i zmiany. Ostateczny grafik zatwierdza dyspozytor." },
    { question: "Czy śledzicie lokalizację serwisantów?", answer: "Nie jest to konieczne. Wystarczy adres zlecenia i plan dnia. Jeśli firma korzysta z lokalizacji, robimy to zgodnie z zasadami i zgodą pracowników." },
    { question: "Czy klient może sam wybrać termin?", answer: "Tak, spośród terminów zaproponowanych przez system i zatwierdzonych przez firmę." },
    { question: "Czy działa to z kalendarzami Google lub Microsoft?", answer: "Tak, plan dnia może trafiać do kalendarzy, z których korzystacie." },
    { question: "Czy zobaczymy, ile zleceń wykonuje serwisant?", answer: "Tak, raport pokazuje zlecenia i czas pracy według serwisantów." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-firm-uslugowych", "automatyzacja-w-obsludze-klienta", "integracje-systemow"],
  relatedProcessSlugs: ["umawianie-wizyt"],
  relatedToolSlugs: ["google-workspace", "microsoft-365", "n8n"],
  relatedArticleSlugs: ["program-do-zarzadzania-serwisem", "co-zautomatyzowac-w-firmie-serwisowej", "5-procesow-do-automatyzacji-w-malej-firmie"],
};
