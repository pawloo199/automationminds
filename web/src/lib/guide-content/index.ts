import type { GuideArticle } from "../airtable.types";
import procesowDoAutomatyzacjiWMalejFirmie from "./articles/5-procesow-do-automatyzacji-w-malej-firmie";
import aiWCodziennejPracyZespolu from "./articles/ai-w-codziennej-pracy-zespolu";
import automatyzacjaObslugiLeadowSprzedazowych from "./articles/automatyzacja-obslugi-leadow-sprzedazowych";
import automatyzacjaOnboardinguPracownika from "./articles/automatyzacja-onboardingu-pracownika";
import bledyPrzyPierwszymWdrozeniuAutomatyzacji from "./articles/bledy-przy-pierwszym-wdrozeniu-automatyzacji";
import integracjaCrmZFakturowaniem from "./articles/integracja-crm-z-fakturowaniem";
import jakMierzycRoiAutomatyzacji from "./articles/jak-mierzyc-roi-automatyzacji";
import jakWybracNarzedzieDoAutomatyzacji from "./articles/jak-wybrac-narzedzie-do-automatyzacji";
import odCzegoZaczacMapowanieProcesow from "./articles/od-czego-zaczac-mapowanie-procesow";
import rodoAAutomatyzacjaProcesow from "./articles/rodo-a-automatyzacja-procesow";

/** Wszystkie artykuły Poradnika, od najnowszego. */
export const guideArticles: GuideArticle[] = [
  procesowDoAutomatyzacjiWMalejFirmie,
  aiWCodziennejPracyZespolu,
  automatyzacjaObslugiLeadowSprzedazowych,
  automatyzacjaOnboardinguPracownika,
  bledyPrzyPierwszymWdrozeniuAutomatyzacji,
  integracjaCrmZFakturowaniem,
  jakMierzycRoiAutomatyzacji,
  jakWybracNarzedzieDoAutomatyzacji,
  odCzegoZaczacMapowanieProcesow,
  rodoAAutomatyzacjaProcesow,
].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getLatestGuideArticles(limit = 6): GuideArticle[] {
  return guideArticles.slice(0, limit);
}
