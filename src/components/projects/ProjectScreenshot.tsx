import Image from "next/image";

import type { ProjectScreenshot as ProjectScreenshotType } from "@/types/project";

type ProjectScreenshotProps = {
  screenshot: ProjectScreenshotType;
  priority?: boolean;
  /** Match this to the rendered width, or the browser picks a blurry source. */
  sizes?: string;
};

export default function ProjectScreenshot({
  screenshot,
  priority = false,
  sizes = "(min-width: 1024px) 860px, 100vw",
}: ProjectScreenshotProps) {
  return (
    <figure>
      <div className="overflow-hidden border border-ink bg-surface">
        <a
          href={screenshot.src}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-zoom-in"
        >
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            width={screenshot.width}
            height={screenshot.height}
            priority={priority}
            sizes={sizes}
            quality={85}
            className="h-auto w-full"
          />
          <span className="sr-only">(opens the full-size image in a new tab)</span>
        </a>
      </div>

      {screenshot.caption && (
        <figcaption className="mt-3 max-w-[70ch] text-sm text-ink-3">
          {screenshot.caption}
        </figcaption>
      )}
    </figure>
  );
}
