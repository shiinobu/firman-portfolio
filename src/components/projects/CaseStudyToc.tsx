"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  label: string;
};

type CaseStudyTocProps = {
  items: readonly TocItem[];
};

export default function CaseStudyToc({ items }: CaseStudyTocProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const current = items.find((item) => visible.has(item.id));
        if (current) setActiveId(current.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );

    for (const item of items) {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page">
      <ul className="border-l border-rule">
        {items.map((item) => {
          const active = activeId === item.id;

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active ? "location" : undefined}
                className={`-ml-px block min-h-9 border-l py-1.5 pl-4 text-sm transition-colors duration-150 ${
                  active
                    ? "border-ink font-medium text-ink"
                    : "border-transparent text-ink-3 hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
