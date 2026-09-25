import { ArrowRightIcon } from "@/components/ui/icons";
import type { ProjectStateTransition } from "@/types/project";

type ProjectStateTransitionsProps = {
  transitions: readonly ProjectStateTransition[];
};

export default function ProjectStateTransitions({
  transitions,
}: ProjectStateTransitionsProps) {
  return (
    <ul className="divide-y divide-rule border-y border-ink font-mono text-sm">
      {transitions.map((transition) => {
        const negative = /REJECT|FAIL|DENY/i.test(transition.to);

        return (
          <li
            key={`${transition.from}-${transition.action}-${transition.to}`}
            className="flex flex-wrap items-center gap-x-4 gap-y-1 py-3"
          >
            <span className="w-20 text-ink-3">{transition.action}</span>
            <span>{transition.from}</span>
            <ArrowRightIcon className="size-4 text-ink-3" />
            <span className={negative ? "text-alert" : "text-signal"}>
              {transition.to}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
