import { defineArticle } from "../define";

export default defineArticle({
  id: "a24",
  slug: "jak-zainstalowac-n8n",
  title: "Jak zainstalować n8n: Docker, serwer i pierwsze kroki",
  metaTitle: "Jak zainstalować n8n: Docker i serwer krok po kroku",
  metaDescription:
    "Instalacja n8n krok po kroku: szybki test w Dockerze, instalacja produkcyjna z PostgreSQL i HTTPS, aktualizacje i kopie zapasowe. Przewodnik dla firm.",
  primaryKeyword: "instalacja n8n",
  secondaryKeywords: [
    "jak zainstalować n8n",
    "n8n docker",
    "n8n docker compose",
    "n8n instalacja na serwerze",
    "n8n self-hosted instalacja",
  ],
  excerpt:
    "Uruchomienie n8n na próbę zajmuje kilka minut. Instalacja, na której firma może bezpiecznie oprzeć procesy, wymaga kilku dodatkowych kroków. Pokazujemy oba warianty: szybki test w Dockerze i instalację produkcyjną z bazą PostgreSQL, HTTPS i kopiami zapasowymi.",
  categories: ["narzedzia-i-integracje"],
  publishedAt: "2026-10-05",
  updatedAt: "2026-10-05",
  imageUrl:
    "https://images.unsplash.com/photo-1762163516269-3c143e04175c?w=1200&q=80",
  imageAlt: "Szafa serwerowa z kontrolkami w centrum danych",
  summary: [
    "Najszybciej przetestujesz n8n jednym poleceniem w Dockerze na własnym komputerze.",
    "Do pracy w firmie potrzebna jest instalacja produkcyjna: baza PostgreSQL, klucz szyfrujący, domena z HTTPS i kopie zapasowe.",
    "Najwygodniej przygotować ją w Docker Compose, który uruchamia n8n i bazę razem.",
    "Instalacja to początek. Aktualizacje, kopie i monitoring decydują o tym, czy n8n będzie działać stabilnie.",
    "Jeśli nie macie osoby, która zajmie się serwerem, rozważcie n8n Cloud albo zlecenie instalacji i opieki.",
  ],
  relatedServiceSlugs: [
    "integracje-systemow",
    "automatyzacja-oraz-ai-w-niestandardowych-procesach",
    "migracja-danych",
  ],
  relatedArticleSlugs: [
    "n8n-co-to-jest",
    "n8n-cennik",
    "rodo-a-automatyzacja-procesow",
  ],
  cta: {
    title: "Wolicie, żeby ktoś zainstalował n8n za was?",
    body: "Przygotujemy n8n na serwerze w UE z bazą, HTTPS, kopiami zapasowymi i monitoringiem, a potem możemy się nim opiekować. Zwykle trwa to kilka dni.",
  },
  body: [
    "n8n można używać w chmurze producenta albo zainstalować na własnym serwerze. Ta druga opcja, tzw. self-hosted, daje kontrolę nad danymi i nie ma opłat za wykonania przepływów, dlatego wybiera ją wiele firm. W tym przewodniku pokazujemy, jak zainstalować n8n: najpierw szybko, do testów, a potem tak, żeby można było na nim oprzeć procesy firmy.",
    "Przewodnik zakłada podstawową znajomość wiersza poleceń i Dockera. Jeśli nie wiesz jeszcze, czym jest n8n i czy pasuje do waszej firmy, zacznij od artykułu [n8n: co to jest i jak działa](/poradnik/n8n-co-to-jest).",
    "## Zanim zaczniesz: cztery decyzje",
    "Instalacja techniczna to najprostsza część. Zanim ją zaczniesz, warto odpowiedzieć na kilka pytań, bo od nich zależy, czy w ogóle potrzebujesz własnego serwera:",
    "1. Gdzie mają być dane? Jeśli przepływy będą przetwarzać dane osobowe lub finansowe, które nie powinny trafiać do zewnętrznej usługi, własny serwer w UE ma sens.\n2. Ile będzie wykonań? Przy dużej liczbie uruchomień przepływów własny serwer zwykle wychodzi taniej niż abonament w chmurze.\n3. Kto będzie utrzymywał serwer? Aktualizacje, kopie i reakcja na awarie to stała praca, a nie jednorazowe zadanie.\n4. Z jakimi systemami n8n ma się łączyć? Systemy w sieci firmowej, np. ERP na serwerze w biurze, łatwiej podłączyć do n8n zainstalowanego blisko nich.",
    "Jeśli odpowiedzi wskazują, że nie potrzebujesz własnego serwera, n8n Cloud oszczędzi ci pracy. Różnice opisujemy w artykule [n8n cennik](/poradnik/n8n-cennik).",
    "## Trzy sposoby na uruchomienie n8n",
    "| Sposób | Dla kogo | Uwagi |\n|---|---|---|\n| n8n Cloud | Firmy, które chcą zacząć od razu i nie utrzymywać serwera | Bez instalacji, płatny abonament |\n| Docker na komputerze | Osoby, które chcą przetestować n8n | Kilka minut, nie do pracy w firmie |\n| Docker Compose na serwerze | Firmy, które chcą mieć n8n u siebie | Wymaga konfiguracji i utrzymania |",
    "Istnieje też instalacja przez npm, ale do pracy w firmie zalecamy Dockera. Łatwiej go aktualizować, przenosić i odtwarzać po awarii.",
    "## Szybki test n8n w Dockerze",
    "Jeśli masz na komputerze Dockera, n8n uruchomisz dwoma poleceniami. Pierwsze tworzy wolumen, w którym n8n zapisze dane, drugie uruchamia kontener:",
    "```bash\ndocker volume create n8n_data\ndocker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n\n```",
    "Po chwili otwórz w przeglądarce adres `http://localhost:5678`, załóż konto właściciela i możesz budować pierwszy przepływ. Dane zostaną w wolumenie `n8n_data`, więc po ponownym uruchomieniu kontenera nic nie zniknie.",
    "> [Uwaga]\n> Taka instalacja nadaje się tylko do nauki i testów. Dane są w domyślnej bazie SQLite, nie ma szyfrowanego połączenia, a webhooki z zewnętrznych systemów nie dotrą do komputera bez dodatkowej konfiguracji.",
    "## Instalacja n8n na serwerze dla firmy",
    "Do pracy w firmie potrzebujesz kilku rzeczy więcej:",
    "1. Serwera, zwykle niewielkiego VPS w centrum danych w UE, z zainstalowanym Dockerem i Docker Compose.\n2. Domeny lub subdomeny, np. n8n.twojafirma.pl, skierowanej na adres serwera.\n3. Bazy PostgreSQL zamiast domyślnego SQLite, bo lepiej znosi większą liczbę wykonań i łatwiej robić jej kopie.\n4. Stałego klucza szyfrującego, którym n8n szyfruje zapisane dane dostępowe do systemów.\n5. Serwera pośredniczącego (reverse proxy), np. Caddy, Traefik lub Nginx, który obsłuży certyfikat HTTPS.",
    "[[CTA]]",
    "### Plik docker-compose.yml",
    "Poniżej przykładowa konfiguracja, która uruchamia n8n razem z bazą PostgreSQL. Hasło, klucz szyfrujący i domenę zamień na własne:",
    "```yaml\nservices:\n  postgres:\n    image: postgres:16\n    restart: always\n    environment:\n      - POSTGRES_USER=n8n\n      - POSTGRES_PASSWORD=zmien-to-haslo\n      - POSTGRES_DB=n8n\n    volumes:\n      - db_data:/var/lib/postgresql/data\n  n8n:\n    image: docker.n8n.io/n8nio/n8n\n    restart: always\n    ports:\n      - \"127.0.0.1:5678:5678\"\n    environment:\n      - DB_TYPE=postgresdb\n      - DB_POSTGRESDB_HOST=postgres\n      - DB_POSTGRESDB_DATABASE=n8n\n      - DB_POSTGRESDB_USER=n8n\n      - DB_POSTGRESDB_PASSWORD=zmien-to-haslo\n      - N8N_ENCRYPTION_KEY=dlugi-losowy-klucz\n      - N8N_HOST=n8n.twojafirma.pl\n      - N8N_PROTOCOL=https\n      - WEBHOOK_URL=https://n8n.twojafirma.pl/\n      - GENERIC_TIMEZONE=Europe/Warsaw\n      - TZ=Europe/Warsaw\n    volumes:\n      - n8n_data:/home/node/.n8n\n    depends_on:\n      - postgres\nvolumes:\n  db_data:\n  n8n_data:\n```",
    "Kilka zmiennych wymaga wyjaśnienia:",
    "- `N8N_ENCRYPTION_KEY` to klucz, którym n8n szyfruje dane dostępowe. Zapisz go w bezpiecznym miejscu. Bez niego po odtworzeniu z kopii n8n nie odczyta zapisanych haseł i tokenów.\n- `WEBHOOK_URL` to publiczny adres n8n. Na jego podstawie n8n generuje adresy webhooków, które podajesz innym systemom.\n- `GENERIC_TIMEZONE` ustawia strefę czasową dla harmonogramów, żeby przepływ „codziennie o 7:00” startował o 7:00 polskiego czasu.\n- Port n8n jest wystawiony tylko lokalnie, a ruch z internetu przechodzi przez reverse proxy z HTTPS.",
    "Uruchomienie całości to jedno polecenie wydane w katalogu z plikiem:",
    "```bash\ndocker compose up -d\n```",
    "Po skonfigurowaniu reverse proxy i certyfikatu n8n będzie dostępny pod adresem `https://n8n.twojafirma.pl`. Pierwsza osoba, która go otworzy, zakłada konto właściciela, więc zrób to od razu po uruchomieniu.",
    "## Bezpieczeństwo po instalacji",
    "n8n ma dostęp do systemów firmy, więc jego bezpieczeństwo jest ważne. Po instalacji:",
    "- ustaw silne hasła i osobne konta dla każdej osoby, bez wspólnego konta administratora,\n- ogranicz dostęp do serwera, np. zaporą i logowaniem przez klucze SSH zamiast haseł,\n- regularnie aktualizuj system operacyjny serwera,\n- trzymaj klucz szyfrujący i hasło do bazy poza serwerem, w menedżerze haseł,\n- jeśli n8n nie musi być dostępny z internetu, udostępnij go tylko przez VPN, a z zewnątrz otwórz wyłącznie webhooki.",
    "Przy przetwarzaniu danych osobowych pamiętaj też o obowiązkach z RODO, o których piszemy w artykule [RODO a automatyzacja procesów](/poradnik/rodo-a-automatyzacja-procesow).",
    "## Kopie zapasowe",
    "Najważniejsze są dwie rzeczy: baza danych, w której są przepływy, historia wykonań i zaszyfrowane dane dostępowe, oraz klucz szyfrujący. Kopię bazy możesz wykonać poleceniem:",
    "```bash\ndocker compose exec postgres pg_dump -U n8n n8n > n8n-kopia.sql\n```",
    "Takie polecenie warto uruchamiać automatycznie, np. codziennie w nocy, a kopie przechowywać poza serwerem. Co jakiś czas sprawdź, czy z kopii da się odtworzyć działające n8n. Kopia, której nikt nie przetestował, często okazuje się bezużyteczna w dniu awarii.",
    "## Aktualizacje n8n",
    "n8n rozwija się szybko i nowe wersje pojawiają się często. Aktualizacja w Docker Compose to pobranie nowego obrazu i ponowne uruchomienie kontenerów:",
    "```bash\ndocker compose pull\ndocker compose up -d\n```",
    "Przed aktualizacją zrób kopię bazy i przeczytaj listę zmian, szczególnie przy większych wersjach, które mogą zmieniać działanie węzłów. W firmie lepiej przypiąć konkretną wersję obrazu w pliku konfiguracyjnym i aktualizować ją świadomie, niż zawsze pobierać najnowszą.",
    "## Najczęstsze problemy po instalacji",
    "- **Webhooki nie działają albo mają adres localhost.** Sprawdź, czy zmienna `WEBHOOK_URL` zawiera publiczny adres z https i czy reverse proxy przekazuje ruch do n8n.\n- **Przepływy startują o złej godzinie.** Ustaw `GENERIC_TIMEZONE` na Europe/Warsaw i uruchom kontener ponownie.\n- **Po przeniesieniu na nowy serwer zniknęły dane dostępowe.** n8n działa z innym kluczem szyfrującym niż wcześniej. Przywróć oryginalny `N8N_ENCRYPTION_KEY`.\n- **Szybko kończy się miejsce na dysku.** Historia wykonań rośnie z każdym uruchomieniem. Włącz jej automatyczne czyszczenie zmiennymi `EXECUTIONS_DATA_PRUNE` i `EXECUTIONS_DATA_MAX_AGE`.\n- **n8n zwalnia przy wielu przepływach.** Sprawdź zasoby serwera, a przy dużej liczbie wykonań rozważ tryb kolejki.",
    "## Pierwszy przepływ po instalacji",
    "Na początek wybierz prosty, ale prawdziwy proces, np. zapis zapytań z formularza na stronie w CRM z powiadomieniem dla handlowca. Taki przepływ szybko pokaże, czy webhooki, dane dostępowe i strefa czasowa są ustawione dobrze, a jednocześnie od razu da firmie korzyść. Jak taki proces wygląda w pełnej wersji, opisujemy na stronie [obsługa zapytań ofertowych](/procesy/obsluga-zapytan-i-leadow).",
    "Gdy podstawowe przepływy działają stabilnie, możesz sięgnąć po AI: odczyt dokumentów, klasyfikację maili albo agentów, o których piszemy na stronie [agenci AI w n8n](/narzedzia/n8n/agenci-ai).",
    "## Co dalej po instalacji",
    "Działająca instalacja to dopiero początek. Żeby n8n było pewnym elementem firmy, potrzebujesz jeszcze:",
    "- monitoringu, który powiadomi cię, gdy przepływ zakończy się błędem albo serwer przestanie odpowiadać,\n- przepływów obsługujących błędy, żeby problemy nie znikały po cichu,\n- porządku w nazwach i dokumentacji przepływów,\n- przy większej liczbie wykonań trybu kolejki (queue mode) z osobnymi procesami roboczymi.",
    "Koszty serwera i utrzymania porównujemy z n8n Cloud w artykule [n8n cennik](/poradnik/n8n-cennik). Jeśli wolicie, żeby instalacją i opieką zajął się ktoś inny, zobaczcie, jak robimy to na stronie [n8n self-hosted](/narzedzia/n8n/self-hosted), a całą ofertę wdrożeń na stronie [wdrożenie n8n](/narzedzia/n8n). Gdy instalacja już działa, ale przepływy sprawiają problemy, pomożemy przy [opiece nad n8n](/narzedzia/n8n/opieka).",
  ].join("\n\n"),
  faq: [
    {
      question: "Jak zainstalować n8n?",
      answer:
        "Najprościej w Dockerze. Do testów wystarczy jedno polecenie uruchamiające kontener n8n. Do pracy w firmie lepiej użyć Docker Compose z bazą PostgreSQL, stałym kluczem szyfrującym, domeną z HTTPS i kopiami zapasowymi.",
    },
    {
      question: "Jaki serwer jest potrzebny do n8n?",
      answer:
        "Dla większości małych i średnich firm wystarcza niewielki serwer VPS z Dockerem. Przepływy z dużą liczbą wykonań, przetwarzaniem plików lub AI mogą wymagać więcej pamięci albo trybu kolejki z kilkoma procesami roboczymi.",
    },
    {
      question: "Czy n8n można zainstalować na Windowsie?",
      answer:
        "Do testów tak, np. przez Docker Desktop. Do pracy w firmie zalecamy serwer z Linuksem i Dockerem, bo łatwiej go utrzymywać, zabezpieczyć i aktualizować.",
    },
    {
      question: "Czy instalacja przez npm jest dobrym pomysłem?",
      answer:
        "Nadaje się do szybkich testów i rozwoju własnych węzłów. Do pracy w firmie lepszy jest Docker, bo ułatwia aktualizacje, przenoszenie i odtwarzanie po awarii.",
    },
    {
      question: "Co się stanie, jeśli zgubię klucz szyfrujący?",
      answer:
        "n8n nie odczyta zapisanych danych dostępowych do systemów i trzeba będzie wprowadzić je ponownie we wszystkich przepływach. Dlatego klucz trzeba ustawić na stałe i przechowywać bezpiecznie poza serwerem.",
    },
    {
      question: "Czy możecie zainstalować n8n za nas?",
      answer:
        "Tak. Instalujemy n8n na serwerze w UE z bazą, HTTPS, kopiami zapasowymi i monitoringiem, a potem możemy się nim opiekować. Szczegóły są na stronie n8n self-hosted.",
    },
  ],
});
