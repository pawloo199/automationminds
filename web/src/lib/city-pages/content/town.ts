import { fromCity, inCity, type CityPageContent } from "../types";

type Pair = [title: string, body: string];

/**
 * Zwięzły zapis treści miasta. Pola powtarzalne (tytuły, identyfikatory FAQ,
 * domyślny opis współpracy) generuje `town()`, a pisane ręcznie zostaje
 * tylko to, co jest unikalne dla miejscowości.
 */
export type TownInput = {
  slug: string;
  name: string;
  nameGenitive: string;
  nameLocative: string;
  voivodeship: string;
  regionCluster: string;
  nearbyCitySlugs: string[];
  metaDescription: string;
  heroLead: string;
  intro: string[];
  localContext: string;
  whyHere: string;
  industries: Pair[];
  processes: Pair[];
  faq: Pair[];
  services: string[];
  howWeWork?: string;
  economy?: { title: string; paragraphs: string[] };
};

export function town(input: TownInput): CityPageContent {
  const where = inCity(input);
  const from = fromCity(input);
  return {
    slug: input.slug,
    name: input.name,
    nameGenitive: input.nameGenitive,
    nameLocative: input.nameLocative,
    voivodeship: input.voivodeship,
    regionCluster: input.regionCluster,
    metaTitle: `Automatyzacja procesów ${where} | Automation Minds`,
    metaDescription: input.metaDescription,
    heroTitle: `Automatyzacja procesów ${where}`,
    heroLead: input.heroLead,
    introParagraphs: input.intro,
    localContext: input.localContext,
    whyHere: input.whyHere,
    focusIndustries: input.industries.map(([title, body]) => ({ title, body })),
    focusProcesses: input.processes.map(([title, body]) => ({ title, body })),
    howWeWork:
      input.howWeWork ??
      `Z firmami ${from} pracujemy głównie zdalnie. Zaczynamy od bezpłatnej, 30-minutowej rozmowy, potem wybieramy jeden proces, wyceniamy pierwszy etap i wdrażamy go na narzędziach, których już używacie.`,
    faq: input.faq.map(([question, answer], index) => ({
      id: `${input.slug}-${index + 1}`,
      question,
      answer,
    })),
    relatedServiceSlugs: input.services,
    nearbyCitySlugs: input.nearbyCitySlugs,
    economy: input.economy,
  };
}
