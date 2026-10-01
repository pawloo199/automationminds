import type { GuideFaqItem } from "../airtable.types";
import type { LucideIcon } from "lucide-react";

export type ToolGroupId = "automatyzacja" | "crm" | "biuro" | "ai" | "dane";

export interface ToolGroup {
  id: ToolGroupId;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface ToolCatalogEntry {
  slug: string;
  name: string;
  group: ToolGroupId;
  /** Jedno zdanie na kartach w hubie i w linkowaniu. */
  summary: string;
  /** Narzędzie bez własnej strony w silosie, np. Airtable (strona usługi). */
  externalHref?: string;
}

export interface ToolFlow {
  title: string;
  trigger: string;
  steps: string[];
  result: string;
}

export interface ToolContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  updatedAt: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    bullets: string[];
  };
  intro: { title: string; paragraphs: string[] };
  useCases: { title: string; lead: string; items: { title: string; body: string }[] };
  flows: { title: string; lead: string; items: ToolFlow[] };
  fit: { title: string; good: string[]; limits: string[] };
  comparison: {
    title: string;
    lead: string;
    /** Pierwsza kolumna to opisywane narzędzie. */
    columns: string[];
    rows: { label: string; values: string[] }[];
    note?: string;
  };
  example: {
    title: string;
    lead: string;
    rows: { label: string; before: string; after: string }[];
    note?: string;
  };
  costs: { title: string; paragraphs: string[] };
  faq: GuideFaqItem[];
  relatedServiceSlugs: string[];
  relatedToolSlugs: string[];
  relatedArticleSlugs: string[];
}
