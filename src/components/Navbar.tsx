import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--paper)]/80 backdrop-blur-xl border-b border-[var(--line)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-[var(--accent)] live-dot" />
          <span className="text-[var(--ink)] font-bold tracking-tight text-lg">
            WAX//RIG
          </span>
          <span className="text-[var(--ink-soft)] text-xs font-mono hidden md:inline">
            — DJ AGENCY
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-[var(--ink-soft)]">
          <a href="#roster" className="hover:text-[var(--accent)] transition-colors">
            Roster
          </a>
          <a href="#shows" className="hover:text-[var(--accent)] transition-colors">
            Shows
          </a>
          <a href="#mixes" className="hover:text-[var(--accent)] transition-colors">
            Mixes
          </a>
          <a href="#press" className="hover:text-[var(--accent)] transition-colors">
            Press
          </a>
        </div>

        <a
          href="#book"
          className="px-4 py-2 bg-[var(--accent)] text-[var(--paper)] text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[var(--accent-hover)] transition-all"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}