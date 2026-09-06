type ProjectTagsProps = {
    technologies: readonly string[];
};

export default function ProjectTags({
    technologies,
}: ProjectTagsProps) {
    return (
        <ul className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
                <li
                    key={technology}
                    className="rounded-md border border-border bg-background-soft px-3 py-1.5 font-mono text-xs text-foreground-muted"
                >
                    {technology}
                </li>
            ))}
        </ul>
    );
}