export type CityFaq = {
  id: string;
  question: string;
  answer: string;
};

export type CityFocusItem = {
  title: string;
  body: string;
};

export type CityPageContent = {
  slug: string;
  name: string;
  /** Dopełniacz: Warszawy, Krakowa */
  nameGenitive: string;
  /** Miejscownik: Warszawie, Krakowie */
  nameLocative: string;
  voivodeship: string;
  regionCluster: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroLead: string;
  introParagraphs: string[];
  localContext: string;
  whyHere: string;
  focusIndustries: CityFocusItem[];
  focusProcesses: CityFocusItem[];
  howWeWork: string;
  faq: CityFaq[];
  relatedServiceSlugs: string[];
  nearbyCitySlugs: string[];
  ogImage?: string;
  /**
   * Poziom strony: "A" = pełna, unikalna treść (duże miasta), brak = poziom B
   * (krótsza treść, ocena po 3–6 miesiącach w Search Console).
   */
  tier?: "A";
  /** Zdjęcie w hero (domyślnie wspólne zdjęcie marki). */
  heroImage?: { url: string; alt: string };
  /** Opis lokalnej gospodarki (poziom A). */
  economy?: { title: string; paragraphs: string[] };
  /** Przykład „przed i po” dla typowej lokalnej firmy (poziom A). */
  example?: {
    title: string;
    lead: string;
    rows: { label: string; before: string; after: string }[];
    note?: string;
  };
  /** Wyróżnik miasta, np. siedziba firmy (poziom A). */
  highlight?: { title: string; body: string };
};

/** Silos miast: /automatyzacja-procesow, /automatyzacja-procesow/{województwo|miasto}. */
export const CITY_HUB_PATH = "/automatyzacja-procesow";

export function cityPath(slug: string): string {
  return `${CITY_HUB_PATH}/${slug}`;
}

const VOWELS = "aeiouyąęó";

/** „we Wrocławiu”, „w Warszawie” (przyimek „we” przed w/f + spółgłoska). */
export function inCity(city: Pick<CityPageContent, "nameLocative">): string {
  const [first, second] = city.nameLocative.toLowerCase();
  const we = (first === "w" || first === "f") && !VOWELS.includes(second ?? "");
  return `${we ? "we" : "w"} ${city.nameLocative}`;
}

/** „ze Szczecina”, „z Wrocławia” (przyimek „ze” przed s/z/ś/ź/ż + spółgłoska). */
export function fromCity(city: Pick<CityPageContent, "nameGenitive">): string {
  const [first, second] = city.nameGenitive.toLowerCase();
  const ze = "szśźż".includes(first ?? "") && !VOWELS.includes(second ?? "");
  return `${ze ? "ze" : "z"} ${city.nameGenitive}`;
}
