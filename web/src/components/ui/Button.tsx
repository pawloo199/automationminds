import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-white";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
  "data-track"?: string;
  "data-track-location"?: string;
  "data-track-method"?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-lg shadow-brand/25",
  secondary: "bg-surface text-dark hover:bg-brand/10",
  ghost: "bg-transparent text-dark hover:bg-surface",
  "outline-white":
    "border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm",
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200",
    variants[variant],
    className,
  );

  if (href) {
    const {
      onClick,
      "data-track": dataTrack,
      "data-track-location": dataTrackLocation,
      "data-track-method": dataTrackMethod,
    } = props;

    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
        data-track={dataTrack}
        data-track-location={dataTrackLocation}
        data-track-method={dataTrackMethod}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
