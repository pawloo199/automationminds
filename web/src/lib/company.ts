/**
 * Dane rejestrowe spółki (KRS). Wyświetlane na stronie Kontakt i w stopce
 * (art. 206 KSH) oraz w danych strukturalnych Organization.
 */
export const COMPANY = {
  legalName: "AUTOMATIONMINDS sp. z o.o.",
  street: "ul. Sołtysowicka 29C/4",
  postalCode: "51-168",
  city: "Wrocław",
  country: "PL",
  krs: "0000985895",
  nip: "8952245316",
  regon: "522766130",
  shareCapital: "5 000 zł",
  /** Rok rejestracji spółki (KRS, rejestracja VAT 2022). */
  foundingYear: "2022",
} as const;

export const COMPANY_ADDRESS_LINE = `${COMPANY.street}, ${COMPANY.postalCode} ${COMPANY.city}`;
