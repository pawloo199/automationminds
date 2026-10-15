import { defineTerm } from "../types";

export default defineTerm({
  slug: "deduplikacja-danych",
  term: "Deduplikacja danych",
  category: "dane",
  definition:
    "Deduplikacja danych to wyszukiwanie i łączenie zduplikowanych rekordów, na przykład tego samego klienta wpisanego trzy razy pod różnymi nazwami, tak żeby każdy obiekt występował w systemie tylko raz.",
  metaTitle: "Deduplikacja danych: co to jest i jak usunąć duplikaty",
  metaDescription:
    "Deduplikacja danych co to jest: skąd biorą się duplikaty klientów i produktów, jak je wykrywać i łączyć oraz jak zapobiegać im w automatyzacjach.",
  primaryKeyword: "deduplikacja danych",
  updatedAt: "2026-10-15",
  body: [
    "## Co to jest deduplikacja danych",
    "Duplikat to ten sam obiekt zapisany w systemie więcej niż raz. Klient „Kowalski Sp. z o.o.”, „KOWALSKI spółka z o.o.” i „Kowalski sp.z.o.o.” to dla człowieka ta sama firma, ale dla systemu trzy różne rekordy. Każdy ma część historii zamówień, część kontaktów i inne notatki. Deduplikacja polega na znalezieniu takich rekordów, połączeniu ich w jeden i przepięciu wszystkich powiązań do rekordu, który zostaje.",
    "## Skąd biorą się duplikaty",
    "- ręczne wpisywanie bez sprawdzenia, czy rekord już istnieje,\n- import danych z kilku źródeł, np. z arkuszy handlowców,\n- formularze na stronie, które zawsze zakładają nowy kontakt,\n- integracje, które przy błędzie powtarzają operację,\n- różne zapisy tych samych danych: wielkie i małe litery, skróty, literówki.",
    "## Dlaczego duplikaty szkodzą",
    "Duplikaty klientów oznaczają niepełną historię i ryzyko, że dwóch handlowców zadzwoni do tej samej firmy. Duplikaty produktów zaburzają stany magazynowe. W raportach ta sama firma liczona jest kilka razy, więc liczba klientów i średnia wartość zamówienia są błędne. Przed wdrożeniem AI duplikaty są szczególnie kłopotliwe, bo model dostaje sprzeczne informacje.",
    "## Jak wykrywa się duplikaty",
    "- **Po identyfikatorach:** NIP, REGON, adres e-mail, kod produktu. To najpewniejsza metoda.\n- **Po podobieństwie:** nazwy porównywane po ujednoliceniu, czyli usunięciu form prawnych, znaków i wielkości liter.\n- **Po kilku polach naraz:** podobna nazwa i ten sam kod pocztowy albo ten sam telefon.\n- **Z pomocą AI:** model może ocenić, czy dwa rekordy to prawdopodobnie ten sam obiekt, i uzasadnić ocenę. Decyzję o połączeniu przy wątpliwych parach podejmuje człowiek.",
    "## Jak to wygląda w praktyce",
    "To przykład ilustracyjny. Firma przenosi klientów z trzech arkuszy handlowców do CRM. Najpierw automatyzacja ujednolica nazwy i numery telefonów, potem grupuje rekordy z tym samym NIP. Rekordy bez NIP porównuje po nazwie i adresie, a pary, co do których nie ma pewności, trafiają na listę do decyzji. Po połączeniu każdy klient ma pełną historię kontaktów, a w CRM działa reguła, która przy dodaniu nowego klienta sprawdza, czy taki NIP już istnieje.",
    "## Jak zmierzyć skalę duplikatów",
    "Prosty raport często wystarczy: zestawienie rekordów z tym samym NIP, adresem e-mail lub numerem telefonu. Jeśli takich grup jest dużo, duplikaty powstają systemowo, np. przez formularz albo import. Wtedy samo sprzątanie nie wystarczy i trzeba zmienić sposób, w jaki dane trafiają do systemu.",
    "## Zapobieganie zamiast sprzątania",
    "Jednorazowe sprzątanie to połowa pracy. Druga połowa to zasady, które nie pozwolą duplikatom wrócić: wyszukiwanie przed dodaniem rekordu, wymagane identyfikatory, automatyzacje, które aktualizują istniejący rekord zamiast tworzyć nowy, i ustalone [jedno źródło prawdy](/slownik/jedno-zrodlo-prawdy). Przy integracjach ważne jest też, żeby powtórzony [webhook](/slownik/webhook) nie zakładał drugiego takiego samego rekordu.",
    "Porządkowaniem danych zajmujemy się w usłudze [porządkowanie i strukturyzowanie danych](/uslugi/porzadkowanie-i-strukturyzowanie-danych), a przy zmianie systemu w usłudze [migracja danych](/uslugi/migracja-danych).",
  ].join("\n\n"),
  faq: [
    { question: "Czy deduplikację można zrobić automatycznie?", answer: "Pewne przypadki, np. ten sam NIP, tak. Wątpliwe pary powinien zatwierdzić człowiek, bo błędne połączenie dwóch różnych firm trudno odwrócić." },
    { question: "Jak często sprawdzać duplikaty?", answer: "Najlepiej zapobiegać im przy wprowadzaniu danych, a dodatkowo okresowo uruchamiać raport podejrzanych par." },
    { question: "Co dzieje się z historią połączonych rekordów?", answer: "Przy dobrze przeprowadzonym łączeniu zamówienia, kontakty i notatki są przepinane do rekordu, który zostaje." },
  ],
  relatedTermSlugs: ["jedno-zrodlo-prawdy", "relacyjna-baza-danych", "etl", "crm"],
  relatedServiceSlugs: ["porzadkowanie-i-strukturyzowanie-danych", "migracja-danych", "przygotowanie-danych-pod-ai"],
  relatedToolSlugs: [],
  relatedProcessSlugs: [],
  relatedArticleSlugs: ["porzadek-w-danych-przed-ai-i-automatyzacja", "cyfryzacja-danych-w-firmie"],
});
