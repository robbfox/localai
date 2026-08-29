import PaintSplatter from "./PaintSplatter";
import { PaintDripDivider } from "./PunkAccents";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/15 bg-bg-dark-2 py-12">
      {/* Top drip divider */}
      <PaintDripDivider color="pink" position="top" className="opacity-80" />

      {/* Background paint splatter accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30" aria-hidden="true">
        <div className="absolute -bottom-8 left-10">
          <PaintSplatter variant="dots" color="yellow" size={100} rotate={25} />
        </div>
        <div className="absolute -top-8 right-20">
          <PaintSplatter variant="spray" color="pink" size={120} rotate={-45} />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col gap-6 px-6 text-sm text-text-dark-secondary md:flex-row md:items-center md:justify-between md:px-16">
        <div>
          <strong className="font-extrabold text-white">
            <span className="text-punk-pink">AI solutions</span> for <span className="text-punk-yellow">better lives</span>
          </strong>{" "}
          — Wednesday 30 September 2026, 09:30–16:30, Softwire, 315 Highgate Studios, 53-79 Highgate Rd, London NW5 1TL
        </div>
        <div className="flex items-center gap-2 font-bold text-white/90">
          <span>Hosted by</span>
          <span className="rounded bg-punk-pink/20 px-2 py-0.5 text-xs text-punk-pink border border-punk-pink/40">LocalAI</span>
          <span className="text-punk-yellow">×</span>
          <span className="rounded bg-punk-yellow/20 px-2 py-0.5 text-xs text-punk-yellow border border-punk-yellow/40">Softwire</span>
        </div>
      </div>
    </footer>
  );
}

