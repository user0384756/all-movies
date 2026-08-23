import { useState, useEffect, useRef } from "react";

interface Deck {
  track: string;
  artist: string;
  bpm: number;
  key: string;
  position: number;
  duration: number;
  playing: boolean;
  color: string;
}

const INITIAL_DECKS: Deck[] = [
  {
    track: "Subterranean",
    artist: "KAYO HEX",
    bpm: 138,
    key: "Am",
    position: 42,
    duration: 180,
    playing: true,
    color: "var(--violet)",
  },
  {
    track: "Glass Rooms",
    artist: "DARIUS VOID",
    bpm: 124,
    key: "Fm",
    position: 88,
    duration: 200,
    playing: false,
    color: "var(--cyan)",
  },
];

export default function MixConsole() {
  const [decks, setDecks] = useState<Deck[]>(INITIAL_DECKS);
  const [crossfader, setCrossfader] = useState(50);
  const [masterBpm, setMasterBpm] = useState(131);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setDecks((prev) =>
        prev.map((d) => ({
          ...d,
          position: d.playing && d.position < d.duration ? d.position + 1 : d.position,
        }))
      );
      setMasterBpm((b) => b + (Math.random() - 0.5) * 0.4);
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const togglePlay = (i: number) =>
    setDecks((prev) =>
      prev.map((d, idx) => (idx === i ? { ...d, playing: !d.playing } : d))
    );

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const Waveform = ({ active }: { active: boolean }) => (
    <div className="flex items-end gap-[2px] h-10">
      {Array.from({ length: 32 }).map((_, i) => (
        <div
          key={i}
          className="w-[3px] bg-[var(--accent)] wave-bar"
          style={{
            height: `${20 + Math.abs(Math.sin(i * 0.5)) * 80}%`,
            animationDelay: `${i * 0.05}s`,
            opacity: active ? 1 : 0.2,
          }}
        />
      ))}
    </div>
  );

  return (
    <section id="mixes" className="relative py-24 md:py-32 border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-12">
          <div className="font-mono text-xs tracking-widest uppercase text-[var(--accent)] mb-3">
            03 — In the mix
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
            Latest
            <br />
            <span className="text-[var(--ink-soft)]">mixtapes</span>
          </h2>
        </div>

        {/* Live console */}
        <div className="border border-[var(--line)] rounded-3xl bg-[var(--paper-card)] p-6 md:p-10 mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[var(--accent)] live-dot" />
              <span className="font-mono text-xs tracking-widest uppercase text-[var(--ink-soft)]">
                Live mix — Deck A + Deck B
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4 font-mono text-xs text-[var(--ink-soft)]">
              <span>MASTER BPM</span>
              <span className="text-[var(--accent)] text-lg font-bold">
                {masterBpm.toFixed(1)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {decks.map((deck, i) => (
              <div
                key={deck.track}
                className={`border rounded-2xl p-6 transition-all ${
                  deck.playing
                    ? "border-[var(--accent)] bg-[var(--paper-alt)]"
                    : "border-[var(--line)] bg-[var(--paper)]"
                }`}
                style={deck.playing ? { boxShadow: `0 0 40px var(--accent-glow)` } : {}}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] mb-2">
                      Deck {i === 0 ? "A" : "B"}
                    </div>
                    <div className="text-2xl font-bold tracking-tight">{deck.track}</div>
                    <div className="text-sm text-[var(--ink-soft)]">{deck.artist}</div>
                  </div>
                  <button
                    onClick={() => togglePlay(i)}
                    className="h-12 w-12 rounded-full border border-[var(--accent)] text-[var(--accent)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-[var(--paper)] transition-all"
                    aria-label={deck.playing ? "Pause" : "Play"}
                  >
                    {deck.playing ? "❚❚" : "▶"}
                  </button>
                </div>

                <div className="mb-4">
                  <Waveform active={deck.playing} />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[var(--ink-soft)]">
                    {formatTime(deck.position)}
                  </span>
                  <div className="flex-1 h-1 bg-[var(--paper)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--accent)] transition-all duration-1000"
                      style={{ width: `${(deck.position / deck.duration) * 100}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs text-[var(--ink-soft)]">
                    {formatTime(deck.duration)}
                  </span>
                </div>

                <div className="flex gap-4 font-mono text-[10px] tracking-widest uppercase text-[var(--ink-soft)]">
                  <span>
                    BPM <span className="text-[var(--ink)]">{deck.bpm}</span>
                  </span>
                  <span>
                    KEY <span className="text-[var(--ink)]">{deck.key}</span>
                  </span>
                  <span>
                    GAIN <span className="text-[var(--ink)]">{i === 0 ? 78 : 64}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Crossfader */}
          <div className="mt-8 pt-8 border-t border-[var(--line)]">
            <div className="flex items-center justify-between mb-3 font-mono text-xs tracking-widest uppercase text-[var(--ink-soft)]">
              <span>Crossfader</span>
              <span className="text-[var(--accent)]">{crossfader}</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={crossfader}
              onChange={(e) => setCrossfader(Number(e.target.value))}
              className="w-full accent-[var(--accent)]"
            />
            <div className="flex justify-between mt-2 font-mono text-[10px] text-[var(--ink-soft)]">
              <span>A</span>
              <span>B</span>
            </div>
          </div>
        </div>

        {/* Mix grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Fabriclive Mix", artist: "DARIUS VOID", duration: "62:14", plays: "184k" },
            { title: "Hör Berlin 03", artist: "KAYO HEX", duration: "74:08", plays: "92k" },
            { title: "Night Bus Edits", artist: "MIRA SOUND", duration: "48:22", plays: "311k" },
          ].map((mix) => (
            <div
              key={mix.title}
              className="border border-[var(--line)] rounded-2xl p-6 bg-[var(--paper-card)] hover:border-[var(--accent)] transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 rounded-full border border-[var(--accent)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--paper)] transition-all">
                  ▶
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--ink-soft)]">
                  {mix.plays} plays
                </span>
              </div>
              <div className="text-xl font-bold tracking-tight mb-1">{mix.title}</div>
              <div className="text-sm text-[var(--ink-soft)] mb-3">{mix.artist}</div>
              <div className="font-mono text-xs text-[var(--accent)]">{mix.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}