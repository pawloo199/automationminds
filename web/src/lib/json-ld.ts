import type { BreadcrumbItem, FaqItem, GuideArticle, LandingPage, Service, Settings } from "./airtable.types";
import { absoluteAssetUrl } from "./assets";
import { siteUrl } from "./metadata";

export function organizationJsonLd(settings: Settings) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: settings.siteName || "Automation Minds",
    url: siteUrl,
    logo: absoluteAssetUrl(settings.logoColorUrl),
    email: settings.email || undefined,
    telephone: settings.phone || undefined,
    address: settings.address
      ? { "@type": "PostalAddress", streetAddress: settings.address }
      : undefined,
  };
}

export function websiteJsonLd(settings: Settings) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: settings.siteName || "Automation Minds",
    url: siteUrl,
    description: settings.metaDescription,
  };
}

export function localBusinessJsonLd(settings: Settings) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: settings.siteName || "Automation Minds",
    url: siteUrl,
    telephone: settings.phone,
    email: settings.email || undefined,
    address: settings.address
      ? { "@type": "PostalAddress", streetAddress: settings.address }
      : undefined,
  };
}

export function faqPageJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.introBody,
    provider: {
      "@type": "Organization",
      name: "Automation Minds",
      url: siteUrl,
    },
    url: `${siteUrl}/uslugi/${service.slug}`,
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? `${siteUrl}${item.href}` : undefined,
    })),
  };
}

export function landingPageJsonLd(page: LandingPage) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.metaTitle || page.heroTitle,
    description: page.metaDescription,
    url: `${siteUrl}/kampanie/${page.slug}`,
  };
}

export function articleJsonLd(article: GuideArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.imageUrl,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "Automation Minds",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Automation Minds",
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/poradnik/${article.slug}`,
  };
}
