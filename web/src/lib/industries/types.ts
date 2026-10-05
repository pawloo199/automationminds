import type { GuideFaqItem } from "../airtable.types";
import type { ToolContent } from "../tools/types";
import type { LucideIcon } from "lucide-react";

/** Branża w hubie /branze. `planned`: pozycja w hubie bez strony. */
export interface IndustryEntry {
  slug: string;
  name: string;
  summary: string;
  icon: LucideIcon;
  status: "live" | "planned";
  /** Etykieta strony głównej branży w linkach, np. „Automatyzacja kancelarii”. */
  mainPageLabel: string;
  /** Miasta, na których stronach pokazujemy link do branży (duże rynki dla tej branży). */
  featuredCitySlugs?: string[];
  /** Teksty wezwań do kontaktu na stronach branży. */
  cta: { midTitle: string; midBody: string; formTitle: string; formBody: string; processesTitle: string };
}

/** Strona branży (/branze/{branza}) lub jej podstrona (/branze/{branza}/{podstrona}). */
export interface IndustryPageContent {
  industrySlug: string;
  /** Brak dla strony głównej branży. */
  subSlug?: string;
  /** Krótka nazwa w okruszkach i na kartach. */
  name: string;
  /** Jedno zdanie na kartach. */
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  updatedAt: string;
  hero: { eyebrow: string; title: string; lead: string; bullets: string[] };
  summary: { label: string; value: string }[];
  symptoms: { title: string; lead: string; items: string[] };
  intro: { title: string; paragraphs: string[] };
  scope: { title: string; lead: string; items: { title: string; body: string }[] };
  flows?: ToolContent["flows"];
  security?: { title: string; lead: string; items: { title: string; body: string }[] };
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
  relatedProcessSlugs: string[];
  relatedToolSlugs: string[];
  relatedArticleSlugs: string[];
}
