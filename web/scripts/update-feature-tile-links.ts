#!/usr/bin/env npx tsx
import Airtable from "airtable";
import { readFileSync } from "fs";
import path from "path";
import { mockFeatureTilesAreas } from "../src/lib/airtable-mock";

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

async function main() {
  loadEnv();

  const token = process.env.AIRTABLE_API_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  if (!token || !baseId) {
    throw new Error("Ustaw AIRTABLE_API_TOKEN i AIRTABLE_BASE_ID w .env.local");
  }

  const base = new Airtable({ apiKey: token }).base(baseId);
  const byOrder = new Map(
    mockFeatureTilesAreas.map((tile) => [tile.order, tile]),
  );
  const byTitle = new Map(
    mockFeatureTilesAreas.map((tile) => [tile.title.trim(), tile]),
  );

  const records = await base("FeatureTiles")
    .select({
      filterByFormula: "{Group}='areas'",
      sort: [{ field: "Order", direction: "asc" }],
    })
    .all();

  if (records.length === 0) {
    throw new Error("Nie znaleziono FeatureTiles z grupą areas");
  }

  let updated = 0;

  for (const record of records) {
    const order = Number(record.fields.Order);
    const title = String(record.fields.Title ?? "").trim();
    const mock = byOrder.get(order) ?? byTitle.get(title);

    if (!mock) {
      console.log(`skip ${record.id} — brak dopasowania (${title || order})`);
      continue;
    }

    await base("FeatureTiles").update(record.id, {
      Href: mock.href ?? "",
      LinkLabel: mock.linkLabel ?? "",
    });
    updated += 1;
    console.log(`✓ ${mock.title} → ${mock.href || "(brak linku)"}`);
  }

  console.log(`\nZaktualizowano ${updated}/${records.length} kafelków areas.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
