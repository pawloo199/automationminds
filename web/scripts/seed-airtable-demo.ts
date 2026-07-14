#!/usr/bin/env npx tsx
/**
 * Idempotentny seed danych demo do Airtable (landing page'e, sekcje kontakt/o-nas).
 *
 * Uruchomienie: npm run seed-demo
 */

import Airtable from "airtable";
import { readFileSync } from "fs";
import path from "path";
import {
  getMockPageSection,
  mockLandingPages,
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

loadEnv();

const BASE_ID = process.env.AIRTABLE_BASE_ID;
const TOKEN = process.env.AIRTABLE_API_TOKEN;
const PUBLIC_SITE_URL = (() => {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  if (fromEnv.includes("localhost")) {
    return "https://web-topaz-sigma-56.vercel.app";
  }
  return fromEnv || "https://automationminds.net";
})();

function absoluteUrl(url: string): string {
  if (!url) return url;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `${PUBLIC_SITE_URL.replace(/\/$/, "")}${url.startsWith("/") ? url : `/${url}`}`;
}

type AirtableBase = ReturnType<Airtable["base"]>;

async function getExistingSlugs(base: AirtableBase): Promise<Set<string>> {
  const records = await base("LandingPages")
    .select({ fields: ["Slug"] })
    .all();
  return new Set(
    records
      .map((r) => String(r.fields.Slug ?? ""))
      .filter(Boolean),
  );
}

async function getExistingPageSections(
  base: AirtableBase,
): Promise<Set<string>> {
  const records = await base("PageSections")
    .select({ fields: ["PageSlug", "SectionKey"] })
    .all();
  return new Set(
    records.map(
      (r) => `${String(r.fields.PageSlug)}::${String(r.fields.SectionKey)}`,
    ),
  );
}

async function seedSettings(base: AirtableBase) {
  const records = await base("Settings").select({ maxRecords: 1 }).firstPage();
  const fields = {
    SiteName: mockSettings.siteName,
    Phone: mockSettings.phone,
    Email: mockSettings.email,
    Address: mockSettings.address,
    LogoWhiteUrl: absoluteUrl(mockSettings.logoWhiteUrl),
    LogoColorUrl: absoluteUrl(mockSettings.logoColorUrl),
    MetaDescription: mockSettings.metaDescription,
    DefaultOgImageUrl: absoluteUrl("/opengraph-image"),
    GoogleSiteVerification: mockSettings.googleSiteVerification,
    StatRating: mockSettings.statRating,
    StatRatingLabel: mockSettings.statRatingLabel,
    StatPercent: mockSettings.statPercent,
    StatPercentLabel: mockSettings.statPercentLabel,
    StatNumber: mockSettings.statNumber,
    StatNumberLabel: mockSettings.statNumberLabel,
    StatDeployments: mockSettings.statDeployments,
    StatDeploymentsLabel: mockSettings.statDeploymentsLabel,
  };

  if (records.length === 0) {
    console.log("+ Tworzę rekord Settings...");
    await base("Settings").create(fields);
    return;
  }

  console.log("~ Aktualizuję Settings...");
  await base("Settings").update(records[0].id, fields);
}

async function seedPageSections(base: AirtableBase) {
  const existing = await getExistingPageSections(base);
  const pageSections = [
    { pageSlug: "o-nas", sectionKey: "banner" },
    { pageSlug: "kontakt", sectionKey: "banner" },
    { pageSlug: "kontakt", sectionKey: "contact-sidebar" },
    { pageSlug: "kontakt", sectionKey: "contact-form" },
  ];

  for (const { pageSlug, sectionKey } of pageSections) {
    const key = `${pageSlug}::${sectionKey}`;
    if (existing.has(key)) {
      console.log(`  skip PageSections: ${key}`);
      continue;
    }

    const section = getMockPageSection(pageSlug, sectionKey);
    if (!section) continue;

    console.log(`+ PageSections: ${key}`);
    await base("PageSections").create({
      PageSlug: pageSlug,
      SectionKey: sectionKey,
      Subtitle: section.subtitle,
      Title: section.title,
      Body: section.body,
      ImageUrl: absoluteUrl(section.imageUrl),
      ImageAlt: section.imageAlt,
      ButtonText: section.buttonText,
      ButtonLink: section.buttonLink,
      MetaTitle: section.metaTitle,
      MetaDescription: section.metaDescription,
    });
  }
}

async function seedLandingPages(base: AirtableBase) {
  const existingSlugs = await getExistingSlugs(base);
  const now = new Date().toISOString();

  for (const page of mockLandingPages) {
    if (existingSlugs.has(page.slug)) {
      console.log(`  skip LandingPages: ${page.slug}`);
      continue;
    }

    console.log(`+ LandingPages: ${page.slug}`);
    await base("LandingPages").create({
      Slug: page.slug,
      CampaignName: page.campaignName,
      Published: true,
      MetaTitle: page.metaTitle,
      MetaDescription: page.metaDescription,
      HeroTitle: page.heroTitle,
      HeroSubtitle: page.heroSubtitle,
      HeroImageUrl: absoluteUrl(page.heroImageUrl),
      HeroImageAlt: page.heroImageAlt,
      PrimaryCtaText: page.primaryCtaText,
      PrimaryCtaLink: page.primaryCtaLink,
      SocialProof: page.socialProof,
      RelatedServiceSlug: page.relatedServiceSlug,
      FormEnabled: page.formEnabled,
      NoIndex: page.noIndex,
      UpdatedAt: now,
    });

    for (const benefit of page.benefits) {
      console.log(`  + LandingBenefits: ${page.slug} / ${benefit.title}`);
      await base("LandingBenefits").create({
        LandingSlug: benefit.landingSlug,
        Title: benefit.title,
        Body: benefit.body,
        Order: benefit.order,
      });
    }

    for (const section of page.sections) {
      console.log(`  + LandingSections: ${page.slug} / ${section.title}`);
      await base("LandingSections").create({
        LandingSlug: section.landingSlug,
        Title: section.title,
        Body: section.body,
        Order: section.order,
      });
    }
  }
}

async function fixProductionUrls(base: AirtableBase) {
  console.log("\nPoprawiam URL-e obrazów na produkcyjne...");

  const landingPages = await base("LandingPages").select().all();
  for (const record of landingPages) {
    const hero = String(record.fields.HeroImageUrl ?? "");
    if (!hero.includes("localhost")) continue;
    const fixed = hero.replace(/https?:\/\/localhost:\d+/, PUBLIC_SITE_URL);
    await base("LandingPages").update(record.id, { HeroImageUrl: fixed });
    console.log(`  LandingPages/${record.fields.Slug}: ${fixed}`);
  }

  const pageSections = await base("PageSections").select().all();
  for (const record of pageSections) {
    const image = String(record.fields.ImageUrl ?? "");
    if (!image.includes("localhost")) continue;
    const fixed = image.replace(/https?:\/\/localhost:\d+/, PUBLIC_SITE_URL);
    await base("PageSections").update(record.id, { ImageUrl: fixed });
    console.log(
      `  PageSections/${record.fields.PageSlug}/${record.fields.SectionKey}`,
    );
  }

  const settings = await base("Settings").select({ maxRecords: 1 }).firstPage();
  if (settings[0]) {
    await base("Settings").update(settings[0].id, {
      DefaultOgImageUrl: absoluteUrl("/opengraph-image"),
      LogoWhiteUrl: absoluteUrl(mockSettings.logoWhiteUrl),
      LogoColorUrl: absoluteUrl(mockSettings.logoColorUrl),
    });
    console.log("  Settings: logo i OG zaktualizowane");
  }
}

async function main() {
  if (!BASE_ID || !TOKEN) {
    console.error("Ustaw AIRTABLE_BASE_ID i AIRTABLE_API_TOKEN w .env.local");
    process.exit(1);
  }

  const base = new Airtable({ apiKey: TOKEN }).base(BASE_ID);

  console.log("Automation Minds — seed demo Airtable\n");
  console.log(`Site URL: ${PUBLIC_SITE_URL}\n`);

  await seedSettings(base);
  await seedPageSections(base);
  await seedLandingPages(base);
  await fixProductionUrls(base);

  console.log("\nGotowe. Rewalidacja cache:");
  console.log(
    `  curl "${PUBLIC_SITE_URL}/api/revalidate?secret=REVALIDATE_SECRET"`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
