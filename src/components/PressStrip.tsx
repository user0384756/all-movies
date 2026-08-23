const QUOTES = [
  { outlet: "Resident Advisor", text: "The most reliable booking pipeline in European club music right now." },
  { outlet: "Mixmag", text: "WAX//RIG artists are reshaping what a residency looks like in 2025." },
  { outlet: "The Wire", text: "Less a roster, more a curatorial statement. Every name earns its slot." },
  { outlet: "DJ Mag", text: "Booking agency of the year — back to back." },
];

export default function PressStrip() {
  return (
    <section id="press" className="py-24 md:py-32 border-t border-[var(--line)] bg-[var(--paper-alt)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="font-mono text-xs tracking-widest uppercase text-[var(--accent)] mb-3">
          04 — Press
        </div>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-16">
          What they're
          <br />
          <span className="text-[var(--ink-soft)]">saying</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {QUOTES.map((q, i) => (
            <div
              key={q.outlet}
              className="border border-[var(--line)] rounded-2xl p-8 bg-[var(--paper-card)] hover:border-[var(--accent)] transition-all"
            >
              <div className="text-4xl text-[var(--accent)] font-bold mb-4">"</div>
              <p className="text-xl md:text-2xl font-medium tracking-tight leading-snug mb-6 text-[var(--ink)]">
                {q.text}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-[var(--line)]">
                <span className="font-mono text-xs tracking-widest uppercase text-[var(--ink-soft)]">
                  {q.outlet}
                </span>
                <span className="font-mono text-xs text-[var(--accent)]">
                  0{i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}