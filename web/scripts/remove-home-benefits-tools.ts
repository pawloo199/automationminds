#!/usr/bin/env npx tsx
import Airtable from "airtable";
import { readFileSync } from "fs";
import path from "path";

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

async function deleteByFormula(
  base: Airtable.Base,
  tableName: string,
  filterByFormula: string,
  label: string,
) {
  const records = await base(tableName)
    .select({ filterByFormula, fields: [] })
    .all();

  if (records.length === 0) {
    console.log(`– ${label}: brak rekordów`);
    return;
  }

  await deleteInBatches(
    base,
    tableName,
    records.map((record) => record.id),
  );
  console.log(`✓ ${label}: usunięto ${records.length}`);
}

async function main() {
  loadEnv();

  const baseId = process.env.AIRTABLE_BASE_ID;
  const token = process.env.AIRTABLE_API_TOKEN;
  if (!baseId || !token) {
    throw new Error("Ustaw AIRTABLE_API_TOKEN i AIRTABLE_BASE_ID w .env.local");
  }

  const base = new Airtable({ apiKey: token }).base(baseId);

  await deleteByFormula(
    base,
    "PageSections",
    "AND({PageSlug}='home',OR({SectionKey}='benefits-header',{SectionKey}='tools-header'))",
    "PageSections home::benefits-header, home::tools-header",
  );

  await deleteByFormula(
    base,
    "FeatureTiles",
    "{Group}='benefits'",
    "FeatureTiles (grupa benefits)",
  );

  await deleteByFormula(base, "Tools", "TRUE()", "Tools");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
