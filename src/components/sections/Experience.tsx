import { experiences } from "@/data/experience";

export default function Experience() {
    return (
        <section
            id="experience"
            className="border-b border-border bg-background"
        >
            <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                <div className="mb-16 max-w-[720px]">
                    <p className="font-mono text-sm font-medium tracking-[0.08em] text-primary uppercase">
                        Experience
                    </p>

                    <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                        Engineering experience and hands-on work.
                    </h2>

                    <p className="mt-5 text-base leading-[1.7] text-justify text-foreground-secondary md:text-lg">
                        Experience building backend systems, APIs, and business-driven
                        applications across different technical environments and domains.
                    </p>
                </div>

                <div className="divide-y divide-border">
                    {experiences.map((experience) => (
                        <article
                            key={`${experience.company}-${experience.role}-${experience.period}`}
                            className="grid gap-8 py-10 first:pt-0 last:pb-0 lg:grid-cols-[220px_1fr] lg:gap-12"
                        >
                            <div>
                                <p className="font-mono text-xs font-medium tracking-[0.08em] text-foreground-muted">
                                    {experience.period}
                                </p>
                            </div>

                            <div className="max-w-[760px]">
                                <h3 className="text-xl font-semibold tracking-[-0.02em] text-foreground md:text-2xl">
                                    {experience.role}
                                </h3>

                                <p className="mt-1 text-sm font-medium text-primary">
                                    {experience.company}
                                </p>

                                <p className="mt-5 text-base leading-[1.7] text-justify text-foreground-secondary">
                                    {experience.description}
                                </p>

                                <ul className="mt-6 space-y-3">
                                    {experience.responsibilities.map((responsibility) => (
                                        <li
                                            key={responsibility}
                                            className="flex gap-3 text-sm leading-[1.7] text-foreground-secondary"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-primary"
                                            />

                                            <span className="text-justify">
                                                {responsibility}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <ul className="mt-6 flex flex-wrap gap-2">
                                    {experience.technologies.map((technology) => (
                                        <li
                                            key={technology}
                                            className="rounded-md border border-border bg-background-soft px-3 py-1.5 font-mono text-xs text-foreground-muted"
                                        >
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}