"use client";

/**
 * PLACEHOLDER CONTENT — these are illustrative sample reviews, not real guest
 * quotes. Do not publish this section as-is. Before launch, replace `sample`
 * below with reviews copied verbatim from your actual Google Business /
 * Tripadvisor listing, with the reviewer's real display name and a link back
 * to the original review where possible.
 */
const sample = [
  {
    quote:
      "Paste a real, verified guest review here — copy it exactly as written on Google or Tripadvisor.",
    name: "Guest name (from platform)",
    source: "Google Reviews",
  },
  {
    quote:
      "This is placeholder text. Replace with an actual review about the banquet hall or wedding experience.",
    name: "Guest name (from platform)",
    source: "Tripadvisor",
  },
  {
    quote:
      "Placeholder — swap in a real review that mentions the restaurant, staff, or room quality.",
    name: "Guest name (from platform)",
    source: "Google Reviews",
  },
  {
    quote:
      "Placeholder — swap in a real review about the location or check-in experience.",
    name: "Guest name (from platform)",
    source: "MakeMyTrip",
  },
];

import { Quote } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-md text-balance">
              What guests are saying
            </h2>
            <p className="text-xs text-clay bg-clay/10 px-3 py-1.5 rounded-sm">
              Sample layout — replace with verified reviews before launch
            </p>
          </div>
        </Reveal>

        <RevealGroup
          className="mt-12 grid sm:grid-cols-2 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {sample.map((t, i) => (
            <RevealItem
              key={i}
              className="border border-ink/10 rounded-md p-6 sm:p-7 bg-sand/40"
            >
              <Quote className="w-5 h-5 text-brass" strokeWidth={1.5} />
              <p className="mt-4 text-ink-soft italic leading-relaxed text-[0.95rem]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center justify-between text-sm border-t border-ink/10 pt-4">
                <span className="text-ink font-medium">{t.name}</span>
                <span className="text-ink-soft text-xs">{t.source}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
