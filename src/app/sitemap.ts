import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://firman-aprilian.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        ...projects.map((project) => ({
            url: `${siteUrl}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: project.featured ? 0.9 : 0.7,
        })),
    ];
}
