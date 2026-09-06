/**
 * Central source of truth for hotel facts used across the site.
 *
 * VERIFIED = confirmed via the hotel's Google Business listing / own website at build time.
 * PLACEHOLDER = needs a number from hotel management before launch (pricing, exact review count).
 * Search the codebase for "PLACEHOLDER" before shipping to production.
 */

export const hotel = {
  name: "Hotel Trinetar Gardens & Banquets",
  shortName: "Trinetar Gardens",
  tagline: "A quiet stay on the highway. A grand stage for your day.",

  // VERIFIED — Google Business listing
  address: {
    line1: "1A, National Highway, next to Astro Mahindra",
    line2: "Anand Vihar, Bari Brahmana",
    city: "Jammu",
    state: "Jammu & Kashmir",
    pincode: "181133",
    full: "1A, National Highway, next to Astro Mahindra, Anand Vihar, Bari Brahmana, Jammu, J&K 181133",
  },

  // VERIFIED — Google Business listing
  phone: "090700 70609",
  phoneHref: "tel:+919070070609",
  whatsappHref: "https://wa.me/919070070609",

  // VERIFIED — Google Business listing (consistent across Google + hotel's own listing)
  checkIn: "12:00 PM",
  checkOut: "12:00 PM",

  // PLACEHOLDER — ratings vary 3.7–4.0 depending on platform (Google/MMT/Goibibo/Justdial)
  // and review counts range from ~340 to ~1,635 depending on source. Confirm the current
  // live Google rating and count before launch, then update these two lines.
  rating: 4.0,
  reviewCount: "1,600+",

  // VERIFIED — hotel's own site (trinetargardensjammu.in)
  banquetHallSize: "9,000 sq. ft.",
  lawnCapacity: 500,
  totalGuestRange: { min: 50, max: 700 },
  banquetHallCount: 2,

  // VERIFIED — Google Business listing distances
  nearby: [
    { name: "Mata Vaishno Devi Temple", distance: "7 km" },
    { name: "Bahu Fort", distance: "14 km" },
    { name: "Mubarak Mandi Heritage Complex", distance: "16 km" },
    { name: "Jammu (Satwari) Airport", distance: "9 km" },
  ],

  amenities: [
    "Free Wi-Fi",
    "Free Breakfast",
    "Ample Parking",
    "Air-Conditioned Rooms",
    "Laundry Service",
    "24/7 Room Service",
    "Multi-Cuisine Restaurant",
    "Bar",
    "Child-Friendly",
  ],

  navLinks: [
    { label: "Stay", href: "#accommodations" },
    { label: "Banquets", href: "#banquets" },
    { label: "Dining", href: "#dining" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],

  // PLACEHOLDER — replace with real, current starting rates before launch.
  rooms: [
    {
      id: "deluxe",
      name: "Deluxe Room",
      description:
        "A well-kept room for a night on the road — comfortable bed, working AC, and everything you need within reach.",
      priceFrom: "Contact for rates",
      image: "/images/room-deluxe-bed.jpg",
      features: ["Free Wi-Fi", "Air Conditioning", "Tea & Coffee Maker", "24/7 Room Service"],
    },
    {
      id: "premium",
      name: "Premium Suite",
      description:
        "More room to spread out, with a sitting area — a good pick if you're staying a couple of nights or travelling for a family function.",
      priceFrom: "Contact for rates",
      image: "/images/room-bathroom.jpg",
      features: ["Sitting Area", "Premium Bath", "Wi-Fi", "Work Desk"],
    },
    {
      id: "family",
      name: "Family Suite",
      description:
        "Built for a group travelling together — extra space, and close enough to the banquet halls that getting ready for the event downstairs takes minutes, not a taxi ride.",
      priceFrom: "Contact for rates",
      image: "/images/lobby-reception.jpg",
      features: ["Extra Space", "Child-Friendly", "Near Banquet Halls", "Wi-Fi"],
    },
  ],
} as const;

export type Room = (typeof hotel.rooms)[number];
