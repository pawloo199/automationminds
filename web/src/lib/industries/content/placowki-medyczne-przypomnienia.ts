import type { IndustryPageContent } from "../types";

export const placowkiMedycznePrzypomnienia: IndustryPageContent = {
  industrySlug: "placowki-medyczne",
  subSlug: "przypomnienia-o-wizytach",
  name: "Przypomnienia i nieobecności",
  excerpt: "Przypomnienia o wizytach SMS i mailem, potwierdzenie lub odwołanie jednym kliknięciem, lista oczekujących i zwolnione terminy zajęte przez innych pacjentów.",
  metaTitle: "Przypomnienia o wizytach dla pacjentów i lista oczekujących",
  metaDescription:
    "Automatyzujemy przypomnienia o wizytach: SMS i mail przed wizytą, potwierdzenie lub odwołanie jednym kliknięciem, lista oczekujących i raport nieobecności.",
  primaryKeyword: "przypomnienia o wizytach dla pacjentów",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Placówki medyczne: przypomnienia",
    title: "Mniej pustych terminów dzięki przypomnieniom i liście oczekujących",
    lead: "Pacjent umówił się trzy tygodnie temu i zapomniał. Nie przyszedł, nie odwołał, a termin przepadł, choć inny pacjent czekał na niego od tygodnia. W wielu placówkach nieodwołane wizyty to codzienność i realna strata. Automatyzujemy przypomnienia: pacjent dostaje przypomnienie z możliwością potwierdzenia lub odwołania, a zwolniony termin trafia do pacjentów z listy oczekujących.",
    bullets: [
      "Przypomnienia SMS i mailem przed wizytą",
      "Potwierdzenie lub odwołanie jednym kliknięciem",
      "Zwolnione terminy dla pacjentów z listy oczekujących",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Przychodnie, gabinety i centra medyczne z problemem nieobecności" },
    { label: "Co automatyzujemy", value: "Przypomnienia, potwierdzenia, odwołania, lista oczekujących, raporty" },
    { label: "Narzędzia", value: "System gabinetowy, SMS, poczta, n8n" },
    { label: "Zasada", value: "Treść wiadomości bez informacji o zdrowiu" },
  ],
  symptoms: {
    title: "Kiedy przypomnienia warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, placówka traci terminy, które mogłaby wypełnić.",
    items: [
      "Pacjenci nie przychodzą na wizyty i nie odwołują ich.",
      "Rejestracja dzwoni do pacjentów z przypomnieniami.",
      "Odwołanie wizyty wymaga telefonu, więc pacjenci go nie robią.",
      "Pacjenci czekają na terminy, które potem zostają puste.",
      "Lista oczekujących jest w zeszycie lub arkuszu.",
      "Nie wiadomo, ile wizyt przepada w miesiącu.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja przypomnień",
    paragraphs: [
      "Na ustalony czas przed wizytą pacjent dostaje przypomnienie SMS-em lub mailem: data, godzina, adres i link do potwierdzenia lub odwołania. Placówka decyduje, kiedy i ile przypomnień wysyłać, np. kilka dni wcześniej i w przeddzień. Treść nie zawiera rodzaju wizyty ani informacji o zdrowiu, jeśli placówka tego nie chce.",
      "Gdy pacjent odwoła wizytę, termin zwalnia się w grafiku. System proponuje go pacjentom z listy oczekujących na tego lekarza lub usługę, w kolejności ustalonej przez placówkę. Pierwszy, który przyjmie termin, dostaje potwierdzenie.",
      "Raport pokazuje liczbę nieobecności, odwołań i terminów zapełnionych z listy oczekujących. Placówka może ustalić zasady wobec pacjentów, którzy wielokrotnie nie przychodzą, ale decyzje w tej sprawie podejmuje człowiek.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja przypomnień",
    lead: "Zakres dopasowujemy do usług i zasad placówki.",
    items: [
      { title: "Przypomnienia", body: "SMS i mail w ustalonym czasie przed wizytą." },
      { title: "Potwierdzenie", body: "Jednym kliknięciem, widoczne w rejestracji." },
      { title: "Odwołanie", body: "Przez link, bez telefonu." },
      { title: "Lista oczekujących", body: "Pacjenci czekający na wcześniejszy termin." },
      { title: "Propozycje terminów", body: "Zwolnione terminy dla pacjentów z listy." },
      { title: "Treść bez danych o zdrowiu", body: "Wiadomości bez rodzaju wizyty i powodu." },
      { title: "Pacjenci bez potwierdzenia", body: "Lista dla rejestracji do kontaktu telefonicznego." },
      { title: "Raport nieobecności", body: "Nieobecności, odwołania i zapełnione terminy." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od przypomnienia do zapełnionego terminu.",
    items: [
      {
        title: "Przypomnienie",
        trigger: "Trzy dni przed wizytą",
        steps: ["SMS z datą, godziną i linkiem", "Pacjent odwołuje wizytę", "Termin zwolniony w grafiku"],
        result: "Placówka wie o odwołaniu z wyprzedzeniem.",
      },
      {
        title: "Lista oczekujących",
        trigger: "Zwolniony termin u specjalisty",
        steps: ["Propozycja dla pacjentów z listy", "Pierwszy, który przyjmie, dostaje potwierdzenie", "Pozostali dostają informację, że termin jest zajęty"],
        result: "Termin zapełniony bez telefonów.",
      },
    ],
  },
  example: {
    title: "Nieobecności przed i po automatyzacji",
    lead: "Przykład przychodni ze specjalistami, do których czeka się kilka tygodni.",
    rows: [
      { label: "Przypomnienia", before: "Telefony rejestracji lub brak.", after: "SMS i mail automatycznie." },
      { label: "Odwołania", before: "Telefon, więc rzadko.", after: "Link, więc częściej i wcześniej." },
      { label: "Zwolnione terminy", before: "Przepadają.", after: "Dla listy oczekujących." },
      { label: "Wiedza", before: "Brak danych.", after: "Raport nieobecności." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej placówce.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od przypomnień, potem dokładamy listę oczekujących.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy system gabinetowy, obecne przypomnienia i dane o nieobecnościach.", fromYou: "Rozmowa z rejestracją." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy terminy, treści i zasady listy oczekujących.", fromYou: "Akceptacja treści." },
      { title: "Budowa i test", duration: "zwykle 2–3 tygodnie", body: "Budujemy przepływy i testujemy na wybranych lekarzach.", fromYou: "Rejestracja w teście." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy całą placówkę i obserwujemy wyniki.", fromYou: "Uwagi rejestracji." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od samych przypomnień.",
    items: [
      { name: "Przypomnienia", description: "Dla placówek, które chcą ograniczyć nieobecności.", includes: ["Przypomnienia SMS i mail", "Potwierdzenie", "Odwołanie przez link", "Treść bez danych o zdrowiu"] },
      { name: "Przypomnienia i lista", description: "Dla placówek z długim czasem oczekiwania.", includes: ["Wszystko z wariantu Przypomnienia", "Lista oczekujących", "Propozycje terminów", "Lista pacjentów bez potwierdzenia"] },
      { name: "Pełna kontrola", description: "Dla placówek, które chcą mierzyć wyniki.", includes: ["Wszystko z wariantu Przypomnienia i lista", "Raport nieobecności", "Raport według lekarzy i usług", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba wizyt,",
      "koszt wiadomości SMS,",
      "możliwości integracji systemu gabinetowego,",
      "zasady listy oczekujących,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Przypomnienie trafi do niewłaściwej osoby.", mitigation: "Wiadomość nie zawiera informacji o zdrowiu ani rodzaju wizyty." },
      { risk: "Dwóch pacjentów przyjmie ten sam termin.", mitigation: "Termin jest blokowany przy pierwszym przyjęciu, a pozostali dostają informację." },
      { risk: "Pacjent nie odczyta wiadomości.", mitigation: "Lista pacjentów bez potwierdzenia dla rejestracji." },
      { risk: "Pacjent nie chce wiadomości.", mitigation: "Pacjent może zrezygnować, a kanały kontaktu wymagają zgody." },
    ],
  },
  faq: [
    { question: "Ile przypomnień wysyłać?", answer: "Zwykle jedno lub dwa, np. kilka dni wcześniej i w przeddzień. Placówka ustala to według usług." },
    { question: "Czy przypomnienie zawiera nazwę badania?", answer: "Domyślnie nie. Treść ustalamy z placówką, z ostrożnością wobec informacji o zdrowiu." },
    { question: "Jak działa lista oczekujących?", answer: "Pacjenci zgłaszają chęć wcześniejszego terminu, a zwolnione terminy są im proponowane w kolejności ustalonej przez placówkę." },
    { question: "Czy pacjent musi mieć smartfon?", answer: "Wystarczy telefon, który odbiera SMS. Link do odwołania działa w przeglądarce." },
    { question: "Czy zobaczymy, ile wizyt przepada?", answer: "Tak, raport pokazuje nieobecności i odwołania według lekarzy i usług." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "automatyzacja-raportow"],
  relatedProcessSlugs: ["umawianie-wizyt"],
  relatedToolSlugs: ["n8n", "google-workspace", "airtable"],
  relatedArticleSlugs: ["nieodwolane-wizyty-pacjentow", "dane-pacjentow-a-automatyzacja", "jak-mierzyc-roi-automatyzacji"],
};
