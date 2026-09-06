import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectScreenshot from "@/components/projects/ProjectScreenshot";
import ProjectTags from "@/components/projects/ProjectTags";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectArchitecture from "@/components/projects/ProjectArchitecture";
import ProjectMonitoringFlow from "@/components/projects/ProjectMonitoringFlow";
import ProjectStateTransitions from "@/components/projects/ProjectStateTransitions";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({
    params,
}: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description,
    };
}

export default async function ProjectPage({
    params,
}: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main>
            {/* Hero */}
            <section className="border-b border-border bg-background">
                <div className="mx-auto max-w-[1200px] px-5 py-20 md:px-8 md:py-28 lg:px-10 lg:py-32">
                    <div className="max-w-[900px]">
                        <Link
                            href="/#projects"
                            className="inline-flex items-center font-mono text-xs font-medium tracking-[0.08em] text-foreground-muted uppercase transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                        >
                            ← Back to Projects
                        </Link>

                        <p className="mt-12 font-mono text-sm font-medium tracking-[0.08em] text-primary uppercase">
                            {project.category}
                        </p>

                        <h1 className="mt-4 text-4xl leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[64px]">
                            {project.title}
                        </h1>

                        <p className="mt-7 max-w-[800px] text-lg leading-[1.7] text-foreground-secondary sm:text-xl">
                            {project.tagline}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                            >
                                GitHub ↗
                            </Link>

                            {project.demo && (
                                <Link
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                                >
                                    Live Demo ↗
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="bg-background">
                <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                    <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-20">
                        <div>
                            <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
                                Overview
                            </p>
                        </div>

                        <div className="max-w-[820px]">
                            <p className="text-lg leading-[1.8] text-justify text-foreground-secondary md:text-xl">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem & Solution */}
            <section className="border-y border-border bg-background-soft">