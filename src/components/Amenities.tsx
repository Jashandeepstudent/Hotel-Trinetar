import {
  Wifi,
  Coffee,
  Car,
  Snowflake,
  Shirt,
  Clock,
  UtensilsCrossed,
  Wine,
  Baby,
} from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const amenityIcons = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Coffee, label: "Free Breakfast" },
  { icon: Car, label: "Ample Parking" },
  { icon: Snowflake, label: "AC Rooms" },
  { icon: Shirt, label: "Laundry Service" },
  { icon: Clock, label: "24/7 Room Service" },
  { icon: UtensilsCrossed, label: "Multi-Cuisine Restaurant" },
  { icon: Wine, label: "Bar" },
  { icon: Baby, label: "Child-Friendly" },
];

export function Amenities() {
  return (
    <section className="py-20 sm:py-24 bg-sand">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-lg text-balance">
            Everything a stay actually needs
          </h2>
        </Reveal>

        <RevealGroup
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8 sm:gap-y-10"
          staggerDelay={0.06}
        >
          {amenityIcons.map(({ icon: Icon, label }) => (
            <RevealItem key={label} className="flex items-center gap-3.5">
              <Icon className="w-5 h-5 text-pine shrink-0" strokeWidth={1.75} />
              <span className="text-ink text-sm sm:text-base">{label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
