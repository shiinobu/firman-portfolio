import Image from "next/image";

type ProjectScreenshotProps = {
    src?: string;
    alt: string;
};

export default function ProjectScreenshot({
    src,
    alt,
}: ProjectScreenshotProps) {
    if (!src) {
        return (
            <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-border bg-surface">
                <span className="font-mono text-xs tracking-[0.08em] text-foreground-muted uppercase">
                    Project Preview
                </span>
            </div>
        );
    }

    return (
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface">
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
            />
        </div>
    );
}