# Automation Minds — Web

Strona firmowa Automation Minds zbudowana w **Next.js 15** z **Tailwind CSS 4** i **Airtable** jako CMS.

## Struktura repozytorium

```
AutomationMinds/
└── web/               # Aplikacja Next.js (ten folder)
```

## Wymagania

- Node.js 20+
- Konto Airtable z bazą CMS (opcjonalnie na start — działają mocki)

## Szybki start

```bash
cd web
cp .env.example .env.local
npm install
npm run dev
```

Strona: [http://localhost:3000](http://localhost:3000)

## Zmienne środowiskowe

| Zmienna | Opis |
|---------|------|
| `AIRTABLE_API_TOKEN` | PAT z `data.records:read/write` |
| `AIRTABLE_BASE_ID` | ID bazy Airtable |
| `REVALIDATE_SECRET` | Sekret do `/api/revalidate` |
| `NEXT_PUBLIC_SITE_URL` | URL produkcyjny |

## Airtable CMS

Szczegółowy schemat bazy: [docs/airtable-baza.md](docs/airtable-baza.md)

Automatyzacja odświeżania treści (Airtable → Vercel, wzorzec IRLF): [docs/airtable-automation.md](docs/airtable-automation.md)

Migracja treści z WordPress:

```bash
npm run migrate          # pobiera dane z automationminds.net
npm run migrate -- --seed  # zapisuje mocki do Airtable
```

## Deploy na Vercel

1. Import repozytorium z GitHub
2. **Root Directory:** `web`
3. Region: `fra1` (skonfigurowany w `vercel.json`)
4. Dodaj zmienne środowiskowe z `.env.example`
5. Podłącz domenę `automationminds.net`

## Strony

| URL | Opis |
|-----|------|
| `/` | Strona główna |
| `/o-nas` | O nas |
| `/kontakt` | Kontakt |
| `/uslugi/[slug]` | Podstrony usług (9 szt.) |
| `/polityka-prywatnosci` | Polityka prywatności |

## Skrypty

```bash
npm run dev      # serwer deweloperski
npm run build    # build produkcyjny
npm run start    # serwer produkcyjny
npm run lint     # ESLint
npm run migrate  # migracja treści
```
