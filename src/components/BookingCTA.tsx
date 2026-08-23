import { useState } from "react";

export default function BookingCTA() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    event: "",
    date: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <section id="book" className="py-24 md:py-32 border-t border-[var(--line)]">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <div className="font-mono text-xs tracking-widest uppercase text-[var(--accent)] mb-3">
          05 — Booking
        </div>
        <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-8">
          Lock the
          <br />
          <span className="text-[var(--accent)]">lineup.</span>
        </h2>
        <p className="text-xl text-[var(--ink-soft)] max-w-2xl mx-auto mb-10">
          Tell us about the night. Festival, club, private, takeover — we handle
          riders, logistics, and soundchecks worldwide.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="group inline-flex items-center gap-3 px-10 py-5 bg-[var(--accent)] text-[var(--paper)] font-bold tracking-widest uppercase text-sm rounded-full hover:bg-[var(--accent-hover)] transition-all"
        >
          <span>Start a booking</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-[var(--paper)]/80 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="bg-[var(--paper-card)] border border-[var(--line)] rounded-3xl p-8 md:p-10 max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="font-mono text-xs tracking-widest uppercase text-[var(--accent)] mb-1">
                  Booking inquiry
                </div>
                <h3 className="text-3xl font-bold tracking-tight">
                  {submitted ? "Locked in." : "Tell us about it."}
                </h3>
              </div>
              <button
                onClick={close}
                className="h-10 w-10 rounded-full border border-[var(--line)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-[var(--ink-soft)] mb-2">
                    Your name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-xl px-4 py-3 text-[var(--ink)] focus:outline-none focus:border-[var(--accent)] transition-all"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-[var(--ink-soft)] mb-2">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-xl px-4 py-3 text-[var(--ink)] focus:outline-none focus:border-[var(--accent)] transition-all"
                    placeholder="jane@venue.com"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-[var(--ink-soft)] mb-2">
                    Event / venue
                  </label>
                  <input
                    required
                    value={form.event}
                    onChange={(e) => setForm({ ...form, event: e.target.value })}
                    className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-xl px-4 py-3 text-[var(--ink)] focus:outline-none focus:border-[var(--accent)] transition-all"
                    placeholder="Berghain / Primavera / Private"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-[var(--ink-soft)] mb-2">
                      Date
                    </label>
                    <input
                      required
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-xl px-4 py-3 text-[var(--ink)] focus:outline-none focus:border-[var(--accent)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest uppercase text-[var(--ink-soft)] mb-2">
                      Budget band
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-xl px-4 py-3 text-[var(--ink)] focus:outline-none focus:border-[var(--accent)] transition-all"
                    >
                      <option value="">Select</option>
                      <option>Under $5k</option>
                      <option>$5k — $15k</option>
                      <option>$15k — $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 px-6 py-4 bg-[var(--accent)] text-[var(--paper)] font-bold tracking-widest uppercase text-sm rounded-full hover:bg-[var(--accent-hover)] transition-all"
                >
                  Send inquiry
                </button>
              </form>
            ) : (
              <div className="py-8 text-center">
                <div className="h-16 w-16 mx-auto rounded-full bg-[var(--accent)]/20 border border-[var(--accent)] flex items-center justify-center mb-6">
                  <span className="text-2xl text-[var(--accent)]">✓</span>
                </div>
                <p className="text-lg text-[var(--ink-soft)] mb-2">
                  Thanks {form.name || "there"} — we've got your {form.date} hold.
                </p>
                <p className="text-sm text-[var(--ink-soft)] mb-8">
                  Booking team will reply within 24h with availability and a quote.
                </p>
                <button
                  onClick={close}
                  className="px-6 py-3 border border-[var(--line)] text-[var(--ink)] font-bold tracking-widest uppercase text-xs rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}