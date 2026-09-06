import FeatureCard from "./FeatureCard";
import { ConnectIcon, LightbulbIcon, RocketIcon, StarIcon } from "./icons";
import PaintSplatter, { PunkBadge } from "./PaintSplatter";
import { PunkStickerTape } from "./PunkAccents";

const features = [
  {
    icon: <LightbulbIcon className="h-full w-full" />,
    title: "Get curious",
    description:
      "Explore a few big AI questions together, without needing all the answers.",
    color: "pink" as const,
  },
  {
    icon: <ConnectIcon className="h-full w-full" />,
    title: "Reconnect",
    description:
      "Catch up with familiar faces and get to know colleagues beyond the video-call grid.",
    color: "yellow" as const,
  },
  {
    icon: <RocketIcon className="h-full w-full" />,
    title: "Try things together",
    description: "Swap the usual tasks for creative challenges and a different kind of teamwork.",
    color: "pink" as const,
  },
  {
    icon: <StarIcon className="h-full w-full" />,
    title: "Enjoy the day",
    description:
      "Make space for a laugh, a shared lunch and conversations that are not just about work.",
    color: "yellow" as const,
  },
];

export default function WhyAttend() {
  return (
    <section
      id="why-attend"
      className="relative overflow-hidden bg-gradient-to-b from-bg-dark-1 via-bg-dark-2 to-bg-dark-1 py-20 md:py-28"
    >
      {/* Background paint splatters */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-10 right-[-30px] opacity-70">
          <PaintSplatter variant="burst" color="yellow" size={280} rotate={15} />
        </div>
        <div className="absolute -bottom-12 -left-12 opacity-65">
          <PaintSplatter variant="clash" color="duo" size={320} rotate={-30} />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-25">
          <PaintSplatter variant="spray" color="pink" size={200} rotate={60} />
        </div>
      </div>

      {/* Constellation background with pink and yellow paint splatter nodes */}
      <svg
        className="pointer-events-none absolute inset-0 opacity-40"
        viewBox="0 0 1280 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke="#264e56" strokeWidth={1.5} fill="none" strokeDasharray="3 3">
          <path d="M0 60 L220 140 L460 40 L720 160 L980 70 L1280 150" />
          <path d="M0 260 L200 210 L420 320 L680 240 L940 340 L1280 260" />
          <path d="M0 440 L260 380 L520 460 L800 370 L1060 440 L1280 400" />
          <path d="M220 140 L200 210 M460 40 L420 320 M720 160 L680 240 M980 70 L940 340 M260 380 L420 320 M800 370 L940 340" />
        </g>
        {/* Pink and yellow constellation paint droplets */}
        <g fill="#ff2a85">
          <circle cx="220" cy="140" r="4" />
          <circle cx="720" cy="160" r="4.5" />
          <circle cx="420" cy="320" r="4" />
          <circle cx="940" cy="340" r="4.5" />
        </g>
        <g fill="#ffe600">
          <circle cx="460" cy="40" r="4.5" />
          <circle cx="980" cy="70" r="4" />
          <circle cx="680" cy="240" r="4.5" />
          <circle cx="800" cy="370" r="4" />
        </g>
      </svg>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="mb-12 flex flex-col items-start gap-3 md:mb-16">
          <div className="flex items-center gap-3">
            <PunkBadge color="pink">
              A DAY FOR THE TEAM
            </PunkBadge>
            <PunkStickerTape text="WHAT TO EXPECT" color="yellow" rotate={-1} />
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -top-8 -left-6 -z-10 opacity-70">
              <PaintSplatter variant="burst" color="pink" size={170} rotate={-15} />
            </div>
            <h2 className="section-title text-text-dark-primary font-black">
              Why attend?
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-0">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              delayMs={i * 90}
              isFirst={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
