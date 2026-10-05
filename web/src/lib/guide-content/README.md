# Artykuły Poradnika

Każdy artykuł to osobny plik w `articles/`, dodany do listy w `index.ts`.
Szablon strony: `src/app/poradnik/[slug]/page.tsx`.

## Kategorie (tematy)

Kategorie są zdefiniowane w `categories.ts` (nazwa, H1, meta, opis, FAQ, powiązane usługi, CTA, `inMenu`).
Każdy artykuł ma pole `categories`: pierwsza pozycja to kategoria główna (chip na karcie, okruszki),
kolejne dodają artykuł do innych tematów. Strona kategorii: `/poradnik/kategoria/[slug]`,
w menu Poradnika, stopce i sitemapie pojawia się automatycznie, gdy ma co najmniej jeden artykuł.
Nową kategorię dodawaj dopiero wtedy, gdy będą w niej minimum 3 artykuły, żeby nie tworzyć pustych stron.

## Pola, które wpływają na SEO

- `title`: H1, pytanie lub obietnica z frazą główną.
- `metaTitle`: do 60 znaków. Jeśli z dopiskiem „ | Automation Minds” zmieści się w 60, szablon doda go sam.
- `metaDescription`: do 155 znaków, z frazą i powodem do kliknięcia.
- `primaryKeyword`, `secondaryKeywords`: trafiają do `article:tag` i `keywords` w JSON-LD.
- `updatedAt`: zmieniaj przy każdej merytorycznej aktualizacji (sitemap, `dateModified`, data na stronie).
- `summary`: 3–5 punktów w ramce „W skrócie”.
- `faq`: 4–6 pytań, generuje też schemat FAQPage.
- `relatedServiceSlugs`: karty usług pod artykułem („Jak możemy pomóc”).
- `relatedArticleSlugs`: pierwsze pozycje w „Czytaj dalej”.
- `cta`: tekst wezwania w treści (`[[CTA]]`) i w formularzu pod artykułem.

Czas czytania i liczba słów liczą się automatycznie.

## Format treści (`body`)

Bloki oddzielone pustą linią:

- `## Nagłówek` i `### Podnagłówek` (H2 trafiają do spisu treści),
- lista `- punkt` albo numerowana `1. punkt`,
- ramka `> [Tytuł]` + kolejne linie `> tekst`,
- tabela w składni markdown `| a | b |`,
- blok kodu otoczony trzema znakami ` (bez pustych linii w środku), np. polecenia instalacji,
- `[[CTA]]`: wezwanie do konsultacji w środku tekstu (najlepiej po około 40% artykułu).

W tekście: `**pogrubienie**`, kod w pojedynczych znakach ` oraz `[anchor](/uslugi/slug)` dla linków.

## Zasady redakcyjne

- Styl według `copywriting-ai-instrukcja.md` w katalogu głównym repozytorium: bez pauz (—), bez słów-wydmuszek, zwrot na „ty” małą literą.
- 1500–2200 słów, 6–12 linków wewnętrznych (usługi i inne artykuły), anchor opisowy, nie „kliknij tutaj”.
- Żadnych zmyślonych liczb o klientach i wynikach. Przykłady wyliczeń oznaczamy jako przykład.
