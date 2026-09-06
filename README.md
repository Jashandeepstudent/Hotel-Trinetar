# Hotel Trinetar Gardens & Banquets — Website

A Next.js 16 (App Router) marketing site for Hotel Trinetar Gardens & Banquets in Bari Brahmana, Jammu — built around its two strengths: comfortable stays for NH44 travellers, and banquet halls/lawns for weddings and events.

## Before you launch — read this first

Two things in this codebase are **intentional placeholders**, not real content. Search-and-replace before going live:

1. **Room pricing** (`src/lib/hotel-data.ts`) — every room shows `"Contact for rates"`. Actual current rates weren't available when this was built; replace `priceFrom` on each room with real numbers.
2. **Guest testimonials** (`src/components/Testimonials.tsx`) — the four review cards are explicitly-labelled sample text, not real quotes. Replace with reviews copied verbatim from your Google Business / Tripadvisor listing, with real reviewer names, before publishing. The card already displays a "Sample layout — replace before launch" tag as a safeguard; remove that once real content is in.

Everything else (address, phone, distances to Bahu Fort / Vaishno Devi / Mubarak Mandi / the airport, banquet hall size, lawn capacity) was verified against the hotel's Google Business listing and its own website at the time this was built. Double-check the **Google rating and review count** in `hotel-data.ts` before launch too — different booking platforms showed different numbers (3.7–4.0 stars, 340–1,635 reviews) when this was researched, so pull the live number from Google directly.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (custom design tokens in `src/app/globals.css`)
- **Framer Motion** for the restrained scroll/load animations
- **Lucide React** for icons
- Fonts: **Fraunces** (display/headings) + **Inter** (body), loaded via `next/font/google`

## Project structure

```
src/
  app/
    layout.tsx              — root layout, fonts, metadata
    page.tsx                — homepage, assembles all sections
    globals.css              — design tokens (colors, fonts)
    api/booking-inquiry/     — POST endpoint for the event enquiry form
  components/                — one component per section (see page.tsx for the list)
  lib/
    hotel-data.ts             — ALL hotel facts live here. Edit this file, not the components.
public/
  images/                    — real photos of the property (see below)
```

## Real photos

`public/images/` contains real photographs of the property, renamed to describe what they show (`hero-exterior-day.jpg`, `room-deluxe-bed.jpg`, `banquet-hall-setup.jpg`, etc.). Some of these were sourced at fairly compressed resolutions (as low as ~700px wide) — fine for card-sized use, but if you have access to higher-resolution originals, swapping them in (same filenames) will sharpen anything displayed full-bleed, particularly the hero.

## Wiring up the enquiry form

`src/app/api/booking-inquiry/route.ts` validates and logs inquiries from the "Ask about your date" form in the Banquets section, but **does not currently send an email anywhere** — it only logs to the server console. To actually receive these inquiries:

1. Pick an email provider (Resend is the easiest to wire into Next.js — `npm install resend`)
2. Get an API key, add it to `.env.local` as `RESEND_API_KEY=...`
3. Uncomment and adapt the example code block in `route.ts` (it's already written, just commented out)
4. Add `RESEND_API_KEY` to your Vercel project's Environment Variables when you deploy

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying

This is built as a **standard Next.js app** (not a static export), so it needs a Node-capable host — it will **not** run as-is on GitHub Pages. Recommended: Vercel or Netlify, both of which have free tiers and support Next.js natively.

### Push to GitHub, then deploy on Vercel

```bash
git init
git add .
git commit -m "Initial commit: Trinetar Gardens website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Then on [vercel.com](https://vercel.com): "Add New Project" → import the GitHub repo → it auto-detects Next.js → Deploy. Every future `git push` to `main` will auto-deploy.

## Design notes

The color system, typography, and layout choices are documented as inline comments where non-obvious. Quick summary: Deep Pine (`#1F3D33`) and Aged Brass (`#C9A85C`) as the core palette instead of a more generic emerald/gold, Fraunces instead of Playfair Display for headings, and deliberately restrained motion — one Ken Burns move on the hero, quiet scroll-reveals elsewhere, no animation stacked on every single element.
