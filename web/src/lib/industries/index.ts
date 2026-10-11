import type { GuideArticle } from "../airtable.types";
import { getGuideArticleBySlug } from "../guide-articles";
import { getProcessEntry } from "../processes/catalog";
import { getServicesBySlugs } from "../services";
import { getToolEntry } from "../tools/catalog";
import { getIndustryEntry, INDUSTRIES_HUB_PATH, industryPath } from "./catalog";
import { biuraRachunkowe } from "./content/biura-rachunkowe";
import { biuraRachunkoweAi } from "./content/biura-rachunkowe-ai";
import { biuraDokumentyOdKlientow } from "./content/biura-dokumenty-od-klientow";
import { biuraOdczytDokumentow } from "./content/biura-odczyt-dokumentow";
import { biuraKsef } from "./content/biura-ksef";
import { biuraKomunikacjaZKlientami } from "./content/biura-komunikacja-z-klientami";
import { biuraZamkniecieMiesiaca } from "./content/biura-zamkniecie-miesiaca";
import { biuraRozliczenia } from "./content/biura-rozliczenia";
import { kancelariePrawne } from "./content/kancelarie-prawne";
import { kancelarieAnalizaUmow } from "./content/kancelarie-analiza-umow";
import { kancelarieAsystentWiedzy } from "./content/kancelarie-asystent-wiedzy";
import { kancelarieObslugaKlienta } from "./content/kancelarie-obsluga-klienta";
import { kancelariePismaZSzablonow } from "./content/kancelarie-pisma-z-szablonow";
import { kancelariePrawneAi } from "./content/kancelarie-prawne-ai";
import { kancelarieRozliczenia } from "./content/kancelarie-rozliczenia";
import { kancelarieTerminyISprawy } from "./content/kancelarie-terminy-i-sprawy";
import { spedycja } from "./content/spedycja";
import { spedycjaAi } from "./content/spedycja-ai";
import { spedycjaZapytaniaIWyceny } from "./content/spedycja-zapytania-i-wyceny";
import { spedycjaZleceniaTransportowe } from "./content/spedycja-zlecenia-transportowe";
import { spedycjaWeryfikacjaPrzewoznikow } from "./content/spedycja-weryfikacja-przewoznikow";
import { spedycjaStatusyDlaKlientow } from "./content/spedycja-statusy-dla-klientow";
import { spedycjaDokumentyPrzewozowe } from "./content/spedycja-dokumenty-przewozowe";
import { spedycjaRozliczeniaFrachtu } from "./content/spedycja-rozliczenia-frachtu";
import { firmyLogistyczne } from "./content/firmy-logistyczne";
import { firmyLogistyczneAi } from "./content/firmy-logistyczne-ai";
import { logistykaZleceniaKlientow } from "./content/logistyka-zlecenia-klientow";
import { logistykaAwizacjeDostaw } from "./content/logistyka-awizacje-dostaw";
import { logistykaDokumentyIReklamacje } from "./content/logistyka-dokumenty-i-reklamacje";
import { logistykaObslugaKlientow } from "./content/logistyka-obsluga-klientow";
import { logistykaFlotaIKierowcy } from "./content/logistyka-flota-i-kierowcy";
import { logistykaRozliczeniaUslug } from "./content/logistyka-rozliczenia-uslug";
import { hurtownie } from "./content/hurtownie";
import { hurtownieAi } from "./content/hurtownie-ai";
import { hurtownieObslugaZamowien } from "./content/hurtownie-obsluga-zamowien";
import { hurtownieOfertyICenniki } from "./content/hurtownie-oferty-i-cenniki";
import { hurtowniePracaHandlowcow } from "./content/hurtownie-praca-handlowcow";
import { hurtownieZakupyUDostawcow } from "./content/hurtownie-zakupy-u-dostawcow";
import { hurtownieReklamacjeIZwroty } from "./content/hurtownie-reklamacje-i-zwroty";
import { hurtownieNaleznosciILimity } from "./content/hurtownie-naleznosci-i-limity";
import { agencjeMarketingowe } from "./content/agencje-marketingowe";
import { agencjeMarketingoweAi } from "./content/agencje-marketingowe-ai";
import { agencjeRaportyDlaKlientow } from "./content/agencje-raporty-dla-klientow";
import { agencjeBriefyIWyceny } from "./content/agencje-briefy-i-wyceny";
import { agencjeAkceptacjeMaterialow } from "./content/agencje-akceptacje-materialow";
import { agencjeTresciZAi } from "./content/agencje-tresci-z-ai";
import { agencjeProjektyIRentownosc } from "./content/agencje-projekty-i-rentownosc";
import { agencjeOnboardingKlientow } from "./content/agencje-onboarding-klientow";
import { nieruchomosci } from "./content/nieruchomosci";
import { nieruchomosciAi } from "./content/nieruchomosci-ai";
import { nieruchomosciLeadyZPortali } from "./content/nieruchomosci-leady-z-portali";
import { nieruchomosciOfertyIOpisy } from "./content/nieruchomosci-oferty-i-opisy";
import { nieruchomosciUmowyIDokumenty } from "./content/nieruchomosci-umowy-i-dokumenty";
import { nieruchomosciZgloszeniaNajemcow } from "./content/nieruchomosci-zgloszenia-najemcow";
import { nieruchomosciRozliczeniaNajmu } from "./content/nieruchomosci-rozliczenia-najmu";
import { nieruchomosciAsystentNajemcy } from "./content/nieruchomosci-asystent-najemcy";
import { posrednictwoUbezpieczeniowe } from "./content/posrednictwo-ubezpieczeniowe";
import { posrednictwoUbezpieczenioweAi } from "./content/posrednictwo-ubezpieczeniowe-ai";
import { posrednictwoUbezpieczenioweOdnowieniaPolis } from "./content/posrednictwo-ubezpieczeniowe-odnowienia-polis";
import { posrednictwoUbezpieczenioweZapytaniaIKalkulacje } from "./content/posrednictwo-ubezpieczeniowe-zapytania-i-kalkulacje";
import { posrednictwoUbezpieczenioweDokumentyKlientow } from "./content/posrednictwo-ubezpieczeniowe-dokumenty-klientow";
import { posrednictwoUbezpieczenioweSzkodyKlientow } from "./content/posrednictwo-ubezpieczeniowe-szkody-klientow";
import { posrednictwoUbezpieczenioweProwizje } from "./content/posrednictwo-ubezpieczeniowe-prowizje";
import { posrednictwoUbezpieczenioweBazaPolis } from "./content/posrednictwo-ubezpieczeniowe-baza-polis";
import { firmySerwisowe } from "./content/firmy-serwisowe";
import { firmySerwisoweAi } from "./content/firmy-serwisowe-ai";
import { firmySerwisoweZgloszenia } from "./content/firmy-serwisowe-zgloszenia";
import { firmySerwisowePlanowanieWizyt } from "./content/firmy-serwisowe-planowanie-wizyt";
import { firmySerwisoweProtokoly } from "./content/firmy-serwisowe-protokoly";
import { firmySerwisowePrzeglady } from "./content/firmy-serwisowe-przeglady";
import { firmySerwisoweWyceny } from "./content/firmy-serwisowe-wyceny";
import { firmySerwisoweRozliczenia } from "./content/firmy-serwisowe-rozliczenia";
import { firmyBudowlane } from "./content/firmy-budowlane";
import { firmyBudowlaneAi } from "./content/firmy-budowlane-ai";
import { firmyBudowlaneOferty } from "./content/firmy-budowlane-oferty";
import { firmyBudowlaneRaporty } from "./content/firmy-budowlane-raporty";
import { firmyBudowlanePodwykonawcy } from "./content/firmy-budowlane-podwykonawcy";
import { firmyBudowlaneMaterialy } from "./content/firmy-budowlane-materialy";
import { firmyBudowlaneOdbiory } from "./content/firmy-budowlane-odbiory";
import { firmyBudowlaneKoszty } from "./content/firmy-budowlane-koszty";
import { sklepyInternetowe } from "./content/sklepy-internetowe";
import { sklepyInternetoweAi } from "./content/sklepy-internetowe-ai";
import { sklepyInternetoweObslugaKlienta } from "./content/sklepy-internetowe-obsluga-klienta";
import { sklepyInternetoweZwroty } from "./content/sklepy-internetowe-zwroty";
import { sklepyInternetoweProdukty } from "./content/sklepy-internetowe-produkty";
import { sklepyInternetoweOfertyIStany } from "./content/sklepy-internetowe-oferty-i-stany";
import { sklepyInternetoweZakupy } from "./content/sklepy-internetowe-zakupy";
import { sklepyInternetoweRaporty } from "./content/sklepy-internetowe-raporty";
import { placowkiMedyczne } from "./content/placowki-medyczne";
import { placowkiMedyczneAi } from "./content/placowki-medyczne-ai";
import { placowkiMedyczneRejestracja } from "./content/placowki-medyczne-rejestracja";
import { placowkiMedycznePrzypomnienia } from "./content/placowki-medyczne-przypomnienia";
import { placowkiMedyczneFormularze } from "./content/placowki-medyczne-formularze";
import { placowkiMedyczneKomunikacja } from "./content/placowki-medyczne-komunikacja";
import { placowkiMedyczneGrafiki } from "./content/placowki-medyczne-grafiki";
import { placowkiMedyczneRozliczenia } from "./content/placowki-medyczne-rozliczenia";
import { firmySzkoleniowe } from "./content/firmy-szkoleniowe";
import { firmySzkolenioweAi } from "./content/firmy-szkoleniowe-ai";
import { firmySzkolenioweZapisy } from "./content/firmy-szkoleniowe-zapisy";
import { firmySzkolenioweOrganizacja } from "./content/firmy-szkoleniowe-organizacja";
import { firmySzkolenioweOferty } from "./content/firmy-szkoleniowe-oferty";
import { firmySzkolenioweCertyfikaty } from "./content/firmy-szkoleniowe-certyfikaty";
import { firmySzkolenioweTrenerzy } from "./content/firmy-szkoleniowe-trenerzy";
import { firmySzkolenioweDokumentacja } from "./content/firmy-szkoleniowe-dokumentacja";
import { agencjePracy } from "./content/agencje-pracy";
import { agencjePracyAi } from "./content/agencje-pracy-ai";
import { agencjePracyKandydaci } from "./content/agencje-pracy-kandydaci";
import { agencjePracyZlecenia } from "./content/agencje-pracy-zlecenia";
import { agencjePracyDokumenty } from "./content/agencje-pracy-dokumenty";
import { agencjePracyCzasPracy } from "./content/agencje-pracy-czas-pracy";
import { agencjePracyRozliczenia } from "./content/agencje-pracy-rozliczenia";
import { agencjePracyKomunikacja } from "./content/agencje-pracy-komunikacja";
import { biuraProjektowe } from "./content/biura-projektowe";
import { biuraProjektoweAi } from "./content/biura-projektowe-ai";
import { biuraProjektoweOferty } from "./content/biura-projektowe-oferty";
import { biuraProjektoweTerminy } from "./content/biura-projektowe-terminy";
import { biuraProjektoweDokumentacja } from "./content/biura-projektowe-dokumentacja";
import { biuraProjektoweUzgodnienia } from "./content/biura-projektowe-uzgodnienia";
import { biuraProjektoweCzasPracy } from "./content/biura-projektowe-czas-pracy";
import { biuraProjektoweInwestor } from "./content/biura-projektowe-inwestor";
import type { IndustryPageContent } from "./types";

