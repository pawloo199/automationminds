import type { ServiceContent } from "../types";
import automatyzacjaSprzedazy from "./automatyzacja-sprzedazy";

/** Pełne treści usług w nowym szablonie. Klucz: slug usługi. */
export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  [automatyzacjaSprzedazy.slug]: automatyzacjaSprzedazy,
};
