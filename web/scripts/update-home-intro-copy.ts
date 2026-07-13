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

const INTRO_COPY = {
  Subtitle: "Prosto. Szybko. Skutecznie.",
  Title: "Automatyzacje i AI, które realnie odciążają zespół",
  Body: "Zaczynamy od krótkiej diagnozy, a potem wdrażamy rozwiązania, które skracają czas pracy i ograniczają błędy.",
} as const;

const LIST_ITEMS_COPY = [
  "Mniej ręcznej pracy w powtarzalnych zadaniach",
  "Niższe koszty operacyjne",
  "Więcej czasu na pracę strategiczną",
  "Skalowanie bez dokładania etatów",
] as const;

async function main() {
  loadEnv();

  const baseId = process.env.AIRTABLE_BASE_ID;
  const token = process.env.AIRTABLE_API_TOKEN;
  if (!baseId || !token) {
    throw new Error("Ustaw AIRTABLE_API_TOKEN i AIRTABLE_BASE_ID w .env.local");
  }

  const base = new Airtable({ apiKey: token }).base(baseId);

  const introRecords = await base("PageSections")
    .select({
      filterByFormula: "AND({PageSlug}='home',{SectionKey}='intro')",
      maxRecords: 5,
    })
    .all();

  if (introRecords.length === 0) {
    throw new Error("Nie znaleziono PageSections dla home::intro");
  }

  for (const record of introRecords) {
    await base("PageSections").update(record.id, INTRO_COPY);
  }
  console.log(`✓ Zaktualizowano PageSections home::intro (${introRecords.length})`);

  const listItemRecords = await base("ListItems")
    .select({
      filterByFormula: "{PageSlug}='home'",
      sort: [{ field: "Order", direction: "asc" }],
    })
    .all();

  const toUpdate = listItemRecords.slice(0, LIST_ITEMS_COPY.length);
  for (let i = 0; i < toUpdate.length; i += 1) {
    const record = toUpdate[i];
    const text = LIST_ITEMS_COPY[i];
    await base("ListItems").update(record.id, { Text: text });
  }
  console.log(`✓ Zaktualizowano ListItems home (pierwsze ${toUpdate.length})`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

