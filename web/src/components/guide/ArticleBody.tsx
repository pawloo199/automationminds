export function ArticleBody({ body }: { body: string }) {
  const blocks = body
    .split("\n\n")
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
      {blocks.map((block) =>
        block.startsWith("## ") ? (
          <h2
            key={block}
            className="!mt-8 text-xl font-bold text-dark first:!mt-0 sm:text-2xl"
          >
            {block.slice(3)}
          </h2>
        ) : (
          <p key={block}>{block}</p>
        ),
      )}
    </div>
  );
}
