import type {
  BreadcrumbItem,
  FaqItem,
  GuideArticle,
  GuideAuthor,
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

/** Pełny opis organizacji (strony Kontakt i O nas). */
export function organizationDetailsJsonLd(settings: Settings) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: settings.siteName || "Automation Minds",
    legalName: COMPANY.legalName,
    url: siteUrl,
    logo: absoluteAssetUrl(settings.logoColorUrl),
    email: settings.email || undefined,
    telephone: settings.phone || undefined,
    foundingDate: COMPANY.foundingYear,
    foundingLocation: { "@type": "Place", name: COMPANY.city },
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
    knowsAbout: [
      "automatyzacja procesów biznesowych",
      "wdrożenia sztucznej inteligencji",
      "Airtable",
      "projektowanie baz danych",
      "cyfryzacja danych",
      "integracje systemów",
      "audyt procesów",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: settings.phone || undefined,
      email: settings.email || undefined,
      areaServed: "PL",
      availableLanguage: ["pl"],
    },
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
    organizationDetailsJsonLd(settings),
    guideFaqJsonLd(faq),
  ];
}

export function aboutPageJsonLd(settings: Settings, author: GuideAuthor) {
  const url = `${siteUrl}/o-nas`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${url}#page`,
      name: "O nas",
      url,
      inLanguage: "pl-PL",
      mainEntity: { "@id": `${siteUrl}/#organization` },
    },
    organizationDetailsJsonLd(settings),
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: author.name,
      jobTitle: author.jobTitle,
      description: author.bio,
      image: author.imageUrl,
      sameAs: author.linkedinUrl ? [author.linkedinUrl] : undefined,
      worksFor: { "@id": `${siteUrl}/#organization` },
    },
  ];
}

/** Service schema dla stron miast: tylko areaServed, bez fikcyjnego lokalnego adresu. */
export function cityServiceJsonLd(city: CityPageContent) {
  const url = `${siteUrl}${cityPath(city.slug)}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Automatyzacja procesów biznesowych: ${city.name}`,
    description: city.metaDescription,
    url,
    serviceType: "Automatyzacja procesów biznesowych",
    inLanguage: "pl-PL",
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: `województwo ${city.voivodeship}`,
        containedInPlace: { "@type": "Country", name: "Polska" },
      },
    },
    provider: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Automation Minds",
      url: siteUrl,
    },
  };
}

/** Strony zbiorcze silosu miast (Polska, województwo): lista podstron. */
export function placesCollectionJsonLd(
  page: { path: string; name: string; description: string },
  items: { name: string; path: string }[],
) {
  const url = `${siteUrl}${page.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: page.name,
    description: page.description,
    url,
    inLanguage: "pl-PL",
    isPartOf: { "@type": "WebSite", url: siteUrl, name: "Automation Minds" },
    about: { "@id": `${siteUrl}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${siteUrl}${item.path}`,
      })),
    },
  };
}

/** Service schema dla stron usług w nowym szablonie. */
export function serviceDetailJsonLd(
  entry: { slug: string; name: string; group: string },
  content: {
    metaDescription: string;
    primaryKeyword: string;
    hero: { imageUrl: string };
    scope: { items: { title: string; body: string }[] };
  },
  groupName: string,
) {
  const url = `${siteUrl}/uslugi/${entry.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: entry.name,
    serviceType: content.primaryKeyword,
    category: groupName,
    description: content.metaDescription,
    url,
    image: content.hero.imageUrl,
    inLanguage: "pl-PL",
    areaServed: { "@type": "Country", name: "Polska" },
    audience: {
      "@type": "BusinessAudience",
      name: "Małe i średnie firmy",
    },
    provider: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Automation Minds",
      url: siteUrl,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Zakres usługi: ${entry.name}`,
      itemListElement: content.scope.items.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.body,
        },
      })),
    },
  };
}

/** Strona /uslugi: lista wszystkich opublikowanych usług. */
export function servicesHubJsonLd(
  services: { slug: string; name: string; menuDescription: string }[],
) {
  const url = `${siteUrl}/uslugi`;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name: "Usługi Automation Minds",
    url,
    inLanguage: "pl-PL",
    isPartOf: { "@type": "WebSite", url: siteUrl, name: "Automation Minds" },
    about: { "@id": `${siteUrl}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: services.length,
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}/uslugi/${service.slug}`,
        name: service.name,
        description: service.menuDescription,
      })),
    },
  };
}

/** Service schema dla stron narzędzi (/narzedzia/{slug}). */
export function toolServiceJsonLd(
  tool: { slug: string; name: string },
  content: {
    hero: { title: string };
    metaDescription: string;
    primaryKeyword: string;
    useCases: { items: { title: string; body: string }[] };
  },
  categoryName: string,
) {
  const url = `${siteUrl}/narzedzia/${tool.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: content.hero.title,
    serviceType: content.primaryKeyword,
    category: categoryName,
    description: content.metaDescription,
    url,
    inLanguage: "pl-PL",
    areaServed: { "@type": "Country", name: "Polska" },
    audience: { "@type": "BusinessAudience", name: "Małe i średnie firmy" },
    about: { "@type": "SoftwareApplication", name: tool.name, applicationCategory: "BusinessApplication" },
    provider: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Automation Minds",
      url: siteUrl,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Wdrożenia: ${tool.name}`,
      itemListElement: content.useCases.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.title, description: item.body },
      })),
    },
  };
}

/** Service schema dla stron procesów (/procesy/{slug}). */
export function processServiceJsonLd(
  slug: string,
  content: {
    hero: { title: string };
    metaDescription: string;
    primaryKeyword: string;
    variants: { items: { name: string; description: string }[] };
  },
  areaName: string,
) {
  const url = `${siteUrl}/procesy/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: content.hero.title,
    serviceType: content.primaryKeyword,
    category: areaName,
    description: content.metaDescription,
    url,
    inLanguage: "pl-PL",
    areaServed: { "@type": "Country", name: "Polska" },
    audience: { "@type": "BusinessAudience", name: "Małe i średnie firmy" },
    provider: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Automation Minds", url: siteUrl },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Warianty: ${content.hero.title}`,
      itemListElement: content.variants.items.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Wariant ${item.name.toLowerCase()}`, description: item.description },
      })),
    },
  };
}
