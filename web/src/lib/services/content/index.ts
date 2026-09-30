import type { ServiceContent } from "../types";
import agenciAi from "./agenci-ai";
import aiWObsludzeDokumentow from "./ai-w-obsludze-dokumentow";
import asystentAiNaFirmowejWiedzy from "./asystent-ai-na-firmowej-wiedzy";
import audytProcesowBiznesowych from "./audyt-procesow-biznesowych";
import automatyzacjaDlaFirmUslugowych from "./automatyzacja-dla-firm-uslugowych";
import automatyzacjaDlaHr from "./automatyzacja-dla-hr";
import automatyzacjaDlaKsiegowosci from "./automatyzacja-dla-ksiegowosci";
import automatyzacjaDlaLogistyki from "./automatyzacja-dla-logistyki";
import automatyzacjaMarketingu from "./automatyzacja-marketingu";
import automatyzacjaOrazAiWNiestandardowychProcesach from "./automatyzacja-oraz-ai-w-niestandardowych-procesach";
import automatyzacjaRaportow from "./automatyzacja-raportow";
import automatyzacjaSprzedazy from "./automatyzacja-sprzedazy";
import automatyzacjaWObsludzeKlienta from "./automatyzacja-w-obsludze-klienta";
import automatyzacjaWProdukcji from "./automatyzacja-w-produkcji";
import chatbotAiDlaFirmy from "./chatbot-ai-dla-firmy";
import cyfryzacjaDanychIDokumentow from "./cyfryzacja-danych-i-dokumentow";
import doradztwoIOptymalizacjaProcesowBiznesowych from "./doradztwo-i-optymalizacja-procesow-biznesowych";
import integracjeSystemow from "./integracje-systemow";
import migracjaDanych from "./migracja-danych";
import porzadkowanieIStrukturyzowanieDanych from "./porzadkowanie-i-strukturyzowanie-danych";
import projektowanieBazDanych from "./projektowanie-baz-danych";
import przygotowanieDanychPodAi from "./przygotowanie-danych-pod-ai";
import strategiaWdrozeniaAi from "./strategia-wdrozenia-ai";
import szkoleniaAiDlaZespolow from "./szkolenia-ai-dla-zespolow";
import wdrozeniaAirtable from "./wdrozenia-airtable";

/** Pełne treści usług w nowym szablonie. Klucz: slug usługi. */
export const SERVICE_CONTENT: Record<string, ServiceContent> = Object.fromEntries(
  [
    agenciAi,
    aiWObsludzeDokumentow,
    asystentAiNaFirmowejWiedzy,
    audytProcesowBiznesowych,
    automatyzacjaDlaFirmUslugowych,
    automatyzacjaDlaHr,
    automatyzacjaDlaKsiegowosci,
    automatyzacjaDlaLogistyki,
    automatyzacjaMarketingu,
    automatyzacjaOrazAiWNiestandardowychProcesach,
    automatyzacjaRaportow,
    automatyzacjaSprzedazy,
    automatyzacjaWObsludzeKlienta,
    automatyzacjaWProdukcji,
    chatbotAiDlaFirmy,
    cyfryzacjaDanychIDokumentow,
    doradztwoIOptymalizacjaProcesowBiznesowych,
    integracjeSystemow,
    migracjaDanych,
    porzadkowanieIStrukturyzowanieDanych,
    projektowanieBazDanych,
    przygotowanieDanychPodAi,
    strategiaWdrozeniaAi,
    szkoleniaAiDlaZespolow,
    wdrozeniaAirtable,
  ].map((content) => [content.slug, content]),
);
