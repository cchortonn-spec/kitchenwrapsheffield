import type { MetadataRoute } from "next";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

import { SITE } from "@/lib/site";

const APP_DIR = join(process.cwd(), "src", "app");
const PAGE_FILE_PATTERN = /^page\.(tsx|ts|jsx|js)$/;

function collectPageRoutes(directory: string, baseRoute = ""): string[] {
  if (!existsSync(directory)) {
    return [];
  }

  const entries = readdirSync(directory, { withFileTypes: true });
  const routes = entries.some(
    (entry) => entry.isFile() && PAGE_FILE_PATTERN.test(entry.name)
  )
    ? [baseRoute]
    : [];

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const segment = entry.name;

    if (
      segment === "api" ||
      segment.startsWith("_") ||
      segment.startsWith("@") ||
      segment.includes("[") ||
      segment.includes("]")
    ) {
      continue;
    }

    const nextRoute =
      segment.startsWith("(") && segment.endsWith(")")
        ? baseRoute
        : `${baseRoute}/${segment}`;

    routes.push(...collectPageRoutes(join(directory, segment), nextRoute));
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = collectPageRoutes(APP_DIR).sort((a, b) => {
    if (a === "") return -1;
    if (b === "") return 1;

    return a.localeCompare(b);
  });

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/areas-covered/") ? 0.7 : 0.8,
  }));
}
