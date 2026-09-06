import Link from "next/link";

import ProjectMeta from "@/components/projects/ProjectMeta";
import ProjectScreenshot from "@/components/projects/ProjectScreenshot";
import ProjectTags from "@/components/projects/ProjectTags";
import type { Project } from "@/types/project";

type FeaturedProjectProps = {
    project: Project;
    reverse?: boolean;
};

export default function FeaturedProject({
    project,
    reverse = false,
}: FeaturedProjectProps) {
    return (
        <article className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className={reverse ? "lg:order-2" : ""}>
                <ProjectScreenshot
                    src={project.screenshots[0]}
                    alt={`${project.title} project preview`}
                />
            </div>

            <div className={reverse ? "lg:order-1" : ""}>
                <ProjectMeta category={project.category} />

                <h3 className="mt-3 text-2xl leading-[1.3] font-semibold tracking-[-0.02em] text-foreground md:text-3xl">
                    {project.title}
                </h3>

                <p className="mt-5 text-base leading-[1.7] text-justify text-foreground-secondary">
                    {project.description}
                </p>

                {project.slug === "device-monitoring-system" && (
                    <p className="mt-5 font-mono text-xs leading-[1.6] text-foreground-muted">
                        10s heartbeat · 5s monitoring · 30s offline threshold
                    </p>
                )}

                <div className="mt-6">
                    <ProjectTags technologies={project.technologies} />
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-5">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="text-sm font-semibold text-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                        View Case Study →
                    </Link>

                    <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground-secondary transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                        GitHub ↗
                    </Link>
                </div>
            </div>
        </article>
    );
}