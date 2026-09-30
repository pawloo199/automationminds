const SOURCES = [
  { label: "Formularze", y: 80 },
  { label: "E-maile", y: 210 },
  { label: "Arkusze", y: 340 },
];

const TARGETS = [
  { label: "CRM", y: 80 },
  { label: "Faktury i KSeF", y: 210 },
  { label: "Raporty", y: 340 },
];

const HUB = { x: 240, y: 210, r: 50 };

function Node({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect
        x={x}
        y={y - 22}
        width={130}
        height={44}
        rx={12}
        className="fill-white/[0.06] stroke-white/20"
        strokeWidth={1}
      />
      <text
        x={x + 65}
        y={y + 5}
        textAnchor="middle"
        className="fill-white/90 text-[13px] font-medium"
      >
        {label}
      </text>
    </g>
  );
}

/** Animowany schemat: dane z wielu źródeł przepływają przez automatyzację do systemów. */
export function AboutFlowGraphic() {
  return (
    <div className="about-float relative rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-brand/10 backdrop-blur-sm sm:p-6">
      <div className="mb-2 flex items-center justify-between px-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
        <span>Dziś: ręcznie</span>
        <span className="text-brand-light">Po wdrożeniu: samo</span>
      </div>
      <svg
        viewBox="0 0 480 420"
        className="h-auto w-full"
        role="img"
        aria-label="Schemat: dane z formularzy, e-maili i arkuszy trafiają przez automatyzację z AI do CRM, faktur i raportów"
      >
        <defs>
          <radialGradient id="about-hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b74ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8b74ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {SOURCES.map((source) => (
          <path
            key={`in-${source.label}`}
            d={`M150 ${source.y} C 185 ${source.y}, 170 ${HUB.y}, ${HUB.x - HUB.r} ${HUB.y}`}
            fill="none"
            stroke="#8b74ff"
            strokeOpacity={0.7}
            strokeWidth={1.5}
            strokeDasharray="6 6"
            className="about-flow-line"
          />
        ))}
        {TARGETS.map((target) => (
          <path
            key={`out-${target.label}`}
            d={`M${HUB.x + HUB.r} ${HUB.y} C 310 ${HUB.y}, 295 ${target.y}, 330 ${target.y}`}
            fill="none"
            stroke="#ffffff"
            strokeOpacity={0.55}
            strokeWidth={1.5}
            strokeDasharray="6 6"
            className="about-flow-line"
          />
        ))}

        <circle cx={HUB.x} cy={HUB.y} r={HUB.r + 40} fill="url(#about-hub-glow)" />
        <circle cx={HUB.x} cy={HUB.y} r={HUB.r} fill="#6d51fd" />
        <circle
          cx={HUB.x}
          cy={HUB.y}
          r={HUB.r + 10}
          fill="none"
          stroke="#8b74ff"
          strokeOpacity={0.35}
        />
        <text
          x={HUB.x}
          y={HUB.y - 4}
          textAnchor="middle"
          className="fill-white text-[13px] font-bold"
        >
          Automatyzacja
        </text>
        <text
          x={HUB.x}
          y={HUB.y + 14}
          textAnchor="middle"
          className="fill-white/80 text-[12px] font-medium"
        >
          + AI
        </text>

        {SOURCES.map((source) => (
          <Node key={source.label} x={20} y={source.y} label={source.label} />
        ))}
        {TARGETS.map((target) => (
          <Node key={target.label} x={330} y={target.y} label={target.label} />
        ))}

        {[...SOURCES.map((s) => ({ x: 150, y: s.y })), ...TARGETS.map((t) => ({ x: 330, y: t.y }))].map(
          (point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r={5}
              fill="#8b74ff"
              className="about-flow-pulse"
              style={{ animationDelay: `${index * 0.3}s` }}
            />
          ),
        )}
      </svg>
    </div>
  );
}
