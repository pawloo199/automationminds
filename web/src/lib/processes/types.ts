import type { GuideFaqItem } from "../airtable.types";
import type { LucideIcon } from "lucide-react";

export type ProcessAreaId = "finanse" | "sprzedaz" | "obsluga" | "hr" | "operacje";

export interface ProcessArea {
  id: ProcessAreaId;
  name: string;
  description: string;
  icon: LucideIcon;
}

/** `live`: pełna strona, `planned`: pozycja w hubie bez strony (opis wkrótce). */
export type ProcessStatus = "live" | "planned";

export interface ProcessCatalogEntry {
  slug: string;
  name: string;
  area: ProcessAreaId;
  summary: string;
  status: ProcessStatus;
}

export interface ProcessFlowStep {
  title: string;
  body: string;
  /** Kto wykonuje krok, np. „System”, „Kierownik działu”. */
  actor: string;
  /** Krok wykonywany automatycznie (true) czy z udziałem człowieka. */
  automated: boolean;
  tool?: string;
}

export interface ProcessContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  updatedAt: string;
  hero: { eyebrow: string; title: string; lead: string; bullets: string[] };
  /** Krótkie fakty w karcie „W skrócie”. */
  summary: { label: string; value: string }[];
  symptoms: { title: string; lead: string; items: string[] };
  flow: { title: string; lead: string; steps: ProcessFlowStep[] };
  example: {
    title: string;
    lead: string;
    rows: { label: string; before: string; after: string }[];
    note?: string;
  };
  outcomes: { title: string; items: { title: string; body: string }[] };
  implementation: {
    title: string;
    lead: string;
    phases: { title: string; duration: string; body: string; fromYou: string }[];
  };
  prerequisites: { title: string; lead: string; items: string[] };
  variants: {
    title: string;
    lead: string;
    items: { name: string; description: string; includes: string[] }[];
  };
  costFactors: { title: string; lead: string; items: string[] };
  risks: { title: string; items: { risk: string; mitigation: string }[] };
  faq: GuideFaqItem[];
  relatedServiceSlugs: string[];
  relatedToolSlugs: string[];
  relatedArticleSlugs: string[];
}
