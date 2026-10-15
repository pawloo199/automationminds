import { defineTerm } from "../types";

export default defineTerm({
  slug: "mpk",
  term: "MPK (miejsce powstawania kosztów)",
  category: "systemy",
  definition:
    "MPK, czyli miejsce powstawania kosztów, to oznaczenie działu, projektu lub obszaru firmy, do którego przypisuje się koszt, żeby wiedzieć, gdzie powstają wydatki i ile kosztuje dana część działalności.",
  metaTitle: "MPK: co to jest miejsce powstawania kosztów",
  metaDescription:
    "MPK co to jest: miejsce powstawania kosztów w praktyce, jak przypisywać faktury do MPK, typowe błędy i jak automatyzacja ułatwia opis kosztów.",
  primaryKeyword: "mpk co to",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest MPK",
    "Miejsce powstawania kosztów to etykieta, którą przypisuje się do każdego wydatku. Może oznaczać dział, np. sprzedaż, produkcję, administrację, projekt, oddział, samochód albo maszynę. Wtedy firma widzi nie tylko, ile wydała w miesiącu, ale też na co i w której części działalności. MPK jest podstawą rachunkowości zarządczej, budżetowania i liczenia rentowności.",
    "## Przykłady podziału na MPK",
    "| Rodzaj firmy | Przykładowe MPK |\n|---|---|\n| Firma usługowa | Działy, projekty klientów |\n| Firma budowlana | Budowy, sprzęt, biuro |\n| Firma transportowa | Pojazdy, trasy, biuro |\n| Zakład produkcyjny | Wydziały, linie, utrzymanie ruchu |",
    "Dobry podział to taki, który odpowiada na pytania zarządu. Zbyt szczegółowy sprawia, że nikt nie wie, które MPK wybrać, a zbyt ogólny nic nie mówi.",
    "## Jak przypisuje się koszty do MPK",
    "Najczęściej przy opisie faktury kosztowej. Ktoś musi zdecydować, którego działu lub projektu dotyczy wydatek, a czasem podzielić fakturę na kilka MPK. W wielu firmach odbywa się to ręcznie: księgowość pyta mailem, kto zamawiał, kierownik odpisuje po kilku dniach, a faktura czeka.",
    "## Jak automatyzacja pomaga",
    "W zautomatyzowanym [obiegu faktur kosztowych](/procesy/obieg-faktur-kosztowych) MPK może być podpowiadane na kilka sposobów:",
    "- **Po dostawcy:** faktury stałych dostawców zwykle trafiają do tego samego MPK.\n- **Po zamówieniu:** jeśli zakup był zamówiony w systemie, MPK pochodzi z zamówienia.\n- **Po treści faktury:** AI odczytuje pozycje i podpowiada MPK na podstawie wcześniejszych decyzji.\n- **Przez osobę akceptującą:** kierownik zatwierdza fakturę i jednym kliknięciem potwierdza lub zmienia MPK.",
    "Księgowość dostaje fakturę już opisaną, a raport kosztów według MPK powstaje automatycznie.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Firma budowlana prowadzi kilka budów jednocześnie. Faktury za materiały przychodzą z KSeF. Automatyzacja rozpoznaje numer zamówienia lub adres dostawy na fakturze i przypisuje koszt do właściwej budowy. Faktury bez takiej informacji trafiają do kierownika budowy do potwierdzenia. Zarząd widzi koszty każdej budowy na bieżąco, a nie po zamknięciu miesiąca. Szerzej o tym w artykule [kontrola kosztów budowy](/poradnik/kontrola-kosztow-budowy).",
    "## MPK a budżet",
    "Gdy koszty są przypisane do MPK, można zestawić je z budżetem każdego działu lub projektu. Automatyczny raport pokazuje wtedy, które MPK zbliża się do limitu, jeszcze w trakcie miesiąca. Kierownik dowiaduje się o przekroczeniu, zanim stanie się ono faktem, a zarząd ma podstawę do rozmowy o kosztach opartą na danych, a nie na wrażeniach.",
    "## Najczęstsze błędy",
    "- MPK wybierane według uznania, bez spisanych zasad,\n- zbyt wiele MPK, z których część nie jest używana,\n- brak MPK przy kosztach wspólnych i brak klucza ich podziału,\n- zmiana struktury MPK w trakcie roku bez przeniesienia danych.",
    "Obieg i opis faktur automatyzujemy w usłudze [automatyzacja dla księgowości](/uslugi/automatyzacja-dla-ksiegowosci), a raporty kosztów według MPK w usłudze [automatyzacja raportów](/uslugi/automatyzacja-raportow).",
  ].join("\n\n"),
  faq: [
    { question: "Czy MPK jest obowiązkowe?", answer: "Przepisy nie wymagają MPK. To narzędzie rachunkowości zarządczej, które pomaga kontrolować koszty i liczyć rentowność." },
    { question: "Czy fakturę można przypisać do kilku MPK?", answer: "Tak. Fakturę dzieli się kwotowo lub procentowo, np. koszt wspólnego oprogramowania między działy." },
    { question: "Czy AI może samo przypisać MPK?", answer: "Może podpowiedzieć MPK na podstawie dostawcy, treści i wcześniejszych decyzji. Przy wątpliwościach decyzję zatwierdza osoba odpowiedzialna." },
  ],
  relatedTermSlugs: ["workflow", "erp", "business-intelligence"],
  relatedServiceSlugs: ["automatyzacja-dla-ksiegowosci", "automatyzacja-raportow"],
  relatedToolSlugs: ["ksef", "n8n"],
  relatedProcessSlugs: ["obieg-faktur-kosztowych", "raporty-finansowe"],
  relatedArticleSlugs: ["kontrola-kosztow-budowy", "ksef-w-pracy-biura-rachunkowego"],
});
