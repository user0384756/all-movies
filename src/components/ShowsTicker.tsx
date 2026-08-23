import { useState, useEffect } from "react";

const INITIAL_SHOWS = [
  { date: "FRI 14 FEB", artist: "KAYO HEX", venue: "Berghain", city: "Berlin", status: "Sold out" },
  { date: "SAT 22 FEB", artist: "DARIUS VOID", venue: "Fabric", city: "London", status: "Last 40" },
  { date: "FRI 28 FEB", artist: "PRIME//UNIT", venue: "WOMB", city: "Tokyo", status: "On sale" },
  { date: "SAT 08 MAR", artist: "MIRA SOUND", venue: "Brooklyn Mirage", city: "NYC", status: "On sale" },
  { date: "FRI 14 MAR", artist: "YUKI BASS", venue: "Cakeshop", city: "Seoul", status: "Last 10" },
  { date: "SAT 22 MAR", artist: "NIGHT FORM", venue: "Lux Frágil", city: "Lisbon", status: "On sale" },
  { date: "FRI 04 APR", artist: "AXEL RAY", venue: "DC10", city: "Ibiza", status: "On sale" },
];

const STATUS_COLORS: Record<string, string> = {
  "Sold out": "bg-[var(--violet)]/20 text-[var(--violet)]",
  "Last 40": "bg-[var(--cyan)]/20 text-[var(--cyan)]",
  "Last 10": "bg-[var(--cyan)]/20 text-[var(--cyan)]",
  "On sale": "bg-[var(--accent)]/20 text-[var(--accent)]",
};

export default function ShowsTicker() {
  const [tickerPos, setTickerPos] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerPos((p) => p + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="shows" className="relative py-24 md:py-32 border-t border-[var(--line)] bg-[var(--paper-alt)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-[var(--accent)] mb-3">
              02 — On the road
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              Upcoming
              <br />
              <span className="text-[var(--ink-soft)]">shows</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-[var(--ink-soft)]">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--cyan)] live-dot" />
            <span>Refreshing live</span>
          </div>
        </div>

        {/* Live ticker — continuous */}
        <div className="overflow-hidden border-y border-[var(--line)] bg-[var(--paper)] py-3 mb-6">
          <div
            className="flex gap-8 whitespace-nowrap"
            style={{ transform: `translateX(-${tickerPos}px)` }}
          >
            {[...INITIAL_SHOWS, ...INITIAL_SHOWS, ...INITIAL_SHOWS].map((show, i) => (
              <div key={i} className="flex items-center gap-3 font-mono text-xs">
                <span className="text-[var(--accent)]">●</span>
                <span className="text-[var(--ink)] font-bold">{show.artist}</span>
                <span className="text-[var(--ink-soft)]">@ {show.venue}</span>
                <span className="text-[var(--ink-soft)]">· {show.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Show list */}
        <div className="space-y-2">
          {INITIAL_SHOWS.map((show, i) => (
            <div
              key={`${show.date}-${show.artist}`}
              className={`grid grid-cols-12 items-center gap-4 py-5 px-4 border border-[var(--line)] rounded-xl bg-[var(--paper-card)] hover:border-[var(--accent)] transition-all group cursor-pointer ${
                tick > 0 && i === tick % INITIAL_SHOWS.length ? "border-[var(--accent)]" : ""
              }`}
            >
              <div className="col-span-3 md:col-span-2 font-mono text-xs text-[var(--accent)] tracking-widest">
                {show.date}
              </div>
              <div className="col-span-9 md:col-span-3 text-lg md:text-xl font-bold tracking-tight">
                {show.artist}
              </div>
              <div className="hidden md:block col-span-4 text-[var(--ink-soft)]">
                {show.venue} · {show.city}
              </div>
              <div className="col-span-12 md:col-span-2 flex justify-end">
                <span
                  className={`px-3 py-1 text-[10px] font-mono uppercase tracking-widest rounded-full ${
                    STATUS_COLORS[show.status]
                  }`}
                >
                  {show.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}