export interface ProjectArchitectureNode {
  id: string;
  label: string;
  role: string;
  subtext?: string;
  iconName?: string;
}

export interface ProjectArchitectureEdge {
  from: string;
  to: string;
  label?: string;
}

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  accentColor: string;
  gradient: string;
  summary: string;
  problem: string;
  approach: string;
  architecture: {
    overview: string;
    nodes: ProjectArchitectureNode[];
    edges: ProjectArchitectureEdge[];
  };
  features: {
    title: string;
    description: string;
    tag: string;
  }[];
  technologies: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  results: {
    metric: string;
    label: string;
  }[];
  gitCommits: {
    hash: string;
    title: string;
    description: string;
    date: string;
  }[];
  links?: {
    demo?: string;
    github?: string;
  };
}

export interface TechNodeItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps & Tools" | "Architecture";
  role: string;
  description: string;
  connections: string[];
  level: "Core" | "Advanced" | "Expert";
  icon: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  timeline: string;
}
