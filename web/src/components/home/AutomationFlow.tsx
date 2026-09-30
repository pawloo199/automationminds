"use client";

import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export type FlowScenario = {
  id: string;
  label: string;
  sources: readonly string[];
  hubLines: readonly string[];
  targets: readonly string[];
  caption: string;
  href: string;
  linkLabel: string;
};

const ROTATE_MS = 8000;
const NODE_Y = [70, 170, 270, 370];
const HUB = { x: 380, y: 120, w: 240, h: 200 };
const HUB_CY = HUB.y + HUB.h / 2;

const inPath = (y: number) =>
  `M220 ${y} C 300 ${y}, 300 ${HUB_CY}, ${HUB.x} ${HUB_CY}`;
const outPath = (y: number) =>
  `M${HUB.x + HUB.w} ${HUB_CY} C 700 ${HUB_CY}, 700 ${y}, 780 ${y}`;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = () => setReduced(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function SvgNode({ x, y, label, align }: { x: number; y: number; label: string; align: "left" | "right" }) {
  return (
    <g>
      <rect
        x={x}
        y={y - 26}
        width={200}
        height={52}
        rx={14}
        fill="rgba(255,255,255,0.06)"
        stroke="rgba(255,255,255,0.16)"
      />
      <circle
        cx={align === "left" ? x + 20 : x + 180}
        cy={y}
        r={4}
        fill="#8b74ff"
      />
      <text
        x={align === "left" ? x + 34 : x + 166}
        y={y + 5}
        textAnchor={align === "left" ? "start" : "end"}
        fill="rgba(255,255,255,0.92)"
        fontSize={15}
        fontWeight={500}
      >
        {label}
      </text>
    </g>
  );
}

/** Interaktywny schemat: dane z kilku źródeł przechodzą przez automatyzację do systemów. */
export function AutomationFlow({ scenarios }: { scenarios: readonly FlowScenario[] }) {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [hovered, setHovered] = useState(false);
  const reduced = usePrefersReducedMotion();
  const scenario = scenarios[active];

  useEffect(() => {
    if (!autoplay || hovered || reduced) return;
    const id = window.setTimeout(
      () => setActive((index) => (index + 1) % scenarios.length),
      ROTATE_MS,
    );
    return () => window.clearTimeout(id);
  }, [active, autoplay, hovered, reduced, scenarios.length]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        role="tablist"
        aria-label="Przykładowe przepływy"
        className="flex flex-wrap gap-2"
      >
        {scenarios.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`flow-tab-${item.id}`}
              aria-selected={selected}
              aria-controls="flow-panel"
              onClick={() => {
                setActive(index);
                setAutoplay(false);
              }}
              className={cn(
                "relative overflow-hidden rounded-full border px-5 py-2.5 text-sm font-semibold transition",
                selected
                  ? "border-brand bg-brand text-white"
                  : "border-white/15 text-white/70 hover:border-white/30 hover:text-white",
              )}
            >
              {item.label}
              {selected && autoplay && !reduced ? (
                <span
                  key={`progress-${active}`}
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-white/70"
                  style={{
                    animation: `home-progress ${ROTATE_MS}ms linear forwards`,
                    animationPlayState: hovered ? "paused" : "running",
                  }}
                  aria-hidden
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div
        id="flow-panel"
        role="tabpanel"
        aria-labelledby={`flow-tab-${scenario.id}`}
        className="mt-10"
      >
        {/* Desktop: schemat SVG */}
        <div key={scenario.id} className="hidden animate-[fadeIn_0.5s_ease] md:block">
          <svg
            viewBox="0 0 1000 440"
            className="h-auto w-full"
            role="img"
            aria-label={`Schemat: ${scenario.sources.join(", ")} trafiają przez automatyzację do: ${scenario.targets.join(", ")}`}
          >
            <defs>
              <linearGradient id="flow-hub" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8b74ff" />
                <stop offset="100%" stopColor="#6d51fd" />
              </linearGradient>
              <radialGradient id="flow-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8b74ff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8b74ff" stopOpacity="0" />
              </radialGradient>
            </defs>

            {NODE_Y.map((y) => (
              <path
                key={`in-${y}`}
                d={inPath(y)}
                fill="none"
                stroke="rgba(139,116,255,0.55)"
                strokeWidth={1.5}
                strokeDasharray="6 6"
                className="home-dash"
              />
            ))}
            {NODE_Y.map((y) => (
              <path
                key={`out-${y}`}
                d={outPath(y)}
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth={1.5}
                strokeDasharray="6 6"
                className="home-dash"
              />
            ))}

            {!reduced
              ? NODE_Y.map((y, index) => (
                  <g key={`pulse-${y}`}>
                    <circle r={5} fill="#b9a9ff">
                      <animateMotion
                        dur="2.4s"
                        repeatCount="indefinite"
                        begin={`${index * 0.6}s`}
                        path={inPath(y)}
                      />
                    </circle>
                    <circle r={5} fill="#ffffff">
                      <animateMotion
                        dur="2.4s"
                        repeatCount="indefinite"
                        begin={`${1.2 + index * 0.6}s`}
                        path={outPath(y)}
                      />
                    </circle>
                  </g>
                ))
              : null}

            <circle cx={500} cy={HUB_CY} r={190} fill="url(#flow-glow)" />
            <rect
              x={HUB.x}
              y={HUB.y}
              width={HUB.w}
              height={HUB.h}
              rx={28}
              fill="url(#flow-hub)"
            />
            <rect
              x={HUB.x - 10}
              y={HUB.y - 10}
              width={HUB.w + 20}
              height={HUB.h + 20}
              rx={34}
              fill="none"
              stroke="rgba(139,116,255,0.35)"
            />
            <text x={500} y={HUB.y + 58} textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize={12} fontWeight={600} letterSpacing={2.5}>
              AUTOMATYZACJA + AI
            </text>
            <text x={500} y={HUB.y + 104} textAnchor="middle" fill="#ffffff" fontSize={20} fontWeight={700}>
              {scenario.hubLines[0]}
            </text>
            <text x={500} y={HUB.y + 132} textAnchor="middle" fill="#ffffff" fontSize={20} fontWeight={700}>
              {scenario.hubLines[1]}
            </text>

            {scenario.sources.map((label, index) => (
              <SvgNode key={label} x={20} y={NODE_Y[index]} label={label} align="left" />
            ))}
            {scenario.targets.map((label, index) => (
              <SvgNode key={label} x={780} y={NODE_Y[index]} label={label} align="right" />
            ))}
          </svg>
        </div>

        {/* Telefon: układ pionowy */}
        <div key={`m-${scenario.id}`} className="animate-[fadeIn_0.5s_ease] md:hidden">
          <ul className="grid grid-cols-2 gap-2">
            {scenario.sources.map((label) => (
              <li key={label} className="rounded-xl border border-white/15 bg-white/[0.06] px-3 py-2.5 text-sm text-white/90">
                {label}
              </li>
            ))}
          </ul>
          <div
            className="home-flow-down mx-auto my-2 h-10 w-0.5 bg-[repeating-linear-gradient(to_bottom,#8b74ff_0_6px,transparent_6px_12px)] bg-[length:2px_24px]"
            aria-hidden
          />
          <div className="rounded-2xl bg-gradient-to-br from-brand-light to-brand px-5 py-5 text-center shadow-xl shadow-brand/30">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-white/75">
              AUTOMATYZACJA + AI
            </p>
            <p className="mt-2 text-lg font-bold leading-snug text-white">
              {scenario.hubLines[0]} {scenario.hubLines[1]}
            </p>
          </div>
          <div
            className="home-flow-down mx-auto my-2 h-10 w-0.5 bg-[repeating-linear-gradient(to_bottom,#ffffff_0_6px,transparent_6px_12px)] bg-[length:2px_24px]"
            aria-hidden
          />
          <ul className="grid grid-cols-2 gap-2">
            {scenario.targets.map((label) => (
              <li key={label} className="rounded-xl border border-white/15 bg-white/[0.06] px-3 py-2.5 text-sm text-white/90">
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-base leading-relaxed text-white/75">
            {scenario.caption}
          </p>
          <Link
            href={scenario.href}
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 md:self-auto"
          >
            {scenario.linkLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
