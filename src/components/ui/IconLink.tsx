import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/icons";

type IconLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  /** Drop the 44px tap-target height, for links that sit inline with other text. */
  compact?: boolean;
  className?: string;
};

/** A text link with a trailing arrow that nudges on hover. */
export default function IconLink({
  href,
  children,
  external = false,
  compact = false,
  className = "",
}: IconLinkProps) {
  const classes = `group inline-flex items-center gap-2 font-medium ${
    compact ? "" : "min-h-11"
  } ${className}`;
  const label = <span className="link">{children}</span>;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {label}
        <ArrowUpRightIcon className="size-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
      <ArrowRightIcon className="size-4 transition-transform duration-150 group-hover:translate-x-1" />
    </Link>
  );
}
