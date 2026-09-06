import Section from "@/components/layout/Section";
import { contactLinks } from "@/config/contact";

export default function Contact() {
    return (
        <Section id="contact" className="bg-background">
            <div className="max-w-[760px]">
                <p className="font-mono text-sm font-medium tracking-[0.08em] text-primary uppercase">
                    Contact
                </p>

                <h2 className="mt-3 text-3xl leading-[1.15] font-bold tracking-[-0.02em] text-foreground md:text-4xl">
                    Let’s build something reliable.
                </h2>

                <p className="mt-5 text-base leading-[1.7] text-justify text-foreground-secondary md:text-lg">
                    I’m open to discussing backend engineering opportunities, software
                    projects, technical challenges, and opportunities to build reliable
                    systems together.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    {contactLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            {...(link.external
                                ? {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                }
                                : {})}
                            className={
                                link.primary
                                    ? "inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                                    : "inline-flex min-h-12 items-center justify-center rounded-lg border border-border px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                            }
                        >
                            {link.label}
                            {link.external && " ↗"}
                        </a>
                    ))}
                </div>
            </div>
        </Section>
    );
}
