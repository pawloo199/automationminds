import type { GuideFaqItem } from "../airtable.types";

export type GlossaryCategoryId = "automatyzacja" | "ai" | "dane" | "systemy";

export interface GlossaryCategory {
  id: GlossaryCategoryId;
  name: string;
  description: string;
}

export interface GlossaryTerm {
  slug: string;
  /** Nazwa hasła w indeksie, np. „Webhook”. */
  term: string;
  /** Rozwinięcie skrótu, np. „Application Programming Interface”. */
  fullName?: string;
  category: GlossaryCategoryId;
  /** Definicja w 1–2 zdaniach: pierwszy akapit strony i opis w DefinedTerm. */
  definition: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  updatedAt: string;
  /** Treść w formacie artykułów Poradnika (parseGuideBody). */
  body: string;
  faq: GuideFaqItem[];
  relatedTermSlugs: string[];
  relatedServiceSlugs: string[];
  relatedToolSlugs: string[];
  relatedProcessSlugs: string[];
  relatedArticleSlugs: string[];
}

/** Pojęcie bez własnej strony: w indeksie prowadzi do artykułu lub strony. */
export interface GlossaryReference {
  term: string;
  category: GlossaryCategoryId;
  definition: string;
  href: string;
}

export function defineTerm(term: GlossaryTerm): GlossaryTerm {
  return term;
}
