export type ProjectScreenshot = {
    src: string;
    alt: string;
    caption?: string;
};

export type ProjectArchitectureStep = {
    name: string;
    description: string;
};

export type ProjectImplementation = {
    title: string;
    description: string;
};

export type ProjectStateTransition = {
    from: string;
    action: string;
    to: string;
};

export type Project = {
    slug: string;
    title: string;
    category: string;
    tagline: string;
    description: string;
    featured: boolean;

    technologies: readonly string[];
    features: readonly string[];
    technicalHighlights: readonly string[];

    problem: string;
    solution: string;
    architecture: string;

    architectureFlow?: readonly ProjectArchitectureStep[];
    monitoringFlow?: readonly string[];
    implementation?: readonly ProjectImplementation[];
    stateTransitions?: readonly ProjectStateTransition[];

    challenges: readonly string[];

    screenshots: readonly ProjectScreenshot[];

    demo?: string;
    github: string;

    result: string;
};