export * from "./catalog";
export type * from "./types";

/** Strony branż: najpierw strona główna branży, potem jej podstrony w kolejności wyświetlania. */
const INDUSTRY_PAGES: IndustryPageContent[] = [
  kancelariePrawne,
  kancelariePrawneAi,
  kancelarieAsystentWiedzy,
  kancelarieAnalizaUmow,
  kancelarieObslugaKlienta,
  kancelarieTerminyISprawy,
  kancelariePismaZSzablonow,
  kancelarieRozliczenia,
  biuraRachunkowe,
  biuraRachunkoweAi,
  biuraDokumentyOdKlientow,
  biuraOdczytDokumentow,
  biuraKsef,
  biuraKomunikacjaZKlientami,
  biuraZamkniecieMiesiaca,
  biuraRozliczenia,
  spedycja,
  spedycjaAi,
  spedycjaZapytaniaIWyceny,
  spedycjaZleceniaTransportowe,
  spedycjaWeryfikacjaPrzewoznikow,
  spedycjaStatusyDlaKlientow,
  spedycjaDokumentyPrzewozowe,
  spedycjaRozliczeniaFrachtu,
  firmyLogistyczne,
  firmyLogistyczneAi,
  logistykaZleceniaKlientow,
  logistykaAwizacjeDostaw,
  logistykaDokumentyIReklamacje,
  logistykaObslugaKlientow,
  logistykaFlotaIKierowcy,
  logistykaRozliczeniaUslug,
  hurtownie,
  hurtownieAi,
  hurtownieObslugaZamowien,
  hurtownieOfertyICenniki,
  hurtowniePracaHandlowcow,
  hurtownieZakupyUDostawcow,
  hurtownieReklamacjeIZwroty,
  hurtownieNaleznosciILimity,
  agencjeMarketingowe,
  agencjeMarketingoweAi,
  agencjeRaportyDlaKlientow,
  agencjeBriefyIWyceny,
  agencjeAkceptacjeMaterialow,
  agencjeTresciZAi,
  agencjeProjektyIRentownosc,
  agencjeOnboardingKlientow,
  nieruchomosci,
  nieruchomosciAi,
  nieruchomosciLeadyZPortali,
  nieruchomosciOfertyIOpisy,
  nieruchomosciUmowyIDokumenty,
  nieruchomosciZgloszeniaNajemcow,
  nieruchomosciRozliczeniaNajmu,
  nieruchomosciAsystentNajemcy,
  posrednictwoUbezpieczeniowe,
  posrednictwoUbezpieczenioweAi,
  posrednictwoUbezpieczenioweOdnowieniaPolis,
  posrednictwoUbezpieczenioweZapytaniaIKalkulacje,
  posrednictwoUbezpieczenioweDokumentyKlientow,
  posrednictwoUbezpieczenioweSzkodyKlientow,
  posrednictwoUbezpieczenioweProwizje,
  posrednictwoUbezpieczenioweBazaPolis,
  firmySerwisowe,
  firmySerwisoweAi,
  firmySerwisoweZgloszenia,
  firmySerwisowePlanowanieWizyt,
  firmySerwisoweProtokoly,
  firmySerwisowePrzeglady,
  firmySerwisoweWyceny,
  firmySerwisoweRozliczenia,
  firmyBudowlane,
  firmyBudowlaneAi,
  firmyBudowlaneOferty,
  firmyBudowlaneRaporty,
  firmyBudowlanePodwykonawcy,
  firmyBudowlaneMaterialy,
  firmyBudowlaneOdbiory,
  firmyBudowlaneKoszty,
  sklepyInternetowe,
  sklepyInternetoweAi,
  sklepyInternetoweObslugaKlienta,
  sklepyInternetoweZwroty,
  sklepyInternetoweProdukty,
  sklepyInternetoweOfertyIStany,
  sklepyInternetoweZakupy,
  sklepyInternetoweRaporty,
  placowkiMedyczne,
  placowkiMedyczneAi,
  placowkiMedyczneRejestracja,
  placowkiMedycznePrzypomnienia,
  placowkiMedyczneFormularze,
  placowkiMedyczneKomunikacja,
  placowkiMedyczneGrafiki,
  placowkiMedyczneRozliczenia,
  firmySzkoleniowe,
  firmySzkolenioweAi,
  firmySzkolenioweZapisy,
  firmySzkolenioweOrganizacja,
  firmySzkolenioweOferty,
  firmySzkolenioweCertyfikaty,
  firmySzkolenioweTrenerzy,
  firmySzkolenioweDokumentacja,
  agencjePracy,
  agencjePracyAi,
  agencjePracyKandydaci,
  agencjePracyZlecenia,
  agencjePracyDokumenty,
  agencjePracyCzasPracy,
  agencjePracyRozliczenia,
  agencjePracyKomunikacja,
  biuraProjektowe,
  biuraProjektoweAi,
  biuraProjektoweOferty,
  biuraProjektoweTerminy,
  biuraProjektoweDokumentacja,
  biuraProjektoweUzgodnienia,
  biuraProjektoweCzasPracy,
  biuraProjektoweInwestor,
];

