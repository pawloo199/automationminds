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

/** Podstrona narzędzia, np. /narzedzia/n8n/self-hosted: usługa lub temat szczegółowy. */
export interface ToolSubpageContent {
  toolSlug: string;
  slug: string;
  /** Krótka nazwa w okruszkach i na kartach, np. „n8n self-hosted”. */
  name: string;
  /** Jedno zdanie na karcie na stronie narzędzia. */
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  updatedAt: string;
  hero: { eyebrow: string; title: string; lead: string; bullets: string[] };
  /** Fakty w karcie „W skrócie”. */
  summary: { label: string; value: string }[];
  symptoms: { title: string; lead: string; items: string[] };
  intro: { title: string; paragraphs: string[] };
  scope: { title: string; lead: string; items: { title: string; body: string }[] };
  comparison?: ToolContent["comparison"];
  example?: ToolContent["example"];
  implementation: {
    title: string;
    lead: string;
    phases: { title: string; duration: string; body: string; fromYou: string }[];
  };
  variants: {
    title: string;
    lead: string;
    items: { name: string; description: string; includes: string[] }[];
  };
  costFactors: { title: string; lead: string; items: string[] };
  risks: { title: string; items: { risk: string; mitigation: string }[] };
  faq: GuideFaqItem[];
  relatedServiceSlugs: string[];
  relatedArticleSlugs: string[];
}
