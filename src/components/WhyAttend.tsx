import FeatureCard from "./FeatureCard";
import { ConnectIcon, LightbulbIcon, RocketIcon, StarIcon } from "./icons";

const features = [
  {
    icon: <LightbulbIcon className="h-full w-full" />,
    title: "Learn",
    description:
      "Discover how AI is solving real challenges in housing and local government.",
  },
  {
    icon: <ConnectIcon className="h-full w-full" />,
    title: "Connect",
    description:
      "Network with peers and experts from across the public sector and industry.",
  },
  {
    icon: <RocketIcon className="h-full w-full" />,
    title: "Collaborate",
    description: "Share ideas and work together to accelerate positive change.",
  },
  {
    icon: <StarIcon className="h-full w-full" />,
    title: "Make an impact",
    description:
      "Build the skills and partnerships to deliver better outcomes for citizens.",
  },
];

export default function WhyAttend() {
  return (
    <section
      id="why-attend"
      className="relative overflow-hidden bg-bg-dark-1 py-20"
    >
      <svg
        className="pointer-events-none absolute inset-0 opacity-35"
        viewBox="0 0 1280 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke="#1E3A40" strokeWidth={1} fill="none">
          <path d="M0 60 L220 140 L460 40 L720 160 L980 70 L1280 150" />
          <path d="M0 260 L200 210 L420 320 L680 240 L940 340 L1280 260" />
          <path d="M0 440 L260 380 L520 460 L800 370 L1060 440 L1280 400" />
          <path d="M220 140 L200 210 M460 40 L420 320 M720 160 L680 240 M980 70 L940 340 M260 380 L420 320 M800 370 L940 340" />
        </g>
        <g fill="#00D285">
          <circle cx="220" cy="140" r="2.5" />
          <circle cx="460" cy="40" r="2.5" />
          <circle cx="720" cy="160" r="2.5" />
          <circle cx="980" cy="70" r="2.5" />
          <circle cx="420" cy="320" r="2.5" />
          <circle cx="680" cy="240" r="2.5" />
          <circle cx="940" cy="340" r="2.5" />
          <circle cx="800" cy="370" r="2.5" />
        </g>
      </svg>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-16">
        <h2 className="section-title mb-12 text-text-dark-primary md:mb-16">
          Why attend?
        </h2>

        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-4 lg:gap-0">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delayMs={i * 90}
              isFirst={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
