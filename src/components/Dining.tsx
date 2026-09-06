import Image from "next/image";
import { Reveal } from "./Reveal";

export function Dining() {
  return (
    <section id="dining" className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <Reveal>
          <div className="relative aspect-[4/3] rounded-md overflow-hidden">
            <Image
              src="/images/dining-restaurant.jpg"
              alt="Restaurant seating at Trinetar Gardens"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="max-w-lg">
            <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">
              Multi-cuisine, and genuinely well-liked
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              The in-house restaurant and bar serve a multi-cuisine menu
              through the day, plus buffet service for larger groups and
              events. It&apos;s consistently one of the things guests mention
              first — good food, and staff who seem to actually enjoy their
              jobs.
            </p>

            <div className="relative aspect-[16/9] rounded-md overflow-hidden mt-6">
              <Image
                src="/images/dining-buffet.jpg"
                alt="Buffet setup at the hotel restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <p className="mt-6 text-sm text-ink-soft">
              Open to hotel guests and walk-ins. Buffet and set-menu options
              available for banquet bookings — ask when you enquire about
              your event.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
