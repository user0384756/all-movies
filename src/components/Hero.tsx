import { useState, useEffect } from "react";

const ARTISTS = [
  "KAYO HEX",
  "DARIUS VOID",
  "PRIME//UNIT",
  "MIRA SOUND",
  "YUKI BASS",
  "NIGHT FORM",
  "AXEL RAY",
  "VEX LOOP",
  "SOLO/SIX",
  "TALLA 808",
  "RIKO PHONIC",
  "NORTH BASE",
];

export default function Hero() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const utc = time.toISOString().slice(11, 19);

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 md:pt-28 grain">
      {/* Marquee background */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-[0.07] pointer-events-none select-none">
        <div className="flex whitespace-nowrap marquee-track">
          {[...ARTISTS, ...ARTISTS, ...ARTISTS, ...ARTISTS].map((a, i) => (
            <span
              key={i}
              className="text-[10vw] md:text-[8vw] font-bold tracking-tighter px-6 text-stroke"
            >
              {a}
            </span>
          ))}
        </div>
        <div className="flex whitespace-nowrap marquee-track-slow mt-4">
          {[...ARTISTS, ...ARTISTS, ...ARTISTS, ...ARTISTS].reverse().map((a, i) => (
            <span
              key={i}
              className="text-[10vw] md:text-[8vw] font-bold tracking-tighter px-6 text-stroke-accent"
            >
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-2 w-2 rounded-full bg-[var(--accent)] live-dot" />
          <span className="font-mono text-xs tracking-widest uppercase text-[var(--ink-soft)]">
            Booking Q1 — 14 slots remaining
          </span>
        </div>

        <h1 className="text-[12vw] md:text-[9vw] leading-[0.85] font-bold tracking-tighter text-[var(--ink)] mb-6">
          We book
          <br />
          <span className="text-[var(--accent)]">the room.</span>
        </h1>

        <p className="max-w-xl text-lg md:text-xl text-[var(--ink-soft)] mb-10 leading-relaxed">
          A roster of 24 DJs and producers spinning across house, techno, drum & bass,
          and club. Touring globally, headquartered in Berlin, available worldwide.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-16">
          <a
            href="#book"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent)] text-[var(--paper)] font-bold tracking-widest uppercase text-sm rounded-full hover:bg-[var(--accent-hover)] transition-all"
          >
            <span>Book an artist</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#roster"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[var(--line)] text-[var(--ink)] font-bold tracking-widest uppercase text-sm rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            See the roster
          </a>
        </div>

        {/* Proof row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-10 border-t border-[var(--line)]">
          {[
            { num: "24", label: "Active DJs" },
            { num: "180+", label: "Shows / year" },
            { num: "37", label: "Countries" },
            { num: "12yr", label: "In the game" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-5xl font-bold tracking-tighter text-[var(--ink)]">
                {s.num}
              </div>
              <div className="text-xs font-mono tracking-widest uppercase text-[var(--ink-soft)] mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Live ticker */}
        <div className="absolute bottom-8 right-6 md:right-10 flex items-center gap-2 font-mono text-xs text-[var(--ink-soft)]">
          <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] live-dot" />
          <span>UTC {utc}</span>
        </div>
      </div>
    </section>
  );
}