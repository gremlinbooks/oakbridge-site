# Handoff: Oakbridge Labs — Marketing One-Pager

## Overview
A single-page marketing site for Oakbridge Labs, Craig Nowotny's operations-consulting practice for owner-led construction and trades businesses. Structure: nav → hero → problem → method → process → about → pricing → contact → footer, all on one scrollable page with anchor-link navigation.

## About the Design Files
This bundle is a **complete, ready-to-run Next.js (App Router + TypeScript + Tailwind) project** — not just a static reference. It was authored directly as React/Tailwind source, so in this case you can build and deploy it largely as-is. Treat it the same way you'd treat any first-draft codebase handed to you: review it, adjust to your conventions, wire up real environment variables, and test before shipping. A companion visual reference (`Oakbridge Labs.dc.html`, an interactive HTML prototype) is included for pixel-level comparison of the intended look — it renders live in a browser but is not the codebase to copy from.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final. Layout is fully responsive (mobile-first, fluid type via Tailwind's arbitrary values, a hamburger menu below the `md` breakpoint).

## Screens / Views
One continuous page (`app/page.tsx`), sections in order:

1. **Nav** (`components/Nav.tsx`, client component) — Fixed top bar, `rgba` translucent + backdrop-blur background. Logo "OAKBRIDGE LABS" (LABS in mono, amber). Anchor links: Problem, Method, Process, Pricing, plus a filled "Contact" pill. Below `md` (768px): links hide, a two-bar hamburger toggles a full-screen overlay menu with large Anton-style links.
2. **Hero** — Eyebrow label (mono, amber, uppercase, tracked). Headline "YOUR OPERATION IS COSTING YOU MORE THAN YOU THINK." in Anton, fluid 40–88px, line-height 0.98. One-line subhead. Single CTA button → `#contact`.
3. **Problem** ("SOUND FAMILIAR?") — 4 stacked rows, each: large mono index number (01–04, muted), Anton sub-headline, one-sentence body. Divided by top borders, no icons.
4. **Method** ("AUDIT. AUTOMATE. OPTIMIZE.") — 3-column responsive grid (wraps to 1 column on narrow screens) with 1px hairline gaps simulated via a background-color grid gap. Each card: mono step label, Anton title, body copy.
5. **Process** ("FOUR STEPS. NO FLUFF.") — 4 rows, each: large Anton numeral in rust/orange, title + mono timing label inline, body copy.
6. **About** ("20+ YEARS IN THE FIELD, NOT IN A DECK.") — Two-column flex (stacks on mobile): left is Craig's quote as a bordered blockquote (3px rust left border) + attribution; right is a 3-row timeline (HCA 2008–2017, Black Bear Construction Services 2017–2021, Oakbridge Labs 2023–Present).
7. **Pricing** ("NO 'CONTACT US FOR PRICING.'") — 3 cards in a wrapping row: Starter ($2,000/mo), Core ($4,000–5,000/mo, marked "MOST COMMON FIT" with rust border/background), Fractional COO ($7,000–10,000+/mo). Each lists its features and a CTA button to `#contact`.
8. **Contact** — Two-column-on-desktop form (name, company / email, phone / revenue-range select / message textarea), submit button, mailto fallback line. On successful submit shows a confirmation panel; on failure shows an inline error with a mailto fallback.
9. **Footer** — Minimal 3-column row: business name, email, copyright.

## Design Tokens

Colors (hex, see `tailwind.config.ts`):
- Background: `#161310` (bg)
- Panel: `#1e1a15` (panel), `#241d15` (panelAlt, used for the featured pricing card)
- Ink (primary text): `#f2ece1`
- Muted text: `#a89f92`
- Muted dark (footer/labels): `#8a8175`
- Hairline borders: `rgba(242,236,225,0.12)` – `rgba(242,236,225,0.2)`
- Accent — rust/orange: `#c4501f` (rust), `#d9642f` (rustLight, hover state)
- Accent — amber (labels/eyebrows): `#d97a3f`

