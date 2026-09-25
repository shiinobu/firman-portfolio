export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type ProjectArchitectureStep = {
  name: string;
  description: string;
  /** How the request reaches this step from the previous one (protocol, event or interval). */
  via?: string;
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

export type ProjectSpec = {
  label: string;
  value: string;
};

export type ProjectRequest = {
  method: string;
  path: string;
  status: number;
  statusText: string;
  note: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  featured: boolean;

  technologies: readonly string[];
  technicalHighlights: readonly string[];

  /** Short label/value pairs shown on featured cards. */
  specs?: readonly ProjectSpec[];

  problem: string;
  solution: string;
  architecture: string;

  architectureFlow?: readonly ProjectArchitectureStep[];
  monitoringFlow?: readonly string[];
  implementation?: readonly ProjectImplementation[];
  stateTransitions?: readonly ProjectStateTransition[];
  /** Real requests captured from the running API. */
  requests?: readonly ProjectRequest[];

  challenges: readonly string[];

  screenshots: readonly ProjectScreenshot[];

  demo?: string;
  github: string;

  result: string;
};
