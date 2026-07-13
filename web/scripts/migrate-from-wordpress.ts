#!/usr/bin/env npx tsx
/**
 * Migracja treści z automationminds.net do Airtable.
 *
 * Wymaga w .env.local:
 *   AIRTABLE_API_TOKEN (z data.records:write, lokalnie schema.bases:write do tworzenia tabel)
 *   AIRTABLE_BASE_ID
 *
 * Uruchomienie: npm run migrate
 */

import Airtable from "airtable";
import { readFileSync } from "fs";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

function loadEnv() {
  const envPath = path.join(process.cwd(), ".env.local");
  try {
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
  } catch {
    // .env.local optional for dry-run
  }
}

loadEnv();
import {
  getMockHomePageData,
  mockFaq,
  mockFeatureTilesAreas,
  mockFeatureTilesBenefits,
  mockHeroSlides,
  mockListItems,
  mockProcessSteps,
  mockServices,
  mockSettings,
  mockTools,
  mockCaseStudies,
} from "../src/lib/airtable-mock";

const BASE_ID = process.env.AIRTABLE_BASE_ID;
const TOKEN = process.env.AIRTABLE_API_TOKEN;
const SITE_URL = "https://automationminds.net";

async function fetchText(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "AM-Migrate/1.0" } });
    if (!res.ok) return null;
    return res.text();
  } catch {
    return null;
  }
}

async function downloadImage(url: string, dest: string): Promise<string> {
  try {
    const res = await fetch(url);
    if (!res.ok) return url;
    const buffer = Buffer.from(await res.arrayBuffer());
    await mkdir(path.dirname(dest), { recursive: true });
    await writeFile(dest, buffer);
    return dest.replace(/^.*\/public/, "");
  } catch {
    return url;
  }
}

async function tryWordPressPages(): Promise<unknown[]> {
  const endpoints = [
    `${SITE_URL}/wp-json/wp/v2/pages?per_page=100`,
    `${SITE_URL}/?rest_route=/wp/v2/pages&per_page=100`,
  ];

  for (const url of endpoints) {
    const text = await fetchText(url);
    if (!text) continue;
    try {
      const data = JSON.parse(text);
      if (Array.isArray(data)) return data;
    } catch {
      // continue
    }
  }
  return [];
}

