import type { ProjectStateTransition } from "@/types/project";

type ProjectStateTransitionsProps = {
    transitions: readonly ProjectStateTransition[];
};

export default function ProjectStateTransitions({
    transitions,
}: ProjectStateTransitionsProps) {
    return (
        <div className="mt-10 grid gap-4 md:grid-cols-2">
            {transitions.map((transition) => (
                <div
                    key={`${transition.from}-${transition.action}-${transition.to}`}
                    className="rounded-xl border border-border bg-surface p-6"
                >
                    <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
                        <span className="rounded-md border border-border px-3 py-1.5 text-foreground-secondary">
                            {transition.from}
                        </span>

                        <span
                            aria-hidden="true"
                            className="text-primary"
                        >
                            →
                        </span>

                        <span className="rounded-md border border-primary px-3 py-1.5 text-primary">
                            {transition.to}
                        </span>
                    </div>

                    <p className="mt-4 font-mono text-xs tracking-[0.06em] text-foreground-muted uppercase">
                        Action: {transition.action}
                    </p>
                </div>
            ))}
        </div>
    );
}