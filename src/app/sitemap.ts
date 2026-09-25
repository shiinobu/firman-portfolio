import type { MetadataRoute } from "next";

import { site } from "@/config/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: site.url, lastModified },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified,
    })),
  ];
}
