import { mockCitySilos } from "@/lib/airtable-mock";
import { polnocWschodCities } from "./content/polnoc-wschod";
import { slaskCities } from "./content/slask";
import { tier1Cities } from "./content/tier1";
import { zachodCentrumCities } from "./content/zachod-centrum";
import { cityPath, type CityPageContent } from "./types";

const allCities: CityPageContent[] = [
  ...tier1Cities,
  ...slaskCities,
  ...polnocWschodCities,
  ...zachodCentrumCities,
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
  const missing = expected.filter((slug) => !bySlug.has(slug));
  const orphan = allCities
    .map((city) => city.slug)
    .filter((slug) => !expected.includes(slug));

  if (missing.length > 0 || orphan.length > 0) {
    throw new Error(
      [
        missing.length ? `Missing city pages for: ${missing.join(", ")}` : "",
        orphan.length ? `Orphan city pages: ${orphan.join(", ")}` : "",
      ]
        .filter(Boolean)
        .join(" | "),
    );
  }

  for (const city of allCities) {
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
