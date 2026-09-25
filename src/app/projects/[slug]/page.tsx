import Link from "next/link";
import { notFound } from "next/navigation";

import HeartbeatStrip from "@/components/heartbeat/HeartbeatStrip";
import Container from "@/components/layout/Container";
import ArchitectureTrace from "@/components/projects/ArchitectureTrace";
import CaseStudyToc from "@/components/projects/CaseStudyToc";
import ProjectScreenshot from "@/components/projects/ProjectScreenshot";
import ProjectStateTransitions from "@/components/projects/ProjectStateTransitions";
import RequestLog from "@/components/projects/RequestLog";
import Button from "@/components/ui/Button";
import IconLink from "@/components/ui/IconLink";
import InlineList from "@/components/ui/InlineList";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/ui/icons";
import { getProjectBySlug, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const sectionClass =
  "scroll-mt-24 border-t border-rule py-12 first:border-t-0 first:pt-0 md:py-14";
const headingClass = "text-2xl font-semibold tracking-[-0.02em] md:text-3xl";
const subheadingClass = "text-sm font-medium text-ink-3";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return pageMetadata({
    title: project.title,
    description: project.tagline,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  // The first screenshot (or the request log) opens the page; the rest go to "Screens".
  const galleryScreens = project.requests
    ? project.screenshots
    : project.screenshots.slice(1);
  const collapseGallery = galleryScreens.length > 3;
  const hasHowItWorks = Boolean(
    project.monitoringFlow || project.stateTransitions,
  );

  const toc = [
    { id: "overview", label: "Overview" },
    { id: "approach", label: "Problem and approach" },
    { id: "architecture", label: "Architecture" },
    ...(hasHowItWorks ? [{ id: "how-it-works", label: "How it works" }] : []),
    ...(project.implementation
      ? [{ id: "implementation", label: "Implementation" }]
      : []),
    ...(galleryScreens.length > 0 ? [{ id: "screens", label: "Screens" }] : []),
    { id: "notes", label: "Notes" },
  ];

  const repoPath = project.github.replace("https://github.com/", "");

  return (
    <>
      <Container className="pt-6 pb-12 md:pt-10 md:pb-16">
        <Link
          href="/#work"
          className="link inline-flex min-h-11 items-center gap-2 text-sm text-ink-2"
        >
          <ArrowLeftIcon className="size-4" />
          Work
        </Link>

        <h1 className="mt-8 max-w-[18ch] text-title leading-[1] font-bold tracking-[-0.035em] [font-stretch:108%]">
          {project.title}
        </h1>

        <p className="mt-6 max-w-[40ch] text-lead leading-[1.25] font-medium">
          {project.tagline}
        </p>

        <dl className="mt-10 grid items-baseline gap-x-10 gap-y-3 border-y border-ink py-6 text-[15px] sm:grid-cols-[7rem_1fr]">
          <dt className="text-ink-3">Category</dt>
          <dd>{project.category}</dd>
          <dt className="text-ink-3">Stack</dt>
          <dd>
            <InlineList
              items={project.technologies}
              className="font-mono text-[13px] leading-relaxed"
            />
          </dd>
          <dt className="text-ink-3">Source</dt>
          <dd>
            <IconLink
              href={project.github}
              external
              compact
              className="font-mono text-[13px]"
            >
              {repoPath}
            </IconLink>
          </dd>
        </dl>
      </Container>

      {(project.requests || project.screenshots[0]) && (
        <Container className="pb-12 md:pb-16">
          {project.requests ? (
            <RequestLog
              requests={project.requests}
              caption="Real requests against the local API. The last one is rejected because the disbursement was already processed."
            />
          ) : (
            <ProjectScreenshot
              screenshot={project.screenshots[0]}
              priority
              sizes="(min-width: 1280px) 1120px, 100vw"
            />
          )}
        </Container>
      )}

      <Container className="pb-16 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-10">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-24">
              <CaseStudyToc items={toc} />
            </div>
          </aside>

          <div className="lg:col-span-9">
            <section id="overview" className={sectionClass}>
              <h2 className={headingClass}>Overview</h2>
              <p className="mt-5 max-w-[62ch] text-xl leading-relaxed">
                {project.description}
              </p>

              <h3 className={`mt-10 ${subheadingClass}`}>At a glance</h3>
              <ul className="mt-3 grid gap-x-10 border-t border-rule sm:grid-cols-2">
                {project.technicalHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="border-b border-rule py-2.5 text-[15px] text-ink-2"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            <section id="approach" className={sectionClass}>
              <h2 className={headingClass}>Problem and approach</h2>
              <div className="mt-6 grid gap-8 md:grid-cols-2 md:gap-10">
                <div>
                  <h3 className={subheadingClass}>Problem</h3>
                  <p className="mt-3 text-ink-2">{project.problem}</p>
                </div>
                <div>
                  <h3 className={subheadingClass}>Approach</h3>
                  <p className="mt-3 text-ink-2">{project.solution}</p>
                </div>
              </div>
            </section>

            <section id="architecture" className={sectionClass}>
              <h2 className={headingClass}>Architecture</h2>
              <p className="mt-5 max-w-[62ch] text-ink-2">
                {project.architecture}
              </p>
              {project.architectureFlow && (
                <div className="mt-10">
                  <ArchitectureTrace steps={project.architectureFlow} />
                </div>
              )}
            </section>

            {hasHowItWorks && (
              <section id="how-it-works" className={sectionClass}>
                <h2 className={headingClass}>How it works</h2>

                {project.monitoringFlow && (
                  <>
                    <div className="mt-8 bg-band p-6 text-on-band md:p-8">
                      <HeartbeatStrip rows={1} />
                    </div>

                    <ol className="mt-8 max-w-[62ch] list-decimal space-y-2.5 pl-6 text-ink-2 marker:font-mono marker:text-ink-3">
                      {project.monitoringFlow.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </>
                )}

                {project.stateTransitions && (
                  <>
                    <p className="mt-5 max-w-[62ch] text-ink-2">
                      A disbursement is not an open-ended CRUD record. Each
                      state change is checked against its current status and
                      the role of the user making the request.
                    </p>
                    <div className="mt-8">
                      <ProjectStateTransitions
                        transitions={project.stateTransitions}
                      />
                    </div>
                  </>
                )}
              </section>
            )}

            {project.implementation && (
              <section id="implementation" className={sectionClass}>
                <h2 className={headingClass}>Implementation</h2>
                <dl className="mt-8 border-t border-ink">
                  {project.implementation.map((item) => (
                    <div
                      key={item.title}
                      className="grid gap-2 border-b border-rule py-5 md:grid-cols-[14rem_1fr] md:gap-10"
                    >
                      <dt className="font-semibold">{item.title}</dt>
                      <dd className="max-w-[62ch] text-ink-2">
                        {item.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {galleryScreens.length > 0 && (
              <section id="screens" className={sectionClass}>
                <h2 className={headingClass}>Screens</h2>

                {collapseGallery ? (
                  <details className="group mt-8 border-y border-ink">
                    <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                      <span>Postman captures ({galleryScreens.length})</span>
                      <ArrowRightIcon className="size-4 transition-transform duration-150 group-open:rotate-90" />
                    </summary>
                    <div className="space-y-10 pt-4 pb-8">
                      {galleryScreens.map((screenshot) => (
                        <ProjectScreenshot
                          key={screenshot.src}
                          screenshot={screenshot}
                        />
                      ))}
                    </div>
                  </details>
                ) : (
                  <div className="mt-8 space-y-10">
                    {galleryScreens.map((screenshot) => (
                      <ProjectScreenshot
                        key={screenshot.src}
                        screenshot={screenshot}
                      />
                    ))}
                  </div>
                )}
              </section>
            )}

            <section id="notes" className={sectionClass}>
              <h2 className={headingClass}>Notes</h2>

              <h3 className={`mt-8 ${subheadingClass}`}>Challenges</h3>
              <ul className="mt-3 max-w-[62ch] list-disc space-y-2 pl-5 text-ink-2 marker:text-ink-3">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>

              <h3 className={`mt-10 ${subheadingClass}`}>Status</h3>
              <p className="mt-3 max-w-[62ch] text-ink-2">{project.result}</p>

              <div className="mt-8">
                <Button href={project.github} external>
                  View on GitHub
                </Button>
              </div>
            </section>
          </div>
        </div>
      </Container>

      <section className="border-t border-ink">
        <Container className="flex flex-wrap items-end justify-between gap-6 py-12 md:py-16">
          <div>
            <p className="text-sm text-ink-3">Next project</p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="link mt-2 inline-flex items-center gap-3 text-heading leading-[1.1] font-bold tracking-[-0.02em]"
            >
              {nextProject.title}
              <ArrowRightIcon className="size-6 shrink-0" />
            </Link>
          </div>

          <IconLink href="/#work">All work</IconLink>
        </Container>
      </section>
    </>
  );
}
