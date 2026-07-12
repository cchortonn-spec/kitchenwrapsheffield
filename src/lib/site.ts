export const SITE = {
  name: "Kitchen Wrap Sheffield",
  domain: "kitchenwrapsheffield.com",
  url: "https://kitchenwrapsheffield.com",
  tagline: "Your Kitchen, Transformed — Without the Rebuild",
  email: "hello@kitchenwrapsheffield.com",
  phoneDisplay: "07848 428975",
  phoneTel: "+447848428975",
  whatsappUrl: "https://wa.me/447398395417",
  openingHours: [
    { days: "Monday – Friday", hours: "8:00am – 6:00pm" },
    { days: "Saturday", hours: "9:00am – 1:00pm" },
    { days: "Sunday", hours: "Closed" },
  ],
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/areas-covered", label: "Areas Covered" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

export const AREAS = [
  {
    name: "Sheffield City Centre",
    blurb:
      "From Kelham Island flats to city-centre apartments — we wrap kitchens across the heart of Sheffield without the rebuild disruption.",
  },
  {
    name: "Ecclesfield",
    blurb:
      "Regular work across Ecclesfield and the Chapeltown corridor, one of Sheffield's busiest residential belts.",
  },
  {
    name: "Hillsborough",
    href: "/areas-covered/hillsborough",
    blurb:
      "Near Hillsborough Park and the stadium side of town — a popular spot for door and worktop refreshes.",
  },
  {
    name: "Fulwood",
    blurb:
      "West Sheffield homes around Fulwood Road and the Rivelin Valley — quiet installs, no skip on the drive.",
  },
  {
    name: "Dore",
    blurb:
      "Serving Dore and the south-west edge of the city, including homes looking over towards the Peak District.",
  },
  {
    name: "Crookes",
    blurb:
      "Terrace kitchens and family homes around Crookes and Walkley — wrapped in days, not weeks.",
  },
  {
    name: "Chapeltown",
    blurb:
      "North of the city towards Chapeltown and High Green — we cover this stretch of South Yorkshire regularly.",
  },
  {
    name: "Mosborough",
    blurb:
      "South-east Sheffield around Mosborough and nearby estates — free surveys and straight-talking quotes.",
  },
  {
    name: "Handsworth",
    blurb:
      "East Sheffield kitchens from Handsworth through to Darnall and surrounding streets.",
  },
  {
    name: "Stocksbridge",
    blurb:
      "Out towards Stocksbridge and Deepcar — still local for us, still the same 2–3 day turnaround.",
  },
  {
    name: "Woodseats",
    blurb:
      "Along Chesterfield Road and Woodseats — a short hop from the city for kitchen door and full wraps.",
  },
  {
    name: "Nether Edge",
    blurb:
      "Victorian and period kitchens around Nether Edge and Sharrow — refreshed without ripping out the carcasses.",
  },
  {
    name: "Totley",
    blurb:
      "South-west towards Totley and Bradway — Peak fringe homes, same honest quoting process.",
  },
  {
    name: "Beauchief",
    blurb:
      "Beauchief and Abbeydale Road corridor — convenient for us and for homeowners who want a quick transformation.",
  },
] as const;

export const SERVICES = [
  {
    slug: "kitchen-door-wrapping",
    title: "Kitchen Door Wrapping",
    short:
      "New doors and drawer fronts without replacing the carcasses.",
    description:
      "Give every door and drawer front a completely new finish without replacing a single carcass. Available in matt, gloss, wood effect, and stone effect finishes — ideal for Sheffield kitchens that are solid underneath but look tired.",
  },
  {
    slug: "worktop-wrapping",
    title: "Worktop Wrapping",
    short:
      "Refresh tired worktops with a durable, waterproof finish.",
    description:
      "A durable, waterproof vinyl finish applied directly to your existing worktop. Heat and scratch resistant options available — a practical alternative to ripping out and replacing worktops across Sheffield homes.",
  },
  {
    slug: "full-kitchen-wrap",
    title: "Full Kitchen Wrap",
    short:
      "Doors, worktops, and cupboards — a complete transformation.",
    description:
      "Doors, drawer fronts, and worktops wrapped as one complete package — the full transformation, done in one visit. Most Sheffield full wraps are finished in 2–3 days.",
  },
] as const;

export const FINISHES = [
  "Matt",
  "Gloss",
  "Wood effect",
  "Stone effect",
  "Concrete effect",
] as const;

export const HOME_FAQS = [
  {
    question: "How long does a kitchen wrap last?",
    answer:
      "A professionally fitted vinyl wrap typically lasts 10–15 years with normal kitchen use. We use quality films designed for high-wear surfaces, so they stand up to everyday cooking, cleaning, and family life.",
  },
  {
    question: "Will it look like a proper new kitchen?",
    answer:
      "Yes — when it's done properly. Edges are finished cleanly, doors close the same way, and modern matt, wood, and stone finishes look like a real refit. We'll be honest if your units aren't a good candidate.",
  },
  {
    question: "Can you wrap worktops as well as doors?",
    answer:
      "We can. Worktop wrapping uses a tougher, waterproof film with heat and scratch resistant options. It can be done on its own or as part of a full kitchen wrap.",
  },
  {
    question: "Do you offer a guarantee?",
    answer:
      "Yes. Every job comes with a workmanship guarantee. We'll talk you through the cover when we quote — no fine print surprises.",
  },
] as const;

export const PRICING_FAQS = [
  {
    question: "Why don't you publish exact kitchen wrap prices?",
    answer:
      "Every Sheffield kitchen is a different size, layout, and condition. A small flat near the city centre isn't the same job as a large family kitchen in Fulwood. The ranges below get you in the ballpark — your free survey locks in an exact figure.",
  },
  {
    question: "Is a free survey really free?",
    answer:
      "Yes. No call-out fee, no obligation. We look at your units, talk through finishes, and give you a clear price — usually within 24 hours.",
  },
  {
    question: "What's included in a full kitchen wrap price?",
    answer:
      "Typically doors, drawer fronts, and worktops as agreed on the quote, plus preparation, fitting, and a final walkthrough. We'll spell out exactly what's included before you book.",
  },
] as const;
