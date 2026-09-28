"use client";

import { cn } from "@/lib/cn";
import { ArrowUpRight, MapPin, Search, X } from "lucide-react";
import Link from "next/link";
import { useId, useMemo, useState } from "react";

export type CityCoverageItem = {
  id: string;
  name: string;
  href: string;
};

function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .replace(/Ł/g, "l")
    .toLowerCase()
    .trim();
}

function CityLink({ city }: { city: CityCoverageItem }) {
  return (
    <Link
      href={city.href}
      className="group flex w-full items-center gap-2 py-2.5 text-sm font-medium text-dark transition-colors duration-200 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 sm:gap-3 sm:py-2"
      aria-label={`Automatyzacja w mieście ${city.name}`}
    >
      <MapPin
        className="h-3.5 w-3.5 shrink-0 text-brand/50"
        aria-hidden
      />
      <span className="min-w-0 truncate">{city.name}</span>
      <ArrowUpRight
        className="ml-auto hidden h-3.5 w-3.5 shrink-0 text-brand/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand/80 sm:block sm:opacity-0 sm:group-hover:opacity-100"
        aria-hidden
      />
    </Link>
  );
}

export function CityCoverageSearch({
  featuredCities,
  searchableCities,
}: {
  featuredCities: CityCoverageItem[];
  searchableCities: CityCoverageItem[];
}) {
  const inputId = useId();
  const [query, setQuery] = useState("");

  const normalizedQuery = normalizeSearch(query);

  const results = useMemo(() => {
    if (!normalizedQuery) return null;

    return searchableCities
      .filter((city) => {
        const name = normalizeSearch(city.name);
        const slug = normalizeSearch(
          city.href.replace(/^\/automatyzacja-/, "").replace(/-/g, " "),
        );
        return name.includes(normalizedQuery) || slug.includes(normalizedQuery);
      })
      .slice(0, 36);
  }, [normalizedQuery, searchableCities]);

  const showingSearch = results !== null;
  const list = showingSearch ? results : featuredCities;

  return (
    <div>
      <div className="mt-6 sm:mt-8">
        <label htmlFor={inputId} className="sr-only">
          Wyszukaj miasto
        </label>
        <div className="relative max-w-md">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
            aria-hidden
          />
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Szukaj miasta (np. Polkowice, Oława)…"
            autoComplete="off"
            className={cn(
              "w-full rounded-xl border border-brand/15 bg-white py-3 pl-10 pr-10 text-sm text-dark shadow-sm",
              "placeholder:text-muted/80",
              "outline-none transition focus:border-brand/40 focus:ring-2 focus:ring-brand/20",
            )}
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-muted transition hover:bg-brand/5 hover:text-dark"
              aria-label="Wyczyść wyszukiwanie"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          ) : null}
        </div>
        <p className="mt-2 text-xs text-muted" aria-live="polite">
          {showingSearch
            ? results.length > 0
              ? `Znaleziono ${results.length}${results.length === 36 ? "+" : ""} ${results.length === 1 ? "miasto" : "miast"}`
              : "Brak wyników dla podanej frazy"
            : `Wybrane miasta — wyszukaj spośród ${searchableCities.length} lokalizacji`}
        </p>
      </div>

      {showingSearch && results.length === 0 ? (
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
          Nie znaleźliśmy takiego miasta na liście. Sprawdź pisownię albo{" "}
          <Link href="/kontakt" className="font-medium text-brand hover:underline">
            napisz do nas
          </Link>
          — dobierzemy zakres automatyzacji do Twojej lokalizacji.
        </p>
      ) : (
        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 sm:mt-6 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {list.map((city) => (
            <li key={city.id}>
              <CityLink city={city} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
