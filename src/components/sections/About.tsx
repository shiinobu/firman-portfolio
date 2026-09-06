import Section from "@/components/layout/Section";

const engineeringFocus = [
    "API Design",
    "Database Systems",
    "Authentication & Authorization",
    "Realtime Communication",
    "Business Logic",
    "Maintainable Architecture",
    "Testing",
    "CI/CD",
];

export default function About() {
    return (
        <Section id="about" className="bg-background">
            {/* existing About content */}
            <div className="mb-12 max-w-[720px]">
                <p className="font-mono text-sm font-medium tracking-[0.08em] text-primary uppercase">
                    About
                </p>

                <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                    Building backend systems with purpose.
                </h2>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
                <div className="max-w-[680px] space-y-5 text-justify text-base leading-[1.7] text-foreground-secondary md:text-lg">
                    <p>
                        I’m a Backend Developer focused on building reliable APIs and
                        backend systems with Go.
                    </p>

                    <p>
                        I enjoy turning real-world workflows and business requirements
                        into structured, maintainable software. My work focuses on REST
                        API development, database-driven applications, authentication and
                        authorization, realtime communication, and clean backend
                        architecture.
                    </p>

                    <p>
                        My primary stack includes Go, PostgreSQL, MySQL, and Docker, with
                        additional experience in PHP/Laravel and modern frontend
                        technologies such as React and Next.js.
                    </p>

                    <p>
                        I’m particularly interested in backend systems where reliability,
                        clear architecture, and well-defined business logic matter — from
                        transactional APIs to realtime monitoring systems.
                    </p>

                    <p>
                        I continuously improve my engineering practices through
                        hands-on projects, testing, CI, and exploring better ways to
                        design and maintain backend systems.
                    </p>
                </div>

                <div>
                    <div className="border-t border-border pt-5">
                        <p className="font-mono text-xs font-medium tracking-[0.08em] text-foreground-muted uppercase">
                            Engineering Focus
                        </p>

                        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                            {engineeringFocus.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 text-sm text-foreground-secondary"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="size-1.5 shrink-0 rounded-full bg-primary"
                                    />

                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
}