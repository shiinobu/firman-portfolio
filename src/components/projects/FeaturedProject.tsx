import Link from "next/link";

import ProjectScreenshot from "@/components/projects/ProjectScreenshot";
import RequestLog from "@/components/projects/RequestLog";
import IconLink from "@/components/ui/IconLink";
import InlineList from "@/components/ui/InlineList";
import type { Project } from "@/types/project";

type FeaturedProjectProps = {
  project: Project;
  index: number;
};

export default function FeaturedProject({
  project,
  index,
}: FeaturedProjectProps) {
  const reverse = index % 2 === 1;
  const href = `/projects/${project.slug}`;

  return (
    <article className="grid gap-8 border-t border-rule py-12 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:items-start lg:gap-x-12 lg:py-16 lg:first:pt-0">
      <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
        <p className="text-sm text-ink-3">{project.category}</p>

        <h3 className="mt-3 text-heading leading-[1.05] font-bold tracking-[-0.025em]">
          <Link
            href={href}
            className="decoration-signal decoration-2 underline-offset-[0.14em] hover:underline"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-5 max-w-[44ch] text-lg text-ink-2">
          {project.description}
        </p>

        {project.specs && (
          <dl className="mt-8 divide-y divide-rule border-y border-rule font-mono text-[13px]">
            {project.specs.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-[7.5rem_1fr] gap-4 py-2.5"
              >
                <dt className="text-ink-3">{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <InlineList
          items={project.technologies}
          className="mt-6 font-mono text-[13px] leading-relaxed text-ink-3"
        />

        <div className="mt-6 flex flex-wrap gap-x-8">
          <IconLink href={href}>Case study</IconLink>
          <IconLink href={project.github} external>
            GitHub
          </IconLink>
        </div>
      </div>

      <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
        {project.requests ? (
          <RequestLog
            requests={project.requests}
            caption="Real requests against the local API. The last one is rejected because the disbursement was already processed."
          />
        ) : (
          <ProjectScreenshot
            screenshot={project.screenshots[0]}
            priority={index === 0}
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        )}
      </div>
    </article>
  );
}
