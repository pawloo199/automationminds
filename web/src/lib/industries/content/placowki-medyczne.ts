import type { IndustryPageContent } from "../types";

export const placowkiMedyczne: IndustryPageContent = {
  industrySlug: "placowki-medyczne",
  name: "Placówki medyczne",
  excerpt: "Automatyzacja pracy prywatnych przychodni, gabinetów i centrów medycznych: rejestracja, przypomnienia, formularze przed wizytą, komunikacja z pacjentami, grafiki i rozliczenia.",
  metaTitle: "Automatyzacja przychodni i gabinetu: rejestracja i obsługa",
  metaDescription:
    "Automatyzujemy pracę przychodni i gabinetów: rejestracja, przypomnienia o wizytach, formularze przed wizytą, komunikacja, grafiki i rozliczenia.",
  primaryKeyword: "automatyzacja przychodni",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Branża: placówki medyczne",
    title: "Automatyzacja przychodni: rejestracja przy pacjentach, nie przy telefonie",
    lead: "W przychodni telefon dzwoni od rana, pacjenci nie przychodzą na umówione wizyty, a rejestracja przepisuje dane z formularzy i pilnuje grafików lekarzy. Pomagamy prywatnym przychodniom, gabinetom i centrom medycznym zautomatyzować pracę organizacyjną wokół wizyt, na systemach, których już używają. Nie dotykamy decyzji medycznych, a dane o zdrowiu traktujemy z najwyższą ostrożnością.",
    bullets: [
      "Rejestracja online i mniej telefonów",
      "Przypomnienia i mniej nieodwołanych wizyt",
      "Formularze, grafiki i rozliczenia bez przepisywania",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Prywatne przychodnie, gabinety, centra medyczne, stomatologia, fizjoterapia" },
    { label: "Co automatyzujemy", value: "Rejestracja, przypomnienia, formularze, komunikacja, grafiki, rozliczenia" },
    { label: "Jak", value: "Obok systemu gabinetowego, z AI tylko w zadaniach organizacyjnych" },
    { label: "Zasada", value: "Automatyzujemy organizację, decyzje medyczne należą do personelu" },
  ],
  symptoms: {
    title: "Po czym poznać, że placówka potrzebuje automatyzacji",
    lead: "Jeśli rozpoznajecie u siebie kilka z tych sytuacji, część pracy rejestracji da się przenieść na system.",
    items: [
      "Telefon w rejestracji dzwoni bez przerwy, a pacjenci nie mogą się dodzwonić.",
      "Pacjenci nie przychodzą na wizyty i nie odwołują ich wcześniej.",
      "Formularze i zgody pacjent wypełnia na papierze w poczekalni.",
      "Pacjenci pytają o te same rzeczy: przygotowanie do badania, ceny, dojazd.",
      "Grafiki lekarzy i gabinetów układa się w arkuszu.",
      "Rozliczenia z lekarzami pracującymi na procent liczy się ręcznie.",
    ],
  },
  intro: {
    title: "Automatyzacja w placówce medycznej: co zmienia, a czego nie zmienia",
    paragraphs: [
      "Placówka medyczna to praca personelu medycznego i duża ilość pracy organizacyjnej wokół niej: rejestracja, przypomnienia, formularze, odpowiedzi na pytania pacjentów, grafiki, rozliczenia. Ta praca rośnie z każdym nowym lekarzem i każdą nową usługą, a rejestracja staje się wąskim gardłem. To właśnie pracę organizacyjną automatyzujemy.",
      "Automatyzacja nie dotyka decyzji medycznych. Nie stawiamy diagnoz, nie interpretujemy wyników, nie doradzamy pacjentom w sprawach zdrowia i nie zastępujemy dokumentacji medycznej. System pomaga umówić wizytę, przypomina o niej, zbiera formularze, odpowiada na pytania organizacyjne i przygotowuje rozliczenia. Sprawy medyczne zawsze trafiają do personelu.",
      "Nie wymieniamy systemu gabinetowego. Łączymy się z nim, jeśli udostępnia dane, i budujemy obok to, czego brakuje: przypomnienia, formularze, komunikację, raporty. Dane o zdrowiu przetwarzamy tylko tam, gdzie to konieczne, na infrastrukturze uzgodnionej z placówką, i nie przekazujemy ich do modeli AI. Połączenia budujemy w n8n, które może działać w infrastrukturze placówki.",
    ],
  },
  scope: {
    title: "Co automatyzujemy w placówkach medycznych",
    lead: "Od umówienia wizyty do rozliczenia. Zaczynamy od obszaru, który zabiera najwięcej czasu.",
    items: [
      { title: "Rejestracja online", body: "Wizyty umawiane przez stronę, z odciążeniem telefonu." },
      { title: "Przypomnienia", body: "SMS i mail przed wizytą, z możliwością odwołania." },
      { title: "Lista oczekujących", body: "Zwolnione terminy proponowane pacjentom z listy." },
      { title: "Formularze przed wizytą", body: "Dane, zgody i ankiety wypełnione online przed przyjściem." },
      { title: "Komunikacja z pacjentami", body: "Odpowiedzi na pytania organizacyjne: ceny, przygotowanie, dojazd." },
      { title: "Grafiki", body: "Lekarze, gabinety i urządzenia w jednym grafiku." },
      { title: "Rozliczenia", body: "Płatności, pakiety, abonamenty i rozliczenia lekarzy." },
      { title: "Raporty", body: "Wizyty, nieobecności, obłożenie i przychody." },
    ],
  },
  flows: {
    title: "Przykładowe automatyzacje w placówce medycznej",
    lead: "Typowe przepływy, które budujemy w przychodniach i gabinetach. Sprawy medyczne zawsze trafiają do personelu.",
    items: [
      {
        title: "Umówiona wizyta",
        trigger: "Pacjent umawia wizytę online",
        steps: ["Potwierdzenie i informacja o przygotowaniu do wizyty", "Formularz i zgody do wypełnienia przed wizytą", "Przypomnienie dzień wcześniej z możliwością odwołania"],
        result: "Pacjent przychodzi przygotowany, a rejestracja nie wypełnia papierów.",
      },
      {
        title: "Odwołana wizyta",
        trigger: "Pacjent odwołuje wizytę przez link",
        steps: ["Zwolniony termin w grafiku", "Propozycja terminu dla pacjentów z listy oczekujących", "Potwierdzenie dla pacjenta, który przyjął termin"],
        result: "Zwolnione terminy nie przepadają.",
      },
      {
        title: "Koniec miesiąca",
        trigger: "Zamknięcie okresu",
        steps: ["Zestawienie wizyt i przychodów według lekarzy", "Rozliczenie lekarzy według umów", "Raport dla właściciela placówki"],
        result: "Rozliczenia lekarzy bez arkuszy.",
      },
    ],
  },
  security: {
    title: "Dane pacjentów",
    lead: "Dane o zdrowiu to szczególna kategoria danych osobowych, objęta też tajemnicą zawodową. Wdrożenia projektujemy z najwyższą ostrożnością.",
    items: [
      { title: "Minimum danych", body: "Automatyzacje korzystają tylko z danych potrzebnych do zadania, np. terminu wizyty bez informacji o jej powodzie." },
      { title: "Dane o zdrowiu poza AI", body: "Informacji o stanie zdrowia, wynikach i dokumentacji medycznej nie przekazujemy do modeli AI." },
      { title: "Infrastruktura placówki", body: "Automatyzacje mogą działać w infrastrukturze placówki lub na serwerze w UE uzgodnionym z placówką." },
      { title: "Treść wiadomości", body: "Przypomnienia i wiadomości nie zawierają informacji o zdrowiu ani rodzaju wizyty, jeśli placówka tego nie chce." },
      { title: "Uprawnienia i ślad działań", body: "Dostęp według ról, a każda automatyczna operacja jest zapisana." },
      { title: "Umowy powierzenia", body: "Pracujemy na podstawie umowy powierzenia przetwarzania danych." },
    ],
  },
  example: {
    title: "Przychodnia przed i po automatyzacji",
    lead: "Przykład prywatnej przychodni z kilkunastoma lekarzami różnych specjalności.",
    rows: [
      { label: "Rejestracja", before: "Głównie telefon.", after: "Online i telefon." },
      { label: "Nieobecności", before: "Wizyty nieodwołane.", after: "Przypomnienia i lista oczekujących." },
      { label: "Formularze", before: "Papier w poczekalni.", after: "Online przed wizytą." },
      { label: "Pytania pacjentów", before: "Telefon do rejestracji.", after: "Odpowiedzi na pytania organizacyjne." },
      { label: "Rozliczenia lekarzy", before: "Arkusz.", after: "Zestawienie według umów." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej placówce.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie w placówce medycznej",
    lead: "Cztery etapy, po każdym wiecie, co zostało zrobione. Pracujemy tak, żeby nie zakłócać przyjmowania pacjentów.",
    phases: [
      { title: "Przegląd placówki", duration: "kilka dni", body: "Rozmawiamy z właścicielem, rejestracją i osobą od rozliczeń, przeglądamy system gabinetowy i zasady ochrony danych, wybieramy obszar z największą stratą czasu.", fromYou: "Godzina rozmowy, informacja o systemach i polityka ochrony danych." },
      { title: "Projekt", duration: "około tygodnia", body: "Projektujemy przepływ, treści wiadomości i zakres danych: co robi system, a co zawsze robi człowiek.", fromYou: "Akceptacja projektu i treści, także przez osobę odpowiedzialną za ochronę danych." },
      { title: "Budowa i testy", duration: "zwykle 2–4 tygodnie", body: "Budujemy rozwiązanie i testujemy je na wybranych lekarzach lub usługach.", fromYou: "Osoba z rejestracji oceniająca testy." },
      { title: "Start i opieka", duration: "stale", body: "Uruchamiamy rozwiązanie dla całej placówki i pilnujemy działania.", fromYou: "Uwagi zespołu w pierwszych tygodniach." },
    ],
  },
  variants: {
    title: "Warianty współpracy",
    lead: "Można zacząć od jednego procesu i rozwijać automatyzację krok po kroku.",
    items: [
      { name: "Jeden proces", description: "Dla placówek, które chcą sprawdzić automatyzację na jednym obszarze.", includes: ["Przegląd i wybór procesu", "Automatyzacja jednego obszaru, np. przypomnień", "Połączenie z systemem gabinetowym", "Szkolenie zespołu"] },
      { name: "Cała placówka", description: "Dla placówek, które chcą odciążyć rejestrację i uporządkować organizację.", includes: ["Kilka połączonych procesów: rejestracja, przypomnienia, formularze, komunikacja, grafiki", "Rozliczenia lekarzy", "Raporty dla właściciela", "Opieka po wdrożeniu"] },
      { name: "Automatyzacje w abonamencie", description: "Dla placówek, które nie chcą zajmować się technologią.", includes: ["Przypomnienia i komunikacja w abonamencie", "Infrastruktura i utrzymanie uzgodnione z placówką", "Monitoring i miesięczny raport", "Stała miesięczna opłata"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Każde wdrożenie wyceniamy po przeglądzie, przed startem. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba procesów i systemów, które łączymy,",
      "możliwości integracji systemu gabinetowego,",
      "liczba lekarzy, gabinetów i wizyt,",
      "wymagania dotyczące infrastruktury i ochrony danych,",
      "zakres opieki po wdrożeniu.",
    ],
  },
  risks: {
    title: "Na co uważamy w placówkach medycznych",
    items: [
      { risk: "Pacjent zada pytanie medyczne automatycznemu asystentowi.", mitigation: "Asystent odpowiada tylko na pytania organizacyjne, a pytania o zdrowie przekazuje personelowi lub kieruje do kontaktu z placówką." },
      { risk: "Informacja o zdrowiu w wiadomości do pacjenta.", mitigation: "Treści wiadomości ustalamy z placówką, domyślnie bez rodzaju wizyty i powodu." },
      { risk: "System gabinetowy nie udostępnia danych.", mitigation: "Sprawdzamy to na początku i dobieramy zakres do możliwości systemu." },
      { risk: "Pacjenci starsi nie korzystają z rejestracji online.", mitigation: "Telefon i rejestracja w placówce działają dalej, a automatyzacja odciąża je, nie zastępuje." },
    ],
  },
  faq: [
    { question: "Czy automatyzacja dotyczy decyzji medycznych?", answer: "Nie. Automatyzujemy pracę organizacyjną: rejestrację, przypomnienia, formularze, komunikację, grafiki i rozliczenia. Decyzje medyczne należą do personelu." },
    { question: "Czy łączycie się z systemami gabinetowymi?", answer: "Tak, jeśli system udostępnia dane przez API, eksport lub inny uzgodniony sposób. Zakres sprawdzamy przy przeglądzie." },
    { question: "Czy dane pacjentów trafiają do AI?", answer: "Danych o zdrowiu nie przekazujemy do modeli AI. AI, jeśli jest używane, pracuje na pytaniach organizacyjnych i treściach placówki." },
    { question: "Gdzie działają automatyzacje?", answer: "W infrastrukturze placówki albo na serwerze w UE uzgodnionym z placówką, na podstawie umowy powierzenia." },
    { question: "Od czego najlepiej zacząć?", answer: "Najczęściej od przypomnień o wizytach albo formularzy przed wizytą. Wskażemy najlepszy obszar na bezpłatnej konsultacji." },
    { question: "Ile trwa wdrożenie?", answer: "Pierwszy proces zwykle kilka tygodni, łącznie z akceptacją zasad ochrony danych." },
    { question: "Czy pracujecie z gabinetami stomatologicznymi i fizjoterapią?", answer: "Tak. Procesy organizacyjne są podobne, a zakres dopasowujemy do specyfiki placówki." },
  ],
  relatedServiceSlugs: ["automatyzacja-w-obsludze-klienta", "automatyzacja-dla-firm-uslugowych", "cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow"],
  relatedProcessSlugs: ["umawianie-wizyt", "przypomnienia-o-platnosciach", "raporty-finansowe"],
  relatedToolSlugs: ["n8n", "google-workspace", "microsoft-365"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-przychodni", "dane-pacjentow-a-automatyzacja", "jak-odciazyc-rejestracje-w-przychodni"],
};
