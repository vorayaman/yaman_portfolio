
export interface Project {
  id: string;
  title: string;
  description: string;
  company: string;
  tags: string[];
  features: string[];
  icon: string;
  workflow?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  projects: string[];
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}
