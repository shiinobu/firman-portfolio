import Link from "next/link";

import NavLinks from "@/components/navigation/NavLinks";
import ThemeToggle from "@/components/navigation/ThemeToggle";
import { site } from "@/config/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 md:px-8 lg:px-10">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-[15px] font-semibold tracking-[-0.01em]"
        >
          {site.name}
        </Link>

        <div className="flex items-center gap-1 md:gap-6">
          <NavLinks />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
