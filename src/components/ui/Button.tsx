import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "sm";
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex select-none items-center justify-center gap-2 rounded-xs font-medium transition-colors duration-150";

const variants = {
  primary: "bg-ink text-paper hover:bg-signal hover:text-on-signal",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
} as const;

const sizes = {
  md: "h-12 px-6 text-[15px]",
  sm: "h-10 px-4 text-sm",
} as const;

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const isPlainAnchor =
    external || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isPlainAnchor) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
