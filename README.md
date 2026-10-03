# The Wedge — landing page (Next.js + Tailwind CSS)

Next.js (App Router, TypeScript) + Tailwind CSS v4 port of the single-file landing page
for **The Wedge**, a weekly brief for indie developers and founders. The layout
and styling follow the original `landing/index.html`. The signup form is now Beehiiv's
embedded iframe form, so that area is not identical to the original.

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

## Beehiiv signup form

Both signup spots (hero + bottom call-to-action) use Beehiiv's official embedded subscribe
form (`https://subscribe-forms.beehiiv.com/v3/loader.js`). `BeehiivEmbed` injects the loader
script, with its `data-beehiiv-form` attribute, into its own container on mount and cleans
up on unmount; the loader renders the form as an iframe.

The form id defaults to the publication's form. To use another Beehiiv form, copy
`.env.example` to `.env.local` (or set the variable in your hosting provider) and set:

```
NEXT_PUBLIC_BEEHIIV_FORM_ID=<your-form-uuid>
```

Rebuild afterwards (`NEXT_PUBLIC_*` values are inlined at build time). The form's look
(title, button, colours, layout) is configured in the Beehiiv dashboard, not in this repo.

## Project layout

```
src/app/layout.tsx        fonts (next/font/google: Fraunces + Inter), metadata
src/app/page.tsx          page composition
src/app/privacy, terms    legal pages (templates, see below)
src/app/globals.css       Tailwind import, design tokens (@theme), breakpoints, small base styles
src/components/
  Header.tsx              nav
  Hero.tsx                headline, signup (Beehiiv embed), mock issue card
  ValueProps.tsx          "What's inside" cards
  SamplePreview.tsx       dark sample-issue section
  Audience.tsx            "Who it's for"
  CtaSection.tsx          orange call-to-action panel (Beehiiv embed)
  BeehiivEmbed.tsx        client component: Beehiiv embed loader + fine print
  LegalPage.tsx           shared shell for /privacy and /terms (placeholders live here)
  Faq.tsx                 accordion (native <details>)
  Footer.tsx
  SectionHead.tsx, Container.tsx, buttonStyles.ts   shared bits
```

## Legal pages

`/privacy` and `/terms` are **templates, not legal advice**; have them reviewed before launch.
Fill in the bracketed placeholders: `[CONTACT_EMAIL]` and `[JURISDICTION]` (constants in
`src/components/LegalPage.tsx`; update "Last updated" there too when the text changes).
The footer's "Contact" link is still a `#` placeholder.

## Styling notes

Tailwind v4 is configured CSS-first (no `tailwind.config.js`): design tokens live in the
`@theme` block in `src/app/globals.css` (`ink`, `muted`, `cream`, `line`, `accent`,
`accent-d`, `tint`, `dark`, `font-serif`, `font-sans`, `rounded-card`). The original's two
responsive breakpoints are custom variants: `tab:` (max-width 960px) and `mobile:`
(max-width 560px). Global CSS is limited to smooth scrolling, heading defaults, focus
outlines and the reduced-motion rule.
