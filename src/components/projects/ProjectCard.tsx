import Link from "next/link";

import ProjectMeta from "@/components/projects/ProjectMeta";
import ProjectTags from "@/components/projects/ProjectTags";
import type { Project } from "@/types/project";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({
    project,
}: ProjectCardProps) {
    return (
        <article className="rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-primary">
            <ProjectMeta category={project.category} />

            <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-foreground">
                {project.title}
            </h3>

            <p className="mt-4 text-sm leading-[1.7] text-justify text-foreground-secondary">
                {project.tagline}
            </p>

            <div className="mt-6">
                <ProjectTags technologies={project.technologies} />
            </div>

            <div className="mt-7">
                <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-semibold text-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                    View Project →
                </Link>
            </div>
        </article>
    );
}