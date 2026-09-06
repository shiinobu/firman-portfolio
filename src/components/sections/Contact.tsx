import Link from "next/link";

const contactLinks = [
    {
        label: "GitHub",
        href: "https://github.com/shiinobu",
        external: true,
    },
    {
        label: "Email",
        href: "mailto:firman.apriliann@gmail.com",
        external: false,
    },
    {
        label: "Phone",
        href: "tel:+6285117000255",
        external: false,
    },
] as const;

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-background"
        >
            <div className="mx-auto max-w-[1200px] px-5 py-[72px] md:px-8 md:py-24 lg:px-10 lg:py-[120px]">
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
                            <Link
                                key={link.label}
                                href={link.href}
                                {...(link.external
                                    ? {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                    }
                                    : {})}
                                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                            >
                                {link.label}
                                {link.external && " ↗"}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}