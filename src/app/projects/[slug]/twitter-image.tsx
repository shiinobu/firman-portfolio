import { projects } from "@/data/projects";

import Image from "./opengraph-image";

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

export default Image;
