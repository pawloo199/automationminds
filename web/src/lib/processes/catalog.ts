import { Banknote, Briefcase, Headset, Settings2, Users } from "lucide-react";
import type { ProcessArea, ProcessAreaId, ProcessCatalogEntry } from "./types";

export const PROCESSES_HUB_PATH = "/procesy";

export function processPath(slug: string) {
  return `${PROCESSES_HUB_PATH}/${slug}`;
}

export const PROCESS_AREAS: ProcessArea[] = [
  { id: "finanse", name: "Finanse i księgowość", description: "Faktury, płatności, rozrachunki i raporty finansowe.", icon: Banknote },
  { id: "sprzedaz", name: "Sprzedaż i marketing", description: "Zapytania, oferty, CRM i obsługa leadów.", icon: Briefcase },
  { id: "obsluga", name: "Obsługa klienta", description: "Zgłoszenia, reklamacje, wizyty i komunikacja z klientami.", icon: Headset },
  { id: "hr", name: "Kadry i zespół", description: "Rekrutacja, onboarding, urlopy i dokumenty pracownicze.", icon: Users },
  { id: "operacje", name: "Operacje i dokumenty", description: "Zamówienia, umowy, magazyn i obieg dokumentów.", icon: Settings2 },
];

/**
 * Katalog procesów. Nowy proces: dopisz pozycję, dodaj treść w content/
 * i zmień status na „live”. Pozycje „planned” pokazują się w hubie bez linku.
 */
export const PROCESSES: ProcessCatalogEntry[] = [
  { slug: "obieg-faktur-kosztowych", name: "Obieg i akceptacja faktur kosztowych", area: "finanse", summary: "Od pobrania faktury z KSeF lub maila, przez opis i akceptację, do księgowania i przelewu.", status: "live" },
  { slug: "przypomnienia-o-platnosciach", name: "Przypomnienia o płatnościach i windykacja", area: "finanse", summary: "Automatyczne przypomnienia przed i po terminie, eskalacja i raport należności.", status: "planned" },
  { slug: "raporty-finansowe", name: "Raporty finansowe dla zarządu", area: "finanse", summary: "Sprzedaż, koszty i płynność zbierane z kilku systemów w jeden raport.", status: "planned" },
  { slug: "obsluga-zapytan-i-leadow", name: "Obsługa zapytań i leadów", area: "sprzedaz", summary: "Zapytanie z formularza, maila lub reklamy trafia do CRM, do handlowca i dostaje odpowiedź.", status: "planned" },
  { slug: "ofertowanie", name: "Przygotowanie ofert", area: "sprzedaz", summary: "Oferta z szablonu, kalkulacja z cennika i przypomnienia o follow-upie.", status: "planned" },
  { slug: "obsluga-reklamacji", name: "Obsługa reklamacji i zwrotów", area: "obsluga", summary: "Zgłoszenie, decyzja, komunikacja z klientem i korekta bez gubienia spraw.", status: "planned" },
  { slug: "umawianie-wizyt", name: "Umawianie wizyt i przypomnienia", area: "obsluga", summary: "Rezerwacja online, potwierdzenia, przypomnienia i przekładanie terminów.", status: "planned" },
  { slug: "onboarding-pracownika", name: "Onboarding nowego pracownika", area: "hr", summary: "Umowa, dostępy, sprzęt i szkolenia uruchamiane z jednej listy zadań.", status: "planned" },
  { slug: "wnioski-urlopowe", name: "Wnioski urlopowe i nieobecności", area: "hr", summary: "Wniosek, akceptacja przełożonego i kalendarz zespołu bez maili i arkuszy.", status: "planned" },
  { slug: "obieg-umow", name: "Obieg i akceptacja umów", area: "operacje", summary: "Wersje, akceptacje, podpis i przypomnienia o terminach w jednym miejscu.", status: "planned" },
  { slug: "przyjmowanie-zamowien", name: "Przyjmowanie zamówień B2B", area: "operacje", summary: "Zamówienia z maili i plików trafiają do systemu po automatycznym odczycie.", status: "planned" },
];

export function getProcessEntry(slug: string) {
  return PROCESSES.find((process) => process.slug === slug);
}

export function getLiveProcesses() {
  return PROCESSES.filter((process) => process.status === "live");
}

export function getProcessArea(id: ProcessAreaId) {
  return PROCESS_AREAS.find((area) => area.id === id)!;
}
