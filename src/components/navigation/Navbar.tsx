import Link from "next/link";

import DesktopNav from "@/components/navigation/DesktopNav";
import MobileNav from "@/components/navigation/MobileNav";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background">
            <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:h-[72px] md:px-8 lg:px-10">
                <Link
                    href="/"
                    className="text-base font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:text-lg"
                >
                    <span className="hidden sm:inline font-mono text-xs font-medium tracking-[0.08em] text-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-sm uppercase">Firman Aprilian Sugiharto</span>
                    <span className="sm:hidden font-mono text-xl font-medium tracking-[0.08em] text-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-sm uppercase">FA</span>
                </Link>

                <DesktopNav />

                <MobileNav />
            </div>
        </header>
    );
}