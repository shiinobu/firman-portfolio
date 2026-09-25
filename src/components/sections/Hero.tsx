import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { DownloadIcon } from "@/components/ui/icons";
import { site } from "@/config/site";

const facts = [
  {
    label: "Stack",
    value: "Go, TypeScript, Next.js, PostgreSQL, MySQL, WebSocket, Docker",
  },
  { label: "Focus", value: "APIs, databases, realtime updates" },
] as const;

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="pt-14 pb-14 md:pt-20 md:pb-20 lg:pt-28 lg:pb-24"
    >
      <Container>
        <h1
          id="hero-heading"
          className="text-display leading-[0.9] font-bold tracking-[-0.045em] [font-stretch:108%]"
        >
          <span className="block">Firman Aprilian</span>
          <span className="block">Sugiharto</span>
        </h1>

        <div className="mt-10 grid gap-10 md:mt-14 lg:grid-cols-12 lg:gap-x-10">
          <p className="max-w-[24ch] text-lead leading-[1.22] font-medium lg:col-span-7">
            {site.tagline}
          </p>

          <div className="lg:col-span-5">
            <dl className="divide-y divide-rule border-y border-rule text-[15px]">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[5rem_1fr] gap-4 py-3"
                >
                  <dt className="text-ink-3">{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3 *:flex-auto">
              <Button href="#work">See work</Button>
              <Button href={`mailto:${site.email}`} variant="outline">
                Email me
              </Button>
              <Button href={site.cv} variant="outline" download>
                <DownloadIcon className="size-4" />
                Download CV
                <span className="sr-only"> (PDF)</span>
              </Button>
            </div>

            <Badge className="mt-6">Open to fullstack engineer roles</Badge>
          </div>
        </div>
      </Container>
    </section>
  );
}
