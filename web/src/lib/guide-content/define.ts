import type { GuideArticle } from "../airtable.types";
import { defaultGuideAuthor } from "./authors";
import { countWords } from "./body";
import { getGuideCategory, type GuideCategorySlug } from "./categories";

/** Średnie tempo czytania tekstu poradnikowego (słowa na minutę). */
const WORDS_PER_MINUTE = 200;

type ArticleInput = Omit<
  GuideArticle,
  | "readTimeMinutes"
  | "wordCount"
  | "metaTitle"
  | "metaDescription"
  | "updatedAt"
  | "author"
  | "category"
  | "categorySlug"
  | "categorySlugs"
> &
  Partial<
    Pick<GuideArticle, "metaTitle" | "metaDescription" | "updatedAt" | "author">
  > & {
    /** Kategorie artykułu; pierwsza jest główna. */
    categories: [GuideCategorySlug, ...GuideCategorySlug[]];
  };

export function defineArticle({
  categories,
  ...input
}: ArticleInput): GuideArticle {
  const wordCount = countWords(
    [input.body, ...(input.faq ?? []).map((item) => item.answer)].join("\n\n"),
  );
  const primary = getGuideCategory(categories[0]);
  if (!primary) throw new Error(`Nieznana kategoria: ${categories[0]}`);

  return {
    ...input,
    category: primary.name,
    categorySlug: primary.slug,
    categorySlugs: [...categories],
    metaTitle: input.metaTitle ?? input.title,
    metaDescription: input.metaDescription ?? input.excerpt,
    updatedAt: input.updatedAt ?? input.publishedAt,
    author: input.author ?? defaultGuideAuthor,
    wordCount,
    readTimeMinutes: Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE)),
  };
}
