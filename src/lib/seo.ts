import type { Metadata } from "next";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

/** Build title/description/canonical + matching OG/Twitter from one object. */
export function pageMeta({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
    },
    twitter: {
      title,
      description,
    },
  };
}
