import Link from "next/link";

import { ArrowRightIcon } from "@/components/ui/icons";
import type { Project } from "@/types/project";

type ProjectRowProps = {
  project: Project;
};

export default function ProjectRow({ project }: ProjectRowProps) {
  return (
    <li className="border-b border-rule last:border-b-0">
      <Link
        href={`/projects/${project.slug}`}
        className="group grid gap-x-10 gap-y-2 py-6 transition-colors duration-150 hover:bg-paper-2 md:-mx-3 md:grid-cols-12 md:items-baseline md:px-3"
      >
        <span className="flex items-center gap-2 text-xl font-semibold tracking-[-0.01em] md:col-span-4">
          {project.title}
          <ArrowRightIcon className="size-4 shrink-0 transition-transform duration-150 group-hover:translate-x-1" />
        </span>
        <span className="text-ink-2 md:col-span-5">{project.tagline}</span>
        <span className="font-mono text-[13px] text-ink-3 md:col-span-3">
          {project.technologies.slice(0, 4).join(" / ")}
        </span>
      </Link>
    </li>
  );
}
