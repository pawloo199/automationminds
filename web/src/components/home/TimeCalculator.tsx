"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WEEKS_PER_YEAR = 52;

function peopleLabel(count: number) {
  if (count === 1) return "osoba";
  const last = count % 10;
  const lastTwo = count % 100;
  return last >= 2 && last <= 4 && !(lastTwo >= 12 && lastTwo <= 14) ? "osoby" : "osób";
}
const numberFormat = new Intl.NumberFormat("pl-PL", { maximumFractionDigits: 0 });

/** Płynne dochodzenie liczby do nowej wartości. */
function useTweenedNumber(value: number, duration = 500) {
  const [display, setDisplay] = useState(value);
  const fromRef = useRef(value);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      fromRef.current = value;
      setDisplay(value);
      return;
    }
    const from = fromRef.current;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = from + (value - from) * eased;
      setDisplay(next);
      fromRef.current = next;
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return display;
}

function Slider({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  suffix,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix: string;
  onChange: (value: number) => void;
}) {
  const fill = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-dark">
          {label}
        </label>
        <output htmlFor={id} className="shrink-0 text-lg font-bold tabular-nums text-brand">
          {value} {suffix}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="home-range mt-3"
        style={{ ["--range-fill" as string]: `${fill}%` }}
      />
    </div>
  );
}

/**
 * Kalkulator czasu i kosztu powtarzalnej pracy. Liczy wyłącznie na danych
 * wpisanych przez użytkownika, bez założeń o skuteczności automatyzacji.
 */
export function TimeCalculator() {
  const [people, setPeople] = useState(3);
  const [hours, setHours] = useState(5);
  const [rate, setRate] = useState(60);

  const hoursYear = people * hours * WEEKS_PER_YEAR;
  const hoursMonth = hoursYear / 12;
  const costYear = hoursYear * rate;
  const workDays = hoursYear / 8;

  const shownMonth = useTweenedNumber(hoursMonth);
  const shownYear = useTweenedNumber(hoursYear);
  const shownCost = useTweenedNumber(costYear);
  const shownDays = useTweenedNumber(workDays);

  return (
    <div className="grid overflow-hidden rounded-3xl border border-brand/10 bg-white shadow-2xl shadow-brand/10 lg:grid-cols-2">
      <div className="space-y-8 p-6 sm:p-10">
        <Slider
          id="calc-people"
          label="Ile osób wykonuje powtarzalne zadania?"
          value={people}
          min={1}
          max={30}
          suffix={peopleLabel(people)}
          onChange={setPeople}
        />
        <Slider
          id="calc-hours"
          label="Ile godzin tygodniowo każda z nich na nie poświęca?"
          value={hours}
          min={1}
          max={20}
          suffix="h"
          onChange={setHours}
        />
        <Slider
          id="calc-rate"
          label="Ile kosztuje firmę godzina pracy?"
          value={rate}
          min={30}
          max={250}
          step={5}
          suffix="zł"
          onChange={setRate}
        />
        <p className="text-xs leading-relaxed text-muted">
          Powtarzalne zadania to na przykład przepisywanie danych, wystawianie
          faktur, składanie raportów czy odpowiadanie na te same pytania.
          Ustaw wartości dla swojej firmy.
        </p>
      </div>

      <div
        className="relative overflow-hidden bg-dark p-6 text-white sm:p-10"
        aria-live="polite"
      >
        <div
          className="home-aurora pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand/40 blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
            Powtarzalna praca w twojej firmie
          </p>
          <p className="mt-6 text-6xl font-bold tabular-nums tracking-tight sm:text-7xl">
            {numberFormat.format(shownMonth)}
            <span className="ml-2 text-2xl font-semibold text-white/60">h</span>
          </p>
          <p className="mt-2 text-white/70">miesięcznie</p>

          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-white/50">Rocznie</dt>
              <dd className="mt-1 text-2xl font-bold tabular-nums">
                {numberFormat.format(shownYear)} h
              </dd>
              <dd className="text-sm text-white/55">
                ok. {numberFormat.format(shownDays)} dni roboczych
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-white/50">Koszt rocznie</dt>
              <dd className="mt-1 text-2xl font-bold tabular-nums">
                {numberFormat.format(shownCost)} zł
              </dd>
            </div>
          </dl>

          <p className="mt-8 text-sm leading-relaxed text-white/70">
            Tyle czasu i pieniędzy pochłania dziś praca, którą w dużej części
            można przekazać automatom. Ile dokładnie, sprawdzimy razem na
            bezpłatnej konsultacji.
          </p>
          <a
            href="#konsultacja"
            data-track="consultation"
            data-track-location="home_calculator"
            data-track-method="anchor"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
          >
            Sprawdźmy, co da się odzyskać
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
}
