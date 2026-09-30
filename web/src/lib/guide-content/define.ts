import type { GuideArticle } from "../airtable.types";
import { defaultGuideAuthor } from "./authors";
import { countWords } from "./body";

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
> &
  Partial<
    Pick<GuideArticle, "metaTitle" | "metaDescription" | "updatedAt" | "author">
  >;

export function defineArticle(input: ArticleInput): GuideArticle {
  const wordCount = countWords(
    [input.body, ...(input.faq ?? []).map((item) => item.answer)].join("\n\n"),
  );

  return {
    ...input,
    metaTitle: input.metaTitle ?? input.title,
    metaDescription: input.metaDescription ?? input.excerpt,
    updatedAt: input.updatedAt ?? input.publishedAt,
    author: input.author ?? defaultGuideAuthor,
    wordCount,
    readTimeMinutes: Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE)),
  };
}
