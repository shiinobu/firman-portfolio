import type { ReactNode } from "react";

import Container from "./Container";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
  /** "rail" puts the label in a left column, "stacked" puts it above the content. */
  layout?: "rail" | "stacked";
  className?: string;
};

function Label({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="flex items-center gap-3 text-sm font-medium text-ink"
    >
      <span aria-hidden="true" className="size-2 bg-ink" />
      {children}
    </h2>
  );
}

export default function Section({
  id,
  label,
  children,
  layout = "rail",
  className = "",
}: SectionProps) {
  const headingId = `${id}-heading`;

  if (layout === "stacked") {
    return (
      <section
        id={id}
        aria-labelledby={headingId}
        className={`border-t border-ink ${className}`}
      >
        <Container className="py-16 md:py-24 lg:py-28">
          <Label id={headingId}>{label}</Label>
          <div className="mt-10 md:mt-14">{children}</div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t border-ink ${className}`}
    >
      <Container className="grid gap-8 py-16 md:py-24 lg:grid-cols-12 lg:gap-x-10 lg:py-28">
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-24">
            <Label id={headingId}>{label}</Label>
          </div>
        </div>
        <div className="lg:col-span-9">{children}</div>
      </Container>
    </section>
  );
}
