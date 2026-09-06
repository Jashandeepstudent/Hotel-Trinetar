"use client";

import { useState } from "react";
import { Calendar, Users, Search } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

export function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'd like to check availability at Trinetar Gardens.%0ACheck-in: ${
      checkIn || "—"
    }%0ACheck-out: ${checkOut || "—"}%0AGuests: ${guests}`;
    window.open(`${hotel.whatsappHref}?text=${message}`, "_blank");
  };

  return (
    <form
      onSubmit={handleCheck}
      className="mx-auto max-w-4xl bg-cream rounded-lg shadow-2xl shadow-ink/30 p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 sm:items-end"
    >
      <label className="flex flex-col gap-1.5 col-span-1">
        <span className="text-xs text-ink-soft flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" /> Check-in
        </span>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border border-ink/15 rounded-sm px-3 py-2.5 text-sm text-ink bg-white focus:border-brass outline-none"
        />
      </label>

      <label className="flex flex-col gap-1.5 col-span-1">
        <span className="text-xs text-ink-soft flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" /> Check-out
        </span>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border border-ink/15 rounded-sm px-3 py-2.5 text-sm text-ink bg-white focus:border-brass outline-none"
        />
      </label>

      <label className="flex flex-col gap-1.5 col-span-1">
        <span className="text-xs text-ink-soft flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5" /> Guests
        </span>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="border border-ink/15 rounded-sm px-3 py-2.5 text-sm text-ink bg-white focus:border-brass outline-none"
        >
          {["1 Guest", "2 Guests", "3 Guests", "4+ Guests"].map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="col-span-2 sm:col-span-1 bg-clay hover:bg-clay-dark text-cream font-medium rounded-sm px-4 py-2.5 sm:py-3 text-sm flex items-center justify-center gap-2 transition-colors h-fit"
      >
        <Search className="w-4 h-4" />
        Check availability
      </button>
    </form>
  );
}
