import Image from "next/image";
import { MapPin } from "lucide-react";
import { hotel } from "@/lib/hotel-data";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink leading-tight text-balance">
              Set right on the highway, close to everything that matters
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Trinetar Gardens sits along National Highway 44 in Bari
              Brahmana — an easy stop if you&apos;re driving through, and a
              short ride from the city&apos;s temples, forts, and the
              airport. It&apos;s an unfussy, relaxing base: the kind of place
              where you check in, exhale, and get on with why you came to
              Jammu.
            </p>

            <ul className="mt-8 space-y-3">
              {hotel.nearby.map((place) => (
                <li
                  key={place.name}
                  className="flex items-center justify-between border-b border-ink/10 pb-3"
                >
                  <span className="flex items-center gap-2.5 text-ink">
                    <MapPin className="w-4 h-4 text-clay shrink-0" />
                    {place.name}
                  </span>
                  <span className="text-ink-soft text-sm font-medium">
                    {place.distance}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative aspect-[3/4] rounded-md overflow-hidden col-span-1 row-span-2">
              <Image
                src="/images/exterior-dusk.jpg"
                alt="Hotel Trinetar Gardens exterior at dusk"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src="/images/lobby-reception.jpg"
                alt="Hotel lobby and reception"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src="/images/ganesh-detail.jpg"
                alt="Devotional corner at the hotel entrance"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
