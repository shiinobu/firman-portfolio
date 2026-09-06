import Link from "next/link";
import type { Project } from "@/types/project";
import ProjectMeta from "./ProjectMeta";
import ProjectTags from "./ProjectTags";

type ProjectCardProps = {
    project: Project;
};

export default function ProjectCard({
    project,
}: ProjectCardProps) {
    return (
        <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-primary md:p-7">
            <ProjectMeta category={project.category} />

            <h3 className="mt-4 text-2xl leading-[1.3] font-semibold tracking-[-0.02em] text-foreground">
                {project.title}
            </h3>

            <p className="mt-4 text-base leading-[1.7] text-justify text-foreground-secondary">
                {project.tagline}
            </p>

            <div className="mt-6">
                <ProjectTags technologies={project.technologies} />
            </div>

            <div className="mt-auto pt-8">
                <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex min-h-12 items-center text-sm font-semibold text-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                    View Project
                    <span
                        aria-hidden="true"
                        className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                        →
                    </span>
                </Link>
            </div>
        </article>
    );
}