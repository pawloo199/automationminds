import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSettings } from "@/lib/airtable";
import {
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/json-ld";
import { buildMetadata } from "@/lib/metadata";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  const metadata = buildMetadata({
    title: "Automation Minds — automatyzacja procesów biznesowych",
    description: settings.metaDescription,
    ogImage: settings.defaultOgImageUrl,
  });

  return {
    ...metadata,
    verification: settings.googleSiteVerification
      ? { google: settings.googleSiteVerification }
      : undefined,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();

  return (
    <html lang="pl">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <JsonLd
          data={[
            organizationJsonLd(settings),
            websiteJsonLd(settings),
            localBusinessJsonLd(settings),
          ]}
        />
        <GoogleAnalytics />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
