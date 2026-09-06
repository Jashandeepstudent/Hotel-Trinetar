import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { NearbyAttractions } from "@/components/NearbyAttractions";
import { Amenities } from "@/components/Amenities";
import { Accommodations } from "@/components/Accommodations";
import { Banquets } from "@/components/Banquets";
import { EventSpaces } from "@/components/EventSpaces";
import { Dining } from "@/components/Dining";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { LocationContact } from "@/components/LocationContact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton, MobileCallBar } from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        {/* 1. Hero — real exterior photo, single Ken Burns move, booking widget */}
        <Hero />
        {/* 2. Trust bar — rating, hall size, capacity, location at a glance */}
        <TrustBar />
        {/* 3. About / Location — verified NH44 distances */}
        <About />
        {/* 4. Nearby Attractions — icon-forward, since real photos of these landmarks weren't sourceable */}
        <NearbyAttractions />
        {/* 5. Amenities — plain icon list, not boxed cards */}
        <Amenities />
        {/* 6. Accommodations — 3 room types with real photos */}
        <Accommodations />
        {/* 7. Banquets — second bold moment, pine background, real hall photo + enquiry form */}
        <Banquets />
        {/* 8. Event Spaces — hall vs lawn breakdown */}
        <EventSpaces />
        {/* 9. Dining — restaurant + buffet real photos */}
        <Dining />
        {/* 10. Gallery — remaining real photos in varied grid */}
        <Gallery />
        {/* 11. Testimonials — CLEARLY MARKED sample content pending real reviews */}
        <Testimonials />
        {/* 12. FAQ — real pre-booking questions, accordion */}
        <FAQ />
        {/* 13. Location & Contact — map embed + directions */}
        <LocationContact />
      </main>
      {/* 14. Footer */}
      <Footer />

      {/* Addons: floating WhatsApp + sticky mobile call bar */}
      <WhatsAppButton />
      <MobileCallBar />
    </>
  );
}
