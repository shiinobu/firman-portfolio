import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

/** A live-status label: a pulsing signal dot followed by text. */
export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-sm text-ink-2 ${className}`}
    >
      <span
        aria-hidden="true"
        className="size-2 animate-beat rounded-full bg-signal"
      />
      {children}
    </span>
  );
}
