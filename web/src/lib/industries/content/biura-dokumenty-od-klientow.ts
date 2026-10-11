import type { IndustryPageContent } from "../types";

export const biuraDokumentyOdKlientow: IndustryPageContent = {
  industrySlug: "biura-rachunkowe",
  subSlug: "dokumenty-od-klientow",
  name: "Dokumenty od klientów",
  excerpt: "Jedno miejsce na dokumenty od klientów, automatyczne przypomnienia o brakach i status kompletności każdego klienta.",
  metaTitle: "Zbieranie dokumentów od klientów biura rachunkowego",
  metaDescription:
    "Automatyzujemy zbieranie dokumentów od klientów biura rachunkowego: jedno miejsce na pliki, przypomnienia o brakach i status kompletności.",
  primaryKeyword: "zbieranie dokumentów od klientów biura rachunkowego",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Biura rachunkowe: dokumenty od klientów",
    title: "Dokumenty od klientów na czas i w komplecie, bez dzwonienia do każdego",
    lead: "W wielu biurach koniec miesiąca zaczyna się od pogoni za dokumentami. Klienci wysyłają je mailem, przez komunikatory, zdjęciami z telefonu albo przynoszą w kopercie, a zespół sprawdza, czego brakuje, i przypomina każdemu osobno. Automatyzujemy tę część pracy: dokumenty trafiają do jednego miejsca, są przypisane do klienta i miesiąca, a przypomnienia o brakach wysyłają się same.",
    bullets: [
      "Dokumenty z maila, formularza i telefonu w jednym miejscu",
      "Automatyczne przypomnienia o brakujących dokumentach",
      "Status kompletności każdego klienta widoczny dla zespołu",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Biura rachunkowe obsługujące od kilkudziesięciu do kilkuset klientów" },
    { label: "Co automatyzujemy", value: "Przyjmowanie, przypisywanie i nazywanie dokumentów, przypomnienia, statusy" },
    { label: "Narzędzia", value: "Skrzynka mailowa, formularz lub portal, dysk, program księgowy" },
    { label: "Zasada", value: "Klient przesyła dokumenty tak jak dotąd, porządek robi system" },
  ],
  symptoms: {
    title: "Kiedy zbieranie dokumentów warto zautomatyzować",
    lead: "Jeśli te sytuacje są codziennością biura, zbieranie dokumentów zabiera więcej czasu niż ich księgowanie.",
    items: [
      "Dokumenty przychodzą kilkoma kanałami i trzeba je ręcznie zbierać w jednym folderze.",
      "Pliki mają przypadkowe nazwy, więc przed księgowaniem ktoś je przegląda i porządkuje.",
      "Przypomnienia o dokumentach wysyła się ręcznie, często kilka razy do tych samych klientów.",
      "Nie wiadomo bez sprawdzania, którzy klienci przesłali już wszystko za dany miesiąc.",
      "Część dokumentów ginie w skrzynkach osób, które są na urlopie.",
      "Klienci przesyłają ten sam dokument dwa razy albo zdjęcia, których nie da się odczytać.",
    ],
  },
  intro: {
    title: "Jak działa automatyczne zbieranie dokumentów",
    paragraphs: [
      "Zaczynamy od kanałów, których klienci już używają. Dokumenty mogą dalej przychodzić na wspólny adres mailowy biura, przez prosty formularz albo zdjęciem z telefonu. System rozpoznaje klienta po adresie nadawcy, numerze NIP na dokumencie lub linku przypisanym do klienta, a następnie zapisuje plik w odpowiednim folderze z czytelną nazwą: klient, miesiąc, rodzaj dokumentu.",
      "Każdy dokument jest odnotowany w zestawieniu klienta. Dzięki temu zespół widzi, kto przesłał dokumenty za dany miesiąc, a kto jeszcze nie. Zbliżający się termin uruchamia przypomnienia: najpierw uprzejme, potem bardziej stanowcze, a na końcu informację dla księgowego prowadzącego klienta.",
      "Jeśli biuro chce iść dalej, dokumenty mogą od razu trafić do odczytu danych z AI i do programu księgowego. To osobny krok, który opisujemy na stronie o odczycie dokumentów. Samo zbieranie i porządkowanie działa także bez niego.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja zbierania dokumentów",
    lead: "Zakres dopasowujemy do sposobu pracy biura i do tego, jak klienci przesyłają dokumenty.",
    items: [
      { title: "Wspólne wejście dokumentów", body: "Skrzynka mailowa, formularz lub portal, z których dokumenty trafiają do jednego miejsca." },
      { title: "Rozpoznanie klienta", body: "Przypisanie dokumentu do klienta po nadawcy, NIP lub indywidualnym linku." },
      { title: "Porządek w plikach", body: "Zapis w folderze klienta i miesiąca z jednolitą nazwą pliku." },
      { title: "Kontrola jakości", body: "Oznaczanie duplikatów, nieczytelnych zdjęć i plików w nieobsługiwanym formacie." },
      { title: "Status kompletności", body: "Zestawienie klientów z liczbą dokumentów i informacją, kto przesłał wszystko." },
      { title: "Przypomnienia", body: "Wiadomości do klientów według kalendarza biura, z treścią, którą ustalacie." },
      { title: "Lista stałych dokumentów", body: "Oczekiwane co miesiąc dokumenty klienta, np. wyciąg, lista płac, faktury od stałych dostawców." },
      { title: "Raport dla kierownika", body: "Którzy klienci najczęściej spóźniają się z dokumentami i ile czasu to kosztuje." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od dokumentu u klienta do kompletu w biurze.",
    items: [
      {
        title: "Dokument z maila",
        trigger: "Klient wysyła fakturę na adres biura",
        steps: ["Rozpoznanie klienta po nadawcy lub NIP", "Zapis w folderze klienta i miesiąca z czytelną nazwą", "Aktualizacja zestawienia dokumentów klienta"],
        result: "Dokument jest na miejscu, zanim ktokolwiek otworzy skrzynkę.",
      },
      {
        title: "Brakujące dokumenty",
        trigger: "Kilka dni przed terminem przesłania dokumentów",
        steps: ["Sprawdzenie, czy klient przesłał stałe dokumenty", "Przypomnienie z listą braków", "Informacja dla księgowego, gdy braki są nadal po terminie"],
        result: "Zespół nie musi pamiętać, do kogo dzwonić. Wie tylko o klientach, którzy wymagają rozmowy.",
      },
    ],
  },
  example: {
    title: "Zbieranie dokumentów przed i po automatyzacji",
    lead: "Przykład biura obsługującego około trzystu klientów, głównie jednoosobowe działalności i małe spółki.",
    rows: [
      { label: "Kanały", before: "Maile do kilku osób, komunikatory, papier.", after: "Wspólny adres i formularz, wszystko w jednym miejscu." },
      { label: "Porządek", before: "Pliki z przypadkowymi nazwami w skrzynkach.", after: "Folder klienta i miesiąca, jednolite nazwy." },
      { label: "Przypomnienia", before: "Telefony i maile pisane ręcznie.", after: "Automatyczne przypomnienia z listą braków." },
      { label: "Status", before: "Arkusz aktualizowany, gdy ktoś znajdzie czas.", after: "Zestawienie kompletności na bieżąco." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym biurze.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Cztery etapy. Nowy sposób przyjmowania dokumentów uruchamiamy najpierw dla wybranej grupy klientów.",
    phases: [
      { title: "Przegląd", duration: "kilka dni", body: "Sprawdzamy, jak dziś przychodzą dokumenty, gdzie są przechowywane i jak wygląda kalendarz biura.", fromYou: "Rozmowa z osobą, która zbiera dokumenty, i dostęp do przykładowych plików." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy kanały, strukturę folderów, nazwy plików, harmonogram i treść przypomnień.", fromYou: "Akceptacja zasad i treści wiadomości do klientów." },
      { title: "Pilotaż", duration: "zwykle 2–4 tygodnie", body: "Uruchamiamy rozwiązanie dla kilkunastu klientów i poprawiamy to, co wymaga dopasowania.", fromYou: "Wybór klientów do pilotażu i uwagi zespołu." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy wszystkich klientów i pilnujemy działania przy kolejnych zamknięciach miesiąca.", fromYou: "Informacja dla klientów o adresie lub formularzu do przesyłania dokumentów." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od porządku w dokumentach i przypomnień, a odczyt danych dodać później.",
    items: [
      { name: "Porządek i przypomnienia", description: "Dla biur, które chcą skończyć z pogonią za dokumentami.", includes: ["Wspólne wejście dokumentów", "Rozpoznanie klienta i porządek w plikach", "Przypomnienia o brakach", "Status kompletności"] },
      { name: "Portal klienta", description: "Dla biur, które chcą dać klientom jedno miejsce na dokumenty i informacje.", includes: ["Wszystko z wariantu Porządek i przypomnienia", "Formularz lub portal dla klienta", "Lista stałych dokumentów", "Historia przesłanych plików"] },
      { name: "Dokumenty i odczyt danych", description: "Dla biur, które chcą od razu ograniczyć przepisywanie.", includes: ["Wszystko z wariantu Portal klienta", "Odczyt danych z AI", "Przekazanie danych do programu księgowego", "Raport dla kierownika"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po przeglądzie. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba kanałów, którymi przychodzą dokumenty,",
      "liczba klientów i dokumentów miesięcznie,",
      "miejsce przechowywania dokumentów i integracja z programem księgowym,",
      "zakres przypomnień i raportów,",
      "to, czy potrzebny jest portal lub formularz dla klientów.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Dokument trafi do złego klienta.", mitigation: "Przypisanie opiera się na kilku cechach naraz, a dokumenty bez pewnego dopasowania trafiają do kolejki do sprawdzenia." },
      { risk: "Przypomnienia zirytują klientów.", mitigation: "Treść i częstotliwość ustalacie sami, a dla wybranych klientów przypomnienia można wyłączyć." },
      { risk: "Klienci będą dalej wysyłać dokumenty do księgowych prywatnie.", mitigation: "Obsługujemy też skrzynki księgowych, a przekierowania ustawiamy tak, żeby dokumenty i tak trafiały do wspólnego miejsca." },
      { risk: "Dane klientów w niewłaściwym miejscu.", mitigation: "Dokumenty zostają w waszym magazynie plików, z uprawnieniami według księgowych prowadzących klientów." },
    ],
  },
  faq: [
    { question: "Czy klienci muszą korzystać z nowej aplikacji?", answer: "Nie. Dokumenty mogą dalej przychodzić mailem. Formularz lub portal to opcja dla biur, które chcą uporządkować kontakt z klientami." },
    { question: "Gdzie są przechowywane dokumenty?", answer: "W miejscu, którego biuro już używa, np. na dysku w Microsoft 365 lub Google Workspace albo na serwerze biura. Nie przenosimy ich do nowych usług bez potrzeby." },
    { question: "Czy system rozpozna klienta, który pisze z różnych adresów?", answer: "Tak. Oprócz adresu nadawcy korzysta z numeru NIP na dokumencie i indywidualnych linków. Dokumenty bez pewnego dopasowania trafiają do sprawdzenia przez zespół." },
    { question: "Czy przypomnienia mogą wychodzić SMS-em?", answer: "Tak, jeśli biuro korzysta z bramki SMS. Najczęściej zaczynamy od maila, a SMS dodajemy dla klientów, którzy nie reagują na wiadomości." },
    { question: "Czy to działa z dokumentami z KSeF?", answer: "Tak. Faktury z KSeF mogą trafiać do tego samego zestawienia klienta co dokumenty przesłane mailem. Opisujemy to na stronie o KSeF w biurze rachunkowym." },
  ],
  relatedServiceSlugs: ["cyfryzacja-danych-i-dokumentow", "automatyzacja-dla-ksiegowosci", "ai-w-obsludze-dokumentow"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych"],
  relatedToolSlugs: ["n8n", "microsoft-365", "google-workspace"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-biurze-rachunkowym", "ksef-w-pracy-biura-rachunkowego", "cyfryzacja-danych-w-firmie"],
};
