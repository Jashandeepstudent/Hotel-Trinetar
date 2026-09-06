import Image from "next/image";
import { Check } from "lucide-react";
import { hotel } from "@/lib/hotel-data";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function Accommodations() {
  return (
    <section id="accommodations" className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink text-balance">
            Rooms built for a good night&apos;s rest
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Clean, air-conditioned, and quiet enough to actually sleep in —
            whether you&apos;re breaking a highway drive or staying for a
            family event downstairs.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 grid md:grid-cols-3 gap-8 lg:gap-10"
          staggerDelay={0.12}
        >
          {hotel.rooms.map((room) => (
            <RevealItem key={room.id} className="group">
              <div className="relative aspect-[4/3] rounded-md overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl text-ink">
                    {room.name}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                  {room.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {room.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 text-xs text-ink-soft"
                    >
                      <Check className="w-3 h-3 text-pine" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4">
                  <span className="text-sm text-ink-soft">
                    {room.priceFrom}
                  </span>
                  <a
                    href={hotel.whatsappHref}
                    target="_blank"
                    className="text-sm font-medium text-clay hover:text-clay-dark transition-colors"
                  >
                    Enquire →
                  </a>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
