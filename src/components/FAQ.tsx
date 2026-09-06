"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { hotel } from "@/lib/hotel-data";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What are the check-in and check-out times?",
    a: `Check-in is from ${hotel.checkIn} and check-out is by ${hotel.checkOut}. If you need an early check-in or a late check-out, call ahead and the front desk will try to accommodate you, subject to availability.`,
  },
  {
    q: "How far is the hotel from the airport and main sights?",
    a: "The hotel sits on NH44 in Bari Brahmana. Jammu (Satwari) Airport is about 9 km away, Mata Vaishno Devi Temple is roughly 7 km, Bahu Fort about 14 km, and the Mubarak Mandi Heritage Complex around 16 km.",
  },
  {
    q: "How many guests can the banquet halls hold?",
    a: `Between the two banquet halls and the lawn, the venue can host anywhere from ${hotel.totalGuestRange.min} to ${hotel.totalGuestRange.max} guests, depending on the layout. The main hall is ${hotel.banquetHallSize}, and the lawn holds up to ${hotel.lawnCapacity} on its own.`,
  },
  {
    q: "Is parking available for events?",
    a: "Yes — the property has ample on-site parking for both hotel guests and event attendees.",
  },
  {
    q: "Do you provide catering for weddings and events?",
    a: "The in-house restaurant provides buffet and set-menu catering for banquet bookings. Get in touch with your guest count and preferred cuisine and the team will put a menu together.",
  },
  {
    q: "What's the best way to check room rates and availability?",
    a: `Rates vary by season and room type, so the most accurate numbers come directly from the front desk. Call ${hotel.phone} or message on WhatsApp with your dates and the team will confirm current pricing.`,
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28 bg-sand">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">
            Questions before you book
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-ink font-medium text-[0.95rem] sm:text-base">
                      {faq.q}
                    </span>
                    <Plus
                      className={`w-4.5 h-4.5 text-clay shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-ink-soft text-sm leading-relaxed pb-5 pr-8">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
