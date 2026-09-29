import { ArrowUpRight, Coffee, DoorOpen, LogIn, MapPin, Signpost } from "lucide-react";

const arrivalSteps = [
  {
    title: "Find the building entrance",
    description:
      "From Highgate Road, turn into Highgate Studios, then turn right. The entrance should be straight ahead. There may be a security cabin by the right turn.",
    icon: Signpost,
  },
  {
    title: "Find Softwire reception",
    description:
      "From the building's main entrance, turn left and follow the hallway all the way to the lifts. Take the lift to Floor 1 for the main Softwire reception.",
    icon: DoorOpen,
  },
  {
    title: "Sign in",
    description:
      "The receptionist will have your details. At the desk to your right, tap your name on the guest-list tablet to sign in. The toilets, including an accessible toilet, are immediately to your left.",
    icon: LogIn,
  },
  {
    title: "Make yourself at home",
    description:
      "You can wait in the kitchenette and help yourself to tea, coffee and snacks. Reception staff are happy to help if you have any issues.",
    icon: Coffee,
  },
];

export default function OfficeAccess() {
  return (
    <section
      id="office-access"
      aria-labelledby="office-access-title"
      className="border-t border-white/10 bg-bg-dark-2 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 md:px-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div>
          <p className="event-eyebrow">Arriving at Softwire</p>
          <h2 id="office-access-title" className="mt-4 text-4xl leading-tight font-black tracking-tight md:text-5xl">
            Getting into the office
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-slate-300">
            Once you arrive at Highgate Studios, follow these steps to reach
            Softwire reception and get checked in.
          </p>

          <div className="mt-8 rounded-2xl border border-punk-yellow/30 bg-punk-yellow/[0.06] p-5">
            <div className="flex items-center gap-3 text-punk-yellow">
              <Coffee size={20} aria-hidden="true" />
              <h3 className="font-bold">Arriving 20 minutes or more early?</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Wait at the Lunar Cafe, just inside the building&apos;s main
              entrance. Let the receptionist know you&apos;re a guest of
              Softwire; they&apos;ll let us know you&apos;ve arrived and help
              you find a seat.
            </p>
            <a
              href="https://what3words.com/amuse.solid.curry"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-punk-yellow hover:underline"
            >
              <MapPin size={16} aria-hidden="true" />
              Lunar Cafe: amuse.solid.curry
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <ol className="space-y-3">
            {arrivalSteps.map(({ title, description, icon: Icon }, index) => (
              <li
                key={title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl border border-punk-pink/30 bg-punk-pink/10 text-punk-pink-bright">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wide text-punk-pink-bright">
                    STEP {index + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {description}
                  </p>
                  {index === 1 && (
                    <p className="mt-3 border-l-2 border-punk-yellow pl-3 text-sm leading-relaxed text-slate-400">
                      Reception will ask whether you need a Personal Emergency
                      Evacuation Plan (PEEP), an individual escape plan for
                      anyone who may need help evacuating in an emergency.
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
