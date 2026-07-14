#!/usr/bin/env npx tsx
import Airtable from "airtable";
import { readFileSync } from "fs";
import path from "path";
import {
  getMockHomePageData,
  mockCitySilos,
  mockSettings,
} from "../src/lib/airtable-mock";

function loadEnv() {
  const envPath = path.join(process.cwd(), ".env.local");
  const content = readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq);
    const value = trimmed.slice(eq + 1);
    if (!process.env[key]) process.env[key] = value;
  }
}

async function deleteInBatches(
  base: Airtable.Base,
  tableName: string,
  recordIds: string[],
) {
  for (let i = 0; i < recordIds.length; i += 10) {
    const batch = recordIds.slice(i, i + 10);
    await base(tableName).destroy(batch);
  }
}

async function main() {
  loadEnv();

  const baseId = process.env.AIRTABLE_BASE_ID;
  const token = process.env.AIRTABLE_API_TOKEN;
  if (!baseId || !token) {
    throw new Error("Ustaw AIRTABLE_API_TOKEN i AIRTABLE_BASE_ID w .env.local");
  }

  const base = new Airtable({ apiKey: token }).base(baseId);
  const section = getMockHomePageData().conversation;

  if (!section) {
    throw new Error("Brak mock conversation");
  }

  const settingsRecords = await base("Settings").select({ maxRecords: 5 }).all();
  if (settingsRecords.length === 0) {
    throw new Error("Nie znaleziono rekordów Settings");
  }

  for (const record of settingsRecords) {
    await base("Settings").update(record.id, {
      StatRating: mockSettings.statRating,
      StatRatingLabel: mockSettings.statRatingLabel,
      StatPercent: mockSettings.statPercent,
      StatPercentLabel: mockSettings.statPercentLabel,
      StatNumber: mockSettings.statNumber,
      StatNumberLabel: mockSettings.statNumberLabel,
      StatDeployments: mockSettings.statDeployments,
      StatDeploymentsLabel: mockSettings.statDeploymentsLabel,
    });
  }
  console.log(`✓ Zaktualizowano Settings (${settingsRecords.length})`);

  const conversationRecords = await base("PageSections")
    .select({
      filterByFormula: "AND({PageSlug}='home',{SectionKey}='conversation')",
      maxRecords: 5,
    })
    .all();

  if (conversationRecords.length === 0) {
    throw new Error("Nie znaleziono PageSections home::conversation");
  }

  for (const record of conversationRecords) {
    await base("PageSections").update(record.id, {
      Subtitle: section.subtitle,
      Title: section.title,
      Body: section.body,
      ButtonText: section.buttonText,
      ButtonLink: section.buttonLink,
      CitiesSubtitle: section.citiesSubtitle ?? "",
      CitiesTitle: section.citiesTitle ?? "",
      CitiesBody: section.citiesBody ?? "",
    });
  }
  console.log(`✓ Zaktualizowano PageSections home::conversation (${conversationRecords.length})`);

  const existingCities = await base("CitySilos").select().all();
  if (existingCities.length > 0) {
    await deleteInBatches(
      base,
      "CitySilos",
      existingCities.map((record) => record.id),
    );
    console.log(`✓ Usunięto poprzednie CitySilos (${existingCities.length})`);
  }

  for (const city of mockCitySilos) {
    await base("CitySilos").create({
      Name: city.name,
      Href: city.href,
      Order: city.order,
      Published: true,
    });
  }
  console.log(`✓ Dodano CitySilos (${mockCitySilos.length})`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
