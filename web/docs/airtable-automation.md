# Automatyzacja Airtable → odświeżanie strony (jak IRLF)

Po edycji treści w Airtable strona odświeża cache ISR przez endpoint `/api/revalidate`. Ten sam wzorzec co w projekcie **IRLF**: automatyzacja z krokiem **Run script** wywołuje `fetch()` na produkcję.

## Wymagania

| Gdzie | Zmienna | Opis |
|-------|---------|------|
| Vercel | `REVALIDATE_SECRET` | Losowy ciąg — ten sam co w automatyzacji |
| Vercel | `NEXT_PUBLIC_SITE_URL` | URL produkcji (np. `https://automationminds.net`) |
| Vercel | `AIRTABLE_API_TOKEN` | Odczyt rekordów przy rewalidacji per rekord |
| Vercel | `AIRTABLE_BASE_ID` | ID bazy CMS |

Lokalnie te same zmienne w `web/.env.local`.

## Krok 1 — skrypt w repozytorium

Plik: [`scripts/airtable-automation-revalidate.js`](../scripts/airtable-automation-revalidate.js)

Skopiuj całą zawartość do edytora skryptu w Airtable.

## Krok 2 — automatyzacja w Airtable

Dla **każdej tabeli CMS** (lub jednej automatyzacji z wieloma triggerami) utwórz automatyzację:

### Trigger

- **When a record is created** lub **When a record is updated**
- Tabela: np. `Services`, `HeroSlides`, `LandingPages`, `PageSections`, …
- **Nie** podpinaj `ContactSubmissions` — formularze nie wymagają revalidate.

### Action: Run script

1. Wklej skrypt z `airtable-automation-revalidate.js`.
2. W sekcji **Input variables** dodaj:

| Nazwa zmiennej | Typ | Wartość |
|----------------|-----|---------|
| `revalidateSecret` | string | Ten sam sekret co `REVALIDATE_SECRET` na Vercel |
| `siteUrl` | string | `https://automationminds.net` lub URL preview Vercel |
| `tableName` | string | Z triggera: **Table name** |
| `recordId` | string | Z triggera: **Record ID** |

W Airtable mapowanie wygląda np. tak:

- `tableName` → kliknij „+” → **Table name** (z kroku trigger)
- `recordId` → **Record ID** (z kroku trigger)

### Test

1. Zapisz automatyzację i włącz ją.
2. Edytuj dowolny rekord w tabeli CMS (np. tytuł w `Services`).
3. W historii automatyzacji sprawdź log — powinno być `[AM revalidate] SUCCESS`.
4. Odśwież stronę (może minąć do 60 s ISR + czas propagacji) — treść z Airtable.

## Jak działa endpoint

```
GET /api/revalidate?secret=...&tableName=Services&recordId=recXXX
```

Odpowiedź (wymagana przez skrypt):

```json
{
  "revalidated": true,
  "now": 1710000000000,
  "mode": "targeted",
  "tableName": "Services",
  "recordId": "recXXX",
  "paths": ["/", "/uslugi/automatyzacja-dla-hr"]
}
```

### Mapowanie tabela → ścieżki

| Tabela | Rewalidowane ścieżki |
|--------|----------------------|
| `Settings` | Wszystkie strony statyczne + `/uslugi`, `/kampanie` |
| `HeroSlides`, `FAQ`, `Tools` | `/` |
| `FeatureTiles` | `/`, ewentualnie `/o-nas` (grupa `areas`) |
| `PageSections` | strona z pola `PageSlug` (`home` → `/`, `kontakt` → `/kontakt`) |
| `ListItems` | strona z `PageSlug` |
| `CaseStudies` | `/` lub `/uslugi/{ServiceSlug}` |
| `Services` | `/` (menu) + `/uslugi/{Slug}` |
| `ProcessSteps` | `/uslugi/{ServiceSlug}` |
| `LandingPages` | `/kampanie/{Slug}` |
| `LandingBenefits`, `LandingSections` | `/kampanie/{LandingSlug}` |

Bez `tableName` (lub z `full=true`) — pełna rewalidacja wszystkich URL.

## Ręczny test (curl)

```bash
curl "https://TWOJA-DOMENA/api/revalidate?secret=TWÓJ_SECRET&tableName=Services&recordId=recXXXXXXXX"
```

Pełna rewalidacja:

```bash
curl "https://TWOJA-DOMENA/api/revalidate?secret=TWÓJ_SECRET&full=true"
```

## Rozwiązywanie problemów

| Problem | Rozwiązanie |
|---------|-------------|
| HTTP 401 | `revalidateSecret` ≠ `REVALIDATE_SECRET` na Vercel |
| `revalidated` brak w odpowiedzi | Sprawdź URL i czy deploy jest aktualny |
| Strona bez zmian | Odśwież z pominięciem cache (Ctrl+Shift+R); ISR `revalidate = 60` |
| Mocki zamiast Airtable | Brak `AIRTABLE_*` na Vercel — dodaj zmienne i redeploy |
| Automatyzacja fail fetch | `siteUrl` musi być publiczny HTTPS (nie localhost) |

## Lista tabel do podpięcia automatyzacji

- Settings
- HeroSlides
- PageSections
- ListItems
- FeatureTiles
- CaseStudies
- Tools
- FAQ
- Services
- ProcessSteps
- LandingPages
- LandingBenefits
- LandingSections

Możesz utworzyć **jedną** automatyzację z wieloma triggerami (po jednym na tabelę) i współdzielonym krokiem Run script — tak jak w IRLF.
