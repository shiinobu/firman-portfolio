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
        <article
            className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
        >
            <ProjectScreenshot
                screenshot={project.screenshots[0]}
                priority={project.slug === "device-monitoring-system"}
            />

            <div>
                <ProjectMeta category={project.category} />

                <h3 className="mt-4 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                    {project.title}
                </h3>

                <p className="mt-5 text-base leading-[1.7] text-justify text-foreground-secondary md:text-lg">
                    {project.description}
                </p>

                <div className="mt-6">
                    <ProjectTags technologies={project.technologies} />
                </div>

                {project.technicalHighlights.length > 0 && (
                    <div className="mt-6 border-l-2 border-primary pl-4">
                        <p className="font-mono text-xs leading-[1.6] text-foreground-muted">
                            {project.technicalHighlights.slice(0, 3).join(" · ")}
                        </p>
                    </div>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex min-h-12 items-center text-sm font-semibold text-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                        View Case Study
                        <span aria-hidden="true" className="ml-2">
                            →
                        </span>
                    </Link>

                    <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center text-sm font-semibold text-foreground-secondary transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                        GitHub
                        <span aria-hidden="true" className="ml-1.5">
                            ↗
                        </span>
                    </Link>
                </div>
            </div>
        </article>
    );
}