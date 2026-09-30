import type { GuideFaqItem } from "../airtable.types";
import type { LucideIcon } from "lucide-react";

export type ServiceGroupId = "doradztwo" | "ai" | "dane" | "automatyzacja";

export interface ServiceGroup {
  id: ServiceGroupId;
  name: string;
  /** Krótki opis grupy w mega menu i na stronie /uslugi. */
  description: string;
  icon: LucideIcon;
}

/**
 * Status strony usługi:
 * - `live`: pełna treść w `content/`, nowy szablon,
 * - `legacy`: treść z Airtable, stary szablon (do czasu przepisania),
 * - `planned`: usługa w katalogu, bez strony (nie trafia do menu ani sitemap).
 */
export type ServiceStatus = "live" | "legacy" | "planned";

export interface ServiceCatalogEntry {
  slug: string;
  /** Pełna nazwa usługi (breadcrumb, karty, dane strukturalne). */
  name: string;
  /** Krótsza etykieta w menu i w stopce. */
  menuLabel: string;
  /** Jedno zdanie pod etykietą w mega menu i na kartach. */
  menuDescription: string;
  group: ServiceGroupId;
  icon: LucideIcon;
  status: ServiceStatus;
}

export interface ServiceProblem {
  title: string;
  body: string;
}

export interface ServiceScopeItem {
  title: string;
  body: string;
}

export interface ServiceExampleRow {
  label: string;
  before: string;
  after: string;
}

export interface ServiceProcessStep {
  title: string;
  body: string;
  /** Orientacyjny czas etapu, np. „1–2 tygodnie”. */
  duration?: string;
}

export interface ServiceTool {
  name: string;
  note: string;
}

export interface ServiceContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  updatedAt: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    outcomes: string[];
    imageUrl: string;
    imageAlt: string;
  };
  problems: {
    title: string;
    lead: string;
    items: ServiceProblem[];
  };
  scope: {
    title: string;
    lead: string;
    items: ServiceScopeItem[];
  };
  example: {
    title: string;
    lead: string;
    rows: ServiceExampleRow[];
    note?: string;
  };
  process: {
    title: string;
    lead: string;
    steps: ServiceProcessStep[];
  };
  tools: {
    title: string;
    lead: string;
    items: ServiceTool[];
  };
  faq: GuideFaqItem[];
  relatedArticleSlugs: string[];
  /** Usługi powiązane spoza grupy (usługi z tej samej grupy dochodzą automatycznie). */
  relatedServiceSlugs: string[];
  contact: {
    title: string;
    body: string;
    highlights: string[];
  };
}
