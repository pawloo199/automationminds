import { Calculator, Scale, Truck, Warehouse } from "lucide-react";
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
