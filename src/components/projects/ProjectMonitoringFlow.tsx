type ProjectMonitoringFlowProps = {
    steps: readonly string[];
};

export default function ProjectMonitoringFlow({
    steps,
}: ProjectMonitoringFlowProps) {
    return (
        <ol className="mt-10 space-y-0">
            {steps.map((step, index) => (
                <li
                    key={step}
                    className="relative flex gap-5 pb-8 last:pb-0"
                >
                    {index < steps.length - 1 && (
                        <span
                            aria-hidden="true"
                            className="absolute left-[15px] top-8 h-full w-px bg-border"
                        />
                    )}

                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary bg-background-soft font-mono text-xs text-primary">
                        {index + 1}
                    </span>

                    <div className="pt-1">
                        <p className="text-base leading-[1.7] text-justify text-foreground-secondary md:text-lg">
                            {step}
                        </p>
                    </div>
                </li>
            ))}
        </ol>
    );
}