export function industryPagePath(page: IndustryPageContent) {
  return industryPath(page.industrySlug, page.subSlug);
}

export function getIndustryPage(industrySlug: string, subSlug?: string) {
  return INDUSTRY_PAGES.find((page) => page.industrySlug === industrySlug && page.subSlug === subSlug);
}

export function getIndustrySubpages(industrySlug: string) {
  return INDUSTRY_PAGES.filter((page) => page.industrySlug === industrySlug && page.subSlug);
}

export function getAllIndustryPages() {
  return INDUSTRY_PAGES;
}

export function getIndustryRelatedServices(page: IndustryPageContent) {
  return getServicesBySlugs(page.relatedServiceSlugs);
}

export function getIndustryRelatedProcesses(page: IndustryPageContent) {
  return page.relatedProcessSlugs.map((slug) => getProcessEntry(slug)).filter((entry) => entry?.status === "live").map((entry) => entry!);
}

export function getIndustryRelatedTools(page: IndustryPageContent) {
  return page.relatedToolSlugs.map((slug) => getToolEntry(slug)).filter((tool) => tool !== undefined);
}

export function getIndustryRelatedArticles(page: IndustryPageContent) {
  return page.relatedArticleSlugs
    .map((slug) => getGuideArticleBySlug(slug))
    .filter((article): article is GuideArticle => Boolean(article));
}

