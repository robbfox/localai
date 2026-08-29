import Image from "next/image";
import Link from "next/link";
import PaintSplatter, { PunkBadge } from "./PaintSplatter";
import { PaintDripDivider, PunkStickerTape } from "./PunkAccents";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-bg-light-1 to-bg-light-2 text-text-light-primary py-16 md:py-24"
    >
      {/* Top and Bottom paint drip dividers */}
      <PaintDripDivider color="pink" position="top" />
      <PaintDripDivider color="yellow" position="bottom" />

      {/* Abstract background paint splatters on light canvas */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-10 left-[-40px] opacity-70">
          <PaintSplatter variant="burst" color="pink" size={260} rotate={40} />
        </div>
        <div className="absolute bottom-6 right-10 opacity-75">
          <PaintSplatter variant="clash" color="duo" size={280} rotate={-15} />
        </div>
        <div className="absolute top-1/2 left-1/3 opacity-30">
          <PaintSplatter variant="spray" color="yellow" size={220} rotate={75} />
        </div>
        <div className="absolute top-20 right-1/4 opacity-40">
          <PaintSplatter variant="dots" color="pink" size={130} rotate={-20} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="grid grid-cols-1 items-center gap-10 md:min-h-[520px] md:grid-cols-2">
          <div className="relative flex flex-col justify-center py-6 md:pr-14">
            <div className="mb-4 flex items-center gap-3">
              <PunkBadge color="yellow">
                THE MISSION
              </PunkBadge>
              <PunkStickerTape text="PRACTICAL AI" color="pink" rotate={-2} />
            </div>

            <div className="relative">
              {/* Splatter highlight behind heading */}
              <div className="pointer-events-none absolute -top-6 -left-8 -z-10 opacity-60">
                <PaintSplatter variant="burst" color="yellow" size={160} rotate={-25} />
              </div>
              <h2 className="section-title text-text-light-primary font-black">
                About the event
              </h2>
            </div>

            <p className="mt-4 max-w-[52ch] text-[18px] font-semibold leading-relaxed text-text-light-primary">
              We are driving the responsible and effective use of AI
              across housing and local government.
            </p>
            <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed text-text-light-secondary">
              Join us as we bring together our Local Transcribe team and LocalAI policymakers
            to explore real-world scenarios and challenges with a practical and hands on approach, share knowledge
              and shape the future of Local Government.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="#why-attend"
                className="group relative inline-flex items-center justify-center rounded-lg bg-black px-7 py-3.5 text-base font-extrabold text-white shadow-[4px_4px_0px_#ff2a85] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#ffe600] hover:bg-punk-pink hover:text-black"
              >
                Find out more →
              </Link>
              <div className="relative">
                <PaintSplatter variant="dots" color="pink" size={50} />
              </div>
            </div>
          </div>

          <div className="relative -mx-6 min-h-[300px] md:mx-0 md:mr-[-40px]">
            {/* Paint Splatter Accents around Robot */}
            <div className="pointer-events-none absolute -top-10 -left-6 z-20">
              <PaintSplatter
                variant="burst"
                color="yellow"
                size={160}
                rotate={-35}
                className="punk-glow-yellow"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-10 -right-6 z-20">
              <PaintSplatter
                variant="drip"
                color="pink"
                size={170}
                rotate={15}
                className="punk-glow-pink"
              />
            </div>
            <div className="pointer-events-none absolute top-10 -right-8 z-20">
              <PaintSplatter
                variant="spray"
                color="pink"
                size={140}
                rotate={60}
              />
            </div>

            <div className="relative h-[340px] md:h-[440px] overflow-hidden rounded-2xl md:rounded-l-3xl border-4 border-black/80 shadow-[10px_10px_0px_#ff2a85]">
              <Image
                src="/cute-robot-v2.avif"
                alt="Cute friendly robot illustration"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                aria-hidden="true"
              />
              {/* Floating Punk Sticker */}
              <div className="absolute bottom-4 left-4 z-10">
                <PunkBadge color="pink">
                  🤖 AI WITH PURPOSE
                </PunkBadge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
