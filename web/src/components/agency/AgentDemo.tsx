"use client";

import { cn } from "@/lib/cn";
import type { AgentDemoScenario } from "@/lib/agency-content";
import { Bot, Check, FileText, Loader2, Mail, RotateCcw, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STEP_MS = 1100;
const NEXT_SCENARIO_MS = 5000;

/**
 * Demo „agent AI w akcji”: wiadomość przychodzi, agent wykonuje kolejne kroki,
 * a na końcu przygotowuje szkic do akceptacji przez człowieka.
 */
export function AgentDemo({ scenarios }: { scenarios: readonly AgentDemoScenario[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [approved, setApproved] = useState(false);
  const [reduced, setReduced] = useState(false);

  const scenario = scenarios[active];
  const stepCount = scenario.steps.length;
  // phase: 0 = wiadomość, 1..stepCount = kroki, stepCount + 1 = szkic gotowy
  const done = phase > stepCount;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced) {
      setPhase(stepCount + 1);
      return;
    }
    if (!visible || done) return;
    const timer = window.setTimeout(() => setPhase((value) => value + 1), phase === 0 ? 700 : STEP_MS);
    return () => window.clearTimeout(timer);
  }, [phase, visible, done, reduced, stepCount]);

  useEffect(() => {
    if (!done || pinned || reduced || !visible) return;
    const timer = window.setTimeout(() => {
      setActive((value) => (value + 1) % scenarios.length);
      setPhase(0);
      setApproved(false);
    }, NEXT_SCENARIO_MS);
    return () => window.clearTimeout(timer);
  }, [done, pinned, reduced, visible, scenarios.length]);

  const select = (index: number) => {
    setPinned(true);
    setActive(index);
    setPhase(reduced ? scenarios[index].steps.length + 1 : 0);
    setApproved(false);
  };

  const replay = () => {
    setPinned(true);
    setPhase(0);
    setApproved(false);
  };

  return (
    <div ref={rootRef}>
      <div role="tablist" aria-label="Przykłady pracy agenta" className="flex flex-wrap justify-center gap-2">
        {scenarios.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            onClick={() => select(index)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
              index === active
                ? "border-brand bg-brand text-white shadow-lg shadow-brand/25"
                : "border-brand/15 bg-white text-dark hover:border-brand/40 hover:text-brand",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:items-start" aria-live="polite">
        {/* Wiadomość wejściowa */}
        <div
          key={`in-${scenario.id}`}
          className="agency-demo-pop rounded-3xl border border-brand/10 bg-white p-6 shadow-sm lg:col-span-4"
        >
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            <Mail className="h-3.5 w-3.5" aria-hidden />
            Przychodzi wiadomość
          </p>
          <p className="mt-4 text-sm font-semibold text-dark">{scenario.input.from}</p>
          <p className="mt-1 text-sm text-brand">{scenario.input.subject}</p>
          <p className="mt-4 rounded-2xl bg-surface p-4 text-sm leading-relaxed text-dark/80">{scenario.input.body}</p>
        </div>

        {/* Kroki agenta */}
        <div className="relative overflow-hidden rounded-3xl bg-dark p-6 text-white lg:col-span-4">
          <div className="about-grid-bg absolute inset-0 opacity-60" aria-hidden />
          <div className="relative">
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
              <Bot className="h-3.5 w-3.5 text-brand-light" aria-hidden />
              Agent AI pracuje
            </p>
            <ol className="mt-5 space-y-3">
              {scenario.steps.map((step, index) => {
                const state = phase > index + 1 ? "done" : phase === index + 1 ? "running" : "waiting";
                return (
                  <li
                    key={`${scenario.id}-${step.title}`}
                    className={cn(
                      "flex gap-3 rounded-2xl border p-3.5 transition duration-500",
                      state === "waiting" && "border-white/5 bg-white/[0.02] opacity-40",
                      state === "running" && "border-brand-light/40 bg-brand/15",
                      state === "done" && "border-white/10 bg-white/[0.05]",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                        state === "done" ? "bg-emerald-400/20 text-emerald-300" : "bg-white/10 text-white/70",
                      )}
                    >
                      {state === "done" ? (
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      ) : state === "running" ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />
                      ) : (
                        <span className="text-[11px] font-semibold">{index + 1}</span>
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold">{step.title}</p>
                        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/60">
                          {step.tool}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-white/60">{step.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Wynik */}
        <div
          className={cn(
            "rounded-3xl border p-6 transition duration-700 lg:col-span-4",
            done ? "border-brand/25 bg-white shadow-xl shadow-brand/10" : "border-dashed border-brand/20 bg-white/60",
          )}
        >
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            <FileText className="h-3.5 w-3.5" aria-hidden />
            Wynik do akceptacji
          </p>
          {done ? (
            <div key={`out-${scenario.id}`} className="agency-demo-pop">
              <p className="mt-4 flex items-center gap-2 text-base font-semibold text-dark">
                <Sparkles className="h-4 w-4 text-brand" aria-hidden />
                {scenario.output.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {scenario.output.lines.map((line) => (
                  <li key={line} className="rounded-xl bg-surface px-3.5 py-2.5 text-sm leading-relaxed text-dark/85">
                    {line}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => {
                  setPinned(true);
                  setApproved(true);
                }}
                disabled={approved}
                className={cn(
                  "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition",
                  approved
                    ? "bg-emerald-500 text-white"
                    : "bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand/90",
                )}
              >
                {approved ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden />
                    Zatwierdzone przez człowieka
                  </>
                ) : (
                  scenario.approveLabel
                )}
              </button>
            </div>
          ) : (
            <div className="mt-4 space-y-2.5" aria-hidden>
              {[80, 95, 60].map((width) => (
                <div key={width} className="h-9 animate-pulse rounded-xl bg-surface" style={{ width: `${width}%` }} />
              ))}
              <p className="pt-2 text-sm text-muted">Agent przygotowuje szkic...</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>Przykład ilustracyjny. Kroki i systemy dobieramy do procesu konkretnej firmy.</p>
        <button
          type="button"
          onClick={replay}
          className="inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand/80"
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
          Odtwórz jeszcze raz
        </button>
      </div>
    </div>
  );
}
