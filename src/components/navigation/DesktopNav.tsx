import Link from "next/link";

import { githubUrl, navigationItems } from "@/config/navigation";

export default function DesktopNav() {
    return (
        <div className="hidden items-center gap-8 md:flex">
            <nav aria-label="Main navigation">
                <ul className="flex items-center gap-7">
                    {navigationItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="text-sm font-medium text-foreground-secondary transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary uppercase"
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
                className="inline-flex min-h-10 items-center rounded-lg border border-border px-4 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary uppercase"
            >
                GitHub ↗
            </Link>
        </div>
    );
}