import type { IndustryPageContent } from "../types";

export const placowkiMedyczneRejestracja: IndustryPageContent = {
  industrySlug: "placowki-medyczne",
  subSlug: "rejestracja-pacjentow",
  name: "Rejestracja pacjentów",
  excerpt: "Rejestracja online zsynchronizowana z grafikiem, potwierdzenia, informacje o przygotowaniu do wizyty i odciążenie telefonu rejestracji.",
  metaTitle: "Automatyzacja rejestracji pacjentów w przychodni",
  metaDescription:
    "Automatyzujemy rejestrację pacjentów: wizyty online zsynchronizowane z grafikiem, potwierdzenia, informacje o przygotowaniu i mniej telefonów.",
  primaryKeyword: "automatyzacja rejestracji pacjentów",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Placówki medyczne: rejestracja",
    title: "Rejestracja online, która odciąża telefon, a nie dokłada pracy",
    lead: "Pacjent dzwoni, czeka na połączenie, umawia wizytę, potem dzwoni drugi raz, żeby zapytać, jak się przygotować. Rejestracja w tym czasie obsługuje pacjentów przy okienku. Automatyzujemy rejestrację: pacjent umawia wizytę online w terminach z grafiku, dostaje potwierdzenie i informacje o przygotowaniu, a rejestracja zajmuje się pacjentami, którzy potrzebują rozmowy.",
    bullets: [
      "Wizyty online w terminach z grafiku",
      "Potwierdzenia i informacje o przygotowaniu",
      "Mniej telefonów, więcej czasu dla pacjentów w placówce",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Prywatne przychodnie, gabinety i centra medyczne" },
    { label: "Co automatyzujemy", value: "Rejestracja online, potwierdzenia, informacje, zmiany terminów" },
    { label: "Narzędzia", value: "System gabinetowy, strona, SMS, poczta, n8n" },
    { label: "Zasada", value: "Rejestracja telefoniczna działa dalej" },
  ],
  symptoms: {
    title: "Kiedy rejestrację warto zautomatyzować",
    lead: "Jeśli te sytuacje są wam znane, telefon jest wąskim gardłem placówki.",
    items: [
      "Pacjenci skarżą się, że nie mogą się dodzwonić.",
      "Rejestracja jednocześnie odbiera telefony i obsługuje pacjentów przy okienku.",
      "Pacjenci dzwonią drugi raz z pytaniem o przygotowanie do wizyty.",
      "Rejestracja online istnieje, ale nie jest zsynchronizowana z grafikiem.",
      "Zmiana terminu wymaga telefonu.",
      "Nie wiadomo, ile połączeń jest nieodebranych.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja rejestracji",
    paragraphs: [
      "Pacjent wybiera usługę, lekarza i termin na stronie placówki. Terminy pochodzą z grafiku w systemie gabinetowym, więc nie ma ryzyka podwójnej rezerwacji. Placówka decyduje, które usługi i terminy są dostępne online, a które tylko przez rejestrację, np. wizyty wymagające kwalifikacji.",
      "Po umówieniu pacjent dostaje potwierdzenie i informacje organizacyjne: adres, dokumenty, przygotowanie do badania według instrukcji placówki. Zmiana terminu lub odwołanie jest możliwe przez link, bez telefonu.",
      "Rejestracja widzi wszystkie wizyty w swoim systemie i zajmuje się sprawami, które wymagają rozmowy. Raport pokazuje, ile wizyt umawia się online, a ile telefonicznie, i jak zmienia się liczba połączeń.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja rejestracji",
    lead: "Zakres dopasowujemy do usług i systemu gabinetowego.",
    items: [
      { title: "Rejestracja na stronie", body: "Usługa, lekarz i termin z grafiku." },
      { title: "Zasady dostępności", body: "Które usługi i terminy są dostępne online." },
      { title: "Potwierdzenie", body: "SMS lub mail z informacjami organizacyjnymi." },
      { title: "Przygotowanie do wizyty", body: "Instrukcje placówki dla wybranej usługi." },
      { title: "Zmiana i odwołanie", body: "Przez link, bez telefonu." },
      { title: "Synchronizacja z grafikiem", body: "Bez podwójnych rezerwacji." },
      { title: "Pacjenci firmowi", body: "Wizyty z abonamentów firmowych z kontrolą uprawnień." },
      { title: "Raport", body: "Wizyty online i telefoniczne, zmiany, odwołania." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od wyboru terminu do wizyty.",
    items: [
      {
        title: "Wizyta online",
        trigger: "Pacjent umawia wizytę na stronie",
        steps: ["Termin z grafiku w systemie gabinetowym", "Potwierdzenie z informacjami organizacyjnymi", "Wizyta w systemie rejestracji"],
        result: "Wizyta umówiona bez telefonu.",
      },
      {
        title: "Zmiana terminu",
        trigger: "Pacjent nie może przyjść",
        steps: ["Zmiana przez link w potwierdzeniu", "Nowy termin z grafiku", "Zwolniony termin dostępny dla innych"],
        result: "Zmiana bez dzwonienia, a termin nie przepada.",
      },
    ],
  },
  example: {
    title: "Rejestracja przed i po automatyzacji",
    lead: "Przykład przychodni wielospecjalistycznej.",
    rows: [
      { label: "Kanał", before: "Głównie telefon.", after: "Online i telefon." },
      { label: "Informacje", before: "Drugi telefon pacjenta.", after: "W potwierdzeniu." },
      { label: "Zmiany", before: "Telefon.", after: "Link." },
      { label: "Rejestracja", before: "Przeciążona.", after: "Więcej czasu dla pacjentów w placówce." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej placówce.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Zaczynamy od kilku usług i lekarzy.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy system gabinetowy, usługi i zasady rejestracji.", fromYou: "Lista usług i instrukcji przygotowania." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy zasady dostępności i treści wiadomości.", fromYou: "Akceptacja zasad i treści." },
      { title: "Budowa i test", duration: "zwykle 2–4 tygodnie", body: "Budujemy rejestrację i testujemy ją na wybranych usługach.", fromYou: "Osoba z rejestracji w teście." },
      { title: "Start i opieka", duration: "stale", body: "Dokładamy kolejne usługi i lekarzy.", fromYou: "Informacja o zmianach w grafiku i usługach." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od potwierdzeń i informacji o przygotowaniu.",
    items: [
      { name: "Potwierdzenia", description: "Dla placówek, które chcą ograniczyć drugie telefony.", includes: ["Potwierdzenia", "Informacje organizacyjne", "Przygotowanie do wizyty", "Zmiana przez link"] },
      { name: "Rejestracja online", description: "Dla placówek, które chcą odciążyć telefon.", includes: ["Wszystko z wariantu Potwierdzenia", "Rejestracja na stronie", "Synchronizacja z grafikiem", "Zasady dostępności"] },
      { name: "Rejestracja i firmy", description: "Dla placówek z abonamentami firmowymi.", includes: ["Wszystko z wariantu Rejestracja online", "Pacjenci firmowi", "Raport", "Utrzymanie w abonamencie"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "możliwości integracji systemu gabinetowego,",
      "liczba usług i lekarzy,",
      "kanały powiadomień, np. SMS,",
      "abonamenty firmowe,",
      "zakres raportów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Podwójna rezerwacja.", mitigation: "Terminy pochodzą bezpośrednio z grafiku i są blokowane przy rezerwacji." },
      { risk: "Pacjent umówi się na niewłaściwą usługę.", mitigation: "Usługi wymagające kwalifikacji są dostępne tylko przez rejestrację." },
      { risk: "Informacja o zdrowiu w wiadomości.", mitigation: "Treści wiadomości bez rodzaju wizyty, jeśli placówka tego nie chce." },
      { risk: "Pacjenci bez dostępu do internetu.", mitigation: "Rejestracja telefoniczna i w placówce działa dalej." },
    ],
  },
  faq: [
    { question: "Czy rejestracja online zastąpi telefon?", answer: "Nie. Odciąża telefon, ale pacjenci nadal mogą dzwonić i przychodzić do placówki." },
    { question: "Czy działa to z naszym systemem gabinetowym?", answer: "Jeśli system udostępnia grafik przez API lub inny uzgodniony sposób. Sprawdzamy to na początku." },
    { question: "Czy każda usługa musi być dostępna online?", answer: "Nie. Placówka decyduje, które usługi i terminy udostępnia online." },
    { question: "Czy pacjent może zmienić termin sam?", answer: "Tak, przez link w potwierdzeniu, zgodnie z zasadami placówki." },
    { question: "Co z abonamentami firmowymi?", answer: "Możemy sprawdzać uprawnienia pacjenta do usług objętych abonamentem przy rezerwacji." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "integracje-systemow"],
  relatedProcessSlugs: ["umawianie-wizyt"],
  relatedToolSlugs: ["n8n", "google-workspace", "microsoft-365"],
  relatedArticleSlugs: ["5-procesow-do-automatyzacji-w-malej-firmie", "jak-mierzyc-roi-automatyzacji", "rodo-a-automatyzacja-procesow"],
};
