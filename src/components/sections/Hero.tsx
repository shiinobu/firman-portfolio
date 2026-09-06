import Link from "next/link";
import Container from "@/components/layout/Container";

const primaryTechnologies = [
    "Go",
    "REST API",
    "PostgreSQL",
    "MySQL",
    "Docker",
];

export default function Hero() {
    return (
        <section className="flex min-h-[calc(100vh-64px)] items-center border-b border-border md:min-h-[calc(100vh-72px)]">
            <Container className="py-20 md:py-24 lg:py-30">
                <div className="max-w-[820px]">
                    {/* existing hero content */}
                    <p className="mb-6 font-mono text-sm font-medium tracking-[0.08em] text-primary uppercase">
                        Backend Developer
                    </p>

                    <h1 className="max-w-[800px] text-[40px] leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[64px]">
                        Building reliable backend systems with Go.
                    </h1>

                    <p className="mt-7 max-w-[720px] text-lg leading-[1.7] text-foreground-secondary sm:text-xl">
                        I build reliable backend systems with Go, focusing on well-structured
                        APIs, database-driven business logic, authentication, realtime
                        communication, and maintainable architecture.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="#projects"
                            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                        >
                            View Projects
                        </Link>

                        <Link
                            href="https://github.com/shiinobu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                        >
                            GitHub ↗
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-6">
                        {primaryTechnologies.map((technology, index) => (
                            <div key={technology} className="flex items-center gap-5">
                                <span className="font-mono text-sm text-foreground-muted">
                                    {technology}
                                </span>

                                {index < primaryTechnologies.length - 1 && (
                                    <span
                                        aria-hidden="true"
                                        className="text-border"
                                    >
                                        ·
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}