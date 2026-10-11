import type { IndustryPageContent } from "../types";

export const spedycjaWeryfikacjaPrzewoznikow: IndustryPageContent = {
  industrySlug: "spedycja",
  subSlug: "weryfikacja-przewoznikow",
  name: "Weryfikacja przewoźników",
  excerpt: "Dane z rejestrów, biała lista VAT, dokumenty i ubezpieczenie przewoźnika sprawdzane w jednym miejscu przed zleceniem.",
  metaTitle: "Weryfikacja przewoźników w spedycji: automatyzacja",
  metaDescription:
    "Automatyzujemy weryfikację przewoźników: dane z rejestrów i biała lista VAT, dokumenty i polisa OCP z terminami ważności, baza sprawdzonych przewoźników.",
  primaryKeyword: "weryfikacja przewoźników",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Spedycja: weryfikacja przewoźników",
    title: "Weryfikacja przewoźników w jednym miejscu, zanim wyślecie zlecenie",
    lead: "Zlecenie dla nieznanego przewoźnika to ryzyko: od niedopełnionych formalności po próby oszustwa, w których ktoś podszywa się pod prawdziwą firmę. Sprawdzenie przewoźnika wymaga zajrzenia do kilku rejestrów i dokumentów, a w pośpiechu łatwo coś pominąć. Automatyzujemy tę pracę: dane przewoźnika są sprawdzane w jednym miejscu, dokumenty mają pilnowane terminy ważności, a spedytor widzi wynik przed zleceniem.",
    bullets: [
      "Dane z rejestrów i biała lista VAT automatycznie",
      "Dokumenty i polisa OCP z terminami ważności",
      "Baza przewoźników sprawdzonych i oznaczonych",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy spedycyjne pracujące z wieloma przewoźnikami, także z giełd transportowych" },
    { label: "Co automatyzujemy", value: "Sprawdzenie danych, dokumentów, terminów ważności i historii współpracy" },
    { label: "Narzędzia", value: "Publiczne rejestry, biała lista VAT, baza przewoźników, n8n" },
    { label: "Zasada", value: "System sprawdza, spedytor decyduje o współpracy" },
  ],
  symptoms: {
    title: "Kiedy weryfikację przewoźników warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, sprawdzanie przewoźników zależy od pośpiechu i pamięci.",
    items: [
      "Każdy spedytor sprawdza przewoźników po swojemu, a część kroków bywa pomijana.",
      "Dokumenty przewoźników, np. polisy i licencje, są w mailach, a terminy ważności nikt nie pilnuje.",
      "Nie ma wspólnej bazy przewoźników z historią współpracy i uwagami.",
      "Rachunek do zapłaty dla przewoźnika nie jest sprawdzany na białej liście VAT.",
      "Firma spotkała się już z próbą podszycia się pod przewoźnika.",
      "Sprawdzenie nowego przewoźnika trwa długo, gdy liczy się czas na podstawienie auta.",
    ],
  },
  intro: {
    title: "Jak działa automatyczna weryfikacja przewoźników",
    paragraphs: [
      "Spedytor wpisuje NIP przewoźnika albo system odczytuje go z oferty lub dokumentów. Automatyzacja pobiera dane z publicznych rejestrów, sprawdza status podatnika VAT i rachunek na białej liście, porównuje dane kontaktowe z tymi, które przewoźnik podał, i sprawdza historię współpracy w bazie firmy.",
      "Dokumenty przewoźnika, takie jak licencja, polisa OCP czy zaświadczenia, trafiają do bazy przewoźników. AI może odczytać z nich zakres i terminy ważności, a system przypomina o zbliżającym się końcu ważności i oznacza przewoźnika, jeśli dokument wygasł.",
      "Wynik weryfikacji spedytor widzi w jednym miejscu: co jest w porządku, czego brakuje, co budzi wątpliwości. Decyzja o współpracy zostaje przy nim. Automatyzacja nie wykryje każdego oszustwa, ale sprawia, że podstawowe kontrole są wykonywane zawsze i tak samo.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja weryfikacji",
    lead: "Zakres kontroli ustalamy z firmą, zgodnie z jej procedurami.",
    items: [
      { title: "Dane z rejestrów", body: "Nazwa, adres, forma prawna i status firmy z publicznych rejestrów." },
      { title: "Biała lista VAT", body: "Status podatnika i rachunek do zapłaty sprawdzone przed zleceniem i przed płatnością." },
      { title: "Dokumenty przewoźnika", body: "Licencja, polisa OCP i inne dokumenty w bazie, z odczytanym zakresem i terminem." },
      { title: "Terminy ważności", body: "Przypomnienia przed wygaśnięciem i oznaczenie przewoźnika po terminie." },
      { title: "Spójność danych", body: "Porównanie adresu mailowego, telefonu i rachunku z danymi w bazie i rejestrach." },
      { title: "Historia współpracy", body: "Zlecenia, problemy, reklamacje i uwagi spedytorów przy przewoźniku." },
      { title: "Lista przewoźników sprawdzonych", body: "Przewoźnicy po pełnej weryfikacji, do szybkiego wyboru." },
      { title: "Ślad weryfikacji", body: "Zapis, kto i kiedy sprawdził przewoźnika i z jakim wynikiem." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od nowego przewoźnika do decyzji o zleceniu.",
    items: [
      {
        title: "Nowy przewoźnik",
        trigger: "Spedytor wpisuje NIP lub system odczytuje go z oferty",
        steps: ["Dane z rejestrów i biała lista VAT", "Porównanie danych kontaktowych i rachunku", "Lista dokumentów do uzupełnienia i wynik weryfikacji"],
        result: "Spedytor widzi wynik w jednym miejscu, zanim wyśle zlecenie.",
      },
      {
        title: "Wygasająca polisa",
        trigger: "Zbliża się koniec ważności polisy OCP przewoźnika",
        steps: ["Prośba do przewoźnika o aktualną polisę", "Przypomnienie dla spedytora", "Oznaczenie przewoźnika po terminie"],
        result: "Zlecenia nie trafiają do przewoźników bez ważnego ubezpieczenia.",
      },
    ],
  },
  example: {
    title: "Weryfikacja przed i po automatyzacji",
    lead: "Przykład firmy, która część przewoźników pozyskuje z giełd transportowych.",
    rows: [
      { label: "Sprawdzenie", before: "Kilka stron i rejestrów, każdy spedytor inaczej.", after: "Jedna weryfikacja według procedury firmy." },
      { label: "Dokumenty", before: "W mailach, bez kontroli terminów.", after: "W bazie, z przypomnieniami." },
      { label: "Rachunek", before: "Sprawdzany przy płatności albo wcale.", after: "Sprawdzany przed zleceniem i przed płatnością." },
      { label: "Historia", before: "W pamięci spedytorów.", after: "Przy przewoźniku, dostępna dla zespołu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od opisania procedury weryfikacji, a potem ją automatyzujemy.",
    phases: [
      { title: "Procedura", duration: "kilka dni", body: "Spisujemy z wami, co należy sprawdzić przed zleceniem i jakie dokumenty są wymagane.", fromYou: "Obecne zasady i doświadczenia z problemowymi przewoźnikami." },
      { title: "Baza przewoźników", duration: "1–2 tygodnie", body: "Porządkujemy dane przewoźników i dokumenty w jednej bazie.", fromYou: "Eksport obecnej listy przewoźników i dokumenty." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy weryfikację i przypomnienia, testujemy na nowych przewoźnikach.", fromYou: "Spedytorzy oceniający wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy weryfikację dla całego zespołu i aktualizujemy ją przy zmianach procedur.", fromYou: "Informacja o zmianach procedur." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od sprawdzania danych, a bazę dokumentów dodać później.",
    items: [
      { name: "Szybka weryfikacja", description: "Dla firm, które chcą sprawdzać przewoźników zawsze tak samo.", includes: ["Dane z rejestrów", "Biała lista VAT", "Porównanie danych kontaktowych", "Ślad weryfikacji"] },
      { name: "Baza przewoźników", description: "Dla firm, które chcą panować nad dokumentami.", includes: ["Wszystko z wariantu Szybka weryfikacja", "Dokumenty z terminami ważności", "Przypomnienia", "Historia współpracy"] },
      { name: "Weryfikacja w procesie", description: "Dla firm, które chcą połączyć weryfikację ze zleceniami i płatnościami.", includes: ["Wszystko z wariantu Baza przewoźników", "Kontrola przed wysłaniem zlecenia", "Kontrola rachunku przed płatnością", "Raport dla kierownika"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "zakres kontroli w procedurze firmy,",
      "liczba przewoźników i stan obecnej bazy,",
      "odczyt dokumentów z AI,",
      "połączenie ze zleceniami, TMS i płatnościami,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Automatyczna weryfikacja da fałszywe poczucie bezpieczeństwa.", mitigation: "Wynik pokazuje, co sprawdzono, a czego nie. Decyzja i ostrożność zostają przy spedytorze." },
      { risk: "Rejestr lub usługa jest niedostępna.", mitigation: "Brak wyniku jest wyraźnie oznaczony, a weryfikację można powtórzyć lub wykonać ręcznie." },
      { risk: "Oszust podszywa się pod prawdziwego przewoźnika.", mitigation: "Porównujemy dane kontaktowe i rachunek z danymi w bazie i rejestrach, a niezgodności oznaczamy do wyjaśnienia." },
      { risk: "Nieaktualne dokumenty w bazie.", mitigation: "Terminy ważności są pilnowane automatycznie, a przewoźnik po terminie jest oznaczany." },
    ],
  },
  faq: [
    { question: "Jakie rejestry sprawdzacie?", answer: "Publiczne rejestry firm i białą listę podatników VAT, a dodatkowo inne źródła, które firma uwzględnia w swojej procedurze, jeśli udostępniają dane, z których może korzystać automatyzacja." },
    { question: "Czy automatyzacja wykryje każde oszustwo?", answer: "Nie. Sprawia, że podstawowe kontrole są wykonywane zawsze i tak samo, a niezgodności są widoczne. Ostrożność i decyzja zostają przy spedytorze." },
    { question: "Czy AI odczyta polisę OCP?", answer: "Tak, odczyta zakres, sumę ubezpieczenia i termin ważności, które trafiają do bazy do sprawdzenia przez spedytora." },
    { question: "Czy weryfikacja działa dla przewoźników zagranicznych?", answer: "Częściowo. Dla przewoźników z UE można sprawdzić m.in. numer VAT w systemie VIES. Zakres dla innych krajów ustalamy indywidualnie." },
    { question: "Gdzie przechowywana jest baza przewoźników?", answer: "W systemie, którego używacie, np. w TMS, Airtable lub Microsoft 365. Nie przenosimy danych do nowych usług bez potrzeby." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-logistyki", "projektowanie-baz-danych", "ai-w-obsludze-dokumentow"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych"],
  relatedToolSlugs: ["n8n", "airtable", "microsoft-365"],
  relatedArticleSlugs: ["jak-sprawdzic-przewoznika", "co-zautomatyzowac-w-spedycji", "airtable-w-praktyce-zastosowania"],
};
