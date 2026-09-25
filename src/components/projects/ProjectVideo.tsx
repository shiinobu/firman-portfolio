import type { ProjectVideo as ProjectVideoType } from "@/types/project";

type ProjectVideoProps = {
  video: ProjectVideoType;
};

/** A short screen recording. Nothing loads or plays until the visitor presses play. */
export default function ProjectVideo({ video }: ProjectVideoProps) {
  return (
    <figure>
      <div className="overflow-hidden border border-ink bg-surface">
        <video
          controls
          playsInline
          preload="none"
          poster={video.poster}
          width={video.width}
          height={video.height}
          aria-label={video.alt}
          className="block h-auto w-full"
          style={{ aspectRatio: `${video.width} / ${video.height}` }}
        >
          {video.sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
          <a href={video.sources[0].src}>Download the recording</a>
        </video>
      </div>

      {video.caption && (
        <figcaption className="mt-3 max-w-[70ch] text-sm text-ink-3">
          {video.caption}
        </figcaption>
      )}
    </figure>
  );
}
