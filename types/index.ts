export type Project = {
  slug: string;
  title: string;
  featured: boolean;
  priority: number;
  status: "completed" | "active" | "archived";
  year: number;
  shortDescription: string;
  description: string;
  stack: string[];
  highlights: string[];
  thumbnail: string;
  github?: string;
  demo?: string;
  screenshots?: string[];
  caseStudy?: {
    motivation: string;
    challenges: string[];
    architecture: string[];
    lessons: string[];
  };
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  description: string[];
  location?: string;
  university?: string;
  availableForWork: boolean;
  email: string;
};

export type Social = {
  label: string;
  href: string;
};

export type Experience = {
  year: string;
  title: string;
  company?: string;
  position?: string;
  description: string;
  highlights: string[];
};

export type TechStackCategory = {
  label: string;
  items: TechStack[];
};

type TechStack = {
  label: string;
};
