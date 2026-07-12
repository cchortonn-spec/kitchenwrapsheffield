import type { MetadataRoute } from "next";
import { existsSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";

import { SITE } from "@/lib/site";

const appDirectory = join(process.cwd(), "src", "app");
const pageFilePattern = /^page\.(tsx|ts|jsx|js)$/;

function routeFromPageDirectory(directory: string): string | null {
  const relativeDirectory = relative(appDirectory, directory);

  if (!relativeDirectory) {
    return "";
  }

  const segments = relativeDirectory
    .split(sep)
    .filter(
      (segment) =>
        segment &&
        !segment.startsWith("_") &&
        !segment.startsWith("(") &&
        !segment.includes("[")
    );

  if (segments.length === 0) {
    return "";
  }

  return `/${segments.join("/")}`;
}

function discoverRoutes(directory = appDirectory): string[] {
  if (!existsSync(directory)) {
    return [];
  }

  const entries = readdirSync(directory, { withFileTypes: true });
  const hasPage = entries.some(
    (entry) => entry.isFile() && pageFilePattern.test(entry.name)
  );

  const nestedRoutes = entries.flatMap((entry) => {
    if (!entry.isDirectory() || entry.name === "api" || entry.name.startsWith("_")) {
      return [];
    }

    return discoverRoutes(join(directory, entry.name));
  });

  const currentRoute = hasPage ? routeFromPageDirectory(directory) : null;

  return [...(currentRoute === null ? [] : [currentRoute]), ...nestedRoutes];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Array.from(new Set(discoverRoutes())).sort((a, b) => {
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
