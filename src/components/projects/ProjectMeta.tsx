type ProjectMetaProps = {
    category: string;
};

export default function ProjectMeta({
    category,
}: ProjectMetaProps) {
    return (
        <p className="font-mono text-xs font-medium tracking-[0.08em] text-primary uppercase">
            {category}
        </p>
    );
}