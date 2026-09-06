import Link from "next/link";
import type { Project } from "@/types/project";

import ProjectMeta from "./ProjectMeta";
import ProjectScreenshot from "./ProjectScreenshot";
import ProjectTags from "./ProjectTags";

type FeaturedProjectProps = {
  project: Project;
  reverse?: boolean;
};

export default function FeaturedProject({
  project,
  reverse = false,
}: FeaturedProjectProps) {
  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>
        <ProjectMeta category={project.category} />

        <h3 className="mt-4 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
          {project.title}
        </h3>

        <p className="mt-5 text-base leading-[1.7] text-justify text-foreground-secondary md:text-lg">
          {project.description}
        </p>

        {project.technicalHighlights.length > 0 && (
          <div className="mt-6 border-l-2 border-primary pl-4">
            <ul className="space-y-2">
              {project.technicalHighlights.slice(0, 3).map((highlight) => (
                <li
                  key={highlight}
                  className="font-mono text-xs leading-[1.6] text-foreground-muted"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6">
          <ProjectTags technologies={project.technologies} />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex min-h-12 items-center gap-2 font-mono text-xs font-medium tracking-[0.08em] text-primary transition-colors duration-200 hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            View Case Study
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center font-mono text-xs font-medium tracking-[0.08em] text-foreground-secondary transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary uppercase"
          >
            GitHub
            <span aria-hidden="true" className="ml-1.5">
              ↗
            </span>
          </Link>
        </div>
      </div>

      <div className={reverse ? "lg:order-1" : "lg:order-2"}>
        <ProjectScreenshot
          screenshot={project.screenshots[0]}
          priority={project.slug === "device-monitoring-system"}
        />
      </div>
    </article>
  );
}
