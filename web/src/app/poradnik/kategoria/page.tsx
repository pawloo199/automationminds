import { permanentRedirect } from "next/navigation";

/** Adres bez kategorii nie ma własnej treści, prowadzi do Poradnika. */
export default function GuideCategoryIndexRedirect() {
  permanentRedirect("/poradnik");
}
