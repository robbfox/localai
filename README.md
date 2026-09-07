# LocalAI × Softwire — Event Landing Page

Next.js (App Router, TypeScript, Tailwind CSS v4) build of the "Building AI
solutions for better lives" event landing page.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `src/app/layout.tsx` — root layout, metadata, self-hosted Public Sans font
- `src/app/globals.css` — design tokens (colors, section-title style) via Tailwind `@theme`
- `src/components/` — `TopBar`, `Hero`, `About`, `WhyAttend`, `FeatureCard`, `Footer`, `icons.tsx`
- `src/components/EventProgramme.tsx` — homepage agenda, morning/afternoon filters and expandable session details
- `src/components/TeamConnection.tsx` — in-person team connection and interactive conversation prompts

## Updating the programme

Edit the session list in `EventProgramme.tsx` and keep the detailed guides in
`src/app/activities/am/page.tsx` and `src/app/activities/pm/page.tsx` in sync.
Afternoon timings are deliberately provisional. Speaker contributions are
informal and are not scheduled agenda items. The day offers practical AI
activities and time to catch up, without assuming everyone works remotely.

Attendance remains invitation-only: the page refers colleagues to their event
invitation rather than offering an unconnected registration form.
Agenda filters announce the result count, expandable details support keyboard
navigation, and entrance animations and video autoplay respect reduced-motion
preferences. Video playback can still be started manually.

## Notes

- Colors, type scale, and spacing follow the design spec as CSS custom
  properties in `globals.css`, exposed as Tailwind utilities (e.g. `bg-bg-dark-1`, `text-accent`).
- Hero and About images are loaded via `next/image` from Unsplash
  (`images.unsplash.com` is allow-listed in `next.config.ts`). Swap in your
  own photography by updating the `src` in `Hero.tsx` / `About.tsx`.
- The font is self-hosted via `@fontsource-variable/public-sans` rather than
  `next/font/google`, so the build doesn't depend on reaching Google Fonts
  at build time — useful if you're building in a network-restricted
  environment (e.g. CI, ECS).
- Feature card fade-in on scroll is implemented with `IntersectionObserver`
  in `FeatureCard.tsx` and respects `prefers-reduced-motion`.

## Build

```bash
npm run build
npm start
```
