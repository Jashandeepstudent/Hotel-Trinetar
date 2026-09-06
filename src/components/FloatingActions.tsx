"use client";

import { MessageCircle, Phone } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

/** Addon: floating WhatsApp button, desktop + mobile, sits above the mobile call bar */
export function WhatsAppButton() {
  return (
    <a
      href={hotel.whatsappHref}
      target="_blank"
      aria-label="Message on WhatsApp"
      className="fixed z-40 bottom-20 sm:bottom-6 right-5 sm:right-6 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] shadow-lg shadow-ink/20 flex items-center justify-center hover:scale-105 transition-transform"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" strokeWidth={0} />
    </a>
  );
}

/** Addon: sticky mobile-only call bar, since a hotel's #1 mobile conversion is a phone call */
export function MobileCallBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-pine border-t border-brass/30 flex">
      <a
        href={hotel.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-cream text-sm font-medium border-r border-cream/15"
      >
        <Phone className="w-4 h-4" />
        Call now
      </a>
      <a
        href="#booking"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 text-pine-dark bg-brass text-sm font-medium"
      >
        Check rooms
      </a>
    </div>
  );
}
