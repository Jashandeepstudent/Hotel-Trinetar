"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { hotel } from "@/lib/hotel-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-pine/95 backdrop-blur-md shadow-lg shadow-pine-dark/10"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-18 sm:h-20">
        <a
          href="#top"
          className="font-display text-lg sm:text-xl text-cream tracking-tight leading-none"
        >
          Trinetar Gardens
          <span className="block text-[0.65rem] font-body font-normal tracking-wide text-brass mt-0.5">
            &amp; Banquets
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {hotel.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/90 hover:text-brass transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={hotel.phoneHref}
            className="flex items-center gap-1.5 text-sm text-cream/90 hover:text-brass transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {hotel.phone}
          </a>
          <a
            href="#booking"
            className="bg-brass hover:bg-brass-light text-pine-dark text-sm font-medium px-5 py-2.5 rounded-sm transition-colors"
          >
            Check availability
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden text-cream p-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-pine border-t border-cream/10 px-5 py-6 flex flex-col gap-5">
          {hotel.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-cream text-base"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileOpen(false)}
            className="bg-brass text-pine-dark text-center font-medium px-5 py-3 rounded-sm mt-2"
          >
            Check availability
          </a>
        </div>
      )}
    </header>
  );
}
