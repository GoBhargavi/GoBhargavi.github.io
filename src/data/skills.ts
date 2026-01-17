
interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'AI & Backend',
    description: 'Core languages, frameworks, and AI technologies',
    skills: [
      { name: 'Generative AI', icon: 'SiOpenai', color: '#412991' },
      { name: 'Node.js', icon: 'SiNodedotjs', color: '#339933' },
    ]
  },
  {
    name: 'Frontend',
    description: 'Modern UI frameworks and languages',
    skills: [
      { name: 'React', icon: 'SiReact', color: '#61DAFB' },
      { name: 'Angular', icon: 'SiAngular', color: '#DD0031' },
      { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
    ]
  },
  {
    name: 'DevOps & Deployment',
    description: 'Containerization and orchestration',
    skills: [
      { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
    ]
  }
];

// Keep legacy export for backwards compatibility
export const skills: Skill[] = skillCategories.flatMap(cat => cat.skills);