async function seedAirtable() {
  if (!BASE_ID || !TOKEN) {
    console.error("Ustaw AIRTABLE_BASE_ID i AIRTABLE_API_TOKEN w .env.local");
    process.exit(1);
  }

  const base = new Airtable({ apiKey: TOKEN }).base(BASE_ID);
  const home = getMockHomePageData();

  console.log("Seeding Settings...");
  await base("Settings").create({
    Phone: mockSettings.phone,
    LogoWhiteUrl: mockSettings.logoWhiteUrl,
    LogoColorUrl: mockSettings.logoColorUrl,
    MetaDescription: mockSettings.metaDescription,
    StatRating: mockSettings.statRating,
    StatRatingLabel: mockSettings.statRatingLabel,
    StatPercent: mockSettings.statPercent,
    StatPercentLabel: mockSettings.statPercentLabel,
    StatNumber: mockSettings.statNumber,
    StatNumberLabel: mockSettings.statNumberLabel,
  });

  console.log("Seeding HeroSlides...");
  for (const slide of mockHeroSlides) {
    await base("HeroSlides").create({
      Subtitle: slide.subtitle,
      Title: slide.title,
      ImageUrl: slide.imageUrl,
      ButtonText: slide.buttonText,
      ButtonLink: slide.buttonLink,
      Order: slide.order,
      Published: true,
    });
  }

  console.log("Seeding PageSections...");
  const sections = [
    { ...home.intro!, sectionKey: "intro" },
    { ...home.areasHeader!, sectionKey: "areas-header" },
    { ...home.conversation!, sectionKey: "conversation" },
    { ...home.benefitsHeader!, sectionKey: "benefits-header" },
    { ...home.caseStudiesHeader!, sectionKey: "cases-header" },
    { ...home.toolsHeader!, sectionKey: "tools-header" },
    { ...home.faqHeader!, sectionKey: "faq-header" },
    { ...home.contactCta!, sectionKey: "contact-cta" },
  ];

  for (const section of sections) {
    if (!section) continue;
    await base("PageSections").create({
      PageSlug: "home",
      SectionKey: section.sectionKey,
      Subtitle: section.subtitle,
      Title: section.title,
      Body: section.body,
      ImageUrl: section.imageUrl,
      ButtonText: section.buttonText,
      ButtonLink: section.buttonLink,
    });
  }

  console.log("Seeding ListItems...");
  for (const item of mockListItems) {
    await base("ListItems").create({
      PageSlug: item.pageSlug,
      Text: item.text,
      Order: item.order,
    });
  }

  console.log("Seeding FeatureTiles...");
  for (const tile of [...mockFeatureTilesAreas, ...mockFeatureTilesBenefits]) {
    await base("FeatureTiles").create({
      Group: tile.group,
      Icon: tile.icon,
      Title: tile.title,
      Body: tile.body,
      Order: tile.order,
      Published: true,
    });
  }

  console.log("Seeding CaseStudies...");
  for (const item of mockCaseStudies) {
    await base("CaseStudies").create({
      Context: item.context,
      ServiceSlug: item.serviceSlug ?? "",
      Title: item.title,
      Icon: item.icon,
      ImageUrl: item.imageUrl,
      Body: item.body,
      Order: item.order,
      Published: true,
    });
  }

  console.log("Seeding Tools...");
  for (const tool of mockTools) {
    await base("Tools").create({
      Name: tool.name,
      LogoUrl: tool.logoUrl,
      Order: tool.order,
      Published: true,
    });
  }

  console.log("Seeding FAQ...");
  for (const item of mockFaq) {
    await base("FAQ").create({
      Question: item.question,
      Answer: item.answer,
      Order: item.order,
      Published: true,
    });
  }

  console.log("Seeding Services...");
  for (const service of mockServices) {
    await base("Services").create({
      Slug: service.slug,
      Title: service.title,
      MenuLabel: service.menuLabel,
      BannerImageUrl: service.bannerImageUrl,
      BannerTitle: service.bannerTitle,
      IntroSubtitle: service.introSubtitle,
      IntroTitle: service.introTitle,
      IntroBody: service.introBody,
      IntroImageUrl: service.introImageUrl,
      IntroButtonText: service.introButtonText,
      IntroButtonLink: service.introButtonLink,
      TabsSubtitle: service.tabsSubtitle,
      TabsTitle: service.tabsTitle,
      ProcessSubtitle: service.processSubtitle,
      ProcessTitle: service.processTitle,
      Order: service.order,
      Published: true,
    });
  }

  console.log("Seeding ProcessSteps...");
  for (const step of mockProcessSteps) {
    await base("ProcessSteps").create({
      ServiceSlug: step.serviceSlug,
      StepNumber: step.stepNumber,
      Title: step.title,
      Body: step.body,
    });
  }

  console.log("Done seeding Airtable.");
}

async function main() {
  console.log("Automation Minds — migracja treści\n");

  const homepage = await fetchText(SITE_URL);
  if (homepage) {
    console.log(`✓ Pobrano stronę główną (${homepage.length} bajtów)`);
  } else {
    console.log("✗ Nie udało się pobrać strony głównej — używam mocków");
  }

  const wpPages = await tryWordPressPages();
  console.log(`WordPress REST API: ${wpPages.length} stron`);

  const publicDir = path.join(process.cwd(), "public", "images", "migrated");
  for (const slide of mockHeroSlides) {
    const filename = path.join(publicDir, `hero-${slide.order}.jpg`);
    const localPath = await downloadImage(slide.imageUrl, filename);
    console.log(`Obraz: ${localPath}`);
  }

  if (process.argv.includes("--seed")) {
    await seedAirtable();
  } else {
    console.log(
      "\nAby zapisać dane do Airtable, uruchom: npm run migrate -- --seed",
    );
    console.log(
      "Upewnij się, że tabele istnieją zgodnie z docs/airtable-baza.md",
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
