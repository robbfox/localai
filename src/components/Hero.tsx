import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon, PinIcon } from "./icons";
import PaintSplatter, { PunkBadge } from "./PaintSplatter";
import { PunkStickerTape } from "./PunkAccents";

const mapsDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Softwire%2C%20315%2C%20Highgate%20Studios%2C%2053-79%20Highgate%20Rd%2C%20London%20NW5%201TL";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-bg-dark-1 via-bg-dark-2 to-bg-dark-1 pt-12 pb-8"
    >
      {/* Background large abstract paint splatters */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Massive top-right yellow & pink clash splatter */}
        <div className="absolute -top-16 -right-16 opacity-75 md:opacity-85">
          <PaintSplatter
            variant="clash"
            color="duo"
            size={360}
            rotate={20}
          />
        </div>

        {/* Bottom-left electric pink paint explosion with drips */}
        <div className="absolute -bottom-10 -left-12 opacity-65 md:opacity-80">
          <PaintSplatter
            variant="drip"
            color="pink"
            size={320}
            rotate={-15}
            className="punk-glow-pink"
          />
        </div>

        {/* Mid-screen spray paint drift */}
        <div className="absolute top-1/3 left-1/3 opacity-30">
          <PaintSplatter
            variant="spray"
            color="yellow"
            size={260}
            rotate={110}
          />
        </div>

        {/* Fine splatter dots */}
        <div className="absolute top-20 left-12 opacity-50">
          <PaintSplatter variant="dots" color="duo" size={140} rotate={-30} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:min-h-[600px] lg:grid-cols-2 lg:gap-8">
          {/* Copy */}
          <div className="relative pb-12 lg:pr-6 lg:pb-16">
            {/* Header tag badge with punk styling */}
            <div className="flex items-center gap-3">
              <PunkBadge color="pink">
                ⚡ IN-PERSON EVENT
              </PunkBadge>
              <PunkStickerTape text="LONDON 2026" color="yellow" rotate={2} />
            </div>

            {/* Headline with pink/yellow splatter backdrop */}
            <div className="relative mt-6">
              {/* Splatter highlight positioned to frame the heading cleanly without obscuring text */}
              <div className="pointer-events-none absolute -top-12 -left-10 -z-10 opacity-50">
                <PaintSplatter
                  variant="burst"
                  color="yellow"
                  size={170}
                  rotate={-15}
                />
              </div>
              <div className="pointer-events-none absolute top-14 right-10 -z-10 opacity-40">
                <PaintSplatter
                  variant="spray"
                  color="pink"
                  size={200}
                  rotate={10}
                />
              </div>

              <h1 className="text-[40px] leading-[1.08] font-black tracking-tight text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] sm:text-[52px] lg:text-[60px]">
                Exploring AI risk for{" "}
                <span className="relative inline-block">
                  <span className="text-white">a </span>
                  <span className="font-street relative inline-block text-punk-yellow px-1.5 py-0.5 text-[44px] sm:text-[56px] lg:text-[64px] font-normal leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,1)] underline decoration-punk-pink decoration-4 underline-offset-8">
                    safer
                  </span>{" "}
                  <span className="text-white">future.</span>
                  <span className="absolute -top-3 -right-6 text-punk-pink text-3xl font-black rotate-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    *
                  </span>
                </span>
              </h1>
            </div>

            <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-text-dark-secondary">
              Join <span className="font-bold text-white">LocalAI</span> and{" "}
              <span className="font-bold text-white">Softwire</span> for a day of
              insight, collaboration and practical systems thinking, all with a light touch and a focus on fun.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-punk-pink/15 border border-punk-pink/40 px-3.5 py-2 text-sm font-bold text-punk-pink">
              <span className="h-2 w-2 rounded-full bg-punk-yellow animate-pulse" />
              Invitation-only event for LocalAI and Softwire colleagues.
            </div>

            {/* Event Details with Punk accents */}
            <ul className="mt-8 flex flex-col gap-3.5" aria-label="Event details">
              <li className="flex items-center gap-3 text-base">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-punk-pink/20 text-punk-pink border border-punk-pink/40">
                  <CalendarIcon className="h-5 w-5" />
                </span>
                <span className="font-medium">Wednesday 30 September 2026</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-punk-yellow/20 text-punk-yellow border border-punk-yellow/40">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <span className="font-medium">09:30 – 16:30</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-punk-pink/20 text-punk-pink border border-punk-pink/40">
                  <PinIcon className="h-5 w-5" />
                </span>
                <span className="flex flex-wrap items-center gap-x-2">
                  <a
                    href={mapsDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold underline decoration-punk-yellow underline-offset-4 transition-colors hover:text-punk-yellow"
                  >
                    Softwire, Highgate Studios, London
                  </a>
                  <span className="text-xs uppercase tracking-[0.08em] font-semibold text-punk-pink">
                    [click for directions]
                  </span>
                </span>
              </li>
            </ul>

            {/* Action Buttons with Punk Splatter Style */}
            <div className="relative mt-10 flex flex-wrap gap-5">
              <div className="relative">
                <Link
                  href="/activities/am"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-punk-pink px-8 py-3.5 text-base font-black text-black shadow-[4px_4px_0px_#ffe600] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#ffe600] hover:bg-punk-pink-bright"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    ☀️ AM Session
                  </span>
                </Link>
                {/* Micro paint splat below button */}
                <div className="pointer-events-none absolute -bottom-3 -left-3 opacity-90">
                  <PaintSplatter variant="dots" color="yellow" size={35} />
                </div>
              </div>

              <div className="relative">
                <Link
                  href="/activities/pm"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-punk-yellow px-8 py-3.5 text-base font-black text-black shadow-[4px_4px_0px_#ff2a85] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#ff2a85] hover:bg-punk-yellow-neon"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    🌙 PM Session
                  </span>
                </Link>
                {/* Micro paint splat below button */}
                <div className="pointer-events-none absolute -bottom-3 -right-3 opacity-90">
                  <PaintSplatter variant="dots" color="pink" size={35} />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image with Paint Splatters & Drips framing */}
          <div className="relative -mx-6 min-h-[300px] sm:mx-0 lg:min-h-full">
            {/* Paint splatter framing accents */}
            <div className="pointer-events-none absolute -top-8 -left-8 z-20">
              <PaintSplatter
                variant="burst"
                color="pink"
                size={140}
                rotate={-20}
                className="punk-glow-pink"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-10 -right-8 z-20">
              <PaintSplatter
                variant="clash"
                color="duo"
                size={180}
                rotate={30}
                className="punk-glow-yellow"
              />
            </div>
            <div className="pointer-events-none absolute top-1/2 -right-10 z-20">
              <PaintSplatter
                variant="drip"
                color="yellow"
                size={130}
                rotate={90}
              />
            </div>

            <div className="relative h-[320px] overflow-hidden rounded-2xl border-2 border-punk-pink/40 shadow-[8px_8px_0px_rgba(255,230,0,0.3)] lg:absolute lg:inset-0 lg:right-[-64px] lg:h-full lg:rounded-l-2xl lg:rounded-r-none">
              <Image
                src="/hero-image-v2.avif"
                alt="Modern glass-walled office lounge with floor-to-ceiling windows overlooking the London skyline, soft seating and indoor greenery"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark-1/20 to-bg-dark-1 lg:bg-gradient-to-r lg:from-bg-dark-1 lg:via-bg-dark-1/30 lg:to-transparent"
                aria-hidden="true"
              />
              {/* Corner punk tape sticker */}
              <div className="absolute top-4 right-4 z-10">
                <PunkStickerTape text="LIVE & IN PERSON" color="pink" rotate={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

