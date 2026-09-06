import Link from "next/link";

import { githubUrl, navigationItems } from "@/config/navigation";

export default function DesktopNav() {
  return (
    <div className="hidden items-center gap-8 md:flex">
      <nav aria-label="Primary navigation">
        <ul className="flex items-center gap-7">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-mono text-xs font-medium tracking-[0.08em] text-foreground-secondary transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary uppercase"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-10 items-center justify-center rounded-lg border border-border px-4 font-mono text-xs font-medium tracking-[0.08em] text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary uppercase"
      >
        GitHub ↗
      </Link>
    </div>
  );
}
