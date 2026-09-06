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
      "Excellent place to stay. Great location. Outstanding dining variety and taste of every single dish...Polite and friendly staff that set the standards for professionalism and customer care.",
    name: "Sanjay Sharma",
    source: "Google Reviews",
  },
  {
    quote:
      "Amazing services and extremely helpful and humble staff members. Jyoti Devi and her team members were so sweet and helpful, she even went an extra mile for helping us during my friend's wedding. Thanks a lot for making all the preparation a little easier. Food was also amazing.",
    name: "Abhishek Sharma",
    source: "Google Reviews",
  },
  {
    quote:
      "Outstanding service and hospitality of Hotel Trinetar Garden The staff  was extremely polite, attentive, and professional. Food was served on time, everything was well managed, and the overall dining experience was excellent. Highly recommended for family dinners and celebrations",
    name: "Keshav Sharma",
    source: "Google Reviews",
  },
  {
    quote:
      "Guests often mention clean and spacious rooms with neat linen and bathroom.  
• Friendly and helpful staff, especially front-desk service is appreciated.  
• Good options for food and decent quality meals.  
• Value for money stay, especially with breakfast/dinner combo in some bookings.",
    name: "Younas Mattoo",
    source: "Google Reviews",
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
