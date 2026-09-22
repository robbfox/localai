




import { Phone } from "lucide-react";


const contacts = [
  { name: "Art", phone: "07721991670" },
  { name: "Chucks", phone: "07878854220" },
  { name: "Robert", phone: "07988576418" },
];

export default function Contacts() {
  return (
    <section id="contacts" aria-labelledby="contacts-title" className="border-t border-white/10 bg-bg-dark-2 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 md:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="event-eyebrow">Need help on the day?</p>
            <h2 id="contacts-title" className="mt-4 text-4xl leading-tight font-black tracking-tight md:text-5xl">
              Event contacts
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate-300">
              If you have questions, need directions or run into any issues, use these event contacts.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={`tel:${contact.phone}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-punk-yellow/60 hover:bg-punk-yellow/[0.08]"
              >
                <span className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5 text-punk-yellow">
                  <Phone size={20} aria-hidden="true" />
                </span>
                <span className="mt-4 block text-lg font-bold text-white group-hover:text-punk-yellow">
                  {contact.name}
                </span>
                <span className="mt-2 block text-sm font-semibold tracking-wide text-slate-300">
                  {contact.phone}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
