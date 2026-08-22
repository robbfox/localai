import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon, PinIcon } from "./icons";

const mapsDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Softwire%2C%20315%2C%20Highgate%20Studios%2C%2053-79%20Highgate%20Rd%2C%20London%20NW5%201TL";

export default function Hero() {
  return (
    <section
      id="top"
      className="overflow-hidden bg-gradient-to-b from-bg-dark-1 to-bg-dark-2 pt-16"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:min-h-[600px] lg:grid-cols-2 lg:gap-6">
          {/* Copy */}
          <div className="pb-12 lg:pr-6 lg:pb-16">
            <span className="block text-[13px] font-semibold uppercase tracking-[0.14em] text-text-dark-secondary">
              In-person event
            </span>

            <h1 className="mt-5 text-[40px] leading-[1.08] font-extrabold tracking-tight sm:text-[52px] lg:text-[60px]">
              Exploring AI risk for{" "}
              <span className="text-accent">a safer future.</span>
            </h1>

            <p className="mt-5 max-w-[46ch] text-[17px] text-text-dark-secondary">
              Join LocalAI and Softwire for a day of
              insight, collaboration and practical systems thinking, all with a light touch and a focus on fun.
            </p>

            <ul className="mt-8 flex flex-col gap-3.5" aria-label="Event details">
              <li className="flex items-center gap-3 text-base">
                <CalendarIcon className="h-[22px] w-[22px] flex-none text-accent" />
                <span>Wednesday 30 September 2026</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <ClockIcon className="h-[22px] w-[22px] flex-none text-accent" />
                <span>09:30 – 16:30</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <PinIcon className="h-[22px] w-[22px] flex-none text-accent" />
                <span className="flex flex-wrap items-center gap-x-2">
                  <a
                    href={mapsDirectionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-white/35 underline-offset-3 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    Softwire, Highgate Studios, London
                  </a>
                  <span className="text-xs uppercase tracking-[0.08em] text-text-dark-secondary">
                    click for directions
                  </span>
                </span>
              </li>
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <span className="inline-flex items-center justify-center rounded-lg border-2 border-white/35 px-7 py-3.5 text-base font-bold text-white/90">
                By invitation only
              </span>
              <Link
                href="#why-attend"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/55 px-7 py-3.5 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/6"
              >
                View activities
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative -mx-6 min-h-[280px] sm:mx-0 lg:min-h-full">
            <div className="relative h-[280px] overflow-hidden rounded-2xl lg:absolute lg:inset-0 lg:right-[-64px] lg:h-full lg:rounded-l-2xl lg:rounded-r-none">
              <Image
                src="/hero-image-v2.avif"
                alt="Modern glass-walled office lounge with floor-to-ceiling windows overlooking the London skyline, soft seating and indoor greenery"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-dark-1 lg:bg-gradient-to-r lg:from-bg-dark-1 lg:via-bg-dark-1/40 lg:to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
