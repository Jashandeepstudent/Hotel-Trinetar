import { Landmark, Castle, University, Plane } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const attractions = [
  {
    icon: Landmark,
    name: "Mata Vaishno Devi Temple",
    distance: "7 km",
    note: "One of the most visited pilgrimage sites in North India.",
  },
  {
    icon: Castle,
    name: "Bahu Fort",
    distance: "14 km",
    note: "An ancient sandstone fort with a temple dedicated to Kali.",
  },
  {
    icon: University,
    name: "Mubarak Mandi Heritage Complex",
    distance: "16 km",
    note: "A former royal palace mixing Rajasthani and European styles.",
  },
  {
    icon: Plane,
    name: "Jammu (Satwari) Airport",
    distance: "9 km",
    note: "The nearest airport, a short drive from the hotel.",
  },
];

export function NearbyAttractions() {
  return (
    <section className="py-20 sm:py-24 bg-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-lg text-balance">
            Worth the short drive
          </h2>
        </Reveal>

        <RevealGroup
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6"
          staggerDelay={0.1}
        >
          {attractions.map((place) => (
            <RevealItem key={place.name} className="border-t-2 border-brass pt-5">
              <place.icon className="w-6 h-6 text-pine" strokeWidth={1.5} />
              <h3 className="font-display text-lg text-ink mt-4">
                {place.name}
              </h3>
              <p className="text-xs text-clay font-medium mt-1">
                {place.distance} away
              </p>
              <p className="text-sm text-ink-soft mt-2 leading-relaxed">
                {place.note}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
