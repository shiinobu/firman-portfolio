import type { Metadata } from "next";

import { site } from "@/config/site";

type PageMetadataInput = {
  /** Leave out on the home page to use the default title. */
  title?: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

/**
 * Metadata fields such as openGraph and alternates are merged shallowly across
 * route segments, so every page has to define its own complete set. Sharing
 * them from the root layout would make every page canonicalise to the home page.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: PageMetadataInput): Metadata {
  const fullTitle = title
    ? `${title} | ${site.name}`
    : `${site.name} | ${site.role}`;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title: fullTitle,
      description,
      siteName: site.name,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
