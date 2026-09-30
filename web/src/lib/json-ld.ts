import type {
  BreadcrumbItem,
  FaqItem,
  GuideArticle,
  GuideFaqItem,
  LandingPage,
  Service,
  Settings,
} from "./airtable.types";
import type { CityPageContent } from "./city-pages/types";
import { cityPath } from "./city-pages/types";
import { absoluteAssetUrl } from "./assets";
import { COMPANY } from "./company";
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

export function articleJsonLd(article: GuideArticle, logoPath: string) {
  const url = `${siteUrl}/poradnik/${article.slug}`;
  const organization = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Automation Minds",
    url: siteUrl,
    logo: { "@type": "ImageObject", url: absoluteAssetUrl(logoPath) },
  };

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.metaDescription,
    image: {
      "@type": "ImageObject",
      url: article.imageUrl,
      caption: article.imageAlt,
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "pl-PL",
    articleSection: article.category,
    keywords: [article.primaryKeyword, ...(article.secondaryKeywords ?? [])]
      .filter(Boolean)
      .join(", ") || undefined,
    wordCount: article.wordCount,
    timeRequired: `PT${article.readTimeMinutes}M`,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.jobTitle,
      description: article.author.bio,
      image: article.author.imageUrl,
      sameAs: article.author.linkedinUrl ? [article.author.linkedinUrl] : undefined,
      worksFor: { "@id": `${siteUrl}/#organization` },
    },
    publisher: organization,
    isPartOf: {
      "@type": "Blog",
      name: "Poradnik Automation Minds",
      url: `${siteUrl}/poradnik`,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export function guideFaqJsonLd(items: GuideFaqItem[]) {
  return faqPageJsonLd(
    items.map((item, index) => ({
      id: String(index),
      question: item.question,
      answer: item.answer,
      order: index,
      keywords: "",
    })),
  );
}

function guideItemList(articles: GuideArticle[]) {
  return {
    "@type": "ItemList",
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/poradnik/${article.slug}`,
      name: article.title,
    })),
  };
}

export function guideIndexJsonLd(articles: GuideArticle[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/poradnik#collection`,
    name: "Poradnik o automatyzacji procesów w firmie",
    url: `${siteUrl}/poradnik`,
    inLanguage: "pl-PL",
    isPartOf: { "@type": "WebSite", url: siteUrl, name: "Automation Minds" },
    mainEntity: guideItemList(articles),
  };
}

export function guideCategoryJsonLd(
  category: { slug: string; title: string; metaDescription: string; name: string },
  articles: GuideArticle[],
) {
  const url = `${siteUrl}/poradnik/kategoria/${category.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: category.title,
    description: category.metaDescription,
    url,
    inLanguage: "pl-PL",
    about: { "@type": "Thing", name: category.name },
    isPartOf: {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/poradnik#collection`,
      url: `${siteUrl}/poradnik`,
    },
    mainEntity: guideItemList(articles),
  };
}

export function contactPageJsonLd(settings: Settings, faq: GuideFaqItem[]) {
  const url = `${siteUrl}/kontakt`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${url}#page`,
      name: "Kontakt i bezpłatna konsultacja",
      url,
      inLanguage: "pl-PL",
      mainEntity: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: settings.siteName || "Automation Minds",
      legalName: COMPANY.legalName,
      url: siteUrl,
      logo: absoluteAssetUrl(settings.logoColorUrl),
      email: settings.email || undefined,
      telephone: settings.phone || undefined,
      taxID: COMPANY.nip,
      vatID: `PL${COMPANY.nip}`,
      identifier: [
        { "@type": "PropertyValue", propertyID: "KRS", value: COMPANY.krs },
        { "@type": "PropertyValue", propertyID: "REGON", value: COMPANY.regon },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.street,
        postalCode: COMPANY.postalCode,
        addressLocality: COMPANY.city,
        addressCountry: COMPANY.country,
      },
      areaServed: { "@type": "Country", name: "Polska" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: settings.phone || undefined,
        email: settings.email || undefined,
        areaServed: "PL",
        availableLanguage: ["pl"],
      },
    },
    guideFaqJsonLd(faq),
  ];
}

/** Service schema for city SEO pages — areaServed only, no fake local address. */
export function cityServiceJsonLd(city: CityPageContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Automatyzacja procesów biznesowych — ${city.name}`,
    description: city.metaDescription,
    url: `${siteUrl}${cityPath(city.slug)}`,
    serviceType: "Automatyzacja procesów biznesowych",
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.voivodeship,
      },
    },
    provider: {
      "@type": "Organization",
      name: "Automation Minds",
      url: siteUrl,
    },
  };
}
