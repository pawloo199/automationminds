import {
  ArrowRightLeft,
  BarChart3,
  Bot,
  BrainCircuit,
  Briefcase,
  Calculator,
  ClipboardCheck,
  Compass,
  Database,
  Factory,
  FileScan,
  GraduationCap,
  Headphones,
  ListChecks,
  Megaphone,
  MessageSquareText,
  Plug,
  Puzzle,
  ScanLine,
  Sparkles,
  Table2,
  TrendingUp,
  Truck,
  Users,
  Waypoints,
  Workflow,
} from "lucide-react";
import type {
  ServiceCatalogEntry,
  ServiceGroup,
  ServiceGroupId,
} from "./types";

/**
 * Katalog usług: jedno źródło dla mega menu, stopki, strony /uslugi,
 * formularzy i sitemap. Lekki plik (bez treści stron), więc można go
 * importować także w komponentach klienckich.
 */
export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "doradztwo",
    name: "Doradztwo i strategia",
    description: "Audyt, mapowanie procesów, strategia AI i szkolenia.",
    icon: Compass,
  },
  {
    id: "ai",
    name: "Sztuczna inteligencja",
    description: "Asystenci, agenci i chatboty AI pracujący na danych firmy.",
    icon: BrainCircuit,
  },
  {
    id: "dane",
    name: "Dane i cyfryzacja",
    description: "Porządek w danych, bazy danych, cyfryzacja i raporty.",
    icon: Database,
  },
  {
    id: "automatyzacja",
    name: "Automatyzacja procesów",
    description: "Automatyzacje dla działów i integracje systemów.",
    icon: Workflow,
  },
];

