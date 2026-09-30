import { mockCitySilos } from "@/lib/airtable-mock";
import { dolnoslaskieCities } from "./content/regions/dolnoslaskie";
import { kujawskoPomorskiePowiatCities } from "./content/kujawsko-pomorskie";
import { lodzkiePowiatCities } from "./content/lodzkie";
import { lubelskiePowiatCities } from "./content/lubelskie";
import { lubuskiePowiatCities } from "./content/lubuskie";
import { malopolskaPowiatCities } from "./content/malopolska";
import { slaskieCities } from "./content/regions/slaskie";
import { mazowieckieCities } from "./content/regions/mazowieckie";
import { opolskiePowiatCities } from "./content/opolskie";
import { podkarpackiePowiatCities } from "./content/podkarpackie";
import { podlaskiePowiatCities } from "./content/podlaskie";
import { polnocWschodCities } from "./content/polnoc-wschod";
import { pomorskiePowiatCities } from "./content/pomorskie";
import { swietokrzyskiePowiatCities } from "./content/swietokrzyskie";
import { tier1Cities } from "./content/tier1";
import { warminskoMazurskiePowiatCities } from "./content/warminsko-mazurskie";
import { wielkopolskaPowiatCities } from "./content/wielkopolska";
import { zachodCentrumCities } from "./content/zachod-centrum";
import { zachodniopomorskiePowiatCities } from "./content/zachodniopomorskie";
import { cityPath, type CityPageContent } from "./types";
import { getVoivodeshipByName, VOIVODESHIPS } from "./voivodeships";

const allCities: CityPageContent[] = [
  ...tier1Cities,
  ...polnocWschodCities,
  ...zachodCentrumCities,
  ...dolnoslaskieCities,
  ...mazowieckieCities,
  ...slaskieCities,
  ...wielkopolskaPowiatCities,
  ...opolskiePowiatCities,
  ...lubuskiePowiatCities,
  ...pomorskiePowiatCities,
  ...malopolskaPowiatCities,
  ...lodzkiePowiatCities,
  ...zachodniopomorskiePowiatCities,
  ...kujawskoPomorskiePowiatCities,
  ...lubelskiePowiatCities,
  ...podkarpackiePowiatCities,
  ...podlaskiePowiatCities,
  ...swietokrzyskiePowiatCities,
  ...warminskoMazurskiePowiatCities,
];

const bySlug = new Map(allCities.map((city) => [city.slug, city]));

function assertCityPagesIntegrity() {
  if (process.env.NODE_ENV === "production") return;

  const duplicates = allCities
    .map((city) => city.slug)
    .filter((slug, index, arr) => arr.indexOf(slug) !== index);
  if (duplicates.length > 0) {
    throw new Error(`Duplicate city page slugs: ${duplicates.join(", ")}`);
  }

  const expected = mockCitySilos.map((city) =>
    city.href.replace(/^\/automatyzacja-/, ""),
  );
  // CitySilos = kuratorowany grid na homepage; katalog SEO może być większy.
  const missing = expected.filter((slug) => !bySlug.has(slug));

  if (missing.length > 0) {
    throw new Error(`Missing city pages for CitySilos: ${missing.join(", ")}`);
  }

  const voivodeshipSlugs = new Set(VOIVODESHIPS.map((v) => v.slug));
  for (const city of allCities) {
    if (!getVoivodeshipByName(city.voivodeship)) {
      throw new Error(`City ${city.slug}: unknown voivodeship "${city.voivodeship}"`);
    }
    if (voivodeshipSlugs.has(city.slug)) {
      throw new Error(`City slug "${city.slug}" collides with a voivodeship slug`);
    }
    if (city.introParagraphs.length < 2) {
      throw new Error(`City ${city.slug}: need at least 2 intro paragraphs`);
    }
    if (city.faq.length < 4) {
      throw new Error(`City ${city.slug}: need at least 4 FAQ items`);
    }
    for (const nearby of city.nearbyCitySlugs) {
      if (!bySlug.has(nearby)) {
        throw new Error(
          `City ${city.slug}: nearbyCitySlugs references unknown slug "${nearby}"`,
        );
      }
    }
  }
}

assertCityPagesIntegrity();

export function getAllCityPages(): CityPageContent[] {
  return allCities;
}

/** Lekki indeks pod wyszukiwarkę zasięgu na homepage / o-nas. */
export function getCityCoverageSearchIndex(): {
  id: string;
  name: string;
  href: string;
}[] {
  return allCities
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "pl"))
    .map((city) => ({
      id: city.slug,
      name: city.name,
      href: cityPath(city.slug),
    }));
}

export function getCityPage(slug: string): CityPageContent | null {
  return bySlug.get(slug) ?? null;
}

export function getNearbyCities(
  city: CityPageContent,
): { slug: string; name: string }[] {
  return city.nearbyCitySlugs
    .map((slug) => {
      const nearby = bySlug.get(slug);
      return nearby ? { slug: nearby.slug, name: nearby.name } : null;
    })
    .filter((item): item is { slug: string; name: string } => item !== null);
}

export { cityPath };
export type { CityPageContent };

/** Miasta województwa, alfabetycznie. */
export function getCitiesByVoivodeship(name: string): CityPageContent[] {
  return allCities
    .filter((city) => city.voivodeship === name)
    .sort((a, b) => a.name.localeCompare(b.name, "pl"));
}

export function getCityVoivodeship(city: CityPageContent) {
  return getVoivodeshipByName(city.voivodeship)!;
}

export { CITY_HUB_PATH } from "./types";
export {
  getVoivodeship,
  voivodeshipLabel,
  voivodeshipPath,
  VOIVODESHIPS,
} from "./voivodeships";
