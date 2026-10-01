import type { ToolContent } from "../types";

export const powerAutomate: ToolContent = {
  slug: "power-automate",
  metaTitle: "Power Automate: wdrożenia w Microsoft 365 | Automation Minds",
  metaDescription:
    "Automatyzujemy procesy w Power Automate: obieg dokumentów w SharePoint, akceptacje w Teams, Outlook, Excel i aplikacje desktopowe. Konsultacja 30 min.",
  primaryKeyword: "wdrożenie Power Automate",
  updatedAt: "2026-10-01",
  hero: {
    eyebrow: "Platforma automatyzacji",
    title: "Power Automate: automatyzacja procesów w Microsoft 365",
    lead: "Jeśli wasza firma pracuje w Outlooku, Teams, SharePoint i Excelu, Power Automate jest naturalnym miejscem na automatyzacje. Budujemy w nim akceptacje, obieg dokumentów i raporty, a gdy trzeba, automatyzujemy też starsze aplikacje desktopowe.",
    bullets: [
      "Akceptacje i obieg dokumentów w Teams i SharePoint",
      "Automatyzacja aplikacji desktopowych bez API",
      "Wykorzystanie licencji, które już macie",
    ],
  },
  intro: {
    title: "Czym jest Power Automate i dla kogo",
    paragraphs: [
      "Power Automate to narzędzie Microsoftu do automatyzacji, wbudowane w Microsoft 365. Przepływy w chmurze łączą Outlooka, Teams, SharePoint, Excel, Forms i wiele zewnętrznych usług. Przepływy desktopowe potrafią obsłużyć programy, które nie mają API, klikając w nie tak jak człowiek.",
      "Największa zaleta to integracja z tym, czego firma już używa. Akceptacja faktury w Teams, plik zapisany automatycznie w odpowiednim folderze SharePoint, przypomnienie w Outlooku: wszystko działa w znanym środowisku i z tymi samymi uprawnieniami.",
      "Trzeba jednak uważać na licencje. Część konektorów i funkcji wymaga płatnych planów ponad standardowe Microsoft 365. Zanim zaczniemy, sprawdzamy, co obejmują wasze licencje, żeby nie było niespodzianek.",
    ],
  },
  useCases: {
    title: "Co najczęściej budujemy w Power Automate",
    lead: "Power Automate wybieramy tam, gdzie proces dzieje się w narzędziach Microsoftu albo w starszych aplikacjach na komputerach.",
    items: [
      { title: "Akceptacje w Teams", body: "Faktury, wnioski urlopowe i zamówienia trafiają do akceptacji w Teams, z historią decyzji." },
      { title: "Obieg dokumentów w SharePoint", body: "Dokumenty trafiają do właściwych folderów, dostają metadane i przechodzą przez kolejne etapy zatwierdzania." },
      { title: "Raporty z Excela", body: "Dane z kilku plików i systemów łączone w raport odświeżany automatycznie." },
      { title: "Automatyzacja aplikacji desktopowych", body: "Przepływy desktopowe przenoszą dane do starszych programów, które nie mają API." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy w Power Automate",
    lead: "Typowe procesy, które automatyzujemy w firmach pracujących w Microsoft 365.",
    items: [
      {
        title: "Akceptacja faktury",
        trigger: "Nowa faktura w folderze SharePoint lub skrzynce Outlook",
        steps: ["Odczyt danych z dokumentu", "Karta akceptacji w Teams dla kierownika", "Zapis decyzji i przekazanie do księgowości"],
        result: "Akceptacja trwa minuty, a każda decyzja jest zapisana.",
      },
      {
        title: "Wniosek urlopowy",
        trigger: "Formularz w Forms lub Teams",
        steps: ["Sprawdzenie dostępnych dni", "Akceptacja przełożonego w Teams", "Wpis do kalendarza zespołu"],
        result: "Bez maili i arkuszy z urlopami.",
      },
      {
        title: "Dane do starego programu",
        trigger: "Nowe zamówienie w systemie w chmurze",
        steps: ["Pobranie danych zamówienia", "Przepływ desktopowy wpisuje je do programu na komputerze", "Potwierdzenie i zapis wyniku"],
        result: "Koniec przepisywania danych do aplikacji bez integracji.",
      },
    ],
  },
  fit: {
    title: "Kiedy Power Automate się sprawdzi, a kiedy wybierzemy coś innego",
    good: [
      "Firma pracuje w Microsoft 365: Outlook, Teams, SharePoint, Excel.",
      "Procesy wymagają akceptacji i uprawnień zgodnych z kontami firmowymi.",
      "Trzeba automatyzować starsze aplikacje desktopowe bez API.",
      "Dział IT woli trzymać automatyzacje w środowisku Microsoftu.",
    ],
    limits: [
      "Firma pracuje głównie w Google Workspace i aplikacjach spoza Microsoftu. Wtedy lepszy jest Make lub n8n.",
      "Potrzebne są konektory premium, a licencje byłyby droższe niż alternatywa.",
      "Przepływ ma bardzo złożoną logikę na danych z wielu zewnętrznych systemów.",
    ],
  },
  comparison: {
    title: "Power Automate, Make czy n8n",
    lead: "Power Automate wygrywa w środowisku Microsoftu i przy aplikacjach desktopowych. Poza nim Make i n8n bywają wygodniejsze.",
    columns: ["Power Automate", "Make", "n8n"],
    rows: [
      { label: "Integracja z Microsoft 365", values: ["Najgłębsza", "Dobra", "Dobra"] },
      { label: "Aplikacje desktopowe bez API", values: ["Tak, przepływy desktopowe", "Nie", "Ograniczone"] },
      { label: "Integracje spoza Microsoftu", values: ["Dobre, część płatna", "Bardzo dobre", "Bardzo dobre"] },
      { label: "Licencje", values: ["Część w Microsoft 365, reszta dodatkowo", "Abonament za operacje", "Chmura lub własny serwer"] },
      { label: "Zarządzanie przez IT", values: ["W panelu Microsoftu", "Osobne konto", "Osobne konto lub serwer"] },
    ],
    note: "Porównanie jest uproszczone. W wielu firmach łączymy Power Automate z innym narzędziem.",
  },
  example: {
    title: "Obieg faktur przed i po wdrożeniu Power Automate",
    lead: "Przykład firmy usługowej pracującej w Microsoft 365, z akceptacją faktur przez kierowników działów.",
    rows: [
      { label: "Faktura", before: "Przychodzi mailem, księgowa przekazuje ją dalej.", after: "Trafia automatycznie do folderu SharePoint z danymi dokumentu." },
      { label: "Akceptacja", before: "Kierownik odpowiada mailem, czasem po tygodniu.", after: "Karta akceptacji w Teams z przypomnieniem po 2 dniach." },
      { label: "Historia", before: "Decyzje rozproszone w skrzynkach.", after: "Każda decyzja zapisana przy dokumencie." },
      { label: "Księgowość", before: "Księgowa pyta, co zostało zatwierdzone.", after: "Lista zaakceptowanych faktur gotowa do księgowania." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszym procesie.",
  },
  costs: {
    title: "Ile kosztuje Power Automate",
    paragraphs: [
      "Podstawowe przepływy w chmurze ze standardowymi konektorami są dostępne w wielu planach Microsoft 365. Konektory premium, przepływy desktopowe w trybie bez nadzoru i część funkcji wymagają dodatkowych licencji Power Automate.",
      "Na konsultacji sprawdzamy, co obejmują wasze licencje, i projektujemy przepływy tak, żeby nie płacić za więcej, niż trzeba. Wycenę wdrożenia przygotowujemy przed startem.",
    ],
  },
  faq: [
    { question: "Czy Power Automate jest w cenie Microsoft 365?", answer: "W wielu planach Microsoft 365 można budować przepływy ze standardowymi konektorami. Konektory premium i niektóre funkcje wymagają osobnej licencji. Sprawdzamy to przed wdrożeniem." },
    { question: "Czy Power Automate obsłuży program bez API?", answer: "Tak, przez przepływy desktopowe, które wykonują kliknięcia i wpisują dane w aplikacji tak jak człowiek. To dobre rozwiązanie dla starszych programów, choć wrażliwe na zmiany ekranów." },
    { question: "Czy da się zrobić akceptacje w Teams?", answer: "Tak. Akceptacje faktur, wniosków i zamówień w Teams to jedno z najczęstszych wdrożeń Power Automate." },
    { question: "Power Automate czy Make?", answer: "Jeśli procesy dzieją się głównie w Microsoft 365, Power Automate. Jeśli łączycie wiele aplikacji spoza Microsoftu, często wygodniejszy jest Make. Bywa, że korzystamy z obu." },
    { question: "Kto zarządza przepływami po wdrożeniu?", answer: "Przepływy działają na kontach w waszym środowisku Microsoft 365. Ustalamy właścicieli, dokumentujemy je i możemy się nimi dalej opiekować." },
    { question: "Czy pracujecie z SharePoint i Dataverse?", answer: "Tak. Projektujemy listy i biblioteki SharePoint, a przy większych procesach korzystamy z Dataverse jako bazy danych." },
  ],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-dla-hr", "cyfryzacja-danych-i-dokumentow", "automatyzacja-raportow"],
  relatedToolSlugs: ["microsoft-365", "make", "n8n", "ksef"],
  relatedArticleSlugs: ["jak-wybrac-narzedzie-do-automatyzacji", "automatyzacja-onboardingu-pracownika", "cyfryzacja-danych-w-firmie"],
};