Typography:
- Display/headlines: **Anton** (400 only), tight line-height (0.98–1.05), used for all `h1`/`h2`/`h3` and big numerals.
- Body: **IBM Plex Sans** (400/500/600/700).
- Labels, numerals, timing tags, prices: **IBM Plex Mono** (400/500/600), uppercase + `tracking-[0.16em]` for eyebrow labels.
- Loaded via `next/font/google` in `app/layout.tsx` (no external stylesheet requests at runtime).

Spacing/radius: section vertical padding scales `py-16` → `py-24`; all interactive surfaces use a small `rounded-sm` (2px), not the rounded-xl/pill look common to SaaS sites — intentional, to avoid a soft "app" feel.

## Interactions & Behavior
- Anchor nav scrolls smoothly (`scroll-behavior: smooth` in `globals.css`).
- Mobile menu: hamburger toggles a full-screen overlay (client state in `Nav.tsx`); closes on link tap.
- Contact form: controlled inputs, `POST /api/contact` on submit. Loading state disables the button and shows "Sending…". On success, the form is replaced with a confirmation message. On network/API failure, an inline error appears with a `mailto:info@oakbridgelabs.com` fallback (the static mailto line is also always visible below the form regardless of state).
- No carousels, counters, or scroll-triggered animation — only hover-color transitions on links/buttons and the two states above.
- Responsive breakpoint: single breakpoint at Tailwind's `md` (768px) for the nav; everything else is fluid via flex-wrap and `min-w` clamps, so there are no other hard breakpoints to maintain.

## State Management
- `Nav.tsx`: local `useState<boolean>` for mobile menu open/closed.
- `ContactForm.tsx`: local `useState` for form fields (`name, company, email, phone, revenue, message`) and a `status` enum (`idle | sending | sent | error`). No global state or data fetching beyond the one POST.

## Design Tokens — Assets
No images, icons, illustrations, or logos are used anywhere in this design (per the client's explicit direction — no stock photography, no invented client logos, no icon-grid clichés). The only "asset" referenced is `/og-image.jpg` in `app/layout.tsx` metadata for social sharing — **you need to supply this file** (1200×630) before launch; it isn't included.

## Files
- `Oakbridge Labs.dc.html` — interactive HTML design reference (open directly in a browser).
- `app/layout.tsx` — fonts, metadata, Open Graph/Twitter tags, `ProfessionalService` JSON-LD, Vercel Analytics mount.
- `app/page.tsx` — the full page, all section markup and copy.
- `app/globals.css` — Tailwind directives + the few global rules that can't be inline (smooth scroll, selection color, placeholder color).
- `components/Nav.tsx` — nav bar + mobile menu (client component).
- `components/ContactForm.tsx` — contact form with fetch + status states (client component).
- `app/api/contact/route.ts` — POST handler; sends the submission via Resend to `CONTACT_TO_EMAIL` (default `info@oakbridgelabs.com`), replying-to the submitter's email.
- `tailwind.config.ts` — color/font token extensions.
- `.env.example` — required environment variables.

## Setup & Deploy

1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in:
   - `RESEND_API_KEY` — from your Resend dashboard.
   - `CONTACT_TO_EMAIL` — defaults to `info@oakbridgelabs.com`.
   - `CONTACT_FROM_EMAIL` — must be a verified sending identity/domain in Resend (the Resend sandbox address works for testing only).
3. `npm run dev` to preview locally at `localhost:3000`.
4. Deploy to Vercel: push to a Git repo, import into Vercel, set the same env vars in the Vercel project settings, deploy. No other build configuration is required (`next build` / `next start` are standard).
5. Before launch: add a real `/public/og-image.jpg` (1200×630) and double-check the JSON-LD `url`/`email` fields in `app/layout.tsx` match production.

Analytics: `@vercel/analytics` is wired up and works automatically once deployed on Vercel — no config needed. (Swap for Plausible by removing the `<Analytics />` mount and adding Plausible's script tag with `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` instead, if preferred.)
