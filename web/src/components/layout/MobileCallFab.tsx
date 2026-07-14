"use client";

import { cn } from "@/lib/cn";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function MobileCallFab({ phone }: { phone?: string }) {
  const [visible, setVisible] = useState(false);

  const phoneHref = phone ? `tel:${phone.replace(/\s/g, "")}` : undefined;

  useEffect(() => {
    if (!phoneHref) return;

    const hero = document.getElementById("hero");
    if (!hero) return;

    const media = window.matchMedia("(max-width: 1023px)");

    const updateVisibility = (isIntersecting: boolean) => {
      if (!media.matches) {
        setVisible(false);
        return;
      }
      setVisible(!isIntersecting);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) updateVisibility(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    observer.observe(hero);

    const onMediaChange = () => {
      if (!media.matches) {
        setVisible(false);
        return;
      }
      const rect = hero.getBoundingClientRect();
      updateVisibility(rect.bottom > 0 && rect.top < window.innerHeight);
    };

    media.addEventListener("change", onMediaChange);

    return () => {
      observer.disconnect();
      media.removeEventListener("change", onMediaChange);
    };
  }, [phoneHref]);

  if (!phoneHref) return null;

  return (
    <a
      href={phoneHref}
      aria-label={`Zadzwoń pod numer ${phone}`}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 lg:hidden",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <Phone className="h-6 w-6" aria-hidden />
    </a>
  );
}
