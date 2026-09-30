"use client";

import { cn } from "@/lib/cn";
import { useRef, type ReactNode } from "react";

/** Karta z poświatą podążającą za kursorem (tylko wskaźnik myszy). */
export function Spotlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={cn("home-spotlight", className)}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse" || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        ref.current.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        ref.current.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      }}
    >
      {children}
    </div>
  );
}
