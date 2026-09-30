/**
 * Tekst, którego słowa rozjaśniają się podczas przewijania (CSS scroll-driven
 * animations). Bez wsparcia przeglądarki tekst jest po prostu widoczny.
 */
export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <p className={`home-scroll-words ${className ?? ""}`}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