export const SERVICE_CATALOG: ServiceCatalogEntry[] = [
  // Doradztwo i strategia
  {
    slug: "audyt-procesow-biznesowych",
    name: "Audyt procesów biznesowych",
    menuLabel: "Audyt procesów",
    menuDescription: "Sprawdzamy, gdzie zespół traci czas i co opłaca się zautomatyzować.",
    group: "doradztwo",
    icon: ClipboardCheck,
    status: "live",
  },
  {
    slug: "doradztwo-i-optymalizacja-procesow-biznesowych",
    name: "Mapowanie i optymalizacja procesów",
    menuLabel: "Mapowanie procesów",
    menuDescription: "Rozrysowujemy procesy i usuwamy zbędne kroki przed automatyzacją.",
    group: "doradztwo",
    icon: Waypoints,
    status: "live",
  },
  {
    slug: "strategia-wdrozenia-ai",
    name: "Strategia i wdrożenie AI w firmie",
    menuLabel: "Strategia i wdrożenie AI",
    menuDescription: "Wybieramy zastosowania AI z realnym zwrotem i prowadzimy wdrożenie.",
    group: "doradztwo",
    icon: Compass,
    status: "live",
  },
  {
    slug: "szkolenia-ai-dla-zespolow",
    name: "Szkolenia z AI dla zespołów",
    menuLabel: "Szkolenia z AI",
    menuDescription: "Praktyczne warsztaty z AI na zadaniach waszego zespołu.",
    group: "doradztwo",
    icon: GraduationCap,
    status: "live",
  },

  // Sztuczna inteligencja
  {
    slug: "asystent-ai-na-firmowej-wiedzy",
    name: "Asystent AI na firmowej wiedzy",
    menuLabel: "Asystent AI na firmowej wiedzy",
    menuDescription: "Odpowiada na pytania zespołu na podstawie waszych dokumentów.",
    group: "ai",
    icon: Bot,
    status: "live",
  },
  {
    slug: "ai-w-obsludze-dokumentow",
    name: "AI w obsłudze dokumentów",
    menuLabel: "AI w obsłudze dokumentów",
    menuDescription: "Odczyt faktur, umów i zamówień bez ręcznego przepisywania.",
    group: "ai",
    icon: FileScan,
    status: "live",
  },
  {
    slug: "agenci-ai",
    name: "Agenci AI w procesach firmy",
    menuLabel: "Agenci AI",
    menuDescription: "Wykonują wieloetapowe zadania, a człowiek zatwierdza decyzje.",
    group: "ai",
    icon: Sparkles,
    status: "live",
  },
  {
    slug: "chatbot-ai-dla-firmy",
    name: "Chatbot AI dla firmy",
    menuLabel: "Chatbot AI dla klientów",
    menuDescription: "Odpowiada klientom na stronie i w Messengerze o każdej porze.",
    group: "ai",
    icon: MessageSquareText,
    status: "live",
  },
  {
    slug: "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    name: "Niestandardowe rozwiązania AI i integracje",
    menuLabel: "Niestandardowe rozwiązania AI",
    menuDescription: "Rozwiązania budowane pod wasz proces, gdy gotowe narzędzia nie wystarczą.",
    group: "ai",
    icon: Puzzle,
    status: "live",
  },

  // Dane i cyfryzacja
  {
    slug: "porzadkowanie-i-strukturyzowanie-danych",
    name: "Porządkowanie i strukturyzowanie danych",
    menuLabel: "Porządkowanie danych",
    menuDescription: "Jedna wersja prawdy zamiast kilku arkuszy z różnymi liczbami.",
    group: "dane",
    icon: ListChecks,
    status: "live",
  },
  {
    slug: "projektowanie-baz-danych",
    name: "Projektowanie baz danych",
    menuLabel: "Projektowanie baz danych",
    menuDescription: "Struktura danych, która rośnie razem z firmą.",
    group: "dane",
    icon: Database,
    status: "live",
  },
  {
    slug: "przygotowanie-danych-pod-ai",
    name: "Przygotowanie danych pod AI",
    menuLabel: "Przygotowanie danych pod AI",
    menuDescription: "Dokumenty i dane uporządkowane tak, żeby AI z nich korzystało.",
    group: "dane",
    icon: BrainCircuit,
    status: "live",
  },
  {
    slug: "cyfryzacja-danych-i-dokumentow",
    name: "Cyfryzacja danych i dokumentów",
    menuLabel: "Cyfryzacja dokumentów",
    menuDescription: "Z papieru i skanów do uporządkowanej bazy, którą da się przeszukać.",
    group: "dane",
    icon: ScanLine,
    status: "live",
  },
  {
    slug: "migracja-danych",
    name: "Migracja danych",
    menuLabel: "Migracja danych",
    menuDescription: "Przeniesienie danych do nowego systemu bez utraty historii.",
    group: "dane",
    icon: ArrowRightLeft,
    status: "live",
  },
  {
    slug: "wdrozenia-airtable",
    name: "Wdrożenia Airtable",
    menuLabel: "Wdrożenia Airtable",
    menuDescription: "Bazy, widoki i aplikacje w Airtable dopasowane do waszej pracy.",
    group: "dane",
    icon: Table2,
    status: "live",
  },
  {
    slug: "automatyzacja-raportow",
    name: "Raporty i dashboardy",
    menuLabel: "Raporty i dashboardy",
    menuDescription: "Raporty, które aktualizują się same i pokazują to, co ważne.",
    group: "dane",
    icon: BarChart3,
    status: "live",
  },

  // Automatyzacja procesów
  {
    slug: "automatyzacja-sprzedazy",
    name: "Automatyzacja sprzedaży",
    menuLabel: "Sprzedaż",
    menuDescription: "Leady, oferty i follow-upy bez przepisywania i zapominania.",
    group: "automatyzacja",
    icon: TrendingUp,
    status: "live",
  },
  {
    slug: "automatyzacja-marketingu",
    name: "Automatyzacja marketingu",
    menuLabel: "Marketing",
    menuDescription: "Kampanie, segmentacja i raporty z kanałów w jednym przepływie.",
    group: "automatyzacja",
    icon: Megaphone,
    status: "live",
  },
  {
    slug: "automatyzacja-dla-ksiegowosci",
    name: "Automatyzacja księgowości i finansów",
    menuLabel: "Księgowość i finanse",
    menuDescription: "Faktury, KSeF, płatności i rozrachunki bez ręcznego przepisywania.",
    group: "automatyzacja",
    icon: Calculator,
    status: "live",
  },
  {
    slug: "automatyzacja-dla-hr",
    name: "Automatyzacja HR",
    menuLabel: "HR i kadry",
    menuDescription: "Rekrutacja, onboarding i dokumenty pracownicze w jednym procesie.",
    group: "automatyzacja",
    icon: Users,
    status: "live",
  },
  {
    slug: "automatyzacja-w-obsludze-klienta",
    name: "Automatyzacja obsługi klienta",
    menuLabel: "Obsługa klienta",
    menuDescription: "Zgłoszenia trafiają do właściwej osoby, a klient dostaje odpowiedź szybciej.",
    group: "automatyzacja",
    icon: Headphones,
    status: "live",
  },
  {
    slug: "automatyzacja-w-produkcji",
    name: "Automatyzacja w produkcji",
    menuLabel: "Produkcja",
    menuDescription: "Zlecenia, stany i raporty zmianowe bez papierowych kart.",
    group: "automatyzacja",
    icon: Factory,
    status: "live",
  },
  {
    slug: "automatyzacja-dla-firm-uslugowych",
    name: "Automatyzacja dla firm usługowych",
    menuLabel: "Firmy usługowe",
    menuDescription: "Zlecenia, terminy, protokoły i rozliczenia w jednym przepływie.",
    group: "automatyzacja",
    icon: Briefcase,
    status: "live",
  },
  {
    slug: "automatyzacja-dla-logistyki",
    name: "Automatyzacja logistyki",
    menuLabel: "Logistyka",
    menuDescription: "Zamówienia, wysyłki i statusy przesyłek bez ręcznego pilnowania.",
    group: "automatyzacja",
    icon: Truck,
    status: "live",
  },
  {
    slug: "integracje-systemow",
    name: "Integracje systemów",
    menuLabel: "Integracje systemów",
    menuDescription: "Łączymy CRM, ERP, sklep i księgowość, żeby dane płynęły same.",
    group: "automatyzacja",
    icon: Plug,
    status: "live",
  },
];

