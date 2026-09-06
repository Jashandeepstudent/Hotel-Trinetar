import { MapPin, Phone, Clock } from "lucide-react";
import { hotel } from "@/lib/hotel-data";
import { Reveal } from "./Reveal";

export function LocationContact() {
  const mapQuery = encodeURIComponent(hotel.address.full);

  return (
    <section id="contact" className="py-20 sm:py-28 bg-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14">
        <Reveal>
          <div className="max-w-md">
            <h2 className="font-display text-3xl sm:text-4xl text-ink text-balance">
              Find us on NH44
            </h2>

            <div className="mt-8 space-y-6">
              <div className="flex gap-3.5">
                <MapPin className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                <div>
                  <p className="text-ink text-sm leading-relaxed">
                    {hotel.address.line1}
                    <br />
                    {hotel.address.line2}, {hotel.address.city}
                    <br />
                    {hotel.address.state} {hotel.address.pincode}
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <Phone className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                <a
                  href={hotel.phoneHref}
                  className="text-ink text-sm hover:text-clay transition-colors"
                >
                  {hotel.phone}
                </a>
              </div>

              <div className="flex gap-3.5">
                <Clock className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                <p className="text-ink text-sm">
                  Check-in from {hotel.checkIn}, check-out by {hotel.checkOut}
                </p>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
              target="_blank"
              className="mt-8 inline-block bg-pine hover:bg-pine-light text-cream text-sm font-medium px-6 py-3 rounded-sm transition-colors"
            >
              Get directions
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-md overflow-hidden border border-ink/10">
            <iframe
              title="Hotel Trinetar Gardens & Banquets location map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
