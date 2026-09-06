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
        title: `${project.title} — Firman Aprilian Sugiharto`,
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
                <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
                        <div>
                            <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
                                The Problem
                            </p>

                            <p className="mt-5 text-base leading-[1.8] text-justify text-foreground-secondary md:text-lg">
                                {project.problem}
                            </p>
                        </div>

                        <div>
                            <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
                                The Solution
                            </p>

                            <p className="mt-5 text-base leading-[1.8] text-justify text-foreground-secondary md:text-lg">
                                {project.solution}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="bg-background">
                <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                    <div className="max-w-[760px]">
                        <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
                            Key Features
                        </p>

                        <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                            What the system provides.
                        </h2>
                    </div>

                    <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {project.features.map((feature) => (
                            <li
                                key={feature}
                                className="rounded-xl border border-border bg-surface p-5 text-sm leading-[1.6] text-foreground-secondary"
                            >
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Technical Highlights */}
            <section className="bg-background">
                <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                    <div className="max-w-[760px]">
                        <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
                            Technical Highlights
                        </p>

                        <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                            Engineering details that matter.
                        </h2>
                    </div>

                    <ul className="mt-12 grid gap-x-12 gap-y-5 md:grid-cols-2">
                        {project.technicalHighlights.map((highlight) => (
                            <li
                                key={highlight}
                                className="flex gap-4 border-b border-border pb-5 text-base leading-[1.6] text-foreground-secondary"
                            >
                                <span
                                    aria-hidden="true"
                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                                />
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Architecture */}
            <section className="border-y border-border bg-background-soft">
                <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                    <div className="max-w-[760px]">
                        <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
                            System Architecture
                        </p>

                        <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                            How the system works.
                        </h2>

                        <p className="mt-5 text-base leading-[1.8] text-justify text-foreground-secondary md:text-lg">
                            {project.architecture}
                        </p>
                    </div>

                    {project.architectureFlow && (
                        <ProjectArchitecture steps={project.architectureFlow} />
                    )}
                </div>
            </section>

            {/* Monitoring Flow */}
            {project.monitoringFlow && (
                <section className="bg-background">
                    <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-20">
                            <div>
                                <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
                                    Monitoring Flow
                                </p>
                            </div>

                            <div className="max-w-[820px]">
                                <h2 className="text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                                    From heartbeat to realtime status.
                                </h2>

                                <ProjectMonitoringFlow steps={project.monitoringFlow} />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Implementation */}
            {project.implementation && (
                <section className="border-y border-border bg-background-soft">
                    <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                        <div className="max-w-[760px]">
                            <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
                                Technical Implementation
                            </p>

                            <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                                Engineering behind the system.
                            </h2>
                        </div>

                        <div className="mt-12 grid gap-5 md:grid-cols-2">
                            {project.implementation.map((item) => (
                                <article
                                    key={item.title}
                                    className="rounded-xl border border-border bg-surface p-6 md:p-7"
                                >
                                    <h3 className="text-lg font-semibold text-foreground">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-[1.7] text-justify text-foreground-secondary md:text-base">
                                        {item.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Project Transtition */}
            {project.stateTransitions && (
                <section className="bg-background">
                    <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-20">
                            <div>
                                <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
                                    Business Workflow
                                </p>
                            </div>

                            <div className="max-w-[820px]">
                                <h2 className="text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                                    Controlled disbursement state transitions.
                                </h2>

                                <p className="mt-5 text-base leading-[1.8] text-justify text-foreground-secondary md:text-lg">
                                    Disbursement records are not treated as unrestricted CRUD resources.
                                    Each state-changing operation is validated against the current
                                    status and the permissions of the requesting user.
                                </p>

                                <ProjectStateTransitions
                                    transitions={project.stateTransitions}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Challenges */}
            <section className="border-y border-border bg-background-soft">
                <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                    <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-20">
                        <div>
                            <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
                                Challenges
                            </p>
                        </div>

                        <div className="max-w-[820px]">
                            <ul className="space-y-5">
                                {project.challenges.map((challenge, index) => (
                                    <li
                                        key={challenge}
                                        className="flex gap-5 border-b border-border pb-5"
                                    >
                                        <span className="font-mono text-xs text-foreground-muted">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="text-base leading-[1.7] text-justify text-foreground-secondary md:text-lg">
                                            {challenge}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshots */}
            {project.screenshots.length > 0 && (
                <section className="bg-background">
                    <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                        <div className="max-w-[760px]">
                            <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
                                Screenshots
                            </p>

                            <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                                The system in action.
                            </h2>
                        </div>

                        <div className="mt-12 space-y-8">
                            {project.screenshots.map((screenshot, index) => (
                                <ProjectScreenshot
                                    key={screenshot.src}
                                    screenshot={screenshot}
                                    priority={index === 0}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Tech Stack */}
            <section className="border-y border-border bg-background-soft">
                <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                    <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-20">
                        <div>
                            <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
                                Tech Stack
                            </p>
                        </div>

                        <div>
                            <ProjectTags technologies={project.technologies} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Result */}
            <section className="bg-background">
                <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                    <div className="mx-auto max-w-[820px] text-center">
                        <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
                            Result
                        </p>

                        <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                            What this project demonstrates.
                        </h2>

                        <p className="mt-6 text-base leading-[1.8] text-justify text-foreground-secondary md:text-lg">
                            {project.result}
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-3">
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                            >
                                View on GitHub ↗
                            </Link>

                            <Link
                                href="/#projects"
                                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                            >
                                More Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}