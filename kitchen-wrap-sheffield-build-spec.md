# Kitchen Wrap Sheffield — Build Spec

Domain: **kitchenwrapsheffield.com**
Phone (virtual, diverts to Connor's mobile): **+44 7848 428975**
Email (Resend, diverts to Gmail): **hello@kitchenwrapsheffield.com**
Stack: Next.js + Supabase + Vercel + Namecheap DNS + Resend

---

## 1. Brand identity

**Name:** Kitchen Wrap Sheffield
**Tagline:** Your Kitchen, Transformed — Without the Rebuild
**One-line positioning:** A local Sheffield specialist that transforms tired kitchens in days, at a fraction of the cost of ripping one out and starting again.

**Tone of voice**
Warm, direct, plain-speaking Yorkshire trade tone. Talk like a good tradesperson talks to a homeowner on their doorstep — confident, no waffle, no corporate jargon, no hard sell. Short sentences. Real reassurance, not marketing fluff. Use "we" and "you," never "the company" or "our clients." A few lines to set the register:

- "Fed up looking at the same tired kitchen every morning? We can change that in a couple of days."
- "No skips. No dust sheets for a fortnight. No new kitchen loan."
- "We'll tell you straight if wrapping's not right for your kitchen — we'd rather be honest than take a job that won't last."

Avoid: "bespoke solutions," "market-leading," "cutting-edge," "unparalleled," any sentence a real Sheffield tradesperson wouldn't say out loud.

---

## 2. Visual design system

Deliberately different from WRPX's dark, neon, automotive look — this should feel warm, homely, trustworthy. Think "a good local kitchen fitter's website," not "vinyl wrap workshop."

**Colour palette**
| Role | Colour | Hex |
|---|---|---|
| Background | Warm off-white | `#F6F1E9` |
| Text (primary) | Warm charcoal | `#241F1A` |
| Brand accent (primary) | Burnt terracotta | `#C1592A` |
| Brand accent (secondary) | Deep sage | `#5B6B54` |
| Button / CTA | Terracotta on cream | `#C1592A` bg, `#F6F1E9` text |
| Borders / dividers | Warm grey | `#DCD3C4` |
| Success / trust ticks | Sage | `#5B6B54` |

**Typography**
- Headings: **Fraunces** (Google Fonts) — warm, characterful serif, bold weight. Gives a "craft" feel without looking corporate.
- Body: **Work Sans** (Google Fonts) — clean, readable, slightly warm sans-serif.
- Load both via `next/font/google`.

**Logo direction**
No full logo needed for launch — use a text wordmark: "Kitchen Wrap Sheffield" set in Fraunces Bold, terracotta on cream (or reversed on dark sections). Optional small mark: a simple single-line roller/brush-stroke icon before the wordmark. Keep it minimal — this is a lean build, not a rebrand exercise.

**Layout style**
Warm, generous white space, rounded corners (8–12px) on cards and buttons, soft drop shadows rather than hard borders, real photography over illustration wherever possible. Avoid anything that reads as "template SaaS site" — no generic gradient blobs, no stock corporate icons.

---

## 3. Site structure

**Nav (keep short):** Home · Services · Areas Covered · Pricing · Contact
Phone number + WhatsApp button visible top-right on every page.

**Pages for launch:**
1. Home
2. About
3. Services
4. Areas Covered
5. Pricing
6. Contact

Suburb pages, case studies, and blog content get added later once the core site is live — don't build them yet.

---

## 4. Page content

### Home

**Hero**
> ## Your Kitchen, Transformed — Without the Rebuild
> Vinyl wrapping gives your kitchen a brand new look in days, not weeks — at a fraction of the cost of replacing it. Serving Sheffield and the surrounding area.
>
> [Get a Free Quote] [Chat on WhatsApp]

**Trust bar** (small row under hero)
`★★★★★ Rated by Sheffield homeowners` · `Fully insured` · `Free no-obligation quotes` · `Usually done in 2–3 days`

**Why wrap, not replace (3-column section)**
- **Cost** — A full wrap typically costs a fraction of a new kitchen. Same transformation, without the five-figure bill.
- **Speed** — Most kitchens are wrapped in 2–3 days. No living out of your microwave for a month.
- **Mess** — No rip-out, no skip on the drive, no dust through the house. We work around your existing units.

**Services overview (3 cards, link to Services page)**
- **Kitchen Door Wrapping** — New doors and drawer fronts without replacing the carcasses.
- **Worktop Wrapping** — Refresh tired worktops with a durable, waterproof finish.
- **Full Kitchen Wrap** — Doors, worktops, and cupboards — a complete transformation, top to bottom.

**Recent work** (photo grid placeholder — swap in real Sheffield job photos as they come in; caption each with the area, e.g. "Grey matt wrap — Ecclesfield")

**Why choose us**
- Local to Sheffield, not a national call centre
- Straight-talking quotes — no hidden extras
- We tell you honestly if wrapping isn't the right fix for your kitchen
- Full range of finishes: matt, wood effect, stone effect, gloss

**Service area teaser**
> We cover Sheffield and the surrounding area, including Ecclesfield, Hillsborough, Fulwood, Dore, Crookes, Chapeltown, Mosborough, Handsworth, and Stocksbridge. [See all areas we cover →]

**Pricing teaser**
> Full kitchen wraps typically start from around £X,XXX depending on size and finish. [See a full price guide →]
*(Placeholder — swap in your real numbers before launch)*

**FAQ preview (3–4 questions, link to full FAQ if you build one later)**
- How long does a kitchen wrap last? — *[answer]*
- Will it look like a proper new kitchen? — *[answer]*
- Can you wrap worktops as well as doors? — *[answer]*
- Do you offer a guarantee? — *[answer]*

**Final CTA band**
> ## Ready to see your kitchen without the guesswork?
> Get a free, no-obligation quote — usually back to you within 24 hours.
> [Get a Free Quote] [Call 07848 428975]

**Footer**
Phone · WhatsApp · Email · quick nav links · service area line · small credit line: *"Installed by WRPX"* (small, footer only, not a banner)

---

### About

> ## About Kitchen Wrap Sheffield
> We're a Sheffield-based kitchen wrapping specialist. We started this because too many people were being quoted eye-watering sums for a full kitchen replacement when their units were still structurally sound — they just looked tired.
>
> Every job is quoted honestly. If your kitchen genuinely isn't a good candidate for wrapping, we'll tell you before you spend a penny.
>
> **How we work:**
> 1. Free survey and quote — usually within 24 hours
> 2. We agree finish, colour, and timeline with you
> 3. We protect your kitchen and get to work — most jobs done in 2–3 days
> 4. Final walkthrough — we don't consider it finished until you're happy

---

### Services

**Kitchen Door Wrapping**
> Give every door and drawer front a completely new finish without replacing a single carcass. Available in matt, gloss, wood effect, and stone effect finishes.

**Worktop Wrapping**
> A durable, waterproof vinyl finish applied directly to your existing worktop. Heat and scratch resistant options available.

**Full Kitchen Wrap**
> Doors, drawer fronts, and worktops wrapped as one complete package — the full transformation, done in one visit.

**Finishes available:** Matt · Gloss · Wood effect · Stone effect · Concrete effect

---

### Areas Covered

> ## Areas We Cover
> Based in Sheffield, we cover the whole city and the surrounding area:
>
> Sheffield City Centre · Ecclesfield · Hillsborough · Fulwood · Dore · Crookes · Chapeltown · Mosborough · Handsworth · Stocksbridge · Woodseats · Nether Edge · Totley · Beauchief
>
> Not seeing your area? [Get in touch] — we cover most of South Yorkshire.

*(This becomes a hub page — individual suburb pages link in from here once built.)*

---

### Pricing

> ## Kitchen Wrap Pricing Guide
> Every kitchen's different, so treat these as a starting guide — you'll get an exact price after a free survey.

| Job | Typical price |
|---|---|
| Door & drawer front wrap (per unit) | £XX–£XX |
| Full kitchen door wrap (average kitchen) | £X,XXX–£X,XXX |
| Worktop wrap | £XXX–£XXX |
| Full kitchen wrap (doors + worktops) | £X,XXX–£X,XXX |

*(Placeholder figures — replace with your real pricing before this page goes live.)*

**What affects the price:** number of doors/drawers, worktop length, finish chosen, current condition of units.

---

### Contact

> ## Get a Free Quote
> Fill in the form below or give us a call — most quotes are turned around within 24 hours.

Form fields: Name, Phone, Email, Postcode, Message, optional photo upload
Direct contact: Phone (click to call) · WhatsApp (click to chat) · Email
Opening hours block

---

## 5. Lead routing & notifications

- Contact form submits via **Resend**.
- Sending address: `hello@kitchenwrapsheffield.com`
- Delivered to: Connor's existing Gmail inbox (same inbox used for other sites)
- **Important:** because multiple sites' enquiries land in one inbox, every email must clearly identify its source. Set the subject line to:
  `[Kitchen Wrap Sheffield] New enquiry from {name}`
  And include a line at the top of the email body: `Site: kitchenwrapsheffield.com`
- Phone number `+44 7848 428975` is a virtual number diverting to Connor's mobile — no build action needed beyond using it as the click-to-call number sitewide.
- **WhatsApp button:** check whether this virtual number is WhatsApp-enabled before wiring up the WhatsApp click-to-chat button. If it isn't, use the existing WRPX WhatsApp Business number for that button instead, and flag this back in chat so we keep track of which number is doing what across sites.

---

## 6. Analytics & tracking

No custom dashboard for this site for now — skip that build step entirely. Just get proper tracking in place:

- **Google Analytics 4** — new property (or new data stream if you want it under one umbrella account), verified on kitchenwrapsheffield.com
- **Google Tag Manager** — container on this domain to manage the events below without code changes later
- **Google Search Console** — verify the domain property
- **Bing Webmaster Tools** — verify (bing.com is already a real referral source on wrpx.co.uk, worth doing from day one here too)
- **Microsoft Clarity** — session recordings/heatmaps, same as used on other builds

**GA4 custom events to fire (via GTM or direct gtag calls):**
- `phone_click`
- `whatsapp_click`
- `email_click`
- `form_submit`
- `quote_request` (if a separate quote CTA exists from the general contact form)

**Schema markup (JSON-LD):**
- `LocalBusiness` / `HomeAndConstructionBusiness` — name, phone, address/service area, opening hours
- `Service` schema for each service listed
- `FAQPage` schema for the FAQ section
- `BreadcrumbList` on all non-home pages
- `Organization` schema linking to socials if/when set up

**Technical SEO basics:**
- `robots.txt` allowing full crawl
- Auto-generated `sitemap.xml`
- Open Graph + Twitter card meta tags on every page
- Optimised images via `next/image`, self-hosted fonts via `next/font`

---

## 7. Build notes for Cursor

- New standalone Next.js repo (clone component library/patterns from WRPX for speed, but keep this as its own git repo and Vercel project)
- New Vercel project, custom domain `kitchenwrapsheffield.com` pointed via Namecheap DNS
- Content can live in Supabase (own table, or shared table with a `site` column if you want everything in one place — doesn't affect front-end output either way)
- No dashboard, no cross-site analytics view — just clean GA4/GTM/Search Console/Clarity on this domain
- Footer credit line: small text, "Installed by WRPX" — not linked prominently, not in nav, not on homepage hero
