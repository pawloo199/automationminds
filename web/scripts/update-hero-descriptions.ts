#!/usr/bin/env npx tsx
import Airtable from "airtable";
import { readFileSync } from "fs";
import path from "path";
import { mockHeroSlides } from "../src/lib/airtable-mock";

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
    throw new Error("Brak konfiguracji Airtable w .env.local");
  }

  const base = new Airtable({ apiKey: token }).base(baseId);
  const byOrder = new Map(mockHeroSlides.map((slide) => [slide.order, slide]));
  const byTitle = new Map(mockHeroSlides.map((slide) => [slide.title.trim(), slide]));

  const records = await base("HeroSlides").select().all();
  let updated = 0;

  for (const record of records) {
    const order = Number(record.fields.Order);
    const title = String(record.fields.Title ?? "").trim();
    const mock = byOrder.get(order) ?? byTitle.get(title);

    if (!mock?.description) {
      console.log(`skip ${record.id} — brak dopasowania`);
      continue;
    }

    await base("HeroSlides").update(record.id, {
      Description: mock.description,
    });
    updated += 1;
    console.log(`✓ ${order || title} → ${mock.description}`);
  }

  console.log(`\nZaktualizowano ${updated}/${records.length} slajdów.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
