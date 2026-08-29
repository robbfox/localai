import Link from "next/link";
import PaintSplatter from "./PaintSplatter";

export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/15 bg-bg-dark-1/90 backdrop-blur-md">
      {/* Background paint micro-splatter */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40" aria-hidden="true">
        <div className="absolute -left-6 -top-6">
          <PaintSplatter variant="dots" color="pink" size={100} rotate={15} />
        </div>
        <div className="absolute right-12 -top-8">
          <PaintSplatter variant="spray" color="yellow" size={120} rotate={45} />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-6 py-4 md:px-16">
        <Link
          href="#top"
          className="group flex items-center gap-3 text-base font-extrabold tracking-tight transition-transform hover:scale-105"
          aria-label="LocalAI and Softwire event home"
        >
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-punk-pink opacity-75" />
            <span className="relative inline-block h-2.5 w-2.5 rounded-full bg-punk-yellow" />
          </span>
          <span className="relative">
            <span className="text-white">LocalAI</span>
            <span className="mx-1 text-punk-pink font-black">×</span>
            <span className="text-punk-yellow">Softwire</span>
          </span>
        </Link>

        <nav
          className="hidden gap-8 text-sm font-semibold tracking-wider uppercase text-text-dark-secondary md:flex"
          aria-label="Section navigation"
        >
          <Link
            href="#about"
            className="transition-colors hover:text-punk-yellow hover:underline decoration-punk-pink underline-offset-4 decoration-2"
          >
            About
          </Link>
          <Link
            href="#why-attend"
            className="transition-colors hover:text-punk-pink hover:underline decoration-punk-yellow underline-offset-4 decoration-2"
          >
            Why attend
          </Link>
        </nav>
      </div>
    </div>
  );
}

