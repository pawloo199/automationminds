import { defineArticle } from "../define";

export default defineArticle({
  id: "a37",
  slug: "jak-sprawdzic-przewoznika",
  title: "Jak sprawdzić przewoźnika przed zleceniem? Lista kontrolna dla spedycji",
  metaTitle: "Jak sprawdzić przewoźnika? Lista kontrolna",
  metaDescription:
    "Jak sprawdzić przewoźnika przed wysłaniem zlecenia: dane w rejestrach, biała lista VAT, polisa OCP, licencja, dane kontaktowe i sygnały ostrzegawcze.",
  primaryKeyword: "jak sprawdzić przewoźnika",
  secondaryKeywords: [
    "weryfikacja przewoźnika",
    "sprawdzenie przewoźnika przed zleceniem",
    "oszustwa w transporcie",
  ],
  excerpt:
    "Zlecenie dla niesprawdzonego przewoźnika to ryzyko utraty ładunku, pieniędzy i klienta. Opisujemy, co warto sprawdzić przed wysłaniem zlecenia, jakie sygnały powinny zaniepokoić i jak uporządkować weryfikację w firmie.",
  categories: ["spedycja", "automatyzacja-procesow"],
  publishedAt: "2026-07-03",
  updatedAt: "2026-07-03",
  imageUrl: "https://images.unsplash.com/photo-1528797249377-0257bfb1a183?w=1200&q=80",
  imageAlt: "Ciężarówka jadąca drogą wśród drzew",
  summary: [
    "Podstawowe sprawdzenie obejmuje dane firmy w rejestrach, status VAT i rachunek na białej liście, licencję i polisę OCP.",
    "Coraz częstszym problemem jest podszywanie się pod prawdziwych przewoźników, dlatego trzeba porównywać dane kontaktowe i rachunek z wiarygodnymi źródłami.",
    "Weryfikacja powinna być wykonywana zawsze tak samo, według procedury firmy, a nie według uznania spedytora w pośpiechu.",
    "Powtarzalną część kontroli da się zautomatyzować, ale decyzja o współpracy zostaje przy spedytorze.",
  ],
  relatedServiceSlugs: ["automatyzacja-dla-logistyki", "projektowanie-baz-danych", "ai-w-obsludze-dokumentow"],
  relatedArticleSlugs: ["co-zautomatyzowac-w-spedycji", "ai-dla-spedytorow", "porzadek-w-danych-przed-ai-i-automatyzacja"],
  cta: {
    title: "Chcecie uporządkować weryfikację przewoźników?",
    body: "Pomożemy spisać procedurę i zautomatyzować jej powtarzalną część, tak żeby każdy przewoźnik był sprawdzany tak samo. Pierwsza rozmowa trwa 30 minut i jest bezpłatna.",
  },
  body: [
    "W spedycji wybór przewoźnika często odbywa się pod presją czasu. Klient czeka na potwierdzenie, ładunek trzeba odebrać jutro, a na giełdzie jest oferta, która pasuje. W takich warunkach łatwo pominąć sprawdzenie albo zrobić je pobieżnie. Tymczasem zlecenie dla niewłaściwego przewoźnika może skończyć się utratą ładunku, sporem o odszkodowanie albo zapłatą na rachunek oszusta.",
    "W tym artykule opisujemy, co warto sprawdzić przed wysłaniem zlecenia, jakie sygnały powinny zaniepokoić i jak uporządkować weryfikację w firmie. To lista praktyczna, a nie porada prawna. Szczegółowe wymagania, np. dotyczące ubezpieczeń czy licencji w konkretnych relacjach, warto ustalić z prawnikiem i ubezpieczycielem firmy.",
    "## Podstawowa lista kontrolna",
    "### 1. Dane firmy w rejestrach",
    "Pierwszy krok to sprawdzenie, czy przewoźnik istnieje i prowadzi działalność: w CEIDG dla jednoosobowych działalności, w KRS dla spółek, a dla firm z innych krajów UE w odpowiednich rejestrach i w systemie VIES. Warto porównać nazwę, adres i NIP z danymi podanymi przez przewoźnika oraz sprawdzić, od kiedy firma działa. Bardzo młoda firma nie musi oznaczać problemu, ale jest powodem do większej ostrożności.",
    "### 2. Status VAT i rachunek na białej liście",
    "Biała lista podatników VAT pozwala sprawdzić status podatnika i rachunki zgłoszone do urzędu. Rachunek podany na zleceniu lub fakturze powinien się na niej znajdować. Warto sprawdzać go dwa razy: przed zleceniem i przed płatnością, bo oszustwa często polegają na zmianie rachunku w trakcie współpracy.",
    "### 3. Licencja i uprawnienia",
    "Przewoźnik wykonujący transport drogowy rzeczy potrzebuje odpowiednich uprawnień, a przy transporcie międzynarodowym licencji wspólnotowej. Kopia licencji powinna być w dokumentach przewoźnika, a jej dane zgodne z danymi firmy.",
    "### 4. Ubezpieczenie OCP",
    "Polisa odpowiedzialności cywilnej przewoźnika powinna obejmować rodzaj przewozu, relację i wartość ładunku. Warto sprawdzić sumę ubezpieczenia, zakres terytorialny, wyłączenia, np. dla określonych towarów, i termin ważności. Polisa, która wygasa za tydzień, nie pomoże przy szkodzie za miesiąc.",
    "### 5. Historia i opinie",
    "Jeśli przewoźnik jest aktywny na giełdzie transportowej, warto sprawdzić jego historię i opinie. Równie ważna jest historia współpracy w waszej firmie: czy były problemy, reklamacje, opóźnienia. Ta wiedza często jest w głowach spedytorów, a nie w systemie.",
    "[[CTA]]",
    "### 6. Osoba kontaktowa",
    "Warto wiedzieć, z kim w firmie przewoźnika się rozmawia. Imię, nazwisko i rola osoby kontaktowej, numer telefonu i adres mailowy w domenie firmy to podstawowe informacje, które ułatwiają późniejszą współpracę i pozwalają zauważyć, gdy ktoś inny zaczyna podawać się za przedstawiciela przewoźnika.",
    "## Podszywanie się pod przewoźnika",
    "Jednym z poważniejszych zagrożeń w branży jest kradzież tożsamości przewoźnika. Oszust podaje dane prawdziwej firmy, która przejdzie podstawowe sprawdzenie w rejestrach, ale kontaktuje się z innego adresu mailowego, numeru telefonu albo podaje inny rachunek. Dlatego sama weryfikacja w rejestrach nie wystarczy.",
    "Sygnały, które powinny zaniepokoić:",
    "- adres mailowy w darmowej domenie lub domenie różniącej się o jedną literę od domeny firmy,\n- numer telefonu inny niż w rejestrach i na stronie firmy,\n- rachunek do zapłaty, którego nie ma na białej liście,\n- prośba o zmianę rachunku w trakcie współpracy,\n- cena wyraźnie niższa niż rynkowa i duży pośpiech.",
    "W razie wątpliwości warto zadzwonić do przewoźnika na numer z niezależnego źródła, np. z rejestru lub strony firmy, i potwierdzić, czy to on złożył ofertę.",
    "## Procedura zamiast pamięci",
    "Najczęstszy problem nie polega na tym, że spedytorzy nie wiedzą, co sprawdzić, tylko na tym, że w pośpiechu część kroków jest pomijana, a każdy sprawdza po swojemu. Dlatego warto spisać procedurę weryfikacji: co sprawdzamy zawsze, co przy nowych przewoźnikach, jakie dokumenty są wymagane, kto podejmuje decyzję w razie wątpliwości.",
    "Druga rzecz to baza przewoźników. Dokumenty, terminy ważności i historia współpracy powinny być w jednym miejscu, dostępnym dla całego zespołu, a nie w skrzynkach poszczególnych spedytorów. Wtedy informacja o problemie z przewoźnikiem nie znika, gdy spedytor idzie na urlop. O porządkowaniu danych piszemy w artykule [porządek w danych przed AI i automatyzacją](/poradnik/porzadek-w-danych-przed-ai-i-automatyzacja).",
    "## Dokumenty, które warto zbierać",
    "Dobrze jest ustalić listę dokumentów, które przewoźnik przekazuje przed pierwszym zleceniem, i trzymać je w jednym miejscu. Najczęściej są to: kopia licencji lub innych uprawnień, polisa OCP z potwierdzeniem opłacenia, dane rejestrowe i dane kontaktowe osób, z którymi spedytorzy będą się kontaktować. Przy niektórych klientach i ładunkach dochodzą dodatkowe wymagania, np. certyfikaty dla określonych towarów.",
    "Lista dokumentów powinna być taka sama dla wszystkich spedytorów. Gdy każdy zbiera inne dokumenty, w razie szkody okazuje się, że brakuje akurat tego, który był potrzebny. Przy każdym dokumencie warto zapisać termin ważności, żeby było wiadomo, kiedy poprosić o aktualną wersję.",
    "Baza przewoźników z dokumentami i historią współpracy nie musi oznaczać nowego systemu. Często wystarczy uporządkowana tabela w narzędziu, którego firma już używa, np. w Airtable. Jak takie bazy wyglądają w praktyce, opisujemy w artykule [Airtable w praktyce](/poradnik/airtable-w-praktyce-zastosowania).",
    "Przy przewoźnikach, z którymi firma pracuje regularnie, weryfikacja nie kończy się na pierwszym zleceniu. Warto okresowo sprawdzać, czy dane firmy się nie zmieniły, czy polisa jest aktualna i czy rachunek nadal jest na białej liście. Zmiana rachunku, adresu mailowego czy osoby kontaktowej u stałego przewoźnika to dobry moment, żeby zadzwonić i potwierdzić ją na znany numer, zanim pójdzie kolejne zlecenie lub płatność.",
    "## Co można zautomatyzować",
    "Powtarzalna część weryfikacji dobrze nadaje się do automatyzacji:",
    "| Krok | Ręcznie | Automatycznie |\n|---|---|---|\n| Dane z rejestrów | Kilka stron, kopiowanie | Pobrane po NIP |\n| Biała lista VAT | Sprawdzana, gdy ktoś pamięta | Przed zleceniem i przed płatnością |\n| Dokumenty | W mailach | W bazie przewoźników z odczytem AI |\n| Terminy ważności | Brak kontroli | Przypomnienia i oznaczenie po terminie |\n| Spójność danych kontaktowych | Na wyczucie | Porównanie z bazą i rejestrami |\n| Ślad weryfikacji | Brak | Zapis, kto i kiedy sprawdził |",
    "Automatyzacja nie wykryje każdego oszustwa i nie zwalnia spedytora z ostrożności. Sprawia jednak, że podstawowe kontrole są wykonywane zawsze i tak samo, a niezgodności są widoczne od razu. Opisujemy to na stronie [weryfikacja przewoźników](/branze/spedycja/weryfikacja-przewoznikow).",
    "## Weryfikacja w całym procesie",
    "Weryfikacja przewoźnika najlepiej działa, gdy jest częścią procesu, a nie osobnym zadaniem. Zlecenie nie powinno wyjść do przewoźnika bez weryfikacji, a płatność nie powinna wyjść na rachunek, którego nie ma na białej liście. Takie powiązanie można zbudować obok TMS: weryfikacja jest wykonywana przy tworzeniu zlecenia, a kontrola rachunku przy przygotowaniu płatności. Piszemy o tym na stronach [zlecenia transportowe](/branze/spedycja/zlecenia-transportowe) i [rozliczenia frachtu](/branze/spedycja/rozliczenia-frachtu).",
    "Szerszy przegląd procesów, które warto zautomatyzować w spedycji, znajdziecie w artykule [co zautomatyzować w spedycji](/poradnik/co-zautomatyzowac-w-spedycji), a całe podejście do wdrożeń opisujemy na stronie [automatyzacja spedycji](/branze/spedycja).",
  ].join("\n\n"),
  faq: [
    {
      question: "Co sprawdzić przed zleceniem dla nowego przewoźnika?",
      answer:
        "Dane firmy w rejestrach, status VAT i rachunek na białej liście, licencję i uprawnienia, polisę OCP z zakresem i terminem ważności, historię i opinie oraz zgodność danych kontaktowych z wiarygodnymi źródłami.",
    },
    {
      question: "Jak rozpoznać podszywanie się pod przewoźnika?",
      answer:
        "Sygnałem ostrzegawczym są adres mailowy w innej domenie niż firmowa, inny numer telefonu niż w rejestrach, rachunek spoza białej listy, prośba o zmianę rachunku i cena wyraźnie poniżej rynku. W razie wątpliwości warto zadzwonić do firmy na numer z niezależnego źródła.",
    },
    {
      question: "Jak często sprawdzać przewoźników, z którymi już współpracujemy?",
      answer:
        "Warto pilnować terminów ważności dokumentów, zwłaszcza polisy OCP, i sprawdzać rachunek na białej liście przed każdą płatnością. Pełną weryfikację można powtarzać okresowo, według procedury firmy.",
    },
    {
      question: "Czy weryfikację przewoźników można zautomatyzować?",
      answer:
        "Tak, gdy chodzi o powtarzalne kontrole: danych z rejestrów, białej listy, terminów ważności dokumentów i spójności danych. Decyzja o współpracy zostaje przy spedytorze.",
    },
    {
      question: "Czy sprawdzenie w rejestrach wystarczy?",
      answer:
        "Nie. Oszuści często podają dane prawdziwych firm, które przejdą sprawdzenie w rejestrach. Trzeba też porównać dane kontaktowe i rachunek z wiarygodnymi źródłami.",
    },
  ],
});
