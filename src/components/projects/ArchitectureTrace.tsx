import type { ProjectArchitectureStep } from "@/types/project";

type ArchitectureTraceProps = {
  steps: readonly ProjectArchitectureStep[];
};

/**
 * The request path drawn like a trace: one hop per row, joined by a dashed
 * line. It never overflows horizontally, at any width.
 */
export default function ArchitectureTrace({ steps }: ArchitectureTraceProps) {
  return (
    <ol className="space-y-8">
      {steps.map((step, index) => {
        const isFirst = index === 0;
        const isLast = index === steps.length - 1;

        return (
          <li
            key={step.name}
            className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4 gap-y-1 md:grid-cols-[1.25rem_12rem_minmax(0,1fr)_11rem] md:gap-x-6"
          >
            <span
              aria-hidden="true"
              className="relative row-span-3 flex justify-center md:row-span-1"
            >
              <span
                className={`relative z-10 mt-2 block size-2.5 border border-ink ${
                  isLast ? "bg-ink" : "bg-paper"
                }`}
              />
              {!isLast && (
                <span className="absolute top-4 -bottom-8 left-1/2 w-px -translate-x-1/2 border-l border-dashed border-ink-3" />
              )}
            </span>

            <p className="col-start-2 font-semibold">{step.name}</p>
            <p className="col-start-2 text-ink-2 md:col-start-3">
              {step.description}
            </p>
            {step.via && !isFirst && (
              <p className="col-start-2 font-mono text-xs break-words text-ink-3 md:col-start-4 md:pt-1">
                {step.via}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
