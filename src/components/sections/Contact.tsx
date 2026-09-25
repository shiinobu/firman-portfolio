import Container from "@/components/layout/Container";
import { ArrowUpRightIcon, DownloadIcon } from "@/components/ui/icons";
import { contactLinks } from "@/config/contact";
import { site } from "@/config/site";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-band text-on-band"
    >
      <Container className="py-20 md:py-28 lg:py-32">
        <h2
          id="contact-heading"
          className="flex items-center gap-3 text-sm font-medium text-on-band-2"
        >
          <span aria-hidden="true" className="size-2 bg-band-signal" />
          Contact
        </h2>

        <p className="mt-8 max-w-[24ch] text-title leading-[1] font-bold tracking-[-0.03em]">
          Open to fullstack engineer roles.
        </p>
        <p className="mt-5 max-w-[46ch] text-lg text-on-band-2">
          Email is the fastest way to reach me.
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-block break-all py-2 text-[length:clamp(1.5rem,4.6vw,3.75rem)] leading-tight font-semibold tracking-[-0.02em] underline decoration-band-signal decoration-2 underline-offset-[0.18em] transition-colors duration-150 hover:decoration-on-band"
        >
          {site.email}
        </a>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-1 border-t border-band-rule pt-6">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                {...(link.download ? { download: true } : {})}
                className="group inline-flex min-h-11 items-center gap-2 text-lg"
              >
                <span className="underline decoration-band-rule decoration-1 underline-offset-[0.22em] transition-colors duration-150 group-hover:decoration-on-band">
                  {link.label}
                </span>
                {link.external && (
                  <ArrowUpRightIcon className="size-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                )}
                {link.download && (
                  <DownloadIcon className="size-4 transition-transform duration-150 group-hover:translate-y-0.5" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
