import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Roster from "./components/Roster";
import ShowsTicker from "./components/ShowsTicker";
import MixConsole from "./components/MixConsole";
import PressStrip from "./components/PressStrip";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import "./fonts";

export default function App() {
  useEffect(() => {
    // Font loading handled in ./fonts
  }, []);

  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <style>{`
        :root {
          --paper: #0a0a0c;
          --paper-alt: #111114;
          --paper-card: #16161a;
          --ink: #f4f4f5;
          --ink-soft: #a1a1aa;
          --accent: #b5ff3a;
          --accent-hover: #c8ff5c;
          --accent-glow: rgba(181, 255, 58, 0.15);
          --line: rgba(244, 244, 245, 0.08);
          --violet: #8b5cf6;
          --cyan: #22d3ee;
          --font-display: 'Space Grotesk', system-ui, sans-serif;
          --font-body: 'Space Grotesk', system-ui, sans-serif;
          --font-mono: 'JetBrains Mono', monospace;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
        }
        .marquee-track-slow {
          animation: marquee 50s linear infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        .live-dot {
          animation: pulse-dot 1.5s ease-in-out infinite;
        }

        @keyframes waveform {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        .wave-bar {
          animation: waveform 0.8s ease-in-out infinite;
          transform-origin: center;
        }

        .text-stroke {
          -webkit-text-stroke: 1px var(--ink);
          color: transparent;
        }
        .text-stroke-accent {
          -webkit-text-stroke: 1px var(--accent);
          color: transparent;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
        }

        .grain {
          background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 3px 3px;
        }
      `}</style>

      <Navbar />
      <Hero />
      <Roster />
      <ShowsTicker />
      <MixConsole />
      <PressStrip />
      <BookingCTA />
      <Footer />
    </div>
  );
}