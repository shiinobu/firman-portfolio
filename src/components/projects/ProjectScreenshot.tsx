import Image from "next/image";
import type { ProjectScreenshot as ProjectScreenshotType } from "@/types/project";

type ProjectScreenshotProps = {
    screenshot?: ProjectScreenshotType;
    priority?: boolean;
};

export default function ProjectScreenshot({
    screenshot,
    priority = false,
}: ProjectScreenshotProps) {
    if (!screenshot) {
        return (
            <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-border bg-surface">
                <span className="font-mono text-xs tracking-[0.08em] text-foreground-muted uppercase">
                    Project Preview
                </span>
            </div>
        );
    }

    return (
        <figure className="overflow-hidden rounded-xl border border-border bg-surface">
            <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={1600}
                height={1000}
                priority={priority}
                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.01]"
            />

            {screenshot.caption && (
                <figcaption className="border-t border-border px-4 py-3 font-mono text-xs text-foreground-muted">
                    {screenshot.caption}
                </figcaption>
            )}
        </figure>
    );
}