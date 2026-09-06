import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Hotel Trinetar Gardens & Banquets | Jammu, NH44",
  description:
    "A quiet base on NH44 for travellers, and banquet halls and lawns built for the biggest days of your life. AC rooms, restaurant, bar, and free parking near Bari Brahmana, Jammu.",
  keywords: [
    "Hotel Trinetar Gardens",
    "Jammu hotel NH44",
    "Bari Brahmana hotel",
    "wedding banquet Jammu",
    "Anand Vihar Jammu hotel",
  ],
  openGraph: {
    title: "Hotel Trinetar Gardens & Banquets",
    description:
      "Comfortable stays on NH44 and banquet halls for 50 to 700 guests, in Bari Brahmana, Jammu.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased bg-sand text-ink">{children}</body>
    </html>
  );
}
