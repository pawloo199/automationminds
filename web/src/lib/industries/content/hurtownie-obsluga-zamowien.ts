import type { IndustryPageContent } from "../types";

export const hurtownieObslugaZamowien: IndustryPageContent = {
  industrySlug: "hurtownie-i-dystrybucja",
  subSlug: "obsluga-zamowien",
  name: "Obsługa zamówień i dostępność",
  excerpt: "Zamówienia z maili, telefonu i plików w ERP po kontroli, potwierdzenia z terminem realizacji i dostępność dla handlowców i klientów.",
  metaTitle: "Obsługa zamówień w hurtowni: ERP, dostępność, terminy",
  metaDescription:
    "Automatyzujemy obsługę zamówień w hurtowni: zamówienia z maili i PDF do ERP, dopasowanie produktów, dostępność i terminy, potwierdzenia dla klientów.",
  primaryKeyword: "obsługa zamówień w hurtowni",
  updatedAt: "2026-10-11",
  hero: {
    eyebrow: "Hurtownie: obsługa zamówień",
    title: "Obsługa zamówień w hurtowni: od maila klienta do potwierdzenia w kilka minut",
    lead: "Biuro obsługi zamówień w hurtowni codziennie przepisuje zamówienia z maili, PDF i notatek z rozmów telefonicznych, zgaduje, o który produkt chodzi klientowi, sprawdza dostępność i odpisuje z terminem. Automatyzujemy tę drogę: zamówienia są odczytywane i dopasowywane do indeksów, sprawdzane z ERP, wprowadzane po kontroli, a klient dostaje potwierdzenie z terminem realizacji.",
    bullets: [
      "Zamówienia z maili, PDF i plików w ERP po kontroli",
      "Nazwy klienta dopasowane do waszych indeksów",
      "Potwierdzenie z dostępnością i terminem dla klienta",
    ],
  },
  summary: [
    { label: "Dla kogo", value: "Hurtownie i dystrybutorzy, do których zamówienia przychodzą poza platformą B2B" },
    { label: "Co automatyzujemy", value: "Odczyt, dopasowanie, kontrolę, wprowadzenie, potwierdzenia, dostępność" },
    { label: "Narzędzia", value: "Poczta, ERP, platforma B2B, model AI, n8n" },
    { label: "Zasada", value: "Zamówienia z wątpliwościami sprawdza biuro" },
  ],
  symptoms: {
    title: "Kiedy obsługę zamówień warto zautomatyzować",
    lead: "Jeśli te sytuacje są codziennością, biuro obsługi zamówień przepisuje zamiast obsługiwać klientów.",
    items: [
      "Zamówienia z maili i PDF są przepisywane do ERP pozycja po pozycji.",
      "Klienci używają własnych nazw i kodów produktów, a biuro szuka właściwych indeksów.",
      "Potwierdzenie zamówienia z terminem wychodzi po kilku godzinach albo wcale.",
      "Handlowcy dzwonią do biura, żeby sprawdzić dostępność i termin dostawy.",
      "Błędy w zamówieniach wychodzą przy kompletacji albo u klienta.",
      "Mimo platformy B2B część klientów i tak zamawia mailem.",
    ],
  },
  intro: {
    title: "Jak działa automatyzacja obsługi zamówień",
    paragraphs: [
      "Zamówienia trafiają do systemu z poczty, a zamówienia telefoniczne z prostego formularza wypełnianego przez handlowca lub biuro. Model AI odczytuje z nich pozycje, ilości, dane klienta, adres dostawy i uwagi, niezależnie od układu dokumentu. Następnie dopasowuje nazwy i kody klienta do indeksów w ERP, korzystając z historii wcześniejszych zamówień tego klienta.",
      "Odczytane zamówienie przechodzi kontrolę: czy indeksy istnieją, czy ceny zgadzają się z warunkami klienta, czy towar jest dostępny, czy klient nie przekroczył limitu kupieckiego. Zamówienia bez zastrzeżeń trafiają do ERP automatycznie, a te z wątpliwościami na listę dla biura, z opisem problemu.",
      "Klient dostaje potwierdzenie z dostępnością i terminem realizacji, a w przypadku braków propozycję częściowej realizacji lub zamiennika do decyzji handlowca. Handlowcy widzą dostępność i terminy dostaw na telefonie, bez dzwonienia do biura. Szerzej o samym procesie przyjmowania zamówień piszemy na stronie procesu.",
    ],
  },
  scope: {
    title: "Co obejmuje automatyzacja obsługi zamówień",
    lead: "Zakres dopasowujemy do kanałów zamówień i ERP firmy.",
    items: [
      { title: "Zbieranie zamówień", body: "Zamówienia z poczty, formularza i plików w jednym miejscu." },
      { title: "Odczyt z AI", body: "Pozycje, ilości, dane klienta i uwagi z dowolnego układu." },
      { title: "Dopasowanie produktów", body: "Nazwy i kody klienta dopasowane do indeksów na podstawie historii." },
      { title: "Kontrola", body: "Indeksy, ceny, dostępność i limity kupieckie sprawdzone przed ERP." },
      { title: "Wprowadzenie do ERP", body: "Zamówienia bez zastrzeżeń w ERP automatycznie." },
      { title: "Potwierdzenia", body: "Dostępność i termin realizacji dla klienta po wprowadzeniu zamówienia." },
      { title: "Dostępność dla handlowców", body: "Stany i terminy dostaw dostępne na telefonie." },
      { title: "Lista wyjątków", body: "Zamówienia wymagające decyzji z opisem problemu." },
    ],
  },
  flows: {
    title: "Przykładowe przepływy",
    lead: "Od maila klienta do potwierdzenia.",
    items: [
      {
        title: "Zamówienie w PDF",
        trigger: "Mail z zamówieniem w PDF",
        steps: ["Odczyt pozycji i dopasowanie do indeksów", "Kontrola cen, dostępności i limitu", "Zamówienie w ERP i potwierdzenie z terminem"],
        result: "Klient dostaje potwierdzenie w kilka minut, a biuro nie przepisuje dokumentu.",
      },
      {
        title: "Brak towaru",
        trigger: "Część pozycji jest niedostępna",
        steps: ["Sprawdzenie terminu dostawy od dostawcy", "Propozycja zamiennika lub częściowej realizacji", "Decyzja handlowca i informacja dla klienta"],
        result: "Klient wie od razu, co dostanie i kiedy, a handlowiec ma pełną informację.",
      },
    ],
  },
  example: {
    title: "Obsługa zamówień przed i po automatyzacji",
    lead: "Przykład hurtowni, do której codziennie przychodzi kilkadziesiąt zamówień mailowych.",
    rows: [
      { label: "Wprowadzenie", before: "Przepisywanie pozycja po pozycji.", after: "Odczyt i wprowadzenie po kontroli." },
      { label: "Nazwy produktów", before: "Szukanie indeksów po nazwie klienta.", after: "Dopasowanie na podstawie historii." },
      { label: "Potwierdzenia", before: "Wysyłane z opóźnieniem.", after: "Z terminem, kilka minut po zamówieniu." },
      { label: "Dostępność", before: "Handlowiec dzwoni do biura.", after: "Informacja w telefonie handlowca." },
    ],
    note: "To przykład ilustracyjny. Zakres zawsze ustalamy po rozmowie o waszej firmie.",
  },
  implementation: {
    title: "Jak przebiega wdrożenie",
    lead: "Jakość odczytu i dopasowania sprawdzamy na waszych zamówieniach, zanim rozwiązanie trafi do zespołu.",
    phases: [
      { title: "Próbka zamówień", duration: "kilka dni", body: "Sprawdzamy odczyt i dopasowanie na zanonimizowanej próbce zamówień od kilku klientów.", fromYou: "Kilkadziesiąt przykładowych zamówień i dostęp do danych produktów." },
      { title: "Projekt", duration: "około tygodnia", body: "Ustalamy kontrole, zasady wyjątków, treść potwierdzeń i połączenie z ERP.", fromYou: "Akceptacja zasad." },
      { title: "Budowa i test", duration: "zwykle 3–5 tygodni", body: "Budujemy przepływ i testujemy go na zamówieniach wybranych klientów równolegle z obecnym sposobem.", fromYou: "Osoba z biura porównująca wyniki." },
      { title: "Start i opieka", duration: "stale", body: "Włączamy kolejnych klientów i pilnujemy jakości dopasowania.", fromYou: "Uwagi biura." },
    ],
  },
  variants: {
    title: "Warianty",
    lead: "Można zacząć od zamówień największych klientów.",
    items: [
      { name: "Zamówienia z maili", description: "Dla firm, które chcą skończyć z przepisywaniem.", includes: ["Odczyt zamówień", "Dopasowanie produktów", "Kontrola i wprowadzenie do ERP", "Lista wyjątków"] },
      { name: "Zamówienia i potwierdzenia", description: "Dla firm, które chcą szybciej informować klientów.", includes: ["Wszystko z wariantu Zamówienia z maili", "Potwierdzenia z terminem", "Kontrola limitów kupieckich", "Propozycje przy brakach"] },
      { name: "Zamówienia i handlowcy", description: "Dla firm, które chcą odciążyć także handlowców.", includes: ["Wszystko z wariantu Zamówienia i potwierdzenia", "Dostępność i terminy na telefonie", "Formularz zamówień telefonicznych", "Agent odpowiadający o statusy"] },
    ],
  },
  costFactors: {
    title: "Od czego zależy koszt",
    lead: "Wycenę przygotowujemy po teście na waszych zamówieniach. Na koszt wpływa przede wszystkim:",
    items: [
      "liczba zamówień dziennie i liczba klientów,",
      "wielkość asortymentu i jakość danych produktów,",
      "możliwości integracji ERP,",
      "zakres kontroli i potwierdzeń,",
      "koszt korzystania z modeli AI.",
    ],
  },
  risks: {
    title: "Na co uważamy",
    items: [
      { risk: "Zły produkt w zamówieniu.", mitigation: "Dopasowania z niską pewnością trafiają do biura, a poprawki są uwzględniane przy kolejnych zamówieniach klienta." },
      { risk: "Błędna cena w zamówieniu klienta.", mitigation: "Kontrola z warunkami klienta w ERP i oznaczanie rozbieżności do wyjaśnienia." },
      { risk: "Zamówienie klienta z zaległościami trafi do realizacji.", mitigation: "Kontrola limitu kupieckiego i decyzja handlowca lub działu finansów." },
      { risk: "Przestój automatyzacji.", mitigation: "Monitoring i możliwość przejścia na ręczne wprowadzanie bez utraty zamówień." },
    ],
  },
  faq: [
    { question: "Czy to zastąpi platformę B2B?", answer: "Nie. Platforma B2B obsługuje klientów, którzy z niej korzystają. Automatyzacja obsługuje zamówienia, które przychodzą mailem, telefonicznie i w plikach." },
    { question: "Czy AI dopasuje nazwy produktów, których używa klient?", answer: "Tak, na podstawie historii zamówień klienta i danych produktów. Niepewne dopasowania trafiają do sprawdzenia." },
    { question: "Czy zamówienia trafią do naszego ERP?", answer: "Tak, przez API, import plików lub bazę danych, zależnie od możliwości systemu. Sprawdzamy to przy przeglądzie." },
    { question: "Co z zamówieniami telefonicznymi?", answer: "Handlowiec lub biuro wypełnia prosty formularz, a zamówienie przechodzi tę samą kontrolę i trafia do ERP." },
    { question: "Czym ta strona różni się od strony procesu przyjmowania zamówień?", answer: "Strona procesu opisuje przyjmowanie zamówień w każdej firmie. Tu opisujemy obsługę zamówień w hurtowni, z dopasowaniem produktów, dostępnością i pracą handlowców." },
  ],
  relatedServiceSlugs: ["ai-w-obsludze-dokumentow", "automatyzacja-sprzedazy", "integracje-systemow"],
  relatedProcessSlugs: ["przyjmowanie-zamowien"],
  relatedToolSlugs: ["n8n", "chatgpt", "microsoft-365"],
  relatedArticleSlugs: ["gotowa-automatyzacja-czy-budowana-od-zera", "porzadek-w-danych-przed-ai-i-automatyzacja", "jak-mierzyc-roi-automatyzacji"],
};
