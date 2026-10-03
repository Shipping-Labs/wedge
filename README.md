# The Wedge — landing page (Next.js + Tailwind CSS)

Next.js (App Router, TypeScript) + Tailwind CSS v4 port of the single-file landing page
for **The Wedge**, a weekly brief for indie developers and founders. The design is
pixel-identical to the original `landing/index.html` at 1440px and 390px wide.

## Run it

Requires Node.js 20.9+.

```bash
npm install
cp .env.example .env.local   # optional, see below
npm run dev                  # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
npm run lint
```

## Set the subscribe URL

Both signup forms (hero + bottom call-to-action) POST an `email` field to the URL in
`NEXT_PUBLIC_SUBSCRIBE_URL`.

1. Copy `.env.example` to `.env.local` (or set the variable in your hosting provider).
2. Set it to your newsletter platform's form/embed endpoint, e.g.
   `NEXT_PUBLIC_SUBSCRIBE_URL=https://your-platform.example/subscribe`.
3. Rebuild (`NEXT_PUBLIC_*` values are inlined at build time).

If the variable is empty or unset the forms run in **demo mode**: they validate the email
and show "Demo only: connect this form to your newsletter platform to go live." without
sending anything. Invalid addresses always show "Please enter a valid email address."

## Project layout

```
src/app/layout.tsx        fonts (next/font/google: Fraunces + Inter), metadata
src/app/page.tsx          page composition
src/app/globals.css       Tailwind import, design tokens (@theme), breakpoints, small base styles
src/components/
  Header.tsx              nav
  Hero.tsx                headline, signup, mock issue card
  ValueProps.tsx          "What's inside" cards
  SamplePreview.tsx       dark sample-issue section
  Audience.tsx            "Who it's for"
  CtaSection.tsx          orange call-to-action panel
  SignupForm.tsx          client component (validation + demo behaviour + env URL)
  Faq.tsx                 accordion (native <details>)
  Footer.tsx
  SectionHead.tsx, Container.tsx, buttonStyles.ts   shared bits
```

## Styling notes

Tailwind v4 is configured CSS-first (no `tailwind.config.js`): design tokens live in the
`@theme` block in `src/app/globals.css` (`ink`, `muted`, `cream`, `line`, `accent`,
`accent-d`, `tint`, `dark`, `font-serif`, `font-sans`, `rounded-card`). The original's two
responsive breakpoints are custom variants: `tab:` (max-width 960px) and `mobile:`
(max-width 560px). Global CSS is limited to smooth scrolling, heading defaults, focus
outlines and the reduced-motion rule.
