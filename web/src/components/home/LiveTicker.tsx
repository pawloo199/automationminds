import { Check } from "lucide-react";

/** Pasek „automatyzacje w akcji”: przykładowe zdarzenia, które dzieją się same. */
export function LiveTicker({ events }: { events: readonly string[] }) {
  return (
    <div className="home-ticker relative border-t border-white/10 bg-dark/40 backdrop-blur-md">
      <div className="flex items-center">
        <p className="relative z-10 flex shrink-0 items-center gap-2.5 border-r border-white/10 bg-dark/80 px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:px-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="home-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="hidden sm:inline">Automatyzacje w akcji</span>
          <span className="sm:hidden">Na żywo</span>
        </p>
        <div className="relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
          <div className="home-ticker-track flex w-max">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="flex shrink-0 items-center gap-3 px-3 py-3"
                aria-hidden={copy === 1 ? true : undefined}
              >
                {events.map((event) => (
                  <li
                    key={`${copy}-${event}`}
                    className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-sm text-white/85"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                      <Check className="h-3 w-3" aria-hidden />
                    </span>
                    {event}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
