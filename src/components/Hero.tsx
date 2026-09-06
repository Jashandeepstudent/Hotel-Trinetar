"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { hotel } from "@/lib/hotel-data";
import { BookingWidget } from "./BookingWidget";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col">
      {/* Background photo — the one deliberate motion moment on the page: a slow,
          single 20s Ken Burns drift, no other section repeats this treatment. */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.12 }}
          transition={{ duration: 20, ease: "linear" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-exterior-day.jpg"
            alt="Hotel Trinetar Gardens & Banquets, front entrance on NH44"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-pine-dark/80" />
      </div>

      <div className="relative flex-1 flex flex-col justify-center px-5 sm:px-8 pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brass text-brass" />
              ))}
              <Star className="w-4 h-4 fill-brass/40 text-brass" />
            </div>
            <span className="text-cream/90 text-sm">
              {hotel.rating} stars, {hotel.reviewCount} reviews
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl text-cream leading-[1.05] text-balance"
          >
            A resting place on the highway,
            <br className="hidden sm:block" /> a stage for your biggest day
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 text-cream/85 text-base sm:text-lg max-w-2xl mx-auto text-balance"
          >
            Comfortable, air-conditioned rooms for travellers on NH44, and
            banquet halls and lawns in Bari Brahmana, Jammu built to hold
            50 to 700 guests.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="relative z-10 px-4 sm:px-8 pb-8 sm:pb-10"
        id="booking"
      >
        <BookingWidget />
      </motion.div>
    </section>
  );
}