export function industryBreadcrumbs(page: IndustryPageContent) {
  const entry = getIndustryEntry(page.industrySlug)!;
  const items = [
    { label: "Strona główna", href: "/" },
    { label: "Branże", href: INDUSTRIES_HUB_PATH },
    { label: entry.name, href: industryPath(entry.slug) },
  ];
  if (page.subSlug) items.push({ label: page.name, href: industryPagePath(page) });
  return items;
}

/** Strony branż powiązane z usługą, narzędziem lub procesem (linkowanie zwrotne). */
export function getIndustryPagesFor(kind: "service" | "tool" | "process", slug: string) {
  const key = kind === "service" ? "relatedServiceSlugs" : kind === "tool" ? "relatedToolSlugs" : "relatedProcessSlugs";
  return INDUSTRY_PAGES.filter((page) => page[key].includes(slug));
}

if (process.env.NODE_ENV !== "production") {
  for (const page of INDUSTRY_PAGES) {
    const id = industryPagePath(page);
    const entry = getIndustryEntry(page.industrySlug);
    if (!entry || entry.status !== "live") throw new Error(`Industry page ${id}: missing live catalog entry`);
    if (getIndustryRelatedServices(page).length !== page.relatedServiceSlugs.length) throw new Error(`Industry page ${id}: unknown related service`);
    if (getIndustryRelatedProcesses(page).length !== page.relatedProcessSlugs.length) throw new Error(`Industry page ${id}: unknown related process`);
    if (getIndustryRelatedTools(page).length !== page.relatedToolSlugs.length) throw new Error(`Industry page ${id}: unknown related tool`);
    if (getIndustryRelatedArticles(page).length !== page.relatedArticleSlugs.length) throw new Error(`Industry page ${id}: unknown related article`);
  }
}

/** Pozycje do kart linków (IndustryLinks): nazwa strony głównej branży z dopiskiem. */
export function industryLinkItems(pages: IndustryPageContent[]) {
  return pages.map((page) => {
    const entry = getIndustryEntry(page.industrySlug)!;
    return {
      href: industryPagePath(page),
      name: page.subSlug ? page.name : entry.mainPageLabel,
      excerpt: page.excerpt,
    };
  });
}
