import type { ProjectArchitectureStep } from "@/types/project";

type ProjectArchitectureProps = {
    steps: readonly ProjectArchitectureStep[];
};

export default function ProjectArchitecture({
    steps,
}: ProjectArchitectureProps) {
    return (
        <div className="mt-10">
            <div className="overflow-x-auto pb-2">
                <ol className="flex min-w-max items-stretch gap-3">
                    {steps.map((step, index) => (
                        <li key={step.name} className="flex items-center gap-3">
                            <div className="w-56 rounded-xl border border-border bg-surface p-5">
                                <div className="font-mono text-xs text-primary">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <h3 className="mt-3 text-base font-semibold text-foreground">
                                    {step.name}
                                </h3>

                                <p className="mt-3 text-sm leading-[1.6] text-justify text-foreground-secondary">
                                    {step.description}
                                </p>
                            </div>

                            {index < steps.length - 1 && (
                                <span
                                    aria-hidden="true"
                                    className="font-mono text-lg text-primary"
                                >
                                    →
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}