import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const spaces = [
  {
    name: "Grand Banquet Hall",
    image: "/images/banquet-hall-setup.jpg",
    description:
      "Air-conditioned, 9,000 sq. ft., with a stage and seating configurable for conferences, receptions, or a formal sit-down dinner.",
    bestFor: "Weddings · Receptions · Conferences",
  },
  {
    name: "The Lawn",
    image: "/images/banquet-outdoor-decor.jpg",
    description:
      "An open-air lawn that takes mandaps, cocktail setups, and evening décor well — the go-to for a sangeet or an outdoor reception.",
    bestFor: "Sangeet · Cocktail Events · Outdoor Receptions",
  },
];

export function EventSpaces() {
  return (
    <section className="py-20 sm:py-28 bg-sand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-lg text-balance">
            Two spaces, two moods
          </h2>
        </Reveal>

        <RevealGroup
          className="mt-12 grid sm:grid-cols-2 gap-8 lg:gap-10"
          staggerDelay={0.15}
        >
          {spaces.map((space) => (
            <RevealItem key={space.name}>
              <div className="relative aspect-[16/11] rounded-md overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-display text-2xl text-ink mt-5">
                {space.name}
              </h3>
              <p className="mt-2 text-ink-soft leading-relaxed text-sm">
                {space.description}
              </p>
              <p className="mt-3 text-xs text-clay font-medium">
                {space.bestFor}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
