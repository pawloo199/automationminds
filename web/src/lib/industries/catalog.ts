import { Building2, Calculator, GraduationCap, HardHat, Megaphone, Scale, ShieldCheck, ShoppingCart, Stethoscope, Store, Truck, Users, Warehouse, Wrench } from "lucide-react";
import type { IndustryEntry } from "./types";

export const INDUSTRIES_HUB_PATH = "/branze";

export function industryPath(slug: string, subSlug?: string) {
  return subSlug ? `${INDUSTRIES_HUB_PATH}/${slug}/${subSlug}` : `${INDUSTRIES_HUB_PATH}/${slug}`;
}

/**
 * Katalog branż. Nowa branża: dopisz pozycję, dodaj treść w content/
 * i zmień status na „live”.
 */
export const INDUSTRIES: IndustryEntry[] = [
  {
    slug: "kancelarie-prawne",
    name: "Kancelarie prawne",
    summary: "Automatyzacja i AI dla kancelarii adwokackich i radcowskich: dokumenty, sprawy, klienci i wiedza kancelarii.",
    icon: Scale,
    status: "live",
    mainPageLabel: "Automatyzacja kancelarii",
    featuredCitySlugs: ["warszawa", "krakow", "wroclaw", "poznan", "gdansk", "lodz", "katowice", "szczecin", "lublin"],
    cta: {
      midTitle: "Porozmawiajmy o waszej kancelarii",
      midBody: "W 30 minut przejdziemy przez to, co najbardziej zabiera wam czas, i powiemy, od czego zacząć. Rozmowa jest poufna i do niczego nie zobowiązuje.",
      formTitle: "Porozmawiajmy o automatyzacji kancelarii",
      formBody: "Opowiedz, jak dziś pracuje kancelaria i co zabiera najwięcej czasu. W 30 minut wskażemy, od czego zacząć i jak zadbać o bezpieczeństwo danych.",
      processesTitle: "Procesy, które automatyzujemy w kancelariach",
      solutionsTitle: "Rozwiązania dla kancelarii",
    },
  },
  {
    slug: "biura-rachunkowe",
    name: "Biura rachunkowe",
    summary: "Automatyzacja i AI dla biur rachunkowych i kancelarii podatkowych: dokumenty od klientów, KSeF, terminy i komunikacja.",
    icon: Calculator,
    status: "live",
    mainPageLabel: "Automatyzacja biur rachunkowych",
    featuredCitySlugs: ["warszawa", "krakow", "wroclaw", "poznan", "gdansk", "lodz", "katowice", "szczecin", "lublin"],
    cta: {
      midTitle: "Porozmawiajmy o waszym biurze",
      midBody: "W 30 minut przejdziemy przez to, co najbardziej obciąża zespół, i powiemy, od czego zacząć. Rozmowa jest poufna i do niczego nie zobowiązuje.",
      formTitle: "Porozmawiajmy o automatyzacji biura rachunkowego",
      formBody: "Opowiedz, jak dziś pracuje biuro i co zabiera najwięcej czasu. W 30 minut wskażemy, od czego zacząć i jak zadbać o bezpieczeństwo danych klientów.",
      processesTitle: "Procesy, które automatyzujemy w biurach rachunkowych",
      solutionsTitle: "Rozwiązania dla biur rachunkowych",
    },
  },
  {
    slug: "spedycja",
    name: "Spedycja",
    summary: "Automatyzacja i AI dla firm spedycyjnych: zapytania i wyceny, zlecenia, przewoźnicy, statusy, dokumenty i rozliczenia frachtu.",
    icon: Truck,
    status: "live",
    mainPageLabel: "Automatyzacja spedycji",
    featuredCitySlugs: ["warszawa", "lodz", "poznan", "wroclaw", "gdansk", "gdynia", "szczecin", "katowice", "krakow"],
    cta: {
      midTitle: "Porozmawiajmy o waszej spedycji",
      midBody: "W 30 minut przejdziemy przez to, co najbardziej obciąża spedytorów, i powiemy, od czego zacząć. Rozmowa jest bezpłatna i do niczego nie zobowiązuje.",
      formTitle: "Porozmawiajmy o automatyzacji spedycji",
      formBody: "Opowiedz, jak dziś pracuje firma i co zabiera spedytorom najwięcej czasu. W 30 minut wskażemy, od czego zacząć i co da się połączyć z waszym TMS.",
      processesTitle: "Procesy, które automatyzujemy w spedycji",
      solutionsTitle: "Rozwiązania dla spedycji",
    },
  },
  {
    slug: "firmy-logistyczne",
    name: "Firmy logistyczne i magazyny",
    summary: "Automatyzacja i AI dla operatorów logistycznych, magazynów i firm transportowych: zlecenia klientów, awizacje, dokumenty, flota i rozliczenia usług.",
    icon: Warehouse,
    status: "live",
    mainPageLabel: "Automatyzacja firm logistycznych",
    featuredCitySlugs: ["warszawa", "lodz", "poznan", "wroclaw", "katowice", "gliwice", "gdansk", "szczecin", "krakow"],
    cta: {
      midTitle: "Porozmawiajmy o waszej firmie logistycznej",
      midBody: "W 30 minut przejdziemy przez to, co najbardziej obciąża biuro obsługi klienta, magazyn i dział rozliczeń, i powiemy, od czego zacząć. Rozmowa jest bezpłatna i do niczego nie zobowiązuje.",
      formTitle: "Porozmawiajmy o automatyzacji firmy logistycznej",
      formBody: "Opowiedz, jak dziś pracuje firma i co zabiera zespołowi najwięcej czasu. W 30 minut wskażemy, od czego zacząć i co da się połączyć z waszym WMS lub TMS.",
      processesTitle: "Procesy, które automatyzujemy w firmach logistycznych",
      solutionsTitle: "Rozwiązania dla firm logistycznych",
    },
  },
  {
    slug: "hurtownie-i-dystrybucja",
    name: "Hurtownie i dystrybucja",
    summary: "Automatyzacja i AI dla hurtowni, dystrybutorów i firm handlowych B2B: zamówienia, oferty i cenniki, handlowcy, zakupy, reklamacje i należności.",
    icon: Store,
    status: "live",
    mainPageLabel: "Automatyzacja hurtowni",
    featuredCitySlugs: ["warszawa", "poznan", "wroclaw", "krakow", "lodz", "katowice", "gdansk", "bydgoszcz", "lublin"],
    cta: {
      midTitle: "Porozmawiajmy o waszej hurtowni",
      midBody: "W 30 minut przejdziemy przez to, co najbardziej obciąża dział handlowy i obsługę zamówień, i powiemy, od czego zacząć. Rozmowa jest bezpłatna i do niczego nie zobowiązuje.",
      formTitle: "Porozmawiajmy o automatyzacji hurtowni",
      formBody: "Opowiedz, jak dziś pracuje firma i co zabiera handlowcom i biuru najwięcej czasu. W 30 minut wskażemy, od czego zacząć i co da się połączyć z waszym ERP.",
      processesTitle: "Procesy, które automatyzujemy w hurtowniach",
      solutionsTitle: "Rozwiązania dla hurtowni i dystrybutorów",
    },
  },
  {
    slug: "agencje-marketingowe",
    name: "Agencje marketingowe",
    summary: "Automatyzacja i AI dla agencji marketingowych, reklamowych i interaktywnych: briefy i wyceny, raporty dla klientów, akceptacje, treści, projekty i rentowność.",
    icon: Megaphone,
    status: "live",
    mainPageLabel: "Automatyzacja agencji marketingowej",
    featuredCitySlugs: ["warszawa", "krakow", "wroclaw", "poznan", "gdansk", "lodz", "katowice", "szczecin", "lublin"],
    cta: {
      midTitle: "Porozmawiajmy o waszej agencji",
      midBody: "W 30 minut przejdziemy przez to, co zabiera zespołowi czas poza pracą kreatywną, i powiemy, od czego zacząć. Rozmowa jest bezpłatna i do niczego nie zobowiązuje.",
      formTitle: "Porozmawiajmy o automatyzacji agencji",
      formBody: "Opowiedz, jak dziś pracuje agencja i co zabiera zespołowi najwięcej czasu. W 30 minut wskażemy, od czego zacząć i jak bezpiecznie korzystać z AI.",
      processesTitle: "Procesy, które automatyzujemy w agencjach",
      solutionsTitle: "Rozwiązania dla agencji marketingowych",
    },
  },
  {
    slug: "nieruchomosci",
    name: "Nieruchomości",
    summary: "Automatyzacja i AI dla biur nieruchomości i firm zarządzających nieruchomościami: leady, oferty, umowy, najemcy, zgłoszenia i rozliczenia.",
    icon: Building2,
    status: "live",
    mainPageLabel: "Automatyzacja biura nieruchomości",
    featuredCitySlugs: ["warszawa", "krakow", "wroclaw", "poznan", "gdansk", "gdynia", "lodz", "katowice", "szczecin"],
    cta: {
      midTitle: "Porozmawiajmy o waszym biurze lub zarządzaniu",
      midBody: "W 30 minut przejdziemy przez to, co najbardziej obciąża agentów lub zarządców, i powiemy, od czego zacząć. Rozmowa jest bezpłatna i do niczego nie zobowiązuje.",
      formTitle: "Porozmawiajmy o automatyzacji w nieruchomościach",
      formBody: "Opowiedz, czy prowadzicie pośrednictwo, zarządzanie czy oba, i co zabiera zespołowi najwięcej czasu. W 30 minut wskażemy, od czego zacząć.",
      processesTitle: "Procesy, które automatyzujemy w nieruchomościach",
      solutionsTitle: "Rozwiązania dla nieruchomości",
    },
  },
  {
    slug: "posrednictwo-ubezpieczeniowe",
    name: "Pośrednictwo ubezpieczeniowe",
    summary: "Automatyzacja i AI dla agencji ubezpieczeniowych, multiagencji i brokerów: zapytania, odnowienia polis, dokumenty klientów, szkody i prowizje.",
    icon: ShieldCheck,
    status: "live",
    mainPageLabel: "Automatyzacja agencji ubezpieczeniowej",
    featuredCitySlugs: ["warszawa", "krakow", "wroclaw", "poznan", "gdansk", "lodz", "katowice", "lublin", "bydgoszcz"],
    cta: {
      midTitle: "Porozmawiajmy o waszej agencji",
      midBody: "W 30 minut przejdziemy przez to, co najbardziej obciąża agentów i biuro, i powiemy, od czego zacząć. Rozmowa jest bezpłatna i do niczego nie zobowiązuje.",
      formTitle: "Porozmawiajmy o automatyzacji w agencji ubezpieczeniowej",
      formBody: "Opowiedz, czy jesteście agencją, multiagencją czy brokerem, i co zabiera zespołowi najwięcej czasu. W 30 minut wskażemy, od czego zacząć.",
      processesTitle: "Procesy, które automatyzujemy w pośrednictwie ubezpieczeniowym",
      solutionsTitle: "Rozwiązania dla agencji ubezpieczeniowych",
    },
  },
  {
    slug: "firmy-serwisowe",
    name: "Firmy serwisowe i instalacyjne",
    summary: "Automatyzacja i AI dla firm serwisowych i instalacyjnych: zgłoszenia, planowanie wizyt, protokoły, przeglądy okresowe, wyceny i rozliczenia zleceń.",
    icon: Wrench,
    status: "live",
    mainPageLabel: "Automatyzacja firmy serwisowej",
    featuredCitySlugs: ["warszawa", "krakow", "wroclaw", "poznan", "gdansk", "lodz", "katowice", "szczecin", "rzeszow"],
    cta: {
      midTitle: "Porozmawiajmy o waszym serwisie",
      midBody: "W 30 minut przejdziemy przez to, co najbardziej obciąża biuro i serwisantów, i powiemy, od czego zacząć. Rozmowa jest bezpłatna i do niczego nie zobowiązuje.",
      formTitle: "Porozmawiajmy o automatyzacji w firmie serwisowej",
      formBody: "Opowiedz, czym zajmuje się wasz serwis, ilu macie serwisantów i co zabiera zespołowi najwięcej czasu. W 30 minut wskażemy, od czego zacząć.",
      processesTitle: "Procesy, które automatyzujemy w firmach serwisowych",
      solutionsTitle: "Rozwiązania dla firm serwisowych",
    },
  },
  {
    slug: "firmy-budowlane",
    name: "Firmy budowlane",
    summary: "Automatyzacja i AI dla firm budowlanych i wykonawczych: oferty i kosztorysy, raporty z budowy, podwykonawcy, materiały, odbiory i kontrola kosztów.",
    icon: HardHat,
    status: "live",
    mainPageLabel: "Automatyzacja firmy budowlanej",
    featuredCitySlugs: ["warszawa", "krakow", "wroclaw", "poznan", "gdansk", "lodz", "katowice", "lublin", "bialystok"],
    cta: {
      midTitle: "Porozmawiajmy o waszej firmie",
      midBody: "W 30 minut przejdziemy przez to, co najbardziej obciąża biuro i kierowników budów, i powiemy, od czego zacząć. Rozmowa jest bezpłatna i do niczego nie zobowiązuje.",
      formTitle: "Porozmawiajmy o automatyzacji w firmie budowlanej",
      formBody: "Opowiedz, jakie budowy prowadzicie, ilu macie kierowników i podwykonawców i co zabiera zespołowi najwięcej czasu. W 30 minut wskażemy, od czego zacząć.",
      processesTitle: "Procesy, które automatyzujemy w firmach budowlanych",
      solutionsTitle: "Rozwiązania dla firm budowlanych",
    },
  },
  {
    slug: "sklepy-internetowe",
    name: "Sklepy internetowe",
    summary: "Automatyzacja i AI dla sklepów internetowych: obsługa klienta, zwroty, opisy produktów, oferty i stany w wielu kanałach, zakupy i raporty marży.",
    icon: ShoppingCart,
    status: "live",
    mainPageLabel: "Automatyzacja sklepu internetowego",
    featuredCitySlugs: ["warszawa", "krakow", "wroclaw", "poznan", "gdansk", "lodz", "katowice", "szczecin", "bydgoszcz"],
    cta: {
      midTitle: "Porozmawiajmy o waszym sklepie",
      midBody: "W 30 minut przejdziemy przez to, co najbardziej obciąża zespół sklepu, i powiemy, od czego zacząć. Rozmowa jest bezpłatna i do niczego nie zobowiązuje.",
      formTitle: "Porozmawiajmy o automatyzacji sklepu internetowego",
      formBody: "Opowiedz, na jakiej platformie działa sklep, w jakich kanałach sprzedajecie i co zabiera zespołowi najwięcej czasu. W 30 minut wskażemy, od czego zacząć.",
      processesTitle: "Procesy, które automatyzujemy w sklepach internetowych",
      solutionsTitle: "Rozwiązania dla sklepów internetowych",
    },
  },
  {
    slug: "placowki-medyczne",
    name: "Placówki medyczne",
    summary: "Automatyzacja i AI dla prywatnych przychodni, gabinetów i centrów medycznych: rejestracja, przypomnienia, formularze, komunikacja, grafiki i rozliczenia.",
    icon: Stethoscope,
    status: "live",
    mainPageLabel: "Automatyzacja przychodni i gabinetu",
    featuredCitySlugs: ["warszawa", "krakow", "wroclaw", "poznan", "gdansk", "lodz", "katowice", "lublin", "rzeszow"],
    cta: {
      midTitle: "Porozmawiajmy o waszej placówce",
      midBody: "W 30 minut przejdziemy przez to, co najbardziej obciąża rejestrację i zespół, i powiemy, od czego zacząć. Rozmowa jest bezpłatna i do niczego nie zobowiązuje.",
      formTitle: "Porozmawiajmy o automatyzacji w placówce medycznej",
      formBody: "Opowiedz, jaką placówkę prowadzicie, z jakiego systemu gabinetowego korzystacie i co zabiera zespołowi najwięcej czasu. W 30 minut wskażemy, od czego zacząć.",
      processesTitle: "Procesy, które automatyzujemy w placówkach medycznych",
      solutionsTitle: "Rozwiązania dla placówek medycznych",
    },
  },
  {
    slug: "firmy-szkoleniowe",
    name: "Firmy szkoleniowe",
    summary: "Automatyzacja i AI dla firm szkoleniowych i organizatorów kursów: zapisy i płatności, organizacja szkoleń, oferty dla firm, certyfikaty, trenerzy i dokumentacja.",
    icon: GraduationCap,
    status: "live",
    mainPageLabel: "Automatyzacja firmy szkoleniowej",
    featuredCitySlugs: ["warszawa", "krakow", "wroclaw", "poznan", "gdansk", "lodz", "katowice", "lublin", "szczecin"],
    cta: {
      midTitle: "Porozmawiajmy o waszej firmie szkoleniowej",
      midBody: "W 30 minut przejdziemy przez to, co najbardziej obciąża zespół, i powiemy, od czego zacząć. Rozmowa jest bezpłatna i do niczego nie zobowiązuje.",
      formTitle: "Porozmawiajmy o automatyzacji w firmie szkoleniowej",
      formBody: "Opowiedz, jakie szkolenia prowadzicie, dla kogo i w jakiej formie, i co zabiera zespołowi najwięcej czasu. W 30 minut wskażemy, od czego zacząć.",
      processesTitle: "Procesy, które automatyzujemy w firmach szkoleniowych",
      solutionsTitle: "Rozwiązania dla firm szkoleniowych",
    },
  },
  {
    slug: "agencje-pracy",
    name: "Agencje pracy",
    summary: "Automatyzacja i AI dla agencji pracy i rekrutacji: kandydaci, zlecenia od klientów, dokumenty pracowników, ewidencja czasu pracy, rozliczenia i komunikacja.",
    icon: Users,
    status: "live",
    mainPageLabel: "Automatyzacja agencji pracy",
    featuredCitySlugs: ["warszawa", "krakow", "wroclaw", "poznan", "gdansk", "lodz", "katowice", "szczecin", "bydgoszcz"],
    cta: {
      midTitle: "Porozmawiajmy o waszej agencji",
      midBody: "W 30 minut przejdziemy przez to, co najbardziej obciąża rekruterów i biuro, i powiemy, od czego zacząć. Rozmowa jest bezpłatna i do niczego nie zobowiązuje.",
      formTitle: "Porozmawiajmy o automatyzacji w agencji pracy",
      formBody: "Opowiedz, czy prowadzicie rekrutację stałą, pracę tymczasową czy oba, ilu macie pracowników i klientów i co zabiera zespołowi najwięcej czasu. W 30 minut wskażemy, od czego zacząć.",
      processesTitle: "Procesy, które automatyzujemy w agencjach pracy",
      solutionsTitle: "Rozwiązania dla agencji pracy",
    },
  },
];

export function getIndustryEntry(slug: string) {
  return INDUSTRIES.find((industry) => industry.slug === slug);
}

export function getLiveIndustries() {
  return INDUSTRIES.filter((industry) => industry.status === "live");
}

export function getIndustriesForCity(citySlug: string) {
  return getLiveIndustries().filter((industry) => industry.featuredCitySlugs?.includes(citySlug));
}
