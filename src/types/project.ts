export type Project = {
    slug: string;
    title: string;
    category: string;
    tagline: string;
    description: string;
    featured: boolean;
    technologies: readonly string[];
    features: readonly string[];
    problem: string;
    solution: string;
    architecture: string;
    challenges: readonly string[];
    screenshots: readonly string[];
    demo: string;
    github: string;
    result: string;
};