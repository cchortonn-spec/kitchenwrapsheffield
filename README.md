# Kitchen Wrap Sheffield

Local kitchen vinyl wrapping website for Sheffield and surrounding areas.

**Domain:** kitchenwrapsheffield.com

## Quick start (beginner-friendly)

1. Open Terminal in this folder.
2. Install dependencies (only needed once, or after pulling changes):

```bash
npm install
```

3. Copy the example env file and fill in your keys when you have them:

```bash
cp .env.example .env.local
```

4. Start the local site:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services
- `/areas-covered` — Areas Covered
- `/pricing` — Pricing
- `/contact` — Contact form

## Environment variables

See `.env.example`:

- `RESEND_API_KEY` — sends contact form emails
- `CONTACT_TO_EMAIL` — where enquiries land (your Gmail)
- `CONTACT_FROM_EMAIL` — must be a verified Resend sender for `kitchenwrapsheffield.com`
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager container
- `NEXT_PUBLIC_CLARITY_ID` — Microsoft Clarity project ID

## Deploy

Connect this folder to a new Vercel project, add the env vars there, then point Namecheap DNS for `kitchenwrapsheffield.com` to Vercel.
