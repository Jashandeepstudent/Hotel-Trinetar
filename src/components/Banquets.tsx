import Image from "next/image";
import { hotel } from "@/lib/hotel-data";
import { Reveal } from "./Reveal";
import { EventEnquiryForm } from "./EventEnquiryForm";

export function Banquets() {
  return (
    <section id="banquets" className="relative py-24 sm:py-32 bg-pine overflow-hidden">
      {/* Subtle textured backdrop so the green isn't a flat fill */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-brass) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="max-w-lg">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-tight text-balance">
              Two banquet halls. One lawn built for celebration.
            </h2>
            <p className="mt-6 text-cream/80 leading-relaxed">
              A {hotel.banquetHallSize} banquet hall and a lush lawn that
              holds up to {hotel.lawnCapacity} guests, together able to seat
              anywhere from {hotel.totalGuestRange.min} to{" "}
              {hotel.totalGuestRange.max} people — weddings, receptions,
              corporate offsites, birthdays. The team here has run enough of
              these to make the logistics disappear into the background.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/15 pt-8">
              <div>
                <dt className="text-xs text-brass uppercase-none">Halls</dt>
                <dd className="font-display text-3xl text-cream mt-1">
                  {hotel.banquetHallCount}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-brass">Hall size</dt>
                <dd className="font-display text-3xl text-cream mt-1">
                  9,000<span className="text-lg">ft²</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-brass">Guests</dt>
                <dd className="font-display text-3xl text-cream mt-1">
                  50–700
                </dd>
              </div>
            </dl>

            <a
              href={hotel.whatsappHref}
              target="_blank"
              className="mt-10 inline-block bg-brass hover:bg-brass-light text-pine-dark font-medium px-7 py-3.5 rounded-sm transition-colors"
            >
              Enquire about your date
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-2xl shadow-pine-dark/40">
            <Image
              src="/images/banquet-hall-setup.jpg"
              alt="Banquet hall set up for an event at Trinetar Gardens"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-2xl px-5 sm:px-8 mt-16 sm:mt-20">
        <Reveal delay={0.1}>
          <div className="bg-cream rounded-md p-6 sm:p-8 shadow-xl shadow-pine-dark/20">
            <h3 className="font-display text-xl text-ink">
              Ask about your date
            </h3>
            <p className="mt-1.5 text-sm text-ink-soft">
              Share a few details and the events team will call you back.
            </p>
            <div className="mt-6">
              <EventEnquiryForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
