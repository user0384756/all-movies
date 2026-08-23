export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--paper-alt)] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-2 w-2 rounded-full bg-[var(--accent)] live-dot" />
              <span className="font-bold tracking-tight text-lg">WAX//RIG</span>
            </div>
            <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
              DJ booking agency.
              <br />
              Berlin · London · Tokyo
              <br />
              Est. 2013.
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)] mb-4">
              Roster
            </div>
            <ul className="space-y-2 text-sm text-[var(--ink-soft)]">
              <li><a href="#roster" className="hover:text-[var(--accent)] transition-colors">Techno</a></li>
              <li><a href="#roster" className="hover:text-[var(--accent)] transition-colors">House</a></li>
              <li><a href="#roster" className="hover:text-[var(--accent)] transition-colors">DnB</a></li>
              <li><a href="#roster" className="hover:text-[var(--accent)] transition-colors">Disco</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)] mb-4">
              Agency
            </div>
            <ul className="space-y-2 text-sm text-[var(--ink-soft)]">
              <li><a href="#shows" className="hover:text-[var(--accent)] transition-colors">Shows</a></li>
              <li><a href="#mixes" className="hover:text-[var(--accent)] transition-colors">Mixes</a></li>
              <li><a href="#press" className="hover:text-[var(--accent)] transition-colors">Press</a></li>
              <li><a href="#book" className="hover:text-[var(--accent)] transition-colors">Book</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent)] mb-4">
              Contact
            </div>
            <ul className="space-y-2 text-sm text-[var(--ink-soft)]">
              <li>bookings@wax-rig.fm</li>
              <li>+49 30 0000 0000</li>
              <li>@waxrig</li>
              <li>Soundcloud · RA</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--line)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-mono text-xs text-[var(--ink-soft)]">
            © WAX//RIG — all rights reserved
          </div>
          <div className="font-mono text-xs text-[var(--ink-soft)] flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] live-dot" />
            <span>Currently booking — Q1 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}