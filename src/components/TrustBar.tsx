import { hotel } from "@/lib/hotel-data";

const stats = [
  { value: `${hotel.rating}★`, label: `${hotel.reviewCount} Google reviews` },
  { value: hotel.banquetHallSize, label: "banquet hall" },
  { value: `${hotel.totalGuestRange.min}–${hotel.totalGuestRange.max}`, label: "guest capacity" },
  { value: "NH44", label: "Bari Brahmana, Jammu" },
];

export function TrustBar() {
  return (
    <div className="bg-sand-dark border-y border-ink/8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-6 sm:py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <div className="font-display text-2xl sm:text-3xl text-pine">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm text-ink-soft mt-0.5">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
