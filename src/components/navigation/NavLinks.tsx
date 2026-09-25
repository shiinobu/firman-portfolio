"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { navigationItems } from "@/config/navigation";

const sectionIds = navigationItems.map((item) => item.href.slice(2));

/** Tracks which home-page section sits in the middle band of the viewport. */
function useActiveSection(enabled: boolean) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        setActiveId(sectionIds.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? activeId : null;
}

export default function NavLinks() {
  const pathname = usePathname();
  const activeId = useActiveSection(pathname === "/");

  // The menu is "open" only for the path it was opened on, so a route change
  // closes it without needing an effect.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        buttonRef.current?.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (
        !panelRef.current?.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        setOpenPath(null);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <>
      <nav aria-label="Primary" className="hidden md:block">
        <ul className="flex items-center gap-8">
          {navigationItems.map((item) => {
            const active = activeId === item.href.slice(2);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "location" : undefined}
                  className={`group relative inline-flex min-h-11 items-center text-[15px] transition-colors duration-150 ${
                    active ? "text-ink" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-2 h-px origin-left bg-ink transition-transform duration-200 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpenPath(open ? null : pathname)}
        className="grid size-11 place-items-center rounded-xs text-ink transition-colors duration-150 hover:bg-paper-2 md:hidden"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? (
          <CloseIcon className="size-6" />
        ) : (
          <MenuIcon className="size-6" />
        )}
      </button>

      {open && (
        <div
          ref={panelRef}
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-ink bg-paper md:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-page px-5 py-2">
            <ul>
              {navigationItems.map((item) => (
                <li
                  key={item.href}
                  className="border-b border-rule last:border-b-0"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpenPath(null)}
                    className="flex min-h-14 items-center text-lg font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
