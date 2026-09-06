import { hotel } from "@/lib/hotel-data";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-16 grid sm:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-xl text-cream">
            Trinetar Gardens
            <span className="block text-sm font-body text-brass mt-1">
              &amp; Banquets
            </span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            Comfortable stays and grand celebrations, right on NH44 in Bari
            Brahmana, Jammu.
          </p>
        </div>

        <div>
          <h4 className="text-cream text-sm font-medium mb-4">Quick links</h4>
          <ul className="space-y-2.5 text-sm">
            {hotel.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-brass transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-cream text-sm font-medium mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{hotel.address.full}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 shrink-0" />
              <a href={hotel.phoneHref} className="hover:text-brass transition-colors">
                {hotel.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="w-4 h-4 shrink-0" />
              <a
                href={hotel.whatsappHref}
                target="_blank"
                className="hover:text-brass transition-colors"
              >
                Message on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 px-5 sm:px-8">
        <p className="text-xs text-cream/40 mx-auto max-w-6xl">
          © {new Date().getFullYear()} {hotel.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
