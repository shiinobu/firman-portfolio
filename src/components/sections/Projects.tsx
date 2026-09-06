import {
    getFeaturedProjects,
    getSupportingProjects,
} from "@/data/projects";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
    const featuredProjects = getFeaturedProjects();
    const supportingProjects = getSupportingProjects();

    return (
        <section
            id="projects"
            className="border-y border-border bg-background-soft"
        >
            <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                <div className="max-w-[760px]">
                    <p className="font-mono text-sm font-medium tracking-[0.08em] text-primary uppercase">
                        Selected Work
                    </p>

                    <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                        Projects built around real engineering problems.
                    </h2>

                    <p className="mt-5 text-base leading-[1.7] text-justify text-foreground-secondary md:text-lg">
                        A selection of backend and full-stack projects focused on realtime
                        systems, transactional workflows, business logic, and maintainable
                        application architecture.
                    </p>
                </div>

                <div className="mt-16 space-y-20 md:mt-20 md:space-y-24">
                    {featuredProjects.map((project, index) => (
                        <FeaturedProject
                            key={project.slug}
                            project={project}
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </div>

                <div className="mt-24 border-t border-border pt-16 md:mt-32 md:pt-20">
                    <div className="max-w-[760px]">
                        <p className="font-mono text-xs font-medium tracking-[0.08em] text-foreground-muted uppercase">
                            Other Projects
                        </p>

                        <h3 className="mt-3 text-2xl leading-[1.3] font-semibold tracking-[-0.02em] text-foreground md:text-3xl">
                            More systems and applications.
                        </h3>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {supportingProjects.map((project) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}