import type { IndustryPageContent } from "../types";

export const spedycjaZapytaniaIWyceny: IndustryPageContent = {
  industrySlug: "spedycja",
  subSlug: "zapytania-i-wyceny",
  name: "Zapytania i wyceny frachtu",
  excerpt: "Zapytania od klientów odczytane z maili, historia podobnych tras i szybka wycena przygotowana do zatwierdzenia przez spedytora.",
  metaTitle: "Automatyzacja zapytań i wycen frachtu w spedycji",
  metaDescription:
    "Automatyzujemy obsługę zapytań transportowych: odczyt zapytań z maili przez AI, historia podobnych tras, propozycja ceny i szybka odpowiedź do klienta.",
  primaryKeyword: "wycena frachtu automatyzacja",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Spedycja: zapytania i wyceny",
    title: "Zapytania i wyceny frachtu: szybciej do klienta, bez przepisywania maili",
    lead: "W spedycji często wygrywa ten, kto odpowie pierwszy. Tymczasem zapytania przychodzą mailem w różnych formatach i językach, a spedytor przepisuje je do arkusza lub TMS, szuka podobnych tras w historii i dopiero wtedy liczy cenę. Automatyzujemy tę drogę: AI odczytuje zapytanie, system pokazuje historię podobnych tras i propozycję ceny, a spedytor zatwierdza wycenę i wysyła odpowiedź.",
    bullets: [
      "Zapytania z maili odczytane w dowolnym języku",
      "Historia podobnych tras i propozycja ceny",
      "Szkic odpowiedzi do klienta gotowy do wysłania",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Firmy spedycyjne obsługujące wiele zapytań dziennie, w tym spoza stałych klientów" },
    { label: "Co automatyzujemy", value: "Odczyt zapytań, rejestr zapytań, historię tras, propozycje cen, odpowiedzi" },
    { label: "Narzędzia", value: "Poczta, TMS lub baza zapytań, model AI, n8n" },
    { label: "Zasada", value: "Cenę zatwierdza spedytor" },
  ],
  symptoms: {
    title: "Kiedy zapytania i wyceny warto zautomatyzować",
    lead: "Jeśli te sytuacje są codziennością, firma prawdopodobnie traci zlecenia przez czas odpowiedzi.",
    items: [
      "Zapytania przychodzą na kilka skrzynek i część z nich czeka na odpowiedź za długo.",
      "Spedytor przepisuje trasę, ładunek i terminy z maila do arkusza lub TMS.",
      "Wycena podobnej trasy zaczyna się od szukania w historii zleceń lub w pamięci.",
      "Nie wiadomo, ile zapytań przychodzi, ile kończy się zleceniem i dlaczego reszta przepada.",
      "Zapytania w obcych językach trafiają tylko do osób, które znają dany język.",
      "Odpowiedzi do klientów pisze się od nowa, choć mają podobną treść.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja zapytań i wycen",
    paragraphs: [
      "Zapytania trafiają na wspólny adres lub do skrzynek spedytorów, z których system je zbiera. Model AI odczytuje z maila trasę, rodzaj i wagę ładunku, wymiary, terminy załadunku i rozładunku, typ pojazdu i dodatkowe wymagania. Działa to także dla zapytań w obcych językach i dla tabel wklejonych w treść maila.",
      "Odczytane zapytanie trafia do TMS lub do bazy zapytań, a system dołącza do niego historię podobnych tras: ceny, przewoźników i marże z ostatnich zleceń. Na tej podstawie przygotowuje propozycję ceny jako punkt wyjścia. Spedytor sprawdza dane, koryguje cenę i zatwierdza wycenę.",
      "Po zatwierdzeniu system przygotowuje odpowiedź do klienta w jego języku i zapisuje wycenę. Zapytania bez odpowiedzi po ustalonym czasie trafiają na listę do przejęcia, a raport pokazuje, ile zapytań zamienia się w zlecenia i od jakich klientów.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zapytań i wycen",
    lead: "Zakres dopasowujemy do sposobu pracy spedytorów i TMS.",
    items: [
      { title: "Zbieranie zapytań", body: "Zapytania z kilku skrzynek i formularza w jednym rejestrze." },
      { title: "Odczyt z AI", body: "Trasa, ładunek, terminy i wymagania wyciągnięte z maila w dowolnym języku." },
      { title: "Historia tras", body: "Ceny, przewoźnicy i marże z podobnych zleceń przy każdym zapytaniu." },
      { title: "Propozycja ceny", body: "Punkt wyjścia do wyceny na podstawie historii i zasad firmy." },
      { title: "Odpowiedź do klienta", body: "Szkic wyceny w języku klienta, do zatwierdzenia przez spedytora." },
      { title: "Kontrola czasu odpowiedzi", body: "Zapytania bez odpowiedzi trafiają na listę do przejęcia." },
      { title: "Przekazanie do zlecenia", body: "Przyjęta wycena staje się zleceniem bez ponownego wpisywania danych." },
      { title: "Raport skuteczności", body: "Liczba zapytań, wycen i zleceń według klientów i tras." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od maila klienta do wysłanej wyceny.",
    items: [
      {
        title: "Nowe zapytanie",
        trigger: "Mail z zapytaniem o transport",
        steps: ["AI odczytuje dane zapytania", "Zapis w rejestrze z historią podobnych tras i propozycją ceny", "Spedytor zatwierdza cenę, system wysyła odpowiedź"],
        result: "Wycena wychodzi szybciej, a dane zapytania są gotowe do zlecenia.",
      },
      {
        title: "Zapytanie bez odpowiedzi",
        trigger: "Minął ustalony czas od wpłynięcia zapytania",
        steps: ["Przypomnienie dla spedytora", "Informacja dla kierownika, jeśli zapytanie dalej czeka", "Oznaczenie w raporcie czasu odpowiedzi"],
        result: "Zapytania nie giną w skrzynkach osób zajętych innymi zleceniami.",
      },
    ],
  },
  example: {
    title: "Zapytania przed i po automatyzacji",
    lead: "Przykład firmy spedycyjnej, która dostaje kilkadziesiąt zapytań dziennie od stałych i nowych klientów.",
    rows: [
      { label: "Odczyt", before: "Przepisywanie maila do arkusza.", after: "Dane odczytane przez AI do sprawdzenia." },
      { label: "Wycena", before: "Szukanie podobnych tras w historii.", after: "Historia i propozycja ceny przy zapytaniu." },
      { label: "Odpowiedź", before: "Mail pisany od nowa.", after: "Szkic w języku klienta do zatwierdzenia." },
      { label: "Kontrola", before: "Nie wiadomo, które zapytania czekają.", after: "Lista zapytań bez odpowiedzi i raport." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Jakość odczytu sprawdzamy na waszych zapytaniach, zanim rozwiązanie trafi do zespołu.",
    phases: [
      { title: "Próbka zapytań", duration: "kilka dni", body: "Sprawdzamy odczyt AI na zanonimizowanej próbce typowych zapytań i przeglądamy historię zleceń.", fromYou: "Kilkadziesiąt przykładowych zapytań i eksport historii zleceń." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy zakres danych, zasady propozycji cen, szablony odpowiedzi i miejsce rejestru zapytań.", fromYou: "Zasady wyceny i wzory odpowiedzi." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy przepływ i testujemy go z kilkoma spedytorami.", fromYou: "Spedytorzy oceniający odczyt i propozycje cen." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy cały zespół i dopracowujemy propozycje cen wraz z napływem danych.", fromYou: "Uwagi zespołu." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od odczytu i rejestru zapytań, a propozycje cen dodać później.",
    items: [
      { name: "Rejestr zapytań", description: "Dla firm, które chcą, żeby żadne zapytanie nie zginęło.", includes: ["Zbieranie zapytań z kilku skrzynek", "Odczyt danych z AI", "Lista zapytań bez odpowiedzi", "Raport skuteczności"] },
      { name: "Zapytania i wyceny", description: "Dla firm, które chcą szybciej wyceniać.", includes: ["Wszystko z wariantu Rejestr zapytań", "Historia podobnych tras", "Propozycja ceny", "Szkic odpowiedzi do klienta"] },
      { name: "Od zapytania do zlecenia", description: "Dla firm, które chcą połączyć wycenę ze zleceniem.", includes: ["Wszystko z wariantu Zapytania i wyceny", "Przekazanie do TMS", "Zlecenie dla przewoźnika z danych zapytania", "Agent odpowiadający na proste zapytania"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po teście na waszych zapytaniach. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba zapytań dziennie i ich różnorodność,",
      "dostępność i jakość historii zleceń,",
      "integracja z TMS,",
      "zakres propozycji cen i szablonów odpowiedzi,",
      "koszt korzystania z modeli AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "AI źle odczyta termin lub adres.", mitigation: "Spedytor sprawdza dane przed wyceną, a niepewne pola są oznaczone." },
      { risk: "Propozycja ceny będzie nieaktualna.", mitigation: "Propozycja to punkt wyjścia z historii. Cenę ustala spedytor, który zna bieżące stawki." },
      { risk: "Wycena trafi do klienta bez sprawdzenia.", mitigation: "Odpowiedź wychodzi dopiero po zatwierdzeniu przez spedytora." },
      { risk: "Historia zleceń jest niekompletna.", mitigation: "Na początku propozycje cen obejmują tylko trasy z wystarczającą historią, a reszta jest wyceniana jak dotąd." },
    ],
  },
  faq: [
    { question: "Czy AI odczyta zapytania w obcych językach?", answer: "Tak. Modele AI dobrze radzą sobie z zapytaniami po angielsku, niemiecku i w innych językach. Dane trafiają do rejestru po polsku, a odpowiedź może wyjść w języku klienta." },
    { question: "Skąd bierze się propozycja ceny?", answer: "Z historii waszych zleceń na podobnych trasach i z zasad, które ustalimy, np. minimalnej marży. To punkt wyjścia, a nie cena ostateczna." },
    { question: "Czy zapytania mogą trafiać bezpośrednio do TMS?", answer: "Tak, jeśli TMS ma API lub import danych. W innym przypadku rejestr zapytań prowadzimy obok TMS, a przyjęte zlecenia przekazujemy do niego." },
    { question: "Czy to działa dla zapytań z giełd transportowych?", answer: "Zależy od giełdy i możliwości eksportu danych z waszego konta. Sprawdzamy to przy przeglądzie." },
    { question: "Czy klient zauważy, że odpowiedź przygotowało AI?", answer: "Odpowiedź wychodzi od spedytora, w stylu firmy i po jego sprawdzeniu. AI przygotowuje szkic, a nie wysyła wiadomości samo." },
  ],
  relatedServiceSlugs: ["automatyzacja-sprzedazy", "ai-w-obsludze-dokumentow", "automatyzacja-dla-logistyki"],
  relatedProcessSlugs: ["obsluga-zapytan-i-leadow", "ofertowanie"],
  relatedToolSlugs: ["n8n", "chatgpt", "microsoft-365"],
  relatedArticleSlugs: ["automatyzacja-obslugi-leadow-sprzedazowych", "5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji"],
};
