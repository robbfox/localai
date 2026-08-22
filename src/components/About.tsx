import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-bg-light-1 to-bg-light-2 text-text-light-primary"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="grid grid-cols-1 md:min-h-[520px] md:grid-cols-2">
          <div className="flex flex-col justify-center py-20 md:pr-14">
            <h2 className="section-title text-text-light-primary">
              About the event
            </h2>
            <p className="mt-2 max-w-[52ch] text-[17px] text-text-light-secondary">
              We are driving the responsible and effective use of AI
              across housing and local government.
            </p>
            <p className="mt-4 max-w-[52ch] text-[17px] text-text-light-secondary">
              Join us as we bring together our Local Transcribe team, and LocalAI policymakers
            to explore real-world scenarios and challenges with a practical and hands on approach, share knowledge
              and shape the future of Local Government.
            </p>
            <Link
              href="#why-attend"
              className="mt-6 inline-flex w-fit items-center justify-center rounded-lg border-2 border-text-light-primary px-7 py-3.5 text-base font-bold text-text-light-primary transition-colors hover:bg-text-light-primary/6"
            >
              Find out more
            </Link>
          </div>

          <div className="relative -mx-6 min-h-[280px] md:mx-0 md:mr-[-64px]">
            <Image
              src="/cute-robot-v2.avif"
              alt="Cute friendly robot illustration"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover md:rounded-l-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
