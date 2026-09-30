import type { GuideArticle } from "../airtable.types";
import procesowDoAutomatyzacjiWMalejFirmie from "./articles/5-procesow-do-automatyzacji-w-malej-firmie";
import aiWCodziennejPracyZespolu from "./articles/ai-w-codziennej-pracy-zespolu";
import airtableCzyExcel from "./articles/airtable-czy-excel";
import airtableWPraktyceZastosowania from "./articles/airtable-w-praktyce-zastosowania";
import audytProcesowWFirmie from "./articles/audyt-procesow-w-firmie";
import automatyzacjaObslugiLeadowSprzedazowych from "./articles/automatyzacja-obslugi-leadow-sprzedazowych";
import automatyzacjaOnboardinguPracownika from "./articles/automatyzacja-onboardingu-pracownika";
import bledyPrzyPierwszymWdrozeniuAutomatyzacji from "./articles/bledy-przy-pierwszym-wdrozeniu-automatyzacji";
import cyfryzacjaDanychWFirmie from "./articles/cyfryzacja-danych-w-firmie";
import gotowaAutomatyzacjaCzyBudowanaOdZera from "./articles/gotowa-automatyzacja-czy-budowana-od-zera";
import ileKosztujeAutomatyzacjaProcesow from "./articles/ile-kosztuje-automatyzacja-procesow";
import integracjaCrmZFakturowaniem from "./articles/integracja-crm-z-fakturowaniem";
import jakMierzycRoiAutomatyzacji from "./articles/jak-mierzyc-roi-automatyzacji";
import jakWybracNarzedzieDoAutomatyzacji from "./articles/jak-wybrac-narzedzie-do-automatyzacji";
import odCzegoZaczacMapowanieProcesow from "./articles/od-czego-zaczac-mapowanie-procesow";
import porzadekWDanychPrzedAiIAutomatyzacja from "./articles/porzadek-w-danych-przed-ai-i-automatyzacja";
import rodoAAutomatyzacjaProcesow from "./articles/rodo-a-automatyzacja-procesow";
import wdrozenieAiWMalejISredniejFirmie from "./articles/wdrozenie-ai-w-malej-i-sredniej-firmie";

/** Wszystkie artykuły Poradnika, od najnowszego. */
export const guideArticles: GuideArticle[] = [
  procesowDoAutomatyzacjiWMalejFirmie,
  aiWCodziennejPracyZespolu,
  airtableCzyExcel,
  airtableWPraktyceZastosowania,
  audytProcesowWFirmie,
  automatyzacjaObslugiLeadowSprzedazowych,
  automatyzacjaOnboardinguPracownika,
  bledyPrzyPierwszymWdrozeniuAutomatyzacji,
  cyfryzacjaDanychWFirmie,
  gotowaAutomatyzacjaCzyBudowanaOdZera,
  ileKosztujeAutomatyzacjaProcesow,
  integracjaCrmZFakturowaniem,
  jakMierzycRoiAutomatyzacji,
  jakWybracNarzedzieDoAutomatyzacji,
  odCzegoZaczacMapowanieProcesow,
  porzadekWDanychPrzedAiIAutomatyzacja,
  rodoAAutomatyzacjaProcesow,
  wdrozenieAiWMalejISredniejFirmie,
].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getLatestGuideArticles(limit = 6): GuideArticle[] {
  return guideArticles.slice(0, limit);
}
