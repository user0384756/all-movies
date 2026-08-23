import { useState } from "react";

const ROSTER = [
  {
    name: "KAYO HEX",
    genre: "Techno",
    city: "Berlin",
    img: "https://images.pexels.com/photos/7715626/pexels-photo-7715626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    bio: "Closing sets at Berghain since 2021. Resident at Tresor.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "DARIUS VOID",
    genre: "House",
    city: "London",
    img: "https://images.pexels.com/photos/27570912/pexels-photo-27570912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    bio: "Fabric resident, 3 Boiler Rooms.",
    span: "",
  },
  {
    name: "PRIME//UNIT",
    genre: "DnB",
    city: "Tokyo",
    img: "https://images.pexels.com/photos/11374682/pexels-photo-11374682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    bio: "Hospital Records. Worldwide touring.",
    span: "",
  },
  {
    name: "MIRA SOUND",
    genre: "Disco",
    city: "NYC",
    img: "https://images.pexels.com/photos/9003002/pexels-photo-9003002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    bio: "Edit queen. Glitterbox regular.",
    span: "",
  },
  {
    name: "YUKI BASS",
    genre: "Bass / Club",
    city: "Seoul",
    img: "https://images.pexels.com/photos/5192273/pexels-photo-5192273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    bio: "Hyperpop-leaning club sets.",
    span: "",
  },
  {
    name: "NIGHT FORM",
    genre: "Ambient",
    city: "Lisbon",
    img: "https://images.pexels.com/photos/11044812/pexels-photo-11044812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    bio: "Sun-down opener, deep cuts.",
    span: "md:col-span-2",
  },
];

const FILTERS = ["All", "Techno", "House", "DnB", "Disco", "Bass / Club", "Ambient"];

export default function Roster() {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState<string | null>(null);

  const visible = filter === "All" ? ROSTER : ROSTER.filter((r) => r.genre === filter);

  return (
    <section id="roster" className="relative py-24 md:py-32 border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-xs tracking-widest uppercase text-[var(--accent)] mb-3">
              01 — The Roster
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              24 artists.
              <br />
              <span className="text-[var(--ink-soft)]">One bench.</span>
            </h2>
          </div>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest rounded-full border transition-all ${
                  filter === f
                    ? "bg-[var(--accent)] text-[var(--paper)] border-[var(--accent)]"
                    : "border-[var(--line)] text-[var(--ink-soft)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[280px]">
          {visible.map((artist) => (
            <div
              key={artist.name}
              onMouseEnter={() => setHovered(artist.name)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper-card)] cursor-pointer transition-all hover:border-[var(--accent)] ${artist.span}`}
            >
              <img
                src={artist.img}
                alt={artist.name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--paper)] via-[var(--paper)]/40 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-[var(--accent)]/15 text-[var(--accent)] text-[10px] font-mono uppercase tracking-widest rounded">
                    {artist.genre}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--ink-soft)]">
                    {artist.city}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2">
                  {artist.name}
                </h3>
                <p
                  className={`text-sm text-[var(--ink-soft)] transition-all ${
                    hovered === artist.name ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {artist.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="text-center py-20 text-[var(--ink-soft)] font-mono">
            No artists match this filter yet.
          </div>
        )}
      </div>
    </section>
  );
}