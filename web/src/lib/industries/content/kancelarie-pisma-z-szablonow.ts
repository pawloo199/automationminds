import type { IndustryPageContent } from "../types";

export const kancelariePismaZSzablonow: IndustryPageContent = {
  industrySlug: "kancelarie-prawne",
  subSlug: "pisma-z-szablonow",
  name: "Pisma z szablonów",
  excerpt: "Pełnomocnictwa, umowy, wezwania i pisma powtarzalne wypełniane danymi sprawy w kilka chwil.",
  metaTitle: "Automatyzacja pism i dokumentów prawnych w kancelarii",
  metaDescription:
    "Automatyzujemy przygotowanie pism w kancelarii: pełnomocnictwa, umowy z klientem, wezwania i pisma powtarzalne z szablonów Word, wypełniane danymi sprawy.",
  primaryKeyword: "automatyzacja dokumentów prawnych",
  updatedAt: "2026-10-05",
  hero: {
    eyebrow: "Kancelarie prawne: pisma i dokumenty",
    title: "Pisma z szablonów: dokumenty powtarzalne gotowe w kilka chwil",
    lead: "Duża część dokumentów w kancelarii powstaje według tego samego schematu: pełnomocnictwa, umowy z klientem, wezwania do zapłaty, wnioski, pisma przewodnie. Zamieniamy wzory kancelarii w szablony, które wypełniają się danymi klienta i sprawy, a prawnik sprawdza i dopracowuje gotowy projekt.",
    bullets: [
      "Szablony na wzorach kancelarii, w Wordzie",
      "Dane klienta i sprawy wstawiane automatycznie",
      "Projekt do sprawdzenia, a nie gotowy dokument bez kontroli",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Kancelarie przygotowujące dużo podobnych dokumentów" },
    { label: "Jakie dokumenty", value: "Pełnomocnictwa, umowy z klientem, wezwania, wnioski, pisma przewodnie" },
    { label: "Narzędzia", value: "Szablony Word, Microsoft 365 lub Google Workspace, baza spraw" },
    { label: "Zasada", value: "Każdy dokument przed wysyłką sprawdza prawnik" },
  ],
  symptoms: {
    title: "Kiedy automatyzacja pism się opłaca",
    lead: "Te sygnały oznaczają, że prawnicy spędzają czas na pracy, którą może wykonać szablon.",
    items: [
      "Nowe pismo powstaje przez skopiowanie poprzedniego i podmianę danych.",
      "W pismach zdarzają się dane z innej sprawy, które ktoś zapomniał zmienić.",
      "Wzory istnieją w kilku wersjach i każdy prawnik ma swoją.",
      "Przygotowanie pakietu dokumentów dla nowego klienta zajmuje godzinę lub dłużej.",
      "Seryjne pisma, np. wezwania dla wielu dłużników klienta, przygotowuje się ręcznie.",
      "Asystenci przepisują dane z systemu do dokumentów.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja pism",
    paragraphs: [
      "Zaczynamy od wzorów, których kancelaria już używa. Zamieniamy je w szablony Word z polami na dane: strony, sygnatura, kwoty, daty, dane pełnomocnika. Fragmenty zależne od sytuacji, np. inne pouczenie dla konsumenta i przedsiębiorcy, dodajemy jako warianty, które wybiera się jednym kliknięciem.",
      "Dane trafiają do szablonu z bazy klientów i spraw, więc nie trzeba ich przepisywać. Gotowy projekt zapisuje się w folderze sprawy z właściwą nazwą. Przy pismach seryjnych, np. wezwaniach do zapłaty, z jednej listy powstaje cały pakiet dokumentów.",
      "AI przydaje się przy fragmentach, które nie są w pełni powtarzalne, np. przy przygotowaniu projektu stanu faktycznego na podstawie dokumentów sprawy. Taki fragment zawsze jest oznaczony jako projekt do sprawdzenia przez prawnika.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w dokumentach",
    lead: "Zakres zależy od dokumentów, które kancelaria przygotowuje najczęściej.",
    items: [
      { title: "Szablony z wzorów kancelarii", body: "Wasze wzory zamienione w szablony Word z polami i wariantami." },
      { title: "Dane z bazy spraw", body: "Strony, sygnatury, kwoty i daty wstawiane z systemu zamiast przepisywane." },
      { title: "Pakiet dla nowego klienta", body: "Umowa, pełnomocnictwo i dokumenty startowe przygotowane jednym ruchem." },
      { title: "Pisma seryjne", body: "Wezwania i pisma dla wielu adresatów z jednej listy." },
      { title: "Porządek w folderach", body: "Dokument zapisany w folderze sprawy z ujednoliconą nazwą." },
      { title: "Projekty fragmentów z AI", body: "Projekt stanu faktycznego lub streszczenia na podstawie dokumentów sprawy." },
      { title: "Jedna wersja wzoru", body: "Wzory w jednym miejscu, zmieniane przez wskazaną osobę." },
      { title: "Podpis i wysyłka", body: "Przekazanie gotowego dokumentu do podpisu elektronicznego lub wysyłki." },
    ],
  },
  example: {
    title: "Dokumenty przed i po automatyzacji",
    lead: "Przykład kancelarii prowadzącej windykację dla klientów biznesowych i sprawy cywilne.",
    rows: [
      { label: "Nowy klient", before: "Umowa i pełnomocnictwo pisane na bazie poprzedniego klienta.", after: "Pakiet dokumentów z danych klienta jednym ruchem." },
      { label: "Wezwania", before: "Każde wezwanie przygotowywane osobno.", after: "Pakiet wezwań z listy dłużników do sprawdzenia." },
      { label: "Błędy", before: "Zdarzają się dane z innej sprawy.", after: "Dane zawsze pobierane z właściwej sprawy." },
      { label: "Wzory", before: "Każdy prawnik ma swoją wersję.", after: "Jedna aktualna wersja szablonu." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej kancelarii.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od kilku dokumentów, które powstają najczęściej.",
    phases: [
      { title: "Wybór dokumentów", duration: "kilka dni", body: "Wybieramy dokumenty, które powstają najczęściej, i sprawdzamy, skąd pochodzą dane.", fromYou: "Aktualne wzory i informacja, gdzie są dane klientów i spraw." },
      { title: "Szablony", duration: "1–2 tygodnie", body: "Zamieniamy wzory w szablony z polami i wariantami, uzgadniając je z prawnikami.", fromYou: "Akceptacja szablonów przez prawnika." },
      { title: "Połączenie z danymi", duration: "1–2 tygodnie", body: "Łączymy szablony z bazą spraw i folderami, testujemy na prawdziwych sprawach.", fromYou: "Osoba sprawdzająca wygenerowane dokumenty." },
      { title: "Start i rozwój", duration: "stale", body: "Uruchamiamy szablony i dokładamy kolejne dokumenty.", fromYou: "Informacja o zmianach we wzorach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od kilku najczęstszych dokumentów.",
    items: [
      { name: "Najczęstsze dokumenty", description: "Dla kancelarii, które chcą szybko odczuć efekt.", includes: ["Kilka szablonów z wzorów kancelarii", "Wypełnianie danymi klienta i sprawy", "Zapis w folderze sprawy", "Jedna wersja wzorów"] },
      { name: "Biblioteka szablonów", description: "Dla kancelarii z wieloma rodzajami dokumentów.", includes: ["Wszystko z wariantu Najczęstsze dokumenty", "Szablony z wariantami", "Pakiety dokumentów", "Pisma seryjne"] },
      { name: "Szablony z AI", description: "Dla kancelarii, które chcą przyspieszyć także fragmenty pisane od nowa.", includes: ["Wszystko z wariantu Biblioteka szablonów", "Projekty stanu faktycznego i streszczeń", "Oznaczanie fragmentów do sprawdzenia", "Przepływy na serwerze w UE"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie wzorów. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba szablonów i wariantów,",
      "źródło danych: system kancelaryjny, baza spraw czy formularz,",
      "pisma seryjne i pakiety dokumentów,",
      "użycie AI do fragmentów pisanych od nowa,",
      "integracja z podpisem elektronicznym.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Dokument z błędnymi danymi trafi do sądu lub klienta.", mitigation: "Każdy dokument jest projektem do sprawdzenia przez prawnika. Nic nie jest wysyłane automatycznie." },
      { risk: "Nieaktualny wzór.", mitigation: "Szablony są w jednym miejscu, a zmiany wprowadza wskazana osoba." },
      { risk: "AI doda w projekcie nieprawdziwe informacje.", mitigation: "Fragmenty AI powstają tylko na podstawie dokumentów sprawy i są wyraźnie oznaczone do weryfikacji." },
      { risk: "Szablony nie obejmą nietypowej sytuacji.", mitigation: "Warianty pokrywają typowe przypadki, a dokument zawsze można dopracować ręcznie w Wordzie." },
    ],
  },
  faq: [
    { question: "Czy musimy zmieniać nasze wzory?", answer: "Nie. Zamieniamy w szablony wzory, których już używacie. Przy okazji porządkujemy wersje, żeby obowiązywała jedna." },
    { question: "Czy dokumenty powstają w Wordzie?", answer: "Tak. Szablony i gotowe dokumenty są w Wordzie, więc prawnik może je normalnie edytować przed wysyłką." },
    { question: "Czy AI napisze pismo procesowe?", answer: "AI może przygotować projekt fragmentu, np. stanu faktycznego, na podstawie dokumentów sprawy. Argumentacja, treść i odpowiedzialność za pismo zawsze należą do pełnomocnika." },
    { question: "Skąd szablon bierze dane?", answer: "Z systemu kancelaryjnego, bazy spraw albo formularza. Jeśli nie macie uporządkowanej bazy, przygotujemy prostą bazę spraw." },
    { question: "Czy można generować pisma seryjnie?", answer: "Tak. Z jednej listy, np. dłużników klienta, powstaje pakiet dokumentów do sprawdzenia i podpisu." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "cyfryzacja-danych-i-dokumentow", "automatyzacja-oraz-ai-w-niestandardowych-procesach"],
  relatedProcessSlugs: ["obieg-umow", "przypomnienia-o-platnosciach"],
  relatedToolSlugs: ["microsoft-365", "google-workspace", "power-automate"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-kancelarii", "cyfryzacja-danych-w-firmie", "gotowa-automatyzacja-czy-budowana-od-zera"],
};
