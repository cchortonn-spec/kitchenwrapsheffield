import type { MetadataRoute } from "next";

import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Kitchen Wrap",
    description:
      "Vinyl kitchen wrapping in Sheffield. Transform your kitchen in 2–3 days.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9F7F4",
    theme_color: "#3A5244",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
