import { getGuideArticleBySlug } from "../guide-articles";
import { getProcessEntry, processPath } from "../processes/catalog";
import { getServicesBySlugs } from "../services";
import { getToolEntry } from "../tools/catalog";
import type { GuideArticle } from "../airtable.types";
import type {
  GlossaryCategory,
  GlossaryCategoryId,
  GlossaryReference,
  GlossaryTerm,
} from "./types";
import { GLOSSARY_TERMS } from "./terms";

export const GLOSSARY_HUB_PATH = "/slownik";

export function glossaryPath(slug: string) {
  return `${GLOSSARY_HUB_PATH}/${slug}`;
}

export const GLOSSARY_CATEGORIES: GlossaryCategory[] = [
  {
    id: "automatyzacja",
    name: "Automatyzacja i integracje",
    description: "Jak systemy wymieniają dane i jak buduje się przepływy pracy.",
  },
  {
    id: "ai",
    name: "Sztuczna inteligencja",
    description: "Modele językowe, agenci i odczyt dokumentów w praktyce firmy.",
  },
  {
    id: "dane",
    name: "Dane",
    description: "Porządek, jakość i analiza danych, na których pracują automatyzacje.",
  },
  {
    id: "systemy",
    name: "Systemy i procesy",
    description: "Systemy firmowe i pojęcia, którymi opisuje się procesy.",
  },
];

/** Pojęcia opisane gdzie indziej: w indeksie słownika jako odnośniki. */
export const GLOSSARY_REFERENCES: GlossaryReference[] = [
  {
    term: "Transformacja cyfrowa",
    category: "systemy",
    definition: "Zmiana sposobu działania firmy z wykorzystaniem technologii, opisana w Poradniku.",
    href: "/poradnik/transformacja-cyfrowa-firmy",
  },
  {
    term: "Cyfryzacja danych",
    category: "dane",
    definition: "Przeniesienie danych z papieru i rozproszonych arkuszy do systemów.",
    href: "/poradnik/cyfryzacja-danych-w-firmie",
  },
  {
    term: "ROI automatyzacji",
    category: "systemy",
    definition: "Zwrot z inwestycji w automatyzację i sposób jego liczenia.",
    href: "/poradnik/jak-mierzyc-roi-automatyzacji",
  },
  {
    term: "n8n",
    category: "automatyzacja",
    definition: "Narzędzie do budowania automatyzacji, które można uruchomić na własnym serwerze.",
    href: "/poradnik/n8n-co-to-jest",
  },
  {
    term: "KSeF",
    category: "systemy",
    definition: "Krajowy System e-Faktur, przez który przechodzą faktury ustrukturyzowane.",
    href: "/narzedzia/ksef",
  },
  {
    term: "TMS",
    category: "systemy",
    definition: "System do zarządzania transportem w firmach spedycyjnych i logistycznych.",
    href: "/poradnik/tms-a-automatyzacja-spedycji",
  },
  {
    term: "WMS",
    category: "systemy",
    definition: "System do zarządzania magazynem.",
    href: "/poradnik/wms-a-automatyzacja",
  },
];

export function getGlossaryTerms(): GlossaryTerm[] {
  return [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term, "pl"));
}

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return GLOSSARY_TERMS.find((term) => term.slug === slug);
}

export function getGlossaryCategory(id: GlossaryCategoryId): GlossaryCategory {
  return GLOSSARY_CATEGORIES.find((category) => category.id === id)!;
}

export type GlossaryIndexItem = {
  term: string;
  category: GlossaryCategoryId;
  definition: string;
  href: string;
  external: boolean;
};

/** Hasła i odnośniki w jednym indeksie A–Z. */
export function getGlossaryIndex(): GlossaryIndexItem[] {
  return [
    ...GLOSSARY_TERMS.map((term) => ({
      term: term.term,
      category: term.category,
      definition: term.definition,
      href: glossaryPath(term.slug),
      external: false,
    })),
    ...GLOSSARY_REFERENCES.map((ref) => ({ ...ref, external: true })),
  ].sort((a, b) => a.term.localeCompare(b.term, "pl"));
}

export function glossaryLetter(term: string) {
  return term.charAt(0).toLocaleUpperCase("pl");
}

export function getRelatedTerms(term: GlossaryTerm) {
  return term.relatedTermSlugs
    .map((slug) => getGlossaryTerm(slug))
    .filter((item): item is GlossaryTerm => Boolean(item));
}

export function getTermServices(term: GlossaryTerm) {
  return getServicesBySlugs(term.relatedServiceSlugs);
}

export function getTermTools(term: GlossaryTerm) {
  return term.relatedToolSlugs
    .map((slug) => getToolEntry(slug))
    .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool));
}

export function getTermProcesses(term: GlossaryTerm) {
  return term.relatedProcessSlugs
    .map((slug) => getProcessEntry(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry) && entry!.status === "live")
    .map((entry) => ({ ...entry, href: processPath(entry.slug) }));
}

export function getTermArticles(term: GlossaryTerm): GuideArticle[] {
  return term.relatedArticleSlugs
    .map((slug) => getGuideArticleBySlug(slug))
    .filter((article): article is GuideArticle => Boolean(article));
}

/** Hasła, które wskazują daną usługę lub narzędzie (linki zwrotne). */
export function getTermsForService(serviceSlug: string) {
  return getGlossaryTerms().filter((term) => term.relatedServiceSlugs.includes(serviceSlug));
}

export function getTermsForTool(toolSlug: string) {
  return getGlossaryTerms().filter((term) => term.relatedToolSlugs.includes(toolSlug));
}