/** Stare adresy usług przeniesione na nowe (301, patrz next.config.ts). */
export const SERVICE_REDIRECTS: Record<string, string> = {
  "automatyzacja-dla-sprzedazy-i-marketingu": "automatyzacja-sprzedazy",
  "automatyzacja-w-produkcji-i-uslugach": "automatyzacja-w-produkcji",
};

export const SERVICES_HUB_PATH = "/uslugi";

export function servicePath(slug: string) {
  return `${SERVICES_HUB_PATH}/${slug}`;
}

export function serviceGroupAnchor(groupId: ServiceGroupId) {
  return `${SERVICES_HUB_PATH}#${groupId}`;
}

/** Usługi, które mają stronę (live lub legacy). */
export function getPublishedServices() {
  return SERVICE_CATALOG.filter((service) => service.status !== "planned");
}

export function getCatalogEntry(slug: string) {
  return SERVICE_CATALOG.find((service) => service.slug === slug);
}

/** Opublikowana usługa dla sluga, także starego (przekierowanego). */
export function resolvePublishedService(slug: string) {
  const entry = getCatalogEntry(SERVICE_REDIRECTS[slug] ?? slug);
  return entry && entry.status !== "planned" ? entry : undefined;
}

export function getServiceGroup(groupId: ServiceGroupId) {
  return SERVICE_GROUPS.find((group) => group.id === groupId)!;
}

export function getPublishedServicesByGroup() {
  const published = getPublishedServices();
  return SERVICE_GROUPS.map((group) => ({
    group,
    services: published.filter((service) => service.group === group.id),
  })).filter((entry) => entry.services.length > 0);
}

/**
 * Opcje „Czego dotyczy zapytanie” w formularzach. Obszary zamiast pełnej
 * listy usług, żeby formularz pozostał krótki.
 */
export const CONTACT_FORM_SERVICE_OPTIONS = [
  { id: "doradztwo", menuLabel: "Audyt i mapowanie procesów" },
  { id: "ai", menuLabel: "Wdrożenie AI" },
  { id: "dane", menuLabel: "Dane, Airtable i raporty" },
  { id: "sprzedaz-marketing", menuLabel: "Sprzedaż i marketing" },
  { id: "biuro", menuLabel: "Księgowość, HR i biuro" },
  { id: "operacje", menuLabel: "Produkcja, usługi i logistyka" },
  { id: "integracje", menuLabel: "Integracje systemów" },
  { id: "nie-wiem", menuLabel: "Jeszcze nie wiem" },
];
