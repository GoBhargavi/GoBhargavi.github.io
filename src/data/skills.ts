interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillCategory {
  name: string;
  description: string;
  featured?: boolean;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Architecture',
    description: 'Scalable UI systems and modern frameworks',
    featured: true,
    skills: [
      { name: 'React', icon: 'SiReact', color: '#61DAFB' },
      { name: 'Angular', icon: 'SiAngular', color: '#DD0031' },
      { name: 'Next.js', icon: 'SiNextdotjs', color: '#FFFFFF' },
      { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
      { name: 'Vue', icon: 'SiVuedotjs', color: '#4FC08D' },
      { name: 'Tailwind', icon: 'SiTailwindcss', color: '#06B6D4' },
    ]
  },
  {
    name: 'Backend & APIs',
    description: 'Robust server-side solutions at scale',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
      { name: 'Python', icon: 'SiPython', color: '#3776AB' },
      { name: 'GraphQL', icon: 'SiGraphql', color: '#E10098' },
      { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
      { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
      { name: 'FastAPI', icon: 'SiFastapi', color: '#009688' },
    ]
  },
  {
    name: 'Cloud & DevOps',
    description: 'Infrastructure and deployment automation',
    skills: [
      { name: 'AWS', icon: 'SiAmazonwebservices', color: '#FF9900' },
      { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
      { name: 'Kubernetes', icon: 'SiKubernetes', color: '#326CE5' },
      { name: 'GitHub Actions', icon: 'SiGithubactions', color: '#2088FF' },
      { name: 'Terraform', icon: 'SiTerraform', color: '#844FBA' },
      { name: 'Vercel', icon: 'SiVercel', color: '#FFFFFF' },
    ]
  },
];

// Keep legacy export for backwards compatibility
export const skills: Skill[] = skillCategories.flatMap(cat => cat.skills);
