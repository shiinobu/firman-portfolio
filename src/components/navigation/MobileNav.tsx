"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { githubUrl, navigationItems } from "@/config/navigation";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <div className="md:hidden">
            <button
                type="button"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsOpen((open) => !open)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-border text-foreground-secondary transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
                <span className="sr-only">
                    {isOpen ? "Close menu" : "Open menu"}
                </span>

                <span className="flex flex-col gap-1.5">
                    <span
                        className={`block h-px w-5 bg-current transition-transform duration-200 ${isOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                    />

                    <span
                        className={`block h-px w-5 bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : ""
                            }`}
                    />

                    <span
                        className={`block h-px w-5 bg-current transition-transform duration-200 ${isOpen ? "-translate-y-1.5 -rotate-45" : ""
                            }`}
                    />
                </span>
            </button>

            {isOpen && (
                <div className="absolute inset-x-0 top-full border-b border-border bg-background px-5 py-5">
                    <nav aria-label="Mobile navigation" className="border-t border-border bg-background">
                        <ul className="flex flex-col gap-1">
                            {navigationItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="block border-b border-border-soft py-4 font-mono text-sm font-medium tracking-[0.08em] text-foreground-secondary transition-colors duration-200 hover:text-primary uppercase"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                            className="mt-4 flex min-h-11 items-center justify-center rounded-lg border border-border px-4 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary uppercase"
                        >
                            GitHub ↗
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
}