import Link from "next/link";

export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/15 bg-bg-dark-1/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-16">
        <Link
          href="#top"
          className="flex items-center gap-2 text-base font-bold tracking-tight"
          aria-label="LocalAI and Softwire event home"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          LocalAI × Softwire
        </Link>

        <nav
          className="hidden gap-8 text-sm text-text-dark-secondary md:flex"
          aria-label="Section navigation"
        >
          <Link href="#about" className="transition-colors hover:text-text-dark-primary">
            About
          </Link>
          <Link href="#why-attend" className="transition-colors hover:text-text-dark-primary">
            Why attend
          </Link>
        </nav>

        <Link
          href="#why-attend"
          className="rounded-lg bg-btn-fill px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-btn-fill-hover"
        >
          Activities
        </Link>
      </div>
    </div>
  );
}
