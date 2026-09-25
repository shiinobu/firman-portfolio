import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";
import { renderOg } from "@/lib/og";

export const alt = "Project case study";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return renderOg({
    kicker: project.category,
    title: project.title,
    subtitle: project.tagline,
  });
}
