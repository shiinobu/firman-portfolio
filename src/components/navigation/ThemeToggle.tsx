"use client";

import { MoonIcon, SunIcon } from "@/components/ui/icons";

/**
 * Flips data-theme on <html> and remembers the choice. The icon and label are
 * swapped with CSS, so nothing depends on client state and there is no
 * hydration mismatch.
 */
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;

    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked; the theme still applies for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="grid size-11 place-items-center rounded-xs text-ink-2 transition-colors duration-150 hover:bg-paper-2 hover:text-ink"
    >
      <span className="sr-only dark:hidden">Switch to dark theme</span>
      <span className="sr-only hidden dark:inline">Switch to light theme</span>
      <MoonIcon className="size-5 dark:hidden" />
      <SunIcon className="hidden size-5 dark:block" />
    </button>
  );
}
