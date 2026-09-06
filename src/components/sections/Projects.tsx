import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    const featuredProjects = projects.filter((project) => project.featured);
    const supportingProjects = projects.filter(
        (project) => !project.featured,
    );

    return (
        <section
            id="projects"
            className="border-b border-border bg-background"
        >
            <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                <div className="mb-16 max-w-[720px]">
                    <p className="font-mono text-sm font-medium tracking-[0.08em] text-primary uppercase">
                        Selected Work
                    </p>

                    <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                        Projects built around real engineering problems.
                    </h2>

                    <p className="mt-5 text-base leading-[1.7] text-justify text-foreground-secondary md:text-lg">
                        A selection of backend systems and applications demonstrating
                        realtime communication, transactional business logic, API design,
                        database systems, and maintainable architecture.
                    </p>
                </div>

                <div className="space-y-24 lg:space-y-32">
                    {featuredProjects.map((project, index) => (
                        <FeaturedProject
                            key={project.slug}
                            project={project}
                            reverse={index % 2 === 1}
                        />
                    ))}
                </div>

                {supportingProjects.length > 0 && (
                    <div className="mt-32">
                        <div className="mb-8">
                            <p className="font-mono text-xs font-medium tracking-[0.08em] text-foreground-muted uppercase">
                                Other Projects
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {supportingProjects.map((project) => (
                                <ProjectCard
                                    key={project.slug}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}