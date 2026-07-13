# Baza Airtable dla strony Automation Minds

Przewodnik konfiguracji bazy **„Automation Minds — Website CMS"** zgodnej z kodem w folderze `web/`.

## Wymagania wstępne

### Personal Access Token (PAT)

#### Token produkcyjny (Vercel)

Utwórz w [Airtable Developer Hub](https://airtable.com/create/tokens):

- `data.records:read`
- `data.records:write`

Zakres: tylko baza Automation Minds. **Bez** `schema.bases:write`.

#### Token setupowy (lokalnie)

Do seedu treści i migracji:

- `schema.bases:read`
- `schema.bases:write`
- `data.records:read`
- `data.records:write`

**Nie** dodawaj tokena setupowego do Vercel.

### Zmienne środowiskowe

```
AIRTABLE_API_TOKEN=pat...
AIRTABLE_BASE_ID=app...
REVALIDATE_SECRET=losowy_ciag
NEXT_PUBLIC_SITE_URL=https://automationminds.net
```

`AIRTABLE_BASE_ID` znajdziesz w URL bazy: `https://airtable.com/appXXXXXXXX/...`

---

## Zasady ogólne

- Nazwy tabel muszą być **dokładnie** takie jak poniżej (wielkość liter ma znaczenie).
- Treści CMS wymagają `Published = TRUE()` i pola `Order` (sortowanie rosnąco).
- Obrazy: pola **URL** (Single line text), nie załączniki Airtable.

---

## Tabele CMS

### Settings

Jedna lub więcej rekordów — używany jest pierwszy.

| Pole | Typ | Opis |
|------|-----|------|
| Phone | Single line text | Telefon w nagłówku |
| LogoWhiteUrl | URL | Logo na ciemnym tle |
| LogoColorUrl | URL | Logo na jasnym tle |
| MetaDescription | Long text | Opis SEO |
| StatRating | Single line text | np. 4.95 |
| StatRatingLabel | Single line text | np. 1,488 ocen |
| StatPercent | Single line text | np. 80 |
| StatPercentLabel | Long text | Opis procentu |
| StatNumber | Single line text | np. 1542 |
| StatNumberLabel | Long text | Opis liczby |

### HeroSlides

| Pole | Typ |
|------|-----|
| Subtitle | Single line text |
| Title | Long text |
| Description | Long text (krótki opis pod nagłówkiem, max ~2 wiersze) |
| ImageUrl | URL |
| ButtonText | Single line text |
| ButtonLink | Single line text / URL (ignorowany gdy `ButtonOpensModal` = true) |
| ButtonOpensModal | Checkbox — otwiera modal z formularzem kontaktowym zamiast nawigacji |
| Order | Number |
| Published | Checkbox |

### PageSections

| Pole | Typ |
|------|-----|
| PageSlug | Single line text (`home`, `o-nas`, `kontakt`) |
| SectionKey | Single line text (`intro`, `areas-header`, `conversation`, `benefits-header`, `cases-header`, `tools-header`, `faq-header`, `contact-cta`, `banner`, `contact-sidebar`, `contact-form`) |
| Subtitle | Single line text |
| Title | Long text |
| Body | Long text |
| ImageUrl | URL |
| ButtonText | Single line text |
| ButtonLink | Single line text |

### ListItems

| Pole | Typ |
|------|-----|
| PageSlug | Single line text |
| Text | Long text |
| Order | Number |

### FeatureTiles

| Pole | Typ |
|------|-----|
| Group | Single select (`areas`, `benefits`) |
| Icon | Single line text (np. `sparkles`, `users`) |
| Title | Single line text |
| Body | Long text |
| Href | Single line text (ścieżka URL, np. `/uslugi/automatyzacja-dla-hr`; puste = kafelek bez linku) |
| LinkLabel | Single line text (etykieta CTA; opcjonalne, domyślnie „Dowiedz się więcej”) |
| Order | Number |
| Published | Checkbox |

### CaseStudies

| Pole | Typ |
|------|-----|
| Context | Single select (`home`, `service`) |
| ServiceSlug | Single line text (puste dla `home`) |
| Title | Single line text |
| Icon | Single line text |
| ImageUrl | URL |
| Body | Long text |
| Order | Number |
| Published | Checkbox |

### Tools

| Pole | Typ |
|------|-----|
| Name | Single line text |
| LogoUrl | URL |
| Order | Number |
| Published | Checkbox |

### FAQ

| Pole | Typ |
|------|-----|
| Question | Long text |
| Answer | Long text |
| Order | Number |
| Published | Checkbox |

### Services

| Pole | Typ |
|------|-----|
| Slug | Single line text |
| Title | Single line text |
| MenuLabel | Single line text |
| BannerImageUrl | URL |
| BannerTitle | Single line text |
| IntroSubtitle | Single line text |
| IntroTitle | Long text |
| IntroBody | Long text |
| IntroImageUrl | URL |
| IntroButtonText | Single line text |
| IntroButtonLink | Single line text |
| TabsSubtitle | Single line text |
| TabsTitle | Single line text |
| ProcessSubtitle | Single line text |
| ProcessTitle | Single line text |
| Order | Number |
| Published | Checkbox |

### ProcessSteps

| Pole | Typ |
|------|-----|
| ServiceSlug | Single line text |
| StepNumber | Number |
| Title | Single line text |
| Body | Long text |

---

## Tabela danych (formularz)

### ContactSubmissions

| Pole | Typ |
|------|-----|
| FirstName | Single line text |
| LastName | Single line text |
| Name | Single line text (imię + nazwisko) |
| Email | Email |
| Phone | Single line text |
| Company | Single line text |
| ConsentGiven | Checkbox |
| Message | Long text |
| AdditionalNotes | Long text (krok 2 — opis potrzeb) |
| EmployeeCount | Single select (`1–10`, `11–50`, `51–200`, `201–500`, `500+`) |
| Industry | Single select (branża) |
| InterestedServices | Long text (wybrane usługi, przecinkami) |
| FormStep | Single select (`1`, `2`) |
| SourcePage | Single line text |
| Status | Single select (`New`, `Contacted`, `Closed`) |

---

## Połączenie ze stroną

1. Utwórz bazę i tabele według powyższego schematu.
2. Ustaw zmienne w `.env.local` (dev) i Vercel (prod).
3. Zaseeduj treść: `npm run migrate -- --seed`
4. Uruchom dev: `npm run dev`

Bez tokenów Airtable strona działa na danych mock z `src/lib/airtable-mock.ts`.

---

## Automatyzacja revalidate (jak IRLF)

Po edycji treści CMS skonfiguruj automatyzację Airtable z krokiem **Run script** — szczegóły krok po kroku:

**[docs/airtable-automation.md](airtable-automation.md)**

Skrypt do wklejenia w Airtable: [`scripts/airtable-automation-revalidate.js`](../scripts/airtable-automation-revalidate.js)

Skrót:

1. Trigger: **When record is created/updated** (tabele CMS, nie `ContactSubmissions`)
2. Action: **Run script** + input variables: `revalidateSecret`, `siteUrl`, `tableName`, `recordId`
3. Endpoint: `GET {siteUrl}/api/revalidate?secret=...&tableName=...&recordId=...`
4. Oczekiwana odpowiedź: `{ "revalidated": true }`
