import { skillGroups } from "@/data/skills";

export default function TechStack() {
    return (
        <section
            id="stack"
            className="border-b border-border bg-background-soft"
        >
            <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
                <div className="mb-12 max-w-[720px]">
                    <p className="font-mono text-sm font-medium tracking-[0.08em] text-primary uppercase">
                        Technology
                    </p>

                    <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                        Tools I use to build backend systems.
                    </h2>

                    <p className="mt-5 text-base leading-[1.7] text-justify text-foreground-secondary md:text-lg">
                        My primary focus is backend engineering with Go, supported by
                        relational databases, containerized infrastructure, realtime
                        communication, and modern web technologies.
                    </p>
                </div>

                <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="bg-surface p-6"
                        >
                            <h3 className="font-mono text-xs font-medium tracking-[0.08em] text-foreground-muted uppercase">
                                {group.title}
                            </h3>

                            <ul className="mt-6 space-y-3">
                                {group.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="text-sm font-medium text-foreground"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}