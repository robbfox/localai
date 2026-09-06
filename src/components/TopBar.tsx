import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg-dark-1/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-5 gap-y-3 px-6 py-4 md:px-16">
        <Link href="/#top" className="text-base font-extrabold tracking-tight" aria-label="LocalAI and Softwire event home">
          LocalAI <span className="mx-1 text-punk-pink-bright">×</span> <span className="text-punk-yellow">Softwire</span>
        </Link>
        <Link href="/#programme" className="event-nav-cta inline-flex min-h-11 items-center gap-2 rounded-full bg-punk-yellow px-4 text-sm font-bold text-black lg:order-last">
          Plan your day <ArrowDown size={15} aria-hidden="true" />
        </Link>
        <nav className="flex w-full flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-300 lg:w-auto" aria-label="Section navigation">
          {[
            ["About", "about"],
            ["Programme", "programme"],
            ["Together", "together"],
            ["Why attend", "why-attend"],
          ].map(([label, id]) => (
            <Link key={id} href={`/#${id}`} className="inline-flex min-h-11 items-center transition-colors hover:text-punk-yellow">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
