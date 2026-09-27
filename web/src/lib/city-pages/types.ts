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
};

export function cityPath(slug: string): string {
  return `/automatyzacja-${slug}`;
}
