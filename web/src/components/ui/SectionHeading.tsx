import { cn } from "@/lib/cn";

export function SectionHeading({
  subtitle,
  title,
  body,
  align = "center",
  className,
}: {
  subtitle?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {subtitle ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
          {subtitle}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{body}</p>
      ) : null}
    </div>
  );
}
