# handyman

One-page advertising site for Shlomi Hagami (שלומי הגמי), handyman. Hebrew by default with an
English toggle, RTL/LTR aware, responsive, and built around a floating WhatsApp button.

Vite + React + TypeScript. No UI framework — the whole visual system lives in `src/styles.css`.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the production build locally
```

## Editing the content

Everything a non-developer needs to change is in **`src/content.ts`**. Nothing else needs touching.

| What | Where |
| --- | --- |
| Phone, WhatsApp number, email | `CONTACT` at the top |
| YouTube videos | `VIDEOS` — the array of video IDs |
| Name, tagline, services, reviews, hours, service area | `CONTENT.he` and `CONTENT.en` |

**Phone fields.** `phone` is what the dial button uses, `phoneDisplay` is what visitors read, and
`whatsapp` is the international form with no `+` and no leading zero — `972503808067`.

**YouTube IDs** are the part after `v=` in the URL. For
`https://www.youtube.com/watch?v=dQw4w9WgXcQ` the ID is `dQw4w9WgXcQ`. Videos load only when
clicked, so adding more of them costs nothing on page load.

**Both languages.** Every text change should be made in `CONTENT.he` *and* `CONTENT.en`, or the
English toggle will show stale copy.

### Adding a photo

`CONTACT.photo` is empty, so the site is currently text-only. Save an image into `public/` and
point at it — `photo: '/shlomi.jpg'` — and it appears in two places at once: a framed portrait
beside the name in the hero, and a round avatar above the contact details. Empty string turns both
back off. Use a solo shot: anyone else in the frame ends up on a public page.

### Placeholders still to replace

The name and phone number are real. These are not, and should be swapped before the site is
handed to real customers:

- `CONTACT.email` — currently `shlomi@example.com`
- `VIDEOS` — three sample YouTube IDs
- `CONTENT.*.reviews.items` — four written-in sample reviews
- `CONTENT.*.hero.stats` — years of experience, homes per year, response time
- `CONTENT.*.contact.area` and `.hours` — service area and opening hours

## Design

The signature element is the measuring rail pinned to the right edge on desktop: real tick marks,
section labels, and a fill that tracks scroll depth — the page is measured the way a handyman
measures before cutting. On screens under 980px it collapses to a thin progress bar under the
header.

Palette is galvanized steel (`--ground`) and blueprint navy (`--ink`) with safety orange
(`--accent`) as the single accent; WhatsApp keeps its own official green so the button reads as
the utility it is. Type is Suez One for display, Assistant for body, IBM Plex Mono for anything
that reads as a measurement. All tokens are at the top of `src/styles.css`.

The floating WhatsApp button is `position: fixed` rather than `absolute` — `absolute` would scroll
away with the page instead of staying put.

## Deploying

Pushes to `main` deploy automatically once the repo is linked to Vercel. Manually:

```bash
npx vercel        # preview deployment
npx vercel --prod # production
```
